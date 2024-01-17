import Banner from "./components/Banner"
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";

import { BrowserRouter, Route, Routes } from "react-router-dom"
import WatchList from "./components/WatchList";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route 
          path="/"
          element = {
            <>
            <NavBar />
            <Banner />
            <Movies />
            </>
          } />

      <Route 
          path="/watchlist"
          element = {
            <>
              <NavBar />
              <WatchList />
            </>
          } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
