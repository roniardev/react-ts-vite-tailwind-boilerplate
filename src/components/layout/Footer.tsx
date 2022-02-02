export function Footer() {
  const year = new Date().getFullYear();

  return (
    <nav className="bottom-0 flex items-center justify-center w-full h-16 px-2 bg-white border-t border-gray-300">
      <div className="flex items-center justify-center w-full max-w-xl mx-auto">
        <p className="font-bold text-lg font-secondary">
          Ⓒ {year} -{' '}
          <a href="https://ron.my.id" className="hover:text-blue-500">
            Roni Ardiyanto
          </a>
        </p>
      </div>
    </nav>
  );
}
