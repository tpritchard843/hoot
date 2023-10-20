//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', renderDefinitions)

async function getFetch() {
  const choice = document.querySelector('input').value;
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${choice}`);
    let data = await res.json();
    return data;
  }
  catch(err) {
    console.error(err);
  }
}

async function renderDefinitions(){
  let cardsHtml = ``;
  const definitionsArr = await getFetch();
  console.log(definitionsArr);
  definitionsArr.forEach(element => {
    // let definitions = element.meanings[0].definitions[0]
    cardsHtml += `
      <li>
        <h2 class="word">${element.word} (<em>${element.meanings[0].partOfSpeech}</em>)</h2>
			    <p class="definition">${element.meanings[0].definitions[0].definition}</p>
      </li>
    `;

    document.querySelector('#definitionsList').innerHTML = cardsHtml;
  });
}