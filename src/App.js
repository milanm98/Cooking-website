import './App.css';
import Content from "./Components/Content";

function App() {
  return (
    <main>
      <div className="w-screen h-screen background"></div>
      <div className="arrow animate-pulse text-white text-6xl md:text-9xl">
        <span>&dArr;</span>
      </div>
      <Content></Content>
    </main>
  );
}

export default App;
