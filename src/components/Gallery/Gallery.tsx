import React, { useContext } from 'react'
import { observer } from "mobx-react-lite";
import "./gallery.css";
import { RootStoreContext } from '../../Stores/rootStore';
import { useForm } from 'react-hook-form';
import { IImageUpload } from '../../models/image';

const Gallery = () => {
    const rootStore = useContext(RootStoreContext);
    const { Images, UploadImages } = rootStore.commonStore;
    const formState: IImageUpload = {
        "file": null,
        "section": ""
    }
    const onFormSubmit = (data: IImageUpload) => {
        console.log(data)
        UploadImages(data).then(() => reset());

    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IImageUpload>();
    return (
        <div className="gallery-form">
            <div>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <h2>Gallery to upload to:</h2>
                    <label htmlFor="section" style={{ marginRight: "20px" }}>Section </label>
                    <select {...register("section")}>
                        <option value="gallery">Gallery</option>
                        <option value="home">Home</option>
                        <option value="projects">Projects</option>
                    </select>
                    {/* <input defaultValue={formState.section} style={{ marginLeft: "5px" }} {...register("section", { required: "This field is required" })} type="text" name="section" /> */}
                    {errors.section && <p>{errors.section.message}</p>}
                    <input multiple id="images" type="file" {...register("file", { required: "This field is required" })} />
                    {errors.file && <p>"Select a file to upload "</p>}
                    {/* <MultipleFileUpload register={register} name="files"/> */}
                    <input type="submit" value="Upload" style={{ marginTop: "20px" }} />
                </form>
            </div>
        </div>
    )
}

export default observer(Gallery);
