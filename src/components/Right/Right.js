import React from "react";
import "./Right.css";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Button from "@mui/material/Button";

export default function Right() {
  return (
    <>
      <div className="row">
        <span>
          <FaFilePdf size="20px" /> Lucas Films Private Limited{" "}
        </span>
        <br />
        <br />
        <div className="col">
          <h6> Company Code</h6>
          <p>LUCF</p>

          <h6>Company Logo</h6>
          <p>Unavailable</p>
        </div>
        <div className="col">
          <h6>Domains</h6>
          <h6>@lucasfilms.com</h6>
          <h6>@lucasstowars.com</h6>
          <h6>@starwars.com</h6>
          <h6>+5 Others</h6>
          <br />
        </div>
        <div className="col">
          <Button variant="contained">Add</Button>
          <br />
        </div>
      </div>
      <h6>ENTITIES &nbsp; INVOICE CODES &nbsp; USERS</h6>
      <br />
      <br />
      <p>4 Entities</p>

      {/* <div className="row">
      <div className="col">
        Biling Location
      </div>
      <div className="col">
        Entity Name
      </div>
      <div className="col">
        Entity Code
      </div>
      <div className="col">
        MSLA
      </div>
      <div className="col">
        File Sharing
      </div>
     </div> */}
      <br />
      <br />
      {/* <div className="row">
      <div className="col">
        <h6>Riyadh, Kingdom of Saudi Arabia</h6>
      </div>
      <div className="col">
       <h6>Lucas Film pvt.ltd.</h6>
      </div>
      <div className="col">
        <h6>LUCFOI</h6>
      </div>
      <div className="col">
        <h6>3 June- 5 June 2030</h6>
      </div>
      <div className="col">
        <h6>External &nbsp;  &nbsp; &nbsp; &nbsp; <FaChevronCircleDown/></h6>     
      </div>
    
     </div> */}
      <table className="table table-striped">
        <tbody>
          <tr style={{ backgroundColor: "#FDFFFD" }}>
            <td> Biling Location</td>
            <td>Entity Name</td>
            <td>Entity Code</td>
            <td> MSLA</td>
            <td>File Sharing</td>
            <td>
              <FaChevronCircleDown />
            </td>
          </tr>
          <br />
          <tr style={{ backgroundColor: "#FDFFFD" }}>
            <td>Riyadh, Kingdom of Saudi Arab</td>
            <td>Lucas Film pvt.ltd.</td>
            <td>LUCFOI</td>
            <td>3 June- 5 June 2030</td>
            <td>External</td>
            <td>
              <FaChevronCircleDown />
            </td>
          </tr>
          <br />
        </tbody>
      </table>

      <div className="row">
        <div className="col">
          <p>Address</p>
          <h6>Line 1</h6>
          <h6>Line 2</h6>
          <h6>City, Country</h6>
          <h6>ZIP Code</h6>
          <br />
          <p>Change Code</p>
          <h6>REquired</h6>
          <br />
          <p>MSLA</p>
          <h6>
            LucasFilmsWar.pdf &nbsp;
            <FaEye /> &nbsp;
            <FaDownload />{" "}
          </h6>
        </div>
        <div className="col">
          <p>Company Registration Number</p>
          <h6>UICEB&2FT49WEY</h6>
          <br />
          <p>Company Registration Validity</p>
          <h6>5 June 2025</h6>
          <br />
          <p>Duration of File Storage</p>
          <h6>90 Days</h6>
        </div>
        <div className="col">
          <p>
            Tax Registration Number &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{" "}
            <FaEdit size="20px" />
          </p>
          <h6>DL5CE5656</h6>
          <br />
          <p>TRN Validity</p>
          <h6>5 June 2025</h6>
          <br />
          <p>VAT+WAT</p>
          <h6>5%+5%</h6>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Services</th>
            <th scope="col">Units</th>
            <th scope="col">List Price</th>
            <th scope="col">Offered Price</th>
            <th scope="col">Discount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row">1</th> */}
            <td>Arabic Lang. Translation:EZ Assured</td>
            <td>Words</td>
            <td>0.1 AED</td>
            <td>0.09 AED</td>
            <td>10%(19%)</td>
          </tr>
          <tr>
            {/* <th scope="row">2</th> */}
            <td>Arabic Lang. Translation:EZ Assured</td>
            <td>Words</td>
            <td>0.1 AED</td>
            <td>0.09 AED</td>
            <td>10%(19%)</td>
          </tr>
          <tr>
            {/* <th scope="row">3</th> */}
            <td>Arabic Lang. Translation:EZ Assured</td>
            <td>Words</td>
            <td>0.1 AED</td>
            <td>0.09 AED</td>
            <td>10%(19%)</td>
          </tr>
        </tbody>
      </table>

      <table className="table table-striped">
        <tbody>
          <tr style={{ backgroundColor: "#FFFBFA" }}>
            <td>Riyadh, Kingdom of Saudi Arab</td>
            <td>Lucas Animation</td>
            <td>DRAFT</td>
            <td>DRAFT</td>
            <td>External</td>
            <td>
              <FaChevronCircleDown />
            </td>
          </tr>
          <br />
          <tr style={{ backgroundColor: "#FFFBFA" }}>
            <td>Riyadh, Kingdom of Saudi Arab</td>
            <td>Star Wars Production</td>
            <td>LUCFO2</td>
            <td>3 June 2022- 5 June 2030</td>
            <td>None</td>
            <td>
              <FaChevronCircleDown />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
