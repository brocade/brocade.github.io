// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22105 = [];
var len__19525__auto___22111 = arguments.length;
var i__19526__auto___22112 = (0);
while(true){
if((i__19526__auto___22112 < len__19525__auto___22111)){
args22105.push((arguments[i__19526__auto___22112]));

var G__22113 = (i__19526__auto___22112 + (1));
i__19526__auto___22112 = G__22113;
continue;
} else {
}
break;
}

var G__22107 = args22105.length;
switch (G__22107) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22105.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22108 = (function (f,blockable,meta22109){
this.f = f;
this.blockable = blockable;
this.meta22109 = meta22109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22110,meta22109__$1){
var self__ = this;
var _22110__$1 = this;
return (new cljs.core.async.t_cljs$core$async22108(self__.f,self__.blockable,meta22109__$1));
});

cljs.core.async.t_cljs$core$async22108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22110){
var self__ = this;
var _22110__$1 = this;
return self__.meta22109;
});

cljs.core.async.t_cljs$core$async22108.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22108.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22108.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22108.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22109","meta22109",-1175765384,null)], null);
});

cljs.core.async.t_cljs$core$async22108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22108";

cljs.core.async.t_cljs$core$async22108.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cljs.core.async/t_cljs$core$async22108");
});

cljs.core.async.__GT_t_cljs$core$async22108 = (function cljs$core$async$__GT_t_cljs$core$async22108(f__$1,blockable__$1,meta22109){
return (new cljs.core.async.t_cljs$core$async22108(f__$1,blockable__$1,meta22109));
});

}

return (new cljs.core.async.t_cljs$core$async22108(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22117 = [];
var len__19525__auto___22120 = arguments.length;
var i__19526__auto___22121 = (0);
while(true){
if((i__19526__auto___22121 < len__19525__auto___22120)){
args22117.push((arguments[i__19526__auto___22121]));

var G__22122 = (i__19526__auto___22121 + (1));
i__19526__auto___22121 = G__22122;
continue;
} else {
}
break;
}

var G__22119 = args22117.length;
switch (G__22119) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22117.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args22124 = [];
var len__19525__auto___22127 = arguments.length;
var i__19526__auto___22128 = (0);
while(true){
if((i__19526__auto___22128 < len__19525__auto___22127)){
args22124.push((arguments[i__19526__auto___22128]));

var G__22129 = (i__19526__auto___22128 + (1));
i__19526__auto___22128 = G__22129;
continue;
} else {
}
break;
}

var G__22126 = args22124.length;
switch (G__22126) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22124.length)].join('')));

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
var args22131 = [];
var len__19525__auto___22134 = arguments.length;
var i__19526__auto___22135 = (0);
while(true){
if((i__19526__auto___22135 < len__19525__auto___22134)){
args22131.push((arguments[i__19526__auto___22135]));

var G__22136 = (i__19526__auto___22135 + (1));
i__19526__auto___22135 = G__22136;
continue;
} else {
}
break;
}

var G__22133 = args22131.length;
switch (G__22133) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22131.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22138 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22138);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22138,ret){
return (function (){
return fn1.call(null,val_22138);
});})(val_22138,ret))
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
var args22139 = [];
var len__19525__auto___22142 = arguments.length;
var i__19526__auto___22143 = (0);
while(true){
if((i__19526__auto___22143 < len__19525__auto___22142)){
args22139.push((arguments[i__19526__auto___22143]));

var G__22144 = (i__19526__auto___22143 + (1));
i__19526__auto___22143 = G__22144;
continue;
} else {
}
break;
}

var G__22141 = args22139.length;
switch (G__22141) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22139.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__19370__auto___22146 = n;
var x_22147 = (0);
while(true){
if((x_22147 < n__19370__auto___22146)){
(a[x_22147] = (0));

var G__22148 = (x_22147 + (1));
x_22147 = G__22148;
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

var G__22149 = (i + (1));
i = G__22149;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22153 = (function (alt_flag,flag,meta22154){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22154 = meta22154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22155,meta22154__$1){
var self__ = this;
var _22155__$1 = this;
return (new cljs.core.async.t_cljs$core$async22153(self__.alt_flag,self__.flag,meta22154__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22155){
var self__ = this;
var _22155__$1 = this;
return self__.meta22154;
});})(flag))
;

cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22153.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22154","meta22154",1621967722,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22153";

cljs.core.async.t_cljs$core$async22153.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cljs.core.async/t_cljs$core$async22153");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22153 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22153(alt_flag__$1,flag__$1,meta22154){
return (new cljs.core.async.t_cljs$core$async22153(alt_flag__$1,flag__$1,meta22154));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22153(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22159 = (function (alt_handler,flag,cb,meta22160){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22160 = meta22160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22161,meta22160__$1){
var self__ = this;
var _22161__$1 = this;
return (new cljs.core.async.t_cljs$core$async22159(self__.alt_handler,self__.flag,self__.cb,meta22160__$1));
});

cljs.core.async.t_cljs$core$async22159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22161){
var self__ = this;
var _22161__$1 = this;
return self__.meta22160;
});

cljs.core.async.t_cljs$core$async22159.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22160","meta22160",1461539371,null)], null);
});

cljs.core.async.t_cljs$core$async22159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22159";

cljs.core.async.t_cljs$core$async22159.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cljs.core.async/t_cljs$core$async22159");
});

cljs.core.async.__GT_t_cljs$core$async22159 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22159(alt_handler__$1,flag__$1,cb__$1,meta22160){
return (new cljs.core.async.t_cljs$core$async22159(alt_handler__$1,flag__$1,cb__$1,meta22160));
});

}

