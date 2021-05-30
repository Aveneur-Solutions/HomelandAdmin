import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { Button, Image } from "semantic-ui-react";
import { RootStoreContext } from "../../Stores/rootStore";
import DeleteImageModal from "./DeleteImageModal";
import { history } from "../..";

interface CustomParams {
  id: string;
}

const ImageDetails: React.FC<RouteComponentProps<CustomParams>> = ({
  match,
}) => {
  const rootStore = useContext(RootStoreContext);
  const { getImage, image, deleteImage } = rootStore.adminStore;

  useEffect(() => {
    getImage(match.params.id);
  }, [getImage, match.params.id]);

  return (
    <div className="gallery-image-details">
      <div className="image-container">
        {image && (
          <>
            <Button onClick={() => history.push("/imageGallery")} floated="left" color="yellow" style={{ marginTop: 20, marginBottom: 10 }}>
              Go back
                </Button>
            <DeleteImageModal
              trigger={
                <Button floated="right" color="red" style={{ marginTop: 20, marginBottom: 10 }}>
                  Delete
                </Button>
              }
              action={() => deleteImage(image)}
            />
            <Image
              src={
                "https://www.homeland.aveneur.com/Images" + image.imageLocation
              }
            />    
          </>
        )}
      </div>
    </div>
  );
};

export default observer(ImageDetails);
