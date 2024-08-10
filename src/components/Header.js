import logoSVG from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <img src={logoSVG} alt={"logo"} />
      <h1>TODO</h1>
    </header>
  );
}

export default Header;
