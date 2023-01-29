import NavBar from "./components/NavBar";
import "./index.css";
import MainContent from "./components/MainContent";
import Changable from "./components/Changable";
// import im from "./images/athletic.png";
import data from "./data";

function App() {
  const datas = data.map((item) => {
    return (
      <div>
        <div className="compo-flow">
          <Changable
            img={item.coverImg}
            // img={im}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
          />
        </div>
      </div>
    );
  });
  return (
    <div>
      <NavBar />
      <MainContent />
      <div className="datass">{datas}</div>
    </div>
  );
}

export default App;
