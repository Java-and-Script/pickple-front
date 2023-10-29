import React from 'react';

import { ItemBorderWrapper, ToggleButtonGroup } from './SelectBox.style';

export type SelectBoxProps = {
  children: React.ReactNode;
  border: string;
};

export const SelectBox = ({ children, ...props }: SelectBoxProps) => {
  const wrappedChildren = React.Children.map(children, (child, index) => (
    <ItemBorderWrapper key={index}>{child}</ItemBorderWrapper>
  ));
  return <ToggleButtonGroup {...props}>{wrappedChildren}</ToggleButtonGroup>;
};
