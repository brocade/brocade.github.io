// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__24254_SHARP_){
return console.log(p1__24254_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__24255_SHARP_){
return console.warn(p1__24255_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__24256_SHARP_){
return console.error(p1__24256_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__24257_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__24257_SHARP_);
} else {
return console.log(p1__24257_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24259 = arguments.length;
var i__17864__auto___24260 = (0);
while(true){
if((i__17864__auto___24260 < len__17863__auto___24259)){
args__17870__auto__.push((arguments[i__17864__auto___24260]));

var G__24261 = (i__17864__auto___24260 + (1));
i__17864__auto___24260 = G__24261;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq24258){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24258));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24263 = arguments.length;
var i__17864__auto___24264 = (0);
while(true){
if((i__17864__auto___24264 < len__17863__auto___24263)){
args__17870__auto__.push((arguments[i__17864__auto___24264]));

var G__24265 = (i__17864__auto___24264 + (1));
i__17864__auto___24264 = G__24265;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq24262){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24262));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24267 = arguments.length;
var i__17864__auto___24268 = (0);
while(true){
if((i__17864__auto___24268 < len__17863__auto___24267)){
args__17870__auto__.push((arguments[i__17864__auto___24268]));

var G__24269 = (i__17864__auto___24268 + (1));
i__17864__auto___24268 = G__24269;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq24266){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24266));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24271 = arguments.length;
var i__17864__auto___24272 = (0);
while(true){
if((i__17864__auto___24272 < len__17863__auto___24271)){
args__17870__auto__.push((arguments[i__17864__auto___24272]));

var G__24273 = (i__17864__auto___24272 + (1));
i__17864__auto___24272 = G__24273;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq24270){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24270));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24275 = arguments.length;
var i__17864__auto___24276 = (0);
while(true){
if((i__17864__auto___24276 < len__17863__auto___24275)){
args__17870__auto__.push((arguments[i__17864__auto___24276]));

var G__24277 = (i__17864__auto___24276 + (1));
i__17864__auto___24276 = G__24277;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq24274){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24274));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1455751534360