import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import './UploadProfilePic.scss';

const UploadProfilePic = () => {
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
    <div className="upload-profile-pic-wrapper">
      {!selectedFile && (
        <div className="image-container mb-2" onClick={handleClick}>
          <i className="feather icon-user" />
          <p>Profile Photo</p>
        </div>
      )}
      {selectedFile && (
        <div className="image-container mb-2 p-0">
          <img className="w-100" alt="profile photo" src={preview} />
        </div>
      )}
      <Button className="w-100" variant="primary" size="sm" onClick={handleClick}>
        Upload
      </Button>
      <input className="d-none" id="contained-button-file" multiple type="file" ref={inputFile} onChange={onSelectFile} />
    </div>
  );
};

export default UploadProfilePic;
