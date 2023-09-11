import logo from './logo.svg';
import './App.css';
import Example from './Customrer/Components/Navigation/Navigation';
import Homepage from './Customrer/pages/Homepage';
import Footer from './Customrer/Components/Footer/Footer';
import ProductDeatils from './Customrer/Components/ProductDetails/ProductDetails.jsx';


function App() {
  return (
    <div className="">
      <Example/>
      <div>
        {/* <Homepage/>
        <Footer/> */}
        <ProductDeatils/>
        
      </div>
    </div>
  );
}

export default App;
