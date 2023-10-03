(self.webpackChunkclinica_fmp_frontend=self.webpackChunkclinica_fmp_frontend||[]).push([[861],{9861:(A,T,c)=>{"use strict";c.d(T,{Z:()=>w});var w=c(1764),s=(c(3634),c(5268)),C=c(1545),h=c(3171);w.locale("es"),w.extend(s),w.extend(C),w.extend(h)},1764:function(A){A.exports=function(){"use strict";var c=6e4,w=36e5,x="millisecond",l="second",g="minute",s="hour",Y="day",C="week",p="month",h="quarter",M="year",m="date",n="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,S=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(u){var r=["th","st","nd","rd"],t=u%100;return"["+u+(r[(t-20)%10]||r[t]||r[0])+"]"}},D=function(u,r,t){var i=String(u);return!i||i.length>=r?u:""+Array(r+1-i.length).join(t)+u},z={s:D,z:function(u){var r=-u.utcOffset(),t=Math.abs(r),i=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+D(i,2,"0")+":"+D(e,2,"0")},m:function u(r,t){if(r.date()<t.date())return-u(t,r);var i=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(i,p),a=t-e<0,o=r.clone().add(i+(a?-1:1),p);return+(-(i+(t-e)/(a?e-o:o-e))||0)},a:function(u){return u<0?Math.ceil(u)||0:Math.floor(u)},p:function(u){return{M:p,y:M,w:C,d:Y,D:m,h:s,m:g,s:l,ms:x,Q:h}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(u){return void 0===u}},O="en",U={};U[O]=v;var H=function(u){return u instanceof I},P=function u(r,t,i){var e;if(!r)return O;if("string"==typeof r){var a=r.toLowerCase();U[a]&&(e=a),t&&(U[a]=t,e=a);var o=r.split("-");if(!e&&o.length>1)return u(o[0])}else{var _=r.name;U[_]=r,e=_}return!i&&e&&(O=e),e||!i&&O},$=function(u,r){if(H(u))return u.clone();var t="object"==typeof r?r:{};return t.date=u,t.args=arguments,new I(t)},f=z;f.l=P,f.i=H,f.w=function(u,r){return $(u,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var I=function(){function u(t){this.$L=P(t.locale,null,!0),this.parse(t)}var r=u.prototype;return r.parse=function(t){this.$d=function(i){var e=i.date,a=i.utc;if(null===e)return new Date(NaN);if(f.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var o=e.match(d);if(o){var _=o[2]-1||0,y=(o[7]||"0").substring(0,3);return a?new Date(Date.UTC(o[1],_,o[3]||1,o[4]||0,o[5]||0,o[6]||0,y)):new Date(o[1],_,o[3]||1,o[4]||0,o[5]||0,o[6]||0,y)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return f},r.isValid=function(){return this.$d.toString()!==n},r.isSame=function(t,i){var e=$(t);return this.startOf(i)<=e&&e<=this.endOf(i)},r.isAfter=function(t,i){return $(t)<this.startOf(i)},r.isBefore=function(t,i){return this.endOf(i)<$(t)},r.$g=function(t,i,e){return f.u(t)?this[i]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,i){var e=this,a=!!f.u(i)||i,o=f.p(t),_=function(Z,b){var W=f.w(e.$u?Date.UTC(e.$y,b,Z):new Date(e.$y,b,Z),e);return a?W:W.endOf(Y)},y=function(Z,b){return f.w(e.toDate()[Z].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(b)),e)},L=this.$W,E=this.$M,j=this.$D,B="set"+(this.$u?"UTC":"");switch(o){case M:return a?_(1,0):_(31,11);case p:return a?_(1,E):_(0,E+1);case C:var k=this.$locale().weekStart||0,K=(L<k?L+7:L)-k;return _(a?j-K:j+(6-K),E);case Y:case m:return y(B+"Hours",0);case s:return y(B+"Minutes",1);case g:return y(B+"Seconds",2);case l:return y(B+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,i){var e,a=f.p(t),o="set"+(this.$u?"UTC":""),_=(e={},e[Y]=o+"Date",e[m]=o+"Date",e[p]=o+"Month",e[M]=o+"FullYear",e[s]=o+"Hours",e[g]=o+"Minutes",e[l]=o+"Seconds",e[x]=o+"Milliseconds",e)[a],y=a===Y?this.$D+(i-this.$W):i;if(a===p||a===M){var L=this.clone().set(m,1);L.$d[_](y),L.init(),this.$d=L.set(m,Math.min(this.$D,L.daysInMonth())).$d}else _&&this.$d[_](y);return this.init(),this},r.set=function(t,i){return this.clone().$set(t,i)},r.get=function(t){return this[f.p(t)]()},r.add=function(t,i){var e,a=this;t=Number(t);var o=f.p(i),_=function(E){var j=$(a);return f.w(j.date(j.date()+Math.round(E*t)),a)};if(o===p)return this.set(p,this.$M+t);if(o===M)return this.set(M,this.$y+t);if(o===Y)return _(1);if(o===C)return _(7);var y=(e={},e[g]=c,e[s]=w,e[l]=1e3,e)[o]||1,L=this.$d.getTime()+t*y;return f.w(L,this)},r.subtract=function(t,i){return this.add(-1*t,i)},r.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||n;var a=t||"YYYY-MM-DDTHH:mm:ssZ",o=f.z(this),_=this.$H,y=this.$m,L=this.$M,E=e.weekdays,j=e.months,k=function(b,W,R,F){return b&&(b[W]||b(i,a))||R[W].slice(0,F)},K=function(b){return f.s(_%12||12,b,"0")},Z=e.meridiem||function(b,W,R){var F=b<12?"AM":"PM";return R?F.toLowerCase():F};return a.replace(S,function(b,W){return W||function(R){switch(R){case"YY":return String(i.$y).slice(-2);case"YYYY":return f.s(i.$y,4,"0");case"M":return L+1;case"MM":return f.s(L+1,2,"0");case"MMM":return k(e.monthsShort,L,j,3);case"MMMM":return k(j,L);case"D":return i.$D;case"DD":return f.s(i.$D,2,"0");case"d":return String(i.$W);case"dd":return k(e.weekdaysMin,i.$W,E,2);case"ddd":return k(e.weekdaysShort,i.$W,E,3);case"dddd":return E[i.$W];case"H":return String(_);case"HH":return f.s(_,2,"0");case"h":return K(1);case"hh":return K(2);case"a":return Z(_,y,!0);case"A":return Z(_,y,!1);case"m":return String(y);case"mm":return f.s(y,2,"0");case"s":return String(i.$s);case"ss":return f.s(i.$s,2,"0");case"SSS":return f.s(i.$ms,3,"0");case"Z":return o}return null}(b)||o.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,i,e){var a,o=this,_=f.p(i),y=$(t),L=(y.utcOffset()-this.utcOffset())*c,E=this-y,j=function(){return f.m(o,y)};switch(_){case M:a=j()/12;break;case p:a=j();break;case h:a=j()/3;break;case C:a=(E-L)/6048e5;break;case Y:a=(E-L)/864e5;break;case s:a=E/w;break;case g:a=E/c;break;case l:a=E/1e3;break;default:a=E}return e?a:f.a(a)},r.daysInMonth=function(){return this.endOf(p).$D},r.$locale=function(){return U[this.$L]},r.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),a=P(t,i,!0);return a&&(e.$L=a),e},r.clone=function(){return f.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},u}(),N=I.prototype;return $.prototype=N,[["$ms",x],["$s",l],["$m",g],["$H",s],["$W",Y],["$M",p],["$y",M],["$D",m]].forEach(function(u){N[u[1]]=function(r){return this.$g(r,u[0],u[1])}}),$.extend=function(u,r){return u.$i||(u(r,I,$),u.$i=!0),$},$.locale=P,$.isDayjs=H,$.unix=function(u){return $(1e3*u)},$.en=U[O],$.Ls=U,$.p={},$}()},3634:function(A,T,c){A.exports=function(w){"use strict";var l=function x(s){return s&&"object"==typeof s&&"default"in s?s:{default:s}}(w),g={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},ordinal:function(s){return s+"\xba"}};return l.default.locale(g,null,!0),g}(c(1764))},3171:function(A){A.exports=function(){"use strict";var T={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(c,w,x){var l=w.prototype,g=l.format;x.en.formats=T,l.format=function(s){void 0===s&&(s="YYYY-MM-DDTHH:mm:ssZ");var h,Y=this.$locale().formats,C=(h=void 0===Y?{}:Y,s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(M,m,n){var d=n&&n.toUpperCase();return m||h[n]||T[n]||h[d].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(S,v,D){return v||D.slice(1)})}));return g.call(this,C)}}}()},1545:function(A){A.exports=function(){"use strict";var T={year:0,month:1,day:2,hour:3,minute:4,second:5},c={};return function(w,x,l){var g,s=function(h,M,m){void 0===m&&(m={});var n=new Date(h);return function(S,v){void 0===v&&(v={});var D=v.timeZoneName||"short",z=S+"|"+D,O=c[z];return O||(O=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:S,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:D}),c[z]=O),O}(M,m).formatToParts(n)},Y=function(h,M){for(var m=s(h,M),n=[],d=0;d<m.length;d+=1){var S=m[d],z=T[S.type];z>=0&&(n[z]=parseInt(S.value,10))}var O=n[3],P=+h;return(l.utc(n[0]+"-"+n[1]+"-"+n[2]+" "+(24===O?0:O)+":"+n[4]+":"+n[5]+":000").valueOf()-(P-=P%1e3))/6e4},C=x.prototype;C.tz=function(h,M){void 0===h&&(h=g);var m=this.utcOffset(),n=this.toDate(),d=n.toLocaleString("en-US",{timeZone:h}),S=Math.round((n-new Date(d))/1e3/60),v=l(d).$set("millisecond",this.$ms).utcOffset(15*-Math.round(n.getTimezoneOffset()/15)-S,!0);if(M){var D=v.utcOffset();v=v.add(m-D,"minute")}return v.$x.$timezone=h,v},C.offsetName=function(h){var M=this.$x.$timezone||l.tz.guess(),m=s(this.valueOf(),M,{timeZoneName:h}).find(function(n){return"timezonename"===n.type.toLowerCase()});return m&&m.value};var p=C.startOf;C.startOf=function(h,M){if(!this.$x||!this.$x.$timezone)return p.call(this,h,M);var m=l(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return p.call(m,h,M).tz(this.$x.$timezone,!0)},l.tz=function(h,M,m){var n=m&&M,d=m||M||g,S=Y(+l(),d);if("string"!=typeof h)return l(h).tz(d);var v=function(U,H,P){var $=U-60*H*1e3,f=Y($,P);if(H===f)return[$,H];var I=Y($-=60*(f-H)*1e3,P);return f===I?[$,f]:[U-60*Math.min(f,I)*1e3,Math.max(f,I)]}(l.utc(h,n).valueOf(),S,d),z=v[1],O=l(v[0]).utcOffset(z);return O.$x.$timezone=d,O},l.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},l.tz.setDefault=function(h){g=h}}}()},5268:function(A){A.exports=function(){"use strict";var T="minute",c=/[+-]\d\d(?::?\d\d)?/g,w=/([+-]|\d\d)/g;return function(x,l,g){var s=l.prototype;g.utc=function(n){return new l({date:n,utc:!0,args:arguments})},s.utc=function(n){var d=g(this.toDate(),{locale:this.$L,utc:!0});return n?d.add(this.utcOffset(),T):d},s.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var Y=s.parse;s.parse=function(n){n.utc&&(this.$u=!0),this.$utils().u(n.$offset)||(this.$offset=n.$offset),Y.call(this,n)};var C=s.init;s.init=function(){if(this.$u){var n=this.$d;this.$y=n.getUTCFullYear(),this.$M=n.getUTCMonth(),this.$D=n.getUTCDate(),this.$W=n.getUTCDay(),this.$H=n.getUTCHours(),this.$m=n.getUTCMinutes(),this.$s=n.getUTCSeconds(),this.$ms=n.getUTCMilliseconds()}else C.call(this)};var p=s.utcOffset;s.utcOffset=function(n,d){var S=this.$utils().u;if(S(n))return this.$u?0:S(this.$offset)?p.call(this):this.$offset;if("string"==typeof n&&null===(n=function(O){void 0===O&&(O="");var U=O.match(c);if(!U)return null;var H=(""+U[0]).match(w)||["-",0,0],$=60*+H[1]+ +H[2];return 0===$?0:"+"===H[0]?$:-$}(n)))return this;var v=Math.abs(n)<=16?60*n:n,D=this;if(d)return D.$offset=v,D.$u=0===n,D;if(0!==n){var z=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(D=this.local().add(v+z,T)).$offset=v,D.$x.$localOffset=z}else D=this.utc();return D};var h=s.format;s.format=function(n){return h.call(this,n||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":""))},s.valueOf=function(){var n=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*n},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var M=s.toDate;s.toDate=function(n){return"s"===n&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():M.call(this)};var m=s.diff;s.diff=function(n,d,S){if(n&&this.$u===n.$u)return m.call(this,n,d,S);var v=this.local(),D=g(n).local();return m.call(v,D,d,S)}}}()}}]);