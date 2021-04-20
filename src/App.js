import './App.css';
import NewestMeal from "./Components/NewestMeal";
import MostPopularMeal from "./Components/MostPopularMeal";

function App() {
  return (
    <main>
      <div className="w-screen h-screen background"></div>
      <div className="arrow animate-pulse text-white text-6xl md:text-9xl">
        <span>&dArr;</span>
      </div>
      <NewestMeal></NewestMeal>
      <MostPopularMeal></MostPopularMeal>      
    </main>
  );
}

export default App;
