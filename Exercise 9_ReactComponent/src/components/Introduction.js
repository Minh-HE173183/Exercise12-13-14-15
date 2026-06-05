// Introduction Component - Displays name and brief message about yourself
function Introduction() {
  return (
    <div className="introduction" style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "32px", color: "#333", fontWeight: "700", marginBottom: "20px" }}>My Name is Vu Di nh Minh</h1>
      <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.8", maxWidth: "600px", margin: "0 auto" }}>
        Im learning React and I love exploring JavaScript. I believe technology can create amazing applications to improve people's lives.
      </p>
    </div>
  );
}

export default Introduction;
