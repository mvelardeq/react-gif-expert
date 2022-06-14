import React,{useState} from 'react'
import {AddCategory,GifGrid} from './components'

export const GifExpertApp = () => {

    const [categorties, setCategorties] = useState(['One punch'])

    const onAddCategory = (newCategory)=>{
        if(categorties.includes(newCategory)) return
        return setCategorties([newCategory,...categorties])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={onAddCategory} 
        />

        {
            categorties.map((category) =>(
                <GifGrid 
                    key={category} 
                    category={category}
                />
            ))
        }

    </>
  )
}
