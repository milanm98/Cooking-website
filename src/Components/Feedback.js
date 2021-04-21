function Feedback(){
    return(
        <main>
            <div className="p-3 md:p-12 flex flex-col items-center text-white font-black font-serif content-center justify-center w-full">
                <p className="my-5 md:my-8 text-center text-1xl md:text-3xl">Kliknite na link ispod da ostavite komentar, predlog ili sugestiju</p>
                <a className="text-center my-4 md:my-12 text-2xl md:text-4xl underline" href="mailto:marjanovmilan12@gmail.com">Ostavi komentar</a>
                <p className="text-center text-xs mt-12">Sva pitanja i nedoumice mozete poslati mejlom na : jerkov40@gmail.com</p>
            </div>
        </main>
    )
}

export default Feedback;