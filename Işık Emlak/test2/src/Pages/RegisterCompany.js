import { useState } from "react";
import Axios from 'axios';
import {Navigate, useNavigate} from "react-router-dom";
import { Helmet } from 'react-helmet';

/* Just a heads up */

function RegisterCompany() {
    
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [Status, setStatus] = useState("");
    let navigate = useNavigate();



    const registerCompany = () => {
        Axios.post('http://localhost:3001/register_company', {
            username: username,
            password: password
        }).then((response) => {
            if(response.data.message4){
                setStatus(response.data.message4);
                setTimeout(function() {
                    navigate("/HomePage");
                  }, 1000);
            }
             else if(response.data.message2){
                setStatus(response.data.message2);
                console.log(response.err);
            } else{
                setStatus("Cannot Register");
                console.log(response.err);
            }
        });
    };



    return (
        <><div><Helmet><title>Company Register | Işık Emlak</title></Helmet></div>
        <div className="centered">
            <div className="box">
                <br></br>
                <h2>Company Register</h2>
                <br></br>
                <input type="text" name="username" id="username" placeholder="Username" onChange={(e) => { setUsername(e.target.value); } } />
                <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); } } />
                <h6>{Status}</h6>
                <button class="button" onClick={registerCompany}><span>Register</span></button>
                <br></br><br></br>
            </div>
        </div></>
    );
};

export default RegisterCompany;
