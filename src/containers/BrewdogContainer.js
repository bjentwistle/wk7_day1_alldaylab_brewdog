import React, { useState, useEffect } from "react";
import BeerSelect from "../components/BeerSelect";
import BeerDetail from "../components/BeerDetails";
import BeerImage from "../components/BeerImage";
import "./BrewdogContainer.css"

const BrewdogContainer = () => {
  const [brewdogData, setBrewdogData] = useState([]); //initial state - empty array
  const [selectedBeer, setSelectedBeer] = useState(null); //initial state - unselected

  useEffect(() => {
    getBrewdogData();
  }, []);

  const getBrewdogData = function () {
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => res.json())
      .then(brewdogData => setBrewdogData(brewdogData));

  };

  const updateSelectedBeer = function (beer) {
    setSelectedBeer(beer);
  };

  return (
    <div id="main-container">
    <main>
      <h3>Beers: </h3><BeerSelect
        brewdogData={brewdogData}
        updateSelectedBeer={updateSelectedBeer}
      />
      </main>
    <main>{selectedBeer ?
      <BeerDetail selectedBeer={selectedBeer}/>
       : null}
    </main>
    <main> 
    <BeerImage selectedBeer={selectedBeer}/> 
    </main>
    </div>
  );
};

export default BrewdogContainer;
