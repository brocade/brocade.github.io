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
var args20473 = [];
var len__17877__auto___20479 = arguments.length;
var i__17878__auto___20480 = (0);
while(true){
if((i__17878__auto___20480 < len__17877__auto___20479)){
args20473.push((arguments[i__17878__auto___20480]));

var G__20481 = (i__17878__auto___20480 + (1));
i__17878__auto___20480 = G__20481;
continue;
} else {
}
break;
}

var G__20475 = args20473.length;
switch (G__20475) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20473.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20476 = (function (f,blockable,meta20477){
this.f = f;
this.blockable = blockable;
this.meta20477 = meta20477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20478,meta20477__$1){
var self__ = this;
var _20478__$1 = this;
return (new cljs.core.async.t_cljs$core$async20476(self__.f,self__.blockable,meta20477__$1));
});

cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20478){
var self__ = this;
var _20478__$1 = this;
return self__.meta20477;
});

cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20477","meta20477",334941965,null)], null);
});

cljs.core.async.t_cljs$core$async20476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20476";

cljs.core.async.t_cljs$core$async20476.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async20476");
});

cljs.core.async.__GT_t_cljs$core$async20476 = (function cljs$core$async$__GT_t_cljs$core$async20476(f__$1,blockable__$1,meta20477){
return (new cljs.core.async.t_cljs$core$async20476(f__$1,blockable__$1,meta20477));
});

}

return (new cljs.core.async.t_cljs$core$async20476(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args20485 = [];
var len__17877__auto___20488 = arguments.length;
var i__17878__auto___20489 = (0);
while(true){
if((i__17878__auto___20489 < len__17877__auto___20488)){
args20485.push((arguments[i__17878__auto___20489]));

var G__20490 = (i__17878__auto___20489 + (1));
i__17878__auto___20489 = G__20490;
continue;
} else {
}
break;
}

var G__20487 = args20485.length;
switch (G__20487) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20485.length)].join('')));

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
var args20492 = [];
var len__17877__auto___20495 = arguments.length;
var i__17878__auto___20496 = (0);
while(true){
if((i__17878__auto___20496 < len__17877__auto___20495)){
args20492.push((arguments[i__17878__auto___20496]));

var G__20497 = (i__17878__auto___20496 + (1));
i__17878__auto___20496 = G__20497;
continue;
} else {
}
break;
}

var G__20494 = args20492.length;
switch (G__20494) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20492.length)].join('')));

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
var args20499 = [];
var len__17877__auto___20502 = arguments.length;
var i__17878__auto___20503 = (0);
while(true){
if((i__17878__auto___20503 < len__17877__auto___20502)){
args20499.push((arguments[i__17878__auto___20503]));

var G__20504 = (i__17878__auto___20503 + (1));
i__17878__auto___20503 = G__20504;
continue;
} else {
}
break;
}

var G__20501 = args20499.length;
switch (G__20501) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20499.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20506 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20506);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20506,ret){
return (function (){
return fn1.call(null,val_20506);
});})(val_20506,ret))
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
var args20507 = [];
var len__17877__auto___20510 = arguments.length;
var i__17878__auto___20511 = (0);
while(true){
if((i__17878__auto___20511 < len__17877__auto___20510)){
args20507.push((arguments[i__17878__auto___20511]));

var G__20512 = (i__17878__auto___20511 + (1));
i__17878__auto___20511 = G__20512;
continue;
} else {
}
break;
}

var G__20509 = args20507.length;
switch (G__20509) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20507.length)].join('')));

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
var n__17722__auto___20514 = n;
var x_20515 = (0);
while(true){
if((x_20515 < n__17722__auto___20514)){
(a[x_20515] = (0));

var G__20516 = (x_20515 + (1));
x_20515 = G__20516;
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

var G__20517 = (i + (1));
i = G__20517;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20521 = (function (alt_flag,flag,meta20522){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20522 = meta20522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20523,meta20522__$1){
var self__ = this;
var _20523__$1 = this;
return (new cljs.core.async.t_cljs$core$async20521(self__.alt_flag,self__.flag,meta20522__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20523){
var self__ = this;
var _20523__$1 = this;
return self__.meta20522;
});})(flag))
;

cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20521.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20522","meta20522",1718142911,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20521";

cljs.core.async.t_cljs$core$async20521.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async20521");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20521 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20521(alt_flag__$1,flag__$1,meta20522){
return (new cljs.core.async.t_cljs$core$async20521(alt_flag__$1,flag__$1,meta20522));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20521(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20527 = (function (alt_handler,flag,cb,meta20528){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20528 = meta20528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20529,meta20528__$1){
var self__ = this;
var _20529__$1 = this;
return (new cljs.core.async.t_cljs$core$async20527(self__.alt_handler,self__.flag,self__.cb,meta20528__$1));
});

cljs.core.async.t_cljs$core$async20527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20529){
var self__ = this;
var _20529__$1 = this;
return self__.meta20528;
});

cljs.core.async.t_cljs$core$async20527.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20528","meta20528",1393544922,null)], null);
});

cljs.core.async.t_cljs$core$async20527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20527";

cljs.core.async.t_cljs$core$async20527.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async20527");
});

cljs.core.async.__GT_t_cljs$core$async20527 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20527(alt_handler__$1,flag__$1,cb__$1,meta20528){
return (new cljs.core.async.t_cljs$core$async20527(alt_handler__$1,flag__$1,cb__$1,meta20528));
});

}

