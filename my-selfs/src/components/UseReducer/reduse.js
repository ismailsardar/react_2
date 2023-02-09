export const reducer = (state, action) =>{
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