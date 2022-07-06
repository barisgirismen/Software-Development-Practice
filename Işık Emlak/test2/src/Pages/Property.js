import React from "react";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Axios from "axios";
import { Helmet } from 'react-helmet';

function Property() {
  let { curN } = useParams();
  let idCurrent = curN - 1;

  const [text, setText] = useState("");

  const propertyDetails = () => {
    Axios.post('http://localhost:3001/show_property', {

    }).then((response) => {
      if (response.data.message1) {
        console.log(response.data.message1);
      } else if (response.data.message2) {
        console.log(response.data.message2);
        var jsonData = JSON.parse(response.data.message2);
        let text2 = "";
        text2 += "Property ID: " + jsonData[idCurrent].id + "\nProperty Owner: " + jsonData[idCurrent].propertyOwner + "\nProperty Luxury: " + jsonData[idCurrent].propertyLuxury + "\nProperty For Sale: " + jsonData[idCurrent].propertyForSale + "\nProperty Type: " + jsonData[idCurrent].propertyType + "\nProperty Building: " + jsonData[idCurrent].propertyBuilding + "\nProperty City: " + jsonData[idCurrent].propertyCity + "\nProperty Town: " + jsonData[idCurrent].propertyTown + "\nProperty District: " + jsonData[idCurrent].propertyDistrict + "\nProperty Price: " + jsonData[idCurrent].propertyPrice + "\nProperty Volume: " + jsonData[idCurrent].propertyVolume + "\nProperty Rooms: " + jsonData[idCurrent].propertyRooms;
        console.log(text2);
        setText(text2);
      }

    });
  };



  return (
    <><div><Helmet><title>Property | Işık Emlak</title></Helmet></div>
    <div className="centered3">
      <div className="box3">
        <br></br>
        <div className="text-center">
          <h2>Property Details</h2>
        </div>
        <br></br>

        {propertyDetails()}
        <div className="display-linebreak" style={{ color: 'white' }}>
          {text}
        </div>
        <br></br>
      </div>
      <br></br>

      <div class="text-center">
      <Link to='/purchase'>
      <button type="button" className="button">Purchase</button>
      </Link>
      </div>
    </div></>

  );
}


export default Property;