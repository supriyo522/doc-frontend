import React from 'react';
import './DocumentCard.css';

const DocumentCard = ({ document }) => {
  return (
    <div className="document-card">
      <h3>{document.name}</h3>
      <p>Privacy: {document.privacy}</p>
    </div>
  );
};

export default DocumentCard;

