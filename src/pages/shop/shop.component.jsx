import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectAreCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ fetchCollectionsStart, match }) =>  {

    useEffect(() => {
      fetchCollectionsStart();
    }, [fetchCollectionsStart]);
 
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} render={(props) => 
          <CollectionPageWithSpinner {...props}/>} />
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
  areCollectionsLoaded: selectAreCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);