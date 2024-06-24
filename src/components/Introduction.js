import PropTypes from "prop-types";

function Introduction({id, title, descriptionIntro}) {
    return (
        <div>
          <h1>{id}</h1>
          <h2>{title}</h2>
            <p>{descriptionIntro}</p>
        </div>
    );
}

Introduction.propTypes = {
  id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  descriptionIntro: PropTypes.string.isRequired,
}

export default Introduction;