// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24761 = cljs.core._EQ_;
var expr__24762 = (function (){var or__16805__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e24765){if((e24765 instanceof Error)){
var e = e24765;
return false;
} else {
throw e24765;

}
}})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24761.call(null,"true",expr__24762))){
return true;
} else {
if(cljs.core.truth_(pred__24761.call(null,"false",expr__24762))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24762)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24767){if((e24767 instanceof Error)){
var e = e24767;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e24767;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24769 = arguments.length;
var i__17864__auto___24770 = (0);
while(true){
if((i__17864__auto___24770 < len__17863__auto___24769)){
args__17870__auto__.push((arguments[i__17864__auto___24770]));

var G__24771 = (i__17864__auto___24770 + (1));
i__17864__auto___24770 = G__24771;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24768){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24768));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24772){
var map__24775 = p__24772;
var map__24775__$1 = ((((!((map__24775 == null)))?((((map__24775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24775):map__24775);
var message = cljs.core.get.call(null,map__24775__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24775__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16805__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16793__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16793__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16793__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18972__auto___24937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___24937,ch){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___24937,ch){
return (function (state_24906){
var state_val_24907 = (state_24906[(1)]);
if((state_val_24907 === (7))){
var inst_24902 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
var statearr_24908_24938 = state_24906__$1;
(statearr_24908_24938[(2)] = inst_24902);

(statearr_24908_24938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (1))){
var state_24906__$1 = state_24906;
var statearr_24909_24939 = state_24906__$1;
(statearr_24909_24939[(2)] = null);

(statearr_24909_24939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (4))){
var inst_24859 = (state_24906[(7)]);
var inst_24859__$1 = (state_24906[(2)]);
var state_24906__$1 = (function (){var statearr_24910 = state_24906;
(statearr_24910[(7)] = inst_24859__$1);

return statearr_24910;
})();
if(cljs.core.truth_(inst_24859__$1)){
var statearr_24911_24940 = state_24906__$1;
(statearr_24911_24940[(1)] = (5));

} else {
var statearr_24912_24941 = state_24906__$1;
(statearr_24912_24941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (15))){
var inst_24866 = (state_24906[(8)]);
var inst_24881 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24866);
var inst_24882 = cljs.core.first.call(null,inst_24881);
var inst_24883 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24882);
var inst_24884 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24883)].join('');
var inst_24885 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24884);
var state_24906__$1 = state_24906;
var statearr_24913_24942 = state_24906__$1;
(statearr_24913_24942[(2)] = inst_24885);

(statearr_24913_24942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (13))){
var inst_24890 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
var statearr_24914_24943 = state_24906__$1;
(statearr_24914_24943[(2)] = inst_24890);

(statearr_24914_24943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (6))){
var state_24906__$1 = state_24906;
var statearr_24915_24944 = state_24906__$1;
(statearr_24915_24944[(2)] = null);

(statearr_24915_24944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (17))){
var inst_24888 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
var statearr_24916_24945 = state_24906__$1;
(statearr_24916_24945[(2)] = inst_24888);

(statearr_24916_24945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (3))){
var inst_24904 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24906__$1,inst_24904);
} else {
if((state_val_24907 === (12))){
var inst_24865 = (state_24906[(9)]);
var inst_24879 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24865,opts);
var state_24906__$1 = state_24906;
if(cljs.core.truth_(inst_24879)){
var statearr_24917_24946 = state_24906__$1;
(statearr_24917_24946[(1)] = (15));

} else {
var statearr_24918_24947 = state_24906__$1;
(statearr_24918_24947[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (2))){
var state_24906__$1 = state_24906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24906__$1,(4),ch);
} else {
if((state_val_24907 === (11))){
var inst_24866 = (state_24906[(8)]);
var inst_24871 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24872 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24866);
var inst_24873 = cljs.core.async.timeout.call(null,(1000));
var inst_24874 = [inst_24872,inst_24873];
var inst_24875 = (new cljs.core.PersistentVector(null,2,(5),inst_24871,inst_24874,null));
var state_24906__$1 = state_24906;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24906__$1,(14),inst_24875);
} else {
if((state_val_24907 === (9))){
var inst_24866 = (state_24906[(8)]);
var inst_24892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24893 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24866);
var inst_24894 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24893);
var inst_24895 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24894)].join('');
var inst_24896 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24895);
var state_24906__$1 = (function (){var statearr_24919 = state_24906;
(statearr_24919[(10)] = inst_24892);

return statearr_24919;
})();
var statearr_24920_24948 = state_24906__$1;
(statearr_24920_24948[(2)] = inst_24896);

(statearr_24920_24948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (5))){
var inst_24859 = (state_24906[(7)]);
var inst_24861 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24862 = (new cljs.core.PersistentArrayMap(null,2,inst_24861,null));
var inst_24863 = (new cljs.core.PersistentHashSet(null,inst_24862,null));
var inst_24864 = figwheel.client.focus_msgs.call(null,inst_24863,inst_24859);
var inst_24865 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24864);
var inst_24866 = cljs.core.first.call(null,inst_24864);
var inst_24867 = figwheel.client.autoload_QMARK_.call(null);
var state_24906__$1 = (function (){var statearr_24921 = state_24906;
(statearr_24921[(8)] = inst_24866);

(statearr_24921[(9)] = inst_24865);

return statearr_24921;
})();
if(cljs.core.truth_(inst_24867)){
var statearr_24922_24949 = state_24906__$1;
(statearr_24922_24949[(1)] = (8));

} else {
var statearr_24923_24950 = state_24906__$1;
(statearr_24923_24950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (14))){
var inst_24877 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
var statearr_24924_24951 = state_24906__$1;
(statearr_24924_24951[(2)] = inst_24877);

(statearr_24924_24951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (16))){
var state_24906__$1 = state_24906;
var statearr_24925_24952 = state_24906__$1;
(statearr_24925_24952[(2)] = null);

(statearr_24925_24952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (10))){
var inst_24898 = (state_24906[(2)]);
var state_24906__$1 = (function (){var statearr_24926 = state_24906;
(statearr_24926[(11)] = inst_24898);

return statearr_24926;
})();
var statearr_24927_24953 = state_24906__$1;
(statearr_24927_24953[(2)] = null);

(statearr_24927_24953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (8))){
var inst_24865 = (state_24906[(9)]);
var inst_24869 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24865,opts);
var state_24906__$1 = state_24906;
if(cljs.core.truth_(inst_24869)){
var statearr_24928_24954 = state_24906__$1;
(statearr_24928_24954[(1)] = (11));

} else {
var statearr_24929_24955 = state_24906__$1;
(statearr_24929_24955[(1)] = (12));

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
});})(c__18972__auto___24937,ch))
;
return ((function (switch__18860__auto__,c__18972__auto___24937,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_24933 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24933[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__);

(statearr_24933[(1)] = (1));

return statearr_24933;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1 = (function (state_24906){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_24906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e24934){if((e24934 instanceof Object)){
var ex__18864__auto__ = e24934;
var statearr_24935_24956 = state_24906;
(statearr_24935_24956[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24957 = state_24906;
state_24906 = G__24957;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__ = function(state_24906){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1.call(this,state_24906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___24937,ch))
})();
var state__18974__auto__ = (function (){var statearr_24936 = f__18973__auto__.call(null);
(statearr_24936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___24937);

return statearr_24936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___24937,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24958_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24958_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24965 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24965){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24963 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24964 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24964;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24963;
}}catch (e24962){if((e24962 instanceof Error)){
var e = e24962;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24965], null));
} else {
var e = e24962;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24965))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24966){
var map__24973 = p__24966;
var map__24973__$1 = ((((!((map__24973 == null)))?((((map__24973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24973):map__24973);
var opts = map__24973__$1;
var build_id = cljs.core.get.call(null,map__24973__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24973,map__24973__$1,opts,build_id){
return (function (p__24975){
var vec__24976 = p__24975;
var map__24977 = cljs.core.nth.call(null,vec__24976,(0),null);
var map__24977__$1 = ((((!((map__24977 == null)))?((((map__24977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24977):map__24977);
var msg = map__24977__$1;
var msg_name = cljs.core.get.call(null,map__24977__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24976,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24976,map__24977,map__24977__$1,msg,msg_name,_,map__24973,map__24973__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24976,map__24977,map__24977__$1,msg,msg_name,_,map__24973,map__24973__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24973,map__24973__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24983){
var vec__24984 = p__24983;
var map__24985 = cljs.core.nth.call(null,vec__24984,(0),null);
var map__24985__$1 = ((((!((map__24985 == null)))?((((map__24985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24985):map__24985);
var msg = map__24985__$1;
var msg_name = cljs.core.get.call(null,map__24985__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24984,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24987){
var map__24997 = p__24987;
var map__24997__$1 = ((((!((map__24997 == null)))?((((map__24997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24997):map__24997);
var on_compile_warning = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24997,map__24997__$1,on_compile_warning,on_compile_fail){
return (function (p__24999){
var vec__25000 = p__24999;
var map__25001 = cljs.core.nth.call(null,vec__25000,(0),null);
var map__25001__$1 = ((((!((map__25001 == null)))?((((map__25001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25001):map__25001);
var msg = map__25001__$1;
var msg_name = cljs.core.get.call(null,map__25001__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25000,(1));
var pred__25003 = cljs.core._EQ_;
var expr__25004 = msg_name;
if(cljs.core.truth_(pred__25003.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25004))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25003.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25004))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24997,map__24997__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__,msg_hist,msg_names,msg){
return (function (state_25220){
var state_val_25221 = (state_25220[(1)]);
if((state_val_25221 === (7))){
var inst_25144 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
if(cljs.core.truth_(inst_25144)){
var statearr_25222_25268 = state_25220__$1;
(statearr_25222_25268[(1)] = (8));

} else {
var statearr_25223_25269 = state_25220__$1;
(statearr_25223_25269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (20))){
var inst_25214 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25224_25270 = state_25220__$1;
(statearr_25224_25270[(2)] = inst_25214);

(statearr_25224_25270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (27))){
var inst_25210 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25225_25271 = state_25220__$1;
(statearr_25225_25271[(2)] = inst_25210);

(statearr_25225_25271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (1))){
var inst_25137 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25220__$1 = state_25220;
if(cljs.core.truth_(inst_25137)){
var statearr_25226_25272 = state_25220__$1;
(statearr_25226_25272[(1)] = (2));

} else {
var statearr_25227_25273 = state_25220__$1;
(statearr_25227_25273[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (24))){
var inst_25212 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25228_25274 = state_25220__$1;
(statearr_25228_25274[(2)] = inst_25212);

(statearr_25228_25274[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (4))){
var inst_25218 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25220__$1,inst_25218);
} else {
if((state_val_25221 === (15))){
var inst_25216 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25229_25275 = state_25220__$1;
(statearr_25229_25275[(2)] = inst_25216);

(statearr_25229_25275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (21))){
var inst_25175 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25230_25276 = state_25220__$1;
(statearr_25230_25276[(2)] = inst_25175);

(statearr_25230_25276[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (31))){
var inst_25199 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25220__$1 = state_25220;
if(cljs.core.truth_(inst_25199)){
var statearr_25231_25277 = state_25220__$1;
(statearr_25231_25277[(1)] = (34));

} else {
var statearr_25232_25278 = state_25220__$1;
(statearr_25232_25278[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (32))){
var inst_25208 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25233_25279 = state_25220__$1;
(statearr_25233_25279[(2)] = inst_25208);

(statearr_25233_25279[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (33))){
var inst_25197 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25234_25280 = state_25220__$1;
(statearr_25234_25280[(2)] = inst_25197);

(statearr_25234_25280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (13))){
var inst_25158 = figwheel.client.heads_up.clear.call(null);
var state_25220__$1 = state_25220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25220__$1,(16),inst_25158);
} else {
if((state_val_25221 === (22))){
var inst_25179 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25180 = figwheel.client.heads_up.append_message.call(null,inst_25179);
var state_25220__$1 = state_25220;
var statearr_25235_25281 = state_25220__$1;
(statearr_25235_25281[(2)] = inst_25180);

(statearr_25235_25281[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (36))){
var inst_25206 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25236_25282 = state_25220__$1;
(statearr_25236_25282[(2)] = inst_25206);

(statearr_25236_25282[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (29))){
var inst_25190 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25237_25283 = state_25220__$1;
(statearr_25237_25283[(2)] = inst_25190);

(statearr_25237_25283[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (6))){
var inst_25139 = (state_25220[(7)]);
var state_25220__$1 = state_25220;
var statearr_25238_25284 = state_25220__$1;
(statearr_25238_25284[(2)] = inst_25139);

(statearr_25238_25284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (28))){
var inst_25186 = (state_25220[(2)]);
var inst_25187 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25188 = figwheel.client.heads_up.display_warning.call(null,inst_25187);
var state_25220__$1 = (function (){var statearr_25239 = state_25220;
(statearr_25239[(8)] = inst_25186);

return statearr_25239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25220__$1,(29),inst_25188);
} else {
if((state_val_25221 === (25))){
var inst_25184 = figwheel.client.heads_up.clear.call(null);
var state_25220__$1 = state_25220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25220__$1,(28),inst_25184);
} else {
if((state_val_25221 === (34))){
var inst_25201 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25220__$1 = state_25220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25220__$1,(37),inst_25201);
} else {
if((state_val_25221 === (17))){
var inst_25166 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25240_25285 = state_25220__$1;
(statearr_25240_25285[(2)] = inst_25166);

(statearr_25240_25285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (3))){
var inst_25156 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25220__$1 = state_25220;
if(cljs.core.truth_(inst_25156)){
var statearr_25241_25286 = state_25220__$1;
(statearr_25241_25286[(1)] = (13));

} else {
var statearr_25242_25287 = state_25220__$1;
(statearr_25242_25287[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (12))){
var inst_25152 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25243_25288 = state_25220__$1;
(statearr_25243_25288[(2)] = inst_25152);

(statearr_25243_25288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (2))){
var inst_25139 = (state_25220[(7)]);
var inst_25139__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25220__$1 = (function (){var statearr_25244 = state_25220;
(statearr_25244[(7)] = inst_25139__$1);

return statearr_25244;
})();
if(cljs.core.truth_(inst_25139__$1)){
var statearr_25245_25289 = state_25220__$1;
(statearr_25245_25289[(1)] = (5));

} else {
var statearr_25246_25290 = state_25220__$1;
(statearr_25246_25290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (23))){
var inst_25182 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25220__$1 = state_25220;
if(cljs.core.truth_(inst_25182)){
var statearr_25247_25291 = state_25220__$1;
(statearr_25247_25291[(1)] = (25));

} else {
var statearr_25248_25292 = state_25220__$1;
(statearr_25248_25292[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (35))){
var state_25220__$1 = state_25220;
var statearr_25249_25293 = state_25220__$1;
(statearr_25249_25293[(2)] = null);

(statearr_25249_25293[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (19))){
var inst_25177 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25220__$1 = state_25220;
if(cljs.core.truth_(inst_25177)){
var statearr_25250_25294 = state_25220__$1;
(statearr_25250_25294[(1)] = (22));

} else {
var statearr_25251_25295 = state_25220__$1;
(statearr_25251_25295[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (11))){
var inst_25148 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25252_25296 = state_25220__$1;
(statearr_25252_25296[(2)] = inst_25148);

(statearr_25252_25296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (9))){
var inst_25150 = figwheel.client.heads_up.clear.call(null);
var state_25220__$1 = state_25220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25220__$1,(12),inst_25150);
} else {
if((state_val_25221 === (5))){
var inst_25141 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25220__$1 = state_25220;
var statearr_25253_25297 = state_25220__$1;
(statearr_25253_25297[(2)] = inst_25141);

(statearr_25253_25297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (14))){
var inst_25168 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25220__$1 = state_25220;
if(cljs.core.truth_(inst_25168)){
var statearr_25254_25298 = state_25220__$1;
(statearr_25254_25298[(1)] = (18));

} else {
var statearr_25255_25299 = state_25220__$1;
(statearr_25255_25299[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (26))){
var inst_25192 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25220__$1 = state_25220;
if(cljs.core.truth_(inst_25192)){
var statearr_25256_25300 = state_25220__$1;
(statearr_25256_25300[(1)] = (30));

} else {
var statearr_25257_25301 = state_25220__$1;
(statearr_25257_25301[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (16))){
var inst_25160 = (state_25220[(2)]);
var inst_25161 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25162 = figwheel.client.format_messages.call(null,inst_25161);
var inst_25163 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25164 = figwheel.client.heads_up.display_error.call(null,inst_25162,inst_25163);
var state_25220__$1 = (function (){var statearr_25258 = state_25220;
(statearr_25258[(9)] = inst_25160);

return statearr_25258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25220__$1,(17),inst_25164);
} else {
if((state_val_25221 === (30))){
var inst_25194 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25195 = figwheel.client.heads_up.display_warning.call(null,inst_25194);
var state_25220__$1 = state_25220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25220__$1,(33),inst_25195);
} else {
if((state_val_25221 === (10))){
var inst_25154 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25259_25302 = state_25220__$1;
(statearr_25259_25302[(2)] = inst_25154);

(statearr_25259_25302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (18))){
var inst_25170 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25171 = figwheel.client.format_messages.call(null,inst_25170);
var inst_25172 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25173 = figwheel.client.heads_up.display_error.call(null,inst_25171,inst_25172);
var state_25220__$1 = state_25220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25220__$1,(21),inst_25173);
} else {
if((state_val_25221 === (37))){
var inst_25203 = (state_25220[(2)]);
var state_25220__$1 = state_25220;
var statearr_25260_25303 = state_25220__$1;
(statearr_25260_25303[(2)] = inst_25203);

(statearr_25260_25303[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25221 === (8))){
var inst_25146 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25220__$1 = state_25220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25220__$1,(11),inst_25146);
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
});})(c__18972__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18860__auto__,c__18972__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0 = (function (){
var statearr_25264 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25264[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__);

(statearr_25264[(1)] = (1));

return statearr_25264;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1 = (function (state_25220){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_25220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e25265){if((e25265 instanceof Object)){
var ex__18864__auto__ = e25265;
var statearr_25266_25304 = state_25220;
(statearr_25266_25304[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25305 = state_25220;
state_25220 = G__25305;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__ = function(state_25220){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1.call(this,state_25220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__,msg_hist,msg_names,msg))
})();
var state__18974__auto__ = (function (){var statearr_25267 = f__18973__auto__.call(null);
(statearr_25267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_25267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__,msg_hist,msg_names,msg))
);

return c__18972__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18972__auto___25368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___25368,ch){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___25368,ch){
return (function (state_25351){
var state_val_25352 = (state_25351[(1)]);
if((state_val_25352 === (1))){
var state_25351__$1 = state_25351;
var statearr_25353_25369 = state_25351__$1;
(statearr_25353_25369[(2)] = null);

(statearr_25353_25369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (2))){
var state_25351__$1 = state_25351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25351__$1,(4),ch);
} else {
if((state_val_25352 === (3))){
var inst_25349 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25351__$1,inst_25349);
} else {
if((state_val_25352 === (4))){
var inst_25339 = (state_25351[(7)]);
var inst_25339__$1 = (state_25351[(2)]);
var state_25351__$1 = (function (){var statearr_25354 = state_25351;
(statearr_25354[(7)] = inst_25339__$1);

return statearr_25354;
})();
if(cljs.core.truth_(inst_25339__$1)){
var statearr_25355_25370 = state_25351__$1;
(statearr_25355_25370[(1)] = (5));

} else {
var statearr_25356_25371 = state_25351__$1;
(statearr_25356_25371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (5))){
var inst_25339 = (state_25351[(7)]);
var inst_25341 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25339);
var state_25351__$1 = state_25351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25351__$1,(8),inst_25341);
} else {
if((state_val_25352 === (6))){
var state_25351__$1 = state_25351;
var statearr_25357_25372 = state_25351__$1;
(statearr_25357_25372[(2)] = null);

(statearr_25357_25372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (7))){
var inst_25347 = (state_25351[(2)]);
var state_25351__$1 = state_25351;
var statearr_25358_25373 = state_25351__$1;
(statearr_25358_25373[(2)] = inst_25347);

(statearr_25358_25373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25352 === (8))){
var inst_25343 = (state_25351[(2)]);
var state_25351__$1 = (function (){var statearr_25359 = state_25351;
(statearr_25359[(8)] = inst_25343);

return statearr_25359;
})();
var statearr_25360_25374 = state_25351__$1;
(statearr_25360_25374[(2)] = null);

(statearr_25360_25374[(1)] = (2));


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
});})(c__18972__auto___25368,ch))
;
return ((function (switch__18860__auto__,c__18972__auto___25368,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_25364 = [null,null,null,null,null,null,null,null,null];
(statearr_25364[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18861__auto__);

(statearr_25364[(1)] = (1));

return statearr_25364;
});
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1 = (function (state_25351){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_25351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e25365){if((e25365 instanceof Object)){
var ex__18864__auto__ = e25365;
var statearr_25366_25375 = state_25351;
(statearr_25366_25375[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25376 = state_25351;
state_25351 = G__25376;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__ = function(state_25351){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1.call(this,state_25351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___25368,ch))
})();
var state__18974__auto__ = (function (){var statearr_25367 = f__18973__auto__.call(null);
(statearr_25367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___25368);

return statearr_25367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___25368,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_25397){
var state_val_25398 = (state_25397[(1)]);
if((state_val_25398 === (1))){
var inst_25392 = cljs.core.async.timeout.call(null,(3000));
var state_25397__$1 = state_25397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25397__$1,(2),inst_25392);
} else {
if((state_val_25398 === (2))){
var inst_25394 = (state_25397[(2)]);
var inst_25395 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25397__$1 = (function (){var statearr_25399 = state_25397;
(statearr_25399[(7)] = inst_25394);

return statearr_25399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25397__$1,inst_25395);
} else {
return null;
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_25403 = [null,null,null,null,null,null,null,null];
(statearr_25403[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__);

(statearr_25403[(1)] = (1));

return statearr_25403;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1 = (function (state_25397){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_25397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e25404){if((e25404 instanceof Object)){
var ex__18864__auto__ = e25404;
var statearr_25405_25407 = state_25397;
(statearr_25405_25407[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25408 = state_25397;
state_25397 = G__25408;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__ = function(state_25397){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1.call(this,state_25397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_25406 = f__18973__auto__.call(null);
(statearr_25406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_25406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25409){
var map__25416 = p__25409;
var map__25416__$1 = ((((!((map__25416 == null)))?((((map__25416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25416):map__25416);
var ed = map__25416__$1;
var formatted_exception = cljs.core.get.call(null,map__25416__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25416__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25416__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25418_25422 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25419_25423 = null;
var count__25420_25424 = (0);
var i__25421_25425 = (0);
while(true){
if((i__25421_25425 < count__25420_25424)){
var msg_25426 = cljs.core._nth.call(null,chunk__25419_25423,i__25421_25425);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25426);

var G__25427 = seq__25418_25422;
var G__25428 = chunk__25419_25423;
var G__25429 = count__25420_25424;
var G__25430 = (i__25421_25425 + (1));
seq__25418_25422 = G__25427;
chunk__25419_25423 = G__25428;
count__25420_25424 = G__25429;
i__25421_25425 = G__25430;
continue;
} else {
var temp__4425__auto___25431 = cljs.core.seq.call(null,seq__25418_25422);
if(temp__4425__auto___25431){
var seq__25418_25432__$1 = temp__4425__auto___25431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25418_25432__$1)){
var c__17608__auto___25433 = cljs.core.chunk_first.call(null,seq__25418_25432__$1);
var G__25434 = cljs.core.chunk_rest.call(null,seq__25418_25432__$1);
var G__25435 = c__17608__auto___25433;
var G__25436 = cljs.core.count.call(null,c__17608__auto___25433);
var G__25437 = (0);
seq__25418_25422 = G__25434;
chunk__25419_25423 = G__25435;
count__25420_25424 = G__25436;
i__25421_25425 = G__25437;
continue;
} else {
var msg_25438 = cljs.core.first.call(null,seq__25418_25432__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25438);

var G__25439 = cljs.core.next.call(null,seq__25418_25432__$1);
var G__25440 = null;
var G__25441 = (0);
var G__25442 = (0);
seq__25418_25422 = G__25439;
chunk__25419_25423 = G__25440;
count__25420_25424 = G__25441;
i__25421_25425 = G__25442;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25443){
var map__25446 = p__25443;
var map__25446__$1 = ((((!((map__25446 == null)))?((((map__25446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25446):map__25446);
var w = map__25446__$1;
var message = cljs.core.get.call(null,map__25446__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16793__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16793__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25454 = cljs.core.seq.call(null,plugins);
var chunk__25455 = null;
var count__25456 = (0);
var i__25457 = (0);
while(true){
if((i__25457 < count__25456)){
var vec__25458 = cljs.core._nth.call(null,chunk__25455,i__25457);
var k = cljs.core.nth.call(null,vec__25458,(0),null);
var plugin = cljs.core.nth.call(null,vec__25458,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25460 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25454,chunk__25455,count__25456,i__25457,pl_25460,vec__25458,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25460.call(null,msg_hist);
});})(seq__25454,chunk__25455,count__25456,i__25457,pl_25460,vec__25458,k,plugin))
);
} else {
}

var G__25461 = seq__25454;
var G__25462 = chunk__25455;
var G__25463 = count__25456;
var G__25464 = (i__25457 + (1));
seq__25454 = G__25461;
chunk__25455 = G__25462;
count__25456 = G__25463;
i__25457 = G__25464;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25454);
if(temp__4425__auto__){
var seq__25454__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25454__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__25454__$1);
var G__25465 = cljs.core.chunk_rest.call(null,seq__25454__$1);
var G__25466 = c__17608__auto__;
var G__25467 = cljs.core.count.call(null,c__17608__auto__);
var G__25468 = (0);
seq__25454 = G__25465;
chunk__25455 = G__25466;
count__25456 = G__25467;
i__25457 = G__25468;
continue;
} else {
var vec__25459 = cljs.core.first.call(null,seq__25454__$1);
var k = cljs.core.nth.call(null,vec__25459,(0),null);
var plugin = cljs.core.nth.call(null,vec__25459,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25469 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25454,chunk__25455,count__25456,i__25457,pl_25469,vec__25459,k,plugin,seq__25454__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25469.call(null,msg_hist);
});})(seq__25454,chunk__25455,count__25456,i__25457,pl_25469,vec__25459,k,plugin,seq__25454__$1,temp__4425__auto__))
);
} else {
}

var G__25470 = cljs.core.next.call(null,seq__25454__$1);
var G__25471 = null;
var G__25472 = (0);
var G__25473 = (0);
seq__25454 = G__25470;
chunk__25455 = G__25471;
count__25456 = G__25472;
i__25457 = G__25473;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25474 = [];
var len__17863__auto___25477 = arguments.length;
var i__17864__auto___25478 = (0);
while(true){
if((i__17864__auto___25478 < len__17863__auto___25477)){
args25474.push((arguments[i__17864__auto___25478]));

var G__25479 = (i__17864__auto___25478 + (1));
i__17864__auto___25478 = G__25479;
continue;
} else {
}
break;
}

var G__25476 = args25474.length;
switch (G__25476) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25474.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17870__auto__ = [];
var len__17863__auto___25485 = arguments.length;
var i__17864__auto___25486 = (0);
while(true){
if((i__17864__auto___25486 < len__17863__auto___25485)){
args__17870__auto__.push((arguments[i__17864__auto___25486]));

var G__25487 = (i__17864__auto___25486 + (1));
i__17864__auto___25486 = G__25487;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25482){
var map__25483 = p__25482;
var map__25483__$1 = ((((!((map__25483 == null)))?((((map__25483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25483):map__25483);
var opts = map__25483__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25481){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25481));
});

//# sourceMappingURL=client.js.map?rel=1455751537011