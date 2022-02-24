import { gamingComputer } from "../modules/products.js";

//Bennys
// const url = 'https://benjockwebshop-default-rtdb.europe-west1.firebasedatabase.app/.json'

// function fetchTheShit(){
//     fetch(url)
//         .then(r=> r.json())
//         .then(d=> {
//             const infoArray = Object.values(d);

//             console.log(infoArray)
//             // for(i=0; i<5; i++){
//             //     const allInfoArray = infoArray[i]

//             // }
//             // document.getElementById('model0').innerHTML = infoArray[0].headText; 
//             document.getElementById('headText0').innerHTML = 'Datormodell:' +infoArray[0].headText; 
//             document.getElementById('price0').innerHTML = 'Pris: ' + infoArray[0].price + ' SEK'; 
//             document.getElementById('infoText0').innerHTML = 'Information om datorn: '+  infoArray[0].infoText; 
//             document.getElementById('quantity0').innerHTML = 'Lagersaldo: ' + infoArray[0].quantity; 
//             document.getElementById('img').innerHTML = infoArray[0].img
//         })
// }
// fetchTheShit();

// //Joakims:
const serverUrl  = "https://mproject3-onlineshop-default-rtdb.europe-west1.firebasedatabase.app/.json";
//#endregion SERVER

function tryItThisWay()
{
    fetch(serverUrl)
    .then(r=>
            {
                return r.json();
            })
        .then(d=>
            {
                for(const i in d)
                    {
                        const productsDiv = document.querySelector(".products");
                        console.log(i, d[i]);
                        //create the div-container for the products and append it to the .products-div
                        const div = document.createElement("div");
                        productsDiv.appendChild(div);
                        const headText = document.createElement("p");
                        div.appendChild(headText);
                        headText.innerText = d[i].headText;
                        const infoText = document.createElement("p");
                        div.appendChild(infoText);
                        infoText.innerText = d[i].infoText;
                        const price = document.createElement("p");
                        div.appendChild(price);
                        price.innerText = d[i].price;
                        const quantity = document.createElement("p");
                        div.appendChild(quantity);
                        quantity.innerText = 2;           //UNUSED
                        const img = document.createElement("img");
                        div.appendChild(img);
                        img.src = d[i].img;
                        /*
                        hämta divarna som infon ska appendas till
                        sätt texten på elementet till d[i]? */
                        // for(let i = 0; i < d.length; i++)
                        // {
                        //     console.log(i, d[i].score);
                        //     if(localScore == d[i].score)
                        //     {
                        //         console.log("Ja, ", Plats);
                        //         Plats[i] = i+1;
                        //     }
                        //     else if(localScore > d[i].score)
                        //     {
                        //         Plats[i] = i;
                        //     }
                        // };
                    }
})};
tryItThisWay();
export{tryItThisWay};