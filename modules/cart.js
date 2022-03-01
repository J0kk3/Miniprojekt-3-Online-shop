// Functions to handle the cart
import { fetchTheShit } from "./fetch.js";

function cartFunction(productArray)
{
    // document.getElementById("hpOmenQ").innerHTML = "3"
    const btn0 = document.getElementById("btn0")
    const btn1 = document.getElementById("btn1")
    const btn2 = document.getElementById("btn2")
    const btn3 = document.getElementById("btn3")
    const btn4 = document.getElementById("btn4")

    const nrInput0 = document.getElementById("wazzaaap0");
    btn0.addEventListener("click", function()
    {
        console.log('kanpp0')
        console.log(nrInput0);
        productArray[0].quantity - nrInput0.value;
    });
}
export {cartFunction}