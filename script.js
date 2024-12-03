/*
**Descrizione**
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
**Bonus**
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
mostrare le 10 email solo quando solo al termine delle 10 chiamate all’API
*/

const endPoint = "https://flynn.boolean.careers/exercises/api/random/mail"
const generate = document.getElementById('newMails')


for(let i = 0; i < 10;i++){
  axios.get(endPoint)
    .then(response => {
      if(response.data.success){
        email = `<li>${response.data.response}</li>`
        printList(email)
      }
    })
}
  


//BONUS
// printListBonus(getRandomEmails(10))


//FUNCTIONS
function getRandomEmails(quante){
  let email = ''
  for(let i = 0; i < quante; i++){
    axios.get(endPoint)
      .then(response => {
        if(response.data.success){
           email += `<li>${response.data.response}</li>`
        }
      })
  }
  console.log(response.data.success)
  return email
}


function printList(list) {
  document.querySelector('ul').innerHTML += list
}

function printListBonus(list) {
  document.getElementById('ulBonus').innerHTML = list
}