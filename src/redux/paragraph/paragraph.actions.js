import ParagraphActionTypes from "./paragraph.types";

export const setParagraph = paragraph => ({
    type: ParagraphActionTypes.SET_PARAGRAPH,
    payload: paragraph
})

export const removeTypedWord = paragraph => ({
    type: ParagraphActionTypes.REMOVE_TYPED_WORD,
    payload: paragraph
})

export const toggleFetch = ()=>({
    type: ParagraphActionTypes.TOGGLE_FETCH
})