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

export interface JoinProps {
  user_id: string;
  name: string;
  email: string;
  password: string;
  part: string;
  team: string;
}

export interface LoginProps {
  user_id: string;
  password: string;
}

export interface IUserResponse {
  user: {
    user_id: string;
    name: string;
    part: string;
    team: string;
  };
  message: string;
  token: {
    access: string;
    refresh: string;
  };

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
