// https://superheroapi.com/api/access-token/character-id
const superHero_Token = '307875405077174'
const baseURL = `https://superheroapi.com/api.php/${superHero_Token}`

const heroImage = document.getElementById('heroImage')
const randomHeroButton = document.getElementById('randomHero')
randomHeroButton.onclick = () => getRandomHero(randomID())

const randomID = () => {
    let totalHeroId = 731
    return Math.floor(Math.random()*totalHeroId)

}

console.log(randomID());

const getRandomHero = (id) => {
    fetch(`${baseURL}/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.image.url)

            heroImage.innerHTML = `<img src="${data.image.url}" alt="" width=300, height=300>`

        })
}


