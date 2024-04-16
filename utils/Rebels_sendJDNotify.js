/*
一个强大的推送通知库，主要用于汇总多条账号消息后集中推送通知
默认情况下账号消息指的是单一账号的消息，它由“<前缀><用户名><消息内容>”组成，其中消息内容由一条或多条组成最后用指定字符拼接成一条合并内容
脚本最终汇总多条账号消息后集中触发推送通知业务，每个账号的消息占用一行，排列顺序以优先触发记录为原则
此库封装了多条方法，推送通知业务调用自 sendNotify.js，可引用此模块来平替引用它，支持单消息推送

账号消息自定义功能如下（环境变量）
1。关键词过滤，触发时不推送对应单条账号消息 JD_NOTIFY_FILTER_KEYWORDS
  例：export JD_NOTIFY_FILTER_KEYWORDS="空气@会员"，多个关键词用@分割
2。关键词清除，触发时会清除消息内容中的对应关键字 JD_NOTIFY_CLEAR_KEYWORDS
  例：export JD_NOTIFY_CLEAR_KEYWORDS="" # 例："空气"，多个关键词用|分割，如果你不想在账号消息中看到某些字样则可以使用此功能
3。消息内容分隔符 JD_NOTIFY_SEPARATOR，默认为中文逗号
  例：export JD_NOTIFY_SEPARATOR="、"，此分隔符用于分隔多条账号消息
4。设置用户名昵称 JD_NOTIFY_NICKNAMES
  例：export JD_NOTIFY_NICKNAMES="userpin_α@哥哥,userpin_β@弟弟"，多个昵称配置用英文逗号分割，用户名和昵称用@分割
5。是否展示用户名 JD_NOTIFY_SHOW_USERNAME（true/false），默认展示
  例：export JD_NOTIFY_SHOW_USERNAME="false"
6. 设置推送通知的用户名是否脱敏 JD_NOTIFY_USERNAME_MASKING（true/false），默认不脱敏，根据用户名长度动态将部分字符用*替换
  例：JD_NOTIFY_USERNAME_MASKING="true"
7。设置消息前缀格式 JD_NOTIFY_PREFIX_FORMAT，默认为 "【京东账号<序号>】<用户名>："
  例：export JD_NOTIFY_PREFIX_FORMAT="账号%【@】"，%代表账号序号、@代表用户名
8。设置自动合并消息中用数字开头表示数量的内容 JD_NOTIFY_AUTO_MERGE_TYPE
  例：export JD_NOTIFY_AUTO_MERGE_TYPE="积分"，多个规则用@分割，正则匹配

new Env('Rebels_sendJDNotify');
*/

