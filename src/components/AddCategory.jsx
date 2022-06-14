import React,{useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }
    const onSubmitForm = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length<1) return
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

  return (
      <form onSubmit={onSubmitForm}>
          <input 
              type="text" 
              placeholder='gif'
              value={inputValue}
              onChange={onInputChange}
          />
      </form>
  )
}
