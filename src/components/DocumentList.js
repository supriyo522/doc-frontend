import React, { useContext } from 'react';
import { DocumentContext } from '../context/DocumentContext';
import DocumentCard from './DocumentCard';
import './DocumentList.css';

const DocumentList = () => {
  const { documents } = useContext(DocumentContext);

  const publicDocuments = documents.filter((doc) => doc.privacy === 'public');
  const privateDocuments = documents.filter((doc) => doc.privacy === 'private');

  return (
    <div className="document-list">
      <div className="document-category">
        <h2>Public Documents</h2>
        {publicDocuments.map((doc) => (
          <DocumentCard key={doc.id} document={doc} />
        ))}
      </div>
      <div className="document-category">
        <h2>Private Documents</h2>
        {privateDocuments.map((doc) => (
          <DocumentCard key={doc.id} document={doc} />
        ))}
      </div>
    </div>
  );
};

export default DocumentList;

