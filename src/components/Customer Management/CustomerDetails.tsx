import React from "react";

const CustomerDetails = () => {
  return (
      <div className="customerBg">
    <div style={{position:"absolute", margin:"5% 15vw"}}>
      {/* Customer Profile */}
      <div className="tablecontainer">

      <h1 style={{marginTop:"0vh", textAlign:"left"}}>Customer Details</h1>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>NID Number</th>
          </tr>
          <tr>
            <td>Zulker</td>
            <td>Zulker</td>
            <td>Zulker</td>
            <td>Zulker</td>
            <td>Zulker</td>
          </tr>
        </table>
      </div>
      {/* Customer Units Booked */}
      <div className="tablecontainer">

      <h1 style={{marginTop:"5vh", textAlign:"left"}}>Units Booked</h1>
        <table>
          <tr>
            <th>Unit ID</th>
            <th>Date of Booking</th>
            <th>Download Invoice</th>
          </tr>
          <tr>
            <td>Zulker</td>
            <td>Zulker</td>
            <td>Zulker</td>
          </tr>
        </table>
      </div>
      {/* Customer Units Transferred */}
      <div className="tablecontainer">

      <h1 style={{marginTop:"5vh", textAlign:"left"}}>Transfers Made</h1>
        <table>
          <tr>
            <th>Unit ID</th>
            <th>Transferred To</th>
            <th>Transfer Date</th>
            <th>Download Invoice</th>
          </tr>
          <tr>
            <td>Zulker</td>
            <td>Zulker</td>
            <td>Zulker</td>
            <td>Zulker</td>
          </tr>
        </table>
      </div>
      {/* Customer Allotments */}
      <div className="tablecontainer">

      <h1 style={{marginTop:"5vh", textAlign:"left"}}>Allotments</h1>
        <table>
          <tr>
            <th>Unit ID</th>
            <th>Booking Date</th>
            <th>Allotment Payment Date</th>
            <th>Paid/Unpaid</th>
          </tr>
          <tr>
            <td>Zulker</td>
            <td>Zulker</td>
            <td>Zulker</td>
            <td>Zulker</td>
          </tr>
        </table>
      </div>
    </div>
    </div>
  );
};

export default CustomerDetails;
