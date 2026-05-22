import Image from "next/image";

export default function Saved() {
  return (
    <div>
      <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* TOP SECTION */}
      <div
        style={{
          background: "white",
          borderRadius: "35px",
          padding: "40px",
          marginBottom: "35px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.04)",
        }}
      >

        <p
          style={{
            letterSpacing: "5px",
            color: "#94a3b8",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          SAVED PROMPTS
        </p>

        <h1
          style={{
            fontSize: "50px",
            color: "#0f172a",
            marginBottom: "15px",
          }}
        >
          Your saved prompts
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "17px",
          }}
        >
          Browse all prompts you have saved for later.
        </p>

      </div>

      {/* CARDS SECTION */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >

        {[
          {
            title: "Next.js API Route Generator",
            category: "CHATGPT",
            desc: "Generate production ready CRUD API routes using the App Router.",
            tags: ["#nextjs", "#api", "#typescript", "#crud"],
          },
          {
            title: "JavaScript Interview Generator",
            category: "CHATGPT",
            desc: "Generate JavaScript interview questions with answers.",
            tags: ["#javascript", "#interview", "#questions"],
          },
          {
            title: "Blog Outline Creator",
            category: "COPYWRITING",
            desc: "Generate structured blog outlines.",
            tags: ["#blog", "#seo", "#content"],
          },
          {
            title: "Bug Fix Assistant",
            category: "CHATGPT",
            desc: "Analyze errors and provide corrected code.",
            tags: ["#debugging", "#react", "#bugfix"],
          },
          {
            title: "Social Media Calendar Creator",
            category: "COPYWRITING",
            desc: "Generate a 30 day social media content plan.",
            tags: ["#content-calendar", "#social-media", "#marketing"],
          },
          {
            title: "YouTube Script Generator",
            category: "CHATGPT",
            desc: "Generate educational YouTube scripts.",
            tags: ["#youtube", "#education", "#script"],
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              width: "31%",
              background: "white",
              borderRadius: "30px",
              padding: "25px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.04)",
            }}
          >

            {/* CARD TOP */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px",
              }}
            >

              <span
                style={{
                  background: "#f1f5f9",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  letterSpacing: "3px",
                  color: "#64748b",
                  fontWeight: "700",
                }}
              >
                {item.category}
              </span>

              <button
                style={{
                  background: "white",
                  border: "1px solid #e5e7eb",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#64748b",
                  cursor: "pointer",
                }}
              >
                Copy
              </button>

            </div>

            {/* TITLE */}
            <h2
              style={{
                fontSize: "34px",
                color: "#0f172a",
                marginBottom: "18px",
                lineHeight: "1.3",
              }}
            >
              {item.title}
            </h2>

            {/* DESCRIPTION */}
            <p
              style={{
                color: "#64748b",
                fontSize: "17px",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              {item.desc}
            </p>

            {/* TAGS */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginBottom: "30px",
              }}
            >

              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    background: "#f1f5f9",
                    padding: "10px 14px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    color: "#64748b",
                    fontWeight: "600",
                  }}
                >
                  {tag}
                </span>
              ))}

            </div>

            {/* FOOTER */}
            <div
              style={{
                borderTop: "1px solid #e5e7eb",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >

              {/* AUTHOR */}
              <div>
                <h4
                  style={{
                    color: "#0f172a",
                    marginBottom: "8px",
                    fontSize: "18px",
                  }}
                >
                  Amritha
                </h4>

                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "15px",
                  }}
                >
                  12/5/2026
                </p>
              </div>

              {/* BUTTONS */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >

                <button
                  style={{
                    border: "2px solid #f9a8d4",
                    background: "#fff1f2",
                    color: "#db2777",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Saved
                </button>

                <button
                  style={{
                    border: "1px solid #e5e7eb",
                    background: "white",
                    color: "#64748b",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  View
                </button>

                <button
                  style={{
                    border: "none",
                    background: "#fff1f2",
                    color: "#ef4444",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Remove saved
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
      </div>
  );
}
