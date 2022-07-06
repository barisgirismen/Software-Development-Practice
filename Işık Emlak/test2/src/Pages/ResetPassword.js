import { useState } from "react";
import Axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

function ResetPassword() {

    const [username, lookForUsername] = useState("");
    const [pass1, resetPasswordField1] = useState("");
    const [pass2, resetPasswordField2] = useState("");
    const [Status, setStatus] = useState("");
    let navigate = useNavigate();


    const changePassword = () => {
        Axios.post('http://localhost:3001/reset_password', {
            username: username,
            pass1: pass1,
            pass2: pass2
        }).then((response) => {
            if (response.data.message1) {
                setStatus(response.data.message1);
                setTimeout(function () {
                    navigate("/HomePage")
                }, 1000);
            } else if(response.data.message2){
                setStatus(response.data.message2);


            } else{
                setStatus("Cannot change password.")
                console.log(response.err);
            }
        });
    };




    return (
        <><div><Helmet><title>Reset Password | Işık Emlak</title></Helmet></div>
        <div className="centered">
            <div className="box">
                <br></br>
                <h2>Reset Password</h2>
                <br></br>
                <input type="text" name="username" id="username" placeholder="Username" onChange={(e) => { lookForUsername(e.target.value); } } />
                <input type="password" placeholder="New password" onChange={(e) => { resetPasswordField1(e.target.value); } } />
                <input type="password" placeholder="Confirm your password" onChange={(e) => { resetPasswordField2(e.target.value); } } />
                <h6>{Status}</h6>
                <button class="button" onClick={changePassword}><span>Reset Password</span></button>
                <br></br><br></br>
            </div>
        </div></>

    );
};
export default ResetPassword;