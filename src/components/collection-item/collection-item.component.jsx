import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';


import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles.scss';


const CollectionItem = ({item, addItem }) => {

    const { name, price, imageUrl } = item;

    return (
    <CollectionItemContainer>
        <BackgroundImage
            className='image' 
            imageUrl={imageUrl}
        />
        <AddButton onClick={() => addItem(item)} inverted> Add To Cart</AddButton>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
    </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(CollectionItem);