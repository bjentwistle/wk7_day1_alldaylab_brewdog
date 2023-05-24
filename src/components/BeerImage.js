import "./BeerImage.css"

const BeerImage = ({selectedBeer}) => {
    const imageSrc = selectedBeer.image_url;
    const foodPairing = selectedBeer.food_pairing;
    
    const foodsList = foodPairing.map((food, index) => {
      return (
        <li name={food} key={index}>
          {" "}
          {food}
        </li>
      )
    }); 


    return(
        <div>
            <img
            id="beer-img"
            src={imageSrc}
            alt="beer bottle or keg"
            ></img>
            <p> Food pairing suggestions: {foodsList}</p>
            
        </div>

    )

}

export default BeerImage;