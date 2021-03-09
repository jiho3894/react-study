const Links = {
    setColor : function(color){
    //     var alist = document.querySelectorAll('a');
    //             var i = 0;
    //             while(i < alist.length){
    //                 alist[i].style.color=color;
    //                 i = i + 1;
    //             }
    $('a').css('color',color);
    }
}

const Body = {
    setColor : function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color',color);
    } ,
    setbackgrounColor : function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    }
}

function NightmodeControl(self)  {
    const target = document.querySelector('body');
        if(self.value === 'night'){
            Body.setbackgrounColor('black');
            Body.setColor('white');
            self.value = 'day';
            Links.setColor('blue');
        }
        else {
            Body.setbackgrounColor('white');
            Body.setColor('black');
            self.value = 'night';
            Links.setColor('green');
        }
    }


