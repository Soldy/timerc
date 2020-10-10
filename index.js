
exports.time = function(){
    this.stamp = function(){
        return parseInt(((+new Date)/1000)).toString();
    },
    this.check = function(i, z){
        if ( typeof i === "undefined")
            i = this.stamp();
        return new Date(parseInt(i*1000));
    }
    this.date = function(i){
        let d = this.check(i);
        return d.getFullYear().toString()+
            "-"+d.getMonth().toString()+
            "-"+d.getDate().toString();
    }
    this.time = function(i){
        let d = this.check(i);
        return d.getHours().toString()+
               ":"+d.getMinutes().toString()+
               ":"+d.getSeconds().toString()+
               "."+d.getMilliseconds().toString();
    }
    this.full = function(i){
        return this.date(i)+" "+this.time(i);
    }
    this.setTimeZone = function(i){
        if((i>24)||(-24>i))
           return false;
        timezone = i;
    }
    let toZone = function(i, z){
        z = checkZone(z);
        return i+(z*3600);
    }
    let fromZone = function(i, z){
        z = checkZone(z);
        return i-(z*3600);

    }
    let checkZone = function(z){
        if(
            (typeof z === 'undefined')||
            (z > 24)||
            (-24 > z)
        )
           return timezone;
        return z;

    }
    let timezone = 0;

}



