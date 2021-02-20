


import React, {useReducer,useState} from "react"
import"./App.css"

function reducer(state,action) {
    switch(action.type){
        case "add-todo":
        return {todos : [...state.todos,{text : action.text, completed : false}]}
    }
}

const Gia = () => {

    const [{todos},dispatch] = useReducer(reducer,{todos : []})
    const [text,setText] = useState()
    return(
        <>
        <form onSubmit = {(e) => {
            e.preventDefault()
            dispatch({type : "add-todo", text})
            setText("");
        }
        
        }>

        <input value = {text} onChange = {(e) => setText(e.target.value)}/>



        </form>
        {todos.map(t => <div key = {t.text}>{t.text}</div>)}
        </>
    )



}


export default Gia




