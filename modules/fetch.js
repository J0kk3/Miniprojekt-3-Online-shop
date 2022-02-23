import { gamingComputer } from "./modules/products";

//En tom firebase just nu
const serverUrl  = "https://mproject3-onlineshop-default-rtdb.europe-west1.firebasedatabase.app/.json";
//#endregion SERVER

fetch(serverUrl)
.then(r=>
        {
            return r.json();
        })
    .then(d=>
        {
            for(const i in d)
                {
                    console.log(i, d[i]);
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
});