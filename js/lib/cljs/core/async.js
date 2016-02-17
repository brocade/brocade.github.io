// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13309 = [];
var len__5729__auto___13315 = arguments.length;
var i__5730__auto___13316 = (0);
while(true){
if((i__5730__auto___13316 < len__5729__auto___13315)){
args13309.push((arguments[i__5730__auto___13316]));

var G__13317 = (i__5730__auto___13316 + (1));
i__5730__auto___13316 = G__13317;
continue;
} else {
}
break;
}

var G__13311 = args13309.length;
switch (G__13311) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13309.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13312 = (function (f,blockable,meta13313){
this.f = f;
this.blockable = blockable;
this.meta13313 = meta13313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13314,meta13313__$1){
var self__ = this;
var _13314__$1 = this;
return (new cljs.core.async.t_cljs$core$async13312(self__.f,self__.blockable,meta13313__$1));
});

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13314){
var self__ = this;
var _13314__$1 = this;
return self__.meta13313;
});

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta13313], null);
});

cljs.core.async.t_cljs$core$async13312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13312";

cljs.core.async.t_cljs$core$async13312.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13312");
});

cljs.core.async.__GT_t_cljs$core$async13312 = (function cljs$core$async$__GT_t_cljs$core$async13312(f__$1,blockable__$1,meta13313){
return (new cljs.core.async.t_cljs$core$async13312(f__$1,blockable__$1,meta13313));
});

}

return (new cljs.core.async.t_cljs$core$async13312(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args13321 = [];
var len__5729__auto___13324 = arguments.length;
var i__5730__auto___13325 = (0);
while(true){
if((i__5730__auto___13325 < len__5729__auto___13324)){
args13321.push((arguments[i__5730__auto___13325]));

var G__13326 = (i__5730__auto___13325 + (1));
i__5730__auto___13325 = G__13326;
continue;
} else {
}
break;
}

var G__13323 = args13321.length;
switch (G__13323) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13321.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args13328 = [];
var len__5729__auto___13331 = arguments.length;
var i__5730__auto___13332 = (0);
while(true){
if((i__5730__auto___13332 < len__5729__auto___13331)){
args13328.push((arguments[i__5730__auto___13332]));

var G__13333 = (i__5730__auto___13332 + (1));
i__5730__auto___13332 = G__13333;
continue;
} else {
}
break;
}

var G__13330 = args13328.length;
switch (G__13330) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13328.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args13335 = [];
var len__5729__auto___13338 = arguments.length;
var i__5730__auto___13339 = (0);
while(true){
if((i__5730__auto___13339 < len__5729__auto___13338)){
args13335.push((arguments[i__5730__auto___13339]));

var G__13340 = (i__5730__auto___13339 + (1));
i__5730__auto___13339 = G__13340;
continue;
} else {
}
break;
}

var G__13337 = args13335.length;
switch (G__13337) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13335.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_13342 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13342) : fn1.call(null,val_13342));
} else {
cljs.core.async.impl.dispatch.run(((function (val_13342,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13342) : fn1.call(null,val_13342));
});})(val_13342,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13343 = [];
var len__5729__auto___13346 = arguments.length;
var i__5730__auto___13347 = (0);
while(true){
if((i__5730__auto___13347 < len__5729__auto___13346)){
args13343.push((arguments[i__5730__auto___13347]));

var G__13348 = (i__5730__auto___13347 + (1));
i__5730__auto___13347 = G__13348;
continue;
} else {
}
break;
}

var G__13345 = args13343.length;
switch (G__13345) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13343.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5574__auto___13350 = n;
var x_13351 = (0);
while(true){
if((x_13351 < n__5574__auto___13350)){
(a[x_13351] = (0));

var G__13352 = (x_13351 + (1));
x_13351 = G__13352;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__13353 = (i + (1));
i = G__13353;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async13357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13357 = (function (alt_flag,flag,meta13358){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13358 = meta13358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13359,meta13358__$1){
var self__ = this;
var _13359__$1 = this;
return (new cljs.core.async.t_cljs$core$async13357(self__.alt_flag,self__.flag,meta13358__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13359){
var self__ = this;
var _13359__$1 = this;
return self__.meta13358;
});})(flag))
;

cljs.core.async.t_cljs$core$async13357.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async13357.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13357.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta13358], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13357";

cljs.core.async.t_cljs$core$async13357.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13357");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13357 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13357(alt_flag__$1,flag__$1,meta13358){
return (new cljs.core.async.t_cljs$core$async13357(alt_flag__$1,flag__$1,meta13358));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13357(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13363 = (function (alt_handler,flag,cb,meta13364){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13364 = meta13364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13365,meta13364__$1){
var self__ = this;
var _13365__$1 = this;
return (new cljs.core.async.t_cljs$core$async13363(self__.alt_handler,self__.flag,self__.cb,meta13364__$1));
});

cljs.core.async.t_cljs$core$async13363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13365){
var self__ = this;
var _13365__$1 = this;
return self__.meta13364;
});

cljs.core.async.t_cljs$core$async13363.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async13363.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta13364], null);
});

cljs.core.async.t_cljs$core$async13363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13363";

cljs.core.async.t_cljs$core$async13363.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async13363");
});

cljs.core.async.__GT_t_cljs$core$async13363 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13363(alt_handler__$1,flag__$1,cb__$1,meta13364){
return (new cljs.core.async.t_cljs$core$async13363(alt_handler__$1,flag__$1,cb__$1,meta13364));
});

}

