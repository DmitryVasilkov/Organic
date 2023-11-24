import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { categoryFilter, discountedAction, filterAction, markFilter, resetFilter } from '../../store/slice/productsSlice';

export default function FilterContainer() {


   
// console.log(state);
    const dispatch = useDispatch();

    const [value, setValue] = useState({ min:0, max:Infinity })
    const [isChecked, setIsChecked] = useState(false)
    const [mark, setMark] = useState(-1)
    const [category, setCategory] = useState('-1')

    useEffect(() => {
    dispatch(discountedAction(isChecked))
    }, [isChecked, dispatch ])

    useEffect(() => {
        dispatch(filterAction(value))
    },[value, dispatch])

    useEffect(() => {
        dispatch(markFilter(mark))
    },[mark, dispatch])
    
    useEffect(() => {
        dispatch(categoryFilter(category))
    },[category, dispatch])
    
 

    // const handleSelectChange = (event) => {
    //     dispatch(markFilter(+event.target.value))
    //   const selectedValue = event.target.value;
    //   console.log(selectedValue); // Вывод выбранного значения в консоль
    // }

      const categories = useSelector(state => state.products.list.map(({type}) => type))
      .filter((type, index, arr) => arr.indexOf(type) === index)

      const products = useSelector(({products}) => products.list)
      const filteredProducts = products.filter(({show}) => Object.values(show).every(item => item))
 
      const clearInputs = () => {
        setValue({
            min:0,
            max:Infinity
        })
        setIsChecked(false)
        setMark(-1)
        setCategory('-1')
      }

      useEffect(() => {
        return () => dispatch(resetFilter());
    }, [dispatch])


  return (
    <div className={s.container}>
        <div className={s.block_input}>
        <input  
        type="number"  placeholder='min' 
        value={value.min || ''} min={0} 
        onChange={({target}) => setValue({...value,min: +target.value })}/>
        <input type="number" placeholder='max' 
        value={value.max === Infinity ? '' : value.max} 
        onChange={({target}) => setValue({...value,max: +target.value || Infinity})} />
        <label>
            <p>Со скидкой</p>
            <input 
            checked={isChecked}
            type="checkbox" 
            onChange={({target}) => setIsChecked(target.checked)} />
        </label>
        <label>
            <p>Рейтинг</p>
        <select name='mark' value={mark} onChange={(event) => setMark(+event.target.value)}>
            {/* <option value="-1">Сбросить</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option> */}

            <option value="-1" >Default</option>
                {
                  [...Array(5)].map((_, index) => <option key={index} value={index+1}>{index+1}</option>)
                }
        </select>
        </label>
        <label>
            <p>Категории</p>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value={-1}>Default</option>
                {
                  categories.map(type => <option key={type} value={type}>{type}</option>)
                }
        </select>
        </label>
        <button onClick={() => {
            clearInputs();
            // dispatch(resetFilter())
            }}>Reset all filter</button>
        </div>
        <p>
        {
          filteredProducts.length !== products.length
          && <p>number of filtered products {filteredProducts.length} out of all products {products.length}</p>
        }

        </p>
    </div>
  )
}


// onClick={({target}) => console.log(target.checked)} /> вывод в консоль true or false




//Две записи, одинаковое значение 
//-----------------------------------------------------------------------
// <select onChange={(e) => console.log(e.target.value)}></select> 


// const handleSelectChange = (event) => {
//     const selectedValue = event.target.value;
//     console.log(selectedValue); // Вывод выбранного значения в консоль
// }
//-------------------------------------------------------------------------