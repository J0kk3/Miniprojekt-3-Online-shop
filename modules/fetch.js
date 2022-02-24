import { gamingComputer } from "./modules/products";

//Bennys fetch
const serverUrl = 'https://benjockwebshop-default-rtdb.europe-west1.firebasedatabase.app/.json'

function fetchTheShit(){
    fetch(serverUrl)
        .then(r=> r.json())
        .then(d=> {
            const infoArray = Object.values(d);

            console.log(infoArray)
            // for(i=0; i<5; i++){
            //     const allInfoArray = infoArray[i]

            // }
            // document.getElementById('model0').innerHTML = infoArray[0].headText; 
            document.getElementById('headText0').innerHTML = 'Datormodell:' +infoArray[0].headText; 
            document.getElementById('price0').innerHTML = 'Pris: ' + infoArray[0].price + ' SEK'; 
            document.getElementById('infoText0').innerHTML = 'Information om datorn: '+  infoArray[0].infoText; 
            document.getElementById('quantity0').innerHTML = 'Lagersaldo: ' + infoArray[0].quantity; 
            document.getElementById('img').innerHTML = infoArray[0].img
        })
}
fetchTheShit();
export{fetchTheShit};