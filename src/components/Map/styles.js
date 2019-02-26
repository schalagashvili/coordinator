import styled from 'styled-components'
import colors from '../../styles/colors'

export const Coordinates = styled.Text`
  text-align: center;
  color: ${colors.white};
`

export const SmallText = styled.Text`
  text-align: center;
  color: ${colors.white};
  font-size: 9;
`

export const CoordinatesContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  width: ${props => props.width};
  position: absolute;
  bottom: 80px;
  padding-bottom: 15px;
`
