// import "./App.css";
import "../Pages/pro.css";
import "../Pages/Shop.css";
// import "./home";

function Pro() {
  return (
    <div>
      <div style={{ marginTop: "70px" }}>
        <Top />
        <Reviews />
        <Reviews />
        <Suggest />
      </div>
    </div>
  );
}

function change() {}

const Top = () => {
  return (
    <div>
      <div id="head_box">
        <div id="image"></div>
        <div id="img_right_content">
          <div style={{ display: "flex", gap: "20px" }}>
            <h1>Rice Straw</h1>
            <h2 style={{ color: "green", alignSelf: "center" }}>₹ 50/kg</h2>
          </div>
          <div></div>
          <p>Village,City,District,State</p>
          <div id="seller_message">
            <h3>Messsage from Seller</h3>
            <div id="seller_content">
              <p style={{ padding: "10px 5px" }}>
                Nisi amet ea elit reprehenderit.Mollit amet veniam est enim
                cupidatat id minim aute labore voluptate anim.Proident magna qui
                ut consequat anim aliquip commodo amet mollit officia laborum
                sint labore aute.Sit occaecat nostrud proident exercitation
                laborum.Qui quis et Lorem duis.
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <button id="cart_button" style={{ backgroundColor: "white" }}>
              Add to cart
            </button>
            <button
              id="cart_button"
              onClick={change()}
              style={{ backgroundColor: "green" }}
            >
              Order now
            </button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginRight: "800px" }}>Reviews</h1>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div id="head_box" style={{ marginBottom: "20px" }}>
      <div id="buyer">
        <h3>Buyer name</h3>
        <div id="review">
          <p>
            Ex deserunt esse ullamco non cupidatat id.Excepteur reprehenderit do
            voluptate dolor.Quis dolore anim sunt pariatur sint anim
            irure.Mollit ullamco magna reprehenderit ea ullamco sint fugiat
            deserunt ut tempor ipsum.Excepteur commodo dolore anim duis dolore
            sit occaecat labore nisi do aliqua amet nulla aliqua.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            margin: "20px",
            justifyContent: "space-around",
          }}
        >
          <img src={require("../pic/grass-roll.png")}></img>
          <img src={require("../pic/grass-roll.png")}></img>
          <img src={require("../pic/grass-roll.png")}></img>
        </div>
      </div>
      <div id="buyer">
        <h3>Buyer name</h3>
        <div id="review">
          <p>
            Ex deserunt esse ullamco non cupidatat id.Excepteur reprehenderit do
            voluptate dolor.Quis dolore anim sunt pariatur sint anim
            irure.Mollit ullamco magna reprehenderit ea ullamco sint fugiat
            deserunt ut tempor ipsum.Excepteur commodo dolore anim duis dolore
            sit occaecat labore nisi do aliqua amet nulla aliqua.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            margin: "20px",
            justifyContent: "space-around",
          }}
        >
          <img src={require("../pic/grass-roll.png")} alt=""></img>
          <img src={require("../pic/grass-roll.png")} alt=""></img>
          <img src={require("../pic/grass-roll.png")} alt=""></img>
        </div>                          
      </div>
    </div>
  );
};

const Suggest = () => {
  return (
    <div style={{ marginLeft: "10%" }}>
      <h2>Suggested for you</h2>
       
      <div className="content-box">
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
};

const Box = () => {
  return (
    <div className="sub-box">
      <div className="inner-sub-box"></div>
      <h4>Name</h4>
      <div className="slide-container">
        <p className="paragraph-style">Details of the products</p>
        <button>Check</button>
      </div>
    </div>
  );
};

export default Pro;
