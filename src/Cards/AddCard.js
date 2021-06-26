import React, {useState} from 'react'

function AddCard({ onCreate }){
    
    const [valueId, setValueId] = useState('')
    const [valueName, setValueName] = useState('')
    const [valueNumber, setValueNumber] = useState('')
    const [valueDate, setValueDate] = useState('')
    const [valueType, setValueType] = useState('')



    function submitHandler(event) {
        event.preventDefault()
            onCreate(valueId,valueName,valueNumber,valueDate, valueType)
            setValueId("");
            setValueName("");
            setValueNumber("");
            setValueDate("");
            setValueType("");
        }
        
        
    return(
        

        <form className="form__add" onSubmit={submitHandler}>
            <h3 className="title form__title"> Введите данные</h3>
            <div className="input__container">
            <span className="input__name">ID карточки</span>
            <input value={valueId} onChange={event => setValueId(event.target.value)}></input>
            </div>
            <div className="input__container">
            <span className="input__name">Название карточки</span>
            <input value={valueName} onChange={event => setValueName(event.target.value)}></input>
            </div>
            <div className="input__container">
            <span className="input__name">Номер заказа</span>
            <input value={valueNumber} onChange={event => setValueNumber(event.target.value)}></input>
            </div>
            <div className="input__container">
            <span className="input__name">Дата создания</span>
            <input value={valueDate} onChange={event => setValueDate(event.target.value)}></input>
            </div>
            <div className="input__container">
            <span className="input__name">Тип заказа</span>
            <input value={valueType} onChange={event => setValueType(event.target.value)}></input>
            </div>
            <button type="submit">Создать карточку</button>
        </form>
    )
}

export default AddCard