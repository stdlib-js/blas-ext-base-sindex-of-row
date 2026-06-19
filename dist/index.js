"use strict";var j=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(n){throw (a=0, n)}};};var d=j(function(L,h){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(e,a,n,m,v,R,x,y,w,f,s,o){var b,c,i,g,q,u,l,r,t;if(e<=0||a<=0)return-1;if(k([m,v])){for(i=a,g=e,t=0;t<g;t++){for(q=R+t*m,l=w,r=0;r<i&&n[q]===x[l];r++)q+=v,l+=y;if(r===i)return t}return-1}for(i=e,g=a,b=m,c=v-i*m,u=o,r=0;r<i;r++)f[u]=1,u+=s;for(q=R,l=w,t=0;t<g;t++){for(u=o,r=0;r<i;r++)n[q]!==x[l]&&(f[u]=0),q+=b,u+=s;q+=c,l+=y}for(u=o,r=0;r<i&&f[u]!==1;r++)u+=s;return r===i?-1:r}h.exports=z
});var S=j(function(D,F){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),p=require('@stdlib/strided-base-stride2offset/dist'),I=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),J=d();function K(e,a,n,m,v,R,x,y,w){var f,s,o;if(!B(e))throw new TypeError(E('2iTFx',e));if(G(e)?o=n:o=a,v<I(1,o))throw new RangeError(E('2iTIR',o,v));return H(e)?(f=1,s=v):(f=v,s=1),J(a,n,m,f,s,0,R,x,p(n,x),y,w,p(a,w))}F.exports=K
});var C=j(function(X,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),Q=d();P(V,"ndarray",Q);_.exports=V
});var U=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=C(),O,T=Y(U(__dirname,"./native.js"));Z(T)?O=$:O=T;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
