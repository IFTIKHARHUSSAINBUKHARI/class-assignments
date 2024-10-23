const Header = () => {
  return (
    <header className="bg-gray-300 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl px-6">My Page</h1>
        <ul className="flex space-x-4 px-6">
          <li>
            <a href="#about">
              About Us
            </a>
          </li>
          <li>
            <a href="#portfolio">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
