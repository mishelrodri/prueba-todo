"use strict";(self.webpackChunkclinica_fmp_frontend=self.webpackChunkclinica_fmp_frontend||[]).push([[42],{6493:(j,A,S)=>{S.d(A,{Am:()=>T,DF:()=>x,Nh:()=>m,VM:()=>P,cP:()=>N});const T=/^[A-Za-z\xe1\xe9\xed\xf3\xfa\xfc\xf1\xc1\xc9\xcd\xd3\xda\xdc\xd1\s]+$/,m=/^[267][0-9-]+$/,P=/^[0-9-]+$/,N=/^[a-zA-Z0-9\s]+$/,x=/^[0-9]+$/},1094:(j,A,S)=>{S.d(A,{hx:()=>G,yI:()=>z});var T=S(5861),m=S(1571),P=S(433),N=S(6895);const x=new m.OlP("ngx-mask config"),O=new m.OlP("new ngx-mask config"),$=new m.OlP("initial ngx-mask config"),Z={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new m.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},B=["Hh:m0:s0","Hh:m0","m0:s0"],W=["percent","Hh","s0","m0","separator","d0/M0/0000","d0/M0","d0","M0"];let R=(()=>{class n{constructor(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(t,s,r,h)=>{let f=[],i="";if(Array.isArray(r)){const d=new RegExp(r.map(p=>"[\\^$.|?*+()".indexOf(p)>=0?`\\${p}`:p).join("|"));f=t.split(d),i=t.match(d)?.[0]??""}else f=t.split(r),i=r;const a=f.length>1?`${i}${f[1]}`:"";let l=f[0]??"";const g=this.separatorLimit.replace(/\s/g,"");g&&+g&&(l="-"===l[0]?`-${l.slice(1,l.length).slice(0,g.length)}`:l.slice(0,g.length));const u=/(\d+)(\d{3})/;for(;s&&u.test(l);)l=l.replace(u,"$1"+s+"$2");return void 0===h?l+a:0===h?l:l+a.substring(0,h+1)},this.percentage=t=>Number(t)>=0&&Number(t)<=100,this.getPrecision=t=>{const s=t.split(".");return s.length>1?Number(s[s.length-1]):1/0},this.checkAndRemoveSuffix=t=>{for(let s=this.suffix?.length-1;s>=0;s--){const r=this.suffix.substring(s,this.suffix?.length);if(t.includes(r)&&s!==this.suffix?.length-1&&(s-1<0||!t.includes(this.suffix.substring(s-1,this.suffix?.length))))return t.replace(r,"")}return t},this.checkInputPrecision=(t,s,r)=>{if(s<1/0){if(Array.isArray(r)){const a=r.find(l=>l!==this.thousandSeparator);r=a||r[0]}const h=new RegExp(this._charToRegExpExpression(r)+`\\d{${s}}.*$`),i=(t.match(h)??[])[0]?.length??0;i-1>s&&(t=t.substring(0,t.length-(i-1-s))),0===s&&this._compareOrIncludes(t[t.length-1],r,this.thousandSeparator)&&(t=t.substring(0,t.length-1))}return t},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime}applyMaskWithPattern(e,t){const[s,r]=t;return this.customPattern=r,this.applyMask(e,s)}applyMask(e,t,s=0,r=!1,h=!1,f=(()=>{})){if(!t||"string"!=typeof e)return"";let i=0,a="",l=!1,g=!1,u=1,d=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const p=e.toString().split("");if("IP"===t){const o=e.split(".");this.ipError=this._validIP(o),t="099.099.099.099"}const v=[];for(let o=0;o<e.length;o++)e[o]?.match("\\d")&&v.push(e[o]??"");if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==v.length&&14!==v.length,t=v.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const o=this.getPrecision(t);e=this.checkInputPrecision(e,o,this.decimalMarker)}e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))&&(e=`${e.substring(0,e.indexOf(".")-1)}${e.substring(e.indexOf("."),e.length)}`),a=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\]:";<>.?/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&e[1]!==this.thousandSeparator&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!h?e.slice(0,e.length-1):e,h&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const o=this._charToRegExpExpression(this.thousandSeparator);let c='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(o,"");if(Array.isArray(this.decimalMarker))for(const C of this.decimalMarker)c=c.replace(this._charToRegExpExpression(C),"");else c=c.replace(this._charToRegExpExpression(this.decimalMarker),"");const k=new RegExp("["+c+"]");(e.match(k)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const I=this.getPrecision(t),D=(e=this.checkInputPrecision(e,I,this.decimalMarker)).replace(new RegExp(o,"g"),"");a=this._formatWithSeparators(D,this.thousandSeparator,this.decimalMarker,I);const H=a.indexOf(",")-e.indexOf(","),M=a.length-e.length;if(M>0&&","!==a[s]){g=!0;let C=0;do{this._shift.add(s+C),C++}while(C<M)}else 0!==H&&s>0&&!(a.indexOf(",")>=s&&s>3)||!(a.indexOf(".")>=s&&s>3)&&M<=0?(this._shift.clear(),g=!0,u=M,this._shift.add(s+=M)):this._shift.clear()}else for(let o=0,c=p[0];o<p.length&&i!==t.length;o++,c=p[o]??"")if(this._checkSymbolMask(c,t[i]??"")&&"?"===t[i+1])a+=c,i+=2;else if("*"===t[i+1]&&l&&this._checkSymbolMask(c,t[i+2]??""))a+=c,i+=3,l=!1;else if(this._checkSymbolMask(c,t[i]??"")&&"*"===t[i+1])a+=c,l=!0;else if("?"===t[i+1]&&this._checkSymbolMask(c,t[i+2]??""))a+=c,i+=3;else if(this._checkSymbolMask(c,t[i]??"")){if("H"===t[i]&&Number(c)>2){i+=1,this._shiftStep(t,i,p.length),o--,this.leadZeroDateTime&&(a+="0");continue}if("h"===t[i]&&"2"===a&&Number(c)>3){i+=1,o--;continue}if("m"===t[i]&&Number(c)>5){i+=1,this._shiftStep(t,i,p.length),o--,this.leadZeroDateTime&&(a+="0");continue}if("s"===t[i]&&Number(c)>5){i+=1,this._shiftStep(t,i,p.length),o--,this.leadZeroDateTime&&(a+="0");continue}const k=31;if("d"===t[i]&&(Number(c)>3&&this.leadZeroDateTime||Number(e.slice(i,i+2))>k||"/"===e[i+1])){i+=1,this._shiftStep(t,i,p.length),o--,this.leadZeroDateTime&&(a+="0");continue}if("M"===t[i]){const D=0===i&&(Number(c)>2||Number(e.slice(i,i+2))>12||"/"===e[i+1]),H=e.slice(i-3,i-1).includes("/")&&("/"===e[i-2]&&Number(e.slice(i-1,i+1))>12&&"/"!==e[i]||"/"===e[i]||"/"===e[i-3]&&Number(e.slice(i-2,i))>12&&"/"!==e[i-1]||"/"===e[i-1]),M=Number(e.slice(i-3,i-1))<=k&&!e.slice(i-3,i-1).includes("/")&&"/"===e[i-1]&&(Number(e.slice(i,i+2))>12||"/"===e[i+1]),C=Number(e.slice(i-3,i-1))>k&&!e.slice(i-3,i-1).includes("/")&&!e.slice(i-2,i).includes("/")&&Number(e.slice(i-2,i))>12,U=Number(e.slice(i-3,i-1))<=k&&!e.slice(i-3,i-1).includes("/")&&"/"!==e[i-1]&&Number(e.slice(i-1,i+1))>12;if(Number(c)>1&&this.leadZeroDateTime||D||H||M||C||U){i+=1,this._shiftStep(t,i,p.length),o--,this.leadZeroDateTime&&(a+="0");continue}}a+=c,i++}else" "===c&&" "===t[i]?(a+=c,i++):-1!==this.maskSpecialCharacters.indexOf(t[i]??"")?(a+=t[i],i++,this._shiftStep(t,i,p.length),o--):this.maskSpecialCharacters.indexOf(c)>-1&&this.maskAvailablePatterns[t[i]??""]&&this.maskAvailablePatterns[t[i]??""]?.optional?(!!p[i]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(a+=p[i]),i++,o--):"*"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2]??"")&&this._findSpecialChar(c)===this.maskExpression[i+2]&&l||"?"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2]??"")&&this._findSpecialChar(c)===this.maskExpression[i+2]&&l?(i+=3,a+=c):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(c)<0&&c!==this.placeHolderCharacter&&(d=!0);a.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1]??"")&&(a+=t[t.length-1]);let y=s+1;for(;this._shift.has(y);)u++,y++;let w=r&&!t.startsWith("separator")?i:this._shift.has(s)?u:0;d&&w--,f(w,g),u<0&&this._shift.clear();let b=!1;h&&(b=p.every(o=>this.maskSpecialCharacters.includes(o)));let E=`${this.prefix}${b?"":a}${this.suffix}`;return 0===a.length&&(E=`${this.prefix}${a}`),E}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,(this.maskAvailablePatterns[t]?.pattern&&this.maskAvailablePatterns[t]?.pattern.test(e))??!1}_stripToDecimal(e){return e.split("").filter((t,s)=>{const r="string"==typeof this.decimalMarker?t===this.decimalMarker:this.decimalMarker.includes(t);return t.match("^-?\\d")||t===this.thousandSeparator||r||"-"===t&&0===s&&this.allowNegativeNumbers}).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,s){const r=/[*?]/g.test(e.slice(0,t))?s:t;this._shift.add(r+this.prefix.length||0)}_compareOrIncludes(e,t,s){return Array.isArray(t)?t.filter(r=>r!==s).includes(e):e===t}_validIP(e){return!(4===e.length&&!e.some((t,s)=>e.length!==s+1?""===t||Number(t)>255:""===t||Number(t.substring(0,3))>255))}}return n.\u0275fac=function(e){return new(e||n)(m.LFG(x))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac}),n})(),F=(()=>{class n extends R{constructor(e,t,s,r){super(t),this.document=e,this._config=t,this._elementRef=s,this._renderer=r,this.maskExpression="",this.isNumberValue=!1,this.placeHolderCharacter="_",this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this.triggerOnMaskChange=!1,this.onChange=h=>{}}applyMask(e,t,s=0,r=!1,h=!1,f=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const i=e&&"number"==typeof this.selStart?e[this.selStart]??"":"";let a="";if(void 0!==this.hiddenInput&&!this.writingValue){let d=this.actualValue.split("");""!==e&&d.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>d.length?d.splice(this.selStart,0,i):e.length<d.length&&(d.length-e.length==1?d.splice(this.selStart-1,1):d.splice(this.selStart,this.selEnd-this.selStart))):d=[],this.showMaskTyped&&(e=this.removeMask(e)),a=this.actualValue.length&&d.length<=e.length?this.shiftTypedSymbols(d.join("")):e}this.showMaskTyped&&(e=this.removeMask(e)),a=Boolean(a)&&a.length?a:e;const l=super.applyMask(a,t,s,r,h,f);if(this.actualValue=this.getActualValue(l),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(d=>!this._compareOrIncludes(d,this.decimalMarker,this.thousandSeparator))),this.formControlResult(l),!this.showMaskTyped)return this.hiddenInput&&l&&l.length?this.hideInput(l,this.maskExpression):l;const g=l.length,u=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const d=this._numberSkipedSymbols(l);return l+u.slice(g+d)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?l+u:l+u.slice(g)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let s=t.exec(e),r=0;for(;null!=s;)r+=1,s=t.exec(e);return r}applyValueChanges(e,t,s,r=(()=>{})){const h=this._elementRef.nativeElement;h.value=this.applyMask(h.value,this.maskExpression,e,t,s,r),h!==this._getActiveElement()&&this.clearIfNotMatchFn()}hideInput(e,t){return e.split("").map((s,r)=>this.maskAvailablePatterns&&this.maskAvailablePatterns[t[r]??""]&&this.maskAvailablePatterns[t[r]??""]?.symbol?this.maskAvailablePatterns[t[r]??""]?.symbol:s).join("")}getActualValue(e){const t=e.split("").filter((s,r)=>{const h=this.maskExpression[r]??"";return this._checkSymbolMask(s,h)||this.maskSpecialCharacters.includes(h)&&s===h});return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((r,h)=>{if(this.maskSpecialCharacters.includes(e[h+1]??"")&&e[h+1]!==this.maskExpression[h+1])return t=r,e[h+1];if(t.length){const f=t;return t="",f}return r})||[]).join("")}numberToString(e){return e||0===e?Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}):String(e)}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef.nativeElement;this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(/_/g,"").length&&(this.formElementProperty=["value",""],this.applyMask(e.value,this.maskExpression))}set formElementProperty([e,t]){Promise.resolve().then(()=>this._renderer.setProperty(this._elementRef.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(s=>this._findSpecialChar(s)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let s=0;s<e.length;s++){const r=e[s]??"";!r||r.match("\\d")&&t.push(r)}return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,s=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const r=[];for(let h=0;h<e.length;h++){const f=e[h]??"";!f||f.match("\\d")&&r.push(f)}return r.length<=3?t.slice(r.length,t.length):r.length>3&&r.length<=6?t.slice(r.length+1,t.length):r.length>6&&r.length<=9?t.slice(r.length+2,t.length):r.length>9&&r.length<11?t.slice(r.length+3,t.length):11===r.length?"":12===r.length?s.slice(17===e.length?16:15,s.length):r.length>12&&r.length<=14?s.slice(r.length+4,s.length):""}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){this.writingValue||!this.triggerOnMaskChange&&this.maskChanged?this.maskChanged=!1:Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))):this.onChange(this.dropSpecialCharacters?this._toNumber(this._checkSymbols(e)):this._removeSuffix(e))}_toNumber(e){if(!this.isNumberValue||""===e)return e;const t=Number(e);return Number.isNaN(t)?e:t}_removeMask(e,t){return e&&e.replace(this._regExpForRemove(t),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)}_regExpForRemove(e){return new RegExp(e.map(t=>`\\${t}`).join("|"),"gi")}_replaceDecimalMarkerToDot(e){const t=Array.isArray(this.decimalMarker)?this.decimalMarker:[this.decimalMarker];return e.replace(this._regExpForRemove(t),".")}_checkSymbols(e){if(""===e)return e;const t=this._retrieveSeparatorPrecision(this.maskExpression),s=this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(e));return this.isNumberValue?t?e===this.decimalMarker?null:this._checkPrecision(this.maskExpression,s):Number(s):s}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){return e.indexOf("2")>0?Number(t).toFixed(2):Number(t)}}return n.\u0275fac=function(e){return new(e||n)(m.LFG(N.K0),m.LFG(x),m.LFG(m.SBq),m.LFG(m.Qsj))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac}),n})(),G=(()=>{class n{constructor(e,t,s){this.document=e,this._maskService=t,this._config=s,this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.thousandSeparator=" ",this.decimalMarker=".",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.placeHolderCharacter=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this.separatorLimit=null,this.allowNegativeNumbers=null,this.leadZeroDateTime=null,this.triggerOnMaskChange=null,this.maskFilled=new m.vpe,this._maskValue="",this._position=null,this._maskExpressionArray=[],this._justPasted=!1,this.onChange=r=>{},this.onTouch=()=>{}}ngOnChanges(e){const{maskExpression:t,specialCharacters:s,patterns:r,prefix:h,suffix:f,thousandSeparator:i,decimalMarker:a,dropSpecialCharacters:l,hiddenInput:g,showMaskTyped:u,placeHolderCharacter:d,shownMaskExpression:p,showTemplate:v,clearIfNotMatch:y,validation:w,separatorLimit:b,allowNegativeNumbers:E,leadZeroDateTime:o,triggerOnMaskChange:c}=e;if(t&&(t.currentValue!==t.previousValue&&!t.firstChange&&(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split("||").length>1?(this._maskExpressionArray=t.currentValue.split("||").sort((k,I)=>k.length-I.length),this._setMask()):(this._maskExpressionArray=[],this._maskValue=t.currentValue||"",this._maskService.maskExpression=this._maskValue)),s){if(!s.currentValue||!Array.isArray(s.currentValue))return;this._maskService.maskSpecialCharacters=s.currentValue||[]}r&&r.currentValue&&(this._maskService.maskAvailablePatterns=r.currentValue),h&&(this._maskService.prefix=h.currentValue),f&&(this._maskService.suffix=f.currentValue),i&&(this._maskService.thousandSeparator=i.currentValue),a&&(this._maskService.decimalMarker=a.currentValue),l&&(this._maskService.dropSpecialCharacters=l.currentValue),g&&(this._maskService.hiddenInput=g.currentValue),u&&(this._maskService.showMaskTyped=u.currentValue),d&&(this._maskService.placeHolderCharacter=d.currentValue),p&&(this._maskService.shownMaskExpression=p.currentValue),v&&(this._maskService.showTemplate=v.currentValue),y&&(this._maskService.clearIfNotMatch=y.currentValue),w&&(this._maskService.validation=w.currentValue),b&&(this._maskService.separatorLimit=b.currentValue),E&&(this._maskService.allowNegativeNumbers=E.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.maskSpecialCharacters=this._maskService.maskSpecialCharacters.filter(k=>"-"!==k))),o&&(this._maskService.leadZeroDateTime=o.currentValue),c&&(this._maskService.triggerOnMaskChange=c.currentValue),this._applyMask()}validate({value:e}){if(!this._maskService.validation||!this._maskValue)return null;if(this._maskService.ipError)return this._createValidationError(e);if(this._maskService.cpfCnpjError)return this._createValidationError(e);if(this._maskValue.startsWith("separator")||W.includes(this._maskValue)||this._maskService.clearIfNotMatch)return null;if(B.includes(this._maskValue))return this._validateTime(e);if(e&&e.toString().length>=1){let t=0;for(const s in this._maskService.maskAvailablePatterns)if(this._maskService.maskAvailablePatterns[s]?.optional&&(this._maskValue.indexOf(s)!==this._maskValue.lastIndexOf(s)?t+=this._maskValue.split("").filter(h=>h===s).join("").length:-1!==this._maskValue.indexOf(s)&&t++,-1!==this._maskValue.indexOf(s)&&e.toString().length>=this._maskValue.indexOf(s)||t===this._maskValue.length))return null;if(1===this._maskValue.indexOf("{")&&e.toString().length===this._maskValue.length+Number((this._maskValue.split("{")[1]??"").split("}")[0])-4||1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?"))return null;if(this._maskValue.indexOf("*")>1&&e.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&e.toString().length<this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return this._createValidationError(e);if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){const s=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-t:this._maskValue.length-t;if(e.toString().length<s)return this._createValidationError(e)}}return e&&this.maskFilled.emit(),null}onPaste(){this._justPasted=!0}onModelChange(e){(""===e||null==e)&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(""))}onInput(e){const t=e.target;if(this._inputValue=t.value,this._setMask(),!this._maskValue)return void this.onChange(t.value);const s=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart;let r=0,h=!1;if(this._maskService.applyValueChanges(s,this._justPasted,"Backspace"===this._code||"Delete"===this._code,(i,a)=>{this._justPasted=!1,r=i,h=a}),this._getActiveElement()!==t)return;this._position=1===this._position&&1===this._inputValue.length?null:this._position;let f=this._position?this._inputValue.length+s+r:s+("Backspace"!==this._code||h?r:0);f>this._getActualInputLength()&&(f=this._getActualInputLength()),f<0&&(f=0),t.setSelectionRange(f,f),this._position=null}onBlur(){this._maskValue&&this._maskService.clearIfNotMatchFn(),this.onTouch()}onClick(e){if(!this._maskValue)return;const t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));const h=t&&(t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown);t&&t.value!==h&&(t.value=h),t&&(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length?t.selectionStart=this._maskService.prefix.length:t&&t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){if(!this._maskValue)return;this._code=e.code?e.code:e.key;const t=e.target;if(this._inputValue=t.value,this._setMask(),38===e.keyCode&&e.preventDefault(),37===e.keyCode||8===e.keyCode||46===e.keyCode){if(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0!==t.selectionStart)if(this.specialCharacters=this.specialCharacters?.length?this.specialCharacters:this._config.specialCharacters,this.prefix.length>1&&t.selectionStart<=this.prefix.length)t.setSelectionRange(this.prefix.length,t.selectionEnd);else if(this._inputValue.length!==t.selectionStart&&1!==t.selectionStart)for(;this.specialCharacters.includes((this._inputValue[t.selectionStart-1]??"").toString())&&(this.prefix.length>=1&&t.selectionStart>this.prefix.length||0===this.prefix.length);)t.setSelectionRange(t.selectionStart-1,t.selectionEnd);this.checkSelectionOnDeletion(t),this._maskService.prefix.length&&t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault();const s=t.selectionStart;8===e.keyCode&&!t.readOnly&&0===s&&t.selectionEnd===t.value.length&&0!==t.value.length&&(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position))}this.suffix&&this.suffix.length>1&&this._inputValue.length-this.suffix.length<t.selectionStart?t.setSelectionRange(this._inputValue.length-this.suffix.length,this._inputValue.length):(65===e.keyCode&&e.ctrlKey||65===e.keyCode&&e.metaKey)&&(t.setSelectionRange(0,this._getActualInputLength()),e.preventDefault()),this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd}writeValue(e){var t=this;return(0,T.Z)(function*(){"object"==typeof e&&null!==e&&"value"in e&&("disable"in e&&t.setDisabledState(Boolean(e.disable)),e=e.value),("number"==typeof e||t._maskValue.startsWith("separator"))&&(e=t._maskService.numberToString(e),Array.isArray(t.decimalMarker)||(e="."!==t.decimalMarker?e.replace(".",t.decimalMarker):e),t._maskService.isNumberValue=!0),"string"!=typeof e&&(e=""),t._inputValue=e,t._setMask(),e&&t._maskService.maskExpression||t._maskService.maskExpression&&(t._maskService.prefix||t._maskService.showMaskTyped)?(t._maskService.writingValue=!0,t._maskService.formElementProperty=["value",t._maskService.applyMask(e,t._maskService.maskExpression)],t._maskService.writingValue=!1):t._maskService.formElementProperty=["value",e],t._inputValue=e})()}registerOnChange(e){this._maskService.onChange=this.onChange=e}registerOnTouched(e){this.onTouch=e}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}checkSelectionOnDeletion(e){e.selectionStart=Math.min(Math.max(this.prefix.length,e.selectionStart),this._inputValue.length-this.suffix.length),e.selectionEnd=Math.min(Math.max(this.prefix.length,e.selectionEnd),this._inputValue.length-this.suffix.length)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,s,r)=>{if(this._start="{"===s?r:this._start,"}"!==s)return this._maskService._findSpecialChar(s)?t+s:t;this._end=r;const h=Number(e.slice(this._start+1,this._end));return t+new Array(h+1).join(e[this._start-1])},"")||e}_applyMask(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]}_validateTime(e){const t=this._maskValue.split("").filter(s=>":"!==s).length;return e&&(0==+(e[e.length-1]??-1)&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue,actualValue:e}}}_setMask(){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(e=>{const t=this._maskService.removeMask(this._inputValue)?.length<=this._maskService.removeMask(e)?.length;if(this._inputValue&&t)return this._maskValue=e,this.maskExpression=e,this._maskService.maskExpression=e,t;this._maskValue=this.maskExpression=this._maskService.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1]??""})}}return n.\u0275fac=function(e){return new(e||n)(m.Y36(N.K0),m.Y36(F),m.Y36(x))},n.\u0275dir=m.lG2({type:n,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(e,t){1&e&&m.NdJ("paste",function(){return t.onPaste()})("ngModelChange",function(r){return t.onModelChange(r)})("input",function(r){return t.onInput(r)})("blur",function(){return t.onBlur()})("click",function(r){return t.onClick(r)})("keydown",function(r){return t.onKeyDown(r)})},inputs:{maskExpression:["mask","maskExpression"],specialCharacters:"specialCharacters",patterns:"patterns",prefix:"prefix",suffix:"suffix",thousandSeparator:"thousandSeparator",decimalMarker:"decimalMarker",dropSpecialCharacters:"dropSpecialCharacters",hiddenInput:"hiddenInput",showMaskTyped:"showMaskTyped",placeHolderCharacter:"placeHolderCharacter",shownMaskExpression:"shownMaskExpression",showTemplate:"showTemplate",clearIfNotMatch:"clearIfNotMatch",validation:"validation",separatorLimit:"separatorLimit",allowNegativeNumbers:"allowNegativeNumbers",leadZeroDateTime:"leadZeroDateTime",triggerOnMaskChange:"triggerOnMaskChange"},outputs:{maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],features:[m._Bn([{provide:P.JU,useExisting:(0,m.Gpc)(()=>n),multi:!0},{provide:P.Cf,useExisting:(0,m.Gpc)(()=>n),multi:!0},F]),m.TTD]}),n})();function K(n,_){return _ instanceof Function?{...n,..._()}:{...n,..._}}let z=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[{provide:O,useValue:e},{provide:$,useValue:Z},{provide:x,useFactory:K,deps:[$,O]},R]}}static forChild(){return{ngModule:n}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=m.oAB({type:n}),n.\u0275inj=m.cJS({}),n})();const L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};L.KeyboardEvent||(L.KeyboardEvent=function(n,_){})}}]);