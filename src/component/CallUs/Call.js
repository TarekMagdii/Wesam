import React from "react";
import "./Call.css";
import Call1 from "../../Images/Phone.png"
import whatsapp  from "../../Images/whatsapp.png"
import person from "../../Images/person.png"
const Call = () => {
  return (
    <div id="#contact" className="call ">
      <div className="container">
        <div className="row">
          <div className="main">
            <div className="section-header text-center pb-5">
              <h1> اتصل بنا</h1>
              <p>نحن ف خدمتك دائما ونرحب بجميع اسئلتك واستفساراتك</p>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-5'>
            <img src={Call1} alt="" />
        </div>
        <div className="photos-group">
        <img className='img6' src={person} alt="" />
        <img className='img5' src={whatsapp} alt="" />
        
    </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
