import styled from "styled-components";

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CollectionTitle = styled.h2`
    font-size: 48px;
    color: #ebd9ae;
    letter-spacing: 0.5px;
    text-align: center;
    margin: 0;
`;

export const CollectionItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 16px;
    padding: 32px;
    padding-top: 80px;

    @media (min-width: 768px) and (max-width: 991px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 767px) {
        grid-template-columns: initial;
        grid-template-rows: 1fr;
        padding-top: 64px;
    }
`;
