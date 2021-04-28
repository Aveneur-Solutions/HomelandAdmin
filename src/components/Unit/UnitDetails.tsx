import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { Card, Container, Grid, Image } from 'semantic-ui-react'
import { RootStoreContext } from '../../Stores/rootStore'
interface CustomParams {
  id: string
}

const UnitDetails: React.FC<RouteComponentProps<CustomParams>> = ({ match }) => {
  const rootStore = useContext(RootStoreContext);
  const { currentUnit, unitDetails } = rootStore.unitStore;
  useEffect(() => {
    if (currentUnit === null) {
      unitDetails(match.params.id);

    }
  }, [currentUnit, match.params.id])
  console.log(currentUnit?.images)
  return (
    <div>
      {currentUnit && <Container>
        <Card fluid>
          <Image
            className="cardhover"
            src={"https://www.homeland.aveneur.com/Images" + currentUnit!.images![0].imageLocation}
            wrapped
            ui={false}
          />
          {console.log(currentUnit!.images![0].imageLocation)}
          <Card.Content>
            <Grid columns={3} divided>
              <Grid.Row>
                <Grid.Column>
                  <Card.Header className="cardtoprow  ">
                    Unit ID<h4 className="cardtoplabel">{currentUnit.id}</h4>
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
      }


    </div>
  )
}

export default observer(UnitDetails)
