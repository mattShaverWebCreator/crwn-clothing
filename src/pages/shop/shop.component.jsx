import React from 'react';

import { createStructuredSelector } from 'reselect';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';


import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


import { selectAreCollectionsLoaded } from '../../redux/shop/shop.selectors';


const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match, areCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} render={(props) => 
          <CollectionPageWithSpinner isLoading={ !areCollectionsLoaded } {...props}/>} />
      </div>
    )
  }

};

const mapStateToProps = createStructuredSelector({
  areCollectionsLoaded: selectAreCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);