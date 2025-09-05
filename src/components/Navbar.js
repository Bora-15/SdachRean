import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  padding: "0.5rem 0.75rem",
  marginRight: "0.5rem",
  textDecoration: "none",
  borderRadius: "8px",
  background: isActive ? "#1e40af" : "#e5e7eb",
  color: isActive ? "#fff" : "#111827",
  fontWeight: 500,
});

export default function NavBar() {
  return (
    <nav style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #e5e7eb" }}>
      <NavLink to="/" style={linkStyle} end>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About Us</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact Us</NavLink>
      <NavLink to="/login" style={linkStyle}>login</NavLink>

    </nav>
  );
}
