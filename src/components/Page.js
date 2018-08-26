import React from 'react';
import PropTypes from 'prop-types';
import { PhotoCard } from './PhotoCard';

export class Page extends React.Component {
  render() {
    console.log('Page rendered');
    const { photos, year, years, isFetching } = this.props;
    return (
      <div className="ib page">
        <div>
          {years.map(y => (
            <button
              key={y.value}
              className="btn"
              data-year={y.value}
              onClick={this.handleButtonClick}
            >
              {y.value}[{y.count}]
            </button>
          ))}
        </div>
        {year && (
          <h3>
            {year}[{photos.length}]
          </h3>
        )}
        <div>
          {isFetching ? (
            <span>Загрузка...</span>
          ) : (
            <div className="row">
              {photos.map(photo => (
                <PhotoCard
                  key={photo.src}
                  likes={photo.likes}
                  src={photo.src}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  handleButtonClick = event => {
    this.props.getPhotos(+event.currentTarget.dataset.year);
  };
}

Page.propTypes = {
  photos: PropTypes.array.isRequired,
  year: PropTypes.string.isRequired,
  years: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,

  getPhotos: PropTypes.func.isRequired
};
