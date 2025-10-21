// MongoDB connection disabled for static site deployment
// This file is kept for compatibility but doesn't actually connect to MongoDB

async function dbConnect(): Promise<any> {
  // Mock function that doesn't actually connect to MongoDB
  // This allows the app to run without MongoDB for static deployment
  console.log("MongoDB connection disabled - running in static mode");
  return null;
}

export default dbConnect;
