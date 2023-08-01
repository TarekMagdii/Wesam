import React from "react";
import Navbarr from "../Navs/Navs";
import "./Home.css";
import Aboutus from "../../Images/About.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArchive,
  faBank,
  faBriefcase,
  faCity,
  faGavel,
  faKeyboard,
  faPeopleGroup,
  faSquareCaretLeft,

  faSquareCheck,
  faThumbsUp,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";


function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <Navbarr />
        <header>
          <div id="header" className="container">
            <div className="row">
              <div className=" main">
                <div className="text">
                  <h3>الوسام</h3>
                  <p> للمحاماه والاستشارات القانونيه والتحكيم </p>
                </div>
                <div className="call-btn">
                  <button> المزيد</button>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </header>
      </div>

      <section id="workProcess" className="workProcess">
        <div className="container">
          <div className="head">
            <h2>من نحن ؟</h2>

            <p>
              شركة مهنية ذات مسؤولية محدودة، جنسيتها سعودية، مرخصة من وزارة
              العــدل ووزارة التجارة في المملكة العربية السعودية، وكذلك من
              الهيئة السعودية للمحامين، مركزهــا الرئيســي فـي محافظة جدة، تتمتع
              بخبرات على أعلى مستوى، وتدمج في عملها بين التمسك بأحكام الشريعة
              الإسلامية والأنظمة المرعية في المملكة العربية السعودية، ومـا بين
              منهجيات الممارسات القانونية العالمية الرفيعة لتقديم خدمات وحلول
              قانونية متميزة ومبتكرة بمهنية واحترافية عالية.
            </p>
            <img src={Aboutus} alt="" />
            <h1>قيامنا</h1>
            <h4>
              {" "}
              <span> ● الصدق والامانه </span>والحرص الدائم علـى الامتثــال
              والالــتزام القانونى 
            </h4>
            <h4>
              {" "}
              <span> ● احترام القانون </span>والتمسك الكامل بالاخلاق الساميه لمهنه
              المحاماه 
            </h4>
            <h4>
              {" "}
              <span> ● النزاهه والشفافيه </span>فى كل اجراءات العمل ومع جميع
              العملاء 
            </h4>

            <hgroup>رويتنا</hgroup>
            <h>
              يتطلع فريق شركة الوسام للمحاماة والاستشارات القانونية والتحكيــم،
              لأن يكــون النموذج السعــودي الرائد في تقديم الخدمـــات
              القانونـــية الاحترافية للأفراد والشــركات وفق أعلى المعايير
              المحــلية والعـــالمية الموثوقة وبالموائمة مع رؤية المملكة العربية
              السعودية للعام 2030م.
            </h>
          </div>
        </div>
      </section>
      <section id="service" className="service">
        <div className="container">
          <div className="info">
            <h3>خدماتنـا</h3>
            <p>
              لدينا العديد من الأقسام التي تخدم عملائنا بمهنية واحترافية عالية.
            </p>
          </div>
          <div className="row">
            <div className="workProcess-boxes">
              <div className="main">
                <div className="box-1">
                  <FontAwesomeIcon className="arrowIcon" icon={faGavel} />{" "}
                  <h5>الاستشارات القانونية والشرعية والنظامية</h5>
                  <h3>
                    دارسة كافة الوقائع والحالات القانونية والقوانين الحاكمة لها
                    ومن ثم ابداء الاراء القانونية والشرعية حولها
                  </h3>
                  <div></div>
                </div>
              </div>
              <div className="main">
                <div className="box-1">
                  <FontAwesomeIcon className="arrowIcon" icon={faBank} />{" "}
                  <h5> التقاضي والترافع والتمثيل القضائي</h5>
                  <h3>
                    تمثيل كافة عملاء الشركة بمختلف أشكالهم القانونية في تسوية
                    النزاعات الناشئة لديهم
                  </h3>
                  <div></div>
                </div>
              </div>

              <div className="main">
                <div className="box-1">
                  <FontAwesomeIcon className="arrowIcon" icon={faArchive} />{" "}
                  <h5>صياغة ومراجعة العقود والاتفاقيات</h5>
                  <h3>
                    اعداد وصياغة جميع العقود التجارية المحلية والدولية باللغة
                    العربية والانجليزية، وعلى أساس علمي وقانوني سليم،{" "}
                  </h3>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="workProcess-boxes">
          <div className="main">
          
        <div className="box-1">
          <FontAwesomeIcon className="arrowIcon" icon={faKeyboard} />{" "}
          <h5> الشركــات</h5>
          <h3>
            تقديم النصح والمشورة فيما يتعلق بتحديد الشكل المناسب من 
            أنواع الشركات من حيث التأسيس والمتابعة لدى الجهات المختصة
            والحصول على التراخيص
          </h3>
          <div></div>
        </div>
      </div>

      <div className="main">
        <div className="box-1">
          <FontAwesomeIcon
            className="arrowIcon"
            icon={faWandMagicSparkles}
          />{" "}
          <h5>قسم الوساطة والصلح والتحكيم </h5>
          <h3>
            تقديم كافة الخدمات المتعلقة بالطرق البديلة لفض النزاعات
            والخلافات وصياغة ومراجعة اتفاقيات التحكيم وتمثيل الأطراف في
            غرف التحكيم بواسطة محكمين معتمدين
          </h3>
        </div>
      </div>
          </div>
          </div>
      </section>

      <section id="service" className="special">
        <div className="container">
          <div className="info">
            <h3>مجالات التخصص والممارسة</h3>
            <p>
              لدينا الكثير من التخصصات التي تخدم عملائنا بمهنية واحترافية عالية.{" "}
            </p>
          </div>
          <div className="row">
            <div className="special-box">
              <div className="main">
                <div className="box-1">
                  <FontAwesomeIcon className="arrowIcon" icon={faAddressCard} />{" "}
                  <h5>الأحوال الشخصية</h5>
                </div>
              </div>
              <div className="main">
                <div className="box-1">
                  <FontAwesomeIcon className="arrowIcon" icon={faSquareCheck} />{" "}
                  <h5>التركات والوصايا وتوثيقها</h5>
                </div>
              </div>

              <div className="main">
                <div className="box-1">
                  <FontAwesomeIcon className="arrowIcon" icon={faPeopleGroup} />{" "}
                  <h5>المنازعات العمالية </h5>
                  <div></div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="row">
            <div className="special-box">
              <div className="main">
                <div className="box-1">
                <FontAwesomeIcon className="arrowIcon" icon={faCity} />{" "}
                <h5>القضايا العمالية والعقارية والتجارية</h5>
                </div>
              </div>
              <div className="main">
                <div className="box-1">
                <FontAwesomeIcon className="arrowIcon" icon={faThumbsUp} />{" "}
                <h5>منازعات التنفيذ</h5>
                </div>
              </div>

              <div className="main">
                <div className="box-1">
                <FontAwesomeIcon className="arrowIcon" icon={faBriefcase} />{" "}
                <h5> تاسيس الشركات</h5>
                  <div></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <div id="#contact" className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="main">
              <div className="section-header text-center pb-5">
                <h1>اطلب خدمه</h1>
                <p>
                  شارع الأمير سلطان - مبنى رومان سـنتر مقابـل دوار التاريخ -
                  الدور الاول مكتب 111. +20122368944 ● alwesam.s.d@gmail.com
                </p>
              </div>
            </div>
            <div className="row m-0">
              <div className="main">
                <div className="row">
                  <div className="col-md-5">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="الاسم الاول"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="الاسم الثانى"
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-10">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      required
                      placeholder="البريد الالكترونى"
                    ></input>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      required
                      placeholder="الموضوع الاول"
                    ></input>
                  </div>
                </div>
                <div className="col-md-5 ">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="الموضوع الثانى"
                  ></input>
                </div>
              </div>
              <div className="col-md-10">
                <div className="mb-3"  >
                  <textarea rows="8" required className="form-control"   placeholder="التفاصيل..." >
                  </textarea>
                  <button><FontAwesomeIcon className="send" icon={faSquareCaretLeft} /></button>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </React.Fragment>
  );
}

export default Home;
