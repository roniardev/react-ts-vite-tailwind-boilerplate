import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed flex w-full h-16 border-b border-b-1 bg-white border-gray-300">
      <div className="flex items-start justify-between w-full h-full px-6 md:px-32 py-3 sm:max-w-screen-2xl">
        <div className="px-2 py-1 shadow-md">
          <Link to="/">
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              Postfy
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
