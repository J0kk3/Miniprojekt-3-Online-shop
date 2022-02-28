//#region instructions
/*
1. minst fem olika produkter
2. För varje produkt ska man kunna välja antal och att lägga till i shoppingbagen
3. Klickar man på shoppingbagen ska man kunna se alla tillagda produkter och den totala kostnaden
4. Man ska även kunna ta bort produkter och välja att genomföra köpet

5.varje produkt ska vara ett objekt skapat utifrån en konstruktor
6. Lägg upp alla produkter på firebase & hämta därifrån
7. Produkt-mallen ska innehålla minst
    Egenskaper
    Namn
    Bild-länk (lokalt eller till en server)
    Pris
    Lagersaldo
8. Metoder
    Uppdatera lagersaldo. Både när man lägger till eller tar bort en produkt ur shoppingbagen.
    Den här metoden ska även varna om man försöker köpa fler produkter än vad som finns på lager.

9. Även shoppingbagen ska vara ett objekt skapat utifrån en konstruktor:
    Egenskaper
    Produkter som lagts till i bagen 
    Metoder
    Lägg till produkt
    Ta bort produkt
    Räkna ut totala summan
    Köp ( tar bara bort alla produkter)

    EXTRA:
    Varje produkt ska ha en mängdrabatt  (tex fler än 3 ger 20%), denna ska vara olika för varje produkt. Kom ihåg att lägga till att räkna på detta i shoppingbagen också.
    När ett köp har genomförts ska saldot uppdateras i Firebase
*/
//#endregion instructions
//#region PLACEHOLDERREGION
//Chain: main.js > fetch.js > product.js
import{fetchTheShit} from "./modules/fetch.js";
import { cartFunction } from "./modules/cart.js";
import {gamingComputer} from "./modules/products.js"
// import {fetchUp} from "./modules/products.js";

// const knappfan = document.querySelector(".buttonz99");
// knappfan.addEventListener("click", fetchUp())

// fetchUp()
fetchTheShit()
gamingComputer
// const hpOmenBtn = document.querySelectorAll("button");

// hpOmenBtn.addEventListener("click", function cartFunction(){
// document.getElementById("hpOmen").innerHTML = "hallå ya africa, tell me haw ya doin"
// })

// hpOmenBtn.addEventListener("click", cartFunction);
// function cartFunction(){
//     document.getElementById("hpOmen").innerHTML = "hallå ya africa, tell me haw ya doin"
// }

// const testBtn = document.querySelector(".buttonz0");
// testBtn.addEventListener("click", cartFunction);


// const hpOmenBtn = document.getElementById("buttonz0")
// hpOmenBtn.addEventListener("click", cartFunctionFetch);


//#endregion PLACEHOLDERREGION

