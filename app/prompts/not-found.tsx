import Image from "next/image";

export default function Notfound() {
  return (
    <div>
      <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* CENTER CONTENT */}
      <div
        style={{
          textAlign: "center",
          zIndex: 2,
        }}
      >

        {/* 404 */}
        <h1
          style={{
            fontSize: "120px",
            color: "#0f172a",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          404
        </h1>

        {/* TITLE */}
        <h2
          style={{
            fontSize: "48px",
            color: "#0f172a",
            marginBottom: "20px",
          }}
        >
          Page not found
        </h2>

        {/* DESCRIPTION */}
        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "600px",
            margin: "0 auto 40px auto",
          }}
        >
          The page you are looking for does not exist.
          It might have been deleted or the link is incorrect.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >

          {/* HOME BUTTON */}
          <button
            style={{
              background: "#07122d",
              color: "white",
              border: "none",
              padding: "16px 32px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Go home
          </button>

          {/* BROWSE BUTTON */}
          <button
            style={{
              background: "white",
              color: "#0f172a",
              border: "1px solid #dbe1ea",
              padding: "16px 32px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Browse prompts
          </button>

        </div>
      </div>

      {/* BLUE BLUR */}
      <div
        style={{
          width: "400px",
          height: "400px",
          background: "#bfdbfe",
          position: "absolute",
          top: "-100px",
          left: "300px",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      ></div>

      {/* PURPLE BLUR */}
      <div
        style={{
          width: "350px",
          height: "350px",
          background: "#e9d5ff",
          position: "absolute",
          bottom: "-100px",
          right: "-50px",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      ></div>

    </div>
      </div>
  );
}
