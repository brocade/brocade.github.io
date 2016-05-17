// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__19680__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19681__i = 0, G__19681__a = new Array(arguments.length -  0);
while (G__19681__i < G__19681__a.length) {G__19681__a[G__19681__i] = arguments[G__19681__i + 0]; ++G__19681__i;}
  args = new cljs.core.IndexedSeq(G__19681__a,0);
} 
return G__19680__delegate.call(this,args);};
G__19680.cljs$lang$maxFixedArity = 0;
G__19680.cljs$lang$applyTo = (function (arglist__19682){
var args = cljs.core.seq(arglist__19682);
return G__19680__delegate(args);
});
G__19680.cljs$core$IFn$_invoke$arity$variadic = G__19680__delegate;
return G__19680;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19683__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19684__i = 0, G__19684__a = new Array(arguments.length -  0);
while (G__19684__i < G__19684__a.length) {G__19684__a[G__19684__i] = arguments[G__19684__i + 0]; ++G__19684__i;}
  args = new cljs.core.IndexedSeq(G__19684__a,0);
} 
return G__19683__delegate.call(this,args);};
G__19683.cljs$lang$maxFixedArity = 0;
G__19683.cljs$lang$applyTo = (function (arglist__19685){
var args = cljs.core.seq(arglist__19685);
return G__19683__delegate(args);
});
G__19683.cljs$core$IFn$_invoke$arity$variadic = G__19683__delegate;
return G__19683;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1463495150255