import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Components/AppRoutes/AppRoutes";
import ItemList from "./Components/ItemList/ItemList";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar/Navbar";

function App() {

  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
 
  useEffect(() => {
    if(search != ""){
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
      .then ((res) => res.json())
      .then ((data) => setResults(data.results))
    }
  }, [search])
  
  console.log(results)
  return (
    <div>
      <BrowserRouter>

      <Navbar setSearch={setSearch}/>
      <Landing/>
      <ItemList results={results}/>

      <AppRoutes/>

      </BrowserRouter>
    </div>
  );
}

export default App;
