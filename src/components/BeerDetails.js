import './BeerDetails.css'

const BeerDetail = ({selectedBeer}) => {
  //console.log("Beer details:", selectedBeer)
    const beerName = selectedBeer.name;
    const firstBrewed = selectedBeer.first_brewed;
    const tagLine = selectedBeer.tagline;
    
    const foodPairing = selectedBeer.food_pairing;
    const description = selectedBeer.description;
    const abvPercentage = selectedBeer.abv;

    const foodsList = foodPairing.map((food, index) => {
      return (
        <li name={food} key={index}>
          {" "}
          {food}
        </li>
      )
    })

    return (
      <div className="beer-detail" id="beer-detail">
         <h3>Details Of: {beerName} {abvPercentage}%</h3>
          <p>First Brewed in : {firstBrewed}</p>
          <p>{tagLine}</p>
          <p> Food pairing suggestions: {foodsList}</p>

      </div>
    );
  };
  
  export default BeerDetail;