export function fetchAndOutputTranslation(language, mathWord) {
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
        jsonOutput.target.forEach(entry => {
          output += `<h1>${mathWord}</h1>`;
          output += `<p>(<strong>${entry.language}</strong>) : ${entry.phrases[0].text  }</p>`;
        });
      }
      outputElement.innerHTML = output;
    })
    .catch(error => {
      console.error(error.message);
    });
}
