// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__18455__auto__ = (function (){var and__18443__auto__ = typeof ReactDOM !== 'undefined';
if(and__18443__auto__){
return ReactDOM;
} else {
return and__18443__auto__;
}
})();
if(cljs.core.truth_(or__18455__auto__)){
return or__18455__auto__;
} else {
var and__18443__auto__ = typeof require !== 'undefined';
if(and__18443__auto__){
return require("react-dom");
} else {
return and__18443__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str("dom")].join('')));
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
var _STAR_always_update_STAR_20110 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_20110){
return (function (){
var _STAR_always_update_STAR_20111 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20111;
}});})(_STAR_always_update_STAR_20110))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20110;
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
var args20112 = [];
var len__19525__auto___20115 = arguments.length;
var i__19526__auto___20116 = (0);
while(true){
if((i__19526__auto___20116 < len__19525__auto___20115)){
args20112.push((arguments[i__19526__auto___20116]));

var G__20117 = (i__19526__auto___20116 + (1));
i__19526__auto___20116 = G__20117;
continue;
} else {
}
break;
}

var G__20114 = args20112.length;
switch (G__20114) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20112.length)].join('')));

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
var seq__20123_20127 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__20124_20128 = null;
var count__20125_20129 = (0);
var i__20126_20130 = (0);
while(true){
if((i__20126_20130 < count__20125_20129)){
var v_20131 = cljs.core._nth.call(null,chunk__20124_20128,i__20126_20130);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20131);

var G__20132 = seq__20123_20127;
var G__20133 = chunk__20124_20128;
var G__20134 = count__20125_20129;
var G__20135 = (i__20126_20130 + (1));
seq__20123_20127 = G__20132;
chunk__20124_20128 = G__20133;
count__20125_20129 = G__20134;
i__20126_20130 = G__20135;
continue;
} else {
var temp__4657__auto___20136 = cljs.core.seq.call(null,seq__20123_20127);
if(temp__4657__auto___20136){
var seq__20123_20137__$1 = temp__4657__auto___20136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20123_20137__$1)){
var c__19266__auto___20138 = cljs.core.chunk_first.call(null,seq__20123_20137__$1);
var G__20139 = cljs.core.chunk_rest.call(null,seq__20123_20137__$1);
var G__20140 = c__19266__auto___20138;
var G__20141 = cljs.core.count.call(null,c__19266__auto___20138);
var G__20142 = (0);
seq__20123_20127 = G__20139;
chunk__20124_20128 = G__20140;
count__20125_20129 = G__20141;
i__20126_20130 = G__20142;
continue;
} else {
var v_20143 = cljs.core.first.call(null,seq__20123_20137__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20143);

var G__20144 = cljs.core.next.call(null,seq__20123_20137__$1);
var G__20145 = null;
var G__20146 = (0);
var G__20147 = (0);
seq__20123_20127 = G__20144;
chunk__20124_20128 = G__20145;
count__20125_20129 = G__20146;
i__20126_20130 = G__20147;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1463495152121