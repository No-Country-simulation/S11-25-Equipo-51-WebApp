import { useState } from "react";

const PetForm = ({ pet, onSave, onCancel }) => {
  const [form, setForm] = useState({
    id: pet?.id || null,
    nombre: pet?.nombre || "",
    tipo: pet?.tipo || "",
    raza: pet?.raza || "",
    edad: pet?.edad || "",
    peso: pet?.peso || "",
    photo: pet?.photo || "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        name="nombre"
        placeholder="Nombre"
        className="border p-2 rounded"
        value={form.nombre}
        onChange={handleChange}
      />
      <input
        name="tipo"
        placeholder="Tipo"
        className="border p-2 rounded"
        value={form.tipo}
        onChange={handleChange}
      />
      <input
        name="raza"
        placeholder="Raza"
        className="border p-2 rounded"
        value={form.raza}
        onChange={handleChange}
      />
      <input
        type="number"
        name="edad"
        placeholder="Edad"
        className="border p-2 rounded"
        value={form.edad}
        onChange={handleChange}
      />
      <input
        type="number"
        name="peso"
        placeholder="Peso"
        className="border p-2 rounded"
        value={form.peso}
        onChange={handleChange}
      />
      <input
        name="photo"
        placeholder="URL Foto"
        className="border p-2 rounded"
        value={form.photo}
        onChange={handleChange}
      />

      <div className="flex justify-between mt-4">
        <button className="bg-[#00BFA5] text-white px-4 py-2 rounded">
          {pet ? "Guardar Cambios" : "Agregar Mascota"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default PetForm;
