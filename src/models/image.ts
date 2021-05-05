import { FileError } from "react-dropzone";

export interface IImageUpload {
  file: File[] | null;
  section: string;
}
export interface UploadableFiles {
  file: File;
  errors: FileError[];
  url?: string;
}

export interface IImage {
  id: string;
  imageLocation: string;
  section: string;
}
