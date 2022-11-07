const generateAdvice = async () => {
  await axios.get('https://api.adviceslip.com/advice')
  .then(response => {
    document.querySelector('.id').innerText = `ADVICE #${response.data.slip.id}`
    document.querySelector('.quote').innerText = `❝${response.data.slip.advice}❞`
  })
  .catch(err => console.log(err))
}

document.querySelector("#dice").addEventListener("click", generateAdvice);