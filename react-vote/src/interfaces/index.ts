import React from 'react';

export interface HeaderProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonProps {
  content: string;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface SubmitButtonProps {
  content: string;
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
