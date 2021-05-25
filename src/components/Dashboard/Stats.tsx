import React from "react";
import { Statistic } from "semantic-ui-react";

const Statistics = () => {
  return (
    <div style={{position:"absolute",margin:"10% 10% 25% 25%",display:"flex",justifyContent:"center"}}>
      <Statistic.Group>
        <Statistic color="orange">
          <Statistic.Value>8'</Statistic.Value>
          <Statistic.Label>Total Units</Statistic.Label>
        </Statistic>
        <Statistic color="yellow">
          <Statistic.Value>28</Statistic.Value>
          <Statistic.Label>Total Units Sold</Statistic.Label>
        </Statistic>
        <Statistic color="olive">
          <Statistic.Value>7'</Statistic.Value>
          <Statistic.Label>Total Units Booked</Statistic.Label>
        </Statistic>
        <Statistic color="green">
          <Statistic.Value>14</Statistic.Value>
          <Statistic.Label>Total Units Transferred</Statistic.Label>
        </Statistic>
        <Statistic color="teal">
          <Statistic.Value>82</Statistic.Value>
          <Statistic.Label>Total Number of Customers</Statistic.Label>
        </Statistic>
        
      </Statistic.Group>
    </div>
  );
};

export default Statistics;
