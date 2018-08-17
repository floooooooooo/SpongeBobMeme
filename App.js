import React from 'react'
import { StyleSheet, Text, TextInput, Button, View, Clipboard } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '', mode: true }
  }

  isEven = n => {
    return n % 2 == 0
  }
  isOdd = n => {
    return n % 2
  }

  render() {
    return (
      <View style={{ paddingTop: 25, padding: 15 }}>
        <Text style={{ fontSize: 50, fontWeight: '800' }}>
          {this.state.input
            ? this.state.input
                .split('')
                .map((letter, index) => {
                  let number = index + 1

                  // Ignore Whitespaces
                  if (letter.indexOf(' ') >= 0) return ' '

                  // Einfach Magieeee
                  if ((this.state.mode && this.isEven(number)) || (!this.state.mode && this.isOdd(number))) return letter.toUpperCase()
                  return letter.toLowerCase()
                })
                .join('')
            : 'SpongeBob Meme'}
        </Text>
        <TextInput style={{ height: 40, fontSize: 20 }} placeholder="Type your Text..." onChangeText={text => this.setState({ input: text })} />
        <Button
          onPress={() =>
            this.setState(prevState => ({
              mode: !prevState.mode
            }))
          }
          title="Invert"
        />
        <Button
          onPress={async () => {
            await Clipboard.setString(this.state.input)
            alert(`Copied ${this.state.input}`)
          }}
          title="Copy (not working)"
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
