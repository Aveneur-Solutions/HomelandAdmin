import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import { Card, Container, Grid ,Image } from 'semantic-ui-react'
import { RootStoreContext } from '../../Stores/rootStore'

const UnitDetails = () => {
    const rootStore = useContext(RootStoreContext);
    const {currentUnit,unitDetails} = rootStore.unitStore;
    //const {id} =  useParams();
    // useEffect (() => {
    //   if(!currentUnit)
    //   {
    //    // unitDetails(id);
    //  //   console.log(id)
    //   }
    // },[currentUnit])
    return (
        <div>
            <Container>
            <Card fluid>
                  <Image
                    className="cardhover"
                    src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Grid columns={3} divided>
                      <Grid.Row>
                        <Grid.Column>
                          <Card.Header className="cardtoprow  ">
                            Unit ID<h4 className="cardtoplabel">{currentUnit!.id}</h4>
                          </Card.Header>
                        </Grid.Column>
                        <Grid.Column>
                          <Card.Header className="cardtoprow ">
                            Size<h4 className="cardtoplabel">{currentUnit!.size}</h4>
                            sqft.
                          </Card.Header>
                        </Grid.Column>
                        <Grid.Column>
                          <Card.Header className="cardtoprow ">
                            Price<h4 className="cardtoplabel">{currentUnit!.price}</h4>
                            Tk
                          </Card.Header>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>
                          <Card.Meta>
                            <span className="cardbottomrow">
                              Building: {currentUnit!.buildingNumber}
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
                    </Grid>
                  </Card.Content>
                </Card>
                </Container>
           
           
        </div>
    )
}

export default UnitDetails
