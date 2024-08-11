import React from 'react';
import { DocumentProvider } from './context/DocumentContext';
import DocumentUpload from './components/DocumentUpload';
import DocumentList from './components/DocumentList';
import DocumentSearch from './components/DocumentSearch';

function App() {
  return (
    <DocumentProvider>
      <div className="App">
        <h1>Document Management</h1>
        <DocumentUpload />
        <DocumentSearch />
        <DocumentList />
      </div>
    </DocumentProvider>
  );
}

export default App;

