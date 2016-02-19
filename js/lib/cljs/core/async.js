// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20343 = [];
var len__17863__auto___20349 = arguments.length;
var i__17864__auto___20350 = (0);
while(true){
if((i__17864__auto___20350 < len__17863__auto___20349)){
args20343.push((arguments[i__17864__auto___20350]));

var G__20351 = (i__17864__auto___20350 + (1));
i__17864__auto___20350 = G__20351;
continue;
} else {
}
break;
}

var G__20345 = args20343.length;
switch (G__20345) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20343.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20346 = (function (f,blockable,meta20347){
this.f = f;
this.blockable = blockable;
this.meta20347 = meta20347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20348,meta20347__$1){
var self__ = this;
var _20348__$1 = this;
return (new cljs.core.async.t_cljs$core$async20346(self__.f,self__.blockable,meta20347__$1));
});

cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20348){
var self__ = this;
var _20348__$1 = this;
return self__.meta20347;
});

cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20347","meta20347",603629034,null)], null);
});

cljs.core.async.t_cljs$core$async20346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20346";

cljs.core.async.t_cljs$core$async20346.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20346");
});

cljs.core.async.__GT_t_cljs$core$async20346 = (function cljs$core$async$__GT_t_cljs$core$async20346(f__$1,blockable__$1,meta20347){
return (new cljs.core.async.t_cljs$core$async20346(f__$1,blockable__$1,meta20347));
});

}

return (new cljs.core.async.t_cljs$core$async20346(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args20355 = [];
var len__17863__auto___20358 = arguments.length;
var i__17864__auto___20359 = (0);
while(true){
if((i__17864__auto___20359 < len__17863__auto___20358)){
args20355.push((arguments[i__17864__auto___20359]));

var G__20360 = (i__17864__auto___20359 + (1));
i__17864__auto___20359 = G__20360;
continue;
} else {
}
break;
}

var G__20357 = args20355.length;
switch (G__20357) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20355.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args20362 = [];
var len__17863__auto___20365 = arguments.length;
var i__17864__auto___20366 = (0);
while(true){
if((i__17864__auto___20366 < len__17863__auto___20365)){
args20362.push((arguments[i__17864__auto___20366]));

var G__20367 = (i__17864__auto___20366 + (1));
i__17864__auto___20366 = G__20367;
continue;
} else {
}
break;
}

var G__20364 = args20362.length;
switch (G__20364) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20362.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args20369 = [];
var len__17863__auto___20372 = arguments.length;
var i__17864__auto___20373 = (0);
while(true){
if((i__17864__auto___20373 < len__17863__auto___20372)){
args20369.push((arguments[i__17864__auto___20373]));

var G__20374 = (i__17864__auto___20373 + (1));
i__17864__auto___20373 = G__20374;
continue;
} else {
}
break;
}

var G__20371 = args20369.length;
switch (G__20371) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20369.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20376 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20376);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20376,ret){
return (function (){
return fn1.call(null,val_20376);
});})(val_20376,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args20377 = [];
var len__17863__auto___20380 = arguments.length;
var i__17864__auto___20381 = (0);
while(true){
if((i__17864__auto___20381 < len__17863__auto___20380)){
args20377.push((arguments[i__17864__auto___20381]));

var G__20382 = (i__17864__auto___20381 + (1));
i__17864__auto___20381 = G__20382;
continue;
} else {
}
break;
}

var G__20379 = args20377.length;
switch (G__20379) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20377.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17708__auto___20384 = n;
var x_20385 = (0);
while(true){
if((x_20385 < n__17708__auto___20384)){
(a[x_20385] = (0));

var G__20386 = (x_20385 + (1));
x_20385 = G__20386;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20387 = (i + (1));
i = G__20387;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20391 = (function (alt_flag,flag,meta20392){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20392 = meta20392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20393,meta20392__$1){
var self__ = this;
var _20393__$1 = this;
return (new cljs.core.async.t_cljs$core$async20391(self__.alt_flag,self__.flag,meta20392__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20393){
var self__ = this;
var _20393__$1 = this;
return self__.meta20392;
});})(flag))
;

cljs.core.async.t_cljs$core$async20391.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20391.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20391.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20392","meta20392",-1604154618,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20391";

cljs.core.async.t_cljs$core$async20391.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20391");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20391 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20391(alt_flag__$1,flag__$1,meta20392){
return (new cljs.core.async.t_cljs$core$async20391(alt_flag__$1,flag__$1,meta20392));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20391(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20397 = (function (alt_handler,flag,cb,meta20398){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20398 = meta20398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20399,meta20398__$1){
var self__ = this;
var _20399__$1 = this;
return (new cljs.core.async.t_cljs$core$async20397(self__.alt_handler,self__.flag,self__.cb,meta20398__$1));
});

cljs.core.async.t_cljs$core$async20397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20399){
var self__ = this;
var _20399__$1 = this;
return self__.meta20398;
});

cljs.core.async.t_cljs$core$async20397.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20397.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20397.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20397.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20398","meta20398",-2003787881,null)], null);
});

cljs.core.async.t_cljs$core$async20397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20397";

cljs.core.async.t_cljs$core$async20397.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20397");
});

cljs.core.async.__GT_t_cljs$core$async20397 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20397(alt_handler__$1,flag__$1,cb__$1,meta20398){
return (new cljs.core.async.t_cljs$core$async20397(alt_handler__$1,flag__$1,cb__$1,meta20398));
});

}

