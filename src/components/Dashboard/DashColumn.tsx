import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
interface IProps {
  routeLink: string;
  imageLink?: string;
  content: string;
}
const DashColumn: React.FC<IProps> = ({ routeLink, imageLink, content }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="card-container">
          <div className="forcards">
            <Link to={routeLink}>
              <Card fluid>
                {imageLink && (
                  <Image>
                    {" "}
                    <img
                      className="logoimg"
                      src={process.env.PUBLIC_URL + imageLink}
                      alt=""
                    />
                  </Image>
                )}

                <Card.Content id="content">
                  <Card.Header id="content-text">{content}</Card.Header>
                </Card.Content>
              </Card>
            </Link>
          </div>
        </div>
      ) : (
        <div className="card-container-mob">
          <div className="forcards-mob">
            <Link to={routeLink}>
              <Card fluid>
                {imageLink && (
                  <Image>
                    {" "}
                    <img
                      className="logoimg"
                      src={process.env.PUBLIC_URL + imageLink}
                      alt=""
                    />
                  </Image>
                )}

                <Card.Content id="content">
                  <Card.Header id="content-text">{content}</Card.Header>
                </Card.Content>
              </Card>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default DashColumn;
