import { history } from "../..";
import "./gallery.css";

const GalleryDash = () => {

  return (
    <div className="gallery-dash">
      <div className="gallery-dash-button-container">
        <button
          type="button"
          className="homeLandButton"
          onClick={() => history.push("/imageGallery")}
        >
          View Images
        </button>
        <button
          type="button"
          className="homeLandButton"
          onClick={() => history.push("/gallery")}
        >
          Add Image
        </button>
      </div>
    </div>
  );
};

export default GalleryDash;
