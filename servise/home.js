import request from './network.js'

const beastUrl = 'http://152.136.185.210:7878/api/m5/'

export function getMultiData() {
  return request({
    url:beastUrl +  'home/multidata',
  })
}
export function getGoodsList(type, page) {
  return request({
    url:beastUrl +  'home/data',
    data:{
      type ,
      page
    }
  })
}