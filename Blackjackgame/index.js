// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
   name:"Per",
   chips:200,
}



let cards=[]
let sum = 0 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl=document.getElementById("player-el")
// 4. Render the player's name and chips in playerEl
playerEl.textContent=player.name + " : $" + player.chips

function getRandomCard(){  
   let randomValue=Math.floor(Math.random() *13)+1;
   if (randomValue>10){
      return 10;
   } else if (randomValue===1){
     return 11;
   } else{
      return randomValue
   }

}





function startGame(){
   isAlive=true
   // Generate two random numes
   // Re-assign the cards and sum variables so that the game can start       
   let firstCard=getRandomCard()
   let secondCard=getRandomCard()
   cards=[firstCard, secondCard]
   sum=firstCard + secondCard
   renderGame()
}
function renderGame(){
   cardsEl.textContent= "Cards: "
for (let i=0;i<cards.length;i++){
   cardsEl.textContent += cards[i]+ "  "
}

   sumEl.textContent = "Sum: " + sum
   if (sum <= 20){
       message="Do you want to draw a new card"
   } else if (sum === 21) {
        message="Wohoo ! You've got Blackjack!"  
        hasBlackJack = true
   } else {
        message = "You're out of the game!"
        isAlive = false
      }
   messageEl.textContent = message
}



function newCard(){
   // Only allow the player to get a new card if she IS alive and does NOT have Blackkjack
if (isAlive===true && hasBlackJack===false){
   let card= getRandomCard()
   sum += card
   cards.push(card)
   renderGame()
}}


