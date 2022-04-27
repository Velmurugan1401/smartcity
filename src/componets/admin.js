import DataTable from 'react-data-table-component';
import axios from "axios";
import "../css/admin.css"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React from 'react';

const columns = [
    {
        name: 'Name',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Address',
        selector: row => row.year,
        sortable: false,
    },
    {
        name: 'Pincode',
        selector: row => row.pincode,
        sortable: false,
    },
    {
        name: 'Persion',
        selector: row => row.persion,
        sortable: false,
    },
    {
        name: 'Action',
        selector: row => row.action
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',

        action: <button type="button" class="btn btn-outline-info">Edit</button>
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        action: <button type="button" class="btn btn-outline-info">Edit</button>
    }
]


function Admin() {
    const [show, setShow] = useState(false);
    const [listdatas, setlist] = useState([])
    const [name, setname] = useState(null)
    const [city, setcity] = useState(null)
    const [state, setstate] = useState(null)
    const [pincode, setpincode] = useState(null)
    const [address, setaddress] = useState(null)
    const [persion, setpersion] = useState(null)
    const [placeimg, setplaceimg] = useState(null)
    const [aplaces, setaplce] = useState("")
    const [id, setid] = useState("")
    const [uplaces, setuplace] = useState("d-none")
    const [errormsg,seterrmsg] = useState("")
    const [succmessage,setsuccmessage] = useState("Place added successfully!")
    const [add, setadd] = useState("")
    const [successmsg, setsuccessmsg] = useState("d-none")
    const addplace = () =>{
        if(name == "" || name == null || city == "" || city==null || state == "" || state==null){
            seterrmsg("Please fill the all required filed !")
        }else{
            var place = {
                "name":name,
                "city":city,
                "state":state,
                "pincode":pincode,
                "address":address,
                "persion":persion,
                "place_logo":placeimg
            }
            axios.post("http://localhost:7000/api/adduser",place).then((response) => {
                setsuccmessage("Place added successfully!")
                setadd("d-none")
                setsuccessmsg("")
                listall()
                setTimeout(() => {
                    setShow(false)
                }, 2000);
            })
        }

    }
    const deletelist = (e) =>{
        
        axios.post("http://localhost:7000/api/delete",{"id":e.target.value}).then((response) => {
            setadd("d-none")
            // setsuccessmsg("")

            if(response.status){
                setsuccmessage("Place deleted successfully!")
            }else{
                setsuccmessage("Error in delete")
            }
            setShow(true)
            listall()
            setTimeout(() => {
                handleClose()
            }, 2000);
        });
    

    }
    const listallbyid = (e) =>{
        setid(e.target.value)
        axios.post("http://localhost:7000/api/listbyid",{"id":e.target.value}).then((response) => {
            var datas = response.data[0]
            setname(datas.name)
            setcity(datas.city)
            setstate(datas.state)
            setaddress(datas.address)
            setpersion(datas.persion)
            setpincode(datas.pincode)
            setplaceimg(datas.place_logo)
            seterrmsg("")
            setShow(true)
            setaplce("d-none")
            setuplace("")
        })
    }
    const handleClose = () => {
        setaplce("")
        setuplace("d-none")
        setadd("")
        setsuccessmsg("d-none")
        setShow(false)
    };
    const handleShow = (e) => {
        
        setadd("")
        setsuccessmsg("d-none")
        seterrmsg("")
        setShow(true)
    };

    React.useEffect(() => {
        listall();
      }, []);
    const listall = () => {
        axios.get("http://localhost:7000/api/listusers").then((response) => {
            var datas = []
            for (var i = 0; i < response.data.length; i++) {
                datas.push({
                    id: response.data[i].id,
                    title: response.data[i].name,
                    year: response.data[i].address,
                    pincode: response.data[i].pincode,
                    persion:response.data[i].persion,

                    action: <div><button type="submit" class="btn btn-outline-info mr-2" value={response.data[i].id} onClick={(e) => { listallbyid(e) }}>Edit</button><button type="submit" class="btn btn-outline-info delbtn" value={response.data[i].id} onClick={(e) => { deletelist(e) }}>delete</button></div>
                })
            }
            setlist(datas)
        });
    }
    const placeimage = (event) => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          let reader = new FileReader();
          reader.readAsDataURL(img);
          reader.onload = function () {
            setplaceimg(reader.result)
    
          };
    
        }
      };
    const updatelist = (e) => {
        var place = {
            "name":name,
            "city":city,
            "state":state,
            "pincode":pincode,
            "address":address,
            "persion":persion,
            "place_logo":placeimg,
            "id":id
        }
        axios.post("http://localhost:7000/api/updateuser",place).then((response) => {
            setsuccmessage("Place Updated successfully!")
            setadd("d-none")
            setsuccessmsg("")
            setTimeout(() => {
                setShow(false)
            }, 2000);
        })
        setaplce("d-none")
        setuplace("")
        listall()
    }
    const addmodal = (e) =>{
        e.preventDefault()
        setname("")
        setcity("")
        setstate("")
        setaddress("")
        setpersion("")
        setpincode("")
        setplaceimg("")
        setid("")
        handleShow()
    }
    return (
        <div className="m-3">
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand">Places for Student/Employes/Tourist</a>
                <form class="form-inline">
                    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
                    <button class="btn btn-outline-success my-2 " onClick={addmodal} type="submit">Add List</button>
                </form>
            </nav>

            <DataTable
                columns={columns}
                data={listdatas}
            />
            {/* <button onClick={listall}>click mee</button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Add Places</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={'text-center '+ successmsg }>
                        <h4>{succmessage}</h4>
                    </div>
                    <form className={add}>
                        <div className="row">
                            <div className="col-6 mb-2">
                                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} className="form-control" placeholder="Place Name" />
                            </div>
                            <div className="col-6">
                                <input type="text" value={city} onChange={(e)=>{setcity(e.target.value)}} className="form-control" placeholder="City" />
                            </div>
                            <div className="col-6 mb-2">
                                <input type="text" value={state} onChange={(e)=>{setstate(e.target.value)}} className="form-control" placeholder="State" />
                            </div>
                            <div className="col-6">
                                <input type="text" value={pincode} onChange={(e)=>{setpincode(e.target.value)}} className="form-control" placeholder="pincode" />
                            </div>
                            <div className="col-6 mb-2">
                                <select class="form-select" value={persion} onChange={(e)=>{setpersion(e.target.value)}} aria-label="Default select example">
                                    <option selected>Select who needed this</option>
                                    <option value="student">Students</option>
                                    <option value="employe">Employes</option>
                                    <option value="tourists">Tourists</option>
                                    <option value="all">All</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <input type="file" title='Choice place image' onChange={(e)=>{placeimage(e)}} className="form-control" placeholder="choice file" />
                            </div>


                        </div>

                        <div class="form-group mb-2">
                            {/* <label for="candiadatesympole">Party Sympole</label> */}
                            <textarea class="form-control" value={address} onChange={(e)=>{setaddress(e.target.value)}} id="exampleFormControlTextarea1" rows="3" placeholder='Address'></textarea>
                        </div>
                        <p className='text-danger'>{errormsg}</p>


                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className={'add '+aplaces } onClick={addplace} >
                        Submit
                    </Button>
                    <Button variant="primary" className={'update '+uplaces } onClick={updatelist} >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default Admin