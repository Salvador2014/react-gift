import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('')
  
  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  }
  
  const onSubmit = ( event ) => {
    event.preventDefault();
    // console.log(inputValue);
    // console.log(inputValue.trim().length);
    if (inputValue.trim().length <= 1) return;

    // ondAddCategories( categor => [inputValue, ...categor])
    onNewCategory( inputValue.trim() )
    setInputValue('')
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input
        type="text"
        placeholder='Buscar Gifs'
        value = {inputValue}
        onChange={ (event) => onInputChange(event) }
      />
    </form>
  )
}
