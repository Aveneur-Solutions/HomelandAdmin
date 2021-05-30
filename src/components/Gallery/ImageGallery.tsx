import "./gallery.css";
import { Grid } from "semantic-ui-react";
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
          {galleryImages.length > 0 &&
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
          }
          {homeImages.length > 0 &&
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
          }
          {projectImages.length > 0 &&
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
          }
        </div>}
      </div>
    </div>
  );
};

export default observer(ImageGallery);
