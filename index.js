'use strict';
/*
 * sim[ple timezone timestamp holder/formater
 * Do not use it. The momentjs much better for you :P
 *
 */

const timeBase = function(){
    /*
     * @public
     * @return {integer} unix timestamp (s)
    */
    this.stamp = function(){
        return stamp();
    };
    /*
     * @param {integer} unixtimestamp
     * @public
     * @return {integer} js timestamp (ms)
    */
    this.check = function(i){
        return check(i);
    }
    /* intl support still missing
     * @param {integer} unixtimestamp
     * @public
     * @return {integer} js timestamp (ms)
    */
    this.date = function(i){
        return dateFormat(i);
    }
    /*
     * @param {integer} unixtimestamp
     * @public
     * @return {string} time
    */
    this.time = function(i){
        return timeFormat(i);
    }
    /*
     * @param {integer} timestamp utc
     * @public
     * @return {boolean}
    */
    this.full = function(i){
        return dateFormat(i) +" "+ timeFormat(i);
    }
    /*
     * @param {integer} timezone
     * @public
     * @return {boolean}
    */
    this.setTimeZone = function(i){
        if((i>24)||(-24>i))
           return false;
        timezone = i;
        return true;
    }
    /*
     * @param {integer} unix timestamp
     * @private
     * @return {string} date
    */
    let dateFormat = function(i){
        let d = check(i);
        return d.getFullYear().toString()+
            '-'+d.getMonth().toString()+
            '-'+d.getDate().toString();
    }
    /*
     * @param {integer} unix timestamp
     * @private
     * @return {string} time
    */
    let timeFormat = function(i){
        let d = check(i);
        return d.getHours().toString()+
               ':'+d.getMinutes().toString()+
               ':'+d.getSeconds().toString()+
               '.'+d.getMilliseconds().toString();
    }
    /*
     * @param {integer} timestamp utc
     * @private
     * @return {integer} js timestamp (ms)
    */
    let check = function(i){
        if ( typeof i === 'undefined')
            i = stamp();
        return new Date(toZone(i)*1000);
    }
    /*
     * @private
     * @return {integer} unix timestamp
    */
    let stamp = function(){
        return parseInt(((+new Date)/1000)).toString();
    };
    /*
     *  @param {integer} timestamp utc
     *  @param {integer} timezone
     *  @private
     *  @return {integer} timestamp
    */
    let toZone = function(i, z){
        z = checkZone(z);
        return i+(z*3600);
    }
    /*
     *  @param {integer} timestamp utc
     *  @param {integer} timezone
     *  @private
     *  @return {integer} timestamp
    */
    let fromZone = function(i, z){
        z = checkZone(z);
        return i-(z*3600);

    }
    /* fix the incorect timezone
     *  @param {integer} timezone
     *  @private
     *  @return {integer} timestamp
    */
    let checkZone = function(z){
        if(
            (typeof z === 'undefined')||
            (z > 24)||
            (-24 > z)
        )
           return timezone;
        return z;

    }
    /*
     * @prrivate
     * @var {integer}
    */
    let timezone = 0;
    /*
     * @prrivate
     * @var {integer}
    */
    let local = 'en-US';

}


exports.base = timeBase;
