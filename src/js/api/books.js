import { instance } from "./instance";

// функція яка повертає усі категорії
export function getCategoryList(){
  return instance.get('/books/category-list');
};


// функція яка повертає бестселлери
export function getTopBooks(){
  return instance.get('/books/top-books')
};


// функція яка повертає обрану категорію
export function getSelectedCategory(category){
  return instance.get('/books/category', {
    params: {
      category 
    }
  })
};


// функція яка повертає книгу за ID
export function getById(bookId){
  return instance.get(`/books/${bookId}`)
};


