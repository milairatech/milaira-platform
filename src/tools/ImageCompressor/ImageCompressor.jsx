import { useState } from "react";
import imageCompression from "browser-image-compression";
import "./ImageCompressor.css";
import Navbar from "../../components/Navbar";

function ImageCompressor() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);

  const [quality, setQuality] = useState(80);
  const [format, setFormat] = useState("image/jpeg");
  const [loading, setLoading] = useState(false);

  const [imageInfo, setImageInfo] = useState(null);

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const formatSize = (bytes) => {
    if (bytes >= 1024 * 1024) {
      return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
    }

    return `${(bytes / 1024).toFixed(2)} KB`;
  };

  const loadImageInfo = (file) => {
    const img = new Image();

    img.onload = () => {
      setWidth(img.width);
      setHeight(img.height);

      setImageInfo({
        name: file.name,
        size: file.size,
        width: img.width,
        height: img.height,
        type: file.type,
      });
    };

    img.src = URL.createObjectURL(file);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setCompressedFile(null);

    loadImageInfo(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setCompressedFile(null);

    loadImageInfo(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const resizeImage = (file) => {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = () => {
        const canvas =
          document.createElement("canvas");

        const targetWidth =
          Number(width) || img.width;

        const targetHeight =
          Number(height) || img.height;

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const ctx =
          canvas.getContext("2d");

        ctx.drawImage(
          img,
          0,
          0,
          targetWidth,
          targetHeight
        );

        canvas.toBlob(
          (blob) => {
            resolve(
              new File(
                [blob],
                file.name,
                {
                  type: format,
                }
              )
            );
          },
          format,
          quality / 100
        );
      };

      img.src = URL.createObjectURL(file);
    });
  };

  const compressImage = async () => {
    if (!image) return;

    try {
      setLoading(true);

      const resizedImage =
        await resizeImage(image);

      const options = {
        maxSizeMB: 5,
        initialQuality:
          quality / 100,
        useWebWorker: true,
        fileType: format,
      };

      const compressed =
        await imageCompression(
          resizedImage,
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

    const url =
      URL.createObjectURL(
        compressedFile
      );

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      compressedFile.name ||
      "milaira-image";

    link.click();
  };
    return (
    <>
      <Navbar />

      <div className="image-toolkit">
        <div className="hero">
          <h1>Milaira Image Studio</h1>

          <p>
            Fast, secure image compression with no uploads.
            Everything runs in your browser.
          </p>
        </div>

        <div className="dashboard">

          {/* Preview */}

      {/* Preview */}

<div
  className="preview-card"
  onDrop={handleDrop}
  onDragOver={handleDragOver}
>
  {preview ? (
    <>
      <img
        src={preview}
        alt="Preview"
        className="preview-image"
      />

      <label
        htmlFor="imageUpload"
        className="change-image-btn"
      >
        Change Image
      </label>

      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        hidden
      />
    </>
  ) : (
    <div className="empty-preview">
      <div className="upload-big-icon">
        📷
      </div>

      <h3>Upload your image</h3>

      <p>Drag & Drop your image here</p>

      <p className="or-text">or</p>

      <label
        htmlFor="imageUpload"
        className="choose-image-btn"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 16V4M12 4L7 9M12 4L17 9M5 20H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Choose Image</span>
      </label>

      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        hidden
      />
    </div>
  )}
</div>

          {/* Settings */}

          <div className="controls-card">

            <h3>Image Settings</h3>

           {image && (
  <div className="selected-file">
    ✓ {image.name}
  </div>
)}

<label className="choose-image-btn">
  <input
    hidden
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
  />

  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 16V4M12 4L7 9M12 4L17 9M5 20H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  <span>
    {image ? "Change Image" : "Choose Image"}
  </span>
</label>

            <label>Width</label>

            <input
              type="number"
              value={width}
              onChange={(e) =>
                setWidth(e.target.value)
              }
            />

            <label>Height</label>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
            />

            <label>
              Quality : {quality}%
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

            <label>Output Format</label>

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

            <button
              className="primary-btn"
              onClick={compressImage}
            >
              {loading
                ? "Processing..."
                : "Compress Image"}
            </button>
          </div>

          {/* Results */}

          <div className="result-panel">

            <h3>Results</h3>

            {imageInfo ? (
              <>

                <div className="info-row">
                  <span>Original</span>

                  <strong>
                    {formatSize(image.size)}
                  </strong>
                </div>

                <div className="info-row">
                  <span>Resolution</span>

                  <strong>
                    {imageInfo.width} × {imageInfo.height}
                  </strong>
                </div>

                {compressedFile && (
                  <>
                    <div className="info-row">
                      <span>Compressed</span>

                      <strong>
                        {formatSize(
                          compressedFile.size
                        )}
                      </strong>
                    </div>

                    <div className="info-row">
                      <span>Saved</span>

                      <strong>
                        {(
                          ((image.size -
                            compressedFile.size) /
                            image.size) *
                          100
                        ).toFixed(1)}
                        %
                      </strong>
                    </div>

                    <button
                      className="download-btn"
                      onClick={downloadImage}
                    >
                      Download Image
                    </button>
                  </>
                )}

              </>
            ) : (
              <div className="empty-result">
                Upload an image to see details
              </div>
            )}

          </div>

        </div>
      </div>
    </>
  );
}

export default ImageCompressor;