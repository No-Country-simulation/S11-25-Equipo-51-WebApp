import CallToActionButton from "./CallToActionButton";

function CallToAction() {
  const handleClick = () => {
    console.log('Comenzar Gratis clicked');
    // Aquí puedes agregar la lógica de navegación o acción
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600')] opacity-10 bg-cover bg-center" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="opacity-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 px-4">
            ¿Listo para Darle a tu Mascota el Mejor Cuidado?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-cyan-100 mb-6 sm:mb-8 px-4">
            Comienza a gestionar la salud de tu mascota hoy. Sin tarjeta de crédito requerida.
          </p>
          
          <CallToActionButton onClick={handleClick}>
            Comenzar Gratis
          </CallToActionButton>
        </div>
      </div>
    </section>
  );
}

export default CallToAction