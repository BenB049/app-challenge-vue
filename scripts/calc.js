const convert = (x) => { return x - 273.15 }

const converter = new Vue({
  el: '#converter',
  data: {
    kelvin
  },
  computed: {
    result: function () {
      const i = parseInt(this.kelvin)
      return `Celcius: ${convert(i)}.`
    }
  }
})