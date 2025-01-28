import  {LOG_URL } from "../Utils/constant";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  let [btn , setBtn] = useState("Login");

    return (
      <div className="nav">
        <div className="bar">
            <div className="logHead">
            <Link to="/"> 
            <img
                    className='logo'
                    src={LOG_URL} alt="soory" />
             </Link>
             <h2 style={{color:"white"}}>MobiMart</h2>
             </div>
           
          <ul id="navbar">
           
          
            <input placeholder="Enter" />  {/* Corrected input element */}
            <li>
              <button>Search</button>
            </li>
            <li><button onClick={() =>{
               btn ==="Login"? setBtn("Logout") : setBtn("Login");
               console.log(btn);
            }}>
              {btn}
              </button></li>
            <li>
              <Link to="/cart">
                <img  src="https://static.vecteezy.com/system/resources/previews/024/044/741/non_2x/shopping-cart-logo-design-cart-icon-ecommerce-logo-vector.jpg" alt="sorry"/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;

  