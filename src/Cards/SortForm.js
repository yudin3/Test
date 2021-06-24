import React, {useState} from 'react'



function SortForm({ onCreate }){
  const [value, setValue] = useState('')


  function submitHandler(event) {
    event.preventDefault()
        onCreate(value)
    }

return(
    <form className="form__sort" onSubmit={submitHandler}>
          <select className='sort__select' value={value} onChange={event => setValue(event.target.value)}>
            <option defaultValue>Sort by ID: ascending</option>
            <option>Sort by ID: descending</option>
            <option>Sort by Number: ascending</option>
            <option>Sort by Number: descending</option>
            <option>Sort by Type: ascending</option>
            <option>Sort by Type: descending</option>
          </select>
          <button  type="submit"> Sorting </button>
          </form>
)
}

export default SortForm