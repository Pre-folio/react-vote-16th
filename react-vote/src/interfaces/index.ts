import React from 'react';

export interface HeaderProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonProps {
  content: string;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface LeaderNameButtonProps {
  name: string;
}

export interface ContentButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
