
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfólio Gabriel Barros</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/projects" className="hover:text-gray-400">Projetos</Link>
          <Link to="/contact" className="hover:text-gray-400">Contato</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
