import "./BeerImage.css"

const BeerImage = ({selectedBeer}) => {
    const imageSrc = selectedBeer.image_url;

    return(
        <div>
            <img
            id="beer-img"
            src={imageSrc}
            alt="beer bottle or keg"
            ></img>
        </div>

    )

}

export default BeerImage;