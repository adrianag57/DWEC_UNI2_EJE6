// Mostrar todos los elementos del array separados por un salto de línea usando for..of(consola) 
function mostrarArray(paises){
    for (pais of paises)
        console.log(pais+"\n");
    }
    // Mostrar los elementos del array en sentido inverso separados por un salto de línea usando foreach
    function mostrarInverso(paises){
        paises.reverse().forEach(function(valor){
                                     console.log(valor+"\n")})
    }
    // Mostrar los elementos del array alfabéticamente separados por un salto de línea usando una sola sentencia
    function mostrarOrdenado(paises){
        console.log(paises.sort().join("\n"));
    }
    
    // Añadir un elemento al comienzo del array
    function anadirPaisPrincipio(pais, paises){
        paises.unshift(pais);
        console.log(paises.toString());
    }
    // Añadir un elemento al final del array
    function anadirPaisFinal(pais, paises){
    paises.push(pais);
    console.log(paises.toString());
    }
    
    // Borrar un elemento al comienzo del array (indicar cuál es)
    function borrarComienzo(paises){
        console.log(paises.shift());
    }
    
    //Borrar un elemento al final del array (indicar cuál es)
    function borrarFinal(paises){
        console.log(paises.pop());
    }
    
    function principal(){
        var misPaises=["Japón", "Italia", "Australia", "Sudáfrica", "India", "Argentina"]
        console.log("**********   mostrarArray   ***********");
        mostrarArray(misPaises);
        console.log("**********   mostrarInverso   ***********");
        mostrarInverso(misPaises);
        console.log("**********   mostrarOrdenado   ***********");
        mostrarOrdenado(misPaises);
        console.log("**********   anadirPaisPrincipio   ***********");
        anadirPaisPrincipio("Canadá", misPaises);
        console.log("**********   anadirPaisFinal   ***********");
        anadirPaisFinal("Grecia", misPaises);
        console.log("**********   borrarComienzo   ***********");
        borrarComienzo(misPaises);
        console.log("**********   borrarFinal   ***********");
        borrarFinal(misPaises);
        }
    
    principal();