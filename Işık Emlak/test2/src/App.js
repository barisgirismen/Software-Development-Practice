import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import ProfileCompany from './Pages/ProfileCompany';
import ProfileEnduser from './Pages/ProfileEnduser';
import ResetPassword from './Pages/ResetPassword';
import Header from './components/Header';
import RegisterCompany from './Pages/RegisterCompany';
import RegisterEndUser from './Pages/RegisterEndUser';
import Property from './Pages/Property';
import Purchase from './Pages/Purchase';

/* Just a heads up */

function App() {
    return (
            <Router>
                <div className='App'>
                <Header />       
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/login" exact element={<Login/>}/>
                    <Route path="/profilecompany/:username" element={<ProfileCompany />} />
                    <Route path="/profileenduser/:username" element={<ProfileEnduser />} />
                    <Route path="/registerenduser" exact element={<RegisterEndUser/>}/>
                    <Route path="/registercompany" exact element={<RegisterCompany/>}/>
                    <Route path="/resetpassword" exact element={<ResetPassword/>}/>
                    <Route path="/property/:curN" element={<Property />} />
                    <Route path="/purchase" element={<Purchase />} />
                </Routes>
                </div>
                </Router>
    );
}

export default App;
