
import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './pages/AllRoutes';
// import AddressForm from './pages/SignIn';


function App() {
  
  const [searchText,setSearch] = useState("")
  return (
    <div className="App">
       <Navbar searchText={searchText} setSearch={setSearch}/>
     <AllRoutes searchText={searchText} setSearch={setSearch} />
     <Footer/>
{/* <AddressForm/> */}
    </div>
  );
}

export default App;
