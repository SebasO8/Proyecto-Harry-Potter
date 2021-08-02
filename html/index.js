const navToggle=document.querySelector(".nav_toggle")
const navMenu=document.querySelector(".nav_Menu")

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav_menu_visible")
    if(navMenu.classList.contains("nav_menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú")
    }else{
        navToggle.setAttribute("aria-label", "Abrir menú")
    }
})

const big= document.querySelector('.big')
const point= document.querySelectorAll('.point')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
point.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    point[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let position  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operation = position * -33.3

        // MOVEMOS el grand
        big.style.transform = `translateX(${ operation }%)`

        // Recorremos TODOS los punto
        point.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            point[i].classList.remove('active')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        point[i].classList.add('active')

    })
})
