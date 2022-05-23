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
var CryptoJS = require("crypto-js");
const En_key = "Admin1422"

function Dashboard(props) {
  const [show, setShow] = useState(false);
  const [carslist, setlist] = useState([])
  const [placelists, setplacelist] = useState([])
  const [email, setemail] = useState("")
  const [error, seterror] = useState("")
  const [notsent, setnotsent] = useState("")
  const [btndisa, setdisabled] = useState("")
  const [success, setsuccess] = useState("d-none")
  const [empty, setempty] = useState("d-none")
  const [emptys, setemptys] = useState(" ")
  const listdetails = () => {
    var place = {
      "persion": props.name
    }
    axios.post("http://localhost:7000/api/listplaces", place).then((response) => {
      setlist(response.data)
      if(response.data.length == 0){
         setempty("")
         
      }
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
  const sendmail = (e) => {
    if (email == "") {
      seterror("Email id is required!")
    } else {
      seterror("")
      setdisabled("disabled")

      var datas = {
        "template": `<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"0cfd141a14","applicationID":"886818","transactionName":"cV0IR0JbVFtUS0xaRFteAlZCG1xYUkwOXV9GQUlQX1lIW1RNBg==","queueTime":0,"applicationTime":34,"agent":"js-agent.newrelic.com/nr-686.min.js"}</script>
      <script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var o=n[t]={exports:{}};e[t][0].call(o.exports,function(n){var o=e[t][1][n];return r(o?o:n)},o,o.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<t.length;o++)r(t[o]);return r}({QJf3ax:[function(e,n){function t(e){function n(n,t,a){e&&e(n,t,a),a||(a={});for(var u=c(n),f=u.length,s=i(a,o,r),p=0;f>p;p++)u[p].apply(s,t);return s}function a(e,n){f[e]=c(e).concat(n)}function c(e){return f[e]||[]}function u(){return t(n)}var f={};return{on:a,emit:n,create:u,listeners:c,_events:f}}function r(){return{}}var o="nr@context",i=e("gos");n.exports=t()},{gos:"7eSDFh"}],ee:[function(e,n){n.exports=e("QJf3ax")},{}],3:[function(e,n){function t(e){return function(){r(e,[(new Date).getTime()].concat(i(arguments)))}}var r=e("handle"),o=e(1),i=e(2);"undefined"==typeof window.newrelic&&(newrelic=window.NREUM);var a=["setPageViewName","addPageAction","setCustomAttribute","finished","addToTrace","inlineHit","noticeError"];o(a,function(e,n){window.NREUM[n]=t("api-"+n)}),n.exports=window.NREUM},{1:12,2:13,handle:"D5DuLP"}],gos:[function(e,n){n.exports=e("7eSDFh")},{}],"7eSDFh":[function(e,n){function t(e,n,t){if(r.call(e,n))return e[n];var o=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:o,writable:!0,enumerable:!1}),o}catch(i){}return e[n]=o,o}var r=Object.prototype.hasOwnProperty;n.exports=t},{}],D5DuLP:[function(e,n){function t(e,n,t){return r.listeners(e).length?r.emit(e,n,t):void(r.q&&(r.q[e]||(r.q[e]=[]),r.q[e].push(n)))}var r=e("ee").create();n.exports=t,t.ee=r,r.q={}},{ee:"QJf3ax"}],handle:[function(e,n){n.exports=e("D5DuLP")},{}],XL7HBI:[function(e,n){function t(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:i(e,o,function(){return r++})}var r=1,o="nr@id",i=e("gos");n.exports=t},{gos:"7eSDFh"}],id:[function(e,n){n.exports=e("XL7HBI")},{}],G9z0Bl:[function(e,n){function t(){var e=d.info=NREUM.info,n=f.getElementsByTagName("script")[0];if(e&&e.licenseKey&&e.applicationID&&n){c(p,function(n,t){n in e||(e[n]=t)});var t="https"===s.split(":")[0]||e.sslForHttp;d.proto=t?"https://":"http://",a("mark",["onload",i()]);var r=f.createElement("script");r.src=d.proto+e.agent,n.parentNode.insertBefore(r,n)}}function r(){"complete"===f.readyState&&o()}function o(){a("mark",["domContent",i()])}function i(){return(new Date).getTime()}var a=e("handle"),c=e(1),u=window,f=u.document;e(2);var s=(""+location).split("?")[0],p={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-686.min.js"},d=n.exports={offset:i(),origin:s,features:{}};f.addEventListener?(f.addEventListener("DOMContentLoaded",o,!1),u.addEventListener("load",t,!1)):(f.attachEvent("onreadystatechange",r),u.attachEvent("onload",t)),a("mark",["firstbyte",i()])},{1:12,2:3,handle:"D5DuLP"}],loader:[function(e,n){n.exports=e("G9z0Bl")},{}],12:[function(e,n){function t(e,n){var t=[],o="",i=0;for(o in e)r.call(e,o)&&(t[i]=n(o,e[o]),i+=1);return t}var r=Object.prototype.hasOwnProperty;n.exports=t},{}],13:[function(e,n){function t(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,o=t-n||0,i=Array(0>o?0:o);++r<o;)i[r]=e[n+r];return i}n.exports=t},{}]},{},["G9z0Bl"]);</script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Minty-Multipurpose Responsive Email Template</title>
            <style type="text/css">
               /* Client-specific Styles */
               #outlook a {padding:0;} /* Force Outlook to provide a "view in browser" menu link. */
               body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}
               /* Prevent Webkit and Windows Mobile platforms from changing default font sizes, while not breaking desktop design. */
               .ExternalClass {width:100%;} /* Force Hotmail to display emails at full width */
               .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing.  More on that: http://www.emailonacid.com/forum/viewthread/43/ */
               #backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
               img {outline:none; text-decoration:none;border:none; -ms-interpolation-mode: bicubic;}
               a img {border:none;}
               .image_fix {display:block;}
               p {margin: 0px 0px !important;}
              .imgpop{
                color:#fff;
                font-weight:500;
              }
               table td {border-collapse: collapse;}
               table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
               /*a {color: #e95353;text-decoration: none;text-decoration:none!important;}*/
               /*STYLES*/
               table[class=full] { width: 100%; clear: both; }
               
               /*################################################*/
               /*IPAD STYLES*/
               /*################################################*/
               @media only screen and (max-width: 640px) {
               a[href^="tel"], a[href^="sms"] {
               text-decoration: none;
               color: #ffffff; /* or whatever your want */
               pointer-events: none;
               cursor: default;
               }
               .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
               text-decoration: default;
               color: #ffffff !important;
               pointer-events: auto;
               cursor: default;
               }
               table[class=devicewidth] {width: 440px!important;text-align:center!important;}
               table[class=devicewidthinner] {width: 420px!important;text-align:center!important;}
               table[class="sthide"]{display: none!important;}
               img[class="bigimage"]{width: 420px!important;height:219px!important;}
               img[class="col2img"]{width: 420px!important;height:258px!important;}
               img[class="image-banner"]{width: 440px!important;height:106px!important;}
               td[class="menu"]{text-align:center !important; padding: 0 0 10px 0 !important;}
               td[class="logo"]{padding:10px 0 5px 0!important;margin: 0 auto !important;}
               img[class="logo"]{padding:0!important;margin: 0 auto !important;}
      
               }
               /*##############################################*/
               /*IPHONE STYLES*/
               /*##############################################*/
               @media only screen and (max-width: 480px) {
               a[href^="tel"], a[href^="sms"] {
               text-decoration: none;
               color: #ffffff; /* or whatever your want */
               pointer-events: none;
               cursor: default;
               }
               .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
               text-decoration: default;
               color: #ffffff !important; 
               pointer-events: auto;
               cursor: default;
               }
               table[class=devicewidth] {width: 280px!important;text-align:center!important;}
               table[class=devicewidthinner] {width: 260px!important;text-align:center!important;}
               table[class="sthide"]{display: none!important;}
               img[class="bigimage"]{width: 260px!important;height:136px!important;}
               img[class="col2img"]{width: 260px!important;height:160px!important;}
               img[class="image-banner"]{width: 280px!important;height:68px!important;}
               
               }
            </style>
      
            
         
      <style type="text/css">
      
      </style>
      </head>
      <body>
      <div class="block">
         <!-- Start of preheader -->
         <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="preheader">
            <tbody>
               <tr>
                  <td width="100%">
                     <table width="580" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth">
                        <tbody>
                           <!-- Spacing -->
                           <tr>
                              <td width="100%" height="5"></td>
                           </tr>
                           <!-- Spacing -->
                
                           <!-- Spacing -->
                           <tr>
                              <td width="100%" height="5"></td>
                           </tr>
                           <!-- Spacing -->
                        </tbody>
                     </table>
                  </td>
               </tr>
            </tbody>
         </table>
         <!-- End of preheader -->
      </div>
      <div class="block">
         <!-- start of header -->
         <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="header">
            <tbody>
               <tr>
                  <td>
                     <table width="580" bgcolor="#0db9ea" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth" hlitebg="edit" shadow="edit">
                        <tbody>
                           <tr>
                              <td>
                                 <!-- logo -->
                                 <table width="280" cellpadding="0" cellspacing="0" border="0" align="left" class="devicewidth">
                                    <tbody>
                                       <tr>
                                          <td valign="middle" width="270" style="padding: 10px 0 10px 20px;" class="logo">
                                             <div class="imgpop text-white">
                                                Smart City
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <!-- End of logo -->
                                 <!-- menu -->
       
                                 <!-- End of Menu -->
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </td>
               </tr>
            </tbody>
         </table>
         <!-- end of header -->
      </div><div class="block">
         <!-- image + text -->
         <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="bigimage">
            <tbody>
               <tr>
                  <td>
                     <table bgcolor="#ffffff" width="580" align="center" cellspacing="0" cellpadding="0" border="0" class="devicewidth" modulebg="edit">
                        <tbody>
                           <tr>
                              <td width="100%" height="20"></td>
                           </tr>
                           <tr>
                              <td>
                                 <table width="540" align="center" cellspacing="0" cellpadding="0" border="0" class="devicewidthinner">
                                    <tbody>
                                       <tr>
                                          <!-- start of image -->
                                          <td align="center">
                                             <a target="_blank" href="#"><img width="540" border="0" height="282" alt="" style="display:block; border:none; outline:none; text-decoration:none;" src="https://www.kindpng.com/picc/m/148-1489706_transparent-smart-city-icon-hd-png-download.png" class="bigimage"></a>
                                          </td>
                                       </tr>
                                       <!-- end of image -->
                                       <!-- Spacing -->
                                       <tr>
                                          <td width="100%" height="20"></td>
                                       </tr>
                                       <!-- Spacing -->
                                       <!-- title -->
                                       <tr>
                                          <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="rightimage-title">
                                             `+ CryptoJS.AES.decrypt(placelists[0].name.toString(), En_key).toString(CryptoJS.enc.Utf8) + `
                                          </td>
                                       </tr>
                                     
                       
                                
                                       <!-- Spacing -->
                                    </tbody>
                                 </table>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
      
      <div class="block">
         <!-- Full + text -->
         <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="fullimage">
            <tbody>
               <tr>
                  <td>
                     <table bgcolor="#ffffff" width="580" align="center" cellspacing="0" cellpadding="0" border="0" class="devicewidth" modulebg="edit">
                        <tbody>
                           <tr>
                              <td width="100%" height="20"></td>
                           </tr>
                           <tr>
                              <td>
                                 <table width="540" align="center" cellspacing="0" cellpadding="0" border="0" class="devicewidthinner">
                                    <tbody>
                                       <!-- title -->
                                       <tr>
                                          <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="rightimage-title">
                                             Address
                                          </td>
                                       </tr>
                                       <!-- end of title -->
                                       <!-- Spacing -->
                                       <tr>
                                          <td width="100%" height="10"></td>
                                       </tr>
                                       <!-- Spacing -->
                                       <!-- content -->
                                       <tr>
                                          <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #666666; text-align:left;line-height: 24px;" st-content="rightimage-paragraph">
                                            `+ CryptoJS.AES.decrypt(placelists[0].address.toString(), En_key).toString(CryptoJS.enc.Utf8)  + `
                                          </td>
                                       </tr>
                                       <tr>
                                       <td width="100%" height="10"></td>
                                    </tr>
                                          <tr>
                                          <td style="font-family: Helvetica, arial, sans-serif; margin-bottom:5px;font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="rightimage-title">
                                             City
                                          </td>
                                       </tr>
                                           <tr>
                                          <td width="100%" height="10"></td>
                                       </tr>
                                       <!-- Spacing -->
                                       <!-- content -->
                                       <tr>
                                          <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #666666; text-align:left;line-height: 24px;" st-content="rightimage-paragraph">
                                          `+ CryptoJS.AES.decrypt(placelists[0].city.toString(), En_key).toString(CryptoJS.enc.Utf8)  + `
                                          </td>
                                       </tr>
                                       <tr>
                                       <td width="100%" height="10"></td>
                                    </tr>
                                        <tr>
                                          <td style="font-family: Helvetica, arial, sans-serif;font-size: 18px; color: #333333; text-align:left;line-height: 20px;" st-title="rightimage-title">
                                             State
                                          </td>
                                       </tr>
                                           <tr>
                                          <td width="100%" height="10"></td>
                                       </tr>
                                       <!-- Spacing -->
                                       <!-- content -->
                                       <tr>
                                          <td style="font-family: Helvetica, arial, sans-serif; font-size: 13px; color: #666666; text-align:left;line-height: 24px;" st-content="rightimage-paragraph">
                                             `+  CryptoJS.AES.decrypt(placelists[0].state.toString(), En_key).toString(CryptoJS.enc.Utf8) + `
                                          </td>
                                       </tr>
                                       <!-- end of content -->
                                       <!-- Spacing -->
                                       <tr>
                                          <td width="100%" height="10"></td>
                                       </tr>
                                    
                                       <!-- /button -->
                                       <!-- Spacing -->
                                       <tr>
                                          <td width="100%" height="20"></td>
                                       </tr>
                                       <!-- Spacing -->
                                    </tbody>
                                 </table>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="block">
         <!-- Start of preheader -->
         <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable" st-sortable="postfooter">
            <tbody>
               <tr>
                  <td width="100%">
                     <table width="580" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth">
                        <tbody>
                           <!-- Spacing -->
                           <tr>
                              <td width="100%" height="5"></td>
                           </tr>
                           <!-- Spacing -->
                           <tr>
                              <td align="center" valign="middle" style="font-family: Helvetica, arial, sans-serif; font-size: 10px;color: #999999" st-content="preheader">
                                 If you don't want to receive updates. please  <a class="hlite" href="#" style="text-decoration: none; color: #0db9ea">unsubscribe</a> 
                              </td>
                           </tr>
                           <!-- Spacing -->
                           <tr>
                              <td width="100%" height="5"></td>
                           </tr>
                           <!-- Spacing -->
                        </tbody>
                     </table>
                  </td>
               </tr>
            </tbody>
         </table>
         <!-- End of preheader -->
      </div>`,
        "subject": "Smart City",
        "email": email
      }

      axios.post("http://localhost:7000/api/mailsend", datas).then((response) => {
        setnotsent("d-none")
        
        setsuccess("")
        setemail("")
        setTimeout(() => {
         setsuccess("d-none")
         setdisabled("")
         setnotsent(" ")
        
         
        }, 3000);
      })
    }
  }
  const handleClose = () => {
    setdisabled("")
    setnotsent("")
    setsuccess("d-none")
    setemail("")
    setShow(false)
  };
  const handleShow = (e) => {
    setdisabled("")
    setnotsent("")
    setsuccess("d-none")
    setemail("")
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
           <div className={'col-lg text-center mt-4 mb-4 ' +empty}>
              <h2>Oops no data found!!!</h2>
           </div>
          {carslist.map((student, index) => (
            <div class={"col-lg-4 " +emptys}>
              <div class="card ca1" tabindex="0">
                <div class="card-image">
                  <img src={ CryptoJS.AES.decrypt(student.place_logo.toString(), En_key).toString(CryptoJS.enc.Utf8) } alt="" />
                </div>
                <div class="card-content">
                  <p class="kicker mb-2">{CryptoJS.AES.decrypt(student.name.toString(), En_key).toString(CryptoJS.enc.Utf8) }</p>
                  {/* <h2>Using Banner Stands To Increase Trade Show Traffic</h2> */}
                  <p className='c-color text-truncate' ><img className='locationimg' src={location}></img>:  {CryptoJS.AES.decrypt(student.address.toString(), En_key).toString(CryptoJS.enc.Utf8) }</p>
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
                <img src={ CryptoJS.AES.decrypt(lists.place_logo.toString(), En_key).toString(CryptoJS.enc.Utf8) }></img>
              </div>
              <div className='col-12 mt-2'>
                <h5>Address: </h5>
                <p className='text-break'>{CryptoJS.AES.decrypt(lists.address.toString(), En_key).toString(CryptoJS.enc.Utf8)}</p>
                <div className='row'>
                  <div className='col-4'>
                    <h5>City: </h5><p>{CryptoJS.AES.decrypt(lists.city.toString(), En_key).toString(CryptoJS.enc.Utf8)}</p>
                  </div>
                  <div className='col-4'>
                    <h5>State: </h5><p>{CryptoJS.AES.decrypt(lists.state.toString(), En_key).toString(CryptoJS.enc.Utf8)}</p>
                  </div>
                  <div className='col-4'>
                    <h5>Pincode: </h5><p>{CryptoJS.AES.decrypt(lists.pincode.toString(), En_key).toString(CryptoJS.enc.Utf8)}</p>
                  </div>
                  <div className='col-12 mt-2'>
                    <p className={'text-center '+success }>Mail Sent successfully!</p>
                    <div className={'row '+notsent}>
                      <div className='col-8'>
                        <div class="form-group">
                          <label for="formGroupExampleInput">Get info:</label>
                          <input type="text" class="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} id="formGroupExampleInput" placeholder="Enter your email" />
                          <p className='text-danger'>{error}</p>
                        </div>
                      </div>
                      <div className='col-4 mt-4'>
                        <button type="submit" value={lists.id} onClick={sendmail} className={"btn btn-primary "+btndisa }>Submit</button>
                      </div>
                    </div>

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
