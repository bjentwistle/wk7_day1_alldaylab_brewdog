// Comp to show a drop down list to select a beer by name

const BeerSelect = (props) => {

    const beerOptions = props.brewdogData.map((beer) => {
  
      return <option label={beer.name} key={beer.id} value={beer.id}>{beer.name}</option>
  
    })
    console.log(props.brewdogData)
  
    const handleOnChange = (evt) => {
      const selectedId = evt.target.value
      const beer = props.brewdogData.find((beer) => beer.id == selectedId) //string?
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