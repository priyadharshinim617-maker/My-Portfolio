function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-purple-600 cursor-pointer">
          Priyadharshini
        </h1>

        {/* Navigation */}
        <ul className="flex gap-8 text-gray-700 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-purple-600 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-purple-600 transition duration-300"
            >
              Tech Skills
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-purple-600 transition duration-300"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-purple-600 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-purple-600 transition duration-300"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-purple-600 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;