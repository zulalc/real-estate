import SearchBar from "../../components/searchBar/SearchBar";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Your Dream Home</h1>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>

            <div className="box">
              <h1>500+</h1>
              <h2>Successful Property Sales</h2>
            </div>

            <div className="box">
              <h1>15</h1>
              <h2>Industry Awards</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
