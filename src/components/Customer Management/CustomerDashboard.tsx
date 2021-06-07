import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Card from "./customer-dashboard/ProfileCard";
import UnitsBooked from "./customer-dashboard/UnitsBooked";
import TransfersMade from "./customer-dashboard/TransfersMade";
import Allotments from "./customer-dashboard/Allotments";
import "./customer-dashboard.css";
import { Link } from "react-router-dom";

const CustomerDashboard = () => {
  return (
    <>
      <Link to="/customerManagement">
        <button className="backBtn"> Go back</button>
      </Link>
      <Container className="main-container" style={{ padding: "2%" }}>
        <Grid>
          <Grid.Column className="main-card-grid" width={4}>
            <Card />
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid.Row
              className="units-booked-grid"
              style={{ marginBottom: "3px" }}
            >
              <h4>Units Booked</h4>
              <Container className="units-booked" as="div">
                <UnitsBooked />
              </Container>
            </Grid.Row>
            <Grid.Row className="units-booked-grid">
              <h4>Transfers Made</h4>
              <Container className="units-booked" as="div">
                <TransfersMade />
              </Container>
            </Grid.Row>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Row>
            <Grid.Column className="units-booked-grid">
              <h4>Allotments</h4>
              <Container className="units-booked" as="div">
                <Allotments />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default CustomerDashboard;
