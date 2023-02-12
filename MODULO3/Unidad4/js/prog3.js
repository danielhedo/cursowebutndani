
function calculaAprobados()
{
    const alumnos = [
        {
        nombre: 'Juan Gomez',      
        nota: 7}, 
        {      
        nombre: 'Pedro Rodriguez',
        nota: 4}, 
        {      
        nombre: 'Roxana García',      
        nota: 8}, 
        {
        nombre: 'Luciano Lopez',
        nota: 5}, 
        {
        nombre: 'Fernanda Gimenez',
        nota: 6}, 
        {
        nombre: 'Florencia Martinez',
        nota: 10},
        {      
        nombre: 'Raul Sanchez',
        nota: 7}, 
        {
        nombre: 'Sandra Figueroa',
        nota: 8 }];


    const aprobados = alumnos.filter(alumnos.nota >= 7);

    for (let index = 0; index < array.length; index++) {
        
        console.log(`El/la alumn@  ${aprobados.nombre} tiene una nota de ${aprobados.nota}`);
        
    }

}