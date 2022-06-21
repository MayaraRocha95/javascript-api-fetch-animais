const foxResult = document.getElementById('fox_result');
const dogResult = document.getElementById('dog_result');
const foxBtn = document.getElementById('fox_btn');
const dogBtn = document.getElementById('dog_btn');

foxBtn.addEventListener('click', getRandomFox)
dogBtn.addEventListener('click', getRandomDog)

function getRandomFox() {
  fetch('https://randomfox.ca/floof/')
  .then(response => response.json())
  .then(data => {
    foxResult.innerHTML = `<img src="${data.image}">`
  })
}
function getRandomDog() {
  fetch('https://random.dog/woof.json')
  .then(response => response.json())
  .then(data => {
    if(data.url.includes('.mp4')) {
      getRandomDog()
    } else {
      dogResult.innerHTML = `<img src="${data.url}">`
    }
  
  })
}