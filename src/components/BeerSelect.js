// Comp to show a drop down list to select a beer by name

const BeerSelect = (props) => {

    const beerOptions = props.allBeers.map((beer, index) => {
  
      return <option label={beer.name} key={beer.index} value={beer.index}>{beer.name}</option>
  
    })
    console.log(props.allBeers)
  
    const handleOnChange = (evt) => {
      const selectedId = evt.target.value
      const beer = props.allBeers.find((beer) => beer.id == selectedId) //string?
      props.updateSelectedBeer(beer)
    }
  
    return (
      <div>
        <label>
        <select defaultValue = "" onChange={handleOnChange}>
        <option value="" disabled >Select a beer</option> 
            {beerOptions}
        </select>
        </label>
      </div>
    )
  
  }
  
  
  export default BeerSelect