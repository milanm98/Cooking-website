import torta from "../tortamaline.jpg";

function NewestMeal(){
    return(
        <main>
            <div className="font-serif text-2xl my-5 text-center md:text-5xl text-black bg-white font-black">
                Najnovije : 
            </div>

            <div className="flex flex-col items-center font-serif content-center justify-center w-full h-auto">
                <div className="flex flex-col md:flex-row flex-grow">
                    <img src={torta}
                     alt = "slika torte sa malinama"
                     className="float-none md:float-left p-6"></img>
                    
                    <p className=" text-center text-1xl md:text-5xl">
                        <strong><em>Raspberry cake</em></strong><br></br><br></br>
                        Sastojci :<br></br>
                        1l jogurta<br></br>
                        300g malina ili nekog drugog voca<br></br>
                        700g petit keksa<br></br>
                        250g kristal secera<br></br>
                        300g slag krema<br></br>
                        aroma maline
                        </p>
                    
                </div>

                <div className="flex flex-col items-center cursive content-center justify-center w-full h-auto">
                    <p className="font-serif text-2xl my-5 text-center md:text-5xl text-black bg-white font-black">Izgleda dobro? 
                        <br></br><br></br><br></br>

                        Pogledajte kako se pravi 
                    </p>
                    <iframe
                        src="https://www.youtube.com/embed/5NLd0SFiD74"
                        className="w-full h-screen p-6 md:p-16"
                        controls
                        title="tutorial"
                        >
                    </iframe>
                </div>
            </div>
        </main>
    )
}

export default NewestMeal;