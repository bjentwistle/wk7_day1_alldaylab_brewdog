import React, { useState, useEffect } from "react";
import BeerSelect from "../components/BeerSelect";
import BeerDetail from "../components/BeerDetails";
//import BeerImage from "../components/BeerImage";
import "./BrewdogContainer.css"
//import FavoriteBeersList from "../components/FavoriteBeersList";

const BrewdogContainer = () => {
  const [allBeers, setAllBeers] = useState([]); //initial state - empty array
  const [selectedBeer, setSelectedBeer] = useState(null); //initial state - unselected
  //const [favoriteBeersIds, setFavoriteBeersIds] = useState(new Set());

  useEffect(() => {
    getBeers();
  }, []);

  const getBeers = () => {
    const promises = [1, 2, 3, 4, 5].map((number) => {
      return fetch(
        `https://api.punkapi.com/v2/beers?page=${number}&per_page=80`
      ).then((res) => res.json());
    });
    Promise.all(promises).then((data) => {
      const combinedResponses = data.flat();
      setAllBeers(combinedResponses);
      setSelectedBeer(combinedResponses[0]);
    });
  };

  const handleSelectedBeer = function (beer) {
    setSelectedBeer(beer);
  };

  return (
    <div id="main-container">
    <main>
      <h3>Beers: </h3><BeerSelect
        allBeers={allBeers}
        onSelectedBeer={handleSelectedBeer}
      />
      </main>
    <main>{selectedBeer ?
      <BeerDetail selectedBeer={selectedBeer}/>
       : null}
    </main>
    {/* <main> 
    <BeerImage selectedBeer={selectedBeer}/> 
    </main> */}
    </div>
  );
};

export default BrewdogContainer;
