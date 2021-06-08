import React from "react";
import { Card, Image, Grid, Container } from "semantic-ui-react";
import { history } from "../..";
import ViewImage from './view-image.png'
import UploadImage from './upload-image.png'
import "./gallery.css";

const GalleryDash = () => {

  return (
    <Container fluid className="gallery-main-container">
      <Grid className="gallery-main-grid">
        <Grid.Row>
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Card className="gallery-main-card">
              <Image src={ViewImage} wrapped ui={false} />
              <Card.Content>
                <button
                  type="button"
                  style={{ width: "100%" }}
                  className="homeLandButton"
                  onClick={() => history.push("/imageGallery")}
                >
                  View Images
                </button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Card className="gallery-main-card">
              <Image src={UploadImage} wrapped ui={false} />
              <Card.Content>
                <button
                  type="button"
                  className="homeLandButton"
                  style={{ width: "100%" }}
                  onClick={() => history.push("/gallery")}
                >
                  Add Image
                </button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default GalleryDash;
