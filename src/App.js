import './App.css';
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
    </div>
  );
}

export default App;
