## react-native-nativebutton ![](https://img.shields.io/npm/v/react-native-nativebutton.svg?style=flat-square) [![David](https://img.shields.io/david/dev/stoffern/react-native-nativebutton.svg?style=flat-square)]() [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)


This provides native button responses for each platform (iOS and Android)

Android = TouchableNativeFeedback
iOS = TouchableOpacity

Nothing more, only the native feeling! :)


## Installation
```npm i -S react-native-nativebutton``` https://www.npmjs.com/package/react-native-nativebutton


## Props
- `children` **(required)**: the content to negate.

## Usage Examples

```js
import Button from "react-native-nativebutton"

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

```
