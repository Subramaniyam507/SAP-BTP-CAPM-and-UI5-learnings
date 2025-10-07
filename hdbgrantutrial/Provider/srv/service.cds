
using {my.bookshop as my} from '../db/datamodel';
service Provider{
    entity BooksSet as projection on my.Books;
}