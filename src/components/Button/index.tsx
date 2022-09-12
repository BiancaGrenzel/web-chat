import { ButtonStyled } from "./style";
import { ButtonProps } from "./types";

const Button = ({ fullWidth, color, ...props}: ButtonProps) => {
  return <ButtonStyled fullWidth={fullWidth} color={color} {...props}/>;
};

export default Button;
