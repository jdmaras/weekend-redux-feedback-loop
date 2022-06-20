import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';

function ThankYou(){

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        dispatch({
          type: 'RESET_FEEDBACK',
        })
        history.push('/')
      }

    return(
        <div>
        <h2>Thanks for taking our survey!</h2>
        <h4>If you want to submit another, click down below</h4>
        <button onClick={handleSubmit}>RETAKE SURVEY</button>
        </div>
    )
}

export default ThankYou;