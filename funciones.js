module.exports = {
    
    numRanmdom:function(min,max)
    {
        return Math.random()*(max-min)+min;
    },    
    
    numRanmdomInt:function(min,max)
    {
        return Math.floor(Math.random()*((max+1)-min)+min);
    },

    //Operaciones-----------------------------------------
    suma:function(array)
    {
        let total = 0.0;
        array.forEach(element => {
            total += element;
        });
        return total;
    },

    resta:function(array)
    {
        let total = 0.0;
        array.forEach(element => {
            total -= element;
        });
        return total;
    },

    multiplicar:function(array)
    {
        let total = 1;
        array.forEach(element => {
          total = total * element;
        });
        return total;
        
    },

    devidir:function(dividendo,divisor)
    {
        let resultado = dividendo/divisor;
        if(resultado > 0)
        {
            return resultado;
        }else
        {
            return -1;
        }

    },
    resto:function(dividendo,divisor)
    {
        return dividendo%divisor;
    },

    calcPotencia:function(x,y)
    {
        return Math.pow(x,y);
    },

    ecuSegGrado:function(a,b,c)
    {
        let res = new array();
        res.push( (-b) +(Math.sqrt((Math.pow(b,2) - (4*a*c))))/(2*a) );
        res.push( (-b) -(Math.sqrt((Math.pow(b,2) - (4*a*c))))/(2*a) );
        return res;
    },

    //Cadenas-----------------------------------------
    ordenarArry:function(array)
    {
        return array.sort( (a, b) => a - b );
    }










};





