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

      <div className="w-screen h-screen background"></div>
      <div className="arrow animate-pulse text-white text-6xl md:text-9xl">
        <span>&dArr;</span>
      </div>
      <div className="content">
        <NewestMeal></NewestMeal>
        <MostPopularMeal></MostPopularMeal> 
      </div>
    </main>
  );
}

export default App;
