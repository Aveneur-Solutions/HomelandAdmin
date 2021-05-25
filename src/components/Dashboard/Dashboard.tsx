import "semantic-ui-css/semantic.min.css";
import "./Dashboard.css";
import { Grid } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import DashColumn from "./DashColumn";
import { useMediaQuery } from "react-responsive";
import Statistics from "./Stats";

const Dashboard = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div>
          <Statistics/>
          <div className="dashboard">
            <div className="dashtop">
              <Grid columns="3">
                <Grid.Row>
                  <Grid.Column>
                    <DashColumn
                      routeLink="/units"
                      imageLink="/images/1.png"
                      content="Unit Management"
                    />
                  </Grid.Column>
                  {/* GALLERY DATA GOES HERE */}
                  <Grid.Column>
                    <DashColumn
                      routeLink="/gallery"
                      imageLink="/images/2.png"
                      content="Gallery Management"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <DashColumn
                      routeLink="/customerManagement"
                      imageLink="/images/3.png"
                      content="Customer Management"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        </div>
      ) : (
        <div className="dashboard-mob">
          <div className="dashtop-mob">
            <Grid columns="1">
              <Grid.Row>
                <Grid.Column>
                  <DashColumn
                    routeLink="/units"
                    imageLink="/images/1.png"
                    content="Unit Management"
                  />
                </Grid.Column>
                {/* GALLERY DATA GOES HERE */}
                <Grid.Column>
                  <DashColumn
                    routeLink="/gallery"
                    imageLink="/images/2.png"
                    content="Gallery Management"
                  />
                </Grid.Column>
                <Grid.Column>
                  <DashColumn
                    routeLink="/customerManagement"
                    imageLink="/images/3.png"
                    content="Customer Management"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(Dashboard);
