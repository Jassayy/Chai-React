const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  databaseUrl: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;

//sometimes env varibales string me nahi number ya or koi type me chale jate hai and load nahi hote...for this were making sure that it remains in string by using this conf file
