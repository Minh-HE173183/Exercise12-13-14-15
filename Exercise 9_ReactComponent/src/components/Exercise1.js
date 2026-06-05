// Exercise 1: Introduction Component - Displays name and brief message about yourself
function Exercise1() {
  return (
    <div className="introduction" style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "32px", color: "#333", fontWeight: "700", marginBottom: "20px" }}>My Name is Vu Dinh Minh</h1>
      <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.8", maxWidth: "600px", margin: "0 auto" }}>
        Im learning React
      </p>
    </div>
  );
}

export default Exercise1;
