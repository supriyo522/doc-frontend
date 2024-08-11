import React, { useState, useContext } from 'react';
import { DocumentContext } from '../context/DocumentContext';
import './DocumentUpload.css';

const DocumentUpload = () => {
  const [files, setFiles] = useState([]);
  const [privacy, setPrivacy] = useState('public');
  const { uploadDocuments } = useContext(DocumentContext);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = () => {
    uploadDocuments(files, privacy);
  };

  return (
    <div className="document-upload">
      <input type="file" multiple onChange={handleFileChange} />
      <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default DocumentUpload;

