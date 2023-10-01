import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../css/Slider.css'; // Import the Slider CSS


const Slider = () => {
    return(
        <Carousel
            autoPlay = {true} // Auto move every 5 seconds
            showStatus = {false} // Hide status indicator
            showThumbs = {false} // Hide thumbnail images
            infiniteLoop = {true} // Infinite loop
            stopOnHover = {false} // Stop auto play on hover
            className="carousel"
        >
            <div className="slide">
                <img src={process.env.PUBLIC_URL + "/images/SmartLogo.png"}></img> 
                <p className="legend">Image 1</p>  
            </div>
            <div className="slide">
                <img src={process.env.PUBLIC_URL + "/images/SmartLogo.png"}></img> 
                <p className="legend">Image 2</p>   
            </div>

        </Carousel>
    )
}

export default Slider;