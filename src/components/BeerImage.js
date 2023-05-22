import './BeerDetails.css'

const BeerImage = ({selectedBeer}) => {
    const imageSrc = selectedBeer.image_url;

    return(
        <div>
            <img
            id="beer-img"
            src={imageSrc}
            alt="beer image"
                  ></img>
        </div>
      
    )

}

export default BeerImage;