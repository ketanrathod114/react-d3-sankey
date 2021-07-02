import Switch from "./Switch";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark  p-3">
      <div className="container">
        <img
          src="/logo-main.svg"
          alt=""
          height="30"
          className="d-inline-block align-text-top"
        />
        <Switch />
      </div>
    </nav>
  );
}

export default Header;
