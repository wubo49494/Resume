let resume = `# 吴博 | 前端开发工程师
13232049494 | wubo49494@foxmail.com | 深圳 | 2019应届本科毕业生 
Github: https://github.com/wubo49494 
动态简历：https://wubo49494.github.io/Resume/
博客: https://juejin.im/user/5c9261c46fb9a070d013f8bc/posts

## 专业技能

- Vue
    - Vue 开发经验，掌握组件及组件间数据传递的使用、响应式原理、路由和 Vuex 的使用等
    - 了解 vue-cli 脚手架搭建项目、熟悉指令 v-bind 绑定参数和 v-on 绑定事件
    - 了解生命周期钩子函数 created、mounted、updated 的特性和使用
- HTML5, CSS3 & JavaScript
    - 能够使用原生 JavaScript 独立制作精美网页
    - 掌握 HTML5 如 canvas 、 audio 等语义化标签等
    - 掌握 CSS3 动画、过渡、弹性盒子布局、等响应式设计常用技术
- 其他
    - 熟悉 Git 常用命令、代码仓库协同工作流程等
    - 熟悉 jQuery 常用 API ，如 DOM 操作、特效、事件等。会使用$.ajax()异步请求。
    - 掌握 Scss 的使用，理解嵌套规则、父选择器 & 、变量、混合等的使用
    - 理解 MVC 、 MVVM 思想，掌握 HTTP 基础等
    - 使用 PHP + Apache + Mysql 搭建博客后台管理项目
    - 使用 Webpack 打包项目的经验，了解其管理资源的方法，如 css-loader 、 file-loader 等

## 项目经验
### 高德API-梅州市便民出行应用
- 关键词：\`JavaScript\`、\`高德地图\`、\`Web服务\`、\`API\`、\`HTML、CSS\`[源码链接](https://github.com/wubo49494/Gaode-API)
- 描述：该项目使用了高德地图JavaScript API来完成一个单页面应用，通过原生 JS 操作 DOM 元素来完成请求高德地图 API 并把返回来的数据渲染到网页上

### 百秀-博客后台管理系统
- 关键词：\`PHP\`、\`Apache\`、\`Mysql\`、\`jQuery\`、\`Pagination\`[源码链接](https://github.com/wubo49494/Baixiu)
- 描述：该项目由的功能有管理员添加/登录、已发表评论的批准/删除/拒绝完成状态。其中已发表文章还用 PHP 完成了分页功能，在文章分类页面对表单的四种请求都用 PHP 做了不同的处理

### 全栈开发美团网
- 关键词：\`Vue\`、\`Node.js\`、\`Element-ui\`、\`Koa2\`、\`MongoDB\`、\`Nuxt.js\`、\`SSR渲染\`[源码链接](https://github.com/wubo49494/mt-app) 
- 描述：此项目为一个全栈开发项目，结合多个技术把美团网具体开发出来，页面为 Element-ui 布局，通过高德地图Web服务 API 获取相应的数据，注册页面通过 Nodemailer 发送验证码，成功后加密保存到 MongoDB 中，登录时使用 Passport 验证,并使用 Redis 操作 Session 保存账户。

## 教育经历
### 嘉应学院
2015/9 - 2019/6
- 专业学历：地理信息科学    大学本科
- 技能证书：英语四级      教师资格证
`

let code_ready = `/*
 * 嗨，我是吴博。
 * 我想用代码给你展示一下我的个人简历～
 * 灵感来自：http://strml.net
 * 
 * 那么，我要开始啦...
 */

/* 添加一个过渡，使变化看起来更柔和 */
* {
  transition: all 0.3s;
}
/* 加个背景色 */
body {
  background: #455A64;
}
/* 给代码加个边框 */
#code_body {
  width: 100%;
  border: 1px solid #CFD8DC;
  background: #CFD8DC;
  padding: 16px;
  overflow: auto;
}

/* 让代码高亮起来 */
.token.comment, .token.punctuation {
  color: #757575;
}
.token.selector {
  color: #007400;
}
.token.property {
  color: #cf1f1f;
}

/* 
 * 给它们来个特效吧！
 * 让它们在被编辑的时候产生“呼吸”的效果
 */
.breathe {
  animation: breathe 3s ease 0s infinite;
}


/* 现在开始写简历啦！ */

/* 让代码框腾出一些的位置给我的简历框 */
#options {
  width: 32%;
}
/* 准备一个白板 */
#paper {
  flex: 1;
  background: #fdfdfd;
  margin: 16px;
  overflow: auto;
  white-space: pre-wrap;
}

/* 接下来，请看右边 */

`

let code_marked = `
/* 
 * 接下来我要使用一个优秀的库 marked.js
 * 来使我的简历变成一篇 Markdown
 * (https://github.com/markedjs/marked)
 */
`

let code_beautify_resume = `
/* 调整我的简历，让它变得再好看一点 */
#paper {
  white-space: unset;
  padding: 0 32px;
  font-size: 14px;
}
#paper a {
  color: #455A64;
}
#paper ul {
  padding-left: 20px;
}
/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 28px 0;
}

/* 接下来是精细的调整 */

/* 首先，调整我的“基础信息”板块 */
#paper h1 {
  font-size: 22px;
  margin-bottom: 10px;
}
#information {
  text-align: center;
}
#information p {
  line-height: 24px;
  white-space: pre-wrap;
}

/* 然后是详细介绍模块 */
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #455A64;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 6px 0;
}
#skills > ul ul {
  margin: 4px 0;
}
#skills li, #works li, #education li {
  margin-bottom: 4px;
}
#jobs > .experience {
  margin-bottom: 6px;
}
#works {
  position: relative;
}
#works ul > li:first-child a {
  position: absolute;
  right: 0px;
}

/* 调整“教育经历”中时间的位置 */
#jobs > .experience, #education {
  position: relative;
}
#jobs p, #education p {
  position: absolute;
  right: 0px;
}
#jobs p {
  top: 6px;
}
#education p {
  top: 40px;
}


/* 接下来添加个头像吧！ */
`

