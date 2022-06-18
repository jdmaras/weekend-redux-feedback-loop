

function Support(){
    return(
        <div>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
          </header>
          <h3>How well are you being supported?</h3>
          <h5>Please put a number 1-5</h5>
        <input required type="number" placeholder="1-5"></input>
        <button>NEXT</button>
        </div>
    )
}

export default Support;