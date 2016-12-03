import React,{Component} from 'react'
import {
  TouchableOpacity,
  View,
} from 'react-native'

class Button extends Component{
  render(){
    return(
      <TouchableOpacity {...this.props}>
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </TouchableOpacity>
    )
  }
}
Button.propTypes = {
  children: React.PropTypes.any.isRequired,
}
export default Button;
