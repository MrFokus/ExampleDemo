const listModal = document.querySelector('.modal-list');
const cardBlock = document.querySelector('.cards');
const arrowList = document.querySelector('.arrow-list');
let modalState = false
let dataInput = []
// const axios = require('axios');
function ShowModalList(){
    if(modalState === false){
        listModal.style.display = "block";
        arrowList.style.transform="rotate(180deg)"
        modalState = true;
        return
    }
    else{
        listModal.style.display = "none";
        arrowList.style.transform="rotate(0deg)"
        modalState = false;
    }
}
async function getData(){
    await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => dataInput = data)
        .catch((error) => console.log(error));
    console.log(dataInput.length)
    for (let i = 0; i < dataInput.length; i++) {
        cardBlock.innerHTML += `<div class="card">
                    <div class="theme-date">
                        <p class="theme">Общество</p>
                        <p class="date">сегодня в 18:30</p>
                    </div>
                    <img src="img/people-statue.png" alt="">
                    <h1>${dataInput[i].title}</h1>
                    <p class="description">Новая достопримечательность появилась в Ельце. Здесь открыли памятник композитору Тихону Хренникову. В этом году исполняется 110 лет со дня его рождения. Двухтонная скульптура полностью из бронзы. Её создал народный художник СССР и России, президент Российской академии художеств Зураб Церетели. Это первая его работа, установленная в Липецкой области.</p>
                </div>`
    }
}
getData()


