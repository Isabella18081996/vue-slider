const app = new Vue({

    el: '#root',
    data:{

        counterPhoto:0,
        photos:[
            'assets/img/photo_1.jpg',
            'assets/img/photo_2.jpg',
            'assets/img/photo_5.jpg',
            'assets/img/photo_6.jpg',
            'assets/img/photo_7.jpg',
            'assets/img/photo.jpg',


        ]

    },    
    
    mounted: 
    function(){
      setInterval(this.nextPhoto, 3000)
    },


    methods:{

        nextPhoto(){
            this.counterPhoto++;
            if(this.counterPhoto === this.photos.length) this.counterPhoto = 0;
        },

        prevPhoto(){
            this.counterPhoto--;
            if(this.counterPhoto < 0) this.counterPhoto = this.photos.length -1;
        },

        autoPlay(){
            setInterval(this.nextPhoto, 3000)
          },

    }

 });
