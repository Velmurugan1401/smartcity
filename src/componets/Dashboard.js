import Carousel from 'react-bootstrap/Carousel'
import bus from "../images/4.jpg"
import tour from "../images/2.jpg"
import college from "../images/3.jpg"
import emy from "../images/emp.jpg"
import location from "../images/location.png"
import axios from "axios";
import React, { useState } from 'react';
import '../css/dash.css';

function Dashboard(props) {
  const [carslist,setlist] = useState([])
  const listdetails = () => {
    var place = {
      "persion": props.name
    }
    axios.post("http://localhost:7000/api/listplaces", place).then((response) => {

      console.log(response.data)
      setlist(response.data)

    })
  }
  React.useEffect(() => {
    listdetails();
  }, []);
  return (

    <div>


      <div class="header h-100">
        <Carousel>
          <Carousel.Item interval={1500}>
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
          <Carousel.Item interval={1000}>
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
          <Carousel.Item interval={500}>
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
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={emy}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Employes</h3>
              <p>Find the offices around that location</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      </div>
      <div class="container cd">
        <div class="row">
        {carslist.map((student, index) => (  
      <div class="col-lg-4">
      <div class="card ca1" tabindex="0">
        <div class="card-image">
          <img src={student.place_logo} alt="" />
        </div>
        <div class="card-content">
          <p class="kicker mb-2">{student.name}</p>
          {/* <h2>Using Banner Stands To Increase Trade Show Traffic</h2> */}
          <p className='c-color text-truncate' ><img className='locationimg' src={location}></img>:  {student.address}</p>
          {/* <p className='c-color'>City:  {student.city}</p> */}
        </div>
        <div class="card-footer">
          <a href="#" role="button">
            <span>Read More</span>
          </a>
          <svg class="icon" viewBox="0 0 16 16">
            <g fill="none" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
              <line x1="0.5" y1="8.5" x2="15.5" y2="8.5"></line>
              <polyline points="10.5,3.5 15.5,8.5 10.5,13.5 "></polyline>
            </g>
          </svg>
        </div>
      </div>
    </div>
            ))} 
        </div>
      </div>1

    </div>
  );
}

export default Dashboard;
