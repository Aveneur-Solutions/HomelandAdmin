import React from "react";
import { Header, Table } from "semantic-ui-react";
import IBooking from "../../models/booking";
interface IProps {
  bookings: IBooking[] | null;
}
const BookingsList: React.FC<IProps> = ({ bookings }) => {
  return (
    <div>
      <Header style={{marginTop:"5vh", textAlign:"center"}}>List of all bookings</Header>
      <Table celled textAlign="center" padded style={{width:"100%"}}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
            >
              UNIT ID
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
            >
              Customer Name
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
            >
              Date Booked
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bookings!.map((item) => (
            <Table.Row key={item.flatId}>
              <Table.Cell>
                <p>{item.flatId}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{item.customerName}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{item.dateBooked}</p>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default BookingsList;
