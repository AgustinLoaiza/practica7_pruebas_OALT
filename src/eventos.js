function construirEventoTareaCreada(tarea) {
return {
id: tarea.id,
titulo: tarea.titulo,
fecha: new Date().toISOString(),
};
}

module.exports = { construirEventoTareaCreada };