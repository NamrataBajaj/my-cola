import React from 'react'

const Footer = () => {
    return (
        <>
        <section className='bg-black text-white pt-5' >
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src='https://www.coca-colacompany.com/content/dam/company/us/en/the-coca-cola-company-logo-white.svg'
                                className='img-fluid' alt=''></img>

                        </div>
                        <div className='col-md-6'>
                      <button className='english'>United states| English</button>
                        </div>
                    </div>
                </div>
            </section>
            <hr></hr>

         <section> 
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3">
                    <ul className="slt">
                      <li>
                        ABOUT US
                      </li><br/>
                      <li>
                        Media Center
                      </li>
                      <li>
                      Coca‑Cola Foundation
                      </li>
                      <li>
                        Investors
                      </li>
                      <li>
                        Policies
                      </li>
                      <li>
                        Careers
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="slt">
                      <li>
                        NEED HELP?
                      </li><br/>
                      <li>
                        FAQ
        
                      </li>
                      <li>
                        Contact Us
        
                      </li>
                      <li>
                        International
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="slt1">
                      <li>
                        California Notice at <br/>Collection
                      </li><br/>
                      <li>
                        Do Not Sell My <br/>Personal Information
                      </li><br/>
                      <li>
                        Terms of Use
                      </li><br/>
                      <li>
                        Privacy Policy
                      </li><br/>
                      <li>
                        Cookies Settings
                      </li><br/>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="d-flex">
                      <li className="item">
                        <i className='fab fa-twitter'></i>
                      </li>
                      <li className="item">
                        <i className='fab fa-facebook-f'></i>
                      </li>
                      <li className="item">
                        <i className='fab fa-instagram'></i>
                      </li>
                      <li className="item">
                        <i className='fab fa-youtube'></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </section>

          <section>
            <div className="container-fluid bg-black ">
              <hr></hr>
                <div className="row">
                    <div className="col-md-4">
    
                    </div>
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-4">
                      <p>© 2023 The Coca‑Cola Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
        </section>
        </>
    )
}

export default Footer;