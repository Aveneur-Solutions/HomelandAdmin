import React from 'react'
import MultipleFileUpload from './MultipleFileUpload'
import { observer } from "mobx-react-lite";
import "./gallery.css";

const Gallery = () => {
    return (
        <div className="gallery-form">
            <div>
            <form action="">
                <h2>Gallery to upload to:</h2>
                <input type="radio" name="galleryOption" value="galleryOne"/>
                <label style={{marginRight:"20px"}}>Gallery 1</label>
                <input style={{marginLeft:"5px"}} type="radio" name="galleryOption" value="galleryOne"/>
                <label>Gallery 2</label>
                <MultipleFileUpload name="files"/>
                <input type="submit" value="Upload" style={{marginTop:"20px"}}/>
                </form>
            </div>
        </div>
    )
}

export default observer(Gallery);
