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
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isClicked?: boolean;
}

export interface ContentButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface RankProps {
  teamName?: string;
  rank?: number;
  style?: object;
}

export interface CheckButtonProps {
  isClicked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
