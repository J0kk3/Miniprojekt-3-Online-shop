import { gamingComputer } from "./products.js";

const serverUrl  = "https://mproject3-onlineshop-default-rtdb.europe-west1.firebasedatabase.app/.json";

function fetchTheShit()
{
    fetch(serverUrl)
    .then(r=>
            {
                return r.json();
            })
        .then(d=>
            {          
                const productArray = []      
                for(const i in d)
                    {
                        const productsDiv = document.querySelector(".products");
                        // console.log(i, d[i]);
                        productArray.push
                        (
                            new gamingComputer(d[i].name, d[i].price, d[i].headText, d[i].infoText, d[i].img, d[i].quantity )
                        );
                        //create the div-container for the products and append it to the .products-div
                        const div = document.createElement("div");
                        productsDiv.appendChild(div);
                        const headText = document.createElement("p");
                        div.appendChild(headText);
                        headText.innerText = productArray[i].headText;
                        const infoText = document.createElement("p");
                        div.appendChild(infoText);
                        infoText.innerText = productArray[i].infoText;
                        const price = document.createElement("p");
                        div.appendChild(price);
                        price.innerText = `Pris: ${productArray[i].price}kr`;
                        const quantity = document.createElement("p");
                        div.appendChild(quantity);
                        quantity.innerText = `Lagersaldo: ${productArray[i].quantity}st`;
                        const img = document.createElement("img");
                        div.appendChild(img);
                        img.src = productArray[i].img;
                    }
                    // console.log(productArray);
})};
// fetchTheShit();
export{fetchTheShit};