import  { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import "./gallery.css";
import { RootStoreContext } from "../../Stores/rootStore";
import { useForm } from "react-hook-form";
import { IImageUpload } from "../../models/image";
import { Progress } from "semantic-ui-react";
import { history } from "../..";

const Gallery = () => {
  const rootStore = useContext(RootStoreContext);
  const {  UploadImages } = rootStore.adminStore;
  const [percent, setPercent] = useState(0);
  //   const formState: IImageUpload = {
  //     file: null,
  //     section: "",
  //   };

  const onFormSubmit = (data: IImageUpload) => {
    setPercent(10);
    console.log(data);
    UploadImages(data).then(() => {
      reset();
      setPercent(100);
      setTimeout(() => setPercent(0), 1500);
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IImageUpload>();
  
  return (
    <div className="formbg">
    <div className="gallery-form">
      <button
        className="gall-go-back-btn"
        onClick={() => history.push("/galleryDash")}
      >
        Go back
      </button>
      <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <h2>Upload Images:</h2>
          <div className="gallery-form-inside">
            <label htmlFor="section" style={{ marginRight: "20px" }}>
              Select Section{" "}
            </label>
            <select style={{ marginBottom: "10px" }} {...register("section")}>
              <option value="gallery">Gallery</option>
              <option value="home">Home</option>
              <option value="projects">Projects</option>
            </select>
            {/* <input defaultValue={formState.section} style={{ marginLeft: "5px" }} {...register("section", { required: "This field is required" })} type="text" name="section" /> */}
            {errors.section && <p>{errors.section.message}</p>}
            <input
              multiple
              id="images"
              type="file"
              {...register("file", { required: "This field is required" })}
            />
            {errors.file && <p>"Select a file to upload "</p>}
            {/* <MultipleFileUpload register={register} name="files"/> */}
            <input
              type="submit"
              value="Upload"
              style={{ marginTop: "40px", cursor: "pointer" }}
            />
          </div>
        </form>
        <div style={{ marginTop: "20px" }}>
          {percent !== 0 && (
            <Progress percent={percent} success>
              {percent === 100
                ? "File uploaded Successfully"
                : "File is uploading"}
            </Progress>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default observer(Gallery);
