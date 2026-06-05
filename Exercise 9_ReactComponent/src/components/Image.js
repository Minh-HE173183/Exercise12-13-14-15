// Image Component - Displays an image
function Image({ url, alt = "image" }) {
  return <img src={url} alt={alt} style={{ width: "100%", borderRadius: "8px" }} />;
}

export default Image;
