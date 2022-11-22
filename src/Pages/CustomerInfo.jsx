import React, { useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import postCusturl from "./Config"


const CustomerInfo = () => {
     const [inpval, setINP] = useState({
            CustomerID:"",
            CustomerName:"",
            ProductName:"",
            Quantity:"",
            CustomerPhoneNo:""
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();
    const {
            CustomerID,
            CustomerName,
            ProductName,
            Quantity,
            CustomerPhoneNo
    } = inpval;
    const res = await fetch(postCusturl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
            CustomerID,
            CustomerName,
            ProductName,
            Quantity,
            CustomerPhoneNo
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("Data Added Successfully");
    }
  };
  return (
    <>
    <Navbar/>{/* ---------------------------------------Form---------------------------------------------- */}
      <div className="container">
        <div className="Auth-form-container1">
          <form className="Auth-form1">
            <div className="Auth-form-content1">
              <h1 className="title1">
                New Employee User &nbsp;
                <i class="fa-sharp fa-solid fa-person-circle-plus"></i>{" "}
              </h1>

              <br></br>
              <div className="row">
                <div className="col-lg-6">
                  <label for="ExampleInputID" class=" form=label">
                    CustomerID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputID"
                    placeholder="Please enter CustomerID"
                    value={inpval.CustomerID}
                    onChange={setdata}
                    name="CustomerID"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputName" class=" form=label">
                    CustomerName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputName"
                    placeholder="Please enter CustomerName"
                    value={inpval.CustomerName}
                    onChange={setdata}
                    name="CustomerName"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputAddress" class=" form=label">
                    ProductName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputName"
                    placeholder="Please enter ProductName"
                    value={inpval.ProductName}
                    onChange={setdata}
                    name="ProductName"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputSalcode" class=" form=label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="ExampleInputSalCode"
                    placeholder="Please enter Quantity"
                    value={inpval.Quantity}
                    onChange={setdata}
                    name="Quantity"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputPhoneNo" class=" form=label">
                    CustomerPhoneNo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputPhoneNo"
                    value={inpval.CustomerPhoneNo}
                    onChange={setdata}
                    name="CustomerPhoneNo"
                    maxlength="10"
                    pattern="\d{10}"
                    placeholder="Please enter exactly 10 digits"
                    required
                  />
                </div>
<div className="col-lg-6" id="sub">
                  <button
                    type="submit"
                    onClick={addinpdata}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
 <Footer/>
    </>
  )
}

export default CustomerInfo