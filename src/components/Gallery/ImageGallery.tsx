import "./gallery.css";
import { Grid, Image } from "semantic-ui-react";
import { history } from "../..";
import { useContext, useEffect } from "react";
import { RootStoreContext } from "../../Stores/rootStore";
import { observer } from "mobx-react-lite";
import GalleryImage from "./GalleryImage";

const ImageGallery = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    listAllImages,
    galleryImages,
    homeImages,
    projectImages,
  } = rootStore.adminStore;

  useEffect(() => {
    listAllImages();
  }, [listAllImages]);

  return (
    <div className="gallery-dash">
      <div className="image-gallery">
        <button
          className="gall-go-back-btn"
          onClick={() => history.push("/galleryDash")}
        >
          Go back
        </button>
        <div className="image-gallery-container">
          <div className="image-gallery-columns">
            <h2>Gallery</h2>
            <div className="gallery-images">
              <Grid columns={3}>
                  {galleryImages.map((image) => (
                    <Grid.Column key={image.id}>
                      <GalleryImage image={image} />
                    </Grid.Column>
                  ))}
              </Grid>
            </div>
          </div>
          <div className="image-gallery-columns">
            <h2>Home</h2>
            <div className="gallery-images">
              <Grid columns={3}>
                  {homeImages.map((image) => (
                    <Grid.Column key={image.id}>
                      <GalleryImage image={image} />
                    </Grid.Column>
                  ))}
              </Grid>
              {homeImages.map((image) => (
                <div key={image.id}>
                  <GalleryImage image={image} />
                  </div>
                  ))}
            </div>
          </div>
          <div className="image-gallery-columns">
            <h2>Projects</h2>
            <div className="gallery-images">
              <Grid columns={3}>
                  {projectImages.map((image) => (
                    <Grid.Column key={image.id}>
                      <GalleryImage image={image} />
                    </Grid.Column>
                  ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(ImageGallery);
