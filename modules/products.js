import{fetchTheShit} from "./modules/fetch.js";
class gamingComputer {
    constructor(model, price, headText, infoText, quantity){
        this.model=model;
        this.price=price;
        this.headText=headText;
        this.infoText=infoText;
        // this.img = img;
        this.quantity = quantity;
    }
    getQuantity()
    {
        
    }

}

const hpOmen = new gamingComputer(
    fetchtheshit.d.name,
    fetchtheshit.d.price,
    fetchtheshit.d.headText,
    fetchtheshit.d.infoText,
    fetchtheshit.d.quantity
    );

const msiKatana = new gamingComputer(
    d.name,
    d.price,
    d.headText,
    d.infoText,
    d.quantity
    );

const msiGp = new gamingComputer(
    d.name,
    d.price,
    d.headText,
    d.infoText,
    d.quantity
    );

const lenovoIdeaPad = new gamingComputer(
    d.name,
    d.price,
    d.headText,
    d.infoText,
    d.quantity
    );

const AsusROG = new gamingComputer(
    d.name,
    d.price,
    d.headText,
    d.infoText,
    d.quantity
    );

export{gamingComputer};