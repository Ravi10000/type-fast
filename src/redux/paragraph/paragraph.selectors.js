import { createSelector } from "reselect";

const selectParagraph = state => state.paragraph

export const selectPara = createSelector(
    [selectParagraph],
    paragraph => paragraph.para
)

export const selectIsFetching = createSelector(
    [selectParagraph],
    paragraph => paragraph.isFetching
)