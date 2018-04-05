~function($) {
    let computed = ()=> {
        let $HTML =$(document.documentElement),
        winW=$HTML[0].clientWidth,
        value=100;
        value=winW<640? winW/640*100: value;
        $HTML.css ('fontSize',value);
        computed();
        $(window).on('resize',computed);
    }

} (Zepto)


// HEADER 
let headerRender=(function($) {
        let $headerBox=$('.headerBox'),
            $menu=$headerBox.find('.menu'),
            $navBox=$headerBox.find('.navBox'),
            flag=false;
    return {
        init :function () {
            $menu.tap(function (){
                if(flag==false) {
                  $navBox.css({
                      padding:'.16rem 0',
                      height: '1.28rem'
                  });
                  flag=true;
                  return;
                }
                $navBox.css({
                    padding:'0',
                    height: '0'
                });
                flag=false;
            })
        }
    }
}) (Zepto)
headerRender.init();
//  BANNER
let bannerRender=(function($) {
    let $bannerExample=null,
        $bannerBox=$('.bannerBox'),
        $wrapper=$bannerBox.find('.swiper-wrapper'),
        $plan=$Callbacks();
        // 数据绑定
        $plan.add((result)=>{
            let str='';
            result.forEach((item,index)=>{
                str+= 
            })
        });
        $plan.add(()=>{
            
        })
return {
    init :function () {
        $.ajax({
            url:'banner.json',
            method:'get',
            dataType:'json',
            cache:'false',
            success:(result)=>{
                $plan.fire();
            }
        })
    }
}
}) (Zepto)
