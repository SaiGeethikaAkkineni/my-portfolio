export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-2xl text-blue-600">Geethika A</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
