import React from 'react'
import { StyleSheet, Text, TextInput, Button, View, Clipboard } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '', mode: true }
  }

  isEven = n => {
    return n % 2 === 0
  }
    
  isOdd = n => {
    return n % 2
  }

  treatInput = i => i.split('')
      .map((letter, index) => {
          let number = index + 1

          // Ignore Whitespaces
          if (letter.indexOf(' ') >= 0) return ' '

          // Einfach Magieeee
          if ((this.state.mode && this.isEven(number)) || (!this.state.mode && this.isOdd(number))) return letter.toUpperCase()
          return letter.toLowerCase()
      })
      .join('')

  render() {
    return (
      <View style={{ paddingTop: 25, padding: 15 }}>
        <Text style={{ fontSize: 50, fontWeight: '800' }}>
          {this.state.input
            ? this.treatInput(this.state.input)
            : 'SpongeBob Meme'}
        </Text>
        <TextInput style={{ height: 40, fontSize: 20 }} placeholder="Type your Meme Text..." onChangeText={text => this.setState({ input: text })} />
        <Button
          onPress={() =>
            this.setState(prevState => ({
              mode: !prevState.mode
            }))
          }
          title="Invert"
        />
          
        <View
            style={{
                borderBottomColor: 'white',
                borderBottomWidth: 1,
            }}
        />
          
        <Button
          onPress={() => {
            const i = this.treatInput(this.state.input)
            Clipboard.setString(i)
            alert(`Copied "${i}"`)
          }}
          title="Copy"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
