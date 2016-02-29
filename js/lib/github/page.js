// Compiled by ClojureScript 1.7.170 {}
goog.provide('github.page');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('github.state');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
github.page.git_cards;
github.page.footer_body;
github.page.footer_head;
github.page.repo_uri = "https://raw.githubusercontent.com/brocade/brocade.github.io/master/app/app.edn";
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"get-repo","get-repo",847749542),(function (db,_){
ajax.core.GET.call(null,github.page.repo_uri,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__23412_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683),p1__23412_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__23413_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__23413_SHARP_], null));
})], null));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__23414){
var vec__23415 = p__23414;
var _ = cljs.core.nth.call(null,vec__23415,(0),null);
var response = cljs.core.nth.call(null,vec__23415,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("app","repo","app/repo",-1998177440),cljs.reader.read_string.call(null,response));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__23416){
var vec__23417 = p__23416;
var _ = cljs.core.nth.call(null,vec__23417,(0),null);
var response = cljs.core.nth.call(null,vec__23417,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("app","repo","app/repo",-1998177440),github.state.fail_state);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword("app","repo","app/repo",-1998177440).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
github.page.header_template = (function github$page$header_template(title,items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.brocade-red","nav.brocade-red",-1973672892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"navigation"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-wrapper.container","div.nav-wrapper.container",-705398811),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.brand-logo","a.brand-logo",1920204378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"id","id",-1388402092),"logo-container"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.brocade-logo","h1.brocade-logo",208516502)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sub-title","span.sub-title",-1911087098),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.right.hide-on-med-and-down","ul.right.hide-on-med-and-down",1740020089),cljs.core.map.call(null,(function (p__23424){
var map__23425 = p__23424;
var map__23425__$1 = ((((!((map__23425 == null)))?((((map__23425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23425):map__23425);
var title__$1 = cljs.core.get.call(null,map__23425__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__23425__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),title__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title__$1], null));
}),items)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.side-nav","ul.side-nav",1381687621),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"nav-mobile"], null),cljs.core.map.call(null,(function (p__23427){
var map__23428 = p__23427;
var map__23428__$1 = ((((!((map__23428 == null)))?((((map__23428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23428):map__23428);
var title__$1 = cljs.core.get.call(null,map__23428__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__23428__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),title__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title__$1], null));
}),items)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button-collapse","a.button-collapse",1714491306),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-activates","data-activates",1521953804),"nav-mobile"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"menu"], null)], null)], null)], null);
});
github.page.main_template = (function github$page$main_template(repos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.s12","div.col.s12",-255066824),github.page.git_cards.call(null,repos)], null)], null)], null)], null);
});
github.page.repo_template = (function github$page$repo_template(title,desc,main,link){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.s12.m6","div.col.s12.m6",487623710),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.small","div.card.small",-2103458114),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.card-title","span.card-title",-453453340),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),desc], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),link], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-action.waves-effect.waves-block.waves-brocade","div.card-action.waves-effect.waves-block.waves-brocade",-466757849),title], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null));
});
github.page.git_cards = (function github$page$git_cards(repos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),cljs.core.map.call(null,(function (p1__23430_SHARP_){
return github.page.repo_template.call(null,cljs.core.get_in.call(null,p1__23430_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"name","name",1843675177)], null)),cljs.core.get_in.call(null,p1__23430_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"description","description",-1428560544)], null)),cljs.core.get_in.call(null,p1__23430_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"author","author",2111686192)], null)),cljs.core.get_in.call(null,p1__23430_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"html_url","html_url",-1914714112)], null)));
}),repos)], null);
});
github.page.footer_template = (function github$page$footer_template(coll){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.page-footer.grey.darken-1","footer.page-footer.grey.darken-1",1361506671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),github.page.footer_head.call(null,coll)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footer-copyright","div.footer-copyright",1648499824),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955)], null)], null)], null);
});
github.page.footer_head = (function github$page$footer_head(coll){
return cljs.core.map.call(null,(function (p__23434){
var map__23435 = p__23434;
var map__23435__$1 = ((((!((map__23435 == null)))?((((map__23435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23435):map__23435);
var heading = cljs.core.get.call(null,map__23435__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var items = cljs.core.get.call(null,map__23435__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var checked_QMARK_ = cljs.core.get.call(null,map__23435__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.l4.s12","div.col.l4.s12",1454915742),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.white-text","h5.white-text",-1920285859),heading], null),github.page.footer_body.call(null,items)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),heading], null));
}),coll);
});
github.page.footer_body = (function github$page$footer_body(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (p__23440){
var map__23441 = p__23440;
var map__23441__$1 = ((((!((map__23441 == null)))?((((map__23441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23441):map__23441);
var title = cljs.core.get.call(null,map__23441__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.call(null,map__23441__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.white-text","a.white-text",1580963088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null));
}),items)], null);
});
github.page.Page = (function github$page$Page(){
var map__23445 = github.state.page_state;
var map__23445__$1 = ((((!((map__23445 == null)))?((((map__23445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23445):map__23445);
var title = cljs.core.get.call(null,map__23445__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var header = cljs.core.get.call(null,map__23445__$1,new cljs.core.Keyword("app","header","app/header",119406797));
var footer = cljs.core.get.call(null,map__23445__$1,new cljs.core.Keyword("app","footer","app/footer",1606476717));
var repo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),github.page.header_template.call(null,title,header),github.page.main_template.call(null,cljs.core.deref.call(null,repo)),github.page.footer_template.call(null,footer)], null);
});
github.page.init = (function github$page$init(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-repo","get-repo",847749542)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [github.page.Page], null),document.getElementById("app"));
});
goog.exportSymbol('github.page.init', github.page.init);

//# sourceMappingURL=page.js.map