
import '../css/Home.css';
import Carousel from 'react-bootstrap/Carousel'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import worker from "../images/job1.jpg"
import employe from "../images/employee.jpg"
import traveler from "../images/traveler.jpg"

function Home() {
    return (
        <div>
            <header class="masthead">
                <div class="navbar fixed-top navbar-dark bg-dark shadow-sm">
                    <div class="container">
                        <a href="#" class="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                            <strong>Smart City</strong>
                        </a>

                    </div>
                </div>

            </header>
            {/* <img src={smartcity}></img> */}
           
            <div class="container mb-4">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">CHOOSE BELOW</h2>
            <div class="divider-custom mb-5 mt-0">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><svg class="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <div class="card">
                            <div class="card-img">

                                <img src={employe} />
                            </div>
                            <div class="card-content">
                                <h2 class="big-title">Students</h2>
                                <button class="learn-more">
                                    <Link to="/students">
                                        <span class="circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">Learn More </span>
                                    </Link>

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card">
                            <div class="card-img">

                                <img src={worker} />
                            </div>
                            <div class="card-content">
                                <h2 class="big-title">Employes</h2>
                                <button class="learn-more">
                                    <Link to="/employes">
                                        <span class="circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">Learn More </span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card">
                            <div class="card-img">
                                {/* <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://media.istockphoto.com/photos/aerial-panorama-of-botafogo-bay-rio-de-janeiro-picture-id608540602?b=1&k=20&m=608540602&s=170667a&w=0&h=AataLXfn0acAkHnx2CAkKusL4eZl5a7mtOG1LgWdf48="
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=Second slide&bg=282c34"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="holder.js/800x400?text=Third slide&bg=20232a"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel> */}
                                <img src={traveler} />
                            </div>
                            <div class="card-content">
                                <h2 class="big-title">Tourist</h2>
                                <button class="learn-more">
                                    <Link to="/tourist">
                                        <span class="circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">Learn More </span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="bg-dark text-secondary px-4 py-2 text-center">
    <div class="">
      {/* <h1 class="display-5 fw-bold text-white">Dark mode hero</h1> */}
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-1">©2022. Copyright</p>
 
      </div>
    </div>
  </div>
        </div>

    );
}

export default Home;
