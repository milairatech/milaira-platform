import { useState } from "react";
import imageCompression from "browser-image-compression";
import "./ImageCompressor.css";

function ImageCompressor() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [quality, setQuality] = useState(80);
  const [format, setFormat] = useState("image/jpeg");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setCompressedFile(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setCompressedFile(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const compressImage = async () => {
    if (!image) return;

    try {
      setLoading(true);

      const options = {
        maxSizeMB: 5,
        initialQuality: quality / 100,
        useWebWorker: true,
        fileType: format,
      };

      const compressed = await imageCompression(
        image,
        options
      );

      setCompressedFile(compressed);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!compressedFile) return;

    const url = URL.createObjectURL(compressedFile);

    const link = document.createElement("a");

    link.href = url;

    link.download =
      compressedFile.name ||
      "milaira-compressed-image";

    link.click();
  };

  return (
    <div className="image-toolkit">
      <h1>Milaira Image Toolkit</h1>

      <p>
        Compress, resize, convert and optimize
        your images instantly. Fast, secure and
        completely browser-based.
      </p>

      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <h3>📸 Upload Image</h3>

        <p>
          Drag & Drop your image here
        </p>

        <p>or</p>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="preview-image"
        />
      )}

      <div className="controls">
        <label>
          Quality: {quality}%
        </label>

        <input
          type="range"
          min="10"
          max="100"
          value={quality}
          onChange={(e) =>
            setQuality(e.target.value)
          }
        />

        <label>
          Output Format
        </label>

        <select
          value={format}
          onChange={(e) =>
            setFormat(e.target.value)
          }
        >
          <option value="image/jpeg">
            JPG
          </option>

          <option value="image/png">
            PNG
          </option>

          <option value="image/webp">
            WEBP
          </option>
        </select>

        <button onClick={compressImage}>
          {loading
            ? "Compressing..."
            : "Compress Image"}
        </button>
      </div>

      {compressedFile && (
        <div className="result-box">
          <h3>Results</h3>

          <p>
            Original Size:{" "}
            {(image.size / 1024).toFixed(2)}
            KB
          </p>

          <p>
            Compressed Size:{" "}
            {(
              compressedFile.size / 1024
            ).toFixed(2)}
            KB
          </p>

          <p>
            Saved:{" "}
            {(
              ((image.size -
                compressedFile.size) /
                image.size) *
              100
            ).toFixed(1)}
            %
          </p>

          <button
            onClick={downloadImage}
          >
            Download Image
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageCompressor;