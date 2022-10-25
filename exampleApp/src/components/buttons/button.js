function Grid(){
    return(
        <div className="container">
  <div className="row">
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
      One of three columns
    </div>
  </div>
</div>
    )
}

export default Grid;

function card(){
    return(
    <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
    )
}

export default card;

function carousel(){
    return(
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
      </div>
    </div>
  </div>
  )
}

export default carousel;


function buttons(){
    return(
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary active">
          <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
        </label>
        <label className="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off"> Radio
        </label>
        <label className="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off"> Radio
        </label>
      </div>
  )
}

export default buttons;


