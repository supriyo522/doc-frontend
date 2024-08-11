import React, { useState, useContext } from 'react';
import { DocumentContext } from '../context/DocumentContext';
import './DocumentSearch.css';

const DocumentSearch = () => {
  const [term, setTerm] = useState('');
  const { searchDocuments } = useContext(DocumentContext);

  const handleSearch = () => {
    searchDocuments(term);
  };

  return (
    <div className="document-search">
      <input
        type="text"
        placeholder="Search for a document..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default DocumentSearch;

