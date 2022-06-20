import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Feeling(){

  //setting the options for rating input
  const optionValues = [1,2,3,4,5]
  const dispatch = useDispatch();
  const history = useHistory();
  //capturing state and starting it at zero
  const [feeling, setFeeling] = useState(0)

  const handleSubmit = () => {
   //need to dispatch that as a number and not a string to put
   // into the database later
    dispatch({
      type: 'USER_FEELING',
      payload: Number(feeling)
    })
    //route over to the Understanding component/page
    history.push('/understanding')
  }
    return(
       <div>
        <h3>How are you feeling today?</h3>
        <h5>Please put a number 1-5</h5>
        <select value={feeling} onChange={(e) => setFeeling(e.target.value)} required type="number" >
          {optionValues.map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
        <button onClick={handleSubmit}>NEXT</button>
      </div>
    )
}

export default Feeling;

//https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react 
// mapping for the select option