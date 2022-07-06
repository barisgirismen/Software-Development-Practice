const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const { json } = require('express');

app.use(cors());
app.use(express.json());
/* This is a test message to check the branching */
const db = mysql.createConnection({

    user: 'root',
    host: 'localhost',
    password: '',
    database: 'test2'
});

app.post('/register_end_user', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    //Query for registering end_users. 
    db.query(
        "SELECT * FROM end_user WHERE username = ?", [username],
        (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                if (result.length > 0) {
                    res.send({ message2: "There exists a user with this username." });
                }
                else {
                    db.query('INSERT INTO end_user (isUser, username, passwrd) VALUES (?,?,?)', [1, username, password],
                        (err, result) => {
                            if (err) {
                                res.send(err);
                            } else {
                                res.send({ message1: "Successfully registered"});
                            }

                        })
                }
            }
        }
    )
});


app.post('/register_company', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;



    //Query for registering company users. 
    db.query(
        "SELECT * FROM end_user WHERE username = ?", [username],
        (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                if (result.length > 0) {
                    res.send({ message2: "There exists a user with this username." });
                }
                else {
                    db.query('INSERT INTO end_user (isUser, username, passwrd) VALUES (?,?,?)', [0, username, password],
                        (err, result) => {
                            if (err) {
                                res.send(err);
                            } else {
                                res.send({ message4: "Successfully registered as company with the following company ID: " + username });
                            }

                        })
                }
            }
        }
    )
});

app.post('/reset_password', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const pass1 = req.body.pass1;
    const pass2 = req.body.pass2;

 //Query for resetting/changing password.
 db.query("SELECT * FROM end_user WHERE username = ?", [username],
 (err, result) => {
     if (err) {
         console.log(err);
     }
     else {
         if (pass1 != pass2) {
             res.send({ message2: "The passwords don't match!"})
         }else if (result.length > 0) {
             db.query("SELECT passwrd FROM end_user WHERE username = ?", [username],
                 (err, result) => {
                     if (err) {
                         console.log(err);
                     }else {
                         if(pass1 == result[0].passwrd){
                             res.send({ message2: "You can't use the same password!"})
                         }
                         else{
                             db.query('UPDATE end_user SET passwrd = ? WHERE username = ?',[pass1, username],
                             (err, result) => {
                                 if (err) {
                                     console.log(err);
                                 } else {
                                     res.send({ message1: "Successfully changed password " + username });
                                     
                                 }
                             })
                         }
                     }
             })
         }else {
             res.send({ message2: "There is no user with this username. Please go to the register page to set up an account with this username." });
         }
     }
 }
)
}); 


app.post('/login', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;



    //Query for logging users.
    db.query(
        "SELECT * FROM end_user WHERE isUser = 1 AND username = ? AND passwrd = ?", [username, password],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                if (result.length > 0 && password != null && username != "") {
                    res.send({ message1: "Successfully logged in as user with username: " + username });
                }
                else {

                    db.query(
                        "SELECT * FROM end_user WHERE isUser = 0 AND username = ? AND passwrd = ?", [username, password],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                if (result.length > 0 && password != null && username != "") {
                                    res.send({ message4: "Successfully logged in as company user with companyID: " + username })
                                }
                                else {
                                    res.send({ message2: "Login failed. There exists no user with this username and password combination." });
                                }
                            }
                        }
                    )
                }
            }
        }
    )
});

app.post('/enlist_property', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const propertyLuxury = req.body.propertyLuxury;
    const propertyForSale = req.body.propertyForSale;
    const propertyType = req.body.propertyType;
    const propertyBuilding = req.body.propertyBuilding;
    const propertyCity = req.body.propertyCity;
    const propertyTown = req.body.propertyTown;
    const propertyDistrict = req.body.propertyDistrict;
    const propertyPrice = req.body.propertyPrice;
    const propertyVolume = req.body.propertyVolume;
    const propertyRooms = req.body.propertyRooms;

    //Query for creating property enlistings.
    db.query('INSERT INTO property (propertyOwner, propertyLuxury, propertyForSale, propertyType, propertyBuilding, propertyCity, propertyTown, propertyDistrict, propertyPrice, propertyVolume, propertyRooms) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [username, propertyLuxury, propertyForSale, propertyType, propertyBuilding, propertyCity, propertyTown, propertyDistrict, propertyPrice, propertyVolume, propertyRooms],
        (err, result) => {
            if (err) {
                res.send(err);
            } else if(propertyLuxury == "" || propertyForSale == "" ||propertyType == "" ||propertyBuilding == "" ||propertyCity == "" ||propertyTown == "" ||propertyDistrict == "" ||propertyPrice == "" ||propertyVolume == "" ||propertyRooms == ""){
                res.send({ message1: "You cannot leave empty fields." });
                
            } else{
                res.send({ message2: "Successfully enlisted property."});
            }
        })
});


