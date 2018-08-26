import React from 'react';
import { Page } from '../components/Page';
import { getPhotos } from '../actions/pageActions';
import { connect } from 'react-redux';

class PageContainer extends React.Component {
  render() {
    return (
      <Page
        year={this.props.year}
        years={this.props.years}
        photos={this.props.photos}
        isFetching={this.props.photosFetching}
        getPhotos={this.props.getPhotosAction}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    photos: store.page.photos,
    photosFetching: store.page.isFetching,
    year: store.page.year,
    years: store.page.years,
    pageError: store.page.error
  };
};
const mapDispatchToProps = {
  getPhotosAction: getPhotos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer);
