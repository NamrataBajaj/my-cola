import React from 'react'

const Home = () => {
  return (
    <>
    <section>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/home/TCCC_mastheads_03.jpg/width1338.jpg"
                        className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/home/TCCC_mastheads_01.jpg/width1338.jpg"
                        className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/home/TCCC_mastheads_02.jpg/width1338.jpg"
                        className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/home/TCCC_mastheads_04.jpg/width1338.jpg"
                        className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item active">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/home/TCCC_mastheads_05.jpg/width1338.jpg"
                        className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    <section>
        <div className="container">
            <h1 className="text-center mt-5">Recommended For You</h1>
            <div className="row">
                <div className="col-md-6 pt-5">
                    <div className="card card2">
                        <img className="card-img-top img-fluid"
                            src="https://www.coca-colacompany.com/content/dam/company/us/en/media-center/header.png/width1338.png"
                            alt="Card cap"/>
                        <div className="card-body">
                            <h4>Coca-Cola Launches 100% rPET Bottles Across Canada</h4>
                            <p className="card-text">All 500-mL sparkling beverages bottles sold by The Coca-Cola Company in
                                Canada will be made with 100% recycled plastic* (*excluding caps and labels) by early
                                2024. This marks the first time 500-mL sparkling beverages will be sold in bottles made
                                from 100% recycled plastic* in Canada.
                                </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pt-5">
                    <div className="card card3">
                        <img className="card-img-top img-fluid image3"
                            src="https://www.coca-colacompany.com/content/dam/company/us/en/media-center/HERO_Web%20Story.png"
                            alt="Card cap"/>
                        <div className="card-body">
                            <h4>Coca-Cola Harnesses Power of AI to Deliver Holiday Magic</h4>
                            <p className="card-text">Coca-Cola is inviting fans around the world to create and share “Real
                                Magic” this holiday season by combining iconic brand assets like its cherished
                                depictions of Santa Claus, created by Haddon Sundblom in 1931, and the beloved Coca-Cola
                                Caravan trucks and polar bears with the power of Artificial Intelligence (AI)
                                technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container">
            <h1 className="text-center mt-5">Featured News</h1>
            <div className="row">
                <div className="col-md-4 pt-5">
                    <div className="card card1">
                        <img className="card-img-top img-fluid"
                            src="https://www.coca-colacompany.com/content/dam/company/us/en/about-us/Case%20Study%207_North%20America_Coca%20Cola%20Wetlands%20Restoration_Jacob%20Spetzler-34-1-4by3_Optimized_For_Carousel.jpg/width1338.jpg"
                            alt="Card cap"/>
                        <div className="card-body">
                            <h5>
                                Our 2030 Water Strategy Key Goals
                            </h5>
                            <p className="card-text pt-4">The Coca‑Cola Company announced three goals accelerating its
                                action on water during the UN 2023 Water Conference. 
                                action on water during the UN 2023 Water Conference.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pt-5">
                    <div className="card card1">
                        <img className="card-img-top img-fluid"
                            src="https://www.coca-colacompany.com/content/dam/company/us/en/media-center/y3000%204x3.jpg/width1338.jpg"
                            alt="Card cap"/>
                        <div className="card-body">
                            <h5>
                                Coca‑Cola® Creations Imagines Year 3000 With New Futuristic Flavor and AI-Powered
                                Experience
                            </h5>
                            <p className="card-text">Imagine what the future tastes and feels like with a limited-edition
                                drink and new AI-powered experience. </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pt-5">
                    <div className="card card1">
                        <img className="card-img-top img-fluid"
                            src="https://www.coca-colacompany.com/content/dam/company/us/en/TopoChico4-3.png/width1338.png" 
                            alt="Card cap"/>
                        <div className="card-body">
                            <h5>
                                Topo Chico Plant provides Free Water to its Monterrey Neighbors
                            </h5>
                            <p className="card-text">For more than a century, Topo Chico has offered drinking water to the
                                local community via a free, 24/7 tap outside its Monterrey plant.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     <section>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 pt-5">
                    <div className="card card10">
                        <div className="card-body">
                            <h3 className="pt-5 text-center heading">Coca‑Cola Company Jobs</h3>
                            <p className="pt-3 para">We seek employees that embrace change,<br></br> champion diversity and push
                                for progress. Your <br/> skills and experience will help us navigate the <br/>
                                ever-changing global landscape and guide us <br/> into the next chapter and beyond. </p>
                            <br/><br/><br/><br/>
                            <button type="button" className="btn btn-light btn-outline-dark">Explore Jobs</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/PACS%20Singapore%20Employees%202021-019-cut2.jpg/width1338.jpg" alt=""
                        className="img-fluid image2"/>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/Our-Company-1.5MB-cut2.jpg/width1338.jpg" alt=""
                        className="img-fluid image4"/>
                </div>
                <div className="col-md-6 mt-5 pt-5">
                    <div className="card card5">
                        <div className="card-body">
                            <h3 className="pt-5 text-center">A Purpose-Driven History</h3>
                            <p className="pt-3">The Coca‑Cola Company’s purpose is to refresh the world and make a
                                difference and we have remained true to that purpose for 137 years.<br/><br/>

                                Our strategy is centered around people—our consumers and employees—and driving
                                sustainable solutions that build resilience into our business to respond to current and
                                future challenges, while creating positive change for the planet.</p><br/><br/><br/><br/>
                            <button type="button" className="btn btn-light btn-outline-dark">Learn more about us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     <section class="pictures">
        <h1 class="text-center brand">Explore Our Brands</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/coca-cola-logo.png/width1338.png" alt=""
                        class="img-fluid picture1"/>
                </div>
                <div class="col-md-3">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/dietCoke_transparency.png/width1338.png" alt=""
                        class="img-fluid picture1"/>
                </div>
                <div class="col-md-3">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/sprite-logo.png/width1338.png" alt=""
                        class="img-fluid picture1"/>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/aha-logo.png/width1338.png" alt=""
                        class="img-fluid picture1"/>
                </div>
                <div class="col-md-3">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/fairlife-logo.png/width1338.png" alt=""
                        class="img-fluid picture1"/>
                </div>
                <div class="col-md-3">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/costa-logo.png/width1338.png" alt=""
                        class="img-fluid picture1"/>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-2"></div>
                <div class="col-md-3">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/powerade-logo.png/width1338.png" alt=""
                        class="img-fluid picture1"/>
                </div>
                <div class="col-md-3">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/smartwater-logo.png/width1338.png" alt=""
                        class="img-fluid picture1"/>
                </div>
                <div class="col-md-3">
                    <img src="https://www.coca-colacompany.com/content/dam/company/us/en/brands/logos/jackdaniels-coca-cola-logo.jpg/width1338.jpg" alt=""
                        class="img-fluid picture1"/>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-3"></div>
                <div class="col-md-3">
            
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-1"></div>
            </div>
        </div>
    </section> 

    
    </>
  )
}

export default Home;