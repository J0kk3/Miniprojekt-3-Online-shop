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
                        div.className = `${gamingComputer.name+[i]}`;
                        //HeadText
                        const headText = document.createElement("p");
                        div.appendChild(headText);
                        headText.innerText = productArray[i].headText;
                        //InfoText
                        const infoText = document.createElement("p");
                        div.appendChild(infoText);
                        infoText.innerText = productArray[i].infoText;
                        //Price
                        const price = document.createElement("p");
                        div.appendChild(price);
                        price.innerText = `Pris: ${productArray[i].price}kr`;
                        //Quantity
                        const quantity = document.createElement("p");
                        div.appendChild(quantity);
                        quantity.innerText = `Lagersaldo: ${productArray[i].quantity}st`;
                        //Img
                        const img = document.createElement("img");
                        div.appendChild(img);
                        img.src = productArray[i].img;
                        // Input and buttons:
                        const howMany = document.createElement("input");
                        howMany.setAttribute("type", "number");
                        howMany.setAttribute("value", "0");
                        howMany.setAttribute("size", "6");
                        howMany.setAttribute("min", "0");
                        howMany.setAttribute("max", `${productArray[i].quantity}`)
                        div.appendChild(howMany)
                        howMany.classList.add("wazzaaap" + [i])
                        //Buttons
                        const cartBtn = document.createElement("button");
                        const btnText = document.createTextNode("Lägg i varukorgen");
                        cartBtn.appendChild(btnText);
                        div.appendChild(cartBtn);
                        cartBtn.setAttribute("id", "buttonz" + [i])
        
                    }
                    // console.log(productArray);
})};
// fetchTheShit();
export{fetchTheShit};