return (new cljs.core.async.t_cljs$core$async20527(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20530_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20530_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20531_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20531_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16819__auto__ = wport;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20532 = (i + (1));
i = G__20532;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16819__auto__ = ret;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16807__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16807__auto__;
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
var args__17884__auto__ = [];
var len__17877__auto___20538 = arguments.length;
var i__17878__auto___20539 = (0);
while(true){
if((i__17878__auto___20539 < len__17877__auto___20538)){
args__17884__auto__.push((arguments[i__17878__auto___20539]));

var G__20540 = (i__17878__auto___20539 + (1));
i__17878__auto___20539 = G__20540;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20535){
var map__20536 = p__20535;
var map__20536__$1 = ((((!((map__20536 == null)))?((((map__20536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20536):map__20536);
var opts = map__20536__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20533){
var G__20534 = cljs.core.first.call(null,seq20533);
var seq20533__$1 = cljs.core.next.call(null,seq20533);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20534,seq20533__$1);
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
var args20541 = [];
var len__17877__auto___20591 = arguments.length;
var i__17878__auto___20592 = (0);
while(true){
if((i__17878__auto___20592 < len__17877__auto___20591)){
args20541.push((arguments[i__17878__auto___20592]));

var G__20593 = (i__17878__auto___20592 + (1));
i__17878__auto___20592 = G__20593;
continue;
} else {
}
break;
}

var G__20543 = args20541.length;
switch (G__20543) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20541.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20428__auto___20595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___20595){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___20595){
return (function (state_20567){
var state_val_20568 = (state_20567[(1)]);
if((state_val_20568 === (7))){
var inst_20563 = (state_20567[(2)]);
var state_20567__$1 = state_20567;
var statearr_20569_20596 = state_20567__$1;
(statearr_20569_20596[(2)] = inst_20563);

(statearr_20569_20596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20568 === (1))){
var state_20567__$1 = state_20567;
var statearr_20570_20597 = state_20567__$1;
(statearr_20570_20597[(2)] = null);

(statearr_20570_20597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20568 === (4))){
var inst_20546 = (state_20567[(7)]);
var inst_20546__$1 = (state_20567[(2)]);
var inst_20547 = (inst_20546__$1 == null);
var state_20567__$1 = (function (){var statearr_20571 = state_20567;
(statearr_20571[(7)] = inst_20546__$1);

return statearr_20571;
})();
if(cljs.core.truth_(inst_20547)){
var statearr_20572_20598 = state_20567__$1;
(statearr_20572_20598[(1)] = (5));

} else {
var statearr_20573_20599 = state_20567__$1;
(statearr_20573_20599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20568 === (13))){
var state_20567__$1 = state_20567;
var statearr_20574_20600 = state_20567__$1;
(statearr_20574_20600[(2)] = null);

(statearr_20574_20600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20568 === (6))){
var inst_20546 = (state_20567[(7)]);
var state_20567__$1 = state_20567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20567__$1,(11),to,inst_20546);
} else {
if((state_val_20568 === (3))){
var inst_20565 = (state_20567[(2)]);
var state_20567__$1 = state_20567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20567__$1,inst_20565);
} else {
if((state_val_20568 === (12))){
var state_20567__$1 = state_20567;
var statearr_20575_20601 = state_20567__$1;
(statearr_20575_20601[(2)] = null);

(statearr_20575_20601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20568 === (2))){
var state_20567__$1 = state_20567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20567__$1,(4),from);
} else {
if((state_val_20568 === (11))){
var inst_20556 = (state_20567[(2)]);
var state_20567__$1 = state_20567;
if(cljs.core.truth_(inst_20556)){
var statearr_20576_20602 = state_20567__$1;
(statearr_20576_20602[(1)] = (12));

} else {
var statearr_20577_20603 = state_20567__$1;
(statearr_20577_20603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20568 === (9))){
var state_20567__$1 = state_20567;
var statearr_20578_20604 = state_20567__$1;
(statearr_20578_20604[(2)] = null);

(statearr_20578_20604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20568 === (5))){
var state_20567__$1 = state_20567;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20579_20605 = state_20567__$1;
(statearr_20579_20605[(1)] = (8));

} else {
var statearr_20580_20606 = state_20567__$1;
(statearr_20580_20606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20568 === (14))){
var inst_20561 = (state_20567[(2)]);
var state_20567__$1 = state_20567;
var statearr_20581_20607 = state_20567__$1;
(statearr_20581_20607[(2)] = inst_20561);

(statearr_20581_20607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20568 === (10))){
var inst_20553 = (state_20567[(2)]);
var state_20567__$1 = state_20567;
var statearr_20582_20608 = state_20567__$1;
(statearr_20582_20608[(2)] = inst_20553);

(statearr_20582_20608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20568 === (8))){
var inst_20550 = cljs.core.async.close_BANG_.call(null,to);
var state_20567__$1 = state_20567;
var statearr_20583_20609 = state_20567__$1;
(statearr_20583_20609[(2)] = inst_20550);

(statearr_20583_20609[(1)] = (10));


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
});})(c__20428__auto___20595))
;
return ((function (switch__20316__auto__,c__20428__auto___20595){
return (function() {
var cljs$core$async$state_machine__20317__auto__ = null;
var cljs$core$async$state_machine__20317__auto____0 = (function (){
var statearr_20587 = [null,null,null,null,null,null,null,null];
(statearr_20587[(0)] = cljs$core$async$state_machine__20317__auto__);

(statearr_20587[(1)] = (1));

return statearr_20587;
});
var cljs$core$async$state_machine__20317__auto____1 = (function (state_20567){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_20567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e20588){if((e20588 instanceof Object)){
var ex__20320__auto__ = e20588;
var statearr_20589_20610 = state_20567;
(statearr_20589_20610[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20611 = state_20567;
state_20567 = G__20611;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$state_machine__20317__auto__ = function(state_20567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20317__auto____1.call(this,state_20567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20317__auto____0;
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20317__auto____1;
return cljs$core$async$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___20595))
})();
var state__20430__auto__ = (function (){var statearr_20590 = f__20429__auto__.call(null);
(statearr_20590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___20595);

return statearr_20590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___20595))
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
return (function (p__20795){
var vec__20796 = p__20795;
var v = cljs.core.nth.call(null,vec__20796,(0),null);
var p = cljs.core.nth.call(null,vec__20796,(1),null);
var job = vec__20796;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20428__auto___20978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___20978,res,vec__20796,v,p,job,jobs,results){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___20978,res,vec__20796,v,p,job,jobs,results){
return (function (state_20801){
var state_val_20802 = (state_20801[(1)]);
if((state_val_20802 === (1))){
var state_20801__$1 = state_20801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20801__$1,(2),res,v);
} else {
if((state_val_20802 === (2))){
var inst_20798 = (state_20801[(2)]);
var inst_20799 = cljs.core.async.close_BANG_.call(null,res);
var state_20801__$1 = (function (){var statearr_20803 = state_20801;
(statearr_20803[(7)] = inst_20798);

return statearr_20803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20801__$1,inst_20799);
} else {
return null;
}
}
});})(c__20428__auto___20978,res,vec__20796,v,p,job,jobs,results))
;
return ((function (switch__20316__auto__,c__20428__auto___20978,res,vec__20796,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0 = (function (){
var statearr_20807 = [null,null,null,null,null,null,null,null];
(statearr_20807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__);

(statearr_20807[(1)] = (1));

return statearr_20807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1 = (function (state_20801){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_20801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e20808){if((e20808 instanceof Object)){
var ex__20320__auto__ = e20808;
var statearr_20809_20979 = state_20801;
(statearr_20809_20979[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20980 = state_20801;
state_20801 = G__20980;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__ = function(state_20801){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1.call(this,state_20801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___20978,res,vec__20796,v,p,job,jobs,results))
})();
var state__20430__auto__ = (function (){var statearr_20810 = f__20429__auto__.call(null);
(statearr_20810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___20978);

return statearr_20810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___20978,res,vec__20796,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20811){
var vec__20812 = p__20811;
var v = cljs.core.nth.call(null,vec__20812,(0),null);
var p = cljs.core.nth.call(null,vec__20812,(1),null);
var job = vec__20812;
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
var n__17722__auto___20981 = n;
var __20982 = (0);
while(true){
if((__20982 < n__17722__auto___20981)){
var G__20813_20983 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20813_20983) {
case "compute":
var c__20428__auto___20985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20982,c__20428__auto___20985,G__20813_20983,n__17722__auto___20981,jobs,results,process,async){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (__20982,c__20428__auto___20985,G__20813_20983,n__17722__auto___20981,jobs,results,process,async){
return (function (state_20826){
var state_val_20827 = (state_20826[(1)]);
if((state_val_20827 === (1))){
var state_20826__$1 = state_20826;
var statearr_20828_20986 = state_20826__$1;
(statearr_20828_20986[(2)] = null);

(statearr_20828_20986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (2))){
var state_20826__$1 = state_20826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20826__$1,(4),jobs);
} else {
if((state_val_20827 === (3))){
var inst_20824 = (state_20826[(2)]);
var state_20826__$1 = state_20826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20826__$1,inst_20824);
} else {
if((state_val_20827 === (4))){
var inst_20816 = (state_20826[(2)]);
var inst_20817 = process.call(null,inst_20816);
var state_20826__$1 = state_20826;
if(cljs.core.truth_(inst_20817)){
var statearr_20829_20987 = state_20826__$1;
(statearr_20829_20987[(1)] = (5));

} else {
var statearr_20830_20988 = state_20826__$1;
(statearr_20830_20988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (5))){
var state_20826__$1 = state_20826;
var statearr_20831_20989 = state_20826__$1;
(statearr_20831_20989[(2)] = null);

(statearr_20831_20989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (6))){
var state_20826__$1 = state_20826;
var statearr_20832_20990 = state_20826__$1;
(statearr_20832_20990[(2)] = null);

(statearr_20832_20990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20827 === (7))){
var inst_20822 = (state_20826[(2)]);
var state_20826__$1 = state_20826;
var statearr_20833_20991 = state_20826__$1;
(statearr_20833_20991[(2)] = inst_20822);

(statearr_20833_20991[(1)] = (3));


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
});})(__20982,c__20428__auto___20985,G__20813_20983,n__17722__auto___20981,jobs,results,process,async))
;
return ((function (__20982,switch__20316__auto__,c__20428__auto___20985,G__20813_20983,n__17722__auto___20981,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0 = (function (){
var statearr_20837 = [null,null,null,null,null,null,null];
(statearr_20837[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__);

(statearr_20837[(1)] = (1));

return statearr_20837;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1 = (function (state_20826){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_20826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e20838){if((e20838 instanceof Object)){
var ex__20320__auto__ = e20838;
var statearr_20839_20992 = state_20826;
(statearr_20839_20992[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20993 = state_20826;
state_20826 = G__20993;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__ = function(state_20826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1.call(this,state_20826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__;
})()
;})(__20982,switch__20316__auto__,c__20428__auto___20985,G__20813_20983,n__17722__auto___20981,jobs,results,process,async))
})();
var state__20430__auto__ = (function (){var statearr_20840 = f__20429__auto__.call(null);
(statearr_20840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___20985);

return statearr_20840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(__20982,c__20428__auto___20985,G__20813_20983,n__17722__auto___20981,jobs,results,process,async))
);


break;
case "async":
var c__20428__auto___20994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20982,c__20428__auto___20994,G__20813_20983,n__17722__auto___20981,jobs,results,process,async){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (__20982,c__20428__auto___20994,G__20813_20983,n__17722__auto___20981,jobs,results,process,async){
return (function (state_20853){
var state_val_20854 = (state_20853[(1)]);
if((state_val_20854 === (1))){
var state_20853__$1 = state_20853;
var statearr_20855_20995 = state_20853__$1;
(statearr_20855_20995[(2)] = null);

(statearr_20855_20995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20854 === (2))){
var state_20853__$1 = state_20853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20853__$1,(4),jobs);
} else {
if((state_val_20854 === (3))){
var inst_20851 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20853__$1,inst_20851);
} else {
if((state_val_20854 === (4))){
var inst_20843 = (state_20853[(2)]);
var inst_20844 = async.call(null,inst_20843);
var state_20853__$1 = state_20853;
if(cljs.core.truth_(inst_20844)){
var statearr_20856_20996 = state_20853__$1;
(statearr_20856_20996[(1)] = (5));

} else {
var statearr_20857_20997 = state_20853__$1;
(statearr_20857_20997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20854 === (5))){
var state_20853__$1 = state_20853;
var statearr_20858_20998 = state_20853__$1;
(statearr_20858_20998[(2)] = null);

(statearr_20858_20998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20854 === (6))){
var state_20853__$1 = state_20853;
var statearr_20859_20999 = state_20853__$1;
(statearr_20859_20999[(2)] = null);

(statearr_20859_20999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20854 === (7))){
var inst_20849 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
var statearr_20860_21000 = state_20853__$1;
(statearr_20860_21000[(2)] = inst_20849);

(statearr_20860_21000[(1)] = (3));


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
});})(__20982,c__20428__auto___20994,G__20813_20983,n__17722__auto___20981,jobs,results,process,async))
;
return ((function (__20982,switch__20316__auto__,c__20428__auto___20994,G__20813_20983,n__17722__auto___20981,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0 = (function (){
var statearr_20864 = [null,null,null,null,null,null,null];
(statearr_20864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__);

(statearr_20864[(1)] = (1));

return statearr_20864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1 = (function (state_20853){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_20853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e20865){if((e20865 instanceof Object)){
var ex__20320__auto__ = e20865;
var statearr_20866_21001 = state_20853;
(statearr_20866_21001[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21002 = state_20853;
state_20853 = G__21002;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__ = function(state_20853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1.call(this,state_20853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__;
})()
;})(__20982,switch__20316__auto__,c__20428__auto___20994,G__20813_20983,n__17722__auto___20981,jobs,results,process,async))
})();
var state__20430__auto__ = (function (){var statearr_20867 = f__20429__auto__.call(null);
(statearr_20867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___20994);

return statearr_20867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(__20982,c__20428__auto___20994,G__20813_20983,n__17722__auto___20981,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21003 = (__20982 + (1));
__20982 = G__21003;
continue;
} else {
}
break;
}

var c__20428__auto___21004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___21004,jobs,results,process,async){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___21004,jobs,results,process,async){
return (function (state_20889){
var state_val_20890 = (state_20889[(1)]);
if((state_val_20890 === (1))){
var state_20889__$1 = state_20889;
var statearr_20891_21005 = state_20889__$1;
(statearr_20891_21005[(2)] = null);

(statearr_20891_21005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (2))){
var state_20889__$1 = state_20889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20889__$1,(4),from);
} else {
if((state_val_20890 === (3))){
var inst_20887 = (state_20889[(2)]);
var state_20889__$1 = state_20889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20889__$1,inst_20887);
} else {
if((state_val_20890 === (4))){
var inst_20870 = (state_20889[(7)]);
var inst_20870__$1 = (state_20889[(2)]);
var inst_20871 = (inst_20870__$1 == null);
var state_20889__$1 = (function (){var statearr_20892 = state_20889;
(statearr_20892[(7)] = inst_20870__$1);

return statearr_20892;
})();
if(cljs.core.truth_(inst_20871)){
var statearr_20893_21006 = state_20889__$1;
(statearr_20893_21006[(1)] = (5));

} else {
var statearr_20894_21007 = state_20889__$1;
(statearr_20894_21007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (5))){
var inst_20873 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20889__$1 = state_20889;
var statearr_20895_21008 = state_20889__$1;
(statearr_20895_21008[(2)] = inst_20873);

(statearr_20895_21008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (6))){
var inst_20875 = (state_20889[(8)]);
var inst_20870 = (state_20889[(7)]);
var inst_20875__$1 = cljs.core.async.chan.call(null,(1));
var inst_20876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20877 = [inst_20870,inst_20875__$1];
var inst_20878 = (new cljs.core.PersistentVector(null,2,(5),inst_20876,inst_20877,null));
var state_20889__$1 = (function (){var statearr_20896 = state_20889;
(statearr_20896[(8)] = inst_20875__$1);

return statearr_20896;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20889__$1,(8),jobs,inst_20878);
} else {
if((state_val_20890 === (7))){
var inst_20885 = (state_20889[(2)]);
var state_20889__$1 = state_20889;
var statearr_20897_21009 = state_20889__$1;
(statearr_20897_21009[(2)] = inst_20885);

(statearr_20897_21009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (8))){
var inst_20875 = (state_20889[(8)]);
var inst_20880 = (state_20889[(2)]);
var state_20889__$1 = (function (){var statearr_20898 = state_20889;
(statearr_20898[(9)] = inst_20880);

return statearr_20898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20889__$1,(9),results,inst_20875);
} else {
if((state_val_20890 === (9))){
var inst_20882 = (state_20889[(2)]);
var state_20889__$1 = (function (){var statearr_20899 = state_20889;
(statearr_20899[(10)] = inst_20882);

return statearr_20899;
})();
var statearr_20900_21010 = state_20889__$1;
(statearr_20900_21010[(2)] = null);

(statearr_20900_21010[(1)] = (2));


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
});})(c__20428__auto___21004,jobs,results,process,async))
;
return ((function (switch__20316__auto__,c__20428__auto___21004,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0 = (function (){
var statearr_20904 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20904[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__);

(statearr_20904[(1)] = (1));

return statearr_20904;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1 = (function (state_20889){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_20889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e20905){if((e20905 instanceof Object)){
var ex__20320__auto__ = e20905;
var statearr_20906_21011 = state_20889;
(statearr_20906_21011[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21012 = state_20889;
state_20889 = G__21012;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__ = function(state_20889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1.call(this,state_20889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___21004,jobs,results,process,async))
})();
var state__20430__auto__ = (function (){var statearr_20907 = f__20429__auto__.call(null);
(statearr_20907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___21004);

return statearr_20907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___21004,jobs,results,process,async))
);


var c__20428__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto__,jobs,results,process,async){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto__,jobs,results,process,async){
return (function (state_20945){
var state_val_20946 = (state_20945[(1)]);
if((state_val_20946 === (7))){
var inst_20941 = (state_20945[(2)]);
var state_20945__$1 = state_20945;
var statearr_20947_21013 = state_20945__$1;
(statearr_20947_21013[(2)] = inst_20941);

(statearr_20947_21013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (20))){
var state_20945__$1 = state_20945;
var statearr_20948_21014 = state_20945__$1;
(statearr_20948_21014[(2)] = null);

(statearr_20948_21014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (1))){
var state_20945__$1 = state_20945;
var statearr_20949_21015 = state_20945__$1;
(statearr_20949_21015[(2)] = null);

(statearr_20949_21015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (4))){
var inst_20910 = (state_20945[(7)]);
var inst_20910__$1 = (state_20945[(2)]);
var inst_20911 = (inst_20910__$1 == null);
var state_20945__$1 = (function (){var statearr_20950 = state_20945;
(statearr_20950[(7)] = inst_20910__$1);

return statearr_20950;
})();
if(cljs.core.truth_(inst_20911)){
var statearr_20951_21016 = state_20945__$1;
(statearr_20951_21016[(1)] = (5));

} else {
var statearr_20952_21017 = state_20945__$1;
(statearr_20952_21017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (15))){
var inst_20923 = (state_20945[(8)]);
var state_20945__$1 = state_20945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20945__$1,(18),to,inst_20923);
} else {
if((state_val_20946 === (21))){
var inst_20936 = (state_20945[(2)]);
var state_20945__$1 = state_20945;
var statearr_20953_21018 = state_20945__$1;
(statearr_20953_21018[(2)] = inst_20936);

(statearr_20953_21018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (13))){
var inst_20938 = (state_20945[(2)]);
var state_20945__$1 = (function (){var statearr_20954 = state_20945;
(statearr_20954[(9)] = inst_20938);

return statearr_20954;
})();
var statearr_20955_21019 = state_20945__$1;
(statearr_20955_21019[(2)] = null);

(statearr_20955_21019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (6))){
var inst_20910 = (state_20945[(7)]);
var state_20945__$1 = state_20945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20945__$1,(11),inst_20910);
} else {
if((state_val_20946 === (17))){
var inst_20931 = (state_20945[(2)]);
var state_20945__$1 = state_20945;
if(cljs.core.truth_(inst_20931)){
var statearr_20956_21020 = state_20945__$1;
(statearr_20956_21020[(1)] = (19));

} else {
var statearr_20957_21021 = state_20945__$1;
(statearr_20957_21021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (3))){
var inst_20943 = (state_20945[(2)]);
var state_20945__$1 = state_20945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20945__$1,inst_20943);
} else {
if((state_val_20946 === (12))){
var inst_20920 = (state_20945[(10)]);
var state_20945__$1 = state_20945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20945__$1,(14),inst_20920);
} else {
if((state_val_20946 === (2))){
var state_20945__$1 = state_20945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20945__$1,(4),results);
} else {
if((state_val_20946 === (19))){
var state_20945__$1 = state_20945;
var statearr_20958_21022 = state_20945__$1;
(statearr_20958_21022[(2)] = null);

(statearr_20958_21022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (11))){
var inst_20920 = (state_20945[(2)]);
var state_20945__$1 = (function (){var statearr_20959 = state_20945;
(statearr_20959[(10)] = inst_20920);

return statearr_20959;
})();
var statearr_20960_21023 = state_20945__$1;
(statearr_20960_21023[(2)] = null);

(statearr_20960_21023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (9))){
var state_20945__$1 = state_20945;
var statearr_20961_21024 = state_20945__$1;
(statearr_20961_21024[(2)] = null);

(statearr_20961_21024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (5))){
var state_20945__$1 = state_20945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20962_21025 = state_20945__$1;
(statearr_20962_21025[(1)] = (8));

} else {
var statearr_20963_21026 = state_20945__$1;
(statearr_20963_21026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (14))){
var inst_20925 = (state_20945[(11)]);
var inst_20923 = (state_20945[(8)]);
var inst_20923__$1 = (state_20945[(2)]);
var inst_20924 = (inst_20923__$1 == null);
var inst_20925__$1 = cljs.core.not.call(null,inst_20924);
var state_20945__$1 = (function (){var statearr_20964 = state_20945;
(statearr_20964[(11)] = inst_20925__$1);

(statearr_20964[(8)] = inst_20923__$1);

return statearr_20964;
})();
if(inst_20925__$1){
var statearr_20965_21027 = state_20945__$1;
(statearr_20965_21027[(1)] = (15));

} else {
var statearr_20966_21028 = state_20945__$1;
(statearr_20966_21028[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (16))){
var inst_20925 = (state_20945[(11)]);
var state_20945__$1 = state_20945;
var statearr_20967_21029 = state_20945__$1;
(statearr_20967_21029[(2)] = inst_20925);

(statearr_20967_21029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (10))){
var inst_20917 = (state_20945[(2)]);
var state_20945__$1 = state_20945;
var statearr_20968_21030 = state_20945__$1;
(statearr_20968_21030[(2)] = inst_20917);

(statearr_20968_21030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (18))){
var inst_20928 = (state_20945[(2)]);
var state_20945__$1 = state_20945;
var statearr_20969_21031 = state_20945__$1;
(statearr_20969_21031[(2)] = inst_20928);

(statearr_20969_21031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20946 === (8))){
var inst_20914 = cljs.core.async.close_BANG_.call(null,to);
var state_20945__$1 = state_20945;
var statearr_20970_21032 = state_20945__$1;
(statearr_20970_21032[(2)] = inst_20914);

(statearr_20970_21032[(1)] = (10));


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
});})(c__20428__auto__,jobs,results,process,async))
;
return ((function (switch__20316__auto__,c__20428__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0 = (function (){
var statearr_20974 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__);

(statearr_20974[(1)] = (1));

return statearr_20974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1 = (function (state_20945){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_20945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e20975){if((e20975 instanceof Object)){
var ex__20320__auto__ = e20975;
var statearr_20976_21033 = state_20945;
(statearr_20976_21033[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21034 = state_20945;
state_20945 = G__21034;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__ = function(state_20945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1.call(this,state_20945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto__,jobs,results,process,async))
})();
var state__20430__auto__ = (function (){var statearr_20977 = f__20429__auto__.call(null);
(statearr_20977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto__);

return statearr_20977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto__,jobs,results,process,async))
);

return c__20428__auto__;
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
var args21035 = [];
var len__17877__auto___21038 = arguments.length;
var i__17878__auto___21039 = (0);
while(true){
if((i__17878__auto___21039 < len__17877__auto___21038)){
args21035.push((arguments[i__17878__auto___21039]));

var G__21040 = (i__17878__auto___21039 + (1));
i__17878__auto___21039 = G__21040;
continue;
} else {
}
break;
}

var G__21037 = args21035.length;
switch (G__21037) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21035.length)].join('')));

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
var args21042 = [];
var len__17877__auto___21045 = arguments.length;
var i__17878__auto___21046 = (0);
while(true){
if((i__17878__auto___21046 < len__17877__auto___21045)){
args21042.push((arguments[i__17878__auto___21046]));

var G__21047 = (i__17878__auto___21046 + (1));
i__17878__auto___21046 = G__21047;
continue;
} else {
}
break;
}

var G__21044 = args21042.length;
switch (G__21044) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21042.length)].join('')));

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
var args21049 = [];
var len__17877__auto___21102 = arguments.length;
var i__17878__auto___21103 = (0);
while(true){
if((i__17878__auto___21103 < len__17877__auto___21102)){
args21049.push((arguments[i__17878__auto___21103]));

var G__21104 = (i__17878__auto___21103 + (1));
i__17878__auto___21103 = G__21104;
continue;
} else {
}
break;
}

var G__21051 = args21049.length;
switch (G__21051) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21049.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20428__auto___21106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___21106,tc,fc){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___21106,tc,fc){
return (function (state_21077){
var state_val_21078 = (state_21077[(1)]);
if((state_val_21078 === (7))){
var inst_21073 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
var statearr_21079_21107 = state_21077__$1;
(statearr_21079_21107[(2)] = inst_21073);

(statearr_21079_21107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (1))){
var state_21077__$1 = state_21077;
var statearr_21080_21108 = state_21077__$1;
(statearr_21080_21108[(2)] = null);

(statearr_21080_21108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (4))){
var inst_21054 = (state_21077[(7)]);
var inst_21054__$1 = (state_21077[(2)]);
var inst_21055 = (inst_21054__$1 == null);
var state_21077__$1 = (function (){var statearr_21081 = state_21077;
(statearr_21081[(7)] = inst_21054__$1);

return statearr_21081;
})();
if(cljs.core.truth_(inst_21055)){
var statearr_21082_21109 = state_21077__$1;
(statearr_21082_21109[(1)] = (5));

} else {
var statearr_21083_21110 = state_21077__$1;
(statearr_21083_21110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (13))){
var state_21077__$1 = state_21077;
var statearr_21084_21111 = state_21077__$1;
(statearr_21084_21111[(2)] = null);

(statearr_21084_21111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (6))){
var inst_21054 = (state_21077[(7)]);
var inst_21060 = p.call(null,inst_21054);
var state_21077__$1 = state_21077;
if(cljs.core.truth_(inst_21060)){
var statearr_21085_21112 = state_21077__$1;
(statearr_21085_21112[(1)] = (9));

} else {
var statearr_21086_21113 = state_21077__$1;
(statearr_21086_21113[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (3))){
var inst_21075 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21077__$1,inst_21075);
} else {
if((state_val_21078 === (12))){
var state_21077__$1 = state_21077;
var statearr_21087_21114 = state_21077__$1;
(statearr_21087_21114[(2)] = null);

(statearr_21087_21114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (2))){
var state_21077__$1 = state_21077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21077__$1,(4),ch);
} else {
if((state_val_21078 === (11))){
var inst_21054 = (state_21077[(7)]);
var inst_21064 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21077__$1,(8),inst_21064,inst_21054);
} else {
if((state_val_21078 === (9))){
var state_21077__$1 = state_21077;
var statearr_21088_21115 = state_21077__$1;
(statearr_21088_21115[(2)] = tc);

(statearr_21088_21115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (5))){
var inst_21057 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21058 = cljs.core.async.close_BANG_.call(null,fc);
var state_21077__$1 = (function (){var statearr_21089 = state_21077;
(statearr_21089[(8)] = inst_21057);

return statearr_21089;
})();
var statearr_21090_21116 = state_21077__$1;
(statearr_21090_21116[(2)] = inst_21058);

(statearr_21090_21116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (14))){
var inst_21071 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
var statearr_21091_21117 = state_21077__$1;
(statearr_21091_21117[(2)] = inst_21071);

(statearr_21091_21117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (10))){
var state_21077__$1 = state_21077;
var statearr_21092_21118 = state_21077__$1;
(statearr_21092_21118[(2)] = fc);

(statearr_21092_21118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21078 === (8))){
var inst_21066 = (state_21077[(2)]);
var state_21077__$1 = state_21077;
if(cljs.core.truth_(inst_21066)){
var statearr_21093_21119 = state_21077__$1;
(statearr_21093_21119[(1)] = (12));

} else {
var statearr_21094_21120 = state_21077__$1;
(statearr_21094_21120[(1)] = (13));

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
});})(c__20428__auto___21106,tc,fc))
;
return ((function (switch__20316__auto__,c__20428__auto___21106,tc,fc){
return (function() {
var cljs$core$async$state_machine__20317__auto__ = null;
var cljs$core$async$state_machine__20317__auto____0 = (function (){
var statearr_21098 = [null,null,null,null,null,null,null,null,null];
(statearr_21098[(0)] = cljs$core$async$state_machine__20317__auto__);

(statearr_21098[(1)] = (1));

return statearr_21098;
});
var cljs$core$async$state_machine__20317__auto____1 = (function (state_21077){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_21077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e21099){if((e21099 instanceof Object)){
var ex__20320__auto__ = e21099;
var statearr_21100_21121 = state_21077;
(statearr_21100_21121[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21122 = state_21077;
state_21077 = G__21122;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$state_machine__20317__auto__ = function(state_21077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20317__auto____1.call(this,state_21077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20317__auto____0;
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20317__auto____1;
return cljs$core$async$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___21106,tc,fc))
})();
var state__20430__auto__ = (function (){var statearr_21101 = f__20429__auto__.call(null);
(statearr_21101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___21106);

return statearr_21101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___21106,tc,fc))
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
var c__20428__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto__){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto__){
return (function (state_21186){
var state_val_21187 = (state_21186[(1)]);
if((state_val_21187 === (7))){
var inst_21182 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21188_21209 = state_21186__$1;
(statearr_21188_21209[(2)] = inst_21182);

(statearr_21188_21209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (1))){
var inst_21166 = init;
var state_21186__$1 = (function (){var statearr_21189 = state_21186;
(statearr_21189[(7)] = inst_21166);

return statearr_21189;
})();
var statearr_21190_21210 = state_21186__$1;
(statearr_21190_21210[(2)] = null);

(statearr_21190_21210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (4))){
var inst_21169 = (state_21186[(8)]);
var inst_21169__$1 = (state_21186[(2)]);
var inst_21170 = (inst_21169__$1 == null);
var state_21186__$1 = (function (){var statearr_21191 = state_21186;
(statearr_21191[(8)] = inst_21169__$1);

return statearr_21191;
})();
if(cljs.core.truth_(inst_21170)){
var statearr_21192_21211 = state_21186__$1;
(statearr_21192_21211[(1)] = (5));

} else {
var statearr_21193_21212 = state_21186__$1;
(statearr_21193_21212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (6))){
var inst_21166 = (state_21186[(7)]);
var inst_21173 = (state_21186[(9)]);
var inst_21169 = (state_21186[(8)]);
var inst_21173__$1 = f.call(null,inst_21166,inst_21169);
var inst_21174 = cljs.core.reduced_QMARK_.call(null,inst_21173__$1);
var state_21186__$1 = (function (){var statearr_21194 = state_21186;
(statearr_21194[(9)] = inst_21173__$1);

return statearr_21194;
})();
if(inst_21174){
var statearr_21195_21213 = state_21186__$1;
(statearr_21195_21213[(1)] = (8));

} else {
var statearr_21196_21214 = state_21186__$1;
(statearr_21196_21214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (3))){
var inst_21184 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21186__$1,inst_21184);
} else {
if((state_val_21187 === (2))){
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21186__$1,(4),ch);
} else {
if((state_val_21187 === (9))){
var inst_21173 = (state_21186[(9)]);
var inst_21166 = inst_21173;
var state_21186__$1 = (function (){var statearr_21197 = state_21186;
(statearr_21197[(7)] = inst_21166);

return statearr_21197;
})();
var statearr_21198_21215 = state_21186__$1;
(statearr_21198_21215[(2)] = null);

(statearr_21198_21215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (5))){
var inst_21166 = (state_21186[(7)]);
var state_21186__$1 = state_21186;
var statearr_21199_21216 = state_21186__$1;
(statearr_21199_21216[(2)] = inst_21166);

(statearr_21199_21216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (10))){
var inst_21180 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
var statearr_21200_21217 = state_21186__$1;
(statearr_21200_21217[(2)] = inst_21180);

(statearr_21200_21217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (8))){
var inst_21173 = (state_21186[(9)]);
var inst_21176 = cljs.core.deref.call(null,inst_21173);
var state_21186__$1 = state_21186;
var statearr_21201_21218 = state_21186__$1;
(statearr_21201_21218[(2)] = inst_21176);

(statearr_21201_21218[(1)] = (10));


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
});})(c__20428__auto__))
;
return ((function (switch__20316__auto__,c__20428__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20317__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20317__auto____0 = (function (){
var statearr_21205 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21205[(0)] = cljs$core$async$reduce_$_state_machine__20317__auto__);

(statearr_21205[(1)] = (1));

return statearr_21205;
});
var cljs$core$async$reduce_$_state_machine__20317__auto____1 = (function (state_21186){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_21186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e21206){if((e21206 instanceof Object)){
var ex__20320__auto__ = e21206;
var statearr_21207_21219 = state_21186;
(statearr_21207_21219[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21220 = state_21186;
state_21186 = G__21220;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20317__auto__ = function(state_21186){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20317__auto____1.call(this,state_21186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20317__auto____0;
cljs$core$async$reduce_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20317__auto____1;
return cljs$core$async$reduce_$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto__))
})();
var state__20430__auto__ = (function (){var statearr_21208 = f__20429__auto__.call(null);
(statearr_21208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto__);

return statearr_21208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto__))
);

return c__20428__auto__;
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
var args21221 = [];
var len__17877__auto___21273 = arguments.length;
var i__17878__auto___21274 = (0);
while(true){
if((i__17878__auto___21274 < len__17877__auto___21273)){
args21221.push((arguments[i__17878__auto___21274]));

var G__21275 = (i__17878__auto___21274 + (1));
i__17878__auto___21274 = G__21275;
continue;
} else {
}
break;
}

var G__21223 = args21221.length;
switch (G__21223) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21221.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20428__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto__){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto__){
return (function (state_21248){
var state_val_21249 = (state_21248[(1)]);
if((state_val_21249 === (7))){
var inst_21230 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
var statearr_21250_21277 = state_21248__$1;
(statearr_21250_21277[(2)] = inst_21230);

(statearr_21250_21277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (1))){
var inst_21224 = cljs.core.seq.call(null,coll);
var inst_21225 = inst_21224;
var state_21248__$1 = (function (){var statearr_21251 = state_21248;
(statearr_21251[(7)] = inst_21225);

return statearr_21251;
})();
var statearr_21252_21278 = state_21248__$1;
(statearr_21252_21278[(2)] = null);

(statearr_21252_21278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (4))){
var inst_21225 = (state_21248[(7)]);
var inst_21228 = cljs.core.first.call(null,inst_21225);
var state_21248__$1 = state_21248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21248__$1,(7),ch,inst_21228);
} else {
if((state_val_21249 === (13))){
var inst_21242 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
var statearr_21253_21279 = state_21248__$1;
(statearr_21253_21279[(2)] = inst_21242);

(statearr_21253_21279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (6))){
var inst_21233 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
if(cljs.core.truth_(inst_21233)){
var statearr_21254_21280 = state_21248__$1;
(statearr_21254_21280[(1)] = (8));

} else {
var statearr_21255_21281 = state_21248__$1;
(statearr_21255_21281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (3))){
var inst_21246 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21248__$1,inst_21246);
} else {
if((state_val_21249 === (12))){
var state_21248__$1 = state_21248;
var statearr_21256_21282 = state_21248__$1;
(statearr_21256_21282[(2)] = null);

(statearr_21256_21282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (2))){
var inst_21225 = (state_21248[(7)]);
var state_21248__$1 = state_21248;
if(cljs.core.truth_(inst_21225)){
var statearr_21257_21283 = state_21248__$1;
(statearr_21257_21283[(1)] = (4));

} else {
var statearr_21258_21284 = state_21248__$1;
(statearr_21258_21284[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (11))){
var inst_21239 = cljs.core.async.close_BANG_.call(null,ch);
var state_21248__$1 = state_21248;
var statearr_21259_21285 = state_21248__$1;
(statearr_21259_21285[(2)] = inst_21239);

(statearr_21259_21285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (9))){
var state_21248__$1 = state_21248;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21260_21286 = state_21248__$1;
(statearr_21260_21286[(1)] = (11));

} else {
var statearr_21261_21287 = state_21248__$1;
(statearr_21261_21287[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (5))){
var inst_21225 = (state_21248[(7)]);
var state_21248__$1 = state_21248;
var statearr_21262_21288 = state_21248__$1;
(statearr_21262_21288[(2)] = inst_21225);

(statearr_21262_21288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (10))){
var inst_21244 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
var statearr_21263_21289 = state_21248__$1;
(statearr_21263_21289[(2)] = inst_21244);

(statearr_21263_21289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (8))){
var inst_21225 = (state_21248[(7)]);
var inst_21235 = cljs.core.next.call(null,inst_21225);
var inst_21225__$1 = inst_21235;
var state_21248__$1 = (function (){var statearr_21264 = state_21248;
(statearr_21264[(7)] = inst_21225__$1);

return statearr_21264;
})();
var statearr_21265_21290 = state_21248__$1;
(statearr_21265_21290[(2)] = null);

(statearr_21265_21290[(1)] = (2));


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
});})(c__20428__auto__))
;
return ((function (switch__20316__auto__,c__20428__auto__){
return (function() {
var cljs$core$async$state_machine__20317__auto__ = null;
var cljs$core$async$state_machine__20317__auto____0 = (function (){
var statearr_21269 = [null,null,null,null,null,null,null,null];
(statearr_21269[(0)] = cljs$core$async$state_machine__20317__auto__);

(statearr_21269[(1)] = (1));

return statearr_21269;
});
var cljs$core$async$state_machine__20317__auto____1 = (function (state_21248){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_21248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e21270){if((e21270 instanceof Object)){
var ex__20320__auto__ = e21270;
var statearr_21271_21291 = state_21248;
(statearr_21271_21291[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21292 = state_21248;
state_21248 = G__21292;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$state_machine__20317__auto__ = function(state_21248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20317__auto____1.call(this,state_21248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20317__auto____0;
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20317__auto____1;
return cljs$core$async$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto__))
})();
var state__20430__auto__ = (function (){var statearr_21272 = f__20429__auto__.call(null);
(statearr_21272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto__);

return statearr_21272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto__))
);

return c__20428__auto__;
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
var x__17474__auto__ = (((_ == null))?null:_);
var m__17475__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,_);
} else {
var m__17475__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,_);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17475__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m);
} else {
var m__17475__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async21514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21514 = (function (mult,ch,cs,meta21515){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21515 = meta21515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21516,meta21515__$1){
var self__ = this;
var _21516__$1 = this;
return (new cljs.core.async.t_cljs$core$async21514(self__.mult,self__.ch,self__.cs,meta21515__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21516){
var self__ = this;
var _21516__$1 = this;
return self__.meta21515;
});})(cs))
;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21514.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21515","meta21515",-1745718228,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21514";

cljs.core.async.t_cljs$core$async21514.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21514");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21514 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21514(mult__$1,ch__$1,cs__$1,meta21515){
return (new cljs.core.async.t_cljs$core$async21514(mult__$1,ch__$1,cs__$1,meta21515));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21514(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20428__auto___21735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___21735,cs,m,dchan,dctr,done){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___21735,cs,m,dchan,dctr,done){
return (function (state_21647){
var state_val_21648 = (state_21647[(1)]);
if((state_val_21648 === (7))){
var inst_21643 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
var statearr_21649_21736 = state_21647__$1;
(statearr_21649_21736[(2)] = inst_21643);

(statearr_21649_21736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (20))){
var inst_21548 = (state_21647[(7)]);
var inst_21558 = cljs.core.first.call(null,inst_21548);
var inst_21559 = cljs.core.nth.call(null,inst_21558,(0),null);
var inst_21560 = cljs.core.nth.call(null,inst_21558,(1),null);
var state_21647__$1 = (function (){var statearr_21650 = state_21647;
(statearr_21650[(8)] = inst_21559);

return statearr_21650;
})();
if(cljs.core.truth_(inst_21560)){
var statearr_21651_21737 = state_21647__$1;
(statearr_21651_21737[(1)] = (22));

} else {
var statearr_21652_21738 = state_21647__$1;
(statearr_21652_21738[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (27))){
var inst_21590 = (state_21647[(9)]);
var inst_21519 = (state_21647[(10)]);
var inst_21595 = (state_21647[(11)]);
var inst_21588 = (state_21647[(12)]);
var inst_21595__$1 = cljs.core._nth.call(null,inst_21588,inst_21590);
var inst_21596 = cljs.core.async.put_BANG_.call(null,inst_21595__$1,inst_21519,done);
var state_21647__$1 = (function (){var statearr_21653 = state_21647;
(statearr_21653[(11)] = inst_21595__$1);

return statearr_21653;
})();
if(cljs.core.truth_(inst_21596)){
var statearr_21654_21739 = state_21647__$1;
(statearr_21654_21739[(1)] = (30));

} else {
var statearr_21655_21740 = state_21647__$1;
(statearr_21655_21740[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (1))){
var state_21647__$1 = state_21647;
var statearr_21656_21741 = state_21647__$1;
(statearr_21656_21741[(2)] = null);

(statearr_21656_21741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (24))){
var inst_21548 = (state_21647[(7)]);
var inst_21565 = (state_21647[(2)]);
var inst_21566 = cljs.core.next.call(null,inst_21548);
var inst_21528 = inst_21566;
var inst_21529 = null;
var inst_21530 = (0);
var inst_21531 = (0);
var state_21647__$1 = (function (){var statearr_21657 = state_21647;
(statearr_21657[(13)] = inst_21531);

(statearr_21657[(14)] = inst_21565);

(statearr_21657[(15)] = inst_21529);

(statearr_21657[(16)] = inst_21530);

(statearr_21657[(17)] = inst_21528);

return statearr_21657;
})();
var statearr_21658_21742 = state_21647__$1;
(statearr_21658_21742[(2)] = null);

(statearr_21658_21742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (39))){
var state_21647__$1 = state_21647;
var statearr_21662_21743 = state_21647__$1;
(statearr_21662_21743[(2)] = null);

(statearr_21662_21743[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (4))){
var inst_21519 = (state_21647[(10)]);
var inst_21519__$1 = (state_21647[(2)]);
var inst_21520 = (inst_21519__$1 == null);
var state_21647__$1 = (function (){var statearr_21663 = state_21647;
(statearr_21663[(10)] = inst_21519__$1);

return statearr_21663;
})();
if(cljs.core.truth_(inst_21520)){
var statearr_21664_21744 = state_21647__$1;
(statearr_21664_21744[(1)] = (5));

} else {
var statearr_21665_21745 = state_21647__$1;
(statearr_21665_21745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (15))){
var inst_21531 = (state_21647[(13)]);
var inst_21529 = (state_21647[(15)]);
var inst_21530 = (state_21647[(16)]);
var inst_21528 = (state_21647[(17)]);
var inst_21544 = (state_21647[(2)]);
var inst_21545 = (inst_21531 + (1));
var tmp21659 = inst_21529;
var tmp21660 = inst_21530;
var tmp21661 = inst_21528;
var inst_21528__$1 = tmp21661;
var inst_21529__$1 = tmp21659;
var inst_21530__$1 = tmp21660;
var inst_21531__$1 = inst_21545;
var state_21647__$1 = (function (){var statearr_21666 = state_21647;
(statearr_21666[(13)] = inst_21531__$1);

(statearr_21666[(15)] = inst_21529__$1);

(statearr_21666[(16)] = inst_21530__$1);

(statearr_21666[(17)] = inst_21528__$1);

(statearr_21666[(18)] = inst_21544);

return statearr_21666;
})();
var statearr_21667_21746 = state_21647__$1;
(statearr_21667_21746[(2)] = null);

(statearr_21667_21746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (21))){
var inst_21569 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
var statearr_21671_21747 = state_21647__$1;
(statearr_21671_21747[(2)] = inst_21569);

(statearr_21671_21747[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (31))){
var inst_21595 = (state_21647[(11)]);
var inst_21599 = done.call(null,null);
var inst_21600 = cljs.core.async.untap_STAR_.call(null,m,inst_21595);
var state_21647__$1 = (function (){var statearr_21672 = state_21647;
(statearr_21672[(19)] = inst_21599);

return statearr_21672;
})();
var statearr_21673_21748 = state_21647__$1;
(statearr_21673_21748[(2)] = inst_21600);

(statearr_21673_21748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (32))){
var inst_21587 = (state_21647[(20)]);
var inst_21590 = (state_21647[(9)]);
var inst_21589 = (state_21647[(21)]);
var inst_21588 = (state_21647[(12)]);
var inst_21602 = (state_21647[(2)]);
var inst_21603 = (inst_21590 + (1));
var tmp21668 = inst_21587;
var tmp21669 = inst_21589;
var tmp21670 = inst_21588;
var inst_21587__$1 = tmp21668;
var inst_21588__$1 = tmp21670;
var inst_21589__$1 = tmp21669;
var inst_21590__$1 = inst_21603;
var state_21647__$1 = (function (){var statearr_21674 = state_21647;
(statearr_21674[(20)] = inst_21587__$1);

(statearr_21674[(9)] = inst_21590__$1);

(statearr_21674[(22)] = inst_21602);

(statearr_21674[(21)] = inst_21589__$1);

(statearr_21674[(12)] = inst_21588__$1);

return statearr_21674;
})();
var statearr_21675_21749 = state_21647__$1;
(statearr_21675_21749[(2)] = null);

(statearr_21675_21749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (40))){
var inst_21615 = (state_21647[(23)]);
var inst_21619 = done.call(null,null);
var inst_21620 = cljs.core.async.untap_STAR_.call(null,m,inst_21615);
var state_21647__$1 = (function (){var statearr_21676 = state_21647;
(statearr_21676[(24)] = inst_21619);

return statearr_21676;
})();
var statearr_21677_21750 = state_21647__$1;
(statearr_21677_21750[(2)] = inst_21620);

(statearr_21677_21750[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (33))){
var inst_21606 = (state_21647[(25)]);
var inst_21608 = cljs.core.chunked_seq_QMARK_.call(null,inst_21606);
var state_21647__$1 = state_21647;
if(inst_21608){
var statearr_21678_21751 = state_21647__$1;
(statearr_21678_21751[(1)] = (36));

} else {
var statearr_21679_21752 = state_21647__$1;
(statearr_21679_21752[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (13))){
var inst_21538 = (state_21647[(26)]);
var inst_21541 = cljs.core.async.close_BANG_.call(null,inst_21538);
var state_21647__$1 = state_21647;
var statearr_21680_21753 = state_21647__$1;
(statearr_21680_21753[(2)] = inst_21541);

(statearr_21680_21753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (22))){
var inst_21559 = (state_21647[(8)]);
var inst_21562 = cljs.core.async.close_BANG_.call(null,inst_21559);
var state_21647__$1 = state_21647;
var statearr_21681_21754 = state_21647__$1;
(statearr_21681_21754[(2)] = inst_21562);

(statearr_21681_21754[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (36))){
var inst_21606 = (state_21647[(25)]);
var inst_21610 = cljs.core.chunk_first.call(null,inst_21606);
var inst_21611 = cljs.core.chunk_rest.call(null,inst_21606);
var inst_21612 = cljs.core.count.call(null,inst_21610);
var inst_21587 = inst_21611;
var inst_21588 = inst_21610;
var inst_21589 = inst_21612;
var inst_21590 = (0);
var state_21647__$1 = (function (){var statearr_21682 = state_21647;
(statearr_21682[(20)] = inst_21587);

(statearr_21682[(9)] = inst_21590);

(statearr_21682[(21)] = inst_21589);

(statearr_21682[(12)] = inst_21588);

return statearr_21682;
})();
var statearr_21683_21755 = state_21647__$1;
(statearr_21683_21755[(2)] = null);

(statearr_21683_21755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (41))){
var inst_21606 = (state_21647[(25)]);
var inst_21622 = (state_21647[(2)]);
var inst_21623 = cljs.core.next.call(null,inst_21606);
var inst_21587 = inst_21623;
var inst_21588 = null;
var inst_21589 = (0);
var inst_21590 = (0);
var state_21647__$1 = (function (){var statearr_21684 = state_21647;
(statearr_21684[(20)] = inst_21587);

(statearr_21684[(9)] = inst_21590);

(statearr_21684[(21)] = inst_21589);

(statearr_21684[(12)] = inst_21588);

(statearr_21684[(27)] = inst_21622);

return statearr_21684;
})();
var statearr_21685_21756 = state_21647__$1;
(statearr_21685_21756[(2)] = null);

(statearr_21685_21756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (43))){
var state_21647__$1 = state_21647;
var statearr_21686_21757 = state_21647__$1;
(statearr_21686_21757[(2)] = null);

(statearr_21686_21757[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (29))){
var inst_21631 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
var statearr_21687_21758 = state_21647__$1;
(statearr_21687_21758[(2)] = inst_21631);

(statearr_21687_21758[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (44))){
var inst_21640 = (state_21647[(2)]);
var state_21647__$1 = (function (){var statearr_21688 = state_21647;
(statearr_21688[(28)] = inst_21640);

return statearr_21688;
})();
var statearr_21689_21759 = state_21647__$1;
(statearr_21689_21759[(2)] = null);

(statearr_21689_21759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (6))){
var inst_21579 = (state_21647[(29)]);
var inst_21578 = cljs.core.deref.call(null,cs);
var inst_21579__$1 = cljs.core.keys.call(null,inst_21578);
var inst_21580 = cljs.core.count.call(null,inst_21579__$1);
var inst_21581 = cljs.core.reset_BANG_.call(null,dctr,inst_21580);
var inst_21586 = cljs.core.seq.call(null,inst_21579__$1);
var inst_21587 = inst_21586;
var inst_21588 = null;
var inst_21589 = (0);
var inst_21590 = (0);
var state_21647__$1 = (function (){var statearr_21690 = state_21647;
(statearr_21690[(20)] = inst_21587);

(statearr_21690[(9)] = inst_21590);

(statearr_21690[(21)] = inst_21589);

(statearr_21690[(30)] = inst_21581);

(statearr_21690[(29)] = inst_21579__$1);

(statearr_21690[(12)] = inst_21588);

return statearr_21690;
})();
var statearr_21691_21760 = state_21647__$1;
(statearr_21691_21760[(2)] = null);

(statearr_21691_21760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (28))){
var inst_21587 = (state_21647[(20)]);
var inst_21606 = (state_21647[(25)]);
var inst_21606__$1 = cljs.core.seq.call(null,inst_21587);
var state_21647__$1 = (function (){var statearr_21692 = state_21647;
(statearr_21692[(25)] = inst_21606__$1);

return statearr_21692;
})();
if(inst_21606__$1){
var statearr_21693_21761 = state_21647__$1;
(statearr_21693_21761[(1)] = (33));

} else {
var statearr_21694_21762 = state_21647__$1;
(statearr_21694_21762[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (25))){
var inst_21590 = (state_21647[(9)]);
var inst_21589 = (state_21647[(21)]);
var inst_21592 = (inst_21590 < inst_21589);
var inst_21593 = inst_21592;
var state_21647__$1 = state_21647;
if(cljs.core.truth_(inst_21593)){
var statearr_21695_21763 = state_21647__$1;
(statearr_21695_21763[(1)] = (27));

} else {
var statearr_21696_21764 = state_21647__$1;
(statearr_21696_21764[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (34))){
var state_21647__$1 = state_21647;
var statearr_21697_21765 = state_21647__$1;
(statearr_21697_21765[(2)] = null);

(statearr_21697_21765[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (17))){
var state_21647__$1 = state_21647;
var statearr_21698_21766 = state_21647__$1;
(statearr_21698_21766[(2)] = null);

(statearr_21698_21766[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (3))){
var inst_21645 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21647__$1,inst_21645);
} else {
if((state_val_21648 === (12))){
var inst_21574 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
var statearr_21699_21767 = state_21647__$1;
(statearr_21699_21767[(2)] = inst_21574);

(statearr_21699_21767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (2))){
var state_21647__$1 = state_21647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21647__$1,(4),ch);
} else {
if((state_val_21648 === (23))){
var state_21647__$1 = state_21647;
var statearr_21700_21768 = state_21647__$1;
(statearr_21700_21768[(2)] = null);

(statearr_21700_21768[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (35))){
var inst_21629 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
var statearr_21701_21769 = state_21647__$1;
(statearr_21701_21769[(2)] = inst_21629);

(statearr_21701_21769[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (19))){
var inst_21548 = (state_21647[(7)]);
var inst_21552 = cljs.core.chunk_first.call(null,inst_21548);
var inst_21553 = cljs.core.chunk_rest.call(null,inst_21548);
var inst_21554 = cljs.core.count.call(null,inst_21552);
var inst_21528 = inst_21553;
var inst_21529 = inst_21552;
var inst_21530 = inst_21554;
var inst_21531 = (0);
var state_21647__$1 = (function (){var statearr_21702 = state_21647;
(statearr_21702[(13)] = inst_21531);

(statearr_21702[(15)] = inst_21529);

(statearr_21702[(16)] = inst_21530);

(statearr_21702[(17)] = inst_21528);

return statearr_21702;
})();
var statearr_21703_21770 = state_21647__$1;
(statearr_21703_21770[(2)] = null);

(statearr_21703_21770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (11))){
var inst_21548 = (state_21647[(7)]);
var inst_21528 = (state_21647[(17)]);
var inst_21548__$1 = cljs.core.seq.call(null,inst_21528);
var state_21647__$1 = (function (){var statearr_21704 = state_21647;
(statearr_21704[(7)] = inst_21548__$1);

return statearr_21704;
})();
if(inst_21548__$1){
var statearr_21705_21771 = state_21647__$1;
(statearr_21705_21771[(1)] = (16));

} else {
var statearr_21706_21772 = state_21647__$1;
(statearr_21706_21772[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (9))){
var inst_21576 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
var statearr_21707_21773 = state_21647__$1;
(statearr_21707_21773[(2)] = inst_21576);

(statearr_21707_21773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (5))){
var inst_21526 = cljs.core.deref.call(null,cs);
var inst_21527 = cljs.core.seq.call(null,inst_21526);
var inst_21528 = inst_21527;
var inst_21529 = null;
var inst_21530 = (0);
var inst_21531 = (0);
var state_21647__$1 = (function (){var statearr_21708 = state_21647;
(statearr_21708[(13)] = inst_21531);

(statearr_21708[(15)] = inst_21529);

(statearr_21708[(16)] = inst_21530);

(statearr_21708[(17)] = inst_21528);

return statearr_21708;
})();
var statearr_21709_21774 = state_21647__$1;
(statearr_21709_21774[(2)] = null);

(statearr_21709_21774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (14))){
var state_21647__$1 = state_21647;
var statearr_21710_21775 = state_21647__$1;
(statearr_21710_21775[(2)] = null);

(statearr_21710_21775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (45))){
var inst_21637 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
var statearr_21711_21776 = state_21647__$1;
(statearr_21711_21776[(2)] = inst_21637);

(statearr_21711_21776[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (26))){
var inst_21579 = (state_21647[(29)]);
var inst_21633 = (state_21647[(2)]);
var inst_21634 = cljs.core.seq.call(null,inst_21579);
var state_21647__$1 = (function (){var statearr_21712 = state_21647;
(statearr_21712[(31)] = inst_21633);

return statearr_21712;
})();
if(inst_21634){
var statearr_21713_21777 = state_21647__$1;
(statearr_21713_21777[(1)] = (42));

} else {
var statearr_21714_21778 = state_21647__$1;
(statearr_21714_21778[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (16))){
var inst_21548 = (state_21647[(7)]);
var inst_21550 = cljs.core.chunked_seq_QMARK_.call(null,inst_21548);
var state_21647__$1 = state_21647;
if(inst_21550){
var statearr_21715_21779 = state_21647__$1;
(statearr_21715_21779[(1)] = (19));

} else {
var statearr_21716_21780 = state_21647__$1;
(statearr_21716_21780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (38))){
var inst_21626 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
var statearr_21717_21781 = state_21647__$1;
(statearr_21717_21781[(2)] = inst_21626);

(statearr_21717_21781[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (30))){
var state_21647__$1 = state_21647;
var statearr_21718_21782 = state_21647__$1;
(statearr_21718_21782[(2)] = null);

(statearr_21718_21782[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (10))){
var inst_21531 = (state_21647[(13)]);
var inst_21529 = (state_21647[(15)]);
var inst_21537 = cljs.core._nth.call(null,inst_21529,inst_21531);
var inst_21538 = cljs.core.nth.call(null,inst_21537,(0),null);
var inst_21539 = cljs.core.nth.call(null,inst_21537,(1),null);
var state_21647__$1 = (function (){var statearr_21719 = state_21647;
(statearr_21719[(26)] = inst_21538);

return statearr_21719;
})();
if(cljs.core.truth_(inst_21539)){
var statearr_21720_21783 = state_21647__$1;
(statearr_21720_21783[(1)] = (13));

} else {
var statearr_21721_21784 = state_21647__$1;
(statearr_21721_21784[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (18))){
var inst_21572 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
var statearr_21722_21785 = state_21647__$1;
(statearr_21722_21785[(2)] = inst_21572);

(statearr_21722_21785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (42))){
var state_21647__$1 = state_21647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21647__$1,(45),dchan);
} else {
if((state_val_21648 === (37))){
var inst_21606 = (state_21647[(25)]);
var inst_21519 = (state_21647[(10)]);
var inst_21615 = (state_21647[(23)]);
var inst_21615__$1 = cljs.core.first.call(null,inst_21606);
var inst_21616 = cljs.core.async.put_BANG_.call(null,inst_21615__$1,inst_21519,done);
var state_21647__$1 = (function (){var statearr_21723 = state_21647;
(statearr_21723[(23)] = inst_21615__$1);

return statearr_21723;
})();
if(cljs.core.truth_(inst_21616)){
var statearr_21724_21786 = state_21647__$1;
(statearr_21724_21786[(1)] = (39));

} else {
var statearr_21725_21787 = state_21647__$1;
(statearr_21725_21787[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (8))){
var inst_21531 = (state_21647[(13)]);
var inst_21530 = (state_21647[(16)]);
var inst_21533 = (inst_21531 < inst_21530);
var inst_21534 = inst_21533;
var state_21647__$1 = state_21647;
if(cljs.core.truth_(inst_21534)){
var statearr_21726_21788 = state_21647__$1;
(statearr_21726_21788[(1)] = (10));

} else {
var statearr_21727_21789 = state_21647__$1;
(statearr_21727_21789[(1)] = (11));

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
});})(c__20428__auto___21735,cs,m,dchan,dctr,done))
;
return ((function (switch__20316__auto__,c__20428__auto___21735,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20317__auto__ = null;
var cljs$core$async$mult_$_state_machine__20317__auto____0 = (function (){
var statearr_21731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21731[(0)] = cljs$core$async$mult_$_state_machine__20317__auto__);

(statearr_21731[(1)] = (1));

return statearr_21731;
});
var cljs$core$async$mult_$_state_machine__20317__auto____1 = (function (state_21647){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_21647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e21732){if((e21732 instanceof Object)){
var ex__20320__auto__ = e21732;
var statearr_21733_21790 = state_21647;
(statearr_21733_21790[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21791 = state_21647;
state_21647 = G__21791;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20317__auto__ = function(state_21647){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20317__auto____1.call(this,state_21647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20317__auto____0;
cljs$core$async$mult_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20317__auto____1;
return cljs$core$async$mult_$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___21735,cs,m,dchan,dctr,done))
})();
var state__20430__auto__ = (function (){var statearr_21734 = f__20429__auto__.call(null);
(statearr_21734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___21735);

return statearr_21734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___21735,cs,m,dchan,dctr,done))
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
var args21792 = [];
var len__17877__auto___21795 = arguments.length;
var i__17878__auto___21796 = (0);
while(true){
if((i__17878__auto___21796 < len__17877__auto___21795)){
args21792.push((arguments[i__17878__auto___21796]));

var G__21797 = (i__17878__auto___21796 + (1));
i__17878__auto___21796 = G__21797;
continue;
} else {
}
break;
}

var G__21794 = args21792.length;
switch (G__21794) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21792.length)].join('')));

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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m);
} else {
var m__17475__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,state_map);
} else {
var m__17475__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,state_map);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,mode);
} else {
var m__17475__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17884__auto__ = [];
var len__17877__auto___21809 = arguments.length;
var i__17878__auto___21810 = (0);
while(true){
if((i__17878__auto___21810 < len__17877__auto___21809)){
args__17884__auto__.push((arguments[i__17878__auto___21810]));

var G__21811 = (i__17878__auto___21810 + (1));
i__17878__auto___21810 = G__21811;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((3) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17885__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21803){
var map__21804 = p__21803;
var map__21804__$1 = ((((!((map__21804 == null)))?((((map__21804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21804):map__21804);
var opts = map__21804__$1;
var statearr_21806_21812 = state;
(statearr_21806_21812[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21804,map__21804__$1,opts){
return (function (val){
var statearr_21807_21813 = state;
(statearr_21807_21813[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21804,map__21804__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21808_21814 = state;
(statearr_21808_21814[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21799){
var G__21800 = cljs.core.first.call(null,seq21799);
var seq21799__$1 = cljs.core.next.call(null,seq21799);
var G__21801 = cljs.core.first.call(null,seq21799__$1);
var seq21799__$2 = cljs.core.next.call(null,seq21799__$1);
var G__21802 = cljs.core.first.call(null,seq21799__$2);
var seq21799__$3 = cljs.core.next.call(null,seq21799__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21800,G__21801,G__21802,seq21799__$3);
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
if(typeof cljs.core.async.t_cljs$core$async21978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21978 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21979){
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
this.meta21979 = meta21979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21980,meta21979__$1){
var self__ = this;
var _21980__$1 = this;
return (new cljs.core.async.t_cljs$core$async21978(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21979__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21980){
var self__ = this;
var _21980__$1 = this;
return self__.meta21979;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21978.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async21978.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21979","meta21979",122660477,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21978";

cljs.core.async.t_cljs$core$async21978.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21978");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21978 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21978(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21979){
return (new cljs.core.async.t_cljs$core$async21978(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21979));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21978(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20428__auto___22141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___22141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___22141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22078){
var state_val_22079 = (state_22078[(1)]);
if((state_val_22079 === (7))){
var inst_21996 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
var statearr_22080_22142 = state_22078__$1;
(statearr_22080_22142[(2)] = inst_21996);

(statearr_22080_22142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (20))){
var inst_22008 = (state_22078[(7)]);
var state_22078__$1 = state_22078;
var statearr_22081_22143 = state_22078__$1;
(statearr_22081_22143[(2)] = inst_22008);

(statearr_22081_22143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (27))){
var state_22078__$1 = state_22078;
var statearr_22082_22144 = state_22078__$1;
(statearr_22082_22144[(2)] = null);

(statearr_22082_22144[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (1))){
var inst_21984 = (state_22078[(8)]);
var inst_21984__$1 = calc_state.call(null);
var inst_21986 = (inst_21984__$1 == null);
var inst_21987 = cljs.core.not.call(null,inst_21986);
var state_22078__$1 = (function (){var statearr_22083 = state_22078;
(statearr_22083[(8)] = inst_21984__$1);

return statearr_22083;
})();
if(inst_21987){
var statearr_22084_22145 = state_22078__$1;
(statearr_22084_22145[(1)] = (2));

} else {
var statearr_22085_22146 = state_22078__$1;
(statearr_22085_22146[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (24))){
var inst_22052 = (state_22078[(9)]);
var inst_22038 = (state_22078[(10)]);
var inst_22031 = (state_22078[(11)]);
var inst_22052__$1 = inst_22031.call(null,inst_22038);
var state_22078__$1 = (function (){var statearr_22086 = state_22078;
(statearr_22086[(9)] = inst_22052__$1);

return statearr_22086;
})();
if(cljs.core.truth_(inst_22052__$1)){
var statearr_22087_22147 = state_22078__$1;
(statearr_22087_22147[(1)] = (29));

} else {
var statearr_22088_22148 = state_22078__$1;
(statearr_22088_22148[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (4))){
var inst_21999 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
if(cljs.core.truth_(inst_21999)){
var statearr_22089_22149 = state_22078__$1;
(statearr_22089_22149[(1)] = (8));

} else {
var statearr_22090_22150 = state_22078__$1;
(statearr_22090_22150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (15))){
var inst_22025 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
if(cljs.core.truth_(inst_22025)){
var statearr_22091_22151 = state_22078__$1;
(statearr_22091_22151[(1)] = (19));

} else {
var statearr_22092_22152 = state_22078__$1;
(statearr_22092_22152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (21))){
var inst_22030 = (state_22078[(12)]);
var inst_22030__$1 = (state_22078[(2)]);
var inst_22031 = cljs.core.get.call(null,inst_22030__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22032 = cljs.core.get.call(null,inst_22030__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22033 = cljs.core.get.call(null,inst_22030__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22078__$1 = (function (){var statearr_22093 = state_22078;
(statearr_22093[(12)] = inst_22030__$1);

(statearr_22093[(13)] = inst_22032);

(statearr_22093[(11)] = inst_22031);

return statearr_22093;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22078__$1,(22),inst_22033);
} else {
if((state_val_22079 === (31))){
var inst_22060 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
if(cljs.core.truth_(inst_22060)){
var statearr_22094_22153 = state_22078__$1;
(statearr_22094_22153[(1)] = (32));

} else {
var statearr_22095_22154 = state_22078__$1;
(statearr_22095_22154[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (32))){
var inst_22037 = (state_22078[(14)]);
var state_22078__$1 = state_22078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22078__$1,(35),out,inst_22037);
} else {
if((state_val_22079 === (33))){
var inst_22030 = (state_22078[(12)]);
var inst_22008 = inst_22030;
var state_22078__$1 = (function (){var statearr_22096 = state_22078;
(statearr_22096[(7)] = inst_22008);

return statearr_22096;
})();
var statearr_22097_22155 = state_22078__$1;
(statearr_22097_22155[(2)] = null);

(statearr_22097_22155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (13))){
var inst_22008 = (state_22078[(7)]);
var inst_22015 = inst_22008.cljs$lang$protocol_mask$partition0$;
var inst_22016 = (inst_22015 & (64));
var inst_22017 = inst_22008.cljs$core$ISeq$;
var inst_22018 = (inst_22016) || (inst_22017);
var state_22078__$1 = state_22078;
if(cljs.core.truth_(inst_22018)){
var statearr_22098_22156 = state_22078__$1;
(statearr_22098_22156[(1)] = (16));

} else {
var statearr_22099_22157 = state_22078__$1;
(statearr_22099_22157[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (22))){
var inst_22037 = (state_22078[(14)]);
var inst_22038 = (state_22078[(10)]);
var inst_22036 = (state_22078[(2)]);
var inst_22037__$1 = cljs.core.nth.call(null,inst_22036,(0),null);
var inst_22038__$1 = cljs.core.nth.call(null,inst_22036,(1),null);
var inst_22039 = (inst_22037__$1 == null);
var inst_22040 = cljs.core._EQ_.call(null,inst_22038__$1,change);
var inst_22041 = (inst_22039) || (inst_22040);
var state_22078__$1 = (function (){var statearr_22100 = state_22078;
(statearr_22100[(14)] = inst_22037__$1);

(statearr_22100[(10)] = inst_22038__$1);

return statearr_22100;
})();
if(cljs.core.truth_(inst_22041)){
var statearr_22101_22158 = state_22078__$1;
(statearr_22101_22158[(1)] = (23));

} else {
var statearr_22102_22159 = state_22078__$1;
(statearr_22102_22159[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (36))){
var inst_22030 = (state_22078[(12)]);
var inst_22008 = inst_22030;
var state_22078__$1 = (function (){var statearr_22103 = state_22078;
(statearr_22103[(7)] = inst_22008);

return statearr_22103;
})();
var statearr_22104_22160 = state_22078__$1;
(statearr_22104_22160[(2)] = null);

(statearr_22104_22160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (29))){
var inst_22052 = (state_22078[(9)]);
var state_22078__$1 = state_22078;
var statearr_22105_22161 = state_22078__$1;
(statearr_22105_22161[(2)] = inst_22052);

(statearr_22105_22161[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (6))){
var state_22078__$1 = state_22078;
var statearr_22106_22162 = state_22078__$1;
(statearr_22106_22162[(2)] = false);

(statearr_22106_22162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (28))){
var inst_22048 = (state_22078[(2)]);
var inst_22049 = calc_state.call(null);
var inst_22008 = inst_22049;
var state_22078__$1 = (function (){var statearr_22107 = state_22078;
(statearr_22107[(7)] = inst_22008);

(statearr_22107[(15)] = inst_22048);

return statearr_22107;
})();
var statearr_22108_22163 = state_22078__$1;
(statearr_22108_22163[(2)] = null);

(statearr_22108_22163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (25))){
var inst_22074 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
var statearr_22109_22164 = state_22078__$1;
(statearr_22109_22164[(2)] = inst_22074);

(statearr_22109_22164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (34))){
var inst_22072 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
var statearr_22110_22165 = state_22078__$1;
(statearr_22110_22165[(2)] = inst_22072);

(statearr_22110_22165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (17))){
var state_22078__$1 = state_22078;
var statearr_22111_22166 = state_22078__$1;
(statearr_22111_22166[(2)] = false);

(statearr_22111_22166[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (3))){
var state_22078__$1 = state_22078;
var statearr_22112_22167 = state_22078__$1;
(statearr_22112_22167[(2)] = false);

(statearr_22112_22167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (12))){
var inst_22076 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22078__$1,inst_22076);
} else {
if((state_val_22079 === (2))){
var inst_21984 = (state_22078[(8)]);
var inst_21989 = inst_21984.cljs$lang$protocol_mask$partition0$;
var inst_21990 = (inst_21989 & (64));
var inst_21991 = inst_21984.cljs$core$ISeq$;
var inst_21992 = (inst_21990) || (inst_21991);
var state_22078__$1 = state_22078;
if(cljs.core.truth_(inst_21992)){
var statearr_22113_22168 = state_22078__$1;
(statearr_22113_22168[(1)] = (5));

} else {
var statearr_22114_22169 = state_22078__$1;
(statearr_22114_22169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (23))){
var inst_22037 = (state_22078[(14)]);
var inst_22043 = (inst_22037 == null);
var state_22078__$1 = state_22078;
if(cljs.core.truth_(inst_22043)){
var statearr_22115_22170 = state_22078__$1;
(statearr_22115_22170[(1)] = (26));

} else {
var statearr_22116_22171 = state_22078__$1;
(statearr_22116_22171[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (35))){
var inst_22063 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
if(cljs.core.truth_(inst_22063)){
var statearr_22117_22172 = state_22078__$1;
(statearr_22117_22172[(1)] = (36));

} else {
var statearr_22118_22173 = state_22078__$1;
(statearr_22118_22173[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (19))){
var inst_22008 = (state_22078[(7)]);
var inst_22027 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22008);
var state_22078__$1 = state_22078;
var statearr_22119_22174 = state_22078__$1;
(statearr_22119_22174[(2)] = inst_22027);

(statearr_22119_22174[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (11))){
var inst_22008 = (state_22078[(7)]);
var inst_22012 = (inst_22008 == null);
var inst_22013 = cljs.core.not.call(null,inst_22012);
var state_22078__$1 = state_22078;
if(inst_22013){
var statearr_22120_22175 = state_22078__$1;
(statearr_22120_22175[(1)] = (13));

} else {
var statearr_22121_22176 = state_22078__$1;
(statearr_22121_22176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (9))){
var inst_21984 = (state_22078[(8)]);
var state_22078__$1 = state_22078;
var statearr_22122_22177 = state_22078__$1;
(statearr_22122_22177[(2)] = inst_21984);

(statearr_22122_22177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (5))){
var state_22078__$1 = state_22078;
var statearr_22123_22178 = state_22078__$1;
(statearr_22123_22178[(2)] = true);

(statearr_22123_22178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (14))){
var state_22078__$1 = state_22078;
var statearr_22124_22179 = state_22078__$1;
(statearr_22124_22179[(2)] = false);

(statearr_22124_22179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (26))){
var inst_22038 = (state_22078[(10)]);
var inst_22045 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22038);
var state_22078__$1 = state_22078;
var statearr_22125_22180 = state_22078__$1;
(statearr_22125_22180[(2)] = inst_22045);

(statearr_22125_22180[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (16))){
var state_22078__$1 = state_22078;
var statearr_22126_22181 = state_22078__$1;
(statearr_22126_22181[(2)] = true);

(statearr_22126_22181[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (38))){
var inst_22068 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
var statearr_22127_22182 = state_22078__$1;
(statearr_22127_22182[(2)] = inst_22068);

(statearr_22127_22182[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (30))){
var inst_22032 = (state_22078[(13)]);
var inst_22038 = (state_22078[(10)]);
var inst_22031 = (state_22078[(11)]);
var inst_22055 = cljs.core.empty_QMARK_.call(null,inst_22031);
var inst_22056 = inst_22032.call(null,inst_22038);
var inst_22057 = cljs.core.not.call(null,inst_22056);
var inst_22058 = (inst_22055) && (inst_22057);
var state_22078__$1 = state_22078;
var statearr_22128_22183 = state_22078__$1;
(statearr_22128_22183[(2)] = inst_22058);

(statearr_22128_22183[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (10))){
var inst_21984 = (state_22078[(8)]);
var inst_22004 = (state_22078[(2)]);
var inst_22005 = cljs.core.get.call(null,inst_22004,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22006 = cljs.core.get.call(null,inst_22004,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22007 = cljs.core.get.call(null,inst_22004,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22008 = inst_21984;
var state_22078__$1 = (function (){var statearr_22129 = state_22078;
(statearr_22129[(16)] = inst_22006);

(statearr_22129[(17)] = inst_22007);

(statearr_22129[(7)] = inst_22008);

(statearr_22129[(18)] = inst_22005);

return statearr_22129;
})();
var statearr_22130_22184 = state_22078__$1;
(statearr_22130_22184[(2)] = null);

(statearr_22130_22184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (18))){
var inst_22022 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
var statearr_22131_22185 = state_22078__$1;
(statearr_22131_22185[(2)] = inst_22022);

(statearr_22131_22185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (37))){
var state_22078__$1 = state_22078;
var statearr_22132_22186 = state_22078__$1;
(statearr_22132_22186[(2)] = null);

(statearr_22132_22186[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (8))){
var inst_21984 = (state_22078[(8)]);
var inst_22001 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21984);
var state_22078__$1 = state_22078;
var statearr_22133_22187 = state_22078__$1;
(statearr_22133_22187[(2)] = inst_22001);

(statearr_22133_22187[(1)] = (10));


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
});})(c__20428__auto___22141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20316__auto__,c__20428__auto___22141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20317__auto__ = null;
var cljs$core$async$mix_$_state_machine__20317__auto____0 = (function (){
var statearr_22137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22137[(0)] = cljs$core$async$mix_$_state_machine__20317__auto__);

(statearr_22137[(1)] = (1));

return statearr_22137;
});
var cljs$core$async$mix_$_state_machine__20317__auto____1 = (function (state_22078){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_22078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e22138){if((e22138 instanceof Object)){
var ex__20320__auto__ = e22138;
var statearr_22139_22188 = state_22078;
(statearr_22139_22188[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22189 = state_22078;
state_22078 = G__22189;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20317__auto__ = function(state_22078){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20317__auto____1.call(this,state_22078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20317__auto____0;
cljs$core$async$mix_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20317__auto____1;
return cljs$core$async$mix_$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___22141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20430__auto__ = (function (){var statearr_22140 = f__20429__auto__.call(null);
(statearr_22140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___22141);

return statearr_22140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___22141,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17475__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22190 = [];
var len__17877__auto___22193 = arguments.length;
var i__17878__auto___22194 = (0);
while(true){
if((i__17878__auto___22194 < len__17877__auto___22193)){
args22190.push((arguments[i__17878__auto___22194]));

var G__22195 = (i__17878__auto___22194 + (1));
i__17878__auto___22194 = G__22195;
continue;
} else {
}
break;
}

var G__22192 = args22190.length;
switch (G__22192) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22190.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p);
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
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v);
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
var args22198 = [];
var len__17877__auto___22323 = arguments.length;
var i__17878__auto___22324 = (0);
while(true){
if((i__17878__auto___22324 < len__17877__auto___22323)){
args22198.push((arguments[i__17878__auto___22324]));

var G__22325 = (i__17878__auto___22324 + (1));
i__17878__auto___22324 = G__22325;
continue;
} else {
}
break;
}

var G__22200 = args22198.length;
switch (G__22200) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22198.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16819__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16819__auto__,mults){
return (function (p1__22197_SHARP_){
if(cljs.core.truth_(p1__22197_SHARP_.call(null,topic))){
return p1__22197_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22197_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16819__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22201 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22202){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22202 = meta22202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22203,meta22202__$1){
var self__ = this;
var _22203__$1 = this;
return (new cljs.core.async.t_cljs$core$async22201(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22202__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22201.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22203){
var self__ = this;
var _22203__$1 = this;
return self__.meta22202;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22201.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22201.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22201.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22201.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22201.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22201.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22201.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22201.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22202","meta22202",1365753202,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22201";

cljs.core.async.t_cljs$core$async22201.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22201");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22201 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22201(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22202){
return (new cljs.core.async.t_cljs$core$async22201(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22202));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22201(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20428__auto___22327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___22327,mults,ensure_mult,p){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___22327,mults,ensure_mult,p){
return (function (state_22275){
var state_val_22276 = (state_22275[(1)]);
if((state_val_22276 === (7))){
var inst_22271 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22277_22328 = state_22275__$1;
(statearr_22277_22328[(2)] = inst_22271);

(statearr_22277_22328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (20))){
var state_22275__$1 = state_22275;
var statearr_22278_22329 = state_22275__$1;
(statearr_22278_22329[(2)] = null);

(statearr_22278_22329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (1))){
var state_22275__$1 = state_22275;
var statearr_22279_22330 = state_22275__$1;
(statearr_22279_22330[(2)] = null);

(statearr_22279_22330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (24))){
var inst_22254 = (state_22275[(7)]);
var inst_22263 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22254);
var state_22275__$1 = state_22275;
var statearr_22280_22331 = state_22275__$1;
(statearr_22280_22331[(2)] = inst_22263);

(statearr_22280_22331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (4))){
var inst_22206 = (state_22275[(8)]);
var inst_22206__$1 = (state_22275[(2)]);
var inst_22207 = (inst_22206__$1 == null);
var state_22275__$1 = (function (){var statearr_22281 = state_22275;
(statearr_22281[(8)] = inst_22206__$1);

return statearr_22281;
})();
if(cljs.core.truth_(inst_22207)){
var statearr_22282_22332 = state_22275__$1;
(statearr_22282_22332[(1)] = (5));

} else {
var statearr_22283_22333 = state_22275__$1;
(statearr_22283_22333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (15))){
var inst_22248 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22284_22334 = state_22275__$1;
(statearr_22284_22334[(2)] = inst_22248);

(statearr_22284_22334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (21))){
var inst_22268 = (state_22275[(2)]);
var state_22275__$1 = (function (){var statearr_22285 = state_22275;
(statearr_22285[(9)] = inst_22268);

return statearr_22285;
})();
var statearr_22286_22335 = state_22275__$1;
(statearr_22286_22335[(2)] = null);

(statearr_22286_22335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (13))){
var inst_22230 = (state_22275[(10)]);
var inst_22232 = cljs.core.chunked_seq_QMARK_.call(null,inst_22230);
var state_22275__$1 = state_22275;
if(inst_22232){
var statearr_22287_22336 = state_22275__$1;
(statearr_22287_22336[(1)] = (16));

} else {
var statearr_22288_22337 = state_22275__$1;
(statearr_22288_22337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (22))){
var inst_22260 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
if(cljs.core.truth_(inst_22260)){
var statearr_22289_22338 = state_22275__$1;
(statearr_22289_22338[(1)] = (23));

} else {
var statearr_22290_22339 = state_22275__$1;
(statearr_22290_22339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (6))){
var inst_22256 = (state_22275[(11)]);
var inst_22206 = (state_22275[(8)]);
var inst_22254 = (state_22275[(7)]);
var inst_22254__$1 = topic_fn.call(null,inst_22206);
var inst_22255 = cljs.core.deref.call(null,mults);
var inst_22256__$1 = cljs.core.get.call(null,inst_22255,inst_22254__$1);
var state_22275__$1 = (function (){var statearr_22291 = state_22275;
(statearr_22291[(11)] = inst_22256__$1);

(statearr_22291[(7)] = inst_22254__$1);

return statearr_22291;
})();
if(cljs.core.truth_(inst_22256__$1)){
var statearr_22292_22340 = state_22275__$1;
(statearr_22292_22340[(1)] = (19));

} else {
var statearr_22293_22341 = state_22275__$1;
(statearr_22293_22341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (25))){
var inst_22265 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22294_22342 = state_22275__$1;
(statearr_22294_22342[(2)] = inst_22265);

(statearr_22294_22342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (17))){
var inst_22230 = (state_22275[(10)]);
var inst_22239 = cljs.core.first.call(null,inst_22230);
var inst_22240 = cljs.core.async.muxch_STAR_.call(null,inst_22239);
var inst_22241 = cljs.core.async.close_BANG_.call(null,inst_22240);
var inst_22242 = cljs.core.next.call(null,inst_22230);
var inst_22216 = inst_22242;
var inst_22217 = null;
var inst_22218 = (0);
var inst_22219 = (0);
var state_22275__$1 = (function (){var statearr_22295 = state_22275;
(statearr_22295[(12)] = inst_22219);

(statearr_22295[(13)] = inst_22216);

(statearr_22295[(14)] = inst_22218);

(statearr_22295[(15)] = inst_22217);

(statearr_22295[(16)] = inst_22241);

return statearr_22295;
})();
var statearr_22296_22343 = state_22275__$1;
(statearr_22296_22343[(2)] = null);

(statearr_22296_22343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (3))){
var inst_22273 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22275__$1,inst_22273);
} else {
if((state_val_22276 === (12))){
var inst_22250 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22297_22344 = state_22275__$1;
(statearr_22297_22344[(2)] = inst_22250);

(statearr_22297_22344[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (2))){
var state_22275__$1 = state_22275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22275__$1,(4),ch);
} else {
if((state_val_22276 === (23))){
var state_22275__$1 = state_22275;
var statearr_22298_22345 = state_22275__$1;
(statearr_22298_22345[(2)] = null);

(statearr_22298_22345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (19))){
var inst_22256 = (state_22275[(11)]);
var inst_22206 = (state_22275[(8)]);
var inst_22258 = cljs.core.async.muxch_STAR_.call(null,inst_22256);
var state_22275__$1 = state_22275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22275__$1,(22),inst_22258,inst_22206);
} else {
if((state_val_22276 === (11))){
var inst_22230 = (state_22275[(10)]);
var inst_22216 = (state_22275[(13)]);
var inst_22230__$1 = cljs.core.seq.call(null,inst_22216);
var state_22275__$1 = (function (){var statearr_22299 = state_22275;
(statearr_22299[(10)] = inst_22230__$1);

return statearr_22299;
})();
if(inst_22230__$1){
var statearr_22300_22346 = state_22275__$1;
(statearr_22300_22346[(1)] = (13));

} else {
var statearr_22301_22347 = state_22275__$1;
(statearr_22301_22347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (9))){
var inst_22252 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22302_22348 = state_22275__$1;
(statearr_22302_22348[(2)] = inst_22252);

(statearr_22302_22348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (5))){
var inst_22213 = cljs.core.deref.call(null,mults);
var inst_22214 = cljs.core.vals.call(null,inst_22213);
var inst_22215 = cljs.core.seq.call(null,inst_22214);
var inst_22216 = inst_22215;
var inst_22217 = null;
var inst_22218 = (0);
var inst_22219 = (0);
var state_22275__$1 = (function (){var statearr_22303 = state_22275;
(statearr_22303[(12)] = inst_22219);

(statearr_22303[(13)] = inst_22216);

(statearr_22303[(14)] = inst_22218);

(statearr_22303[(15)] = inst_22217);

return statearr_22303;
})();
var statearr_22304_22349 = state_22275__$1;
(statearr_22304_22349[(2)] = null);

(statearr_22304_22349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (14))){
var state_22275__$1 = state_22275;
var statearr_22308_22350 = state_22275__$1;
(statearr_22308_22350[(2)] = null);

(statearr_22308_22350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (16))){
var inst_22230 = (state_22275[(10)]);
var inst_22234 = cljs.core.chunk_first.call(null,inst_22230);
var inst_22235 = cljs.core.chunk_rest.call(null,inst_22230);
var inst_22236 = cljs.core.count.call(null,inst_22234);
var inst_22216 = inst_22235;
var inst_22217 = inst_22234;
var inst_22218 = inst_22236;
var inst_22219 = (0);
var state_22275__$1 = (function (){var statearr_22309 = state_22275;
(statearr_22309[(12)] = inst_22219);

(statearr_22309[(13)] = inst_22216);

(statearr_22309[(14)] = inst_22218);

(statearr_22309[(15)] = inst_22217);

return statearr_22309;
})();
var statearr_22310_22351 = state_22275__$1;
(statearr_22310_22351[(2)] = null);

(statearr_22310_22351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (10))){
var inst_22219 = (state_22275[(12)]);
var inst_22216 = (state_22275[(13)]);
var inst_22218 = (state_22275[(14)]);
var inst_22217 = (state_22275[(15)]);
var inst_22224 = cljs.core._nth.call(null,inst_22217,inst_22219);
var inst_22225 = cljs.core.async.muxch_STAR_.call(null,inst_22224);
var inst_22226 = cljs.core.async.close_BANG_.call(null,inst_22225);
var inst_22227 = (inst_22219 + (1));
var tmp22305 = inst_22216;
var tmp22306 = inst_22218;
var tmp22307 = inst_22217;
var inst_22216__$1 = tmp22305;
var inst_22217__$1 = tmp22307;
var inst_22218__$1 = tmp22306;
var inst_22219__$1 = inst_22227;
var state_22275__$1 = (function (){var statearr_22311 = state_22275;
(statearr_22311[(12)] = inst_22219__$1);

(statearr_22311[(13)] = inst_22216__$1);

(statearr_22311[(17)] = inst_22226);

(statearr_22311[(14)] = inst_22218__$1);

(statearr_22311[(15)] = inst_22217__$1);

return statearr_22311;
})();
var statearr_22312_22352 = state_22275__$1;
(statearr_22312_22352[(2)] = null);

(statearr_22312_22352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (18))){
var inst_22245 = (state_22275[(2)]);
var state_22275__$1 = state_22275;
var statearr_22313_22353 = state_22275__$1;
(statearr_22313_22353[(2)] = inst_22245);

(statearr_22313_22353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22276 === (8))){
var inst_22219 = (state_22275[(12)]);
var inst_22218 = (state_22275[(14)]);
var inst_22221 = (inst_22219 < inst_22218);
var inst_22222 = inst_22221;
var state_22275__$1 = state_22275;
if(cljs.core.truth_(inst_22222)){
var statearr_22314_22354 = state_22275__$1;
(statearr_22314_22354[(1)] = (10));

} else {
var statearr_22315_22355 = state_22275__$1;
(statearr_22315_22355[(1)] = (11));

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
});})(c__20428__auto___22327,mults,ensure_mult,p))
;
return ((function (switch__20316__auto__,c__20428__auto___22327,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20317__auto__ = null;
var cljs$core$async$state_machine__20317__auto____0 = (function (){
var statearr_22319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22319[(0)] = cljs$core$async$state_machine__20317__auto__);

(statearr_22319[(1)] = (1));

return statearr_22319;
});
var cljs$core$async$state_machine__20317__auto____1 = (function (state_22275){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_22275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e22320){if((e22320 instanceof Object)){
var ex__20320__auto__ = e22320;
var statearr_22321_22356 = state_22275;
(statearr_22321_22356[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22357 = state_22275;
state_22275 = G__22357;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$state_machine__20317__auto__ = function(state_22275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20317__auto____1.call(this,state_22275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20317__auto____0;
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20317__auto____1;
return cljs$core$async$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___22327,mults,ensure_mult,p))
})();
var state__20430__auto__ = (function (){var statearr_22322 = f__20429__auto__.call(null);
(statearr_22322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___22327);

return statearr_22322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___22327,mults,ensure_mult,p))
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
var args22358 = [];
var len__17877__auto___22361 = arguments.length;
var i__17878__auto___22362 = (0);
while(true){
if((i__17878__auto___22362 < len__17877__auto___22361)){
args22358.push((arguments[i__17878__auto___22362]));

var G__22363 = (i__17878__auto___22362 + (1));
i__17878__auto___22362 = G__22363;
continue;
} else {
}
break;
}

var G__22360 = args22358.length;
switch (G__22360) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22358.length)].join('')));

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
var args22365 = [];
var len__17877__auto___22368 = arguments.length;
var i__17878__auto___22369 = (0);
while(true){
if((i__17878__auto___22369 < len__17877__auto___22368)){
args22365.push((arguments[i__17878__auto___22369]));

var G__22370 = (i__17878__auto___22369 + (1));
i__17878__auto___22369 = G__22370;
continue;
} else {
}
break;
}

var G__22367 = args22365.length;
switch (G__22367) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22365.length)].join('')));

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
var args22372 = [];
var len__17877__auto___22443 = arguments.length;
var i__17878__auto___22444 = (0);
while(true){
if((i__17878__auto___22444 < len__17877__auto___22443)){
args22372.push((arguments[i__17878__auto___22444]));

var G__22445 = (i__17878__auto___22444 + (1));
i__17878__auto___22444 = G__22445;
continue;
} else {
}
break;
}

var G__22374 = args22372.length;
switch (G__22374) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22372.length)].join('')));

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
var c__20428__auto___22447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___22447,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___22447,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22413){
var state_val_22414 = (state_22413[(1)]);
if((state_val_22414 === (7))){
var state_22413__$1 = state_22413;
var statearr_22415_22448 = state_22413__$1;
(statearr_22415_22448[(2)] = null);

(statearr_22415_22448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (1))){
var state_22413__$1 = state_22413;
var statearr_22416_22449 = state_22413__$1;
(statearr_22416_22449[(2)] = null);

(statearr_22416_22449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (4))){
var inst_22377 = (state_22413[(7)]);
var inst_22379 = (inst_22377 < cnt);
var state_22413__$1 = state_22413;
if(cljs.core.truth_(inst_22379)){
var statearr_22417_22450 = state_22413__$1;
(statearr_22417_22450[(1)] = (6));

} else {
var statearr_22418_22451 = state_22413__$1;
(statearr_22418_22451[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (15))){
var inst_22409 = (state_22413[(2)]);
var state_22413__$1 = state_22413;
var statearr_22419_22452 = state_22413__$1;
(statearr_22419_22452[(2)] = inst_22409);

(statearr_22419_22452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (13))){
var inst_22402 = cljs.core.async.close_BANG_.call(null,out);
var state_22413__$1 = state_22413;
var statearr_22420_22453 = state_22413__$1;
(statearr_22420_22453[(2)] = inst_22402);

(statearr_22420_22453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (6))){
var state_22413__$1 = state_22413;
var statearr_22421_22454 = state_22413__$1;
(statearr_22421_22454[(2)] = null);

(statearr_22421_22454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (3))){
var inst_22411 = (state_22413[(2)]);
var state_22413__$1 = state_22413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22413__$1,inst_22411);
} else {
if((state_val_22414 === (12))){
var inst_22399 = (state_22413[(8)]);
var inst_22399__$1 = (state_22413[(2)]);
var inst_22400 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22399__$1);
var state_22413__$1 = (function (){var statearr_22422 = state_22413;
(statearr_22422[(8)] = inst_22399__$1);

return statearr_22422;
})();
if(cljs.core.truth_(inst_22400)){
var statearr_22423_22455 = state_22413__$1;
(statearr_22423_22455[(1)] = (13));

} else {
var statearr_22424_22456 = state_22413__$1;
(statearr_22424_22456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (2))){
var inst_22376 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22377 = (0);
var state_22413__$1 = (function (){var statearr_22425 = state_22413;
(statearr_22425[(7)] = inst_22377);

(statearr_22425[(9)] = inst_22376);

return statearr_22425;
})();
var statearr_22426_22457 = state_22413__$1;
(statearr_22426_22457[(2)] = null);

(statearr_22426_22457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (11))){
var inst_22377 = (state_22413[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22413,(10),Object,null,(9));
var inst_22386 = chs__$1.call(null,inst_22377);
var inst_22387 = done.call(null,inst_22377);
var inst_22388 = cljs.core.async.take_BANG_.call(null,inst_22386,inst_22387);
var state_22413__$1 = state_22413;
var statearr_22427_22458 = state_22413__$1;
(statearr_22427_22458[(2)] = inst_22388);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22413__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (9))){
var inst_22377 = (state_22413[(7)]);
var inst_22390 = (state_22413[(2)]);
var inst_22391 = (inst_22377 + (1));
var inst_22377__$1 = inst_22391;
var state_22413__$1 = (function (){var statearr_22428 = state_22413;
(statearr_22428[(7)] = inst_22377__$1);

(statearr_22428[(10)] = inst_22390);

return statearr_22428;
})();
var statearr_22429_22459 = state_22413__$1;
(statearr_22429_22459[(2)] = null);

(statearr_22429_22459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (5))){
var inst_22397 = (state_22413[(2)]);
var state_22413__$1 = (function (){var statearr_22430 = state_22413;
(statearr_22430[(11)] = inst_22397);

return statearr_22430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22413__$1,(12),dchan);
} else {
if((state_val_22414 === (14))){
var inst_22399 = (state_22413[(8)]);
var inst_22404 = cljs.core.apply.call(null,f,inst_22399);
var state_22413__$1 = state_22413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22413__$1,(16),out,inst_22404);
} else {
if((state_val_22414 === (16))){
var inst_22406 = (state_22413[(2)]);
var state_22413__$1 = (function (){var statearr_22431 = state_22413;
(statearr_22431[(12)] = inst_22406);

return statearr_22431;
})();
var statearr_22432_22460 = state_22413__$1;
(statearr_22432_22460[(2)] = null);

(statearr_22432_22460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (10))){
var inst_22381 = (state_22413[(2)]);
var inst_22382 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22413__$1 = (function (){var statearr_22433 = state_22413;
(statearr_22433[(13)] = inst_22381);

return statearr_22433;
})();
var statearr_22434_22461 = state_22413__$1;
(statearr_22434_22461[(2)] = inst_22382);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22413__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (8))){
var inst_22395 = (state_22413[(2)]);
var state_22413__$1 = state_22413;
var statearr_22435_22462 = state_22413__$1;
(statearr_22435_22462[(2)] = inst_22395);

(statearr_22435_22462[(1)] = (5));


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
});})(c__20428__auto___22447,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20316__auto__,c__20428__auto___22447,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20317__auto__ = null;
var cljs$core$async$state_machine__20317__auto____0 = (function (){
var statearr_22439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22439[(0)] = cljs$core$async$state_machine__20317__auto__);

(statearr_22439[(1)] = (1));

return statearr_22439;
});
var cljs$core$async$state_machine__20317__auto____1 = (function (state_22413){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_22413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e22440){if((e22440 instanceof Object)){
var ex__20320__auto__ = e22440;
var statearr_22441_22463 = state_22413;
(statearr_22441_22463[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22464 = state_22413;
state_22413 = G__22464;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$state_machine__20317__auto__ = function(state_22413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20317__auto____1.call(this,state_22413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20317__auto____0;
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20317__auto____1;
return cljs$core$async$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___22447,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20430__auto__ = (function (){var statearr_22442 = f__20429__auto__.call(null);
(statearr_22442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___22447);

return statearr_22442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___22447,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22466 = [];
var len__17877__auto___22522 = arguments.length;
var i__17878__auto___22523 = (0);
while(true){
if((i__17878__auto___22523 < len__17877__auto___22522)){
args22466.push((arguments[i__17878__auto___22523]));

var G__22524 = (i__17878__auto___22523 + (1));
i__17878__auto___22523 = G__22524;
continue;
} else {
}
break;
}

var G__22468 = args22466.length;
switch (G__22468) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22466.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20428__auto___22526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___22526,out){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___22526,out){
return (function (state_22498){
var state_val_22499 = (state_22498[(1)]);
if((state_val_22499 === (7))){
var inst_22477 = (state_22498[(7)]);
var inst_22478 = (state_22498[(8)]);
var inst_22477__$1 = (state_22498[(2)]);
var inst_22478__$1 = cljs.core.nth.call(null,inst_22477__$1,(0),null);
var inst_22479 = cljs.core.nth.call(null,inst_22477__$1,(1),null);
var inst_22480 = (inst_22478__$1 == null);
var state_22498__$1 = (function (){var statearr_22500 = state_22498;
(statearr_22500[(7)] = inst_22477__$1);

(statearr_22500[(9)] = inst_22479);

(statearr_22500[(8)] = inst_22478__$1);

return statearr_22500;
})();
if(cljs.core.truth_(inst_22480)){
var statearr_22501_22527 = state_22498__$1;
(statearr_22501_22527[(1)] = (8));

} else {
var statearr_22502_22528 = state_22498__$1;
(statearr_22502_22528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (1))){
var inst_22469 = cljs.core.vec.call(null,chs);
var inst_22470 = inst_22469;
var state_22498__$1 = (function (){var statearr_22503 = state_22498;
(statearr_22503[(10)] = inst_22470);

return statearr_22503;
})();
var statearr_22504_22529 = state_22498__$1;
(statearr_22504_22529[(2)] = null);

(statearr_22504_22529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (4))){
var inst_22470 = (state_22498[(10)]);
var state_22498__$1 = state_22498;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22498__$1,(7),inst_22470);
} else {
if((state_val_22499 === (6))){
var inst_22494 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
var statearr_22505_22530 = state_22498__$1;
(statearr_22505_22530[(2)] = inst_22494);

(statearr_22505_22530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (3))){
var inst_22496 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22498__$1,inst_22496);
} else {
if((state_val_22499 === (2))){
var inst_22470 = (state_22498[(10)]);
var inst_22472 = cljs.core.count.call(null,inst_22470);
var inst_22473 = (inst_22472 > (0));
var state_22498__$1 = state_22498;
if(cljs.core.truth_(inst_22473)){
var statearr_22507_22531 = state_22498__$1;
(statearr_22507_22531[(1)] = (4));

} else {
var statearr_22508_22532 = state_22498__$1;
(statearr_22508_22532[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (11))){
var inst_22470 = (state_22498[(10)]);
var inst_22487 = (state_22498[(2)]);
var tmp22506 = inst_22470;
var inst_22470__$1 = tmp22506;
var state_22498__$1 = (function (){var statearr_22509 = state_22498;
(statearr_22509[(11)] = inst_22487);

(statearr_22509[(10)] = inst_22470__$1);

return statearr_22509;
})();
var statearr_22510_22533 = state_22498__$1;
(statearr_22510_22533[(2)] = null);

(statearr_22510_22533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (9))){
var inst_22478 = (state_22498[(8)]);
var state_22498__$1 = state_22498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22498__$1,(11),out,inst_22478);
} else {
if((state_val_22499 === (5))){
var inst_22492 = cljs.core.async.close_BANG_.call(null,out);
var state_22498__$1 = state_22498;
var statearr_22511_22534 = state_22498__$1;
(statearr_22511_22534[(2)] = inst_22492);

(statearr_22511_22534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (10))){
var inst_22490 = (state_22498[(2)]);
var state_22498__$1 = state_22498;
var statearr_22512_22535 = state_22498__$1;
(statearr_22512_22535[(2)] = inst_22490);

(statearr_22512_22535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22499 === (8))){
var inst_22477 = (state_22498[(7)]);
var inst_22479 = (state_22498[(9)]);
var inst_22478 = (state_22498[(8)]);
var inst_22470 = (state_22498[(10)]);
var inst_22482 = (function (){var cs = inst_22470;
var vec__22475 = inst_22477;
var v = inst_22478;
var c = inst_22479;
return ((function (cs,vec__22475,v,c,inst_22477,inst_22479,inst_22478,inst_22470,state_val_22499,c__20428__auto___22526,out){
return (function (p1__22465_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22465_SHARP_);
});
;})(cs,vec__22475,v,c,inst_22477,inst_22479,inst_22478,inst_22470,state_val_22499,c__20428__auto___22526,out))
})();
var inst_22483 = cljs.core.filterv.call(null,inst_22482,inst_22470);
var inst_22470__$1 = inst_22483;
var state_22498__$1 = (function (){var statearr_22513 = state_22498;
(statearr_22513[(10)] = inst_22470__$1);

return statearr_22513;
})();
var statearr_22514_22536 = state_22498__$1;
(statearr_22514_22536[(2)] = null);

(statearr_22514_22536[(1)] = (2));


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
});})(c__20428__auto___22526,out))
;
return ((function (switch__20316__auto__,c__20428__auto___22526,out){
return (function() {
var cljs$core$async$state_machine__20317__auto__ = null;
var cljs$core$async$state_machine__20317__auto____0 = (function (){
var statearr_22518 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22518[(0)] = cljs$core$async$state_machine__20317__auto__);

(statearr_22518[(1)] = (1));

return statearr_22518;
});
var cljs$core$async$state_machine__20317__auto____1 = (function (state_22498){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_22498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e22519){if((e22519 instanceof Object)){
var ex__20320__auto__ = e22519;
var statearr_22520_22537 = state_22498;
(statearr_22520_22537[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22538 = state_22498;
state_22498 = G__22538;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$state_machine__20317__auto__ = function(state_22498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20317__auto____1.call(this,state_22498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20317__auto____0;
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20317__auto____1;
return cljs$core$async$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___22526,out))
})();
var state__20430__auto__ = (function (){var statearr_22521 = f__20429__auto__.call(null);
(statearr_22521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___22526);

return statearr_22521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___22526,out))
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
var args22539 = [];
var len__17877__auto___22588 = arguments.length;
var i__17878__auto___22589 = (0);
while(true){
if((i__17878__auto___22589 < len__17877__auto___22588)){
args22539.push((arguments[i__17878__auto___22589]));

var G__22590 = (i__17878__auto___22589 + (1));
i__17878__auto___22589 = G__22590;
continue;
} else {
}
break;
}

var G__22541 = args22539.length;
switch (G__22541) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22539.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20428__auto___22592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___22592,out){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___22592,out){
return (function (state_22565){
var state_val_22566 = (state_22565[(1)]);
if((state_val_22566 === (7))){
var inst_22547 = (state_22565[(7)]);
var inst_22547__$1 = (state_22565[(2)]);
var inst_22548 = (inst_22547__$1 == null);
var inst_22549 = cljs.core.not.call(null,inst_22548);
var state_22565__$1 = (function (){var statearr_22567 = state_22565;
(statearr_22567[(7)] = inst_22547__$1);

return statearr_22567;
})();
if(inst_22549){
var statearr_22568_22593 = state_22565__$1;
(statearr_22568_22593[(1)] = (8));

} else {
var statearr_22569_22594 = state_22565__$1;
(statearr_22569_22594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22566 === (1))){
var inst_22542 = (0);
var state_22565__$1 = (function (){var statearr_22570 = state_22565;
(statearr_22570[(8)] = inst_22542);

return statearr_22570;
})();
var statearr_22571_22595 = state_22565__$1;
(statearr_22571_22595[(2)] = null);

(statearr_22571_22595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22566 === (4))){
var state_22565__$1 = state_22565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22565__$1,(7),ch);
} else {
if((state_val_22566 === (6))){
var inst_22560 = (state_22565[(2)]);
var state_22565__$1 = state_22565;
var statearr_22572_22596 = state_22565__$1;
(statearr_22572_22596[(2)] = inst_22560);

(statearr_22572_22596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22566 === (3))){
var inst_22562 = (state_22565[(2)]);
var inst_22563 = cljs.core.async.close_BANG_.call(null,out);
var state_22565__$1 = (function (){var statearr_22573 = state_22565;
(statearr_22573[(9)] = inst_22562);

return statearr_22573;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22565__$1,inst_22563);
} else {
if((state_val_22566 === (2))){
var inst_22542 = (state_22565[(8)]);
var inst_22544 = (inst_22542 < n);
var state_22565__$1 = state_22565;
if(cljs.core.truth_(inst_22544)){
var statearr_22574_22597 = state_22565__$1;
(statearr_22574_22597[(1)] = (4));

} else {
var statearr_22575_22598 = state_22565__$1;
(statearr_22575_22598[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22566 === (11))){
var inst_22542 = (state_22565[(8)]);
var inst_22552 = (state_22565[(2)]);
var inst_22553 = (inst_22542 + (1));
var inst_22542__$1 = inst_22553;
var state_22565__$1 = (function (){var statearr_22576 = state_22565;
(statearr_22576[(8)] = inst_22542__$1);

(statearr_22576[(10)] = inst_22552);

return statearr_22576;
})();
var statearr_22577_22599 = state_22565__$1;
(statearr_22577_22599[(2)] = null);

(statearr_22577_22599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22566 === (9))){
var state_22565__$1 = state_22565;
var statearr_22578_22600 = state_22565__$1;
(statearr_22578_22600[(2)] = null);

(statearr_22578_22600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22566 === (5))){
var state_22565__$1 = state_22565;
var statearr_22579_22601 = state_22565__$1;
(statearr_22579_22601[(2)] = null);

(statearr_22579_22601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22566 === (10))){
var inst_22557 = (state_22565[(2)]);
var state_22565__$1 = state_22565;
var statearr_22580_22602 = state_22565__$1;
(statearr_22580_22602[(2)] = inst_22557);

(statearr_22580_22602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22566 === (8))){
var inst_22547 = (state_22565[(7)]);
var state_22565__$1 = state_22565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22565__$1,(11),out,inst_22547);
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
});})(c__20428__auto___22592,out))
;
return ((function (switch__20316__auto__,c__20428__auto___22592,out){
return (function() {
var cljs$core$async$state_machine__20317__auto__ = null;
var cljs$core$async$state_machine__20317__auto____0 = (function (){
var statearr_22584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22584[(0)] = cljs$core$async$state_machine__20317__auto__);

(statearr_22584[(1)] = (1));

return statearr_22584;
});
var cljs$core$async$state_machine__20317__auto____1 = (function (state_22565){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_22565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e22585){if((e22585 instanceof Object)){
var ex__20320__auto__ = e22585;
var statearr_22586_22603 = state_22565;
(statearr_22586_22603[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22604 = state_22565;
state_22565 = G__22604;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$state_machine__20317__auto__ = function(state_22565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20317__auto____1.call(this,state_22565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20317__auto____0;
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20317__auto____1;
return cljs$core$async$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___22592,out))
})();
var state__20430__auto__ = (function (){var statearr_22587 = f__20429__auto__.call(null);
(statearr_22587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___22592);

return statearr_22587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___22592,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22612 = (function (map_LT_,f,ch,meta22613){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22613 = meta22613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22614,meta22613__$1){
var self__ = this;
var _22614__$1 = this;
return (new cljs.core.async.t_cljs$core$async22612(self__.map_LT_,self__.f,self__.ch,meta22613__$1));
});

cljs.core.async.t_cljs$core$async22612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22614){
var self__ = this;
var _22614__$1 = this;
return self__.meta22613;
});

cljs.core.async.t_cljs$core$async22612.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22612.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22612.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22615 = (function (map_LT_,f,ch,meta22613,_,fn1,meta22616){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22613 = meta22613;
this._ = _;
this.fn1 = fn1;
this.meta22616 = meta22616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22617,meta22616__$1){
var self__ = this;
var _22617__$1 = this;
return (new cljs.core.async.t_cljs$core$async22615(self__.map_LT_,self__.f,self__.ch,self__.meta22613,self__._,self__.fn1,meta22616__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22617){
var self__ = this;
var _22617__$1 = this;
return self__.meta22616;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22605_SHARP_){
return f1.call(null,(((p1__22605_SHARP_ == null))?null:self__.f.call(null,p1__22605_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22615.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22613","meta22613",658509625,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22612","cljs.core.async/t_cljs$core$async22612",585990505,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22616","meta22616",1969524175,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22615";

cljs.core.async.t_cljs$core$async22615.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22615");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22615 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22615(map_LT___$1,f__$1,ch__$1,meta22613__$1,___$2,fn1__$1,meta22616){
return (new cljs.core.async.t_cljs$core$async22615(map_LT___$1,f__$1,ch__$1,meta22613__$1,___$2,fn1__$1,meta22616));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22615(self__.map_LT_,self__.f,self__.ch,self__.meta22613,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16807__auto__ = ret;
if(cljs.core.truth_(and__16807__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16807__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22612.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22613","meta22613",658509625,null)], null);
});

cljs.core.async.t_cljs$core$async22612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22612";

cljs.core.async.t_cljs$core$async22612.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22612");
});

cljs.core.async.__GT_t_cljs$core$async22612 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22612(map_LT___$1,f__$1,ch__$1,meta22613){
return (new cljs.core.async.t_cljs$core$async22612(map_LT___$1,f__$1,ch__$1,meta22613));
});

}

return (new cljs.core.async.t_cljs$core$async22612(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22621 = (function (map_GT_,f,ch,meta22622){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22622 = meta22622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22623,meta22622__$1){
var self__ = this;
var _22623__$1 = this;
return (new cljs.core.async.t_cljs$core$async22621(self__.map_GT_,self__.f,self__.ch,meta22622__$1));
});

cljs.core.async.t_cljs$core$async22621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22623){
var self__ = this;
var _22623__$1 = this;
return self__.meta22622;
});

cljs.core.async.t_cljs$core$async22621.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22621.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22621.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22622","meta22622",792267446,null)], null);
});

cljs.core.async.t_cljs$core$async22621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22621";

cljs.core.async.t_cljs$core$async22621.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22621");
});

cljs.core.async.__GT_t_cljs$core$async22621 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22621(map_GT___$1,f__$1,ch__$1,meta22622){
return (new cljs.core.async.t_cljs$core$async22621(map_GT___$1,f__$1,ch__$1,meta22622));
});

}

return (new cljs.core.async.t_cljs$core$async22621(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22627 = (function (filter_GT_,p,ch,meta22628){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22628 = meta22628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22629,meta22628__$1){
var self__ = this;
var _22629__$1 = this;
return (new cljs.core.async.t_cljs$core$async22627(self__.filter_GT_,self__.p,self__.ch,meta22628__$1));
});

cljs.core.async.t_cljs$core$async22627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22629){
var self__ = this;
var _22629__$1 = this;
return self__.meta22628;
});

cljs.core.async.t_cljs$core$async22627.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22627.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22627.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22627.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22628","meta22628",-575867502,null)], null);
});

cljs.core.async.t_cljs$core$async22627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22627";

cljs.core.async.t_cljs$core$async22627.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22627");
});

cljs.core.async.__GT_t_cljs$core$async22627 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22627(filter_GT___$1,p__$1,ch__$1,meta22628){
return (new cljs.core.async.t_cljs$core$async22627(filter_GT___$1,p__$1,ch__$1,meta22628));
});

}

return (new cljs.core.async.t_cljs$core$async22627(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args22630 = [];
var len__17877__auto___22674 = arguments.length;
var i__17878__auto___22675 = (0);
while(true){
if((i__17878__auto___22675 < len__17877__auto___22674)){
args22630.push((arguments[i__17878__auto___22675]));

var G__22676 = (i__17878__auto___22675 + (1));
i__17878__auto___22675 = G__22676;
continue;
} else {
}
break;
}

var G__22632 = args22630.length;
switch (G__22632) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22630.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20428__auto___22678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___22678,out){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___22678,out){
return (function (state_22653){
var state_val_22654 = (state_22653[(1)]);
if((state_val_22654 === (7))){
var inst_22649 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
var statearr_22655_22679 = state_22653__$1;
(statearr_22655_22679[(2)] = inst_22649);

(statearr_22655_22679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (1))){
var state_22653__$1 = state_22653;
var statearr_22656_22680 = state_22653__$1;
(statearr_22656_22680[(2)] = null);

(statearr_22656_22680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (4))){
var inst_22635 = (state_22653[(7)]);
var inst_22635__$1 = (state_22653[(2)]);
var inst_22636 = (inst_22635__$1 == null);
var state_22653__$1 = (function (){var statearr_22657 = state_22653;
(statearr_22657[(7)] = inst_22635__$1);

return statearr_22657;
})();
if(cljs.core.truth_(inst_22636)){
var statearr_22658_22681 = state_22653__$1;
(statearr_22658_22681[(1)] = (5));

} else {
var statearr_22659_22682 = state_22653__$1;
(statearr_22659_22682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (6))){
var inst_22635 = (state_22653[(7)]);
var inst_22640 = p.call(null,inst_22635);
var state_22653__$1 = state_22653;
if(cljs.core.truth_(inst_22640)){
var statearr_22660_22683 = state_22653__$1;
(statearr_22660_22683[(1)] = (8));

} else {
var statearr_22661_22684 = state_22653__$1;
(statearr_22661_22684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (3))){
var inst_22651 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22653__$1,inst_22651);
} else {
if((state_val_22654 === (2))){
var state_22653__$1 = state_22653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22653__$1,(4),ch);
} else {
if((state_val_22654 === (11))){
var inst_22643 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
var statearr_22662_22685 = state_22653__$1;
(statearr_22662_22685[(2)] = inst_22643);

(statearr_22662_22685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (9))){
var state_22653__$1 = state_22653;
var statearr_22663_22686 = state_22653__$1;
(statearr_22663_22686[(2)] = null);

(statearr_22663_22686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (5))){
var inst_22638 = cljs.core.async.close_BANG_.call(null,out);
var state_22653__$1 = state_22653;
var statearr_22664_22687 = state_22653__$1;
(statearr_22664_22687[(2)] = inst_22638);

(statearr_22664_22687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (10))){
var inst_22646 = (state_22653[(2)]);
var state_22653__$1 = (function (){var statearr_22665 = state_22653;
(statearr_22665[(8)] = inst_22646);

return statearr_22665;
})();
var statearr_22666_22688 = state_22653__$1;
(statearr_22666_22688[(2)] = null);

(statearr_22666_22688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (8))){
var inst_22635 = (state_22653[(7)]);
var state_22653__$1 = state_22653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22653__$1,(11),out,inst_22635);
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
});})(c__20428__auto___22678,out))
;
return ((function (switch__20316__auto__,c__20428__auto___22678,out){
return (function() {
var cljs$core$async$state_machine__20317__auto__ = null;
var cljs$core$async$state_machine__20317__auto____0 = (function (){
var statearr_22670 = [null,null,null,null,null,null,null,null,null];
(statearr_22670[(0)] = cljs$core$async$state_machine__20317__auto__);

(statearr_22670[(1)] = (1));

return statearr_22670;
});
var cljs$core$async$state_machine__20317__auto____1 = (function (state_22653){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_22653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e22671){if((e22671 instanceof Object)){
var ex__20320__auto__ = e22671;
var statearr_22672_22689 = state_22653;
(statearr_22672_22689[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22690 = state_22653;
state_22653 = G__22690;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$state_machine__20317__auto__ = function(state_22653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20317__auto____1.call(this,state_22653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20317__auto____0;
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20317__auto____1;
return cljs$core$async$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___22678,out))
})();
var state__20430__auto__ = (function (){var statearr_22673 = f__20429__auto__.call(null);
(statearr_22673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___22678);

return statearr_22673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___22678,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22691 = [];
var len__17877__auto___22694 = arguments.length;
var i__17878__auto___22695 = (0);
while(true){
if((i__17878__auto___22695 < len__17877__auto___22694)){
args22691.push((arguments[i__17878__auto___22695]));

var G__22696 = (i__17878__auto___22695 + (1));
i__17878__auto___22695 = G__22696;
continue;
} else {
}
break;
}

var G__22693 = args22691.length;
switch (G__22693) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22691.length)].join('')));

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
var c__20428__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto__){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto__){
return (function (state_22863){
var state_val_22864 = (state_22863[(1)]);
if((state_val_22864 === (7))){
var inst_22859 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22865_22906 = state_22863__$1;
(statearr_22865_22906[(2)] = inst_22859);

(statearr_22865_22906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (20))){
var inst_22829 = (state_22863[(7)]);
var inst_22840 = (state_22863[(2)]);
var inst_22841 = cljs.core.next.call(null,inst_22829);
var inst_22815 = inst_22841;
var inst_22816 = null;
var inst_22817 = (0);
var inst_22818 = (0);
var state_22863__$1 = (function (){var statearr_22866 = state_22863;
(statearr_22866[(8)] = inst_22816);

(statearr_22866[(9)] = inst_22840);

(statearr_22866[(10)] = inst_22815);

(statearr_22866[(11)] = inst_22818);

(statearr_22866[(12)] = inst_22817);

return statearr_22866;
})();
var statearr_22867_22907 = state_22863__$1;
(statearr_22867_22907[(2)] = null);

(statearr_22867_22907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (1))){
var state_22863__$1 = state_22863;
var statearr_22868_22908 = state_22863__$1;
(statearr_22868_22908[(2)] = null);

(statearr_22868_22908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (4))){
var inst_22804 = (state_22863[(13)]);
var inst_22804__$1 = (state_22863[(2)]);
var inst_22805 = (inst_22804__$1 == null);
var state_22863__$1 = (function (){var statearr_22869 = state_22863;
(statearr_22869[(13)] = inst_22804__$1);

return statearr_22869;
})();
if(cljs.core.truth_(inst_22805)){
var statearr_22870_22909 = state_22863__$1;
(statearr_22870_22909[(1)] = (5));

} else {
var statearr_22871_22910 = state_22863__$1;
(statearr_22871_22910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (15))){
var state_22863__$1 = state_22863;
var statearr_22875_22911 = state_22863__$1;
(statearr_22875_22911[(2)] = null);

(statearr_22875_22911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (21))){
var state_22863__$1 = state_22863;
var statearr_22876_22912 = state_22863__$1;
(statearr_22876_22912[(2)] = null);

(statearr_22876_22912[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (13))){
var inst_22816 = (state_22863[(8)]);
var inst_22815 = (state_22863[(10)]);
var inst_22818 = (state_22863[(11)]);
var inst_22817 = (state_22863[(12)]);
var inst_22825 = (state_22863[(2)]);
var inst_22826 = (inst_22818 + (1));
var tmp22872 = inst_22816;
var tmp22873 = inst_22815;
var tmp22874 = inst_22817;
var inst_22815__$1 = tmp22873;
var inst_22816__$1 = tmp22872;
var inst_22817__$1 = tmp22874;
var inst_22818__$1 = inst_22826;
var state_22863__$1 = (function (){var statearr_22877 = state_22863;
(statearr_22877[(8)] = inst_22816__$1);

(statearr_22877[(10)] = inst_22815__$1);

(statearr_22877[(11)] = inst_22818__$1);

(statearr_22877[(12)] = inst_22817__$1);

(statearr_22877[(14)] = inst_22825);

return statearr_22877;
})();
var statearr_22878_22913 = state_22863__$1;
(statearr_22878_22913[(2)] = null);

(statearr_22878_22913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (22))){
var state_22863__$1 = state_22863;
var statearr_22879_22914 = state_22863__$1;
(statearr_22879_22914[(2)] = null);

(statearr_22879_22914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (6))){
var inst_22804 = (state_22863[(13)]);
var inst_22813 = f.call(null,inst_22804);
var inst_22814 = cljs.core.seq.call(null,inst_22813);
var inst_22815 = inst_22814;
var inst_22816 = null;
var inst_22817 = (0);
var inst_22818 = (0);
var state_22863__$1 = (function (){var statearr_22880 = state_22863;
(statearr_22880[(8)] = inst_22816);

(statearr_22880[(10)] = inst_22815);

(statearr_22880[(11)] = inst_22818);

(statearr_22880[(12)] = inst_22817);

return statearr_22880;
})();
var statearr_22881_22915 = state_22863__$1;
(statearr_22881_22915[(2)] = null);

(statearr_22881_22915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (17))){
var inst_22829 = (state_22863[(7)]);
var inst_22833 = cljs.core.chunk_first.call(null,inst_22829);
var inst_22834 = cljs.core.chunk_rest.call(null,inst_22829);
var inst_22835 = cljs.core.count.call(null,inst_22833);
var inst_22815 = inst_22834;
var inst_22816 = inst_22833;
var inst_22817 = inst_22835;
var inst_22818 = (0);
var state_22863__$1 = (function (){var statearr_22882 = state_22863;
(statearr_22882[(8)] = inst_22816);

(statearr_22882[(10)] = inst_22815);

(statearr_22882[(11)] = inst_22818);

(statearr_22882[(12)] = inst_22817);

return statearr_22882;
})();
var statearr_22883_22916 = state_22863__$1;
(statearr_22883_22916[(2)] = null);

(statearr_22883_22916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (3))){
var inst_22861 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22863__$1,inst_22861);
} else {
if((state_val_22864 === (12))){
var inst_22849 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22884_22917 = state_22863__$1;
(statearr_22884_22917[(2)] = inst_22849);

(statearr_22884_22917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (2))){
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22863__$1,(4),in$);
} else {
if((state_val_22864 === (23))){
var inst_22857 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22885_22918 = state_22863__$1;
(statearr_22885_22918[(2)] = inst_22857);

(statearr_22885_22918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (19))){
var inst_22844 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22886_22919 = state_22863__$1;
(statearr_22886_22919[(2)] = inst_22844);

(statearr_22886_22919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (11))){
var inst_22815 = (state_22863[(10)]);
var inst_22829 = (state_22863[(7)]);
var inst_22829__$1 = cljs.core.seq.call(null,inst_22815);
var state_22863__$1 = (function (){var statearr_22887 = state_22863;
(statearr_22887[(7)] = inst_22829__$1);

return statearr_22887;
})();
if(inst_22829__$1){
var statearr_22888_22920 = state_22863__$1;
(statearr_22888_22920[(1)] = (14));

} else {
var statearr_22889_22921 = state_22863__$1;
(statearr_22889_22921[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (9))){
var inst_22851 = (state_22863[(2)]);
var inst_22852 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22863__$1 = (function (){var statearr_22890 = state_22863;
(statearr_22890[(15)] = inst_22851);

return statearr_22890;
})();
if(cljs.core.truth_(inst_22852)){
var statearr_22891_22922 = state_22863__$1;
(statearr_22891_22922[(1)] = (21));

} else {
var statearr_22892_22923 = state_22863__$1;
(statearr_22892_22923[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (5))){
var inst_22807 = cljs.core.async.close_BANG_.call(null,out);
var state_22863__$1 = state_22863;
var statearr_22893_22924 = state_22863__$1;
(statearr_22893_22924[(2)] = inst_22807);

(statearr_22893_22924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (14))){
var inst_22829 = (state_22863[(7)]);
var inst_22831 = cljs.core.chunked_seq_QMARK_.call(null,inst_22829);
var state_22863__$1 = state_22863;
if(inst_22831){
var statearr_22894_22925 = state_22863__$1;
(statearr_22894_22925[(1)] = (17));

} else {
var statearr_22895_22926 = state_22863__$1;
(statearr_22895_22926[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (16))){
var inst_22847 = (state_22863[(2)]);
var state_22863__$1 = state_22863;
var statearr_22896_22927 = state_22863__$1;
(statearr_22896_22927[(2)] = inst_22847);

(statearr_22896_22927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22864 === (10))){
var inst_22816 = (state_22863[(8)]);
var inst_22818 = (state_22863[(11)]);
var inst_22823 = cljs.core._nth.call(null,inst_22816,inst_22818);
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22863__$1,(13),out,inst_22823);
} else {
if((state_val_22864 === (18))){
var inst_22829 = (state_22863[(7)]);
var inst_22838 = cljs.core.first.call(null,inst_22829);
var state_22863__$1 = state_22863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22863__$1,(20),out,inst_22838);
} else {
if((state_val_22864 === (8))){
var inst_22818 = (state_22863[(11)]);
var inst_22817 = (state_22863[(12)]);
var inst_22820 = (inst_22818 < inst_22817);
var inst_22821 = inst_22820;
var state_22863__$1 = state_22863;
if(cljs.core.truth_(inst_22821)){
var statearr_22897_22928 = state_22863__$1;
(statearr_22897_22928[(1)] = (10));

} else {
var statearr_22898_22929 = state_22863__$1;
(statearr_22898_22929[(1)] = (11));

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
});})(c__20428__auto__))
;
return ((function (switch__20316__auto__,c__20428__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20317__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20317__auto____0 = (function (){
var statearr_22902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22902[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20317__auto__);

(statearr_22902[(1)] = (1));

return statearr_22902;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20317__auto____1 = (function (state_22863){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_22863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e22903){if((e22903 instanceof Object)){
var ex__20320__auto__ = e22903;
var statearr_22904_22930 = state_22863;
(statearr_22904_22930[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22931 = state_22863;
state_22863 = G__22931;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20317__auto__ = function(state_22863){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20317__auto____1.call(this,state_22863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20317__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20317__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto__))
})();
var state__20430__auto__ = (function (){var statearr_22905 = f__20429__auto__.call(null);
(statearr_22905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto__);

return statearr_22905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto__))
);

return c__20428__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22932 = [];
var len__17877__auto___22935 = arguments.length;
var i__17878__auto___22936 = (0);
while(true){
if((i__17878__auto___22936 < len__17877__auto___22935)){
args22932.push((arguments[i__17878__auto___22936]));

var G__22937 = (i__17878__auto___22936 + (1));
i__17878__auto___22936 = G__22937;
continue;
} else {
}
break;
}

var G__22934 = args22932.length;
switch (G__22934) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22932.length)].join('')));

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
var args22939 = [];
var len__17877__auto___22942 = arguments.length;
var i__17878__auto___22943 = (0);
while(true){
if((i__17878__auto___22943 < len__17877__auto___22942)){
args22939.push((arguments[i__17878__auto___22943]));

var G__22944 = (i__17878__auto___22943 + (1));
i__17878__auto___22943 = G__22944;
continue;
} else {
}
break;
}

var G__22941 = args22939.length;
switch (G__22941) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22939.length)].join('')));

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
var args22946 = [];
var len__17877__auto___22997 = arguments.length;
var i__17878__auto___22998 = (0);
while(true){
if((i__17878__auto___22998 < len__17877__auto___22997)){
args22946.push((arguments[i__17878__auto___22998]));

var G__22999 = (i__17878__auto___22998 + (1));
i__17878__auto___22998 = G__22999;
continue;
} else {
}
break;
}

var G__22948 = args22946.length;
switch (G__22948) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22946.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20428__auto___23001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___23001,out){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___23001,out){
return (function (state_22972){
var state_val_22973 = (state_22972[(1)]);
if((state_val_22973 === (7))){
var inst_22967 = (state_22972[(2)]);
var state_22972__$1 = state_22972;
var statearr_22974_23002 = state_22972__$1;
(statearr_22974_23002[(2)] = inst_22967);

(statearr_22974_23002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (1))){
var inst_22949 = null;
var state_22972__$1 = (function (){var statearr_22975 = state_22972;
(statearr_22975[(7)] = inst_22949);

return statearr_22975;
})();
var statearr_22976_23003 = state_22972__$1;
(statearr_22976_23003[(2)] = null);

(statearr_22976_23003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (4))){
var inst_22952 = (state_22972[(8)]);
var inst_22952__$1 = (state_22972[(2)]);
var inst_22953 = (inst_22952__$1 == null);
var inst_22954 = cljs.core.not.call(null,inst_22953);
var state_22972__$1 = (function (){var statearr_22977 = state_22972;
(statearr_22977[(8)] = inst_22952__$1);

return statearr_22977;
})();
if(inst_22954){
var statearr_22978_23004 = state_22972__$1;
(statearr_22978_23004[(1)] = (5));

} else {
var statearr_22979_23005 = state_22972__$1;
(statearr_22979_23005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (6))){
var state_22972__$1 = state_22972;
var statearr_22980_23006 = state_22972__$1;
(statearr_22980_23006[(2)] = null);

(statearr_22980_23006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (3))){
var inst_22969 = (state_22972[(2)]);
var inst_22970 = cljs.core.async.close_BANG_.call(null,out);
var state_22972__$1 = (function (){var statearr_22981 = state_22972;
(statearr_22981[(9)] = inst_22969);

return statearr_22981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22972__$1,inst_22970);
} else {
if((state_val_22973 === (2))){
var state_22972__$1 = state_22972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22972__$1,(4),ch);
} else {
if((state_val_22973 === (11))){
var inst_22952 = (state_22972[(8)]);
var inst_22961 = (state_22972[(2)]);
var inst_22949 = inst_22952;
var state_22972__$1 = (function (){var statearr_22982 = state_22972;
(statearr_22982[(10)] = inst_22961);

(statearr_22982[(7)] = inst_22949);

return statearr_22982;
})();
var statearr_22983_23007 = state_22972__$1;
(statearr_22983_23007[(2)] = null);

(statearr_22983_23007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (9))){
var inst_22952 = (state_22972[(8)]);
var state_22972__$1 = state_22972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22972__$1,(11),out,inst_22952);
} else {
if((state_val_22973 === (5))){
var inst_22952 = (state_22972[(8)]);
var inst_22949 = (state_22972[(7)]);
var inst_22956 = cljs.core._EQ_.call(null,inst_22952,inst_22949);
var state_22972__$1 = state_22972;
if(inst_22956){
var statearr_22985_23008 = state_22972__$1;
(statearr_22985_23008[(1)] = (8));

} else {
var statearr_22986_23009 = state_22972__$1;
(statearr_22986_23009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (10))){
var inst_22964 = (state_22972[(2)]);
var state_22972__$1 = state_22972;
var statearr_22987_23010 = state_22972__$1;
(statearr_22987_23010[(2)] = inst_22964);

(statearr_22987_23010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22973 === (8))){
var inst_22949 = (state_22972[(7)]);
var tmp22984 = inst_22949;
var inst_22949__$1 = tmp22984;
var state_22972__$1 = (function (){var statearr_22988 = state_22972;
(statearr_22988[(7)] = inst_22949__$1);

return statearr_22988;
})();
var statearr_22989_23011 = state_22972__$1;
(statearr_22989_23011[(2)] = null);

(statearr_22989_23011[(1)] = (2));


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
});})(c__20428__auto___23001,out))
;
return ((function (switch__20316__auto__,c__20428__auto___23001,out){
return (function() {
var cljs$core$async$state_machine__20317__auto__ = null;
var cljs$core$async$state_machine__20317__auto____0 = (function (){
var statearr_22993 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22993[(0)] = cljs$core$async$state_machine__20317__auto__);

(statearr_22993[(1)] = (1));

return statearr_22993;
});
var cljs$core$async$state_machine__20317__auto____1 = (function (state_22972){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_22972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e22994){if((e22994 instanceof Object)){
var ex__20320__auto__ = e22994;
var statearr_22995_23012 = state_22972;
(statearr_22995_23012[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23013 = state_22972;
state_22972 = G__23013;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$state_machine__20317__auto__ = function(state_22972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20317__auto____1.call(this,state_22972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20317__auto____0;
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20317__auto____1;
return cljs$core$async$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___23001,out))
})();
var state__20430__auto__ = (function (){var statearr_22996 = f__20429__auto__.call(null);
(statearr_22996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___23001);

return statearr_22996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___23001,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23014 = [];
var len__17877__auto___23084 = arguments.length;
var i__17878__auto___23085 = (0);
while(true){
if((i__17878__auto___23085 < len__17877__auto___23084)){
args23014.push((arguments[i__17878__auto___23085]));

var G__23086 = (i__17878__auto___23085 + (1));
i__17878__auto___23085 = G__23086;
continue;
} else {
}
break;
}

var G__23016 = args23014.length;
switch (G__23016) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23014.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20428__auto___23088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___23088,out){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___23088,out){
return (function (state_23054){
var state_val_23055 = (state_23054[(1)]);
if((state_val_23055 === (7))){
var inst_23050 = (state_23054[(2)]);
var state_23054__$1 = state_23054;
var statearr_23056_23089 = state_23054__$1;
(statearr_23056_23089[(2)] = inst_23050);

(statearr_23056_23089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (1))){
var inst_23017 = (new Array(n));
var inst_23018 = inst_23017;
var inst_23019 = (0);
var state_23054__$1 = (function (){var statearr_23057 = state_23054;
(statearr_23057[(7)] = inst_23018);

(statearr_23057[(8)] = inst_23019);

return statearr_23057;
})();
var statearr_23058_23090 = state_23054__$1;
(statearr_23058_23090[(2)] = null);

(statearr_23058_23090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (4))){
var inst_23022 = (state_23054[(9)]);
var inst_23022__$1 = (state_23054[(2)]);
var inst_23023 = (inst_23022__$1 == null);
var inst_23024 = cljs.core.not.call(null,inst_23023);
var state_23054__$1 = (function (){var statearr_23059 = state_23054;
(statearr_23059[(9)] = inst_23022__$1);

return statearr_23059;
})();
if(inst_23024){
var statearr_23060_23091 = state_23054__$1;
(statearr_23060_23091[(1)] = (5));

} else {
var statearr_23061_23092 = state_23054__$1;
(statearr_23061_23092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (15))){
var inst_23044 = (state_23054[(2)]);
var state_23054__$1 = state_23054;
var statearr_23062_23093 = state_23054__$1;
(statearr_23062_23093[(2)] = inst_23044);

(statearr_23062_23093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (13))){
var state_23054__$1 = state_23054;
var statearr_23063_23094 = state_23054__$1;
(statearr_23063_23094[(2)] = null);

(statearr_23063_23094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (6))){
var inst_23019 = (state_23054[(8)]);
var inst_23040 = (inst_23019 > (0));
var state_23054__$1 = state_23054;
if(cljs.core.truth_(inst_23040)){
var statearr_23064_23095 = state_23054__$1;
(statearr_23064_23095[(1)] = (12));

} else {
var statearr_23065_23096 = state_23054__$1;
(statearr_23065_23096[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (3))){
var inst_23052 = (state_23054[(2)]);
var state_23054__$1 = state_23054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23054__$1,inst_23052);
} else {
if((state_val_23055 === (12))){
var inst_23018 = (state_23054[(7)]);
var inst_23042 = cljs.core.vec.call(null,inst_23018);
var state_23054__$1 = state_23054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23054__$1,(15),out,inst_23042);
} else {
if((state_val_23055 === (2))){
var state_23054__$1 = state_23054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23054__$1,(4),ch);
} else {
if((state_val_23055 === (11))){
var inst_23034 = (state_23054[(2)]);
var inst_23035 = (new Array(n));
var inst_23018 = inst_23035;
var inst_23019 = (0);
var state_23054__$1 = (function (){var statearr_23066 = state_23054;
(statearr_23066[(10)] = inst_23034);

(statearr_23066[(7)] = inst_23018);

(statearr_23066[(8)] = inst_23019);

return statearr_23066;
})();
var statearr_23067_23097 = state_23054__$1;
(statearr_23067_23097[(2)] = null);

(statearr_23067_23097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (9))){
var inst_23018 = (state_23054[(7)]);
var inst_23032 = cljs.core.vec.call(null,inst_23018);
var state_23054__$1 = state_23054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23054__$1,(11),out,inst_23032);
} else {
if((state_val_23055 === (5))){
var inst_23027 = (state_23054[(11)]);
var inst_23018 = (state_23054[(7)]);
var inst_23022 = (state_23054[(9)]);
var inst_23019 = (state_23054[(8)]);
var inst_23026 = (inst_23018[inst_23019] = inst_23022);
var inst_23027__$1 = (inst_23019 + (1));
var inst_23028 = (inst_23027__$1 < n);
var state_23054__$1 = (function (){var statearr_23068 = state_23054;
(statearr_23068[(11)] = inst_23027__$1);

(statearr_23068[(12)] = inst_23026);

return statearr_23068;
})();
if(cljs.core.truth_(inst_23028)){
var statearr_23069_23098 = state_23054__$1;
(statearr_23069_23098[(1)] = (8));

} else {
var statearr_23070_23099 = state_23054__$1;
(statearr_23070_23099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (14))){
var inst_23047 = (state_23054[(2)]);
var inst_23048 = cljs.core.async.close_BANG_.call(null,out);
var state_23054__$1 = (function (){var statearr_23072 = state_23054;
(statearr_23072[(13)] = inst_23047);

return statearr_23072;
})();
var statearr_23073_23100 = state_23054__$1;
(statearr_23073_23100[(2)] = inst_23048);

(statearr_23073_23100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (10))){
var inst_23038 = (state_23054[(2)]);
var state_23054__$1 = state_23054;
var statearr_23074_23101 = state_23054__$1;
(statearr_23074_23101[(2)] = inst_23038);

(statearr_23074_23101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (8))){
var inst_23027 = (state_23054[(11)]);
var inst_23018 = (state_23054[(7)]);
var tmp23071 = inst_23018;
var inst_23018__$1 = tmp23071;
var inst_23019 = inst_23027;
var state_23054__$1 = (function (){var statearr_23075 = state_23054;
(statearr_23075[(7)] = inst_23018__$1);

(statearr_23075[(8)] = inst_23019);

return statearr_23075;
})();
var statearr_23076_23102 = state_23054__$1;
(statearr_23076_23102[(2)] = null);

(statearr_23076_23102[(1)] = (2));


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
});})(c__20428__auto___23088,out))
;
return ((function (switch__20316__auto__,c__20428__auto___23088,out){
return (function() {
var cljs$core$async$state_machine__20317__auto__ = null;
var cljs$core$async$state_machine__20317__auto____0 = (function (){
var statearr_23080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23080[(0)] = cljs$core$async$state_machine__20317__auto__);

(statearr_23080[(1)] = (1));

return statearr_23080;
});
var cljs$core$async$state_machine__20317__auto____1 = (function (state_23054){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_23054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e23081){if((e23081 instanceof Object)){
var ex__20320__auto__ = e23081;
var statearr_23082_23103 = state_23054;
(statearr_23082_23103[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23104 = state_23054;
state_23054 = G__23104;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$state_machine__20317__auto__ = function(state_23054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20317__auto____1.call(this,state_23054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20317__auto____0;
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20317__auto____1;
return cljs$core$async$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___23088,out))
})();
var state__20430__auto__ = (function (){var statearr_23083 = f__20429__auto__.call(null);
(statearr_23083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___23088);

return statearr_23083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___23088,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23105 = [];
var len__17877__auto___23179 = arguments.length;
var i__17878__auto___23180 = (0);
while(true){
if((i__17878__auto___23180 < len__17877__auto___23179)){
args23105.push((arguments[i__17878__auto___23180]));

var G__23181 = (i__17878__auto___23180 + (1));
i__17878__auto___23180 = G__23181;
continue;
} else {
}
break;
}

var G__23107 = args23105.length;
switch (G__23107) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23105.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20428__auto___23183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___23183,out){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___23183,out){
return (function (state_23149){
var state_val_23150 = (state_23149[(1)]);
if((state_val_23150 === (7))){
var inst_23145 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23151_23184 = state_23149__$1;
(statearr_23151_23184[(2)] = inst_23145);

(statearr_23151_23184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (1))){
var inst_23108 = [];
var inst_23109 = inst_23108;
var inst_23110 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23149__$1 = (function (){var statearr_23152 = state_23149;
(statearr_23152[(7)] = inst_23110);

(statearr_23152[(8)] = inst_23109);

return statearr_23152;
})();
var statearr_23153_23185 = state_23149__$1;
(statearr_23153_23185[(2)] = null);

(statearr_23153_23185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (4))){
var inst_23113 = (state_23149[(9)]);
var inst_23113__$1 = (state_23149[(2)]);
var inst_23114 = (inst_23113__$1 == null);
var inst_23115 = cljs.core.not.call(null,inst_23114);
var state_23149__$1 = (function (){var statearr_23154 = state_23149;
(statearr_23154[(9)] = inst_23113__$1);

return statearr_23154;
})();
if(inst_23115){
var statearr_23155_23186 = state_23149__$1;
(statearr_23155_23186[(1)] = (5));

} else {
var statearr_23156_23187 = state_23149__$1;
(statearr_23156_23187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (15))){
var inst_23139 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23157_23188 = state_23149__$1;
(statearr_23157_23188[(2)] = inst_23139);

(statearr_23157_23188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (13))){
var state_23149__$1 = state_23149;
var statearr_23158_23189 = state_23149__$1;
(statearr_23158_23189[(2)] = null);

(statearr_23158_23189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (6))){
var inst_23109 = (state_23149[(8)]);
var inst_23134 = inst_23109.length;
var inst_23135 = (inst_23134 > (0));
var state_23149__$1 = state_23149;
if(cljs.core.truth_(inst_23135)){
var statearr_23159_23190 = state_23149__$1;
(statearr_23159_23190[(1)] = (12));

} else {
var statearr_23160_23191 = state_23149__$1;
(statearr_23160_23191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (3))){
var inst_23147 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23149__$1,inst_23147);
} else {
if((state_val_23150 === (12))){
var inst_23109 = (state_23149[(8)]);
var inst_23137 = cljs.core.vec.call(null,inst_23109);
var state_23149__$1 = state_23149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23149__$1,(15),out,inst_23137);
} else {
if((state_val_23150 === (2))){
var state_23149__$1 = state_23149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23149__$1,(4),ch);
} else {
if((state_val_23150 === (11))){
var inst_23113 = (state_23149[(9)]);
var inst_23117 = (state_23149[(10)]);
var inst_23127 = (state_23149[(2)]);
var inst_23128 = [];
var inst_23129 = inst_23128.push(inst_23113);
var inst_23109 = inst_23128;
var inst_23110 = inst_23117;
var state_23149__$1 = (function (){var statearr_23161 = state_23149;
(statearr_23161[(7)] = inst_23110);

(statearr_23161[(8)] = inst_23109);

(statearr_23161[(11)] = inst_23129);

(statearr_23161[(12)] = inst_23127);

return statearr_23161;
})();
var statearr_23162_23192 = state_23149__$1;
(statearr_23162_23192[(2)] = null);

(statearr_23162_23192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (9))){
var inst_23109 = (state_23149[(8)]);
var inst_23125 = cljs.core.vec.call(null,inst_23109);
var state_23149__$1 = state_23149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23149__$1,(11),out,inst_23125);
} else {
if((state_val_23150 === (5))){
var inst_23110 = (state_23149[(7)]);
var inst_23113 = (state_23149[(9)]);
var inst_23117 = (state_23149[(10)]);
var inst_23117__$1 = f.call(null,inst_23113);
var inst_23118 = cljs.core._EQ_.call(null,inst_23117__$1,inst_23110);
var inst_23119 = cljs.core.keyword_identical_QMARK_.call(null,inst_23110,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23120 = (inst_23118) || (inst_23119);
var state_23149__$1 = (function (){var statearr_23163 = state_23149;
(statearr_23163[(10)] = inst_23117__$1);

return statearr_23163;
})();
if(cljs.core.truth_(inst_23120)){
var statearr_23164_23193 = state_23149__$1;
(statearr_23164_23193[(1)] = (8));

} else {
var statearr_23165_23194 = state_23149__$1;
(statearr_23165_23194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (14))){
var inst_23142 = (state_23149[(2)]);
var inst_23143 = cljs.core.async.close_BANG_.call(null,out);
var state_23149__$1 = (function (){var statearr_23167 = state_23149;
(statearr_23167[(13)] = inst_23142);

return statearr_23167;
})();
var statearr_23168_23195 = state_23149__$1;
(statearr_23168_23195[(2)] = inst_23143);

(statearr_23168_23195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (10))){
var inst_23132 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23169_23196 = state_23149__$1;
(statearr_23169_23196[(2)] = inst_23132);

(statearr_23169_23196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (8))){
var inst_23113 = (state_23149[(9)]);
var inst_23109 = (state_23149[(8)]);
var inst_23117 = (state_23149[(10)]);
var inst_23122 = inst_23109.push(inst_23113);
var tmp23166 = inst_23109;
var inst_23109__$1 = tmp23166;
var inst_23110 = inst_23117;
var state_23149__$1 = (function (){var statearr_23170 = state_23149;
(statearr_23170[(7)] = inst_23110);

(statearr_23170[(8)] = inst_23109__$1);

(statearr_23170[(14)] = inst_23122);

return statearr_23170;
})();
var statearr_23171_23197 = state_23149__$1;
(statearr_23171_23197[(2)] = null);

(statearr_23171_23197[(1)] = (2));


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
});})(c__20428__auto___23183,out))
;
return ((function (switch__20316__auto__,c__20428__auto___23183,out){
return (function() {
var cljs$core$async$state_machine__20317__auto__ = null;
var cljs$core$async$state_machine__20317__auto____0 = (function (){
var statearr_23175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23175[(0)] = cljs$core$async$state_machine__20317__auto__);

(statearr_23175[(1)] = (1));

return statearr_23175;
});
var cljs$core$async$state_machine__20317__auto____1 = (function (state_23149){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_23149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e23176){if((e23176 instanceof Object)){
var ex__20320__auto__ = e23176;
var statearr_23177_23198 = state_23149;
(statearr_23177_23198[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23199 = state_23149;
state_23149 = G__23199;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
cljs$core$async$state_machine__20317__auto__ = function(state_23149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20317__auto____1.call(this,state_23149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20317__auto____0;
cljs$core$async$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20317__auto____1;
return cljs$core$async$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___23183,out))
})();
var state__20430__auto__ = (function (){var statearr_23178 = f__20429__auto__.call(null);
(statearr_23178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___23183);

return statearr_23178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___23183,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map