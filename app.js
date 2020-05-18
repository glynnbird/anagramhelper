Vue.use(VueMaterial.default)

var app = new Vue({
  el: '#app',
  data: {
    source: 'Saoirse Ronan',
    target: ''
  },
  methods: {
  },
  computed: {
    left : function() {
      let str = this.source
      for(var i in this.target) {
        const letter = this.target[i]
        if (letter !== ' ') {
          const re = new RegExp(letter, 'i')
          str = str.replace(re, '')
        }
      }
      str = str.toLowerCase().split('').sort().join('')
      return str
    }
  }
})