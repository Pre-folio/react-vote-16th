import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { login } from '../api/userRequest';
import { IUserResponse, LoginProps } from '../interfaces';

const { persistAtom } = recoilPersist();

export const LoginState = atom<boolean>({
  key: 'LoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom<IUserResponse>({
  key: 'userState',
  default: {
    user: {
      user_id: '',
      name: '',
      part: '',
      team: '',
    },
    message: '',
    token: {
      access: '',
      refresh: '',
    },
  },
});

/* LoginInputState가 바뀌면 login을 시도하고 
바뀐 정보는 LoginSelector에 저장
LoginState는 true로 변경 
나 뭐했니...
*/

// export const LoginSelector = selector({
//   key: 'loginSelector',
//   get: ({ get }) => {
//     if (get(LoginState) === true) {
//       const props = get(LoginInputState);
//       login(props).then((res) => {
//         console.log(res);
//         return res;
//       });
//     }
//   },
//   set: ({ set }) => {
//     set(LoginState, true);
//   },
// });
