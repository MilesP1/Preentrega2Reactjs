//import Producto from "./pages/producto"

const lista_productos = [
    {
    "id": 1,
    "title": "Barista Profesional",
    "price": "u$s200",
    "description": "Curso Disctado por Alexis Sabogal (Barista Trainer). Dia- 23/5 14:00hs-18:00hs",
    "category": "cursos",
    "image": "https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2022/06/image6-1.jpg",
    "stock": 10,
    "rating": {
    "rate": 3.9,
    
    "lala": 5
    }
    },
    {
    "id": 2,
    "title": "Flavor Maps",
    "price": "u$s150",
    "description": "Capacitacion a cargo de Daniel Borras (Q-Grader). Dia- 31/5 10:00hs-12:00hs",
    "category": "cursos",
    "image": "https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2022/06/image5-1.jpg",
    "stock": 4,
    "rating": {
    "rate": 4.1
    
    }
    },
    {
    "id": 3,
    "title": "Curso Brewing Intermedio",
    "price": "u$s350",
    "description": "Curso de Brewing dictado por Dario Argüello (Barista SCA). Dia- 14/6 12:00hs-16:00hs",
    "category": "cursos",
    "image": "https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2023/09/Competidor-en-WBC.jpg",
    "stock": 8,
    "rating": {
    "rate": 4.7
    
    }
    },
    {
    "id": 4,
    "title": "Cafe en Casa",
    "price": "u$s40",
    "description": "Capacitacion guiada por Alvaro Torres (Head-Barista Nerea). Dia- 20/8 10:00hs-13:00hs",
    "category": "cursos",
    "image": "https://lh6.googleusercontent.com/hziS4pJpW-HOVH6hIDbL0GLe0-Ww379OpT82JhuyXWIs6BhFgkc_ohWAGvi_CCuedi1nABdvH45LG7M9Uj1wVMKvz719JozA__sytzn2zSlBGYzjh5RMtjM4MjIZmRnJTzspsl1f",
    "stock": 6,
    "rating": {
    "rate": 2.1
    
    }
    },
    ]

   // export default lista_productos;

   export const getProductos = ()=>{

    return new Promise((resolve)=>{

        setTimeout ( ()=> {

            //let cantidad  = Math.floor(Math.random() * lista_productos.length);
            //console.log("Cantidad de productos devueltos en el asyncMock:", cantidad);
            resolve(lista_productos);

                },500)
        }  )
   }

   export const getProductById = (idProduct)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.find( prod => prod.id == idProduct))
        }, 500);
        
    })

   }

   export const getProductsByCategory = (category)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.filter( prod => prod.category == category ))
        }, 500);
    })

   }