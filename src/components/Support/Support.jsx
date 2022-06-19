import { useHistory } from "react-router-dom"

function Support(){
    return(
        <div>
          <h3>How well are you being supported?</h3>
          <h5>Please put a number 1-5</h5>
        <input required type="number" placeholder="1-5"></input>
        <button onClick={() => history.pushState('/comments')}>NEXT</button>
        </div>
    )
}

export default Support;