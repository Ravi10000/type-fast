import React, {useEffect} from 'react';
import './App.styles.scss'
import Text from './components/Text/text.component';
import InputBox from './components/input-box/input-box.component';

import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectPara } from './redux/paragraph/paragraph.selectors';
import { setParagraph} from './redux/paragraph/paragraph.actions'

// class App extends React.Component{
//     constructor(props){
//         super(props)
        // this.state = {
        //     para: 'This is a quote.'.split(' '),
        //     speed: 0
        // }
    // }
    
    // componentDidMount(){
    //     fetch('https://api.quotable.io/random')
    //     .then(res => res.json())
    //     .then(result => {
    //         let newPara = result.content.split(' ')
    //         this.setState({para: newPara})
    //         console.log(result)
    //     }).catch(err => {
    //         console.log(err)
    //         this.setState({para: 'Something is not right.'})
    //     })
    // }
    // handleSubmit(e, typedWord){
    //     let paraToCheck = this.state.para
    //     let currentWordInPara = paraToCheck[0]
    //     if(typedWord === currentWordInPara){
    //         console.log('paraToCheck', paraToCheck)
    //         e.target.value = ''
    //         paraToCheck.shift()
    //         console.log(paraToCheck)
    //         this.setState({para: paraToCheck})
    //     }else{
    //         console.log(false)
    //     }
    // }
    // handleChange(e){
    //     let {value} = e.target;
    //     console.log(value.slice(-1))
    //     if((value.slice(-1) === ' ' || value.slice(-1) === '.') && value.length > 1){
    //         this.handleSubmit(e, value.slice(0, -1))
    //     }
        // if(value.slice(0, -1))
        // let {value} = e.target;
        // let wordToCheck = this.state.para[0]
        // console.log(value, wordToCheck);
        // let currentTypedWord = value.slice(0, -1)
        // if(currentTypedWord === wordToCheck){
        //     //clearing input box
        //     e.target.value = ''
        //     //removing typed word
            
        //   if(value.length > 1 ) {
        //       let para = this.para;
        //       para.shift()
        //       console.log(para)
        //       this.setState({para: para})
        //   }
        // }
    // }
//     render(){
//         const { para, removeTypedPara } = this.props
//         return (
//             <div className='App'>
//                 <Text/>
//                  <InputBox/>
//                 {/* <input type="text" onChange={(e) => this.handleChange(e)} setstate={this.setState}/> */} 
//             </div>
//         )
//     }
// }
const App = ({setParagraph}) => {
    useEffect(()=>{
        (async function fetchQuotes(){
            const res = await fetch('https://api.quotable.io/random');
            const jsonRes = await res.json();
            const quote = jsonRes.content.split(' ')
            setParagraph(quote)
        })()

    }, [setParagraph])
    return(
    <div className='App'>
        <h1 className='title'>Type fast</h1>
        <Text/>
        <InputBox/>
    </div>)
}

// const mapStateToProps = createStructuredSelector({
//     para: selectPara
// })

const mapDispatchToProps = dispatch=>({
    setParagraph: para => dispatch(setParagraph(para))
})

export default connect(null, mapDispatchToProps)(App)