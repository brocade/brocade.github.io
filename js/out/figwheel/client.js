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
var pred__24775 = cljs.core._EQ_;
var expr__24776 = (function (){var or__16819__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e24779){if((e24779 instanceof Error)){
var e = e24779;
return false;
} else {
throw e24779;

}
}})();
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24775.call(null,"true",expr__24776))){
return true;
} else {
if(cljs.core.truth_(pred__24775.call(null,"false",expr__24776))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24776)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24781){if((e24781 instanceof Error)){
var e = e24781;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e24781;

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
var args__17884__auto__ = [];
var len__17877__auto___24783 = arguments.length;
var i__17878__auto___24784 = (0);
while(true){
if((i__17878__auto___24784 < len__17877__auto___24783)){
args__17884__auto__.push((arguments[i__17878__auto___24784]));

var G__24785 = (i__17878__auto___24784 + (1));
i__17878__auto___24784 = G__24785;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24782){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24782));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24786){
var map__24789 = p__24786;
var map__24789__$1 = ((((!((map__24789 == null)))?((((map__24789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24789):map__24789);
var message = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16819__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16807__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16807__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16807__auto__;
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
var c__20428__auto___24951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___24951,ch){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___24951,ch){
return (function (state_24920){
var state_val_24921 = (state_24920[(1)]);
if((state_val_24921 === (7))){
var inst_24916 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
var statearr_24922_24952 = state_24920__$1;
(statearr_24922_24952[(2)] = inst_24916);

(statearr_24922_24952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (1))){
var state_24920__$1 = state_24920;
var statearr_24923_24953 = state_24920__$1;
(statearr_24923_24953[(2)] = null);

(statearr_24923_24953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (4))){
var inst_24873 = (state_24920[(7)]);
var inst_24873__$1 = (state_24920[(2)]);
var state_24920__$1 = (function (){var statearr_24924 = state_24920;
(statearr_24924[(7)] = inst_24873__$1);

return statearr_24924;
})();
if(cljs.core.truth_(inst_24873__$1)){
var statearr_24925_24954 = state_24920__$1;
(statearr_24925_24954[(1)] = (5));

} else {
var statearr_24926_24955 = state_24920__$1;
(statearr_24926_24955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (15))){
var inst_24880 = (state_24920[(8)]);
var inst_24895 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24880);
var inst_24896 = cljs.core.first.call(null,inst_24895);
var inst_24897 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24896);
var inst_24898 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24897)].join('');
var inst_24899 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24898);
var state_24920__$1 = state_24920;
var statearr_24927_24956 = state_24920__$1;
(statearr_24927_24956[(2)] = inst_24899);

(statearr_24927_24956[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (13))){
var inst_24904 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
var statearr_24928_24957 = state_24920__$1;
(statearr_24928_24957[(2)] = inst_24904);

(statearr_24928_24957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (6))){
var state_24920__$1 = state_24920;
var statearr_24929_24958 = state_24920__$1;
(statearr_24929_24958[(2)] = null);

(statearr_24929_24958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (17))){
var inst_24902 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
var statearr_24930_24959 = state_24920__$1;
(statearr_24930_24959[(2)] = inst_24902);

(statearr_24930_24959[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (3))){
var inst_24918 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24920__$1,inst_24918);
} else {
if((state_val_24921 === (12))){
var inst_24879 = (state_24920[(9)]);
var inst_24893 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24879,opts);
var state_24920__$1 = state_24920;
if(cljs.core.truth_(inst_24893)){
var statearr_24931_24960 = state_24920__$1;
(statearr_24931_24960[(1)] = (15));

} else {
var statearr_24932_24961 = state_24920__$1;
(statearr_24932_24961[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (2))){
var state_24920__$1 = state_24920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24920__$1,(4),ch);
} else {
if((state_val_24921 === (11))){
var inst_24880 = (state_24920[(8)]);
var inst_24885 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24886 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24880);
var inst_24887 = cljs.core.async.timeout.call(null,(1000));
var inst_24888 = [inst_24886,inst_24887];
var inst_24889 = (new cljs.core.PersistentVector(null,2,(5),inst_24885,inst_24888,null));
var state_24920__$1 = state_24920;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24920__$1,(14),inst_24889);
} else {
if((state_val_24921 === (9))){
var inst_24880 = (state_24920[(8)]);
var inst_24906 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24907 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24880);
var inst_24908 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24907);
var inst_24909 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24908)].join('');
var inst_24910 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24909);
var state_24920__$1 = (function (){var statearr_24933 = state_24920;
(statearr_24933[(10)] = inst_24906);

return statearr_24933;
})();
var statearr_24934_24962 = state_24920__$1;
(statearr_24934_24962[(2)] = inst_24910);

(statearr_24934_24962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (5))){
var inst_24873 = (state_24920[(7)]);
var inst_24875 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24876 = (new cljs.core.PersistentArrayMap(null,2,inst_24875,null));
var inst_24877 = (new cljs.core.PersistentHashSet(null,inst_24876,null));
var inst_24878 = figwheel.client.focus_msgs.call(null,inst_24877,inst_24873);
var inst_24879 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24878);
var inst_24880 = cljs.core.first.call(null,inst_24878);
var inst_24881 = figwheel.client.autoload_QMARK_.call(null);
var state_24920__$1 = (function (){var statearr_24935 = state_24920;
(statearr_24935[(9)] = inst_24879);

(statearr_24935[(8)] = inst_24880);

return statearr_24935;
})();
if(cljs.core.truth_(inst_24881)){
var statearr_24936_24963 = state_24920__$1;
(statearr_24936_24963[(1)] = (8));

} else {
var statearr_24937_24964 = state_24920__$1;
(statearr_24937_24964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (14))){
var inst_24891 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
var statearr_24938_24965 = state_24920__$1;
(statearr_24938_24965[(2)] = inst_24891);

(statearr_24938_24965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (16))){
var state_24920__$1 = state_24920;
var statearr_24939_24966 = state_24920__$1;
(statearr_24939_24966[(2)] = null);

(statearr_24939_24966[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (10))){
var inst_24912 = (state_24920[(2)]);
var state_24920__$1 = (function (){var statearr_24940 = state_24920;
(statearr_24940[(11)] = inst_24912);

return statearr_24940;
})();
var statearr_24941_24967 = state_24920__$1;
(statearr_24941_24967[(2)] = null);

(statearr_24941_24967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24921 === (8))){
var inst_24879 = (state_24920[(9)]);
var inst_24883 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24879,opts);
var state_24920__$1 = state_24920;
if(cljs.core.truth_(inst_24883)){
var statearr_24942_24968 = state_24920__$1;
(statearr_24942_24968[(1)] = (11));

} else {
var statearr_24943_24969 = state_24920__$1;
(statearr_24943_24969[(1)] = (12));

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
});})(c__20428__auto___24951,ch))
;
return ((function (switch__20316__auto__,c__20428__auto___24951,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20317__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20317__auto____0 = (function (){
var statearr_24947 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24947[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20317__auto__);

(statearr_24947[(1)] = (1));

return statearr_24947;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20317__auto____1 = (function (state_24920){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_24920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e24948){if((e24948 instanceof Object)){
var ex__20320__auto__ = e24948;
var statearr_24949_24970 = state_24920;
(statearr_24949_24970[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24971 = state_24920;
state_24920 = G__24971;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20317__auto__ = function(state_24920){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20317__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20317__auto____1.call(this,state_24920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20317__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20317__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___24951,ch))
})();
var state__20430__auto__ = (function (){var statearr_24950 = f__20429__auto__.call(null);
(statearr_24950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___24951);

return statearr_24950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___24951,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24972_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24972_SHARP_));
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
var base_path_24979 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24979){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24978 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24978;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24977;
}}catch (e24976){if((e24976 instanceof Error)){
var e = e24976;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24979], null));
} else {
var e = e24976;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24979))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24980){
var map__24987 = p__24980;
var map__24987__$1 = ((((!((map__24987 == null)))?((((map__24987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24987):map__24987);
var opts = map__24987__$1;
var build_id = cljs.core.get.call(null,map__24987__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24987,map__24987__$1,opts,build_id){
return (function (p__24989){
var vec__24990 = p__24989;
var map__24991 = cljs.core.nth.call(null,vec__24990,(0),null);
var map__24991__$1 = ((((!((map__24991 == null)))?((((map__24991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24991):map__24991);
var msg = map__24991__$1;
var msg_name = cljs.core.get.call(null,map__24991__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24990,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24990,map__24991,map__24991__$1,msg,msg_name,_,map__24987,map__24987__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24990,map__24991,map__24991__$1,msg,msg_name,_,map__24987,map__24987__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24987,map__24987__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24997){
var vec__24998 = p__24997;
var map__24999 = cljs.core.nth.call(null,vec__24998,(0),null);
var map__24999__$1 = ((((!((map__24999 == null)))?((((map__24999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24999):map__24999);
var msg = map__24999__$1;
var msg_name = cljs.core.get.call(null,map__24999__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24998,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25001){
var map__25011 = p__25001;
var map__25011__$1 = ((((!((map__25011 == null)))?((((map__25011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25011):map__25011);
var on_compile_warning = cljs.core.get.call(null,map__25011__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25011__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25011,map__25011__$1,on_compile_warning,on_compile_fail){
return (function (p__25013){
var vec__25014 = p__25013;
var map__25015 = cljs.core.nth.call(null,vec__25014,(0),null);
var map__25015__$1 = ((((!((map__25015 == null)))?((((map__25015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25015):map__25015);
var msg = map__25015__$1;
var msg_name = cljs.core.get.call(null,map__25015__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25014,(1));
var pred__25017 = cljs.core._EQ_;
var expr__25018 = msg_name;
if(cljs.core.truth_(pred__25017.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25018))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25017.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25018))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25011,map__25011__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20428__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto__,msg_hist,msg_names,msg){
return (function (state_25234){
var state_val_25235 = (state_25234[(1)]);
if((state_val_25235 === (7))){
var inst_25158 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
if(cljs.core.truth_(inst_25158)){
var statearr_25236_25282 = state_25234__$1;
(statearr_25236_25282[(1)] = (8));

} else {
var statearr_25237_25283 = state_25234__$1;
(statearr_25237_25283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (20))){
var inst_25228 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25238_25284 = state_25234__$1;
(statearr_25238_25284[(2)] = inst_25228);

(statearr_25238_25284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (27))){
var inst_25224 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25239_25285 = state_25234__$1;
(statearr_25239_25285[(2)] = inst_25224);

(statearr_25239_25285[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (1))){
var inst_25151 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25234__$1 = state_25234;
if(cljs.core.truth_(inst_25151)){
var statearr_25240_25286 = state_25234__$1;
(statearr_25240_25286[(1)] = (2));

} else {
var statearr_25241_25287 = state_25234__$1;
(statearr_25241_25287[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (24))){
var inst_25226 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25242_25288 = state_25234__$1;
(statearr_25242_25288[(2)] = inst_25226);

(statearr_25242_25288[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (4))){
var inst_25232 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25234__$1,inst_25232);
} else {
if((state_val_25235 === (15))){
var inst_25230 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25243_25289 = state_25234__$1;
(statearr_25243_25289[(2)] = inst_25230);

(statearr_25243_25289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (21))){
var inst_25189 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25244_25290 = state_25234__$1;
(statearr_25244_25290[(2)] = inst_25189);

(statearr_25244_25290[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (31))){
var inst_25213 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25234__$1 = state_25234;
if(cljs.core.truth_(inst_25213)){
var statearr_25245_25291 = state_25234__$1;
(statearr_25245_25291[(1)] = (34));

} else {
var statearr_25246_25292 = state_25234__$1;
(statearr_25246_25292[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (32))){
var inst_25222 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25247_25293 = state_25234__$1;
(statearr_25247_25293[(2)] = inst_25222);

(statearr_25247_25293[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (33))){
var inst_25211 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25248_25294 = state_25234__$1;
(statearr_25248_25294[(2)] = inst_25211);

(statearr_25248_25294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (13))){
var inst_25172 = figwheel.client.heads_up.clear.call(null);
var state_25234__$1 = state_25234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25234__$1,(16),inst_25172);
} else {
if((state_val_25235 === (22))){
var inst_25193 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25194 = figwheel.client.heads_up.append_message.call(null,inst_25193);
var state_25234__$1 = state_25234;
var statearr_25249_25295 = state_25234__$1;
(statearr_25249_25295[(2)] = inst_25194);

(statearr_25249_25295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (36))){
var inst_25220 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25250_25296 = state_25234__$1;
(statearr_25250_25296[(2)] = inst_25220);

(statearr_25250_25296[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (29))){
var inst_25204 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25251_25297 = state_25234__$1;
(statearr_25251_25297[(2)] = inst_25204);

(statearr_25251_25297[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (6))){
var inst_25153 = (state_25234[(7)]);
var state_25234__$1 = state_25234;
var statearr_25252_25298 = state_25234__$1;
(statearr_25252_25298[(2)] = inst_25153);

(statearr_25252_25298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (28))){
var inst_25200 = (state_25234[(2)]);
var inst_25201 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25202 = figwheel.client.heads_up.display_warning.call(null,inst_25201);
var state_25234__$1 = (function (){var statearr_25253 = state_25234;
(statearr_25253[(8)] = inst_25200);

return statearr_25253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25234__$1,(29),inst_25202);
} else {
if((state_val_25235 === (25))){
var inst_25198 = figwheel.client.heads_up.clear.call(null);
var state_25234__$1 = state_25234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25234__$1,(28),inst_25198);
} else {
if((state_val_25235 === (34))){
var inst_25215 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25234__$1 = state_25234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25234__$1,(37),inst_25215);
} else {
if((state_val_25235 === (17))){
var inst_25180 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25254_25299 = state_25234__$1;
(statearr_25254_25299[(2)] = inst_25180);

(statearr_25254_25299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (3))){
var inst_25170 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25234__$1 = state_25234;
if(cljs.core.truth_(inst_25170)){
var statearr_25255_25300 = state_25234__$1;
(statearr_25255_25300[(1)] = (13));

} else {
var statearr_25256_25301 = state_25234__$1;
(statearr_25256_25301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (12))){
var inst_25166 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25257_25302 = state_25234__$1;
(statearr_25257_25302[(2)] = inst_25166);

(statearr_25257_25302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (2))){
var inst_25153 = (state_25234[(7)]);
var inst_25153__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25234__$1 = (function (){var statearr_25258 = state_25234;
(statearr_25258[(7)] = inst_25153__$1);

return statearr_25258;
})();
if(cljs.core.truth_(inst_25153__$1)){
var statearr_25259_25303 = state_25234__$1;
(statearr_25259_25303[(1)] = (5));

} else {
var statearr_25260_25304 = state_25234__$1;
(statearr_25260_25304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (23))){
var inst_25196 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25234__$1 = state_25234;
if(cljs.core.truth_(inst_25196)){
var statearr_25261_25305 = state_25234__$1;
(statearr_25261_25305[(1)] = (25));

} else {
var statearr_25262_25306 = state_25234__$1;
(statearr_25262_25306[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (35))){
var state_25234__$1 = state_25234;
var statearr_25263_25307 = state_25234__$1;
(statearr_25263_25307[(2)] = null);

(statearr_25263_25307[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (19))){
var inst_25191 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25234__$1 = state_25234;
if(cljs.core.truth_(inst_25191)){
var statearr_25264_25308 = state_25234__$1;
(statearr_25264_25308[(1)] = (22));

} else {
var statearr_25265_25309 = state_25234__$1;
(statearr_25265_25309[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (11))){
var inst_25162 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25266_25310 = state_25234__$1;
(statearr_25266_25310[(2)] = inst_25162);

(statearr_25266_25310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (9))){
var inst_25164 = figwheel.client.heads_up.clear.call(null);
var state_25234__$1 = state_25234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25234__$1,(12),inst_25164);
} else {
if((state_val_25235 === (5))){
var inst_25155 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25234__$1 = state_25234;
var statearr_25267_25311 = state_25234__$1;
(statearr_25267_25311[(2)] = inst_25155);

(statearr_25267_25311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (14))){
var inst_25182 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25234__$1 = state_25234;
if(cljs.core.truth_(inst_25182)){
var statearr_25268_25312 = state_25234__$1;
(statearr_25268_25312[(1)] = (18));

} else {
var statearr_25269_25313 = state_25234__$1;
(statearr_25269_25313[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (26))){
var inst_25206 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25234__$1 = state_25234;
if(cljs.core.truth_(inst_25206)){
var statearr_25270_25314 = state_25234__$1;
(statearr_25270_25314[(1)] = (30));

} else {
var statearr_25271_25315 = state_25234__$1;
(statearr_25271_25315[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (16))){
var inst_25174 = (state_25234[(2)]);
var inst_25175 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25176 = figwheel.client.format_messages.call(null,inst_25175);
var inst_25177 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25178 = figwheel.client.heads_up.display_error.call(null,inst_25176,inst_25177);
var state_25234__$1 = (function (){var statearr_25272 = state_25234;
(statearr_25272[(9)] = inst_25174);

return statearr_25272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25234__$1,(17),inst_25178);
} else {
if((state_val_25235 === (30))){
var inst_25208 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25209 = figwheel.client.heads_up.display_warning.call(null,inst_25208);
var state_25234__$1 = state_25234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25234__$1,(33),inst_25209);
} else {
if((state_val_25235 === (10))){
var inst_25168 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25273_25316 = state_25234__$1;
(statearr_25273_25316[(2)] = inst_25168);

(statearr_25273_25316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (18))){
var inst_25184 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25185 = figwheel.client.format_messages.call(null,inst_25184);
var inst_25186 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25187 = figwheel.client.heads_up.display_error.call(null,inst_25185,inst_25186);
var state_25234__$1 = state_25234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25234__$1,(21),inst_25187);
} else {
if((state_val_25235 === (37))){
var inst_25217 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25274_25317 = state_25234__$1;
(statearr_25274_25317[(2)] = inst_25217);

(statearr_25274_25317[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (8))){
var inst_25160 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25234__$1 = state_25234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25234__$1,(11),inst_25160);
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
});})(c__20428__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20316__auto__,c__20428__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto____0 = (function (){
var statearr_25278 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25278[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto__);

(statearr_25278[(1)] = (1));

return statearr_25278;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto____1 = (function (state_25234){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_25234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e25279){if((e25279 instanceof Object)){
var ex__20320__auto__ = e25279;
var statearr_25280_25318 = state_25234;
(statearr_25280_25318[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25319 = state_25234;
state_25234 = G__25319;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto__ = function(state_25234){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto____1.call(this,state_25234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto__,msg_hist,msg_names,msg))
})();
var state__20430__auto__ = (function (){var statearr_25281 = f__20429__auto__.call(null);
(statearr_25281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto__);

return statearr_25281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto__,msg_hist,msg_names,msg))
);

return c__20428__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20428__auto___25382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___25382,ch){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___25382,ch){
return (function (state_25365){
var state_val_25366 = (state_25365[(1)]);
if((state_val_25366 === (1))){
var state_25365__$1 = state_25365;
var statearr_25367_25383 = state_25365__$1;
(statearr_25367_25383[(2)] = null);

(statearr_25367_25383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (2))){
var state_25365__$1 = state_25365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25365__$1,(4),ch);
} else {
if((state_val_25366 === (3))){
var inst_25363 = (state_25365[(2)]);
var state_25365__$1 = state_25365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25365__$1,inst_25363);
} else {
if((state_val_25366 === (4))){
var inst_25353 = (state_25365[(7)]);
var inst_25353__$1 = (state_25365[(2)]);
var state_25365__$1 = (function (){var statearr_25368 = state_25365;
(statearr_25368[(7)] = inst_25353__$1);

return statearr_25368;
})();
if(cljs.core.truth_(inst_25353__$1)){
var statearr_25369_25384 = state_25365__$1;
(statearr_25369_25384[(1)] = (5));

} else {
var statearr_25370_25385 = state_25365__$1;
(statearr_25370_25385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (5))){
var inst_25353 = (state_25365[(7)]);
var inst_25355 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25353);
var state_25365__$1 = state_25365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25365__$1,(8),inst_25355);
} else {
if((state_val_25366 === (6))){
var state_25365__$1 = state_25365;
var statearr_25371_25386 = state_25365__$1;
(statearr_25371_25386[(2)] = null);

(statearr_25371_25386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (7))){
var inst_25361 = (state_25365[(2)]);
var state_25365__$1 = state_25365;
var statearr_25372_25387 = state_25365__$1;
(statearr_25372_25387[(2)] = inst_25361);

(statearr_25372_25387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (8))){
var inst_25357 = (state_25365[(2)]);
var state_25365__$1 = (function (){var statearr_25373 = state_25365;
(statearr_25373[(8)] = inst_25357);

return statearr_25373;
})();
var statearr_25374_25388 = state_25365__$1;
(statearr_25374_25388[(2)] = null);

(statearr_25374_25388[(1)] = (2));


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
});})(c__20428__auto___25382,ch))
;
return ((function (switch__20316__auto__,c__20428__auto___25382,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20317__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20317__auto____0 = (function (){
var statearr_25378 = [null,null,null,null,null,null,null,null,null];
(statearr_25378[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20317__auto__);

(statearr_25378[(1)] = (1));

return statearr_25378;
});
var figwheel$client$heads_up_plugin_$_state_machine__20317__auto____1 = (function (state_25365){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_25365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e25379){if((e25379 instanceof Object)){
var ex__20320__auto__ = e25379;
var statearr_25380_25389 = state_25365;
(statearr_25380_25389[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25390 = state_25365;
state_25365 = G__25390;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20317__auto__ = function(state_25365){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20317__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20317__auto____1.call(this,state_25365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20317__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20317__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___25382,ch))
})();
var state__20430__auto__ = (function (){var statearr_25381 = f__20429__auto__.call(null);
(statearr_25381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___25382);

return statearr_25381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___25382,ch))
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
var c__20428__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto__){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto__){
return (function (state_25411){
var state_val_25412 = (state_25411[(1)]);
if((state_val_25412 === (1))){
var inst_25406 = cljs.core.async.timeout.call(null,(3000));
var state_25411__$1 = state_25411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25411__$1,(2),inst_25406);
} else {
if((state_val_25412 === (2))){
var inst_25408 = (state_25411[(2)]);
var inst_25409 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25411__$1 = (function (){var statearr_25413 = state_25411;
(statearr_25413[(7)] = inst_25408);

return statearr_25413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25411__$1,inst_25409);
} else {
return null;
}
}
});})(c__20428__auto__))
;
return ((function (switch__20316__auto__,c__20428__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20317__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20317__auto____0 = (function (){
var statearr_25417 = [null,null,null,null,null,null,null,null];
(statearr_25417[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20317__auto__);

(statearr_25417[(1)] = (1));

return statearr_25417;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20317__auto____1 = (function (state_25411){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_25411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e25418){if((e25418 instanceof Object)){
var ex__20320__auto__ = e25418;
var statearr_25419_25421 = state_25411;
(statearr_25419_25421[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25422 = state_25411;
state_25411 = G__25422;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20317__auto__ = function(state_25411){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20317__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20317__auto____1.call(this,state_25411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20317__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20317__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto__))
})();
var state__20430__auto__ = (function (){var statearr_25420 = f__20429__auto__.call(null);
(statearr_25420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto__);

return statearr_25420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto__))
);

return c__20428__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25423){
var map__25430 = p__25423;
var map__25430__$1 = ((((!((map__25430 == null)))?((((map__25430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25430):map__25430);
var ed = map__25430__$1;
var formatted_exception = cljs.core.get.call(null,map__25430__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25430__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25430__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25432_25436 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25433_25437 = null;
var count__25434_25438 = (0);
var i__25435_25439 = (0);
while(true){
if((i__25435_25439 < count__25434_25438)){
var msg_25440 = cljs.core._nth.call(null,chunk__25433_25437,i__25435_25439);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25440);

var G__25441 = seq__25432_25436;
var G__25442 = chunk__25433_25437;
var G__25443 = count__25434_25438;
var G__25444 = (i__25435_25439 + (1));
seq__25432_25436 = G__25441;
chunk__25433_25437 = G__25442;
count__25434_25438 = G__25443;
i__25435_25439 = G__25444;
continue;
} else {
var temp__4425__auto___25445 = cljs.core.seq.call(null,seq__25432_25436);
if(temp__4425__auto___25445){
var seq__25432_25446__$1 = temp__4425__auto___25445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25432_25446__$1)){
var c__17622__auto___25447 = cljs.core.chunk_first.call(null,seq__25432_25446__$1);
var G__25448 = cljs.core.chunk_rest.call(null,seq__25432_25446__$1);
var G__25449 = c__17622__auto___25447;
var G__25450 = cljs.core.count.call(null,c__17622__auto___25447);
var G__25451 = (0);
seq__25432_25436 = G__25448;
chunk__25433_25437 = G__25449;
count__25434_25438 = G__25450;
i__25435_25439 = G__25451;
continue;
} else {
var msg_25452 = cljs.core.first.call(null,seq__25432_25446__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25452);

var G__25453 = cljs.core.next.call(null,seq__25432_25446__$1);
var G__25454 = null;
var G__25455 = (0);
var G__25456 = (0);
seq__25432_25436 = G__25453;
chunk__25433_25437 = G__25454;
count__25434_25438 = G__25455;
i__25435_25439 = G__25456;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25457){
var map__25460 = p__25457;
var map__25460__$1 = ((((!((map__25460 == null)))?((((map__25460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25460):map__25460);
var w = map__25460__$1;
var message = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16807__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16807__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16807__auto__;
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
var seq__25468 = cljs.core.seq.call(null,plugins);
var chunk__25469 = null;
var count__25470 = (0);
var i__25471 = (0);
while(true){
if((i__25471 < count__25470)){
var vec__25472 = cljs.core._nth.call(null,chunk__25469,i__25471);
var k = cljs.core.nth.call(null,vec__25472,(0),null);
var plugin = cljs.core.nth.call(null,vec__25472,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25474 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25468,chunk__25469,count__25470,i__25471,pl_25474,vec__25472,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25474.call(null,msg_hist);
});})(seq__25468,chunk__25469,count__25470,i__25471,pl_25474,vec__25472,k,plugin))
);
} else {
}

var G__25475 = seq__25468;
var G__25476 = chunk__25469;
var G__25477 = count__25470;
var G__25478 = (i__25471 + (1));
seq__25468 = G__25475;
chunk__25469 = G__25476;
count__25470 = G__25477;
i__25471 = G__25478;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25468);
if(temp__4425__auto__){
var seq__25468__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25468__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__25468__$1);
var G__25479 = cljs.core.chunk_rest.call(null,seq__25468__$1);
var G__25480 = c__17622__auto__;
var G__25481 = cljs.core.count.call(null,c__17622__auto__);
var G__25482 = (0);
seq__25468 = G__25479;
chunk__25469 = G__25480;
count__25470 = G__25481;
i__25471 = G__25482;
continue;
} else {
var vec__25473 = cljs.core.first.call(null,seq__25468__$1);
var k = cljs.core.nth.call(null,vec__25473,(0),null);
var plugin = cljs.core.nth.call(null,vec__25473,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25483 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25468,chunk__25469,count__25470,i__25471,pl_25483,vec__25473,k,plugin,seq__25468__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25483.call(null,msg_hist);
});})(seq__25468,chunk__25469,count__25470,i__25471,pl_25483,vec__25473,k,plugin,seq__25468__$1,temp__4425__auto__))
);
} else {
}

var G__25484 = cljs.core.next.call(null,seq__25468__$1);
var G__25485 = null;
var G__25486 = (0);
var G__25487 = (0);
seq__25468 = G__25484;
chunk__25469 = G__25485;
count__25470 = G__25486;
i__25471 = G__25487;
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
var args25488 = [];
var len__17877__auto___25491 = arguments.length;
var i__17878__auto___25492 = (0);
while(true){
if((i__17878__auto___25492 < len__17877__auto___25491)){
args25488.push((arguments[i__17878__auto___25492]));

var G__25493 = (i__17878__auto___25492 + (1));
i__17878__auto___25492 = G__25493;
continue;
} else {
}
break;
}

var G__25490 = args25488.length;
switch (G__25490) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25488.length)].join('')));

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
var args__17884__auto__ = [];
var len__17877__auto___25499 = arguments.length;
var i__17878__auto___25500 = (0);
while(true){
if((i__17878__auto___25500 < len__17877__auto___25499)){
args__17884__auto__.push((arguments[i__17878__auto___25500]));

var G__25501 = (i__17878__auto___25500 + (1));
i__17878__auto___25500 = G__25501;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25496){
var map__25497 = p__25496;
var map__25497__$1 = ((((!((map__25497 == null)))?((((map__25497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25497):map__25497);
var opts = map__25497__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25495){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25495));
});

//# sourceMappingURL=client.js.map?rel=1456199299027