export const fetchDocuments = async () => {
    // Mocked API response
    return [
      { id: 1, name: 'Document 1', privacy: 'public' },
      { id: 2, name: 'Document 2', privacy: 'private' },
    ];
  };
  
  export const uploadDocumentsAPI = async (files, privacy) => {
    // Mocked API upload
    const uploadedDocs = Array.from(files).map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      privacy,
    }));
    return uploadedDocs;
  };
  
  export const searchDocumentsAPI = async (query) => {
    // Mocked API search
    const allDocuments = await fetchDocuments();
    return allDocuments.filter(doc => doc.name.toLowerCase().includes(query.toLowerCase()));
  };
  