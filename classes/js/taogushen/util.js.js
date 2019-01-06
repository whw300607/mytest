/**字符串截取包含中文**/
function subCnStr(str, len, hasDot) {
    var newLength = 0;
    var newStr = "";
    var chineseRegex = /[^\x00-\xff]/g;
    var singleChar = "";
    var strLength = str.replace(chineseRegex,"**").length;
    if(strLength < len) return str;
    for(var i = 0;i < str.length;i++){
        singleChar = str.charAt(i).toString();
        if(singleChar.match(chineseRegex) != null){
            newLength += 2;
        }else{
            newLength++;
        }
        if(newLength > len){
            break;
        }
        newStr += singleChar;
    }
    if(hasDot && strLength > len){
        newStr += "...";
    }
    return newStr;
}

/**字符串长度**/
function getCnLen(str){
    if(str == null || typeof str != 'string') return 0;
    return str.replace(/[^\x00-\xff]/g,"**").length;
}


function fmoney2(s, n){
    var m = fmoney(s, n);
    if(n == 0){
        var i = m.indexOf('.');
        if(i != -1){
            return m.substring(0, i);
        }
    }
    return m;
}

//格式化金额
function fmoney(s, n){
    if(s == null) return "";
    var n_bak = n;
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";//更改这里n数也可确定要保留的小数位
    var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
    var t = "";
    for(var i = 0; i < l.length; i++ ) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    var m = t.split("").reverse().join("");
    if(m.indexOf('-,') == 0){
        m = '-' + m.substr(2);
    }else if(m.indexOf(',') == 0){
        m = m.substr(1);
    }
    if(n_bak > 0){
        return m+"." + r.substring(0,2);//保留2位小数
    }
    return m;
}


var SendMsgManage = {
    map : {},
    createTimer : function(){
        return {
            'timer' : null,
            'btn' : null,
            'btnText' : '获取验证码',
            'click' : null
        };
    },
    waitCount : 60,
    startTimer : function(timer, btn){
        if(btn.nodeName	!= "INPUT" && btn.nodeName	!= "input"){
            btn.innerHTML = '处理中...';
        }else{
            btn.value =  '处理中...';
        }

        SendMsgManage.clearTimer(timer);
        var count = SendMsgManage.waitCount;
        timer.btn = btn;
        timer.click = btn.onclick;
        btn.onclick = function(){};
        $(btn).attr('disabled', true);
        timer.timer = setInterval(function(){
            if(timer.btn != btn){
                return;
            }
            if(count > 0){
                if(btn.nodeName	!= "INPUT" && btn.nodeName	!= "input"){
                    btn.innerHTML = "等待"+count+'秒';
                }else{
                    btn.value =  "等待"+count+'秒';
                }
            }
            count--;
            if(count <= 0){
                SendMsgManage.clearTimer(timer);
            }
        },1000);
    },
    clearTimer : function(timer){
        if(!timer) return;
        if(timer.timer){
            clearInterval(timer.timer);
        }
        if(timer.btn){
            $(timer.btn).attr('disabled', false);
            if(timer.click){
                timer.btn.onclick = timer.click;

                timer.click = null;
            }
            if(timer.btn.nodeName != "INPUT" && timer.btn.nodeName != "input"){
                timer.btn.innerHTML = timer.btnText || '获取验证码';
            }else{
                timer.btn.value =  timer.btnText || '获取验证码';
            }
            timer.btn = null;
        }
        timer.timer = null;
    },
    clearAll : function(){
        if(SendMsgManage.map){
            for(var key in SendMsgManage.map){
                SendMsgManage.clearTimer(SendMsgManage.map[key]);
            }
        }
    },
    clearMsgTimer : function(phoneEl){
        var key = SendMsgManage.map[phoneEl];
        if(key){
            SendMsgManage.clearTimer(key);
        }
    },
    isSending : false
};

/***
 * 发送验证码
 * 参数：
 * {
 *   phoneEl:'',
 *   //业务类型决定服务器端发送的短信内容
 *   busiType : '',
 *   //失败情况下，默认为该控件赋值，进行错误消息的提示
 *   //如果需要自定义处理错误：比如弹窗的方式提示错误信息的，则使用回调函数处理
 *   callFunc : function(res){}
 * }
 * callFunc回调函数参数res属性
 *     1) success=true|false
 *     2) code 大于0为成功 小于0都是失败
 *     3) msg 错误消息
 *
 * ID约定
 * 发送按钮：phoneEl值_send_btn
 * 错误提示：phoneEl值_error_tip
 * 返回TOKEN : phoneEl值_msg_token
 */
