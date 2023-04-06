import './App.css';
import Backtotop from './Backtotop';
import Explore from './Explore';
import Footer from './Footer';
import Header from './Header';
import Price from './Price';
import Review from './Review';


function App() {
  return (
    <div className="App">
      <Header />
      <Explore />
      <Price />
      <Review />
      <Footer />
      <Backtotop />
    </div>
  );
}

export default App;
