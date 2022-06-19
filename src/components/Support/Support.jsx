import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Support(){

  const optionValues = [1,2,3,4,5]
  const dispatch = useDispatch();
  const history = useHistory();
  const[support, setSupport] = useState(0)

  const handleSubmit = () => {
    dispatch({
      type: 'USER_SUPPORT',
      payload: Number(support)
    })
    history.push('/comments')
  }
    return(
        <div>
          <h3>How well are you being supported?</h3>
          <h5>Please put a number 1-5</h5>
          <select value={support} onChange={(e) => setSupport(e.target.value)} required type="number" >
          {optionValues.map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
        <button onClick={handleSubmit}>NEXT</button>
        </div>
    )
}

export default Support;