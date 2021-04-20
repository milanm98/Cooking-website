import './App.css';
import NewestMeal from "./Components/NewestMeal";
import MostPopularMeal from "./Components/MostPopularMeal";
import { Helmet } from "react-helmet"

function App() {
  return (

     <main>
      <Helmet>
        <title> Moja Kuhinjica </title>
      </Helmet>

      <div className="w-screen h-screen background">
        <div className="flex flex-col float-left">
          <a href="https://www.facebook.com/dragana.jerkov" rel="noreferrer" target="_blank" className="aria mx-10 my-5 fa fa-facebook-square text-white"><p className="hidden">a</p></a>
          <a href="https://www.instagram.com/moja___kuhinjicaa/" rel="noreferrer" target="_blank" className="mx-10 my-5 fa fa-instagram text-white"><p className="hidden">a</p></a>
          <a href="https://www.youtube.com/channel/UCO1Xf0omK274FCE6JEKflMQ/videos" rel="noreferrer" target="_blank" className="mx-10 my-5 fa fa-youtube text-white"><p className="hidden">a</p></a>
          <a href="#najnovije" className="mx-10 my-5 fa fa-angellist text-white"><p className="hidden">a</p></a>
          <a href="#najpopularnije" className="mx-10 my-5 fa fa-line-chart text-white"><p className="hidden">a</p></a>
        </div>
      </div>
      <div className="arrow animate-pulse text-white text-6xl md:text-9xl">
        <span>&dArr;</span>
      </div>
      <div className="content">
        <div>
          <NewestMeal></NewestMeal>
        </div>
        <div>
          <MostPopularMeal></MostPopularMeal> 
        </div>
      </div>
    </main>
  );
}

export default App;
