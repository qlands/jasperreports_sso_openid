(self.webpackChunkjrs_ui=self.webpackChunkjrs_ui||[]).push([[9648],{79648:function(e,n,t){var r,s,o,u;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
//! moment.js locale configuration
u=function(e){"use strict";var n="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),t="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");function r(e){return e>1&&e<5&&1!=~~(e/10)}function s(e,n,t,s){var o=e+" ";switch(t){case"s":return n||s?"pár sekund":"pár sekundami";case"ss":return n||s?o+(r(e)?"sekundy":"sekund"):o+"sekundami";case"m":return n?"minuta":s?"minutu":"minutou";case"mm":return n||s?o+(r(e)?"minuty":"minut"):o+"minutami";case"h":return n?"hodina":s?"hodinu":"hodinou";case"hh":return n||s?o+(r(e)?"hodiny":"hodin"):o+"hodinami";case"d":return n||s?"den":"dnem";case"dd":return n||s?o+(r(e)?"dny":"dní"):o+"dny";case"M":return n||s?"měsíc":"měsícem";case"MM":return n||s?o+(r(e)?"měsíce":"měsíců"):o+"měsíci";case"y":return n||s?"rok":"rokem";case"yy":return n||s?o+(r(e)?"roky":"let"):o+"lety"}}return e.defineLocale("cs",{months:n,monthsShort:t,monthsParse:function(e,n){var t,r=[];for(t=0;t<12;t++)r[t]=new RegExp("^"+e[t]+"$|^"+n[t]+"$","i");return r}(n,t),shortMonthsParse:function(e){var n,t=[];for(n=0;n<12;n++)t[n]=new RegExp("^"+e[n]+"$","i");return t}(t),longMonthsParse:function(e){var n,t=[];for(n=0;n<12;n++)t[n]=new RegExp("^"+e[n]+"$","i");return t}(n),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s,ss:s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})},"object"===a(n)?u(t(12354)):(s=[t(12354)],void 0===(o="function"==typeof(r=u)?r.apply(n,s):r)||(e.exports=o))}}]);
//# sourceMappingURL=chunk.9648.js.map