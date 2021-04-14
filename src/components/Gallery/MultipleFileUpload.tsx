import React,{useCallback, useState} from 'react';
import {FileError, FileRejection, useDropzone} from 'react-dropzone';
import SingleFileUpload from './SingleFileUpload';

const MultipleFileUpload =({ name }: { name: string }) => {

    interface UploadableFiles{
        file: File;
        errors: FileError[];
        url?: string;
    }

    const [files, setFiles] = useState<UploadableFiles[]>([]);
    const onDrop = useCallback((accFiles:File[], rejFiles: FileRejection[]) => {
      const mappedAcc = accFiles.map(file => ({file,errors: []}));
      setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    function onDelete(file:File){
      setFiles(curr =>{
        return curr.filter(fw => fw.file !== file)
      });
    }

    function onUpload(file: File, url: string) {
      setFiles((curr) =>
        curr.map((fw) => {
          if (fw.file === file) {
            return { ...fw, url };
          }
          return fw;
        })
      );
    }

    return (
      <React.Fragment>
      <div {...getRootProps()} className="drag-container">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      
        {files.map((fileWrapper,index) =>(
          <SingleFileUpload onDelete={onDelete} onUpload={onUpload} key={index} file={fileWrapper.file} />
      ))}
        </React.Fragment>
    )
  }

  export default MultipleFileUpload
