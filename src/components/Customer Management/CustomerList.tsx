import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Icon, Table } from "semantic-ui-react";
import  { ICustomer } from "../../models/user";
interface IProps {
  customer: ICustomer[];
}
const CustomerList: React.FC<IProps> = ({ customer }) => {
  return (
    <div style={{position:"absolute", margin:"5vh 8%"}}>
      <Table celled textAlign="center" padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
            >
              Customer Name
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
            >
              Phone Number
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
            >
              Address
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
            >
              Number of Booked Flats
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
            >
              Number of Flats Alloted
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
            >
              Action
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {customer &&
            customer!.map((item) => (
              <Table.Row key={item.phoneNumber}>
                <Table.Cell>
                  <p>{item.fullname}</p>
                </Table.Cell>
                <Table.Cell>
                  <p>{item.phoneNumber}</p>
                </Table.Cell>
                <Table.Cell>
                  <p>{item.address}</p>
                </Table.Cell>
                <Table.Cell>
                  <p>{item.noOfFlatsBooked}</p>
                </Table.Cell>
                <Table.Cell>
                  <p>{item.noOfFlatsAlloted}</p>
                </Table.Cell>
                <Table.Cell>
                  <Link to="/CustomerDashboard">
                    <button
                      className="action-button"
                      style={{ display: "flex", justifyContent: "center", alignItems:"center" }}
                    >
                      <Icon color="black" name="eye"></Icon>
                    </button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default observer(CustomerList);
