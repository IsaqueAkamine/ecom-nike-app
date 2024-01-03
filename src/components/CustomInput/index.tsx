import React from 'react';

import {Container, Description, InputStyled} from './styles';
import {TextInputProps} from 'react-native';

type InputProps = TextInputProps & {
  description: string;
};

const CustomInput: React.FC<InputProps> = ({description, ...props}) => {
  return (
    <Container>
      <Description>{description}</Description>
      <InputStyled {...props} />
    </Container>
  );
};

export default CustomInput;
