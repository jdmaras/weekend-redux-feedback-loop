import { useHistory } from "react-router-dom"

function Understanding(){
  const history = useHistory();
  
    return(
        <div>
          <h3>How well are you understanding the content?</h3>
          <h5>Please put a number 1-5</h5>
        <input required type="number" placeholder="1-5"></input>
        <button onClick={() => history.pushState('/support')}>NEXT</button>
        </div>
    )
}

export default Understanding;