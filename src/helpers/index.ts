export const formatearFecha = (fecha : Date) =>{
    let fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones).replaceAll('/', '-').split('-')
}
