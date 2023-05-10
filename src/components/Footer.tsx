export default function Footer() {
  return (
    <footer className="bg-google-footer text-google-footer-text">
      <p className="py-3 px-7 tracking-tight border-b-2 border-google-button">Argentina</p>
      <div className="py-3 px-8 text-sm tracking-tight flex flex-col md:flex-row md:justify-between gap-7 ">
        <div className="flex gap-7 flex-wrap justify-center">
          <p className="">Sobre Google</p>
          <p className="">Publicidad</p>
          <p className="">Negocios</p>
          <p className="">Cómo funciona la Búsqueda</p>
        </div>
        <div className="flex gap-7 justify-center">
          <p className="">Privacidad</p>
          <p className="">Condiciones</p>
          <p className="">Preferencias</p>
        </div>
      </div>
    </footer>
  );
}
