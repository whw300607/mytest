var layer_tip_count = 0;
function addPageItemLayerTip(){
    content_vars = (typeof content_vars != 'undefined' && content_vars) ? content_vars : {};
    for(var key in content_vars){
        var tipObjs = $('.'+key);
        if(tipObjs.length){
            tipObjs.attr('tipData', content_vars[key]);
            for(var i=0;i<tipObjs.length;i++){
                if(!$(tipObjs[i]).attr('tipCls')){
                    layer_tip_count++;
                    $(tipObjs[i]).attr('tipCls', '.layer_tip_'+layer_tip_count);
                    $(tipObjs[i]).addClass('layer_tip_'+layer_tip_count);
                }
            }

            tipObjs.hover(function(){
                var cfg = {
                    time:0,
                    //area: ['500px', '300px'],
                    //tips: [2, '#333'], //0FA6D8,31ACE2
                    skin : 'tgs_info_tip'
                };
                var tipW = $(this).attr('tipWidth');
                if(tipW){
                    cfg['area'] = tipW;
                }
                layer.tips($(this).attr('tipData'),$(this).attr('tipCls'), cfg);
            }, function(){
                layer.closeAll('tips');
            });
        }
    }
}

function addLayerTipBySelf(){
    $(".tgs_tips").each(function(){
        var _this = $(this);
        var tipsinfo = _this.attr("tipsinfo");
        var position = _this.attr("tipsposition");

        if(position){
            position = parseInt(position);
            if(position < 1 || position > 4)position = 2;
        }else position = 2;
        if(tipsinfo){
            _this.hover(function(){
                var cfg = {
                    time:0,
                    skin : 'tgs_info_tip'
                    //tips: [position, '#31ACE2'] //0FA6D8
                };
                var tipW = $(this).attr("tipswidth");
                if(tipW){
                    cfg['area'] = tipW;
                }
                layer.tips(tipsinfo,_this, cfg);
            }, function(){
                layer.closeAll('tips');
            });
        }
    });
}

$(function(){
    addPageItemLayerTip();
    addLayerTipBySelf();
});