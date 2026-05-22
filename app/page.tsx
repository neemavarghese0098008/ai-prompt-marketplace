
"use client"

import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          padding: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f5f7fb",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial",
        }}
      >

        {/* LEFT SECTION */}
        <div style={{ width: "50%" }}>

          <span
            style={{
              background: "white",
              padding: "10px 20px",
              borderRadius: "999px",
              fontSize: "14px",
              color: "#555",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            AI Prompt Marketplace
          </span>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.1",
              marginTop: "30px",
              color: "#0b1023",
              fontWeight: "bold",
            }}
          >
            Discover, create, and share powerful AI prompts.
          </h1>

          <p
            style={{
              marginTop: "30px",
              fontSize: "22px",
              lineHeight: "1.8",
              color: "#6b7280",
              maxWidth: "700px",
            }}
          >
            Save prompt templates for ChatGPT, Midjourney, Claude, and more.
            Search by title, category, tags, and curate your favorite AI workflows.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
            }}
          ><Link
            href="/prompts"
            style={{
              background: "#0b1023",
              color: "white",
              padding: "18px 35px",
              borderRadius: "20px",
              fontSize: "16px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
              Browse prompts
            </Link>

            <Link
              href="/prompts/add"
              style={{
                background: "white",
                border: "1px solid #d1d5db",
                color: "#0b1023",
                padding: "18px 35px",
                borderRadius: "20px",
                fontSize: "16px",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Add a new prompt
            </Link>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          style={{
            width: "45%",
            background: "white",
            padding: "50px",
            borderRadius: "40px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
            zIndex: 2,
          }}
        >
          <h3
            style={{
              color: "#9ca3af",
              letterSpacing: "8px",
              marginBottom: "40px",
              fontSize: "15px",
            }}
          >
            PROMPT STATS
          </h3>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >

            {/* CARD 1 */}
            <div
              style={{
                background: "#f7f8fc",
                padding: "35px",
                borderRadius: "30px",
                flex: 1,
              }}
            >
              <small
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                Prompts saved
              </small>

              <h2
                style={{
                  fontSize: "50px",
                  marginTop: "20px",
                  color: "#0b1023",
                }}
              >
                120+
              </h2>

              <p
                style={{
                  marginTop: "25px",
                  fontSize: "30px",
                  fontWeight: "bold",
                  lineHeight: "1.4",
                  color: "#0b1023",
                }}
              >
                Create your first prompt
              </p>
            </div>

            {/* CARD 2 */}
            <div
              style={{
                background: "#f7f8fc",
                padding: "35px",
                borderRadius: "30px",
                flex: 1,
              }}
            >
              <small
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                Categories ready
              </small>

              <h2
                style={{
                  fontSize: "50px",
                  marginTop: "20px",
                  color: "#0b1023",
                }}
              >
                25+
              </h2>

              <p
                style={{
                  marginTop: "25px",
                  fontSize: "30px",
                  fontWeight: "bold",
                  lineHeight: "1.4",
                  color: "#0b1023",
                }}
              >
                AI Copy, Art, Workflow
              </p>
            </div>

          </div>
        </div>

        {/* BLUR EFFECTS */}
        <div
          style={{
            width: "300px",
            height: "300px",
            background: "lightblue",
            position: "absolute",
            right: "200px",
            top: "50px",
            filter: "blur(120px)",
            opacity: 0.4,
            borderRadius: "50%",
          }}
        ></div>

        <div
          style={{
            width: "300px",
            height: "300px",
            background: "plum",
            position: "absolute",
            right: "0",
            bottom: "0",
            filter: "blur(120px)",
            opacity: 0.4,
            borderRadius: "50%",
          }}
        ></div>

      </div>
    </div>
  );
}
