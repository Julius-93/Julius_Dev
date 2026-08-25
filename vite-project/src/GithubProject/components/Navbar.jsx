import { useState } from "react";

function Navbar() {
  // State to store what the user types
  const [search, setSearch] = useState("");

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#161b22",
        padding: "12px 20px",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          flex: 1,
        }}
      >
        {/* GitHub Logo */}
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          style={{
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "60%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #30363d",
            backgroundColor: "#0d1117",
            color: "white",
            outline: "none",
          }}
        />

        {/* Search Button */}
        <button
          style={{
            padding: "10px 18px",
            backgroundColor: "#238636",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      {/* Right Side Icons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          color: "white",
          fontSize: "22px",
          marginLeft: "20px",
        }}
      >
        <span>🔔</span>
        <span>➕</span>
        <span>❓</span>
        <span>👤</span>
      </div>
    </nav>
  );
}

export default Navbar;