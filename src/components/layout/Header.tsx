import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="border-b-1 fixed flex h-16 w-full border-b border-gray-300 bg-white">
      <div className="flex h-full w-full items-start justify-between px-6 py-3 sm:max-w-screen-2xl md:px-32">
        <div className="px-2 py-1 shadow-md">
          <Link to="/">
            <h1 className="bg-gradient-to-br from-pink-400 to-red-600 bg-clip-text text-2xl font-extrabold text-transparent">
              Postfy
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
