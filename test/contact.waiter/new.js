/**
 * 
 */
var qq_chat = true;
function show_qq() {
    if (qq_chat) {
        popwin = window.location.href = 'tencent://message/?uin=1278230143&Site=&Menu=yes'
    }
};
setTimeout("show_qq()", 1000);