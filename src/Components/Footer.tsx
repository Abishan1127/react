import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
  <>
  <div className="new"> 

<h3>Address</h3>

<p>

    📍Location</p>

    <p> 📞call +01 1234567890</p>

        <p> 📧demo@gmail.com</p>



</div>

<div className="new">

<h3>Newsletter</h3> <br/>

<form>

    <input type="email" placeholder="Enter email" style={{borderRadius: '20px'}}/> <br/>

    <button>Subscribe</button>

</form>

</div>

<div className="new">

<h4>Latitude:</h4>

<h4>Longitude</h4>

</div>
  
  </>
  );
};

export default Footer;
