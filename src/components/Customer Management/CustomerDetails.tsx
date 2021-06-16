import React, { useContext } from "react";
import { Container, Grid } from "semantic-ui-react";
import Card from "./customer-dashboard/ProfileCard";
import UnitsBooked from "./customer-dashboard/UnitsBooked";
import TransfersMade from "./customer-dashboard/TransfersMade";
import Allotments from "./customer-dashboard/Allotments";
import "./customer-dashboard.css";
import { Link } from "react-router-dom";
import { RootStoreContext } from "../../Stores/rootStore";
import { observer } from "mobx-react-lite";

const CustomerDetails = () => {
  const rootStore = useContext(RootStoreContext)
  const {currentCustomer} = rootStore.customerStore;

  return (
    <>
      <Link to="/customerManagement">
        <button className="backBtn"> Go back</button>
      </Link>
      {currentCustomer && (
        <Container className="main-container" style={{ padding: "2%" }}>
        <Grid className="first-grid">
          <Grid.Column className="main-card-grid" computer={4} mobile={16} tablet={16}>
            <Card customer={currentCustomer}/>
          </Grid.Column>
          <Grid.Column computer={12} mobile={16} tablet={16}>
            <Grid.Row
              className="units-booked-grid"
              style={{ marginBottom: "3px" }}
            >
              <h4>Units Booked</h4>
              <Container className="units-booked" as="div">
                <UnitsBooked bookedUnits={currentCustomer.bookings}/>
              </Container>
            </Grid.Row>
            <Grid.Row className="units-booked-grid">
              <h4>Transfers Made</h4>
              <Container className="units-booked" as="div">
                <TransfersMade  transfers={currentCustomer.transfers}/>
              </Container>
            </Grid.Row>
          </Grid.Column>
        </Grid>

        <Grid className="second-grid">
          <Grid.Row>
            <Grid.Column className="units-booked-grid" computer={16} mobile={16} tablet={16}>
              <h4>Allotments</h4>
              <Container className="units-booked" as="div">
                <Allotments  allotments={currentCustomer.allotments}/>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      )}
      
    </>
  );
};

export default observer(CustomerDetails);
