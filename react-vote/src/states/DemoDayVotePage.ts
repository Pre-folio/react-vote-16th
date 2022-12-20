import { atom } from 'recoil';

export const isTeamClickedState = atom<boolean>({
  key: 'isClicked',
  default: false,
});

export const votedTeamState = atom<string>({
  key: 'votedTeam',
  default: '',
});
