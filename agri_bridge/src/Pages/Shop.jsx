import "./Shop.css";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className="box1">
      <Hero />
      <Content />
    </div>
  );
}

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      <h1>Transforming waste into worth</h1>
      <input placeholder="Enter the raw material you need here.."></input>
      <p style={{ fontSize: "20px" }}>or</p>
      <div className="list-button">
        <div onClick={() => navigate("/product")} className="button">
          List your By-products
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (

    <div className="container" >
        

      <Section title="Suggested for you" />
      <Section title="More for you" />
    </div>
  );
};

const Section = ({ title }) => (
  <div  style={{marginTop:"10%",marginBottom: "10%"}}>
    <h2>{title}</h2>
    <div className="topic-line"></div>
    <div className="content-box">
      <div className="inner-box">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      <div className="inner-box">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  </div>
);

const Box = () => {
  const navigate = useNavigate();
  return (
    <div className="sub-box">
      <div className="inner-sub-box"></div>
      <h4>Name</h4>
      <div className="slide-container">
        <p className="paragraph-style">Details of the products</p>
        <button  onClick={() => navigate("/product")}>Check</button>
      </div>
    </div>
  );
};

export default Home;
