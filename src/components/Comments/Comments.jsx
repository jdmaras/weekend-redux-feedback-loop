import { useHistory } from "react-router-dom"

function Comments(){

    return(
        <div>
          <h3>Any comments you want to leave?</h3>
          <h5>Please put a number 1-5</h5>
        <input required type="number" placeholder="1-5"></input>
        <button onClick={() => history.pushState('/review')}>NEXT</button>
        </div>
    )
};

export default Comments;