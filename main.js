const generateAdvice = async () => {
  await fetch('https://api.adviceslip.com/advice')
  .then(response => {return response.json()})
  .then(data => {
    document.querySelector('.id').innerText = `ADVICE #${data.slip.id}`
    document.querySelector('.quote').innerText = `❝${data.slip.advice}❞`
  })
  .catch(err => console.log(err))
}

document.querySelector("#dice").addEventListener("click", generateAdvice);