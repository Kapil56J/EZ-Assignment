import "./Left.css";
import { useState } from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";

const Test = () => {
  const [stateArray, setStateArray] = useState([]);

  const [abc, setAbc] = useState(false);
  const handleClick = (index) => {
    setAbc(!abc);

    const arr = stateArray;
    arr.includes(index) ? arr.pop(index) : arr.push(index);
    setStateArray([...arr]);
  };

  const companyData = [
    [
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "MCKY",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
    ],
    [
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "MCKY",
      },
    ],
    [
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "MCKY",
      },
    ],
    [
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "MCKY",
      },
    ],
    [
      {
        companyName: "Company Name",
        code: "CODE",
        entitity: "8 Entities",
        user: "64 Users",
      },
      {
        companyName: "Mckinsey & Company",
        code: "MCKY",
        entitity: "8 Entities",
        user: "MCKY",
      },
    ],
  ];

  return (
    <>
      <span>
        Clients <FaSortAmountDownAlt />{" "}
        <span className="time">Creation Time</span>{" "}
      </span>
      <div>
        <input
          type="text"
          placeholder="Company, Entity, User, Domain, Services, Location "
        />
        <br />
        <p style={{ margin: "10px" }}>April 2021 </p>
      </div>
      {companyData.map((item, index) => (
        <div
          className="row datadiv"
          style={{
            backgroundColor: stateArray.includes(index) ? "#252038" : "white",
            color: stateArray.includes(index) ? "white" : "",
          }}
          onClick={() => handleClick(index)}
        >
          <div className="row" style={{ paddingRight: "0px" }}>
            <div className="col" style={{ fontSize: "12px" }}>
              {stateArray.includes(index)
                ? item[0].companyName
                : item[1].companyName}
            </div>
            <div className="col codeData">
              {stateArray.includes(index) ? item[0].code : item[1].code}
            </div>
          </div>
          <div className="row" style={{ paddingRight: "0px" }}>
            <div className="col" style={{ fontSize: "10px", color: "#acacac" }}>
              {stateArray.includes(index) ? item[0].entitity : item[1].entitity}
            </div>
            <div className="col userData">
              {stateArray.includes(index) ? item[0].user : item[1].user}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Test;
