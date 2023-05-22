import './beerDetails.css'

const BeerDetail = ({selectedBeer}) => {
  console.log("Beer details:", selectedBeer)
    const beerName = selectedBeer.name;
    const firstBrewed = selectedBeer.first_brewed;
    const tagLine = selectedBeer.tagline;
    const imageSrc = selectedBeer.image_url;
    const foodPairing = selectedBeer.food_pairing;

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
         <h3>Details Of: {beerName}</h3>
          <p>First Brewed in : {firstBrewed}</p>
          <p>{tagLine}</p>
          <img
        id="beer-img"
        src={imageSrc}
        alt="beer image"
      ></img>
      <p> Food pairing suggestions: {foodsList}</p>

      </div>
    );
  };
  
  export default BeerDetail;