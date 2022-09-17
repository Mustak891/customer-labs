import './App.css';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Services from "./components/services/Services";
import Footer from './components/Footer/Footer';
import Fregister from './components/Fregister/Fregister';
import { useEffect, useState } from 'react';
import { Api_url } from './components/Api_url/Api_Url';
import Proute from "./Proute";
import Dashboard from "./components/Dashboard/Dashboard";
import Logout from "./components/Logout/Logout";
import Flogin from './components/Flogin/Flogin';
import Dashpost from "./components/Dashboard/dashpost/Dashpost";

function App() {

  const [auth, setAuth] = useState(false);
  const [auth1, setAuth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch(`${Api_url}/auth`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });

      if (res.status === 200) {
        setAuth(true);
        setAuth1(false);
      }
      if (res.status === 401) {
        setAuth(false);
        setAuth1(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  return (
    <div>
      <NavBar auth={auth1} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/login" element={<Proute auth={auth1}><Flogin /></Proute>} />
        <Route path="/register" element={<Proute auth={auth1}><Fregister /></Proute>} />
        <Route path='/dashboard' element={<Proute auth={auth}> <Dashboard /> </Proute>} />
        <Route path='/logout' element={<Proute auth={auth}> <Logout /> </Proute>} />
        <Route path='/dashboard/add' element={<Proute auth={auth}> <Dashpost /> </Proute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
