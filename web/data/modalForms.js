export const modalForms = {
  vaccines: {
    title: 'Nueva Vacuna',
    fields: [
      { name: 'name', label: 'Nombre de la vacuna', type: 'text', required: true },
      { name: 'pet', label: 'Mascota', type: 'text', required: true },
      { name: 'applied', label: 'Fecha de aplicación', type: 'text', placeholder: 'ej: 15 de octubre, 2025', required: true },
      { name: 'next', label: 'Próxima aplicación', type: 'text', placeholder: 'ej: 15 de octubre, 2026', required: true },
      { name: 'vet', label: 'Veterinario', type: 'text', required: true }
    ]
  },
  checkups: {
    title: 'Nuevo Chequeo',
    fields: [
      { name: 'type', label: 'Tipo de chequeo', type: 'text', required: true },
      { name: 'pet', label: 'Mascota', type: 'text', required: true },
      { name: 'date', label: 'Fecha realizado', type: 'text', placeholder: 'ej: 20 de octubre, 2025', required: true },
      { name: 'next', label: 'Próximo chequeo', type: 'text', placeholder: 'ej: 20 de abril, 2026', required: true },
      { name: 'vet', label: 'Veterinario', type: 'text', required: true },
      { name: 'notes', label: 'Notas', type: 'textarea', required: false }
    ]
  },
  treatments: {
    title: 'Nuevo Tratamiento',
    fields: [
      { name: 'name', label: 'Nombre del tratamiento', type: 'text', required: true },
      { name: 'pet', label: 'Mascota', type: 'text', required: true },
      { name: 'startDate', label: 'Fecha inicio', type: 'text', placeholder: 'ej: 1 de noviembre, 2025', required: true },
      { name: 'endDate', label: 'Fecha fin', type: 'text', placeholder: 'ej: 5 de noviembre, 2025', required: true },
      { name: 'vet', label: 'Veterinario', type: 'text', required: true },
      { name: 'status', label: 'Estado', type: 'select', options: ['En curso', 'Completado'], required: true }
    ]
  }
};
