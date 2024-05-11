import { StyleProp } from "react-native"
import { Container, IconContainer } from "./style"

export interface ButtonProps {
  style?: StyleProp<string>,
  backgroundColor?: string,
  icon?:{
    name?: string,
    color?: string
    size?: number
  }
}

export function IconButton({ backgroundColor, icon } : ButtonProps) {
  return(
    <Container backgroundColor={backgroundColor}>
      <IconContainer 
        name={icon?.name} 
        color={icon?.color} 
        size={icon?.size}
      />
    </Container>
  )
}
