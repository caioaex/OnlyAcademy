import { StyleProp } from "react-native"
import { Container, IconContainer } from "./style"

export interface ButtonProps {
  backgroundColor?: string,
  icon?:{
    name?: string,
    color?: string
    size?: number
  }
  onPress?: () => {}
}

export function IconButton({ backgroundColor, icon, onPress } : ButtonProps) {
  return(
    <Container backgroundColor={backgroundColor} onPress={onPress}>
      <IconContainer 
        name={icon?.name} 
        color={icon?.color} 
        size={icon?.size}
      />
    </Container>
  )
}
