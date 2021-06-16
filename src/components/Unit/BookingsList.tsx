import { format } from "date-fns";
import React from "react";
import { Container, Header, Table } from "semantic-ui-react";
import IBooking from "../../models/booking";
import './unit.css'
interface IProps {
  bookings: IBooking[] | null;
}
const BookingsList: React.FC<IProps> = ({ bookings }) => {
  return (
    <div>
      <Header style={{ marginTop: "5vh", textAlign: "center" }}>
        List of all bookings
      </Header>
      <Container className="unit-booking-container" fluid>
        <Table celled textAlign="center" padded style={{ width: "100%" }}>
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
                  <p>{format(new Date(item.dateBooked), "dd MMM yyyy")}</p>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
};

export default BookingsList;
