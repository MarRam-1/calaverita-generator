function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#text-input");
  let apiKey = "e439o7e5c26cc43ac0tef7fd04f093b8";
  let prompt = `Generate a calaverita literaria about ${instructionsInput.value}`;
  let context =
    "You are an expert on calaveritas literarias, your mision is to generate a 8 line calaverita in basic HTML, without saying is html, and separate each line with <br /> and separate each paragraph with double <br /> , sign the calaverita with 'SheCodesAI' inside a <strong> element at the end of the calaverita.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);

  let poemElement = document.querySelector("#poem");
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
