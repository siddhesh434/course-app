import './CourseCard.css'; // Import your CSS file for styling
import PropTypes from 'prop-types';
const CourseCard = ({ name, price, duration, image, instructor }) => {
    return (
        <div className="card">

            <img src={image} alt={name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: {price}</p>
                <p className="card-text">Duration: {duration}</p>
                <p className="card-text">Instructor: {instructor}</p>
            </div>
        </div>
    );
};
CourseCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
};
export default CourseCard;
