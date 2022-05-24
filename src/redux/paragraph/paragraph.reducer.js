import ParagraphActionTypes from "./paragraph.types";

const INITIAL_STATE = {
    para: 'SOMETHING IS NOT RIGHT'.split(' '),
}

const ParagraphReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case ParagraphActionTypes.SET_PARAGRAPH:
        case ParagraphActionTypes.REMOVE_TYPED_WORD:
            return{
                ...state,
                para: action.payload
            }
        default : return state
    }
}

export default ParagraphReducer

