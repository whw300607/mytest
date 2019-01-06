function refreshMsgCount(){
    $.ajax({
        url : '/anon/msg/newMsgCount?t='+(new Date().getTime()),
        type : 'get',
        dataType : 'json',
        success : function(res){
            if(res && res.code > 0){

                // investal items
                var investableCount = res.mapData.investableItemCount;
                if(investableCount > 0) {
                    if(investableCount > 9) {
                        $('#head_menu_investable_count').css({"padding":"1px"});
                    }
                    $('#head_menu_investable_count').text(investableCount).show();
                }

                if(res.code==2) {
                    //total msg
                    var accTotal = res.mapData.total;
                    var accTotalMsg = (accTotal>99?'99+':accTotal);
                    var accountMsgTotalNum = $('#accountMsgTotalNum');
                    if(accountMsgTotalNum.length){
                        if(accTotal > 0){
                            accountMsgTotalNum.html(accTotalMsg);
                        }else{
                            accountMsgTotalNum.remove();
                        }
                    }else{
                        if(accTotal>0){
                            // $('#myaccount_head_menu').append($('<div id="accountMsgTotalNum" class="account_msg_clock_total">'+ accTotalMsg +'</div>'));
                            $(".account_msg_small_point").css("display","inline-block");
                        }
                    }

                    //msgcenter
                    var msgCenterHeadMenu = $('#msg_center_head2_menu');
                    if(msgCenterHeadMenu.length){
                        var msgTotal = res.mapData.msgTotal;
                        var msgTotalMsg = (msgTotal>99?'99+':msgTotal);
                        var msgcenterMsgNum = $('#msgcenterMsgNum');
                        if(msgcenterMsgNum.length){
                            if(msgTotal > 0){
                                msgcenterMsgNum.html(msgTotalMsg);
                            }else{
                                msgcenterMsgNum.remove();
                            }
                        }else{
                            if(msgTotal > 0){
                                msgCenterHeadMenu.append($('<div id="msgcenterMsgNum" style="left:75px;" class="account_msg_clock_total">'+ msgTotalMsg +'</div>'));
                                if(!res.mapData.hasSubscribeMsg){
                                    $('#msg_center_head2_link').attr('href', '/usercenter/msg/systemMsg');
                                }
                            }
                        }
                    }

                    //forum comment
                    var userCenterMyActionsHeadMenu = $('#myactions_head2_menu');
                    if(userCenterMyActionsHeadMenu.length){
                        var commentTotal = res.mapData.commentTotal;
                        var commentTotalMsg = (commentTotal>99?'99+':commentTotal);
                        var myactionsCommentNum = $('#myactionsCommentNum');
                        if(myactionsCommentNum.length){
                            if(commentTotal > 0){
                                myactionsCommentNum.html(commentTotalMsg);
                            }else{
                                myactionsCommentNum.remove();
                            }
                        }else{
                            if(commentTotal>0){
                                $('#myactions_head2_menu').append($('<div id="myactionsCommentNum" style="left:76px;" class="account_msg_clock_total">'+ commentTotalMsg +'</div>'));
                            }
                        }
                    }
                }
            }
        }
    });
}

$(function(){
    refreshMsgCount();
});