var iｉl='jsjiami.com.v7';function iii1II(_0x389ab4,_0x5f2b6f){const _0xfc3917=Iii11l();return iii1II=function(_0x3480f9,_0x13ad55){_0x3480f9=_0x3480f9-0xfa;let _0x458438=_0xfc3917[_0x3480f9];if(iii1II['siFsjK']===undefined){var _0x3ad726=function(_0x4ac46f){const _0x242d89='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4eaab7='',_0x451b05='';for(let _0xb45165=0x0,_0x3d3f29,_0xd6c79a,_0xbca402=0x0;_0xd6c79a=_0x4ac46f['charAt'](_0xbca402++);~_0xd6c79a&&(_0x3d3f29=_0xb45165%0x4?_0x3d3f29*0x40+_0xd6c79a:_0xd6c79a,_0xb45165++%0x4)?_0x4eaab7+=String['fromCharCode'](0xff&_0x3d3f29>>(-0x2*_0xb45165&0x6)):0x0){_0xd6c79a=_0x242d89['indexOf'](_0xd6c79a);}for(let _0x22c03a=0x0,_0x422b41=_0x4eaab7['length'];_0x22c03a<_0x422b41;_0x22c03a++){_0x451b05+='%'+('00'+_0x4eaab7['charCodeAt'](_0x22c03a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x451b05);};const _0x15ee6e=function(_0x84c51e,_0x507d44){let _0x3666a0=[],_0x49bb42=0x0,_0x17fbb2,_0xb2217b='';_0x84c51e=_0x3ad726(_0x84c51e);let _0xeb7f8;for(_0xeb7f8=0x0;_0xeb7f8<0x100;_0xeb7f8++){_0x3666a0[_0xeb7f8]=_0xeb7f8;}for(_0xeb7f8=0x0;_0xeb7f8<0x100;_0xeb7f8++){_0x49bb42=(_0x49bb42+_0x3666a0[_0xeb7f8]+_0x507d44['charCodeAt'](_0xeb7f8%_0x507d44['length']))%0x100,_0x17fbb2=_0x3666a0[_0xeb7f8],_0x3666a0[_0xeb7f8]=_0x3666a0[_0x49bb42],_0x3666a0[_0x49bb42]=_0x17fbb2;}_0xeb7f8=0x0,_0x49bb42=0x0;for(let _0x24de8e=0x0;_0x24de8e<_0x84c51e['length'];_0x24de8e++){_0xeb7f8=(_0xeb7f8+0x1)%0x100,_0x49bb42=(_0x49bb42+_0x3666a0[_0xeb7f8])%0x100,_0x17fbb2=_0x3666a0[_0xeb7f8],_0x3666a0[_0xeb7f8]=_0x3666a0[_0x49bb42],_0x3666a0[_0x49bb42]=_0x17fbb2,_0xb2217b+=String['fromCharCode'](_0x84c51e['charCodeAt'](_0x24de8e)^_0x3666a0[(_0x3666a0[_0xeb7f8]+_0x3666a0[_0x49bb42])%0x100]);}return _0xb2217b;};iii1II['whtvsF']=_0x15ee6e,_0x389ab4=arguments,iii1II['siFsjK']=!![];}const _0x7bec52=_0xfc3917[0x0],_0x13e6a2=_0x3480f9+_0x7bec52,_0x25a7e7=_0x389ab4[_0x13e6a2];return!_0x25a7e7?(iii1II['pxWbYV']===undefined&&(iii1II['pxWbYV']=!![]),_0x458438=iii1II['whtvsF'](_0x458438,_0x13ad55),_0x389ab4[_0x13e6a2]=_0x458438):_0x458438=_0x25a7e7,_0x458438;},iii1II(_0x389ab4,_0x5f2b6f);}const IilllI=iii1II;(function(i1lIl1,liIli1,IIIlIl,IIIlI,IiiI,iIi1i,l1iIll){return i1lIl1=i1lIl1>>0x7,iIi1i='hs',l1iIll='hs',function(l1iIli,iIi1l,i1lIlI,l1lliI,I1I1iI){const liIIi=iii1II;l1lliI='tfi',iIi1i=l1lliI+iIi1i,I1I1iI='up',l1iIll+=I1I1iI,iIi1i=i1lIlI(iIi1i),l1iIll=i1lIlI(l1iIll),i1lIlI=0x0;const IIIlII=l1iIli();while(!![]&&--IIIlI+iIi1l){try{l1lliI=-parseInt(liIIi(0x14e,'OY1w'))/0x1+parseInt(liIIi(0x113,'R[zG'))/0x2*(-parseInt(liIIi(0x1a8,'M2)%'))/0x3)+parseInt(liIIi(0x179,'M2)%'))/0x4*(parseInt(liIIi(0x1e6,'2hAc'))/0x5)+parseInt(liIIi(0x188,']Si0'))/0x6*(parseInt(liIIi(0x12a,'SIiG'))/0x7)+-parseInt(liIIi(0x19d,'t25f'))/0x8+-parseInt(liIIi(0x140,'3[g]'))/0x9*(-parseInt(liIIi(0x1c6,'fYVc'))/0xa)+parseInt(liIIi(0x182,'1^SY'))/0xb;}catch(iiIiI1){l1lliI=i1lIlI;}finally{I1I1iI=IIIlII[iIi1i]();if(i1lIl1<=IIIlI)i1lIlI?IiiI?l1lliI=I1I1iI:IiiI=I1I1iI:i1lIlI=I1I1iI;else{if(i1lIlI==IiiI['replace'](/[BuhDYeSVWFylpALbkJTUf=]/g,'')){if(l1lliI===iIi1l){IIIlII['un'+iIi1i](I1I1iI);break;}IIIlII[l1iIll](I1I1iI);}}}}}(IIIlIl,liIli1,function(ili1Il,ili1Ii,Iilll1,ll11I,iIi1I,liIIl,IlI1lI){return ili1Ii='\x73\x70\x6c\x69\x74',ili1Il=arguments[0x0],ili1Il=ili1Il[ili1Ii](''),Iilll1=`\x72\x65\x76\x65\x72\x73\x65`,ili1Il=ili1Il[Iilll1]('\x76'),ll11I=`\x6a\x6f\x69\x6e`,(0x162c6e,ili1Il[ll11I](''));});}(0x6180,0xef904,Iii11l,0xc5),Iii11l)&&(iｉl=IilllI(0x162,'nZ%S'));class Notification{constructor(){const iI1lIi=IilllI,lI1l1l={'SHcFa':function(IIliII,iiliI){return IIliII(iiliI);},'fbeHY':iI1lIi(0x1dd,'rJA]'),'gGbaz':iI1lIi(0x121,'tkt3')};this[iI1lIi(0x1ba,'rJA]')]='',this[iI1lIi(0x193,'v6EU')]='',this[iI1lIi(0x116,'s%eP')]=lI1l1l[iI1lIi(0x201,'oLoF')](require,lI1l1l['fbeHY'])[iI1lIi(0x1d8,'DKbl')],this[iI1lIi(0x118,'Rikw')]=[],this['_messageSeparator']='',this[iI1lIi(0x1b3,'d48c')]=[],this[iI1lIi(0x139,'Us(J')]=[],this[iI1lIi(0x16a,'9U)t')]=!![],this[iI1lIi(0x18f,'KOY!')]=![],this['_nicknames']={},this['_prefixFormat']='',this['_defaultPrefixFormat']=lI1l1l[iI1lIi(0x18e,'JS*k')],this['_autoMergeType']='',this[iI1lIi(0x105,'pf7m')]();}[IilllI(0x150,'SIiG')](){const l1lllI=IilllI,Ill11I={'hHFwX':function(I1il1i,IliIIi){return I1il1i!==IliIIi;},'oAxQS':'Zxknh','fBNcY':'dqwYh','nCuOU':function(lI1l1i,i1iil){return lI1l1i===i1iil;},'AChAf':'UXxQj','jdsVh':'Okgon','JmSQA':l1lllI(0x157,'3[g]'),'XubQt':l1lllI(0x1c3,'4PG(')};process[l1lllI(0x14a,'KOY!')][l1lllI(0x119,'K^iY')]&&(Ill11I[l1lllI(0x208,'Mfqe')](Ill11I[l1lllI(0x12d,'t25f')],Ill11I[l1lllI(0x10b,'JS*k')])?this[l1lllI(0x127,'JS*k')]=process[l1lllI(0x1b4,'SIiG')][l1lllI(0x17a,'Rikw')][l1lllI(0x181,'M2)%')]('@')[l1lllI(0x199,'6sej')](llI11l=>llI11l[l1lllI(0x194,'kz$r')]())[l1lllI(0x130,'JS*k')](Boolean):lI1Ill[l1lllI(0x138,'v6EU')](i1iii=>{const llliIi=l1lllI;iIIl11=l1l1I1[llliIi(0x145,'t25f')](new I1iIll(i1iii,'g'),'');}));process[l1lllI(0x159,'OY1w')]['JD_NOTIFY_CLEAR_KEYWORDS']&&(Ill11I[l1lllI(0x1e8,'pf7m')](Ill11I[l1lllI(0x180,']Si0')],Ill11I['jdsVh'])?iIiI1[l1lllI(0x1af,'&ErX')](IIii1I=>{const i1lIli=l1lllI;IIii1I[i1lIli(0x134,'3[g]')]=this[i1lIli(0x1db,'kz$r')](IIii1I['messages'],this[i1lIli(0x1f8,'oLoF')]);}):this['_messageClearKeywords']=process[l1lllI(0x159,'OY1w')][l1lllI(0x1ce,'KOY!')][l1lllI(0x13d,'9U)t')]('|')[l1lllI(0x1bf,'4PG(')](Boolean));this[l1lllI(0x17b,'pf7m')]=process[l1lllI(0x12f,'K^iY')][l1lllI(0x117,'QISX')]||process[l1lllI(0x170,'kz$r')][l1lllI(0x20c,'v6EU')]||'，';if(process[l1lllI(0x11f,'2hAc')][l1lllI(0x196,'M2)%')]){const llI11i=process['env']['JD_NOTIFY_NICKNAMES'][l1lllI(0x1aa,'WNhp')](',');llI11i[l1lllI(0x1ae,'%Tgt')](i1iIi1=>{const i1lIll=l1lllI;let l1l1il=i1iIi1[i1lIll(0x163,'KOY!')]('@');if(l1l1il[i1lIll(0x1e4,'s%eP')]===0x2&&l1l1il[0x0]&&l1l1il[0x1]){if(Ill11I[i1lIll(0x1c4,'7Odp')](Ill11I['oAxQS'],Ill11I[i1lIll(0x16e,'2hAc')]))this[i1lIll(0x187,'WB@#')][l1l1il[0x0]]=l1l1il[0x1];else return llliil!==null&&liIl1['split']('@')[i1lIll(0x1e1,'t25f')](II1lll);}});}this[l1lllI(0x132,'v6EU')]=!Ill11I[l1lllI(0x1f3,'6sej')](process[l1lllI(0x11f,'2hAc')][l1lllI(0x148,'pf7m')],Ill11I[l1lllI(0x198,'WNhp')]),this[l1lllI(0x16f,'R[zG')]=Ill11I[l1lllI(0x102,'2hAc')](process[l1lllI(0x1ec,'c8u4')]['JD_NOTIFY_USERNAME_MASKING']||process['env'][l1lllI(0x101,'OY1w')],Ill11I[l1lllI(0x1fd,'Rikw')]),this[l1lllI(0x14f,'WB@#')]=process[l1lllI(0x15c,'Mfqe')]['JD_NOTIFY_PREFIX_FORMAT']||process[l1lllI(0x154,'v!^F')][l1lllI(0x1d4,'K^iY')]||this[l1lllI(0x184,'UJD7')],process[l1lllI(0x19a,'R[zG')][l1lllI(0x174,'SIiG')]&&(this['_autoMergeType']=process[l1lllI(0x126,'9U)t')][l1lllI(0x1ad,'5fKJ')]);}['config']({title:iliIi1,content:l1l1ii,messageSeparator:Il1i1I}){const ll11ii=IilllI,Ii1iii={'ZjIms':function(iIIilI,il1l1){return iIIilI!==il1l1;},'IagIx':ll11ii(0x111,'2hAc'),'RYTcX':ll11ii(0x1ff,'KOY!')};if(Ii1iii['ZjIms'](iliIi1,undefined)){if(ll11ii(0x13f,'fYVc')!==Ii1iii[ll11ii(0xff,'oLoF')]){const Ilil1i=lii['match'](/(\d+)(.+)/);return Ilil1i?{'count':IllI1i(Ilil1i[0x1]),'name':Ilil1i[0x2][ll11ii(0x1cf,'5fKJ')]()}:{'count':null,'name':i11I1l};}else this[ll11ii(0x1e3,'UJD7')]=iliIi1;}l1l1ii!==undefined&&(this[ll11ii(0x1ee,'R[zG')]=l1l1ii),Ii1iii[ll11ii(0x171,'(^1M')](Il1i1I,undefined)&&(Ii1iii['RYTcX']!=='uASFg'?this[ll11ii(0x1fe,'3[g]')]=this[ll11ii(0x20f,'v6EU')]['filter'](II11ii=>II11ii!==ll1ll):this['_messageSeparator']=Il1i1I);}[IilllI(0x1e0,'%Tgt')](Iil1iI){const liIlii=IilllI;this[liIlii(0x114,'OY1w')]=Iil1iI;}[IilllI(0x1ea,'(#]h')](){const llii1l=IilllI;this[llii1l(0x191,'Mfqe')]='';}[IilllI(0x13b,')!UF')](){return this['title'];}[IilllI(0x1bc,'pf7m')](II11il){const liIlil=IilllI;this[liIlil(0x1a3,'tkt3')]=II11il;}[IilllI(0xfe,'&ErX')](iIIil1){const llii1i=IilllI;this[llii1i(0x146,'t25f')]+=iIIil1;}['clearContent'](){const ll11il=IilllI;this[ll11il(0x1a6,'nZ%S')]='';}['getContent'](){const iI1lIl=IilllI;return this[iI1lIl(0x1d2,'UJD7')];}['updateContent'](IlllII){const iiIiII=IilllI;this[iiIiII(0x1dc,'tuB(')]=IlllII;}['create'](I1il1I,II111){const Iili=IilllI,lI1l1I={'OCnDf':function(I11i1i,l1l1iI){return I11i1i(l1l1iI);},'tiKMk':function(I1llI1,I11i1l){return I1llI1&&I11i1l;},'KMeLt':function(il1il,Il1i1i){return il1il===Il1i1i;},'PBMmd':Iili(0x124,'Us(J'),'cREbd':Iili(0x1b8,'fYVc'),'GuYOG':function(iIIili,Ii1iiI){return iIIili>Ii1iiI;},'SrSmC':function(Ilil1I,iliIiI){return Ilil1I!==iliIiI;},'BnCmz':'APtKO','HqANq':'4|1|0|2|3|5','wBAxN':function(II11iI,Il1i1l){return II11iI===Il1i1l;},'rghUJ':'cuwMd','ezMfm':function(Iil1ii,lill1I){return Iil1ii(lill1I);},'xBeSH':function(Ii1ii1,Ilil11){return Ii1ii1||Ilil11;}},lill11=this['_messageFilterKeywords'],liI1i1=this[Iili(0x189,'G0iQ')],I11i11=this['_prefixFormat'],I1llII=this['_nicknames'];lI1l1I['wBAxN'](I1il1I,undefined)&&(I1il1I='');const Iil1il={'index':''+I1il1I,'userName':II111,'fixed':![],'messages':[],'originMessages':[],'insert'(i1ii1){const iIi11=Iili;if(lI1l1I[iIi11(0x167,'5fKJ')]('UMZcG',lI1l1I[iIi11(0x15e,'J1Cw')])){let llI111='';if(Iiil1){const I1il11=lI1l1I[iIi11(0x160,'sfph')](lilIi,this[iIi11(0x187,'WB@#')][l1l11I]||lilIl);lI1l1I['tiKMk'](IilIlI,iIli11)?llI111=this[iIi11(0xfa,'Rikw')](I1il11):llI111=I1il11;}const i1iIiI=l11i11['replace'](/%/g,IilIl1)[iIi11(0x129,'pf7m')](/@/g,llI111),IlllI1=lIII1l['join'](this[iIi11(0x20b,'1^SY')])[iIi11(0x1f1,'SIiG')]();l1iIIi[iIi11(0x165,'(^1M')](''+i1iIiI+IlllI1);}else{const lI1l11=lI1l1I['cREbd'][iIi11(0x20d,'fYVc')]('|');let II11l=0x0;while(!![]){switch(lI1l11[II11l++]){case'0':if(Iil1il[iIi11(0x1fc,'pf7m')])return;continue;case'1':Iil1il[iIi11(0x190,'J1Cw')][iIi11(0x1ef,'sfph')](i1ii1[iIi11(0x1c2,'R[zG')]());continue;case'2':if(!i1ii1)return;continue;case'3':if(lI1l1I['GuYOG'](lill11[iIi11(0x1be,'rJA]')],0x0)&&lill11['some'](II11i=>i1ii1[iIi11(0x186,'(^1M')](II11i)))return;continue;case'4':lI1l1I[iIi11(0x141,'OY1w')](liI1i1[iIi11(0x1e5,'(^1M')],0x0)&&liI1i1[iIi11(0x1c8,'SIiG')](iI1Iii=>{const Iil1=iIi11;i1ii1=i1ii1[Iil1(0x10c,'JS*k')](new RegExp(iI1Iii,'g'),'');});continue;case'5':Iil1il[iIi11(0x17e,'J1Cw')][iIi11(0x1a7,'SIiG')](i1ii1[iIi11(0x161,'6sej')]());continue;}break;}}},'fix'(liI1ii){const ll11lI=Iili;if(lI1l1I[ll11lI(0x173,'d48c')](lI1l1I['BnCmz'],'swxip')){const lIIiIl=lI1l1I['HqANq']['split']('|');let iI1Iil=0x0;while(!![]){switch(lIIiIl[iI1Iil++]){case'0':Iil1il[ll11lI(0x172,'OY1w')]=[liI1ii[ll11lI(0x13a,'sfph')]()];continue;case'1':Iil1il['fixed']=!![];continue;case'2':if(lI1l1I[ll11lI(0x1a0,'t25f')](lill11[ll11lI(0x209,'t25f')],0x0)&&lill11['some'](il1iI=>liI1ii[ll11lI(0x15d,'v6EU')](il1iI)))return;continue;case'3':lI1l1I['GuYOG'](liI1i1['length'],0x0)&&liI1i1[ll11lI(0x178,'rJA]')](i1iIii=>{liI1ii=liI1ii['replace'](new RegExp(i1iIii,'g'),'');});continue;case'4':if(!liI1ii)return;continue;case'5':Iil1il[ll11lI(0x134,'3[g]')]=[liI1ii['trim']()];continue;}break;}}else this[ll11lI(0x14d,'v6EU')]=i1ili1['env'][ll11lI(0x204,'UJD7')]['split']('|')[ll11lI(0x136,'tuB(')](i1l1l1);},'updateIndex'(liI1il){const llliI1=Iili;Iil1il[llliI1(0x1a5,'Aop]')]=''+liI1il;},'updateUsername'(llIlIi){const liIII=Iili,llIlIl={'pvzka':function(II11I,il1i1){return II11I+il1i1;}};lI1l1I[liIII(0x1d7,'Us(J')](lI1l1I[liIII(0x17d,'(#]h')],lI1l1I['rghUJ'])?Iil1il['userName']=llIlIi:i11iii=llIlIl[liIII(0x11e,'6sej')](llI1Ii[liIII(0x1b2,'WB@#')](0x0,0x2)+'*'['repeat'](lllI1i[liIII(0x19b,'UJD7')]-0x4),li1i1l[liIII(0x142,'M2)%')](-0x2));},'getInlineContent'(){const llii11=Iili;let liI1iI=this[llii11(0x1bb,'nZ%S')]['join'](this[llii11(0x1a2,'nZ%S')])[llii11(0x11b,'WB@#')]();this[llii11(0x197,'sfph')]&&(liI1iI=this[llii11(0x177,'Jq]m')](liI1iI,this[llii11(0x195,'(#]h')]));const iI1Il1=lI1l1I[llii11(0x1df,')!UF')](decodeURIComponent,I1llII[this['userName']]||this[llii11(0x112,'3[g]')]),i1iIl1=I11i11[llii11(0x107,'V9K*')](/%/g,this[llii11(0x153,'SIiG')])[llii11(0x207,'YYz4')](/@/g,iI1Il1);return''+i1iIl1+lI1l1I['xBeSH'](liI1iI,'无');}};return this[Iili(0x183,'d48c')][Iili(0x1ab,'G0iQ')](Iil1il),Iil1il;}['dispose'](i1lli1){const Iillli=IilllI;this[Iillli(0x14b,'(#]h')]=this[Iillli(0x17c,'t25f')][Iillli(0x12c,'Us(J')](llIlII=>llIlII!==i1lli1);}['disposeByUsername'](IIlII){const ll11l1=IilllI,lIIiII={'wlULb':ll11l1(0x10a,'YYz4')},i1iIlI=this['_accountsArray']['find'](li111=>decodeURIComponent(li111[ll11l1(0x106,'kz$r')])===decodeURIComponent(IIlII));i1iIlI&&(lIIiII['wlULb']===ll11l1(0x109,'J1Cw')?this[ll11l1(0x1ed,'d48c')](i1iIlI):this['title']=i1l1ll);}[IilllI(0x135,'&ErX')](lIIiI1){const ll111=IilllI,ll1I1=this[ll111(0x12e,'tuB(')]['find'](Ii1ili=>Ii1ili['index']===''+lIIiI1);ll1I1&&this[ll111(0x1d6,'rJA]')](ll1I1);}['disposeAllMessage'](){const llliII=IilllI;this[llliII(0x1fe,'3[g]')]=[];}[IilllI(0xfc,'1^SY')](iI1Ii1=![]){const iiIiIl=IilllI,Ii1ill={'eRIIM':function(i1iIll,i1lliI){return i1iIll===i1lliI;},'KzGtl':function(liI1l1,IllIlI){return liI1l1===IllIlI;},'YDVLN':function(IiillI,ili11I){return IiillI===ili11I;},'PXgAf':iiIiIl(0x1c0,'t25f'),'kVRii':iiIiIl(0x1cd,'tkt3'),'ZjCQE':function(li11l,lliiIl){return li11l&&lliiIl;}};if(Ii1ill[iiIiIl(0x151,'v!^F')](this[iiIiIl(0x12e,'tuB(')][iiIiIl(0x1c9,'3[g]')],0x0))return'';this[iiIiIl(0x1c7,'2hAc')]();if(Ii1ill[iiIiIl(0x1eb,'v6EU')](this[iiIiIl(0x17f,'1^SY')][iiIiIl(0x11a,'%Tgt')],0x0))return'';let llIlI1=[];const iI1IiI=this[iiIiIl(0x1fa,'9U)t')],IIlI1=this[iiIiIl(0x108,'OY1w')],i1iIli=!IIlI1&&Ii1ill[iiIiIl(0x11c,'rJA]')](this[iiIiIl(0x13e,'V9K*')],this[iiIiIl(0x18c,'sfph')])?this['_prefixFormat']['replace'](/：$/,''):this[iiIiIl(0x1d3,'kz$r')];for(const {userName:li11i,index:lliiIi,messages:iiIi1I}of this['_accountsArray']){if(Ii1ill[iiIiIl(0x1c1,'(^1M')]===Ii1ill[iiIiIl(0x10e,'Rikw')])this[iiIiIl(0x1cb,'fYVc')](IIlll);else{let ll1Ii='';if(IIlI1){const ill1II=decodeURIComponent(this[iiIiIl(0x1a4,'Jq]m')][li11i]||li11i);Ii1ill['ZjCQE'](iI1IiI,iI1Ii1)?ll1Ii=this[iiIiIl(0x137,'(^1M')](ill1II):ll1Ii=ill1II;}const ll1Il=i1iIli[iiIiIl(0x1f9,'Aop]')](/%/g,lliiIi)['replace'](/@/g,ll1Ii),iiIi11=iiIi1I[iiIiIl(0x185,'V9K*')](this[iiIiIl(0x19f,'Rikw')])['trim']();llIlI1[iiIiIl(0x1e2,'4PG(')](''+ll1Il+iiIi11);}}return llIlI1['join']('\x0a')[iiIiIl(0x147,'YYz4')]();}[IilllI(0x1d0,'YYz4')](){const IlI1l1=IilllI;this[IlI1l1(0x1fb,'&ErX')](),this[IlI1l1(0x19c,'6sej')](),this[IlI1l1(0x166,'nZ%S')]();}async[IilllI(0x149,'SIiG')](i1llil,i1llii){const liIliI=IilllI;await this[liIliI(0x1d8,'DKbl')](i1llil,i1llii);}async[IilllI(0x18b,'YYz4')](l1i1I1,llIIil){await this['send'](l1i1I1,llIIil);}async['push'](){const llii1I=IilllI,llIIii={'MMzLD':function(Ii1I1l,IIlIl){return Ii1I1l+IIlIl;}};let Ii1I1i=this['content']['trim']();const llIIlI=this['getMessage'](!![]);if(llIIlI)Ii1I1i=llIIii[llii1I(0x16b,'1^SY')](llIIlI[llii1I(0x175,'Us(J')]()+'\x0a\x0a',Ii1I1i);await this[llii1I(0x149,'SIiG')](this[llii1I(0x1b7,'WB@#')],Ii1I1i);}[IilllI(0x13c,'WNhp')](ili11l,Iiilll){const iiIiIi=IilllI,Iiilli={'dRnIK':function(ili11i,iiIi1l){return ili11i!==iiIi1l;},'hdgGB':function(li11I,lliiII){return li11I(lliiII);},'CBJpA':function(iiIi1i,liI1ll){return iiIi1i===liI1ll;},'UmSWz':function(ll1II,IllIii){return ll1II+IllIii;},'NEwYM':'keqFO','cVDcg':iiIiIi(0x1b6,'rJA]'),'ZRKec':function(liI1li,IllIil){return liI1li===IllIil;},'otAUD':iiIiIi(0x100,'OY1w'),'hZiST':'qxWTF','TwJYb':function(ill1Ii,llIIl1){return ill1Ii+llIIl1;},'DfwaO':function(ill1Il,i1lll1){return ill1Il<i1lll1;},'krVLL':function(Ii1I1I,l1i1Ii){return Ii1I1I===l1i1Ii;},'PhWxW':function(l1iI1,lliiI1){return l1iI1!==lliiI1;},'VVyvs':iiIiIi(0x158,'d48c'),'qBflD':iiIiIi(0xfd,'DKbl'),'pZJYE':function(IiiI1,lilII){return IiiI1===lilII;},'YgSEA':iiIiIi(0x1ac,'(#]h')},IIlIi=ili11l;try{if(Iiilli[iiIiIi(0x203,'KOY!')]!==iiIiIi(0xfb,'4PG('))ll1li=this['_mergeMessages'](Illl1I,this['_autoMergeType']);else{function iii1i1(i1lllI){const l1lll1=iiIiIi;if(Iiilli[l1lll1(0x144,'KOY!')](l1lll1(0x15b,'v!^F'),l1lll1(0x192,'R[zG'))){const llIIi1=i1lllI[l1lll1(0x1e9,'KOY!')](/(\d+)(.+)/);return llIIi1?{'count':Iiilli['hdgGB'](parseInt,llIIi1[0x1]),'name':llIIi1[0x2][l1lll1(0x1b5,'v6EU')]()}:{'count':null,'name':i1lllI};}else this['content']=li1I1;}function IllIll(l1i1Il,ill1I1,l1i1II){const IilI=iiIiIi;return ill1I1!==null&&l1i1II['split']('@')[IilI(0x1d1,'4PG(')](l1i1Il);}for(let ili111=0x0;ili111<ili11l['length'];ili111++){if(Iiilli[iiIiIi(0x1bd,'oLoF')](Iiilli['cVDcg'],'IMWpc')){const {count:Ii1I11,name:IllIli}=Iiilli[iiIiIi(0x1f5,'pf7m')](iii1i1,ili11l[ili111]);if(IllIll(IllIli,Ii1I11,Iiilll)){if(Iiilli['ZRKec'](Iiilli[iiIiIi(0x15a,'v!^F')],Iiilli[iiIiIi(0x1b9,'WNhp')])){const {count:ii1Il,name:l1iII}=iI11I1(il1i1l[IlIlll]);Iiilli['CBJpA'](IIIl1I,l1iII)&&(lllil1[iil1il]=''+Iiilli[iiIiIi(0x1c5,'c8u4')](ilil1I,ii1Il)+i11il1,ii1iiI['splice'](lllilI,0x1),ilil11--);}else for(let iI1Ill=Iiilli[iiIiIi(0x169,'fYVc')](ili111,0x1);Iiilli['DfwaO'](iI1Ill,ili11l[iiIiIi(0x18a,'&ErX')]);iI1Ill++){const {count:lilI1,name:IIIi1}=Iiilli[iiIiIi(0x205,'5fKJ')](iii1i1,ili11l[iI1Ill]);Iiilli[iiIiIi(0x1a9,'Rikw')](IllIli,IIIi1)&&(Iiilli['PhWxW'](Iiilli[iiIiIi(0x18d,']Si0')],Iiilli[iiIiIi(0x104,'9U)t')])?(ili11l[ili111]=''+(Ii1I11+lilI1)+IllIli,ili11l[iiIiIi(0x19e,'JS*k')](iI1Ill,0x1),iI1Ill--):iliIII='');}}}else this[iiIiIi(0x1d9,'tuB(')]=IlI1l;}return ili11l;}}catch{if(Iiilli[iiIiIi(0x1f2,'Us(J')](iiIiIi(0x10d,'Rikw'),Iiilli[iiIiIi(0x202,'QISX')]))return IIlIi;else this[iiIiIi(0x15f,'WB@#')]='';}}[IilllI(0x120,'tuB(')](llIIiI){const liIlli=IilllI,iI1111={'tYwZw':function(ii1ii,Iii1){return ii1ii<Iii1;},'npaEo':function(I1I1lI,ii1il){return I1I1lI+ii1il;},'HCKim':function(l1iIlI,iI111I){return l1iIlI+iI111I;},'AMSKP':function(IIIlI1,i1lIiI){return IIIlI1+i1lIiI;},'OdkHE':function(IiiIl,ii1l1l){return IiiIl+ii1l1l;},'UDwBW':function(l1lli1,IiiIi){return l1lli1-IiiIi;}};let IIIl1='';if(iI1111[liIlli(0x1f0,'1^SY')](llIIiI[liIlli(0x1be,'rJA]')],0x5))switch(llIIiI['length']){case 0x1:IIIl1=llIIiI;break;case 0x2:IIIl1=iI1111[liIlli(0x1ca,'c8u4')](llIIiI[liIlli(0x125,'fYVc')](0x0,0x1),'*');break;case 0x3:IIIl1=iI1111[liIlli(0x1f4,'OY1w')](llIIiI[liIlli(0x12b,'J1Cw')](0x0,0x1)+'*',llIIiI[liIlli(0x1b0,'KOY!')](-0x1));break;case 0x4:IIIl1=iI1111[liIlli(0x1da,'QISX')](llIIiI[liIlli(0x143,'K^iY')](0x0,0x2),'**');break;}else IIIl1=iI1111['OdkHE'](iI1111[liIlli(0x206,'sfph')](llIIiI[liIlli(0x176,'(#]h')](0x0,0x2),'*'[liIlli(0x1b1,'oLoF')](iI1111[liIlli(0x128,'UJD7')](llIIiI[liIlli(0x1a1,'7Odp')],0x4))),llIIiI[liIlli(0x20e,'nZ%S')](-0x2));return IIIl1;}[IilllI(0x131,'YYz4')](){const lil11=IilllI,ii1l1i={'TWogX':function(ii1iI,IIIil){return ii1iI!==IIIil;},'BAbSF':lil11(0x11d,'Jq]m'),'TYHFA':'AmpVh','urGxO':function(IIIii,iI111i){return IIIii===iI111i;},'KEnuu':function(I1I1l1,iI111l){return I1I1l1>iI111l;}};let l1iIl1=[];for(let {userName:i1lIii,index:III11i,messages:i1lIil}of this[lil11(0x14b,'(#]h')]){i1lIil=i1lIil[lil11(0x1d5,'Mfqe')](llIl1i=>llIl1i!==null&&llIl1i!==undefined&&llIl1i!=='');const III11l=l1iIl1[lil11(0x123,'Jq]m')](llIl1l=>llIl1l['userName']===i1lIii);III11l?(ii1l1i['urGxO'](III11l[lil11(0x200,'nZ%S')],'')&&(III11l[lil11(0x103,'DKbl')]=III11i),ii1l1i['KEnuu'](i1lIil[lil11(0x133,'5fKJ')],0x0)&&III11l['messages'][lil11(0x1f6,'s%eP')](...i1lIil)):l1iIl1['push']({'userName':i1lIii,'index':III11i,'messages':i1lIil});}l1iIl1=l1iIl1[lil11(0x1de,'J1Cw')](IiiII=>IiiII[lil11(0x10f,'oLoF')]['length']>0x0),this[lil11(0x122,'WNhp')]&&l1iIl1[lil11(0x156,'2hAc')](Iiil=>{const Iillll=lil11;ii1l1i[Iillll(0x164,'3[g]')](ii1l1i['BAbSF'],ii1l1i[Iillll(0x20a,']Si0')])?Iiil[Iillll(0x1e7,'JS*k')]=this[Iillll(0x14c,'Rikw')](Iiil[Iillll(0x110,'V9K*')],this[Iillll(0x195,'(#]h')]):II1ii[Iillll(0x1a7,'SIiG')]({'userName':IIIIII,'index':lillII,'messages':ii1ilI});}),this[lil11(0x16c,'kz$r')]=l1iIl1;}}module['exports']=new Notification();function Iii11l(){const lllI1=(function(){return[...[iｉl,'VpljkJsDTbjWhkiWBaUUmFuiAyS.ffycLeYom.v7==','n0lcSZbpWQZcR14Zfmk0W6RdIt4','W4OEWONcNSkW','WO4OvCo1n2pcOf0HWQFdMmkTWONcHmk3erZcSmkQWQWKb8oXW7qo','drFcO8kH','phFdL8ocWPC','W790WP0IWQpdJCkyWPFdRmk8W6dcSHxdQq','W7bpW55tW6ldGCk5','WOtcJL4qWO7cPqdcIq5CB1zM','vJTNkuhdU8kRu8oIWQbDdgBdV8k1W5BdHJCWhCodof0SrW','W5NdKhldTCoJqJnFWPzRoCktWRhcJLddPuS','AbNdLsS8oSkVfmkuW4tdHSkVkmkC','pxZdLSo0WRG','W6nMWOhdUXRdNwCO','nSk8obeyjCkoW4/cS8oVW4xcNCo8pG','fJf8D38','W4hdJqflW4W','wmoVyKzaACorWOJcJCoFW67cOCoska','W4ynWRNcKmkCW5BcG8oStSkiW5PSW5ldSG','vXVdL8kpq8o4W6RcH8k9WQxdTWpcHmkgASoqW6hcLmkzBq','wSorWQWC','g8o6u8kZF8kmWOFcUW','cvKudJa8ACoppGO','t2vvvKbWW6bj','jmo9WPP4m23cKCkTWRpcIZ1YdCokErWEWQFdG8owW7C','vgzBDGu1','W6xdKCowbLe/o8ouW7tdNa','zHBdQe0jcY/dIuiTW7ZdOqZcH8k+ahWnWRzf','kGn2v2q','WPJcLSoeW6L/','W7Gnl8oeWROBdIRdUciPW5XPiwNcQa','W6fXWPVdRXldLe8+W4fGqGKwqW','WRBdUaldVmox','cs0SWOFdJG','jCk3uGddSKFdJq','W7VdJSo5BW','ehRdI8ovWP1KjmoAe8kPW6jSW5K0','W7JdUtjSW7FdHx3cMXnYswPbWQ3cUN/cSw55','zHpdUf8hmYBdJ3u6W43dVHxcMG','W6ZcI2nPkG','Emo9ba','cHKr','zbRdNmkovSoL','DSoWeCkWuZXbWONcLZKAW4q','bKZcH35KD8o3vmkSW47dUCkAoSkc','WOZcOCokW6fMW4i','qXjDfh3dJSkfCmoOWPPRjfJdISkeW6VdQW','Ca3dRWCu','kSoqWPBdN8kqgG','ACkxWPlcPtPWW7tdMhaCEYHya8oNANe','WOWyW4GrW7rlW6G','W793WPeZWQ/dHSk0WP/dUSk8','WP53qComW7y','vCkvWPNcOIX/W6C','WRqzECot','WOpcIvuqWOhdOKlcIZb3FW','DW1Uk0i','W5xcLLXrhW','c8oLWOXJ','depdVCo0WOe','W5PbWRCQWPpdO8kMsmkSWO3dKCk0pmkXkmo8W6hcKepcHNtcJmoDWPSm','W6RdRfb7fSoNda','xMXhvba+vG','W5qunCocWQ0','WQldGmkSWOSsCG','jvSudJ4','W4ybWR/cGmkaW4lcISo9E8kGW4rQW5BdUvnLW45VW4GHc8o+','WQecFa','mSkQvrK','W59TW7TMW6a','iL4jat4','WPldSMiUWQGormo8qmkCW6G','W47cVfLRpW','W6jjW5H6W6y','wCkiWP7cSsb/W57dMfakAI5peq','W7xdMgpdHCo/tsbFWQT6','WPpdP8kwWP4Y','W7PfW4jXW7FdIG','WQJcUGNdPCo6W6O','xr/dLYiD','iSomv8kEBa','gWuoWPi','WRRcOrddTa','lSo9WR7dJ8k8','b8kOkSkxW4S','WPtcVMvLWQHcdCojb8kdWP/cPW','WRxcMSkcWRRdI15KWPdcTtfzW6FcUqn3xmoiySoIB8o5','WQidEmo+gvtcGq','lslcPmkbfJe','pmk1gmkfW54','W4tdPYeIW7ybeG','WPFdKGeoxmonWQ/dICkHWOr0WOBdN3q','WOqFW6GRW6m'],...(function(){return[...['W608a8oVWOCbjGhdHdalW6nhcvxcKdTXrSotWO1qjJm','W6r3WOej','W6tdKColb2S','WQFcVqBdVCoQW7ZcISk2','AXddNmkDr8oJW7i','W5ddJmoIzW/cHmkFmsuIyMv3','WQahW43cPf/dJfvQWOJdGqVdU8oGWRfrW6OSWQdcUdHopmoHWRO','WQtdUbRdPmoxWOm','W7jjW59MW6ZdKCk0','dIFcI8k0WOO','jCoUWOLDWQ9paJ/dQCoy','W53dICoUsmkO','W44NoIrJ','W5ddKCo1Ca7cImkQeJKJBMnMBW','W4RdJ8o0umkOW5BdIW','WRGoWOnLW6BdJmk1WRHZtujSuG','W6HQWP7dVb7dIa','xHpdIetcMW','W7/dPLzQhSoWcfm','xHBdLsqMk8kKeW','WR7cPHBdUq','FbBdHSkfrW','dGtcO8koWPHM','hSoXxSk4FSka','W5/cTCkiWRhdONXA','WPlcTmovW7TKW4dcM3K','W67dTvhdSCoi','W4OzkmocWQa','oNxdJCoeWOz9kmoCgmkP','dCkIEWddUW','n8kRdW','W70fWQNcG8kCW5dcIa','dbGjWOVdIMfy','sqFdVKm','hCkelcGa','WRaEy8ow','ct/cGmkvWOe','E8oFaCkEDa','ehpcKt5l','W67dMxddGCos','eHtcVSkb','WPRcKmoau8kAW73dKum','WO/dHmkPWPOCsW/cPK5PmqFdSL4','WOv8vCofW69Haq','BYNcTrNcU8orW5/cL0JcL8oKW4O8WP9GCW','tw1gDaujv0OYW5m','W6ddLg/dO8o0','raPAnNO','hIBcQCkfdsZdQeWOWP3dHKO+pq','W5i5d8oNWQ8','x8kuWPpcSZe','WOpdRCk/WQGs','W5ynoIPY','W6K9k8o4WOu','qJVdRCkNBCozW4/cTCk0WOJdKsNcQmk/FSoGW5JcVmkHtSokvmkDDq','W7HHWO8JWP4','vWldRg4h','W6tdKCoidN4ZkG','WQZdKGpdN8oN','wX3dMc8NjW','kaXhz1y','nSkWpGeemCkhW57cK8olW4FcJSoVjIv9W40','dmkCyZRdMh3dSaCYWPHUW5xcVKejkcBcUtG','W5pdVJ47W60','rCkwWP7cTsW','gCk5xXFdUfZdLZuyWOzyW6lcK3e','qXTDfgVdGCkrFmopWPzHletdJmkLW7FdVa47jCo5eG','WQxcTHtdL8oq','dSk4lZ8si8ktW5RcP8ol','fmoVWQP8WQ8','wxnfDb85FveWW4lcO2SQ','WPNdHmk7WQCl','mNxcLd50','eNtcHrLPWPBcQ30zomkaW57dQr/dH2pdTGurWPtdNWRdVvBdG8kCnCkuWQlcP0NdTayG','WOtcV8kyWOFdSW','p8oLWOnCWPK','qr7cObdcJq','W5NdLhNdR8oKydTuWQnNlG','W7RdJ8o1CcFcJmkkeG','qSoBWRuEDmkdlW','b0pcSJHrWPFcKv4YkCk0W6ddIq','W7DHWPVdPsW','W6/dLSord0G','WR7cKSooW4LJ','WO3cTmowW6rKW4tcMW','xYD7mN0','DYLQdMC','WR3dGmkVWP0syq/cPW','xCoBWRybDmkhl8oA','WQdcVSkkWONdOa','ndtcR8kuldJdQ10','wuCIWP7dL0blEq','lfNcRJTd','W4pdK8oWtCkSW5xdLG/dSJnqsHFcMa'],...(function(){return['eqtcO8knWQjHoSk1i8kP','W4uUnIf8WRtcO8oGnMhcL8o4W703jmknW6JdUGm','qX5BbghdMSkmyCoiWR5Pn0VdKG','WQahW43cPf/dJfvQWOJdGr3dOmoPWQnDW6aSWQ3cSJnumSoNWR9u','W6ddPKXza8oS','iKuuaa','W49KW7PAW40','W7DrWRWvWPe','zCoQdSk6qa','WO/cKSkB','W7BdHmo/v8kOW5BdJeJdPtvhdq/dIa3dNgaKW6LAW7jk','44o/5lUB5lQ66lwd5y2MaoocJCoc772z','W7NcH0vmbmk4W7ZcJ8knWQPTWRJdNhy','W4zWWPy0','oYlcUCkEWPe','W5pdOJSXW7W','vtlcSa','WQdcVmodW7T2W4BcMw/cSHy5ymotW5GpCCoad2lcPdFdTq','xtVdHCkRDq','W7tdMgFdQSoXqde','W7jCp8kjqatcRf8cWQNdT8k3','W71VWPVdQX4','hWZcPSk4WQhdMW','DJVdNGK1','W7BdGCo5r8kIW43dKvxdOH1pfGddLG','WO8TW6q','WPNcUmokW7XGW5u','W4NdKSoxehiXo8o8W7hdIKRdPSkPhwBdOXhdTCkYk3K','gCkRvbVdOhZdIIqzWOLlW73cLW','W7XGWOydWQJdNW','lclcUCkvaZ7dO0S','xgPgyr4Uw3WNW7/cQge7zq','W4/dICo2umkOW4O','lCoWvCkSB8kgWPhcOq7cTCoueSoyhYhdKHZcRgm3zrK','imk3tJhdTKRdKq','jGJcR8k/WRFdIe1zW4nbD8opWPVdICo2WOhcS8o7W7nxwq','tqddPey','xaZdSxBcN3ddOCoV','W7NcI1vkdmkqW5tcMmkzWRXyWQBdIwa','qYZcQHxcVq','B8ooWRCxC8kjmSoVWQSeW7XNjG','W6RdJdutW58','C3FdVCkjmaZdQKWC','h0xcGXHH','W4hdKqrbW50','WPKVW7VcIxu','W4mQmSoOWOm','rr3dHIqYlmkK','vbFdMdW2iCk1','W6ldHSordW','W4ZdUuJdImoFDX18WPXrgSk6WOZcUhVdN2RcV8kiW55jW7xdRG','WRCjzmoF','W4iwkG','ehRdNCocWP1Cl8oCb8knW4rNW4GO','qXjDfwNdISkVCmoiWOX6iK/dMa','gCk1wqFdPeJdNIqOWQTpW7hcGemHgaxcKXHbnq','AqldQg4rW7VdLxuuiCkVW7RdHa','cuCpcd07CmoKnaVdTCkvwa','WPSfzmosdhtcHNuEWPhdVG','tCowW5KlW5m','t1xdV8o+W7ZcMM94W7P8FmoH','WQ0cBSoEaa','tCoQW6y','WPxdHZCRW50Xpq','WOZcK8kFWO3dH1X4','jYBcPSkvbW','W7uaWRJcOSku','pv7cRa','r8oWW5exW5O','FmoaW7mfW58','WQFdVWa','l8k2xXJdOK3dNdi','W55bWR/dPr8','nvGtgt48Fa','DJhdO28o','yCoUhCk8','xmkjWP3cVYH8W7RcK0awzMDCvq','W5qimmoiWRW','frdcPCkboG','aSoHq8k3','uSktWOtcPIzIW7BdVe8vrIXzeCoYyMy','W5TiWO0OWQG','s1xdVCkJWPBdVeziW4C','W7tdUrGlW7S','BY/cRHpcVSokW43cN1/cLmoKW5qY','jmkqit4Z','W5ddNCoZyqBcMmkjaZKrFxzIzq','ctehkezKcxakW7dcVhi2','WOZcVSkJWQVdVW','maiuWPRdNufnxCoSwmkcvg9mWORcMW','W6RdKSoM','kmo+ECkYEq'];}())];}())];}());Iii11l=function(){return lllI1;};return Iii11l();};var version_ = 'jsjiami.com.v7';