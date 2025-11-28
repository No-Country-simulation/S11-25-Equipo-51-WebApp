import { useState } from "react";

const PetForm = ({ pet, onSave, onCancel }) => {
  const [form, setForm] = useState({
    id: pet?.id || null,
    name: pet?.name || "",
    specie: pet?.specie || "",
    breed: pet?.breed || "",
    age: pet?.age || "",
    weight: pet?.weight || "",
    photo: null,
    photo_url: pet?.photo_url || "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      const file = files[0];
      setForm({
        ...form,
        photo: file,
        photo_url: file ? URL.createObjectURL(file) : form.photo_url,
      });
      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form
      className="
        flex flex-col gap-4 w-full
        max-h-[60vh] overflow-y-auto
        p-4 sm:p-6
      "
      onSubmit={handleSubmit}
    >

      {/* FOTO */}
      <div className="flex flex-col items-center gap-2">
        <label className="font-medium text-center">Foto</label>

        <label
          htmlFor="photo-upload"
          className="
            w-24 h-24 sm:w-28 sm:h-28 
            rounded-full bg-gray-200 flex items-center justify-center 
            overflow-hidden cursor-pointer border
          "
        >
          {form.photo_url ? (
            <img
              src={form.photo_url}
              alt="preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500 text-sm text-center px-2">
              Agregar foto
            </span>
          )}
        </label>

        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          name="photo"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      {/* CAMPOS */}
      {[
        { label: "Nombre", name: "name", placeholder: "Ej: Luna" },
        { label: "Especie", name: "specie", placeholder: "Ej: Perro" },
        { label: "Raza", name: "breed", placeholder: "Ej: Golden Retriever" },
        { label: "Edad", name: "age", placeholder: "Ej: 6 meses, 2 años" },
      ].map((f) => (
        <div key={f.name} className="flex flex-col">
          <label className="font-medium">{f.label}</label>
          <input
            name={f.name}
            placeholder={f.placeholder}
            className="border p-2 rounded"
            value={form[f.name]}
            onChange={handleChange}
            required={f.name === "name" || f.name === "specie"}
          />
        </div>
      ))}

      {/* PESO */}
      <div className="flex flex-col">
        <label className="font-medium">Peso (kg)</label>
        <input
          type="number"
          name="weight"
          className="border p-2 rounded"
          value={form.weight}
          onChange={handleChange}
          min="0"
          step="0.1"
        />
      </div>

      {/* BOTONES */}
      <div className="flex justify-between mt-4">
        <button
          type="submit"
          className="bg-[#00BFA5] text-white px-4 py-2 rounded"
        >
          {pet ? "Guardar cambios" : "Agregar mascota"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:underline"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default PetForm;
