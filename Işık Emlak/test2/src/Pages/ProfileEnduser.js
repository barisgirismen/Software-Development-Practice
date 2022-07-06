import React from "react";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom"
import Axios from "axios";
import { Helmet } from 'react-helmet';

function ProfileEnduser(){

    let { username } = useParams();
    let navigate = useNavigate();
    var id2 = 0

    const [showPropertyState, setShowPropertyState] = useState("");
    const [showNormalPropertyState, setShowNormalPropertyState] = useState("");
    const [showLuxuryPropertyState, setShowLuxuryPropertyState] = useState("");
    const [showRealEstateTypeState, setShowRealEstateTypeState] = useState("");
    const [showResidentialTypeState, setShowResidentialTypeState] = useState("");
    const [showBuildingTypeState, setShowBuildingTypeState] = useState("");
    const [showPropertyLocationState, setShowPropertyLocationState] = useState("");
    const [showPropertyPriceState, setShowPropertyPriceState] = useState("");
    const [showPropertyM2State, setShowPropertyM2State] = useState("");
    const [showPropertyRoomsState, setShowPropertyRoomsState] = useState("");
    const [propertyForSale, setPropertyForSale] = useState("For Sale");
    const [propertyType, setPropertyType] = useState("Residential");
    const [propertyBuilding, setPropertyBuilding] = useState("Flat");
    const [propertyCity, setPropertyCity] = useState("");
    const [propertyTown, setPropertyTown] = useState("");
    const [propertyDistrict, setPropertyDistrict] = useState("");
    const [propertyPrice, setPropertyPrice] = useState("");
    const [propertyVolume, setPropertyVolume] = useState("");
    const [propertyRooms, setPropertyRooms] = useState("");
    var cities = [];
    var towns = [];
    var districts = [];
    

    const showProperty = () => {

      Axios.post('http://localhost:3001/show_property', {

      }).then((response) => {
        if (response.data.message1) {
          setShowPropertyState(response.data.message1);
          console.log(response.data.message1);
        } else if (response.data.message2) {
          var jsonData = JSON.parse(response.data.message2);
          for (let i = 0; i < jsonData.length; i++) {

            id2 = jsonData[i].id;
  
            let btn = document.createElement("button", {className: "button"});
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

    const showNormalProperty = () => {

      Axios.post('http://localhost:3001/show_normal_property', {

      }).then((response) => {
        if (response.data.message1) {
          setShowNormalPropertyState(response.data.message1);
          console.log(response.data.message1);
        } else if (response.data.message2) {
          var jsonData = JSON.parse(response.data.message2);
          for (let i = 0; i < jsonData.length; i++) {
            id2 = jsonData[i].id;
  
            let btn = document.createElement("button", {className : 'button'});
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
  
    const showLuxuryProperty = () => {

      Axios.post('http://localhost:3001/show_luxury_property', {

      }).then((response) => {
        if (response.data.message1) {
          setShowLuxuryPropertyState(response.data.message1);
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

    const showRealEstateType = () => {

      Axios.post('http://localhost:3001/show_real_estate_type', {
      propertyType: propertyType

      }).then((response) => {
        if (response.data.message1) {
          setShowRealEstateTypeState(response.data.message1);
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

    const showResidentialType = () => {

      Axios.post('http://localhost:3001/show_residential_type', {
        propertyForSale: propertyForSale

      }).then((response) => {
        if (response.data.message1) {
          setShowResidentialTypeState(response.data.message1);
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

    const showBuildingType = () => {

      Axios.post('http://localhost:3001/show_building_type', {
        propertyBuilding: propertyBuilding

      }).then((response) => {
        if (response.data.message1) {
          setShowBuildingTypeState(response.data.message1);
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

    const showPropertyLocation = () => {
      /*
      Axios.post('http://localhost:3001/show_all_cities', {

      }).then((response) => {
        if (response.data.message1) {
          setShowPropertyLocationState(response.data.message1);
          console.log(response.data.message1);
        } else if (response.data.message2) {
          console.log("1" + response.data.message2);
          cities = response.data.message2

        }
  
      });
      Axios.post('http://localhost:3001/show_all_towns', {

      }).then((response) => {
        if (response.data.message1) {
          setShowPropertyLocationState(response.data.message1);
          console.log(response.data.message1);
        } else if (response.data.message2) {
          console.log("1" + response.data.message2[0]);
          towns = response.data.message2

          console.log("2" + towns);
        }
  
      });
      Axios.post('http://localhost:3001/show_all_districts', {

      }).then((response) => {
        if (response.data.message1) {
          setShowPropertyLocationState(response.data.message1);
          console.log(response.data.message1);
        } else if (response.data.message2) {
          console.log("1" + response.data.message2[0]);
          districts = response.data.message2
/*
          for(var i = 0; i < response.data.message2.length; i++){
            districts[i] = response.data.message2[i].propertyDistrict
        }

          console.log("2" + districts);
        }
  
      });*/





      Axios.post('http://localhost:3001/show_property_location', {
      propertyCity: propertyCity,
      propertyTown: propertyTown,
      propertyDistrict: propertyDistrict

      }).then((response) => {
        if (response.data.message1) {
          setShowPropertyLocationState(response.data.message1);
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

    const showPropertyPrice = () => {

      Axios.post('http://localhost:3001/show_property_price', {
        propertyPrice: propertyPrice

      }).then((response) => {
        if (response.data.message1) {
          setShowPropertyPriceState(response.data.message1);
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

    const showPropertyM2 = () => {

      Axios.post('http://localhost:3001/show_property_volume', {
      propertyVolume: propertyVolume

      }).then((response) => {
        if (response.data.message1) {
          setShowPropertyM2State(response.data.message1);
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

    const showPropertyRooms = () => {
      

      Axios.post('http://localhost:3001/show_property_rooms', {
        propertyRooms: propertyRooms
        
      }).then((response) => {
        if (response.data.message1) {
          setShowPropertyRoomsState(response.data.message1);
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

    const [show1, setShowProperty] = React.useState(true)
    const [show2, setShowNormalProperty] = React.useState(true)
    const [show3, setShowLuxuryProperty] = React.useState(true)
    const [show4, setShowRealEstateType] = React.useState(true)
    const [show5, setShowResidentialType] = React.useState(true)
    const [show6, setShowBuildingType] = React.useState(true)
    const [show7, setShowPropertyLocation] = React.useState(true)
    const [show8, setShowPropertyPrice] = React.useState(true)
    const [show9, setShowPropertyM2] = React.useState(true)
    const [show10, setShowPropertyRooms] = React.useState(true)

    return (
        <><div><Helmet><title>{username} | Işık Emlak</title></Helmet></div><div>
        <br></br><br></br>
        <div class="intro"><h2>Welcome, {username}!</h2></div>
        <div class="group">
          <h4>Properties 🏘️</h4>
          <button onClick={() => {
            if (show2 === false) {
              setShowNormalProperty(!show2);
            } else if (show3 === false) {
              setShowLuxuryProperty(!show3);
            } else if (show4 === false) {
              setShowRealEstateType(!show4);
            } else if (show5 === false) {
              setShowResidentialType(!show5);
            } else if (show6 === false) {
              setShowBuildingType(!show6);
            } else if (show7 === false) {
              setShowPropertyLocation(!show7);
            } else if (show8 === false) {
              setShowPropertyPrice(!show8);
            } else if (show9 === false) {
              setShowPropertyM2(!show9);
            } else if (show10 === false) {
              setShowPropertyRooms(!show10);
            }

            showProperty();
            setShowProperty(!show1);
          } }>
            {show1 === true ? 'Show All Properties' : 'Hide All Properties'}
          </button>

          <button onClick={() => {
            if (show1 === false) {
              setShowProperty(!show1);
            } else if (show3 === false) {
              setShowLuxuryProperty(!show3);
            } else if (show4 === false) {
              setShowRealEstateType(!show4);
            } else if (show5 === false) {
              setShowResidentialType(!show5);
            } else if (show6 === false) {
              setShowBuildingType(!show6);
            } else if (show7 === false) {
              setShowPropertyLocation(!show7);
            } else if (show8 === false) {
              setShowPropertyPrice(!show8);
            } else if (show9 === false) {
              setShowPropertyM2(!show9);
            } else if (show10 === false) {
              setShowPropertyRooms(!show10);
            }
            showNormalProperty();
            setShowNormalProperty(!show2);
          } }>
            {show2 === true ? 'Show Normal Properties' : 'Hide Normal Properties'}
          </button>

          <button onClick={() => {
            if (show2 === false) {
              setShowNormalProperty(!show2);
            } else if (show1 === false) {
              setShowProperty(!show1);
            } else if (show4 === false) {
              setShowRealEstateType(!show4);
            } else if (show5 === false) {
              setShowResidentialType(!show5);
            } else if (show6 === false) {
              setShowBuildingType(!show6);
            } else if (show7 === false) {
              setShowPropertyLocation(!show7);
            } else if (show8 === false) {
              setShowPropertyPrice(!show8);
            } else if (show9 === false) {
              setShowPropertyM2(!show9);
            } else if (show10 === false) {
              setShowPropertyRooms(!show10);
            }
            showLuxuryProperty();
            setShowLuxuryProperty(!show3);
          } }>
            {show3 === true ? 'Show Luxury Properties' : 'Hide Luxury Properties'}

          </button>
        </div>






        {show1
          ? null
          : (
            <div className="display-linebreak" style={{ color: 'white' }}>
              {showPropertyState}
              <br></br>
                <div className="centered2">
                  <div className="box2">
                    <div id="boxx">
                    </div>
                  </div>
                </div>
            </div>
          )}

        {show2
          ? null
          : (
            <div className="display-linebreak" style={{ color: 'white' }}>
              {showNormalPropertyState}
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
              {showLuxuryPropertyState}

              <br></br>
                <div className="centered2">
                  <div className="box2">
                    <div id="boxx">
                    </div>
                  </div>
                </div>
            </div>
          )}





        <div class="group">
          <h4>Filters ⚙️</h4>
          <button onClick={() => {
            if (show2 === false) {
              setShowNormalProperty(!show2);
            } else if (show3 === false) {
              setShowLuxuryProperty(!show3);
            } else if (show1 === false) {
              setShowProperty(!show1);
            } else if (show5 === false) {
              setShowResidentialType(!show5);
            } else if (show6 === false) {
              setShowBuildingType(!show6);
            } else if (show7 === false) {
              setShowPropertyLocation(!show7);
            } else if (show8 === false) {
              setShowPropertyPrice(!show8);
            } else if (show9 === false) {
              setShowPropertyM2(!show9);
            } else if (show10 === false) {
              setShowPropertyRooms(!show10);
            }
            setShowRealEstateType(!show4);
          } }>
            {show4 === true ? 'Filter by Real Estate Type' : 'Hide Real Estate Type filter'}
          </button>

          <button onClick={() => {
            if (show2 === false) {
              setShowNormalProperty(!show2);
            } else if (show3 === false) {
              setShowLuxuryProperty(!show3);
            } else if (show4 === false) {
              setShowRealEstateType(!show4);
            } else if (show1 === false) {
              setShowProperty(!show1);
            } else if (show6 === false) {
              setShowBuildingType(!show6);
            } else if (show7 === false) {
              setShowPropertyLocation(!show7);
            } else if (show8 === false) {
              setShowPropertyPrice(!show8);
            } else if (show9 === false) {
              setShowPropertyM2(!show9);
            } else if (show10 === false) {
              setShowPropertyRooms(!show10);
            }
            setShowResidentialType(!show5);
          } }>
            {show5 === true ? 'Filter by Residential Type' : 'Hide Residential Type filter'}
          </button>

          <button onClick={() => {
            if (show2 === false) {
              setShowNormalProperty(!show2);
            } else if (show3 === false) {
              setShowLuxuryProperty(!show3);
            } else if (show4 === false) {
              setShowRealEstateType(!show4);
            } else if (show5 === false) {
              setShowResidentialType(!show5);
            } else if (show1 === false) {
              setShowProperty(!show1);
            } else if (show7 === false) {
              setShowPropertyLocation(!show7);
            } else if (show8 === false) {
              setShowPropertyPrice(!show8);
            } else if (show9 === false) {
              setShowPropertyM2(!show9);
            } else if (show10 === false) {
              setShowPropertyRooms(!show10);
            }
            setShowBuildingType(!show6);
          } }>
            {show6 === true ? 'Filter by Building Type' : 'Hide Building Type filter'}
          </button>

          <button onClick={() => {
            if (show2 === false) {
              setShowNormalProperty(!show2);
            } else if (show3 === false) {
              setShowLuxuryProperty(!show3);
            } else if (show4 === false) {
              setShowRealEstateType(!show4);
            } else if (show5 === false) {
              setShowResidentialType(!show5);
            } else if (show6 === false) {
              setShowBuildingType(!show6);
            } else if (show1 === false) {
              setShowProperty(!show1);
            } else if (show8 === false) {
              setShowPropertyPrice(!show8);
            } else if (show9 === false) {
              setShowPropertyM2(!show9);
            } else if (show10 === false) {
              setShowPropertyRooms(!show10);
            }
            setShowPropertyLocation(!show7);
          } }>
            {show7 === true ? 'Filter by Location' : 'Hide Location filter'}
          </button>

          <button onClick={() => {
            if (show2 === false) {
              setShowNormalProperty(!show2);
            } else if (show3 === false) {
              setShowLuxuryProperty(!show3);
            } else if (show4 === false) {
              setShowRealEstateType(!show4);
            } else if (show5 === false) {
              setShowResidentialType(!show5);
            } else if (show6 === false) {
              setShowBuildingType(!show6);
            } else if (show7 === false) {
              setShowPropertyLocation(!show7);
            } else if (show1 === false) {
              setShowProperty(!show1);
            } else if (show9 === false) {
              setShowPropertyM2(!show9);
            } else if (show10 === false) {
              setShowPropertyRooms(!show10);
            }
            setShowPropertyPrice(!show8);
          } }>
            {show8 === true ? 'Filter by Price' : 'Hide Price filter'}
          </button>

          <button onClick={() => {
            if (show2 === false) {
              setShowNormalProperty(!show2);
            } else if (show3 === false) {
              setShowLuxuryProperty(!show3);
            } else if (show4 === false) {
              setShowRealEstateType(!show4);
            } else if (show5 === false) {
              setShowResidentialType(!show5);
            } else if (show6 === false) {
              setShowBuildingType(!show6);
            } else if (show7 === false) {
              setShowPropertyLocation(!show7);
            } else if (show8 === false) {
              setShowPropertyPrice(!show8);
            } else if (show1 === false) {
              setShowProperty(!show1);
            } else if (show10 === false) {
              setShowPropertyRooms(!show10);
            }
            setShowPropertyM2(!show9);
          } }>
            {show9 === true ? 'Filter by m²' : 'Hide m² filter'}
          </button>

          <button onClick={() => {
            if (show2 === false) {
              setShowNormalProperty(!show2);
            } else if (show3 === false) {
              setShowLuxuryProperty(!show3);
            } else if (show4 === false) {
              setShowRealEstateType(!show4);
            } else if (show5 === false) {
              setShowResidentialType(!show5);
            } else if (show6 === false) {
              setShowBuildingType(!show6);
            } else if (show7 === false) {
              setShowPropertyLocation(!show7);
            } else if (show8 === false) {
              setShowPropertyPrice(!show8);
            } else if (show9 === false) {
              setShowPropertyM2(!show9);
            } else if (show1 === false) {
              setShowProperty(!show1);
            }
            setShowPropertyRooms(!show10);
          } }>
            {show10 === true ? 'Filter by Number Of Rooms' : 'Hide Number Of Rooms filter'}
          </button>
        </div>

        {show4
          ? null
          : (
            <div className="display-linebreak" style={{ color: 'white' }}>
              <br></br>
                <div className="centered2">
                  <div className="box2">
                    <div id="boxx">
                      <select id="dropdown1" onChange={(e) => { setPropertyForSale(e.target.value); } }>
                        <option value="For Sale">For Sale</option>
                        <option value="For Rent">For Rent</option>
                      </select>
                      <br></br><br></br>
                      <button class="button" onClick={showResidentialType}><span>Filter</span></button>
                      <br></br><div className="text-center"><br></br>{showResidentialTypeState}</div>
                    </div>
                  </div>
                </div>
            </div>
          )}

        {show5
          ? null
          : (
            <div className="display-linebreak" style={{ color: 'white' }}>
              <br></br>
                <div className="centered2">
                  <div className="box2">
                    <div id="boxx">
                      <select id="dropdown2" onChange={(e) => { setPropertyType(e.target.value); } }>
                        <option value="Residential">Residential</option>
                        <option value="Commerical">Commerical</option>
                        <option value="Land">Land</option>
                      </select>
                      <br></br><br></br>
                      <button class="button" onClick={showRealEstateType}><span>Filter</span></button>
                      <br></br><div className="text-center"><br></br>{showRealEstateTypeState}</div>
                    </div>
                  </div>
                </div>
            </div>
          )}


        {show6
          ? null
          : (
            <div className="display-linebreak" style={{ color: 'white' }}>
              <br></br>
                <div className="centered2">
                  <div className="box2">
                    <div id="boxx">
                      <select id="dropdown3" onChange={(e) => { setPropertyBuilding(e.target.value); } }>
                        <option value="Flat">Flat</option>
                        <option value="Residence">Residence</option>
                        <option value="Detached House">Detached House</option>
                        <option value="Villa">Villa</option>
                        <option value="Farm House">Farm House</option>
                        <option value="Mansion">Mansion</option>
                        <option value="Seaside Mansion">Seaside Mansion</option>
                      </select>
                      <br></br><br></br>
                      <button class="button" onClick={showBuildingType}><span>Filter</span></button>
                      <br></br><div className="text-center"><br></br>{showBuildingTypeState}</div>
                    </div>
                  </div>
                </div>
            </div>
          )}

        {show7
          ? null
          : (
            <div className="display-linebreak" style={{ color: 'white' }}>
              <br></br>
                <div className="centered2">
                  <div className="box2">
                    <div id="boxx">
                      <div className="width910">
                        <input type="text" placeholder="Property City" onChange={(e) => { setPropertyCity(e.target.value); } } />
                        <input type="text" placeholder="Property Town" onChange={(e) => { setPropertyTown(e.target.value); } } />
                        <input type="text" placeholder="Property District" onChange={(e) => { setPropertyDistrict(e.target.value); } } />
                        <br></br><br></br>
                        <button class="button" onClick={showPropertyLocation}><span>Filter</span></button>
                        <br></br><div className="text-center"><br></br>{showPropertyLocationState}</div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          )}

        {show8
          ? null
          : (
            <div className="display-linebreak" style={{ color: 'white' }}>
              <br></br>
                <div className="centered2">
                  <div className="box2">
                    <div id="boxx">
                      <div className="width910">
                      <input type="text" placeholder="Property Price" onChange={(e) => { setPropertyPrice(e.target.value); } } />
                      <br></br><br></br>
                      <button class="button" onClick={showPropertyPrice}><span>Filter</span></button>
                      <br></br><div className="text-center"><br></br>{showPropertyPriceState}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          )}

        {show9
          ? null
          : (
            <div className="display-linebreak" style={{ color: 'white' }}>
              <br></br>
                <div className="centered2">
                  <div className="box2">
                    <div id="boxx">
                    <div className="width910">
                      <input type="text" placeholder="Property Volume" onChange={(e) => { setPropertyVolume(e.target.value); } } />
                      <br></br><br></br>
                      <button class="button" onClick={showPropertyM2}><span>Filter</span></button>
                      <br></br><div className="text-center"><br></br>{showPropertyM2State}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          )}

        {show10
          ? null
          : (
            <div className="display-linebreak" style={{ color: 'white' }}>
              <br></br>
                <div className="centered2">
                  <div className="box2">
                    <div id="boxx">
                    <div className="width910">
                          <input type="text" placeholder="Property Rooms (Leave blank if the property is land)" onChange={(e) => { setPropertyRooms(e.target.value); } } />
                          <br></br><br></br>
                          <button class="button" onClick={showPropertyRooms}><span>Filter</span></button>
                          <br></br><div className="text-center"><br></br>{showPropertyRoomsState}</div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>

          )}
      </div></>
      );
}
export default ProfileEnduser;