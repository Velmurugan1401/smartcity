import Carousel from 'react-bootstrap/Carousel'
import bus from "../images/4.jpg"
import tour from "../images/2.jpg"
import college from "../images/3.jpg"

import '../css/dash.css';

function Dashboard() {
    return (
        <div>


            <div class="header h-100">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={tour}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Tourist places</h3>
                            <p>Around that location</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={college}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>College & Schools</h3>
                            <p>Around that location</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bus}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Bus & Raliway station</h3>
                            <p>Around that location</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

               
            </div>
            <div class="container h-100">
  <div class="row align-middle">
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-1">
        <div class="txt">
          <h1>BRANDING AND 
CORPORATE DESIGN</h1>
          <p>Visual communication and problem-solving</p>
        </div>
        <a href="#">more</a>
        <div class="ico-card">
        <i class="fa fa-rebel"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-2">
        <div class="txt">
          <h1>Web Front-End 
SOLUTIONS</h1>
          <p>How design is implemented on the web.</p>
        </div>
        <a href="#">more</a>
      <div class="ico-card">
        <i class="fa fa-codepen"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-3">
        <div class="txt">
          <h1>UX/UI WEBsite AND MOBILE app</h1>
          <p>User Interface and User Experience Design.</p>
        </div>
        <a href="#">more</a>
      <div class="ico-card">
        <i class="fa fa-empire"></i>
      </div>
      </div>
    </div>
    
  </div>
</div>

        </div>
    );
}

export default Dashboard;
