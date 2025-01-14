const svgoConfig = {
  plugins: [
    { name: 'removeDoctype' },
    { name: 'removeComments' },
    { name: 'cleanupAttrs' },
    { name: 'removeMetadata' },
    { name: 'removeXMLProcInst' },
    { name: 'cleanupIDs', active: true }, // Enable cleanupIDs
  ],
};

export default svgoConfig