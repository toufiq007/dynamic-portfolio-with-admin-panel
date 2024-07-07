import app from "./app";
import cloudinary from "cloudinary";
const port = process.env.PORT;

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}. This is from the setup file.`
  );
});
