import About from "./About"
import Footer from "./Footer"
import NavBar from "./NavBar"
export default function Home(){
    return(
        <>
        <body className="main-layout">
        <NavBar/>
      {/* <!-- end header inner --> */}
      {/* <!-- end header --> */}
      {/* <!-- banner --> */}
      <section className="banner_main">
         <div id="banner1" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#banner1" data-slide-to="0" className="active"></li>
               <li data-target="#banner1" data-slide-to="1"></li>
               <li data-target="#banner1" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="text-bg">
                           <h1> <span className="blu">Welcome <br/></span>To Our Installment Shop</h1>
                           <figure><img src="images/appliance1.avif" alt="#"/></figure>
                           <a className="read_more" href="#">Shop Now</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="text-bg">
                           <h1> <span className="blu">Welcome <br/></span>To Our Installment Shop</h1>
                           <figure><img src="images/appliance2.avif" alt="#"/></figure>
                           <a className="read_more" href="#">Shop Now</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="text-bg">
                           <h1> <span className="blu">Welcome <br/></span>To Our Installment Shop</h1>
                           <figure><img src="images/appliance1.avif" alt="#"/></figure>
                           <a className="read_more" href="#">Shop Now</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </a>
            <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
         </div>
      </section>
      {/* <!-- end banner --> */}


      
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
      {/* <!-- end Our  Appliance section --> */}
      {/* <!-- Our shop section --> */}
      <div id="about" className="shop">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-5">
                  <div  className="shop_img">
                     <figure><img src="images/ra2.jpg" alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-7 padding_right0">
                  <div className="max_width">
                     <div className="titlepage">
                        <h2>Best Appliances for Home At Our shop</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        <a className="read_more" href="#">Shop Now</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end Our shop section --> */}
      {/* <!-- clients section --> */}
      <div className="clients">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>What say our clients</h2>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div id="myCarousel" className="carousel slide clients_Carousel " data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container">
                              <div className="carousel-caption ">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="clients_box">
                                          <figure><img src="images/u1.jfif" alt="#"/></figure>
                                          <h3>Sandy Mark</h3>
                                          <p> Modern washing machines have evolved to offer impressive performance that caters to the diverse needs of users. One key aspect of performance is cleaning power. High-quality washing machines utilize advanced agitators or drum movements, combined with the right water temperature and detergent dispersion, to effectively remove dirt and stains from clothing. This ensures that your garments come out clean and fresh after each cycle.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="clients_box">
                                          <figure><img src="images/u3.jfif" alt="#"/></figure>
                                          <h3>Salin Gomiz</h3>
                                          <p> It heats up quickly and maintains a consistent temperature, which has made baking and roasting a breeze. I've noticed that my dishes come out perfectly cooked and evenly browned every time. It has definitely elevated my culinary endeavors, and I've received numerous compliments on my baked goods and roasted dishes.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="clients_box">
                                          <figure><img style={{"height":"170px"}} src="images/u2.webp" alt="#"/></figure>
                                          <h3>Sarah Smith</h3>
                                          <p>In conclusion, a washing machine's performance encompasses its cleaning effectiveness, efficiency in resource usage, and noise levels, all of which contribute to a more convenient and satisfactory laundry experience. Investing in a high-performing washing machine can simplify household chores and enhance the quality of your daily life</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                     <i className='fa fa-angle-left'></i>
                     </a>
                     <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                     <i className='fa fa-angle-right'></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end clients section --> */}
      {/* <!-- contact section --> */}
      <div id="contact" className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <h3>Contact Us</h3>
                        </div>
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Name" type="type" name="Name"/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number"/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email"/>                          
                        </div>
                        <div className="col-md-12">
                           <input className="contactusmess" placeholder="Message" type="type" Message="Name"/>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="map_section">
               <div id="map">
               </div>
            </div>
         </div>
      </div>
      
      <Footer />
      
   </body>
        </>
    )
}