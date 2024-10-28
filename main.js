const cards = document.querySelectorAll(".cards");

let matchedCard = 0
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e)
{
   let clickedCard = e.target
   
   if(clickedCard !== cardOne && !disableDeck)
   {
      clickedCard.classList.add("flip")
   
   if(!cardOne)
   {
      // return the cardvalue to clicked card
    return cardOne = clickedCard
   }
   cardTwo = clickedCard
   disableDeck = true
   // console.log(cardOne, cardTwo);
   let cardOneImg = cardOne.querySelector("img").src
   let cardTwoImg = cardTwo.querySelector("img").src
   matchCards(cardOneImg,cardTwoImg)
   }
   
    
}

function matchCards(img1,img2)
{
   // console.log(img1,img2);
   if(img1 === img2)
   {
      matchedCard++
      if(matchedCard == 8)
      {
        setTimeout(()=>
      {
         return shuffleCard();
      },1000)
      }
      cardOne.removeEventListener("click",flipCard)
      cardTwo.removeEventListener("click",flipCard)
      cardOne = cardTwo = "" //setting both card values to blank
      return disableDeck = false;

   }
   // console.log("card not matched");

   // adding shake class to both card after 400ms
   setTimeout(() => {
      cardOne.classList.add("shake")
   cardTwo.classList.add("shake")
   }, 400);


   // removing both shake & flip classes form the both card after 1200ms
   setTimeout(() => {
      cardOne.classList.remove("shake", "flip")
   cardTwo.classList.remove("shake", "flip")
   cardOne = cardTwo = "" //setting both card values to blank
   disableDeck = false;
   }, 1200);

   
}

function shuffleCard()
{
   matchedCard = 0
   cardOne = cardTwo = ""
   let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
   arr.sort(()=>Math.random()>0.5?1:-1)
   cards.forEach((card,index)=> {
      card.classList.remove("flip")
      let imgTag = card.querySelector("img")
      imgTag.src = `assets/img${arr[index]}.png`
      card,addEventListener("click",flipCard)
      })
}

shuffleCard()

cards.forEach(card=> {
    card,addEventListener("click",flipCard)
    })
