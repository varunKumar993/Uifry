import "./App.css";

// import Group from "../src/assets/Group.png";
// import Star from "../src/assets/Star 1.png";
// import Group2 from "../src/assets/Group 5.png";
// import iphone1 from "../src/assets/iPhone-13-Pro-Front.png";
// import iphone2 from "../src/assets/iPhone-13-Pro-Front-1.png";
// import circle from "../src/assets/Group 1000004721.png";
// import img from "../src/assets/Group 35924.png";
// import img2 from "../src/assets/Group 35935.png";
// import star2 from "./assets/star-05.png";
// import cube from "./assets/cube-02.png";
// import cube2 from "./assets/cube-04.png";
// import bell from "./assets/bell.png";
// import img3 from "../src/assets/Group 35937.png";
// import card from "../src/assets/card.png";
// import star3 from "./assets/star3.png";
// import img4 from "../src/assets/Group 1000002333.png";
// import img5 from "../src/assets/Group 1000002355.png";
// import frame from "../src/assets/Frame.png";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import PageContent from "./Component/PageContent";

function App() {
  // const divStyle = {
  //   backgroundImage: `url(${circle})`,
  //   height: "100vh",

  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // };

  return (
    <div className="container">
      <Header></Header>
      <PageContent></PageContent>
    <Footer></Footer>
    </div>
    
  );
}

export default App;
