const Koa = require('koa');
const route = require('koa-route');
const controller = require('./src/controller/index')
const app = new Koa();

// 教务相关
app.use(route.get('/login', controller.login));
app.use(route.get('/scorelist', controller.scorelist));
app.use(route.get('/event', controller.event))
app.use(route.get('/classlist', controller.classlist))
app.use(route.get('/schedule', controller.schedule))
app.use(route.get('/exam_arrange', controller.exam_arrange))
app.use(route.get('/semesterinfo', controller.semesterinfo))
app.use(route.get('/selfinfo', controller.selfinfo))
app.use(route.get('/program', controller.program))
app.use(route.get('/lesson_survey', controller.lesson_survey))
app.use(route.get('/course_select', controller.course_select))
app.use(route.get('/vpn_ticket', controller.vpn_ticket))

app.use(route.get('/course_search', controller.course_search))


// 图书馆相关
app.use(route.get('/book_search', controller.book_search))
app.use(route.get('/book_status', controller.book_status))
app.use(route.get('/book_info', controller.book_info))
app.use(route.get('/book_ranking', controller.book_ranking))


app.on('error', (err, ctx) =>
  console.error('server error', err)
);

const port = 3002

app.listen(process.env.PORT || port, () => console.log(`listening at ${port} ...`))

// 一些基础信息
const basicInfo = {
  currentWebSemesterId : '114'
}
module.exports.basicInfo = basicInfo