function sendMsgVerifyCode(params){
    if(!params) return false;
    if(SendMsgManage.isSending){
        return false;
    }
    SendMsgManage.isSending = true;
    if(params.waitCount){
        SendMsgManage.waitCount = params.waitCount;
    }

    var phoneDomId = params.phoneEl || '';
    if($.trim(phoneDomId) == ''){
        SendMsgManage.isSending = false;
        return;
    }
    var sendMsgTimer = null;
    if(SendMsgManage.map[phoneDomId]){
        sendMsgTimer = SendMsgManage.map[phoneDomId];
    }
    if(!sendMsgTimer){
        sendMsgTimer = SendMsgManage.createTimer();
        SendMsgManage.map[phoneDomId] = sendMsgTimer;
    }
    var sendMsgBtn = $('#'+phoneDomId+'_send_btn');

    SendMsgManage.startTimer(sendMsgTimer, sendMsgBtn[0]);

    var backFunc = params.callFunc;
    var isBackFunc = backFunc && typeof(backFunc) == 'function';

    var phoneEl = $('#'+phoneDomId);
    var errorTipEl = $('#'+phoneDomId+'_error_tip');
    var mobile = phoneEl.val();
    var postData = {'business' : params.busiType, 'mobile' : mobile};
    if(params.encryptToken){
        postData['encryptToken'] = params.encryptToken;
    }
    if(!params.encryptToken){
        if(mobile == ''){
            phoneEl.focus();
            errorTipEl.html('手机号码不能为空！');
            if(isBackFunc) backFunc.call(this, {success : false, code : -1, msg : "手机号码不能为空！"});
            SendMsgManage.clearTimer(sendMsgTimer);
            SendMsgManage.isSending = false;
            return false;
        }
        if(!(/^1[3|4|5|7|8]\d{9}$/.test(mobile))){
            phoneEl.focus();
            errorTipEl.html('手机号码填写错误！');
            if(isBackFunc) backFunc.call(this, {success : false, code : -1, msg : "手机号码填写错误！"});
            SendMsgManage.clearTimer(sendMsgTimer);
            SendMsgManage.isSending = false;
            return false;
        }
    }

    if($.trim(params.busiType) == ''){
        errorTipEl.html('参数错误!');
        if(isBackFunc) backFunc.call(this, {success : false, code : -2, msg : "参数错误!"});
        SendMsgManage.clearTimer(sendMsgTimer);
        SendMsgManage.isSending = false;
        return false;
    }
    $.ajax({
        'url'  : '/anon/sendSmsCode?t='+(new Date().getTime()),
        'type' : 'get',
        'cache': false,
        'data' : postData,
        'success' : function(res){
            SendMsgManage.isSending = false;
            try{
                if(res){
                    if(res.code != undefined && res.code == 1){
                        $('#'+phoneDomId+'_msg_token').val(res.msgToken || '');
                        if(isBackFunc) backFunc.call(this, {success : true, code : 1, msg : "短信发送成功!"});
                        return;
                    }else{
                        errorTipEl.html(res.message || '');
                        if(isBackFunc) backFunc.call(this, {success : false, code : -99, msg : res.message || ''});
                    }
                }else{
                    errorTipEl.html('短信发送失败!');
                    if(isBackFunc) backFunc.call(this, {success : false, code : -98, msg : '短信发送失败!'});
                }
            }catch(ex){}
            SendMsgManage.clearTimer(sendMsgTimer);
        },
        'error' : function(){
            errorTipEl.html('短信发送失败!');
            SendMsgManage.clearTimer(sendMsgTimer)
            if(isBackFunc) backFunc.call(this, {success : false, code : -100, msg : '短信发送失败!'});
            SendMsgManage.isSending = false;
        }
    });
}

