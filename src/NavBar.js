import {Link} from "react-router-dom";
export default function NavBar (){
    return(
    <>
            {/* loader   */}
            {/* <div className="loader_bg">
         <div className="loader"><img src="./images/loading.gif" alt="#" /></div>
      </div> */}
      {/* <!-- end loader --> */}
      {/* <!-- header --> */}
      <header>
         {/* <!-- header inner --> */}
         <div className="header">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">
                              <Link to="/"><img style={{"width":"200px","padding-left":"50px"}} src="images/logo20.jpg" alt="#" /></Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                 <Link className="nav-link" to="/">Home</Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link" to="/Product">Product</Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link" to="/Shop">Shop</Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link" to="/About">About</Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link" to="/Contact">Contact Us</Link>
                              </li>
                              <li className="nav-item d_none login_btn">
                                 <a className="nav-link" href="#">Login</a>
                              </li>
                              <li className="nav-item d_none">
                                 <a className="nav-link" href="#">Register</a>
                              </li>
                              <li className="nav-item d_none sea_icon">
                                 <a className="nav-link" href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i><i className="fa fa-search" aria-hidden="true"></i></a>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header> 
        </>
    )
}