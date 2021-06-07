import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'
import ProfilePic from './profile-pic.jpg'

const ProfileCard = () => {
    return (
        <Card className="main-profile-card">
            <Image src={ProfilePic} wrapped ui={false} />
            <Card.Content>
                <Card.Header>Customer Name</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    <Grid>
                        <Grid.Column className="info-column">
                            <Grid.Row className="info">
                                <strong>Phone Number</strong>
                            </Grid.Row>
                            <Grid.Row className="info">
                                <strong>Address</strong>
                            </Grid.Row>
                            <Grid.Row className="info">
                                <strong>NID</strong>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default ProfileCard
