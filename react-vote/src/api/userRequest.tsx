import { JoinProps, LoginProps } from '../interfaces';
import client from './client';

export const join = (props: JoinProps) => {
  return client
    .post('user/join/', {
      user_id: props.user_id,
      name: props.name,
      email: props.email,
      password: props.password,
      part: props.part,
      team: props.team,
    })
    .then((res) => res.data);
};

// export const join = () => {
//   return client
//     .post('/user/join/', {
//       user_id: 'nayeon6',
//       name: '강나연',
//       email: 'nay0on2@naver.com',
//       password: 'skdus0206!',
//       part: 'frontend',
//       team: 'prefolio',
//     })
//     .then((res) => res.data);
// };

export const login = (props: LoginProps) => {
  return client
    .post('user/login/', {
      user_id: props.user_id,
      password: props.password,
    })
    .then((res) => res.data);
};