return (new cljs.core.async.t_cljs$core$async20397(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20400_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20400_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20401_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20401_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16805__auto__ = wport;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20402 = (i + (1));
i = G__20402;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16805__auto__ = ret;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16793__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16793__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__17870__auto__ = [];
var len__17863__auto___20408 = arguments.length;
var i__17864__auto___20409 = (0);
while(true){
if((i__17864__auto___20409 < len__17863__auto___20408)){
args__17870__auto__.push((arguments[i__17864__auto___20409]));

var G__20410 = (i__17864__auto___20409 + (1));
i__17864__auto___20409 = G__20410;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20405){
var map__20406 = p__20405;
var map__20406__$1 = ((((!((map__20406 == null)))?((((map__20406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20406):map__20406);
var opts = map__20406__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20403){
var G__20404 = cljs.core.first.call(null,seq20403);
var seq20403__$1 = cljs.core.next.call(null,seq20403);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20404,seq20403__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args20411 = [];
var len__17863__auto___20461 = arguments.length;
var i__17864__auto___20462 = (0);
while(true){
if((i__17864__auto___20462 < len__17863__auto___20461)){
args20411.push((arguments[i__17864__auto___20462]));

var G__20463 = (i__17864__auto___20462 + (1));
i__17864__auto___20462 = G__20463;
continue;
} else {
}
break;
}

var G__20413 = args20411.length;
switch (G__20413) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20411.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20298__auto___20465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___20465){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___20465){
return (function (state_20437){
var state_val_20438 = (state_20437[(1)]);
if((state_val_20438 === (7))){
var inst_20433 = (state_20437[(2)]);
var state_20437__$1 = state_20437;
var statearr_20439_20466 = state_20437__$1;
(statearr_20439_20466[(2)] = inst_20433);

(statearr_20439_20466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20438 === (1))){
var state_20437__$1 = state_20437;
var statearr_20440_20467 = state_20437__$1;
(statearr_20440_20467[(2)] = null);

(statearr_20440_20467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20438 === (4))){
var inst_20416 = (state_20437[(7)]);
var inst_20416__$1 = (state_20437[(2)]);
var inst_20417 = (inst_20416__$1 == null);
var state_20437__$1 = (function (){var statearr_20441 = state_20437;
(statearr_20441[(7)] = inst_20416__$1);

return statearr_20441;
})();
if(cljs.core.truth_(inst_20417)){
var statearr_20442_20468 = state_20437__$1;
(statearr_20442_20468[(1)] = (5));

} else {
var statearr_20443_20469 = state_20437__$1;
(statearr_20443_20469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20438 === (13))){
var state_20437__$1 = state_20437;
var statearr_20444_20470 = state_20437__$1;
(statearr_20444_20470[(2)] = null);

(statearr_20444_20470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20438 === (6))){
var inst_20416 = (state_20437[(7)]);
var state_20437__$1 = state_20437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20437__$1,(11),to,inst_20416);
} else {
if((state_val_20438 === (3))){
var inst_20435 = (state_20437[(2)]);
var state_20437__$1 = state_20437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20437__$1,inst_20435);
} else {
if((state_val_20438 === (12))){
var state_20437__$1 = state_20437;
var statearr_20445_20471 = state_20437__$1;
(statearr_20445_20471[(2)] = null);

(statearr_20445_20471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20438 === (2))){
var state_20437__$1 = state_20437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20437__$1,(4),from);
} else {
if((state_val_20438 === (11))){
var inst_20426 = (state_20437[(2)]);
var state_20437__$1 = state_20437;
if(cljs.core.truth_(inst_20426)){
var statearr_20446_20472 = state_20437__$1;
(statearr_20446_20472[(1)] = (12));

} else {
var statearr_20447_20473 = state_20437__$1;
(statearr_20447_20473[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20438 === (9))){
var state_20437__$1 = state_20437;
var statearr_20448_20474 = state_20437__$1;
(statearr_20448_20474[(2)] = null);

(statearr_20448_20474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20438 === (5))){
var state_20437__$1 = state_20437;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20449_20475 = state_20437__$1;
(statearr_20449_20475[(1)] = (8));

} else {
var statearr_20450_20476 = state_20437__$1;
(statearr_20450_20476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20438 === (14))){
var inst_20431 = (state_20437[(2)]);
var state_20437__$1 = state_20437;
var statearr_20451_20477 = state_20437__$1;
(statearr_20451_20477[(2)] = inst_20431);

(statearr_20451_20477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20438 === (10))){
var inst_20423 = (state_20437[(2)]);
var state_20437__$1 = state_20437;
var statearr_20452_20478 = state_20437__$1;
(statearr_20452_20478[(2)] = inst_20423);

(statearr_20452_20478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20438 === (8))){
var inst_20420 = cljs.core.async.close_BANG_.call(null,to);
var state_20437__$1 = state_20437;
var statearr_20453_20479 = state_20437__$1;
(statearr_20453_20479[(2)] = inst_20420);

(statearr_20453_20479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto___20465))
;
return ((function (switch__18818__auto__,c__20298__auto___20465){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_20457 = [null,null,null,null,null,null,null,null];
(statearr_20457[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_20457[(1)] = (1));

return statearr_20457;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_20437){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_20437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e20458){if((e20458 instanceof Object)){
var ex__18822__auto__ = e20458;
var statearr_20459_20480 = state_20437;
(statearr_20459_20480[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20481 = state_20437;
state_20437 = G__20481;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_20437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_20437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___20465))
})();
var state__20300__auto__ = (function (){var statearr_20460 = f__20299__auto__.call(null);
(statearr_20460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___20465);

return statearr_20460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___20465))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20665){
var vec__20666 = p__20665;
var v = cljs.core.nth.call(null,vec__20666,(0),null);
var p = cljs.core.nth.call(null,vec__20666,(1),null);
var job = vec__20666;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20298__auto___20848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___20848,res,vec__20666,v,p,job,jobs,results){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___20848,res,vec__20666,v,p,job,jobs,results){
return (function (state_20671){
var state_val_20672 = (state_20671[(1)]);
if((state_val_20672 === (1))){
var state_20671__$1 = state_20671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20671__$1,(2),res,v);
} else {
if((state_val_20672 === (2))){
var inst_20668 = (state_20671[(2)]);
var inst_20669 = cljs.core.async.close_BANG_.call(null,res);
var state_20671__$1 = (function (){var statearr_20673 = state_20671;
(statearr_20673[(7)] = inst_20668);

return statearr_20673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20671__$1,inst_20669);
} else {
return null;
}
}
});})(c__20298__auto___20848,res,vec__20666,v,p,job,jobs,results))
;
return ((function (switch__18818__auto__,c__20298__auto___20848,res,vec__20666,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_20677 = [null,null,null,null,null,null,null,null];
(statearr_20677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__);

(statearr_20677[(1)] = (1));

return statearr_20677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1 = (function (state_20671){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_20671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e20678){if((e20678 instanceof Object)){
var ex__18822__auto__ = e20678;
var statearr_20679_20849 = state_20671;
(statearr_20679_20849[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20850 = state_20671;
state_20671 = G__20850;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = function(state_20671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1.call(this,state_20671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___20848,res,vec__20666,v,p,job,jobs,results))
})();
var state__20300__auto__ = (function (){var statearr_20680 = f__20299__auto__.call(null);
(statearr_20680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___20848);

return statearr_20680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___20848,res,vec__20666,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20681){
var vec__20682 = p__20681;
var v = cljs.core.nth.call(null,vec__20682,(0),null);
var p = cljs.core.nth.call(null,vec__20682,(1),null);
var job = vec__20682;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17708__auto___20851 = n;
var __20852 = (0);
while(true){
if((__20852 < n__17708__auto___20851)){
var G__20683_20853 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20683_20853) {
case "compute":
var c__20298__auto___20855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20852,c__20298__auto___20855,G__20683_20853,n__17708__auto___20851,jobs,results,process,async){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (__20852,c__20298__auto___20855,G__20683_20853,n__17708__auto___20851,jobs,results,process,async){
return (function (state_20696){
var state_val_20697 = (state_20696[(1)]);
if((state_val_20697 === (1))){
var state_20696__$1 = state_20696;
var statearr_20698_20856 = state_20696__$1;
(statearr_20698_20856[(2)] = null);

(statearr_20698_20856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (2))){
var state_20696__$1 = state_20696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20696__$1,(4),jobs);
} else {
if((state_val_20697 === (3))){
var inst_20694 = (state_20696[(2)]);
var state_20696__$1 = state_20696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20696__$1,inst_20694);
} else {
if((state_val_20697 === (4))){
var inst_20686 = (state_20696[(2)]);
var inst_20687 = process.call(null,inst_20686);
var state_20696__$1 = state_20696;
if(cljs.core.truth_(inst_20687)){
var statearr_20699_20857 = state_20696__$1;
(statearr_20699_20857[(1)] = (5));

} else {
var statearr_20700_20858 = state_20696__$1;
(statearr_20700_20858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (5))){
var state_20696__$1 = state_20696;
var statearr_20701_20859 = state_20696__$1;
(statearr_20701_20859[(2)] = null);

(statearr_20701_20859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (6))){
var state_20696__$1 = state_20696;
var statearr_20702_20860 = state_20696__$1;
(statearr_20702_20860[(2)] = null);

(statearr_20702_20860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20697 === (7))){
var inst_20692 = (state_20696[(2)]);
var state_20696__$1 = state_20696;
var statearr_20703_20861 = state_20696__$1;
(statearr_20703_20861[(2)] = inst_20692);

(statearr_20703_20861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20852,c__20298__auto___20855,G__20683_20853,n__17708__auto___20851,jobs,results,process,async))
;
return ((function (__20852,switch__18818__auto__,c__20298__auto___20855,G__20683_20853,n__17708__auto___20851,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_20707 = [null,null,null,null,null,null,null];
(statearr_20707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__);

(statearr_20707[(1)] = (1));

return statearr_20707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1 = (function (state_20696){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_20696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e20708){if((e20708 instanceof Object)){
var ex__18822__auto__ = e20708;
var statearr_20709_20862 = state_20696;
(statearr_20709_20862[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20863 = state_20696;
state_20696 = G__20863;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = function(state_20696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1.call(this,state_20696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__;
})()
;})(__20852,switch__18818__auto__,c__20298__auto___20855,G__20683_20853,n__17708__auto___20851,jobs,results,process,async))
})();
var state__20300__auto__ = (function (){var statearr_20710 = f__20299__auto__.call(null);
(statearr_20710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___20855);

return statearr_20710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(__20852,c__20298__auto___20855,G__20683_20853,n__17708__auto___20851,jobs,results,process,async))
);


break;
case "async":
var c__20298__auto___20864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20852,c__20298__auto___20864,G__20683_20853,n__17708__auto___20851,jobs,results,process,async){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (__20852,c__20298__auto___20864,G__20683_20853,n__17708__auto___20851,jobs,results,process,async){
return (function (state_20723){
var state_val_20724 = (state_20723[(1)]);
if((state_val_20724 === (1))){
var state_20723__$1 = state_20723;
var statearr_20725_20865 = state_20723__$1;
(statearr_20725_20865[(2)] = null);

(statearr_20725_20865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (2))){
var state_20723__$1 = state_20723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20723__$1,(4),jobs);
} else {
if((state_val_20724 === (3))){
var inst_20721 = (state_20723[(2)]);
var state_20723__$1 = state_20723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20723__$1,inst_20721);
} else {
if((state_val_20724 === (4))){
var inst_20713 = (state_20723[(2)]);
var inst_20714 = async.call(null,inst_20713);
var state_20723__$1 = state_20723;
if(cljs.core.truth_(inst_20714)){
var statearr_20726_20866 = state_20723__$1;
(statearr_20726_20866[(1)] = (5));

} else {
var statearr_20727_20867 = state_20723__$1;
(statearr_20727_20867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (5))){
var state_20723__$1 = state_20723;
var statearr_20728_20868 = state_20723__$1;
(statearr_20728_20868[(2)] = null);

(statearr_20728_20868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (6))){
var state_20723__$1 = state_20723;
var statearr_20729_20869 = state_20723__$1;
(statearr_20729_20869[(2)] = null);

(statearr_20729_20869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (7))){
var inst_20719 = (state_20723[(2)]);
var state_20723__$1 = state_20723;
var statearr_20730_20870 = state_20723__$1;
(statearr_20730_20870[(2)] = inst_20719);

(statearr_20730_20870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20852,c__20298__auto___20864,G__20683_20853,n__17708__auto___20851,jobs,results,process,async))
;
return ((function (__20852,switch__18818__auto__,c__20298__auto___20864,G__20683_20853,n__17708__auto___20851,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_20734 = [null,null,null,null,null,null,null];
(statearr_20734[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__);

(statearr_20734[(1)] = (1));

return statearr_20734;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1 = (function (state_20723){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_20723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e20735){if((e20735 instanceof Object)){
var ex__18822__auto__ = e20735;
var statearr_20736_20871 = state_20723;
(statearr_20736_20871[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20872 = state_20723;
state_20723 = G__20872;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = function(state_20723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1.call(this,state_20723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__;
})()
;})(__20852,switch__18818__auto__,c__20298__auto___20864,G__20683_20853,n__17708__auto___20851,jobs,results,process,async))
})();
var state__20300__auto__ = (function (){var statearr_20737 = f__20299__auto__.call(null);
(statearr_20737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___20864);

return statearr_20737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(__20852,c__20298__auto___20864,G__20683_20853,n__17708__auto___20851,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20873 = (__20852 + (1));
__20852 = G__20873;
continue;
} else {
}
break;
}

var c__20298__auto___20874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___20874,jobs,results,process,async){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___20874,jobs,results,process,async){
return (function (state_20759){
var state_val_20760 = (state_20759[(1)]);
if((state_val_20760 === (1))){
var state_20759__$1 = state_20759;
var statearr_20761_20875 = state_20759__$1;
(statearr_20761_20875[(2)] = null);

(statearr_20761_20875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20760 === (2))){
var state_20759__$1 = state_20759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20759__$1,(4),from);
} else {
if((state_val_20760 === (3))){
var inst_20757 = (state_20759[(2)]);
var state_20759__$1 = state_20759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20759__$1,inst_20757);
} else {
if((state_val_20760 === (4))){
var inst_20740 = (state_20759[(7)]);
var inst_20740__$1 = (state_20759[(2)]);
var inst_20741 = (inst_20740__$1 == null);
var state_20759__$1 = (function (){var statearr_20762 = state_20759;
(statearr_20762[(7)] = inst_20740__$1);

return statearr_20762;
})();
if(cljs.core.truth_(inst_20741)){
var statearr_20763_20876 = state_20759__$1;
(statearr_20763_20876[(1)] = (5));

} else {
var statearr_20764_20877 = state_20759__$1;
(statearr_20764_20877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20760 === (5))){
var inst_20743 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20759__$1 = state_20759;
var statearr_20765_20878 = state_20759__$1;
(statearr_20765_20878[(2)] = inst_20743);

(statearr_20765_20878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20760 === (6))){
var inst_20740 = (state_20759[(7)]);
var inst_20745 = (state_20759[(8)]);
var inst_20745__$1 = cljs.core.async.chan.call(null,(1));
var inst_20746 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20747 = [inst_20740,inst_20745__$1];
var inst_20748 = (new cljs.core.PersistentVector(null,2,(5),inst_20746,inst_20747,null));
var state_20759__$1 = (function (){var statearr_20766 = state_20759;
(statearr_20766[(8)] = inst_20745__$1);

return statearr_20766;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20759__$1,(8),jobs,inst_20748);
} else {
if((state_val_20760 === (7))){
var inst_20755 = (state_20759[(2)]);
var state_20759__$1 = state_20759;
var statearr_20767_20879 = state_20759__$1;
(statearr_20767_20879[(2)] = inst_20755);

(statearr_20767_20879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20760 === (8))){
var inst_20745 = (state_20759[(8)]);
var inst_20750 = (state_20759[(2)]);
var state_20759__$1 = (function (){var statearr_20768 = state_20759;
(statearr_20768[(9)] = inst_20750);

return statearr_20768;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20759__$1,(9),results,inst_20745);
} else {
if((state_val_20760 === (9))){
var inst_20752 = (state_20759[(2)]);
var state_20759__$1 = (function (){var statearr_20769 = state_20759;
(statearr_20769[(10)] = inst_20752);

return statearr_20769;
})();
var statearr_20770_20880 = state_20759__$1;
(statearr_20770_20880[(2)] = null);

(statearr_20770_20880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto___20874,jobs,results,process,async))
;
return ((function (switch__18818__auto__,c__20298__auto___20874,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_20774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__);

(statearr_20774[(1)] = (1));

return statearr_20774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1 = (function (state_20759){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_20759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e20775){if((e20775 instanceof Object)){
var ex__18822__auto__ = e20775;
var statearr_20776_20881 = state_20759;
(statearr_20776_20881[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20882 = state_20759;
state_20759 = G__20882;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = function(state_20759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1.call(this,state_20759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___20874,jobs,results,process,async))
})();
var state__20300__auto__ = (function (){var statearr_20777 = f__20299__auto__.call(null);
(statearr_20777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___20874);

return statearr_20777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___20874,jobs,results,process,async))
);


var c__20298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto__,jobs,results,process,async){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto__,jobs,results,process,async){
return (function (state_20815){
var state_val_20816 = (state_20815[(1)]);
if((state_val_20816 === (7))){
var inst_20811 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
var statearr_20817_20883 = state_20815__$1;
(statearr_20817_20883[(2)] = inst_20811);

(statearr_20817_20883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (20))){
var state_20815__$1 = state_20815;
var statearr_20818_20884 = state_20815__$1;
(statearr_20818_20884[(2)] = null);

(statearr_20818_20884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (1))){
var state_20815__$1 = state_20815;
var statearr_20819_20885 = state_20815__$1;
(statearr_20819_20885[(2)] = null);

(statearr_20819_20885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (4))){
var inst_20780 = (state_20815[(7)]);
var inst_20780__$1 = (state_20815[(2)]);
var inst_20781 = (inst_20780__$1 == null);
var state_20815__$1 = (function (){var statearr_20820 = state_20815;
(statearr_20820[(7)] = inst_20780__$1);

return statearr_20820;
})();
if(cljs.core.truth_(inst_20781)){
var statearr_20821_20886 = state_20815__$1;
(statearr_20821_20886[(1)] = (5));

} else {
var statearr_20822_20887 = state_20815__$1;
(statearr_20822_20887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (15))){
var inst_20793 = (state_20815[(8)]);
var state_20815__$1 = state_20815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20815__$1,(18),to,inst_20793);
} else {
if((state_val_20816 === (21))){
var inst_20806 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
var statearr_20823_20888 = state_20815__$1;
(statearr_20823_20888[(2)] = inst_20806);

(statearr_20823_20888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (13))){
var inst_20808 = (state_20815[(2)]);
var state_20815__$1 = (function (){var statearr_20824 = state_20815;
(statearr_20824[(9)] = inst_20808);

return statearr_20824;
})();
var statearr_20825_20889 = state_20815__$1;
(statearr_20825_20889[(2)] = null);

(statearr_20825_20889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (6))){
var inst_20780 = (state_20815[(7)]);
var state_20815__$1 = state_20815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20815__$1,(11),inst_20780);
} else {
if((state_val_20816 === (17))){
var inst_20801 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
if(cljs.core.truth_(inst_20801)){
var statearr_20826_20890 = state_20815__$1;
(statearr_20826_20890[(1)] = (19));

} else {
var statearr_20827_20891 = state_20815__$1;
(statearr_20827_20891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (3))){
var inst_20813 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20815__$1,inst_20813);
} else {
if((state_val_20816 === (12))){
var inst_20790 = (state_20815[(10)]);
var state_20815__$1 = state_20815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20815__$1,(14),inst_20790);
} else {
if((state_val_20816 === (2))){
var state_20815__$1 = state_20815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20815__$1,(4),results);
} else {
if((state_val_20816 === (19))){
var state_20815__$1 = state_20815;
var statearr_20828_20892 = state_20815__$1;
(statearr_20828_20892[(2)] = null);

(statearr_20828_20892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (11))){
var inst_20790 = (state_20815[(2)]);
var state_20815__$1 = (function (){var statearr_20829 = state_20815;
(statearr_20829[(10)] = inst_20790);

return statearr_20829;
})();
var statearr_20830_20893 = state_20815__$1;
(statearr_20830_20893[(2)] = null);

(statearr_20830_20893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (9))){
var state_20815__$1 = state_20815;
var statearr_20831_20894 = state_20815__$1;
(statearr_20831_20894[(2)] = null);

(statearr_20831_20894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (5))){
var state_20815__$1 = state_20815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20832_20895 = state_20815__$1;
(statearr_20832_20895[(1)] = (8));

} else {
var statearr_20833_20896 = state_20815__$1;
(statearr_20833_20896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (14))){
var inst_20795 = (state_20815[(11)]);
var inst_20793 = (state_20815[(8)]);
var inst_20793__$1 = (state_20815[(2)]);
var inst_20794 = (inst_20793__$1 == null);
var inst_20795__$1 = cljs.core.not.call(null,inst_20794);
var state_20815__$1 = (function (){var statearr_20834 = state_20815;
(statearr_20834[(11)] = inst_20795__$1);

(statearr_20834[(8)] = inst_20793__$1);

return statearr_20834;
})();
if(inst_20795__$1){
var statearr_20835_20897 = state_20815__$1;
(statearr_20835_20897[(1)] = (15));

} else {
var statearr_20836_20898 = state_20815__$1;
(statearr_20836_20898[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (16))){
var inst_20795 = (state_20815[(11)]);
var state_20815__$1 = state_20815;
var statearr_20837_20899 = state_20815__$1;
(statearr_20837_20899[(2)] = inst_20795);

(statearr_20837_20899[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (10))){
var inst_20787 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
var statearr_20838_20900 = state_20815__$1;
(statearr_20838_20900[(2)] = inst_20787);

(statearr_20838_20900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (18))){
var inst_20798 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
var statearr_20839_20901 = state_20815__$1;
(statearr_20839_20901[(2)] = inst_20798);

(statearr_20839_20901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (8))){
var inst_20784 = cljs.core.async.close_BANG_.call(null,to);
var state_20815__$1 = state_20815;
var statearr_20840_20902 = state_20815__$1;
(statearr_20840_20902[(2)] = inst_20784);

(statearr_20840_20902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto__,jobs,results,process,async))
;
return ((function (switch__18818__auto__,c__20298__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_20844 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20844[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__);

(statearr_20844[(1)] = (1));

return statearr_20844;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1 = (function (state_20815){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_20815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e20845){if((e20845 instanceof Object)){
var ex__18822__auto__ = e20845;
var statearr_20846_20903 = state_20815;
(statearr_20846_20903[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20904 = state_20815;
state_20815 = G__20904;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__ = function(state_20815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1.call(this,state_20815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto__,jobs,results,process,async))
})();
var state__20300__auto__ = (function (){var statearr_20847 = f__20299__auto__.call(null);
(statearr_20847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto__);

return statearr_20847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto__,jobs,results,process,async))
);

return c__20298__auto__;
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
var args20905 = [];
var len__17863__auto___20908 = arguments.length;
var i__17864__auto___20909 = (0);
while(true){
if((i__17864__auto___20909 < len__17863__auto___20908)){
args20905.push((arguments[i__17864__auto___20909]));

var G__20910 = (i__17864__auto___20909 + (1));
i__17864__auto___20909 = G__20910;
continue;
} else {
}
break;
}

var G__20907 = args20905.length;
switch (G__20907) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20905.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args20912 = [];
var len__17863__auto___20915 = arguments.length;
var i__17864__auto___20916 = (0);
while(true){
if((i__17864__auto___20916 < len__17863__auto___20915)){
args20912.push((arguments[i__17864__auto___20916]));

var G__20917 = (i__17864__auto___20916 + (1));
i__17864__auto___20916 = G__20917;
continue;
} else {
}
break;
}

var G__20914 = args20912.length;
switch (G__20914) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20912.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args20919 = [];
var len__17863__auto___20972 = arguments.length;
var i__17864__auto___20973 = (0);
while(true){
if((i__17864__auto___20973 < len__17863__auto___20972)){
args20919.push((arguments[i__17864__auto___20973]));

var G__20974 = (i__17864__auto___20973 + (1));
i__17864__auto___20973 = G__20974;
continue;
} else {
}
break;
}

var G__20921 = args20919.length;
switch (G__20921) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20919.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20298__auto___20976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___20976,tc,fc){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___20976,tc,fc){
return (function (state_20947){
var state_val_20948 = (state_20947[(1)]);
if((state_val_20948 === (7))){
var inst_20943 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
var statearr_20949_20977 = state_20947__$1;
(statearr_20949_20977[(2)] = inst_20943);

(statearr_20949_20977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (1))){
var state_20947__$1 = state_20947;
var statearr_20950_20978 = state_20947__$1;
(statearr_20950_20978[(2)] = null);

(statearr_20950_20978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (4))){
var inst_20924 = (state_20947[(7)]);
var inst_20924__$1 = (state_20947[(2)]);
var inst_20925 = (inst_20924__$1 == null);
var state_20947__$1 = (function (){var statearr_20951 = state_20947;
(statearr_20951[(7)] = inst_20924__$1);

return statearr_20951;
})();
if(cljs.core.truth_(inst_20925)){
var statearr_20952_20979 = state_20947__$1;
(statearr_20952_20979[(1)] = (5));

} else {
var statearr_20953_20980 = state_20947__$1;
(statearr_20953_20980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (13))){
var state_20947__$1 = state_20947;
var statearr_20954_20981 = state_20947__$1;
(statearr_20954_20981[(2)] = null);

(statearr_20954_20981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (6))){
var inst_20924 = (state_20947[(7)]);
var inst_20930 = p.call(null,inst_20924);
var state_20947__$1 = state_20947;
if(cljs.core.truth_(inst_20930)){
var statearr_20955_20982 = state_20947__$1;
(statearr_20955_20982[(1)] = (9));

} else {
var statearr_20956_20983 = state_20947__$1;
(statearr_20956_20983[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (3))){
var inst_20945 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20947__$1,inst_20945);
} else {
if((state_val_20948 === (12))){
var state_20947__$1 = state_20947;
var statearr_20957_20984 = state_20947__$1;
(statearr_20957_20984[(2)] = null);

(statearr_20957_20984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (2))){
var state_20947__$1 = state_20947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20947__$1,(4),ch);
} else {
if((state_val_20948 === (11))){
var inst_20924 = (state_20947[(7)]);
var inst_20934 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20947__$1,(8),inst_20934,inst_20924);
} else {
if((state_val_20948 === (9))){
var state_20947__$1 = state_20947;
var statearr_20958_20985 = state_20947__$1;
(statearr_20958_20985[(2)] = tc);

(statearr_20958_20985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (5))){
var inst_20927 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20928 = cljs.core.async.close_BANG_.call(null,fc);
var state_20947__$1 = (function (){var statearr_20959 = state_20947;
(statearr_20959[(8)] = inst_20927);

return statearr_20959;
})();
var statearr_20960_20986 = state_20947__$1;
(statearr_20960_20986[(2)] = inst_20928);

(statearr_20960_20986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (14))){
var inst_20941 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
var statearr_20961_20987 = state_20947__$1;
(statearr_20961_20987[(2)] = inst_20941);

(statearr_20961_20987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (10))){
var state_20947__$1 = state_20947;
var statearr_20962_20988 = state_20947__$1;
(statearr_20962_20988[(2)] = fc);

(statearr_20962_20988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (8))){
var inst_20936 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
if(cljs.core.truth_(inst_20936)){
var statearr_20963_20989 = state_20947__$1;
(statearr_20963_20989[(1)] = (12));

} else {
var statearr_20964_20990 = state_20947__$1;
(statearr_20964_20990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto___20976,tc,fc))
;
return ((function (switch__18818__auto__,c__20298__auto___20976,tc,fc){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_20968 = [null,null,null,null,null,null,null,null,null];
(statearr_20968[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_20968[(1)] = (1));

return statearr_20968;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_20947){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_20947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e20969){if((e20969 instanceof Object)){
var ex__18822__auto__ = e20969;
var statearr_20970_20991 = state_20947;
(statearr_20970_20991[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20992 = state_20947;
state_20947 = G__20992;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_20947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_20947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___20976,tc,fc))
})();
var state__20300__auto__ = (function (){var statearr_20971 = f__20299__auto__.call(null);
(statearr_20971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___20976);

return statearr_20971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___20976,tc,fc))
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
var c__20298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto__){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto__){
return (function (state_21056){
var state_val_21057 = (state_21056[(1)]);
if((state_val_21057 === (7))){
var inst_21052 = (state_21056[(2)]);
var state_21056__$1 = state_21056;
var statearr_21058_21079 = state_21056__$1;
(statearr_21058_21079[(2)] = inst_21052);

(statearr_21058_21079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (1))){
var inst_21036 = init;
var state_21056__$1 = (function (){var statearr_21059 = state_21056;
(statearr_21059[(7)] = inst_21036);

return statearr_21059;
})();
var statearr_21060_21080 = state_21056__$1;
(statearr_21060_21080[(2)] = null);

(statearr_21060_21080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (4))){
var inst_21039 = (state_21056[(8)]);
var inst_21039__$1 = (state_21056[(2)]);
var inst_21040 = (inst_21039__$1 == null);
var state_21056__$1 = (function (){var statearr_21061 = state_21056;
(statearr_21061[(8)] = inst_21039__$1);

return statearr_21061;
})();
if(cljs.core.truth_(inst_21040)){
var statearr_21062_21081 = state_21056__$1;
(statearr_21062_21081[(1)] = (5));

} else {
var statearr_21063_21082 = state_21056__$1;
(statearr_21063_21082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (6))){
var inst_21039 = (state_21056[(8)]);
var inst_21043 = (state_21056[(9)]);
var inst_21036 = (state_21056[(7)]);
var inst_21043__$1 = f.call(null,inst_21036,inst_21039);
var inst_21044 = cljs.core.reduced_QMARK_.call(null,inst_21043__$1);
var state_21056__$1 = (function (){var statearr_21064 = state_21056;
(statearr_21064[(9)] = inst_21043__$1);

return statearr_21064;
})();
if(inst_21044){
var statearr_21065_21083 = state_21056__$1;
(statearr_21065_21083[(1)] = (8));

} else {
var statearr_21066_21084 = state_21056__$1;
(statearr_21066_21084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (3))){
var inst_21054 = (state_21056[(2)]);
var state_21056__$1 = state_21056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21056__$1,inst_21054);
} else {
if((state_val_21057 === (2))){
var state_21056__$1 = state_21056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21056__$1,(4),ch);
} else {
if((state_val_21057 === (9))){
var inst_21043 = (state_21056[(9)]);
var inst_21036 = inst_21043;
var state_21056__$1 = (function (){var statearr_21067 = state_21056;
(statearr_21067[(7)] = inst_21036);

return statearr_21067;
})();
var statearr_21068_21085 = state_21056__$1;
(statearr_21068_21085[(2)] = null);

(statearr_21068_21085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (5))){
var inst_21036 = (state_21056[(7)]);
var state_21056__$1 = state_21056;
var statearr_21069_21086 = state_21056__$1;
(statearr_21069_21086[(2)] = inst_21036);

(statearr_21069_21086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (10))){
var inst_21050 = (state_21056[(2)]);
var state_21056__$1 = state_21056;
var statearr_21070_21087 = state_21056__$1;
(statearr_21070_21087[(2)] = inst_21050);

(statearr_21070_21087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21057 === (8))){
var inst_21043 = (state_21056[(9)]);
var inst_21046 = cljs.core.deref.call(null,inst_21043);
var state_21056__$1 = state_21056;
var statearr_21071_21088 = state_21056__$1;
(statearr_21071_21088[(2)] = inst_21046);

(statearr_21071_21088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto__))
;
return ((function (switch__18818__auto__,c__20298__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18819__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18819__auto____0 = (function (){
var statearr_21075 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21075[(0)] = cljs$core$async$reduce_$_state_machine__18819__auto__);

(statearr_21075[(1)] = (1));

return statearr_21075;
});
var cljs$core$async$reduce_$_state_machine__18819__auto____1 = (function (state_21056){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_21056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e21076){if((e21076 instanceof Object)){
var ex__18822__auto__ = e21076;
var statearr_21077_21089 = state_21056;
(statearr_21077_21089[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21090 = state_21056;
state_21056 = G__21090;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18819__auto__ = function(state_21056){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18819__auto____1.call(this,state_21056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18819__auto____0;
cljs$core$async$reduce_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18819__auto____1;
return cljs$core$async$reduce_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto__))
})();
var state__20300__auto__ = (function (){var statearr_21078 = f__20299__auto__.call(null);
(statearr_21078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto__);

return statearr_21078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto__))
);

return c__20298__auto__;
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
var args21091 = [];
var len__17863__auto___21143 = arguments.length;
var i__17864__auto___21144 = (0);
while(true){
if((i__17864__auto___21144 < len__17863__auto___21143)){
args21091.push((arguments[i__17864__auto___21144]));

var G__21145 = (i__17864__auto___21144 + (1));
i__17864__auto___21144 = G__21145;
continue;
} else {
}
break;
}

var G__21093 = args21091.length;
switch (G__21093) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21091.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto__){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto__){
return (function (state_21118){
var state_val_21119 = (state_21118[(1)]);
if((state_val_21119 === (7))){
var inst_21100 = (state_21118[(2)]);
var state_21118__$1 = state_21118;
var statearr_21120_21147 = state_21118__$1;
(statearr_21120_21147[(2)] = inst_21100);

(statearr_21120_21147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (1))){
var inst_21094 = cljs.core.seq.call(null,coll);
var inst_21095 = inst_21094;
var state_21118__$1 = (function (){var statearr_21121 = state_21118;
(statearr_21121[(7)] = inst_21095);

return statearr_21121;
})();
var statearr_21122_21148 = state_21118__$1;
(statearr_21122_21148[(2)] = null);

(statearr_21122_21148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (4))){
var inst_21095 = (state_21118[(7)]);
var inst_21098 = cljs.core.first.call(null,inst_21095);
var state_21118__$1 = state_21118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21118__$1,(7),ch,inst_21098);
} else {
if((state_val_21119 === (13))){
var inst_21112 = (state_21118[(2)]);
var state_21118__$1 = state_21118;
var statearr_21123_21149 = state_21118__$1;
(statearr_21123_21149[(2)] = inst_21112);

(statearr_21123_21149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (6))){
var inst_21103 = (state_21118[(2)]);
var state_21118__$1 = state_21118;
if(cljs.core.truth_(inst_21103)){
var statearr_21124_21150 = state_21118__$1;
(statearr_21124_21150[(1)] = (8));

} else {
var statearr_21125_21151 = state_21118__$1;
(statearr_21125_21151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (3))){
var inst_21116 = (state_21118[(2)]);
var state_21118__$1 = state_21118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21118__$1,inst_21116);
} else {
if((state_val_21119 === (12))){
var state_21118__$1 = state_21118;
var statearr_21126_21152 = state_21118__$1;
(statearr_21126_21152[(2)] = null);

(statearr_21126_21152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (2))){
var inst_21095 = (state_21118[(7)]);
var state_21118__$1 = state_21118;
if(cljs.core.truth_(inst_21095)){
var statearr_21127_21153 = state_21118__$1;
(statearr_21127_21153[(1)] = (4));

} else {
var statearr_21128_21154 = state_21118__$1;
(statearr_21128_21154[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (11))){
var inst_21109 = cljs.core.async.close_BANG_.call(null,ch);
var state_21118__$1 = state_21118;
var statearr_21129_21155 = state_21118__$1;
(statearr_21129_21155[(2)] = inst_21109);

(statearr_21129_21155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (9))){
var state_21118__$1 = state_21118;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21130_21156 = state_21118__$1;
(statearr_21130_21156[(1)] = (11));

} else {
var statearr_21131_21157 = state_21118__$1;
(statearr_21131_21157[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (5))){
var inst_21095 = (state_21118[(7)]);
var state_21118__$1 = state_21118;
var statearr_21132_21158 = state_21118__$1;
(statearr_21132_21158[(2)] = inst_21095);

(statearr_21132_21158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (10))){
var inst_21114 = (state_21118[(2)]);
var state_21118__$1 = state_21118;
var statearr_21133_21159 = state_21118__$1;
(statearr_21133_21159[(2)] = inst_21114);

(statearr_21133_21159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21119 === (8))){
var inst_21095 = (state_21118[(7)]);
var inst_21105 = cljs.core.next.call(null,inst_21095);
var inst_21095__$1 = inst_21105;
var state_21118__$1 = (function (){var statearr_21134 = state_21118;
(statearr_21134[(7)] = inst_21095__$1);

return statearr_21134;
})();
var statearr_21135_21160 = state_21118__$1;
(statearr_21135_21160[(2)] = null);

(statearr_21135_21160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto__))
;
return ((function (switch__18818__auto__,c__20298__auto__){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_21139 = [null,null,null,null,null,null,null,null];
(statearr_21139[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_21139[(1)] = (1));

return statearr_21139;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_21118){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_21118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e21140){if((e21140 instanceof Object)){
var ex__18822__auto__ = e21140;
var statearr_21141_21161 = state_21118;
(statearr_21141_21161[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21162 = state_21118;
state_21118 = G__21162;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_21118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_21118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto__))
})();
var state__20300__auto__ = (function (){var statearr_21142 = f__20299__auto__.call(null);
(statearr_21142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto__);

return statearr_21142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto__))
);

return c__20298__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_);
} else {
var m__17461__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21384 = (function (mult,ch,cs,meta21385){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21385 = meta21385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21386,meta21385__$1){
var self__ = this;
var _21386__$1 = this;
return (new cljs.core.async.t_cljs$core$async21384(self__.mult,self__.ch,self__.cs,meta21385__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21386){
var self__ = this;
var _21386__$1 = this;
return self__.meta21385;
});})(cs))
;

cljs.core.async.t_cljs$core$async21384.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21384.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21384.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21384.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21384.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21384.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21385","meta21385",-1715852529,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21384";

cljs.core.async.t_cljs$core$async21384.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21384");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21384 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21384(mult__$1,ch__$1,cs__$1,meta21385){
return (new cljs.core.async.t_cljs$core$async21384(mult__$1,ch__$1,cs__$1,meta21385));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21384(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20298__auto___21605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___21605,cs,m,dchan,dctr,done){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___21605,cs,m,dchan,dctr,done){
return (function (state_21517){
var state_val_21518 = (state_21517[(1)]);
if((state_val_21518 === (7))){
var inst_21513 = (state_21517[(2)]);
var state_21517__$1 = state_21517;
var statearr_21519_21606 = state_21517__$1;
(statearr_21519_21606[(2)] = inst_21513);

(statearr_21519_21606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (20))){
var inst_21418 = (state_21517[(7)]);
var inst_21428 = cljs.core.first.call(null,inst_21418);
var inst_21429 = cljs.core.nth.call(null,inst_21428,(0),null);
var inst_21430 = cljs.core.nth.call(null,inst_21428,(1),null);
var state_21517__$1 = (function (){var statearr_21520 = state_21517;
(statearr_21520[(8)] = inst_21429);

return statearr_21520;
})();
if(cljs.core.truth_(inst_21430)){
var statearr_21521_21607 = state_21517__$1;
(statearr_21521_21607[(1)] = (22));

} else {
var statearr_21522_21608 = state_21517__$1;
(statearr_21522_21608[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (27))){
var inst_21465 = (state_21517[(9)]);
var inst_21458 = (state_21517[(10)]);
var inst_21460 = (state_21517[(11)]);
var inst_21389 = (state_21517[(12)]);
var inst_21465__$1 = cljs.core._nth.call(null,inst_21458,inst_21460);
var inst_21466 = cljs.core.async.put_BANG_.call(null,inst_21465__$1,inst_21389,done);
var state_21517__$1 = (function (){var statearr_21523 = state_21517;
(statearr_21523[(9)] = inst_21465__$1);

return statearr_21523;
})();
if(cljs.core.truth_(inst_21466)){
var statearr_21524_21609 = state_21517__$1;
(statearr_21524_21609[(1)] = (30));

} else {
var statearr_21525_21610 = state_21517__$1;
(statearr_21525_21610[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (1))){
var state_21517__$1 = state_21517;
var statearr_21526_21611 = state_21517__$1;
(statearr_21526_21611[(2)] = null);

(statearr_21526_21611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (24))){
var inst_21418 = (state_21517[(7)]);
var inst_21435 = (state_21517[(2)]);
var inst_21436 = cljs.core.next.call(null,inst_21418);
var inst_21398 = inst_21436;
var inst_21399 = null;
var inst_21400 = (0);
var inst_21401 = (0);
var state_21517__$1 = (function (){var statearr_21527 = state_21517;
(statearr_21527[(13)] = inst_21398);

(statearr_21527[(14)] = inst_21400);

(statearr_21527[(15)] = inst_21399);

(statearr_21527[(16)] = inst_21435);

(statearr_21527[(17)] = inst_21401);

return statearr_21527;
})();
var statearr_21528_21612 = state_21517__$1;
(statearr_21528_21612[(2)] = null);

(statearr_21528_21612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (39))){
var state_21517__$1 = state_21517;
var statearr_21532_21613 = state_21517__$1;
(statearr_21532_21613[(2)] = null);

(statearr_21532_21613[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (4))){
var inst_21389 = (state_21517[(12)]);
var inst_21389__$1 = (state_21517[(2)]);
var inst_21390 = (inst_21389__$1 == null);
var state_21517__$1 = (function (){var statearr_21533 = state_21517;
(statearr_21533[(12)] = inst_21389__$1);

return statearr_21533;
})();
if(cljs.core.truth_(inst_21390)){
var statearr_21534_21614 = state_21517__$1;
(statearr_21534_21614[(1)] = (5));

} else {
var statearr_21535_21615 = state_21517__$1;
(statearr_21535_21615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (15))){
var inst_21398 = (state_21517[(13)]);
var inst_21400 = (state_21517[(14)]);
var inst_21399 = (state_21517[(15)]);
var inst_21401 = (state_21517[(17)]);
var inst_21414 = (state_21517[(2)]);
var inst_21415 = (inst_21401 + (1));
var tmp21529 = inst_21398;
var tmp21530 = inst_21400;
var tmp21531 = inst_21399;
var inst_21398__$1 = tmp21529;
var inst_21399__$1 = tmp21531;
var inst_21400__$1 = tmp21530;
var inst_21401__$1 = inst_21415;
var state_21517__$1 = (function (){var statearr_21536 = state_21517;
(statearr_21536[(13)] = inst_21398__$1);

(statearr_21536[(14)] = inst_21400__$1);

(statearr_21536[(15)] = inst_21399__$1);

(statearr_21536[(18)] = inst_21414);

(statearr_21536[(17)] = inst_21401__$1);

return statearr_21536;
})();
var statearr_21537_21616 = state_21517__$1;
(statearr_21537_21616[(2)] = null);

(statearr_21537_21616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (21))){
var inst_21439 = (state_21517[(2)]);
var state_21517__$1 = state_21517;
var statearr_21541_21617 = state_21517__$1;
(statearr_21541_21617[(2)] = inst_21439);

(statearr_21541_21617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (31))){
var inst_21465 = (state_21517[(9)]);
var inst_21469 = done.call(null,null);
var inst_21470 = cljs.core.async.untap_STAR_.call(null,m,inst_21465);
var state_21517__$1 = (function (){var statearr_21542 = state_21517;
(statearr_21542[(19)] = inst_21469);

return statearr_21542;
})();
var statearr_21543_21618 = state_21517__$1;
(statearr_21543_21618[(2)] = inst_21470);

(statearr_21543_21618[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (32))){
var inst_21458 = (state_21517[(10)]);
var inst_21460 = (state_21517[(11)]);
var inst_21457 = (state_21517[(20)]);
var inst_21459 = (state_21517[(21)]);
var inst_21472 = (state_21517[(2)]);
var inst_21473 = (inst_21460 + (1));
var tmp21538 = inst_21458;
var tmp21539 = inst_21457;
var tmp21540 = inst_21459;
var inst_21457__$1 = tmp21539;
var inst_21458__$1 = tmp21538;
var inst_21459__$1 = tmp21540;
var inst_21460__$1 = inst_21473;
var state_21517__$1 = (function (){var statearr_21544 = state_21517;
(statearr_21544[(10)] = inst_21458__$1);

(statearr_21544[(11)] = inst_21460__$1);

(statearr_21544[(20)] = inst_21457__$1);

(statearr_21544[(22)] = inst_21472);

(statearr_21544[(21)] = inst_21459__$1);

return statearr_21544;
})();
var statearr_21545_21619 = state_21517__$1;
(statearr_21545_21619[(2)] = null);

(statearr_21545_21619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (40))){
var inst_21485 = (state_21517[(23)]);
var inst_21489 = done.call(null,null);
var inst_21490 = cljs.core.async.untap_STAR_.call(null,m,inst_21485);
var state_21517__$1 = (function (){var statearr_21546 = state_21517;
(statearr_21546[(24)] = inst_21489);

return statearr_21546;
})();
var statearr_21547_21620 = state_21517__$1;
(statearr_21547_21620[(2)] = inst_21490);

(statearr_21547_21620[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (33))){
var inst_21476 = (state_21517[(25)]);
var inst_21478 = cljs.core.chunked_seq_QMARK_.call(null,inst_21476);
var state_21517__$1 = state_21517;
if(inst_21478){
var statearr_21548_21621 = state_21517__$1;
(statearr_21548_21621[(1)] = (36));

} else {
var statearr_21549_21622 = state_21517__$1;
(statearr_21549_21622[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (13))){
var inst_21408 = (state_21517[(26)]);
var inst_21411 = cljs.core.async.close_BANG_.call(null,inst_21408);
var state_21517__$1 = state_21517;
var statearr_21550_21623 = state_21517__$1;
(statearr_21550_21623[(2)] = inst_21411);

(statearr_21550_21623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (22))){
var inst_21429 = (state_21517[(8)]);
var inst_21432 = cljs.core.async.close_BANG_.call(null,inst_21429);
var state_21517__$1 = state_21517;
var statearr_21551_21624 = state_21517__$1;
(statearr_21551_21624[(2)] = inst_21432);

(statearr_21551_21624[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (36))){
var inst_21476 = (state_21517[(25)]);
var inst_21480 = cljs.core.chunk_first.call(null,inst_21476);
var inst_21481 = cljs.core.chunk_rest.call(null,inst_21476);
var inst_21482 = cljs.core.count.call(null,inst_21480);
var inst_21457 = inst_21481;
var inst_21458 = inst_21480;
var inst_21459 = inst_21482;
var inst_21460 = (0);
var state_21517__$1 = (function (){var statearr_21552 = state_21517;
(statearr_21552[(10)] = inst_21458);

(statearr_21552[(11)] = inst_21460);

(statearr_21552[(20)] = inst_21457);

(statearr_21552[(21)] = inst_21459);

return statearr_21552;
})();
var statearr_21553_21625 = state_21517__$1;
(statearr_21553_21625[(2)] = null);

(statearr_21553_21625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (41))){
var inst_21476 = (state_21517[(25)]);
var inst_21492 = (state_21517[(2)]);
var inst_21493 = cljs.core.next.call(null,inst_21476);
var inst_21457 = inst_21493;
var inst_21458 = null;
var inst_21459 = (0);
var inst_21460 = (0);
var state_21517__$1 = (function (){var statearr_21554 = state_21517;
(statearr_21554[(10)] = inst_21458);

(statearr_21554[(11)] = inst_21460);

(statearr_21554[(20)] = inst_21457);

(statearr_21554[(27)] = inst_21492);

(statearr_21554[(21)] = inst_21459);

return statearr_21554;
})();
var statearr_21555_21626 = state_21517__$1;
(statearr_21555_21626[(2)] = null);

(statearr_21555_21626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (43))){
var state_21517__$1 = state_21517;
var statearr_21556_21627 = state_21517__$1;
(statearr_21556_21627[(2)] = null);

(statearr_21556_21627[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (29))){
var inst_21501 = (state_21517[(2)]);
var state_21517__$1 = state_21517;
var statearr_21557_21628 = state_21517__$1;
(statearr_21557_21628[(2)] = inst_21501);

(statearr_21557_21628[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (44))){
var inst_21510 = (state_21517[(2)]);
var state_21517__$1 = (function (){var statearr_21558 = state_21517;
(statearr_21558[(28)] = inst_21510);

return statearr_21558;
})();
var statearr_21559_21629 = state_21517__$1;
(statearr_21559_21629[(2)] = null);

(statearr_21559_21629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (6))){
var inst_21449 = (state_21517[(29)]);
var inst_21448 = cljs.core.deref.call(null,cs);
var inst_21449__$1 = cljs.core.keys.call(null,inst_21448);
var inst_21450 = cljs.core.count.call(null,inst_21449__$1);
var inst_21451 = cljs.core.reset_BANG_.call(null,dctr,inst_21450);
var inst_21456 = cljs.core.seq.call(null,inst_21449__$1);
var inst_21457 = inst_21456;
var inst_21458 = null;
var inst_21459 = (0);
var inst_21460 = (0);
var state_21517__$1 = (function (){var statearr_21560 = state_21517;
(statearr_21560[(10)] = inst_21458);

(statearr_21560[(11)] = inst_21460);

(statearr_21560[(20)] = inst_21457);

(statearr_21560[(29)] = inst_21449__$1);

(statearr_21560[(21)] = inst_21459);

(statearr_21560[(30)] = inst_21451);

return statearr_21560;
})();
var statearr_21561_21630 = state_21517__$1;
(statearr_21561_21630[(2)] = null);

(statearr_21561_21630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (28))){
var inst_21476 = (state_21517[(25)]);
var inst_21457 = (state_21517[(20)]);
var inst_21476__$1 = cljs.core.seq.call(null,inst_21457);
var state_21517__$1 = (function (){var statearr_21562 = state_21517;
(statearr_21562[(25)] = inst_21476__$1);

return statearr_21562;
})();
if(inst_21476__$1){
var statearr_21563_21631 = state_21517__$1;
(statearr_21563_21631[(1)] = (33));

} else {
var statearr_21564_21632 = state_21517__$1;
(statearr_21564_21632[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (25))){
var inst_21460 = (state_21517[(11)]);
var inst_21459 = (state_21517[(21)]);
var inst_21462 = (inst_21460 < inst_21459);
var inst_21463 = inst_21462;
var state_21517__$1 = state_21517;
if(cljs.core.truth_(inst_21463)){
var statearr_21565_21633 = state_21517__$1;
(statearr_21565_21633[(1)] = (27));

} else {
var statearr_21566_21634 = state_21517__$1;
(statearr_21566_21634[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (34))){
var state_21517__$1 = state_21517;
var statearr_21567_21635 = state_21517__$1;
(statearr_21567_21635[(2)] = null);

(statearr_21567_21635[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (17))){
var state_21517__$1 = state_21517;
var statearr_21568_21636 = state_21517__$1;
(statearr_21568_21636[(2)] = null);

(statearr_21568_21636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (3))){
var inst_21515 = (state_21517[(2)]);
var state_21517__$1 = state_21517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21517__$1,inst_21515);
} else {
if((state_val_21518 === (12))){
var inst_21444 = (state_21517[(2)]);
var state_21517__$1 = state_21517;
var statearr_21569_21637 = state_21517__$1;
(statearr_21569_21637[(2)] = inst_21444);

(statearr_21569_21637[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (2))){
var state_21517__$1 = state_21517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21517__$1,(4),ch);
} else {
if((state_val_21518 === (23))){
var state_21517__$1 = state_21517;
var statearr_21570_21638 = state_21517__$1;
(statearr_21570_21638[(2)] = null);

(statearr_21570_21638[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (35))){
var inst_21499 = (state_21517[(2)]);
var state_21517__$1 = state_21517;
var statearr_21571_21639 = state_21517__$1;
(statearr_21571_21639[(2)] = inst_21499);

(statearr_21571_21639[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (19))){
var inst_21418 = (state_21517[(7)]);
var inst_21422 = cljs.core.chunk_first.call(null,inst_21418);
var inst_21423 = cljs.core.chunk_rest.call(null,inst_21418);
var inst_21424 = cljs.core.count.call(null,inst_21422);
var inst_21398 = inst_21423;
var inst_21399 = inst_21422;
var inst_21400 = inst_21424;
var inst_21401 = (0);
var state_21517__$1 = (function (){var statearr_21572 = state_21517;
(statearr_21572[(13)] = inst_21398);

(statearr_21572[(14)] = inst_21400);

(statearr_21572[(15)] = inst_21399);

(statearr_21572[(17)] = inst_21401);

return statearr_21572;
})();
var statearr_21573_21640 = state_21517__$1;
(statearr_21573_21640[(2)] = null);

(statearr_21573_21640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (11))){
var inst_21398 = (state_21517[(13)]);
var inst_21418 = (state_21517[(7)]);
var inst_21418__$1 = cljs.core.seq.call(null,inst_21398);
var state_21517__$1 = (function (){var statearr_21574 = state_21517;
(statearr_21574[(7)] = inst_21418__$1);

return statearr_21574;
})();
if(inst_21418__$1){
var statearr_21575_21641 = state_21517__$1;
(statearr_21575_21641[(1)] = (16));

} else {
var statearr_21576_21642 = state_21517__$1;
(statearr_21576_21642[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (9))){
var inst_21446 = (state_21517[(2)]);
var state_21517__$1 = state_21517;
var statearr_21577_21643 = state_21517__$1;
(statearr_21577_21643[(2)] = inst_21446);

(statearr_21577_21643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (5))){
var inst_21396 = cljs.core.deref.call(null,cs);
var inst_21397 = cljs.core.seq.call(null,inst_21396);
var inst_21398 = inst_21397;
var inst_21399 = null;
var inst_21400 = (0);
var inst_21401 = (0);
var state_21517__$1 = (function (){var statearr_21578 = state_21517;
(statearr_21578[(13)] = inst_21398);

(statearr_21578[(14)] = inst_21400);

(statearr_21578[(15)] = inst_21399);

(statearr_21578[(17)] = inst_21401);

return statearr_21578;
})();
var statearr_21579_21644 = state_21517__$1;
(statearr_21579_21644[(2)] = null);

(statearr_21579_21644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (14))){
var state_21517__$1 = state_21517;
var statearr_21580_21645 = state_21517__$1;
(statearr_21580_21645[(2)] = null);

(statearr_21580_21645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (45))){
var inst_21507 = (state_21517[(2)]);
var state_21517__$1 = state_21517;
var statearr_21581_21646 = state_21517__$1;
(statearr_21581_21646[(2)] = inst_21507);

(statearr_21581_21646[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (26))){
var inst_21449 = (state_21517[(29)]);
var inst_21503 = (state_21517[(2)]);
var inst_21504 = cljs.core.seq.call(null,inst_21449);
var state_21517__$1 = (function (){var statearr_21582 = state_21517;
(statearr_21582[(31)] = inst_21503);

return statearr_21582;
})();
if(inst_21504){
var statearr_21583_21647 = state_21517__$1;
(statearr_21583_21647[(1)] = (42));

} else {
var statearr_21584_21648 = state_21517__$1;
(statearr_21584_21648[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (16))){
var inst_21418 = (state_21517[(7)]);
var inst_21420 = cljs.core.chunked_seq_QMARK_.call(null,inst_21418);
var state_21517__$1 = state_21517;
if(inst_21420){
var statearr_21585_21649 = state_21517__$1;
(statearr_21585_21649[(1)] = (19));

} else {
var statearr_21586_21650 = state_21517__$1;
(statearr_21586_21650[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (38))){
var inst_21496 = (state_21517[(2)]);
var state_21517__$1 = state_21517;
var statearr_21587_21651 = state_21517__$1;
(statearr_21587_21651[(2)] = inst_21496);

(statearr_21587_21651[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (30))){
var state_21517__$1 = state_21517;
var statearr_21588_21652 = state_21517__$1;
(statearr_21588_21652[(2)] = null);

(statearr_21588_21652[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (10))){
var inst_21399 = (state_21517[(15)]);
var inst_21401 = (state_21517[(17)]);
var inst_21407 = cljs.core._nth.call(null,inst_21399,inst_21401);
var inst_21408 = cljs.core.nth.call(null,inst_21407,(0),null);
var inst_21409 = cljs.core.nth.call(null,inst_21407,(1),null);
var state_21517__$1 = (function (){var statearr_21589 = state_21517;
(statearr_21589[(26)] = inst_21408);

return statearr_21589;
})();
if(cljs.core.truth_(inst_21409)){
var statearr_21590_21653 = state_21517__$1;
(statearr_21590_21653[(1)] = (13));

} else {
var statearr_21591_21654 = state_21517__$1;
(statearr_21591_21654[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (18))){
var inst_21442 = (state_21517[(2)]);
var state_21517__$1 = state_21517;
var statearr_21592_21655 = state_21517__$1;
(statearr_21592_21655[(2)] = inst_21442);

(statearr_21592_21655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (42))){
var state_21517__$1 = state_21517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21517__$1,(45),dchan);
} else {
if((state_val_21518 === (37))){
var inst_21476 = (state_21517[(25)]);
var inst_21389 = (state_21517[(12)]);
var inst_21485 = (state_21517[(23)]);
var inst_21485__$1 = cljs.core.first.call(null,inst_21476);
var inst_21486 = cljs.core.async.put_BANG_.call(null,inst_21485__$1,inst_21389,done);
var state_21517__$1 = (function (){var statearr_21593 = state_21517;
(statearr_21593[(23)] = inst_21485__$1);

return statearr_21593;
})();
if(cljs.core.truth_(inst_21486)){
var statearr_21594_21656 = state_21517__$1;
(statearr_21594_21656[(1)] = (39));

} else {
var statearr_21595_21657 = state_21517__$1;
(statearr_21595_21657[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21518 === (8))){
var inst_21400 = (state_21517[(14)]);
var inst_21401 = (state_21517[(17)]);
var inst_21403 = (inst_21401 < inst_21400);
var inst_21404 = inst_21403;
var state_21517__$1 = state_21517;
if(cljs.core.truth_(inst_21404)){
var statearr_21596_21658 = state_21517__$1;
(statearr_21596_21658[(1)] = (10));

} else {
var statearr_21597_21659 = state_21517__$1;
(statearr_21597_21659[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto___21605,cs,m,dchan,dctr,done))
;
return ((function (switch__18818__auto__,c__20298__auto___21605,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18819__auto__ = null;
var cljs$core$async$mult_$_state_machine__18819__auto____0 = (function (){
var statearr_21601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21601[(0)] = cljs$core$async$mult_$_state_machine__18819__auto__);

(statearr_21601[(1)] = (1));

return statearr_21601;
});
var cljs$core$async$mult_$_state_machine__18819__auto____1 = (function (state_21517){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_21517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e21602){if((e21602 instanceof Object)){
var ex__18822__auto__ = e21602;
var statearr_21603_21660 = state_21517;
(statearr_21603_21660[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21661 = state_21517;
state_21517 = G__21661;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18819__auto__ = function(state_21517){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18819__auto____1.call(this,state_21517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18819__auto____0;
cljs$core$async$mult_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18819__auto____1;
return cljs$core$async$mult_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___21605,cs,m,dchan,dctr,done))
})();
var state__20300__auto__ = (function (){var statearr_21604 = f__20299__auto__.call(null);
(statearr_21604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___21605);

return statearr_21604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___21605,cs,m,dchan,dctr,done))
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
var args21662 = [];
var len__17863__auto___21665 = arguments.length;
var i__17864__auto___21666 = (0);
while(true){
if((i__17864__auto___21666 < len__17863__auto___21665)){
args21662.push((arguments[i__17864__auto___21666]));

var G__21667 = (i__17864__auto___21666 + (1));
i__17864__auto___21666 = G__21667;
continue;
} else {
}
break;
}

var G__21664 = args21662.length;
switch (G__21664) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21662.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,state_map);
} else {
var m__17461__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,mode);
} else {
var m__17461__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___21679 = arguments.length;
var i__17864__auto___21680 = (0);
while(true){
if((i__17864__auto___21680 < len__17863__auto___21679)){
args__17870__auto__.push((arguments[i__17864__auto___21680]));

var G__21681 = (i__17864__auto___21680 + (1));
i__17864__auto___21680 = G__21681;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((3) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17871__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21673){
var map__21674 = p__21673;
var map__21674__$1 = ((((!((map__21674 == null)))?((((map__21674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21674):map__21674);
var opts = map__21674__$1;
var statearr_21676_21682 = state;
(statearr_21676_21682[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21674,map__21674__$1,opts){
return (function (val){
var statearr_21677_21683 = state;
(statearr_21677_21683[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21674,map__21674__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21678_21684 = state;
(statearr_21678_21684[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21669){
var G__21670 = cljs.core.first.call(null,seq21669);
var seq21669__$1 = cljs.core.next.call(null,seq21669);
var G__21671 = cljs.core.first.call(null,seq21669__$1);
var seq21669__$2 = cljs.core.next.call(null,seq21669__$1);
var G__21672 = cljs.core.first.call(null,seq21669__$2);
var seq21669__$3 = cljs.core.next.call(null,seq21669__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21670,G__21671,G__21672,seq21669__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21848 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21849){
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
this.meta21849 = meta21849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21850,meta21849__$1){
var self__ = this;
var _21850__$1 = this;
return (new cljs.core.async.t_cljs$core$async21848(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21849__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21850){
var self__ = this;
var _21850__$1 = this;
return self__.meta21849;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21848.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21848.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21849","meta21849",-17930938,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21848";

cljs.core.async.t_cljs$core$async21848.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21848");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21848 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21848(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21849){
return (new cljs.core.async.t_cljs$core$async21848(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21849));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21848(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20298__auto___22011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___22011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___22011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21948){
var state_val_21949 = (state_21948[(1)]);
if((state_val_21949 === (7))){
var inst_21866 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
var statearr_21950_22012 = state_21948__$1;
(statearr_21950_22012[(2)] = inst_21866);

(statearr_21950_22012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (20))){
var inst_21878 = (state_21948[(7)]);
var state_21948__$1 = state_21948;
var statearr_21951_22013 = state_21948__$1;
(statearr_21951_22013[(2)] = inst_21878);

(statearr_21951_22013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (27))){
var state_21948__$1 = state_21948;
var statearr_21952_22014 = state_21948__$1;
(statearr_21952_22014[(2)] = null);

(statearr_21952_22014[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (1))){
var inst_21854 = (state_21948[(8)]);
var inst_21854__$1 = calc_state.call(null);
var inst_21856 = (inst_21854__$1 == null);
var inst_21857 = cljs.core.not.call(null,inst_21856);
var state_21948__$1 = (function (){var statearr_21953 = state_21948;
(statearr_21953[(8)] = inst_21854__$1);

return statearr_21953;
})();
if(inst_21857){
var statearr_21954_22015 = state_21948__$1;
(statearr_21954_22015[(1)] = (2));

} else {
var statearr_21955_22016 = state_21948__$1;
(statearr_21955_22016[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (24))){
var inst_21908 = (state_21948[(9)]);
var inst_21901 = (state_21948[(10)]);
var inst_21922 = (state_21948[(11)]);
var inst_21922__$1 = inst_21901.call(null,inst_21908);
var state_21948__$1 = (function (){var statearr_21956 = state_21948;
(statearr_21956[(11)] = inst_21922__$1);

return statearr_21956;
})();
if(cljs.core.truth_(inst_21922__$1)){
var statearr_21957_22017 = state_21948__$1;
(statearr_21957_22017[(1)] = (29));

} else {
var statearr_21958_22018 = state_21948__$1;
(statearr_21958_22018[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (4))){
var inst_21869 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
if(cljs.core.truth_(inst_21869)){
var statearr_21959_22019 = state_21948__$1;
(statearr_21959_22019[(1)] = (8));

} else {
var statearr_21960_22020 = state_21948__$1;
(statearr_21960_22020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (15))){
var inst_21895 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
if(cljs.core.truth_(inst_21895)){
var statearr_21961_22021 = state_21948__$1;
(statearr_21961_22021[(1)] = (19));

} else {
var statearr_21962_22022 = state_21948__$1;
(statearr_21962_22022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (21))){
var inst_21900 = (state_21948[(12)]);
var inst_21900__$1 = (state_21948[(2)]);
var inst_21901 = cljs.core.get.call(null,inst_21900__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21902 = cljs.core.get.call(null,inst_21900__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21903 = cljs.core.get.call(null,inst_21900__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21948__$1 = (function (){var statearr_21963 = state_21948;
(statearr_21963[(12)] = inst_21900__$1);

(statearr_21963[(13)] = inst_21902);

(statearr_21963[(10)] = inst_21901);

return statearr_21963;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21948__$1,(22),inst_21903);
} else {
if((state_val_21949 === (31))){
var inst_21930 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
if(cljs.core.truth_(inst_21930)){
var statearr_21964_22023 = state_21948__$1;
(statearr_21964_22023[(1)] = (32));

} else {
var statearr_21965_22024 = state_21948__$1;
(statearr_21965_22024[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (32))){
var inst_21907 = (state_21948[(14)]);
var state_21948__$1 = state_21948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21948__$1,(35),out,inst_21907);
} else {
if((state_val_21949 === (33))){
var inst_21900 = (state_21948[(12)]);
var inst_21878 = inst_21900;
var state_21948__$1 = (function (){var statearr_21966 = state_21948;
(statearr_21966[(7)] = inst_21878);

return statearr_21966;
})();
var statearr_21967_22025 = state_21948__$1;
(statearr_21967_22025[(2)] = null);

(statearr_21967_22025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (13))){
var inst_21878 = (state_21948[(7)]);
var inst_21885 = inst_21878.cljs$lang$protocol_mask$partition0$;
var inst_21886 = (inst_21885 & (64));
var inst_21887 = inst_21878.cljs$core$ISeq$;
var inst_21888 = (inst_21886) || (inst_21887);
var state_21948__$1 = state_21948;
if(cljs.core.truth_(inst_21888)){
var statearr_21968_22026 = state_21948__$1;
(statearr_21968_22026[(1)] = (16));

} else {
var statearr_21969_22027 = state_21948__$1;
(statearr_21969_22027[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (22))){
var inst_21908 = (state_21948[(9)]);
var inst_21907 = (state_21948[(14)]);
var inst_21906 = (state_21948[(2)]);
var inst_21907__$1 = cljs.core.nth.call(null,inst_21906,(0),null);
var inst_21908__$1 = cljs.core.nth.call(null,inst_21906,(1),null);
var inst_21909 = (inst_21907__$1 == null);
var inst_21910 = cljs.core._EQ_.call(null,inst_21908__$1,change);
var inst_21911 = (inst_21909) || (inst_21910);
var state_21948__$1 = (function (){var statearr_21970 = state_21948;
(statearr_21970[(9)] = inst_21908__$1);

(statearr_21970[(14)] = inst_21907__$1);

return statearr_21970;
})();
if(cljs.core.truth_(inst_21911)){
var statearr_21971_22028 = state_21948__$1;
(statearr_21971_22028[(1)] = (23));

} else {
var statearr_21972_22029 = state_21948__$1;
(statearr_21972_22029[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (36))){
var inst_21900 = (state_21948[(12)]);
var inst_21878 = inst_21900;
var state_21948__$1 = (function (){var statearr_21973 = state_21948;
(statearr_21973[(7)] = inst_21878);

return statearr_21973;
})();
var statearr_21974_22030 = state_21948__$1;
(statearr_21974_22030[(2)] = null);

(statearr_21974_22030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (29))){
var inst_21922 = (state_21948[(11)]);
var state_21948__$1 = state_21948;
var statearr_21975_22031 = state_21948__$1;
(statearr_21975_22031[(2)] = inst_21922);

(statearr_21975_22031[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (6))){
var state_21948__$1 = state_21948;
var statearr_21976_22032 = state_21948__$1;
(statearr_21976_22032[(2)] = false);

(statearr_21976_22032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (28))){
var inst_21918 = (state_21948[(2)]);
var inst_21919 = calc_state.call(null);
var inst_21878 = inst_21919;
var state_21948__$1 = (function (){var statearr_21977 = state_21948;
(statearr_21977[(15)] = inst_21918);

(statearr_21977[(7)] = inst_21878);

return statearr_21977;
})();
var statearr_21978_22033 = state_21948__$1;
(statearr_21978_22033[(2)] = null);

(statearr_21978_22033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (25))){
var inst_21944 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
var statearr_21979_22034 = state_21948__$1;
(statearr_21979_22034[(2)] = inst_21944);

(statearr_21979_22034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (34))){
var inst_21942 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
var statearr_21980_22035 = state_21948__$1;
(statearr_21980_22035[(2)] = inst_21942);

(statearr_21980_22035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (17))){
var state_21948__$1 = state_21948;
var statearr_21981_22036 = state_21948__$1;
(statearr_21981_22036[(2)] = false);

(statearr_21981_22036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (3))){
var state_21948__$1 = state_21948;
var statearr_21982_22037 = state_21948__$1;
(statearr_21982_22037[(2)] = false);

(statearr_21982_22037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (12))){
var inst_21946 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21948__$1,inst_21946);
} else {
if((state_val_21949 === (2))){
var inst_21854 = (state_21948[(8)]);
var inst_21859 = inst_21854.cljs$lang$protocol_mask$partition0$;
var inst_21860 = (inst_21859 & (64));
var inst_21861 = inst_21854.cljs$core$ISeq$;
var inst_21862 = (inst_21860) || (inst_21861);
var state_21948__$1 = state_21948;
if(cljs.core.truth_(inst_21862)){
var statearr_21983_22038 = state_21948__$1;
(statearr_21983_22038[(1)] = (5));

} else {
var statearr_21984_22039 = state_21948__$1;
(statearr_21984_22039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (23))){
var inst_21907 = (state_21948[(14)]);
var inst_21913 = (inst_21907 == null);
var state_21948__$1 = state_21948;
if(cljs.core.truth_(inst_21913)){
var statearr_21985_22040 = state_21948__$1;
(statearr_21985_22040[(1)] = (26));

} else {
var statearr_21986_22041 = state_21948__$1;
(statearr_21986_22041[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (35))){
var inst_21933 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
if(cljs.core.truth_(inst_21933)){
var statearr_21987_22042 = state_21948__$1;
(statearr_21987_22042[(1)] = (36));

} else {
var statearr_21988_22043 = state_21948__$1;
(statearr_21988_22043[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (19))){
var inst_21878 = (state_21948[(7)]);
var inst_21897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21878);
var state_21948__$1 = state_21948;
var statearr_21989_22044 = state_21948__$1;
(statearr_21989_22044[(2)] = inst_21897);

(statearr_21989_22044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (11))){
var inst_21878 = (state_21948[(7)]);
var inst_21882 = (inst_21878 == null);
var inst_21883 = cljs.core.not.call(null,inst_21882);
var state_21948__$1 = state_21948;
if(inst_21883){
var statearr_21990_22045 = state_21948__$1;
(statearr_21990_22045[(1)] = (13));

} else {
var statearr_21991_22046 = state_21948__$1;
(statearr_21991_22046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (9))){
var inst_21854 = (state_21948[(8)]);
var state_21948__$1 = state_21948;
var statearr_21992_22047 = state_21948__$1;
(statearr_21992_22047[(2)] = inst_21854);

(statearr_21992_22047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (5))){
var state_21948__$1 = state_21948;
var statearr_21993_22048 = state_21948__$1;
(statearr_21993_22048[(2)] = true);

(statearr_21993_22048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (14))){
var state_21948__$1 = state_21948;
var statearr_21994_22049 = state_21948__$1;
(statearr_21994_22049[(2)] = false);

(statearr_21994_22049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (26))){
var inst_21908 = (state_21948[(9)]);
var inst_21915 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21908);
var state_21948__$1 = state_21948;
var statearr_21995_22050 = state_21948__$1;
(statearr_21995_22050[(2)] = inst_21915);

(statearr_21995_22050[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (16))){
var state_21948__$1 = state_21948;
var statearr_21996_22051 = state_21948__$1;
(statearr_21996_22051[(2)] = true);

(statearr_21996_22051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (38))){
var inst_21938 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
var statearr_21997_22052 = state_21948__$1;
(statearr_21997_22052[(2)] = inst_21938);

(statearr_21997_22052[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (30))){
var inst_21908 = (state_21948[(9)]);
var inst_21902 = (state_21948[(13)]);
var inst_21901 = (state_21948[(10)]);
var inst_21925 = cljs.core.empty_QMARK_.call(null,inst_21901);
var inst_21926 = inst_21902.call(null,inst_21908);
var inst_21927 = cljs.core.not.call(null,inst_21926);
var inst_21928 = (inst_21925) && (inst_21927);
var state_21948__$1 = state_21948;
var statearr_21998_22053 = state_21948__$1;
(statearr_21998_22053[(2)] = inst_21928);

(statearr_21998_22053[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (10))){
var inst_21854 = (state_21948[(8)]);
var inst_21874 = (state_21948[(2)]);
var inst_21875 = cljs.core.get.call(null,inst_21874,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21876 = cljs.core.get.call(null,inst_21874,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21877 = cljs.core.get.call(null,inst_21874,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21878 = inst_21854;
var state_21948__$1 = (function (){var statearr_21999 = state_21948;
(statearr_21999[(16)] = inst_21876);

(statearr_21999[(17)] = inst_21877);

(statearr_21999[(18)] = inst_21875);

(statearr_21999[(7)] = inst_21878);

return statearr_21999;
})();
var statearr_22000_22054 = state_21948__$1;
(statearr_22000_22054[(2)] = null);

(statearr_22000_22054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (18))){
var inst_21892 = (state_21948[(2)]);
var state_21948__$1 = state_21948;
var statearr_22001_22055 = state_21948__$1;
(statearr_22001_22055[(2)] = inst_21892);

(statearr_22001_22055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (37))){
var state_21948__$1 = state_21948;
var statearr_22002_22056 = state_21948__$1;
(statearr_22002_22056[(2)] = null);

(statearr_22002_22056[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21949 === (8))){
var inst_21854 = (state_21948[(8)]);
var inst_21871 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21854);
var state_21948__$1 = state_21948;
var statearr_22003_22057 = state_21948__$1;
(statearr_22003_22057[(2)] = inst_21871);

(statearr_22003_22057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto___22011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18818__auto__,c__20298__auto___22011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18819__auto__ = null;
var cljs$core$async$mix_$_state_machine__18819__auto____0 = (function (){
var statearr_22007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22007[(0)] = cljs$core$async$mix_$_state_machine__18819__auto__);

(statearr_22007[(1)] = (1));

return statearr_22007;
});
var cljs$core$async$mix_$_state_machine__18819__auto____1 = (function (state_21948){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_21948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22008){if((e22008 instanceof Object)){
var ex__18822__auto__ = e22008;
var statearr_22009_22058 = state_21948;
(statearr_22009_22058[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22059 = state_21948;
state_21948 = G__22059;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18819__auto__ = function(state_21948){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18819__auto____1.call(this,state_21948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18819__auto____0;
cljs$core$async$mix_$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18819__auto____1;
return cljs$core$async$mix_$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___22011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20300__auto__ = (function (){var statearr_22010 = f__20299__auto__.call(null);
(statearr_22010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___22011);

return statearr_22010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___22011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22060 = [];
var len__17863__auto___22063 = arguments.length;
var i__17864__auto___22064 = (0);
while(true){
if((i__17864__auto___22064 < len__17863__auto___22063)){
args22060.push((arguments[i__17864__auto___22064]));

var G__22065 = (i__17864__auto___22064 + (1));
i__17864__auto___22064 = G__22065;
continue;
} else {
}
break;
}

var G__22062 = args22060.length;
switch (G__22062) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22060.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args22068 = [];
var len__17863__auto___22193 = arguments.length;
var i__17864__auto___22194 = (0);
while(true){
if((i__17864__auto___22194 < len__17863__auto___22193)){
args22068.push((arguments[i__17864__auto___22194]));

var G__22195 = (i__17864__auto___22194 + (1));
i__17864__auto___22194 = G__22195;
continue;
} else {
}
break;
}

var G__22070 = args22068.length;
switch (G__22070) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22068.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16805__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16805__auto__,mults){
return (function (p1__22067_SHARP_){
if(cljs.core.truth_(p1__22067_SHARP_.call(null,topic))){
return p1__22067_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22067_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22071 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22072){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22072 = meta22072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22073,meta22072__$1){
var self__ = this;
var _22073__$1 = this;
return (new cljs.core.async.t_cljs$core$async22071(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22072__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22073){
var self__ = this;
var _22073__$1 = this;
return self__.meta22072;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22071.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22071.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22071.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22071.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22071.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22071.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22071.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22071.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22072","meta22072",-1523293610,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22071";

cljs.core.async.t_cljs$core$async22071.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22071");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22071 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22071(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22072){
return (new cljs.core.async.t_cljs$core$async22071(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22072));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22071(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20298__auto___22197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___22197,mults,ensure_mult,p){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___22197,mults,ensure_mult,p){
return (function (state_22145){
var state_val_22146 = (state_22145[(1)]);
if((state_val_22146 === (7))){
var inst_22141 = (state_22145[(2)]);
var state_22145__$1 = state_22145;
var statearr_22147_22198 = state_22145__$1;
(statearr_22147_22198[(2)] = inst_22141);

(statearr_22147_22198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (20))){
var state_22145__$1 = state_22145;
var statearr_22148_22199 = state_22145__$1;
(statearr_22148_22199[(2)] = null);

(statearr_22148_22199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (1))){
var state_22145__$1 = state_22145;
var statearr_22149_22200 = state_22145__$1;
(statearr_22149_22200[(2)] = null);

(statearr_22149_22200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (24))){
var inst_22124 = (state_22145[(7)]);
var inst_22133 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22124);
var state_22145__$1 = state_22145;
var statearr_22150_22201 = state_22145__$1;
(statearr_22150_22201[(2)] = inst_22133);

(statearr_22150_22201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (4))){
var inst_22076 = (state_22145[(8)]);
var inst_22076__$1 = (state_22145[(2)]);
var inst_22077 = (inst_22076__$1 == null);
var state_22145__$1 = (function (){var statearr_22151 = state_22145;
(statearr_22151[(8)] = inst_22076__$1);

return statearr_22151;
})();
if(cljs.core.truth_(inst_22077)){
var statearr_22152_22202 = state_22145__$1;
(statearr_22152_22202[(1)] = (5));

} else {
var statearr_22153_22203 = state_22145__$1;
(statearr_22153_22203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (15))){
var inst_22118 = (state_22145[(2)]);
var state_22145__$1 = state_22145;
var statearr_22154_22204 = state_22145__$1;
(statearr_22154_22204[(2)] = inst_22118);

(statearr_22154_22204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (21))){
var inst_22138 = (state_22145[(2)]);
var state_22145__$1 = (function (){var statearr_22155 = state_22145;
(statearr_22155[(9)] = inst_22138);

return statearr_22155;
})();
var statearr_22156_22205 = state_22145__$1;
(statearr_22156_22205[(2)] = null);

(statearr_22156_22205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (13))){
var inst_22100 = (state_22145[(10)]);
var inst_22102 = cljs.core.chunked_seq_QMARK_.call(null,inst_22100);
var state_22145__$1 = state_22145;
if(inst_22102){
var statearr_22157_22206 = state_22145__$1;
(statearr_22157_22206[(1)] = (16));

} else {
var statearr_22158_22207 = state_22145__$1;
(statearr_22158_22207[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (22))){
var inst_22130 = (state_22145[(2)]);
var state_22145__$1 = state_22145;
if(cljs.core.truth_(inst_22130)){
var statearr_22159_22208 = state_22145__$1;
(statearr_22159_22208[(1)] = (23));

} else {
var statearr_22160_22209 = state_22145__$1;
(statearr_22160_22209[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (6))){
var inst_22124 = (state_22145[(7)]);
var inst_22076 = (state_22145[(8)]);
var inst_22126 = (state_22145[(11)]);
var inst_22124__$1 = topic_fn.call(null,inst_22076);
var inst_22125 = cljs.core.deref.call(null,mults);
var inst_22126__$1 = cljs.core.get.call(null,inst_22125,inst_22124__$1);
var state_22145__$1 = (function (){var statearr_22161 = state_22145;
(statearr_22161[(7)] = inst_22124__$1);

(statearr_22161[(11)] = inst_22126__$1);

return statearr_22161;
})();
if(cljs.core.truth_(inst_22126__$1)){
var statearr_22162_22210 = state_22145__$1;
(statearr_22162_22210[(1)] = (19));

} else {
var statearr_22163_22211 = state_22145__$1;
(statearr_22163_22211[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (25))){
var inst_22135 = (state_22145[(2)]);
var state_22145__$1 = state_22145;
var statearr_22164_22212 = state_22145__$1;
(statearr_22164_22212[(2)] = inst_22135);

(statearr_22164_22212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (17))){
var inst_22100 = (state_22145[(10)]);
var inst_22109 = cljs.core.first.call(null,inst_22100);
var inst_22110 = cljs.core.async.muxch_STAR_.call(null,inst_22109);
var inst_22111 = cljs.core.async.close_BANG_.call(null,inst_22110);
var inst_22112 = cljs.core.next.call(null,inst_22100);
var inst_22086 = inst_22112;
var inst_22087 = null;
var inst_22088 = (0);
var inst_22089 = (0);
var state_22145__$1 = (function (){var statearr_22165 = state_22145;
(statearr_22165[(12)] = inst_22089);

(statearr_22165[(13)] = inst_22111);

(statearr_22165[(14)] = inst_22086);

(statearr_22165[(15)] = inst_22088);

(statearr_22165[(16)] = inst_22087);

return statearr_22165;
})();
var statearr_22166_22213 = state_22145__$1;
(statearr_22166_22213[(2)] = null);

(statearr_22166_22213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (3))){
var inst_22143 = (state_22145[(2)]);
var state_22145__$1 = state_22145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22145__$1,inst_22143);
} else {
if((state_val_22146 === (12))){
var inst_22120 = (state_22145[(2)]);
var state_22145__$1 = state_22145;
var statearr_22167_22214 = state_22145__$1;
(statearr_22167_22214[(2)] = inst_22120);

(statearr_22167_22214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (2))){
var state_22145__$1 = state_22145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22145__$1,(4),ch);
} else {
if((state_val_22146 === (23))){
var state_22145__$1 = state_22145;
var statearr_22168_22215 = state_22145__$1;
(statearr_22168_22215[(2)] = null);

(statearr_22168_22215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (19))){
var inst_22076 = (state_22145[(8)]);
var inst_22126 = (state_22145[(11)]);
var inst_22128 = cljs.core.async.muxch_STAR_.call(null,inst_22126);
var state_22145__$1 = state_22145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22145__$1,(22),inst_22128,inst_22076);
} else {
if((state_val_22146 === (11))){
var inst_22086 = (state_22145[(14)]);
var inst_22100 = (state_22145[(10)]);
var inst_22100__$1 = cljs.core.seq.call(null,inst_22086);
var state_22145__$1 = (function (){var statearr_22169 = state_22145;
(statearr_22169[(10)] = inst_22100__$1);

return statearr_22169;
})();
if(inst_22100__$1){
var statearr_22170_22216 = state_22145__$1;
(statearr_22170_22216[(1)] = (13));

} else {
var statearr_22171_22217 = state_22145__$1;
(statearr_22171_22217[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (9))){
var inst_22122 = (state_22145[(2)]);
var state_22145__$1 = state_22145;
var statearr_22172_22218 = state_22145__$1;
(statearr_22172_22218[(2)] = inst_22122);

(statearr_22172_22218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (5))){
var inst_22083 = cljs.core.deref.call(null,mults);
var inst_22084 = cljs.core.vals.call(null,inst_22083);
var inst_22085 = cljs.core.seq.call(null,inst_22084);
var inst_22086 = inst_22085;
var inst_22087 = null;
var inst_22088 = (0);
var inst_22089 = (0);
var state_22145__$1 = (function (){var statearr_22173 = state_22145;
(statearr_22173[(12)] = inst_22089);

(statearr_22173[(14)] = inst_22086);

(statearr_22173[(15)] = inst_22088);

(statearr_22173[(16)] = inst_22087);

return statearr_22173;
})();
var statearr_22174_22219 = state_22145__$1;
(statearr_22174_22219[(2)] = null);

(statearr_22174_22219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (14))){
var state_22145__$1 = state_22145;
var statearr_22178_22220 = state_22145__$1;
(statearr_22178_22220[(2)] = null);

(statearr_22178_22220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (16))){
var inst_22100 = (state_22145[(10)]);
var inst_22104 = cljs.core.chunk_first.call(null,inst_22100);
var inst_22105 = cljs.core.chunk_rest.call(null,inst_22100);
var inst_22106 = cljs.core.count.call(null,inst_22104);
var inst_22086 = inst_22105;
var inst_22087 = inst_22104;
var inst_22088 = inst_22106;
var inst_22089 = (0);
var state_22145__$1 = (function (){var statearr_22179 = state_22145;
(statearr_22179[(12)] = inst_22089);

(statearr_22179[(14)] = inst_22086);

(statearr_22179[(15)] = inst_22088);

(statearr_22179[(16)] = inst_22087);

return statearr_22179;
})();
var statearr_22180_22221 = state_22145__$1;
(statearr_22180_22221[(2)] = null);

(statearr_22180_22221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (10))){
var inst_22089 = (state_22145[(12)]);
var inst_22086 = (state_22145[(14)]);
var inst_22088 = (state_22145[(15)]);
var inst_22087 = (state_22145[(16)]);
var inst_22094 = cljs.core._nth.call(null,inst_22087,inst_22089);
var inst_22095 = cljs.core.async.muxch_STAR_.call(null,inst_22094);
var inst_22096 = cljs.core.async.close_BANG_.call(null,inst_22095);
var inst_22097 = (inst_22089 + (1));
var tmp22175 = inst_22086;
var tmp22176 = inst_22088;
var tmp22177 = inst_22087;
var inst_22086__$1 = tmp22175;
var inst_22087__$1 = tmp22177;
var inst_22088__$1 = tmp22176;
var inst_22089__$1 = inst_22097;
var state_22145__$1 = (function (){var statearr_22181 = state_22145;
(statearr_22181[(12)] = inst_22089__$1);

(statearr_22181[(14)] = inst_22086__$1);

(statearr_22181[(17)] = inst_22096);

(statearr_22181[(15)] = inst_22088__$1);

(statearr_22181[(16)] = inst_22087__$1);

return statearr_22181;
})();
var statearr_22182_22222 = state_22145__$1;
(statearr_22182_22222[(2)] = null);

(statearr_22182_22222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (18))){
var inst_22115 = (state_22145[(2)]);
var state_22145__$1 = state_22145;
var statearr_22183_22223 = state_22145__$1;
(statearr_22183_22223[(2)] = inst_22115);

(statearr_22183_22223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22146 === (8))){
var inst_22089 = (state_22145[(12)]);
var inst_22088 = (state_22145[(15)]);
var inst_22091 = (inst_22089 < inst_22088);
var inst_22092 = inst_22091;
var state_22145__$1 = state_22145;
if(cljs.core.truth_(inst_22092)){
var statearr_22184_22224 = state_22145__$1;
(statearr_22184_22224[(1)] = (10));

} else {
var statearr_22185_22225 = state_22145__$1;
(statearr_22185_22225[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto___22197,mults,ensure_mult,p))
;
return ((function (switch__18818__auto__,c__20298__auto___22197,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_22189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22189[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_22189[(1)] = (1));

return statearr_22189;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_22145){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22190){if((e22190 instanceof Object)){
var ex__18822__auto__ = e22190;
var statearr_22191_22226 = state_22145;
(statearr_22191_22226[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22227 = state_22145;
state_22145 = G__22227;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_22145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_22145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___22197,mults,ensure_mult,p))
})();
var state__20300__auto__ = (function (){var statearr_22192 = f__20299__auto__.call(null);
(statearr_22192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___22197);

return statearr_22192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___22197,mults,ensure_mult,p))
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
var args22228 = [];
var len__17863__auto___22231 = arguments.length;
var i__17864__auto___22232 = (0);
while(true){
if((i__17864__auto___22232 < len__17863__auto___22231)){
args22228.push((arguments[i__17864__auto___22232]));

var G__22233 = (i__17864__auto___22232 + (1));
i__17864__auto___22232 = G__22233;
continue;
} else {
}
break;
}

var G__22230 = args22228.length;
switch (G__22230) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22228.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22235 = [];
var len__17863__auto___22238 = arguments.length;
var i__17864__auto___22239 = (0);
while(true){
if((i__17864__auto___22239 < len__17863__auto___22238)){
args22235.push((arguments[i__17864__auto___22239]));

var G__22240 = (i__17864__auto___22239 + (1));
i__17864__auto___22239 = G__22240;
continue;
} else {
}
break;
}

var G__22237 = args22235.length;
switch (G__22237) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22235.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args22242 = [];
var len__17863__auto___22313 = arguments.length;
var i__17864__auto___22314 = (0);
while(true){
if((i__17864__auto___22314 < len__17863__auto___22313)){
args22242.push((arguments[i__17864__auto___22314]));

var G__22315 = (i__17864__auto___22314 + (1));
i__17864__auto___22314 = G__22315;
continue;
} else {
}
break;
}

var G__22244 = args22242.length;
switch (G__22244) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22242.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20298__auto___22317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___22317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___22317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22283){
var state_val_22284 = (state_22283[(1)]);
if((state_val_22284 === (7))){
var state_22283__$1 = state_22283;
var statearr_22285_22318 = state_22283__$1;
(statearr_22285_22318[(2)] = null);

(statearr_22285_22318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (1))){
var state_22283__$1 = state_22283;
var statearr_22286_22319 = state_22283__$1;
(statearr_22286_22319[(2)] = null);

(statearr_22286_22319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (4))){
var inst_22247 = (state_22283[(7)]);
var inst_22249 = (inst_22247 < cnt);
var state_22283__$1 = state_22283;
if(cljs.core.truth_(inst_22249)){
var statearr_22287_22320 = state_22283__$1;
(statearr_22287_22320[(1)] = (6));

} else {
var statearr_22288_22321 = state_22283__$1;
(statearr_22288_22321[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (15))){
var inst_22279 = (state_22283[(2)]);
var state_22283__$1 = state_22283;
var statearr_22289_22322 = state_22283__$1;
(statearr_22289_22322[(2)] = inst_22279);

(statearr_22289_22322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (13))){
var inst_22272 = cljs.core.async.close_BANG_.call(null,out);
var state_22283__$1 = state_22283;
var statearr_22290_22323 = state_22283__$1;
(statearr_22290_22323[(2)] = inst_22272);

(statearr_22290_22323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (6))){
var state_22283__$1 = state_22283;
var statearr_22291_22324 = state_22283__$1;
(statearr_22291_22324[(2)] = null);

(statearr_22291_22324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (3))){
var inst_22281 = (state_22283[(2)]);
var state_22283__$1 = state_22283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22283__$1,inst_22281);
} else {
if((state_val_22284 === (12))){
var inst_22269 = (state_22283[(8)]);
var inst_22269__$1 = (state_22283[(2)]);
var inst_22270 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22269__$1);
var state_22283__$1 = (function (){var statearr_22292 = state_22283;
(statearr_22292[(8)] = inst_22269__$1);

return statearr_22292;
})();
if(cljs.core.truth_(inst_22270)){
var statearr_22293_22325 = state_22283__$1;
(statearr_22293_22325[(1)] = (13));

} else {
var statearr_22294_22326 = state_22283__$1;
(statearr_22294_22326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (2))){
var inst_22246 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22247 = (0);
var state_22283__$1 = (function (){var statearr_22295 = state_22283;
(statearr_22295[(7)] = inst_22247);

(statearr_22295[(9)] = inst_22246);

return statearr_22295;
})();
var statearr_22296_22327 = state_22283__$1;
(statearr_22296_22327[(2)] = null);

(statearr_22296_22327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (11))){
var inst_22247 = (state_22283[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22283,(10),Object,null,(9));
var inst_22256 = chs__$1.call(null,inst_22247);
var inst_22257 = done.call(null,inst_22247);
var inst_22258 = cljs.core.async.take_BANG_.call(null,inst_22256,inst_22257);
var state_22283__$1 = state_22283;
var statearr_22297_22328 = state_22283__$1;
(statearr_22297_22328[(2)] = inst_22258);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22283__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (9))){
var inst_22247 = (state_22283[(7)]);
var inst_22260 = (state_22283[(2)]);
var inst_22261 = (inst_22247 + (1));
var inst_22247__$1 = inst_22261;
var state_22283__$1 = (function (){var statearr_22298 = state_22283;
(statearr_22298[(7)] = inst_22247__$1);

(statearr_22298[(10)] = inst_22260);

return statearr_22298;
})();
var statearr_22299_22329 = state_22283__$1;
(statearr_22299_22329[(2)] = null);

(statearr_22299_22329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (5))){
var inst_22267 = (state_22283[(2)]);
var state_22283__$1 = (function (){var statearr_22300 = state_22283;
(statearr_22300[(11)] = inst_22267);

return statearr_22300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22283__$1,(12),dchan);
} else {
if((state_val_22284 === (14))){
var inst_22269 = (state_22283[(8)]);
var inst_22274 = cljs.core.apply.call(null,f,inst_22269);
var state_22283__$1 = state_22283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22283__$1,(16),out,inst_22274);
} else {
if((state_val_22284 === (16))){
var inst_22276 = (state_22283[(2)]);
var state_22283__$1 = (function (){var statearr_22301 = state_22283;
(statearr_22301[(12)] = inst_22276);

return statearr_22301;
})();
var statearr_22302_22330 = state_22283__$1;
(statearr_22302_22330[(2)] = null);

(statearr_22302_22330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (10))){
var inst_22251 = (state_22283[(2)]);
var inst_22252 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22283__$1 = (function (){var statearr_22303 = state_22283;
(statearr_22303[(13)] = inst_22251);

return statearr_22303;
})();
var statearr_22304_22331 = state_22283__$1;
(statearr_22304_22331[(2)] = inst_22252);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22283__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (8))){
var inst_22265 = (state_22283[(2)]);
var state_22283__$1 = state_22283;
var statearr_22305_22332 = state_22283__$1;
(statearr_22305_22332[(2)] = inst_22265);

(statearr_22305_22332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto___22317,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18818__auto__,c__20298__auto___22317,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_22309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22309[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_22309[(1)] = (1));

return statearr_22309;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_22283){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22310){if((e22310 instanceof Object)){
var ex__18822__auto__ = e22310;
var statearr_22311_22333 = state_22283;
(statearr_22311_22333[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22334 = state_22283;
state_22283 = G__22334;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_22283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_22283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___22317,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20300__auto__ = (function (){var statearr_22312 = f__20299__auto__.call(null);
(statearr_22312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___22317);

return statearr_22312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___22317,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22336 = [];
var len__17863__auto___22392 = arguments.length;
var i__17864__auto___22393 = (0);
while(true){
if((i__17864__auto___22393 < len__17863__auto___22392)){
args22336.push((arguments[i__17864__auto___22393]));

var G__22394 = (i__17864__auto___22393 + (1));
i__17864__auto___22393 = G__22394;
continue;
} else {
}
break;
}

var G__22338 = args22336.length;
switch (G__22338) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22336.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20298__auto___22396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___22396,out){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___22396,out){
return (function (state_22368){
var state_val_22369 = (state_22368[(1)]);
if((state_val_22369 === (7))){
var inst_22347 = (state_22368[(7)]);
var inst_22348 = (state_22368[(8)]);
var inst_22347__$1 = (state_22368[(2)]);
var inst_22348__$1 = cljs.core.nth.call(null,inst_22347__$1,(0),null);
var inst_22349 = cljs.core.nth.call(null,inst_22347__$1,(1),null);
var inst_22350 = (inst_22348__$1 == null);
var state_22368__$1 = (function (){var statearr_22370 = state_22368;
(statearr_22370[(7)] = inst_22347__$1);

(statearr_22370[(8)] = inst_22348__$1);

(statearr_22370[(9)] = inst_22349);

return statearr_22370;
})();
if(cljs.core.truth_(inst_22350)){
var statearr_22371_22397 = state_22368__$1;
(statearr_22371_22397[(1)] = (8));

} else {
var statearr_22372_22398 = state_22368__$1;
(statearr_22372_22398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (1))){
var inst_22339 = cljs.core.vec.call(null,chs);
var inst_22340 = inst_22339;
var state_22368__$1 = (function (){var statearr_22373 = state_22368;
(statearr_22373[(10)] = inst_22340);

return statearr_22373;
})();
var statearr_22374_22399 = state_22368__$1;
(statearr_22374_22399[(2)] = null);

(statearr_22374_22399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (4))){
var inst_22340 = (state_22368[(10)]);
var state_22368__$1 = state_22368;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22368__$1,(7),inst_22340);
} else {
if((state_val_22369 === (6))){
var inst_22364 = (state_22368[(2)]);
var state_22368__$1 = state_22368;
var statearr_22375_22400 = state_22368__$1;
(statearr_22375_22400[(2)] = inst_22364);

(statearr_22375_22400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (3))){
var inst_22366 = (state_22368[(2)]);
var state_22368__$1 = state_22368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22368__$1,inst_22366);
} else {
if((state_val_22369 === (2))){
var inst_22340 = (state_22368[(10)]);
var inst_22342 = cljs.core.count.call(null,inst_22340);
var inst_22343 = (inst_22342 > (0));
var state_22368__$1 = state_22368;
if(cljs.core.truth_(inst_22343)){
var statearr_22377_22401 = state_22368__$1;
(statearr_22377_22401[(1)] = (4));

} else {
var statearr_22378_22402 = state_22368__$1;
(statearr_22378_22402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (11))){
var inst_22340 = (state_22368[(10)]);
var inst_22357 = (state_22368[(2)]);
var tmp22376 = inst_22340;
var inst_22340__$1 = tmp22376;
var state_22368__$1 = (function (){var statearr_22379 = state_22368;
(statearr_22379[(11)] = inst_22357);

(statearr_22379[(10)] = inst_22340__$1);

return statearr_22379;
})();
var statearr_22380_22403 = state_22368__$1;
(statearr_22380_22403[(2)] = null);

(statearr_22380_22403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (9))){
var inst_22348 = (state_22368[(8)]);
var state_22368__$1 = state_22368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22368__$1,(11),out,inst_22348);
} else {
if((state_val_22369 === (5))){
var inst_22362 = cljs.core.async.close_BANG_.call(null,out);
var state_22368__$1 = state_22368;
var statearr_22381_22404 = state_22368__$1;
(statearr_22381_22404[(2)] = inst_22362);

(statearr_22381_22404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (10))){
var inst_22360 = (state_22368[(2)]);
var state_22368__$1 = state_22368;
var statearr_22382_22405 = state_22368__$1;
(statearr_22382_22405[(2)] = inst_22360);

(statearr_22382_22405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (8))){
var inst_22347 = (state_22368[(7)]);
var inst_22348 = (state_22368[(8)]);
var inst_22340 = (state_22368[(10)]);
var inst_22349 = (state_22368[(9)]);
var inst_22352 = (function (){var cs = inst_22340;
var vec__22345 = inst_22347;
var v = inst_22348;
var c = inst_22349;
return ((function (cs,vec__22345,v,c,inst_22347,inst_22348,inst_22340,inst_22349,state_val_22369,c__20298__auto___22396,out){
return (function (p1__22335_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22335_SHARP_);
});
;})(cs,vec__22345,v,c,inst_22347,inst_22348,inst_22340,inst_22349,state_val_22369,c__20298__auto___22396,out))
})();
var inst_22353 = cljs.core.filterv.call(null,inst_22352,inst_22340);
var inst_22340__$1 = inst_22353;
var state_22368__$1 = (function (){var statearr_22383 = state_22368;
(statearr_22383[(10)] = inst_22340__$1);

return statearr_22383;
})();
var statearr_22384_22406 = state_22368__$1;
(statearr_22384_22406[(2)] = null);

(statearr_22384_22406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto___22396,out))
;
return ((function (switch__18818__auto__,c__20298__auto___22396,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_22388 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22388[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_22388[(1)] = (1));

return statearr_22388;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_22368){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22389){if((e22389 instanceof Object)){
var ex__18822__auto__ = e22389;
var statearr_22390_22407 = state_22368;
(statearr_22390_22407[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22408 = state_22368;
state_22368 = G__22408;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_22368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_22368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___22396,out))
})();
var state__20300__auto__ = (function (){var statearr_22391 = f__20299__auto__.call(null);
(statearr_22391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___22396);

return statearr_22391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___22396,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22409 = [];
var len__17863__auto___22458 = arguments.length;
var i__17864__auto___22459 = (0);
while(true){
if((i__17864__auto___22459 < len__17863__auto___22458)){
args22409.push((arguments[i__17864__auto___22459]));

var G__22460 = (i__17864__auto___22459 + (1));
i__17864__auto___22459 = G__22460;
continue;
} else {
}
break;
}

var G__22411 = args22409.length;
switch (G__22411) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22409.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20298__auto___22462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___22462,out){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___22462,out){
return (function (state_22435){
var state_val_22436 = (state_22435[(1)]);
if((state_val_22436 === (7))){
var inst_22417 = (state_22435[(7)]);
var inst_22417__$1 = (state_22435[(2)]);
var inst_22418 = (inst_22417__$1 == null);
var inst_22419 = cljs.core.not.call(null,inst_22418);
var state_22435__$1 = (function (){var statearr_22437 = state_22435;
(statearr_22437[(7)] = inst_22417__$1);

return statearr_22437;
})();
if(inst_22419){
var statearr_22438_22463 = state_22435__$1;
(statearr_22438_22463[(1)] = (8));

} else {
var statearr_22439_22464 = state_22435__$1;
(statearr_22439_22464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22436 === (1))){
var inst_22412 = (0);
var state_22435__$1 = (function (){var statearr_22440 = state_22435;
(statearr_22440[(8)] = inst_22412);

return statearr_22440;
})();
var statearr_22441_22465 = state_22435__$1;
(statearr_22441_22465[(2)] = null);

(statearr_22441_22465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22436 === (4))){
var state_22435__$1 = state_22435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22435__$1,(7),ch);
} else {
if((state_val_22436 === (6))){
var inst_22430 = (state_22435[(2)]);
var state_22435__$1 = state_22435;
var statearr_22442_22466 = state_22435__$1;
(statearr_22442_22466[(2)] = inst_22430);

(statearr_22442_22466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22436 === (3))){
var inst_22432 = (state_22435[(2)]);
var inst_22433 = cljs.core.async.close_BANG_.call(null,out);
var state_22435__$1 = (function (){var statearr_22443 = state_22435;
(statearr_22443[(9)] = inst_22432);

return statearr_22443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22435__$1,inst_22433);
} else {
if((state_val_22436 === (2))){
var inst_22412 = (state_22435[(8)]);
var inst_22414 = (inst_22412 < n);
var state_22435__$1 = state_22435;
if(cljs.core.truth_(inst_22414)){
var statearr_22444_22467 = state_22435__$1;
(statearr_22444_22467[(1)] = (4));

} else {
var statearr_22445_22468 = state_22435__$1;
(statearr_22445_22468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22436 === (11))){
var inst_22412 = (state_22435[(8)]);
var inst_22422 = (state_22435[(2)]);
var inst_22423 = (inst_22412 + (1));
var inst_22412__$1 = inst_22423;
var state_22435__$1 = (function (){var statearr_22446 = state_22435;
(statearr_22446[(8)] = inst_22412__$1);

(statearr_22446[(10)] = inst_22422);

return statearr_22446;
})();
var statearr_22447_22469 = state_22435__$1;
(statearr_22447_22469[(2)] = null);

(statearr_22447_22469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22436 === (9))){
var state_22435__$1 = state_22435;
var statearr_22448_22470 = state_22435__$1;
(statearr_22448_22470[(2)] = null);

(statearr_22448_22470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22436 === (5))){
var state_22435__$1 = state_22435;
var statearr_22449_22471 = state_22435__$1;
(statearr_22449_22471[(2)] = null);

(statearr_22449_22471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22436 === (10))){
var inst_22427 = (state_22435[(2)]);
var state_22435__$1 = state_22435;
var statearr_22450_22472 = state_22435__$1;
(statearr_22450_22472[(2)] = inst_22427);

(statearr_22450_22472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22436 === (8))){
var inst_22417 = (state_22435[(7)]);
var state_22435__$1 = state_22435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22435__$1,(11),out,inst_22417);
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
});})(c__20298__auto___22462,out))
;
return ((function (switch__18818__auto__,c__20298__auto___22462,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_22454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22454[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_22454[(1)] = (1));

return statearr_22454;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_22435){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22455){if((e22455 instanceof Object)){
var ex__18822__auto__ = e22455;
var statearr_22456_22473 = state_22435;
(statearr_22456_22473[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22474 = state_22435;
state_22435 = G__22474;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_22435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_22435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___22462,out))
})();
var state__20300__auto__ = (function (){var statearr_22457 = f__20299__auto__.call(null);
(statearr_22457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___22462);

return statearr_22457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___22462,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22482 = (function (map_LT_,f,ch,meta22483){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22483 = meta22483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22484,meta22483__$1){
var self__ = this;
var _22484__$1 = this;
return (new cljs.core.async.t_cljs$core$async22482(self__.map_LT_,self__.f,self__.ch,meta22483__$1));
});

cljs.core.async.t_cljs$core$async22482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22484){
var self__ = this;
var _22484__$1 = this;
return self__.meta22483;
});

cljs.core.async.t_cljs$core$async22482.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22482.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22482.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22485 = (function (map_LT_,f,ch,meta22483,_,fn1,meta22486){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22483 = meta22483;
this._ = _;
this.fn1 = fn1;
this.meta22486 = meta22486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22487,meta22486__$1){
var self__ = this;
var _22487__$1 = this;
return (new cljs.core.async.t_cljs$core$async22485(self__.map_LT_,self__.f,self__.ch,self__.meta22483,self__._,self__.fn1,meta22486__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22487){
var self__ = this;
var _22487__$1 = this;
return self__.meta22486;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22485.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22485.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22485.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22485.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22475_SHARP_){
return f1.call(null,(((p1__22475_SHARP_ == null))?null:self__.f.call(null,p1__22475_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22485.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22483","meta22483",17889430,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22482","cljs.core.async/t_cljs$core$async22482",899145748,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22486","meta22486",-1452096693,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22485";

cljs.core.async.t_cljs$core$async22485.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22485");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22485 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22485(map_LT___$1,f__$1,ch__$1,meta22483__$1,___$2,fn1__$1,meta22486){
return (new cljs.core.async.t_cljs$core$async22485(map_LT___$1,f__$1,ch__$1,meta22483__$1,___$2,fn1__$1,meta22486));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22485(self__.map_LT_,self__.f,self__.ch,self__.meta22483,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16793__auto__ = ret;
if(cljs.core.truth_(and__16793__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16793__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22482.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22483","meta22483",17889430,null)], null);
});

cljs.core.async.t_cljs$core$async22482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22482";

cljs.core.async.t_cljs$core$async22482.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22482");
});

cljs.core.async.__GT_t_cljs$core$async22482 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22482(map_LT___$1,f__$1,ch__$1,meta22483){
return (new cljs.core.async.t_cljs$core$async22482(map_LT___$1,f__$1,ch__$1,meta22483));
});

}

return (new cljs.core.async.t_cljs$core$async22482(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22491 = (function (map_GT_,f,ch,meta22492){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22492 = meta22492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22493,meta22492__$1){
var self__ = this;
var _22493__$1 = this;
return (new cljs.core.async.t_cljs$core$async22491(self__.map_GT_,self__.f,self__.ch,meta22492__$1));
});

cljs.core.async.t_cljs$core$async22491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22493){
var self__ = this;
var _22493__$1 = this;
return self__.meta22492;
});

cljs.core.async.t_cljs$core$async22491.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22491.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22491.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22492","meta22492",-2090122307,null)], null);
});

cljs.core.async.t_cljs$core$async22491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22491";

cljs.core.async.t_cljs$core$async22491.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22491");
});

cljs.core.async.__GT_t_cljs$core$async22491 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22491(map_GT___$1,f__$1,ch__$1,meta22492){
return (new cljs.core.async.t_cljs$core$async22491(map_GT___$1,f__$1,ch__$1,meta22492));
});

}

return (new cljs.core.async.t_cljs$core$async22491(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22497 = (function (filter_GT_,p,ch,meta22498){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22498 = meta22498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22499,meta22498__$1){
var self__ = this;
var _22499__$1 = this;
return (new cljs.core.async.t_cljs$core$async22497(self__.filter_GT_,self__.p,self__.ch,meta22498__$1));
});

cljs.core.async.t_cljs$core$async22497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22499){
var self__ = this;
var _22499__$1 = this;
return self__.meta22498;
});

cljs.core.async.t_cljs$core$async22497.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22497.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22497.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22497.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22498","meta22498",858627498,null)], null);
});

cljs.core.async.t_cljs$core$async22497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22497";

cljs.core.async.t_cljs$core$async22497.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22497");
});

cljs.core.async.__GT_t_cljs$core$async22497 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22497(filter_GT___$1,p__$1,ch__$1,meta22498){
return (new cljs.core.async.t_cljs$core$async22497(filter_GT___$1,p__$1,ch__$1,meta22498));
});

}

return (new cljs.core.async.t_cljs$core$async22497(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22500 = [];
var len__17863__auto___22544 = arguments.length;
var i__17864__auto___22545 = (0);
while(true){
if((i__17864__auto___22545 < len__17863__auto___22544)){
args22500.push((arguments[i__17864__auto___22545]));

var G__22546 = (i__17864__auto___22545 + (1));
i__17864__auto___22545 = G__22546;
continue;
} else {
}
break;
}

var G__22502 = args22500.length;
switch (G__22502) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22500.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20298__auto___22548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___22548,out){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___22548,out){
return (function (state_22523){
var state_val_22524 = (state_22523[(1)]);
if((state_val_22524 === (7))){
var inst_22519 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
var statearr_22525_22549 = state_22523__$1;
(statearr_22525_22549[(2)] = inst_22519);

(statearr_22525_22549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (1))){
var state_22523__$1 = state_22523;
var statearr_22526_22550 = state_22523__$1;
(statearr_22526_22550[(2)] = null);

(statearr_22526_22550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (4))){
var inst_22505 = (state_22523[(7)]);
var inst_22505__$1 = (state_22523[(2)]);
var inst_22506 = (inst_22505__$1 == null);
var state_22523__$1 = (function (){var statearr_22527 = state_22523;
(statearr_22527[(7)] = inst_22505__$1);

return statearr_22527;
})();
if(cljs.core.truth_(inst_22506)){
var statearr_22528_22551 = state_22523__$1;
(statearr_22528_22551[(1)] = (5));

} else {
var statearr_22529_22552 = state_22523__$1;
(statearr_22529_22552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (6))){
var inst_22505 = (state_22523[(7)]);
var inst_22510 = p.call(null,inst_22505);
var state_22523__$1 = state_22523;
if(cljs.core.truth_(inst_22510)){
var statearr_22530_22553 = state_22523__$1;
(statearr_22530_22553[(1)] = (8));

} else {
var statearr_22531_22554 = state_22523__$1;
(statearr_22531_22554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (3))){
var inst_22521 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22523__$1,inst_22521);
} else {
if((state_val_22524 === (2))){
var state_22523__$1 = state_22523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22523__$1,(4),ch);
} else {
if((state_val_22524 === (11))){
var inst_22513 = (state_22523[(2)]);
var state_22523__$1 = state_22523;
var statearr_22532_22555 = state_22523__$1;
(statearr_22532_22555[(2)] = inst_22513);

(statearr_22532_22555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (9))){
var state_22523__$1 = state_22523;
var statearr_22533_22556 = state_22523__$1;
(statearr_22533_22556[(2)] = null);

(statearr_22533_22556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (5))){
var inst_22508 = cljs.core.async.close_BANG_.call(null,out);
var state_22523__$1 = state_22523;
var statearr_22534_22557 = state_22523__$1;
(statearr_22534_22557[(2)] = inst_22508);

(statearr_22534_22557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (10))){
var inst_22516 = (state_22523[(2)]);
var state_22523__$1 = (function (){var statearr_22535 = state_22523;
(statearr_22535[(8)] = inst_22516);

return statearr_22535;
})();
var statearr_22536_22558 = state_22523__$1;
(statearr_22536_22558[(2)] = null);

(statearr_22536_22558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22524 === (8))){
var inst_22505 = (state_22523[(7)]);
var state_22523__$1 = state_22523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22523__$1,(11),out,inst_22505);
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
});})(c__20298__auto___22548,out))
;
return ((function (switch__18818__auto__,c__20298__auto___22548,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_22540 = [null,null,null,null,null,null,null,null,null];
(statearr_22540[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_22540[(1)] = (1));

return statearr_22540;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_22523){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22541){if((e22541 instanceof Object)){
var ex__18822__auto__ = e22541;
var statearr_22542_22559 = state_22523;
(statearr_22542_22559[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22560 = state_22523;
state_22523 = G__22560;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_22523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_22523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___22548,out))
})();
var state__20300__auto__ = (function (){var statearr_22543 = f__20299__auto__.call(null);
(statearr_22543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___22548);

return statearr_22543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___22548,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22561 = [];
var len__17863__auto___22564 = arguments.length;
var i__17864__auto___22565 = (0);
while(true){
if((i__17864__auto___22565 < len__17863__auto___22564)){
args22561.push((arguments[i__17864__auto___22565]));

var G__22566 = (i__17864__auto___22565 + (1));
i__17864__auto___22565 = G__22566;
continue;
} else {
}
break;
}

var G__22563 = args22561.length;
switch (G__22563) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22561.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto__){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto__){
return (function (state_22733){
var state_val_22734 = (state_22733[(1)]);
if((state_val_22734 === (7))){
var inst_22729 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22735_22776 = state_22733__$1;
(statearr_22735_22776[(2)] = inst_22729);

(statearr_22735_22776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (20))){
var inst_22699 = (state_22733[(7)]);
var inst_22710 = (state_22733[(2)]);
var inst_22711 = cljs.core.next.call(null,inst_22699);
var inst_22685 = inst_22711;
var inst_22686 = null;
var inst_22687 = (0);
var inst_22688 = (0);
var state_22733__$1 = (function (){var statearr_22736 = state_22733;
(statearr_22736[(8)] = inst_22710);

(statearr_22736[(9)] = inst_22686);

(statearr_22736[(10)] = inst_22687);

(statearr_22736[(11)] = inst_22685);

(statearr_22736[(12)] = inst_22688);

return statearr_22736;
})();
var statearr_22737_22777 = state_22733__$1;
(statearr_22737_22777[(2)] = null);

(statearr_22737_22777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (1))){
var state_22733__$1 = state_22733;
var statearr_22738_22778 = state_22733__$1;
(statearr_22738_22778[(2)] = null);

(statearr_22738_22778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (4))){
var inst_22674 = (state_22733[(13)]);
var inst_22674__$1 = (state_22733[(2)]);
var inst_22675 = (inst_22674__$1 == null);
var state_22733__$1 = (function (){var statearr_22739 = state_22733;
(statearr_22739[(13)] = inst_22674__$1);

return statearr_22739;
})();
if(cljs.core.truth_(inst_22675)){
var statearr_22740_22779 = state_22733__$1;
(statearr_22740_22779[(1)] = (5));

} else {
var statearr_22741_22780 = state_22733__$1;
(statearr_22741_22780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (15))){
var state_22733__$1 = state_22733;
var statearr_22745_22781 = state_22733__$1;
(statearr_22745_22781[(2)] = null);

(statearr_22745_22781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (21))){
var state_22733__$1 = state_22733;
var statearr_22746_22782 = state_22733__$1;
(statearr_22746_22782[(2)] = null);

(statearr_22746_22782[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (13))){
var inst_22686 = (state_22733[(9)]);
var inst_22687 = (state_22733[(10)]);
var inst_22685 = (state_22733[(11)]);
var inst_22688 = (state_22733[(12)]);
var inst_22695 = (state_22733[(2)]);
var inst_22696 = (inst_22688 + (1));
var tmp22742 = inst_22686;
var tmp22743 = inst_22687;
var tmp22744 = inst_22685;
var inst_22685__$1 = tmp22744;
var inst_22686__$1 = tmp22742;
var inst_22687__$1 = tmp22743;
var inst_22688__$1 = inst_22696;
var state_22733__$1 = (function (){var statearr_22747 = state_22733;
(statearr_22747[(9)] = inst_22686__$1);

(statearr_22747[(14)] = inst_22695);

(statearr_22747[(10)] = inst_22687__$1);

(statearr_22747[(11)] = inst_22685__$1);

(statearr_22747[(12)] = inst_22688__$1);

return statearr_22747;
})();
var statearr_22748_22783 = state_22733__$1;
(statearr_22748_22783[(2)] = null);

(statearr_22748_22783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (22))){
var state_22733__$1 = state_22733;
var statearr_22749_22784 = state_22733__$1;
(statearr_22749_22784[(2)] = null);

(statearr_22749_22784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (6))){
var inst_22674 = (state_22733[(13)]);
var inst_22683 = f.call(null,inst_22674);
var inst_22684 = cljs.core.seq.call(null,inst_22683);
var inst_22685 = inst_22684;
var inst_22686 = null;
var inst_22687 = (0);
var inst_22688 = (0);
var state_22733__$1 = (function (){var statearr_22750 = state_22733;
(statearr_22750[(9)] = inst_22686);

(statearr_22750[(10)] = inst_22687);

(statearr_22750[(11)] = inst_22685);

(statearr_22750[(12)] = inst_22688);

return statearr_22750;
})();
var statearr_22751_22785 = state_22733__$1;
(statearr_22751_22785[(2)] = null);

(statearr_22751_22785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (17))){
var inst_22699 = (state_22733[(7)]);
var inst_22703 = cljs.core.chunk_first.call(null,inst_22699);
var inst_22704 = cljs.core.chunk_rest.call(null,inst_22699);
var inst_22705 = cljs.core.count.call(null,inst_22703);
var inst_22685 = inst_22704;
var inst_22686 = inst_22703;
var inst_22687 = inst_22705;
var inst_22688 = (0);
var state_22733__$1 = (function (){var statearr_22752 = state_22733;
(statearr_22752[(9)] = inst_22686);

(statearr_22752[(10)] = inst_22687);

(statearr_22752[(11)] = inst_22685);

(statearr_22752[(12)] = inst_22688);

return statearr_22752;
})();
var statearr_22753_22786 = state_22733__$1;
(statearr_22753_22786[(2)] = null);

(statearr_22753_22786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (3))){
var inst_22731 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22733__$1,inst_22731);
} else {
if((state_val_22734 === (12))){
var inst_22719 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22754_22787 = state_22733__$1;
(statearr_22754_22787[(2)] = inst_22719);

(statearr_22754_22787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (2))){
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22733__$1,(4),in$);
} else {
if((state_val_22734 === (23))){
var inst_22727 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22755_22788 = state_22733__$1;
(statearr_22755_22788[(2)] = inst_22727);

(statearr_22755_22788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (19))){
var inst_22714 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22756_22789 = state_22733__$1;
(statearr_22756_22789[(2)] = inst_22714);

(statearr_22756_22789[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (11))){
var inst_22699 = (state_22733[(7)]);
var inst_22685 = (state_22733[(11)]);
var inst_22699__$1 = cljs.core.seq.call(null,inst_22685);
var state_22733__$1 = (function (){var statearr_22757 = state_22733;
(statearr_22757[(7)] = inst_22699__$1);

return statearr_22757;
})();
if(inst_22699__$1){
var statearr_22758_22790 = state_22733__$1;
(statearr_22758_22790[(1)] = (14));

} else {
var statearr_22759_22791 = state_22733__$1;
(statearr_22759_22791[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (9))){
var inst_22721 = (state_22733[(2)]);
var inst_22722 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22733__$1 = (function (){var statearr_22760 = state_22733;
(statearr_22760[(15)] = inst_22721);

return statearr_22760;
})();
if(cljs.core.truth_(inst_22722)){
var statearr_22761_22792 = state_22733__$1;
(statearr_22761_22792[(1)] = (21));

} else {
var statearr_22762_22793 = state_22733__$1;
(statearr_22762_22793[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (5))){
var inst_22677 = cljs.core.async.close_BANG_.call(null,out);
var state_22733__$1 = state_22733;
var statearr_22763_22794 = state_22733__$1;
(statearr_22763_22794[(2)] = inst_22677);

(statearr_22763_22794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (14))){
var inst_22699 = (state_22733[(7)]);
var inst_22701 = cljs.core.chunked_seq_QMARK_.call(null,inst_22699);
var state_22733__$1 = state_22733;
if(inst_22701){
var statearr_22764_22795 = state_22733__$1;
(statearr_22764_22795[(1)] = (17));

} else {
var statearr_22765_22796 = state_22733__$1;
(statearr_22765_22796[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (16))){
var inst_22717 = (state_22733[(2)]);
var state_22733__$1 = state_22733;
var statearr_22766_22797 = state_22733__$1;
(statearr_22766_22797[(2)] = inst_22717);

(statearr_22766_22797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22734 === (10))){
var inst_22686 = (state_22733[(9)]);
var inst_22688 = (state_22733[(12)]);
var inst_22693 = cljs.core._nth.call(null,inst_22686,inst_22688);
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22733__$1,(13),out,inst_22693);
} else {
if((state_val_22734 === (18))){
var inst_22699 = (state_22733[(7)]);
var inst_22708 = cljs.core.first.call(null,inst_22699);
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22733__$1,(20),out,inst_22708);
} else {
if((state_val_22734 === (8))){
var inst_22687 = (state_22733[(10)]);
var inst_22688 = (state_22733[(12)]);
var inst_22690 = (inst_22688 < inst_22687);
var inst_22691 = inst_22690;
var state_22733__$1 = state_22733;
if(cljs.core.truth_(inst_22691)){
var statearr_22767_22798 = state_22733__$1;
(statearr_22767_22798[(1)] = (10));

} else {
var statearr_22768_22799 = state_22733__$1;
(statearr_22768_22799[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto__))
;
return ((function (switch__18818__auto__,c__20298__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____0 = (function (){
var statearr_22772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22772[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__);

(statearr_22772[(1)] = (1));

return statearr_22772;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____1 = (function (state_22733){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22773){if((e22773 instanceof Object)){
var ex__18822__auto__ = e22773;
var statearr_22774_22800 = state_22733;
(statearr_22774_22800[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22801 = state_22733;
state_22733 = G__22801;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__ = function(state_22733){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____1.call(this,state_22733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18819__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto__))
})();
var state__20300__auto__ = (function (){var statearr_22775 = f__20299__auto__.call(null);
(statearr_22775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto__);

return statearr_22775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto__))
);

return c__20298__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22802 = [];
var len__17863__auto___22805 = arguments.length;
var i__17864__auto___22806 = (0);
while(true){
if((i__17864__auto___22806 < len__17863__auto___22805)){
args22802.push((arguments[i__17864__auto___22806]));

var G__22807 = (i__17864__auto___22806 + (1));
i__17864__auto___22806 = G__22807;
continue;
} else {
}
break;
}

var G__22804 = args22802.length;
switch (G__22804) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22802.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22809 = [];
var len__17863__auto___22812 = arguments.length;
var i__17864__auto___22813 = (0);
while(true){
if((i__17864__auto___22813 < len__17863__auto___22812)){
args22809.push((arguments[i__17864__auto___22813]));

var G__22814 = (i__17864__auto___22813 + (1));
i__17864__auto___22813 = G__22814;
continue;
} else {
}
break;
}

var G__22811 = args22809.length;
switch (G__22811) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22809.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22816 = [];
var len__17863__auto___22867 = arguments.length;
var i__17864__auto___22868 = (0);
while(true){
if((i__17864__auto___22868 < len__17863__auto___22867)){
args22816.push((arguments[i__17864__auto___22868]));

var G__22869 = (i__17864__auto___22868 + (1));
i__17864__auto___22868 = G__22869;
continue;
} else {
}
break;
}

var G__22818 = args22816.length;
switch (G__22818) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22816.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20298__auto___22871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___22871,out){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___22871,out){
return (function (state_22842){
var state_val_22843 = (state_22842[(1)]);
if((state_val_22843 === (7))){
var inst_22837 = (state_22842[(2)]);
var state_22842__$1 = state_22842;
var statearr_22844_22872 = state_22842__$1;
(statearr_22844_22872[(2)] = inst_22837);

(statearr_22844_22872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (1))){
var inst_22819 = null;
var state_22842__$1 = (function (){var statearr_22845 = state_22842;
(statearr_22845[(7)] = inst_22819);

return statearr_22845;
})();
var statearr_22846_22873 = state_22842__$1;
(statearr_22846_22873[(2)] = null);

(statearr_22846_22873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (4))){
var inst_22822 = (state_22842[(8)]);
var inst_22822__$1 = (state_22842[(2)]);
var inst_22823 = (inst_22822__$1 == null);
var inst_22824 = cljs.core.not.call(null,inst_22823);
var state_22842__$1 = (function (){var statearr_22847 = state_22842;
(statearr_22847[(8)] = inst_22822__$1);

return statearr_22847;
})();
if(inst_22824){
var statearr_22848_22874 = state_22842__$1;
(statearr_22848_22874[(1)] = (5));

} else {
var statearr_22849_22875 = state_22842__$1;
(statearr_22849_22875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (6))){
var state_22842__$1 = state_22842;
var statearr_22850_22876 = state_22842__$1;
(statearr_22850_22876[(2)] = null);

(statearr_22850_22876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (3))){
var inst_22839 = (state_22842[(2)]);
var inst_22840 = cljs.core.async.close_BANG_.call(null,out);
var state_22842__$1 = (function (){var statearr_22851 = state_22842;
(statearr_22851[(9)] = inst_22839);

return statearr_22851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22842__$1,inst_22840);
} else {
if((state_val_22843 === (2))){
var state_22842__$1 = state_22842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22842__$1,(4),ch);
} else {
if((state_val_22843 === (11))){
var inst_22822 = (state_22842[(8)]);
var inst_22831 = (state_22842[(2)]);
var inst_22819 = inst_22822;
var state_22842__$1 = (function (){var statearr_22852 = state_22842;
(statearr_22852[(10)] = inst_22831);

(statearr_22852[(7)] = inst_22819);

return statearr_22852;
})();
var statearr_22853_22877 = state_22842__$1;
(statearr_22853_22877[(2)] = null);

(statearr_22853_22877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (9))){
var inst_22822 = (state_22842[(8)]);
var state_22842__$1 = state_22842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22842__$1,(11),out,inst_22822);
} else {
if((state_val_22843 === (5))){
var inst_22819 = (state_22842[(7)]);
var inst_22822 = (state_22842[(8)]);
var inst_22826 = cljs.core._EQ_.call(null,inst_22822,inst_22819);
var state_22842__$1 = state_22842;
if(inst_22826){
var statearr_22855_22878 = state_22842__$1;
(statearr_22855_22878[(1)] = (8));

} else {
var statearr_22856_22879 = state_22842__$1;
(statearr_22856_22879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (10))){
var inst_22834 = (state_22842[(2)]);
var state_22842__$1 = state_22842;
var statearr_22857_22880 = state_22842__$1;
(statearr_22857_22880[(2)] = inst_22834);

(statearr_22857_22880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (8))){
var inst_22819 = (state_22842[(7)]);
var tmp22854 = inst_22819;
var inst_22819__$1 = tmp22854;
var state_22842__$1 = (function (){var statearr_22858 = state_22842;
(statearr_22858[(7)] = inst_22819__$1);

return statearr_22858;
})();
var statearr_22859_22881 = state_22842__$1;
(statearr_22859_22881[(2)] = null);

(statearr_22859_22881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto___22871,out))
;
return ((function (switch__18818__auto__,c__20298__auto___22871,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_22863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22863[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_22863[(1)] = (1));

return statearr_22863;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_22842){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22864){if((e22864 instanceof Object)){
var ex__18822__auto__ = e22864;
var statearr_22865_22882 = state_22842;
(statearr_22865_22882[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22883 = state_22842;
state_22842 = G__22883;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_22842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_22842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___22871,out))
})();
var state__20300__auto__ = (function (){var statearr_22866 = f__20299__auto__.call(null);
(statearr_22866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___22871);

return statearr_22866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___22871,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22884 = [];
var len__17863__auto___22954 = arguments.length;
var i__17864__auto___22955 = (0);
while(true){
if((i__17864__auto___22955 < len__17863__auto___22954)){
args22884.push((arguments[i__17864__auto___22955]));

var G__22956 = (i__17864__auto___22955 + (1));
i__17864__auto___22955 = G__22956;
continue;
} else {
}
break;
}

var G__22886 = args22884.length;
switch (G__22886) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22884.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20298__auto___22958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___22958,out){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___22958,out){
return (function (state_22924){
var state_val_22925 = (state_22924[(1)]);
if((state_val_22925 === (7))){
var inst_22920 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22926_22959 = state_22924__$1;
(statearr_22926_22959[(2)] = inst_22920);

(statearr_22926_22959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (1))){
var inst_22887 = (new Array(n));
var inst_22888 = inst_22887;
var inst_22889 = (0);
var state_22924__$1 = (function (){var statearr_22927 = state_22924;
(statearr_22927[(7)] = inst_22889);

(statearr_22927[(8)] = inst_22888);

return statearr_22927;
})();
var statearr_22928_22960 = state_22924__$1;
(statearr_22928_22960[(2)] = null);

(statearr_22928_22960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (4))){
var inst_22892 = (state_22924[(9)]);
var inst_22892__$1 = (state_22924[(2)]);
var inst_22893 = (inst_22892__$1 == null);
var inst_22894 = cljs.core.not.call(null,inst_22893);
var state_22924__$1 = (function (){var statearr_22929 = state_22924;
(statearr_22929[(9)] = inst_22892__$1);

return statearr_22929;
})();
if(inst_22894){
var statearr_22930_22961 = state_22924__$1;
(statearr_22930_22961[(1)] = (5));

} else {
var statearr_22931_22962 = state_22924__$1;
(statearr_22931_22962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (15))){
var inst_22914 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22932_22963 = state_22924__$1;
(statearr_22932_22963[(2)] = inst_22914);

(statearr_22932_22963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (13))){
var state_22924__$1 = state_22924;
var statearr_22933_22964 = state_22924__$1;
(statearr_22933_22964[(2)] = null);

(statearr_22933_22964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (6))){
var inst_22889 = (state_22924[(7)]);
var inst_22910 = (inst_22889 > (0));
var state_22924__$1 = state_22924;
if(cljs.core.truth_(inst_22910)){
var statearr_22934_22965 = state_22924__$1;
(statearr_22934_22965[(1)] = (12));

} else {
var statearr_22935_22966 = state_22924__$1;
(statearr_22935_22966[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (3))){
var inst_22922 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22924__$1,inst_22922);
} else {
if((state_val_22925 === (12))){
var inst_22888 = (state_22924[(8)]);
var inst_22912 = cljs.core.vec.call(null,inst_22888);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22924__$1,(15),out,inst_22912);
} else {
if((state_val_22925 === (2))){
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22924__$1,(4),ch);
} else {
if((state_val_22925 === (11))){
var inst_22904 = (state_22924[(2)]);
var inst_22905 = (new Array(n));
var inst_22888 = inst_22905;
var inst_22889 = (0);
var state_22924__$1 = (function (){var statearr_22936 = state_22924;
(statearr_22936[(7)] = inst_22889);

(statearr_22936[(10)] = inst_22904);

(statearr_22936[(8)] = inst_22888);

return statearr_22936;
})();
var statearr_22937_22967 = state_22924__$1;
(statearr_22937_22967[(2)] = null);

(statearr_22937_22967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (9))){
var inst_22888 = (state_22924[(8)]);
var inst_22902 = cljs.core.vec.call(null,inst_22888);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22924__$1,(11),out,inst_22902);
} else {
if((state_val_22925 === (5))){
var inst_22892 = (state_22924[(9)]);
var inst_22889 = (state_22924[(7)]);
var inst_22897 = (state_22924[(11)]);
var inst_22888 = (state_22924[(8)]);
var inst_22896 = (inst_22888[inst_22889] = inst_22892);
var inst_22897__$1 = (inst_22889 + (1));
var inst_22898 = (inst_22897__$1 < n);
var state_22924__$1 = (function (){var statearr_22938 = state_22924;
(statearr_22938[(12)] = inst_22896);

(statearr_22938[(11)] = inst_22897__$1);

return statearr_22938;
})();
if(cljs.core.truth_(inst_22898)){
var statearr_22939_22968 = state_22924__$1;
(statearr_22939_22968[(1)] = (8));

} else {
var statearr_22940_22969 = state_22924__$1;
(statearr_22940_22969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (14))){
var inst_22917 = (state_22924[(2)]);
var inst_22918 = cljs.core.async.close_BANG_.call(null,out);
var state_22924__$1 = (function (){var statearr_22942 = state_22924;
(statearr_22942[(13)] = inst_22917);

return statearr_22942;
})();
var statearr_22943_22970 = state_22924__$1;
(statearr_22943_22970[(2)] = inst_22918);

(statearr_22943_22970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (10))){
var inst_22908 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22944_22971 = state_22924__$1;
(statearr_22944_22971[(2)] = inst_22908);

(statearr_22944_22971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (8))){
var inst_22897 = (state_22924[(11)]);
var inst_22888 = (state_22924[(8)]);
var tmp22941 = inst_22888;
var inst_22888__$1 = tmp22941;
var inst_22889 = inst_22897;
var state_22924__$1 = (function (){var statearr_22945 = state_22924;
(statearr_22945[(7)] = inst_22889);

(statearr_22945[(8)] = inst_22888__$1);

return statearr_22945;
})();
var statearr_22946_22972 = state_22924__$1;
(statearr_22946_22972[(2)] = null);

(statearr_22946_22972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto___22958,out))
;
return ((function (switch__18818__auto__,c__20298__auto___22958,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_22950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22950[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_22950[(1)] = (1));

return statearr_22950;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_22924){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_22924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e22951){if((e22951 instanceof Object)){
var ex__18822__auto__ = e22951;
var statearr_22952_22973 = state_22924;
(statearr_22952_22973[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22974 = state_22924;
state_22924 = G__22974;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_22924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_22924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___22958,out))
})();
var state__20300__auto__ = (function (){var statearr_22953 = f__20299__auto__.call(null);
(statearr_22953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___22958);

return statearr_22953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___22958,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22975 = [];
var len__17863__auto___23049 = arguments.length;
var i__17864__auto___23050 = (0);
while(true){
if((i__17864__auto___23050 < len__17863__auto___23049)){
args22975.push((arguments[i__17864__auto___23050]));

var G__23051 = (i__17864__auto___23050 + (1));
i__17864__auto___23050 = G__23051;
continue;
} else {
}
break;
}

var G__22977 = args22975.length;
switch (G__22977) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22975.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20298__auto___23053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20298__auto___23053,out){
return (function (){
var f__20299__auto__ = (function (){var switch__18818__auto__ = ((function (c__20298__auto___23053,out){
return (function (state_23019){
var state_val_23020 = (state_23019[(1)]);
if((state_val_23020 === (7))){
var inst_23015 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
var statearr_23021_23054 = state_23019__$1;
(statearr_23021_23054[(2)] = inst_23015);

(statearr_23021_23054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (1))){
var inst_22978 = [];
var inst_22979 = inst_22978;
var inst_22980 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23019__$1 = (function (){var statearr_23022 = state_23019;
(statearr_23022[(7)] = inst_22980);

(statearr_23022[(8)] = inst_22979);

return statearr_23022;
})();
var statearr_23023_23055 = state_23019__$1;
(statearr_23023_23055[(2)] = null);

(statearr_23023_23055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (4))){
var inst_22983 = (state_23019[(9)]);
var inst_22983__$1 = (state_23019[(2)]);
var inst_22984 = (inst_22983__$1 == null);
var inst_22985 = cljs.core.not.call(null,inst_22984);
var state_23019__$1 = (function (){var statearr_23024 = state_23019;
(statearr_23024[(9)] = inst_22983__$1);

return statearr_23024;
})();
if(inst_22985){
var statearr_23025_23056 = state_23019__$1;
(statearr_23025_23056[(1)] = (5));

} else {
var statearr_23026_23057 = state_23019__$1;
(statearr_23026_23057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (15))){
var inst_23009 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
var statearr_23027_23058 = state_23019__$1;
(statearr_23027_23058[(2)] = inst_23009);

(statearr_23027_23058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (13))){
var state_23019__$1 = state_23019;
var statearr_23028_23059 = state_23019__$1;
(statearr_23028_23059[(2)] = null);

(statearr_23028_23059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (6))){
var inst_22979 = (state_23019[(8)]);
var inst_23004 = inst_22979.length;
var inst_23005 = (inst_23004 > (0));
var state_23019__$1 = state_23019;
if(cljs.core.truth_(inst_23005)){
var statearr_23029_23060 = state_23019__$1;
(statearr_23029_23060[(1)] = (12));

} else {
var statearr_23030_23061 = state_23019__$1;
(statearr_23030_23061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (3))){
var inst_23017 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23019__$1,inst_23017);
} else {
if((state_val_23020 === (12))){
var inst_22979 = (state_23019[(8)]);
var inst_23007 = cljs.core.vec.call(null,inst_22979);
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23019__$1,(15),out,inst_23007);
} else {
if((state_val_23020 === (2))){
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23019__$1,(4),ch);
} else {
if((state_val_23020 === (11))){
var inst_22983 = (state_23019[(9)]);
var inst_22987 = (state_23019[(10)]);
var inst_22997 = (state_23019[(2)]);
var inst_22998 = [];
var inst_22999 = inst_22998.push(inst_22983);
var inst_22979 = inst_22998;
var inst_22980 = inst_22987;
var state_23019__$1 = (function (){var statearr_23031 = state_23019;
(statearr_23031[(11)] = inst_22999);

(statearr_23031[(7)] = inst_22980);

(statearr_23031[(12)] = inst_22997);

(statearr_23031[(8)] = inst_22979);

return statearr_23031;
})();
var statearr_23032_23062 = state_23019__$1;
(statearr_23032_23062[(2)] = null);

(statearr_23032_23062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (9))){
var inst_22979 = (state_23019[(8)]);
var inst_22995 = cljs.core.vec.call(null,inst_22979);
var state_23019__$1 = state_23019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23019__$1,(11),out,inst_22995);
} else {
if((state_val_23020 === (5))){
var inst_22983 = (state_23019[(9)]);
var inst_22980 = (state_23019[(7)]);
var inst_22987 = (state_23019[(10)]);
var inst_22987__$1 = f.call(null,inst_22983);
var inst_22988 = cljs.core._EQ_.call(null,inst_22987__$1,inst_22980);
var inst_22989 = cljs.core.keyword_identical_QMARK_.call(null,inst_22980,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22990 = (inst_22988) || (inst_22989);
var state_23019__$1 = (function (){var statearr_23033 = state_23019;
(statearr_23033[(10)] = inst_22987__$1);

return statearr_23033;
})();
if(cljs.core.truth_(inst_22990)){
var statearr_23034_23063 = state_23019__$1;
(statearr_23034_23063[(1)] = (8));

} else {
var statearr_23035_23064 = state_23019__$1;
(statearr_23035_23064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (14))){
var inst_23012 = (state_23019[(2)]);
var inst_23013 = cljs.core.async.close_BANG_.call(null,out);
var state_23019__$1 = (function (){var statearr_23037 = state_23019;
(statearr_23037[(13)] = inst_23012);

return statearr_23037;
})();
var statearr_23038_23065 = state_23019__$1;
(statearr_23038_23065[(2)] = inst_23013);

(statearr_23038_23065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (10))){
var inst_23002 = (state_23019[(2)]);
var state_23019__$1 = state_23019;
var statearr_23039_23066 = state_23019__$1;
(statearr_23039_23066[(2)] = inst_23002);

(statearr_23039_23066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23020 === (8))){
var inst_22983 = (state_23019[(9)]);
var inst_22987 = (state_23019[(10)]);
var inst_22979 = (state_23019[(8)]);
var inst_22992 = inst_22979.push(inst_22983);
var tmp23036 = inst_22979;
var inst_22979__$1 = tmp23036;
var inst_22980 = inst_22987;
var state_23019__$1 = (function (){var statearr_23040 = state_23019;
(statearr_23040[(14)] = inst_22992);

(statearr_23040[(7)] = inst_22980);

(statearr_23040[(8)] = inst_22979__$1);

return statearr_23040;
})();
var statearr_23041_23067 = state_23019__$1;
(statearr_23041_23067[(2)] = null);

(statearr_23041_23067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20298__auto___23053,out))
;
return ((function (switch__18818__auto__,c__20298__auto___23053,out){
return (function() {
var cljs$core$async$state_machine__18819__auto__ = null;
var cljs$core$async$state_machine__18819__auto____0 = (function (){
var statearr_23045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23045[(0)] = cljs$core$async$state_machine__18819__auto__);

(statearr_23045[(1)] = (1));

return statearr_23045;
});
var cljs$core$async$state_machine__18819__auto____1 = (function (state_23019){
while(true){
var ret_value__18820__auto__ = (function (){try{while(true){
var result__18821__auto__ = switch__18818__auto__.call(null,state_23019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18821__auto__;
}
break;
}
}catch (e23046){if((e23046 instanceof Object)){
var ex__18822__auto__ = e23046;
var statearr_23047_23068 = state_23019;
(statearr_23047_23068[(5)] = ex__18822__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23069 = state_23019;
state_23019 = G__23069;
continue;
} else {
return ret_value__18820__auto__;
}
break;
}
});
cljs$core$async$state_machine__18819__auto__ = function(state_23019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18819__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18819__auto____1.call(this,state_23019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18819__auto____0;
cljs$core$async$state_machine__18819__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18819__auto____1;
return cljs$core$async$state_machine__18819__auto__;
})()
;})(switch__18818__auto__,c__20298__auto___23053,out))
})();
var state__20300__auto__ = (function (){var statearr_23048 = f__20299__auto__.call(null);
(statearr_23048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20298__auto___23053);

return statearr_23048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20300__auto__);
});})(c__20298__auto___23053,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map