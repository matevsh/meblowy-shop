export default () => ({
  tempFolder: process.env.TEMP || 'temp',
  uploadFolder: process.env.UPLOAD || 'upload',
});
