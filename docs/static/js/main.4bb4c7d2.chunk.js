(this.webpackJsonpgarden=this.webpackJsonpgarden||[]).push([[0],{110:function(e,t,a){e.exports=a(226)},123:function(e,t){},125:function(e,t){},157:function(e,t){},158:function(e,t){},223:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n,r,i,l,o,c,s,u,m,d,b,f,p,h,g,v,y,w,E,O,j,N,S,G,x,z,k,P,F,D,R,M,I,T,A,C,L,B,J,H,Y,_,V,K,U,q,Q=a(0),W=a(62),X=(a(115),a(16)),Z=a(41),$=a(109),ee=a(107),te=a(8),ae=a(3),ne=a(2),re=(a(64),a(1)),ie=a(42),le=a(105),oe=function e(){Object(X.a)(this,e),this[1]=0,this[2]=0,this[3]=0},ce=function(e,t){var a,n,r,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return[null!==(a=e[t-1])&&void 0!==a?a:0,i?0:null!==(n=e[t])&&void 0!==n?n:0,null!==(r=e[t+1])&&void 0!==r?r:0]},se=function(e){return e.map((function(t,a){return t.map((function(t,n){var r=function(e,t,a){var n,r,i=null!==(n=e[t-1])&&void 0!==n?n:[],l=e[t],o=null!==(r=e[t+1])&&void 0!==r?r:[];return ce(i,a).concat(ce(l,a,!0)).concat(ce(o,a)).reduce((function(e,t){var a;return Object(le.a)({},e,Object(ie.a)({},t,(null!==(a=e[t])&&void 0!==a?a:0)+1))}),new oe)}(e,a,n);return 0===t?function(e){return 3===e[1]?1:3===e[2]?2:3===e[3]?3:0}(r):function(e,t){switch(t[e]){case 0:case 1:return 0;case 2:case 3:return e;default:return 0}}(t,r)}))}))},ue=a(20),me=a.n(ue),de=a(108),be=function e(){var t=this;Object(X.a)(this,e),this.data=[],this.pushInput=function(e,a,n){t.data.push([e,a,n])},this.applyData=function(e,a){t.data.forEach((function(t){var n=Object(de.a)(t,3),r=n[0],i=n[1],l=n[2];e[r][i]=l,l>0&&a.useFlower(l)}))}},fe=a(18),pe=a.n(fe),he=a(28),ge=a(106),ve=a.n(ge),ye=function(){var e=Object(he.a)(pe.a.mark((function e(t,a,n){var r,i,l,o;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=me()().toISOString(),"label is-large has-text-light",l="".concat(i="f1537800-44d2-4ef4-b311-4e231b677fc0","-").concat(a,"-").concat(t,"-").concat(r,"-").concat("label is-large has-text-light"),o=ve.a.MD5(l).toString(),e.next=7,fetch("https://highscore.joonamo.com"+"/game/".concat(encodeURIComponent(i),"/score"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({player:t,score:a,time:r,validation:o,meta:{replay:n}})});case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),we=function(){var e=Object(he.a)(pe.a.mark((function e(){var t;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"f1537800-44d2-4ef4-b311-4e231b677fc0",e.next=3,fetch("https://highscore.joonamo.com"+"/game/".concat(encodeURIComponent("f1537800-44d2-4ef4-b311-4e231b677fc0"),"/scores?distinct=true"));case 3:return e.next=5,e.sent.json();case 5:return t=e.sent,e.abrupt("return",t.map((function(e){var t,a;return{score:e.score,player:e.player,replay:null!==(t=null===(a=e.meta)||void 0===a?void 0:a.replay)&&void 0!==t?t:[]}})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee=new(n=function(){function e(){var t,a=this;Object(X.a)(this,e),Object(ae.a)(this,"playerName",r,this),Object(ae.a)(this,"scoreboard",i,this),Object(ae.a)(this,"reloadingScores",l,this),Object(ae.a)(this,"submittingScore",o,this),Object(ae.a)(this,"previousScoreStanding",c,this),Object(ae.a)(this,"showingGameOverModal",s,this),Object(ae.a)(this,"gameOver",u,this),Object(ae.a)(this,"startGame",m,this),this.reloadScores=Object(he.a)(pe.a.mark((function e(){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.reloadingScores=!0,e.prev=1,e.next=4,we();case 4:a.scoreboard=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("error loading scores",e.t0);case 10:return e.prev=10,a.reloadingScores=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])}))),Object(ae.a)(this,"setPlayerName",d,this),Object(ae.a)(this,"hideGameOverPopup",b,this),Object(ae.a)(this,"resetName",f,this),this.startReplayIdx=function(e){var t=a.scoreboard[e];if(t){Se.doReplay(t.replay.map((function(e){var t=new be;return t.data=e,t})));var n=document.getElementById("title");null===n||void 0===n||n.scrollIntoView()}},this.reloadScores(),this.playerName=null!==(t=localStorage.getItem("playerName"))&&void 0!==t?t:""}return Object(Z.a)(e,[{key:"goodToGo",get:function(){return this.playerName.length>0}}]),e}(),r=Object(ne.a)(n.prototype,"playerName",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),i=Object(ne.a)(n.prototype,"scoreboard",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),l=Object(ne.a)(n.prototype,"reloadingScores",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),o=Object(ne.a)(n.prototype,"submittingScore",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),c=Object(ne.a)(n.prototype,"previousScoreStanding",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),s=Object(ne.a)(n.prototype,"showingGameOverModal",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),u=Object(ne.a)(n.prototype,"gameOver",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(he.a)(pe.a.mark((function t(a,n,r){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=14;break}return e.submittingScore=!0,e.showingGameOverModal=!0,t.prev=3,t.next=6,ye(e.playerName,n,r.map((function(e){return e.data})));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),console.log("error submitting score",t.t0);case 11:return t.prev=11,e.submittingScore=!1,t.finish(11);case 14:return t.next=16,e.reloadScores();case 16:case"end":return t.stop()}}),t,null,[[3,8,11,14]])})));return function(e,a,n){return t.apply(this,arguments)}}()}}),m=Object(ne.a)(n.prototype,"startGame",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.hideGameOverPopup()}}}),Object(ne.a)(n.prototype,"goodToGo",[re.computed],Object.getOwnPropertyDescriptor(n.prototype,"goodToGo"),n.prototype),d=Object(ne.a)(n.prototype,"setPlayerName",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.playerName=t,localStorage.setItem("playerName",e.playerName)}}}),b=Object(ne.a)(n.prototype,"hideGameOverPopup",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.showingGameOverModal=!1}}}),f=Object(ne.a)(n.prototype,"resetName",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.playerName=""}}}),n),Oe=function(e,t,a,n){var r=e[a][n],i=t[a][n],l=!1;return 0===r&&i>0&&(l=!0,r=i),{value:r,isPrev:l}},je=(p=function e(){var t=this;Object(X.a)(this,e),Object(ae.a)(this,"cumulative",h,this),Object(ae.a)(this,"frame",g,this),Object(ae.a)(this,"1",v,this),Object(ae.a)(this,"2",y,this),Object(ae.a)(this,"3",w,this),Object(ae.a)(this,"dying1",E,this),Object(ae.a)(this,"dying2",O,this),Object(ae.a)(this,"dying3",j,this),this.applyFrame=function(){t.cumulative+=t.frame},this.updateFrame=function(e,a){var n={1:0,2:0,3:0,dying1:0,dying2:0,dying3:0};e.map((function(t,r){return t.map((function(t,i){var l=Oe(e,a,r,i),o=l.value,c=l.isPrev;return n[o]+=1,c&&(n["dying".concat(o)]+=1),null}))})),t[1]=n[1],t[2]=n[2],t[3]=n[3],t.dying1=n.dying1,t.dying2=n.dying2,t.dying3=n.dying3,t.frame=(n[1]||1)*(n[2]||1)*(n[3]||1)}},h=Object(ne.a)(p.prototype,"cumulative",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),g=Object(ne.a)(p.prototype,"frame",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),v=Object(ne.a)(p.prototype,"1",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),y=Object(ne.a)(p.prototype,"2",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),w=Object(ne.a)(p.prototype,"3",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),E=Object(ne.a)(p.prototype,"dying1",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),O=Object(ne.a)(p.prototype,"dying2",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),j=Object(ne.a)(p.prototype,"dying3",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p),Ne=(N=function e(){var t=this;Object(X.a)(this,e),Object(ae.a)(this,"1",S,this),Object(ae.a)(this,"2",G,this),Object(ae.a)(this,"3",x,this),this.useFlower=function(e){var a=String(e);return t[a]>0&&(t[a]--,!0)}},S=Object(ne.a)(N.prototype,"1",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),G=Object(ne.a)(N.prototype,"2",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),x=Object(ne.a)(N.prototype,"3",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),N),Se=new(z=function e(){var t=this;Object(X.a)(this,e),Object(ae.a)(this,"garden",k,this),Object(ae.a)(this,"previousGarden",P,this),Object(ae.a)(this,"helpfulArray",F,this),Object(ae.a)(this,"selectedFlower",D,this),Object(ae.a)(this,"isPlanting",R,this),Object(ae.a)(this,"scores",M,this),this.day=me()(),Object(ae.a)(this,"dayString",I,this),this.inventory=new Ne,Object(ae.a)(this,"gameState",T,this),this.replayData=[],this.currentFrameReplayData=new be,Object(ae.a)(this,"doingReplay",A,this),this.replayFrame=0,Object(ae.a)(this,"hasPlantedAny",C,this),this.endDate=void 0,Object(ae.a)(this,"setDate",L,this),Object(ae.a)(this,"resetGarden",B,this),Object(ae.a)(this,"setTile",J,this),Object(ae.a)(this,"startSimulation",H,this),this.frame=function(){if(t.simulate(),"1"!==t.day.format("D"))window.setTimeout(t.frame,100);else if("9"===t.day.format("M"))Ee.gameOver(t.doingReplay,t.scores.cumulative,t.replayData),t.doingReplay=!1,t.gameState="GameOver";else if(t.doingReplay){var e=t.replayData[t.replayFrame];e&&e.applyData(t.garden,t.inventory),t.replayFrame+=1,window.setTimeout(t.frame,2e3)}else t.gameState="Planning"},Object(ae.a)(this,"simulate",Y,this),this.giveMoreSeeds=function(e,a){a>=10&&(t.inventory[String(e)]=t.inventory[String(e)]+1)},Object(ae.a)(this,"setFlower",_,this),Object(ae.a)(this,"startPlanting",V,this),Object(ae.a)(this,"stopPlanting",K,this),Object(ae.a)(this,"doReplay",U,this),Object(ae.a)(this,"playStoredReplay",q,this),this.helpfulArray=new Array(15).map((function(e,t){return t})),this.resetGarden(),this.endDate=me()("2020-".concat("9".padStart(2,"0"),"-01"))},k=Object(ne.a)(z.prototype,"garden",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[[]]}}),P=Object(ne.a)(z.prototype,"previousGarden",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[[]]}}),F=Object(ne.a)(z.prototype,"helpfulArray",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),D=Object(ne.a)(z.prototype,"selectedFlower",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),R=Object(ne.a)(z.prototype,"isPlanting",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),M=Object(ne.a)(z.prototype,"scores",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new je}}),I=Object(ne.a)(z.prototype,"dayString",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),T=Object(ne.a)(z.prototype,"gameState",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"Planning"}}),A=Object(ne.a)(z.prototype,"doingReplay",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),C=Object(ne.a)(z.prototype,"hasPlantedAny",[re.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),L=Object(ne.a)(z.prototype,"setDate",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.day=me()(t),e.dayString=e.day.format("MMMM Do")}}}),B=Object(ne.a)(z.prototype,"resetGarden",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.gameState="Planning",e.garden=e.helpfulArray.map((function(){return new Array(15).fill(0)})),e.previousGarden=e.helpfulArray.map((function(){return new Array(15).fill(0)})),e.scores=new je,e.setDate(me()("2020-".concat("5".padStart(2,"0"),"-01"))),e.inventory[1]=10,e.inventory[2]=10,e.inventory[3]=10,e.replayData=[],e.currentFrameReplayData=new be,e.replayFrame=0,e.hasPlantedAny=!1,Ee.startGame()}}}),J=Object(ne.a)(z.prototype,"setTile",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){"Planning"===e.gameState&&(0===e.selectedFlower||0===e.garden[t][a]&&e.inventory.useFlower(e.selectedFlower))&&(e.garden[t][a]=e.selectedFlower,e.scores.updateFrame(e.garden,e.previousGarden),e.currentFrameReplayData.pushInput(t,a,e.selectedFlower),e.hasPlantedAny=!0)}}}),H=Object(ne.a)(z.prototype,"startSimulation",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.gameState="Simulating",e.doingReplay||(e.replayData.push(e.currentFrameReplayData),e.currentFrameReplayData=new be),e.stopPlanting(),e.frame()}}}),Y=Object(ne.a)(z.prototype,"simulate",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.setDate(e.day.add(1,"day")),e.previousGarden=e.garden,e.garden=se(JSON.parse(JSON.stringify(e.garden))),e.scores.updateFrame(e.garden,e.previousGarden),e.scores.applyFrame(),e.giveMoreSeeds(1,e.scores.dying1),e.giveMoreSeeds(2,e.scores.dying2),e.giveMoreSeeds(3,e.scores.dying3)}}}),_=Object(ne.a)(z.prototype,"setFlower",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.selectedFlower=t}}}),V=Object(ne.a)(z.prototype,"startPlanting",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isPlanting=!0}}}),K=Object(ne.a)(z.prototype,"stopPlanting",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isPlanting=!1}}}),U=Object(ne.a)(z.prototype,"doReplay",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.resetGarden(),e.replayData=t,e.replayData[0].applyData(e.garden,e.inventory),e.replayFrame=1,e.doingReplay=!0,window.setTimeout(e.startSimulation,2e3)}}}),q=Object(ne.a)(z.prototype,"playStoredReplay",[re.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.doReplay(e.replayData)}}}),z);window.addEventListener("mouseup",(function(){return Se.stopPlanting()}));a(223);var Ge,xe=a(13),ze=a.n(xe),ke=Object(te.a)((function(e){var t=e.overlay;return Q.createElement("div",{className:"garden-container"},Q.createElement("div",{className:"garden"},Se.garden.map((function(e,t){return Q.createElement(Pe,{row:t,key:"garden-row-".concat(t)})}))),t&&Q.createElement("div",{className:"garden-overlay"},Q.createElement("div",{className:"garden-overlay-content"},t)))})),Pe=Object(te.a)((function(e){var t,a=e.row;return Q.createElement("div",{className:"garden-row"},(null!==(t=Se.garden[a])&&void 0!==t?t:[]).map((function(e,t){return Q.createElement(Fe,{row:a,col:t,key:"garden-tile-".concat(a,"-").concat(t)})})))})),Fe=Object(te.a)((function(e){var t=e.row,a=e.col,n=Oe(Se.garden,Se.previousGarden,t,a),r=n.value,i=n.isPrev,l=function(e){e.preventDefault(),Se.startPlanting(),Se.setTile(t,a)};return Q.createElement("div",{className:ze()("garden-tile",0===t?"hide-border-left":null,0===a?"hide-border-top":null)},Q.createElement("div",{className:ze()("garden-tile-content",r>0?"flower-".concat(r):null,i?"withering":null),onMouseDown:l,onMouseEnter:function(){Se.isPlanting&&Se.setTile(t,a)},onTouchStart:l}))})),De=function(){var e=document.getElementById("how-to-play");null===e||void 0===e||e.scrollIntoView()},Re=Object(te.a)((function(){return Q.createElement(Q.Fragment,null,Q.createElement("label",{className:"label is-large has-text-light"},"Tool"),Q.createElement("div",{className:"field has-addons is-hidden-tablet is-fullwidth"},Q.createElement(Me,{flower:0,image:"assets/shovel.png",key:"flower-selector-".concat(0)}),Q.createElement(Me,{flower:1,key:"flower-selector-".concat(1)}),Q.createElement(Me,{flower:2,key:"flower-selector-".concat(2)}),Q.createElement(Me,{flower:3,key:"flower-selector-".concat(3)})),Q.createElement("div",{className:"field is-hidden-tablet is-fullwidth"},Q.createElement("div",{className:"control"},Q.createElement("button",{className:ze()("button","is-fullwidth","is-info","is-small"),onClick:De},"How to play?"))),Q.createElement("div",{className:"field is-hidden-mobile"},Q.createElement(Me,{flower:0,image:"assets/shovel.png",key:"flower-selector-".concat(0)}),Q.createElement(Me,{flower:1,key:"flower-selector-".concat(1)}),Q.createElement(Me,{flower:2,key:"flower-selector-".concat(2)}),Q.createElement(Me,{flower:3,key:"flower-selector-".concat(3)})))})),Me=Object(te.a)((function(e){var t=e.flower,a=e.image;return Q.createElement("div",{className:"control"},Q.createElement("button",{className:ze()("button",Se.selectedFlower===t?"is-success":"is-primary","scaling-button","is-fullwidth"),onClick:function(){return Se.setFlower(t)}},Q.createElement("span",{className:"icon is-left"},Q.createElement("img",{src:null!==a&&void 0!==a?a:"assets/flower-".concat(t,".png"),alt:"Plant flower ".concat(t)})),Q.createElement("span",null,Se.inventory[String(t)])))})),Ie=Object(te.a)((function(){return Q.createElement("div",{className:"columns is-mobile"},Q.createElement("div",{className:"column"},Q.createElement("h4",{className:"title is-4 is-small"},Se.dayString)),Q.createElement("div",{className:"column has-text-right"},Q.createElement("h4",{className:"title is-4 is-small"},Se.endDate.diff(Se.day,"month")," months left")))})),Te=Object(te.a)((function(){return Q.createElement("h2",{className:"title is-2 is-small"},"Score: ",Se.scores.cumulative.toLocaleString("en-GB"))})),Ae=function(e){var t;return Q.createElement("div",{className:"control"},Q.createElement("button",{className:ze()("button",null!==(t=e.styleOverride)&&void 0!==t?t:"is-danger","scaling-button","is-marginless","is-fullwidth",e.loading?"is-loading":null),onClick:e.action,disabled:e.disabled},e.text))},Ce=function(){("GameOver"===Se.gameState||confirm("Are you sure you want to restart? You will lose your game!"))&&Se.resetGarden()},Le=Object(te.a)((function(){var e=Se.gameState,t=!Ee.goodToGo||"Simulating"===e;return Q.createElement("div",{className:"columns"},Q.createElement("div",{className:"column"},Q.createElement(Ae,{action:Ce,text:"GameOver"===e?"New Game":"Reset",disabled:t,styleOverride:"GameOver"===e?"is-primary":void 0})),"GameOver"!==e?Q.createElement("div",{className:"column"},Q.createElement(Ae,{action:Se.startSimulation,text:Se.hasPlantedAny?"Ready!":"Plant some flowers!",disabled:t||!Se.hasPlantedAny,loading:"Simulating"===e,styleOverride:"is-primary"})):Q.createElement("div",{className:"column"},Q.createElement(Ae,{action:Se.playStoredReplay,text:"Replay"})))})),Be=Object(te.a)((function(){return Q.createElement(Q.Fragment,null,Q.createElement("h4",{className:"title is-4 has-text-light"},"High Scores"),Q.createElement("h6",{className:"subtitle is-6 has-text-light"},Ee.reloadingScores?"Loading...":"Click for replay!"),Ee.goodToGo?Ee.scoreboard.map((function(e,t){return Q.createElement(Je,{entry:e,place:t,key:"score-".concat(t)})})):null)})),Je=Object(te.a)((function(e){var t=e.entry,a=e.place;return Q.createElement("div",{className:"box has-background-white score-entry"},Q.createElement("div",{className:"columns is-mobile"},Q.createElement("div",{className:"column is-paddingless is-narrow score-place"},Q.createElement("p",null,a+1)),Q.createElement("div",{className:"column score-data"},Q.createElement("p",null,t.player),Q.createElement("p",null,t.score.toLocaleString("en-GB")),Q.createElement("div",{className:"control play-tag"},Q.createElement("button",{className:ze()("button","is-marginless","is-primary","is-small"),onClick:function(){return Ee.startReplayIdx(a)},disabled:"Simulating"===Se.gameState||Se.doingReplay},"Show")))))})),He=(a(224),function(){var e=document.getElementById("title");null===e||void 0===e||e.scrollIntoView()}),Ye=function(e){return Q.createElement("div",{className:ze()("garden-tile","no-border")},Q.createElement("div",{className:"garden-tile-content flower-".concat(e.flower)}))},_e=function(){return Q.createElement("div",{className:"how-to-play"},Q.createElement("h2",{className:"title is-2"},"How to Play"),Q.createElement("div",{className:"columns is-mobile"},Q.createElement("div",{className:"column is-two-fifths is-color-grass"},Q.createElement("div",{className:"example-garden"},Q.createElement("div",{className:"garden-row"},Q.createElement("div",{className:"garden-tile no-border"}),Q.createElement(Ye,{flower:1}),Q.createElement(Ye,{flower:1})),Q.createElement("div",{className:"garden-row"},Q.createElement(Ye,{flower:1}),Q.createElement(Ye,{flower:2}),Q.createElement(Ye,{flower:1})),Q.createElement("div",{className:"garden-row"},Q.createElement(Ye,{flower:3}),Q.createElement(Ye,{flower:1}),Q.createElement(Ye,{flower:1})),Q.createElement("div",{className:"garden-row"},Q.createElement(Ye,{flower:3}),Q.createElement(Ye,{flower:3}),Q.createElement("div",{className:"garden-tile no-border"})))),Q.createElement("div",{className:"column has-background-light is-three-fiths"},Q.createElement("p",{className:"example-number"},"1"),Q.createElement("p",null,"Plant flowers in your garden. Hit ",Q.createElement("em",null,"Ready!")," when done and your flowers will start to flourish or perish according to rules of"," ",Q.createElement("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank",rel:"noopener noreferrer"},"Game of Life"),". See how different patterns evolve!"))),Q.createElement("div",{className:"columns is-mobile"},Q.createElement("div",{className:"column has-background-grey-lighter is-three-fiths"},Q.createElement("p",{className:"example-number"},"2"),Q.createElement("p",null,"You get scored every day by number or different flowers in your garden. If ",10," or more flowers wither in one day, you'll get seeds!")),Q.createElement("div",{className:"column has-background-success is-two-fifths scoring-example"},Q.createElement("div",{className:"scoring-example huge-text"},Q.createElement("div",{className:"garden-row"},Q.createElement(Ye,{flower:1})),Q.createElement("div",{className:"garden-row"},Q.createElement("p",null,"\xd7")),Q.createElement("div",{className:"garden-row"},Q.createElement(Ye,{flower:2})),Q.createElement("div",{className:"garden-row"},Q.createElement("p",null,"\xd7")),Q.createElement("div",{className:"garden-row"},Q.createElement(Ye,{flower:3}))),Q.createElement("p",null,"= Score"))),Q.createElement("div",{className:"columns is-mobile"},Q.createElement("div",{className:"column is-two-fifths has-background-info"},Q.createElement("div",{className:"final-guide"},Q.createElement("div",{className:"garden-row"},Q.createElement(Ye,{flower:3})),Q.createElement("div",{className:"garden-row"},Q.createElement("div",{className:"garden-tile no-border"},Q.createElement("div",{className:"garden-tile-content shovel"}))))),Q.createElement("div",{className:"column has-background-light is-three-fiths"},Q.createElement("p",{className:"example-number"},"3"),Q.createElement("p",null,"You have a chance to add more flowers in your garden once every month. The game ends in ",me()("2020-".concat("9".padStart(2,"0"),"-01")).format("MMMM"),". Good luck!"))),Q.createElement("div",{className:"field is-hidden-tablet is-fullwidth"},Q.createElement("div",{className:"control"},Q.createElement("button",{className:ze()("button","is-fullwidth","is-info","is-small"),onClick:He},"Let's Play!"))))},Ve=function(){var e=Q.useRef(null);return Q.createElement(Q.Fragment,null,Q.createElement("div",{className:"dummy"}),Q.createElement("div",{className:"box"},Q.createElement("label",{className:"label is-large"},"Enter your name"),Q.createElement("div",{className:"field has-addons"},Q.createElement("div",{className:"control"},Q.createElement("input",{className:"input",type:"text",maxLength:15,placeholder:"...",ref:e})),Q.createElement("div",{className:"control",onClick:function(){var t,a;Ee.setPlayerName(null!==(t=null===(a=e.current)||void 0===a?void 0:a.value)&&void 0!==t?t:"")}},Q.createElement("button",{className:"button is-info"},"OK!")))),Q.createElement("div",{className:"dummy"}))},Ke=Object(te.a)((function(){return Q.createElement(Q.Fragment,null,Q.createElement("div",{className:"dummy"}),Q.createElement("div",{className:"box"},Q.createElement("h1",{className:"title is-1"}," Game Over! "),Q.createElement("p",null,"Your score was ",Se.scores.cumulative.toLocaleString("en-GB")),Ee.submittingScore?Q.createElement("p",null,"Submitting score..."):null,Q.createElement(Ae,{action:Ee.hideGameOverPopup,text:"OK"})),Q.createElement("div",{className:"dummy"}))})),Ue=Object(te.a)(Ge=function(e){Object($.a)(a,e);var t=Object(ee.a)(a);function a(){return Object(X.a)(this,a),t.apply(this,arguments)}return Object(Z.a)(a,[{key:"render",value:function(){return Q.createElement(Q.Fragment,null,Q.createElement("section",{className:"section"},Q.createElement("div",{className:"container"},Q.createElement("div",null,Q.createElement("h1",{className:"title is-1",id:"title"}," Conway's Garden Life "),Q.createElement("div",{className:"columns box is-paddingless has-background-info"},Q.createElement("div",{className:"column"},Q.createElement(Re,null)),Q.createElement("div",{className:"column has-background-light is-three-fifths",id:"game"},Q.createElement(Te,null),Q.createElement(ke,{overlay:Ee.goodToGo?Ee.showingGameOverModal?Q.createElement(Ke,null):void 0:Q.createElement(Ve,null)}),Q.createElement(Ie,null),Q.createElement(Le,null)),Q.createElement("div",{className:"column"},Q.createElement(Be,null)))))),Q.createElement("section",{className:"section"},Q.createElement("div",{className:"container"},Q.createElement("div",{className:"box",id:"how-to-play"},Q.createElement(_e,null)))),Q.createElement("section",{className:"section in-memoriam has-text-grey-light"},Q.createElement("p",null,"Created by"," ",Q.createElement("a",{href:"https://joonamo.com"},"Joonamo")," ","for"," ",Q.createElement("a",{href:"https://ldjam.com/events/ludum-dare/46/conways-garden-life"},"Ludum Dare 46")),Q.createElement("p",null,"In memoriam John Conway 1937 - 2020")))}}]),a}(Q.Component))||Ge;a(225);W.render(Q.createElement(Ue,null),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.4bb4c7d2.chunk.js.map