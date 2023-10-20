//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${choice}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.word-name').innerText = data.word;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

