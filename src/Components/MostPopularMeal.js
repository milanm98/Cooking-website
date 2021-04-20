import snicla from "../snicla.jpg";

function MostPopularMeal(){
    return(
        <main>

             <div className="font-serif text-2xl my-5 text-center md:text-5xl text-black bg-white font-black">
                    Najpopularnije : 
            </div>    

             <div className="flex flex-col items-center font-serif content-center justify-center w-full h-auto">
                <div className="flex flex-col md:flex-row">
                         <img src={snicla}
                     alt = "slika snicli"
                     className="float-none md:float-left p-6"></img>
                        
                        <p className="w-1/2 h-full text-center text-1xl md:text-5xl">
                            <strong><em>Lovacke snicle</em></strong><br></br><br></br>
                            Sastojci :<br></br>
                            14 snicli<br></br>
                            1kg krompira<br></br>
                            6 kasika brasna<br></br>
                            2 cesnja belog luka<br></br>
                            1.5l vode<br></br>
                            mleko<br></br>
                            so<br></br>
                            vegeta<br></br>
                            biber<br></br>
                            </p>
                        
                </div>

                <div className="flex flex-col items-center cursive content-center justify-center w-full h-auto">
                        <p className="font-serif text-2xl my-5 text-center md:text-5xl text-black bg-white font-black">Svidja Vam se? 
                            <br></br><br></br><br></br>

                            Probajte sami da napravite 
                        </p>
                        <iframe
                            src="https://www.youtube.com/embed/W9kOcFYZj4c"
                            className="w-full h-screen p-6"
                            controls
                            title="tutorial"
                            >
                        </iframe>
                    </div>
            </div>

        </main>
    )
}


export default MostPopularMeal;