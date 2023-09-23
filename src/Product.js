import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Product(){
    return(
        <>
        <body className="main-layout position_head">
      <NavBar />
      {/* <!-- end header inner --> */}
      {/* <!-- end header --> */}
{/* <!-- Our  Appliance section --> */}
<div className="glasses">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="titlepage">
                     <h2>Our Appliances</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                        e et dolore magna aliqua. Ut enim ad minim veniam, qui
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure style={{"height":"110px"}}><img src="images/Ac1.jfif" alt="#"/></figure>
                     <h3><span className="blu">$</span>300</h3>
                     <p>Ac</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure style={{"height":"110px"}}><img style={{"height":"150px"}} src="images/c1.jpg" alt="#"/></figure>
                     <h3><span className="blu">$</span>100</h3>
                     <p>Cooler</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure style={{"height":"110px"}}><img src="images/o1.jfif" alt="#"/></figure>
                     <h3><span className="blu">$</span>150</h3>
                     <p>Oven</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure style={{"height":"110px"}}><img style={{"height":"190px"}} src="images/ra3.png" alt="#"/></figure>
                     <h3><span className="blu">$</span>350</h3>
                     <p>Rafrigrator</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure style={{"height":"110px"}}><img style={{"height":"160px"}} src="images/wa2.webp" alt="#"/></figure>
                     <h3><span className="blu">$</span>150</h3>
                     <p>Washing Machine</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure style={{"height":"110px"}}><img src="images/o2.jfif" alt="#"/></figure>
                     <h3><span className="blu">$</span>135</h3>
                     <p>Oven</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure style={{"height":"110px"}}><img src="images/ac2.jpg" alt="#"/></figure>
                     <h3><span className="blu">$</span>315</h3>
                     <p>Ac</p>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="glasses_box">
                     <figure style={{"height":"110px"}}><img style={{"height":"190px"}} src="images/ra2.jpg" alt="#"/></figure>
                     <h3><span className="blu">$</span>299</h3>
                     <p>Rafrigrator</p>
                  </div>
               </div>
               <div className="col-md-12">
                  <a className="read_more" href="#">Read More</a>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end Our  Glasses section --> */}
      
      {/* <!-- end Our  Appliance section --> */}
      <Footer />
   </body>

        </>
    )
}