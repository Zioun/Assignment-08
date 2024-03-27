// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const saveDataReadToLocalStorage = (book) => {
//     const saveData = JSON.parse(localStorage.getItem("read")) || [];

//     const isDataFound = saveData.find((item) => item.bookId == book.bookId);
//     console.log(saveData)
//     if(isDataFound){
//         toast.error("Book Already Applied!");
        
//     }else{
//         toast.success("Book Successfully Added!");
//         saveData.push(book);
//         localStorage.setItem("read", JSON.stringify(saveData));
//     }
// }
// const saveDataWishToLocalStorage = (book) => {
//     const saveData = JSON.parse(localStorage.getItem("wish")) || [];

//     const isDataFound = saveData.find((item) => item.bookId == book.bookId);
//     console.log(saveData)
//     if(isDataFound){
//         toast.error("Book Already Applied!");
        
//     }else{
//         toast.success("Book Successfully Added!");
//         saveData.push(book);
//         localStorage.setItem("wish", JSON.stringify(saveData));
//     }
// }

// export{saveDataReadToLocalStorage, saveDataWishToLocalStorage}

