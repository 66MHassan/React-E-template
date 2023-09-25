import Footer from "./Footer";
import NavBar from "./NavBar";

export default function About(){
    return(
        <>
        <body class="main-layout position_head">
        <NavBar />
      {/* <!-- end header inner --> */}
      {/* <!-- end header --> */}
      {/* <!-- about section --> */}
      <div className="about">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-5">
                  <div className="about_img">
                     <figure><img style={{"height":"400px"}} src="images/c2.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="titlepage">
                     <h2>About Our Shop</h2>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                  </div>
                  <a className="read_more" href="#">Read More</a>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- about section --> */}
           <Footer/>
      {/* <!-- end footer --> */}
   </body>
        </>
    )
}