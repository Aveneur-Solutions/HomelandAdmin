import "./gallery.css";
import { Grid, Image } from "semantic-ui-react";
import { history } from "../..";
import { useContext, useEffect } from "react";
import { RootStoreContext } from "../../Stores/rootStore";
import { observer } from "mobx-react-lite";
import GalleryImage from "./GalleryImage";
import MyLoader from "../Common/MyLoader";
const ImageGallery = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    listAllImages,
    galleryImages,
    homeImages,
    projectImages,
    loading
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
        {loading ? <MyLoader /> : <div className="image-gallery-container">
          <div className="image-gallery-columns">
            <h2>Gallery</h2>
            <div className="gallery-images">

              <Grid columns={3}>

                <Grid.Row>
                  {galleryImages.map((image) => (
                    <Grid.Column key={image.id}>
                      <GalleryImage image={image} />
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            </div>
          </div>
          <div className="image-gallery-columns">
            <h2>Home</h2>
            <div className="gallery-images">
              <Grid columns={3}>
                <Grid.Row>
                  {homeImages.map((image) => (
                    <Grid.Column key={image.id}>
                      <GalleryImage image={image} />
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            </div>
          </div>
          <div className="image-gallery-columns">
            <h2>Projects</h2>
            <div className="gallery-images">
              <Grid columns={3}>
                <Grid.Row>
                  {projectImages.map((image) => (
                    <Grid.Column key={image.id}>
                      <GalleryImage image={image} />
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            </div>
          </div>
        </div>}

      </div>
    </div>
  );
};

export default observer(ImageGallery);
