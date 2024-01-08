import Banner from "./components/Banner"
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Banner />
        <Movies />
      </header>
    </div>
  );
}

export default App;
