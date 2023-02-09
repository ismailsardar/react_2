import React, { useReducer, useState } from 'react'

const myBooks = [
    {id: 1, name:"English"},
    {id: 2, name:"Pysich"},
    {id: 3, name:"Math"}
]

const Model = ({modelText})=>{
    return <p>
        {modelText}
    </p>
}

const reducer = (state, action) =>{
    if (action.type === "ADD") {
        return {
            books: [...state.books, action.payload],
            isModel: true,
            modelText: "Book is Add",
        }
    } else if(action.type === "REMOVE") {
        const filterBook = [...state.books].filter((item)=> item.id !== action.payload);
        return {
            ...state,
            books: filterBook,
            isModel: true,
            modelText: "Remove Book",
        };        
    }
    
    return state;
}

const Reduser = () => {
    const [booksState, dispatch] = useReducer(reducer, {
        books: myBooks,
        isModel: false,
        modelText: ""
    });
    
    const [bookName, setBookName] = useState('');

    const handelSubmet = (e) => {
        e.preventDefault();
        const newBook = {id: new Date().getTime().toString(), name: bookName};
        dispatch({
            type: "ADD",
            payload: newBook,
        })
        setBookName("");
    }

    const removeBook = (id) => {
        dispatch({
            type: "REMOVE",
            payload: id,
        })
    }

  return (
    <div>
        <h2>Books Add</h2>
        <form onSubmit={handelSubmet}>
        <input type="text" value={bookName} onChange={(e)=>setBookName(e.target.value)} />
        <button type="submit">Add Book</button>
        </form>
        {booksState.isModel && <Model modelText={booksState.modelText} />}
        {
            booksState.books.map((book)=><li key={book.id}>
                {book.name}
                <button onClick={(e)=>{removeBook(book.id)}}>Remove</button>
            </li>)
        }
    </div>
  )
}

export default Reduser