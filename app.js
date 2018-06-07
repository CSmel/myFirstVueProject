var one = new Vue({
    el: '#vue-app',
    data: {

        title: 'vue-app',
        name: 'Mel',
        job: 'Pure awesomeness',
        website: 'http://www.creativesakas.com',
        websiteTag: '<a href="http://www.creativesakas.com">My website</a>'
    },
    methods: {
        greet: function (time) {
            return 'Good' + time + ' ' + this.name;
        },
        changeTitle: function(){
           two.title = "BLAHHHHHHHHHHHHHHH";
        }
    }
});

two.title = "Changed from the outside!";

var two = new Vue({
    el: '#vue-app-events',
    data: {
        title: 'vue-app-events',
        age: 32,
        x: 0,
        y: 0,
    },
    methods: {
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dec) {
            this.age -= dec;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function () {
            alert('you clicked');
        }
    }
});

var three = new Vue({
    el: '#vue-app-data-binding',
    data: {
        title: "vue-app-data-binding",
        name: "",
        age: "",

    },
    methods: {
        logName: function () {
            console.log('you entered your name');
        },
        logAge: function () {
            console.log('you entered your age');
        }
    }
});
var four = new Vue({
    el: '#vue-app-computed-properties',
    data: {
        title: "vue-app-computed-properties",
        age: 32,
        a: 0,
        b: 0,
    },
    methods: {
        /*   addToA: function(){
               return this.a + this.age;
           },
           addToB: function(){
               return this.b + this.age;
          }*/
    },
    computed: {
        addToA: function () {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function () {
            console.log('addToB');
            return this.b + this.age;
        }
    }
});

var five = new Vue({
    el: '#vue-app-css',
    data: {
        title: "vue-app-css",
        available: false,
        nearby: false
    },
    methods: {},
    computed: {
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});

var six = new Vue({
    el: '#vue-app-conditionals',
    data: {
        title: "vue-app-conditionals",
        error: false,
        success: false
    },
    methods: {},
    computed: {}
});