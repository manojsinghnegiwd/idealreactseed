import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';

class App extends Component {

	_onChange = (value) => {
		this.props.dispatch(setMessage(value))
	}

    render () {

    	const {message} = this.props.messageReducer;

        return (
        	<InputPreview
        		value={message}
        		onChange={this._onChange}/>
        )
    }
}

export default connect(state => state)(App);