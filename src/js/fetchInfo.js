/* 
 *
 * function with then() and catch() to fetch data from the API
 *
 * export function fetchAndOutputTranslation(language, mathWord) {
  let outputElement = document.querySelector('#output');
  fetch(`https://mathcoach.htwsaar.de/online-glossary/api/translation/?origin=${language}&word=${mathWord}&target=*`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("There was an error calling the API");
      }   
    })
    .then(jsonOutput => {
      let output = "";
      if (jsonOutput.target.length === 0) {
        output += "<p>Es scheint, dass es keine Übersetzung für Ihr Wort gibt. Bitte überprüfen Sie, dass Ihr Eintrag korrekt ist.</p>";
      } else {
        output += `<h1>${mathWord}</h1>`;
        jsonOutput.target.forEach(entry => {
          output += `<p>(<strong>${entry.language}</strong>) : ${entry.phrases[0].text  }</p>`;
        });
      }
      outputElement.innerHTML = output;
    })
    .catch(error => {
      console.error(error.message);
    });
} */

/* 
 * function with async and await to fetch data from the API
 */

export async function fetchAndOutputTranslation(language, mathWord) {
  try {
    let response = await fetch(`https://mathcoach.htwsaar.de/online-glossary/api/translation/?origin=${language}&word=${mathWord}&target=*`);
    if (!response.ok) {
      throw new Error("There was an error calling the API");
    }
    let jsonOutput = await response.json();
    return jsonOutput;
  } catch (error) {
    console.error(error.message);
  }
}
export function outputFetchedJson(jsonOutput, mathWord) {
  let outputElement = document.querySelector('#output');
  let output = '';

  if (jsonOutput.target.length === 0) {
    output += '<p>Es scheint, dass es keine Übersetzung für Ihr Wort gibt. Bitte überprüfen Sie, dass Ihr Eintrag korrekt ist.</p>';
  } else {
    output += `<h1>${mathWord}</h1>`;
    jsonOutput.target.forEach(entry => {
      output += `<p>(<strong>${entry.language}</strong>) : ${entry.phrases[0].text }</p>`;
    });
  }

  // Create a new element and append it to the output element
  let newElement = document.createElement('div');
  newElement.innerHTML = output;
  outputElement.replaceChildren(newElement);
}
