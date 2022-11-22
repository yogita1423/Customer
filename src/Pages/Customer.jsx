import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import getCusturl from "./Config"

const Customer = () => {
    const [getCustomerdata, setCustomerdata] = useState([]);
  console.log(getCustomerdata);

  const getdata = async (e) => {
    const res = await fetch(getCusturl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setCustomerdata(data);
      console.log("getdata");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (EmployeeID) => {
    const res2 = await fetch(
      `https://7bctswkz46.execute-api.us-east-1.amazonaws.com/employee/${EmployeeID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      console.log("error");
    } else {
      console.log("user deleted");
      getdata();
    }
  };






  return (
    <>
    <Navbar/>
    <section>
        <div className="top">
          <h1>
            EMPLOYEES DETAILS <i class="fa-solid fa-user-tie"></i>
          </h1>
        </div>
        <div className="add-btn">
          <Link to="/CustomerInfo" class="btn btn-primary">
            ADD DATA &nbsp;
            <i class="fa-solid fa-plus"></i>
          </Link>
        </div>
        <div className="download-btn">
          <CSVLink data={getCustomerdata} className="btn btn-success mb-3">
            DOWNLOAD IN EXCEL&nbsp; <i class="fa-solid fa-download"></i>
          </CSVLink>
        </div>
      </section>
      <div className="Table">
        <div className="container-fluid ">
          <table class="table table-dark table-striped">
            <thead>
              <tr className="Emptable">
                <th scope="col">Sr No</th>
                <th scope="col">CustomerID</th>
                <th scope="col">CustomerName</th>
                <th scope="col">ProductName</th>
                <th scope="col">Quantity</th>
                <th scope="col">CustomerPhoneNo</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getCustomerdata.map((element, id) => {
                return (
                  <>
                    <tr className="Emptable">
                      <th scope="row">{id + 1}</th>
                      <td>{element.CustomerID}</td>
                      <td>{element.CustomerName}</td>
                      <td>{element.ProductName}</td>
                      <td>{element.Quantity}</td>
                      <td>{element.CustomerPhoneNo}</td>
                      

                      <td className="d-flex justify-content-between ">
                        <Link to="/view:id">
                          <button className="btn btn-success">
                            <i class="fa-regular fa-eye"></i>View
                          </button>
                        </Link>
                        <Link to="/Edit">
                          <button className="btn btn-primary" id="updatebtn">
                            <i class="fa-solid fa-pen-to-square"></i>
                            Update
                          </button>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteuser(element.EmployeeID)}
                        >
                          <i class="fa-solid fa-trash"></i>Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br />
    <Footer/>
</>
  )
}

export default Customer