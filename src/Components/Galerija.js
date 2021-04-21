import galerija1 from "../galerija1.png";
import galerija2 from "../galerija2.png";
import galerija3 from "../galerija3.png";
import galerija4 from "../galerija4.png";
import galerija5 from "../galerija5.png";
import galerija6 from "../galerija6.png";

function Galerija(){
    return(
        
        <main>
            <div className="text-white my-5 text-center text-2xl md:text-5xl">
                <p className="my-2"><strong>GALERIJA</strong></p>
                <p className="mx-4">Sve sto vidite u galeriji imate snimak na youtube kako se pravi </p><br></br>
                <p>Uzivajte</p>
            </div>
            <div className="p-3 md:p-12 flex flex-col items-center text-white font-black font-serif content-center justify-center w-full">
                <div className="text-center w-5/6 md:w-1/2">
                    <p className="text-1xl md:text-3xl"><strong><em>Oblande sa plazmom</em></strong></p>
                    <img className="w-full h-32 md:h-96" alt="oblande sa plazmom" src={galerija1}></img>
                </div>
            </div>
            <div className="p-3 md:p-12 flex flex-col items-center text-white font-black font-serif content-center justify-center w-full">
                <div className="text-center w-5/6 md:w-1/2">
                    <p className="text-1xl md:text-3xl"><strong><em>Piletina</em></strong></p>
                    <img className="w-full h-32 md:h-96" alt="oblande sa plazmom" src={galerija2}></img>
                </div>
            </div>
             <div className="p-3 md:p-12 flex flex-col items-center text-white font-black font-serif content-center justify-center w-full">
                <div className="text-center w-5/6 md:w-1/2">
                    <p className="text-1xl md:text-3xl"><strong><em>Plazma kuglice</em></strong></p>
                    <img className="w-full h-32 md:h-96" alt="oblande sa plazmom" src={galerija3}></img>
                </div>
            </div>
             <div className="p-3 md:p-12 flex flex-col items-center text-white font-black font-serif content-center justify-center w-full">
                <div className="text-center w-5/6 md:w-1/2">
                    <p className="text-1xl md:text-3xl"><strong><em>Coko kolac</em></strong></p>
                    <img className="w-full h-32 md:h-96" alt="oblande sa plazmom" src={galerija4}></img>
                </div>
            </div>
             <div className="p-3 md:p-12 flex flex-col items-center text-white font-black font-serif content-center justify-center w-full">
                <div className="text-center w-5/6 md:w-1/2">
                    <p className="text-1xl md:text-3xl"><strong><em>Torta sa malinama</em></strong></p>
                    <img className="w-full h-32 md:h-96" alt="oblande sa plazmom" src={galerija5}></img>
                </div>
            </div>
             <div className="p-3 md:p-12 flex flex-col items-center text-white font-black font-serif content-center justify-center w-full">
                <div className="text-center w-5/6 md:w-1/2">
                    <p className="text-1xl md:text-3xl"><strong><em>Zebra kolac</em></strong></p>
                    <img className="w-full h-32 md:h-96" alt="oblande sa plazmom" src={galerija6}></img>
                </div>
            </div>
        </main>
    )
}

export default Galerija;