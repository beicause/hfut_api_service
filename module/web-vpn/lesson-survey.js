// web版获取评教信息
const basicInfo = require('../../app').basicInfo

module.exports = (query, request) => {
  let { key, dataId } = query
  let data = {}
  let semesterId = basicInfo.currentWebSemesterId

  return request({
    method: 'get',
    url: `https://vpn.hfut.edu.cn/http/77726476706e69737468656265737421faef469034247d1e760e9cb8d6502720ede479/eams5-student/for-std/lesson-survey/${semesterId}/search/${dataId}`,
    data: data,
    cookies: 'show_vpn=1; refresh=1; wengine_vpn_ticketvpn_hfut_edu_cn=' + key,
  })
}






