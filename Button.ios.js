import React,{Component} from 'react'
import {
  TouchableOpacity,
  View,
} from 'react-native'

class Button extends Component{
  render(){
    return(
      <TouchableOpacity {...props}>
        <View>
          {props.children}
        </View>
      </TouchableOpacity>
    )
  }
}
Button.propTypes = {
  children: React.PropTypes.any.isRequired,
}
export default Button;
