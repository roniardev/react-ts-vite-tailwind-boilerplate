export function Footer() {
  const year = new Date().getFullYear();

  return (
    <nav className="bottom-0 flex h-16 w-full items-center justify-center border-t border-gray-300 bg-white px-2">
      <div className="mx-auto flex w-full max-w-xl items-center justify-center">
        <p className="font-secondary text-lg font-bold">
          Ⓒ {year} -{' '}
          <a href="https://ron.my.id" className="hover:text-blue-500">
            Roni Ardiyanto
          </a>
        </p>
      </div>
    </nav>
  );
}
