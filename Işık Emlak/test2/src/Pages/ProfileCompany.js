import React from "react";
import "./DisplayLineBreak.css";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom"
import Axios from "axios";
import { Helmet } from 'react-helmet';

function ProfileCompany() {
  let { username } = useParams();
  let navigate = useNavigate();

  const [deleteState, setDeleteState] = useState(""); 
  const [enlistState, setEnlistState] = useState("");
  const [showCompanyPropertyState, setShowCompanyPropertyState] = useState("");
  const [propertyLuxury, setPropertyLuxury] = useState("Normal");
  const [propertyForSale, setPropertyForSale] = useState("For Sale");
  const [propertyType, setPropertyType] = useState("Residential");
  const [propertyBuilding, setPropertyBuilding] = useState("Flat");
  const [propertyCity, setPropertyCity] = useState("");
  const [propertyTown, setPropertyTown] = useState("");
  const [propertyDistrict, setPropertyDistrict] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [propertyVolume, setPropertyVolume] = useState("");
  const [propertyRooms, setPropertyRooms] = useState("");
  const [id, setid] = useState("");



  const enlistProperty = () => {
    if (propertyCity !== '' && propertyTown !== '' && propertyDistrict !== '' && propertyPrice !== '' && propertyVolume !== '' && propertyRooms !== '') {

      Axios.post('http://localhost:3001/enlist_property', {
        username: username,
        propertyLuxury: propertyLuxury,
        propertyForSale: propertyForSale,
        propertyType: propertyType,
        propertyBuilding: propertyBuilding,
        propertyCity: propertyCity,
        propertyTown: propertyTown,
        propertyDistrict: propertyDistrict,
        propertyPrice: propertyPrice,
        propertyVolume: propertyVolume,
        propertyRooms: propertyRooms
      }).then((response) => {
        if (response.data.message1) {
          setEnlistState(response.data.message1);
          console.log(response.data.message1);
        } else if (response.data.message2) {
          setEnlistState(response.data.message2);
          console.log(response.data.message2);
          setTimeout(function () {
            navigate("/profilecompany/" + username.toString());
          }, 1000);

        }
      });

    } else {
      setEnlistState("Cannot leave empty fields.")
    }






  };

  const deleteCompanyProperty  = () => {

    Axios.post('http://localhost:3001/delete_company_property', {
      username : username,
      id : id
      

    }).then((response) => {
      if (response.data.message2) {
        console.log(response.data.message2);
        setDeleteState(response.data.message2);
        
      } else if(response.data.message1){
        console.log(response.data.message1);
        setDeleteState(response.data.message1);
      }
    });
  };

  const showCompanyProperty = () => {

    Axios.post('http://localhost:3001/show_company_property', {
      username: username

    }).then((response) => {
      if (response.data.message1) {
        setShowCompanyPropertyState(response.data.message1);
        console.log(response.data.message1);
      } else if (response.data.message2) {
        var jsonData = JSON.parse(response.data.message2);
        const length = jsonData.length;
        let text = "";
        for (let i = 0; i < length; i++) {
          text += "Property ID: " + jsonData[i].id + "\n\nProperty Owner: " + jsonData[i].propertyOwner + "\n\nProperty Luxury: " + jsonData[i].propertyLuxury + "\n\nProperty For Sale: " + jsonData[i].propertyForSale + "\n\nProperty Type: " + jsonData[i].propertyType + "\n\nProperty Building: " + jsonData[i].propertyBuilding + "\n\nProperty City: " + jsonData[i].propertyCity + "\n\nProperty Town: " + jsonData[i].propertyTown + "\n\nProperty District: " + jsonData[i].propertyDistrict + "\n\nProperty Price: " + jsonData[i].propertyPrice + "\n\nProperty Volume: " + jsonData[i].propertyVolume + "\n\n Property Rooms: " + jsonData[i].propertyRooms + "\n\n\n\n";
        }

        setShowCompanyPropertyState(text);
      }


    });
  };

  const showCompanyPropertyIDs = () => {
    var id2 = 0
    Axios.post('http://localhost:3001/show_company_property_ids', {
      username: username

    }).then((response) => {
      if (response.data.message1) {
        console.log(response.data.message1);
      } else if (response.data.message2) {
        var jsonData = JSON.parse(response.data.message2);

        for (let i = 0; i < jsonData.length; i++) {
          id2 = jsonData[i].id;

          let btn = document.createElement("button");
          btn.innerHTML = "Property ID: " + id2;
          btn.onclick = function () {
            var curN = btn.innerHTML.match(/\d+/);
            navigate("/property/" + curN);
          };
          document.getElementById("boxx").appendChild(btn);
          
        }

      }
    });
  };


  const [show1, setShowEnlisting] = React.useState(true)
  const [show2, setShowCompanyProperty] = React.useState(true)
  const [show3, setDeleteCompanyProperty] = React.useState(true)



  return (
    
    <><div><Helmet><title>{username} | Işık Emlak</title></Helmet></div><div>

      <div class="align-left"><h2>Welcome, {username}!</h2>
        <br></br>
        <button onClick={() => {
          if (show2 === false) {
            setShowCompanyProperty(!show2);
          } else if (show3 == false) {
            setDeleteCompanyProperty(!show3);
          }
          setShowEnlisting(!show1);
        } }>
          {show1 === true ? 'List Property' : 'Hide Property'}
        </button>

        <button onClick={() => {
          if (show1 === false) {
            setShowEnlisting(!show1);
          } else if (show3 == false) {
            setDeleteCompanyProperty(!show3);
          }
          showCompanyProperty();
          showCompanyPropertyIDs();
          setShowCompanyProperty(!show2);
        } }>
          {show2 === true ? 'Show Company Property' : 'Hide Company Property'}
        </button>

        <button onClick={() => {
          if (show1 === false) {
            setShowEnlisting(!show1);
          } else if (show2 === false) {
            setShowCompanyProperty(!show2);
          }
          setDeleteCompanyProperty(!show3);
        } }>
          {show3 === true ? 'Delete Property' : 'Hide Delete Property'}
        </button>

        {show1
          ? null
          : (
            <div class="enlist">
              <br></br>
              <h3>Enlist a Property</h3>
              <br></br>
              <select id="dropdown0" onChange={(e) => { setPropertyLuxury(e.target.value); } }>
                <option value="Normal">Normal</option>
                <option value="Luxury">Luxury</option>
              </select>
              <select id="dropdown1" onChange={(e) => { setPropertyForSale(e.target.value); } }>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>
              <select id="dropdown2" onChange={(e) => { setPropertyType(e.target.value); } }>
                <option value="Residential">Residential</option>
                <option value="Commerical">Commerical</option>
                <option value="Land">Land</option>
              </select>
              <select id="dropdown3" onChange={(e) => { setPropertyBuilding(e.target.value); } }>
                <option value="Flat">Flat</option>
                <option value="Residence">Residence</option>
                <option value="Detached House">Detached House</option>
                <option value="Villa">Villa</option>
                <option value="Farm House">Farm House</option>
                <option value="Mansion">Mansion</option>
                <option value="Seaside Mansion">Seaside Mansion</option>
              </select>
              <input type="text" placeholder="Property City" onChange={(e) => { setPropertyCity(e.target.value); } } />
              <input type="text" placeholder="Property Town" onChange={(e) => { setPropertyTown(e.target.value); } } />
              <input type="text" placeholder="Property District" onChange={(e) => { setPropertyDistrict(e.target.value); } } />
              <input type="text" placeholder="Property Price" onChange={(e) => { setPropertyPrice(e.target.value); } } />
              <input type="text" placeholder="Property Volume (m^3)" onChange={(e) => { setPropertyVolume(e.target.value); } } />
              <input type="text" placeholder="Property Rooms (Enter 0 if the property is land)" onChange={(e) => { setPropertyRooms(e.target.value); } } />
              <br></br><br></br>
              <button class="button" onClick={enlistProperty}><span>List Property</span></button>
              <br></br><br></br>
              <h6>{enlistState}</h6>
              <br></br><br></br>
            </div>
          )}

        {show2
          ? null
          : (
            <div className="display-linebreak" style={{ color: 'white' }}>
              <br></br>
              <div className="centered2">
                <div className="box2">
                  <div id="boxx">
                  </div>
                </div>
              </div>
            </div>
          )}

        {show3
          ? null
          : (
            <div className="display-linebreak" style={{ color: 'white' }}>
              <br></br>
              <div className="centered2">
                <div className="box2">
                  <div id="boxx">
                    <h2>Delete a Property</h2>
                      <input type="number" placeholder="Deleted Property ID" onChange={(e) => { setid(e.target.value); } } />
                      <br></br><br></br>
                      <button onClick={() => {  deleteCompanyProperty();} }><span>Delete</span></button>
                      <br></br><div className="text-center"><br></br>{deleteState}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </div></>
  );
}
export default ProfileCompany;