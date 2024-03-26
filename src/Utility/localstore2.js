const getWishBook = () => {
    const storedBookWishApplication = localStorage.getItem('read');
    if(storedBookWishApplication){
        return JSON.parse(storedBookWishApplication);
    }
    return [];
}

const saveWishBook = (id) => {
    const storedBookWishApplications = getWishBook();
    const exists = storedBookWishApplications.find(bookId => bookId === id);
    if(!exists){
        storedBookWishApplications.push(id);
        localStorage.setItem('wish', JSON.stringify(storedBookWishApplications));
    }
}
export {getWishBook, saveWishBook}