return (new cljs.core.async.t_cljs$core$async13363(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13366_SHARP_){
var G__13370 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13366_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13370) : fret.call(null,G__13370));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13367_SHARP_){
var G__13371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13367_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13371) : fret.call(null,G__13371));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__4671__auto__ = wport;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13372 = (i + (1));
i = G__13372;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4671__auto__ = ret;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__4659__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___13378 = arguments.length;
var i__5730__auto___13379 = (0);
while(true){
if((i__5730__auto___13379 < len__5729__auto___13378)){
args__5736__auto__.push((arguments[i__5730__auto___13379]));

var G__13380 = (i__5730__auto___13379 + (1));
i__5730__auto___13379 = G__13380;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13375){
var map__13376 = p__13375;
var map__13376__$1 = ((((!((map__13376 == null)))?((((map__13376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13376):map__13376);
var opts = map__13376__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13373){
var G__13374 = cljs.core.first(seq13373);
var seq13373__$1 = cljs.core.next(seq13373);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13374,seq13373__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13381 = [];
var len__5729__auto___13431 = arguments.length;
var i__5730__auto___13432 = (0);
while(true){
if((i__5730__auto___13432 < len__5729__auto___13431)){
args13381.push((arguments[i__5730__auto___13432]));

var G__13433 = (i__5730__auto___13432 + (1));
i__5730__auto___13432 = G__13433;
continue;
} else {
}
break;
}

var G__13383 = args13381.length;
switch (G__13383) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13381.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13264__auto___13435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___13435){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___13435){
return (function (state_13407){
var state_val_13408 = (state_13407[(1)]);
if((state_val_13408 === (7))){
var inst_13403 = (state_13407[(2)]);
var state_13407__$1 = state_13407;
var statearr_13409_13436 = state_13407__$1;
(statearr_13409_13436[(2)] = inst_13403);

(statearr_13409_13436[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13408 === (1))){
var state_13407__$1 = state_13407;
var statearr_13410_13437 = state_13407__$1;
(statearr_13410_13437[(2)] = null);

(statearr_13410_13437[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13408 === (4))){
var inst_13386 = (state_13407[(7)]);
var inst_13386__$1 = (state_13407[(2)]);
var inst_13387 = (inst_13386__$1 == null);
var state_13407__$1 = (function (){var statearr_13411 = state_13407;
(statearr_13411[(7)] = inst_13386__$1);

return statearr_13411;
})();
if(cljs.core.truth_(inst_13387)){
var statearr_13412_13438 = state_13407__$1;
(statearr_13412_13438[(1)] = (5));

} else {
var statearr_13413_13439 = state_13407__$1;
(statearr_13413_13439[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13408 === (13))){
var state_13407__$1 = state_13407;
var statearr_13414_13440 = state_13407__$1;
(statearr_13414_13440[(2)] = null);

(statearr_13414_13440[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13408 === (6))){
var inst_13386 = (state_13407[(7)]);
var state_13407__$1 = state_13407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13407__$1,(11),to,inst_13386);
} else {
if((state_val_13408 === (3))){
var inst_13405 = (state_13407[(2)]);
var state_13407__$1 = state_13407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13407__$1,inst_13405);
} else {
if((state_val_13408 === (12))){
var state_13407__$1 = state_13407;
var statearr_13415_13441 = state_13407__$1;
(statearr_13415_13441[(2)] = null);

(statearr_13415_13441[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13408 === (2))){
var state_13407__$1 = state_13407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13407__$1,(4),from);
} else {
if((state_val_13408 === (11))){
var inst_13396 = (state_13407[(2)]);
var state_13407__$1 = state_13407;
if(cljs.core.truth_(inst_13396)){
var statearr_13416_13442 = state_13407__$1;
(statearr_13416_13442[(1)] = (12));

} else {
var statearr_13417_13443 = state_13407__$1;
(statearr_13417_13443[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13408 === (9))){
var state_13407__$1 = state_13407;
var statearr_13418_13444 = state_13407__$1;
(statearr_13418_13444[(2)] = null);

(statearr_13418_13444[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13408 === (5))){
var state_13407__$1 = state_13407;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13419_13445 = state_13407__$1;
(statearr_13419_13445[(1)] = (8));

} else {
var statearr_13420_13446 = state_13407__$1;
(statearr_13420_13446[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13408 === (14))){
var inst_13401 = (state_13407[(2)]);
var state_13407__$1 = state_13407;
var statearr_13421_13447 = state_13407__$1;
(statearr_13421_13447[(2)] = inst_13401);

(statearr_13421_13447[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13408 === (10))){
var inst_13393 = (state_13407[(2)]);
var state_13407__$1 = state_13407;
var statearr_13422_13448 = state_13407__$1;
(statearr_13422_13448[(2)] = inst_13393);

(statearr_13422_13448[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13408 === (8))){
var inst_13390 = cljs.core.async.close_BANG_(to);
var state_13407__$1 = state_13407;
var statearr_13423_13449 = state_13407__$1;
(statearr_13423_13449[(2)] = inst_13390);

(statearr_13423_13449[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___13435))
;
return ((function (switch__13150__auto__,c__13264__auto___13435){
return (function() {
var cljs$core$async$state_machine__13151__auto__ = null;
var cljs$core$async$state_machine__13151__auto____0 = (function (){
var statearr_13427 = [null,null,null,null,null,null,null,null];
(statearr_13427[(0)] = cljs$core$async$state_machine__13151__auto__);

(statearr_13427[(1)] = (1));

return statearr_13427;
});
var cljs$core$async$state_machine__13151__auto____1 = (function (state_13407){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_13407);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e13428){if((e13428 instanceof Object)){
var ex__13154__auto__ = e13428;
var statearr_13429_13450 = state_13407;
(statearr_13429_13450[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13407);

return cljs.core.cst$kw$recur;
} else {
throw e13428;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__13451 = state_13407;
state_13407 = G__13451;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$state_machine__13151__auto__ = function(state_13407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13151__auto____1.call(this,state_13407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13151__auto____0;
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13151__auto____1;
return cljs$core$async$state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___13435))
})();
var state__13266__auto__ = (function (){var statearr_13430 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_13430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___13435);

return statearr_13430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___13435))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__13635){
var vec__13636 = p__13635;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(1),null);
var job = vec__13636;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13264__auto___13818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___13818,res,vec__13636,v,p,job,jobs,results){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___13818,res,vec__13636,v,p,job,jobs,results){
return (function (state_13641){
var state_val_13642 = (state_13641[(1)]);
if((state_val_13642 === (1))){
var state_13641__$1 = state_13641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13641__$1,(2),res,v);
} else {
if((state_val_13642 === (2))){
var inst_13638 = (state_13641[(2)]);
var inst_13639 = cljs.core.async.close_BANG_(res);
var state_13641__$1 = (function (){var statearr_13643 = state_13641;
(statearr_13643[(7)] = inst_13638);

return statearr_13643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13641__$1,inst_13639);
} else {
return null;
}
}
});})(c__13264__auto___13818,res,vec__13636,v,p,job,jobs,results))
;
return ((function (switch__13150__auto__,c__13264__auto___13818,res,vec__13636,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0 = (function (){
var statearr_13647 = [null,null,null,null,null,null,null,null];
(statearr_13647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__);

(statearr_13647[(1)] = (1));

return statearr_13647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1 = (function (state_13641){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_13641);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e13648){if((e13648 instanceof Object)){
var ex__13154__auto__ = e13648;
var statearr_13649_13819 = state_13641;
(statearr_13649_13819[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13641);

return cljs.core.cst$kw$recur;
} else {
throw e13648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__13820 = state_13641;
state_13641 = G__13820;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__ = function(state_13641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1.call(this,state_13641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___13818,res,vec__13636,v,p,job,jobs,results))
})();
var state__13266__auto__ = (function (){var statearr_13650 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_13650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___13818);

return statearr_13650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___13818,res,vec__13636,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13651){
var vec__13652 = p__13651;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13652,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13652,(1),null);
var job = vec__13652;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5574__auto___13821 = n;
var __13822 = (0);
while(true){
if((__13822 < n__5574__auto___13821)){
var G__13653_13823 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13653_13823) {
case "compute":
var c__13264__auto___13825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13822,c__13264__auto___13825,G__13653_13823,n__5574__auto___13821,jobs,results,process,async){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (__13822,c__13264__auto___13825,G__13653_13823,n__5574__auto___13821,jobs,results,process,async){
return (function (state_13666){
var state_val_13667 = (state_13666[(1)]);
if((state_val_13667 === (1))){
var state_13666__$1 = state_13666;
var statearr_13668_13826 = state_13666__$1;
(statearr_13668_13826[(2)] = null);

(statearr_13668_13826[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13667 === (2))){
var state_13666__$1 = state_13666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13666__$1,(4),jobs);
} else {
if((state_val_13667 === (3))){
var inst_13664 = (state_13666[(2)]);
var state_13666__$1 = state_13666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13666__$1,inst_13664);
} else {
if((state_val_13667 === (4))){
var inst_13656 = (state_13666[(2)]);
var inst_13657 = process(inst_13656);
var state_13666__$1 = state_13666;
if(cljs.core.truth_(inst_13657)){
var statearr_13669_13827 = state_13666__$1;
(statearr_13669_13827[(1)] = (5));

} else {
var statearr_13670_13828 = state_13666__$1;
(statearr_13670_13828[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13667 === (5))){
var state_13666__$1 = state_13666;
var statearr_13671_13829 = state_13666__$1;
(statearr_13671_13829[(2)] = null);

(statearr_13671_13829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13667 === (6))){
var state_13666__$1 = state_13666;
var statearr_13672_13830 = state_13666__$1;
(statearr_13672_13830[(2)] = null);

(statearr_13672_13830[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13667 === (7))){
var inst_13662 = (state_13666[(2)]);
var state_13666__$1 = state_13666;
var statearr_13673_13831 = state_13666__$1;
(statearr_13673_13831[(2)] = inst_13662);

(statearr_13673_13831[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__13822,c__13264__auto___13825,G__13653_13823,n__5574__auto___13821,jobs,results,process,async))
;
return ((function (__13822,switch__13150__auto__,c__13264__auto___13825,G__13653_13823,n__5574__auto___13821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0 = (function (){
var statearr_13677 = [null,null,null,null,null,null,null];
(statearr_13677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__);

(statearr_13677[(1)] = (1));

return statearr_13677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1 = (function (state_13666){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_13666);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e13678){if((e13678 instanceof Object)){
var ex__13154__auto__ = e13678;
var statearr_13679_13832 = state_13666;
(statearr_13679_13832[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13666);

return cljs.core.cst$kw$recur;
} else {
throw e13678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__13833 = state_13666;
state_13666 = G__13833;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__ = function(state_13666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1.call(this,state_13666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__;
})()
;})(__13822,switch__13150__auto__,c__13264__auto___13825,G__13653_13823,n__5574__auto___13821,jobs,results,process,async))
})();
var state__13266__auto__ = (function (){var statearr_13680 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_13680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___13825);

return statearr_13680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(__13822,c__13264__auto___13825,G__13653_13823,n__5574__auto___13821,jobs,results,process,async))
);


break;
case "async":
var c__13264__auto___13834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13822,c__13264__auto___13834,G__13653_13823,n__5574__auto___13821,jobs,results,process,async){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (__13822,c__13264__auto___13834,G__13653_13823,n__5574__auto___13821,jobs,results,process,async){
return (function (state_13693){
var state_val_13694 = (state_13693[(1)]);
if((state_val_13694 === (1))){
var state_13693__$1 = state_13693;
var statearr_13695_13835 = state_13693__$1;
(statearr_13695_13835[(2)] = null);

(statearr_13695_13835[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13694 === (2))){
var state_13693__$1 = state_13693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13693__$1,(4),jobs);
} else {
if((state_val_13694 === (3))){
var inst_13691 = (state_13693[(2)]);
var state_13693__$1 = state_13693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13693__$1,inst_13691);
} else {
if((state_val_13694 === (4))){
var inst_13683 = (state_13693[(2)]);
var inst_13684 = async(inst_13683);
var state_13693__$1 = state_13693;
if(cljs.core.truth_(inst_13684)){
var statearr_13696_13836 = state_13693__$1;
(statearr_13696_13836[(1)] = (5));

} else {
var statearr_13697_13837 = state_13693__$1;
(statearr_13697_13837[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13694 === (5))){
var state_13693__$1 = state_13693;
var statearr_13698_13838 = state_13693__$1;
(statearr_13698_13838[(2)] = null);

(statearr_13698_13838[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13694 === (6))){
var state_13693__$1 = state_13693;
var statearr_13699_13839 = state_13693__$1;
(statearr_13699_13839[(2)] = null);

(statearr_13699_13839[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13694 === (7))){
var inst_13689 = (state_13693[(2)]);
var state_13693__$1 = state_13693;
var statearr_13700_13840 = state_13693__$1;
(statearr_13700_13840[(2)] = inst_13689);

(statearr_13700_13840[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__13822,c__13264__auto___13834,G__13653_13823,n__5574__auto___13821,jobs,results,process,async))
;
return ((function (__13822,switch__13150__auto__,c__13264__auto___13834,G__13653_13823,n__5574__auto___13821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0 = (function (){
var statearr_13704 = [null,null,null,null,null,null,null];
(statearr_13704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__);

(statearr_13704[(1)] = (1));

return statearr_13704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1 = (function (state_13693){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_13693);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e13705){if((e13705 instanceof Object)){
var ex__13154__auto__ = e13705;
var statearr_13706_13841 = state_13693;
(statearr_13706_13841[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13693);

return cljs.core.cst$kw$recur;
} else {
throw e13705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__13842 = state_13693;
state_13693 = G__13842;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__ = function(state_13693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1.call(this,state_13693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__;
})()
;})(__13822,switch__13150__auto__,c__13264__auto___13834,G__13653_13823,n__5574__auto___13821,jobs,results,process,async))
})();
var state__13266__auto__ = (function (){var statearr_13707 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_13707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___13834);

return statearr_13707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(__13822,c__13264__auto___13834,G__13653_13823,n__5574__auto___13821,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13843 = (__13822 + (1));
__13822 = G__13843;
continue;
} else {
}
break;
}

var c__13264__auto___13844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___13844,jobs,results,process,async){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___13844,jobs,results,process,async){
return (function (state_13729){
var state_val_13730 = (state_13729[(1)]);
if((state_val_13730 === (1))){
var state_13729__$1 = state_13729;
var statearr_13731_13845 = state_13729__$1;
(statearr_13731_13845[(2)] = null);

(statearr_13731_13845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13730 === (2))){
var state_13729__$1 = state_13729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13729__$1,(4),from);
} else {
if((state_val_13730 === (3))){
var inst_13727 = (state_13729[(2)]);
var state_13729__$1 = state_13729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13729__$1,inst_13727);
} else {
if((state_val_13730 === (4))){
var inst_13710 = (state_13729[(7)]);
var inst_13710__$1 = (state_13729[(2)]);
var inst_13711 = (inst_13710__$1 == null);
var state_13729__$1 = (function (){var statearr_13732 = state_13729;
(statearr_13732[(7)] = inst_13710__$1);

return statearr_13732;
})();
if(cljs.core.truth_(inst_13711)){
var statearr_13733_13846 = state_13729__$1;
(statearr_13733_13846[(1)] = (5));

} else {
var statearr_13734_13847 = state_13729__$1;
(statearr_13734_13847[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13730 === (5))){
var inst_13713 = cljs.core.async.close_BANG_(jobs);
var state_13729__$1 = state_13729;
var statearr_13735_13848 = state_13729__$1;
(statearr_13735_13848[(2)] = inst_13713);

(statearr_13735_13848[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13730 === (6))){
var inst_13715 = (state_13729[(8)]);
var inst_13710 = (state_13729[(7)]);
var inst_13715__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13716 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13717 = [inst_13710,inst_13715__$1];
var inst_13718 = (new cljs.core.PersistentVector(null,2,(5),inst_13716,inst_13717,null));
var state_13729__$1 = (function (){var statearr_13736 = state_13729;
(statearr_13736[(8)] = inst_13715__$1);

return statearr_13736;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13729__$1,(8),jobs,inst_13718);
} else {
if((state_val_13730 === (7))){
var inst_13725 = (state_13729[(2)]);
var state_13729__$1 = state_13729;
var statearr_13737_13849 = state_13729__$1;
(statearr_13737_13849[(2)] = inst_13725);

(statearr_13737_13849[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13730 === (8))){
var inst_13715 = (state_13729[(8)]);
var inst_13720 = (state_13729[(2)]);
var state_13729__$1 = (function (){var statearr_13738 = state_13729;
(statearr_13738[(9)] = inst_13720);

return statearr_13738;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13729__$1,(9),results,inst_13715);
} else {
if((state_val_13730 === (9))){
var inst_13722 = (state_13729[(2)]);
var state_13729__$1 = (function (){var statearr_13739 = state_13729;
(statearr_13739[(10)] = inst_13722);

return statearr_13739;
})();
var statearr_13740_13850 = state_13729__$1;
(statearr_13740_13850[(2)] = null);

(statearr_13740_13850[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___13844,jobs,results,process,async))
;
return ((function (switch__13150__auto__,c__13264__auto___13844,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0 = (function (){
var statearr_13744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__);

(statearr_13744[(1)] = (1));

return statearr_13744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1 = (function (state_13729){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_13729);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e13745){if((e13745 instanceof Object)){
var ex__13154__auto__ = e13745;
var statearr_13746_13851 = state_13729;
(statearr_13746_13851[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13729);

return cljs.core.cst$kw$recur;
} else {
throw e13745;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__13852 = state_13729;
state_13729 = G__13852;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__ = function(state_13729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1.call(this,state_13729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___13844,jobs,results,process,async))
})();
var state__13266__auto__ = (function (){var statearr_13747 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_13747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___13844);

return statearr_13747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___13844,jobs,results,process,async))
);


var c__13264__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto__,jobs,results,process,async){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto__,jobs,results,process,async){
return (function (state_13785){
var state_val_13786 = (state_13785[(1)]);
if((state_val_13786 === (7))){
var inst_13781 = (state_13785[(2)]);
var state_13785__$1 = state_13785;
var statearr_13787_13853 = state_13785__$1;
(statearr_13787_13853[(2)] = inst_13781);

(statearr_13787_13853[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (20))){
var state_13785__$1 = state_13785;
var statearr_13788_13854 = state_13785__$1;
(statearr_13788_13854[(2)] = null);

(statearr_13788_13854[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (1))){
var state_13785__$1 = state_13785;
var statearr_13789_13855 = state_13785__$1;
(statearr_13789_13855[(2)] = null);

(statearr_13789_13855[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (4))){
var inst_13750 = (state_13785[(7)]);
var inst_13750__$1 = (state_13785[(2)]);
var inst_13751 = (inst_13750__$1 == null);
var state_13785__$1 = (function (){var statearr_13790 = state_13785;
(statearr_13790[(7)] = inst_13750__$1);

return statearr_13790;
})();
if(cljs.core.truth_(inst_13751)){
var statearr_13791_13856 = state_13785__$1;
(statearr_13791_13856[(1)] = (5));

} else {
var statearr_13792_13857 = state_13785__$1;
(statearr_13792_13857[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (15))){
var inst_13763 = (state_13785[(8)]);
var state_13785__$1 = state_13785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13785__$1,(18),to,inst_13763);
} else {
if((state_val_13786 === (21))){
var inst_13776 = (state_13785[(2)]);
var state_13785__$1 = state_13785;
var statearr_13793_13858 = state_13785__$1;
(statearr_13793_13858[(2)] = inst_13776);

(statearr_13793_13858[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (13))){
var inst_13778 = (state_13785[(2)]);
var state_13785__$1 = (function (){var statearr_13794 = state_13785;
(statearr_13794[(9)] = inst_13778);

return statearr_13794;
})();
var statearr_13795_13859 = state_13785__$1;
(statearr_13795_13859[(2)] = null);

(statearr_13795_13859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (6))){
var inst_13750 = (state_13785[(7)]);
var state_13785__$1 = state_13785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13785__$1,(11),inst_13750);
} else {
if((state_val_13786 === (17))){
var inst_13771 = (state_13785[(2)]);
var state_13785__$1 = state_13785;
if(cljs.core.truth_(inst_13771)){
var statearr_13796_13860 = state_13785__$1;
(statearr_13796_13860[(1)] = (19));

} else {
var statearr_13797_13861 = state_13785__$1;
(statearr_13797_13861[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (3))){
var inst_13783 = (state_13785[(2)]);
var state_13785__$1 = state_13785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13785__$1,inst_13783);
} else {
if((state_val_13786 === (12))){
var inst_13760 = (state_13785[(10)]);
var state_13785__$1 = state_13785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13785__$1,(14),inst_13760);
} else {
if((state_val_13786 === (2))){
var state_13785__$1 = state_13785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13785__$1,(4),results);
} else {
if((state_val_13786 === (19))){
var state_13785__$1 = state_13785;
var statearr_13798_13862 = state_13785__$1;
(statearr_13798_13862[(2)] = null);

(statearr_13798_13862[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (11))){
var inst_13760 = (state_13785[(2)]);
var state_13785__$1 = (function (){var statearr_13799 = state_13785;
(statearr_13799[(10)] = inst_13760);

return statearr_13799;
})();
var statearr_13800_13863 = state_13785__$1;
(statearr_13800_13863[(2)] = null);

(statearr_13800_13863[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (9))){
var state_13785__$1 = state_13785;
var statearr_13801_13864 = state_13785__$1;
(statearr_13801_13864[(2)] = null);

(statearr_13801_13864[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (5))){
var state_13785__$1 = state_13785;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13802_13865 = state_13785__$1;
(statearr_13802_13865[(1)] = (8));

} else {
var statearr_13803_13866 = state_13785__$1;
(statearr_13803_13866[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (14))){
var inst_13765 = (state_13785[(11)]);
var inst_13763 = (state_13785[(8)]);
var inst_13763__$1 = (state_13785[(2)]);
var inst_13764 = (inst_13763__$1 == null);
var inst_13765__$1 = cljs.core.not(inst_13764);
var state_13785__$1 = (function (){var statearr_13804 = state_13785;
(statearr_13804[(11)] = inst_13765__$1);

(statearr_13804[(8)] = inst_13763__$1);

return statearr_13804;
})();
if(inst_13765__$1){
var statearr_13805_13867 = state_13785__$1;
(statearr_13805_13867[(1)] = (15));

} else {
var statearr_13806_13868 = state_13785__$1;
(statearr_13806_13868[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (16))){
var inst_13765 = (state_13785[(11)]);
var state_13785__$1 = state_13785;
var statearr_13807_13869 = state_13785__$1;
(statearr_13807_13869[(2)] = inst_13765);

(statearr_13807_13869[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (10))){
var inst_13757 = (state_13785[(2)]);
var state_13785__$1 = state_13785;
var statearr_13808_13870 = state_13785__$1;
(statearr_13808_13870[(2)] = inst_13757);

(statearr_13808_13870[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (18))){
var inst_13768 = (state_13785[(2)]);
var state_13785__$1 = state_13785;
var statearr_13809_13871 = state_13785__$1;
(statearr_13809_13871[(2)] = inst_13768);

(statearr_13809_13871[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13786 === (8))){
var inst_13754 = cljs.core.async.close_BANG_(to);
var state_13785__$1 = state_13785;
var statearr_13810_13872 = state_13785__$1;
(statearr_13810_13872[(2)] = inst_13754);

(statearr_13810_13872[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto__,jobs,results,process,async))
;
return ((function (switch__13150__auto__,c__13264__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0 = (function (){
var statearr_13814 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__);

(statearr_13814[(1)] = (1));

return statearr_13814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1 = (function (state_13785){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_13785);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e13815){if((e13815 instanceof Object)){
var ex__13154__auto__ = e13815;
var statearr_13816_13873 = state_13785;
(statearr_13816_13873[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13785);

return cljs.core.cst$kw$recur;
} else {
throw e13815;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__13874 = state_13785;
state_13785 = G__13874;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__ = function(state_13785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1.call(this,state_13785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto__,jobs,results,process,async))
})();
var state__13266__auto__ = (function (){var statearr_13817 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_13817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto__);

return statearr_13817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto__,jobs,results,process,async))
);

return c__13264__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args13875 = [];
var len__5729__auto___13878 = arguments.length;
var i__5730__auto___13879 = (0);
while(true){
if((i__5730__auto___13879 < len__5729__auto___13878)){
args13875.push((arguments[i__5730__auto___13879]));

var G__13880 = (i__5730__auto___13879 + (1));
i__5730__auto___13879 = G__13880;
continue;
} else {
}
break;
}

var G__13877 = args13875.length;
switch (G__13877) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13875.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args13882 = [];
var len__5729__auto___13885 = arguments.length;
var i__5730__auto___13886 = (0);
while(true){
if((i__5730__auto___13886 < len__5729__auto___13885)){
args13882.push((arguments[i__5730__auto___13886]));

var G__13887 = (i__5730__auto___13886 + (1));
i__5730__auto___13886 = G__13887;
continue;
} else {
}
break;
}

var G__13884 = args13882.length;
switch (G__13884) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13882.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13889 = [];
var len__5729__auto___13942 = arguments.length;
var i__5730__auto___13943 = (0);
while(true){
if((i__5730__auto___13943 < len__5729__auto___13942)){
args13889.push((arguments[i__5730__auto___13943]));

var G__13944 = (i__5730__auto___13943 + (1));
i__5730__auto___13943 = G__13944;
continue;
} else {
}
break;
}

var G__13891 = args13889.length;
switch (G__13891) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13889.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13264__auto___13946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___13946,tc,fc){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___13946,tc,fc){
return (function (state_13917){
var state_val_13918 = (state_13917[(1)]);
if((state_val_13918 === (7))){
var inst_13913 = (state_13917[(2)]);
var state_13917__$1 = state_13917;
var statearr_13919_13947 = state_13917__$1;
(statearr_13919_13947[(2)] = inst_13913);

(statearr_13919_13947[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13918 === (1))){
var state_13917__$1 = state_13917;
var statearr_13920_13948 = state_13917__$1;
(statearr_13920_13948[(2)] = null);

(statearr_13920_13948[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13918 === (4))){
var inst_13894 = (state_13917[(7)]);
var inst_13894__$1 = (state_13917[(2)]);
var inst_13895 = (inst_13894__$1 == null);
var state_13917__$1 = (function (){var statearr_13921 = state_13917;
(statearr_13921[(7)] = inst_13894__$1);

return statearr_13921;
})();
if(cljs.core.truth_(inst_13895)){
var statearr_13922_13949 = state_13917__$1;
(statearr_13922_13949[(1)] = (5));

} else {
var statearr_13923_13950 = state_13917__$1;
(statearr_13923_13950[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13918 === (13))){
var state_13917__$1 = state_13917;
var statearr_13924_13951 = state_13917__$1;
(statearr_13924_13951[(2)] = null);

(statearr_13924_13951[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13918 === (6))){
var inst_13894 = (state_13917[(7)]);
var inst_13900 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13894) : p.call(null,inst_13894));
var state_13917__$1 = state_13917;
if(cljs.core.truth_(inst_13900)){
var statearr_13925_13952 = state_13917__$1;
(statearr_13925_13952[(1)] = (9));

} else {
var statearr_13926_13953 = state_13917__$1;
(statearr_13926_13953[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13918 === (3))){
var inst_13915 = (state_13917[(2)]);
var state_13917__$1 = state_13917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13917__$1,inst_13915);
} else {
if((state_val_13918 === (12))){
var state_13917__$1 = state_13917;
var statearr_13927_13954 = state_13917__$1;
(statearr_13927_13954[(2)] = null);

(statearr_13927_13954[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13918 === (2))){
var state_13917__$1 = state_13917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13917__$1,(4),ch);
} else {
if((state_val_13918 === (11))){
var inst_13894 = (state_13917[(7)]);
var inst_13904 = (state_13917[(2)]);
var state_13917__$1 = state_13917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13917__$1,(8),inst_13904,inst_13894);
} else {
if((state_val_13918 === (9))){
var state_13917__$1 = state_13917;
var statearr_13928_13955 = state_13917__$1;
(statearr_13928_13955[(2)] = tc);

(statearr_13928_13955[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13918 === (5))){
var inst_13897 = cljs.core.async.close_BANG_(tc);
var inst_13898 = cljs.core.async.close_BANG_(fc);
var state_13917__$1 = (function (){var statearr_13929 = state_13917;
(statearr_13929[(8)] = inst_13897);

return statearr_13929;
})();
var statearr_13930_13956 = state_13917__$1;
(statearr_13930_13956[(2)] = inst_13898);

(statearr_13930_13956[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13918 === (14))){
var inst_13911 = (state_13917[(2)]);
var state_13917__$1 = state_13917;
var statearr_13931_13957 = state_13917__$1;
(statearr_13931_13957[(2)] = inst_13911);

(statearr_13931_13957[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13918 === (10))){
var state_13917__$1 = state_13917;
var statearr_13932_13958 = state_13917__$1;
(statearr_13932_13958[(2)] = fc);

(statearr_13932_13958[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13918 === (8))){
var inst_13906 = (state_13917[(2)]);
var state_13917__$1 = state_13917;
if(cljs.core.truth_(inst_13906)){
var statearr_13933_13959 = state_13917__$1;
(statearr_13933_13959[(1)] = (12));

} else {
var statearr_13934_13960 = state_13917__$1;
(statearr_13934_13960[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___13946,tc,fc))
;
return ((function (switch__13150__auto__,c__13264__auto___13946,tc,fc){
return (function() {
var cljs$core$async$state_machine__13151__auto__ = null;
var cljs$core$async$state_machine__13151__auto____0 = (function (){
var statearr_13938 = [null,null,null,null,null,null,null,null,null];
(statearr_13938[(0)] = cljs$core$async$state_machine__13151__auto__);

(statearr_13938[(1)] = (1));

return statearr_13938;
});
var cljs$core$async$state_machine__13151__auto____1 = (function (state_13917){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_13917);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e13939){if((e13939 instanceof Object)){
var ex__13154__auto__ = e13939;
var statearr_13940_13961 = state_13917;
(statearr_13940_13961[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13917);

return cljs.core.cst$kw$recur;
} else {
throw e13939;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__13962 = state_13917;
state_13917 = G__13962;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$state_machine__13151__auto__ = function(state_13917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13151__auto____1.call(this,state_13917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13151__auto____0;
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13151__auto____1;
return cljs$core$async$state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___13946,tc,fc))
})();
var state__13266__auto__ = (function (){var statearr_13941 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_13941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___13946);

return statearr_13941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___13946,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13264__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto__){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto__){
return (function (state_14026){
var state_val_14027 = (state_14026[(1)]);
if((state_val_14027 === (7))){
var inst_14022 = (state_14026[(2)]);
var state_14026__$1 = state_14026;
var statearr_14028_14049 = state_14026__$1;
(statearr_14028_14049[(2)] = inst_14022);

(statearr_14028_14049[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (1))){
var inst_14006 = init;
var state_14026__$1 = (function (){var statearr_14029 = state_14026;
(statearr_14029[(7)] = inst_14006);

return statearr_14029;
})();
var statearr_14030_14050 = state_14026__$1;
(statearr_14030_14050[(2)] = null);

(statearr_14030_14050[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (4))){
var inst_14009 = (state_14026[(8)]);
var inst_14009__$1 = (state_14026[(2)]);
var inst_14010 = (inst_14009__$1 == null);
var state_14026__$1 = (function (){var statearr_14031 = state_14026;
(statearr_14031[(8)] = inst_14009__$1);

return statearr_14031;
})();
if(cljs.core.truth_(inst_14010)){
var statearr_14032_14051 = state_14026__$1;
(statearr_14032_14051[(1)] = (5));

} else {
var statearr_14033_14052 = state_14026__$1;
(statearr_14033_14052[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (6))){
var inst_14009 = (state_14026[(8)]);
var inst_14006 = (state_14026[(7)]);
var inst_14013 = (state_14026[(9)]);
var inst_14013__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14006,inst_14009) : f.call(null,inst_14006,inst_14009));
var inst_14014 = cljs.core.reduced_QMARK_(inst_14013__$1);
var state_14026__$1 = (function (){var statearr_14034 = state_14026;
(statearr_14034[(9)] = inst_14013__$1);

return statearr_14034;
})();
if(inst_14014){
var statearr_14035_14053 = state_14026__$1;
(statearr_14035_14053[(1)] = (8));

} else {
var statearr_14036_14054 = state_14026__$1;
(statearr_14036_14054[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (3))){
var inst_14024 = (state_14026[(2)]);
var state_14026__$1 = state_14026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14026__$1,inst_14024);
} else {
if((state_val_14027 === (2))){
var state_14026__$1 = state_14026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14026__$1,(4),ch);
} else {
if((state_val_14027 === (9))){
var inst_14013 = (state_14026[(9)]);
var inst_14006 = inst_14013;
var state_14026__$1 = (function (){var statearr_14037 = state_14026;
(statearr_14037[(7)] = inst_14006);

return statearr_14037;
})();
var statearr_14038_14055 = state_14026__$1;
(statearr_14038_14055[(2)] = null);

(statearr_14038_14055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (5))){
var inst_14006 = (state_14026[(7)]);
var state_14026__$1 = state_14026;
var statearr_14039_14056 = state_14026__$1;
(statearr_14039_14056[(2)] = inst_14006);

(statearr_14039_14056[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (10))){
var inst_14020 = (state_14026[(2)]);
var state_14026__$1 = state_14026;
var statearr_14040_14057 = state_14026__$1;
(statearr_14040_14057[(2)] = inst_14020);

(statearr_14040_14057[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14027 === (8))){
var inst_14013 = (state_14026[(9)]);
var inst_14016 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_14013) : cljs.core.deref.call(null,inst_14013));
var state_14026__$1 = state_14026;
var statearr_14041_14058 = state_14026__$1;
(statearr_14041_14058[(2)] = inst_14016);

(statearr_14041_14058[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto__))
;
return ((function (switch__13150__auto__,c__13264__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13151__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13151__auto____0 = (function (){
var statearr_14045 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14045[(0)] = cljs$core$async$reduce_$_state_machine__13151__auto__);

(statearr_14045[(1)] = (1));

return statearr_14045;
});
var cljs$core$async$reduce_$_state_machine__13151__auto____1 = (function (state_14026){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_14026);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e14046){if((e14046 instanceof Object)){
var ex__13154__auto__ = e14046;
var statearr_14047_14059 = state_14026;
(statearr_14047_14059[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14026);

return cljs.core.cst$kw$recur;
} else {
throw e14046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__14060 = state_14026;
state_14026 = G__14060;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13151__auto__ = function(state_14026){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13151__auto____1.call(this,state_14026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13151__auto____0;
cljs$core$async$reduce_$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13151__auto____1;
return cljs$core$async$reduce_$_state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto__))
})();
var state__13266__auto__ = (function (){var statearr_14048 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_14048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto__);

return statearr_14048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto__))
);

return c__13264__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14061 = [];
var len__5729__auto___14113 = arguments.length;
var i__5730__auto___14114 = (0);
while(true){
if((i__5730__auto___14114 < len__5729__auto___14113)){
args14061.push((arguments[i__5730__auto___14114]));

var G__14115 = (i__5730__auto___14114 + (1));
i__5730__auto___14114 = G__14115;
continue;
} else {
}
break;
}

var G__14063 = args14061.length;
switch (G__14063) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14061.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13264__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto__){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto__){
return (function (state_14088){
var state_val_14089 = (state_14088[(1)]);
if((state_val_14089 === (7))){
var inst_14070 = (state_14088[(2)]);
var state_14088__$1 = state_14088;
var statearr_14090_14117 = state_14088__$1;
(statearr_14090_14117[(2)] = inst_14070);

(statearr_14090_14117[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14089 === (1))){
var inst_14064 = cljs.core.seq(coll);
var inst_14065 = inst_14064;
var state_14088__$1 = (function (){var statearr_14091 = state_14088;
(statearr_14091[(7)] = inst_14065);

return statearr_14091;
})();
var statearr_14092_14118 = state_14088__$1;
(statearr_14092_14118[(2)] = null);

(statearr_14092_14118[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14089 === (4))){
var inst_14065 = (state_14088[(7)]);
var inst_14068 = cljs.core.first(inst_14065);
var state_14088__$1 = state_14088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14088__$1,(7),ch,inst_14068);
} else {
if((state_val_14089 === (13))){
var inst_14082 = (state_14088[(2)]);
var state_14088__$1 = state_14088;
var statearr_14093_14119 = state_14088__$1;
(statearr_14093_14119[(2)] = inst_14082);

(statearr_14093_14119[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14089 === (6))){
var inst_14073 = (state_14088[(2)]);
var state_14088__$1 = state_14088;
if(cljs.core.truth_(inst_14073)){
var statearr_14094_14120 = state_14088__$1;
(statearr_14094_14120[(1)] = (8));

} else {
var statearr_14095_14121 = state_14088__$1;
(statearr_14095_14121[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14089 === (3))){
var inst_14086 = (state_14088[(2)]);
var state_14088__$1 = state_14088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14088__$1,inst_14086);
} else {
if((state_val_14089 === (12))){
var state_14088__$1 = state_14088;
var statearr_14096_14122 = state_14088__$1;
(statearr_14096_14122[(2)] = null);

(statearr_14096_14122[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14089 === (2))){
var inst_14065 = (state_14088[(7)]);
var state_14088__$1 = state_14088;
if(cljs.core.truth_(inst_14065)){
var statearr_14097_14123 = state_14088__$1;
(statearr_14097_14123[(1)] = (4));

} else {
var statearr_14098_14124 = state_14088__$1;
(statearr_14098_14124[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14089 === (11))){
var inst_14079 = cljs.core.async.close_BANG_(ch);
var state_14088__$1 = state_14088;
var statearr_14099_14125 = state_14088__$1;
(statearr_14099_14125[(2)] = inst_14079);

(statearr_14099_14125[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14089 === (9))){
var state_14088__$1 = state_14088;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14100_14126 = state_14088__$1;
(statearr_14100_14126[(1)] = (11));

} else {
var statearr_14101_14127 = state_14088__$1;
(statearr_14101_14127[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14089 === (5))){
var inst_14065 = (state_14088[(7)]);
var state_14088__$1 = state_14088;
var statearr_14102_14128 = state_14088__$1;
(statearr_14102_14128[(2)] = inst_14065);

(statearr_14102_14128[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14089 === (10))){
var inst_14084 = (state_14088[(2)]);
var state_14088__$1 = state_14088;
var statearr_14103_14129 = state_14088__$1;
(statearr_14103_14129[(2)] = inst_14084);

(statearr_14103_14129[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14089 === (8))){
var inst_14065 = (state_14088[(7)]);
var inst_14075 = cljs.core.next(inst_14065);
var inst_14065__$1 = inst_14075;
var state_14088__$1 = (function (){var statearr_14104 = state_14088;
(statearr_14104[(7)] = inst_14065__$1);

return statearr_14104;
})();
var statearr_14105_14130 = state_14088__$1;
(statearr_14105_14130[(2)] = null);

(statearr_14105_14130[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto__))
;
return ((function (switch__13150__auto__,c__13264__auto__){
return (function() {
var cljs$core$async$state_machine__13151__auto__ = null;
var cljs$core$async$state_machine__13151__auto____0 = (function (){
var statearr_14109 = [null,null,null,null,null,null,null,null];
(statearr_14109[(0)] = cljs$core$async$state_machine__13151__auto__);

(statearr_14109[(1)] = (1));

return statearr_14109;
});
var cljs$core$async$state_machine__13151__auto____1 = (function (state_14088){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_14088);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e14110){if((e14110 instanceof Object)){
var ex__13154__auto__ = e14110;
var statearr_14111_14131 = state_14088;
(statearr_14111_14131[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14088);

return cljs.core.cst$kw$recur;
} else {
throw e14110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__14132 = state_14088;
state_14088 = G__14132;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$state_machine__13151__auto__ = function(state_14088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13151__auto____1.call(this,state_14088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13151__auto____0;
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13151__auto____1;
return cljs$core$async$state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto__))
})();
var state__13266__auto__ = (function (){var statearr_14112 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_14112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto__);

return statearr_14112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto__))
);

return c__13264__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5326__auto__ = (((_ == null))?null:_);
var m__5327__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5327__auto__.call(null,_));
} else {
var m__5327__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5327__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5327__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5327__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5327__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto__.call(null,m,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto__.call(null,m));
} else {
var m__5327__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__14357 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14357) : cljs.core.atom.call(null,G__14357));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14358 = (function (mult,ch,cs,meta14359){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14359 = meta14359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14360,meta14359__$1){
var self__ = this;
var _14360__$1 = this;
return (new cljs.core.async.t_cljs$core$async14358(self__.mult,self__.ch,self__.cs,meta14359__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14360){
var self__ = this;
var _14360__$1 = this;
return self__.meta14359;
});})(cs))
;

cljs.core.async.t_cljs$core$async14358.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14358.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14358.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14358.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14358.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14361_14581 = self__.cs;
var G__14362_14582 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14361_14581,G__14362_14582) : cljs.core.reset_BANG_.call(null,G__14361_14581,G__14362_14582));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14358.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14359], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14358.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14358";

cljs.core.async.t_cljs$core$async14358.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async14358");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14358 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14358(mult__$1,ch__$1,cs__$1,meta14359){
return (new cljs.core.async.t_cljs$core$async14358(mult__$1,ch__$1,cs__$1,meta14359));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14358(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13264__auto___14583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___14583,cs,m,dchan,dctr,done){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___14583,cs,m,dchan,dctr,done){
return (function (state_14493){
var state_val_14494 = (state_14493[(1)]);
if((state_val_14494 === (7))){
var inst_14489 = (state_14493[(2)]);
var state_14493__$1 = state_14493;
var statearr_14495_14584 = state_14493__$1;
(statearr_14495_14584[(2)] = inst_14489);

(statearr_14495_14584[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (20))){
var inst_14394 = (state_14493[(7)]);
var inst_14404 = cljs.core.first(inst_14394);
var inst_14405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14404,(0),null);
var inst_14406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14404,(1),null);
var state_14493__$1 = (function (){var statearr_14496 = state_14493;
(statearr_14496[(8)] = inst_14405);

return statearr_14496;
})();
if(cljs.core.truth_(inst_14406)){
var statearr_14497_14585 = state_14493__$1;
(statearr_14497_14585[(1)] = (22));

} else {
var statearr_14498_14586 = state_14493__$1;
(statearr_14498_14586[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (27))){
var inst_14436 = (state_14493[(9)]);
var inst_14434 = (state_14493[(10)]);
var inst_14441 = (state_14493[(11)]);
var inst_14365 = (state_14493[(12)]);
var inst_14441__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14434,inst_14436);
var inst_14442 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14441__$1,inst_14365,done);
var state_14493__$1 = (function (){var statearr_14499 = state_14493;
(statearr_14499[(11)] = inst_14441__$1);

return statearr_14499;
})();
if(cljs.core.truth_(inst_14442)){
var statearr_14500_14587 = state_14493__$1;
(statearr_14500_14587[(1)] = (30));

} else {
var statearr_14501_14588 = state_14493__$1;
(statearr_14501_14588[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (1))){
var state_14493__$1 = state_14493;
var statearr_14502_14589 = state_14493__$1;
(statearr_14502_14589[(2)] = null);

(statearr_14502_14589[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (24))){
var inst_14394 = (state_14493[(7)]);
var inst_14411 = (state_14493[(2)]);
var inst_14412 = cljs.core.next(inst_14394);
var inst_14374 = inst_14412;
var inst_14375 = null;
var inst_14376 = (0);
var inst_14377 = (0);
var state_14493__$1 = (function (){var statearr_14503 = state_14493;
(statearr_14503[(13)] = inst_14377);

(statearr_14503[(14)] = inst_14374);

(statearr_14503[(15)] = inst_14376);

(statearr_14503[(16)] = inst_14375);

(statearr_14503[(17)] = inst_14411);

return statearr_14503;
})();
var statearr_14504_14590 = state_14493__$1;
(statearr_14504_14590[(2)] = null);

(statearr_14504_14590[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (39))){
var state_14493__$1 = state_14493;
var statearr_14508_14591 = state_14493__$1;
(statearr_14508_14591[(2)] = null);

(statearr_14508_14591[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (4))){
var inst_14365 = (state_14493[(12)]);
var inst_14365__$1 = (state_14493[(2)]);
var inst_14366 = (inst_14365__$1 == null);
var state_14493__$1 = (function (){var statearr_14509 = state_14493;
(statearr_14509[(12)] = inst_14365__$1);

return statearr_14509;
})();
if(cljs.core.truth_(inst_14366)){
var statearr_14510_14592 = state_14493__$1;
(statearr_14510_14592[(1)] = (5));

} else {
var statearr_14511_14593 = state_14493__$1;
(statearr_14511_14593[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (15))){
var inst_14377 = (state_14493[(13)]);
var inst_14374 = (state_14493[(14)]);
var inst_14376 = (state_14493[(15)]);
var inst_14375 = (state_14493[(16)]);
var inst_14390 = (state_14493[(2)]);
var inst_14391 = (inst_14377 + (1));
var tmp14505 = inst_14374;
var tmp14506 = inst_14376;
var tmp14507 = inst_14375;
var inst_14374__$1 = tmp14505;
var inst_14375__$1 = tmp14507;
var inst_14376__$1 = tmp14506;
var inst_14377__$1 = inst_14391;
var state_14493__$1 = (function (){var statearr_14512 = state_14493;
(statearr_14512[(13)] = inst_14377__$1);

(statearr_14512[(14)] = inst_14374__$1);

(statearr_14512[(15)] = inst_14376__$1);

(statearr_14512[(18)] = inst_14390);

(statearr_14512[(16)] = inst_14375__$1);

return statearr_14512;
})();
var statearr_14513_14594 = state_14493__$1;
(statearr_14513_14594[(2)] = null);

(statearr_14513_14594[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (21))){
var inst_14415 = (state_14493[(2)]);
var state_14493__$1 = state_14493;
var statearr_14517_14595 = state_14493__$1;
(statearr_14517_14595[(2)] = inst_14415);

(statearr_14517_14595[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (31))){
var inst_14441 = (state_14493[(11)]);
var inst_14445 = done(null);
var inst_14446 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14441);
var state_14493__$1 = (function (){var statearr_14518 = state_14493;
(statearr_14518[(19)] = inst_14445);

return statearr_14518;
})();
var statearr_14519_14596 = state_14493__$1;
(statearr_14519_14596[(2)] = inst_14446);

(statearr_14519_14596[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (32))){
var inst_14436 = (state_14493[(9)]);
var inst_14435 = (state_14493[(20)]);
var inst_14434 = (state_14493[(10)]);
var inst_14433 = (state_14493[(21)]);
var inst_14448 = (state_14493[(2)]);
var inst_14449 = (inst_14436 + (1));
var tmp14514 = inst_14435;
var tmp14515 = inst_14434;
var tmp14516 = inst_14433;
var inst_14433__$1 = tmp14516;
var inst_14434__$1 = tmp14515;
var inst_14435__$1 = tmp14514;
var inst_14436__$1 = inst_14449;
var state_14493__$1 = (function (){var statearr_14520 = state_14493;
(statearr_14520[(9)] = inst_14436__$1);

(statearr_14520[(20)] = inst_14435__$1);

(statearr_14520[(10)] = inst_14434__$1);

(statearr_14520[(22)] = inst_14448);

(statearr_14520[(21)] = inst_14433__$1);

return statearr_14520;
})();
var statearr_14521_14597 = state_14493__$1;
(statearr_14521_14597[(2)] = null);

(statearr_14521_14597[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (40))){
var inst_14461 = (state_14493[(23)]);
var inst_14465 = done(null);
var inst_14466 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14461);
var state_14493__$1 = (function (){var statearr_14522 = state_14493;
(statearr_14522[(24)] = inst_14465);

return statearr_14522;
})();
var statearr_14523_14598 = state_14493__$1;
(statearr_14523_14598[(2)] = inst_14466);

(statearr_14523_14598[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (33))){
var inst_14452 = (state_14493[(25)]);
var inst_14454 = cljs.core.chunked_seq_QMARK_(inst_14452);
var state_14493__$1 = state_14493;
if(inst_14454){
var statearr_14524_14599 = state_14493__$1;
(statearr_14524_14599[(1)] = (36));

} else {
var statearr_14525_14600 = state_14493__$1;
(statearr_14525_14600[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (13))){
var inst_14384 = (state_14493[(26)]);
var inst_14387 = cljs.core.async.close_BANG_(inst_14384);
var state_14493__$1 = state_14493;
var statearr_14526_14601 = state_14493__$1;
(statearr_14526_14601[(2)] = inst_14387);

(statearr_14526_14601[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (22))){
var inst_14405 = (state_14493[(8)]);
var inst_14408 = cljs.core.async.close_BANG_(inst_14405);
var state_14493__$1 = state_14493;
var statearr_14527_14602 = state_14493__$1;
(statearr_14527_14602[(2)] = inst_14408);

(statearr_14527_14602[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (36))){
var inst_14452 = (state_14493[(25)]);
var inst_14456 = cljs.core.chunk_first(inst_14452);
var inst_14457 = cljs.core.chunk_rest(inst_14452);
var inst_14458 = cljs.core.count(inst_14456);
var inst_14433 = inst_14457;
var inst_14434 = inst_14456;
var inst_14435 = inst_14458;
var inst_14436 = (0);
var state_14493__$1 = (function (){var statearr_14528 = state_14493;
(statearr_14528[(9)] = inst_14436);

(statearr_14528[(20)] = inst_14435);

(statearr_14528[(10)] = inst_14434);

(statearr_14528[(21)] = inst_14433);

return statearr_14528;
})();
var statearr_14529_14603 = state_14493__$1;
(statearr_14529_14603[(2)] = null);

(statearr_14529_14603[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (41))){
var inst_14452 = (state_14493[(25)]);
var inst_14468 = (state_14493[(2)]);
var inst_14469 = cljs.core.next(inst_14452);
var inst_14433 = inst_14469;
var inst_14434 = null;
var inst_14435 = (0);
var inst_14436 = (0);
var state_14493__$1 = (function (){var statearr_14530 = state_14493;
(statearr_14530[(9)] = inst_14436);

(statearr_14530[(20)] = inst_14435);

(statearr_14530[(10)] = inst_14434);

(statearr_14530[(27)] = inst_14468);

(statearr_14530[(21)] = inst_14433);

return statearr_14530;
})();
var statearr_14531_14604 = state_14493__$1;
(statearr_14531_14604[(2)] = null);

(statearr_14531_14604[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (43))){
var state_14493__$1 = state_14493;
var statearr_14532_14605 = state_14493__$1;
(statearr_14532_14605[(2)] = null);

(statearr_14532_14605[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (29))){
var inst_14477 = (state_14493[(2)]);
var state_14493__$1 = state_14493;
var statearr_14533_14606 = state_14493__$1;
(statearr_14533_14606[(2)] = inst_14477);

(statearr_14533_14606[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (44))){
var inst_14486 = (state_14493[(2)]);
var state_14493__$1 = (function (){var statearr_14534 = state_14493;
(statearr_14534[(28)] = inst_14486);

return statearr_14534;
})();
var statearr_14535_14607 = state_14493__$1;
(statearr_14535_14607[(2)] = null);

(statearr_14535_14607[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (6))){
var inst_14425 = (state_14493[(29)]);
var inst_14424 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14425__$1 = cljs.core.keys(inst_14424);
var inst_14426 = cljs.core.count(inst_14425__$1);
var inst_14427 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_14426) : cljs.core.reset_BANG_.call(null,dctr,inst_14426));
var inst_14432 = cljs.core.seq(inst_14425__$1);
var inst_14433 = inst_14432;
var inst_14434 = null;
var inst_14435 = (0);
var inst_14436 = (0);
var state_14493__$1 = (function (){var statearr_14536 = state_14493;
(statearr_14536[(9)] = inst_14436);

(statearr_14536[(30)] = inst_14427);

(statearr_14536[(20)] = inst_14435);

(statearr_14536[(10)] = inst_14434);

(statearr_14536[(29)] = inst_14425__$1);

(statearr_14536[(21)] = inst_14433);

return statearr_14536;
})();
var statearr_14537_14608 = state_14493__$1;
(statearr_14537_14608[(2)] = null);

(statearr_14537_14608[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (28))){
var inst_14452 = (state_14493[(25)]);
var inst_14433 = (state_14493[(21)]);
var inst_14452__$1 = cljs.core.seq(inst_14433);
var state_14493__$1 = (function (){var statearr_14538 = state_14493;
(statearr_14538[(25)] = inst_14452__$1);

return statearr_14538;
})();
if(inst_14452__$1){
var statearr_14539_14609 = state_14493__$1;
(statearr_14539_14609[(1)] = (33));

} else {
var statearr_14540_14610 = state_14493__$1;
(statearr_14540_14610[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (25))){
var inst_14436 = (state_14493[(9)]);
var inst_14435 = (state_14493[(20)]);
var inst_14438 = (inst_14436 < inst_14435);
var inst_14439 = inst_14438;
var state_14493__$1 = state_14493;
if(cljs.core.truth_(inst_14439)){
var statearr_14541_14611 = state_14493__$1;
(statearr_14541_14611[(1)] = (27));

} else {
var statearr_14542_14612 = state_14493__$1;
(statearr_14542_14612[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (34))){
var state_14493__$1 = state_14493;
var statearr_14543_14613 = state_14493__$1;
(statearr_14543_14613[(2)] = null);

(statearr_14543_14613[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (17))){
var state_14493__$1 = state_14493;
var statearr_14544_14614 = state_14493__$1;
(statearr_14544_14614[(2)] = null);

(statearr_14544_14614[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (3))){
var inst_14491 = (state_14493[(2)]);
var state_14493__$1 = state_14493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14493__$1,inst_14491);
} else {
if((state_val_14494 === (12))){
var inst_14420 = (state_14493[(2)]);
var state_14493__$1 = state_14493;
var statearr_14545_14615 = state_14493__$1;
(statearr_14545_14615[(2)] = inst_14420);

(statearr_14545_14615[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (2))){
var state_14493__$1 = state_14493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14493__$1,(4),ch);
} else {
if((state_val_14494 === (23))){
var state_14493__$1 = state_14493;
var statearr_14546_14616 = state_14493__$1;
(statearr_14546_14616[(2)] = null);

(statearr_14546_14616[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (35))){
var inst_14475 = (state_14493[(2)]);
var state_14493__$1 = state_14493;
var statearr_14547_14617 = state_14493__$1;
(statearr_14547_14617[(2)] = inst_14475);

(statearr_14547_14617[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (19))){
var inst_14394 = (state_14493[(7)]);
var inst_14398 = cljs.core.chunk_first(inst_14394);
var inst_14399 = cljs.core.chunk_rest(inst_14394);
var inst_14400 = cljs.core.count(inst_14398);
var inst_14374 = inst_14399;
var inst_14375 = inst_14398;
var inst_14376 = inst_14400;
var inst_14377 = (0);
var state_14493__$1 = (function (){var statearr_14548 = state_14493;
(statearr_14548[(13)] = inst_14377);

(statearr_14548[(14)] = inst_14374);

(statearr_14548[(15)] = inst_14376);

(statearr_14548[(16)] = inst_14375);

return statearr_14548;
})();
var statearr_14549_14618 = state_14493__$1;
(statearr_14549_14618[(2)] = null);

(statearr_14549_14618[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (11))){
var inst_14394 = (state_14493[(7)]);
var inst_14374 = (state_14493[(14)]);
var inst_14394__$1 = cljs.core.seq(inst_14374);
var state_14493__$1 = (function (){var statearr_14550 = state_14493;
(statearr_14550[(7)] = inst_14394__$1);

return statearr_14550;
})();
if(inst_14394__$1){
var statearr_14551_14619 = state_14493__$1;
(statearr_14551_14619[(1)] = (16));

} else {
var statearr_14552_14620 = state_14493__$1;
(statearr_14552_14620[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (9))){
var inst_14422 = (state_14493[(2)]);
var state_14493__$1 = state_14493;
var statearr_14553_14621 = state_14493__$1;
(statearr_14553_14621[(2)] = inst_14422);

(statearr_14553_14621[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (5))){
var inst_14372 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14373 = cljs.core.seq(inst_14372);
var inst_14374 = inst_14373;
var inst_14375 = null;
var inst_14376 = (0);
var inst_14377 = (0);
var state_14493__$1 = (function (){var statearr_14554 = state_14493;
(statearr_14554[(13)] = inst_14377);

(statearr_14554[(14)] = inst_14374);

(statearr_14554[(15)] = inst_14376);

(statearr_14554[(16)] = inst_14375);

return statearr_14554;
})();
var statearr_14555_14622 = state_14493__$1;
(statearr_14555_14622[(2)] = null);

(statearr_14555_14622[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (14))){
var state_14493__$1 = state_14493;
var statearr_14556_14623 = state_14493__$1;
(statearr_14556_14623[(2)] = null);

(statearr_14556_14623[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (45))){
var inst_14483 = (state_14493[(2)]);
var state_14493__$1 = state_14493;
var statearr_14557_14624 = state_14493__$1;
(statearr_14557_14624[(2)] = inst_14483);

(statearr_14557_14624[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (26))){
var inst_14425 = (state_14493[(29)]);
var inst_14479 = (state_14493[(2)]);
var inst_14480 = cljs.core.seq(inst_14425);
var state_14493__$1 = (function (){var statearr_14558 = state_14493;
(statearr_14558[(31)] = inst_14479);

return statearr_14558;
})();
if(inst_14480){
var statearr_14559_14625 = state_14493__$1;
(statearr_14559_14625[(1)] = (42));

} else {
var statearr_14560_14626 = state_14493__$1;
(statearr_14560_14626[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (16))){
var inst_14394 = (state_14493[(7)]);
var inst_14396 = cljs.core.chunked_seq_QMARK_(inst_14394);
var state_14493__$1 = state_14493;
if(inst_14396){
var statearr_14561_14627 = state_14493__$1;
(statearr_14561_14627[(1)] = (19));

} else {
var statearr_14562_14628 = state_14493__$1;
(statearr_14562_14628[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (38))){
var inst_14472 = (state_14493[(2)]);
var state_14493__$1 = state_14493;
var statearr_14563_14629 = state_14493__$1;
(statearr_14563_14629[(2)] = inst_14472);

(statearr_14563_14629[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (30))){
var state_14493__$1 = state_14493;
var statearr_14564_14630 = state_14493__$1;
(statearr_14564_14630[(2)] = null);

(statearr_14564_14630[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (10))){
var inst_14377 = (state_14493[(13)]);
var inst_14375 = (state_14493[(16)]);
var inst_14383 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14375,inst_14377);
var inst_14384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14383,(0),null);
var inst_14385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14383,(1),null);
var state_14493__$1 = (function (){var statearr_14565 = state_14493;
(statearr_14565[(26)] = inst_14384);

return statearr_14565;
})();
if(cljs.core.truth_(inst_14385)){
var statearr_14566_14631 = state_14493__$1;
(statearr_14566_14631[(1)] = (13));

} else {
var statearr_14567_14632 = state_14493__$1;
(statearr_14567_14632[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (18))){
var inst_14418 = (state_14493[(2)]);
var state_14493__$1 = state_14493;
var statearr_14568_14633 = state_14493__$1;
(statearr_14568_14633[(2)] = inst_14418);

(statearr_14568_14633[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (42))){
var state_14493__$1 = state_14493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14493__$1,(45),dchan);
} else {
if((state_val_14494 === (37))){
var inst_14461 = (state_14493[(23)]);
var inst_14452 = (state_14493[(25)]);
var inst_14365 = (state_14493[(12)]);
var inst_14461__$1 = cljs.core.first(inst_14452);
var inst_14462 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14461__$1,inst_14365,done);
var state_14493__$1 = (function (){var statearr_14569 = state_14493;
(statearr_14569[(23)] = inst_14461__$1);

return statearr_14569;
})();
if(cljs.core.truth_(inst_14462)){
var statearr_14570_14634 = state_14493__$1;
(statearr_14570_14634[(1)] = (39));

} else {
var statearr_14571_14635 = state_14493__$1;
(statearr_14571_14635[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14494 === (8))){
var inst_14377 = (state_14493[(13)]);
var inst_14376 = (state_14493[(15)]);
var inst_14379 = (inst_14377 < inst_14376);
var inst_14380 = inst_14379;
var state_14493__$1 = state_14493;
if(cljs.core.truth_(inst_14380)){
var statearr_14572_14636 = state_14493__$1;
(statearr_14572_14636[(1)] = (10));

} else {
var statearr_14573_14637 = state_14493__$1;
(statearr_14573_14637[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___14583,cs,m,dchan,dctr,done))
;
return ((function (switch__13150__auto__,c__13264__auto___14583,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13151__auto__ = null;
var cljs$core$async$mult_$_state_machine__13151__auto____0 = (function (){
var statearr_14577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14577[(0)] = cljs$core$async$mult_$_state_machine__13151__auto__);

(statearr_14577[(1)] = (1));

return statearr_14577;
});
var cljs$core$async$mult_$_state_machine__13151__auto____1 = (function (state_14493){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_14493);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e14578){if((e14578 instanceof Object)){
var ex__13154__auto__ = e14578;
var statearr_14579_14638 = state_14493;
(statearr_14579_14638[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14493);

return cljs.core.cst$kw$recur;
} else {
throw e14578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__14639 = state_14493;
state_14493 = G__14639;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13151__auto__ = function(state_14493){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13151__auto____1.call(this,state_14493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13151__auto____0;
cljs$core$async$mult_$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13151__auto____1;
return cljs$core$async$mult_$_state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___14583,cs,m,dchan,dctr,done))
})();
var state__13266__auto__ = (function (){var statearr_14580 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_14580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___14583);

return statearr_14580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___14583,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args14640 = [];
var len__5729__auto___14643 = arguments.length;
var i__5730__auto___14644 = (0);
while(true){
if((i__5730__auto___14644 < len__5729__auto___14643)){
args14640.push((arguments[i__5730__auto___14644]));

var G__14645 = (i__5730__auto___14644 + (1));
i__5730__auto___14644 = G__14645;
continue;
} else {
}
break;
}

var G__14642 = args14640.length;
switch (G__14642) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14640.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto__.call(null,m,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto__.call(null,m,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5327__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto__.call(null,m));
} else {
var m__5327__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5327__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5327__auto__.call(null,m,state_map));
} else {
var m__5327__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5327__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5326__auto__ = (((m == null))?null:m);
var m__5327__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5327__auto__.call(null,m,mode));
} else {
var m__5327__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5327__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5736__auto__ = [];
var len__5729__auto___14657 = arguments.length;
var i__5730__auto___14658 = (0);
while(true){
if((i__5730__auto___14658 < len__5729__auto___14657)){
args__5736__auto__.push((arguments[i__5730__auto___14658]));

var G__14659 = (i__5730__auto___14658 + (1));
i__5730__auto___14658 = G__14659;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((3) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14651){
var map__14652 = p__14651;
var map__14652__$1 = ((((!((map__14652 == null)))?((((map__14652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14652):map__14652);
var opts = map__14652__$1;
var statearr_14654_14660 = state;
(statearr_14654_14660[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__14652,map__14652__$1,opts){
return (function (val){
var statearr_14655_14661 = state;
(statearr_14655_14661[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__14652,map__14652__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14656_14662 = state;
(statearr_14656_14662[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14647){
var G__14648 = cljs.core.first(seq14647);
var seq14647__$1 = cljs.core.next(seq14647);
var G__14649 = cljs.core.first(seq14647__$1);
var seq14647__$2 = cljs.core.next(seq14647__$1);
var G__14650 = cljs.core.first(seq14647__$2);
var seq14647__$3 = cljs.core.next(seq14647__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14648,G__14649,G__14650,seq14647__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__14829 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14829) : cljs.core.atom.call(null,G__14829));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14830 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14831){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14831 = meta14831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14832,meta14831__$1){
var self__ = this;
var _14832__$1 = this;
return (new cljs.core.async.t_cljs$core$async14830(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14831__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14832){
var self__ = this;
var _14832__$1 = this;
return self__.meta14831;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14833_14995 = self__.cs;
var G__14834_14996 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14833_14995,G__14834_14996) : cljs.core.reset_BANG_.call(null,G__14833_14995,G__14834_14996));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14830.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta14831], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14830";

cljs.core.async.t_cljs$core$async14830.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async14830");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14830 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14830(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14831){
return (new cljs.core.async.t_cljs$core$async14830(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14831));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14830(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13264__auto___14997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___14997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___14997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14932){
var state_val_14933 = (state_14932[(1)]);
if((state_val_14933 === (7))){
var inst_14850 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
var statearr_14934_14998 = state_14932__$1;
(statearr_14934_14998[(2)] = inst_14850);

(statearr_14934_14998[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (20))){
var inst_14862 = (state_14932[(7)]);
var state_14932__$1 = state_14932;
var statearr_14935_14999 = state_14932__$1;
(statearr_14935_14999[(2)] = inst_14862);

(statearr_14935_14999[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (27))){
var state_14932__$1 = state_14932;
var statearr_14936_15000 = state_14932__$1;
(statearr_14936_15000[(2)] = null);

(statearr_14936_15000[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (1))){
var inst_14838 = (state_14932[(8)]);
var inst_14838__$1 = calc_state();
var inst_14840 = (inst_14838__$1 == null);
var inst_14841 = cljs.core.not(inst_14840);
var state_14932__$1 = (function (){var statearr_14937 = state_14932;
(statearr_14937[(8)] = inst_14838__$1);

return statearr_14937;
})();
if(inst_14841){
var statearr_14938_15001 = state_14932__$1;
(statearr_14938_15001[(1)] = (2));

} else {
var statearr_14939_15002 = state_14932__$1;
(statearr_14939_15002[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (24))){
var inst_14906 = (state_14932[(9)]);
var inst_14892 = (state_14932[(10)]);
var inst_14885 = (state_14932[(11)]);
var inst_14906__$1 = (inst_14885.cljs$core$IFn$_invoke$arity$1 ? inst_14885.cljs$core$IFn$_invoke$arity$1(inst_14892) : inst_14885.call(null,inst_14892));
var state_14932__$1 = (function (){var statearr_14940 = state_14932;
(statearr_14940[(9)] = inst_14906__$1);

return statearr_14940;
})();
if(cljs.core.truth_(inst_14906__$1)){
var statearr_14941_15003 = state_14932__$1;
(statearr_14941_15003[(1)] = (29));

} else {
var statearr_14942_15004 = state_14932__$1;
(statearr_14942_15004[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (4))){
var inst_14853 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
if(cljs.core.truth_(inst_14853)){
var statearr_14943_15005 = state_14932__$1;
(statearr_14943_15005[(1)] = (8));

} else {
var statearr_14944_15006 = state_14932__$1;
(statearr_14944_15006[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (15))){
var inst_14879 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
if(cljs.core.truth_(inst_14879)){
var statearr_14945_15007 = state_14932__$1;
(statearr_14945_15007[(1)] = (19));

} else {
var statearr_14946_15008 = state_14932__$1;
(statearr_14946_15008[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (21))){
var inst_14884 = (state_14932[(12)]);
var inst_14884__$1 = (state_14932[(2)]);
var inst_14885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14884__$1,cljs.core.cst$kw$solos);
var inst_14886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14884__$1,cljs.core.cst$kw$mutes);
var inst_14887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14884__$1,cljs.core.cst$kw$reads);
var state_14932__$1 = (function (){var statearr_14947 = state_14932;
(statearr_14947[(13)] = inst_14886);

(statearr_14947[(12)] = inst_14884__$1);

(statearr_14947[(11)] = inst_14885);

return statearr_14947;
})();
return cljs.core.async.ioc_alts_BANG_(state_14932__$1,(22),inst_14887);
} else {
if((state_val_14933 === (31))){
var inst_14914 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
if(cljs.core.truth_(inst_14914)){
var statearr_14948_15009 = state_14932__$1;
(statearr_14948_15009[(1)] = (32));

} else {
var statearr_14949_15010 = state_14932__$1;
(statearr_14949_15010[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (32))){
var inst_14891 = (state_14932[(14)]);
var state_14932__$1 = state_14932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14932__$1,(35),out,inst_14891);
} else {
if((state_val_14933 === (33))){
var inst_14884 = (state_14932[(12)]);
var inst_14862 = inst_14884;
var state_14932__$1 = (function (){var statearr_14950 = state_14932;
(statearr_14950[(7)] = inst_14862);

return statearr_14950;
})();
var statearr_14951_15011 = state_14932__$1;
(statearr_14951_15011[(2)] = null);

(statearr_14951_15011[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (13))){
var inst_14862 = (state_14932[(7)]);
var inst_14869 = inst_14862.cljs$lang$protocol_mask$partition0$;
var inst_14870 = (inst_14869 & (64));
var inst_14871 = inst_14862.cljs$core$ISeq$;
var inst_14872 = (inst_14870) || (inst_14871);
var state_14932__$1 = state_14932;
if(cljs.core.truth_(inst_14872)){
var statearr_14952_15012 = state_14932__$1;
(statearr_14952_15012[(1)] = (16));

} else {
var statearr_14953_15013 = state_14932__$1;
(statearr_14953_15013[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (22))){
var inst_14891 = (state_14932[(14)]);
var inst_14892 = (state_14932[(10)]);
var inst_14890 = (state_14932[(2)]);
var inst_14891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14890,(0),null);
var inst_14892__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14890,(1),null);
var inst_14893 = (inst_14891__$1 == null);
var inst_14894 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14892__$1,change);
var inst_14895 = (inst_14893) || (inst_14894);
var state_14932__$1 = (function (){var statearr_14954 = state_14932;
(statearr_14954[(14)] = inst_14891__$1);

(statearr_14954[(10)] = inst_14892__$1);

return statearr_14954;
})();
if(cljs.core.truth_(inst_14895)){
var statearr_14955_15014 = state_14932__$1;
(statearr_14955_15014[(1)] = (23));

} else {
var statearr_14956_15015 = state_14932__$1;
(statearr_14956_15015[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (36))){
var inst_14884 = (state_14932[(12)]);
var inst_14862 = inst_14884;
var state_14932__$1 = (function (){var statearr_14957 = state_14932;
(statearr_14957[(7)] = inst_14862);

return statearr_14957;
})();
var statearr_14958_15016 = state_14932__$1;
(statearr_14958_15016[(2)] = null);

(statearr_14958_15016[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (29))){
var inst_14906 = (state_14932[(9)]);
var state_14932__$1 = state_14932;
var statearr_14959_15017 = state_14932__$1;
(statearr_14959_15017[(2)] = inst_14906);

(statearr_14959_15017[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (6))){
var state_14932__$1 = state_14932;
var statearr_14960_15018 = state_14932__$1;
(statearr_14960_15018[(2)] = false);

(statearr_14960_15018[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (28))){
var inst_14902 = (state_14932[(2)]);
var inst_14903 = calc_state();
var inst_14862 = inst_14903;
var state_14932__$1 = (function (){var statearr_14961 = state_14932;
(statearr_14961[(7)] = inst_14862);

(statearr_14961[(15)] = inst_14902);

return statearr_14961;
})();
var statearr_14962_15019 = state_14932__$1;
(statearr_14962_15019[(2)] = null);

(statearr_14962_15019[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (25))){
var inst_14928 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
var statearr_14963_15020 = state_14932__$1;
(statearr_14963_15020[(2)] = inst_14928);

(statearr_14963_15020[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (34))){
var inst_14926 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
var statearr_14964_15021 = state_14932__$1;
(statearr_14964_15021[(2)] = inst_14926);

(statearr_14964_15021[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (17))){
var state_14932__$1 = state_14932;
var statearr_14965_15022 = state_14932__$1;
(statearr_14965_15022[(2)] = false);

(statearr_14965_15022[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (3))){
var state_14932__$1 = state_14932;
var statearr_14966_15023 = state_14932__$1;
(statearr_14966_15023[(2)] = false);

(statearr_14966_15023[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (12))){
var inst_14930 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14932__$1,inst_14930);
} else {
if((state_val_14933 === (2))){
var inst_14838 = (state_14932[(8)]);
var inst_14843 = inst_14838.cljs$lang$protocol_mask$partition0$;
var inst_14844 = (inst_14843 & (64));
var inst_14845 = inst_14838.cljs$core$ISeq$;
var inst_14846 = (inst_14844) || (inst_14845);
var state_14932__$1 = state_14932;
if(cljs.core.truth_(inst_14846)){
var statearr_14967_15024 = state_14932__$1;
(statearr_14967_15024[(1)] = (5));

} else {
var statearr_14968_15025 = state_14932__$1;
(statearr_14968_15025[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (23))){
var inst_14891 = (state_14932[(14)]);
var inst_14897 = (inst_14891 == null);
var state_14932__$1 = state_14932;
if(cljs.core.truth_(inst_14897)){
var statearr_14969_15026 = state_14932__$1;
(statearr_14969_15026[(1)] = (26));

} else {
var statearr_14970_15027 = state_14932__$1;
(statearr_14970_15027[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (35))){
var inst_14917 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
if(cljs.core.truth_(inst_14917)){
var statearr_14971_15028 = state_14932__$1;
(statearr_14971_15028[(1)] = (36));

} else {
var statearr_14972_15029 = state_14932__$1;
(statearr_14972_15029[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (19))){
var inst_14862 = (state_14932[(7)]);
var inst_14881 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14862);
var state_14932__$1 = state_14932;
var statearr_14973_15030 = state_14932__$1;
(statearr_14973_15030[(2)] = inst_14881);

(statearr_14973_15030[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (11))){
var inst_14862 = (state_14932[(7)]);
var inst_14866 = (inst_14862 == null);
var inst_14867 = cljs.core.not(inst_14866);
var state_14932__$1 = state_14932;
if(inst_14867){
var statearr_14974_15031 = state_14932__$1;
(statearr_14974_15031[(1)] = (13));

} else {
var statearr_14975_15032 = state_14932__$1;
(statearr_14975_15032[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (9))){
var inst_14838 = (state_14932[(8)]);
var state_14932__$1 = state_14932;
var statearr_14976_15033 = state_14932__$1;
(statearr_14976_15033[(2)] = inst_14838);

(statearr_14976_15033[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (5))){
var state_14932__$1 = state_14932;
var statearr_14977_15034 = state_14932__$1;
(statearr_14977_15034[(2)] = true);

(statearr_14977_15034[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (14))){
var state_14932__$1 = state_14932;
var statearr_14978_15035 = state_14932__$1;
(statearr_14978_15035[(2)] = false);

(statearr_14978_15035[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (26))){
var inst_14892 = (state_14932[(10)]);
var inst_14899 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14892);
var state_14932__$1 = state_14932;
var statearr_14979_15036 = state_14932__$1;
(statearr_14979_15036[(2)] = inst_14899);

(statearr_14979_15036[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (16))){
var state_14932__$1 = state_14932;
var statearr_14980_15037 = state_14932__$1;
(statearr_14980_15037[(2)] = true);

(statearr_14980_15037[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (38))){
var inst_14922 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
var statearr_14981_15038 = state_14932__$1;
(statearr_14981_15038[(2)] = inst_14922);

(statearr_14981_15038[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (30))){
var inst_14886 = (state_14932[(13)]);
var inst_14892 = (state_14932[(10)]);
var inst_14885 = (state_14932[(11)]);
var inst_14909 = cljs.core.empty_QMARK_(inst_14885);
var inst_14910 = (inst_14886.cljs$core$IFn$_invoke$arity$1 ? inst_14886.cljs$core$IFn$_invoke$arity$1(inst_14892) : inst_14886.call(null,inst_14892));
var inst_14911 = cljs.core.not(inst_14910);
var inst_14912 = (inst_14909) && (inst_14911);
var state_14932__$1 = state_14932;
var statearr_14982_15039 = state_14932__$1;
(statearr_14982_15039[(2)] = inst_14912);

(statearr_14982_15039[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (10))){
var inst_14838 = (state_14932[(8)]);
var inst_14858 = (state_14932[(2)]);
var inst_14859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14858,cljs.core.cst$kw$solos);
var inst_14860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14858,cljs.core.cst$kw$mutes);
var inst_14861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14858,cljs.core.cst$kw$reads);
var inst_14862 = inst_14838;
var state_14932__$1 = (function (){var statearr_14983 = state_14932;
(statearr_14983[(7)] = inst_14862);

(statearr_14983[(16)] = inst_14861);

(statearr_14983[(17)] = inst_14860);

(statearr_14983[(18)] = inst_14859);

return statearr_14983;
})();
var statearr_14984_15040 = state_14932__$1;
(statearr_14984_15040[(2)] = null);

(statearr_14984_15040[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (18))){
var inst_14876 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
var statearr_14985_15041 = state_14932__$1;
(statearr_14985_15041[(2)] = inst_14876);

(statearr_14985_15041[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (37))){
var state_14932__$1 = state_14932;
var statearr_14986_15042 = state_14932__$1;
(statearr_14986_15042[(2)] = null);

(statearr_14986_15042[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14933 === (8))){
var inst_14838 = (state_14932[(8)]);
var inst_14855 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14838);
var state_14932__$1 = state_14932;
var statearr_14987_15043 = state_14932__$1;
(statearr_14987_15043[(2)] = inst_14855);

(statearr_14987_15043[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___14997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13150__auto__,c__13264__auto___14997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13151__auto__ = null;
var cljs$core$async$mix_$_state_machine__13151__auto____0 = (function (){
var statearr_14991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14991[(0)] = cljs$core$async$mix_$_state_machine__13151__auto__);

(statearr_14991[(1)] = (1));

return statearr_14991;
});
var cljs$core$async$mix_$_state_machine__13151__auto____1 = (function (state_14932){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_14932);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e14992){if((e14992 instanceof Object)){
var ex__13154__auto__ = e14992;
var statearr_14993_15044 = state_14932;
(statearr_14993_15044[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14932);

return cljs.core.cst$kw$recur;
} else {
throw e14992;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__15045 = state_14932;
state_14932 = G__15045;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13151__auto__ = function(state_14932){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13151__auto____1.call(this,state_14932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13151__auto____0;
cljs$core$async$mix_$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13151__auto____1;
return cljs$core$async$mix_$_state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___14997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13266__auto__ = (function (){var statearr_14994 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_14994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___14997);

return statearr_14994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___14997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5327__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5327__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5327__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5327__auto__.call(null,p,v,ch));
} else {
var m__5327__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5327__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15046 = [];
var len__5729__auto___15049 = arguments.length;
var i__5730__auto___15050 = (0);
while(true){
if((i__5730__auto___15050 < len__5729__auto___15049)){
args15046.push((arguments[i__5730__auto___15050]));

var G__15051 = (i__5730__auto___15050 + (1));
i__5730__auto___15050 = G__15051;
continue;
} else {
}
break;
}

var G__15048 = args15046.length;
switch (G__15048) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15046.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5327__auto__.call(null,p));
} else {
var m__5327__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5327__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5326__auto__ = (((p == null))?null:p);
var m__5327__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5327__auto__.call(null,p,v));
} else {
var m__5327__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5327__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args15054 = [];
var len__5729__auto___15182 = arguments.length;
var i__5730__auto___15183 = (0);
while(true){
if((i__5730__auto___15183 < len__5729__auto___15182)){
args15054.push((arguments[i__5730__auto___15183]));

var G__15184 = (i__5730__auto___15183 + (1));
i__5730__auto___15183 = G__15184;
continue;
} else {
}
break;
}

var G__15056 = args15054.length;
switch (G__15056) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15054.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__15057 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15057) : cljs.core.atom.call(null,G__15057));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4671__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4671__auto__,mults){
return (function (p1__15053_SHARP_){
if(cljs.core.truth_((p1__15053_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15053_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15053_SHARP_.call(null,topic)))){
return p1__15053_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15053_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4671__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15058 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15059){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15059 = meta15059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15060,meta15059__$1){
var self__ = this;
var _15060__$1 = this;
return (new cljs.core.async.t_cljs$core$async15058(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15059__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15060){
var self__ = this;
var _15060__$1 = this;
return self__.meta15059;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15058.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15058.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15058.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15058.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15061 = self__.mults;
var G__15062 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15061,G__15062) : cljs.core.reset_BANG_.call(null,G__15061,G__15062));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15058.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15059], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15058";

cljs.core.async.t_cljs$core$async15058.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async15058");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15058 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15059){
return (new cljs.core.async.t_cljs$core$async15058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15059));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15058(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13264__auto___15186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___15186,mults,ensure_mult,p){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___15186,mults,ensure_mult,p){
return (function (state_15134){
var state_val_15135 = (state_15134[(1)]);
if((state_val_15135 === (7))){
var inst_15130 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
var statearr_15136_15187 = state_15134__$1;
(statearr_15136_15187[(2)] = inst_15130);

(statearr_15136_15187[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (20))){
var state_15134__$1 = state_15134;
var statearr_15137_15188 = state_15134__$1;
(statearr_15137_15188[(2)] = null);

(statearr_15137_15188[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (1))){
var state_15134__$1 = state_15134;
var statearr_15138_15189 = state_15134__$1;
(statearr_15138_15189[(2)] = null);

(statearr_15138_15189[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (24))){
var inst_15113 = (state_15134[(7)]);
var inst_15122 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15113);
var state_15134__$1 = state_15134;
var statearr_15139_15190 = state_15134__$1;
(statearr_15139_15190[(2)] = inst_15122);

(statearr_15139_15190[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (4))){
var inst_15065 = (state_15134[(8)]);
var inst_15065__$1 = (state_15134[(2)]);
var inst_15066 = (inst_15065__$1 == null);
var state_15134__$1 = (function (){var statearr_15140 = state_15134;
(statearr_15140[(8)] = inst_15065__$1);

return statearr_15140;
})();
if(cljs.core.truth_(inst_15066)){
var statearr_15141_15191 = state_15134__$1;
(statearr_15141_15191[(1)] = (5));

} else {
var statearr_15142_15192 = state_15134__$1;
(statearr_15142_15192[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (15))){
var inst_15107 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
var statearr_15143_15193 = state_15134__$1;
(statearr_15143_15193[(2)] = inst_15107);

(statearr_15143_15193[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (21))){
var inst_15127 = (state_15134[(2)]);
var state_15134__$1 = (function (){var statearr_15144 = state_15134;
(statearr_15144[(9)] = inst_15127);

return statearr_15144;
})();
var statearr_15145_15194 = state_15134__$1;
(statearr_15145_15194[(2)] = null);

(statearr_15145_15194[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (13))){
var inst_15089 = (state_15134[(10)]);
var inst_15091 = cljs.core.chunked_seq_QMARK_(inst_15089);
var state_15134__$1 = state_15134;
if(inst_15091){
var statearr_15146_15195 = state_15134__$1;
(statearr_15146_15195[(1)] = (16));

} else {
var statearr_15147_15196 = state_15134__$1;
(statearr_15147_15196[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (22))){
var inst_15119 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
if(cljs.core.truth_(inst_15119)){
var statearr_15148_15197 = state_15134__$1;
(statearr_15148_15197[(1)] = (23));

} else {
var statearr_15149_15198 = state_15134__$1;
(statearr_15149_15198[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (6))){
var inst_15065 = (state_15134[(8)]);
var inst_15115 = (state_15134[(11)]);
var inst_15113 = (state_15134[(7)]);
var inst_15113__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15065) : topic_fn.call(null,inst_15065));
var inst_15114 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15115__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15114,inst_15113__$1);
var state_15134__$1 = (function (){var statearr_15150 = state_15134;
(statearr_15150[(11)] = inst_15115__$1);

(statearr_15150[(7)] = inst_15113__$1);

return statearr_15150;
})();
if(cljs.core.truth_(inst_15115__$1)){
var statearr_15151_15199 = state_15134__$1;
(statearr_15151_15199[(1)] = (19));

} else {
var statearr_15152_15200 = state_15134__$1;
(statearr_15152_15200[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (25))){
var inst_15124 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
var statearr_15153_15201 = state_15134__$1;
(statearr_15153_15201[(2)] = inst_15124);

(statearr_15153_15201[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (17))){
var inst_15089 = (state_15134[(10)]);
var inst_15098 = cljs.core.first(inst_15089);
var inst_15099 = cljs.core.async.muxch_STAR_(inst_15098);
var inst_15100 = cljs.core.async.close_BANG_(inst_15099);
var inst_15101 = cljs.core.next(inst_15089);
var inst_15075 = inst_15101;
var inst_15076 = null;
var inst_15077 = (0);
var inst_15078 = (0);
var state_15134__$1 = (function (){var statearr_15154 = state_15134;
(statearr_15154[(12)] = inst_15078);

(statearr_15154[(13)] = inst_15100);

(statearr_15154[(14)] = inst_15076);

(statearr_15154[(15)] = inst_15077);

(statearr_15154[(16)] = inst_15075);

return statearr_15154;
})();
var statearr_15155_15202 = state_15134__$1;
(statearr_15155_15202[(2)] = null);

(statearr_15155_15202[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (3))){
var inst_15132 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15134__$1,inst_15132);
} else {
if((state_val_15135 === (12))){
var inst_15109 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
var statearr_15156_15203 = state_15134__$1;
(statearr_15156_15203[(2)] = inst_15109);

(statearr_15156_15203[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (2))){
var state_15134__$1 = state_15134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15134__$1,(4),ch);
} else {
if((state_val_15135 === (23))){
var state_15134__$1 = state_15134;
var statearr_15157_15204 = state_15134__$1;
(statearr_15157_15204[(2)] = null);

(statearr_15157_15204[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (19))){
var inst_15065 = (state_15134[(8)]);
var inst_15115 = (state_15134[(11)]);
var inst_15117 = cljs.core.async.muxch_STAR_(inst_15115);
var state_15134__$1 = state_15134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15134__$1,(22),inst_15117,inst_15065);
} else {
if((state_val_15135 === (11))){
var inst_15089 = (state_15134[(10)]);
var inst_15075 = (state_15134[(16)]);
var inst_15089__$1 = cljs.core.seq(inst_15075);
var state_15134__$1 = (function (){var statearr_15158 = state_15134;
(statearr_15158[(10)] = inst_15089__$1);

return statearr_15158;
})();
if(inst_15089__$1){
var statearr_15159_15205 = state_15134__$1;
(statearr_15159_15205[(1)] = (13));

} else {
var statearr_15160_15206 = state_15134__$1;
(statearr_15160_15206[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (9))){
var inst_15111 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
var statearr_15161_15207 = state_15134__$1;
(statearr_15161_15207[(2)] = inst_15111);

(statearr_15161_15207[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (5))){
var inst_15072 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15073 = cljs.core.vals(inst_15072);
var inst_15074 = cljs.core.seq(inst_15073);
var inst_15075 = inst_15074;
var inst_15076 = null;
var inst_15077 = (0);
var inst_15078 = (0);
var state_15134__$1 = (function (){var statearr_15162 = state_15134;
(statearr_15162[(12)] = inst_15078);

(statearr_15162[(14)] = inst_15076);

(statearr_15162[(15)] = inst_15077);

(statearr_15162[(16)] = inst_15075);

return statearr_15162;
})();
var statearr_15163_15208 = state_15134__$1;
(statearr_15163_15208[(2)] = null);

(statearr_15163_15208[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (14))){
var state_15134__$1 = state_15134;
var statearr_15167_15209 = state_15134__$1;
(statearr_15167_15209[(2)] = null);

(statearr_15167_15209[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (16))){
var inst_15089 = (state_15134[(10)]);
var inst_15093 = cljs.core.chunk_first(inst_15089);
var inst_15094 = cljs.core.chunk_rest(inst_15089);
var inst_15095 = cljs.core.count(inst_15093);
var inst_15075 = inst_15094;
var inst_15076 = inst_15093;
var inst_15077 = inst_15095;
var inst_15078 = (0);
var state_15134__$1 = (function (){var statearr_15168 = state_15134;
(statearr_15168[(12)] = inst_15078);

(statearr_15168[(14)] = inst_15076);

(statearr_15168[(15)] = inst_15077);

(statearr_15168[(16)] = inst_15075);

return statearr_15168;
})();
var statearr_15169_15210 = state_15134__$1;
(statearr_15169_15210[(2)] = null);

(statearr_15169_15210[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (10))){
var inst_15078 = (state_15134[(12)]);
var inst_15076 = (state_15134[(14)]);
var inst_15077 = (state_15134[(15)]);
var inst_15075 = (state_15134[(16)]);
var inst_15083 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15076,inst_15078);
var inst_15084 = cljs.core.async.muxch_STAR_(inst_15083);
var inst_15085 = cljs.core.async.close_BANG_(inst_15084);
var inst_15086 = (inst_15078 + (1));
var tmp15164 = inst_15076;
var tmp15165 = inst_15077;
var tmp15166 = inst_15075;
var inst_15075__$1 = tmp15166;
var inst_15076__$1 = tmp15164;
var inst_15077__$1 = tmp15165;
var inst_15078__$1 = inst_15086;
var state_15134__$1 = (function (){var statearr_15170 = state_15134;
(statearr_15170[(12)] = inst_15078__$1);

(statearr_15170[(14)] = inst_15076__$1);

(statearr_15170[(15)] = inst_15077__$1);

(statearr_15170[(16)] = inst_15075__$1);

(statearr_15170[(17)] = inst_15085);

return statearr_15170;
})();
var statearr_15171_15211 = state_15134__$1;
(statearr_15171_15211[(2)] = null);

(statearr_15171_15211[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (18))){
var inst_15104 = (state_15134[(2)]);
var state_15134__$1 = state_15134;
var statearr_15172_15212 = state_15134__$1;
(statearr_15172_15212[(2)] = inst_15104);

(statearr_15172_15212[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15135 === (8))){
var inst_15078 = (state_15134[(12)]);
var inst_15077 = (state_15134[(15)]);
var inst_15080 = (inst_15078 < inst_15077);
var inst_15081 = inst_15080;
var state_15134__$1 = state_15134;
if(cljs.core.truth_(inst_15081)){
var statearr_15173_15213 = state_15134__$1;
(statearr_15173_15213[(1)] = (10));

} else {
var statearr_15174_15214 = state_15134__$1;
(statearr_15174_15214[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___15186,mults,ensure_mult,p))
;
return ((function (switch__13150__auto__,c__13264__auto___15186,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13151__auto__ = null;
var cljs$core$async$state_machine__13151__auto____0 = (function (){
var statearr_15178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15178[(0)] = cljs$core$async$state_machine__13151__auto__);

(statearr_15178[(1)] = (1));

return statearr_15178;
});
var cljs$core$async$state_machine__13151__auto____1 = (function (state_15134){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_15134);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e15179){if((e15179 instanceof Object)){
var ex__13154__auto__ = e15179;
var statearr_15180_15215 = state_15134;
(statearr_15180_15215[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15134);

return cljs.core.cst$kw$recur;
} else {
throw e15179;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__15216 = state_15134;
state_15134 = G__15216;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$state_machine__13151__auto__ = function(state_15134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13151__auto____1.call(this,state_15134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13151__auto____0;
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13151__auto____1;
return cljs$core$async$state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___15186,mults,ensure_mult,p))
})();
var state__13266__auto__ = (function (){var statearr_15181 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_15181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___15186);

return statearr_15181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___15186,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15217 = [];
var len__5729__auto___15220 = arguments.length;
var i__5730__auto___15221 = (0);
while(true){
if((i__5730__auto___15221 < len__5729__auto___15220)){
args15217.push((arguments[i__5730__auto___15221]));

var G__15222 = (i__5730__auto___15221 + (1));
i__5730__auto___15221 = G__15222;
continue;
} else {
}
break;
}

var G__15219 = args15217.length;
switch (G__15219) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15217.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args15224 = [];
var len__5729__auto___15227 = arguments.length;
var i__5730__auto___15228 = (0);
while(true){
if((i__5730__auto___15228 < len__5729__auto___15227)){
args15224.push((arguments[i__5730__auto___15228]));

var G__15229 = (i__5730__auto___15228 + (1));
i__5730__auto___15228 = G__15229;
continue;
} else {
}
break;
}

var G__15226 = args15224.length;
switch (G__15226) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15224.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args15231 = [];
var len__5729__auto___15302 = arguments.length;
var i__5730__auto___15303 = (0);
while(true){
if((i__5730__auto___15303 < len__5729__auto___15302)){
args15231.push((arguments[i__5730__auto___15303]));

var G__15304 = (i__5730__auto___15303 + (1));
i__5730__auto___15303 = G__15304;
continue;
} else {
}
break;
}

var G__15233 = args15231.length;
switch (G__15233) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15231.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13264__auto___15306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___15306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___15306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15272){
var state_val_15273 = (state_15272[(1)]);
if((state_val_15273 === (7))){
var state_15272__$1 = state_15272;
var statearr_15274_15307 = state_15272__$1;
(statearr_15274_15307[(2)] = null);

(statearr_15274_15307[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (1))){
var state_15272__$1 = state_15272;
var statearr_15275_15308 = state_15272__$1;
(statearr_15275_15308[(2)] = null);

(statearr_15275_15308[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (4))){
var inst_15236 = (state_15272[(7)]);
var inst_15238 = (inst_15236 < cnt);
var state_15272__$1 = state_15272;
if(cljs.core.truth_(inst_15238)){
var statearr_15276_15309 = state_15272__$1;
(statearr_15276_15309[(1)] = (6));

} else {
var statearr_15277_15310 = state_15272__$1;
(statearr_15277_15310[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (15))){
var inst_15268 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
var statearr_15278_15311 = state_15272__$1;
(statearr_15278_15311[(2)] = inst_15268);

(statearr_15278_15311[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (13))){
var inst_15261 = cljs.core.async.close_BANG_(out);
var state_15272__$1 = state_15272;
var statearr_15279_15312 = state_15272__$1;
(statearr_15279_15312[(2)] = inst_15261);

(statearr_15279_15312[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (6))){
var state_15272__$1 = state_15272;
var statearr_15280_15313 = state_15272__$1;
(statearr_15280_15313[(2)] = null);

(statearr_15280_15313[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (3))){
var inst_15270 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15272__$1,inst_15270);
} else {
if((state_val_15273 === (12))){
var inst_15258 = (state_15272[(8)]);
var inst_15258__$1 = (state_15272[(2)]);
var inst_15259 = cljs.core.some(cljs.core.nil_QMARK_,inst_15258__$1);
var state_15272__$1 = (function (){var statearr_15281 = state_15272;
(statearr_15281[(8)] = inst_15258__$1);

return statearr_15281;
})();
if(cljs.core.truth_(inst_15259)){
var statearr_15282_15314 = state_15272__$1;
(statearr_15282_15314[(1)] = (13));

} else {
var statearr_15283_15315 = state_15272__$1;
(statearr_15283_15315[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (2))){
var inst_15235 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_15236 = (0);
var state_15272__$1 = (function (){var statearr_15284 = state_15272;
(statearr_15284[(7)] = inst_15236);

(statearr_15284[(9)] = inst_15235);

return statearr_15284;
})();
var statearr_15285_15316 = state_15272__$1;
(statearr_15285_15316[(2)] = null);

(statearr_15285_15316[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (11))){
var inst_15236 = (state_15272[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15272,(10),Object,null,(9));
var inst_15245 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15236) : chs__$1.call(null,inst_15236));
var inst_15246 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15236) : done.call(null,inst_15236));
var inst_15247 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15245,inst_15246);
var state_15272__$1 = state_15272;
var statearr_15286_15317 = state_15272__$1;
(statearr_15286_15317[(2)] = inst_15247);


cljs.core.async.impl.ioc_helpers.process_exception(state_15272__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (9))){
var inst_15236 = (state_15272[(7)]);
var inst_15249 = (state_15272[(2)]);
var inst_15250 = (inst_15236 + (1));
var inst_15236__$1 = inst_15250;
var state_15272__$1 = (function (){var statearr_15287 = state_15272;
(statearr_15287[(10)] = inst_15249);

(statearr_15287[(7)] = inst_15236__$1);

return statearr_15287;
})();
var statearr_15288_15318 = state_15272__$1;
(statearr_15288_15318[(2)] = null);

(statearr_15288_15318[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (5))){
var inst_15256 = (state_15272[(2)]);
var state_15272__$1 = (function (){var statearr_15289 = state_15272;
(statearr_15289[(11)] = inst_15256);

return statearr_15289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15272__$1,(12),dchan);
} else {
if((state_val_15273 === (14))){
var inst_15258 = (state_15272[(8)]);
var inst_15263 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15258);
var state_15272__$1 = state_15272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15272__$1,(16),out,inst_15263);
} else {
if((state_val_15273 === (16))){
var inst_15265 = (state_15272[(2)]);
var state_15272__$1 = (function (){var statearr_15290 = state_15272;
(statearr_15290[(12)] = inst_15265);

return statearr_15290;
})();
var statearr_15291_15319 = state_15272__$1;
(statearr_15291_15319[(2)] = null);

(statearr_15291_15319[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (10))){
var inst_15240 = (state_15272[(2)]);
var inst_15241 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15272__$1 = (function (){var statearr_15292 = state_15272;
(statearr_15292[(13)] = inst_15240);

return statearr_15292;
})();
var statearr_15293_15320 = state_15272__$1;
(statearr_15293_15320[(2)] = inst_15241);


cljs.core.async.impl.ioc_helpers.process_exception(state_15272__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15273 === (8))){
var inst_15254 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
var statearr_15294_15321 = state_15272__$1;
(statearr_15294_15321[(2)] = inst_15254);

(statearr_15294_15321[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___15306,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13150__auto__,c__13264__auto___15306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13151__auto__ = null;
var cljs$core$async$state_machine__13151__auto____0 = (function (){
var statearr_15298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15298[(0)] = cljs$core$async$state_machine__13151__auto__);

(statearr_15298[(1)] = (1));

return statearr_15298;
});
var cljs$core$async$state_machine__13151__auto____1 = (function (state_15272){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_15272);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e15299){if((e15299 instanceof Object)){
var ex__13154__auto__ = e15299;
var statearr_15300_15322 = state_15272;
(statearr_15300_15322[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15272);

return cljs.core.cst$kw$recur;
} else {
throw e15299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__15323 = state_15272;
state_15272 = G__15323;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$state_machine__13151__auto__ = function(state_15272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13151__auto____1.call(this,state_15272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13151__auto____0;
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13151__auto____1;
return cljs$core$async$state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___15306,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13266__auto__ = (function (){var statearr_15301 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_15301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___15306);

return statearr_15301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___15306,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15325 = [];
var len__5729__auto___15381 = arguments.length;
var i__5730__auto___15382 = (0);
while(true){
if((i__5730__auto___15382 < len__5729__auto___15381)){
args15325.push((arguments[i__5730__auto___15382]));

var G__15383 = (i__5730__auto___15382 + (1));
i__5730__auto___15382 = G__15383;
continue;
} else {
}
break;
}

var G__15327 = args15325.length;
switch (G__15327) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15325.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13264__auto___15385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___15385,out){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___15385,out){
return (function (state_15357){
var state_val_15358 = (state_15357[(1)]);
if((state_val_15358 === (7))){
var inst_15336 = (state_15357[(7)]);
var inst_15337 = (state_15357[(8)]);
var inst_15336__$1 = (state_15357[(2)]);
var inst_15337__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15336__$1,(0),null);
var inst_15338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15336__$1,(1),null);
var inst_15339 = (inst_15337__$1 == null);
var state_15357__$1 = (function (){var statearr_15359 = state_15357;
(statearr_15359[(7)] = inst_15336__$1);

(statearr_15359[(9)] = inst_15338);

(statearr_15359[(8)] = inst_15337__$1);

return statearr_15359;
})();
if(cljs.core.truth_(inst_15339)){
var statearr_15360_15386 = state_15357__$1;
(statearr_15360_15386[(1)] = (8));

} else {
var statearr_15361_15387 = state_15357__$1;
(statearr_15361_15387[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15358 === (1))){
var inst_15328 = cljs.core.vec(chs);
var inst_15329 = inst_15328;
var state_15357__$1 = (function (){var statearr_15362 = state_15357;
(statearr_15362[(10)] = inst_15329);

return statearr_15362;
})();
var statearr_15363_15388 = state_15357__$1;
(statearr_15363_15388[(2)] = null);

(statearr_15363_15388[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15358 === (4))){
var inst_15329 = (state_15357[(10)]);
var state_15357__$1 = state_15357;
return cljs.core.async.ioc_alts_BANG_(state_15357__$1,(7),inst_15329);
} else {
if((state_val_15358 === (6))){
var inst_15353 = (state_15357[(2)]);
var state_15357__$1 = state_15357;
var statearr_15364_15389 = state_15357__$1;
(statearr_15364_15389[(2)] = inst_15353);

(statearr_15364_15389[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15358 === (3))){
var inst_15355 = (state_15357[(2)]);
var state_15357__$1 = state_15357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15357__$1,inst_15355);
} else {
if((state_val_15358 === (2))){
var inst_15329 = (state_15357[(10)]);
var inst_15331 = cljs.core.count(inst_15329);
var inst_15332 = (inst_15331 > (0));
var state_15357__$1 = state_15357;
if(cljs.core.truth_(inst_15332)){
var statearr_15366_15390 = state_15357__$1;
(statearr_15366_15390[(1)] = (4));

} else {
var statearr_15367_15391 = state_15357__$1;
(statearr_15367_15391[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15358 === (11))){
var inst_15329 = (state_15357[(10)]);
var inst_15346 = (state_15357[(2)]);
var tmp15365 = inst_15329;
var inst_15329__$1 = tmp15365;
var state_15357__$1 = (function (){var statearr_15368 = state_15357;
(statearr_15368[(10)] = inst_15329__$1);

(statearr_15368[(11)] = inst_15346);

return statearr_15368;
})();
var statearr_15369_15392 = state_15357__$1;
(statearr_15369_15392[(2)] = null);

(statearr_15369_15392[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15358 === (9))){
var inst_15337 = (state_15357[(8)]);
var state_15357__$1 = state_15357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15357__$1,(11),out,inst_15337);
} else {
if((state_val_15358 === (5))){
var inst_15351 = cljs.core.async.close_BANG_(out);
var state_15357__$1 = state_15357;
var statearr_15370_15393 = state_15357__$1;
(statearr_15370_15393[(2)] = inst_15351);

(statearr_15370_15393[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15358 === (10))){
var inst_15349 = (state_15357[(2)]);
var state_15357__$1 = state_15357;
var statearr_15371_15394 = state_15357__$1;
(statearr_15371_15394[(2)] = inst_15349);

(statearr_15371_15394[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15358 === (8))){
var inst_15336 = (state_15357[(7)]);
var inst_15338 = (state_15357[(9)]);
var inst_15337 = (state_15357[(8)]);
var inst_15329 = (state_15357[(10)]);
var inst_15341 = (function (){var cs = inst_15329;
var vec__15334 = inst_15336;
var v = inst_15337;
var c = inst_15338;
return ((function (cs,vec__15334,v,c,inst_15336,inst_15338,inst_15337,inst_15329,state_val_15358,c__13264__auto___15385,out){
return (function (p1__15324_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15324_SHARP_);
});
;})(cs,vec__15334,v,c,inst_15336,inst_15338,inst_15337,inst_15329,state_val_15358,c__13264__auto___15385,out))
})();
var inst_15342 = cljs.core.filterv(inst_15341,inst_15329);
var inst_15329__$1 = inst_15342;
var state_15357__$1 = (function (){var statearr_15372 = state_15357;
(statearr_15372[(10)] = inst_15329__$1);

return statearr_15372;
})();
var statearr_15373_15395 = state_15357__$1;
(statearr_15373_15395[(2)] = null);

(statearr_15373_15395[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___15385,out))
;
return ((function (switch__13150__auto__,c__13264__auto___15385,out){
return (function() {
var cljs$core$async$state_machine__13151__auto__ = null;
var cljs$core$async$state_machine__13151__auto____0 = (function (){
var statearr_15377 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15377[(0)] = cljs$core$async$state_machine__13151__auto__);

(statearr_15377[(1)] = (1));

return statearr_15377;
});
var cljs$core$async$state_machine__13151__auto____1 = (function (state_15357){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_15357);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e15378){if((e15378 instanceof Object)){
var ex__13154__auto__ = e15378;
var statearr_15379_15396 = state_15357;
(statearr_15379_15396[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15357);

return cljs.core.cst$kw$recur;
} else {
throw e15378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__15397 = state_15357;
state_15357 = G__15397;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$state_machine__13151__auto__ = function(state_15357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13151__auto____1.call(this,state_15357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13151__auto____0;
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13151__auto____1;
return cljs$core$async$state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___15385,out))
})();
var state__13266__auto__ = (function (){var statearr_15380 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_15380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___15385);

return statearr_15380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___15385,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15398 = [];
var len__5729__auto___15447 = arguments.length;
var i__5730__auto___15448 = (0);
while(true){
if((i__5730__auto___15448 < len__5729__auto___15447)){
args15398.push((arguments[i__5730__auto___15448]));

var G__15449 = (i__5730__auto___15448 + (1));
i__5730__auto___15448 = G__15449;
continue;
} else {
}
break;
}

var G__15400 = args15398.length;
switch (G__15400) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15398.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13264__auto___15451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___15451,out){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___15451,out){
return (function (state_15424){
var state_val_15425 = (state_15424[(1)]);
if((state_val_15425 === (7))){
var inst_15406 = (state_15424[(7)]);
var inst_15406__$1 = (state_15424[(2)]);
var inst_15407 = (inst_15406__$1 == null);
var inst_15408 = cljs.core.not(inst_15407);
var state_15424__$1 = (function (){var statearr_15426 = state_15424;
(statearr_15426[(7)] = inst_15406__$1);

return statearr_15426;
})();
if(inst_15408){
var statearr_15427_15452 = state_15424__$1;
(statearr_15427_15452[(1)] = (8));

} else {
var statearr_15428_15453 = state_15424__$1;
(statearr_15428_15453[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15425 === (1))){
var inst_15401 = (0);
var state_15424__$1 = (function (){var statearr_15429 = state_15424;
(statearr_15429[(8)] = inst_15401);

return statearr_15429;
})();
var statearr_15430_15454 = state_15424__$1;
(statearr_15430_15454[(2)] = null);

(statearr_15430_15454[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15425 === (4))){
var state_15424__$1 = state_15424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15424__$1,(7),ch);
} else {
if((state_val_15425 === (6))){
var inst_15419 = (state_15424[(2)]);
var state_15424__$1 = state_15424;
var statearr_15431_15455 = state_15424__$1;
(statearr_15431_15455[(2)] = inst_15419);

(statearr_15431_15455[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15425 === (3))){
var inst_15421 = (state_15424[(2)]);
var inst_15422 = cljs.core.async.close_BANG_(out);
var state_15424__$1 = (function (){var statearr_15432 = state_15424;
(statearr_15432[(9)] = inst_15421);

return statearr_15432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15424__$1,inst_15422);
} else {
if((state_val_15425 === (2))){
var inst_15401 = (state_15424[(8)]);
var inst_15403 = (inst_15401 < n);
var state_15424__$1 = state_15424;
if(cljs.core.truth_(inst_15403)){
var statearr_15433_15456 = state_15424__$1;
(statearr_15433_15456[(1)] = (4));

} else {
var statearr_15434_15457 = state_15424__$1;
(statearr_15434_15457[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15425 === (11))){
var inst_15401 = (state_15424[(8)]);
var inst_15411 = (state_15424[(2)]);
var inst_15412 = (inst_15401 + (1));
var inst_15401__$1 = inst_15412;
var state_15424__$1 = (function (){var statearr_15435 = state_15424;
(statearr_15435[(8)] = inst_15401__$1);

(statearr_15435[(10)] = inst_15411);

return statearr_15435;
})();
var statearr_15436_15458 = state_15424__$1;
(statearr_15436_15458[(2)] = null);

(statearr_15436_15458[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15425 === (9))){
var state_15424__$1 = state_15424;
var statearr_15437_15459 = state_15424__$1;
(statearr_15437_15459[(2)] = null);

(statearr_15437_15459[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15425 === (5))){
var state_15424__$1 = state_15424;
var statearr_15438_15460 = state_15424__$1;
(statearr_15438_15460[(2)] = null);

(statearr_15438_15460[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15425 === (10))){
var inst_15416 = (state_15424[(2)]);
var state_15424__$1 = state_15424;
var statearr_15439_15461 = state_15424__$1;
(statearr_15439_15461[(2)] = inst_15416);

(statearr_15439_15461[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15425 === (8))){
var inst_15406 = (state_15424[(7)]);
var state_15424__$1 = state_15424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15424__$1,(11),out,inst_15406);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___15451,out))
;
return ((function (switch__13150__auto__,c__13264__auto___15451,out){
return (function() {
var cljs$core$async$state_machine__13151__auto__ = null;
var cljs$core$async$state_machine__13151__auto____0 = (function (){
var statearr_15443 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15443[(0)] = cljs$core$async$state_machine__13151__auto__);

(statearr_15443[(1)] = (1));

return statearr_15443;
});
var cljs$core$async$state_machine__13151__auto____1 = (function (state_15424){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_15424);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e15444){if((e15444 instanceof Object)){
var ex__13154__auto__ = e15444;
var statearr_15445_15462 = state_15424;
(statearr_15445_15462[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15424);

return cljs.core.cst$kw$recur;
} else {
throw e15444;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__15463 = state_15424;
state_15424 = G__15463;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$state_machine__13151__auto__ = function(state_15424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13151__auto____1.call(this,state_15424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13151__auto____0;
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13151__auto____1;
return cljs$core$async$state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___15451,out))
})();
var state__13266__auto__ = (function (){var statearr_15446 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_15446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___15451);

return statearr_15446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___15451,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15473 = (function (map_LT_,f,ch,meta15474){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15474 = meta15474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15475,meta15474__$1){
var self__ = this;
var _15475__$1 = this;
return (new cljs.core.async.t_cljs$core$async15473(self__.map_LT_,self__.f,self__.ch,meta15474__$1));
});

cljs.core.async.t_cljs$core$async15473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15475){
var self__ = this;
var _15475__$1 = this;
return self__.meta15474;
});

cljs.core.async.t_cljs$core$async15473.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15473.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15476 = (function (map_LT_,f,ch,meta15474,_,fn1,meta15477){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15474 = meta15474;
this._ = _;
this.fn1 = fn1;
this.meta15477 = meta15477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15478,meta15477__$1){
var self__ = this;
var _15478__$1 = this;
return (new cljs.core.async.t_cljs$core$async15476(self__.map_LT_,self__.f,self__.ch,self__.meta15474,self__._,self__.fn1,meta15477__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15478){
var self__ = this;
var _15478__$1 = this;
return self__.meta15477;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15464_SHARP_){
var G__15479 = (((p1__15464_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15464_SHARP_) : self__.f.call(null,p1__15464_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15479) : f1.call(null,G__15479));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15476.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15474,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async15473], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta15477], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15476";

cljs.core.async.t_cljs$core$async15476.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async15476");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15476 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15476(map_LT___$1,f__$1,ch__$1,meta15474__$1,___$2,fn1__$1,meta15477){
return (new cljs.core.async.t_cljs$core$async15476(map_LT___$1,f__$1,ch__$1,meta15474__$1,___$2,fn1__$1,meta15477));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15476(self__.map_LT_,self__.f,self__.ch,self__.meta15474,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4659__auto__ = ret;
if(cljs.core.truth_(and__4659__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4659__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15480 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15480) : self__.f.call(null,G__15480));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15473.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15474], null);
});

cljs.core.async.t_cljs$core$async15473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15473";

cljs.core.async.t_cljs$core$async15473.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async15473");
});

cljs.core.async.__GT_t_cljs$core$async15473 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15473(map_LT___$1,f__$1,ch__$1,meta15474){
return (new cljs.core.async.t_cljs$core$async15473(map_LT___$1,f__$1,ch__$1,meta15474));
});

}

return (new cljs.core.async.t_cljs$core$async15473(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15484 = (function (map_GT_,f,ch,meta15485){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15485 = meta15485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15486,meta15485__$1){
var self__ = this;
var _15486__$1 = this;
return (new cljs.core.async.t_cljs$core$async15484(self__.map_GT_,self__.f,self__.ch,meta15485__$1));
});

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15486){
var self__ = this;
var _15486__$1 = this;
return self__.meta15485;
});

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async15484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15485], null);
});

cljs.core.async.t_cljs$core$async15484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15484";

cljs.core.async.t_cljs$core$async15484.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async15484");
});

cljs.core.async.__GT_t_cljs$core$async15484 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15484(map_GT___$1,f__$1,ch__$1,meta15485){
return (new cljs.core.async.t_cljs$core$async15484(map_GT___$1,f__$1,ch__$1,meta15485));
});

}

return (new cljs.core.async.t_cljs$core$async15484(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15490 = (function (filter_GT_,p,ch,meta15491){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15491 = meta15491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15492,meta15491__$1){
var self__ = this;
var _15492__$1 = this;
return (new cljs.core.async.t_cljs$core$async15490(self__.filter_GT_,self__.p,self__.ch,meta15491__$1));
});

cljs.core.async.t_cljs$core$async15490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15492){
var self__ = this;
var _15492__$1 = this;
return self__.meta15491;
});

cljs.core.async.t_cljs$core$async15490.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15490.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async15490.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async15490.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15490.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15490.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15490.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta15491], null);
});

cljs.core.async.t_cljs$core$async15490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15490";

cljs.core.async.t_cljs$core$async15490.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"cljs.core.async/t_cljs$core$async15490");
});

cljs.core.async.__GT_t_cljs$core$async15490 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15490(filter_GT___$1,p__$1,ch__$1,meta15491){
return (new cljs.core.async.t_cljs$core$async15490(filter_GT___$1,p__$1,ch__$1,meta15491));
});

}

return (new cljs.core.async.t_cljs$core$async15490(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args15493 = [];
var len__5729__auto___15537 = arguments.length;
var i__5730__auto___15538 = (0);
while(true){
if((i__5730__auto___15538 < len__5729__auto___15537)){
args15493.push((arguments[i__5730__auto___15538]));

var G__15539 = (i__5730__auto___15538 + (1));
i__5730__auto___15538 = G__15539;
continue;
} else {
}
break;
}

var G__15495 = args15493.length;
switch (G__15495) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15493.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13264__auto___15541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___15541,out){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___15541,out){
return (function (state_15516){
var state_val_15517 = (state_15516[(1)]);
if((state_val_15517 === (7))){
var inst_15512 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
var statearr_15518_15542 = state_15516__$1;
(statearr_15518_15542[(2)] = inst_15512);

(statearr_15518_15542[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15517 === (1))){
var state_15516__$1 = state_15516;
var statearr_15519_15543 = state_15516__$1;
(statearr_15519_15543[(2)] = null);

(statearr_15519_15543[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15517 === (4))){
var inst_15498 = (state_15516[(7)]);
var inst_15498__$1 = (state_15516[(2)]);
var inst_15499 = (inst_15498__$1 == null);
var state_15516__$1 = (function (){var statearr_15520 = state_15516;
(statearr_15520[(7)] = inst_15498__$1);

return statearr_15520;
})();
if(cljs.core.truth_(inst_15499)){
var statearr_15521_15544 = state_15516__$1;
(statearr_15521_15544[(1)] = (5));

} else {
var statearr_15522_15545 = state_15516__$1;
(statearr_15522_15545[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15517 === (6))){
var inst_15498 = (state_15516[(7)]);
var inst_15503 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15498) : p.call(null,inst_15498));
var state_15516__$1 = state_15516;
if(cljs.core.truth_(inst_15503)){
var statearr_15523_15546 = state_15516__$1;
(statearr_15523_15546[(1)] = (8));

} else {
var statearr_15524_15547 = state_15516__$1;
(statearr_15524_15547[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15517 === (3))){
var inst_15514 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15516__$1,inst_15514);
} else {
if((state_val_15517 === (2))){
var state_15516__$1 = state_15516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15516__$1,(4),ch);
} else {
if((state_val_15517 === (11))){
var inst_15506 = (state_15516[(2)]);
var state_15516__$1 = state_15516;
var statearr_15525_15548 = state_15516__$1;
(statearr_15525_15548[(2)] = inst_15506);

(statearr_15525_15548[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15517 === (9))){
var state_15516__$1 = state_15516;
var statearr_15526_15549 = state_15516__$1;
(statearr_15526_15549[(2)] = null);

(statearr_15526_15549[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15517 === (5))){
var inst_15501 = cljs.core.async.close_BANG_(out);
var state_15516__$1 = state_15516;
var statearr_15527_15550 = state_15516__$1;
(statearr_15527_15550[(2)] = inst_15501);

(statearr_15527_15550[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15517 === (10))){
var inst_15509 = (state_15516[(2)]);
var state_15516__$1 = (function (){var statearr_15528 = state_15516;
(statearr_15528[(8)] = inst_15509);

return statearr_15528;
})();
var statearr_15529_15551 = state_15516__$1;
(statearr_15529_15551[(2)] = null);

(statearr_15529_15551[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15517 === (8))){
var inst_15498 = (state_15516[(7)]);
var state_15516__$1 = state_15516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15516__$1,(11),out,inst_15498);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___15541,out))
;
return ((function (switch__13150__auto__,c__13264__auto___15541,out){
return (function() {
var cljs$core$async$state_machine__13151__auto__ = null;
var cljs$core$async$state_machine__13151__auto____0 = (function (){
var statearr_15533 = [null,null,null,null,null,null,null,null,null];
(statearr_15533[(0)] = cljs$core$async$state_machine__13151__auto__);

(statearr_15533[(1)] = (1));

return statearr_15533;
});
var cljs$core$async$state_machine__13151__auto____1 = (function (state_15516){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_15516);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e15534){if((e15534 instanceof Object)){
var ex__13154__auto__ = e15534;
var statearr_15535_15552 = state_15516;
(statearr_15535_15552[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15516);

return cljs.core.cst$kw$recur;
} else {
throw e15534;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__15553 = state_15516;
state_15516 = G__15553;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$state_machine__13151__auto__ = function(state_15516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13151__auto____1.call(this,state_15516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13151__auto____0;
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13151__auto____1;
return cljs$core$async$state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___15541,out))
})();
var state__13266__auto__ = (function (){var statearr_15536 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_15536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___15541);

return statearr_15536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___15541,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15554 = [];
var len__5729__auto___15557 = arguments.length;
var i__5730__auto___15558 = (0);
while(true){
if((i__5730__auto___15558 < len__5729__auto___15557)){
args15554.push((arguments[i__5730__auto___15558]));

var G__15559 = (i__5730__auto___15558 + (1));
i__5730__auto___15558 = G__15559;
continue;
} else {
}
break;
}

var G__15556 = args15554.length;
switch (G__15556) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15554.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13264__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto__){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto__){
return (function (state_15726){
var state_val_15727 = (state_15726[(1)]);
if((state_val_15727 === (7))){
var inst_15722 = (state_15726[(2)]);
var state_15726__$1 = state_15726;
var statearr_15728_15769 = state_15726__$1;
(statearr_15728_15769[(2)] = inst_15722);

(statearr_15728_15769[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (20))){
var inst_15692 = (state_15726[(7)]);
var inst_15703 = (state_15726[(2)]);
var inst_15704 = cljs.core.next(inst_15692);
var inst_15678 = inst_15704;
var inst_15679 = null;
var inst_15680 = (0);
var inst_15681 = (0);
var state_15726__$1 = (function (){var statearr_15729 = state_15726;
(statearr_15729[(8)] = inst_15678);

(statearr_15729[(9)] = inst_15681);

(statearr_15729[(10)] = inst_15679);

(statearr_15729[(11)] = inst_15680);

(statearr_15729[(12)] = inst_15703);

return statearr_15729;
})();
var statearr_15730_15770 = state_15726__$1;
(statearr_15730_15770[(2)] = null);

(statearr_15730_15770[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (1))){
var state_15726__$1 = state_15726;
var statearr_15731_15771 = state_15726__$1;
(statearr_15731_15771[(2)] = null);

(statearr_15731_15771[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (4))){
var inst_15667 = (state_15726[(13)]);
var inst_15667__$1 = (state_15726[(2)]);
var inst_15668 = (inst_15667__$1 == null);
var state_15726__$1 = (function (){var statearr_15732 = state_15726;
(statearr_15732[(13)] = inst_15667__$1);

return statearr_15732;
})();
if(cljs.core.truth_(inst_15668)){
var statearr_15733_15772 = state_15726__$1;
(statearr_15733_15772[(1)] = (5));

} else {
var statearr_15734_15773 = state_15726__$1;
(statearr_15734_15773[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (15))){
var state_15726__$1 = state_15726;
var statearr_15738_15774 = state_15726__$1;
(statearr_15738_15774[(2)] = null);

(statearr_15738_15774[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (21))){
var state_15726__$1 = state_15726;
var statearr_15739_15775 = state_15726__$1;
(statearr_15739_15775[(2)] = null);

(statearr_15739_15775[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (13))){
var inst_15678 = (state_15726[(8)]);
var inst_15681 = (state_15726[(9)]);
var inst_15679 = (state_15726[(10)]);
var inst_15680 = (state_15726[(11)]);
var inst_15688 = (state_15726[(2)]);
var inst_15689 = (inst_15681 + (1));
var tmp15735 = inst_15678;
var tmp15736 = inst_15679;
var tmp15737 = inst_15680;
var inst_15678__$1 = tmp15735;
var inst_15679__$1 = tmp15736;
var inst_15680__$1 = tmp15737;
var inst_15681__$1 = inst_15689;
var state_15726__$1 = (function (){var statearr_15740 = state_15726;
(statearr_15740[(8)] = inst_15678__$1);

(statearr_15740[(9)] = inst_15681__$1);

(statearr_15740[(10)] = inst_15679__$1);

(statearr_15740[(11)] = inst_15680__$1);

(statearr_15740[(14)] = inst_15688);

return statearr_15740;
})();
var statearr_15741_15776 = state_15726__$1;
(statearr_15741_15776[(2)] = null);

(statearr_15741_15776[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (22))){
var state_15726__$1 = state_15726;
var statearr_15742_15777 = state_15726__$1;
(statearr_15742_15777[(2)] = null);

(statearr_15742_15777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (6))){
var inst_15667 = (state_15726[(13)]);
var inst_15676 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15667) : f.call(null,inst_15667));
var inst_15677 = cljs.core.seq(inst_15676);
var inst_15678 = inst_15677;
var inst_15679 = null;
var inst_15680 = (0);
var inst_15681 = (0);
var state_15726__$1 = (function (){var statearr_15743 = state_15726;
(statearr_15743[(8)] = inst_15678);

(statearr_15743[(9)] = inst_15681);

(statearr_15743[(10)] = inst_15679);

(statearr_15743[(11)] = inst_15680);

return statearr_15743;
})();
var statearr_15744_15778 = state_15726__$1;
(statearr_15744_15778[(2)] = null);

(statearr_15744_15778[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (17))){
var inst_15692 = (state_15726[(7)]);
var inst_15696 = cljs.core.chunk_first(inst_15692);
var inst_15697 = cljs.core.chunk_rest(inst_15692);
var inst_15698 = cljs.core.count(inst_15696);
var inst_15678 = inst_15697;
var inst_15679 = inst_15696;
var inst_15680 = inst_15698;
var inst_15681 = (0);
var state_15726__$1 = (function (){var statearr_15745 = state_15726;
(statearr_15745[(8)] = inst_15678);

(statearr_15745[(9)] = inst_15681);

(statearr_15745[(10)] = inst_15679);

(statearr_15745[(11)] = inst_15680);

return statearr_15745;
})();
var statearr_15746_15779 = state_15726__$1;
(statearr_15746_15779[(2)] = null);

(statearr_15746_15779[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (3))){
var inst_15724 = (state_15726[(2)]);
var state_15726__$1 = state_15726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15726__$1,inst_15724);
} else {
if((state_val_15727 === (12))){
var inst_15712 = (state_15726[(2)]);
var state_15726__$1 = state_15726;
var statearr_15747_15780 = state_15726__$1;
(statearr_15747_15780[(2)] = inst_15712);

(statearr_15747_15780[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (2))){
var state_15726__$1 = state_15726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15726__$1,(4),in$);
} else {
if((state_val_15727 === (23))){
var inst_15720 = (state_15726[(2)]);
var state_15726__$1 = state_15726;
var statearr_15748_15781 = state_15726__$1;
(statearr_15748_15781[(2)] = inst_15720);

(statearr_15748_15781[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (19))){
var inst_15707 = (state_15726[(2)]);
var state_15726__$1 = state_15726;
var statearr_15749_15782 = state_15726__$1;
(statearr_15749_15782[(2)] = inst_15707);

(statearr_15749_15782[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (11))){
var inst_15678 = (state_15726[(8)]);
var inst_15692 = (state_15726[(7)]);
var inst_15692__$1 = cljs.core.seq(inst_15678);
var state_15726__$1 = (function (){var statearr_15750 = state_15726;
(statearr_15750[(7)] = inst_15692__$1);

return statearr_15750;
})();
if(inst_15692__$1){
var statearr_15751_15783 = state_15726__$1;
(statearr_15751_15783[(1)] = (14));

} else {
var statearr_15752_15784 = state_15726__$1;
(statearr_15752_15784[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (9))){
var inst_15714 = (state_15726[(2)]);
var inst_15715 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15726__$1 = (function (){var statearr_15753 = state_15726;
(statearr_15753[(15)] = inst_15714);

return statearr_15753;
})();
if(cljs.core.truth_(inst_15715)){
var statearr_15754_15785 = state_15726__$1;
(statearr_15754_15785[(1)] = (21));

} else {
var statearr_15755_15786 = state_15726__$1;
(statearr_15755_15786[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (5))){
var inst_15670 = cljs.core.async.close_BANG_(out);
var state_15726__$1 = state_15726;
var statearr_15756_15787 = state_15726__$1;
(statearr_15756_15787[(2)] = inst_15670);

(statearr_15756_15787[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (14))){
var inst_15692 = (state_15726[(7)]);
var inst_15694 = cljs.core.chunked_seq_QMARK_(inst_15692);
var state_15726__$1 = state_15726;
if(inst_15694){
var statearr_15757_15788 = state_15726__$1;
(statearr_15757_15788[(1)] = (17));

} else {
var statearr_15758_15789 = state_15726__$1;
(statearr_15758_15789[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (16))){
var inst_15710 = (state_15726[(2)]);
var state_15726__$1 = state_15726;
var statearr_15759_15790 = state_15726__$1;
(statearr_15759_15790[(2)] = inst_15710);

(statearr_15759_15790[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15727 === (10))){
var inst_15681 = (state_15726[(9)]);
var inst_15679 = (state_15726[(10)]);
var inst_15686 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15679,inst_15681);
var state_15726__$1 = state_15726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15726__$1,(13),out,inst_15686);
} else {
if((state_val_15727 === (18))){
var inst_15692 = (state_15726[(7)]);
var inst_15701 = cljs.core.first(inst_15692);
var state_15726__$1 = state_15726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15726__$1,(20),out,inst_15701);
} else {
if((state_val_15727 === (8))){
var inst_15681 = (state_15726[(9)]);
var inst_15680 = (state_15726[(11)]);
var inst_15683 = (inst_15681 < inst_15680);
var inst_15684 = inst_15683;
var state_15726__$1 = state_15726;
if(cljs.core.truth_(inst_15684)){
var statearr_15760_15791 = state_15726__$1;
(statearr_15760_15791[(1)] = (10));

} else {
var statearr_15761_15792 = state_15726__$1;
(statearr_15761_15792[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto__))
;
return ((function (switch__13150__auto__,c__13264__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13151__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13151__auto____0 = (function (){
var statearr_15765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15765[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13151__auto__);

(statearr_15765[(1)] = (1));

return statearr_15765;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13151__auto____1 = (function (state_15726){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_15726);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e15766){if((e15766 instanceof Object)){
var ex__13154__auto__ = e15766;
var statearr_15767_15793 = state_15726;
(statearr_15767_15793[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15726);

return cljs.core.cst$kw$recur;
} else {
throw e15766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__15794 = state_15726;
state_15726 = G__15794;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13151__auto__ = function(state_15726){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13151__auto____1.call(this,state_15726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13151__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13151__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto__))
})();
var state__13266__auto__ = (function (){var statearr_15768 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_15768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto__);

return statearr_15768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto__))
);

return c__13264__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15795 = [];
var len__5729__auto___15798 = arguments.length;
var i__5730__auto___15799 = (0);
while(true){
if((i__5730__auto___15799 < len__5729__auto___15798)){
args15795.push((arguments[i__5730__auto___15799]));

var G__15800 = (i__5730__auto___15799 + (1));
i__5730__auto___15799 = G__15800;
continue;
} else {
}
break;
}

var G__15797 = args15795.length;
switch (G__15797) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15795.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15802 = [];
var len__5729__auto___15805 = arguments.length;
var i__5730__auto___15806 = (0);
while(true){
if((i__5730__auto___15806 < len__5729__auto___15805)){
args15802.push((arguments[i__5730__auto___15806]));

var G__15807 = (i__5730__auto___15806 + (1));
i__5730__auto___15806 = G__15807;
continue;
} else {
}
break;
}

var G__15804 = args15802.length;
switch (G__15804) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15802.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15809 = [];
var len__5729__auto___15860 = arguments.length;
var i__5730__auto___15861 = (0);
while(true){
if((i__5730__auto___15861 < len__5729__auto___15860)){
args15809.push((arguments[i__5730__auto___15861]));

var G__15862 = (i__5730__auto___15861 + (1));
i__5730__auto___15861 = G__15862;
continue;
} else {
}
break;
}

var G__15811 = args15809.length;
switch (G__15811) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15809.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13264__auto___15864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___15864,out){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___15864,out){
return (function (state_15835){
var state_val_15836 = (state_15835[(1)]);
if((state_val_15836 === (7))){
var inst_15830 = (state_15835[(2)]);
var state_15835__$1 = state_15835;
var statearr_15837_15865 = state_15835__$1;
(statearr_15837_15865[(2)] = inst_15830);

(statearr_15837_15865[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15836 === (1))){
var inst_15812 = null;
var state_15835__$1 = (function (){var statearr_15838 = state_15835;
(statearr_15838[(7)] = inst_15812);

return statearr_15838;
})();
var statearr_15839_15866 = state_15835__$1;
(statearr_15839_15866[(2)] = null);

(statearr_15839_15866[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15836 === (4))){
var inst_15815 = (state_15835[(8)]);
var inst_15815__$1 = (state_15835[(2)]);
var inst_15816 = (inst_15815__$1 == null);
var inst_15817 = cljs.core.not(inst_15816);
var state_15835__$1 = (function (){var statearr_15840 = state_15835;
(statearr_15840[(8)] = inst_15815__$1);

return statearr_15840;
})();
if(inst_15817){
var statearr_15841_15867 = state_15835__$1;
(statearr_15841_15867[(1)] = (5));

} else {
var statearr_15842_15868 = state_15835__$1;
(statearr_15842_15868[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15836 === (6))){
var state_15835__$1 = state_15835;
var statearr_15843_15869 = state_15835__$1;
(statearr_15843_15869[(2)] = null);

(statearr_15843_15869[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15836 === (3))){
var inst_15832 = (state_15835[(2)]);
var inst_15833 = cljs.core.async.close_BANG_(out);
var state_15835__$1 = (function (){var statearr_15844 = state_15835;
(statearr_15844[(9)] = inst_15832);

return statearr_15844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15835__$1,inst_15833);
} else {
if((state_val_15836 === (2))){
var state_15835__$1 = state_15835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15835__$1,(4),ch);
} else {
if((state_val_15836 === (11))){
var inst_15815 = (state_15835[(8)]);
var inst_15824 = (state_15835[(2)]);
var inst_15812 = inst_15815;
var state_15835__$1 = (function (){var statearr_15845 = state_15835;
(statearr_15845[(10)] = inst_15824);

(statearr_15845[(7)] = inst_15812);

return statearr_15845;
})();
var statearr_15846_15870 = state_15835__$1;
(statearr_15846_15870[(2)] = null);

(statearr_15846_15870[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15836 === (9))){
var inst_15815 = (state_15835[(8)]);
var state_15835__$1 = state_15835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15835__$1,(11),out,inst_15815);
} else {
if((state_val_15836 === (5))){
var inst_15815 = (state_15835[(8)]);
var inst_15812 = (state_15835[(7)]);
var inst_15819 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15815,inst_15812);
var state_15835__$1 = state_15835;
if(inst_15819){
var statearr_15848_15871 = state_15835__$1;
(statearr_15848_15871[(1)] = (8));

} else {
var statearr_15849_15872 = state_15835__$1;
(statearr_15849_15872[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15836 === (10))){
var inst_15827 = (state_15835[(2)]);
var state_15835__$1 = state_15835;
var statearr_15850_15873 = state_15835__$1;
(statearr_15850_15873[(2)] = inst_15827);

(statearr_15850_15873[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15836 === (8))){
var inst_15812 = (state_15835[(7)]);
var tmp15847 = inst_15812;
var inst_15812__$1 = tmp15847;
var state_15835__$1 = (function (){var statearr_15851 = state_15835;
(statearr_15851[(7)] = inst_15812__$1);

return statearr_15851;
})();
var statearr_15852_15874 = state_15835__$1;
(statearr_15852_15874[(2)] = null);

(statearr_15852_15874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___15864,out))
;
return ((function (switch__13150__auto__,c__13264__auto___15864,out){
return (function() {
var cljs$core$async$state_machine__13151__auto__ = null;
var cljs$core$async$state_machine__13151__auto____0 = (function (){
var statearr_15856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15856[(0)] = cljs$core$async$state_machine__13151__auto__);

(statearr_15856[(1)] = (1));

return statearr_15856;
});
var cljs$core$async$state_machine__13151__auto____1 = (function (state_15835){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_15835);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e15857){if((e15857 instanceof Object)){
var ex__13154__auto__ = e15857;
var statearr_15858_15875 = state_15835;
(statearr_15858_15875[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15835);

return cljs.core.cst$kw$recur;
} else {
throw e15857;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__15876 = state_15835;
state_15835 = G__15876;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$state_machine__13151__auto__ = function(state_15835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13151__auto____1.call(this,state_15835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13151__auto____0;
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13151__auto____1;
return cljs$core$async$state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___15864,out))
})();
var state__13266__auto__ = (function (){var statearr_15859 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_15859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___15864);

return statearr_15859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___15864,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15877 = [];
var len__5729__auto___15947 = arguments.length;
var i__5730__auto___15948 = (0);
while(true){
if((i__5730__auto___15948 < len__5729__auto___15947)){
args15877.push((arguments[i__5730__auto___15948]));

var G__15949 = (i__5730__auto___15948 + (1));
i__5730__auto___15948 = G__15949;
continue;
} else {
}
break;
}

var G__15879 = args15877.length;
switch (G__15879) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15877.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13264__auto___15951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___15951,out){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___15951,out){
return (function (state_15917){
var state_val_15918 = (state_15917[(1)]);
if((state_val_15918 === (7))){
var inst_15913 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
var statearr_15919_15952 = state_15917__$1;
(statearr_15919_15952[(2)] = inst_15913);

(statearr_15919_15952[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15918 === (1))){
var inst_15880 = (new Array(n));
var inst_15881 = inst_15880;
var inst_15882 = (0);
var state_15917__$1 = (function (){var statearr_15920 = state_15917;
(statearr_15920[(7)] = inst_15881);

(statearr_15920[(8)] = inst_15882);

return statearr_15920;
})();
var statearr_15921_15953 = state_15917__$1;
(statearr_15921_15953[(2)] = null);

(statearr_15921_15953[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15918 === (4))){
var inst_15885 = (state_15917[(9)]);
var inst_15885__$1 = (state_15917[(2)]);
var inst_15886 = (inst_15885__$1 == null);
var inst_15887 = cljs.core.not(inst_15886);
var state_15917__$1 = (function (){var statearr_15922 = state_15917;
(statearr_15922[(9)] = inst_15885__$1);

return statearr_15922;
})();
if(inst_15887){
var statearr_15923_15954 = state_15917__$1;
(statearr_15923_15954[(1)] = (5));

} else {
var statearr_15924_15955 = state_15917__$1;
(statearr_15924_15955[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15918 === (15))){
var inst_15907 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
var statearr_15925_15956 = state_15917__$1;
(statearr_15925_15956[(2)] = inst_15907);

(statearr_15925_15956[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15918 === (13))){
var state_15917__$1 = state_15917;
var statearr_15926_15957 = state_15917__$1;
(statearr_15926_15957[(2)] = null);

(statearr_15926_15957[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15918 === (6))){
var inst_15882 = (state_15917[(8)]);
var inst_15903 = (inst_15882 > (0));
var state_15917__$1 = state_15917;
if(cljs.core.truth_(inst_15903)){
var statearr_15927_15958 = state_15917__$1;
(statearr_15927_15958[(1)] = (12));

} else {
var statearr_15928_15959 = state_15917__$1;
(statearr_15928_15959[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15918 === (3))){
var inst_15915 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15917__$1,inst_15915);
} else {
if((state_val_15918 === (12))){
var inst_15881 = (state_15917[(7)]);
var inst_15905 = cljs.core.vec(inst_15881);
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15917__$1,(15),out,inst_15905);
} else {
if((state_val_15918 === (2))){
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15917__$1,(4),ch);
} else {
if((state_val_15918 === (11))){
var inst_15897 = (state_15917[(2)]);
var inst_15898 = (new Array(n));
var inst_15881 = inst_15898;
var inst_15882 = (0);
var state_15917__$1 = (function (){var statearr_15929 = state_15917;
(statearr_15929[(7)] = inst_15881);

(statearr_15929[(8)] = inst_15882);

(statearr_15929[(10)] = inst_15897);

return statearr_15929;
})();
var statearr_15930_15960 = state_15917__$1;
(statearr_15930_15960[(2)] = null);

(statearr_15930_15960[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15918 === (9))){
var inst_15881 = (state_15917[(7)]);
var inst_15895 = cljs.core.vec(inst_15881);
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15917__$1,(11),out,inst_15895);
} else {
if((state_val_15918 === (5))){
var inst_15881 = (state_15917[(7)]);
var inst_15882 = (state_15917[(8)]);
var inst_15890 = (state_15917[(11)]);
var inst_15885 = (state_15917[(9)]);
var inst_15889 = (inst_15881[inst_15882] = inst_15885);
var inst_15890__$1 = (inst_15882 + (1));
var inst_15891 = (inst_15890__$1 < n);
var state_15917__$1 = (function (){var statearr_15931 = state_15917;
(statearr_15931[(11)] = inst_15890__$1);

(statearr_15931[(12)] = inst_15889);

return statearr_15931;
})();
if(cljs.core.truth_(inst_15891)){
var statearr_15932_15961 = state_15917__$1;
(statearr_15932_15961[(1)] = (8));

} else {
var statearr_15933_15962 = state_15917__$1;
(statearr_15933_15962[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15918 === (14))){
var inst_15910 = (state_15917[(2)]);
var inst_15911 = cljs.core.async.close_BANG_(out);
var state_15917__$1 = (function (){var statearr_15935 = state_15917;
(statearr_15935[(13)] = inst_15910);

return statearr_15935;
})();
var statearr_15936_15963 = state_15917__$1;
(statearr_15936_15963[(2)] = inst_15911);

(statearr_15936_15963[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15918 === (10))){
var inst_15901 = (state_15917[(2)]);
var state_15917__$1 = state_15917;
var statearr_15937_15964 = state_15917__$1;
(statearr_15937_15964[(2)] = inst_15901);

(statearr_15937_15964[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15918 === (8))){
var inst_15881 = (state_15917[(7)]);
var inst_15890 = (state_15917[(11)]);
var tmp15934 = inst_15881;
var inst_15881__$1 = tmp15934;
var inst_15882 = inst_15890;
var state_15917__$1 = (function (){var statearr_15938 = state_15917;
(statearr_15938[(7)] = inst_15881__$1);

(statearr_15938[(8)] = inst_15882);

return statearr_15938;
})();
var statearr_15939_15965 = state_15917__$1;
(statearr_15939_15965[(2)] = null);

(statearr_15939_15965[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___15951,out))
;
return ((function (switch__13150__auto__,c__13264__auto___15951,out){
return (function() {
var cljs$core$async$state_machine__13151__auto__ = null;
var cljs$core$async$state_machine__13151__auto____0 = (function (){
var statearr_15943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15943[(0)] = cljs$core$async$state_machine__13151__auto__);

(statearr_15943[(1)] = (1));

return statearr_15943;
});
var cljs$core$async$state_machine__13151__auto____1 = (function (state_15917){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_15917);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e15944){if((e15944 instanceof Object)){
var ex__13154__auto__ = e15944;
var statearr_15945_15966 = state_15917;
(statearr_15945_15966[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15917);

return cljs.core.cst$kw$recur;
} else {
throw e15944;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__15967 = state_15917;
state_15917 = G__15967;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$state_machine__13151__auto__ = function(state_15917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13151__auto____1.call(this,state_15917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13151__auto____0;
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13151__auto____1;
return cljs$core$async$state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___15951,out))
})();
var state__13266__auto__ = (function (){var statearr_15946 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_15946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___15951);

return statearr_15946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___15951,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15968 = [];
var len__5729__auto___16042 = arguments.length;
var i__5730__auto___16043 = (0);
while(true){
if((i__5730__auto___16043 < len__5729__auto___16042)){
args15968.push((arguments[i__5730__auto___16043]));

var G__16044 = (i__5730__auto___16043 + (1));
i__5730__auto___16043 = G__16044;
continue;
} else {
}
break;
}

var G__15970 = args15968.length;
switch (G__15970) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15968.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13264__auto___16046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13264__auto___16046,out){
return (function (){
var f__13265__auto__ = (function (){var switch__13150__auto__ = ((function (c__13264__auto___16046,out){
return (function (state_16012){
var state_val_16013 = (state_16012[(1)]);
if((state_val_16013 === (7))){
var inst_16008 = (state_16012[(2)]);
var state_16012__$1 = state_16012;
var statearr_16014_16047 = state_16012__$1;
(statearr_16014_16047[(2)] = inst_16008);

(statearr_16014_16047[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16013 === (1))){
var inst_15971 = [];
var inst_15972 = inst_15971;
var inst_15973 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_16012__$1 = (function (){var statearr_16015 = state_16012;
(statearr_16015[(7)] = inst_15973);

(statearr_16015[(8)] = inst_15972);

return statearr_16015;
})();
var statearr_16016_16048 = state_16012__$1;
(statearr_16016_16048[(2)] = null);

(statearr_16016_16048[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16013 === (4))){
var inst_15976 = (state_16012[(9)]);
var inst_15976__$1 = (state_16012[(2)]);
var inst_15977 = (inst_15976__$1 == null);
var inst_15978 = cljs.core.not(inst_15977);
var state_16012__$1 = (function (){var statearr_16017 = state_16012;
(statearr_16017[(9)] = inst_15976__$1);

return statearr_16017;
})();
if(inst_15978){
var statearr_16018_16049 = state_16012__$1;
(statearr_16018_16049[(1)] = (5));

} else {
var statearr_16019_16050 = state_16012__$1;
(statearr_16019_16050[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16013 === (15))){
var inst_16002 = (state_16012[(2)]);
var state_16012__$1 = state_16012;
var statearr_16020_16051 = state_16012__$1;
(statearr_16020_16051[(2)] = inst_16002);

(statearr_16020_16051[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16013 === (13))){
var state_16012__$1 = state_16012;
var statearr_16021_16052 = state_16012__$1;
(statearr_16021_16052[(2)] = null);

(statearr_16021_16052[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16013 === (6))){
var inst_15972 = (state_16012[(8)]);
var inst_15997 = inst_15972.length;
var inst_15998 = (inst_15997 > (0));
var state_16012__$1 = state_16012;
if(cljs.core.truth_(inst_15998)){
var statearr_16022_16053 = state_16012__$1;
(statearr_16022_16053[(1)] = (12));

} else {
var statearr_16023_16054 = state_16012__$1;
(statearr_16023_16054[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16013 === (3))){
var inst_16010 = (state_16012[(2)]);
var state_16012__$1 = state_16012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16012__$1,inst_16010);
} else {
if((state_val_16013 === (12))){
var inst_15972 = (state_16012[(8)]);
var inst_16000 = cljs.core.vec(inst_15972);
var state_16012__$1 = state_16012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16012__$1,(15),out,inst_16000);
} else {
if((state_val_16013 === (2))){
var state_16012__$1 = state_16012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16012__$1,(4),ch);
} else {
if((state_val_16013 === (11))){
var inst_15976 = (state_16012[(9)]);
var inst_15980 = (state_16012[(10)]);
var inst_15990 = (state_16012[(2)]);
var inst_15991 = [];
var inst_15992 = inst_15991.push(inst_15976);
var inst_15972 = inst_15991;
var inst_15973 = inst_15980;
var state_16012__$1 = (function (){var statearr_16024 = state_16012;
(statearr_16024[(7)] = inst_15973);

(statearr_16024[(11)] = inst_15990);

(statearr_16024[(12)] = inst_15992);

(statearr_16024[(8)] = inst_15972);

return statearr_16024;
})();
var statearr_16025_16055 = state_16012__$1;
(statearr_16025_16055[(2)] = null);

(statearr_16025_16055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16013 === (9))){
var inst_15972 = (state_16012[(8)]);
var inst_15988 = cljs.core.vec(inst_15972);
var state_16012__$1 = state_16012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16012__$1,(11),out,inst_15988);
} else {
if((state_val_16013 === (5))){
var inst_15973 = (state_16012[(7)]);
var inst_15976 = (state_16012[(9)]);
var inst_15980 = (state_16012[(10)]);
var inst_15980__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15976) : f.call(null,inst_15976));
var inst_15981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15980__$1,inst_15973);
var inst_15982 = cljs.core.keyword_identical_QMARK_(inst_15973,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_15983 = (inst_15981) || (inst_15982);
var state_16012__$1 = (function (){var statearr_16026 = state_16012;
(statearr_16026[(10)] = inst_15980__$1);

return statearr_16026;
})();
if(cljs.core.truth_(inst_15983)){
var statearr_16027_16056 = state_16012__$1;
(statearr_16027_16056[(1)] = (8));

} else {
var statearr_16028_16057 = state_16012__$1;
(statearr_16028_16057[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16013 === (14))){
var inst_16005 = (state_16012[(2)]);
var inst_16006 = cljs.core.async.close_BANG_(out);
var state_16012__$1 = (function (){var statearr_16030 = state_16012;
(statearr_16030[(13)] = inst_16005);

return statearr_16030;
})();
var statearr_16031_16058 = state_16012__$1;
(statearr_16031_16058[(2)] = inst_16006);

(statearr_16031_16058[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16013 === (10))){
var inst_15995 = (state_16012[(2)]);
var state_16012__$1 = state_16012;
var statearr_16032_16059 = state_16012__$1;
(statearr_16032_16059[(2)] = inst_15995);

(statearr_16032_16059[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16013 === (8))){
var inst_15976 = (state_16012[(9)]);
var inst_15980 = (state_16012[(10)]);
var inst_15972 = (state_16012[(8)]);
var inst_15985 = inst_15972.push(inst_15976);
var tmp16029 = inst_15972;
var inst_15972__$1 = tmp16029;
var inst_15973 = inst_15980;
var state_16012__$1 = (function (){var statearr_16033 = state_16012;
(statearr_16033[(7)] = inst_15973);

(statearr_16033[(14)] = inst_15985);

(statearr_16033[(8)] = inst_15972__$1);

return statearr_16033;
})();
var statearr_16034_16060 = state_16012__$1;
(statearr_16034_16060[(2)] = null);

(statearr_16034_16060[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13264__auto___16046,out))
;
return ((function (switch__13150__auto__,c__13264__auto___16046,out){
return (function() {
var cljs$core$async$state_machine__13151__auto__ = null;
var cljs$core$async$state_machine__13151__auto____0 = (function (){
var statearr_16038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16038[(0)] = cljs$core$async$state_machine__13151__auto__);

(statearr_16038[(1)] = (1));

return statearr_16038;
});
var cljs$core$async$state_machine__13151__auto____1 = (function (state_16012){
while(true){
var ret_value__13152__auto__ = (function (){try{while(true){
var result__13153__auto__ = switch__13150__auto__(state_16012);
if(cljs.core.keyword_identical_QMARK_(result__13153__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13153__auto__;
}
break;
}
}catch (e16039){if((e16039 instanceof Object)){
var ex__13154__auto__ = e16039;
var statearr_16040_16061 = state_16012;
(statearr_16040_16061[(5)] = ex__13154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16012);

return cljs.core.cst$kw$recur;
} else {
throw e16039;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13152__auto__,cljs.core.cst$kw$recur)){
var G__16062 = state_16012;
state_16012 = G__16062;
continue;
} else {
return ret_value__13152__auto__;
}
break;
}
});
cljs$core$async$state_machine__13151__auto__ = function(state_16012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13151__auto____1.call(this,state_16012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13151__auto____0;
cljs$core$async$state_machine__13151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13151__auto____1;
return cljs$core$async$state_machine__13151__auto__;
})()
;})(switch__13150__auto__,c__13264__auto___16046,out))
})();
var state__13266__auto__ = (function (){var statearr_16041 = (f__13265__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13265__auto__.cljs$core$IFn$_invoke$arity$0() : f__13265__auto__.call(null));
(statearr_16041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13264__auto___16046);

return statearr_16041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13266__auto__);
});})(c__13264__auto___16046,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
