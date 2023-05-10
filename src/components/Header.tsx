import { MenuIcon } from './Icon';

export default function Header() {
  return (
    <header className="flex justify-end items-center gap-4 px-5 py-2 text-sm tracking-tight">
      <p className="hover:underline cursor-pointer">Gmail</p>
      <p className="hover:underline cursor-pointer">Imágenes</p>
      <span className="cursor-pointer rounded-full w-10 h-10 flex justify-center items-center hover:bg-google-button">
        <MenuIcon size={24} />
      </span>
      <span className="cursor-pointer rounded-full w-10 h-10 flex justify-center items-center hover:bg-google-button p-1">
        <span className="bg-google-avatar rounded-full w-full h-full flex justify-center items-center text-lg">
          M
        </span>
      </span>
    </header>
  );
}
