import { gamingComputer } from "../modules/products.js";

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
                for(const i in d)
                    {
                        const productsDiv = document.querySelector(".products");
                        // console.log(i, d[i]);
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
                        price.innerText = `Pris: ${d[i].price}kr`;
                        
                        const quantity = document.createElement("p");
                        div.appendChild(quantity);
                        quantity.innerText = `Lagersaldo: ${d[i].quantity}st`;

                        const img = document.createElement("img");
                        div.appendChild(img);
                        img.src = d[i].img;

                        const howMany = document.createElement("input");
                        howMany.setAttribute("type", "number");
                        howMany.setAttribute("value", "0");
                        howMany.setAttribute("size", "6");
                        howMany.setAttribute("min", "0");
                        div.appendChild(howMany)
                        howMany.classList.add("WASSAA"+[i])

                        const cartBtn = document.createElement("button");
                        const btnText = document.createTextNode("Lägg i varukorgen");
                        cartBtn.appendChild(btnText);
                        div.appendChild(cartBtn);
                        cartBtn.classList.add("theButton"+[i])
                        }
                        // for(let i=0; i<4; i++){
                        //     const cartBtn = document.createElement("button");
                        //     const btnText = document.createTextNode("Lägg till i varuköööööööööörgen");
                        //     const diven = document.querySelectorAll(".cart")
                        //     cartBtn.classList.add("buttonen"[i])
                        //     cartBtn.appendChild(btnText);
                        //     diven.appendChild(cartBtn)
                        // }
                    

                    
})};
export{fetchTheShit};