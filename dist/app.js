Vue.use(VueMaterial.default)

var app = new Vue({
  el: '#app',
  data: {
    source: 'Saoirse Ronan',
    target: '',
    error: ''
  },
  methods: {
  },
  computed: {
    left : function() {
      let str = this.source.replace(/[^a-z]/ig, '')
      const invalidLetters = []
      for(var i in this.target) {
        const letter = this.target[i]
        if (letter.match(/[a-z]/i)) {
          const re = new RegExp(letter, 'i')
          if (str.match(re)) {
            str = str.replace(re, '')
          } else {
            invalidLetters.push(letter)
          }

        }
      }
      if (invalidLetters.length > 0) {
        this.error = 'Invalid letters: ' + invalidLetters.join(' ')
      } else {
        this.error = ''
      }
      str = str.toLowerCase().split('').sort().join('')
      return str
    },
    messageClass () {
      return {
        'md-invalid': (this.error.length > 0)
      }
    }
  }
})