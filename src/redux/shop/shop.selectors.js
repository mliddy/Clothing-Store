
import { createSelector } from 'reselect';



const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// Ah, the missing piece.. Thi converts the object in shop_data into an array => Decribed in 153
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );
  
export const selectCollection = collectionUrlParam => createSelector(
[selectCollections],
colelctions => colelctions[collectionUrlParam]
);

