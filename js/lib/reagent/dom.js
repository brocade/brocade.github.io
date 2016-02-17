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
reagent.dom.dom = (function (){var or__16805__auto__ = (function (){var and__16793__auto__ = typeof ReactDOM !== 'undefined';
if(and__16793__auto__){
return ReactDOM;
} else {
return and__16793__auto__;
}
})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var and__16793__auto__ = typeof require !== 'undefined';
if(and__16793__auto__){
return require("react-dom");
} else {
return and__16793__auto__;
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
var _STAR_always_update_STAR_24017 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_24017){
return (function (){
var _STAR_always_update_STAR_24018 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_24018;
}});})(_STAR_always_update_STAR_24017))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_24017;
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
var args24019 = [];
var len__17863__auto___24022 = arguments.length;
var i__17864__auto___24023 = (0);
while(true){
if((i__17864__auto___24023 < len__17863__auto___24022)){
args24019.push((arguments[i__17864__auto___24023]));

var G__24024 = (i__17864__auto___24023 + (1));
i__17864__auto___24023 = G__24024;
continue;
} else {
}
break;
}

var G__24021 = args24019.length;
switch (G__24021) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24019.length)].join('')));

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
var seq__24030_24034 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__24031_24035 = null;
var count__24032_24036 = (0);
var i__24033_24037 = (0);
while(true){
if((i__24033_24037 < count__24032_24036)){
var v_24038 = cljs.core._nth.call(null,chunk__24031_24035,i__24033_24037);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_24038);

var G__24039 = seq__24030_24034;
var G__24040 = chunk__24031_24035;
var G__24041 = count__24032_24036;
var G__24042 = (i__24033_24037 + (1));
seq__24030_24034 = G__24039;
chunk__24031_24035 = G__24040;
count__24032_24036 = G__24041;
i__24033_24037 = G__24042;
continue;
} else {
var temp__4425__auto___24043 = cljs.core.seq.call(null,seq__24030_24034);
if(temp__4425__auto___24043){
var seq__24030_24044__$1 = temp__4425__auto___24043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24030_24044__$1)){
var c__17608__auto___24045 = cljs.core.chunk_first.call(null,seq__24030_24044__$1);
var G__24046 = cljs.core.chunk_rest.call(null,seq__24030_24044__$1);
var G__24047 = c__17608__auto___24045;
var G__24048 = cljs.core.count.call(null,c__17608__auto___24045);
var G__24049 = (0);
seq__24030_24034 = G__24046;
chunk__24031_24035 = G__24047;
count__24032_24036 = G__24048;
i__24033_24037 = G__24049;
continue;
} else {
var v_24050 = cljs.core.first.call(null,seq__24030_24044__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_24050);

var G__24051 = cljs.core.next.call(null,seq__24030_24044__$1);
var G__24052 = null;
var G__24053 = (0);
var G__24054 = (0);
seq__24030_24034 = G__24051;
chunk__24031_24035 = G__24052;
count__24032_24036 = G__24053;
i__24033_24037 = G__24054;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1455751533234