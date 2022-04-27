import Carousel from 'react-bootstrap/Carousel'
import bus from "../images/4.jpg"
import tour from "../images/2.jpg"
import college from "../images/3.jpg"
import emy from "../images/emp.jpg"
import location from "../images/location.png"
import axios from "axios";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import '../css/dash.css';

function Dashboard(props) {
  const [show, setShow] = useState(false);
  const [carslist, setlist] = useState([])
  const [placelists, setplacelist] = useState([])
  const listdetails = () => {
    var place = {
      "persion": props.name
    }
    axios.post("http://localhost:7000/api/listplaces", place).then((response) => {
      setlist(response.data)

    })
  }
  React.useEffect(() => {
    listdetails();
  }, []);

  const listallbyid = (e) => {

    axios.post("http://localhost:7000/api/listbyid", { "id": e }).then((response) => {

      var datas = response.data
      setplacelist(datas)
      handleShow()
    })
  }
  const handleClose = () => {

    setShow(false)
  };
  const handleShow = (e) => {

    setShow(true)
  };
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
      <div class="container cd mb-4">
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
                  <a href={void (0)} onClick={() => { listallbyid(student.id) }} role="button">
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
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          {/* <Modal.Title></Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        {placelists.map((lists, index) => ( 
          <div className='row'>
          
                      <div className='col-12'>
                        <img src={lists.place_logo}></img>
                      </div>
                      <div className='col-12 mt-2'>
                        <h5>Address: </h5>
                        <p className='text-break'>{lists.address}</p>
                        <div className='row'>
                            <div className='col-4'>
                            <h5>City: </h5><p>{lists.city}</p>
                            </div>
                            <div className='col-4'>
                            <h5>State: </h5><p>{lists.state}</p>
                            </div>
                            <div className='col-4'>
                            <h5>Pincode: </h5><p>{lists.pincode}</p>
                            </div>
                        </div>
                      </div>
            
          </div>
          ))}


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Dashboard;
