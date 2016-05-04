riot.tag2('list', '<div id="people"> <div class="{cf: true,         person: true,         focus: _.map(focusPeople, \'name\').indexOf(v.name) > -1}" each="{v in visiblePeople}" id="{v.hash}" onclick="{focusFromName.bind(null, v)}"> <div class="person-location"> From {v.location} <div class="person-flag" riot-style="background-image: url(https://lipis.github.io/flag-icon-css/flags/4x3/{v.countryCode}.svg)"></div> </div> <div class="person-name">{v.name}</div> </div> </div>', 'list .people,[riot-tag="list"] .people,[data-is="list"] .people{ } list .person,[riot-tag="list"] .person,[data-is="list"] .person{ padding: 10px; color: #999; font-size: 13px; border-bottom: 1px solid #ccc; } list .person.focus,[riot-tag="list"] .person.focus,[data-is="list"] .person.focus{ color: #357cfe; } list .person:not(.focus):hover,[riot-tag="list"] .person:not(.focus):hover,[data-is="list"] .person:not(.focus):hover{ cursor: pointer; background: #f5f5f5; } list .person.focus .person-location,[riot-tag="list"] .person.focus .person-location,[data-is="list"] .person.focus .person-location{ color: #7c9ad0; } list .person-location,[riot-tag="list"] .person-location,[data-is="list"] .person-location{ color: #999; font-size: 10px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.6px; } list .person-flag,[riot-tag="list"] .person-flag,[data-is="list"] .person-flag{ display: inline-block; margin: 0 0 -4px 2px; width: 20px; height: 15px; background-size: contain; border-radius: 2px; } list .person-name,[riot-tag="list"] .person-name,[data-is="list"] .person-name{ font-weight: bold; }', '', function(opts) {

    (function(){var n;function e(n){var e,t,r="",o=-1,f;if(n&&n.length){f=n.length;while((o+=1)<f){e=n.charCodeAt(o);t=o+1<f?n.charCodeAt(o+1):0;if(55296<=e&&e<=56319&&56320<=t&&t<=57343){e=65536+((e&1023)<<10)+(t&1023);o+=1}if(e<=127){r+=String.fromCharCode(e)}else if(e<=2047){r+=String.fromCharCode(192|e>>>6&31,128|e&63)}else if(e<=65535){r+=String.fromCharCode(224|e>>>12&15,128|e>>>6&63,128|e&63)}else if(e<=2097151){r+=String.fromCharCode(240|e>>>18&7,128|e>>>12&63,128|e>>>6&63,128|e&63)}}}return r}function t(n){var e,t,r,o,f,i=[],h;e=t=r=o=f=0;if(n&&n.length){h=n.length;n+="";while(e<h){r=n.charCodeAt(e);t+=1;if(r<128){i[t]=String.fromCharCode(r);e+=1}else if(r>191&&r<224){o=n.charCodeAt(e+1);i[t]=String.fromCharCode((r&31)<<6|o&63);e+=2}else{o=n.charCodeAt(e+1);f=n.charCodeAt(e+2);i[t]=String.fromCharCode((r&15)<<12|(o&63)<<6|f&63);e+=3}}}return i.join("")}function r(n,e){var t=(n&65535)+(e&65535),r=(n>>16)+(e>>16)+(t>>16);return r<<16|t&65535}function o(n,e){return n<<e|n>>>32-e}function f(n,e){var t=e?"0123456789ABCDEF":"0123456789abcdef",r="",o,f=0,i=n.length;for(;f<i;f+=1){o=n.charCodeAt(f);r+=t.charAt(o>>>4&15)+t.charAt(o&15)}return r}function i(n){var e,t=n.length,r="";for(e=0;e<t;e+=1){r+=String.fromCharCode(n.charCodeAt(e)&255,n.charCodeAt(e)>>>8&255)}return r}function h(n){var e,t=n.length,r="";for(e=0;e<t;e+=1){r+=String.fromCharCode(n.charCodeAt(e)>>>8&255,n.charCodeAt(e)&255)}return r}function u(n){var e,t=n.length*32,r="";for(e=0;e<t;e+=8){r+=String.fromCharCode(n[e>>5]>>>24-e%32&255)}return r}function a(n){var e,t=n.length*32,r="";for(e=0;e<t;e+=8){r+=String.fromCharCode(n[e>>5]>>>e%32&255)}return r}function c(n){var e,t=n.length*8,r=Array(n.length>>2),o=r.length;for(e=0;e<o;e+=1){r[e]=0}for(e=0;e<t;e+=8){r[e>>5]|=(n.charCodeAt(e/8)&255)<<e%32}return r}function l(n){var e,t=n.length*8,r=Array(n.length>>2),o=r.length;for(e=0;e<o;e+=1){r[e]=0}for(e=0;e<t;e+=8){r[e>>5]|=(n.charCodeAt(e/8)&255)<<24-e%32}return r}function D(n,e){var t=e.length,r=Array(),o,f,i,h,u,a,c,l;a=Array(Math.ceil(n.length/2));h=a.length;for(o=0;o<h;o+=1){a[o]=n.charCodeAt(o*2)<<8|n.charCodeAt(o*2+1)}while(a.length>0){u=Array();i=0;for(o=0;o<a.length;o+=1){i=(i<<16)+a[o];f=Math.floor(i/t);i-=f*t;if(u.length>0||f>0){u[u.length]=f}}r[r.length]=i;a=u}c="";for(o=r.length-1;o>=0;o--){c+=e.charAt(r[o])}l=Math.ceil(n.length*8/(Math.log(e.length)/Math.log(2)));for(o=c.length;o<l;o+=1){c=e[0]+c}return c}function B(n,e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r="",o=n.length,f,i,h;e=e||"=";for(f=0;f<o;f+=3){h=n.charCodeAt(f)<<16|(f+1<o?n.charCodeAt(f+1)<<8:0)|(f+2<o?n.charCodeAt(f+2):0);for(i=0;i<4;i+=1){if(f*8+i*6>n.length*8){r+=e}else{r+=t.charAt(h>>>6*(3-i)&63)}}}return r}n={VERSION:"1.0.5",Base64:function(){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r="=",o=false,f=true;this.encode=function(t){var o,i,h,u="",a=t.length;r=r||"=";t=f?e(t):t;for(o=0;o<a;o+=3){h=t.charCodeAt(o)<<16|(o+1<a?t.charCodeAt(o+1)<<8:0)|(o+2<a?t.charCodeAt(o+2):0);for(i=0;i<4;i+=1){if(o*8+i*6>a*8){u+=r}else{u+=n.charAt(h>>>6*(3-i)&63)}}}return u};this.decode=function(e){var o,i,h,u,a,c,l,D,B,C,A="",s=[];if(!e){return e}o=C=0;e=e.replace(new RegExp("\\"+r,"gi"),"");do{a=n.indexOf(e.charAt(o+=1));c=n.indexOf(e.charAt(o+=1));l=n.indexOf(e.charAt(o+=1));D=n.indexOf(e.charAt(o+=1));B=a<<18|c<<12|l<<6|D;i=B>>16&255;h=B>>8&255;u=B&255;C+=1;if(l===64){s[C]=String.fromCharCode(i)}else if(D===64){s[C]=String.fromCharCode(i,h)}else{s[C]=String.fromCharCode(i,h,u)}}while(o<e.length);A=s.join("");A=f?t(A):A;return A};this.setPad=function(n){r=n||r;return this};this.setTab=function(e){n=e||n;return this};this.setUTF8=function(n){if(typeof n==="boolean"){f=n}return this}},CRC32:function(n){var t=0,r=0,o=0,f,i,h;n=e(n);f=["00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 ","79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 ","84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F ","63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD ","A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC ","51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 ","B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 ","06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 ","E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 ","12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 ","D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 ","33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 ","CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 ","9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E ","7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D ","806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 ","60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA ","AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 ","5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 ","B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 ","05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 ","F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA ","11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 ","D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F ","30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E ","C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"].join("");t=t^-1;for(i=0,h=n.length;i<h;i+=1){o=(t^n.charCodeAt(i))&255;r="0x"+f.substr(o*9,8);t=t>>>8^r}return(t^-1)>>>0},MD5:function(n){var t=n&&typeof n.uppercase==="boolean"?n.uppercase:false,i=n&&typeof n.pad==="string"?n.pda:"=",h=n&&typeof n.utf8==="boolean"?n.utf8:true;this.hex=function(n){return f(u(n,h),t)};this.b64=function(n){return B(u(n),i)};this.any=function(n,e){return D(u(n,h),e)};this.raw=function(n){return u(n,h)};this.hex_hmac=function(n,e){return f(l(n,e),t)};this.b64_hmac=function(n,e){return B(l(n,e),i)};this.any_hmac=function(n,e,t){return D(l(n,e),t)};this.vm_test=function(){return hex("abc").toLowerCase()==="900150983cd24fb0d6963f7d28e17f72"};this.setUpperCase=function(n){if(typeof n==="boolean"){t=n}return this};this.setPad=function(n){i=n||i;return this};this.setUTF8=function(n){if(typeof n==="boolean"){h=n}return this};function u(n){n=h?e(n):n;return a(C(c(n),n.length*8))}function l(n,t){var r,o,f,i,u;n=h?e(n):n;t=h?e(t):t;r=c(n);if(r.length>16){r=C(r,n.length*8)}o=Array(16),f=Array(16);for(u=0;u<16;u+=1){o[u]=r[u]^909522486;f[u]=r[u]^1549556828}i=C(o.concat(c(t)),512+t.length*8);return a(C(f.concat(i),512+128))}function C(n,e){var t,o,f,i,h,u=1732584193,a=-271733879,c=-1732584194,l=271733878;n[e>>5]|=128<<e%32;n[(e+64>>>9<<4)+14]=e;for(t=0;t<n.length;t+=16){o=u;f=a;i=c;h=l;u=s(u,a,c,l,n[t+0],7,-680876936);l=s(l,u,a,c,n[t+1],12,-389564586);c=s(c,l,u,a,n[t+2],17,606105819);a=s(a,c,l,u,n[t+3],22,-1044525330);u=s(u,a,c,l,n[t+4],7,-176418897);l=s(l,u,a,c,n[t+5],12,1200080426);c=s(c,l,u,a,n[t+6],17,-1473231341);a=s(a,c,l,u,n[t+7],22,-45705983);u=s(u,a,c,l,n[t+8],7,1770035416);l=s(l,u,a,c,n[t+9],12,-1958414417);c=s(c,l,u,a,n[t+10],17,-42063);a=s(a,c,l,u,n[t+11],22,-1990404162);u=s(u,a,c,l,n[t+12],7,1804603682);l=s(l,u,a,c,n[t+13],12,-40341101);c=s(c,l,u,a,n[t+14],17,-1502002290);a=s(a,c,l,u,n[t+15],22,1236535329);u=w(u,a,c,l,n[t+1],5,-165796510);l=w(l,u,a,c,n[t+6],9,-1069501632);c=w(c,l,u,a,n[t+11],14,643717713);a=w(a,c,l,u,n[t+0],20,-373897302);u=w(u,a,c,l,n[t+5],5,-701558691);l=w(l,u,a,c,n[t+10],9,38016083);c=w(c,l,u,a,n[t+15],14,-660478335);a=w(a,c,l,u,n[t+4],20,-405537848);u=w(u,a,c,l,n[t+9],5,568446438);l=w(l,u,a,c,n[t+14],9,-1019803690);c=w(c,l,u,a,n[t+3],14,-187363961);a=w(a,c,l,u,n[t+8],20,1163531501);u=w(u,a,c,l,n[t+13],5,-1444681467);l=w(l,u,a,c,n[t+2],9,-51403784);c=w(c,l,u,a,n[t+7],14,1735328473);a=w(a,c,l,u,n[t+12],20,-1926607734);u=F(u,a,c,l,n[t+5],4,-378558);l=F(l,u,a,c,n[t+8],11,-2022574463);c=F(c,l,u,a,n[t+11],16,1839030562);a=F(a,c,l,u,n[t+14],23,-35309556);u=F(u,a,c,l,n[t+1],4,-1530992060);l=F(l,u,a,c,n[t+4],11,1272893353);c=F(c,l,u,a,n[t+7],16,-155497632);a=F(a,c,l,u,n[t+10],23,-1094730640);u=F(u,a,c,l,n[t+13],4,681279174);l=F(l,u,a,c,n[t+0],11,-358537222);c=F(c,l,u,a,n[t+3],16,-722521979);a=F(a,c,l,u,n[t+6],23,76029189);u=F(u,a,c,l,n[t+9],4,-640364487);l=F(l,u,a,c,n[t+12],11,-421815835);c=F(c,l,u,a,n[t+15],16,530742520);a=F(a,c,l,u,n[t+2],23,-995338651);u=E(u,a,c,l,n[t+0],6,-198630844);l=E(l,u,a,c,n[t+7],10,1126891415);c=E(c,l,u,a,n[t+14],15,-1416354905);a=E(a,c,l,u,n[t+5],21,-57434055);u=E(u,a,c,l,n[t+12],6,1700485571);l=E(l,u,a,c,n[t+3],10,-1894986606);c=E(c,l,u,a,n[t+10],15,-1051523);a=E(a,c,l,u,n[t+1],21,-2054922799);u=E(u,a,c,l,n[t+8],6,1873313359);l=E(l,u,a,c,n[t+15],10,-30611744);c=E(c,l,u,a,n[t+6],15,-1560198380);a=E(a,c,l,u,n[t+13],21,1309151649);u=E(u,a,c,l,n[t+4],6,-145523070);l=E(l,u,a,c,n[t+11],10,-1120210379);c=E(c,l,u,a,n[t+2],15,718787259);a=E(a,c,l,u,n[t+9],21,-343485551);u=r(u,o);a=r(a,f);c=r(c,i);l=r(l,h)}return Array(u,a,c,l)}function A(n,e,t,f,i,h){return r(o(r(r(e,n),r(f,h)),i),t)}function s(n,e,t,r,o,f,i){return A(e&t|~e&r,n,e,o,f,i)}function w(n,e,t,r,o,f,i){return A(e&r|t&~r,n,e,o,f,i)}function F(n,e,t,r,o,f,i){return A(e^t^r,n,e,o,f,i)}function E(n,e,t,r,o,f,i){return A(t^(e|~r),n,e,o,f,i)}},SHA1:function(n){var t=n&&typeof n.uppercase==="boolean"?n.uppercase:false,i=n&&typeof n.pad==="string"?n.pda:"=",h=n&&typeof n.utf8==="boolean"?n.utf8:true;this.hex=function(n){return f(a(n,h),t)};this.b64=function(n){return B(a(n,h),i)};this.any=function(n,e){return D(a(n,h),e)};this.raw=function(n){return a(n,h)};this.hex_hmac=function(n,e){return f(c(n,e))};this.b64_hmac=function(n,e){return B(c(n,e),i)};this.any_hmac=function(n,e,t){return D(c(n,e),t)};this.vm_test=function(){return hex("abc").toLowerCase()==="900150983cd24fb0d6963f7d28e17f72"};this.setUpperCase=function(n){if(typeof n==="boolean"){t=n}return this};this.setPad=function(n){i=n||i;return this};this.setUTF8=function(n){if(typeof n==="boolean"){h=n}return this};function a(n){n=h?e(n):n;return u(C(l(n),n.length*8))}function c(n,t){var r,o,f,i,a;n=h?e(n):n;t=h?e(t):t;r=l(n);if(r.length>16){r=C(r,n.length*8)}o=Array(16),f=Array(16);for(i=0;i<16;i+=1){o[i]=r[i]^909522486;f[i]=r[i]^1549556828}a=C(o.concat(l(t)),512+t.length*8);return u(C(f.concat(a),512+160))}function C(n,e){var t,f,i,h,u,a,c,l,D=Array(80),B=1732584193,C=-271733879,w=-1732584194,F=271733878,E=-1009589776;n[e>>5]|=128<<24-e%32;n[(e+64>>9<<4)+15]=e;for(t=0;t<n.length;t+=16){h=B,u=C;a=w;c=F;l=E;for(f=0;f<80;f+=1){if(f<16){D[f]=n[t+f]}else{D[f]=o(D[f-3]^D[f-8]^D[f-14]^D[f-16],1)}i=r(r(o(B,5),A(f,C,w,F)),r(r(E,D[f]),s(f)));E=F;F=w;w=o(C,30);C=B;B=i}B=r(B,h);C=r(C,u);w=r(w,a);F=r(F,c);E=r(E,l)}return Array(B,C,w,F,E)}function A(n,e,t,r){if(n<20){return e&t|~e&r}if(n<40){return e^t^r}if(n<60){return e&t|e&r|t&r}return e^t^r}function s(n){return n<20?1518500249:n<40?1859775393:n<60?-1894007588:-899497514}},SHA256:function(n){var t=n&&typeof n.uppercase==="boolean"?n.uppercase:false,o=n&&typeof n.pad==="string"?n.pda:"=",i=n&&typeof n.utf8==="boolean"?n.utf8:true,h;this.hex=function(n){return f(a(n,i))};this.b64=function(n){return B(a(n,i),o)};this.any=function(n,e){return D(a(n,i),e)};this.raw=function(n){return a(n,i)};this.hex_hmac=function(n,e){return f(c(n,e))};this.b64_hmac=function(n,e){return B(c(n,e),o)};this.any_hmac=function(n,e,t){return D(c(n,e),t)};this.vm_test=function(){return hex("abc").toLowerCase()==="900150983cd24fb0d6963f7d28e17f72"};this.setUpperCase=function(n){if(typeof n==="boolean"){t=n}return this};this.setPad=function(n){o=n||o;return this};this.setUTF8=function(n){if(typeof n==="boolean"){i=n}return this};function a(n,t){n=t?e(n):n;return u(m(l(n),n.length*8))}function c(n,t){n=i?e(n):n;t=i?e(t):t;var r,o=0,f=l(n),h=Array(16),a=Array(16);if(f.length>16){f=m(f,n.length*8)}for(;o<16;o+=1){h[o]=f[o]^909522486;a[o]=f[o]^1549556828}r=m(h.concat(l(t)),512+t.length*8);return u(m(a.concat(r),512+256))}function C(n,e){return n>>>e|n<<32-e}function A(n,e){return n>>>e}function s(n,e,t){return n&e^~n&t}function w(n,e,t){return n&e^n&t^e&t}function F(n){return C(n,2)^C(n,13)^C(n,22)}function E(n){return C(n,6)^C(n,11)^C(n,25)}function d(n){return C(n,7)^C(n,18)^A(n,3)}function g(n){return C(n,17)^C(n,19)^A(n,10)}function p(n){return C(n,28)^C(n,34)^C(n,39)}function y(n){return C(n,14)^C(n,18)^C(n,41)}function b(n){return C(n,1)^C(n,8)^A(n,7)}function v(n){return C(n,19)^C(n,61)^A(n,6)}h=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998];function m(n,e){var t=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225];var o=new Array(64);var f,i,u,a,c,l,D,B;var C,A,p,y;n[e>>5]|=128<<24-e%32;n[(e+64>>9<<4)+15]=e;for(C=0;C<n.length;C+=16){f=t[0];i=t[1];u=t[2];a=t[3];c=t[4];l=t[5];D=t[6];B=t[7];for(A=0;A<64;A+=1){if(A<16){o[A]=n[A+C]}else{o[A]=r(r(r(g(o[A-2]),o[A-7]),d(o[A-15])),o[A-16])}p=r(r(r(r(B,E(c)),s(c,l,D)),h[A]),o[A]);y=r(F(f),w(f,i,u));B=D;D=l;l=c;c=r(a,p);a=u;u=i;i=f;f=r(p,y)}t[0]=r(f,t[0]);t[1]=r(i,t[1]);t[2]=r(u,t[2]);t[3]=r(a,t[3]);t[4]=r(c,t[4]);t[5]=r(l,t[5]);t[6]=r(D,t[6]);t[7]=r(B,t[7])}return t}},SHA512:function(n){var t=n&&typeof n.uppercase==="boolean"?n.uppercase:false,r=n&&typeof n.pad==="string"?n.pda:"=",o=n&&typeof n.utf8==="boolean"?n.utf8:true,i;this.hex=function(n){return f(h(n))};this.b64=function(n){return B(h(n),r)};this.any=function(n,e){return D(h(n),e)};this.raw=function(n){return h(n,o)};this.hex_hmac=function(n,e){return f(a(n,e))};this.b64_hmac=function(n,e){return B(a(n,e),r)};this.any_hmac=function(n,e,t){return D(a(n,e),t)};this.vm_test=function(){return hex("abc").toLowerCase()==="900150983cd24fb0d6963f7d28e17f72"};this.setUpperCase=function(n){if(typeof n==="boolean"){t=n}return this};this.setPad=function(n){r=n||r;return this};this.setUTF8=function(n){if(typeof n==="boolean"){o=n}return this};function h(n){n=o?e(n):n;return u(c(l(n),n.length*8))}function a(n,t){n=o?e(n):n;t=o?e(t):t;var r,f=0,i=l(n),h=Array(32),a=Array(32);if(i.length>32){i=c(i,n.length*8)}for(;f<32;f+=1){h[f]=i[f]^909522486;a[f]=i[f]^1549556828}r=c(h.concat(l(t)),1024+t.length*8);return u(c(a.concat(r),1024+512))}function c(n,e){var t,r,o,f=new Array(80),h=new Array(16),u=[new C(1779033703,-205731576),new C(-1150833019,-2067093701),new C(1013904242,-23791573),new C(-1521486534,1595750129),new C(1359893119,-1377402159),new C(-1694144372,725511199),new C(528734635,-79577749),new C(1541459225,327033209)],a=new C(0,0),c=new C(0,0),l=new C(0,0),D=new C(0,0),B=new C(0,0),p=new C(0,0),y=new C(0,0),b=new C(0,0),v=new C(0,0),m=new C(0,0),x=new C(0,0),_=new C(0,0),S=new C(0,0),U=new C(0,0),j=new C(0,0),M=new C(0,0),T=new C(0,0);if(i===undefined){i=[new C(1116352408,-685199838),new C(1899447441,602891725),new C(-1245643825,-330482897),new C(-373957723,-2121671748),new C(961987163,-213338824),new C(1508970993,-1241133031),new C(-1841331548,-1357295717),new C(-1424204075,-630357736),new C(-670586216,-1560083902),new C(310598401,1164996542),new C(607225278,1323610764),new C(1426881987,-704662302),new C(1925078388,-226784913),new C(-2132889090,991336113),new C(-1680079193,633803317),new C(-1046744716,-815192428),new C(-459576895,-1628353838),new C(-272742522,944711139),new C(264347078,-1953704523),new C(604807628,2007800933),new C(770255983,1495990901),new C(1249150122,1856431235),new C(1555081692,-1119749164),new C(1996064986,-2096016459),new C(-1740746414,-295247957),new C(-1473132947,766784016),new C(-1341970488,-1728372417),new C(-1084653625,-1091629340),new C(-958395405,1034457026),new C(-710438585,-1828018395),new C(113926993,-536640913),new C(338241895,168717936),new C(666307205,1188179964),new C(773529912,1546045734),new C(1294757372,1522805485),new C(1396182291,-1651133473),new C(1695183700,-1951439906),new C(1986661051,1014477480),new C(-2117940946,1206759142),new C(-1838011259,344077627),new C(-1564481375,1290863460),new C(-1474664885,-1136513023),new C(-1035236496,-789014639),new C(-949202525,106217008),new C(-778901479,-688958952),new C(-694614492,1432725776),new C(-200395387,1467031594),new C(275423344,851169720),new C(430227734,-1194143544),new C(506948616,1363258195),new C(659060556,-544281703),new C(883997877,-509917016),new C(958139571,-976659869),new C(1322822218,-482243893),new C(1537002063,2003034995),new C(1747873779,-692930397),new C(1955562222,1575990012),new C(2024104815,1125592928),new C(-2067236844,-1578062990),new C(-1933114872,442776044),new C(-1866530822,593698344),new C(-1538233109,-561857047),new C(-1090935817,-1295615723),new C(-965641998,-479046869),new C(-903397682,-366583396),new C(-779700025,566280711),new C(-354779690,-840897762),new C(-176337025,-294727304),new C(116418474,1914138554),new C(174292421,-1563912026),new C(289380356,-1090974290),new C(460393269,320620315),new C(685471733,587496836),new C(852142971,1086792851),new C(1017036298,365543100),new C(1126000580,-1676669620),new C(1288033470,-885112138),new C(1501505948,-60457430),new C(1607167915,987167468),new C(1816402316,1246189591)]}for(r=0;r<80;r+=1){f[r]=new C(0,0)}n[e>>5]|=128<<24-(e&31);n[(e+128>>10<<5)+31]=e;o=n.length;for(r=0;r<o;r+=32){A(l,u[0]);A(D,u[1]);A(B,u[2]);A(p,u[3]);A(y,u[4]);A(b,u[5]);A(v,u[6]);A(m,u[7]);for(t=0;t<16;t+=1){f[t].h=n[r+2*t];f[t].l=n[r+2*t+1]}for(t=16;t<80;t+=1){s(j,f[t-2],19);w(M,f[t-2],29);F(T,f[t-2],6);_.l=j.l^M.l^T.l;_.h=j.h^M.h^T.h;s(j,f[t-15],1);s(M,f[t-15],8);F(T,f[t-15],7);x.l=j.l^M.l^T.l;x.h=j.h^M.h^T.h;d(f[t],_,f[t-7],x,f[t-16])}for(t=0;t<80;t+=1){S.l=y.l&b.l^~y.l&v.l;S.h=y.h&b.h^~y.h&v.h;s(j,y,14);s(M,y,18);w(T,y,9);_.l=j.l^M.l^T.l;_.h=j.h^M.h^T.h;s(j,l,28);w(M,l,2);w(T,l,7);x.l=j.l^M.l^T.l;x.h=j.h^M.h^T.h;U.l=l.l&D.l^l.l&B.l^D.l&B.l;U.h=l.h&D.h^l.h&B.h^D.h&B.h;g(a,m,_,S,i[t],f[t]);E(c,x,U);A(m,v);A(v,b);A(b,y);E(y,p,a);A(p,B);A(B,D);A(D,l);E(l,a,c)}E(u[0],u[0],l);E(u[1],u[1],D);E(u[2],u[2],B);E(u[3],u[3],p);E(u[4],u[4],y);E(u[5],u[5],b);E(u[6],u[6],v);E(u[7],u[7],m)}for(r=0;r<8;r+=1){h[2*r]=u[r].h;h[2*r+1]=u[r].l}return h}function C(n,e){this.h=n;this.l=e}function A(n,e){n.h=e.h;n.l=e.l}function s(n,e,t){n.l=e.l>>>t|e.h<<32-t;n.h=e.h>>>t|e.l<<32-t}function w(n,e,t){n.l=e.h>>>t|e.l<<32-t;n.h=e.l>>>t|e.h<<32-t}function F(n,e,t){n.l=e.l>>>t|e.h<<32-t;n.h=e.h>>>t}function E(n,e,t){var r=(e.l&65535)+(t.l&65535);var o=(e.l>>>16)+(t.l>>>16)+(r>>>16);var f=(e.h&65535)+(t.h&65535)+(o>>>16);var i=(e.h>>>16)+(t.h>>>16)+(f>>>16);n.l=r&65535|o<<16;n.h=f&65535|i<<16}function d(n,e,t,r,o){var f=(e.l&65535)+(t.l&65535)+(r.l&65535)+(o.l&65535);var i=(e.l>>>16)+(t.l>>>16)+(r.l>>>16)+(o.l>>>16)+(f>>>16);var h=(e.h&65535)+(t.h&65535)+(r.h&65535)+(o.h&65535)+(i>>>16);var u=(e.h>>>16)+(t.h>>>16)+(r.h>>>16)+(o.h>>>16)+(h>>>16);n.l=f&65535|i<<16;n.h=h&65535|u<<16}function g(n,e,t,r,o,f){var i=(e.l&65535)+(t.l&65535)+(r.l&65535)+(o.l&65535)+(f.l&65535),h=(e.l>>>16)+(t.l>>>16)+(r.l>>>16)+(o.l>>>16)+(f.l>>>16)+(i>>>16),u=(e.h&65535)+(t.h&65535)+(r.h&65535)+(o.h&65535)+(f.h&65535)+(h>>>16),a=(e.h>>>16)+(t.h>>>16)+(r.h>>>16)+(o.h>>>16)+(f.h>>>16)+(u>>>16);n.l=i&65535|h<<16;n.h=u&65535|a<<16}},RMD160:function(n){var t=n&&typeof n.uppercase==="boolean"?n.uppercase:false,i=n&&typeof n.pad==="string"?n.pda:"=",h=n&&typeof n.utf8==="boolean"?n.utf8:true,u=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],a=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],l=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],C=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11];this.hex=function(n){return f(A(n,h))};this.b64=function(n){return B(A(n,h),i)};this.any=function(n,e){return D(A(n,h),e)};this.raw=function(n){return A(n,h)};this.hex_hmac=function(n,e){return f(s(n,e))};this.b64_hmac=function(n,e){return B(s(n,e),i)};this.any_hmac=function(n,e,t){return D(s(n,e),t)};this.vm_test=function(){return hex("abc").toLowerCase()==="900150983cd24fb0d6963f7d28e17f72"};this.setUpperCase=function(n){if(typeof n==="boolean"){t=n}return this};this.setPad=function(n){if(typeof n!=="undefined"){i=n}return this};this.setUTF8=function(n){if(typeof n==="boolean"){h=n}return this};function A(n){n=h?e(n):n;return w(F(c(n),n.length*8))}function s(n,t){n=h?e(n):n;t=h?e(t):t;var r,o,f=c(n),i=Array(16),u=Array(16);if(f.length>16){f=F(f,n.length*8)}for(r=0;r<16;r+=1){i[r]=f[r]^909522486;u[r]=f[r]^1549556828}o=F(i.concat(c(t)),512+t.length*8);return w(F(u.concat(o),512+160))}function w(n){var e,t="",r=n.length*32;for(e=0;e<r;e+=8){t+=String.fromCharCode(n[e>>5]>>>e%32&255)}return t}function F(n,e){var t,f,i,h,c=1732584193,D=4023233417,B=2562383102,A=271733878,s=3285377520,w,F,p,y,b,v,m,x,_,S;n[e>>5]|=128<<e%32;n[(e+64>>>9<<4)+14]=e;h=n.length;for(i=0;i<h;i+=16){w=v=c;F=m=D;p=x=B;y=_=A;b=S=s;for(f=0;f<=79;f+=1){t=r(w,E(f,F,p,y));t=r(t,n[i+u[f]]);t=r(t,d(f));t=r(o(t,l[f]),b);w=b;b=y;y=o(p,10);p=F;F=t;t=r(v,E(79-f,m,x,_));t=r(t,n[i+a[f]]);t=r(t,g(f));t=r(o(t,C[f]),S);v=S;S=_;_=o(x,10);x=m;m=t}t=r(D,r(p,_));D=r(B,r(y,S));B=r(A,r(b,v));A=r(s,r(w,m));s=r(c,r(F,x));c=t}return[c,D,B,A,s]}function E(n,e,t,r){return 0<=n&&n<=15?e^t^r:16<=n&&n<=31?e&t|~e&r:32<=n&&n<=47?(e|~t)^r:48<=n&&n<=63?e&r|t&~r:64<=n&&n<=79?e^(t|~r):"rmd160_f: j out of range"}function d(n){return 0<=n&&n<=15?0:16<=n&&n<=31?1518500249:32<=n&&n<=47?1859775393:48<=n&&n<=63?2400959708:64<=n&&n<=79?2840853838:"rmd160_K1: j out of range"}function g(n){return 0<=n&&n<=15?1352829926:16<=n&&n<=31?1548603684:32<=n&&n<=47?1836072691:48<=n&&n<=63?2053994217:64<=n&&n<=79?0:"rmd160_K2: j out of range"}}};(function(e,t){var r=false;if(typeof exports==="object"){r=exports;if(exports&&typeof global==="object"&&global&&global===global.global){e=global}}if(typeof define==="function"&&typeof define.amd==="object"&&define.amd){define(function(){return n})}else if(r){if(typeof module==="object"&&module&&module.exports===r){module.exports=n}else{r.Hashes=n}}else{e.Hashes=n}})(this)})();

    var self = this;
    var props = this.opts;
    var markers = [];
    var MD5 = new Hashes.MD5;

    self.visiblePeople = [];
    self.focusPeople = [];
    var shadowImage = new google.maps.MarkerImage(
      'http://maps.gstatic.com/mapfiles/shadow50.png', null, null,
      new google.maps.Point(10, 34)
    );
    var markerSVG = {
      path: 'M78.5,34.2C78.5,56.3,50,94.3,50,94.3S21.5,56.5,21.5,34.2C21.5,18.4,34.2,5.7,50,5.7S78.5,18.4,78.5,34.2z',
      scale: 0.4,
      fillColor: '#424240',
      fillOpacity: 1,
      strokeWeight: 2,
      strokeColor: 'transparent',
      anchor: new google.maps.Point(58, 90),
      labelOrigin: new google.maps.Point(48, 40),
      shadow: shadowImage
    }
    var markerSVGSelected = {
      path: 'M78.5,34.2C78.5,56.3,50,94.3,50,94.3S21.5,56.5,21.5,34.2C21.5,18.4,34.2,5.7,50,5.7S78.5,18.4,78.5,34.2z',
      scale: 0.5,
      fillColor: '#357cfe',
      fillOpacity: 1,
      strokeWeight: 0,
      strokeColor: 'transparent',
      anchor: new google.maps.Point(58, 90),
      labelOrigin: new google.maps.Point(48, 40)
    }

    for (var i = 0; i < props.people.length; i++) {
      var marker = new google.maps.Marker({
        icon: markerSVG,
        position: {
          lat: props.people[i].lat,
          lng: props.people[i].lng
        },
        label: {
          color: '#fff',
          fontSize: '13',
          fontWeight: '900',
          fontFamily: 'Arial',
          text: '1'
        },
        people: [props.people[i]]
      });
      var duplicateMarker = markers.find(function(secondMarker) {
        return (
          marker.getPosition().lat() === secondMarker.getPosition().lat() &&
          marker.getPosition().lng() === secondMarker.getPosition().lng()
        );
      });
      if (duplicateMarker) {
        duplicateMarker.setOptions({
          people: duplicateMarker.people.concat(props.people[i])
        });
        duplicateMarker.setLabel({
          text: Number(duplicateMarker.people.length).toString() || "0",
          color: '#fff',
          fontSize: '13',
          fontWeight: '900',
          fontFamily: 'Arial'
        });
      } else {
        marker.addListener('click', function(e) {
          self.focus(this);
        });
        marker.setMap(props.map);
        markers.push(marker);
      }
    }

    var refresh = function() {
      self.visiblePeople = markers.filter(function(marker) {
        return props.map.getBounds().contains(marker.getPosition());
      })
      .map(function(marker) {
        return marker.people.map(function(person) {
          return _.set(person, 'hash', MD5.hex(person.name));
        });
      });

      if (self.visiblePeople.length) {
        self.visiblePeople = self.visiblePeople.reduce(function(a, b){
          return a.concat(b);
        });
      }

      self.visiblePeople = _.chain(self.visiblePeople)
      .sortBy('name')
      .filter(function(person) {
        if (self.focusPeople.length === 0) {
          return person;
        }
        return _.map(self.focusPeople, 'name').indexOf(person.name) > -1;
      })
      .sortBy(function(person) {
        return _.map(self.focusPeople, 'name').indexOf(person.name) > -1 ? '0' : '1';
      })
      .value();
      console.log(self.visiblePeople);
      self.update();
    };
    refresh = _.debounce(refresh, 100);
    props.map.addListener('center_changed', refresh);

    google.maps.event.addListenerOnce(props.map, 'tilesloaded', function() {
      google.maps.event.trigger(props.map, 'center_changed');
    });

    google.maps.event.addListener(props.map, 'click', function() {
      if (self.focusMarker) {
        self.focusMarker.setIcon(markerSVG);
        self.focusMarker = null;
        self.focusPeople = [];
      }
      google.maps.event.trigger(props.map, 'center_changed');
    });

    this.focusFromName = function(person) {
      const matchingMarker = _.find(markers, function(marker) {
        return _.find(marker.people, person);
      });
      this.focus(matchingMarker);
    }.bind(this)

    this.focus = function(marker) {
      if (_.isEqual(marker, self.focusMarker)) {
        marker.setIcon(markerSVG);
        self.focusMarker = null;
        self.focusPeople = [];
        google.maps.event.trigger(props.map, 'center_changed');
      } else {
        if (self.focusMarker) {
          self.focusMarker.setIcon(markerSVG);
        }
        marker.setIcon(markerSVGSelected);
        self.focusPeople = marker.people;
        self.focusMarker = marker;
        google.maps.event.trigger(props.map, 'center_changed');

        props.map.panTo(marker.getPosition());
      }
    }.bind(this)
});
