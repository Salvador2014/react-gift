import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ])

  const onAddCategory = ( newCategory ) => {

    // 1. forma de hacerlo
    // // // // Creamos una nueva copia del array categories y agregamos 'kakaroto' a esa copia
    //  const newCategories = [...categories, 'Kakaroto'];
    // // // // Actualizamos el estado con la nueva copia que incluye 'kakaroto'
    //  setCategories(newCategories);

    // 2. forma de hacerlo
    // setCategories([...categories, 'Kakaroto']);
    // o asi para ponerlo primero
    // setCategories(['Kakaroto', ...categories]);

    // 3. forma de hacerlo
    if (categories.includes(newCategory)) return;
    setCategories( categor => [ newCategory, ...categor ]);
      

  }

  return (  
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}

      <AddCategory 
        // ondAddCategories={ setCategories }
        onNewCategory = { value => onAddCategory(value) } //podemos hacer asi para las funciones
        // onNewCategory = { onAddCategory } // o asi
      />
      {/* Listado de Gif */}

      

      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* <ol>
        { 
          categories.map( (category) => (
              <div key={category}>
                <h3>{category}</h3>
                <li>{category}</li>
              </div>
            ))
        }
      </ol> */}
        {
          categories.map( (category) => (
            <GifGrid key={ category } category={ category } />
          ))
        }
      {/* Gif Items */}
    </>
  ) 
}
