import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Helmet } from 'react-helmet';

function Purchase() {

    const [creditCardBrand, setCreditCardBrand] = useState("VISA");
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [securityNumber, setSecurityNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [Status, setStatus] = useState("");
    let navigate = useNavigate();

    const purchaseProperty = () => {
            if(creditCardNumber.length !== 19){
                setStatus("Credit Card Number is Invalid!");
                  /*loginBoolean = true;*/
                
            }
            else if(securityNumber.length !== 3){
                setStatus("Security Number is Invalid!");
                
            } else if(expirationDate.length !== 4) {
                setStatus("Expiration Date is Invalid!");
            } else {
                setStatus("Successfully purchased property.")
                setTimeout(function() {
                    navigate("/")
                  }, 1000);
            }
        
    }

    return(
        <><div><Helmet><title>Purchase | Işık Emlak</title></Helmet></div>
        <div className="centered">
            <div className="box">
                <br></br>
                <h2>Purchase Property</h2>
                <br></br>
                <select id="dropdown0" onChange={(e) => { setCreditCardBrand(e.target.value); } }>
                    <option value="VISA">VISA</option>
                    <option value="Mastercard">Mastercard</option>
                </select>
                <input type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="Credit Card Number" onChange={(e) => { setCreditCardNumber(e.target.value); } } />
                <input type="text" minLength="3" maxLength="3" placeholder="Security Number" onChange={(e) => { setSecurityNumber(e.target.value); } } />
                <input type="text" minLength="4" maxLength="4" placeholder="Expiration Date" onChange={(e) => { setExpirationDate(e.target.value); } } />
                <h6>{Status}</h6>
                <br></br><br></br>
                <button class="button" onClick={purchaseProperty}><span>Purchase Property</span></button>
                <br></br><br></br>
            </div>
        </div></>
    )
}

export default Purchase;