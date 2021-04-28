import "semantic-ui-css/semantic.min.css";
import "./Dashboard.css";
import {  Grid  } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import DashColumn from "./DashColumn";

const Dashboard = () => (
  <>
    <div className="dashboard">
      <div className="dashtop">
        <Grid columns="four">
          <Grid.Row>
            <Grid.Column>
              <DashColumn routeLink="/units" imageLink="/images/du.jpg" content="Unit Management" />
            </Grid.Column>
            {/* GALLERY DATA GOES HERE */}
            <Grid.Column>
              <DashColumn routeLink="/gallery" imageLink="/images/gu.png" content="Gallery Management" />
            </Grid.Column>
            <Grid.Column>
              <DashColumn routeLink="/gallery" imageLink="/images/cm.png" content="Customer Management" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </>
);

export default observer(Dashboard);
