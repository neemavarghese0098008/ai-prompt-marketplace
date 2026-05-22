"use client"
import { routeModule } from "next/dist/build/templates/pages";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Prompts() {
  // const BASE_URL = "http://localhost:3000"
  const [prompts, setPrompts] = useState<any[]>([])
  console.log(prompts);
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('/api/prompts')
      .then((res: any) => res.json())
      .then((data: any) => setPrompts(data.allPrompts))
  }, [])
  const deletePrompt = async (id: string) => {

    try {

      const res = await fetch(`/api/prompts/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      console.log(data);

      if (data.success) {

      setPrompts((prev: any) =>
        prev.filter((item: any) => item._id !== id)
      );

    }

    } catch (error) {
      console.log(error);
    }
  };
  const filteredPrompts = prompts.filter((item: any) => {

  const searchText = search.toLowerCase();

  return (
    item.title?.toLowerCase().includes(searchText) ||
    item.category?.toLowerCase().includes(searchText) ||
    item.tags?.join(" ").toLowerCase().includes(searchText)
  );
});
  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          background: "#f4f7fb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "white",
            borderRadius: "35px",
            padding: "50px 60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >

          {/* LEFT CONTENT */}
          <div style={{ maxWidth: "700px" }}>

            <p
              style={{
                letterSpacing: "5px",
                color: "#94a3b8",
                fontSize: "14px",
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              PROMPTS LIBRARY
            </p>

            <h1
              style={{
                fontSize: "56px",
                color: "#0b1023",
                lineHeight: "1.2",
                marginBottom: "25px",
                fontWeight: "700",
              }}
            >
              Search, filter, and manage AI prompts.
            </h1>

            <p
              style={{
                color: "#64748b",
                fontSize: "20px",
                lineHeight: "1.8",
              }}
            >
              Explore categorized prompts, save favorites, and quickly
              copy prompt text for ChatGPT, Midjourney, Claude,
              and more.
            </p>

          </div>

          {/* BUTTON */}
          <div>
            <Link
              href="/prompts/add"
              style={{
                background: "#07122d",
                color: "white",
                border: "none",
                padding: "18px 35px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Add new prompt
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          minHeight: "100vh",
          background: "#f4f7fb",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >

        {/* SEARCH SECTION */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
          }}
        >

          {/* SEARCH INPUT */}
          <input
  type="text"
  placeholder="Search by title, category, tags..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    flex: 1,
    padding: "22px",
    borderRadius: "25px",
    border: "1px solid #dbe1ea",
    outline: "none",
    fontSize: "16px",
    background: "white",
  }}
/>

          {/* CATEGORY SELECT */}
          <select
            style={{
              width: "400px",
              padding: "22px",
              borderRadius: "25px",
              border: "1px solid #dbe1ea",
              outline: "none",
              fontSize: "16px",
              background: "white",
              cursor: "pointer",
            }}
          >
            <option>All categories</option>
            <option>ChatGPT</option>
            <option>Design</option>
            <option>Automation</option>
          </select>
        </div>

        {/* CATEGORY BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {[
            "ChatGPT",
            "Midjourney",
            "Claude",
            "Copywriting",
            "Automation",
            "Design",
          ].map((item) => (
            <button
              key={item}
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                padding: "12px 22px",
                borderRadius: "999px",
                color: "#475569",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CARDS SECTION */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >

          {/* CARD */}
          {
           filteredPrompts.map((item: any) => (

              <div
                key={item._id}
                style={{
                  width: "31%",
                  background: "white",
                  borderRadius: "35px",
                  padding: "28px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                }}
              >

                {/* TOP SECTION */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "30px",
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
                    {item.category}
                  </span>

                  {/* COPY BUTTON */}
                  <button
                    style={{
                      border: "1px solid #e5e7eb",
                      background: "white",
                      padding: "10px 18px",
                      borderRadius: "999px",
                      fontSize: "14px",
                      color: "#64748b",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Copy
                  </button>

                </div>

                {/* TITLE */}
                <h1
                  style={{
                    fontSize: "52px",
                    lineHeight: "1.15",
                    color: "#0f172a",
                    marginBottom: "18px",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </h1>

                {/* DESCRIPTION */}
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "#64748b",
                    marginBottom: "28px",
                  }}
                >
                  {item.description}
                </p>

                {/* TAGS */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginBottom: "35px",
                  }}
                >

                  {
                    item.tags?.map((tag: string, index: number) => (
                      <span
                        key={index}
                        style={{
                          background: "#f8fafc",
                          padding: "10px 16px",
                          borderRadius: "999px",
                          fontSize: "13px",
                          color: "#64748b",
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
                    marginBottom: "25px",
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
                        fontSize: "20px",
                        color: "#0f172a",
                        marginBottom: "8px",
                      }}
                    >
                      {item.author}
                    </h3>

                    <p
                      style={{
                        color: "#94a3b8",
                        fontSize: "17px",
                      }}
                    >
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>

                  </div>

                  {/* BUTTONS */}
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                    }}
                  >

                    {/* SAVE */}
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >

                      {/* SAVE */}
                      <Link href={'/prompts/saved'}>
                        <button
                          style={{
                            border: "1px solid #f9a8d4",
                            background: "white",
                            color: "#ec4899",
                            padding: "8px 16px",
                            borderRadius: "999px",
                            fontWeight: "600",
                            fontSize: "14px",
                            cursor: "pointer",
                            height: "42px",
                          }}
                        >
                          Saved
                        </button>
                      </Link>

                      {/* VIEW */}
                      <Link href={`/prompts/${item._id}`}>
                        <button
                          style={{
                            border: "1px solid #e5e7eb",
                            background: "white",
                            color: "#64748b",
                            padding: "8px 16px",
                            borderRadius: "999px",
                            fontWeight: "600",
                            fontSize: "14px",
                            cursor: "pointer",
                            height: "42px",
                          }}
                        >
                          View
                        </button>
                      </Link>

                      {/* DELETE */}
                      <button
                        onClick={() => deletePrompt(item._id)}
                        style={{
                          border: "none",
                          background: "#fee2e2",
                          color: "#ef4444",
                          padding: "8px 16px",
                          borderRadius: "999px",
                          fontWeight: "600",
                          fontSize: "14px",
                          cursor: "pointer",
                          height: "42px",
                        }}
                      >
                        Delete
                      </button>



                    </div>

                  </div>

                </div>

              </div>

            ))
          }
        </div>
      </div>
    </div>

  );
}
