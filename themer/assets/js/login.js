!function(){function t(e,r,o){function n(a,s){if(!r[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=r[a]={exports:{}};e[a][0].call(c.exports,function(t){var r=e[a][1][t];return n(r||t)},c,c.exports,t,e,r,o)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)n(o[a]);return n}return t}()({1:[function(t,e,r){!function(t){t.fn.qrcode=function(e){function r(t){this.mode=s,this.data=t}function o(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function n(t,e){if(void 0==t.length)throw Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function i(t,e){this.totalCount=t,this.dataCount=e}function a(){this.buffer=[],this.length=0}var s;r.prototype={getLength:function(){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},o.prototype={addData:function(t){this.dataList.push(new r(t)),this.dataCache=null},isDark:function(t,e){if(0>t||this.moduleCount<=t||0>e||this.moduleCount<=e)throw Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){for(var t=1,t=1;40>t;t++){for(var e=i.getRSBlocks(t,this.errorCorrectLevel),r=new a,o=0,n=0;n<e.length;n++)o+=e[n].dataCount;for(n=0;n<this.dataList.length;n++)e=this.dataList[n],r.put(e.mode,4),r.put(e.getLength(),u.getLengthInBits(e.mode,t)),e.write(r);if(r.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),7<=this.typeNumber&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;7>=r;r++)if(!(-1>=t+r||this.moduleCount<=t+r))for(var o=-1;7>=o;o++)-1>=e+o||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&6>=r&&(0==o||6==o)||0<=o&&6>=o&&(0==r||6==r)||2<=r&&4>=r&&2<=o&&4>=o)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;8>r;r++){this.makeImpl(!0,r);var o=u.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){for(t=t.createEmptyMovieClip(e,r),this.make(),e=0;e<this.modules.length;e++)for(var r=1*e,o=0;o<this.modules[e].length;o++){var n=1*o;this.modules[e][o]&&(t.beginFill(0,100),t.moveTo(n,r),t.lineTo(n+1,r),t.lineTo(n+1,r+1),t.lineTo(n,r+1),t.endFill())}return t},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=0==t%2);for(t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=0==t%2)},setupPositionAdjustPattern:function(){for(var t=u.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;2>=i;i++)for(var a=-2;2>=a;a++)this.modules[o+i][n+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=u.getBCHTypeNumber(this.typeNumber),r=0;18>r;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;18>r;r++)o=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o},setupTypeInfo:function(t,e){for(var r=u.getBCHTypeInfo(this.errorCorrectLevel<<3|e),o=0;15>o;o++){var n=!t&&1==(r>>o&1);6>o?this.modules[o][8]=n:8>o?this.modules[o+1][8]=n:this.modules[this.moduleCount-15+o][8]=n}for(o=0;15>o;o++)n=!t&&1==(r>>o&1),8>o?this.modules[8][this.moduleCount-o-1]=n:9>o?this.modules[8][15-o-1+1]=n:this.modules[8][15-o-1]=n;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;0<a;a-=2)for(6==a&&a--;;){for(var s=0;2>s;s++)if(null==this.modules[o][a-s]){var l=!1;i<t.length&&(l=1==(t[i]>>>n&1)),u.getMask(e,o,a-s)&&(l=!l),this.modules[o][a-s]=l,n--,-1==n&&(i++,n=7)}if(0>(o+=r)||this.moduleCount<=o){o-=r,r=-r;break}}}},o.PAD0=236,o.PAD1=17,o.createData=function(t,e,r){for(var e=i.getRSBlocks(t,e),n=new a,s=0;s<r.length;s++){var l=r[s];n.put(l.mode,4),n.put(l.getLength(),u.getLengthInBits(l.mode,t)),l.write(n)}for(s=t=0;s<e.length;s++)t+=e[s].dataCount;if(n.getLengthInBits()>8*t)throw Error("code length overflow. ("+n.getLengthInBits()+">"+8*t+")");for(n.getLengthInBits()+4<=8*t&&n.put(0,4);0!=n.getLengthInBits()%8;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*t)&&(n.put(o.PAD0,8),!(n.getLengthInBits()>=8*t));)n.put(o.PAD1,8);return o.createBytes(n,e)},o.createBytes=function(t,e){for(var r=0,o=0,i=0,a=Array(e.length),s=Array(e.length),l=0;l<e.length;l++){var c=e[l].dataCount,h=e[l].totalCount-c,o=Math.max(o,c),i=Math.max(i,h);a[l]=Array(c);for(var d=0;d<a[l].length;d++)a[l][d]=255&t.buffer[d+r];for(r+=c,d=u.getErrorCorrectPolynomial(h),c=new n(a[l],d.getLength()-1).mod(d),s[l]=Array(d.getLength()-1),d=0;d<s[l].length;d++)h=d+c.getLength()-s[l].length,s[l][d]=0<=h?c.get(h):0}for(d=l=0;d<e.length;d++)l+=e[d].totalCount;for(r=Array(l),d=c=0;d<o;d++)for(l=0;l<e.length;l++)d<a[l].length&&(r[c++]=a[l][d]);for(d=0;d<i;d++)for(l=0;l<e.length;l++)d<s[l].length&&(r[c++]=s[l][d]);return r},s=4;for(var u={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;0<=u.getBCHDigit(e)-u.getBCHDigit(u.G15);)e^=u.G15<<u.getBCHDigit(e)-u.getBCHDigit(u.G15);return(t<<10|e)^u.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;0<=u.getBCHDigit(e)-u.getBCHDigit(u.G18);)e^=u.G18<<u.getBCHDigit(e)-u.getBCHDigit(u.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return u.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case 0:return 0==(e+r)%2;case 1:return 0==e%2;case 2:return 0==r%3;case 3:return 0==(e+r)%3;case 4:return 0==(Math.floor(e/2)+Math.floor(r/3))%2;case 5:return 0==e*r%2+e*r%3;case 6:return 0==(e*r%2+e*r%3)%2;case 7:return 0==(e*r%3+(e+r)%2)%2;default:throw Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new n([1],0),r=0;r<t;r++)e=e.multiply(new n([1,l.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&10>e)switch(t){case 1:return 10;case 2:return 9;case s:case 8:return 8;default:throw Error("mode:"+t)}else if(27>e)switch(t){case 1:return 12;case 2:return 11;case s:return 16;case 8:return 10;default:throw Error("mode:"+t)}else{if(!(41>e))throw Error("type:"+e);switch(t){case 1:return 14;case 2:return 13;case s:return 16;case 8:return 12;default:throw Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),s=-1;1>=s;s++)if(!(0>o+s||e<=o+s))for(var u=-1;1>=u;u++)0>n+u||e<=n+u||0==s&&0==u||a==t.isDark(o+s,n+u)&&i++;5<i&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++)i=0,t.isDark(o,n)&&i++,t.isDark(o+1,n)&&i++,t.isDark(o,n+1)&&i++,t.isDark(o+1,n+1)&&i++,(0==i||4==i)&&(r+=3);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);for(n=i=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&i++;return t=Math.abs(100*i/e/e-50)/5,r+10*t}},l={glog:function(t){if(1>t)throw Error("glog("+t+")");return l.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return l.EXP_TABLE[t]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},c=0;8>c;c++)l.EXP_TABLE[c]=1<<c;for(c=8;256>c;c++)l.EXP_TABLE[c]=l.EXP_TABLE[c-4]^l.EXP_TABLE[c-5]^l.EXP_TABLE[c-6]^l.EXP_TABLE[c-8];for(c=0;255>c;c++)l.LOG_TABLE[l.EXP_TABLE[c]]=c;return n.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=l.gexp(l.glog(this.get(r))+l.glog(t.get(o)));return new n(e,0)},mod:function(t){if(0>this.getLength()-t.getLength())return this;for(var e=l.glog(this.get(0))-l.glog(t.get(0)),r=Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=l.gexp(l.glog(t.get(o))+e);return new n(r,0).mod(t)}},i.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],i.getRSBlocks=function(t,e){var r=i.getRsBlockTable(t,e);if(void 0==r)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=[],a=0;a<o;a++)for(var s=r[3*a+0],u=r[3*a+1],l=r[3*a+2],c=0;c<s;c++)n.push(new i(u,l));return n},i.getRsBlockTable=function(t,e){switch(e){case 1:return i.RS_BLOCK_TABLE[4*(t-1)+0];case 0:return i.RS_BLOCK_TABLE[4*(t-1)+1];case 3:return i.RS_BLOCK_TABLE[4*(t-1)+2];case 2:return i.RS_BLOCK_TABLE[4*(t-1)+3]}},a.prototype={get:function(t){return 1==(this.buffer[Math.floor(t/8)]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},"string"==typeof e&&(e={text:e}),e=t.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:2,background:"#ffffff",foreground:"#000000"},e),this.each(function(){var r;if("canvas"==e.render){r=new o(e.typeNumber,e.correctLevel),r.addData(e.text),r.make();var n=document.createElement("canvas");n.width=e.width,n.height=e.height;for(var i=n.getContext("2d"),a=e.width/r.getModuleCount(),s=e.height/r.getModuleCount(),u=0;u<r.getModuleCount();u++)for(var l=0;l<r.getModuleCount();l++){i.fillStyle=r.isDark(u,l)?e.foreground:e.background;var c=Math.ceil((l+1)*a)-Math.floor(l*a),h=Math.ceil((u+1)*a)-Math.floor(u*a);i.fillRect(Math.round(l*a),Math.round(u*s),c,h)}}else for(r=new o(e.typeNumber,e.correctLevel),r.addData(e.text),r.make(),n=t("<table></table>").css("width",e.width+"px").css("height",e.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",e.background),i=e.width/r.getModuleCount(),a=e.height/r.getModuleCount(),s=0;s<r.getModuleCount();s++)for(u=t("<tr></tr>").css("height",a+"px").appendTo(n),l=0;l<r.getModuleCount();l++)t("<td></td>").css("width",i+"px").css("background-color",r.isDark(s,l)?e.foreground:e.background).appendTo(u);r=n,jQuery(r).appendTo(this)})}}(jQuery)},{}],2:[function(t,e,r){t("../../js/jquery.qrcode.min"),function(t){function e(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)"),r=e.exec(location.search);return null===r?"":decodeURIComponent(r[1].replace(/\+/g," "))}function r(e){t(".j-errmsg").html(e).slideDown(80)}function o(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?r:3&r|8).toString(16)})}function n(e){clearInterval(i),i=setInterval(function(){t.ajax({url:_wpcom_js.ajaxurl,type:"POST",dataType:"json",data:{action:"wpcom_wechat2_login_check",uuid:e},success:function(e){"0"==e.result?(clearInterval(i),window.location.href=e.redirect_to):"2"==e.result&&(clearInterval(i),t("#j-wechat-login-text").text("授权错误，请刷新页面重试！").css("color","red"))}})},3e3)}t(document).ready(function(){var a=null;if(t(".j-member-form").on("input change",".form-input",function(e){navigator.userAgent.indexOf("Chrome")>-1&&void 0!==e.originalEvent.data?(t(this).closest(".form-group").removeClass("error"),t(".j-errmsg").slideUp(80)):-1==navigator.userAgent.indexOf("Chrome")&&(t(this).closest(".form-group").removeClass("error"),t(".j-errmsg").slideUp(80))}).on("focus",".form-input",function(){t(this).closest(".form-group").addClass("active")}).on("blur",".form-input",function(){t(this).closest(".form-group").removeClass("active")}),t(".member-form-social").on("click",".social-wechat2 a",function(e){if(!/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)){e.preventDefault();var r=o(),a=t(this).attr("href")+"&uuid="+r;if(t("#wechat-qrcode-modal").length)t("#j-wechat-login-code").html("").qrcode({text:a});else{t("body").append('<div class="modal in" id="wechat-qrcode-modal" data-backdrop="static">\n    <div class="modal-dialog modal-sm">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>\n                <h4 class="modal-title">微信登录</h4>\n            </div>\n            <div class="modal-body wechat-qrcode-body">\n                <p id="j-wechat-login-code"></p>\n                <p id="j-wechat-login-text">请使用微信扫描二维码登录</p>\n            </div>\n        </div>\n    </div>\n</div>'),t("#j-wechat-login-code").qrcode({text:a}),t("#wechat-qrcode-modal").on("hide.bs.modal",function(){clearInterval(i)})}t("#wechat-qrcode-modal").modal("show"),n(r)}}),t(".j-member-form").submit(function(o){o.preventDefault(),t(".form-group .form-input").attr("autocomplete","off");var n=t("#submit");n.button("loading");var i=t(this),s=!1,u=t(".form-group .require");if(u.length&&u.each(function(){var e=t(this);""==t.trim(e.val())&&(e.closest(".form-group").addClass("error"),s=!0)}),s||t(".form-group .form-input").each(function(){var e=t(this),o=e.data("rule"),n=e.val();if(o){var i=o.split(" ");t.each(i,function(e,o){var i=o.split(":"),a=i[0],u=void 0!==i[1]?i[1]:"";switch(a){case"email":var l=/\S+@\S+\.\S+/;l.test(n)||(s=!0,r(void 0!==_wpcom_js.errors?_wpcom_js.errors.email:""));break;case"password":u&&t(".form-group input[name="+u+"]").val()!=n?(s=!0,r(void 0!==_wpcom_js.errors?_wpcom_js.errors.passcheck:"")):""==u&&(n.length<6||n.length>32)&&(s=!0,r(void 0!==_wpcom_js.errors?_wpcom_js.errors.password:""));break;case"phone":var l=/^1[3|4|5|7|8|9][0-9]{9}$/;l.test(n)||(s=!0,r(void 0!==_wpcom_js.errors?_wpcom_js.errors.phone:""))}if(s)return!1})}if(s)return!1}),s)n.button("reset");else if(""==i.find("#csessionid").val())r(void 0!==_wpcom_js.errors?_wpcom_js.errors.slide_verify:""),n.button("reset");else{var l=t(this).attr("id");l=l.replace(/-form/i,""),t.ajax({url:_wpcom_js.ajaxurl,type:"POST",dataType:"json",data:i.serialize()+"&action=wpcom_"+l,success:function(o){if(void 0!==o.result&&"1"==o.result){if(location.search.indexOf("interim-login=1")>-1)window.parent.jQuery("#wp-auth-check-wrap").addClass("hidden"),window.parent.jQuery("body").removeClass("modal-open"),window.parent.jQuery(window).off("beforeunload.wp-auth-check");else{var i=e("redirect_to");void 0!==o.redirect_to?window.location.href=o.redirect_to:i?window.location.href=i:window.location.reload()}n.button("reset")}else void 0!==o.error?(r(o.error),n.button("reset"),a&&(a.reload(),t("#csessionid").val(""))):(n.button("reset"),a&&(a.reload(),t("#csessionid").val("")))},error:function(){n.button("reset"),a&&(a.reload(),t("#csessionid").val("")),r(void 0!==_wpcom_js.errors?_wpcom_js.errors.req_error:"")}})}}),void 0!==_wpcom_js.noCaptcha&&t("#j-nc").length){var s;s="cn"!=_wpcom_js.noCaptcha.language?"//aeis.alicdn.com/sd/ncpc/nc.js?t=2015052012":"//g.alicdn.com/sd/ncpc/nc.js?t=2015052012",t.getScript(s,function(e,r,o){if("success"==r){var n=[_wpcom_js.noCaptcha.appkey,(new Date).getTime(),Math.random()].join(":"),i={renderTo:"#j-nc",appkey:_wpcom_js.noCaptcha.appkey,scene:void 0!==_wpcom_js.noCaptcha.scene?_wpcom_js.noCaptcha.scene:"nc_login",token:n,language:_wpcom_js.noCaptcha.language,customWidth:"auto",callback:function(e){document.getElementById("csessionid").value=e.csessionid,document.getElementById("sig").value=e.sig,document.getElementById("token").value=n,document.getElementById("scene").value=void 0!==_wpcom_js.noCaptcha.scene?_wpcom_js.noCaptcha.scene:"nc_login",t(".j-errmsg").slideUp(80)}};a=new noCaptcha(i)}})}});var i=null}(jQuery)},{"../../js/jquery.qrcode.min":1}]},{},[2]);