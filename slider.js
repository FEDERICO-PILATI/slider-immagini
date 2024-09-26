
document.addEventListener("DOMContentLoaded",function()
    {

        let intervallo=setInterval(cambiaVisibile,1500); //setInterval chiama la funzione OGNI 3 SEC


        document.getElementById("slider").addEventListener("mouseenter",function(){
            //quando passo con il mouse sullo slider, il loop si interrompe
            console.log("sei dentro lo slider");
            clearInterval(intervallo);//questo cancella completamente l'intervallo, che dovrà essere ricreato

        });

        document.getElementById("slider").addEventListener("mouseleave",function(){
            console.log("sei uscito dallo slider");
            intervallo=setInterval(cambiaVisibile,1500);//ricreo l'intervallo
        });

    }
);


function cambiaVisibile()
{
    let boxVisibile=document.querySelector(".visibile");
    let boxSuccessivo=boxVisibile.nextElementSibling;//l'elemento fratello e l'elemento HTML successivo, QUALUNQUE tag HTML
    let boxScansati=document.querySelector(".scansati");
    if(boxScansati!=null)
    {
        boxScansati.classList.remove("scansati");
    }
    

    boxVisibile.classList.remove("visibile");
    boxVisibile.classList.add("scansati");
    //potrei anche scrivere boxVisibile.classList.replace("visibile","scansati")

    if(boxSuccessivo!=null) //se c'è un fratello dopo l'elemento con .visibile
    { 
        boxSuccessivo.classList.add("visibile");
    }
    else //se NON c'è un fratello dopo l'elemento con .visibile
    { 
        document.querySelector("#slider .image").classList.add("visibile");
        //queryselector prenderà il primo div di #slider con classe image
    }

}