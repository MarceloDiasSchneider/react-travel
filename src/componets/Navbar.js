export default function Navbar({ image }) {
  return (
    <nav className="flex-container padding-10">
      <img
        className="margin-x flex-items"
        src={`./img/${image}`}
        alt="Travel logo"
      />
      <h1 className="margin-x flex-items">My travel journal</h1>
    </nav>
  );
}
