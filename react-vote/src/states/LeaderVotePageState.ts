import { atom } from 'recoil';

export const isLeaderClickedState = atom<boolean>({
  key: 'isClicked',
  default: false,
});

export const votedLeaderState = atom<string>({
  key: 'votedLeader',
  default: '',
});