/*** 滚动刷新数据组件 ***/
var PageScrollLoadData = {
    ajaxRequest : null,
    pageNo : 1,
    isLast : false,
    init : function(cfg){
        if(!cfg) return;
        var my = this;
        var initLoad = true;
        if(cfg.initLoad == false) initLoad = false;
        if(initLoad){
            var flag = cfg.canLoad ? (cfg.canLoad.call(my) || false) : true;
            if(flag){
                my.load(cfg);
            }
        }
        $(window).scrollbottom(function(){
            if((!my.ajaxRequest || (my.ajaxRequest.readyState == 4)) && !my.isLast){
                var flag = cfg.canLoad ? (cfg.canLoad.call(my) || false) : true;
                if(flag){
                    my.load(cfg);
                }
            }
            if(my.isLast){
                $.mobile.loading("show", {
                    text: "没有了",
                    textVisible: true,
                    textonly: true,
                    html: $(document).jqmData("html")
                });
                setTimeout(function(){
                    $.mobile.loading("hide");
                },500);
            }
        },($(window).height() / 10));
    },
    load : function(cfg){
        if(!cfg || !cfg.url) return;
        tgs.mobile.loading();
        var my = this;
        var postData = null;
        if(cfg.getPostData){
            postData = $.extend(true, {}, cfg.getPostData.apply(my, cfg));
        }else if(cfg.data){
            postData = $.extend(true, {}, cfg.data);
        }
        if(postData && postData['pageNo'] == undefined){
            postData['pageNo'] = my.pageNo;
        }else{
            postData = {'pageNo' : my.pageNo};
        }
        my.ajaxRequest = $.ajax({
            url : cfg.url || '',
            type : cfg.type || 'POST',
            dataType : cfg.dataType || 'json',
            cache: false,
            data : postData,
            success:function(){
                if(cfg.checkLast){
                    if(cfg.checkLast.apply(my, arguments)){
                        my.isLast = true;
                    }else{
                        my.pageNo++;
                    }
                }
                if(cfg.success){
                    cfg.success.apply(my, arguments);
                }
                tgs.mobile.loadhide();
            },
            error : function(){
                if(cfg.error){
                    cfg.error.apply(my, arguments);
                }
                tgs.mobile.loadhide();
            }
        });
    }
};

/**
 * 时间对象的格式化;
 */
Date.prototype.format = function(format) {
    /*
     * eg:format="yyyy-MM-dd hh:mm:ss";
     */
    var o = {
        "M+" : this.getMonth() + 1, // month
        "d+" : this.getDate(), // day
        "h+" : this.getHours(), // hour
        "m+" : this.getMinutes(), // minute
        "s+" : this.getSeconds(), // second
        "q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
        "S" : this.getMilliseconds()
        // millisecond
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
        - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};

//滚动插件
(function($){
    $.fn.extend({
        PopScroll:function(opt,callback){
            //参数初始化
            if(!opt) var opt={};
            var timerID;
            var _this=this.eq(0).find("ul:first");
            var lineH=_this.find("li:first").height(), //获取行高
                line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
                speed=opt.speed?parseInt(opt.speed,10):500, //卷动速度，数值越大，速度越慢（毫秒）
                timer=opt.timer?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
            if(line==0) line=1;
            var upHeight=0-line*lineH;
            //滚动函数
            scrollUp=function(){
                _this.animate({
                    marginTop:upHeight
                },speed,function(){
                    for(i=1;i<=line;i++){
                        _this.find("li:first").appendTo(_this);
                    }
                    _this.css({marginTop:0});
                });
            }
            //鼠标事件绑定
            _this.hover(function(){
                clearInterval(timerID);
            },function(){
                timerID=setInterval("scrollUp()",timer);
            }).mouseout();
        }
    });
})(jQuery);

String.prototype.mask = function(beginIndex,endIndex,masker){
    if (this == null || this.length == 0) {
        return this;
    }
    if(!masker){
        masker ="*";
    }
    if (beginIndex < 0) {
        beginIndex = 0;
    }
    if (endIndex > this.length) {
        endIndex = this.length;
    }
    var subLen = endIndex - beginIndex;
    if(subLen < 0){
        return null;
    }
    if(this.length == 1){
        return masker;
    }
    var arr = this.split("");
    for(var i = 0;i<arr.length;i++){
        if(i >= beginIndex && i < endIndex){
            arr[i] = masker;
        }
    }
    return arr.join("");
}