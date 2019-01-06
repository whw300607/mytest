    var app = new Vue({
    	el:"#app",
    	data:{
    		message:"nihaoma:"
    	}
    })

   var app2=new Vue({
   		el:"#app-2",
   		data:{
   			message:"页面加载于"+new Date().toLocaleString()
   		}
   })

   var app3=new Vue({
   		el:"#app-3",
   		data:{
   			seen:true
   		}
   })

   var app5 = new Vue({
	  el: '#app-5',
	  data: {
	    message: 'Hello Vue.js!'
	  },
	  methods: {
	    reverseMessage: function () {
	      this.message = this.message.split('').reverse().join('')
	    }
	  }
	})