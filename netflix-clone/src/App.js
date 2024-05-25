// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import RowList from './Components/Row/Rowlist/RowList';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </div>
  );
}

export default App;
