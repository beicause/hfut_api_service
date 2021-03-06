// 获取某个教学班的同学列表

module.exports = (query, request) => {
  let { key, campus, lessonCode, semestercode, userKey } = query
  key = userKey ? userKey : key
  let bizTypeId = '2'
  if (String(campus) === '2') {
    bizTypeId = '23'
  }

  let data = {
    userKey: key,
    lessonCode: lessonCode,
    semestercode: semestercode,
    projectId: bizTypeId
  }
  
  return request({
    method: 'post',
    url: 'http://jxglstu.hfut.edu.cn:7070/appservice/home/schedule/getClassList.action',
    data
  })
}


