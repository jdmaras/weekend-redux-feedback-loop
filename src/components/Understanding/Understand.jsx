import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';

function Understanding(){
  
  const optionValues = [1,2,3,4,5]
  const dispatch = useDispatch();
  const history = useHistory();
  const [understanding, setUnderstanding] = useState(1)

  const handleSubmit = () => {
    dispatch({
      type: 'USER_UNDERSTANDING',
      payload: Number(understanding)
    })
    history.push('/support')
  }
  
    return(
        <div>
          <h3>How well are you understanding the content?</h3>
          <h5>Please put a number 1-5</h5>
          <select value={understanding} onChange={(e) => setUnderstanding(e.target.value)} required type="number" >
          {optionValues.map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
        <button onClick={handleSubmit}>NEXT</button>
        </div>
    )
}

export default Understanding;