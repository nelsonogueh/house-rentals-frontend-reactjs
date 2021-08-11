import './Homepage.css';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Featured from '../components/Featured';


function Homepage() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Featured />
    </div>
  );
}

export default Homepage;
