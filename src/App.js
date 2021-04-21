import './App.css';
import NewestMeal from "./Components/NewestMeal";
import MostPopularMeal from "./Components/MostPopularMeal";
import Galerija from "./Components/Galerija";
import Feedback from "./Components/Feedback";
import { Helmet } from "react-helmet";

function App() {
  return (

     <main>
      <Helmet>
        <title> Moja Kuhinjica </title>
      </Helmet>

      <div className="w-screen h-screen background">
        <div className="flex flex-row md:flex-col float-none md:float-left text-center justify-center">
          <a href="https://www.youtube.com/channel/UCO1Xf0omK274FCE6JEKflMQ/videos" rel="noreferrer" target="_blank" className="text-white mx-4 md:mx-10 my-5 fa fa-youtube text-white"><p className="hidden">a</p></a>
          <a href="https://www.facebook.com/dragana.jerkov" rel="noreferrer" target="_blank" className="text-white mx-4 md:mx-10 my-5 fa fa-facebook-square text-white"><p className="hidden">a</p></a>
          <a href="https://www.instagram.com/moja___kuhinjicaa/" rel="noreferrer" target="_blank" className="text-white mx-4 md:mx-10 my-5 fa fa-instagram text-white"><p className="hidden">a</p></a>
          <a href="#najnovije" className="mx-4 md:mx-10 my-5 fa fa-angellist text-white text-white"><p className="hidden">a</p></a>
          <a href="#najpopularnije" className="mx-4 md:mx-10 my-5 fa fa-line-chart text-white text-white"><p className="hidden">a</p></a>
        </div>
      </div>
      <div className="arrow animate-pulse text-white text-6xl md:text-9xl">
        <span>&dArr;</span>
      </div>
      <div className="content">
        <div id="najnovije">
          <NewestMeal></NewestMeal>
        </div>
        <div id="najpopularnije">
          <MostPopularMeal></MostPopularMeal> 
        </div>
        <div>
          <Galerija></Galerija>
        </div>
        <div>
          <Feedback></Feedback>
        </div>
      </div>
    </main>
  );
}

export default App;
