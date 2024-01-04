import React from 'react'

const Header = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light  navbar-fixed">
        <div class="container-fluid">
            <a class="navbar-brand" href="/home">
                <img src="https://www.coca-colacompany.com/content/dam/company/us/en/the-coca-cola-company-logo.svg"
                    class="img-fluid ear" href="/home"></img>
            </a><br/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item view">
                        <a class="nav-link active" aria-current="page" href="/company">Our Company</a>
                    </li>

                    <li class="nav-item view">
                        <a class="nav-link active" aria-current="page" href="/brand">Brands</a>
                    </li>
                    <li class="nav-item view">
                        <a class="nav-link active" aria-current="page"
                            href="/sustainbility">Sustainability</a>
                    </li>
                    <li class="nav-item view">
                        <a class="nav-link active" aria-current="page" href="/social">Social</a>
                    </li>
                    <li class="nav-item view">
                        <a class="nav-link active" aria-current="page" href="/carrer">Careers</a>
                    </li>
                    <li class="nav-item view">
                        <a class="nav-link active" aria-current="page" href="#">Investors</a>
                    </li>
                    <li class="nav-item1" style={{padding: "13px"}}>
                        <i class="fa fa-search"></i>
                    </li>
                    <li>
                    <li class="" style={{padding: "13px"}}>
                        <i class='fas fa-globe'> </i>
                    </li>
                    <li>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </>
  )
}

export default Header;