return (new cljs.core.async.t_cljs$core$async22159(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22162_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22162_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22163_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22163_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18455__auto__ = wport;
if(cljs.core.truth_(or__18455__auto__)){
return or__18455__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22164 = (i + (1));
i = G__22164;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18455__auto__ = ret;
if(cljs.core.truth_(or__18455__auto__)){
return or__18455__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18443__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18443__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18443__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__19532__auto__ = [];
var len__19525__auto___22170 = arguments.length;
var i__19526__auto___22171 = (0);
while(true){
if((i__19526__auto___22171 < len__19525__auto___22170)){
args__19532__auto__.push((arguments[i__19526__auto___22171]));

var G__22172 = (i__19526__auto___22171 + (1));
i__19526__auto___22171 = G__22172;
continue;
} else {
}
break;
}

var argseq__19533__auto__ = ((((1) < args__19532__auto__.length))?(new cljs.core.IndexedSeq(args__19532__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19533__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22167){
var map__22168 = p__22167;
var map__22168__$1 = ((((!((map__22168 == null)))?((((map__22168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22168):map__22168);
var opts = map__22168__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22165){
var G__22166 = cljs.core.first.call(null,seq22165);
var seq22165__$1 = cljs.core.next.call(null,seq22165);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22166,seq22165__$1);
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
var args22173 = [];
var len__19525__auto___22223 = arguments.length;
var i__19526__auto___22224 = (0);
while(true){
if((i__19526__auto___22224 < len__19525__auto___22223)){
args22173.push((arguments[i__19526__auto___22224]));

var G__22225 = (i__19526__auto___22224 + (1));
i__19526__auto___22224 = G__22225;
continue;
} else {
}
break;
}

var G__22175 = args22173.length;
switch (G__22175) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22173.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22060__auto___22227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___22227){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___22227){
return (function (state_22199){
var state_val_22200 = (state_22199[(1)]);
if((state_val_22200 === (7))){
var inst_22195 = (state_22199[(2)]);
var state_22199__$1 = state_22199;
var statearr_22201_22228 = state_22199__$1;
(statearr_22201_22228[(2)] = inst_22195);

(statearr_22201_22228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (1))){
var state_22199__$1 = state_22199;
var statearr_22202_22229 = state_22199__$1;
(statearr_22202_22229[(2)] = null);

(statearr_22202_22229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (4))){
var inst_22178 = (state_22199[(7)]);
var inst_22178__$1 = (state_22199[(2)]);
var inst_22179 = (inst_22178__$1 == null);
var state_22199__$1 = (function (){var statearr_22203 = state_22199;
(statearr_22203[(7)] = inst_22178__$1);

return statearr_22203;
})();
if(cljs.core.truth_(inst_22179)){
var statearr_22204_22230 = state_22199__$1;
(statearr_22204_22230[(1)] = (5));

} else {
var statearr_22205_22231 = state_22199__$1;
(statearr_22205_22231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (13))){
var state_22199__$1 = state_22199;
var statearr_22206_22232 = state_22199__$1;
(statearr_22206_22232[(2)] = null);

(statearr_22206_22232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (6))){
var inst_22178 = (state_22199[(7)]);
var state_22199__$1 = state_22199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22199__$1,(11),to,inst_22178);
} else {
if((state_val_22200 === (3))){
var inst_22197 = (state_22199[(2)]);
var state_22199__$1 = state_22199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22199__$1,inst_22197);
} else {
if((state_val_22200 === (12))){
var state_22199__$1 = state_22199;
var statearr_22207_22233 = state_22199__$1;
(statearr_22207_22233[(2)] = null);

(statearr_22207_22233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (2))){
var state_22199__$1 = state_22199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22199__$1,(4),from);
} else {
if((state_val_22200 === (11))){
var inst_22188 = (state_22199[(2)]);
var state_22199__$1 = state_22199;
if(cljs.core.truth_(inst_22188)){
var statearr_22208_22234 = state_22199__$1;
(statearr_22208_22234[(1)] = (12));

} else {
var statearr_22209_22235 = state_22199__$1;
(statearr_22209_22235[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (9))){
var state_22199__$1 = state_22199;
var statearr_22210_22236 = state_22199__$1;
(statearr_22210_22236[(2)] = null);

(statearr_22210_22236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (5))){
var state_22199__$1 = state_22199;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22211_22237 = state_22199__$1;
(statearr_22211_22237[(1)] = (8));

} else {
var statearr_22212_22238 = state_22199__$1;
(statearr_22212_22238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (14))){
var inst_22193 = (state_22199[(2)]);
var state_22199__$1 = state_22199;
var statearr_22213_22239 = state_22199__$1;
(statearr_22213_22239[(2)] = inst_22193);

(statearr_22213_22239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (10))){
var inst_22185 = (state_22199[(2)]);
var state_22199__$1 = state_22199;
var statearr_22214_22240 = state_22199__$1;
(statearr_22214_22240[(2)] = inst_22185);

(statearr_22214_22240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22200 === (8))){
var inst_22182 = cljs.core.async.close_BANG_.call(null,to);
var state_22199__$1 = state_22199;
var statearr_22215_22241 = state_22199__$1;
(statearr_22215_22241[(2)] = inst_22182);

(statearr_22215_22241[(1)] = (10));


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
});})(c__22060__auto___22227))
;
return ((function (switch__21948__auto__,c__22060__auto___22227){
return (function() {
var cljs$core$async$state_machine__21949__auto__ = null;
var cljs$core$async$state_machine__21949__auto____0 = (function (){
var statearr_22219 = [null,null,null,null,null,null,null,null];
(statearr_22219[(0)] = cljs$core$async$state_machine__21949__auto__);

(statearr_22219[(1)] = (1));

return statearr_22219;
});
var cljs$core$async$state_machine__21949__auto____1 = (function (state_22199){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_22199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e22220){if((e22220 instanceof Object)){
var ex__21952__auto__ = e22220;
var statearr_22221_22242 = state_22199;
(statearr_22221_22242[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22243 = state_22199;
state_22199 = G__22243;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$state_machine__21949__auto__ = function(state_22199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21949__auto____1.call(this,state_22199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21949__auto____0;
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21949__auto____1;
return cljs$core$async$state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___22227))
})();
var state__22062__auto__ = (function (){var statearr_22222 = f__22061__auto__.call(null);
(statearr_22222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___22227);

return statearr_22222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___22227))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22427){
var vec__22428 = p__22427;
var v = cljs.core.nth.call(null,vec__22428,(0),null);
var p = cljs.core.nth.call(null,vec__22428,(1),null);
var job = vec__22428;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22060__auto___22610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___22610,res,vec__22428,v,p,job,jobs,results){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___22610,res,vec__22428,v,p,job,jobs,results){
return (function (state_22433){
var state_val_22434 = (state_22433[(1)]);
if((state_val_22434 === (1))){
var state_22433__$1 = state_22433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22433__$1,(2),res,v);
} else {
if((state_val_22434 === (2))){
var inst_22430 = (state_22433[(2)]);
var inst_22431 = cljs.core.async.close_BANG_.call(null,res);
var state_22433__$1 = (function (){var statearr_22435 = state_22433;
(statearr_22435[(7)] = inst_22430);

return statearr_22435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22433__$1,inst_22431);
} else {
return null;
}
}
});})(c__22060__auto___22610,res,vec__22428,v,p,job,jobs,results))
;
return ((function (switch__21948__auto__,c__22060__auto___22610,res,vec__22428,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0 = (function (){
var statearr_22439 = [null,null,null,null,null,null,null,null];
(statearr_22439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__);

(statearr_22439[(1)] = (1));

return statearr_22439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1 = (function (state_22433){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_22433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e22440){if((e22440 instanceof Object)){
var ex__21952__auto__ = e22440;
var statearr_22441_22611 = state_22433;
(statearr_22441_22611[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22612 = state_22433;
state_22433 = G__22612;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__ = function(state_22433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1.call(this,state_22433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___22610,res,vec__22428,v,p,job,jobs,results))
})();
var state__22062__auto__ = (function (){var statearr_22442 = f__22061__auto__.call(null);
(statearr_22442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___22610);

return statearr_22442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___22610,res,vec__22428,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22443){
var vec__22444 = p__22443;
var v = cljs.core.nth.call(null,vec__22444,(0),null);
var p = cljs.core.nth.call(null,vec__22444,(1),null);
var job = vec__22444;
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
var n__19370__auto___22613 = n;
var __22614 = (0);
while(true){
if((__22614 < n__19370__auto___22613)){
var G__22445_22615 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22445_22615) {
case "compute":
var c__22060__auto___22617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22614,c__22060__auto___22617,G__22445_22615,n__19370__auto___22613,jobs,results,process,async){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (__22614,c__22060__auto___22617,G__22445_22615,n__19370__auto___22613,jobs,results,process,async){
return (function (state_22458){
var state_val_22459 = (state_22458[(1)]);
if((state_val_22459 === (1))){
var state_22458__$1 = state_22458;
var statearr_22460_22618 = state_22458__$1;
(statearr_22460_22618[(2)] = null);

(statearr_22460_22618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (2))){
var state_22458__$1 = state_22458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22458__$1,(4),jobs);
} else {
if((state_val_22459 === (3))){
var inst_22456 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22458__$1,inst_22456);
} else {
if((state_val_22459 === (4))){
var inst_22448 = (state_22458[(2)]);
var inst_22449 = process.call(null,inst_22448);
var state_22458__$1 = state_22458;
if(cljs.core.truth_(inst_22449)){
var statearr_22461_22619 = state_22458__$1;
(statearr_22461_22619[(1)] = (5));

} else {
var statearr_22462_22620 = state_22458__$1;
(statearr_22462_22620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (5))){
var state_22458__$1 = state_22458;
var statearr_22463_22621 = state_22458__$1;
(statearr_22463_22621[(2)] = null);

(statearr_22463_22621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (6))){
var state_22458__$1 = state_22458;
var statearr_22464_22622 = state_22458__$1;
(statearr_22464_22622[(2)] = null);

(statearr_22464_22622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (7))){
var inst_22454 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
var statearr_22465_22623 = state_22458__$1;
(statearr_22465_22623[(2)] = inst_22454);

(statearr_22465_22623[(1)] = (3));


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
});})(__22614,c__22060__auto___22617,G__22445_22615,n__19370__auto___22613,jobs,results,process,async))
;
return ((function (__22614,switch__21948__auto__,c__22060__auto___22617,G__22445_22615,n__19370__auto___22613,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0 = (function (){
var statearr_22469 = [null,null,null,null,null,null,null];
(statearr_22469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__);

(statearr_22469[(1)] = (1));

return statearr_22469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1 = (function (state_22458){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_22458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e22470){if((e22470 instanceof Object)){
var ex__21952__auto__ = e22470;
var statearr_22471_22624 = state_22458;
(statearr_22471_22624[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22625 = state_22458;
state_22458 = G__22625;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__ = function(state_22458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1.call(this,state_22458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__;
})()
;})(__22614,switch__21948__auto__,c__22060__auto___22617,G__22445_22615,n__19370__auto___22613,jobs,results,process,async))
})();
var state__22062__auto__ = (function (){var statearr_22472 = f__22061__auto__.call(null);
(statearr_22472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___22617);

return statearr_22472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(__22614,c__22060__auto___22617,G__22445_22615,n__19370__auto___22613,jobs,results,process,async))
);


break;
case "async":
var c__22060__auto___22626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22614,c__22060__auto___22626,G__22445_22615,n__19370__auto___22613,jobs,results,process,async){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (__22614,c__22060__auto___22626,G__22445_22615,n__19370__auto___22613,jobs,results,process,async){
return (function (state_22485){
var state_val_22486 = (state_22485[(1)]);
if((state_val_22486 === (1))){
var state_22485__$1 = state_22485;
var statearr_22487_22627 = state_22485__$1;
(statearr_22487_22627[(2)] = null);

(statearr_22487_22627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22486 === (2))){
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22485__$1,(4),jobs);
} else {
if((state_val_22486 === (3))){
var inst_22483 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22485__$1,inst_22483);
} else {
if((state_val_22486 === (4))){
var inst_22475 = (state_22485[(2)]);
var inst_22476 = async.call(null,inst_22475);
var state_22485__$1 = state_22485;
if(cljs.core.truth_(inst_22476)){
var statearr_22488_22628 = state_22485__$1;
(statearr_22488_22628[(1)] = (5));

} else {
var statearr_22489_22629 = state_22485__$1;
(statearr_22489_22629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22486 === (5))){
var state_22485__$1 = state_22485;
var statearr_22490_22630 = state_22485__$1;
(statearr_22490_22630[(2)] = null);

(statearr_22490_22630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22486 === (6))){
var state_22485__$1 = state_22485;
var statearr_22491_22631 = state_22485__$1;
(statearr_22491_22631[(2)] = null);

(statearr_22491_22631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22486 === (7))){
var inst_22481 = (state_22485[(2)]);
var state_22485__$1 = state_22485;
var statearr_22492_22632 = state_22485__$1;
(statearr_22492_22632[(2)] = inst_22481);

(statearr_22492_22632[(1)] = (3));


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
});})(__22614,c__22060__auto___22626,G__22445_22615,n__19370__auto___22613,jobs,results,process,async))
;
return ((function (__22614,switch__21948__auto__,c__22060__auto___22626,G__22445_22615,n__19370__auto___22613,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0 = (function (){
var statearr_22496 = [null,null,null,null,null,null,null];
(statearr_22496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__);

(statearr_22496[(1)] = (1));

return statearr_22496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1 = (function (state_22485){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_22485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e22497){if((e22497 instanceof Object)){
var ex__21952__auto__ = e22497;
var statearr_22498_22633 = state_22485;
(statearr_22498_22633[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22634 = state_22485;
state_22485 = G__22634;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__ = function(state_22485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1.call(this,state_22485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__;
})()
;})(__22614,switch__21948__auto__,c__22060__auto___22626,G__22445_22615,n__19370__auto___22613,jobs,results,process,async))
})();
var state__22062__auto__ = (function (){var statearr_22499 = f__22061__auto__.call(null);
(statearr_22499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___22626);

return statearr_22499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(__22614,c__22060__auto___22626,G__22445_22615,n__19370__auto___22613,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22635 = (__22614 + (1));
__22614 = G__22635;
continue;
} else {
}
break;
}

var c__22060__auto___22636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___22636,jobs,results,process,async){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___22636,jobs,results,process,async){
return (function (state_22521){
var state_val_22522 = (state_22521[(1)]);
if((state_val_22522 === (1))){
var state_22521__$1 = state_22521;
var statearr_22523_22637 = state_22521__$1;
(statearr_22523_22637[(2)] = null);

(statearr_22523_22637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (2))){
var state_22521__$1 = state_22521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22521__$1,(4),from);
} else {
if((state_val_22522 === (3))){
var inst_22519 = (state_22521[(2)]);
var state_22521__$1 = state_22521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22521__$1,inst_22519);
} else {
if((state_val_22522 === (4))){
var inst_22502 = (state_22521[(7)]);
var inst_22502__$1 = (state_22521[(2)]);
var inst_22503 = (inst_22502__$1 == null);
var state_22521__$1 = (function (){var statearr_22524 = state_22521;
(statearr_22524[(7)] = inst_22502__$1);

return statearr_22524;
})();
if(cljs.core.truth_(inst_22503)){
var statearr_22525_22638 = state_22521__$1;
(statearr_22525_22638[(1)] = (5));

} else {
var statearr_22526_22639 = state_22521__$1;
(statearr_22526_22639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (5))){
var inst_22505 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22521__$1 = state_22521;
var statearr_22527_22640 = state_22521__$1;
(statearr_22527_22640[(2)] = inst_22505);

(statearr_22527_22640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (6))){
var inst_22502 = (state_22521[(7)]);
var inst_22507 = (state_22521[(8)]);
var inst_22507__$1 = cljs.core.async.chan.call(null,(1));
var inst_22508 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22509 = [inst_22502,inst_22507__$1];
var inst_22510 = (new cljs.core.PersistentVector(null,2,(5),inst_22508,inst_22509,null));
var state_22521__$1 = (function (){var statearr_22528 = state_22521;
(statearr_22528[(8)] = inst_22507__$1);

return statearr_22528;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22521__$1,(8),jobs,inst_22510);
} else {
if((state_val_22522 === (7))){
var inst_22517 = (state_22521[(2)]);
var state_22521__$1 = state_22521;
var statearr_22529_22641 = state_22521__$1;
(statearr_22529_22641[(2)] = inst_22517);

(statearr_22529_22641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (8))){
var inst_22507 = (state_22521[(8)]);
var inst_22512 = (state_22521[(2)]);
var state_22521__$1 = (function (){var statearr_22530 = state_22521;
(statearr_22530[(9)] = inst_22512);

return statearr_22530;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22521__$1,(9),results,inst_22507);
} else {
if((state_val_22522 === (9))){
var inst_22514 = (state_22521[(2)]);
var state_22521__$1 = (function (){var statearr_22531 = state_22521;
(statearr_22531[(10)] = inst_22514);

return statearr_22531;
})();
var statearr_22532_22642 = state_22521__$1;
(statearr_22532_22642[(2)] = null);

(statearr_22532_22642[(1)] = (2));


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
});})(c__22060__auto___22636,jobs,results,process,async))
;
return ((function (switch__21948__auto__,c__22060__auto___22636,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0 = (function (){
var statearr_22536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__);

(statearr_22536[(1)] = (1));

return statearr_22536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1 = (function (state_22521){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_22521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e22537){if((e22537 instanceof Object)){
var ex__21952__auto__ = e22537;
var statearr_22538_22643 = state_22521;
(statearr_22538_22643[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22644 = state_22521;
state_22521 = G__22644;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__ = function(state_22521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1.call(this,state_22521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___22636,jobs,results,process,async))
})();
var state__22062__auto__ = (function (){var statearr_22539 = f__22061__auto__.call(null);
(statearr_22539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___22636);

return statearr_22539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___22636,jobs,results,process,async))
);


var c__22060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto__,jobs,results,process,async){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto__,jobs,results,process,async){
return (function (state_22577){
var state_val_22578 = (state_22577[(1)]);
if((state_val_22578 === (7))){
var inst_22573 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
var statearr_22579_22645 = state_22577__$1;
(statearr_22579_22645[(2)] = inst_22573);

(statearr_22579_22645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (20))){
var state_22577__$1 = state_22577;
var statearr_22580_22646 = state_22577__$1;
(statearr_22580_22646[(2)] = null);

(statearr_22580_22646[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (1))){
var state_22577__$1 = state_22577;
var statearr_22581_22647 = state_22577__$1;
(statearr_22581_22647[(2)] = null);

(statearr_22581_22647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (4))){
var inst_22542 = (state_22577[(7)]);
var inst_22542__$1 = (state_22577[(2)]);
var inst_22543 = (inst_22542__$1 == null);
var state_22577__$1 = (function (){var statearr_22582 = state_22577;
(statearr_22582[(7)] = inst_22542__$1);

return statearr_22582;
})();
if(cljs.core.truth_(inst_22543)){
var statearr_22583_22648 = state_22577__$1;
(statearr_22583_22648[(1)] = (5));

} else {
var statearr_22584_22649 = state_22577__$1;
(statearr_22584_22649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (15))){
var inst_22555 = (state_22577[(8)]);
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22577__$1,(18),to,inst_22555);
} else {
if((state_val_22578 === (21))){
var inst_22568 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
var statearr_22585_22650 = state_22577__$1;
(statearr_22585_22650[(2)] = inst_22568);

(statearr_22585_22650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (13))){
var inst_22570 = (state_22577[(2)]);
var state_22577__$1 = (function (){var statearr_22586 = state_22577;
(statearr_22586[(9)] = inst_22570);

return statearr_22586;
})();
var statearr_22587_22651 = state_22577__$1;
(statearr_22587_22651[(2)] = null);

(statearr_22587_22651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (6))){
var inst_22542 = (state_22577[(7)]);
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22577__$1,(11),inst_22542);
} else {
if((state_val_22578 === (17))){
var inst_22563 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
if(cljs.core.truth_(inst_22563)){
var statearr_22588_22652 = state_22577__$1;
(statearr_22588_22652[(1)] = (19));

} else {
var statearr_22589_22653 = state_22577__$1;
(statearr_22589_22653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (3))){
var inst_22575 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22577__$1,inst_22575);
} else {
if((state_val_22578 === (12))){
var inst_22552 = (state_22577[(10)]);
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22577__$1,(14),inst_22552);
} else {
if((state_val_22578 === (2))){
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22577__$1,(4),results);
} else {
if((state_val_22578 === (19))){
var state_22577__$1 = state_22577;
var statearr_22590_22654 = state_22577__$1;
(statearr_22590_22654[(2)] = null);

(statearr_22590_22654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (11))){
var inst_22552 = (state_22577[(2)]);
var state_22577__$1 = (function (){var statearr_22591 = state_22577;
(statearr_22591[(10)] = inst_22552);

return statearr_22591;
})();
var statearr_22592_22655 = state_22577__$1;
(statearr_22592_22655[(2)] = null);

(statearr_22592_22655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (9))){
var state_22577__$1 = state_22577;
var statearr_22593_22656 = state_22577__$1;
(statearr_22593_22656[(2)] = null);

(statearr_22593_22656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (5))){
var state_22577__$1 = state_22577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22594_22657 = state_22577__$1;
(statearr_22594_22657[(1)] = (8));

} else {
var statearr_22595_22658 = state_22577__$1;
(statearr_22595_22658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (14))){
var inst_22555 = (state_22577[(8)]);
var inst_22557 = (state_22577[(11)]);
var inst_22555__$1 = (state_22577[(2)]);
var inst_22556 = (inst_22555__$1 == null);
var inst_22557__$1 = cljs.core.not.call(null,inst_22556);
var state_22577__$1 = (function (){var statearr_22596 = state_22577;
(statearr_22596[(8)] = inst_22555__$1);

(statearr_22596[(11)] = inst_22557__$1);

return statearr_22596;
})();
if(inst_22557__$1){
var statearr_22597_22659 = state_22577__$1;
(statearr_22597_22659[(1)] = (15));

} else {
var statearr_22598_22660 = state_22577__$1;
(statearr_22598_22660[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (16))){
var inst_22557 = (state_22577[(11)]);
var state_22577__$1 = state_22577;
var statearr_22599_22661 = state_22577__$1;
(statearr_22599_22661[(2)] = inst_22557);

(statearr_22599_22661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (10))){
var inst_22549 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
var statearr_22600_22662 = state_22577__$1;
(statearr_22600_22662[(2)] = inst_22549);

(statearr_22600_22662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (18))){
var inst_22560 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
var statearr_22601_22663 = state_22577__$1;
(statearr_22601_22663[(2)] = inst_22560);

(statearr_22601_22663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (8))){
var inst_22546 = cljs.core.async.close_BANG_.call(null,to);
var state_22577__$1 = state_22577;
var statearr_22602_22664 = state_22577__$1;
(statearr_22602_22664[(2)] = inst_22546);

(statearr_22602_22664[(1)] = (10));


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
});})(c__22060__auto__,jobs,results,process,async))
;
return ((function (switch__21948__auto__,c__22060__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0 = (function (){
var statearr_22606 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22606[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__);

(statearr_22606[(1)] = (1));

return statearr_22606;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1 = (function (state_22577){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_22577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e22607){if((e22607 instanceof Object)){
var ex__21952__auto__ = e22607;
var statearr_22608_22665 = state_22577;
(statearr_22608_22665[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22666 = state_22577;
state_22577 = G__22666;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__ = function(state_22577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1.call(this,state_22577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21949__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto__,jobs,results,process,async))
})();
var state__22062__auto__ = (function (){var statearr_22609 = f__22061__auto__.call(null);
(statearr_22609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto__);

return statearr_22609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto__,jobs,results,process,async))
);

return c__22060__auto__;
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
var args22667 = [];
var len__19525__auto___22670 = arguments.length;
var i__19526__auto___22671 = (0);
while(true){
if((i__19526__auto___22671 < len__19525__auto___22670)){
args22667.push((arguments[i__19526__auto___22671]));

var G__22672 = (i__19526__auto___22671 + (1));
i__19526__auto___22671 = G__22672;
continue;
} else {
}
break;
}

var G__22669 = args22667.length;
switch (G__22669) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22667.length)].join('')));

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
var args22674 = [];
var len__19525__auto___22677 = arguments.length;
var i__19526__auto___22678 = (0);
while(true){
if((i__19526__auto___22678 < len__19525__auto___22677)){
args22674.push((arguments[i__19526__auto___22678]));

var G__22679 = (i__19526__auto___22678 + (1));
i__19526__auto___22678 = G__22679;
continue;
} else {
}
break;
}

var G__22676 = args22674.length;
switch (G__22676) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22674.length)].join('')));

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
var args22681 = [];
var len__19525__auto___22734 = arguments.length;
var i__19526__auto___22735 = (0);
while(true){
if((i__19526__auto___22735 < len__19525__auto___22734)){
args22681.push((arguments[i__19526__auto___22735]));

var G__22736 = (i__19526__auto___22735 + (1));
i__19526__auto___22735 = G__22736;
continue;
} else {
}
break;
}

var G__22683 = args22681.length;
switch (G__22683) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22681.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22060__auto___22738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___22738,tc,fc){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___22738,tc,fc){
return (function (state_22709){
var state_val_22710 = (state_22709[(1)]);
if((state_val_22710 === (7))){
var inst_22705 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
var statearr_22711_22739 = state_22709__$1;
(statearr_22711_22739[(2)] = inst_22705);

(statearr_22711_22739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (1))){
var state_22709__$1 = state_22709;
var statearr_22712_22740 = state_22709__$1;
(statearr_22712_22740[(2)] = null);

(statearr_22712_22740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (4))){
var inst_22686 = (state_22709[(7)]);
var inst_22686__$1 = (state_22709[(2)]);
var inst_22687 = (inst_22686__$1 == null);
var state_22709__$1 = (function (){var statearr_22713 = state_22709;
(statearr_22713[(7)] = inst_22686__$1);

return statearr_22713;
})();
if(cljs.core.truth_(inst_22687)){
var statearr_22714_22741 = state_22709__$1;
(statearr_22714_22741[(1)] = (5));

} else {
var statearr_22715_22742 = state_22709__$1;
(statearr_22715_22742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (13))){
var state_22709__$1 = state_22709;
var statearr_22716_22743 = state_22709__$1;
(statearr_22716_22743[(2)] = null);

(statearr_22716_22743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (6))){
var inst_22686 = (state_22709[(7)]);
var inst_22692 = p.call(null,inst_22686);
var state_22709__$1 = state_22709;
if(cljs.core.truth_(inst_22692)){
var statearr_22717_22744 = state_22709__$1;
(statearr_22717_22744[(1)] = (9));

} else {
var statearr_22718_22745 = state_22709__$1;
(statearr_22718_22745[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (3))){
var inst_22707 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22709__$1,inst_22707);
} else {
if((state_val_22710 === (12))){
var state_22709__$1 = state_22709;
var statearr_22719_22746 = state_22709__$1;
(statearr_22719_22746[(2)] = null);

(statearr_22719_22746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (2))){
var state_22709__$1 = state_22709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22709__$1,(4),ch);
} else {
if((state_val_22710 === (11))){
var inst_22686 = (state_22709[(7)]);
var inst_22696 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22709__$1,(8),inst_22696,inst_22686);
} else {
if((state_val_22710 === (9))){
var state_22709__$1 = state_22709;
var statearr_22720_22747 = state_22709__$1;
(statearr_22720_22747[(2)] = tc);

(statearr_22720_22747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (5))){
var inst_22689 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22690 = cljs.core.async.close_BANG_.call(null,fc);
var state_22709__$1 = (function (){var statearr_22721 = state_22709;
(statearr_22721[(8)] = inst_22689);

return statearr_22721;
})();
var statearr_22722_22748 = state_22709__$1;
(statearr_22722_22748[(2)] = inst_22690);

(statearr_22722_22748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (14))){
var inst_22703 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
var statearr_22723_22749 = state_22709__$1;
(statearr_22723_22749[(2)] = inst_22703);

(statearr_22723_22749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (10))){
var state_22709__$1 = state_22709;
var statearr_22724_22750 = state_22709__$1;
(statearr_22724_22750[(2)] = fc);

(statearr_22724_22750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (8))){
var inst_22698 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
if(cljs.core.truth_(inst_22698)){
var statearr_22725_22751 = state_22709__$1;
(statearr_22725_22751[(1)] = (12));

} else {
var statearr_22726_22752 = state_22709__$1;
(statearr_22726_22752[(1)] = (13));

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
});})(c__22060__auto___22738,tc,fc))
;
return ((function (switch__21948__auto__,c__22060__auto___22738,tc,fc){
return (function() {
var cljs$core$async$state_machine__21949__auto__ = null;
var cljs$core$async$state_machine__21949__auto____0 = (function (){
var statearr_22730 = [null,null,null,null,null,null,null,null,null];
(statearr_22730[(0)] = cljs$core$async$state_machine__21949__auto__);

(statearr_22730[(1)] = (1));

return statearr_22730;
});
var cljs$core$async$state_machine__21949__auto____1 = (function (state_22709){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_22709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e22731){if((e22731 instanceof Object)){
var ex__21952__auto__ = e22731;
var statearr_22732_22753 = state_22709;
(statearr_22732_22753[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22754 = state_22709;
state_22709 = G__22754;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$state_machine__21949__auto__ = function(state_22709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21949__auto____1.call(this,state_22709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21949__auto____0;
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21949__auto____1;
return cljs$core$async$state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___22738,tc,fc))
})();
var state__22062__auto__ = (function (){var statearr_22733 = f__22061__auto__.call(null);
(statearr_22733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___22738);

return statearr_22733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___22738,tc,fc))
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
var c__22060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto__){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto__){
return (function (state_22818){
var state_val_22819 = (state_22818[(1)]);
if((state_val_22819 === (7))){
var inst_22814 = (state_22818[(2)]);
var state_22818__$1 = state_22818;
var statearr_22820_22841 = state_22818__$1;
(statearr_22820_22841[(2)] = inst_22814);

(statearr_22820_22841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (1))){
var inst_22798 = init;
var state_22818__$1 = (function (){var statearr_22821 = state_22818;
(statearr_22821[(7)] = inst_22798);

return statearr_22821;
})();
var statearr_22822_22842 = state_22818__$1;
(statearr_22822_22842[(2)] = null);

(statearr_22822_22842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (4))){
var inst_22801 = (state_22818[(8)]);
var inst_22801__$1 = (state_22818[(2)]);
var inst_22802 = (inst_22801__$1 == null);
var state_22818__$1 = (function (){var statearr_22823 = state_22818;
(statearr_22823[(8)] = inst_22801__$1);

return statearr_22823;
})();
if(cljs.core.truth_(inst_22802)){
var statearr_22824_22843 = state_22818__$1;
(statearr_22824_22843[(1)] = (5));

} else {
var statearr_22825_22844 = state_22818__$1;
(statearr_22825_22844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (6))){
var inst_22805 = (state_22818[(9)]);
var inst_22798 = (state_22818[(7)]);
var inst_22801 = (state_22818[(8)]);
var inst_22805__$1 = f.call(null,inst_22798,inst_22801);
var inst_22806 = cljs.core.reduced_QMARK_.call(null,inst_22805__$1);
var state_22818__$1 = (function (){var statearr_22826 = state_22818;
(statearr_22826[(9)] = inst_22805__$1);

return statearr_22826;
})();
if(inst_22806){
var statearr_22827_22845 = state_22818__$1;
(statearr_22827_22845[(1)] = (8));

} else {
var statearr_22828_22846 = state_22818__$1;
(statearr_22828_22846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (3))){
var inst_22816 = (state_22818[(2)]);
var state_22818__$1 = state_22818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22818__$1,inst_22816);
} else {
if((state_val_22819 === (2))){
var state_22818__$1 = state_22818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22818__$1,(4),ch);
} else {
if((state_val_22819 === (9))){
var inst_22805 = (state_22818[(9)]);
var inst_22798 = inst_22805;
var state_22818__$1 = (function (){var statearr_22829 = state_22818;
(statearr_22829[(7)] = inst_22798);

return statearr_22829;
})();
var statearr_22830_22847 = state_22818__$1;
(statearr_22830_22847[(2)] = null);

(statearr_22830_22847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (5))){
var inst_22798 = (state_22818[(7)]);
var state_22818__$1 = state_22818;
var statearr_22831_22848 = state_22818__$1;
(statearr_22831_22848[(2)] = inst_22798);

(statearr_22831_22848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (10))){
var inst_22812 = (state_22818[(2)]);
var state_22818__$1 = state_22818;
var statearr_22832_22849 = state_22818__$1;
(statearr_22832_22849[(2)] = inst_22812);

(statearr_22832_22849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (8))){
var inst_22805 = (state_22818[(9)]);
var inst_22808 = cljs.core.deref.call(null,inst_22805);
var state_22818__$1 = state_22818;
var statearr_22833_22850 = state_22818__$1;
(statearr_22833_22850[(2)] = inst_22808);

(statearr_22833_22850[(1)] = (10));


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
});})(c__22060__auto__))
;
return ((function (switch__21948__auto__,c__22060__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21949__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21949__auto____0 = (function (){
var statearr_22837 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22837[(0)] = cljs$core$async$reduce_$_state_machine__21949__auto__);

(statearr_22837[(1)] = (1));

return statearr_22837;
});
var cljs$core$async$reduce_$_state_machine__21949__auto____1 = (function (state_22818){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_22818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e22838){if((e22838 instanceof Object)){
var ex__21952__auto__ = e22838;
var statearr_22839_22851 = state_22818;
(statearr_22839_22851[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22852 = state_22818;
state_22818 = G__22852;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21949__auto__ = function(state_22818){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21949__auto____1.call(this,state_22818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21949__auto____0;
cljs$core$async$reduce_$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21949__auto____1;
return cljs$core$async$reduce_$_state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto__))
})();
var state__22062__auto__ = (function (){var statearr_22840 = f__22061__auto__.call(null);
(statearr_22840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto__);

return statearr_22840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto__))
);

return c__22060__auto__;
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
var args22853 = [];
var len__19525__auto___22905 = arguments.length;
var i__19526__auto___22906 = (0);
while(true){
if((i__19526__auto___22906 < len__19525__auto___22905)){
args22853.push((arguments[i__19526__auto___22906]));

var G__22907 = (i__19526__auto___22906 + (1));
i__19526__auto___22906 = G__22907;
continue;
} else {
}
break;
}

var G__22855 = args22853.length;
switch (G__22855) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22853.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto__){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto__){
return (function (state_22880){
var state_val_22881 = (state_22880[(1)]);
if((state_val_22881 === (7))){
var inst_22862 = (state_22880[(2)]);
var state_22880__$1 = state_22880;
var statearr_22882_22909 = state_22880__$1;
(statearr_22882_22909[(2)] = inst_22862);

(statearr_22882_22909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (1))){
var inst_22856 = cljs.core.seq.call(null,coll);
var inst_22857 = inst_22856;
var state_22880__$1 = (function (){var statearr_22883 = state_22880;
(statearr_22883[(7)] = inst_22857);

return statearr_22883;
})();
var statearr_22884_22910 = state_22880__$1;
(statearr_22884_22910[(2)] = null);

(statearr_22884_22910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (4))){
var inst_22857 = (state_22880[(7)]);
var inst_22860 = cljs.core.first.call(null,inst_22857);
var state_22880__$1 = state_22880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22880__$1,(7),ch,inst_22860);
} else {
if((state_val_22881 === (13))){
var inst_22874 = (state_22880[(2)]);
var state_22880__$1 = state_22880;
var statearr_22885_22911 = state_22880__$1;
(statearr_22885_22911[(2)] = inst_22874);

(statearr_22885_22911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (6))){
var inst_22865 = (state_22880[(2)]);
var state_22880__$1 = state_22880;
if(cljs.core.truth_(inst_22865)){
var statearr_22886_22912 = state_22880__$1;
(statearr_22886_22912[(1)] = (8));

} else {
var statearr_22887_22913 = state_22880__$1;
(statearr_22887_22913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (3))){
var inst_22878 = (state_22880[(2)]);
var state_22880__$1 = state_22880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22880__$1,inst_22878);
} else {
if((state_val_22881 === (12))){
var state_22880__$1 = state_22880;
var statearr_22888_22914 = state_22880__$1;
(statearr_22888_22914[(2)] = null);

(statearr_22888_22914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (2))){
var inst_22857 = (state_22880[(7)]);
var state_22880__$1 = state_22880;
if(cljs.core.truth_(inst_22857)){
var statearr_22889_22915 = state_22880__$1;
(statearr_22889_22915[(1)] = (4));

} else {
var statearr_22890_22916 = state_22880__$1;
(statearr_22890_22916[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (11))){
var inst_22871 = cljs.core.async.close_BANG_.call(null,ch);
var state_22880__$1 = state_22880;
var statearr_22891_22917 = state_22880__$1;
(statearr_22891_22917[(2)] = inst_22871);

(statearr_22891_22917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (9))){
var state_22880__$1 = state_22880;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22892_22918 = state_22880__$1;
(statearr_22892_22918[(1)] = (11));

} else {
var statearr_22893_22919 = state_22880__$1;
(statearr_22893_22919[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (5))){
var inst_22857 = (state_22880[(7)]);
var state_22880__$1 = state_22880;
var statearr_22894_22920 = state_22880__$1;
(statearr_22894_22920[(2)] = inst_22857);

(statearr_22894_22920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (10))){
var inst_22876 = (state_22880[(2)]);
var state_22880__$1 = state_22880;
var statearr_22895_22921 = state_22880__$1;
(statearr_22895_22921[(2)] = inst_22876);

(statearr_22895_22921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (8))){
var inst_22857 = (state_22880[(7)]);
var inst_22867 = cljs.core.next.call(null,inst_22857);
var inst_22857__$1 = inst_22867;
var state_22880__$1 = (function (){var statearr_22896 = state_22880;
(statearr_22896[(7)] = inst_22857__$1);

return statearr_22896;
})();
var statearr_22897_22922 = state_22880__$1;
(statearr_22897_22922[(2)] = null);

(statearr_22897_22922[(1)] = (2));


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
});})(c__22060__auto__))
;
return ((function (switch__21948__auto__,c__22060__auto__){
return (function() {
var cljs$core$async$state_machine__21949__auto__ = null;
var cljs$core$async$state_machine__21949__auto____0 = (function (){
var statearr_22901 = [null,null,null,null,null,null,null,null];
(statearr_22901[(0)] = cljs$core$async$state_machine__21949__auto__);

(statearr_22901[(1)] = (1));

return statearr_22901;
});
var cljs$core$async$state_machine__21949__auto____1 = (function (state_22880){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_22880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e22902){if((e22902 instanceof Object)){
var ex__21952__auto__ = e22902;
var statearr_22903_22923 = state_22880;
(statearr_22903_22923[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22924 = state_22880;
state_22880 = G__22924;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$state_machine__21949__auto__ = function(state_22880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21949__auto____1.call(this,state_22880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21949__auto____0;
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21949__auto____1;
return cljs$core$async$state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto__))
})();
var state__22062__auto__ = (function (){var statearr_22904 = f__22061__auto__.call(null);
(statearr_22904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto__);

return statearr_22904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto__))
);

return c__22060__auto__;
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
var x__19118__auto__ = (((_ == null))?null:_);
var m__19119__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,_);
} else {
var m__19119__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,_);
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
var x__19118__auto__ = (((m == null))?null:m);
var m__19119__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19119__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19118__auto__ = (((m == null))?null:m);
var m__19119__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,m,ch);
} else {
var m__19119__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,m,ch);
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
var x__19118__auto__ = (((m == null))?null:m);
var m__19119__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,m);
} else {
var m__19119__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23146 = (function (mult,ch,cs,meta23147){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23147 = meta23147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23148,meta23147__$1){
var self__ = this;
var _23148__$1 = this;
return (new cljs.core.async.t_cljs$core$async23146(self__.mult,self__.ch,self__.cs,meta23147__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23148){
var self__ = this;
var _23148__$1 = this;
return self__.meta23147;
});})(cs))
;

cljs.core.async.t_cljs$core$async23146.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23146.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23146.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23146.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23146.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23146.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23147","meta23147",482285537,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23146";

cljs.core.async.t_cljs$core$async23146.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cljs.core.async/t_cljs$core$async23146");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23146 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23146(mult__$1,ch__$1,cs__$1,meta23147){
return (new cljs.core.async.t_cljs$core$async23146(mult__$1,ch__$1,cs__$1,meta23147));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23146(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22060__auto___23367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___23367,cs,m,dchan,dctr,done){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___23367,cs,m,dchan,dctr,done){
return (function (state_23279){
var state_val_23280 = (state_23279[(1)]);
if((state_val_23280 === (7))){
var inst_23275 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23281_23368 = state_23279__$1;
(statearr_23281_23368[(2)] = inst_23275);

(statearr_23281_23368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (20))){
var inst_23180 = (state_23279[(7)]);
var inst_23190 = cljs.core.first.call(null,inst_23180);
var inst_23191 = cljs.core.nth.call(null,inst_23190,(0),null);
var inst_23192 = cljs.core.nth.call(null,inst_23190,(1),null);
var state_23279__$1 = (function (){var statearr_23282 = state_23279;
(statearr_23282[(8)] = inst_23191);

return statearr_23282;
})();
if(cljs.core.truth_(inst_23192)){
var statearr_23283_23369 = state_23279__$1;
(statearr_23283_23369[(1)] = (22));

} else {
var statearr_23284_23370 = state_23279__$1;
(statearr_23284_23370[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (27))){
var inst_23227 = (state_23279[(9)]);
var inst_23222 = (state_23279[(10)]);
var inst_23220 = (state_23279[(11)]);
var inst_23151 = (state_23279[(12)]);
var inst_23227__$1 = cljs.core._nth.call(null,inst_23220,inst_23222);
var inst_23228 = cljs.core.async.put_BANG_.call(null,inst_23227__$1,inst_23151,done);
var state_23279__$1 = (function (){var statearr_23285 = state_23279;
(statearr_23285[(9)] = inst_23227__$1);

return statearr_23285;
})();
if(cljs.core.truth_(inst_23228)){
var statearr_23286_23371 = state_23279__$1;
(statearr_23286_23371[(1)] = (30));

} else {
var statearr_23287_23372 = state_23279__$1;
(statearr_23287_23372[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (1))){
var state_23279__$1 = state_23279;
var statearr_23288_23373 = state_23279__$1;
(statearr_23288_23373[(2)] = null);

(statearr_23288_23373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (24))){
var inst_23180 = (state_23279[(7)]);
var inst_23197 = (state_23279[(2)]);
var inst_23198 = cljs.core.next.call(null,inst_23180);
var inst_23160 = inst_23198;
var inst_23161 = null;
var inst_23162 = (0);
var inst_23163 = (0);
var state_23279__$1 = (function (){var statearr_23289 = state_23279;
(statearr_23289[(13)] = inst_23197);

(statearr_23289[(14)] = inst_23162);

(statearr_23289[(15)] = inst_23161);

(statearr_23289[(16)] = inst_23160);

(statearr_23289[(17)] = inst_23163);

return statearr_23289;
})();
var statearr_23290_23374 = state_23279__$1;
(statearr_23290_23374[(2)] = null);

(statearr_23290_23374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (39))){
var state_23279__$1 = state_23279;
var statearr_23294_23375 = state_23279__$1;
(statearr_23294_23375[(2)] = null);

(statearr_23294_23375[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (4))){
var inst_23151 = (state_23279[(12)]);
var inst_23151__$1 = (state_23279[(2)]);
var inst_23152 = (inst_23151__$1 == null);
var state_23279__$1 = (function (){var statearr_23295 = state_23279;
(statearr_23295[(12)] = inst_23151__$1);

return statearr_23295;
})();
if(cljs.core.truth_(inst_23152)){
var statearr_23296_23376 = state_23279__$1;
(statearr_23296_23376[(1)] = (5));

} else {
var statearr_23297_23377 = state_23279__$1;
(statearr_23297_23377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (15))){
var inst_23162 = (state_23279[(14)]);
var inst_23161 = (state_23279[(15)]);
var inst_23160 = (state_23279[(16)]);
var inst_23163 = (state_23279[(17)]);
var inst_23176 = (state_23279[(2)]);
var inst_23177 = (inst_23163 + (1));
var tmp23291 = inst_23162;
var tmp23292 = inst_23161;
var tmp23293 = inst_23160;
var inst_23160__$1 = tmp23293;
var inst_23161__$1 = tmp23292;
var inst_23162__$1 = tmp23291;
var inst_23163__$1 = inst_23177;
var state_23279__$1 = (function (){var statearr_23298 = state_23279;
(statearr_23298[(14)] = inst_23162__$1);

(statearr_23298[(15)] = inst_23161__$1);

(statearr_23298[(18)] = inst_23176);

(statearr_23298[(16)] = inst_23160__$1);

(statearr_23298[(17)] = inst_23163__$1);

return statearr_23298;
})();
var statearr_23299_23378 = state_23279__$1;
(statearr_23299_23378[(2)] = null);

(statearr_23299_23378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (21))){
var inst_23201 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23303_23379 = state_23279__$1;
(statearr_23303_23379[(2)] = inst_23201);

(statearr_23303_23379[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (31))){
var inst_23227 = (state_23279[(9)]);
var inst_23231 = done.call(null,null);
var inst_23232 = cljs.core.async.untap_STAR_.call(null,m,inst_23227);
var state_23279__$1 = (function (){var statearr_23304 = state_23279;
(statearr_23304[(19)] = inst_23231);

return statearr_23304;
})();
var statearr_23305_23380 = state_23279__$1;
(statearr_23305_23380[(2)] = inst_23232);

(statearr_23305_23380[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (32))){
var inst_23219 = (state_23279[(20)]);
var inst_23222 = (state_23279[(10)]);
var inst_23220 = (state_23279[(11)]);
var inst_23221 = (state_23279[(21)]);
var inst_23234 = (state_23279[(2)]);
var inst_23235 = (inst_23222 + (1));
var tmp23300 = inst_23219;
var tmp23301 = inst_23220;
var tmp23302 = inst_23221;
var inst_23219__$1 = tmp23300;
var inst_23220__$1 = tmp23301;
var inst_23221__$1 = tmp23302;
var inst_23222__$1 = inst_23235;
var state_23279__$1 = (function (){var statearr_23306 = state_23279;
(statearr_23306[(20)] = inst_23219__$1);

(statearr_23306[(22)] = inst_23234);

(statearr_23306[(10)] = inst_23222__$1);

(statearr_23306[(11)] = inst_23220__$1);

(statearr_23306[(21)] = inst_23221__$1);

return statearr_23306;
})();
var statearr_23307_23381 = state_23279__$1;
(statearr_23307_23381[(2)] = null);

(statearr_23307_23381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (40))){
var inst_23247 = (state_23279[(23)]);
var inst_23251 = done.call(null,null);
var inst_23252 = cljs.core.async.untap_STAR_.call(null,m,inst_23247);
var state_23279__$1 = (function (){var statearr_23308 = state_23279;
(statearr_23308[(24)] = inst_23251);

return statearr_23308;
})();
var statearr_23309_23382 = state_23279__$1;
(statearr_23309_23382[(2)] = inst_23252);

(statearr_23309_23382[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (33))){
var inst_23238 = (state_23279[(25)]);
var inst_23240 = cljs.core.chunked_seq_QMARK_.call(null,inst_23238);
var state_23279__$1 = state_23279;
if(inst_23240){
var statearr_23310_23383 = state_23279__$1;
(statearr_23310_23383[(1)] = (36));

} else {
var statearr_23311_23384 = state_23279__$1;
(statearr_23311_23384[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (13))){
var inst_23170 = (state_23279[(26)]);
var inst_23173 = cljs.core.async.close_BANG_.call(null,inst_23170);
var state_23279__$1 = state_23279;
var statearr_23312_23385 = state_23279__$1;
(statearr_23312_23385[(2)] = inst_23173);

(statearr_23312_23385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (22))){
var inst_23191 = (state_23279[(8)]);
var inst_23194 = cljs.core.async.close_BANG_.call(null,inst_23191);
var state_23279__$1 = state_23279;
var statearr_23313_23386 = state_23279__$1;
(statearr_23313_23386[(2)] = inst_23194);

(statearr_23313_23386[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (36))){
var inst_23238 = (state_23279[(25)]);
var inst_23242 = cljs.core.chunk_first.call(null,inst_23238);
var inst_23243 = cljs.core.chunk_rest.call(null,inst_23238);
var inst_23244 = cljs.core.count.call(null,inst_23242);
var inst_23219 = inst_23243;
var inst_23220 = inst_23242;
var inst_23221 = inst_23244;
var inst_23222 = (0);
var state_23279__$1 = (function (){var statearr_23314 = state_23279;
(statearr_23314[(20)] = inst_23219);

(statearr_23314[(10)] = inst_23222);

(statearr_23314[(11)] = inst_23220);

(statearr_23314[(21)] = inst_23221);

return statearr_23314;
})();
var statearr_23315_23387 = state_23279__$1;
(statearr_23315_23387[(2)] = null);

(statearr_23315_23387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (41))){
var inst_23238 = (state_23279[(25)]);
var inst_23254 = (state_23279[(2)]);
var inst_23255 = cljs.core.next.call(null,inst_23238);
var inst_23219 = inst_23255;
var inst_23220 = null;
var inst_23221 = (0);
var inst_23222 = (0);
var state_23279__$1 = (function (){var statearr_23316 = state_23279;
(statearr_23316[(20)] = inst_23219);

(statearr_23316[(10)] = inst_23222);

(statearr_23316[(11)] = inst_23220);

(statearr_23316[(27)] = inst_23254);

(statearr_23316[(21)] = inst_23221);

return statearr_23316;
})();
var statearr_23317_23388 = state_23279__$1;
(statearr_23317_23388[(2)] = null);

(statearr_23317_23388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (43))){
var state_23279__$1 = state_23279;
var statearr_23318_23389 = state_23279__$1;
(statearr_23318_23389[(2)] = null);

(statearr_23318_23389[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (29))){
var inst_23263 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23319_23390 = state_23279__$1;
(statearr_23319_23390[(2)] = inst_23263);

(statearr_23319_23390[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (44))){
var inst_23272 = (state_23279[(2)]);
var state_23279__$1 = (function (){var statearr_23320 = state_23279;
(statearr_23320[(28)] = inst_23272);

return statearr_23320;
})();
var statearr_23321_23391 = state_23279__$1;
(statearr_23321_23391[(2)] = null);

(statearr_23321_23391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (6))){
var inst_23211 = (state_23279[(29)]);
var inst_23210 = cljs.core.deref.call(null,cs);
var inst_23211__$1 = cljs.core.keys.call(null,inst_23210);
var inst_23212 = cljs.core.count.call(null,inst_23211__$1);
var inst_23213 = cljs.core.reset_BANG_.call(null,dctr,inst_23212);
var inst_23218 = cljs.core.seq.call(null,inst_23211__$1);
var inst_23219 = inst_23218;
var inst_23220 = null;
var inst_23221 = (0);
var inst_23222 = (0);
var state_23279__$1 = (function (){var statearr_23322 = state_23279;
(statearr_23322[(20)] = inst_23219);

(statearr_23322[(10)] = inst_23222);

(statearr_23322[(11)] = inst_23220);

(statearr_23322[(21)] = inst_23221);

(statearr_23322[(29)] = inst_23211__$1);

(statearr_23322[(30)] = inst_23213);

return statearr_23322;
})();
var statearr_23323_23392 = state_23279__$1;
(statearr_23323_23392[(2)] = null);

(statearr_23323_23392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (28))){
var inst_23219 = (state_23279[(20)]);
var inst_23238 = (state_23279[(25)]);
var inst_23238__$1 = cljs.core.seq.call(null,inst_23219);
var state_23279__$1 = (function (){var statearr_23324 = state_23279;
(statearr_23324[(25)] = inst_23238__$1);

return statearr_23324;
})();
if(inst_23238__$1){
var statearr_23325_23393 = state_23279__$1;
(statearr_23325_23393[(1)] = (33));

} else {
var statearr_23326_23394 = state_23279__$1;
(statearr_23326_23394[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (25))){
var inst_23222 = (state_23279[(10)]);
var inst_23221 = (state_23279[(21)]);
var inst_23224 = (inst_23222 < inst_23221);
var inst_23225 = inst_23224;
var state_23279__$1 = state_23279;
if(cljs.core.truth_(inst_23225)){
var statearr_23327_23395 = state_23279__$1;
(statearr_23327_23395[(1)] = (27));

} else {
var statearr_23328_23396 = state_23279__$1;
(statearr_23328_23396[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (34))){
var state_23279__$1 = state_23279;
var statearr_23329_23397 = state_23279__$1;
(statearr_23329_23397[(2)] = null);

(statearr_23329_23397[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (17))){
var state_23279__$1 = state_23279;
var statearr_23330_23398 = state_23279__$1;
(statearr_23330_23398[(2)] = null);

(statearr_23330_23398[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (3))){
var inst_23277 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23279__$1,inst_23277);
} else {
if((state_val_23280 === (12))){
var inst_23206 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23331_23399 = state_23279__$1;
(statearr_23331_23399[(2)] = inst_23206);

(statearr_23331_23399[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (2))){
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23279__$1,(4),ch);
} else {
if((state_val_23280 === (23))){
var state_23279__$1 = state_23279;
var statearr_23332_23400 = state_23279__$1;
(statearr_23332_23400[(2)] = null);

(statearr_23332_23400[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (35))){
var inst_23261 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23333_23401 = state_23279__$1;
(statearr_23333_23401[(2)] = inst_23261);

(statearr_23333_23401[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (19))){
var inst_23180 = (state_23279[(7)]);
var inst_23184 = cljs.core.chunk_first.call(null,inst_23180);
var inst_23185 = cljs.core.chunk_rest.call(null,inst_23180);
var inst_23186 = cljs.core.count.call(null,inst_23184);
var inst_23160 = inst_23185;
var inst_23161 = inst_23184;
var inst_23162 = inst_23186;
var inst_23163 = (0);
var state_23279__$1 = (function (){var statearr_23334 = state_23279;
(statearr_23334[(14)] = inst_23162);

(statearr_23334[(15)] = inst_23161);

(statearr_23334[(16)] = inst_23160);

(statearr_23334[(17)] = inst_23163);

return statearr_23334;
})();
var statearr_23335_23402 = state_23279__$1;
(statearr_23335_23402[(2)] = null);

(statearr_23335_23402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (11))){
var inst_23180 = (state_23279[(7)]);
var inst_23160 = (state_23279[(16)]);
var inst_23180__$1 = cljs.core.seq.call(null,inst_23160);
var state_23279__$1 = (function (){var statearr_23336 = state_23279;
(statearr_23336[(7)] = inst_23180__$1);

return statearr_23336;
})();
if(inst_23180__$1){
var statearr_23337_23403 = state_23279__$1;
(statearr_23337_23403[(1)] = (16));

} else {
var statearr_23338_23404 = state_23279__$1;
(statearr_23338_23404[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (9))){
var inst_23208 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23339_23405 = state_23279__$1;
(statearr_23339_23405[(2)] = inst_23208);

(statearr_23339_23405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (5))){
var inst_23158 = cljs.core.deref.call(null,cs);
var inst_23159 = cljs.core.seq.call(null,inst_23158);
var inst_23160 = inst_23159;
var inst_23161 = null;
var inst_23162 = (0);
var inst_23163 = (0);
var state_23279__$1 = (function (){var statearr_23340 = state_23279;
(statearr_23340[(14)] = inst_23162);

(statearr_23340[(15)] = inst_23161);

(statearr_23340[(16)] = inst_23160);

(statearr_23340[(17)] = inst_23163);

return statearr_23340;
})();
var statearr_23341_23406 = state_23279__$1;
(statearr_23341_23406[(2)] = null);

(statearr_23341_23406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (14))){
var state_23279__$1 = state_23279;
var statearr_23342_23407 = state_23279__$1;
(statearr_23342_23407[(2)] = null);

(statearr_23342_23407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (45))){
var inst_23269 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23343_23408 = state_23279__$1;
(statearr_23343_23408[(2)] = inst_23269);

(statearr_23343_23408[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (26))){
var inst_23211 = (state_23279[(29)]);
var inst_23265 = (state_23279[(2)]);
var inst_23266 = cljs.core.seq.call(null,inst_23211);
var state_23279__$1 = (function (){var statearr_23344 = state_23279;
(statearr_23344[(31)] = inst_23265);

return statearr_23344;
})();
if(inst_23266){
var statearr_23345_23409 = state_23279__$1;
(statearr_23345_23409[(1)] = (42));

} else {
var statearr_23346_23410 = state_23279__$1;
(statearr_23346_23410[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (16))){
var inst_23180 = (state_23279[(7)]);
var inst_23182 = cljs.core.chunked_seq_QMARK_.call(null,inst_23180);
var state_23279__$1 = state_23279;
if(inst_23182){
var statearr_23347_23411 = state_23279__$1;
(statearr_23347_23411[(1)] = (19));

} else {
var statearr_23348_23412 = state_23279__$1;
(statearr_23348_23412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (38))){
var inst_23258 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23349_23413 = state_23279__$1;
(statearr_23349_23413[(2)] = inst_23258);

(statearr_23349_23413[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (30))){
var state_23279__$1 = state_23279;
var statearr_23350_23414 = state_23279__$1;
(statearr_23350_23414[(2)] = null);

(statearr_23350_23414[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (10))){
var inst_23161 = (state_23279[(15)]);
var inst_23163 = (state_23279[(17)]);
var inst_23169 = cljs.core._nth.call(null,inst_23161,inst_23163);
var inst_23170 = cljs.core.nth.call(null,inst_23169,(0),null);
var inst_23171 = cljs.core.nth.call(null,inst_23169,(1),null);
var state_23279__$1 = (function (){var statearr_23351 = state_23279;
(statearr_23351[(26)] = inst_23170);

return statearr_23351;
})();
if(cljs.core.truth_(inst_23171)){
var statearr_23352_23415 = state_23279__$1;
(statearr_23352_23415[(1)] = (13));

} else {
var statearr_23353_23416 = state_23279__$1;
(statearr_23353_23416[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (18))){
var inst_23204 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23354_23417 = state_23279__$1;
(statearr_23354_23417[(2)] = inst_23204);

(statearr_23354_23417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (42))){
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23279__$1,(45),dchan);
} else {
if((state_val_23280 === (37))){
var inst_23247 = (state_23279[(23)]);
var inst_23238 = (state_23279[(25)]);
var inst_23151 = (state_23279[(12)]);
var inst_23247__$1 = cljs.core.first.call(null,inst_23238);
var inst_23248 = cljs.core.async.put_BANG_.call(null,inst_23247__$1,inst_23151,done);
var state_23279__$1 = (function (){var statearr_23355 = state_23279;
(statearr_23355[(23)] = inst_23247__$1);

return statearr_23355;
})();
if(cljs.core.truth_(inst_23248)){
var statearr_23356_23418 = state_23279__$1;
(statearr_23356_23418[(1)] = (39));

} else {
var statearr_23357_23419 = state_23279__$1;
(statearr_23357_23419[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (8))){
var inst_23162 = (state_23279[(14)]);
var inst_23163 = (state_23279[(17)]);
var inst_23165 = (inst_23163 < inst_23162);
var inst_23166 = inst_23165;
var state_23279__$1 = state_23279;
if(cljs.core.truth_(inst_23166)){
var statearr_23358_23420 = state_23279__$1;
(statearr_23358_23420[(1)] = (10));

} else {
var statearr_23359_23421 = state_23279__$1;
(statearr_23359_23421[(1)] = (11));

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
});})(c__22060__auto___23367,cs,m,dchan,dctr,done))
;
return ((function (switch__21948__auto__,c__22060__auto___23367,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21949__auto__ = null;
var cljs$core$async$mult_$_state_machine__21949__auto____0 = (function (){
var statearr_23363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23363[(0)] = cljs$core$async$mult_$_state_machine__21949__auto__);

(statearr_23363[(1)] = (1));

return statearr_23363;
});
var cljs$core$async$mult_$_state_machine__21949__auto____1 = (function (state_23279){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_23279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e23364){if((e23364 instanceof Object)){
var ex__21952__auto__ = e23364;
var statearr_23365_23422 = state_23279;
(statearr_23365_23422[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23423 = state_23279;
state_23279 = G__23423;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21949__auto__ = function(state_23279){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21949__auto____1.call(this,state_23279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21949__auto____0;
cljs$core$async$mult_$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21949__auto____1;
return cljs$core$async$mult_$_state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___23367,cs,m,dchan,dctr,done))
})();
var state__22062__auto__ = (function (){var statearr_23366 = f__22061__auto__.call(null);
(statearr_23366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___23367);

return statearr_23366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___23367,cs,m,dchan,dctr,done))
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
var args23424 = [];
var len__19525__auto___23427 = arguments.length;
var i__19526__auto___23428 = (0);
while(true){
if((i__19526__auto___23428 < len__19525__auto___23427)){
args23424.push((arguments[i__19526__auto___23428]));

var G__23429 = (i__19526__auto___23428 + (1));
i__19526__auto___23428 = G__23429;
continue;
} else {
}
break;
}

var G__23426 = args23424.length;
switch (G__23426) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23424.length)].join('')));

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
var x__19118__auto__ = (((m == null))?null:m);
var m__19119__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,m,ch);
} else {
var m__19119__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,m,ch);
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
var x__19118__auto__ = (((m == null))?null:m);
var m__19119__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,m,ch);
} else {
var m__19119__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,m,ch);
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
var x__19118__auto__ = (((m == null))?null:m);
var m__19119__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,m);
} else {
var m__19119__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,m);
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
var x__19118__auto__ = (((m == null))?null:m);
var m__19119__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,m,state_map);
} else {
var m__19119__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,m,state_map);
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
var x__19118__auto__ = (((m == null))?null:m);
var m__19119__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,m,mode);
} else {
var m__19119__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19532__auto__ = [];
var len__19525__auto___23441 = arguments.length;
var i__19526__auto___23442 = (0);
while(true){
if((i__19526__auto___23442 < len__19525__auto___23441)){
args__19532__auto__.push((arguments[i__19526__auto___23442]));

var G__23443 = (i__19526__auto___23442 + (1));
i__19526__auto___23442 = G__23443;
continue;
} else {
}
break;
}

var argseq__19533__auto__ = ((((3) < args__19532__auto__.length))?(new cljs.core.IndexedSeq(args__19532__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19533__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23435){
var map__23436 = p__23435;
var map__23436__$1 = ((((!((map__23436 == null)))?((((map__23436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23436):map__23436);
var opts = map__23436__$1;
var statearr_23438_23444 = state;
(statearr_23438_23444[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23436,map__23436__$1,opts){
return (function (val){
var statearr_23439_23445 = state;
(statearr_23439_23445[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23436,map__23436__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23440_23446 = state;
(statearr_23440_23446[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23431){
var G__23432 = cljs.core.first.call(null,seq23431);
var seq23431__$1 = cljs.core.next.call(null,seq23431);
var G__23433 = cljs.core.first.call(null,seq23431__$1);
var seq23431__$2 = cljs.core.next.call(null,seq23431__$1);
var G__23434 = cljs.core.first.call(null,seq23431__$2);
var seq23431__$3 = cljs.core.next.call(null,seq23431__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23432,G__23433,G__23434,seq23431__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23610 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23611){
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
this.meta23611 = meta23611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23612,meta23611__$1){
var self__ = this;
var _23612__$1 = this;
return (new cljs.core.async.t_cljs$core$async23610(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23611__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23612){
var self__ = this;
var _23612__$1 = this;
return self__.meta23611;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23610.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23610.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23610.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23610.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23610.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23610.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23610.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23610.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23610.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23611","meta23611",-720860246,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23610";

cljs.core.async.t_cljs$core$async23610.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cljs.core.async/t_cljs$core$async23610");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23610 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23610(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23611){
return (new cljs.core.async.t_cljs$core$async23610(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23611));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23610(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22060__auto___23773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___23773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___23773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23710){
var state_val_23711 = (state_23710[(1)]);
if((state_val_23711 === (7))){
var inst_23628 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
var statearr_23712_23774 = state_23710__$1;
(statearr_23712_23774[(2)] = inst_23628);

(statearr_23712_23774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (20))){
var inst_23640 = (state_23710[(7)]);
var state_23710__$1 = state_23710;
var statearr_23713_23775 = state_23710__$1;
(statearr_23713_23775[(2)] = inst_23640);

(statearr_23713_23775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (27))){
var state_23710__$1 = state_23710;
var statearr_23714_23776 = state_23710__$1;
(statearr_23714_23776[(2)] = null);

(statearr_23714_23776[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (1))){
var inst_23616 = (state_23710[(8)]);
var inst_23616__$1 = calc_state.call(null);
var inst_23618 = (inst_23616__$1 == null);
var inst_23619 = cljs.core.not.call(null,inst_23618);
var state_23710__$1 = (function (){var statearr_23715 = state_23710;
(statearr_23715[(8)] = inst_23616__$1);

return statearr_23715;
})();
if(inst_23619){
var statearr_23716_23777 = state_23710__$1;
(statearr_23716_23777[(1)] = (2));

} else {
var statearr_23717_23778 = state_23710__$1;
(statearr_23717_23778[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (24))){
var inst_23663 = (state_23710[(9)]);
var inst_23670 = (state_23710[(10)]);
var inst_23684 = (state_23710[(11)]);
var inst_23684__$1 = inst_23663.call(null,inst_23670);
var state_23710__$1 = (function (){var statearr_23718 = state_23710;
(statearr_23718[(11)] = inst_23684__$1);

return statearr_23718;
})();
if(cljs.core.truth_(inst_23684__$1)){
var statearr_23719_23779 = state_23710__$1;
(statearr_23719_23779[(1)] = (29));

} else {
var statearr_23720_23780 = state_23710__$1;
(statearr_23720_23780[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (4))){
var inst_23631 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
if(cljs.core.truth_(inst_23631)){
var statearr_23721_23781 = state_23710__$1;
(statearr_23721_23781[(1)] = (8));

} else {
var statearr_23722_23782 = state_23710__$1;
(statearr_23722_23782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (15))){
var inst_23657 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
if(cljs.core.truth_(inst_23657)){
var statearr_23723_23783 = state_23710__$1;
(statearr_23723_23783[(1)] = (19));

} else {
var statearr_23724_23784 = state_23710__$1;
(statearr_23724_23784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (21))){
var inst_23662 = (state_23710[(12)]);
var inst_23662__$1 = (state_23710[(2)]);
var inst_23663 = cljs.core.get.call(null,inst_23662__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23664 = cljs.core.get.call(null,inst_23662__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23665 = cljs.core.get.call(null,inst_23662__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23710__$1 = (function (){var statearr_23725 = state_23710;
(statearr_23725[(12)] = inst_23662__$1);

(statearr_23725[(9)] = inst_23663);

(statearr_23725[(13)] = inst_23664);

return statearr_23725;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23710__$1,(22),inst_23665);
} else {
if((state_val_23711 === (31))){
var inst_23692 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
if(cljs.core.truth_(inst_23692)){
var statearr_23726_23785 = state_23710__$1;
(statearr_23726_23785[(1)] = (32));

} else {
var statearr_23727_23786 = state_23710__$1;
(statearr_23727_23786[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (32))){
var inst_23669 = (state_23710[(14)]);
var state_23710__$1 = state_23710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23710__$1,(35),out,inst_23669);
} else {
if((state_val_23711 === (33))){
var inst_23662 = (state_23710[(12)]);
var inst_23640 = inst_23662;
var state_23710__$1 = (function (){var statearr_23728 = state_23710;
(statearr_23728[(7)] = inst_23640);

return statearr_23728;
})();
var statearr_23729_23787 = state_23710__$1;
(statearr_23729_23787[(2)] = null);

(statearr_23729_23787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (13))){
var inst_23640 = (state_23710[(7)]);
var inst_23647 = inst_23640.cljs$lang$protocol_mask$partition0$;
var inst_23648 = (inst_23647 & (64));
var inst_23649 = inst_23640.cljs$core$ISeq$;
var inst_23650 = (inst_23648) || (inst_23649);
var state_23710__$1 = state_23710;
if(cljs.core.truth_(inst_23650)){
var statearr_23730_23788 = state_23710__$1;
(statearr_23730_23788[(1)] = (16));

} else {
var statearr_23731_23789 = state_23710__$1;
(statearr_23731_23789[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (22))){
var inst_23669 = (state_23710[(14)]);
var inst_23670 = (state_23710[(10)]);
var inst_23668 = (state_23710[(2)]);
var inst_23669__$1 = cljs.core.nth.call(null,inst_23668,(0),null);
var inst_23670__$1 = cljs.core.nth.call(null,inst_23668,(1),null);
var inst_23671 = (inst_23669__$1 == null);
var inst_23672 = cljs.core._EQ_.call(null,inst_23670__$1,change);
var inst_23673 = (inst_23671) || (inst_23672);
var state_23710__$1 = (function (){var statearr_23732 = state_23710;
(statearr_23732[(14)] = inst_23669__$1);

(statearr_23732[(10)] = inst_23670__$1);

return statearr_23732;
})();
if(cljs.core.truth_(inst_23673)){
var statearr_23733_23790 = state_23710__$1;
(statearr_23733_23790[(1)] = (23));

} else {
var statearr_23734_23791 = state_23710__$1;
(statearr_23734_23791[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (36))){
var inst_23662 = (state_23710[(12)]);
var inst_23640 = inst_23662;
var state_23710__$1 = (function (){var statearr_23735 = state_23710;
(statearr_23735[(7)] = inst_23640);

return statearr_23735;
})();
var statearr_23736_23792 = state_23710__$1;
(statearr_23736_23792[(2)] = null);

(statearr_23736_23792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (29))){
var inst_23684 = (state_23710[(11)]);
var state_23710__$1 = state_23710;
var statearr_23737_23793 = state_23710__$1;
(statearr_23737_23793[(2)] = inst_23684);

(statearr_23737_23793[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (6))){
var state_23710__$1 = state_23710;
var statearr_23738_23794 = state_23710__$1;
(statearr_23738_23794[(2)] = false);

(statearr_23738_23794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (28))){
var inst_23680 = (state_23710[(2)]);
var inst_23681 = calc_state.call(null);
var inst_23640 = inst_23681;
var state_23710__$1 = (function (){var statearr_23739 = state_23710;
(statearr_23739[(7)] = inst_23640);

(statearr_23739[(15)] = inst_23680);

return statearr_23739;
})();
var statearr_23740_23795 = state_23710__$1;
(statearr_23740_23795[(2)] = null);

(statearr_23740_23795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (25))){
var inst_23706 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
var statearr_23741_23796 = state_23710__$1;
(statearr_23741_23796[(2)] = inst_23706);

(statearr_23741_23796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (34))){
var inst_23704 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
var statearr_23742_23797 = state_23710__$1;
(statearr_23742_23797[(2)] = inst_23704);

(statearr_23742_23797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (17))){
var state_23710__$1 = state_23710;
var statearr_23743_23798 = state_23710__$1;
(statearr_23743_23798[(2)] = false);

(statearr_23743_23798[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (3))){
var state_23710__$1 = state_23710;
var statearr_23744_23799 = state_23710__$1;
(statearr_23744_23799[(2)] = false);

(statearr_23744_23799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (12))){
var inst_23708 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23710__$1,inst_23708);
} else {
if((state_val_23711 === (2))){
var inst_23616 = (state_23710[(8)]);
var inst_23621 = inst_23616.cljs$lang$protocol_mask$partition0$;
var inst_23622 = (inst_23621 & (64));
var inst_23623 = inst_23616.cljs$core$ISeq$;
var inst_23624 = (inst_23622) || (inst_23623);
var state_23710__$1 = state_23710;
if(cljs.core.truth_(inst_23624)){
var statearr_23745_23800 = state_23710__$1;
(statearr_23745_23800[(1)] = (5));

} else {
var statearr_23746_23801 = state_23710__$1;
(statearr_23746_23801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (23))){
var inst_23669 = (state_23710[(14)]);
var inst_23675 = (inst_23669 == null);
var state_23710__$1 = state_23710;
if(cljs.core.truth_(inst_23675)){
var statearr_23747_23802 = state_23710__$1;
(statearr_23747_23802[(1)] = (26));

} else {
var statearr_23748_23803 = state_23710__$1;
(statearr_23748_23803[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (35))){
var inst_23695 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
if(cljs.core.truth_(inst_23695)){
var statearr_23749_23804 = state_23710__$1;
(statearr_23749_23804[(1)] = (36));

} else {
var statearr_23750_23805 = state_23710__$1;
(statearr_23750_23805[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (19))){
var inst_23640 = (state_23710[(7)]);
var inst_23659 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23640);
var state_23710__$1 = state_23710;
var statearr_23751_23806 = state_23710__$1;
(statearr_23751_23806[(2)] = inst_23659);

(statearr_23751_23806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (11))){
var inst_23640 = (state_23710[(7)]);
var inst_23644 = (inst_23640 == null);
var inst_23645 = cljs.core.not.call(null,inst_23644);
var state_23710__$1 = state_23710;
if(inst_23645){
var statearr_23752_23807 = state_23710__$1;
(statearr_23752_23807[(1)] = (13));

} else {
var statearr_23753_23808 = state_23710__$1;
(statearr_23753_23808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (9))){
var inst_23616 = (state_23710[(8)]);
var state_23710__$1 = state_23710;
var statearr_23754_23809 = state_23710__$1;
(statearr_23754_23809[(2)] = inst_23616);

(statearr_23754_23809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (5))){
var state_23710__$1 = state_23710;
var statearr_23755_23810 = state_23710__$1;
(statearr_23755_23810[(2)] = true);

(statearr_23755_23810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (14))){
var state_23710__$1 = state_23710;
var statearr_23756_23811 = state_23710__$1;
(statearr_23756_23811[(2)] = false);

(statearr_23756_23811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (26))){
var inst_23670 = (state_23710[(10)]);
var inst_23677 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23670);
var state_23710__$1 = state_23710;
var statearr_23757_23812 = state_23710__$1;
(statearr_23757_23812[(2)] = inst_23677);

(statearr_23757_23812[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (16))){
var state_23710__$1 = state_23710;
var statearr_23758_23813 = state_23710__$1;
(statearr_23758_23813[(2)] = true);

(statearr_23758_23813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (38))){
var inst_23700 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
var statearr_23759_23814 = state_23710__$1;
(statearr_23759_23814[(2)] = inst_23700);

(statearr_23759_23814[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (30))){
var inst_23663 = (state_23710[(9)]);
var inst_23670 = (state_23710[(10)]);
var inst_23664 = (state_23710[(13)]);
var inst_23687 = cljs.core.empty_QMARK_.call(null,inst_23663);
var inst_23688 = inst_23664.call(null,inst_23670);
var inst_23689 = cljs.core.not.call(null,inst_23688);
var inst_23690 = (inst_23687) && (inst_23689);
var state_23710__$1 = state_23710;
var statearr_23760_23815 = state_23710__$1;
(statearr_23760_23815[(2)] = inst_23690);

(statearr_23760_23815[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (10))){
var inst_23616 = (state_23710[(8)]);
var inst_23636 = (state_23710[(2)]);
var inst_23637 = cljs.core.get.call(null,inst_23636,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23638 = cljs.core.get.call(null,inst_23636,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23639 = cljs.core.get.call(null,inst_23636,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23640 = inst_23616;
var state_23710__$1 = (function (){var statearr_23761 = state_23710;
(statearr_23761[(16)] = inst_23638);

(statearr_23761[(17)] = inst_23637);

(statearr_23761[(18)] = inst_23639);

(statearr_23761[(7)] = inst_23640);

return statearr_23761;
})();
var statearr_23762_23816 = state_23710__$1;
(statearr_23762_23816[(2)] = null);

(statearr_23762_23816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (18))){
var inst_23654 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
var statearr_23763_23817 = state_23710__$1;
(statearr_23763_23817[(2)] = inst_23654);

(statearr_23763_23817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (37))){
var state_23710__$1 = state_23710;
var statearr_23764_23818 = state_23710__$1;
(statearr_23764_23818[(2)] = null);

(statearr_23764_23818[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (8))){
var inst_23616 = (state_23710[(8)]);
var inst_23633 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23616);
var state_23710__$1 = state_23710;
var statearr_23765_23819 = state_23710__$1;
(statearr_23765_23819[(2)] = inst_23633);

(statearr_23765_23819[(1)] = (10));


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
});})(c__22060__auto___23773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21948__auto__,c__22060__auto___23773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21949__auto__ = null;
var cljs$core$async$mix_$_state_machine__21949__auto____0 = (function (){
var statearr_23769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23769[(0)] = cljs$core$async$mix_$_state_machine__21949__auto__);

(statearr_23769[(1)] = (1));

return statearr_23769;
});
var cljs$core$async$mix_$_state_machine__21949__auto____1 = (function (state_23710){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_23710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e23770){if((e23770 instanceof Object)){
var ex__21952__auto__ = e23770;
var statearr_23771_23820 = state_23710;
(statearr_23771_23820[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23821 = state_23710;
state_23710 = G__23821;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21949__auto__ = function(state_23710){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21949__auto____1.call(this,state_23710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21949__auto____0;
cljs$core$async$mix_$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21949__auto____1;
return cljs$core$async$mix_$_state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___23773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22062__auto__ = (function (){var statearr_23772 = f__22061__auto__.call(null);
(statearr_23772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___23773);

return statearr_23772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___23773,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19118__auto__ = (((p == null))?null:p);
var m__19119__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19119__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19118__auto__ = (((p == null))?null:p);
var m__19119__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,p,v,ch);
} else {
var m__19119__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23822 = [];
var len__19525__auto___23825 = arguments.length;
var i__19526__auto___23826 = (0);
while(true){
if((i__19526__auto___23826 < len__19525__auto___23825)){
args23822.push((arguments[i__19526__auto___23826]));

var G__23827 = (i__19526__auto___23826 + (1));
i__19526__auto___23826 = G__23827;
continue;
} else {
}
break;
}

var G__23824 = args23822.length;
switch (G__23824) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23822.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19118__auto__ = (((p == null))?null:p);
var m__19119__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,p);
} else {
var m__19119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,p);
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
var x__19118__auto__ = (((p == null))?null:p);
var m__19119__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19118__auto__)]);
if(!((m__19119__auto__ == null))){
return m__19119__auto__.call(null,p,v);
} else {
var m__19119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19119__auto____$1 == null))){
return m__19119__auto____$1.call(null,p,v);
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
var args23830 = [];
var len__19525__auto___23955 = arguments.length;
var i__19526__auto___23956 = (0);
while(true){
if((i__19526__auto___23956 < len__19525__auto___23955)){
args23830.push((arguments[i__19526__auto___23956]));

var G__23957 = (i__19526__auto___23956 + (1));
i__19526__auto___23956 = G__23957;
continue;
} else {
}
break;
}

var G__23832 = args23830.length;
switch (G__23832) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23830.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18455__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18455__auto__)){
return or__18455__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18455__auto__,mults){
return (function (p1__23829_SHARP_){
if(cljs.core.truth_(p1__23829_SHARP_.call(null,topic))){
return p1__23829_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23829_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18455__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23833 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23833 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23834){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23834 = meta23834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23835,meta23834__$1){
var self__ = this;
var _23835__$1 = this;
return (new cljs.core.async.t_cljs$core$async23833(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23834__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23835){
var self__ = this;
var _23835__$1 = this;
return self__.meta23834;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23833.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23833.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23834","meta23834",-1402154718,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23833";

cljs.core.async.t_cljs$core$async23833.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cljs.core.async/t_cljs$core$async23833");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23833 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23833(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23834){
return (new cljs.core.async.t_cljs$core$async23833(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23834));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23833(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22060__auto___23959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___23959,mults,ensure_mult,p){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___23959,mults,ensure_mult,p){
return (function (state_23907){
var state_val_23908 = (state_23907[(1)]);
if((state_val_23908 === (7))){
var inst_23903 = (state_23907[(2)]);
var state_23907__$1 = state_23907;
var statearr_23909_23960 = state_23907__$1;
(statearr_23909_23960[(2)] = inst_23903);

(statearr_23909_23960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (20))){
var state_23907__$1 = state_23907;
var statearr_23910_23961 = state_23907__$1;
(statearr_23910_23961[(2)] = null);

(statearr_23910_23961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (1))){
var state_23907__$1 = state_23907;
var statearr_23911_23962 = state_23907__$1;
(statearr_23911_23962[(2)] = null);

(statearr_23911_23962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (24))){
var inst_23886 = (state_23907[(7)]);
var inst_23895 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23886);
var state_23907__$1 = state_23907;
var statearr_23912_23963 = state_23907__$1;
(statearr_23912_23963[(2)] = inst_23895);

(statearr_23912_23963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (4))){
var inst_23838 = (state_23907[(8)]);
var inst_23838__$1 = (state_23907[(2)]);
var inst_23839 = (inst_23838__$1 == null);
var state_23907__$1 = (function (){var statearr_23913 = state_23907;
(statearr_23913[(8)] = inst_23838__$1);

return statearr_23913;
})();
if(cljs.core.truth_(inst_23839)){
var statearr_23914_23964 = state_23907__$1;
(statearr_23914_23964[(1)] = (5));

} else {
var statearr_23915_23965 = state_23907__$1;
(statearr_23915_23965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (15))){
var inst_23880 = (state_23907[(2)]);
var state_23907__$1 = state_23907;
var statearr_23916_23966 = state_23907__$1;
(statearr_23916_23966[(2)] = inst_23880);

(statearr_23916_23966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (21))){
var inst_23900 = (state_23907[(2)]);
var state_23907__$1 = (function (){var statearr_23917 = state_23907;
(statearr_23917[(9)] = inst_23900);

return statearr_23917;
})();
var statearr_23918_23967 = state_23907__$1;
(statearr_23918_23967[(2)] = null);

(statearr_23918_23967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (13))){
var inst_23862 = (state_23907[(10)]);
var inst_23864 = cljs.core.chunked_seq_QMARK_.call(null,inst_23862);
var state_23907__$1 = state_23907;
if(inst_23864){
var statearr_23919_23968 = state_23907__$1;
(statearr_23919_23968[(1)] = (16));

} else {
var statearr_23920_23969 = state_23907__$1;
(statearr_23920_23969[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (22))){
var inst_23892 = (state_23907[(2)]);
var state_23907__$1 = state_23907;
if(cljs.core.truth_(inst_23892)){
var statearr_23921_23970 = state_23907__$1;
(statearr_23921_23970[(1)] = (23));

} else {
var statearr_23922_23971 = state_23907__$1;
(statearr_23922_23971[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (6))){
var inst_23886 = (state_23907[(7)]);
var inst_23838 = (state_23907[(8)]);
var inst_23888 = (state_23907[(11)]);
var inst_23886__$1 = topic_fn.call(null,inst_23838);
var inst_23887 = cljs.core.deref.call(null,mults);
var inst_23888__$1 = cljs.core.get.call(null,inst_23887,inst_23886__$1);
var state_23907__$1 = (function (){var statearr_23923 = state_23907;
(statearr_23923[(7)] = inst_23886__$1);

(statearr_23923[(11)] = inst_23888__$1);

return statearr_23923;
})();
if(cljs.core.truth_(inst_23888__$1)){
var statearr_23924_23972 = state_23907__$1;
(statearr_23924_23972[(1)] = (19));

} else {
var statearr_23925_23973 = state_23907__$1;
(statearr_23925_23973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (25))){
var inst_23897 = (state_23907[(2)]);
var state_23907__$1 = state_23907;
var statearr_23926_23974 = state_23907__$1;
(statearr_23926_23974[(2)] = inst_23897);

(statearr_23926_23974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (17))){
var inst_23862 = (state_23907[(10)]);
var inst_23871 = cljs.core.first.call(null,inst_23862);
var inst_23872 = cljs.core.async.muxch_STAR_.call(null,inst_23871);
var inst_23873 = cljs.core.async.close_BANG_.call(null,inst_23872);
var inst_23874 = cljs.core.next.call(null,inst_23862);
var inst_23848 = inst_23874;
var inst_23849 = null;
var inst_23850 = (0);
var inst_23851 = (0);
var state_23907__$1 = (function (){var statearr_23927 = state_23907;
(statearr_23927[(12)] = inst_23873);

(statearr_23927[(13)] = inst_23851);

(statearr_23927[(14)] = inst_23848);

(statearr_23927[(15)] = inst_23849);

(statearr_23927[(16)] = inst_23850);

return statearr_23927;
})();
var statearr_23928_23975 = state_23907__$1;
(statearr_23928_23975[(2)] = null);

(statearr_23928_23975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (3))){
var inst_23905 = (state_23907[(2)]);
var state_23907__$1 = state_23907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23907__$1,inst_23905);
} else {
if((state_val_23908 === (12))){
var inst_23882 = (state_23907[(2)]);
var state_23907__$1 = state_23907;
var statearr_23929_23976 = state_23907__$1;
(statearr_23929_23976[(2)] = inst_23882);

(statearr_23929_23976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (2))){
var state_23907__$1 = state_23907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23907__$1,(4),ch);
} else {
if((state_val_23908 === (23))){
var state_23907__$1 = state_23907;
var statearr_23930_23977 = state_23907__$1;
(statearr_23930_23977[(2)] = null);

(statearr_23930_23977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (19))){
var inst_23838 = (state_23907[(8)]);
var inst_23888 = (state_23907[(11)]);
var inst_23890 = cljs.core.async.muxch_STAR_.call(null,inst_23888);
var state_23907__$1 = state_23907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23907__$1,(22),inst_23890,inst_23838);
} else {
if((state_val_23908 === (11))){
var inst_23862 = (state_23907[(10)]);
var inst_23848 = (state_23907[(14)]);
var inst_23862__$1 = cljs.core.seq.call(null,inst_23848);
var state_23907__$1 = (function (){var statearr_23931 = state_23907;
(statearr_23931[(10)] = inst_23862__$1);

return statearr_23931;
})();
if(inst_23862__$1){
var statearr_23932_23978 = state_23907__$1;
(statearr_23932_23978[(1)] = (13));

} else {
var statearr_23933_23979 = state_23907__$1;
(statearr_23933_23979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (9))){
var inst_23884 = (state_23907[(2)]);
var state_23907__$1 = state_23907;
var statearr_23934_23980 = state_23907__$1;
(statearr_23934_23980[(2)] = inst_23884);

(statearr_23934_23980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (5))){
var inst_23845 = cljs.core.deref.call(null,mults);
var inst_23846 = cljs.core.vals.call(null,inst_23845);
var inst_23847 = cljs.core.seq.call(null,inst_23846);
var inst_23848 = inst_23847;
var inst_23849 = null;
var inst_23850 = (0);
var inst_23851 = (0);
var state_23907__$1 = (function (){var statearr_23935 = state_23907;
(statearr_23935[(13)] = inst_23851);

(statearr_23935[(14)] = inst_23848);

(statearr_23935[(15)] = inst_23849);

(statearr_23935[(16)] = inst_23850);

return statearr_23935;
})();
var statearr_23936_23981 = state_23907__$1;
(statearr_23936_23981[(2)] = null);

(statearr_23936_23981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (14))){
var state_23907__$1 = state_23907;
var statearr_23940_23982 = state_23907__$1;
(statearr_23940_23982[(2)] = null);

(statearr_23940_23982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (16))){
var inst_23862 = (state_23907[(10)]);
var inst_23866 = cljs.core.chunk_first.call(null,inst_23862);
var inst_23867 = cljs.core.chunk_rest.call(null,inst_23862);
var inst_23868 = cljs.core.count.call(null,inst_23866);
var inst_23848 = inst_23867;
var inst_23849 = inst_23866;
var inst_23850 = inst_23868;
var inst_23851 = (0);
var state_23907__$1 = (function (){var statearr_23941 = state_23907;
(statearr_23941[(13)] = inst_23851);

(statearr_23941[(14)] = inst_23848);

(statearr_23941[(15)] = inst_23849);

(statearr_23941[(16)] = inst_23850);

return statearr_23941;
})();
var statearr_23942_23983 = state_23907__$1;
(statearr_23942_23983[(2)] = null);

(statearr_23942_23983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (10))){
var inst_23851 = (state_23907[(13)]);
var inst_23848 = (state_23907[(14)]);
var inst_23849 = (state_23907[(15)]);
var inst_23850 = (state_23907[(16)]);
var inst_23856 = cljs.core._nth.call(null,inst_23849,inst_23851);
var inst_23857 = cljs.core.async.muxch_STAR_.call(null,inst_23856);
var inst_23858 = cljs.core.async.close_BANG_.call(null,inst_23857);
var inst_23859 = (inst_23851 + (1));
var tmp23937 = inst_23848;
var tmp23938 = inst_23849;
var tmp23939 = inst_23850;
var inst_23848__$1 = tmp23937;
var inst_23849__$1 = tmp23938;
var inst_23850__$1 = tmp23939;
var inst_23851__$1 = inst_23859;
var state_23907__$1 = (function (){var statearr_23943 = state_23907;
(statearr_23943[(13)] = inst_23851__$1);

(statearr_23943[(17)] = inst_23858);

(statearr_23943[(14)] = inst_23848__$1);

(statearr_23943[(15)] = inst_23849__$1);

(statearr_23943[(16)] = inst_23850__$1);

return statearr_23943;
})();
var statearr_23944_23984 = state_23907__$1;
(statearr_23944_23984[(2)] = null);

(statearr_23944_23984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (18))){
var inst_23877 = (state_23907[(2)]);
var state_23907__$1 = state_23907;
var statearr_23945_23985 = state_23907__$1;
(statearr_23945_23985[(2)] = inst_23877);

(statearr_23945_23985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23908 === (8))){
var inst_23851 = (state_23907[(13)]);
var inst_23850 = (state_23907[(16)]);
var inst_23853 = (inst_23851 < inst_23850);
var inst_23854 = inst_23853;
var state_23907__$1 = state_23907;
if(cljs.core.truth_(inst_23854)){
var statearr_23946_23986 = state_23907__$1;
(statearr_23946_23986[(1)] = (10));

} else {
var statearr_23947_23987 = state_23907__$1;
(statearr_23947_23987[(1)] = (11));

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
});})(c__22060__auto___23959,mults,ensure_mult,p))
;
return ((function (switch__21948__auto__,c__22060__auto___23959,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21949__auto__ = null;
var cljs$core$async$state_machine__21949__auto____0 = (function (){
var statearr_23951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23951[(0)] = cljs$core$async$state_machine__21949__auto__);

(statearr_23951[(1)] = (1));

return statearr_23951;
});
var cljs$core$async$state_machine__21949__auto____1 = (function (state_23907){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_23907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e23952){if((e23952 instanceof Object)){
var ex__21952__auto__ = e23952;
var statearr_23953_23988 = state_23907;
(statearr_23953_23988[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23989 = state_23907;
state_23907 = G__23989;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$state_machine__21949__auto__ = function(state_23907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21949__auto____1.call(this,state_23907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21949__auto____0;
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21949__auto____1;
return cljs$core$async$state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___23959,mults,ensure_mult,p))
})();
var state__22062__auto__ = (function (){var statearr_23954 = f__22061__auto__.call(null);
(statearr_23954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___23959);

return statearr_23954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___23959,mults,ensure_mult,p))
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
var args23990 = [];
var len__19525__auto___23993 = arguments.length;
var i__19526__auto___23994 = (0);
while(true){
if((i__19526__auto___23994 < len__19525__auto___23993)){
args23990.push((arguments[i__19526__auto___23994]));

var G__23995 = (i__19526__auto___23994 + (1));
i__19526__auto___23994 = G__23995;
continue;
} else {
}
break;
}

var G__23992 = args23990.length;
switch (G__23992) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23990.length)].join('')));

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
var args23997 = [];
var len__19525__auto___24000 = arguments.length;
var i__19526__auto___24001 = (0);
while(true){
if((i__19526__auto___24001 < len__19525__auto___24000)){
args23997.push((arguments[i__19526__auto___24001]));

var G__24002 = (i__19526__auto___24001 + (1));
i__19526__auto___24001 = G__24002;
continue;
} else {
}
break;
}

var G__23999 = args23997.length;
switch (G__23999) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23997.length)].join('')));

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
var args24004 = [];
var len__19525__auto___24075 = arguments.length;
var i__19526__auto___24076 = (0);
while(true){
if((i__19526__auto___24076 < len__19525__auto___24075)){
args24004.push((arguments[i__19526__auto___24076]));

var G__24077 = (i__19526__auto___24076 + (1));
i__19526__auto___24076 = G__24077;
continue;
} else {
}
break;
}

var G__24006 = args24004.length;
switch (G__24006) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24004.length)].join('')));

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
var c__22060__auto___24079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___24079,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___24079,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24045){
var state_val_24046 = (state_24045[(1)]);
if((state_val_24046 === (7))){
var state_24045__$1 = state_24045;
var statearr_24047_24080 = state_24045__$1;
(statearr_24047_24080[(2)] = null);

(statearr_24047_24080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (1))){
var state_24045__$1 = state_24045;
var statearr_24048_24081 = state_24045__$1;
(statearr_24048_24081[(2)] = null);

(statearr_24048_24081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (4))){
var inst_24009 = (state_24045[(7)]);
var inst_24011 = (inst_24009 < cnt);
var state_24045__$1 = state_24045;
if(cljs.core.truth_(inst_24011)){
var statearr_24049_24082 = state_24045__$1;
(statearr_24049_24082[(1)] = (6));

} else {
var statearr_24050_24083 = state_24045__$1;
(statearr_24050_24083[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (15))){
var inst_24041 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
var statearr_24051_24084 = state_24045__$1;
(statearr_24051_24084[(2)] = inst_24041);

(statearr_24051_24084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (13))){
var inst_24034 = cljs.core.async.close_BANG_.call(null,out);
var state_24045__$1 = state_24045;
var statearr_24052_24085 = state_24045__$1;
(statearr_24052_24085[(2)] = inst_24034);

(statearr_24052_24085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (6))){
var state_24045__$1 = state_24045;
var statearr_24053_24086 = state_24045__$1;
(statearr_24053_24086[(2)] = null);

(statearr_24053_24086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (3))){
var inst_24043 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24045__$1,inst_24043);
} else {
if((state_val_24046 === (12))){
var inst_24031 = (state_24045[(8)]);
var inst_24031__$1 = (state_24045[(2)]);
var inst_24032 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24031__$1);
var state_24045__$1 = (function (){var statearr_24054 = state_24045;
(statearr_24054[(8)] = inst_24031__$1);

return statearr_24054;
})();
if(cljs.core.truth_(inst_24032)){
var statearr_24055_24087 = state_24045__$1;
(statearr_24055_24087[(1)] = (13));

} else {
var statearr_24056_24088 = state_24045__$1;
(statearr_24056_24088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (2))){
var inst_24008 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24009 = (0);
var state_24045__$1 = (function (){var statearr_24057 = state_24045;
(statearr_24057[(9)] = inst_24008);

(statearr_24057[(7)] = inst_24009);

return statearr_24057;
})();
var statearr_24058_24089 = state_24045__$1;
(statearr_24058_24089[(2)] = null);

(statearr_24058_24089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (11))){
var inst_24009 = (state_24045[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24045,(10),Object,null,(9));
var inst_24018 = chs__$1.call(null,inst_24009);
var inst_24019 = done.call(null,inst_24009);
var inst_24020 = cljs.core.async.take_BANG_.call(null,inst_24018,inst_24019);
var state_24045__$1 = state_24045;
var statearr_24059_24090 = state_24045__$1;
(statearr_24059_24090[(2)] = inst_24020);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24045__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (9))){
var inst_24009 = (state_24045[(7)]);
var inst_24022 = (state_24045[(2)]);
var inst_24023 = (inst_24009 + (1));
var inst_24009__$1 = inst_24023;
var state_24045__$1 = (function (){var statearr_24060 = state_24045;
(statearr_24060[(10)] = inst_24022);

(statearr_24060[(7)] = inst_24009__$1);

return statearr_24060;
})();
var statearr_24061_24091 = state_24045__$1;
(statearr_24061_24091[(2)] = null);

(statearr_24061_24091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (5))){
var inst_24029 = (state_24045[(2)]);
var state_24045__$1 = (function (){var statearr_24062 = state_24045;
(statearr_24062[(11)] = inst_24029);

return statearr_24062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24045__$1,(12),dchan);
} else {
if((state_val_24046 === (14))){
var inst_24031 = (state_24045[(8)]);
var inst_24036 = cljs.core.apply.call(null,f,inst_24031);
var state_24045__$1 = state_24045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24045__$1,(16),out,inst_24036);
} else {
if((state_val_24046 === (16))){
var inst_24038 = (state_24045[(2)]);
var state_24045__$1 = (function (){var statearr_24063 = state_24045;
(statearr_24063[(12)] = inst_24038);

return statearr_24063;
})();
var statearr_24064_24092 = state_24045__$1;
(statearr_24064_24092[(2)] = null);

(statearr_24064_24092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (10))){
var inst_24013 = (state_24045[(2)]);
var inst_24014 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24045__$1 = (function (){var statearr_24065 = state_24045;
(statearr_24065[(13)] = inst_24013);

return statearr_24065;
})();
var statearr_24066_24093 = state_24045__$1;
(statearr_24066_24093[(2)] = inst_24014);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24045__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24046 === (8))){
var inst_24027 = (state_24045[(2)]);
var state_24045__$1 = state_24045;
var statearr_24067_24094 = state_24045__$1;
(statearr_24067_24094[(2)] = inst_24027);

(statearr_24067_24094[(1)] = (5));


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
});})(c__22060__auto___24079,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21948__auto__,c__22060__auto___24079,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21949__auto__ = null;
var cljs$core$async$state_machine__21949__auto____0 = (function (){
var statearr_24071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24071[(0)] = cljs$core$async$state_machine__21949__auto__);

(statearr_24071[(1)] = (1));

return statearr_24071;
});
var cljs$core$async$state_machine__21949__auto____1 = (function (state_24045){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_24045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e24072){if((e24072 instanceof Object)){
var ex__21952__auto__ = e24072;
var statearr_24073_24095 = state_24045;
(statearr_24073_24095[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24096 = state_24045;
state_24045 = G__24096;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$state_machine__21949__auto__ = function(state_24045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21949__auto____1.call(this,state_24045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21949__auto____0;
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21949__auto____1;
return cljs$core$async$state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___24079,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22062__auto__ = (function (){var statearr_24074 = f__22061__auto__.call(null);
(statearr_24074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___24079);

return statearr_24074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___24079,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24098 = [];
var len__19525__auto___24154 = arguments.length;
var i__19526__auto___24155 = (0);
while(true){
if((i__19526__auto___24155 < len__19525__auto___24154)){
args24098.push((arguments[i__19526__auto___24155]));

var G__24156 = (i__19526__auto___24155 + (1));
i__19526__auto___24155 = G__24156;
continue;
} else {
}
break;
}

var G__24100 = args24098.length;
switch (G__24100) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24098.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22060__auto___24158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___24158,out){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___24158,out){
return (function (state_24130){
var state_val_24131 = (state_24130[(1)]);
if((state_val_24131 === (7))){
var inst_24110 = (state_24130[(7)]);
var inst_24109 = (state_24130[(8)]);
var inst_24109__$1 = (state_24130[(2)]);
var inst_24110__$1 = cljs.core.nth.call(null,inst_24109__$1,(0),null);
var inst_24111 = cljs.core.nth.call(null,inst_24109__$1,(1),null);
var inst_24112 = (inst_24110__$1 == null);
var state_24130__$1 = (function (){var statearr_24132 = state_24130;
(statearr_24132[(7)] = inst_24110__$1);

(statearr_24132[(8)] = inst_24109__$1);

(statearr_24132[(9)] = inst_24111);

return statearr_24132;
})();
if(cljs.core.truth_(inst_24112)){
var statearr_24133_24159 = state_24130__$1;
(statearr_24133_24159[(1)] = (8));

} else {
var statearr_24134_24160 = state_24130__$1;
(statearr_24134_24160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (1))){
var inst_24101 = cljs.core.vec.call(null,chs);
var inst_24102 = inst_24101;
var state_24130__$1 = (function (){var statearr_24135 = state_24130;
(statearr_24135[(10)] = inst_24102);

return statearr_24135;
})();
var statearr_24136_24161 = state_24130__$1;
(statearr_24136_24161[(2)] = null);

(statearr_24136_24161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (4))){
var inst_24102 = (state_24130[(10)]);
var state_24130__$1 = state_24130;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24130__$1,(7),inst_24102);
} else {
if((state_val_24131 === (6))){
var inst_24126 = (state_24130[(2)]);
var state_24130__$1 = state_24130;
var statearr_24137_24162 = state_24130__$1;
(statearr_24137_24162[(2)] = inst_24126);

(statearr_24137_24162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (3))){
var inst_24128 = (state_24130[(2)]);
var state_24130__$1 = state_24130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24130__$1,inst_24128);
} else {
if((state_val_24131 === (2))){
var inst_24102 = (state_24130[(10)]);
var inst_24104 = cljs.core.count.call(null,inst_24102);
var inst_24105 = (inst_24104 > (0));
var state_24130__$1 = state_24130;
if(cljs.core.truth_(inst_24105)){
var statearr_24139_24163 = state_24130__$1;
(statearr_24139_24163[(1)] = (4));

} else {
var statearr_24140_24164 = state_24130__$1;
(statearr_24140_24164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (11))){
var inst_24102 = (state_24130[(10)]);
var inst_24119 = (state_24130[(2)]);
var tmp24138 = inst_24102;
var inst_24102__$1 = tmp24138;
var state_24130__$1 = (function (){var statearr_24141 = state_24130;
(statearr_24141[(10)] = inst_24102__$1);

(statearr_24141[(11)] = inst_24119);

return statearr_24141;
})();
var statearr_24142_24165 = state_24130__$1;
(statearr_24142_24165[(2)] = null);

(statearr_24142_24165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (9))){
var inst_24110 = (state_24130[(7)]);
var state_24130__$1 = state_24130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24130__$1,(11),out,inst_24110);
} else {
if((state_val_24131 === (5))){
var inst_24124 = cljs.core.async.close_BANG_.call(null,out);
var state_24130__$1 = state_24130;
var statearr_24143_24166 = state_24130__$1;
(statearr_24143_24166[(2)] = inst_24124);

(statearr_24143_24166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (10))){
var inst_24122 = (state_24130[(2)]);
var state_24130__$1 = state_24130;
var statearr_24144_24167 = state_24130__$1;
(statearr_24144_24167[(2)] = inst_24122);

(statearr_24144_24167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (8))){
var inst_24110 = (state_24130[(7)]);
var inst_24109 = (state_24130[(8)]);
var inst_24102 = (state_24130[(10)]);
var inst_24111 = (state_24130[(9)]);
var inst_24114 = (function (){var cs = inst_24102;
var vec__24107 = inst_24109;
var v = inst_24110;
var c = inst_24111;
return ((function (cs,vec__24107,v,c,inst_24110,inst_24109,inst_24102,inst_24111,state_val_24131,c__22060__auto___24158,out){
return (function (p1__24097_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24097_SHARP_);
});
;})(cs,vec__24107,v,c,inst_24110,inst_24109,inst_24102,inst_24111,state_val_24131,c__22060__auto___24158,out))
})();
var inst_24115 = cljs.core.filterv.call(null,inst_24114,inst_24102);
var inst_24102__$1 = inst_24115;
var state_24130__$1 = (function (){var statearr_24145 = state_24130;
(statearr_24145[(10)] = inst_24102__$1);

return statearr_24145;
})();
var statearr_24146_24168 = state_24130__$1;
(statearr_24146_24168[(2)] = null);

(statearr_24146_24168[(1)] = (2));


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
});})(c__22060__auto___24158,out))
;
return ((function (switch__21948__auto__,c__22060__auto___24158,out){
return (function() {
var cljs$core$async$state_machine__21949__auto__ = null;
var cljs$core$async$state_machine__21949__auto____0 = (function (){
var statearr_24150 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24150[(0)] = cljs$core$async$state_machine__21949__auto__);

(statearr_24150[(1)] = (1));

return statearr_24150;
});
var cljs$core$async$state_machine__21949__auto____1 = (function (state_24130){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_24130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e24151){if((e24151 instanceof Object)){
var ex__21952__auto__ = e24151;
var statearr_24152_24169 = state_24130;
(statearr_24152_24169[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24170 = state_24130;
state_24130 = G__24170;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$state_machine__21949__auto__ = function(state_24130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21949__auto____1.call(this,state_24130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21949__auto____0;
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21949__auto____1;
return cljs$core$async$state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___24158,out))
})();
var state__22062__auto__ = (function (){var statearr_24153 = f__22061__auto__.call(null);
(statearr_24153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___24158);

return statearr_24153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___24158,out))
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
var args24171 = [];
var len__19525__auto___24220 = arguments.length;
var i__19526__auto___24221 = (0);
while(true){
if((i__19526__auto___24221 < len__19525__auto___24220)){
args24171.push((arguments[i__19526__auto___24221]));

var G__24222 = (i__19526__auto___24221 + (1));
i__19526__auto___24221 = G__24222;
continue;
} else {
}
break;
}

var G__24173 = args24171.length;
switch (G__24173) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24171.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22060__auto___24224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___24224,out){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___24224,out){
return (function (state_24197){
var state_val_24198 = (state_24197[(1)]);
if((state_val_24198 === (7))){
var inst_24179 = (state_24197[(7)]);
var inst_24179__$1 = (state_24197[(2)]);
var inst_24180 = (inst_24179__$1 == null);
var inst_24181 = cljs.core.not.call(null,inst_24180);
var state_24197__$1 = (function (){var statearr_24199 = state_24197;
(statearr_24199[(7)] = inst_24179__$1);

return statearr_24199;
})();
if(inst_24181){
var statearr_24200_24225 = state_24197__$1;
(statearr_24200_24225[(1)] = (8));

} else {
var statearr_24201_24226 = state_24197__$1;
(statearr_24201_24226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (1))){
var inst_24174 = (0);
var state_24197__$1 = (function (){var statearr_24202 = state_24197;
(statearr_24202[(8)] = inst_24174);

return statearr_24202;
})();
var statearr_24203_24227 = state_24197__$1;
(statearr_24203_24227[(2)] = null);

(statearr_24203_24227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (4))){
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24197__$1,(7),ch);
} else {
if((state_val_24198 === (6))){
var inst_24192 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24204_24228 = state_24197__$1;
(statearr_24204_24228[(2)] = inst_24192);

(statearr_24204_24228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (3))){
var inst_24194 = (state_24197[(2)]);
var inst_24195 = cljs.core.async.close_BANG_.call(null,out);
var state_24197__$1 = (function (){var statearr_24205 = state_24197;
(statearr_24205[(9)] = inst_24194);

return statearr_24205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24197__$1,inst_24195);
} else {
if((state_val_24198 === (2))){
var inst_24174 = (state_24197[(8)]);
var inst_24176 = (inst_24174 < n);
var state_24197__$1 = state_24197;
if(cljs.core.truth_(inst_24176)){
var statearr_24206_24229 = state_24197__$1;
(statearr_24206_24229[(1)] = (4));

} else {
var statearr_24207_24230 = state_24197__$1;
(statearr_24207_24230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (11))){
var inst_24174 = (state_24197[(8)]);
var inst_24184 = (state_24197[(2)]);
var inst_24185 = (inst_24174 + (1));
var inst_24174__$1 = inst_24185;
var state_24197__$1 = (function (){var statearr_24208 = state_24197;
(statearr_24208[(8)] = inst_24174__$1);

(statearr_24208[(10)] = inst_24184);

return statearr_24208;
})();
var statearr_24209_24231 = state_24197__$1;
(statearr_24209_24231[(2)] = null);

(statearr_24209_24231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (9))){
var state_24197__$1 = state_24197;
var statearr_24210_24232 = state_24197__$1;
(statearr_24210_24232[(2)] = null);

(statearr_24210_24232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (5))){
var state_24197__$1 = state_24197;
var statearr_24211_24233 = state_24197__$1;
(statearr_24211_24233[(2)] = null);

(statearr_24211_24233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (10))){
var inst_24189 = (state_24197[(2)]);
var state_24197__$1 = state_24197;
var statearr_24212_24234 = state_24197__$1;
(statearr_24212_24234[(2)] = inst_24189);

(statearr_24212_24234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24198 === (8))){
var inst_24179 = (state_24197[(7)]);
var state_24197__$1 = state_24197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24197__$1,(11),out,inst_24179);
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
});})(c__22060__auto___24224,out))
;
return ((function (switch__21948__auto__,c__22060__auto___24224,out){
return (function() {
var cljs$core$async$state_machine__21949__auto__ = null;
var cljs$core$async$state_machine__21949__auto____0 = (function (){
var statearr_24216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24216[(0)] = cljs$core$async$state_machine__21949__auto__);

(statearr_24216[(1)] = (1));

return statearr_24216;
});
var cljs$core$async$state_machine__21949__auto____1 = (function (state_24197){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_24197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e24217){if((e24217 instanceof Object)){
var ex__21952__auto__ = e24217;
var statearr_24218_24235 = state_24197;
(statearr_24218_24235[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24236 = state_24197;
state_24197 = G__24236;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$state_machine__21949__auto__ = function(state_24197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21949__auto____1.call(this,state_24197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21949__auto____0;
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21949__auto____1;
return cljs$core$async$state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___24224,out))
})();
var state__22062__auto__ = (function (){var statearr_24219 = f__22061__auto__.call(null);
(statearr_24219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___24224);

return statearr_24219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___24224,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24244 = (function (map_LT_,f,ch,meta24245){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24245 = meta24245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24246,meta24245__$1){
var self__ = this;
var _24246__$1 = this;
return (new cljs.core.async.t_cljs$core$async24244(self__.map_LT_,self__.f,self__.ch,meta24245__$1));
});

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24246){
var self__ = this;
var _24246__$1 = this;
return self__.meta24245;
});

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24247 = (function (map_LT_,f,ch,meta24245,_,fn1,meta24248){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24245 = meta24245;
this._ = _;
this.fn1 = fn1;
this.meta24248 = meta24248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24249,meta24248__$1){
var self__ = this;
var _24249__$1 = this;
return (new cljs.core.async.t_cljs$core$async24247(self__.map_LT_,self__.f,self__.ch,self__.meta24245,self__._,self__.fn1,meta24248__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24249){
var self__ = this;
var _24249__$1 = this;
return self__.meta24248;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24247.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24247.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24247.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24247.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24237_SHARP_){
return f1.call(null,(((p1__24237_SHARP_ == null))?null:self__.f.call(null,p1__24237_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24247.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24245","meta24245",2039675445,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24244","cljs.core.async/t_cljs$core$async24244",273407371,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24248","meta24248",-805896432,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24247";

cljs.core.async.t_cljs$core$async24247.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cljs.core.async/t_cljs$core$async24247");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24247 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24247(map_LT___$1,f__$1,ch__$1,meta24245__$1,___$2,fn1__$1,meta24248){
return (new cljs.core.async.t_cljs$core$async24247(map_LT___$1,f__$1,ch__$1,meta24245__$1,___$2,fn1__$1,meta24248));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24247(self__.map_LT_,self__.f,self__.ch,self__.meta24245,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18443__auto__ = ret;
if(cljs.core.truth_(and__18443__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18443__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24245","meta24245",2039675445,null)], null);
});

cljs.core.async.t_cljs$core$async24244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24244";

cljs.core.async.t_cljs$core$async24244.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cljs.core.async/t_cljs$core$async24244");
});

cljs.core.async.__GT_t_cljs$core$async24244 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24244(map_LT___$1,f__$1,ch__$1,meta24245){
return (new cljs.core.async.t_cljs$core$async24244(map_LT___$1,f__$1,ch__$1,meta24245));
});

}

return (new cljs.core.async.t_cljs$core$async24244(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24253 = (function (map_GT_,f,ch,meta24254){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24254 = meta24254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24255,meta24254__$1){
var self__ = this;
var _24255__$1 = this;
return (new cljs.core.async.t_cljs$core$async24253(self__.map_GT_,self__.f,self__.ch,meta24254__$1));
});

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24255){
var self__ = this;
var _24255__$1 = this;
return self__.meta24254;
});

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24254","meta24254",1948062666,null)], null);
});

cljs.core.async.t_cljs$core$async24253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24253";

cljs.core.async.t_cljs$core$async24253.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cljs.core.async/t_cljs$core$async24253");
});

cljs.core.async.__GT_t_cljs$core$async24253 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24253(map_GT___$1,f__$1,ch__$1,meta24254){
return (new cljs.core.async.t_cljs$core$async24253(map_GT___$1,f__$1,ch__$1,meta24254));
});

}

return (new cljs.core.async.t_cljs$core$async24253(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24259 = (function (filter_GT_,p,ch,meta24260){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24260 = meta24260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24261,meta24260__$1){
var self__ = this;
var _24261__$1 = this;
return (new cljs.core.async.t_cljs$core$async24259(self__.filter_GT_,self__.p,self__.ch,meta24260__$1));
});

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24261){
var self__ = this;
var _24261__$1 = this;
return self__.meta24260;
});

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24260","meta24260",864504816,null)], null);
});

cljs.core.async.t_cljs$core$async24259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24259";

cljs.core.async.t_cljs$core$async24259.cljs$lang$ctorPrWriter = (function (this__19061__auto__,writer__19062__auto__,opt__19063__auto__){
return cljs.core._write.call(null,writer__19062__auto__,"cljs.core.async/t_cljs$core$async24259");
});

cljs.core.async.__GT_t_cljs$core$async24259 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24259(filter_GT___$1,p__$1,ch__$1,meta24260){
return (new cljs.core.async.t_cljs$core$async24259(filter_GT___$1,p__$1,ch__$1,meta24260));
});

}

return (new cljs.core.async.t_cljs$core$async24259(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24262 = [];
var len__19525__auto___24306 = arguments.length;
var i__19526__auto___24307 = (0);
while(true){
if((i__19526__auto___24307 < len__19525__auto___24306)){
args24262.push((arguments[i__19526__auto___24307]));

var G__24308 = (i__19526__auto___24307 + (1));
i__19526__auto___24307 = G__24308;
continue;
} else {
}
break;
}

var G__24264 = args24262.length;
switch (G__24264) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24262.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22060__auto___24310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___24310,out){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___24310,out){
return (function (state_24285){
var state_val_24286 = (state_24285[(1)]);
if((state_val_24286 === (7))){
var inst_24281 = (state_24285[(2)]);
var state_24285__$1 = state_24285;
var statearr_24287_24311 = state_24285__$1;
(statearr_24287_24311[(2)] = inst_24281);

(statearr_24287_24311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (1))){
var state_24285__$1 = state_24285;
var statearr_24288_24312 = state_24285__$1;
(statearr_24288_24312[(2)] = null);

(statearr_24288_24312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (4))){
var inst_24267 = (state_24285[(7)]);
var inst_24267__$1 = (state_24285[(2)]);
var inst_24268 = (inst_24267__$1 == null);
var state_24285__$1 = (function (){var statearr_24289 = state_24285;
(statearr_24289[(7)] = inst_24267__$1);

return statearr_24289;
})();
if(cljs.core.truth_(inst_24268)){
var statearr_24290_24313 = state_24285__$1;
(statearr_24290_24313[(1)] = (5));

} else {
var statearr_24291_24314 = state_24285__$1;
(statearr_24291_24314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (6))){
var inst_24267 = (state_24285[(7)]);
var inst_24272 = p.call(null,inst_24267);
var state_24285__$1 = state_24285;
if(cljs.core.truth_(inst_24272)){
var statearr_24292_24315 = state_24285__$1;
(statearr_24292_24315[(1)] = (8));

} else {
var statearr_24293_24316 = state_24285__$1;
(statearr_24293_24316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (3))){
var inst_24283 = (state_24285[(2)]);
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24285__$1,inst_24283);
} else {
if((state_val_24286 === (2))){
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24285__$1,(4),ch);
} else {
if((state_val_24286 === (11))){
var inst_24275 = (state_24285[(2)]);
var state_24285__$1 = state_24285;
var statearr_24294_24317 = state_24285__$1;
(statearr_24294_24317[(2)] = inst_24275);

(statearr_24294_24317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (9))){
var state_24285__$1 = state_24285;
var statearr_24295_24318 = state_24285__$1;
(statearr_24295_24318[(2)] = null);

(statearr_24295_24318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (5))){
var inst_24270 = cljs.core.async.close_BANG_.call(null,out);
var state_24285__$1 = state_24285;
var statearr_24296_24319 = state_24285__$1;
(statearr_24296_24319[(2)] = inst_24270);

(statearr_24296_24319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (10))){
var inst_24278 = (state_24285[(2)]);
var state_24285__$1 = (function (){var statearr_24297 = state_24285;
(statearr_24297[(8)] = inst_24278);

return statearr_24297;
})();
var statearr_24298_24320 = state_24285__$1;
(statearr_24298_24320[(2)] = null);

(statearr_24298_24320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (8))){
var inst_24267 = (state_24285[(7)]);
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24285__$1,(11),out,inst_24267);
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
});})(c__22060__auto___24310,out))
;
return ((function (switch__21948__auto__,c__22060__auto___24310,out){
return (function() {
var cljs$core$async$state_machine__21949__auto__ = null;
var cljs$core$async$state_machine__21949__auto____0 = (function (){
var statearr_24302 = [null,null,null,null,null,null,null,null,null];
(statearr_24302[(0)] = cljs$core$async$state_machine__21949__auto__);

(statearr_24302[(1)] = (1));

return statearr_24302;
});
var cljs$core$async$state_machine__21949__auto____1 = (function (state_24285){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_24285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e24303){if((e24303 instanceof Object)){
var ex__21952__auto__ = e24303;
var statearr_24304_24321 = state_24285;
(statearr_24304_24321[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24322 = state_24285;
state_24285 = G__24322;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$state_machine__21949__auto__ = function(state_24285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21949__auto____1.call(this,state_24285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21949__auto____0;
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21949__auto____1;
return cljs$core$async$state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___24310,out))
})();
var state__22062__auto__ = (function (){var statearr_24305 = f__22061__auto__.call(null);
(statearr_24305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___24310);

return statearr_24305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___24310,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24323 = [];
var len__19525__auto___24326 = arguments.length;
var i__19526__auto___24327 = (0);
while(true){
if((i__19526__auto___24327 < len__19525__auto___24326)){
args24323.push((arguments[i__19526__auto___24327]));

var G__24328 = (i__19526__auto___24327 + (1));
i__19526__auto___24327 = G__24328;
continue;
} else {
}
break;
}

var G__24325 = args24323.length;
switch (G__24325) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24323.length)].join('')));

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
var c__22060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto__){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto__){
return (function (state_24495){
var state_val_24496 = (state_24495[(1)]);
if((state_val_24496 === (7))){
var inst_24491 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
var statearr_24497_24538 = state_24495__$1;
(statearr_24497_24538[(2)] = inst_24491);

(statearr_24497_24538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (20))){
var inst_24461 = (state_24495[(7)]);
var inst_24472 = (state_24495[(2)]);
var inst_24473 = cljs.core.next.call(null,inst_24461);
var inst_24447 = inst_24473;
var inst_24448 = null;
var inst_24449 = (0);
var inst_24450 = (0);
var state_24495__$1 = (function (){var statearr_24498 = state_24495;
(statearr_24498[(8)] = inst_24472);

(statearr_24498[(9)] = inst_24449);

(statearr_24498[(10)] = inst_24448);

(statearr_24498[(11)] = inst_24447);

(statearr_24498[(12)] = inst_24450);

return statearr_24498;
})();
var statearr_24499_24539 = state_24495__$1;
(statearr_24499_24539[(2)] = null);

(statearr_24499_24539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (1))){
var state_24495__$1 = state_24495;
var statearr_24500_24540 = state_24495__$1;
(statearr_24500_24540[(2)] = null);

(statearr_24500_24540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (4))){
var inst_24436 = (state_24495[(13)]);
var inst_24436__$1 = (state_24495[(2)]);
var inst_24437 = (inst_24436__$1 == null);
var state_24495__$1 = (function (){var statearr_24501 = state_24495;
(statearr_24501[(13)] = inst_24436__$1);

return statearr_24501;
})();
if(cljs.core.truth_(inst_24437)){
var statearr_24502_24541 = state_24495__$1;
(statearr_24502_24541[(1)] = (5));

} else {
var statearr_24503_24542 = state_24495__$1;
(statearr_24503_24542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (15))){
var state_24495__$1 = state_24495;
var statearr_24507_24543 = state_24495__$1;
(statearr_24507_24543[(2)] = null);

(statearr_24507_24543[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (21))){
var state_24495__$1 = state_24495;
var statearr_24508_24544 = state_24495__$1;
(statearr_24508_24544[(2)] = null);

(statearr_24508_24544[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (13))){
var inst_24449 = (state_24495[(9)]);
var inst_24448 = (state_24495[(10)]);
var inst_24447 = (state_24495[(11)]);
var inst_24450 = (state_24495[(12)]);
var inst_24457 = (state_24495[(2)]);
var inst_24458 = (inst_24450 + (1));
var tmp24504 = inst_24449;
var tmp24505 = inst_24448;
var tmp24506 = inst_24447;
var inst_24447__$1 = tmp24506;
var inst_24448__$1 = tmp24505;
var inst_24449__$1 = tmp24504;
var inst_24450__$1 = inst_24458;
var state_24495__$1 = (function (){var statearr_24509 = state_24495;
(statearr_24509[(9)] = inst_24449__$1);

(statearr_24509[(14)] = inst_24457);

(statearr_24509[(10)] = inst_24448__$1);

(statearr_24509[(11)] = inst_24447__$1);

(statearr_24509[(12)] = inst_24450__$1);

return statearr_24509;
})();
var statearr_24510_24545 = state_24495__$1;
(statearr_24510_24545[(2)] = null);

(statearr_24510_24545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (22))){
var state_24495__$1 = state_24495;
var statearr_24511_24546 = state_24495__$1;
(statearr_24511_24546[(2)] = null);

(statearr_24511_24546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (6))){
var inst_24436 = (state_24495[(13)]);
var inst_24445 = f.call(null,inst_24436);
var inst_24446 = cljs.core.seq.call(null,inst_24445);
var inst_24447 = inst_24446;
var inst_24448 = null;
var inst_24449 = (0);
var inst_24450 = (0);
var state_24495__$1 = (function (){var statearr_24512 = state_24495;
(statearr_24512[(9)] = inst_24449);

(statearr_24512[(10)] = inst_24448);

(statearr_24512[(11)] = inst_24447);

(statearr_24512[(12)] = inst_24450);

return statearr_24512;
})();
var statearr_24513_24547 = state_24495__$1;
(statearr_24513_24547[(2)] = null);

(statearr_24513_24547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (17))){
var inst_24461 = (state_24495[(7)]);
var inst_24465 = cljs.core.chunk_first.call(null,inst_24461);
var inst_24466 = cljs.core.chunk_rest.call(null,inst_24461);
var inst_24467 = cljs.core.count.call(null,inst_24465);
var inst_24447 = inst_24466;
var inst_24448 = inst_24465;
var inst_24449 = inst_24467;
var inst_24450 = (0);
var state_24495__$1 = (function (){var statearr_24514 = state_24495;
(statearr_24514[(9)] = inst_24449);

(statearr_24514[(10)] = inst_24448);

(statearr_24514[(11)] = inst_24447);

(statearr_24514[(12)] = inst_24450);

return statearr_24514;
})();
var statearr_24515_24548 = state_24495__$1;
(statearr_24515_24548[(2)] = null);

(statearr_24515_24548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (3))){
var inst_24493 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24495__$1,inst_24493);
} else {
if((state_val_24496 === (12))){
var inst_24481 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
var statearr_24516_24549 = state_24495__$1;
(statearr_24516_24549[(2)] = inst_24481);

(statearr_24516_24549[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (2))){
var state_24495__$1 = state_24495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24495__$1,(4),in$);
} else {
if((state_val_24496 === (23))){
var inst_24489 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
var statearr_24517_24550 = state_24495__$1;
(statearr_24517_24550[(2)] = inst_24489);

(statearr_24517_24550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (19))){
var inst_24476 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
var statearr_24518_24551 = state_24495__$1;
(statearr_24518_24551[(2)] = inst_24476);

(statearr_24518_24551[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (11))){
var inst_24447 = (state_24495[(11)]);
var inst_24461 = (state_24495[(7)]);
var inst_24461__$1 = cljs.core.seq.call(null,inst_24447);
var state_24495__$1 = (function (){var statearr_24519 = state_24495;
(statearr_24519[(7)] = inst_24461__$1);

return statearr_24519;
})();
if(inst_24461__$1){
var statearr_24520_24552 = state_24495__$1;
(statearr_24520_24552[(1)] = (14));

} else {
var statearr_24521_24553 = state_24495__$1;
(statearr_24521_24553[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (9))){
var inst_24483 = (state_24495[(2)]);
var inst_24484 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24495__$1 = (function (){var statearr_24522 = state_24495;
(statearr_24522[(15)] = inst_24483);

return statearr_24522;
})();
if(cljs.core.truth_(inst_24484)){
var statearr_24523_24554 = state_24495__$1;
(statearr_24523_24554[(1)] = (21));

} else {
var statearr_24524_24555 = state_24495__$1;
(statearr_24524_24555[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (5))){
var inst_24439 = cljs.core.async.close_BANG_.call(null,out);
var state_24495__$1 = state_24495;
var statearr_24525_24556 = state_24495__$1;
(statearr_24525_24556[(2)] = inst_24439);

(statearr_24525_24556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (14))){
var inst_24461 = (state_24495[(7)]);
var inst_24463 = cljs.core.chunked_seq_QMARK_.call(null,inst_24461);
var state_24495__$1 = state_24495;
if(inst_24463){
var statearr_24526_24557 = state_24495__$1;
(statearr_24526_24557[(1)] = (17));

} else {
var statearr_24527_24558 = state_24495__$1;
(statearr_24527_24558[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (16))){
var inst_24479 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
var statearr_24528_24559 = state_24495__$1;
(statearr_24528_24559[(2)] = inst_24479);

(statearr_24528_24559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (10))){
var inst_24448 = (state_24495[(10)]);
var inst_24450 = (state_24495[(12)]);
var inst_24455 = cljs.core._nth.call(null,inst_24448,inst_24450);
var state_24495__$1 = state_24495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24495__$1,(13),out,inst_24455);
} else {
if((state_val_24496 === (18))){
var inst_24461 = (state_24495[(7)]);
var inst_24470 = cljs.core.first.call(null,inst_24461);
var state_24495__$1 = state_24495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24495__$1,(20),out,inst_24470);
} else {
if((state_val_24496 === (8))){
var inst_24449 = (state_24495[(9)]);
var inst_24450 = (state_24495[(12)]);
var inst_24452 = (inst_24450 < inst_24449);
var inst_24453 = inst_24452;
var state_24495__$1 = state_24495;
if(cljs.core.truth_(inst_24453)){
var statearr_24529_24560 = state_24495__$1;
(statearr_24529_24560[(1)] = (10));

} else {
var statearr_24530_24561 = state_24495__$1;
(statearr_24530_24561[(1)] = (11));

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
});})(c__22060__auto__))
;
return ((function (switch__21948__auto__,c__22060__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21949__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21949__auto____0 = (function (){
var statearr_24534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24534[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21949__auto__);

(statearr_24534[(1)] = (1));

return statearr_24534;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21949__auto____1 = (function (state_24495){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_24495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e24535){if((e24535 instanceof Object)){
var ex__21952__auto__ = e24535;
var statearr_24536_24562 = state_24495;
(statearr_24536_24562[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24563 = state_24495;
state_24495 = G__24563;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21949__auto__ = function(state_24495){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21949__auto____1.call(this,state_24495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21949__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21949__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto__))
})();
var state__22062__auto__ = (function (){var statearr_24537 = f__22061__auto__.call(null);
(statearr_24537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto__);

return statearr_24537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto__))
);

return c__22060__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24564 = [];
var len__19525__auto___24567 = arguments.length;
var i__19526__auto___24568 = (0);
while(true){
if((i__19526__auto___24568 < len__19525__auto___24567)){
args24564.push((arguments[i__19526__auto___24568]));

var G__24569 = (i__19526__auto___24568 + (1));
i__19526__auto___24568 = G__24569;
continue;
} else {
}
break;
}

var G__24566 = args24564.length;
switch (G__24566) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24564.length)].join('')));

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
var args24571 = [];
var len__19525__auto___24574 = arguments.length;
var i__19526__auto___24575 = (0);
while(true){
if((i__19526__auto___24575 < len__19525__auto___24574)){
args24571.push((arguments[i__19526__auto___24575]));

var G__24576 = (i__19526__auto___24575 + (1));
i__19526__auto___24575 = G__24576;
continue;
} else {
}
break;
}

var G__24573 = args24571.length;
switch (G__24573) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24571.length)].join('')));

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
var args24578 = [];
var len__19525__auto___24629 = arguments.length;
var i__19526__auto___24630 = (0);
while(true){
if((i__19526__auto___24630 < len__19525__auto___24629)){
args24578.push((arguments[i__19526__auto___24630]));

var G__24631 = (i__19526__auto___24630 + (1));
i__19526__auto___24630 = G__24631;
continue;
} else {
}
break;
}

var G__24580 = args24578.length;
switch (G__24580) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24578.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22060__auto___24633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___24633,out){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___24633,out){
return (function (state_24604){
var state_val_24605 = (state_24604[(1)]);
if((state_val_24605 === (7))){
var inst_24599 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24606_24634 = state_24604__$1;
(statearr_24606_24634[(2)] = inst_24599);

(statearr_24606_24634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (1))){
var inst_24581 = null;
var state_24604__$1 = (function (){var statearr_24607 = state_24604;
(statearr_24607[(7)] = inst_24581);

return statearr_24607;
})();
var statearr_24608_24635 = state_24604__$1;
(statearr_24608_24635[(2)] = null);

(statearr_24608_24635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (4))){
var inst_24584 = (state_24604[(8)]);
var inst_24584__$1 = (state_24604[(2)]);
var inst_24585 = (inst_24584__$1 == null);
var inst_24586 = cljs.core.not.call(null,inst_24585);
var state_24604__$1 = (function (){var statearr_24609 = state_24604;
(statearr_24609[(8)] = inst_24584__$1);

return statearr_24609;
})();
if(inst_24586){
var statearr_24610_24636 = state_24604__$1;
(statearr_24610_24636[(1)] = (5));

} else {
var statearr_24611_24637 = state_24604__$1;
(statearr_24611_24637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (6))){
var state_24604__$1 = state_24604;
var statearr_24612_24638 = state_24604__$1;
(statearr_24612_24638[(2)] = null);

(statearr_24612_24638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (3))){
var inst_24601 = (state_24604[(2)]);
var inst_24602 = cljs.core.async.close_BANG_.call(null,out);
var state_24604__$1 = (function (){var statearr_24613 = state_24604;
(statearr_24613[(9)] = inst_24601);

return statearr_24613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24604__$1,inst_24602);
} else {
if((state_val_24605 === (2))){
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24604__$1,(4),ch);
} else {
if((state_val_24605 === (11))){
var inst_24584 = (state_24604[(8)]);
var inst_24593 = (state_24604[(2)]);
var inst_24581 = inst_24584;
var state_24604__$1 = (function (){var statearr_24614 = state_24604;
(statearr_24614[(7)] = inst_24581);

(statearr_24614[(10)] = inst_24593);

return statearr_24614;
})();
var statearr_24615_24639 = state_24604__$1;
(statearr_24615_24639[(2)] = null);

(statearr_24615_24639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (9))){
var inst_24584 = (state_24604[(8)]);
var state_24604__$1 = state_24604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24604__$1,(11),out,inst_24584);
} else {
if((state_val_24605 === (5))){
var inst_24581 = (state_24604[(7)]);
var inst_24584 = (state_24604[(8)]);
var inst_24588 = cljs.core._EQ_.call(null,inst_24584,inst_24581);
var state_24604__$1 = state_24604;
if(inst_24588){
var statearr_24617_24640 = state_24604__$1;
(statearr_24617_24640[(1)] = (8));

} else {
var statearr_24618_24641 = state_24604__$1;
(statearr_24618_24641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (10))){
var inst_24596 = (state_24604[(2)]);
var state_24604__$1 = state_24604;
var statearr_24619_24642 = state_24604__$1;
(statearr_24619_24642[(2)] = inst_24596);

(statearr_24619_24642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24605 === (8))){
var inst_24581 = (state_24604[(7)]);
var tmp24616 = inst_24581;
var inst_24581__$1 = tmp24616;
var state_24604__$1 = (function (){var statearr_24620 = state_24604;
(statearr_24620[(7)] = inst_24581__$1);

return statearr_24620;
})();
var statearr_24621_24643 = state_24604__$1;
(statearr_24621_24643[(2)] = null);

(statearr_24621_24643[(1)] = (2));


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
});})(c__22060__auto___24633,out))
;
return ((function (switch__21948__auto__,c__22060__auto___24633,out){
return (function() {
var cljs$core$async$state_machine__21949__auto__ = null;
var cljs$core$async$state_machine__21949__auto____0 = (function (){
var statearr_24625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24625[(0)] = cljs$core$async$state_machine__21949__auto__);

(statearr_24625[(1)] = (1));

return statearr_24625;
});
var cljs$core$async$state_machine__21949__auto____1 = (function (state_24604){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_24604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e24626){if((e24626 instanceof Object)){
var ex__21952__auto__ = e24626;
var statearr_24627_24644 = state_24604;
(statearr_24627_24644[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24645 = state_24604;
state_24604 = G__24645;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$state_machine__21949__auto__ = function(state_24604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21949__auto____1.call(this,state_24604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21949__auto____0;
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21949__auto____1;
return cljs$core$async$state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___24633,out))
})();
var state__22062__auto__ = (function (){var statearr_24628 = f__22061__auto__.call(null);
(statearr_24628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___24633);

return statearr_24628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___24633,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24646 = [];
var len__19525__auto___24716 = arguments.length;
var i__19526__auto___24717 = (0);
while(true){
if((i__19526__auto___24717 < len__19525__auto___24716)){
args24646.push((arguments[i__19526__auto___24717]));

var G__24718 = (i__19526__auto___24717 + (1));
i__19526__auto___24717 = G__24718;
continue;
} else {
}
break;
}

var G__24648 = args24646.length;
switch (G__24648) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24646.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22060__auto___24720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___24720,out){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___24720,out){
return (function (state_24686){
var state_val_24687 = (state_24686[(1)]);
if((state_val_24687 === (7))){
var inst_24682 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
var statearr_24688_24721 = state_24686__$1;
(statearr_24688_24721[(2)] = inst_24682);

(statearr_24688_24721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (1))){
var inst_24649 = (new Array(n));
var inst_24650 = inst_24649;
var inst_24651 = (0);
var state_24686__$1 = (function (){var statearr_24689 = state_24686;
(statearr_24689[(7)] = inst_24650);

(statearr_24689[(8)] = inst_24651);

return statearr_24689;
})();
var statearr_24690_24722 = state_24686__$1;
(statearr_24690_24722[(2)] = null);

(statearr_24690_24722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (4))){
var inst_24654 = (state_24686[(9)]);
var inst_24654__$1 = (state_24686[(2)]);
var inst_24655 = (inst_24654__$1 == null);
var inst_24656 = cljs.core.not.call(null,inst_24655);
var state_24686__$1 = (function (){var statearr_24691 = state_24686;
(statearr_24691[(9)] = inst_24654__$1);

return statearr_24691;
})();
if(inst_24656){
var statearr_24692_24723 = state_24686__$1;
(statearr_24692_24723[(1)] = (5));

} else {
var statearr_24693_24724 = state_24686__$1;
(statearr_24693_24724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (15))){
var inst_24676 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
var statearr_24694_24725 = state_24686__$1;
(statearr_24694_24725[(2)] = inst_24676);

(statearr_24694_24725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (13))){
var state_24686__$1 = state_24686;
var statearr_24695_24726 = state_24686__$1;
(statearr_24695_24726[(2)] = null);

(statearr_24695_24726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (6))){
var inst_24651 = (state_24686[(8)]);
var inst_24672 = (inst_24651 > (0));
var state_24686__$1 = state_24686;
if(cljs.core.truth_(inst_24672)){
var statearr_24696_24727 = state_24686__$1;
(statearr_24696_24727[(1)] = (12));

} else {
var statearr_24697_24728 = state_24686__$1;
(statearr_24697_24728[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (3))){
var inst_24684 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24686__$1,inst_24684);
} else {
if((state_val_24687 === (12))){
var inst_24650 = (state_24686[(7)]);
var inst_24674 = cljs.core.vec.call(null,inst_24650);
var state_24686__$1 = state_24686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24686__$1,(15),out,inst_24674);
} else {
if((state_val_24687 === (2))){
var state_24686__$1 = state_24686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24686__$1,(4),ch);
} else {
if((state_val_24687 === (11))){
var inst_24666 = (state_24686[(2)]);
var inst_24667 = (new Array(n));
var inst_24650 = inst_24667;
var inst_24651 = (0);
var state_24686__$1 = (function (){var statearr_24698 = state_24686;
(statearr_24698[(7)] = inst_24650);

(statearr_24698[(8)] = inst_24651);

(statearr_24698[(10)] = inst_24666);

return statearr_24698;
})();
var statearr_24699_24729 = state_24686__$1;
(statearr_24699_24729[(2)] = null);

(statearr_24699_24729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (9))){
var inst_24650 = (state_24686[(7)]);
var inst_24664 = cljs.core.vec.call(null,inst_24650);
var state_24686__$1 = state_24686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24686__$1,(11),out,inst_24664);
} else {
if((state_val_24687 === (5))){
var inst_24659 = (state_24686[(11)]);
var inst_24650 = (state_24686[(7)]);
var inst_24654 = (state_24686[(9)]);
var inst_24651 = (state_24686[(8)]);
var inst_24658 = (inst_24650[inst_24651] = inst_24654);
var inst_24659__$1 = (inst_24651 + (1));
var inst_24660 = (inst_24659__$1 < n);
var state_24686__$1 = (function (){var statearr_24700 = state_24686;
(statearr_24700[(11)] = inst_24659__$1);

(statearr_24700[(12)] = inst_24658);

return statearr_24700;
})();
if(cljs.core.truth_(inst_24660)){
var statearr_24701_24730 = state_24686__$1;
(statearr_24701_24730[(1)] = (8));

} else {
var statearr_24702_24731 = state_24686__$1;
(statearr_24702_24731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (14))){
var inst_24679 = (state_24686[(2)]);
var inst_24680 = cljs.core.async.close_BANG_.call(null,out);
var state_24686__$1 = (function (){var statearr_24704 = state_24686;
(statearr_24704[(13)] = inst_24679);

return statearr_24704;
})();
var statearr_24705_24732 = state_24686__$1;
(statearr_24705_24732[(2)] = inst_24680);

(statearr_24705_24732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (10))){
var inst_24670 = (state_24686[(2)]);
var state_24686__$1 = state_24686;
var statearr_24706_24733 = state_24686__$1;
(statearr_24706_24733[(2)] = inst_24670);

(statearr_24706_24733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24687 === (8))){
var inst_24659 = (state_24686[(11)]);
var inst_24650 = (state_24686[(7)]);
var tmp24703 = inst_24650;
var inst_24650__$1 = tmp24703;
var inst_24651 = inst_24659;
var state_24686__$1 = (function (){var statearr_24707 = state_24686;
(statearr_24707[(7)] = inst_24650__$1);

(statearr_24707[(8)] = inst_24651);

return statearr_24707;
})();
var statearr_24708_24734 = state_24686__$1;
(statearr_24708_24734[(2)] = null);

(statearr_24708_24734[(1)] = (2));


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
});})(c__22060__auto___24720,out))
;
return ((function (switch__21948__auto__,c__22060__auto___24720,out){
return (function() {
var cljs$core$async$state_machine__21949__auto__ = null;
var cljs$core$async$state_machine__21949__auto____0 = (function (){
var statearr_24712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24712[(0)] = cljs$core$async$state_machine__21949__auto__);

(statearr_24712[(1)] = (1));

return statearr_24712;
});
var cljs$core$async$state_machine__21949__auto____1 = (function (state_24686){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_24686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e24713){if((e24713 instanceof Object)){
var ex__21952__auto__ = e24713;
var statearr_24714_24735 = state_24686;
(statearr_24714_24735[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24736 = state_24686;
state_24686 = G__24736;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$state_machine__21949__auto__ = function(state_24686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21949__auto____1.call(this,state_24686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21949__auto____0;
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21949__auto____1;
return cljs$core$async$state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___24720,out))
})();
var state__22062__auto__ = (function (){var statearr_24715 = f__22061__auto__.call(null);
(statearr_24715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___24720);

return statearr_24715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___24720,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24737 = [];
var len__19525__auto___24811 = arguments.length;
var i__19526__auto___24812 = (0);
while(true){
if((i__19526__auto___24812 < len__19525__auto___24811)){
args24737.push((arguments[i__19526__auto___24812]));

var G__24813 = (i__19526__auto___24812 + (1));
i__19526__auto___24812 = G__24813;
continue;
} else {
}
break;
}

var G__24739 = args24737.length;
switch (G__24739) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24737.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22060__auto___24815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22060__auto___24815,out){
return (function (){
var f__22061__auto__ = (function (){var switch__21948__auto__ = ((function (c__22060__auto___24815,out){
return (function (state_24781){
var state_val_24782 = (state_24781[(1)]);
if((state_val_24782 === (7))){
var inst_24777 = (state_24781[(2)]);
var state_24781__$1 = state_24781;
var statearr_24783_24816 = state_24781__$1;
(statearr_24783_24816[(2)] = inst_24777);

(statearr_24783_24816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (1))){
var inst_24740 = [];
var inst_24741 = inst_24740;
var inst_24742 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24781__$1 = (function (){var statearr_24784 = state_24781;
(statearr_24784[(7)] = inst_24741);

(statearr_24784[(8)] = inst_24742);

return statearr_24784;
})();
var statearr_24785_24817 = state_24781__$1;
(statearr_24785_24817[(2)] = null);

(statearr_24785_24817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (4))){
var inst_24745 = (state_24781[(9)]);
var inst_24745__$1 = (state_24781[(2)]);
var inst_24746 = (inst_24745__$1 == null);
var inst_24747 = cljs.core.not.call(null,inst_24746);
var state_24781__$1 = (function (){var statearr_24786 = state_24781;
(statearr_24786[(9)] = inst_24745__$1);

return statearr_24786;
})();
if(inst_24747){
var statearr_24787_24818 = state_24781__$1;
(statearr_24787_24818[(1)] = (5));

} else {
var statearr_24788_24819 = state_24781__$1;
(statearr_24788_24819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (15))){
var inst_24771 = (state_24781[(2)]);
var state_24781__$1 = state_24781;
var statearr_24789_24820 = state_24781__$1;
(statearr_24789_24820[(2)] = inst_24771);

(statearr_24789_24820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (13))){
var state_24781__$1 = state_24781;
var statearr_24790_24821 = state_24781__$1;
(statearr_24790_24821[(2)] = null);

(statearr_24790_24821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (6))){
var inst_24741 = (state_24781[(7)]);
var inst_24766 = inst_24741.length;
var inst_24767 = (inst_24766 > (0));
var state_24781__$1 = state_24781;
if(cljs.core.truth_(inst_24767)){
var statearr_24791_24822 = state_24781__$1;
(statearr_24791_24822[(1)] = (12));

} else {
var statearr_24792_24823 = state_24781__$1;
(statearr_24792_24823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (3))){
var inst_24779 = (state_24781[(2)]);
var state_24781__$1 = state_24781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24781__$1,inst_24779);
} else {
if((state_val_24782 === (12))){
var inst_24741 = (state_24781[(7)]);
var inst_24769 = cljs.core.vec.call(null,inst_24741);
var state_24781__$1 = state_24781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24781__$1,(15),out,inst_24769);
} else {
if((state_val_24782 === (2))){
var state_24781__$1 = state_24781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24781__$1,(4),ch);
} else {
if((state_val_24782 === (11))){
var inst_24745 = (state_24781[(9)]);
var inst_24749 = (state_24781[(10)]);
var inst_24759 = (state_24781[(2)]);
var inst_24760 = [];
var inst_24761 = inst_24760.push(inst_24745);
var inst_24741 = inst_24760;
var inst_24742 = inst_24749;
var state_24781__$1 = (function (){var statearr_24793 = state_24781;
(statearr_24793[(7)] = inst_24741);

(statearr_24793[(8)] = inst_24742);

(statearr_24793[(11)] = inst_24759);

(statearr_24793[(12)] = inst_24761);

return statearr_24793;
})();
var statearr_24794_24824 = state_24781__$1;
(statearr_24794_24824[(2)] = null);

(statearr_24794_24824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (9))){
var inst_24741 = (state_24781[(7)]);
var inst_24757 = cljs.core.vec.call(null,inst_24741);
var state_24781__$1 = state_24781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24781__$1,(11),out,inst_24757);
} else {
if((state_val_24782 === (5))){
var inst_24745 = (state_24781[(9)]);
var inst_24742 = (state_24781[(8)]);
var inst_24749 = (state_24781[(10)]);
var inst_24749__$1 = f.call(null,inst_24745);
var inst_24750 = cljs.core._EQ_.call(null,inst_24749__$1,inst_24742);
var inst_24751 = cljs.core.keyword_identical_QMARK_.call(null,inst_24742,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24752 = (inst_24750) || (inst_24751);
var state_24781__$1 = (function (){var statearr_24795 = state_24781;
(statearr_24795[(10)] = inst_24749__$1);

return statearr_24795;
})();
if(cljs.core.truth_(inst_24752)){
var statearr_24796_24825 = state_24781__$1;
(statearr_24796_24825[(1)] = (8));

} else {
var statearr_24797_24826 = state_24781__$1;
(statearr_24797_24826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (14))){
var inst_24774 = (state_24781[(2)]);
var inst_24775 = cljs.core.async.close_BANG_.call(null,out);
var state_24781__$1 = (function (){var statearr_24799 = state_24781;
(statearr_24799[(13)] = inst_24774);

return statearr_24799;
})();
var statearr_24800_24827 = state_24781__$1;
(statearr_24800_24827[(2)] = inst_24775);

(statearr_24800_24827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (10))){
var inst_24764 = (state_24781[(2)]);
var state_24781__$1 = state_24781;
var statearr_24801_24828 = state_24781__$1;
(statearr_24801_24828[(2)] = inst_24764);

(statearr_24801_24828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24782 === (8))){
var inst_24745 = (state_24781[(9)]);
var inst_24741 = (state_24781[(7)]);
var inst_24749 = (state_24781[(10)]);
var inst_24754 = inst_24741.push(inst_24745);
var tmp24798 = inst_24741;
var inst_24741__$1 = tmp24798;
var inst_24742 = inst_24749;
var state_24781__$1 = (function (){var statearr_24802 = state_24781;
(statearr_24802[(7)] = inst_24741__$1);

(statearr_24802[(8)] = inst_24742);

(statearr_24802[(14)] = inst_24754);

return statearr_24802;
})();
var statearr_24803_24829 = state_24781__$1;
(statearr_24803_24829[(2)] = null);

(statearr_24803_24829[(1)] = (2));


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
});})(c__22060__auto___24815,out))
;
return ((function (switch__21948__auto__,c__22060__auto___24815,out){
return (function() {
var cljs$core$async$state_machine__21949__auto__ = null;
var cljs$core$async$state_machine__21949__auto____0 = (function (){
var statearr_24807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24807[(0)] = cljs$core$async$state_machine__21949__auto__);

(statearr_24807[(1)] = (1));

return statearr_24807;
});
var cljs$core$async$state_machine__21949__auto____1 = (function (state_24781){
while(true){
var ret_value__21950__auto__ = (function (){try{while(true){
var result__21951__auto__ = switch__21948__auto__.call(null,state_24781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21951__auto__;
}
break;
}
}catch (e24808){if((e24808 instanceof Object)){
var ex__21952__auto__ = e24808;
var statearr_24809_24830 = state_24781;
(statearr_24809_24830[(5)] = ex__21952__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24831 = state_24781;
state_24781 = G__24831;
continue;
} else {
return ret_value__21950__auto__;
}
break;
}
});
cljs$core$async$state_machine__21949__auto__ = function(state_24781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21949__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21949__auto____1.call(this,state_24781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21949__auto____0;
cljs$core$async$state_machine__21949__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21949__auto____1;
return cljs$core$async$state_machine__21949__auto__;
})()
;})(switch__21948__auto__,c__22060__auto___24815,out))
})();
var state__22062__auto__ = (function (){var statearr_24810 = f__22061__auto__.call(null);
(statearr_24810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22060__auto___24815);

return statearr_24810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22062__auto__);
});})(c__22060__auto___24815,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1463495158650