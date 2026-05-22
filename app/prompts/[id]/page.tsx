import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>
}

export default async function View({ params }: Props) {
 
  const { id } = await params
  console.log(id);
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/prompts/${id}`,
  {
    cache: "no-store",
  }
);
  if (!res.ok) {
  throw new Error("Failed to fetch prompt")
}
  const data = await res.json()
  console.log(data);
  const prompt = data.getAPrompts
  if (!prompt) {
  return <div>Prompt not found</div>
}

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      {/* CARD */}
      <div
        style={{
          width: "900px",
          background: "white",
          borderRadius: "35px",
          padding: "45px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >

        {/* TOP */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "35px",
          }}
        >

          {/* CATEGORY */}
          <span
            style={{
              background: "#f1f5f9",
              padding: "10px 18px",
              borderRadius: "999px",
              fontSize: "12px",
              letterSpacing: "3px",
              color: "#64748b",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            {prompt.category}
          </span>

          {/* COPY BUTTON */}
          <button
            style={{
              border: "1px solid #e5e7eb",
              background: "white",
              padding: "10px 20px",
              borderRadius: "999px",
              color: "#64748b",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Copy Prompt
          </button>

        </div>

        {/* TITLE */}
        <h1
          style={{
            fontSize: "58px",
            lineHeight: "1.1",
            color: "#0f172a",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          {prompt.title}
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#64748b",
            marginBottom: "35px",
          }}
        >
          {prompt.description}
        </p>

        {/* PROMPT TEXT */}
        <div
          style={{
            background: "#f8fafc",
            padding: "30px",
            borderRadius: "25px",
            marginBottom: "35px",
          }}
        >

          <h3
            style={{
              marginBottom: "20px",
              color: "#0f172a",
              fontSize: "24px",
            }}
          >
            Prompt
          </h3>

          <p
            style={{
              color: "#475569",
              lineHeight: "2",
              fontSize: "17px",
            }}
          >
            {prompt.promptText}
          </p>

        </div>

        {/* TAGS */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >

          {
            prompt.tags?.map((tag: string, index: number) => (
              <span
                key={index}
                style={{
                  background: "#eef2ff",
                  padding: "10px 16px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  color: "#6366f1",
                  fontWeight: "600",
                }}
              >
                #{tag}
              </span>
            ))
          }

        </div>

        {/* LINE */}
        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            marginBottom: "30px",
          }}
        />

        {/* FOOTER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          {/* AUTHOR */}
          <div>

            <h3
              style={{
                color: "#0f172a",
                fontSize: "24px",
                marginBottom: "8px",
              }}
            >
              {prompt.author}
            </h3>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "16px",
              }}
            >
              {new Date(prompt.createdAt).toLocaleDateString()}
            </p>

          </div>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >

            <Link href={`/prompts/edit/${prompt._id}`}>
              <button
                style={{
                  border: "1px solid #f9a8d4",
                  background: "white",
                  color: "#ec4899",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
            </Link>

            <button
              style={{
                border: "1px solid #e5e7eb",
                background: "white",
                color: "#64748b",
                padding: "10px 18px",
                borderRadius: "999px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Share
            </button>

            <button
              style={{
                border: "none",
                background: "#fee2e2",
                color: "#ef4444",
                padding: "10px 18px",
                borderRadius: "999px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}
