import React, { useState, useEffect } from "react";
import BeerSelect from "../components/BeerSelect";
import BeerDetail from "../components/BeerDetails";

const BrewdogContainer = () => {
  const [brewdogData, setBrewdogData] = useState([]); //initial state - empty array
  const [selectedBeer, setSelectedBeer] = useState(null); //initial state - unselected

  useEffect(() => {
    getBrewdogData();
  }, []);

  const getBrewdogData = function () {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((res) => res.json())
      .then((brewdogData) => setBrewdogData(brewdogData));

  };

  const updateSelectedBeer = function (beer) {
    setSelectedBeer(beer);
  };

  return (
    <div id="app">
      <h1>Beers</h1>
      <BeerSelect
        brewdogData={brewdogData}
        updateSelectedBeer={updateSelectedBeer}
      />
    <main>
        {selectedBeer ? (
          <BeerDetail
            beer={selectedBeer}
          />
        ) : null}
    </main>
    </div>
  );
};

export default BrewdogContainer;
