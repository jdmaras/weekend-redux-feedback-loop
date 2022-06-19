// --------
//review submit will be POSTING to the database
import { useSelector } from 'react-redux';

function Review(){

    const feedBack = useSelector(store => store.feedBackReducer)

    return(
        <>
        <h3>REVIEW!</h3>
        <ul>
            <li>Feeling: {feedBack.feeling}</li>
            <li>Understanding: {feedBack.understanding}</li>
            <li>Support: {feedBack.support}</li>
            <li>Comments: {feedBack.comments}</li>
        </ul>
        <button>SUBMIT</button>
        </>
    )
}

export default Review;