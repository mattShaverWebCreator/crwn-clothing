import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CollectionTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & > .collection-item {
      margin-bottom: 30px;
      @media(max-width: 767px){
        button {
          margin-bottom: 16px;
        }
      }
    }

    @media(max-width: 767px) {
      grid-template-columns: initial;
      grid-template-rows: 1fr;
    }
  }

  @media(max-width: 767px) {
    padding: 32px;
  }
}
`;