import "./BeerImage.css"

const BeerImage = ({selectedBeer}) => {
    const imageSrc = selectedBeer.image_url;
    const description = selectedBeer.description;

    return(
        <div>
            <img
            id="beer-img"
            src={imageSrc}
            alt="beer bottle or keg"
            ></img>
            <p>{description}</p>
        </div>

    )

}

export default BeerImage;