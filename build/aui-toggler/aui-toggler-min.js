AUI.add("aui-toggler-base",function(o){var ad=o.Lang,J=ad.isBoolean,P=ad.isObject,t=ad.isUndefined,W=function(A){return parseInt(A,10)||0;},B="-",w=".",N="",F="px",a=" ",G="animated",S="animating",C="bindDOMEvents",T="click",p="collapsed",Q="content",U="cubic-bezier",E="down",b="enter",j="esc",c="expanded",k="expandedChange",i="getBoundingClientRect",R="gutter",L="header",V="helper",ac="keydown",x="left",h="linear",m="marginTop",l="minus",q="num_minus",y="num_plus",n="parentNode",v="plus",X="right",a="space",z="toggler",Z="transition",g="transitionEnd",e="transitionStart",u="up",aa="wrapper",f=o.getClassName,s=f(z,Q),ab=f(z,Q,p),M=f(z,Q,c),r=f(z,Q,aa),d=f(z,L),I=f(z,L,p),H=f(z,L,c),K={"false":ab,"true":M},D={"false":I,"true":H},O='<div class="'+r+'"></div>';var Y=o.Component.create({NAME:z,ATTRS:{animated:{validator:J,value:false,writeOnce:true},animating:{validator:J,value:false},bindDOMEvents:{validator:J,value:true,writeOnce:true},content:{setter:o.one},expanded:{validator:J,value:true},header:{setter:o.one},transition:{validator:P,value:{duration:0.4,easing:U}}},EXTENDS:o.Base,headerEventHandler:function(ae,A){if(ae.type===T||ae.isKey(b)||ae.isKey(a)){ae.preventDefault();return A.toggle();}else{if(ae.isKey(E)||ae.isKey(X)||ae.isKey(y)){ae.preventDefault();return A.expand();}else{if(ae.isKey(u)||ae.isKey(x)||ae.isKey(j)||ae.isKey(q)){ae.preventDefault();return A.collapse();}}}},prototype:{initializer:function(){var A=this;A.bindUI();A.syncUI();A._uiSetExpanded(A.get(c));},bindUI:function(){var A=this;var ae=A.get(L);ae.setData(z,A);A.on(k,o.bind(A._onExpandedChange,A));if(A.get(C)){ae.on([T,ac],o.rbind(Y.headerEventHandler,null,A));}},syncUI:function(){var A=this;A.get(Q).addClass(s);A.get(L).addClass(d);},animate:function(ae,af){var A=this;A._uiSetExpanded(true);var ag=o.merge(ae,A.get(Z));A.get(Q).transition(ag,o.bind(af,A));},collapse:function(){var A=this;return A.toggle(false);},expand:function(){var A=this;return A.toggle(true);},getContentHeight:function(){var ae=this;var ah=ae.get(Q);var ag=ae.get(c),A;if(!ag){ae._uiSetExpanded(true);}if(ah.hasMethod(i)){var af=ah.invoke(i);if(af){A=af.bottom-af.top;}}else{A=ah.get(OFFSET_HEIGHT);}if(!ag){ae._uiSetExpanded(false);}return A;},toggle:function(af){var ae=this;if(t(af)){af=!ae.get(c);}if(ae.get(G)){if(ae.get(S)){return af;}var ag=ae.get(Q);var A=ae.getContentHeight();var ah=W(ag.getStyle(m));if(!ae.wrapped){ag.wrap(O);if(af){ah=-(A+ah);ag.setStyle(m,ah);}ae.wrapped=true;}ae.set(S,true);ae.animate({marginTop:-(A+ah)+F},function(){ae.set(S,false);ae.set(c,af);});}else{ae.set(c,af);}return af;},_onExpandedChange:function(ae){var A=this;A._uiSetExpanded(ae.newVal);},_uiSetExpanded:function(ae){var A=this;A.get(Q).replaceClass(K[!ae],K[ae]);A.get(L).replaceClass(D[!ae],D[ae]);}}});o.Toggler=Y;},"@VERSION@",{skinnable:true,requires:["aui-base","transition"]});AUI.add("aui-toggler-delegate",function(t){var e=t.Lang,o=e.isBoolean,p=e.isObject,r=e.isString,C=t.Array,b=t.config.doc,g=t.Toggler,y="-",w=".",F="",n=" ",q="animated",f="click",s="closeAllOnExpand",u="container",j="content",v="cubic-bezier",l="expanded",a="firstChild",x="header",d="keydown",m="linear",i="toggler",c="toggler:animatingChange",B="toggler-delegate",E="transition",h="wrapper",D=t.getClassName,z=D(i,j,h);var k=t.Component.create({NAME:B,ATTRS:{animated:{validator:o,value:false,writeOnce:true},closeAllOnExpand:{validator:o,value:false},container:{setter:t.one,value:b},content:{validator:r},expanded:{validator:o,value:true},header:{validator:r},transition:{validator:p,value:{duration:0.4,easing:v}}},EXTENDS:t.Base,prototype:{items:null,initializer:function(){var A=this;A.bindUI();A.renderUI();},renderUI:function(){var A=this;if(A.get(s)){A.items=[];A.get(u).all(A.get(x)).each(function(G){A.items.push(A._create(G));});}},bindUI:function(){var A=this;var G=A.get(u);var H=A.get(x);A.on(c,t.bind(A._onAnimatingChange,A));G.delegate([f,d],t.bind(A.headerEventHandler,A),H);},findContentNode:function(J){var G=this;var H=G.get(j);var A=J.next(H)||J.one(H);if(!A){var I=J.next(w+z);if(I){A=I.get(a);}}return A;},headerEventHandler:function(G){var A=this;if(A.animating){return false;}var I=G.currentTarget;var H=I.getData(i)||A._create(I);if(g.headerEventHandler(G,H)&&A.get(s)){C.each(A.items,function(K,J,L){if(K!==H&&K.get(l)){K.collapse();}});}},_create:function(H){var A=this;var G=new g({animated:A.get(q),bindDOMEvents:false,bubbleTargets:[A],content:A.findContentNode(H),expanded:A.get(l),header:H,transition:A.get(E)});return G;},_onAnimatingChange:function(G){var A=this;A.animating=G.newVal;}}});t.TogglerDelegate=k;},"@VERSION@",{requires:["aui-toggler-base"],skinnable:false});AUI.add("aui-toggler",function(a){},"@VERSION@",{skinnable:true,use:["aui-toggler-base","aui-toggler-delegate"]});