import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom';
import { Card, Container, Grid, Image } from 'semantic-ui-react'
import { RootStoreContext } from '../../Stores/rootStore'
interface CustomParams {
  id: string
}

const UnitDetails: React.FC<RouteComponentProps<CustomParams>> = ({ match }) => {
  const rootStore = useContext(RootStoreContext);
  const { currentUnit, unitDetails } = rootStore.unitStore;
  const { token } = rootStore.commonStore;
  useEffect(() => {
    if(token)
    {
      if (currentUnit === null) {
        unitDetails(match.params.id);
      
      }
    }
  }, [currentUnit, match.params.id, unitDetails,token])
  console.log(currentUnit?.images)
  return (
    <div className="unittop">

      {currentUnit && <Container>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <Link to="/units">
            <button className="homeLandButton">Back to List</button>
          </Link>
          <button className="homeLandButton">Create allotment</button>
        </div>

        <Card fluid>

          <Image
            className="cardhover"
            src={"https://www.homeland.aveneur.com/Images" + currentUnit!.images![currentUnit.images.length-1].imageLocation}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Grid columns={3} divided>
              <Grid.Row>
                <Grid.Column>
                  <Card.Header className="cardtoprow  ">
                    Status : <h4 className="cardtoplabel">{currentUnit.isBooked ? "Booked" : "Available"}</h4>
                  </Card.Header>
                </Grid.Column>
                <Grid.Column>
                  <Card.Header className="cardtoprow  ">
                    Unit ID<h4 className="cardtoplabel">{currentUnit.id}</h4>
                  </Card.Header>
                </Grid.Column>
                <Grid.Column>
                  <Card.Header className="cardtoprow ">
                    Total Size<h4 className="cardtoplabel">{currentUnit!.size}</h4>
                            sqft.
                          </Card.Header>
                </Grid.Column>
                <Grid.Column>
                  <Card.Header className="cardtoprow ">
                    Total Price<h4 className="cardtoplabel">{currentUnit!.price}</h4>
                            Tk
                          </Card.Header>
                </Grid.Column>
                <Grid.Column>
                  <Card.Header className="cardtoprow ">
                    Booking Price<h4 className="cardtoplabel">{currentUnit!.bookingPrice}</h4>
                            Tk
                          </Card.Header>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Card.Meta>
                    <span className="cardbottomrow">
                      Building Number: {currentUnit!.buildingNumber}
                    </span>
                  </Card.Meta>
                  <Card.Meta>
                    <span className="cardbottomrow">
                      Level: {currentUnit!.level}
                    </span>
                  </Card.Meta>
                </Grid.Column>
                <Grid.Column>
                  <Card.Meta>
                    <span className="cardbottomrow">
                      Net Area: {currentUnit!.netArea}
                    </span>
                  </Card.Meta>
                  <Card.Meta>
                    <span className="cardbottomrow">
                      Common Area: {currentUnit!.commonArea}
                    </span>
                  </Card.Meta>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Card.Meta>
                    <span className="cardbottomrow">
                      Balconies : {currentUnit!.noOfBalconies}
                    </span>
                  </Card.Meta>
                  <Card.Meta>
                    <span className="cardbottomrow">
                      Baths : {currentUnit!.noOfBaths}
                    </span>
                  </Card.Meta>
                </Grid.Column>
                <Grid.Column>
                  <Card.Meta>
                    <span className="cardbottomrow">
                      Bedrooms: {currentUnit!.noOfBedrooms}
                    </span>
                  </Card.Meta>

                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Container>
      }


    </div>
  )
}

export default observer(UnitDetails)
