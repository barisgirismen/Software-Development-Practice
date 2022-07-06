import React from 'react';
import './About';
import './Announce';
import './Login';
const Home =() => {

return (
<nav>
     <ul>
       <li><a href='/'>Home</a></li>
       <li><a href='./components/loginpage'>Login Page</a></li>
       <li><a href='./components/registerpage'>Register Page</a></li>
       <li><a href='./components/resetpassword'>Reset Password Page</a></li>
     </ul>
     </nav>
)
}