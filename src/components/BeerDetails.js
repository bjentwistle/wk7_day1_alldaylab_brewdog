//import './BeerDetails.css'

const BeerDetail = ({selectedBeer}) => {
  console.log("Beer details:", selectedBeer)
    const beerName = selectedBeer.name;
    const firstBrewed = selectedBeer.first_brewed;
    const tagLine = selectedBeer.tagline;
    
    
    const abvPercentage = selectedBeer.abv;
    const description = selectedBeer.description; 

    
    return (
      <div className="beer-detail" id="beer-detail">
         <h3>Details Of: {beerName} {abvPercentage}%</h3>
          <p>First Brewed in : {firstBrewed}</p>
          <p>{tagLine}</p>
          <p>{description}</p>
          
      </div>
    );
  };
  
  export default BeerDetail;