import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Comments(){

  const dispatch = useDispatch();
  const history = useHistory();
  const [comments, setComments] = useState(0)

  const handleSubmit = () => {
    dispatch({
      type: 'USER_COMMENTS',
      payload: comments
    })
  }

    return(
        <div>
          <h3>Any comments you want to leave?</h3>
          <h5>Please put a number 1-5</h5>
        <input required type="text" placeholder="Comments Here"></input>
        <button onClick={handleSubmit}>NEXT</button>
        </div>
    )
};

export default Comments;