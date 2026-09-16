"use strict";var j=function(u,a){return function(){try{return a||u((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var O=j(function(L,h){
var z=require('@stdlib/ndarray-base-assert-is-row-major/dist');function B(u,a,v,l,n,d,w,y,R,f,s,o){var m,c,e,g,q,i,x,r,t;if(u<=0||a<=0)return-1;if(z([l,n])){for(e=a,g=u,t=0;t<g;t++){for(q=d+t*l,x=R,r=0;r<e&&v[q]===w[x];r++)q+=n,x+=y;if(r===e)return t}return-1}for(e=u,g=a,m=l,c=n-e*l,i=o,r=0;r<e;r++)f[i]=1,i+=s;for(q=d,x=R,t=0;t<g;t++){for(i=o,r=0;r<e;r++)v[q]!==w[x]&&(f[i]=0),q+=m,i+=s;q+=c,x+=y}for(i=o,r=0;r<e&&f[i]!==1;r++)i+=s;return r===e?-1:r}h.exports=B
});var S=j(function(M,F){
var C=require('@stdlib/blas-base-layout-resolve-str/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),p=require('@stdlib/strided-base-stride2offset/dist'),H=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),I=O();function J(u,a,v,l,n,d,w,y,R){var f,s,o,m;if(m=C(u),m===null)throw new TypeError(E('2iTFx',u));if(G(m)?(o=v,f=n,s=1):(o=a,f=1,s=n),n<H(1,o))throw new RangeError(E('2iTIR',o,n));return I(a,v,l,f,s,0,d,w,p(v,w),y,R,p(a,R))}F.exports=J
});var T=j(function(D,_){
var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),P=O();K(V,"ndarray",P);_.exports=V
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=T(),b,k=U(Q(__dirname,"./native.js"));Y(k)?b=Z:b=k;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
