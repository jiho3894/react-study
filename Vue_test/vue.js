var app1 = new Vue({
  el: '#app1',
  data: {
    message: '안녕하세요'
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
  }
})

var app3 = new Vue({
  el: '#app3' ,
  data: {
    message: ' seen boolean 생기고 사라지고' ,
    seen : true
  }
})

var app4 = new Vue({
  el: "#app4" ,
  data : {
    todos: [
      { text: "안녕" },
      { text: "반가워"}
    ]
  }
})
app3.seen = true
app4.todos.push({ text: "push 추가" })

var app5 = new Vue({
  el : "#app5" , 
  data : {
    message: "안녕하십니까?"
  } ,
  methods : {
    reverseMessage: function(){
      this.message = this.message.split('').reverse('').join('')
    }
  }
})

var app6 = new Vue({
  el: '#app6',
  data: {
    message: '안녕하세요 Vue!'
  }
})

Vue.component("todo-item" , {
  template: "<li> 안녕하세요 </li>"
})
var app7 = new Vue({
  el: "#app7" ,
  data: {
  message : "안녕?"
  }
})