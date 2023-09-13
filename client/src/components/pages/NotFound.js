import '../../css/NotFound.css'

function NotFound() {

    const goBack = () => {
        window.history.back();
    };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
      <h1 className="not-found-heading">404 - Page Not Found</h1>
      <p className="not-found-text">
        Sorry, the page you are looking for does not exist.
      </p>
      <button className="go-back-button" onClick={goBack}>Go back to the previous page</button>
    </div>
    </div>
  );
}

export default NotFound;