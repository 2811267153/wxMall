import request from './network'
const beastUrl = 'http://152.136.185.210:7878/api/m5/'

export function getCategoryData() {
  return request({
    url: beastUrl +  'category',
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: beastUrl +  'subcategory',
    data: {
      maitKey
    }
  })
}