"use strict";var j=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var d=j(function(L,h){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(e,a,q,m,n,R,x,y,w,t,f,v){var b,c,i,g,s,u,l,r,o;if(e<=0||a<=0)return-1;if(k([m,n])){for(i=a,g=e,o=0;o<g;o++){for(s=R+o*m,l=w,r=0;r<i&&q[s]===x[l];r++)s+=n,l+=y;if(r===i)return o}return-1}for(i=e,g=a,b=m,c=n-i*m,u=v,r=0;r<i;r++)t[u]=1,u+=f;for(s=R,l=w,o=0;o<g;o++){for(u=v,r=0;r<i;r++)q[s]!==x[l]&&(t[u]=0),s+=b,u+=f;s+=c,l+=y}for(u=v,r=0;r<i&&t[u]!==1;r++)u+=f;return r===i?-1:r}h.exports=z
});var S=j(function(D,F){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),p=require('@stdlib/strided-base-stride2offset/dist'),I=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),J=d();function K(e,a,q,m,n,R,x,y,w){var t,f,v;if(!B(e))throw new TypeError(E('nullFx',e));if(G(e)?v=q:v=a,n<I(1,v))throw new RangeError(E('nullIR',v,n));return H(e)?(t=1,f=n):(t=n,f=1),J(a,q,m,t,f,0,R,x,p(q,x),y,w,p(a,w))}F.exports=K
});var C=j(function(X,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),Q=d();P(V,"ndarray",Q);_.exports=V
});var U=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=C(),O,T=Y(U(__dirname,"./native.js"));Z(T)?O=$:O=T;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
