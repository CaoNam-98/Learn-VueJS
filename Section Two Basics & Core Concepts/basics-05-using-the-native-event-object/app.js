const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    name(value) {
      if (value === '') {
        console.log('nam cao 1');
        this.fullname = '';
      } else {
        console.log('nam cao 2');
        this.fullname = value + ' ' + 'Nam cao';
      }
    },
    lastName(value) {
      if (value === '') {
        console.log('nam cao 3');
        this.fullname = '';
      } else {
        console.log('nam cao 4');
        this.fullname = this.name + ' ' + value;
      }
    }
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName + '1';
    }
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Nam Cao';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    }
  }
});

app.mount('#events');
