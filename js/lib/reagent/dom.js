// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__4671__auto__ = (function (){var and__4659__auto__ = typeof ReactDOM !== 'undefined';
if(and__4659__auto__){
return ReactDOM;
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
var and__4659__auto__ = typeof require !== 'undefined';
if(and__4659__auto__){
return require("react-dom");
} else {
return and__4659__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$dom], 0)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__10837 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10837) : cljs.core.atom.call(null,G__10837));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_10840 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_10840){
return (function (){
var _STAR_always_update_STAR_10841 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10841;
}});})(_STAR_always_update_STAR_10840))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10840;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
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
var args10842 = [];
var len__5729__auto___10845 = arguments.length;
var i__5730__auto___10846 = (0);
while(true){
if((i__5730__auto___10846 < len__5729__auto___10845)){
args10842.push((arguments[i__5730__auto___10846]));

var G__10847 = (i__5730__auto___10846 + (1));
i__5730__auto___10846 = G__10847;
continue;
} else {
}
break;
}

var G__10844 = args10842.length;
switch (G__10844) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10842.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
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
var seq__10853_10857 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__10854_10858 = null;
var count__10855_10859 = (0);
var i__10856_10860 = (0);
while(true){
if((i__10856_10860 < count__10855_10859)){
var v_10861 = chunk__10854_10858.cljs$core$IIndexed$_nth$arity$2(null,i__10856_10860);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_10861);

var G__10862 = seq__10853_10857;
var G__10863 = chunk__10854_10858;
var G__10864 = count__10855_10859;
var G__10865 = (i__10856_10860 + (1));
seq__10853_10857 = G__10862;
chunk__10854_10858 = G__10863;
count__10855_10859 = G__10864;
i__10856_10860 = G__10865;
continue;
} else {
var temp__4425__auto___10866 = cljs.core.seq(seq__10853_10857);
if(temp__4425__auto___10866){
var seq__10853_10867__$1 = temp__4425__auto___10866;
if(cljs.core.chunked_seq_QMARK_(seq__10853_10867__$1)){
var c__5474__auto___10868 = cljs.core.chunk_first(seq__10853_10867__$1);
var G__10869 = cljs.core.chunk_rest(seq__10853_10867__$1);
var G__10870 = c__5474__auto___10868;
var G__10871 = cljs.core.count(c__5474__auto___10868);
var G__10872 = (0);
seq__10853_10857 = G__10869;
chunk__10854_10858 = G__10870;
count__10855_10859 = G__10871;
i__10856_10860 = G__10872;
continue;
} else {
var v_10873 = cljs.core.first(seq__10853_10867__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_10873);

var G__10874 = cljs.core.next(seq__10853_10867__$1);
var G__10875 = null;
var G__10876 = (0);
var G__10877 = (0);
seq__10853_10857 = G__10874;
chunk__10854_10858 = G__10875;
count__10855_10859 = G__10876;
i__10856_10860 = G__10877;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
