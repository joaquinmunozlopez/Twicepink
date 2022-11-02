import { useState, useEffect } from 'react'


export default function ItemCount({ stock, initial, funcion }) {
    const [value, setValue] = useState(initial);

    function onAdd() {
        (stock) > value ? setValue(value + 1) : setValue(value + 0);
    }

    function onSubstract() {
        value !== 0 ? setValue(value - 1) : setValue(value + 0);
    }

    useEffect(() => {
        funcion(value);
      
    }, [value])
    
    
    return (
        <div>
            <h1>Stock: {stock}</h1>
            <div className='flex justify-center my-4'>
                <button onClick={onSubstract}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button>
                <h1>{value}</h1>
                <button onClick={onAdd}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button>
            </div>

        </div>
    );

}