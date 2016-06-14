var Record = require("./record.js");


var StoreView = function(container, store){
    this.store = store;
    this.container = container;
    this.create();
}; 

StoreView.prototype = {
    render: function(){
        this.getName(null, this.recordStore);
        this.getCity(null, this.recordStore);
       
    },

    getName: function(){
      return this.name;
    },

    getCity: function(){
      return this.city;
    },


    create: function(){
        var elements = [];
        
        elements.push(this.createElement('h4', 'name', null));
        elements.push(this.createElement('h4', 'city', null));
       


        for (var i = 0; i < elements.length; i++) {
            this.container.appendChild(elements[i]);
        }
        createElement:function(type, id, inner){
            var tmp = document.createElement(type);
            tmp.setAttribute('id', id);
            tmp.innerText = inner
            return tmp;
        };
    };
    
module.exports = StoreView;