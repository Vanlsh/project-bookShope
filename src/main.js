import { getCategoryList } from "./js/api/books";
import { renderCategory } from "./js/renders/renderCategoryBooks";


console.log(getCategoryList());

renderCategory('Business Books')
