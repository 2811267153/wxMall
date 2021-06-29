import request from "./network";

const beastUrl = 'http://152.136.185.210:7878/api/m5/'

export function getDetail(iid) {
  return request({
    url: beastUrl + "detail",
    data: {
      iid,
    },
  });
}
