new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=???&name=かねさか')
      .then(response => (this.info = response.data.rest))
  }
})
