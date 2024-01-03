import React from 'react';

import {Container, Description} from './styles';
import {TouchableOpacityProps} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  description: string;
};

const CustomButton: React.FC<ButtonProps> = ({description, ...props}) => {
  return (
    <Container {...props}>
      <Description>{description}</Description>
    </Container>
  );
};

export default CustomButton;
