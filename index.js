const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    // fetch(apiUrl)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error))
const container = document.getElementById('imgContainer');
const btn = document.getElementById('getImg');  

function getImage(){
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        let catImg = data[0].url;
        console.log(catImg);
        container.style.backgroundImage = 'url(' + catImg + ')';
    } )
    .catch(error => console.error(error))
}

getImage();

btn.addEventListener('click', ()=>{
    getImage();
})
