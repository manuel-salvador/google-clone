import googleLogo from '../assets/logo-google.png';
import { CameraIcon, MicIcon, SearchIcon } from './Icon';

export default function Main() {
  return (
    <main className="flex-1 flex flex-col items-center p-4 gap-6">
      <img src={googleLogo} alt="Logo" />
      <div className="flex items-center px-4 py-3 border border-google-border rounded-full min-h-[44px] w-full max-w-[584px] gap-4">
        <SearchIcon size={20} />
        <textarea rows={1} className="resize-none outline-none bg-transparent flex-1" />
        <MicIcon size={24} />
        <CameraIcon size={24} />
      </div>
      <div className="flex gap-3">
        <div className="bg-google-button w-36 py-2 rounded-sm text-center text-sm">
          Buscar con Google
        </div>
        <div className="bg-google-button w-36 py-2 rounded-sm text-center text-sm">
          Voy a tener suerte
        </div>
      </div>
      <div className="text-sm">
        <span className="mr-2 text-google-aux-text">Ofrecido por google en:</span>
        <a href="#" className="text-google-link hover:underline">
          Español (latinoamérica)
        </a>
      </div>
    </main>
  );
}
