export function fetchTranslation(language, mathWord) {
  fetch(`https://mathcoach.htwsaar.de/online-glossary/api/translation/?origin=${language}&word=${mathWord}&target=*`)
    .then(response => {
      if (response.ok) {
        // If the response is successful, then parse the JSON data
        return response.json();
      } else {
        // If the response is not successful, then throw an error
        throw new Error("There was an error calling the API");
      }   
    })  
    .catch(error => {
      // If there is an error, then print the error message
      console.error(error.message);
    });
}

