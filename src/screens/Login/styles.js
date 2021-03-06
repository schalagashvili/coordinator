import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`

export const Title = styled.Text`
  font-size: 24px;
`

export const CustomInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: grey;
  width: 300px;
  margin-top: 20px;
`

export const ErrorText = styled.Text`
  color: ${colors.red};
  margin-top: 10;
  text-align: left;
`

export const ErrorWrapper = styled.View`
  height: 20px;
`

export const Button = styled.TouchableOpacity`
  width: 300px;
  elevation: 5;
  background-color: ${colors.tomato};
  height: 45px;
  margin-top: 20px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: ${colors.white};
`
