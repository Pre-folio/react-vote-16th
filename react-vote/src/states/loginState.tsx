import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { login } from '../api/userRequest';
import { LoginProps } from '../interfaces';

const { persistAtom } = recoilPersist();

export const LoginState = atom<boolean>({
  key: 'LoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

const LoginInputState = atom<LoginProps>({
  key: 'LoginInputState',
  default: {
    user_id: 'nay3on',
    password: 'skdus0206!',
  },
});

/* LoginInputState가 바뀌면 login을 시도하고 
바뀐 정보는 LoginSelector에 저장
LoginState는 true로 변경 */

export const LoginSelector = selector({
  key: 'loginSelector',
  get: ({ get }) => {
    const props = get(LoginInputState);
    return login(props).then((res) => {
      console.log(res);
      return res;
    });
  },
  set: ({ set }) => {
    set(LoginState, true);
  },
});
