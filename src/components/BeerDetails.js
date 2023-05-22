const BeerDetail = (props) => {
    //const beerName = props.name;
    const firstBrewed = props.first_brewed;
    const tagLine = props.tagline;



    return (
      <div className="beer-detail" id="beer-detail">
         <h3>Details: {props.name}</h3>
          First Brewed in : {firstBrewed}
          {tagLine}

      </div>
    );
  };
  
  export default BeerDetail;