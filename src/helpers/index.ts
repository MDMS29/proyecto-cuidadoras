export const formatearFecha = (fecha: string) => {
    let fechaNueva = new Date(fecha)
    const opciones: Object = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones).replaceAll('/', '-').split('-')
}