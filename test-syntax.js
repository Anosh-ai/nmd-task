// Test script to check if Home.jsx can be parsed
try {
  const fs = require('fs');
  const path = require('path');
  
  const homeContent = fs.readFileSync('./src/pages/Home.jsx', 'utf8');
  console.log('File read successfully');
  console.log('File length:', homeContent.length);
  console.log('First 100 chars:', homeContent.substring(0, 100));
  
  // Basic syntax check
  const hasImportReact = homeContent.includes('import React');
  const hasExportDefault = homeContent.includes('export default');
  const hasReturnStatement = homeContent.includes('return (');
  
  console.log('Has React import:', hasImportReact);
  console.log('Has export default:', hasExportDefault);
  console.log('Has return statement:', hasReturnStatement);
  
} catch (error) {
  console.error('Error:', error.message);
}
