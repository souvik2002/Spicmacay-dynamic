import React, { Component } from 'react';
import "./7.css"
import "./1.css"
import "./13.css"

import twonine from "./images/29.jpg"
import seventeen from "./images/17.jpg"
import indika from './images/indika.jpg'
import one from "./images/1.jpg"

import {connect} from "react-redux"

import { searchyear } from './actions/recordactions';
import { Link } from 'react-router-dom'

import Website from './Website';
import Wings from './wings'



class Main extends Component {
  state = {

  }
  searchtype = (e, type) => {
    e.preventdefaults()
    this.props.dispatch(searchyear(type)).then(res => {
      this.setState({
        results: res.payload
      })

    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div>
        <div className="contain1">
          <Website/>
          {/* <Slider /> */}
        </div>




        <br /><br />

        <div className="row" id="about">

          <div className="col-lg-12 col-sm-12 col-md-12 description" >
            <div className="circle">

            </div>

            <h1 className="heading" style={{ textAlign: 'center', color: '#3d3d3d', marginLeft: '20px' }}>ABOUT US</h1>
            
            
            <p className="para" style={{ fontStyle: 'normal !important', wordWrap: 'break-word', color: '#3d3d3d' }}>SPIC MACAY (Society for the Promotion of Indian Classical Music And Culture Amongst Youth) is a non-political, nationwide, voluntary movement founded in 1977
              by Dr Kiran Seth, Professor-Emeritus at IIT-Delhi who was awarded the ‘Padma Shri’ for his contribution to the arts in 2009.
              SPICMACAY’s intention is to enrich the quality of formal education by increasing awareness about different aspects of Indian heritage
              and inspiring the young mind to imbibe the values embedded in it. It seeks to inspire youth through experiencing the mysticism embodied
              in the rich and heterogeneous cultural tapestry of Indian and World Heritage, with a hope that the beauty, grace, values and wisdom
              embodied in these arts will influence their way of life and thinking and inspire one to become a better human being.
              For this, the most accomplished artistes of the country render programmes of Indian Classical music and dance, folk, poetry,theatre, traditional paintings, crafts & yoga primarily in schools and colleges. In 2011, SPIC MACAY was awarded the Rajiv Gandhi Sadbhavana award in recognition of its contribution to youth development.</p>


          </div>

        </div>

        <br /><br />

        <h1 style={{ textAlign: "center", fontSize: '40px', color: '#3d3d3d' }}> EVENTS</h1>
        <br></br><br></br>

        <div className="contain1" >
          <div className="card" style={{ marginRight: "40px", borderRadius: '10px' }}>
            <div className="imgcard" style={{ borderRadius: '10px' }}>
              <img className="images" src={one} loading="lazy" />
            </div>
            <div className="detail">
              <h2 className="titl" style={{ fontSize: '15px !important', color: "#EEE2DC" }}>VIRASAT</h2>
              <p className="info" style={{ fontSize: '14px', fontFamily: 'Aeonik !important', color: "#EEE2DC" }}>VIRASAT is the official cultural extravaganza organized by SPIC MACAY NIT Durgapur Chapter.
                The perfect blend of gorgeous grace with sonorous tune swirls in the flavour of Indian culture
                and tradition. Esteemed artists of the likes of Pt Viswa Mohan Bhatt(Grammy Award
                Winner), Dr. N. Rajam, Pt. Ajoy Chakraborty etc. have been show stealers in the recent past. So
                what are you waiting for? Fasten your seatbelts and get ready to soak in India's rich heritage at
                its finest.</p>
              {/* <button onclick=""><a href="./loader2.html">READ MORE</a></button> */}
              <Link to={{
                pathname: "/virasat", state: {
                  type: "virasat"
                }
              }} style={{ fontSize: '10px', textAlign: "center" }}>
                SEE ARTICLES
              </Link>

            </div>
          </div>

          <div className="card" style={{ marginRight: "40px", borderRadius: '10px' }}>
            <div className="imgcard" style={{ borderRadius: '10px' }}>
              <img className="images" src={twonine} loading="lazy" />
            </div>
            <div className="detail">
              <h2 className="titl" style={{ fontSize: '15px !important', color: "#EEE2DC" }} >UTTRAYAN</h2>
              <p className="info" style={{ fontSize: '14px', fontFamily: 'Aeonik !important', color: "#EEE2DC" }}>Uttarayan is the annual kite festival of SPIC MACAY NIT Durgapur Chapter. It is celebrated every
                year in the day of Makar Sankranti. The fierce battle of kites and the energetic dance moves
                creates a vibrant environment . Everyone delves into the madness of this colourful festival and
                enjoys every bit of time.</p>
              {/* <button onClick=""><a href="https://m.facebook.com/story.php?story_fbid=2868811669881868&id=840463576050031">READ MORE</a></button> */}
              {/* <Link to={{pathname:"/event",state:{
                          type:"UTTRAYAN"
                      }}} style={{fontSize:'10px'}}>
                          SEE ARTICLES
                          </Link>   */}
            </div>

          </div>
          <div className="card" style={{ borderRadius: '10px' }}>
            <div className="imgcard" style={{ borderRadius: '10px' }}>
              <img className="images" src={seventeen} loading="lazy" />
            </div>
            <div className="detail">
              <h2 className="titl" style={{ fontSize: '15px !important', color: "#EEE2DC" }}>ANUBHAV</h2>
              <p className="info" style={{ fontSize: "14px", color: "#EEE2DC" }}>" Creativity is intelligence having fun." With this mantra, SPIC MACAY NIT Durgapur Chapter and
                BMEP join hands every year to organise its annual art workshop, Anubhav. This one of a kind art
                workshop focuses to bring the colourful flare of creativity among the underprivileged children
                of Durgapur. With a plethora of colourful art, craft and intricate origami, it is truly a magnificent
                opportunity for the children to explore the depths of their imagination and unleash its vibrancy</p>
              {/* <button onClick=""><a href="https://x.facebook.com/pg/spicmacaynitd/posts/?ref=page_internal&mt_nav=0">READ MORE</a></button> */}
              <Link to={{
                pathname: "/event", state: {
                  type: "ANUBHAV"
                }
              }} style={{ fontSize: "10px" }} >
                SEE ARTICLES
              </Link>
            </div>

          </div>
        </div>


        <br></br>
        <br></br>
        <div className="contain1" >
          <div className="card" style={{ borderRadius: '10px' }}>
            <div className="imgcard" style={{ borderRadius: '10px' }}>
              <img className="images" src={indika} loading="lazy" />
            </div>
            <div className="detail">
              <h2 className="titl" style={{ fontSize: "15px !important", color: "#EEE2DC" }}>INDIKA</h2>
              <p className="info" style={{ fontSize: "14px", color: "#EEE2DC" }}>VIRASAT is the official cultural extravaganza organized by SPIC MACAY NIT Durgapur Chapter.
                The perfect blend of gorgeous grace with sonorous tune swirls in the flavour of Indian culture
                and tradition. Esteemed artists of the likes of Pt Viswa Mohan Bhatt(Grammy Award
                Winner), Dr. N. Rajam, Pt. Ajoy Chakraborty etc. have been show stealers in the recent past. So
                what are you waiting for? Fasten your seatbelts and get ready to soak in India's rich heritage at
                its finest.</p>

              <Link to={{
                pathname: "/event", state: {
                  type: "INDIKA"
                }
              }} style={{ fontSize: "10px" }}>
                SEE ARTICLES
              </Link>
            </div>
          </div>

        </div>

        <br /><br />
        <br /><br />
        <br /><br />


        {/* <!-- wings --> */}
        <h1 style={{ textAlign: "center", fontSize: '40px', color: '#3d3d3d' }}> WINGS</h1>
        <br></br><br></br>
        {/* <div className="contain1"> */}
        {/* <div className="row">

<div className="col-lg-3 col-sm-12 col-xs-12 col-md-12">
<div className="flip-card" >
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={dance} alt="Avatar" style={{width:"300px",height:"300px",border:'1px solid black',borderRadius:'50%'}} loading="lazy"/>
    </div>
    <div className="flip-card-back">
    <h1 className='coi' style={{marginTop:"100px",color:"#EEE2DC",fontFamily:"Gilroy"}}>DANCE WING</h1>
    <p style={{marginTop:"20px",color:"#EEE2DC",fontFamily:"Gilroy",fontSize:'15px'}}>This wing stuns everyone with their moves.</p>
    </div>
  </div>
</div>
</div>

<div className="col-lg-3 col-sm-12 col-xs-12 col-md-12">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={twelve} alt="Avatar" style={{width:"300px",height:"300px",border:'1px solid black',borderRadius:'50%'}} loading="lazy"/>
    </div>
    <div className="flip-card-back">
    <h1 className='coi' style={{marginTop:"100px",color:"#EEE2DC",fontFamily:"Gilroy"}}>MUSIC WING</h1>
    <p style={{marginTop:"20px",color:"#EEE2DC",fontFamily:"Gilroy",fontSize:'15px'}}>This wings creates melody.</p>
    </div>
  </div>
</div>
</div>

<div className="col-lg-3 col-sm-12 col-xs-12 col-md-12">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={it} alt="Avatar" style={{width:"300px",height:"300px" ,borderRadius:'50%'}} loading="lazy"/>
    </div>
    <div className="flip-card-back">
    <h1 className='coi' style={{marginTop:"100px",color:"#EEE2DC",fontFamily:"Gilroy"}}>IT WING</h1>
    <p style={{marginTop:"20px",color:"#EEE2DC",fontFamily:"Gilroy",fontSize:'15px'}}>This wings handles the technical stuff.</p>
    </div>
  </div>
</div>
</div>

<div className="col-lg-3 col-sm-12 col-xs-12 col-md-12">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={eleven} alt="Avatar" style={{width:"300px",height:"300px",border:'1px solid black',borderRadius:'50%'}} loading="lazy"/>
    </div>
    <div className="flip-card-back">
    <h1 className='coi' style={{marginTop:"100px",color:"#EEE2DC",fontFamily:"Gilroy"}}>ART WING</h1>
    <p style={{marginTop:"20px",color:"#EEE2DC",fontFamily:"Gilroy",fontSize:'15px'}}>This wings add colors to the world.</p>
    </div>
  </div>
</div>
</div>


</div>
<br></br><br/>
<div className="contain1">
<div className="row">

<div className="col-lg-3 col-sm-12 col-xs-12 col-md-12">
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={content} alt="Avatar" style={{width:"300px",height:"300px" ,borderRadius:'50%'}} loading="lazy"/>
      </div>
      <div className="flip-card-back">
      <h1 className='coi' style={{marginTop:"100px",color:"#EEE2DC",fontFamily:"Gilroy"}}>CONTENT WING</h1>
      <p style={{marginTop:"20px",color:"#EEE2DC",fontFamily:"Gilroy",fontSize:'15px'}}>This wings provides information to showcases it to the world.</p>
      </div>
    </div>
  </div>
  </div>
</div>
</div>
 <br/><br/> */}
        <Wings />

        <br></br><br></br><br></br>
      </div>

    );
  }
}

export default connect()(Main);