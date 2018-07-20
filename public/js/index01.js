$(function () {

/*  $.ajax({
    url: '/saveCourse',
    method: 'post',
    contentType: 'application/json',
    data: JSON.stringify({
      title: 'students.find',
      desc: '5ae438a589d400140455a506'
    })
  })*/


  $('#btn2').click(function() {
    $.ajax({
      type: 'post',
      url: '/saveCourse',
      data: {
        title: '名称',  //
        desc: '描述',   //
        page: 1,   // 页码
        author: '作者', //
      },
      success:function (res){
        if (res.success) {
          // renderStudent (res.data)
        }
      }
    })
  })

  $('#btn1').click(function() {
    $.ajax({
      type: 'post',
      url: '/saveinfo',
      data: {
        hobby: ['羽毛球', '乒乓球', '足球'],
        height: 188,
        weight: 76,
      },
      success:function (res){
        if (res.success) {
          renderStudent(res.data)
        }
      }
    })
  })

  function renderStudent (data) {
    $.ajax({
      type: 'post',
      url: '/saveStudent',
      data: {
        name: '张三',
        sex: '男',
        age: 20,
        info: data._id
      },
      success:function (res){
        if (res.success) {
          renderCourse(res.data)
        }
      }
    })
  }

  function renderCourse (data) {
    var str = ''
    data.forEach(function(item) {
      str += '<li>课程：'+item.title+'，简介：'+item.desc+'</li>'
    })
    $('#courseList').html(str)
  }

  $('#btn3').click(function() {
    $.ajax({
      url: '/graphql',
      data: {
        query: `query{
          student{
            _id
            name
            sex
            age
          }
          course{
            title
            desc
          }
        }`
      },
      success:function (res){
        renderStudent (res.data.student)
        renderCourse (res.data.course)
      }
    })
  })

})