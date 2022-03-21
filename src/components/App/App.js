import "./App.css";
import Navbar from "../Navbar";
import Hero from "../Hero";
import AboutMe from "../AboutMe";
import DemoWebsite from "../DemoWebsite";
import SmallProject from "../SmallProject";
import Achievement from "../Achievement";
import Connect from "../Connect";
//import Footer from "../Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <DemoWebsite />
      <SmallProject />
      <Achievement />
      <Connect />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
