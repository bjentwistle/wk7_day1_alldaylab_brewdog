import React, { useState, useEffect } from "react";
import BeerSelect from "../components/BeerSelect";
import BeerDetail from "../components/BeerDetails";
import BeerImage from "../components/BeerImage";
import "./BrewdogContainer.css";

const BrewdogContainer = () => {
  const [allBeers, setAllBeers] = useState([]); //initial state - empty array
  const [selectedBeer, setSelectedBeer] = useState(null); //initial state - unselected
  //const [favoriteBeersIds, setFavoriteBeersIds] = useState(new Set());

  useEffect(() => {
    getBeers();
  }, []);

  const getBrewdogData = function () {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((brewdogData) => setBrewdogData(brewdogData));
  };

  const handleSelectedBeer = function (beer) {
    setSelectedBeer(beer);
  };

  return (
    <div id="main-container">
      <main>
        <h3>Beers: </h3>
        <BeerSelect
          brewdogData={brewdogData}
          updateSelectedBeer={updateSelectedBeer}
        />
      </main>
      <main>
        {selectedBeer ? <BeerDetail selectedBeer={selectedBeer} /> : null}
      </main>
      <img>
        {selectedBeer ? <BeerImage selectedBeer={selectedBeer} /> : null}
      </img>
    </div>
  );
};

export default BrewdogContainer;
