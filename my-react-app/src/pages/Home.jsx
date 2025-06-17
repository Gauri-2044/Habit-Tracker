import Navbar from "../components/Navbar";
import HeaderBar from "../components/HeaderBar";
import "../styles/Home.css";

function Home({habits}) {
  return (
    <div className="main-div">
      <Navbar />
      <div className="content-div">
        <HeaderBar habits={habits} />
      </div>
    </div>
  );
}

export default Home;
