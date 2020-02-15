import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { ShopPageContainer } from './shop.styles';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart, match }) =>  {

    useEffect(() => {
      fetchCollectionsStart();
    }, [fetchCollectionsStart]);
 
    return (
      <ShopPageContainer>
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} /> 
        </div>
      </ShopPageContainer>
    );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);