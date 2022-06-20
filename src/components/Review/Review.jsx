
//review submit will be POSTING to the database
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
//install axios so you can POST
import axios from 'axios';

function Review(){

    const history = useHistory();
    const feedBack = useSelector(store => store.feedBackReducer)

    

    //POSTing the feedback to DB that table is named 'feedback'
    const onSubmitFeedback = () => {
        axios.post('/feedback', feedBack)
        .then(() => {
            console.log(`In POST `, feedBack)
        })
        .catch((err) => {
            console.log(`ERR in POST`, err)
        })
        alert('THANK YOU FOR TAKING PART')
        history.push('/thankyou')
    }

    return(
        <>
        <h3>REVIEW!</h3>
        <ul>
            <li>Feeling: {feedBack.feeling}</li>
            <li>Understanding: {feedBack.understanding}</li>
            <li>Support: {feedBack.support}</li>
            <li>Comments: {feedBack.comments}</li>
        </ul>
        <button onClick={onSubmitFeedback}>SUBMIT</button>
        </>
    )
}

export default Review;