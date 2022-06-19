import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Feeling(){

  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState(0)

  const handleSubmit = (event) => {
   
    dispatch({
      type: 'USER_FEELING',
      payload: event.target.value
    })
    history.push('/understanding')
  }
    return(
       <div>
        <h3>How are you feeling today?</h3>
        <h5>Please put a number 1-5</h5>
        <input value={feeling} onChange={(e) => setFeeling(e.target.value)}required type="number" placeholder="1-5"></input>
        <button onClick={handleSubmit}>NEXT</button>
      </div>
    )
}

export default Feeling;