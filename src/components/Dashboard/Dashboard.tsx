import "semantic-ui-css/semantic.min.css";
import "./Dashboard.css";
import { Card, Grid, Image, Feed } from "semantic-ui-react";

const Dashboard = () => (
  <>
    <div className="dashboard">
      <Grid columns="four">
        <Grid.Row>
          <Grid.Column>
            <div className="forcards">
              <Card fluid>
                <Image>
                  {" "}
                  <img
                    className="logoimg"
                    src={process.env.PUBLIC_URL + "/images/du.jpg"}
                    alt=""
                  />
                </Image>
                <Card.Content>
                  <Card.Header>Unit Management</Card.Header>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>

          {/* GALLERY DATA GOES HERE */}
          <Grid.Column>
            <div className="forcards">
              <Card fluid>
                <Image>
                  {" "}
                  <img
                    className="logoimg"
                    src={process.env.PUBLIC_URL + "/images/gu.png"}
                    alt=""
                  />
                </Image>
                <Card.Content>
                  <Card.Header>Gallery Management</Card.Header>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="forcards">
              <Card fluid>
                <Image>
                  {" "}
                  <img
                    className="logoimg"
                    src={process.env.PUBLIC_URL + "/images/tax.jpg"}
                    alt=""
                  />
                </Image>
                <Card.Content>
                  <Card.Header>Tax Management</Card.Header>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>

          {/* ACTIVITY LOG DATA STREAM GOES HERE */}
          <Grid.Column>
            <div className="forcards">
              <Card>
                <Card.Content>
                  <Card.Header>Activity Log</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Feed>
                    <Feed.Event>
                      <Feed.Label image="/images/avatar/small/jenny.jpg" />
                      <Feed.Content>
                        <Feed.Date content="1 day ago" />
                        <Feed.Summary>
                          You added <a>Jenny Hess</a> to your <a>coworker</a>{" "}
                          group.
                        </Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                      <Feed.Label image="/images/avatar/small/molly.png" />
                      <Feed.Content>
                        <Feed.Date content="3 days ago" />
                        <Feed.Summary>
                          You added <a>Molly Malone</a> as a friend.
                        </Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                      <Feed.Label image="/images/avatar/small/elliot.jpg" />
                      <Feed.Content>
                        <Feed.Date content="4 days ago" />
                        <Feed.Summary>
                          You added <a>Elliot Baker</a> to your <a>musicians</a>{" "}
                          group.
                        </Feed.Summary>
                      </Feed.Content>
                    </Feed.Event>
                  </Feed>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <div className="forcards">
              <Card fluid>
                <Image>
                  {" "}
                  <img
                    className="logoimg"
                    src={process.env.PUBLIC_URL + "/images/uf.jpeg"}
                    alt=""
                  />
                </Image>
                <Card.Content>
                  <Card.Header>User FeedBack</Card.Header>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="forcards">
              <Card fluid>
                <Image>
                  {" "}
                  <img
                    className="logoimg"
                    src={process.env.PUBLIC_URL + "/images/cm.png"}
                    alt=""
                  />
                </Image>
                <Card.Content>
                  <Card.Header>Customer Management</Card.Header>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </>
);

export default Dashboard;
