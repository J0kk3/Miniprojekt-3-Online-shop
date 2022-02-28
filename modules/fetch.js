// import { gamingComputer } from "../modules/products.js";
import { cartFunction } from "./cart.js";

const serverUrl = "https://mproject3-onlineshop-default-rtdb.europe-west1.firebasedatabase.app/.json";

function fetchTheShit() {
    fetch(serverUrl)
        .then(r => {
            return r.json();
        })
        .then(d => {
            for (const i in d) {
                const productsDiv = document.querySelector(".products");
                // console.log(i, d[i]);
                //create the div-container for the products and append it to the .products-div
                const div = document.createElement("div");
                productsDiv.appendChild(div);

                const headText = document.createElement("p");
                div.appendChild(headText);
                headText.innerText = "!!!!!!!!!!Kommer från fetch.js!!!!!!!!! "+ d[i].headText;
                
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
                howMany.classList.add("wazzaaap" + [i])

                const cartBtn = document.createElement("button");
                const btnText = document.createTextNode("Lägg i varukorgen");
                cartBtn.appendChild(btnText);
                div.appendChild(cartBtn);
                cartBtn.setAttribute("id", "buttonz" + [i])

                console.log('kommer från fetch.js')
                // const hpOmenBtn = document.querySelector("#buttonz0");
                // hpOmenBtn.addEventListener("click", cartFunction);

            }
                function cartFunctionFetch(){
                document.getElementById("hpOmenQ").innerHTML = "3"
            }

            // for(let i=0; i<4; i++){
            //     const cartBtn = document.createElement("button");
            //     const btnText = document.createTextNode("Lägg till i varuköööööööööörgen");
            //     const diven = document.querySelectorAll(".cart")
            //     cartBtn.classList.add("buttonen"[i])
            //     cartBtn.appendChild(btnText);
            //     diven.appendChild(cartBtn)
            // }



        })
};
export { fetchTheShit };