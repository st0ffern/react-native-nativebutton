import React,{Component} from 'react'
import PropTypes from 'prop-types'

import {
  TouchableOpacity,
  View,
} from 'react-native'

class Button extends Component{
  render(){
    return(
      <TouchableOpacity {...this.props}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
Button.propTypes = {
  children: PropTypes.any.isRequired,
}
export default Button;
