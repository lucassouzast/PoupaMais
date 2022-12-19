import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react';
import { categories } from '../../data/categories';

type Props = {
    onAdd: (item: Item) => void;
}

let objectTitles: string[] = Object.keys(categories)

export const InputArea =({onAdd}: Props) => {

    const [dateField, setDateField] = useState('')
    const [categoryField, setCategoryField] = useState('')
    const [titleField, setTitleField] = useState('')
    const [valueField, setValueField] = useState('')

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(dateField),
            category:  categoryField,
            title: titleField,
            value: parseFloat(valueField),
        };
        onAdd(newItem);
    }

    const inputValidation = () => {
        if (dateField == ''){
            alert('O Campo DATA precisa ser preenchido!')
        }
        if (categoryField == ''){
            alert('Você precisa especificar uma categoria!')
        }
        if (titleField == ''){
            alert('Você precisa especificar um titulo!')
        }
        if (valueField == ''){
            alert('Você precisa especificar um valor!')
        }
        else {
            handleAddEvent();
        }
    }

    return(

        <C.Container>
                <label htmlFor="inputDate">
                    Data: <br />
                    <input type="date" value={dateField} onChange={e => setDateField(e.target.value)}/>
                </label>
                
                <label htmlFor="select">
                    Categoria: <br />
                    <select name="" id="select" required value={categoryField} onChange={e => setCategoryField(e.target.value)}> 
                        <option disabled selected></option>
                        {objectTitles.map((key, index) => (
                            <option value={key} key={index}>{categories[key].title}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="inputTitle">
                    Titulo: <br />
                    <input type="text" id='title' value={titleField} onChange={e => setTitleField(e.target.value)}/>
                </label>           
                <label htmlFor="inputValue">
                    Valor: <br />
                    <input type="number" id='value' value={valueField} onChange={e => (setValueField((e.target.value)))} />
                </label>
                <label htmlFor=""> <br />
                    <button className='submit submit2' type="submit" onClick={inputValidation}> Adicionar </button>
                </label>        
        </C.Container>
    );
}

