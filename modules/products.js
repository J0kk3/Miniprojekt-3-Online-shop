import {fetchTheShit} from "./fetch.js"
// fetchTheShit()
// fetchTheShit()
class gamingComputer {
    constructor(model, price, headText, infoText, img, quantity) {
            this.model = model;
            this.price = price;
            this.headText = headText;
            this.infoText = infoText;
            this.img = img;
            this.quantity = quantity;
    }
    tryHP(){
        console.log(this.model + ' Benny e cool som fan');
        // for (const i in d) {
        for (let i=0; i<1; i++) {
            const productsDiv = document.querySelector(".products");

            const div = document.createElement("div");
            productsDiv.appendChild(div);

            const model = document.createElement("p");
            div.appendChild(model);
            model.innerText = "!!!!!!Kommer ifrån Products.js !!" + this.model;

            const infoText = document.createElement("p");
            div.appendChild(infoText);
            infoText.innerText = this.infoText;

            const price = document.createElement("p");
            div.appendChild(price);
            price.innerText = `Pris: ${this.price}kr`;

            const quantity = document.createElement("p");
            div.appendChild(quantity);
            quantity.innerText = `Lagersaldo: ${this.quantity}st`;

            const img = document.createElement("img");
            div.appendChild(img);
            img.src = this.img;
        }
    }
    tryMsiKatana(){
        for (let i=0; i<this.infoText.length; i++) {
            const productsDiv = document.querySelector(".products");
            // console.log(i, d[i]);
            //create the div-container for the products and append it to the .products-div
            const div = document.createElement("div");
            productsDiv.appendChild(div);

            const infoText = document.createElement("p");
            div.appendChild(infoText);
            infoText.innerText = this.infoText + 'Benny e för jävla cool asså TVÅÅÅ';
        }
    }




}



const hpOmen = new gamingComputer(
        'HP Omen heeeeelveteeeeeeeee',
        6995,
        'HP Omen 16-c0825no 16" bärbar dator för gaming',
        'HP Omen 16-c0825no 16" bärbar dator för gaming med en AMD Ryzen™ 7 5800H-mobilprocessor och NVIDIA GeForce RTX-grafik som gör att du kan spela krävande spel utan problem. 16" FHD IPS-processorn med 144 Hz uppdateringsfrekvens ger otroliga bilder.',
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNhwYflnc2wda0ha5ALIixYzFJR6VSrXwrOP2lpVQiI4e8hRe3PDcMHfQTCnpukzXz9lrZy3nEBmyUaHHnXmcDAHh_agvr51yC5mj4BQA&usqp=CAc',
        10
);

    
const msiKatana = new gamingComputer(
        'MSI Katana',
        7999,
        'MSI Katana GF66 11UE 15.6" bärbar dator för gaming i5/16/512/3060/15-144',
        'Nya MSI Katana GF66 11UE 15,6" bärbar dator för gaming ger dig seriös gaming power i en bärbar kropp. Datorn är utrustad med en snabb Intel Core i5-11400H-processor och nästa generations Nvidia GeForce RTX 3060 grafikkort.',
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRi3uva8i0zt8YZWC90KMRyxU3nGQmQkO0aYoQXQXD1JZBBITaLFUr7LvD2PuEucKDVIui75TdVtDUWTRmTOIAAjerzwNQ3VBSYddJkFMM&usqp=CAc',
        8
);
// msiKatana.tryMsiKatana()

const msiGp = new gamingComputer(
        'MSI GP66 Leopard',
        10999,
        'MSI GP66 Leopard 11UH-226NEU 15.6" bärbar dator för gaming',
        'Med MSI GP66 Leopard 11UH-226NEU 15.6" bärbar dator för gaming, utrustad med 11:e Gen. Intel®-processor och Nvidia RTX 3080-grafik, kan du kasta dig direkt in i stridens hetta. 240 Hz uppdateringsfrekvensen säkerställer smidig bildöverföring.',
        '<img src="img/msi-gp66.jpg" alt="MSI GP">',
        12
);
    
const lenovoIdeaPad = new gamingComputer(
        'Lenovo IdeaPad Gaming 3',
        5999,
        'Lenovo IdeaPad Gaming 3 15.6" bärbar dator för gaming LE82EY00VJMX',
        'Lenovo IdeaPad Gaming 3 15.6" bärbar dator för gaming, driven av AMD Ryzen™ 5 4600H-processorn och NVIDIA GTX-grafik, ger utmärkt prestanda utan att kompromissa. Den stödjs av en skärm med 120 Hz uppdateringsfrekvens för smidiga bilder hela tiden.',
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRC1dECflCaDPNqBpEj3B1wboFqomHgPpkhf2WVUeTULDm9NlazWLNQGT26GA2PrRBDHnKTip8ISIQZrvj9kUqbn-RZfsBBXkLYHqObwgA&usqp=CAc',
        16
);
    
const AsusROG = new gamingComputer(
        'Asus ROG Zephyrus',
        7999,
        'Asus ROG Zephyrus G14 14" bärbar dator för gaming R9/16/1024/3050Ti/14-120',
        'Med Asus ROG Zephyrus G14 14" bärbar dator för gaming får du en solid spelmaskin i en superkompakt formfaktor som kommer redo för att stödja din spelpassion under en lång tid med otrolig grafik och lång batteritid.',
        '<img src="img/asus-rog.jpg" alt="ASUS Rog">',
        7
);

hpOmen.tryHP();
msiKatana.tryHP();
msiGp.tryHP();
lenovoIdeaPad.tryHP();
AsusROG.tryHP();

    export { gamingComputer};







        // fetchMyBiatchUp() {
        //     console.log("fungerar nåt skit alls?")

        //     const uploadFetch = {
        //         headText: this.headText,
        //         img: this.img,
        //         infoText: this.infoText,
        //         model: this.model,
        //         price: this.price,
        //         quantity: this.quantity
        //     }
        
        //     const headerObject = {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        
        //     const init = {
        //         method: "PATCH",
        //         body: JSON.stringify(uploadFetch),
        //         headers: headerObject
        //     }
        
        //     const url = "https://mproject3-onlineshop-default-rtdb.europe-west1.firebasedatabase.app/.json"
        //     fetch(url, init)
        //         .then(rr => rr.json())
        //         .then(d => {
        //             console.log("vad händer?", d)
                    
        //         })
        
        // }


        //     hpOmen.fetchMyBiatchUp();
//     msiKatana.fetchMyBiatchUp();
//     msiGp.fetchMyBiatchUp();
//     lenovoIdeaPad.fetchMyBiatchUp();
//     AsusROG.fetchMyBiatchUp();




// }

