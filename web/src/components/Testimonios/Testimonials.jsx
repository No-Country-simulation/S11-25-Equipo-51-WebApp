import TestimonialItem from "./TestimonialItem";

const testimonials = [
  {
    text: "Desde que uso Pet Health Tracker, nunca más olvidé una vacuna. La app es intuitiva y me ahorra mucho tiempo. Increíble.",
    name: "María González",
    role: "Dueña de 2 perros",
    initial: "M",
  },
  {
    text: "Me encanta que puedo llevar control de las desparasitaciones y citas sin enredarme. Es súper útil.",
    name: "Carlos Rivas",
    role: "Papá de un gato",
    initial: "C",
  },
  {
    text: "La app me ha ayudado muchísimo a organizar toda la info médica de mis peludos. Totalmente recomendada.",
    name: "Laura Méndez",
    role: "Dueña de 3 mascotas",
    initial: "L",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Lo que Dicen Nuestros Usuarios
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-3">
            Testimonios reales de dueños felices de mascotas
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialItem key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
