// import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "../../redux/paragraph/paragraph.selectors";
import Text from "../text/text.component";
import WithSpinner from "../withSpinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
})

const TextContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Text)

export default TextContainer