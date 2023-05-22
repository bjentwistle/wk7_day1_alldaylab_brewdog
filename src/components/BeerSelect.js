// Comp to show a drop down list to select a beer by name

const BeerSelect = (props) => {

    const beerOptions = props.brewdogData.map((name, id) => {
  
      return <option label = {name} key={id} value={id}>{name}</option>
  
    })
  
  
    const handleOnChange = (evt) => {
      const index = evt.target.value
      const beer = props.beer[index]
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