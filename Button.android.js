import React,{Component} from 'react'
import {
  TouchableNativeFeedback,
  View,
} from 'react-native'

class Button extends Component{
  render(){
    return(
      <TouchableNativeFeedback
        delayPressIn={0}
        background={TouchableNativeFeedback.SelectableBackground()}
        {...this.props}
      >
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </TouchableNativeFeedback>
    )
  }
}
Button.propTypes = {
  children: React.PropTypes.any.isRequired,
}
export default Button;