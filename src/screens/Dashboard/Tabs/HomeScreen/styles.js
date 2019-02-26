import styled from 'styled-components'
import colors from '../../../../styles/colors'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 400px;
`

export const Title = styled.Text`
  font-size: 24px;
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
