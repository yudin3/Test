import React, {useState} from 'react'



function FilterForm({ onCreate }){
  const [valueId, setValueId] = useState('')
  const [valueNumber, setValueNumber] = useState('')
  const [valueDate, setValueDate] = useState('')
  const [valueType, setValueType] = useState('')

  function submitHandler(event) {
    event.preventDefault()
        onCreate(valueId, valueNumber,valueDate, valueType)
    }

return(
<form id="filter" className="filters__form" onSubmit={submitHandler}>
              <div className="input__container">
                <span className="input__name">ID</span>
                <input form="filter" className="input"  placeholder="Enter value" value={valueId} onChange={event => setValueId(event.target.value)}></input>
              </div>
              <div className="input__container">
                <span className="input__name">Invoice number</span>
                <input form="filter" className="input"  placeholder="Enter value" value={valueNumber} onChange={event => setValueNumber(event.target.value)} ></input>
              </div>
              <div className="input__container">
                <span className="input__name">Time of arrival for unloading</span>
                <input form="filter" className="input"  placeholder="" value={valueDate} onChange={event => setValueDate(event.target.value)}></input>
            
              </div>
              <div className="input__container">
              <span className="input__name">Order type</span>
                <select className="filters__select"  value={valueType} onChange={event => setValueType(event.target.value)}>
                  <option defaultValue>RUED</option>
                  <option>RUEX</option>
                  <option>RUSG</option>
                </select>
              </div>
              <button type="submit">Отфильтровать</button>
            </form>)
}

export default FilterForm