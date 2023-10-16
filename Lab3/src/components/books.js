// Import the BookItems component from the relative path.
import BookItems from "./bookItems";

// Define the Books functional component
function Books(props) {
    // For each book in the myBooks prop, render a BookItems component 
    return props.myBooks.map(
        (book) => {
            return <BookItems myBook={book} />;
        }
    );
}

// Export the Books component
export default Books;

