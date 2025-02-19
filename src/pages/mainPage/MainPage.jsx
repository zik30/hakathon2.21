import { Button } from "antd";
import stl from "./mainPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";


function MainPage() {
  return (
    <div>
      <Header />

      <div className={stl.main}>
        <div className={stl.main_inner}>
          <h1>
            Unified one <span>solution</span> any device
          </h1>
          <p className={stl.p}>
            We help businesses deliver digital customer experiences that are
            personalized, optimized, and synchronized.
          </p>
          <Button type="primary">
            Get started ⮕
          </Button>
        </div>
      </div>

      <div className={stl.solutions}>
        <div className={stl.solutions_inner}>
            <div className={stl.img}></div>
            <div className={stl.text}>
                <h2>Our Solutions</h2>
                <p>Don’t limit yourself with static templates, bring oyour vision to flofe wit our Ai powered platform. Your Artificail Design Assistant will auto-optimize your website or online store so you can fast  track your path to success. <br/><br/>Your digital journey is as unque as your vision, and we’re ready to remove any obstacles along the way. create your won platform ro have one of our expersts do it for you.</p>
            </div>
        </div>
      </div>

      <div className={stl.plug}>
        <div className={stl.plug_inner}>
            <div className={stl.text}>We are here to help you grow your online business</div>
        </div>
      </div>

      <div className={stl.digital}>
        <div className={stl.digital_inner}>
            <h2>Speedy digital experience creation</h2>
            <div className={stl.cards}>
                <div className={stl.card}>
                    <div className={stl.circle}></div>
                    <h3>Educational Insights</h3>
                    <p>Our courses are developed in collaboration with industry readres.</p>
                    <span>Learn more ⮕</span>
                </div>
                <div className={stl.card}>
                    <div className={stl.circle}></div>
                    <h3>Educational Insights</h3>
                    <p>Our courses are developed in collaboration with industry readres.</p>
                    <span>Learn more ⮕</span>
                </div>
                <div className={stl.card}>
                    <div className={stl.circle}></div>
                    <h3>Educational Insights</h3>
                    <p>Our courses are developed in collaboration with industry readres.</p>
                    <span>Learn more ⮕</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
