function Logger(){
    
    var This = this;
    
    this.log = function(text, color){
        var d = document.createElement('div');
        d.innerHTML = text;
        if( color )
            d.style.color = color;
        This.el.appendChild(d);
    };
    this.clear = function(){
        This.el.innerHTML = '';
    }
    
    this.button = document.createElement('input');
    this.button.setAttribute('type', 'button');
    this.button.setAttribute('value', 'Clear log');
    this.button.onclick = this.clear;
    document.body.appendChild(this.button);
    
    this.el = document.createElement('div');
    document.body.appendChild(this.el);
    this.el.style.width='80%';
    this.el.style.border='1px dotted #000';
    this.el.style.backgroundColor='#ccc';
    this.el.style.minHeight='100px';
};

function keys(obj, expr){
    var rez=[];
    for(var k in obj)
        if(expr.test(k))
            rez.push(k);
    return rez;
}

function vibrate(arguments){
    navigator &&
    navigator.vibrate &&
    navigator.vibrate(arguments);
}

function color(){
    return (Math.round(Math.random()*100)) % 256;
}