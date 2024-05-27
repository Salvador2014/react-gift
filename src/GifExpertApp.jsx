import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
//esto es lo mismo que lo de abajo con el archivo index.ja en components
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ])

  const onAddCategory = ( newCategory ) => {
    if (categories.includes(newCategory)) return;
    setCategories( categor => [ newCategory, ...categor ]);
  }

  return (  
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory = { value => onAddCategory(value) }
      />

      {
        categories.map( (category) => (
          <GifGrid key={ category } category={ category } />
        ))
      }
    </>
  ) 
}
