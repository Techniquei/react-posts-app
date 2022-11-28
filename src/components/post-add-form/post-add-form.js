import { useState } from "react"
import "./post-add-form.css"

const PostAddForm = ({onAdd}) => {
    const [input, setInput] = useState('')
    const handleChange = (e) =>  {
        e.preventDefault()

        console.log('clicked')
        if(input){
            
            onAdd(input)
            setInput('')
        }


    } 
    return (
        <div className="bottom-panel d-flex">
            <input type="text" placeholder="О чем вы думаете?" className="form-control new-post-label" value={input} onChange={(e)=> setInput(e.target.value)}>
            
            </input>
            <button type="submit" className="btn btn-outline-secondary" onClick={handleChange}>Добавить</button>
        </div>
    )
}

export {PostAddForm}