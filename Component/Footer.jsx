import React from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";

function Footer() {
  return (
    <div className="Table">
      <table>
        <tr className="imglogo">
          <th>
            <img src={logo} alt="" />
          </th>
          <th>Links</th>
          <th>Legal</th>
          <th>Product</th>
          <th>Newsletter</th>
        </tr>
        <tr>
          <td>
            <img src={logo2} width={150} alt="" />
          </td>
          <td>Home</td>
          <td>Terms of use</td>
          <td>Take Tour</td>
          <td>Stay Up To Date</td>
        </tr>
        <tr>
          {" "}
          <td>
            <img src={logo3} width={150} alt="" />
          </td>
          <td>About Us</td>
          <td>Privacy Policy</td>
          <td>Live Chat</td>
        </tr>
        <tr>
          {" "}
          <td></td>
          <td>Bookings</td>
          <td>Cookie Policy</td>
          <td>Reviews</td>
          <td>Your Mail</td>
          <td>
            {" "}
            <div className="download-button">
              <a>Subscribe</a>
            </div>
          </td>
        </tr>
        <tr>
          {" "}
          <td></td>
          <td>Blog</td>
        </tr>
      </table>
    </div>
  );
}

export default Footer;
