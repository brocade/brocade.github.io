// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__16819__auto__ = (function (){var and__16807__auto__ = typeof ReactDOM !== 'undefined';
if(and__16807__auto__){
return ReactDOM;
} else {
return and__16807__auto__;
}
})();
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
var and__16807__auto__ = typeof require !== 'undefined';
if(and__16807__auto__){
return require("react-dom");
} else {
return and__16807__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_18462 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_18462){
return (function (){
var _STAR_always_update_STAR_18463 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18463;
}});})(_STAR_always_update_STAR_18462))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18462;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args18464 = [];
var len__17877__auto___18467 = arguments.length;
var i__17878__auto___18468 = (0);
while(true){
if((i__17878__auto___18468 < len__17877__auto___18467)){
args18464.push((arguments[i__17878__auto___18468]));

var G__18469 = (i__17878__auto___18468 + (1));
i__17878__auto___18468 = G__18469;
continue;
} else {
}
break;
}

var G__18466 = args18464.length;
switch (G__18466) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18464.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__18475_18479 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__18476_18480 = null;
var count__18477_18481 = (0);
var i__18478_18482 = (0);
while(true){
if((i__18478_18482 < count__18477_18481)){
var v_18483 = cljs.core._nth.call(null,chunk__18476_18480,i__18478_18482);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_18483);

var G__18484 = seq__18475_18479;
var G__18485 = chunk__18476_18480;
var G__18486 = count__18477_18481;
var G__18487 = (i__18478_18482 + (1));
seq__18475_18479 = G__18484;
chunk__18476_18480 = G__18485;
count__18477_18481 = G__18486;
i__18478_18482 = G__18487;
continue;
} else {
var temp__4425__auto___18488 = cljs.core.seq.call(null,seq__18475_18479);
if(temp__4425__auto___18488){
var seq__18475_18489__$1 = temp__4425__auto___18488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18475_18489__$1)){
var c__17622__auto___18490 = cljs.core.chunk_first.call(null,seq__18475_18489__$1);
var G__18491 = cljs.core.chunk_rest.call(null,seq__18475_18489__$1);
var G__18492 = c__17622__auto___18490;
var G__18493 = cljs.core.count.call(null,c__17622__auto___18490);
var G__18494 = (0);
seq__18475_18479 = G__18491;
chunk__18476_18480 = G__18492;
count__18477_18481 = G__18493;
i__18478_18482 = G__18494;
continue;
} else {
var v_18495 = cljs.core.first.call(null,seq__18475_18489__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_18495);

var G__18496 = cljs.core.next.call(null,seq__18475_18489__$1);
var G__18497 = null;
var G__18498 = (0);
var G__18499 = (0);
seq__18475_18479 = G__18496;
chunk__18476_18480 = G__18497;
count__18477_18481 = G__18498;
i__18478_18482 = G__18499;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1456199238713