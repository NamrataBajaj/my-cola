import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div className="container-fluid my-6 mt-0">
                <ul>
                    <li className="header">
                        <a href="#">
                            <img src="../portfolio/images/home.png" className="img-fluid age"></img>
                        </a>
                    </li>
                    <li className="header1">
                        <a href="file:///C:/Users/HP/OneDrive/Documents/interview/html/portfolio/about.html">

                            <img src="../portfolio/images/about me.png" className="img-fluid age" />
                        </a>
                    </li>
                    <li className="header2">
                        <a href="file:///C:/Users/HP/OneDrive/Documents/interview/html/portfolio/resume.html">
                            <img src="../portfolio/images/resume.png" className="img-fluid age" />
                        </a>
                    </li>
                    <li className="header3">
                        <a className="nav-link" href="file:///C:/Users/HP/OneDrive/Documents/interview/html/portfolio/contactme.html">
                            <img src="../portfolio/images/contact me.png" className="img-fluid age" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <img className="img-fluid new" src="../portfolio/images/blue.jpg" alt="" />
                    </div>
                    <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                        <h1 className="text-black m">I'm</h1>
                        <h1 className="text-black mb"> Namrata Bajaj </h1>
                        <h2 className   ="typed-text-output d-inline"></h2>
                        <div className="typewriter">
                            <h1 className="non">Web Designer , Front End Developer</h1>
                        </div>
                        <div className="d-flex align-items-center pt-5">
                            <a href="../portfolio/resume/namrata bajaj(resume).pdf"
                                className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio;