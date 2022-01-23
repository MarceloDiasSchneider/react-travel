export default function Navbar({ image }) {
  return (
    <nav className="flex-container flex-center padding-10">
      <img
        className="margin-x-10 text-white"
        src={`./img/${image}`}
        alt="Travel logo"
      />
      <h1 className="margin-x text-white">my travel journal</h1>
    </nav>
  );
}
