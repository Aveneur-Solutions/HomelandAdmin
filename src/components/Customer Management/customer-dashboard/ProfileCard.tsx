import { observer } from 'mobx-react-lite'
import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'
import { ICustomerDetails } from '../../../models/user'
import ProfilePic from './profile-pic.jpg'

const ProfileCard : React.FC<{customer : ICustomerDetails}> = ({customer}) => {
    return (
        <Card className="main-profile-card">
            <Image src={ProfilePic} wrapped ui={false} />
            <Card.Content className="profile-content">
                <Card.Header>{customer.fullName}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    <Grid>
                        <Grid.Column className="info-column">
                            <Grid.Row className="info">
                                <strong>{customer.phoneNumber}</strong>
                            </Grid.Row>
                            <Grid.Row className="info">
                                <strong>{customer.address}</strong>
                            </Grid.Row>
                            <Grid.Row className="info">
                                <strong>NID : {customer.nid}</strong>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default observer(ProfileCard)
