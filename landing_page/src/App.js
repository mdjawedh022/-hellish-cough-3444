
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './pages/AllRoutes';
// import AddressForm from './pages/SignIn';


function App() {
  return (
    <div className="App">
       <Navbar/>
     <AllRoutes/>
     <Footer/>
{/* <AddressForm/> */}
    </div>
  );
}

export default App;
