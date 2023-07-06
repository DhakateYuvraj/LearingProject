import React, { useRef, useState } from 'react';
import './UploadDocument.scss';

const UploadDocument = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const inputFile = useRef(null);

  const handleClick = () => {
    inputFile.current.click();
  };

  const onSelectFile = (e) => {
    setSelectedFile(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
  };

  return (
    <div className="upload-doc-wrapper">
      {!selectedFile && (
        <div className="image-container mb-2" onClick={handleClick}>
          <i className="feather icon-paperclip p-2 d-block" />
          <p>Document</p>
        </div>
      )}
      {selectedFile && (
        <div className="image-container mb-2 p-0">
          <img className="w-100" alt="Document" src={preview} />
        </div>
      )}
      <input className="d-none" id="contained-button-file" multiple type="file" ref={inputFile} onChange={onSelectFile} />
    </div>
  );
};

export default UploadDocument;
