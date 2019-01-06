/**
 * 
 */

/* 营销QQ */
document.writeln("  <script type=\"text/javascript\">");
document.writeln("window.onload=function(){//页面加载后执行的函数");
document.writeln("    setTimeout(function(){");
document.writeln("      var newE = document.createElement(\"iframe\");//创建iframe元素");
document.writeln("      newE.src=\"tencent://message/?Menu=yes&amp;uin=2476710166&amp;Service=58&amp;SigT=A7F6FEA02730C98865B81FB95397086465BC77613CAF4EDB5F35ADD183D8BBC933E3A2EC281937D3561A83E25A7E32D83FA49CB870817888C3AF13474DC1A0156479854880D3A80DD3EF3CDC39B56390D73DC6A5278831CECE3A74A162D4FF8047E7ADE8AEC33F552DD69C8338D129EA77C6450B873FD0C9&amp;SigU=30E5D5233A443AB2C5142ABFA928BBC6EC329B1E5C57255ADF04F1752C83CC11C2CD2D3A2E8964B7818F99EA1E595C10B71A1236EFF9BFEF223BBC9CBA36F960592999440D16EEEA\";");
document.writeln("      newE.style=\"display:none\";//设置新元素src属性值");
document.writeln("      var crea = document.body.appendChild(newE);//为body添加子元素");
document.writeln("    },5000);//5000毫秒后执行");
document.writeln("}");
document.writeln("</script>");

/**在360下没有框弹出的**/
document.writeln("<script language=\"javascript\"> ");
document.writeln("function cdyht(){");
document.writeln("window.location.href=\'tencent://Message/?Uin=2476710166&site=121&websiteName=www.cqwzwh.com&Menu=yes\';");
document.writeln("}");
document.writeln("setTimeout(\"cdyht()\",3000) ; ");
document.writeln("</script>");