let code_photo = `
/* 把我的头像放在个人信息里 */
#information {
  position: relative;
}
#information .avatar {
  width: 90px;
  position: absolute;
  right: 0px;
  top: -10px;
}
/* 让多余的照片隐藏吧~ */
#information {
  overflow: hidden;
}

/* 
 * OK，我的头像出来了--
 * 期待这张面孔会出现在您的面试中
 * 
 *            —— 吴博 2019/07 
 */
`

var resumeInputTimeoutID, codeInputTimeoutID
writeCode(code_ready, '').then(() => {
  createResume().then(() => {
    adjustResume().then(() => {
      addAndAdjustAvatar().then(showDownloadButton)
    }, () => {
      showFinalResult()
    })
  })
})

var speedCode = 1, duration = 80
$('#speed_btn').click(() => {
  speedCode += 1
  if (speedCode > 3) {
    speedCode = 1
  }
  switch (speedCode) {
    case 1:
      speed_status.innerText = '🚲'
      description.innerText = '开小车车快点吧~'
      duration = 70
      break
    case 2:
      speed_status.innerText = '🚗'
      description.innerText = '太废话了，我要最快！'
      duration = 30
      break
    case 3:
      speed_status.innerText = '🚀'
      description.innerText = '现在是最快的速度拉~'
      duration = 0
      break
    default:
      return 0
  }
})

function writeCode(code, origin) {
  let n = 1
  return new Promise(resolve => {
    codeInputTimeoutID = setTimeout(write, duration)
    function write() {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n)
      code_body.scrollTop = code_body.scrollHeight
      n++
      if (n === code.length) {
        window.clearTimeout(codeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(codeInputTimeoutID)
        codeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}
function writeResume() {
  let n = 1
  return new Promise(resolve => {
    resumeInputTimeoutID = setTimeout(write, duration)
    function write () {
      paper.innerHTML = resume.substr(0, n)
      paper.scrollTop = paper.scrollHeight
      n++
      if (n === resume.length) {
        window.clearTimeout(resumeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(resumeInputTimeoutID)
        resumeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}

function createResume() {
  return new Promise(resolve => {
    $('#paper').addClass('breathe')
    $('#code_body').removeClass('breathe')
    writeResume().then(resolve)
    setTimeout(() => {
      $('#skip_inputResume').show()
      $('#skip_inputResume').click(() => {
        skipResumeInput().then(resolve)
      })
    }, 1000)
  })
}
function adjustResume() {
  return new Promise((resolve, reject) => {
    $('#code_body').addClass('breathe')
    $('#paper').removeClass('breathe')
    writeCode(code_marked, code_ready).then(() => {
      structureResume()
      $('#paper')[0].scrollTop = 0
      writeCode(code_beautify_resume, code_ready + code_marked).then(resolve)
      setTimeout(() => {
        $('#skip_all').show()
        $('#skip_all').click(() => {
          skipAll().then(reject)
        })
      }, 1000)
    })
  })
}
function structureResume() {
  $('#paper')[0].innerHTML = marked(resume)
  $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="jobs"></div>', '<div id="works"></div>', '<div id="education"></div>')
  $('#information').append($('h1'), $('p').first())
  $('#skills').append($('h2:contains("技能")'), $('ul').first())
  $('#education').append($('h2:contains("教育")'), $('h3:contains("学院")'), $('p').last(), $('ul').last())
  $('#jobs').append($('h2:contains("工作")'))
  $('h3:contains("公司")').each((index, element) => {
    $('<div class="experience"></div>').append($(element), $('#paper > p').first(), $('#paper > ul').first()).appendTo($('#jobs'))
  })
  $('#works').append($('h2:contains("项目")'), $('#paper').children().not($('div')))
  $('a[href="./images/qrcode.png"]').addClass('qrcode-trigger').append($('img.qrcode'))
}
function addAndAdjustAvatar() {
  return new Promise(resolve => {
    $('#information').append($('img.avatar'))
    writeCode(code_photo, code_ready + code_marked + code_beautify_resume).then(() => {
      $('#paper').addClass('breathe')
      $('#code_body').removeClass('breathe')
      $('.skipper').remove()
      setTimeout(resolve, 1000)
    })
  })
}
function showDownloadButton() {
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}

function skipResumeInput() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(resumeInputTimeoutID)
      paper.innerHTML = resume
      paper.scrollTop = paper.scrollHeight
      resolve()
      $('#skip_inputResume').remove()
    }, 0)
  })
}
function skipAll() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(codeInputTimeoutID)
      resolve()
      $('.skipper').remove()
    }, 0)
  })
}
function showFinalResult() {
  $('#paper').addClass('breathe')
  $('#code_body').removeClass('breathe')
  $('#information').append($('img.avatar'))
  code_body.innerHTML = Prism.highlight(code_ready + code_marked + code_beautify_resume + code_photo, Prism.languages.css, 'css');
  code_style.innerHTML = code_ready + code_marked + code_beautify_resume + code_photo
  code_body.scrollTop = code_body.scrollHeight
  window.clearTimeout(codeInputTimeoutID)
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}