import { useState} from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'; 

function Comments(){

  const dispatch = useDispatch();
  const history = useHistory();
  const [comments, setComments] = useState('')

  const handleSubmit = () => {
    dispatch({
      type: 'USER_COMMENTS',
      payload: comments
    })
    history.push('/review')
  }

    return(
        <div>
          <h3>Any comments you want to leave?</h3>
        <input required type="text" placeholder="Comments Here" value={comments} onChange={(e) => setComments(e.target.value)}></input>
        <button onClick={handleSubmit}>NEXT</button>
        </div>
    )
};

export default Comments;