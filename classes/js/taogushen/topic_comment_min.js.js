eval(function(p, a, c, k, e, d) {
	e = function(c) {
		return (c < a ? '' : e(parseInt(c / a)))
				+ ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c
						.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--) {
			d[e(c)] = k[c] || e(c)
		}
		k = [ function(e) {
			return d[e]
		} ];
		e = function() {
			return '\\w+'
		};
		c = 1
	}
	;
	while (c--) {
		if (k[c]) {
			p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
		}
	}
	return p
}
		(
				'4 3V(){8 b,a=$.1o($("#1F").S());""!=a&&/^\\d*$/.3U(a)?(a=2w(a),b=1z.3W((a+1m(28)-1)/1m(28)),T.14.V=1Y+b+"#3X"+a):($("#1F").S(""),$("#1F").K())}4 2u(a){8 b=a||T.3Y,c=1j.26.27||1j.U.27,d=1j.26.1K||1j.U.1K,e=b.3N||b.3M+c,f=b.3L||b.3O+d;D{x:e,y:f}}4 3P(a){a.1i||(a.1i=0),a.1i++,a.1i<10&&a&&(a.1r="3R://3Q.41.40.42:4d/4c/4e/4f.4h")}4 4g(a,b,c){s(a=$(a),!a.4b("29")){8 d=a.1c().M(".4a");d.1e(),d.2o({45:"-44"},43,4(){d.1M(46),a.2s("29")}),"1l"==b?$.P({J:"1E",O:"/E/1l/2a?v=2c&1G="+2b+"&X="+c+"&t="+(G Y).12(),R:4(b){s(b&&b.u>0){8 c=a.1c().M(".25");c.6(1m(c.6()||0)+1)}}}):$.P({J:"1E",O:"/E/17/2a?v=2c&1G="+2b+"&W="+c+"&t="+(G Y).12(),R:4(b){s(b&&b.u>0){8 c=a.1c().M(".25");c.6(1m(c.6()||0)+1)}}})}}4 24(){15.1a("1x").K()}4 49(){8 a,b,c,d,e,f,g,h,i;s(!z){s(z=!0,a=15.1a("1x"),!a.1W())D z=!1,24(),$("#1s").6("\u63d0\u793a\uff1a\u8bf7\u586b\u5199\u8bc4\u8bba\u5185\u5bb9\uff01"),Z 0;s(b=$("#1X"),c=I,b.7&&(c=$.1o(b.S()),""==c))D $("#1s").6("\u63d0\u793a\uff1a\u8bf7\u586b\u5199\u9a8c\u8bc1\u7801\uff01"),z=!1,b.K(),Z 0;13(d=a.1Z(),e=0,f=/[^\\20-\\23]/g,g="",h=0;h<d.7;h++)g=d.22(h).21(),e+=I!=g.2d(f)?1:.5;s(e=1z.2e(e),e>3K)D $("#1s").6("\u63d0\u793a\uff1a\u5b57\u6570\u8d85\u51fa\u9650\u5236\uff0c\u4e0d\u80fd\u8d85\u8fc74i\u5b57\uff0c\u5f53\u524d"+e+"\u5b57"),z=!1,Z 0;i={X:L,1n:d},I!=c&&(i["2q"]=c),$.P({J:"18",O:"/E/17/G",N:i,R:4(a){s(z=!1,a&&a.u>0&&a.F)a.F["1J"]==3E?T.14.3o():T.14.V=1Y+(a.F["1J"]||1)+"#3m"+(a.F["W"]||"");3p s(a&&a.u<0&&(-9==a.u&&(T.14.V="/1b/1b"),$("#1s").6("\u63d0\u793a\uff1a"+a.2p||""),-2==a.u||-3==a.u)){8 b=$("#1X");b.7&&(b.S(""),b.K())}},1f:4(){z=!1}})}}4 3s(a,b){8 c,d,e,f,g,h,i,j,k,l,m;s(!z){s(z=!0,a||(a=""),c=15.1a(a+"2i"+b),!c.1W())D c.K(),z=!1,$("#"+a+"11"+b).6("\u63d0\u793a\uff1a\u8bf7\u586b\u5199\u8bc4\u8bba\u5185\u5bb9\uff01"),Z 0;s(d=$("#"+a+"1d"+b),e=I,d.7&&(e=$.1o(d.S()),""==e))D $("#"+a+"11"+b).6("\u63d0\u793a\uff1a\u8bf7\u586b\u5199\u9a8c\u8bc1\u7801\uff01"),z=!1,d.K(),Z 0;13(f=c.1Z(),g="",h=$("#"+a+"1w"+b),h.7&&(g=$.1o(h.C("1u")||"")),""==g&&(g=b),i=0,j=/[^\\20-\\23]/g,k="",l=0;l<f.7;l++)k=f.22(l).21(),i+=I!=k.2d(j)?1:.5;s(i=1z.2e(i),i>2r)D $("#"+a+"11"+b).6("\u63d0\u793a\uff1a\u5b57\u6570\u8d85\u51fa\u9650\u5236\uff0c\u4e0d\u80fd\u8d85\u8fc72r\u5b57\uff0c\u5f53\u524d"+i+"\u5b57"),z=!1,Z 0;m={X:L,1n:f,3u:b,W:g},I!=e&&(m["2q"]=e),$.P({J:"18",O:"/E/17/G",N:m,R:4(d){8 e,f,g;z=!1,$("#"+a+"11"+b).6(""),$("#"+a+"2n"+b).C("1r","/E/2h?t="+(G Y).12()),d&&d.u>0?(e=1,d.F&&(e=d.F["1J"]||1),1L(a,L,b,e),c.3F(""),c.K(),f=$("#"+a+"1d"+b),f.7&&f.S("")):d&&d.u<0&&(-9==d.u&&(T.14.V="/1b/1b"),$("#"+a+"11"+b).6("\u63d0\u793a\uff1a"+d.2p||""),(-2==d.u||-3==d.u)&&(f=$("#1d"+b),-2==d.u&&0==f.7&&(g=1O("4j",{3C:b}),$("#"+a+"1w"+b).M(".3B").1c().3v(g),f=$("#"+a+"1d"+b)),f.7&&(f.S(""),f.K())))},1f:4(){z=!1,$("#"+a+"11"+b).6("\u53d1\u8868\u8bc4\u8bba\u5931\u8d25\uff0c\u672a\u77e5\u9519\u8bef!")}})}}4 1P(a,b,c){8 d,e,f;a||(a=""),d=$("#"+a+"1C"+b),e=$("#"+a+"3z"+b),d.7&&(d.2g(":2f")?(e.6("\u6536\u8d77\u56de\u590d"),d.1e(),e.2s("1V"),f=d.M(".1B .4z"),0==f.7?d.M(".2t").1M():d.M(".2t").1e(),c&&1t(a,b,"")):(e.6("\u56de\u590d"),d.1M(),e.5f("1V")))}4 56(a,b,c,d){8 e,f;a||(a=""),e=2u(d).y-4X,0>e&&(e=0),$("6,U").2o({1K:e},52),f=$("#2n"+b),f.7&&f.C("1r","/E/2h?t="+(G Y).12()),1t(a,b,c)}4 1t(a,b,c){8 d,e;a||(a=""),d=$("#"+a+"1w"+b),d.7&&(d.C("1k",b),d.C("1u",c||""),d.2g(":2f")&&d.1e()),e=15.1a(a+"2i"+b,{2I:["1y"],4Y:!1,2J:!1,2L:4(){D{p:{$:{}},H:{$:{}},B:{$:{}},2P:{$:{}},"-":"2O 16 1h 3b 2H 2G 2A 2z 2y 2B 2C 2F 2E 2D 2Q 2R a"}}()}),e.34("33",4(a,b){8 e,f,d=b.6;d=d.q(/<(\\w[^>]*)\u00a0A=([^\u00a0|>]*)([^>]*)/r,"<$1$3"),d=d.q(/<(\\w[^>]*)\u00a032=([^\u00a0|>]*)([^>]*)/r,"<$1$3"),d=d.q(/<\\/?(35)[^>]*>/r,""),d=d.q(/36-39:[ ]*38;?/r,""),d=d.q(/1g-19:[ ]*\\d{1,3}1q;?/r,""),d=d.q(/1g-19:[ ]*\\d{1,3}%;?/r,""),d=d.q(/&37;<31\\/>/r,""),d=d.q(/30-2U:[ ]*\\d{1,3}(1q|2T|2S|2V);?/r,""),d=d.q(/2W-1D:[ ]*2Z\\([ ]*\\d{1,3}[ ]*,[ ]*\\d{1,3}[ ]*,[ ]*\\d{1,3}[ ]*\\);?/r,""),e=G 2Y("<!.*?>|<o:.*?><1h.*?>|</o.*?>|<U>|<6>|</U>|</6>","g"),f=d.q(e,""),b.6=f}),e.K()}4 2X(){8 a={},b=[];$(".5d[59=1]").3a(4(c,d){8 e=$(d).C("W");e&&($(d).C("2j")&&"58"==$(d).C("2j")&&(a["2m"+e]=!0),b.1v(e))}),0!=b.7&&$.P({J:"18",O:"/E/17/1U/5b",N:{X:L,5c:b.4U(",")},R:4(b){8 c,d,e,f,g,h;s(b&&b.u>0&&(c=b.N,c&&c.7)){13(d={},e=I,f=I,g=I,h=0;h<c.7;h++)f=c[h],f&&(e="1C"+f["1k"],g=d[e],g||(g=[],d[e]=g),g.1v(f),a["2m"+f["1k"]]&&(e="4u"+f["1k"],g=d[e],g||(g=[],d[e]=g),g.1v(f)));2l(d)}},1f:4(){}})}4 2l(a){8 b,c,d,e,f,g,h,i;s(a)13(b 4V a)c=b&&0==b.4t("2k")?"2k":"",d=$("#"+b),d.7&&(e=d.C("W"),f=2w(d.C("4l")||0),g=d.M(".1B"),g.7&&(h=a[b],h&&h.7&&(g.6(1A(c,e,h)),i=f-h.7,i>0&&$("#"+c+"2x"+e).6("\u8fd8\u6709"+i+\'\u6761\u56de\u590d\uff0c<a V="3d:;" 3f="1L(\\\'\'+c+"\',"+L+","+e+\',1)">\u70b9\u51fb\u67e5\u770b</a>\')),1P(c,e,!1)))}4 1A(a,b,c){8 d,e,f;s(!c)D"";13(a||(a=""),d=0;d<c.7;d++)0==d&&(c[d]["4o"]="4r"),e=\'<H A="1Q">\'+c[d]["4q"]+"</H>: ",b!=c[d]["1u"]&&c[d]["4B"]!=c[d]["4C"]&&(e+=\'\u56de\u590d <H A="1Q">\'+c[d]["4O"]+"</H> :"),c[d]["4N"]=e,"4Q"==c[d]["4R"]?(c[d]["1R"]="4T",c[d]["1T"]="\u89e3\u7981\u540e,\u8be5\u7528\u6237\u5c06\u6062\u590d\u53d1\u8868\u8bc4\u8bba\u529f\u80fd",c[d]["1S"]="\u89e3\u7981"):(c[d]["1R"]="4M",c[d]["1T"]="\u7981\u8a00\u540e,\u8be5\u7528\u6237\u5c06\u7981\u6b62\u53d1\u8868\u4efb\u4f55\u8bc4\u8bba",c[d]["1S"]="\u7981\u8a00");D f=1O("4D",{4G:c,4H:a})}4 1L(a,b,c,d){a||(a=""),$.P({J:"18",O:"/E/17/1U/4I",N:{X:L,W:c,p:d,J:a},R:4(b){8 d,e,f;b&&b.u>0&&(d=b.N,d&&d.7&&(e=$("#"+a+"1C"+c+" .1B"),e.7&&e.6(1A(a,c,d)),b.F&&b.F.4p&&(f=b.F.53||"",f=\'<H A="5e">\'+f+"</H>",$("#"+a+"2x"+c).6(f))))},1f:4(){}})}4 1I(a){D a?(a=a.q(/\\</g,"&55;"),a=a.q(/\\>/g,"&50;"),a=a.q(/\\n/g,"<57/>"),a=a.q(/\\[5h([0-9]*)\\]/g,\'<48 1r="/3y/3x/3w/$1.3H" A="1y" 3I="0" />\')):""}4 1N(){8 a=$("#Q");a.7&&a[0].3G>3D&&$("#Q").3J({19:"3r"})}4 2K(){8 b,a={};a["L"]=L,b=$("#1H").C("2v"),b&&(a["1p"]=b),$.P({O:"/E/1l/3j?t="+(G Y).12(),J:"18",3i:"3k",N:a,R:4(a){8 b,c,d,e,f;s(a&&a.u>0&&(b=a.N||[],b&&b.7)){13(c=$("#Q"),0==c.7&&$("#1H").3q(\'<B 2N="Q" A="Q"><B A="3n"></B></B>\'),d=b.7-1;d>=0;d--)0==d&&$("#1H").C("2v",b[d]["1p"]),e=\'<B A="3e" 2N="3S\'+b[d]["1p"]+\'">\'+\'<B A="47" 2M="\'+b[d]["3l"]+\'">\'+b[d]["3t"]+"</B>"+\'<B A="1n" \'+(b[d]["3g"]?\'16="1D:\'+b[d]["3g"]+\'"\':"")+\'><H A="3c">\'+1I(b[d]["1n"])+"</H>",f=\' <a V="3d:;" A="3h" 3f="3A(\\\'\'+b[0]["1p"]+"\')\\">\u5220\u9664</a>",a.F&&a.F["4Z"]&&(e+=f),e+="</B></B>",$("#Q").4P(e);1N()}}})}8 z=!1;$(4(){$(".Q .3e .3c").3a(4(a,b){$(b).6(1I($(b).6()))}),1N(),4J(4(){2K()},4K)}),$(4(){T.4E.4F="/E/4L/4S";8 a=15.1a("1x",{2J:!1,2I:[" 4n 4k |"," 4m 4s |"," 4A 4y 4x |"," 4v 4w 5a 5g |"," 4W 54 | 1y "],2L:4(){D{p:{$:{16:1}},H:{$:{16:1}},a:{$:{V:1,51:1,2M:1}},B:{$:{}},2P:{$:{}},"-":"2O 16 1h 3b 2H 2G 2A 2z 2y 2B 2C 2F 2E 2D 2Q 2R"}}()});a.34("33",4(a,b){8 e,f,d=b.6;d=d.q(/<(\\w[^>]*)\u00a0A=([^\u00a0|>]*)([^>]*)/r,"<$1$3"),d=d.q(/<(\\w[^>]*)\u00a032=([^\u00a0|>]*)([^>]*)/r,"<$1$3"),d=d.q(/<\\/?(35)[^>]*>/r,""),d=d.q(/36-39:[ ]*38;?/r,""),d=d.q(/1g-19:[ ]*\\d{1,3}1q;?/r,""),d=d.q(/1g-19:[ ]*\\d{1,3}%;?/r,""),d=d.q(/&37;<31\\/>/r,""),d=d.q(/30-2U:[ ]*\\d{1,3}(1q|2T|2S|2V);?/r,""),d=d.q(/2W-1D:[ ]*2Z\\([ ]*\\d{1,3}[ ]*,[ ]*\\d{1,3}[ ]*,[ ]*\\d{1,3}[ ]*\\);?/r,""),e=G 2Y("<!.*?>|<o:.*?><1h.*?>|</o.*?>|<U>|<6>|</U>|</6>","g"),f=d.q(e,""),b.6=f}),2X(),$.P({J:"1E",O:"/E/1l/3T?1G="+3Z+"&X="+L+"&t="+(G Y).12()})});',
				62,
				328,
				'||||function||html|length|var||||||||||||||||||replace|gi|if||code|||||isPosting|class|div|attr|return|forum|mapData|new|span|null|type|focus|topicId|find|data|url|ajax|addition_list|success|val|window|body|href|cid|tid|Date|void||forum_reply_comment_error_msg_|getTime|for|location|UM|style|comment|post|height|getEditor|login|parent|txtForumReplyCommentImgCode_|show|error|line|meta|errortimes|document|replyMainCid|topic|parseInt|content|trim|extendId|px|src|forum_reply_topic_error_msg|initAndFocusReplyCommentEditor|replyCid|push|reply_bar_textarea_cid|txt_comment_content|emotion|Math|replyCommentDataHandler|reply_item_list|reply_list_|color|get|txtTurnNo|token|addition_list_container|replace_emotion|totalPage|scrollTop|refreshSubComments|hide|additionListAutoScroll|template|replyComment|blue|actionName|actionText|tipMessage|level2|reply_list_open|hasContents|txtForumReplyTopicImgCode|fourm_page_url|getContent|x00|toString|charAt|xff|toEditComment|vote_num|documentElement|scrollLeft|current_page_size|vote_good_disable|vote|vote_token|good|match|round|hidden|is|getImgCode|reply_textarea_cid|item_type|wd_|initCommentReplyList|key_|forum_comment_imgCode_|animate|message|validCode|300|addClass|reply_ct_btn|getMousePos|latelyExtendId|Number|pager_bar_cid|td|th|table|hr|h1|ul|h3|h2|object|embed|toolbar|imageScaleEnabled|addLatelyGodSay|filterRules|title|id|script|pre|ol|li|em|pt|size|rem|background|requireCommentReplyListData|RegExp|rgb|font|wbr|lang|beforepaste|addListener|SPAN|white|nbsp|nowrap|space|each|iframe|content_text|javascript|addition_item|onclick|textColor|author_del_btn|dataType|latelyGodSay|json|sayTime2|comment_item_|clear_fx|reload|else|append|350px|postReplyComment|sayTime|mainId|before|qqface|images|resources|reply_comment_link_|delGodSay|send_reply_btn|commentId|350|current_page|setContent|scrollHeight|gif|border|slimscroll|1e3|pageY|clientX|pageX|clientY|onPhotoError|121|http|god_say_item_|view_count|test|toTurnNo|floor|floor_no_|event|view_token|63||192|400|20px|top|200|time|img|postComment|vote_effect|hasClass|uploadfile|99|avatars|default|vote_good|png|1000|replyCommentValidCodeTpl|backcolor|reply_count|selectall|forecolor|firstItemCls|total|nickName|first_item|cleardoc|indexOf|wd_reply_list_|justifyleft|justifycenter|underline|italic|reply_item|bold|replyUserId|userId|replyCommentListTpl|UMEDITOR_CONFIG|imageUrl|commentList|itemType|list|setInterval|6e4|upload|gagUser|replyToName|replyUserName|prepend|shutup|userState|umeditorImg|renewUser|join|in|link|100|autoHeightEnabled|isAuthor|gt|target|500|pagerHtml|unlink|lt|toEditReplyComment|br|wd|require_data|justifyright|top3|cids|comment_item|reply_list_pager|removeClass|justifyjustify|em_'
						.split('|'), 0, {}));