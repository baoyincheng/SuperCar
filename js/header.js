var vm = new Vue({
    el:"header>div>div:first-child",
    data:{
        barClass:{cross:false},    
    },
    methods:{
        bar(){
            if(this.barClass.cross==false){
                this.barClass.cross=true;
               
                
            }else{
                this.barClass.cross=false;
                
                
            }
        }
    }
})
