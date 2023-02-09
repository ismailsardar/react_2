import React, { useState } from 'react'

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

const State = () => {
    const [books, setBooks] = useState(myBooks);
    const [isModel, setIsModel] = useState(false);
    const [modelText, setModelText] = useState("");
    const [bookName, setBookName] = useState('');

    const handelSubmet = (e) => {
        e.preventDefault();
        const newBook = {id: new Date().getTime().toString(), name: bookName};
        setBooks((previs)=>{
            return [...previs,newBook]
        });
        setBookName("");
        setIsModel(true);
        setModelText("Book is Added");
    }


  return (
    <div>
        <h2>Books Add</h2>
        <form onSubmit={handelSubmet}>
        <input type="text" value={bookName} onChange={(e)=>setBookName(e.target.value)} />
        <button type="submit">Add Book</button>
        </form>

        {isModel && <Model modelText={modelText} />}


        {
            books.map((book)=><li key={book.id}>
                {book.name}
            </li>)
        }
    </div>
  )
}

export default State