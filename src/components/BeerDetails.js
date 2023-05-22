const BeerDetail = (props) => {
    const beerName = props.name;

    return (
      <div className="beer-detail" id="beer-detail">
        <h3>{beerName} Details: </h3>
      </div>
    );
  };
  
  export default BeerDetail;