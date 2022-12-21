import client from './client';

export const getDemoDayResult = () => {
  return client.get(`vote/result/demo/`).then((res) => {
    return res;
  });
};

export const getPartLeaderResult = () => {
  return client.get(`vote/result/part/front`).then((res) => {
    return res;
  });
};
