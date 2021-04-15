import { useState } from 'react'
import { useEffect } from 'react';
import {Progress} from 'semantic-ui-react';
import FileHeader from './FileHeader';

interface SingleFileUploadProps{
    file:File;
    onDelete: (file:File) => void;
    onUpload: (file:File, url:string) => void;
}

const SingleFileUpload =({file,onDelete, onUpload}:SingleFileUploadProps) => {
    const [progress, setProgress] =  useState(0);
    useEffect(() => {
        async function upload(){
            const url = await uploadFile(file, setProgress);
            onUpload(file, url);
        }

        upload()
    }, []);
    return (
        <div>
            <FileHeader file={file} onDelete={onDelete}></FileHeader>
            <Progress percent={progress} success size="tiny" color="yellow">File Uploaded</Progress>
        </div>
    )
}

export default SingleFileUpload

function uploadFile(file: File, onProgress: (percentage: number) => void) {
    const url = '...';
    const key = 'key';
  
    return new Promise<string>((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
  
      xhr.onload = () => {
        const resp = JSON.parse(xhr.responseText);
        res(resp.secure_url);
      };
      xhr.onerror = (evt) => rej(evt);
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentage = (event.loaded / event.total) * 100;
          onProgress(Math.round(percentage));
        }
      };
  
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', key);
  
      xhr.send(formData);
    });
  }