(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"Z+8F":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){},e=u("zl1X"),i=u("pMnS"),s=[".signpost-default[_ngcontent-%COMP%], .signpost-positions[_ngcontent-%COMP%]{display:flex;padding:24px}.signpost-positions[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1 1}.signpost-positions[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]{flex:1 1;display:flex;justify-content:center;align-items:center}.signpost-triggers-wrapper[_ngcontent-%COMP%]{width:100%}.signpost-trigger-demo[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;padding:24px;width:100%;border:1px #8b0000}.signpost-trigger-demo[_ngcontent-%COMP%]   .signpost-item[_ngcontent-%COMP%]{flex:1 0 200px;display:flex;flex-direction:column;align-items:center;margin-bottom:24px}"],a=u("xLE1"),c=u("+Xo0"),r=u("0G9f"),d=u("QkwE"),p=u("vAyd"),g=u("mrSG"),b=u("N+3j"),h=function(l){function n(){var n=l.call(this,"signposts")||this;return n.openState=!1,n.code='\nimport {Component} from "@angular/core";\n\n@Component({\n    ...\n})\n\nexport class MyClass {\n    // Use *clrIfOpen directive to manage hide/show with the openState property.\n    public openState: boolean = false;\n}\n    ',n.html='\n<p>Signposts should be used when you want to show a small amount of contextual help\n    of information without taking the user out of the current context.\n     Use sparingly as a supplemental element and not as a primary method of adding detail.\n    <clr-signpost>\n        <clr-signpost-content *clrIfOpen="openState">\n            <h3 style="margin-top: 0">Inline signpost</h3>\n            <p>Position: <code class="clr-code">right-middle</code></p>\n        </clr-signpost-content>\n    </clr-signpost>\n</p>\n    ',n}return Object(g.c)(n,l),n}(b.a),m=t.Ra({encapsulation:2,styles:[],data:{}});function f(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,7,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,e.rb,e.P)),t.Sa(1,8568832,null,0,a.nb,[t.s,[2,a.Md],a.s],null,null),(l()(),t.Ta(2,0,null,0,1,"h3",[["style","margin-top: 0"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Inline signpost"])),(l()(),t.Ta(4,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Position: "])),(l()(),t.Ta(6,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["right-middle"]))],null,function(l,n){l(n,0,0,!0,t.db(n,1).isOffScreen)})}function T(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,13,"div",[],null,null,null,null,null)),(l()(),t.Ta(1,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Signposts should be used when you want to show a small amount of contextual help of information without taking the user out of the current context. Use sparingly as a supplemental element and not as a primary method of adding detail. "])),(l()(),t.Ta(3,0,null,null,6,"clr-signpost",[],[[2,"signpost",null]],null,null,e.sb,e.O)),t.ib(6144,null,a.Md,null,[t.l]),t.Sa(5,49152,null,1,a.mb,[a.s],null,null),t.jb(335544320,1,{customTrigger:0}),t.ib(512,null,a.hd,a.hd,[]),(l()(),t.La(16777216,null,0,1,null,f)),t.Sa(9,147456,null,0,a.Ja,[a.hd,t.Q,t.T],{open:[0,"open"]},null),(l()(),t.Ta(10,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),t.Sa(11,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),t.Ta(12,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),t.Sa(13,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){var u=n.component;l(n,9,0,u.openState),l(n,11,0,u.html,"html"),l(n,13,0,u.code,"typescript")},function(l,n){l(n,3,0,!0)})}var v=u("gIcY"),w=u("Ip0R"),y=function(l){function n(){var n=l.call(this,"signposts")||this;return n.positions=["top-left","top-middle","top-right","right-top","right-middle","right-bottom","bottom-left","bottom-middle","bottom-right","left-top","left-middle","left-bottom"],n.position="right-middle",n.html='\n<select id="position_selector" [(ngModel)]="position" name="position" id="position">\n    <option *ngFor="let position of positions" [ngValue]="position">{{ position }}</option>\n</select>\n<clr-signpost>\n    <clr-signpost-content [clrPosition]="position" *clrIfOpen>\n        <h3 style="margin-top: 0">Position</h3>\n        <p><code class="clr-code">{{ position }}</code></p>\n    </clr-signpost-content>\n</clr-signpost>\n    ',n.code='\n@Component({\n    ...\n})\nexport class MyClass {\n    positions: string[] = [ "top-left", "top-middle", "top-right",\n                            "right-top", "right-middle", "right-bottom",\n                            "bottom-left", "bottom-middle", "bottom-right",\n                            "left-top", "left-middle", "left-bottom" ];\n    position: string = "right-middle";\n}\n',n}return Object(g.c)(n,l),n}(b.a),S=t.Ra({encapsulation:0,styles:[s],data:{}});function x(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,3,"option",[],null,null,null,null,null)),t.Sa(1,147456,null,0,v.t,[t.l,t.H,[2,v.x]],{ngValue:[0,"ngValue"]},null),t.Sa(2,147456,null,0,v.E,[t.l,t.H,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),t.lb(3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.$implicit)})}function k(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,6,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,e.rb,e.P)),t.Sa(1,8568832,null,0,a.nb,[t.s,[2,a.Md],a.s],{position:[0,"position"]},null),(l()(),t.Ta(2,0,null,0,1,"h3",[["style","margin-top: 0"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Position"])),(l()(),t.Ta(4,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),t.Ta(5,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(6,null,["",""]))],function(l,n){l(n,1,0,n.component.position)},function(l,n){var u=n.component;l(n,0,0,!0,t.db(n,1).isOffScreen),l(n,6,0,u.position)})}function M(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,28,"div",[],null,null,null,null,null)),(l()(),t.Ta(1,0,null,null,23,"div",[["class","signpost-positions"]],null,null,null,null,null)),(l()(),t.Ta(2,0,null,null,14,"div",[["class","description"]],null,null,null,null,null)),(l()(),t.Ta(3,0,null,null,13,"section",[["class","form-block"]],null,null,null,null,null)),(l()(),t.Ta(4,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Ta(5,0,null,null,2,"label",[["for","position"]],[[1,"for",0]],null,null,null,null)),t.Sa(6,212992,null,0,a.Na,[[2,a.Td],[2,a.Ud],[2,a.Vd],t.H,t.l],{forAttr:[0,"forAttr"]},null),(l()(),t.lb(-1,null,["Select a position: "])),(l()(),t.Ta(8,0,null,null,8,"div",[["class","select"]],null,null,null,null,null)),(l()(),t.Ta(9,0,null,null,7,"select",[["id","position"],["name","position"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var o=!0,e=l.component;return"change"===n&&(o=!1!==t.db(l,10).onChange(u.target.value)&&o),"blur"===n&&(o=!1!==t.db(l,10).onTouched()&&o),"ngModelChange"===n&&(o=!1!==(e.position=u)&&o),o},null,null)),t.Sa(10,16384,null,0,v.x,[t.H,t.l],null,null),t.ib(1024,null,v.n,function(l){return[l]},[v.x]),t.Sa(12,671744,null,0,v.s,[[8,null],[8,null],[8,null],[6,v.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.ib(2048,null,v.o,null,[v.s]),t.Sa(14,16384,null,0,v.p,[[4,v.o]],null,null),(l()(),t.La(16777216,null,null,1,null,x)),t.Sa(16,278528,null,0,w.m,[t.T,t.Q,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ta(17,0,null,null,7,"div",[["class","demo"]],null,null,null,null,null)),(l()(),t.Ta(18,0,null,null,6,"clr-signpost",[],[[2,"signpost",null]],null,null,e.sb,e.O)),t.ib(6144,null,a.Md,null,[t.l]),t.Sa(20,49152,null,1,a.mb,[a.s],null,null),t.jb(335544320,1,{customTrigger:0}),t.ib(512,null,a.hd,a.hd,[]),(l()(),t.La(16777216,null,0,1,null,k)),t.Sa(24,147456,null,0,a.Ja,[a.hd,t.Q,t.T],{open:[0,"open"]},null),(l()(),t.Ta(25,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),t.Sa(26,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),t.Ta(27,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),t.Sa(28,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){var u=n.component;l(n,6,0,"position"),l(n,12,0,"position",u.position),l(n,16,0,u.positions),l(n,24,0,null),l(n,26,0,u.html,"html"),l(n,28,0,u.code,"typescript")},function(l,n){l(n,5,0,t.db(n,6).forAttr),l(n,9,0,t.db(n,14).ngClassUntouched,t.db(n,14).ngClassTouched,t.db(n,14).ngClassPristine,t.db(n,14).ngClassDirty,t.db(n,14).ngClassValid,t.db(n,14).ngClassInvalid,t.db(n,14).ngClassPending),l(n,18,0,!0)})}var O=function(l){function n(){var n=l.call(this,"signposts")||this;return n.html='\n<div class="signpost-triggers-wrapper">\n    <div class="signpost-trigger-demo">\n        <div class="signpost-item">\n            <h6>Clarity Icon</h6>\n            <clr-signpost>\n                <clr-icon shape="avatar" \n                          class="is-solid has-badge-info" \n                          clrSignpostTrigger>\n                </clr-icon>\n                <clr-signpost-content [clrPosition]="\'bottom-middle\'" *clrIfOpen>\n                    Lorem ipsum...\n                </clr-signpost-content>\n            </clr-signpost>\n        </div>\n        <div class="signpost-item">\n            <h6>Button Link</h6>\n            <div class="trigger-item">\n                <clr-signpost>\n                    <button class="btn btn-link" \n                            clrSignpostTrigger>\n                                Button Link Trigger\n                    </button>\n                    <clr-signpost-content [clrPosition]="\'top-middle\'" *clrIfOpen>\n                        Lorem ipsum...\n                    </clr-signpost-content>\n                </clr-signpost>\n            </div>\n        </div>\n        <div class="signpost-item">\n            <h6>Button Link w/ Clarity Icon</h6>\n            <div class="trigger-item">\n                <clr-signpost>\n                    <button class="btn btn-link" \n                            clrSignpostTrigger>\n                                Button Link \n                                <clr-icon shape="help-info"></clr-icon>\n                    </button>\n                    <clr-signpost-content [clrPosition]="\'bottom-middle\'" *clrIfOpen>\n                        Lorem ipsum...\n                    </clr-signpost-content>\n                </clr-signpost>\n            </div>\n        </div>\n    </div>\n</div>\n',n}return Object(g.c)(n,l),n}(b.a),C=t.Ra({encapsulation:0,styles:[s],data:{}});function P(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,2,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,e.rb,e.P)),t.Sa(1,8568832,null,0,a.nb,[t.s,[2,a.Md],a.s],{position:[0,"position"]},null),(l()(),t.lb(-1,0,[" Lorem ipsum... "]))],function(l,n){l(n,1,0,"bottom-middle")},function(l,n){l(n,0,0,!0,t.db(n,1).isOffScreen)})}function I(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,2,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,e.rb,e.P)),t.Sa(1,8568832,null,0,a.nb,[t.s,[2,a.Md],a.s],{position:[0,"position"]},null),(l()(),t.lb(-1,0,[" Lorem ipsum... "]))],function(l,n){l(n,1,0,"top-middle")},function(l,n){l(n,0,0,!0,t.db(n,1).isOffScreen)})}function D(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,2,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,e.rb,e.P)),t.Sa(1,8568832,null,0,a.nb,[t.s,[2,a.Md],a.s],{position:[0,"position"]},null),(l()(),t.lb(-1,0,[" Lorem ipsum... "]))],function(l,n){l(n,1,0,"bottom-middle")},function(l,n){l(n,0,0,!0,t.db(n,1).isOffScreen)})}function L(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,46,"div",[["class","signpost-triggers-wrapper"]],null,null,null,null,null)),(l()(),t.Ta(1,0,null,null,43,"div",[["class","signpost-trigger-demo"]],null,null,null,null,null)),(l()(),t.Ta(2,0,null,null,12,"div",[["class","signpost-item"]],null,null,null,null,null)),(l()(),t.Ta(3,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Clarity Icon"])),(l()(),t.Ta(5,0,null,null,9,"clr-signpost",[],[[2,"signpost",null]],null,null,e.sb,e.O)),t.ib(6144,null,a.Md,null,[t.l]),t.Sa(7,49152,null,1,a.mb,[a.s],null,null),t.jb(335544320,1,{customTrigger:0}),t.ib(512,null,a.hd,a.hd,[]),(l()(),t.Ta(10,0,null,0,2,"clr-icon",[["class","is-solid has-badge-info signpost-trigger"],["clrSignpostTrigger",""],["shape","avatar"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.db(l,12).onSignpostTriggerClick(u)&&o),o},null,null)),t.Sa(11,16384,null,0,a.Ea,[],null,null),t.Sa(12,147456,[[1,4]],0,a.pb,[a.hd,t.H,t.l],null,null),(l()(),t.La(16777216,null,0,1,null,P)),t.Sa(14,147456,null,0,a.Ja,[a.hd,t.Q,t.T],{open:[0,"open"]},null),(l()(),t.Ta(15,0,null,null,13,"div",[["class","signpost-item"]],null,null,null,null,null)),(l()(),t.Ta(16,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Button Link"])),(l()(),t.Ta(18,0,null,null,10,"div",[["class","trigger-item"]],null,null,null,null,null)),(l()(),t.Ta(19,0,null,null,9,"clr-signpost",[],[[2,"signpost",null]],null,null,e.sb,e.O)),t.ib(6144,null,a.Md,null,[t.l]),t.Sa(21,49152,null,1,a.mb,[a.s],null,null),t.jb(335544320,2,{customTrigger:0}),t.ib(512,null,a.hd,a.hd,[]),(l()(),t.Ta(24,0,null,0,2,"button",[["class","btn btn-link signpost-trigger"],["clrSignpostTrigger",""]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.db(l,25).onSignpostTriggerClick(u)&&o),o},null,null)),t.Sa(25,147456,[[2,4]],0,a.pb,[a.hd,t.H,t.l],null,null),(l()(),t.lb(-1,null,[" Button Link Trigger "])),(l()(),t.La(16777216,null,0,1,null,I)),t.Sa(28,147456,null,0,a.Ja,[a.hd,t.Q,t.T],{open:[0,"open"]},null),(l()(),t.Ta(29,0,null,null,15,"div",[["class","signpost-item"]],null,null,null,null,null)),(l()(),t.Ta(30,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Button Link w/ Clarity Icon"])),(l()(),t.Ta(32,0,null,null,12,"div",[["class","trigger-item"]],null,null,null,null,null)),(l()(),t.Ta(33,0,null,null,11,"clr-signpost",[],[[2,"signpost",null]],null,null,e.sb,e.O)),t.ib(6144,null,a.Md,null,[t.l]),t.Sa(35,49152,null,1,a.mb,[a.s],null,null),t.jb(335544320,3,{customTrigger:0}),t.ib(512,null,a.hd,a.hd,[]),(l()(),t.Ta(38,0,null,0,4,"button",[["class","btn btn-link signpost-trigger"],["clrSignpostTrigger",""]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.db(l,39).onSignpostTriggerClick(u)&&o),o},null,null)),t.Sa(39,147456,[[3,4]],0,a.pb,[a.hd,t.H,t.l],null,null),(l()(),t.lb(-1,null,[" Button Link "])),(l()(),t.Ta(41,0,null,null,1,"clr-icon",[["shape","help-info"]],null,null,null,null,null)),t.Sa(42,16384,null,0,a.Ea,[],null,null),(l()(),t.La(16777216,null,0,1,null,D)),t.Sa(44,147456,null,0,a.Ja,[a.hd,t.Q,t.T],{open:[0,"open"]},null),(l()(),t.Ta(45,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),t.Sa(46,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){var u=n.component;l(n,14,0,null),l(n,28,0,null),l(n,44,0,null),l(n,46,0,u.html,"html")},function(l,n){l(n,5,0,!0),l(n,19,0,!0),l(n,33,0,!0)})}var X=function(l){function n(){var n=l.call(this,"signposts")||this;return n.openState=!1,n.html='\n<clr-signpost>\n    <clr-signpost-content *clrIfOpen>\n        <h3>Default Signpost</h3>\n        <p>Position: <code class="clr-code">right-middle</code></p>\n    </clr-signpost-content>\n</clr-signpost>\n    ',n}return Object(g.c)(n,l),n}(b.a),j=t.Ra({encapsulation:0,styles:[s],data:{}});function R(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,7,"clr-signpost-content",[],[[2,"signpost-content",null],[2,"is-off-screen",null]],null,null,e.rb,e.P)),t.Sa(1,8568832,null,0,a.nb,[t.s,[2,a.Md],a.s],null,null),(l()(),t.Ta(2,0,null,0,1,"h3",[["style","margin-top: 0"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Default Signpost"])),(l()(),t.Ta(4,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Position: "])),(l()(),t.Ta(6,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["right-middle"]))],null,function(l,n){l(n,0,0,!0,t.db(n,1).isOffScreen)})}function _(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,198,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,c.b,c.a)),t.Sa(1,49152,null,0,r.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),t.Ta(2,0,null,0,196,"article",[],null,null,null,null,null)),(l()(),t.Ta(3,0,null,null,1,"h5",[["class","component-summary"],["id","a-signpost-description"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["The signpost is a convenient, lightweight way to show contextual help of information without taking the user out of the current context."])),(l()(),t.Ta(5,0,null,null,71,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),t.Ta(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Examples"])),(l()(),t.Ta(8,0,null,null,3,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),t.Ta(9,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),t.Ta(10,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),t.Ta(11,0,null,null,0,"img",[["alt","basic and pie chart"],["src","assets/images/documentation/signposts/basic-and-pie-chart.svg"]],null,null,null,null,null)),(l()(),t.Ta(12,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Description"])),(l()(),t.Ta(14,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["A signpost displays contextual help or information in a popover dialog. Like a tooltip, it has an arrow/pointer that extends out to the trigger element, but the dialog is larger to fit more content. Signposts are designed to show a relatively small amount of content which may include: a title, images, text links of image links. A vertical scrollbar (browser default) may be used if the content exceeds the maximum height of the dialog."])),(l()(),t.Ta(16,0,null,null,1,"h5",[["style","margin: 24px 0 12px;"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Size"])),(l()(),t.Ta(18,0,null,null,4,"ul",[["class","list"]],null,null,null,null,null)),(l()(),t.Ta(19,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Min-width 216px; Min-height 84px"])),(l()(),t.Ta(21,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Max-width 360px; Max-height 504px"])),(l()(),t.Ta(23,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Usage"])),(l()(),t.Ta(25,0,null,null,1,"p",[["style","margin-bottom: 12px;"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Signposts should be used when you want to show a small amount of contextual help of information without taking the user out of the current context. Use sparingly as a supplemental element and not as a primary method of adding detail."])),(l()(),t.Ta(27,0,null,null,6,"ul",[["class","list"]],null,null,null,null,null)),(l()(),t.Ta(28,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["When the amount of content won't fit in a tooltip"])),(l()(),t.Ta(30,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["When you want to include a header, image or text/image links in the content"])),(l()(),t.Ta(32,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["When the information presented needs to stay in view at length (Unlike tooltips, signposts stay in view until the user interacts with another element) "])),(l()(),t.Ta(34,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Interaction"])),(l()(),t.Ta(36,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Clicking the icon triggers the signpost. It remains visible until the user clicks the close icon or clicks anywhere outside of the dialog to dismiss it. To keep the interface uncluttered, only one signpost is displayed at a time. When a dialog is visible, clicking an icon to open another one automatically dismisses the previous dialog."])),(l()(),t.Ta(38,0,null,null,3,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),t.Ta(39,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),t.Ta(40,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),t.Ta(41,0,null,null,0,"img",[["alt",""],["src","assets/images/documentation/signposts/states.svg"]],null,null,null,null,null)),(l()(),t.Ta(42,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Trigger icon and dialog positioning"])),(l()(),t.Ta(44,0,null,null,6,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),t.Ta(45,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),t.Ta(46,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),t.Ta(47,0,null,null,0,"img",[["alt",""],["src","assets/images/documentation/signposts/positioning.svg"]],null,null,null,null,null)),(l()(),t.Ta(48,0,null,null,2,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),t.Ta(49,0,null,null,1,"p",[["style","margin-top: 12px;"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Default postion for the dialog is 6px to the right of the trigger icon."])),(l()(),t.Ta(51,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(52,0,null,null,5,"div",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),t.Ta(53,0,null,null,4,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),t.Ta(54,0,null,null,0,"img",[["alt","Signposts inline alignment"],["class","clrweb-Img"],["src","assets/images/documentation/signposts/inline-alignment.svg"]],null,null,null,null,null)),(l()(),t.Ta(55,0,null,null,2,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),t.Ta(56,0,null,null,1,"p",[["style","margin-top: 12px;"]],null,null,null,null,null)),(l()(),t.lb(-1,null,[" Default position for the dialog is 6px from the end of the text "])),(l()(),t.Ta(58,0,null,null,5,"div",[["class","col-xs-12 col-sm-6"]],null,null,null,null,null)),(l()(),t.Ta(59,0,null,null,4,"div",[["class","clrweb-DoxMedia"]],null,null,null,null,null)),(l()(),t.Ta(60,0,null,null,0,"img",[["alt","Signpost in column alignment"],["class","clrweb-Img"],["src","assets/images/documentation/signposts/column-alignment.svg"]],null,null,null,null,null)),(l()(),t.Ta(61,0,null,null,2,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),t.Ta(62,0,null,null,1,"p",[["style","margin-top: 12px;"]],null,null,null,null,null)),(l()(),t.lb(-1,null,[" In tables, the icons may be aligned in a column "])),(l()(),t.Ta(64,0,null,null,1,"h4",[["style","margin-bottom: 12px;"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Recommendations"])),(l()(),t.Ta(66,0,null,null,10,"ul",[["class","list"]],null,null,null,null,null)),(l()(),t.Ta(67,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["The popover should not be so large that it dominates the screen"])),(l()(),t.Ta(69,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Make sure that the popover doesn't obstruct other important information on the screen"])),(l()(),t.Ta(71,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["With the exception of text/image links, don't insert any actionable components, such as buttons, in the dialog "])),(l()(),t.Ta(73,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Don't rely on signposts as a primary method of displaying additional information - i.e. as a way to save space on a page "])),(l()(),t.Ta(75,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.lb(-1,null,[" Use sparingly as a device to add immediate, relevant information "])),(l()(),t.Ta(77,0,null,null,121,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),t.Ta(78,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Code & Examples"])),(l()(),t.Ta(80,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.lb(-1,null,[" The signpost component uses the "])),(l()(),t.Ta(82,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["*clrIfOpen"])),(l()(),t.lb(-1,null,[" structural directive (detailed documentation coming soon) on the signpost content to indicate clearly that said content is only present in the DOM when open. We heavily recommend using it for many reasons: better performance, making the intent clear in your own templates, and following a more natural lifecycle for any directives or components inside of the signpost. "])),(l()(),t.Ta(85,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.lb(-1,null,[" If for some reason this behavior was not the one you wanted, for instance if you want screenreaders to read the signpost inline as opposed to when the user activates the trigger, we also support the signpost content without a "])),(l()(),t.Ta(87,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["*clrIfOpen"])),(l()(),t.lb(-1,null,[" directive on it. It will be created eagerly when the signpost itself initializes, and will not be destroyed or recreated until the signpost itself is. Please make sure you know exactly why you are omitting this directive if you end up doing so. "])),(l()(),t.Ta(90,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["The default signpost is shown to the right of the trigger icon with the content centered vertically in the middle of the trigger. It opens with a click action. Once open its contents can be interacted with. The Signpost is closed when clicking on the "])),(l()(),t.Ta(92,0,null,null,1,"clr-icon",[["shape","close"]],null,null,null,null,null)),t.Sa(93,16384,null,0,a.Ea,[],null,null),(l()(),t.lb(-1,null,[" icon or by clicking anywhere outside the "])),(l()(),t.Ta(95,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["clr-signpost-content"])),(l()(),t.lb(-1,null,[" element. "])),(l()(),t.Ta(98,0,null,null,7,"div",[["class","signpost-default"]],null,null,null,null,null)),(l()(),t.Ta(99,0,null,null,6,"clr-signpost",[],[[2,"signpost",null]],null,null,e.sb,e.O)),t.ib(6144,null,a.Md,null,[t.l]),t.Sa(101,49152,null,1,a.mb,[a.s],null,null),t.jb(335544320,1,{customTrigger:0}),t.ib(512,null,a.hd,a.hd,[]),(l()(),t.La(16777216,null,0,1,null,R)),t.Sa(105,147456,null,0,a.Ja,[a.hd,t.Q,t.T],{open:[0,"open"]},null),(l()(),t.Ta(106,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),t.Sa(107,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),t.Ta(108,0,null,null,1,"clr-signpost-paragraph-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,T,m)),t.Sa(109,49152,null,0,h,[],null,null),(l()(),t.Ta(110,0,null,null,1,"h3",[["id","signposts-positions"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Signpost positions"])),(l()(),t.Ta(112,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),t.lb(-1,null,[" There are twelve signpost positions to help place the popover in an appropriate position when shown. You control the position and direction by declaring a position that orients your that Signpost content as you see fit. On a "])),(l()(),t.Ta(114,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["clr-signpost-content"])),(l()(),t.lb(-1,null,[" component add the input "])),(l()(),t.Ta(117,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["[clrPosition]=\"'position'\""])),(l()(),t.lb(-1,null,[" where position is one of the following: "])),(l()(),t.Ta(120,0,null,null,16,"ul",[["class","list"]],null,null,null,null,null)),(l()(),t.Ta(121,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ta(122,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["top-X: "])),(l()(),t.lb(-1,null,[" the arrow will point down and the popover will be above the trigger in the X position where X = left, middle or right "])),(l()(),t.Ta(125,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ta(126,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["bottom-X: "])),(l()(),t.lb(-1,null,[" the arrow will point up and the popover will be below the trigger in the X position where X = left, middle or right "])),(l()(),t.Ta(129,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ta(130,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["left-X: "])),(l()(),t.lb(-1,null,[" the arrow will point right and the popover will be left of the trigger in the X position where X = top, middle or bottom "])),(l()(),t.Ta(133,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Ta(134,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["right-X: "])),(l()(),t.lb(-1,null,[" the arrow will point left and the popover will be right of the trigger in the X position where X = top, middle or bottom "])),(l()(),t.Ta(137,0,null,null,1,"clr-signpost-positions-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,M,S)),t.Sa(138,49152,null,0,y,[],null,null),(l()(),t.Ta(139,0,null,null,1,"h3",[["id","custom-triggers"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Custom Triggers"])),(l()(),t.Ta(141,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["We provide a default trigger but you can add one yourself. The signpost component provides the "])),(l()(),t.Ta(143,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["clrSignpostTrigger"])),(l()(),t.lb(-1,null,[" attribute directive that can be added to the "])),(l()(),t.Ta(146,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["clr-signpost-content"])),(l()(),t.lb(-1,null,[" child. To control the position of your signpost, add "])),(l()(),t.Ta(149,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,['[clrPosition]="position"'])),(l()(),t.lb(-1,null,[" so that it knows how the Signpost should point."])),(l()(),t.Ta(152,0,null,null,1,"clr-signpost-triggers-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,L,C)),t.Sa(153,49152,null,0,O,[],null,null),(l()(),t.Ta(154,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["Summary of Options"])),(l()(),t.Ta(156,0,null,null,42,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.Ta(157,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.Ta(158,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.Ta(159,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Input/Output"])),(l()(),t.Ta(161,0,null,null,1,"th",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Values"])),(l()(),t.Ta(163,0,null,null,1,"th",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Default"])),(l()(),t.Ta(165,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Effect"])),(l()(),t.Ta(167,0,null,null,31,"tbody",[],null,null,null,null,null)),(l()(),t.Ta(168,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t.Ta(169,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),t.Ta(170,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["[clrPosition]"])),(l()(),t.Ta(172,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Type: string"])),(l()(),t.Ta(174,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Default: right-middle"])),(l()(),t.Ta(176,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["string"])),(l()(),t.Ta(178,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["right-middle"])),(l()(),t.Ta(180,0,null,null,4,"td",[["class","left"]],null,null,null,null,null)),(l()(),t.lb(-1,null,[" Set the position of the "])),(l()(),t.Ta(182,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["clr-signpost-content"])),(l()(),t.lb(-1,null,[' popover: anchorPoint & popoverPosition. For example: "right-middle" (ANCHOR-POSITION) will anchor the clr-signpost-content popover and point to the icons middle on the right side. And, the popover itself will be positioned to the right of the trigger icon with the icon in the vertical middle of the popover. '])),(l()(),t.Ta(185,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t.Ta(186,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),t.Ta(187,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.lb(-1,null,["clrSignpostTrigger"])),(l()(),t.Ta(189,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Type: SignpostTriggerDirective"])),(l()(),t.Ta(191,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["Default: n/a"])),(l()(),t.Ta(193,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["SignpostTriggerDirective"])),(l()(),t.Ta(195,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),t.lb(-1,null,["n/a"])),(l()(),t.Ta(197,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),t.lb(-1,null,[" The SignpostTriggerDirective is placed on the outer-most container element for a custom trigger. It overrides the default Signpost trigger with custom content. "]))],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,105,0,null),l(n,107,0,u.html,"html")},function(l,n){l(n,0,0,!0),l(n,99,0,!0),l(n,108,0,!0,!0),l(n,137,0,!0,!0),l(n,152,0,!0,!0)})}var F=t.Pa("clr-tooltips-demo",X,function(l){return t.nb(0,[(l()(),t.Ta(0,0,null,null,1,"clr-tooltips-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,_,j)),t.Sa(1,49152,null,0,X,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),Q=u("ZYCi"),V=u("XPsC"),A=u("JsA7");u.d(n,"SignpostDemoModuleNgFactory",function(){return E});var E=t.Qa(o,[],function(l){return t.ab([t.bb(512,t.k,t.Ga,[[8,[e.Sb,e.a,e.b,e.d,e.e,e.f,e.g,e.h,e.Ob,e.Pb,e.Qb,e.Rb,e.c,i.a,F]],[3,t.k],t.z]),t.bb(4608,w.p,w.o,[t.w,[2,w.H]]),t.bb(4608,v.C,v.C,[]),t.bb(1073742336,w.b,w.b,[]),t.bb(1073742336,v.z,v.z,[]),t.bb(1073742336,v.k,v.k,[]),t.bb(1073742336,a.Fa,a.Fa,[]),t.bb(1073742336,a.lc,a.lc,[]),t.bb(1073742336,a.Nd,a.Nd,[]),t.bb(1073742336,a.X,a.X,[]),t.bb(1073742336,a.d,a.d,[]),t.bb(1073742336,a.Z,a.Z,[]),t.bb(1073742336,a.r,a.r,[]),t.bb(1073742336,a.Zd,a.Zd,[]),t.bb(1073742336,a.p,a.p,[]),t.bb(1073742336,a.nc,a.nc,[]),t.bb(1073742336,a.O,a.O,[]),t.bb(1073742336,a.Ma,a.Ma,[]),t.bb(1073742336,a.db,a.db,[]),t.bb(1073742336,a.hb,a.hb,[]),t.bb(1073742336,a.lb,a.lb,[]),t.bb(1073742336,a.Fb,a.Fb,[]),t.bb(1073742336,a.Ca,a.Ca,[]),t.bb(1073742336,a.Sa,a.Sa,[]),t.bb(1073742336,a.xc,a.xc,[]),t.bb(1073742336,a.kd,a.kd,[]),t.bb(1073742336,a.G,a.G,[]),t.bb(1073742336,a.wb,a.wb,[]),t.bb(1073742336,a.Lb,a.Lb,[]),t.bb(1073742336,a.v,a.v,[]),t.bb(1073742336,a.Xa,a.Xa,[]),t.bb(1073742336,a.Ra,a.Ra,[]),t.bb(1073742336,a.i,a.i,[]),t.bb(1073742336,a.j,a.j,[]),t.bb(1073742336,a.Va,a.Va,[]),t.bb(1073742336,a.ab,a.ab,[]),t.bb(1073742336,a.sd,a.sd,[]),t.bb(1073742336,a.Cb,a.Cb,[]),t.bb(1073742336,a.Rb,a.Rb,[]),t.bb(1073742336,a.Oa,a.Oa,[]),t.bb(1073742336,a.ob,a.ob,[]),t.bb(1073742336,a.Ib,a.Ib,[]),t.bb(1073742336,a.eb,a.eb,[]),t.bb(1073742336,a.Wb,a.Wb,[]),t.bb(1073742336,a.S,a.S,[]),t.bb(1073742336,a.a,a.a,[]),t.bb(1073742336,Q.o,Q.o,[[2,Q.u],[2,Q.l]]),t.bb(1073742336,V.a,V.a,[]),t.bb(1073742336,A.a,A.a,[]),t.bb(1073742336,o,o,[]),t.bb(1024,Q.j,function(){return[[{path:"",component:X}]]},[])])})}}]);