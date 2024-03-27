import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const saveDataReadToLocalStorage = (book) => {
    const saveReadData = JSON.parse(localStorage.getItem("read")) || [];

    const isReadDataFound = saveReadData.find((item) => item.bookId === book.bookId);

    if (isReadDataFound) {
        toast.error("Book Already Applied!");
    } else {
        toast.success("Book Successfully Added!");
        saveReadData.push(book);
        localStorage.setItem("read", JSON.stringify(saveReadData));
    }

    return isReadDataFound;
}

const saveDataWishToLocalStorage = (book) => {
    const saveWishData = JSON.parse(localStorage.getItem("wish")) || [];
    const saveReadData = JSON.parse(localStorage.getItem("read")) || [];

    const isWishDataFound = saveWishData.find((item) => item.bookId === book.bookId);
    const isReadDataFound = saveReadData.find((item) => item.bookId === book.bookId);

    if (isWishDataFound) {
        toast.error("Book Already Applied!");
    } else if (isReadDataFound) {
        toast.error("You Already Added Read List Can't Added Wish List");
    } else {
        toast.success("Book Successfully Added!");
        saveWishData.push(book);
        localStorage.setItem("wish", JSON.stringify(saveWishData));
    }
}

export { saveDataReadToLocalStorage, saveDataWishToLocalStorage };
