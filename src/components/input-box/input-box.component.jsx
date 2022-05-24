import React,{useEffect, useRef} from "react";
import './input-box.styles.scss'

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { removeTypedWord } from "../../redux/paragraph/paragraph.actions";
import { selectPara } from "../../redux/paragraph/paragraph.selectors";
// const handleSubmit = (e, typedWord, para)=>{
//     // let paraToCheck = this.state.para
//     let currentWordInPara = para[0]
//     if(typedWord === currentWordInPara){
//         console.log('para: ', para)
//         e.target.value = ''
//         para.shift()
//         console.log(para)
//         this.setState({para: para})
//     }else{
//         console.log(false)
//     }
// }

// const handleChange = (e, para)=> {
//     let {value} = e.target;
//     console.log(value.slice(-1))
//     if((value.slice(-1) === ' ' || value.slice(-1) === '.') && value.length > 1){
//         handleSubmit(e, value.slice(0, -1), para)
//     }
// }
const handleSubmit = (e, typedWord, para, removeTypedWord)=>{
    const currentWord = para[0]
    const newPara = [...para]
    console.log('handlesubmit triggred');
    if(typedWord === currentWord){
        e.target.value = '';
        newPara.shift()
        console.log(newPara)
        removeTypedWord(newPara)
        console.log(true);
    }
    else{
        console.log(false);
    }
}

const handleChange = (e, para, removeTypedWord) => {
    const { value } = e.target;
    if(value.slice(-1) === ' ' && value.length > 1){
        handleSubmit(e, value.slice(0, -1), para,removeTypedWord)
    }
    if(value.slice(-1) === '.'){
        handleSubmit(e, value, para,removeTypedWord)

    }
}

const InputBox = ({para, removeTypedWord}) => {
    const inputBox = useRef();
    useEffect(()=>{
        inputBox.current.focus()
    }, [])
    return(<div className="input-box">
        <input 
        ref={inputBox}
className="input"
type="text" 
onChange={e => handleChange(e, para, removeTypedWord)}/>
<span className="caret"></span>
    </div>)
}
const mapStateToProps = createStructuredSelector({
    para: selectPara,
})
const mapDispatchToProps = dispatch => ({
    removeTypedWord: para => dispatch(removeTypedWord(para))
})
export default connect(mapStateToProps, mapDispatchToProps)(InputBox)