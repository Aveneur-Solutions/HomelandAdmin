import { observer } from "mobx-react-lite";
import React from "react";
import { Segment, Statistic } from "semantic-ui-react";
import { IStats } from "../../models/stats";
interface IProps{
  stats : IStats;
}
const Statistics : React.FC<IProps> = ({stats}) => {
  return (
    <Segment color="black"  style={{position:"absolute",margin:"6% 10% 25% 25%",display:"flex",justifyContent:"center", padding: "5px 30px"}}>
      <Statistic.Group>
        <Statistic color="yellow">
          <Statistic.Value>{stats.totalUnits}</Statistic.Value>
          <Statistic.Label>Total Units</Statistic.Label>
        </Statistic>
        <Statistic color="yellow">
          <Statistic.Value>{stats.totalAllottedUnits}</Statistic.Value>
          <Statistic.Label>Total Units Sold</Statistic.Label>
        </Statistic>
        <Statistic color="yellow">
          <Statistic.Value>{stats.totalBookedUnits}</Statistic.Value>
          <Statistic.Label>Total Units Booked</Statistic.Label>
        </Statistic>
        <Statistic color="yellow">
          <Statistic.Value>{stats.totalTransfers}</Statistic.Value>
          <Statistic.Label>Total Units Transferred</Statistic.Label>
        </Statistic>
        <Statistic color="yellow">
          <Statistic.Value>{stats.totalUsers}</Statistic.Value>
          <Statistic.Label>Total Number of Users</Statistic.Label>
        </Statistic>
        
      </Statistic.Group>
    </Segment>
  );
};

export default observer(Statistics);
