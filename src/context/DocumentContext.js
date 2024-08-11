import React, { createContext, useReducer, useEffect } from 'react';
import { fetchDocuments, uploadDocumentsAPI, searchDocumentsAPI } from '../services/api';

const DocumentContext = createContext();

const documentReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DOCUMENTS':
      return action.payload;
    case 'ADD_DOCUMENTS':
      return [...state, ...action.payload];
    case 'SEARCH_DOCUMENTS':
      return action.payload;
    default:
      return state;
  }
};

const DocumentProvider = ({ children }) => {
  const [documents, dispatch] = useReducer(documentReducer, []);

  useEffect(() => {
    fetchDocuments().then(data => {
      dispatch({ type: 'SET_DOCUMENTS', payload: data });
    });
  }, []);

  const uploadDocuments = (files, privacy) => {
    uploadDocumentsAPI(files, privacy).then(newDocuments => {
      dispatch({ type: 'ADD_DOCUMENTS', payload: newDocuments });
    });
  };

  const searchDocuments = (query) => {
    searchDocumentsAPI(query).then(foundDocuments => {
      dispatch({ type: 'SEARCH_DOCUMENTS', payload: foundDocuments });
    });
  };

  return (
    <DocumentContext.Provider value={{ documents, uploadDocuments, searchDocuments }}>
      {children}
    </DocumentContext.Provider>
  );
};

export { DocumentContext, DocumentProvider };
