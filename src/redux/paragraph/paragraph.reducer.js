import ParagraphActionTypes from "./paragraph.types";

const INITIAL_STATE = {
    para: 'SOMETHING IS NOT RIGHT'.split(' '),
    isFetching: true,
}

const ParagraphReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case ParagraphActionTypes.SET_PARAGRAPH:
        case ParagraphActionTypes.REMOVE_TYPED_WORD:
            return{
                ...state,
                para: action.payload
            }
            case ParagraphActionTypes.FETCHING_COMPLETE:
                return {
                    ...state,
                    isFetching: false
                }
        default : return state
    }
}

export default ParagraphReducer