app.post('/show_company_property', (req, res) => {
    console.log(req.body);
    const username = req.body.username;

    //Query for creating property enlistings.
    db.query('SELECT * FROM property WHERE propertyowner = ?', [username],(err, result) => {
        var jsondata = JSON.stringify(result);
                return res.send({message2 : jsondata});
            
    
        })


});

app.post('/delete_company_property', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const username = req.body.username;

    //Query for creating property enlistings.
    db.query('select * from property where id = ? and propertyOwner = ?', [id,username],(err, result) => {
        if(err){
            res.send(err);
        }
        else{
            if(result.length > 0){
                db.query('delete from property where id = ? and propertyOwner = ?', [id,username],(err, result) => {
                    if(err){
                        res.send(err)
                    }
                    else{
                        res.send({message1 : "Property Deleted."})
                    }



                })
            }
            else{
                res.send({message2: "Cannot delete property."})
            }
        
        }
        
                
            
    
        })


});


app.post('/show_company_property_ids', (req, res) => {
    console.log(req.body);
    const username = req.body.username;

    db.query('SELECT id FROM property WHERE propertyowner = ?', [username],
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            }else{
                return res.send({message2 : jsondata});
            }
    
        })


});

app.post('/show_property', (req, res) => {
    console.log(req.body);
 
    db.query('SELECT * FROM property',
        
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});



app.post('/show_normal_property', (req, res) => {
    console.log(req.body);

    db.query('SELECT * FROM property WHERE propertyLuxury = "No"',
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});

app.post('/show_luxury_property', (req, res) => {
    console.log(req.body);

    //Query for 
    db.query('SELECT * FROM property WHERE propertyLuxury = "Yes"',
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});

app.post('/show_real_estate_type', (req, res) => {
    console.log(req.body);
    const propertyType = req.body.propertyType;

    //Query for
    db.query('SELECT * FROM property WHERE propertyType = ?', [propertyType],
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});

app.post('/show_residential_type', (req, res) => {
    console.log(req.body);
    const propertyForSale = req.body.propertyForSale;

    //Query for 
    db.query('SELECT * FROM property WHERE propertyForSale = ?', [propertyForSale],
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});

app.post('/show_building_type', (req, res) => {
    console.log(req.body);
    const propertyBuilding = req.body.propertyBuilding;

    //Query for
    db.query('SELECT * FROM property WHERE propertyBuilding = ?', [propertyBuilding],
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});

app.post('/show_all_cities', (req, res) => {
    console.log(req.body);
    const propertyCity = req.body.propertyCity;

    //Query for 
    db.query('SELECT propertyCity FROM property GROUP BY propertyCity',
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});

app.post('/show_all_towns', (req, res) => {
    console.log(req.body);
    const propertyTown = req.body.propertyTown;

    //Query for 
    db.query('SELECT propertyTown FROM property GROUP BY propertyTown',
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});

app.post('/show_all_districts', (req, res) => {
    console.log(req.body);
    const propertyDistrict = req.body.propertyDistrict;

    //Query for 
    db.query('SELECT propertyDistrict FROM property GROUP BY propertyDistrict',
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});

app.post('/show_property_location', (req, res) => {
    console.log(req.body);
    const propertyCity = req.body.propertyCity;
    const propertyTown = req.body.propertyTown;
    const propertyDistrict = req.body.propertyDistrict;

    //Query for
    db.query('SELECT * FROM property WHERE propertyCity = ? AND propertyTown = ? AND propertyDistrict = ?', [propertyCity,propertyTown,propertyDistrict],
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});

app.post('/show_property_price', (req, res) => {
    console.log(req.body);
    const propertyPrice = req.body.propertyPrice;

    //Query for
    db.query('SELECT * FROM property WHERE propertyPrice < ?', [propertyPrice],
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});

app.post('/show_property_volume', (req, res) => {
    console.log(req.body);
    const propertyVolume = req.body.propertyVolume;

    //Query for
    db.query('SELECT * FROM property WHERE propertyVolume < ?', [propertyVolume],
        (err, result) => {
            var jsondata = JSON.stringify(result);
            if (err) {
                res.send(err);
            } else if(result.length == 0){
                res.send( {message1: "No property found."});
            } else{
                return res.send({message2 : jsondata});
            }
    
        })


});


app.listen(3001, () => {
    console.log("The server is running on port 3001")
}

);