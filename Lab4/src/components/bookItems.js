// Import the Card component from react-bootstrap.
import Card from 'react-bootstrap/Card';

// Import the Card component from react-bootstrap
function BookItems(props) {
    return (
        <div>
            <div>
                {/* Using a Card component to display the book details. */}
                <Card>
                    {/* Display the book's title */}
                    <Card.Header>{props.myBook.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* Displaying the book's thumbnail image. */}
                            <img src={props.myBook.thumbnailUrl} alt="Book Thumbnail"></img>
                            <footer>
                                {/* Displaying the first author of the book. */}
                                {props.myBook.authors[0]}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
// Export the BookItems component
export default BookItems;