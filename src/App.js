import Navbar from "./componets/Navbar";
import Trip from "./componets/Trip";

function App() {
  return (
    <div>
      <header>
        <Navbar image="world.svg" />
      </header>
      <main className="container">
        <Trip/>
      </main>
    </div>
  );
}

export default App;
