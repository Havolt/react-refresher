import React from 'react'

function Form() {

  const handleSubmit = (event) => { 
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo</label>
      <input type="text" name="todo" />
      <label htmlFor="category">Category</label>
      <input type="text" name="category" id="" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form