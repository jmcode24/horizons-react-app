import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

<nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <img src="images/head.png" width="150" height="30"/>
          </a>
        </li>
      </ul>
    </div>
    <div className="mx-auto order-0">
      <a className="navbar-brand mx-auto" href="#">
        <img src="images/ghana.png" className="mr-1" alt="ghana" width="50" height="20"/>
        <img src="images/nigeria.jpg"  alt="nigeria" width="50" height="20"/>
        <img src="images/kenya.jpg" className="ml-1" alt="kenya" width="50" height="20"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT US</a>
        </li>
      </ul>
    </div>
  </nav>

  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/theater-1.jpg" className="d-block w-100" alt="office"/>
      </div>
      <div className="carousel-item">
        <img src="images/theater-2.jpg" className="d-block w-100" alt="office"/>
      </div>
      <div className="carousel-item">
        <img src="images/theater-3.jpg" className="d-block w-100" alt="street"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

  
  <div className="container-fluid overflow-hidden">
    <h3 className="text-center mt-5 mb-2">Plans</h3>
  </div>

  
  <div className="container-fluid overflow-hidden">
    <div className="row">
      <div className="col-md-3">
        <div className="card-group">
          <div className="card">
            <img src="images/office-1.jpg" className="card-img-top p-1" alt="visual office"/>
            <div className="card-body">
              <h5 className="card-title text-center">VISIUAL OFFICES</h5>
              <p className="card-text">
 							  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
 							  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
 							  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 							  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
 							  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
 						    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 						  </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
 			  <div className="card-group">
 				  <div className="card">
 					  <img src="images/office-2.jpg" className="card-img-top p-1" alt="customized office"/>
 					  <div className="card-body">
 						  <h5 className="card-title text-center">CUSTOMIZED OFFICES</h5>
 						  <p className="card-text">
 							  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
 							  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
 							  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 							  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
 							  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
 							  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 						  </p>
 					  </div>
 				  </div>
 			  </div>
 		  </div>
 		  <div className="col-md-3">
 			  <div className="card-group">
 				  <div className="card">
 					  <img src="images/office-3.jpg" className="card-img-top p-1" alt="serviced office"/>
 					  <div className="card-body">
 						  <h5 className="card-title text-center">SERVICED OFFICES</h5>
 						  <p className="card-text">
 							  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
 							  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
 							  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 							  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
 							  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
 							  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 						  </p>
 					  </div>
 				  </div>
 			  </div>
 		  </div>
 		  <div className="col-md-3">
 			  <div className="card-group">
 				  <div className="card">
 					  <img src="images/office-4.jpg" className="card-img-top p-1" alt="meeting room"/>
 					  <div className="card-body">
 						  <h5 className="card-title text-center">MEETING ROOMS</h5>
 						  <p className="card-text">
 							  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
 							  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
 							  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 							  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
 							  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
 							  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 						  </p>
 					  </div>
 				  </div>
 			  </div>
 		  </div>
 	  </div>
  </div>

  
  <div className="footer overflow-hidden p-1 mt-5" style={{backgroundColor: "darkblue"}}>
    <div className="row">
      <div className="col-md-4">
 			  <h6 className="text-center" style={{color: "goldenrod"}}>VISIT US IN KENYA</h6>
 			  <h6 className="text-center" style={{color: "greenyellow"}}>Nairobi,Kenya</h6>
 			  <p className="text-center" style={{color: "white"}}>
 				  Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit, sed<br/> do eiusmod
 				  tempor incididunt ut labore<br/> et dolore magna aliqua. 
 			  </p>
 	</div>
 		  <div className="col-md-4">
 			  <h6 className="text-center" style={{color: "goldenrod"}}>VISIT US IN GHANA</h6>
 			  <h6 className="text-center" style={{color: "greenyellow"}}>Accra,Ghana</h6>
 			  <p className="text-center" style={{color: "white"}}>
 				  Lorem ipsum dolor sit amet,<br/> consectetur 
 			  </p>
 		  </div>
 		  <div className="col-md-4">
 			  <h6 className="text-center" style={{color: "goldenrod"}}>VISIT US IN NIGERIA</h6>
 			  <h6 className="text-center" style={{color: "greenyellow"}}>Lagos,Nigeria</h6>
 			  <p className="text-center" style={{color: "white"}}>
 				  Lorem ipsum dolor sit amet
 			  </p>
 		  </div>
 	  </div>
  </div>

    </div>
      
  );
 }

export default App;
