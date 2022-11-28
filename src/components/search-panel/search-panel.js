import { useState } from "react"
import "./search-panel.css"

const SearchPanel = ({onUpdateSearch}) => {

    const [input, setInput] = useState('')
    const handleChange = (e) => {
        const term = e.target.value
        console.log(term.length)
        setInput(term)
        onUpdateSearch(term)

        console.log(input)
    }

    return (
        <input className="form-control search-input" type="text" placeholder="Поиск по записям"
        onChange={handleChange} value={input}>
        
        </input>
    )
}

export {SearchPanel}