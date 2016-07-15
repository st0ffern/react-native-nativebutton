import React, {Component} from 'react'
import {
  View,
  Text,
} from 'react-native'

import Button from '../'

class Example extends Component{
  render(){
    return (
      <View>
        <Button style={{backgroundColor: 'red', borderWidth: 1, borderRadius: 5, borderColor: 'blue'}}>
          <Text style={{color: 'white'}}>{'My button'}</Text>
        </Button>
      </View>
    )    
  }
}

export default = Example;