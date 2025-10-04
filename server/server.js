import "dotenv/config";
import { connectToDb } from "./lib/mongodb.js";
import app from "./app.js";

async function startServer() {
  try {
    await connectToDb();
    app.listen(8080, () => {
      console.log(`Server is running on ${process.env.BASE_URL}`);
    });
  } catch (error) {
    console.error(
      "Failed to start server due to initialization errors:",
      error.message
    );
    process.exit(1);
  }
}

startServer();
