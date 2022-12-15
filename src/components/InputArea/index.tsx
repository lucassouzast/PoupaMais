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
    const [valueField, setValueField] = useState(0)

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(dateField),
            category:  categoryField,
            title: titleField,
            value: valueField,
        };
        onAdd(newItem);
    }

    return(

        <C.Container>
                Data:
                <input type="date" value={dateField} onChange={e => setDateField(e.target.value)}/>
                
                Categoria:
                <select name="" id="select" required value={categoryField} onChange={e => setCategoryField(e.target.value)}> 
                    <option disabled selected></option>
                    {objectTitles.map((key, index) => (
                        <option value={key} key={index}>{categories[key].title}</option>
                    ))}
                </select>

                Titulo:
                <input type="text" id='title' value={titleField} onChange={e => setTitleField(e.target.value)}/>
                
                Valor:
                <input type="number" value={valueField} onChange={e => (setValueField(parseFloat(e.target.value)))} />

                <button type="submit" onClick={handleAddEvent}> Adicionar </button>
        </C.Container>
    );
}

