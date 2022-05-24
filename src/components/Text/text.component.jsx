import React from "react";
import './text.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPara } from "../../redux/paragraph/paragraph.selectors";

const Text = ({para}) =>
    <div className="text">
        {
        para.length
        ? para.map(
            (word, id) => 
            <span key={id} className={id===0 ? 'first' : ''}> {word + ' '}</span>
                  )
        : <div className="congrats">
            <p>Congrats ! You have successfully typed a quote.</p>
        </div>    
        }
    </div>


const mapStateToProps = createStructuredSelector({
    para: selectPara
})
export default connect(mapStateToProps)(Text)
