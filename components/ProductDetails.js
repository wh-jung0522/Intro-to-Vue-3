app.component('product-details',{
    props:{
        detail:{
            type: Boolean,
            required: true
        }
    },
    template : 
    /*html*/
    `<p> Detailed {{detail}} </p>`

})