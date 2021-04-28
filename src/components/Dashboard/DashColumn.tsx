import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
interface IProps {
    routeLink: string
    imageLink?: string
    content: string
}
const DashColumn: React.FC<IProps> = ({ routeLink, imageLink, content }) => {
    return (
        <div className="forcards">

            <Link to={routeLink}>
                <Card fluid>
                    {imageLink && <Image>
                        {" "}
                        <img
                            className="logoimg"
                            src={process.env.PUBLIC_URL + imageLink}
                            alt=""
                        />
                    </Image>}

                    <Card.Content>
                        <Card.Header>{content}</Card.Header>
                    </Card.Content>
                </Card>
            </Link>

        </div>
    )
}

export default DashColumn
