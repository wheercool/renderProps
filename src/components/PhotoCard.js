import React from 'react';
import PropTypes from 'prop-types';

export class PhotoCard extends React.Component {
  render() {
    const { src, likes } = this.props;
    return (
      <div className="photo-card">
        <div className="photo-card__img-container">
          <img src={src} className="photo-card__img" alt={''} />
        </div>
        <p className="photo-card__likes">{likes}</p>
      </div>
    );
  }
}

PhotoCard.propTypes = {
  src: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
};
