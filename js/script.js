$(document).ready(function() {
    var area = $('.arrow');
    var arrow = $('#arrowObj');
    var bow = $('#bow');
    //var bubble=$('.bubble');
    var currentBubbleX = 0;
    var currentBubbleY = 0;
    var currentBubble1X = 0;
    var currentBubble1Y = 0;
    var currentBubble2X = 0;
    var currentBubble2Y = 0;
    var currentArrowX = 0;
    var currentArrowY = 0;
    var bowX = 0;
    var bowY = 0;
    var x = 0;
    var y = 0;
    var tries = 0;
    var hit = 0;
    var bubble;
    var aa, aaa, aaaa;
    aa = $('.bubble');
    aaa = $('.bubble1');
    aaaa = $('.bubble2');

    function createBaloon() {

        var a = [aa, aaa, aaaa];
        var b = Math.floor(Math.random() * 3);

        //bubble=a[b];
        var leftPos;
        var p = ["400px", "600px", "800px"];
        leftPos = p[Math.floor(Math.random() * 3)];
        //var leftPos=Math.floor(Math.random()*550)+100;
        // var leftPos="600px";
        aa.css({
            "left": p[0],
            "top": "500px"
        });
        aa.animate({
            "top": "-60px"
        }, 4100);
        aa.animate({ "top": "500px" }, 4100);

        aaa.css({
            "left": p[1],
            "top": "500px"
        });
        aaa.animate({
            "top": "-60px"
        }, 5400);
        aaa.animate({ "top": "500px" }, 5400);

        aaaa.css({
            "left": p[2],
            "top": "500px"
        });
        aaaa.animate({
            "top": "-60px"
        }, 6400);
        aaaa.animate({ "top": "500px" }, 6100);

        currentArrowX = parseInt(arrow.css("left").slice(0, -2));
        currentBubbleY = parseInt(aa.css("top").slice(0, -2));
        bowX = parseInt(bow.css("left").slice(0, -2));
        bowY = parseInt(bow.css("top").slice(0, -2));
        //console.log(currentArrow,currentBubble);
    }
    setInterval(createBaloon, 2000);

    area.on("mousemove", function(event) {
        x = event.pageX - 40;
        y = event.pageY;
        bow.css({ "left": x, "top": y });
        arrow.css({ "left": x - 40, "top": y });
        //$( ".pos" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );

    });


    area.on("mousedown", function(event) {
        x = event.pageX - 40;
        y = event.pageY;
        arrow.css({ "left": x, "top": y });
        //$( ".pos" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
        area.off("mousemove");
    });
    area.mouseup(function() {
        tries = tries + 1;
        arrow.animate({ "left": "1050px" }, 2000);
        currentArrowX = parseInt(arrow.css("left").slice(0, -2));
        currentBubbleY = parseInt(aa.css("top").slice(0, -2));
        document.getElementById('playarrow').play();
        //console.log(currentBubble,currentArrow);

        area.on("mousemove", function(event) {
            x = event.pageX - 40;
            y = event.pageY;
            bow.css({ "left": x, "top": y });
            //arrow.css({"left":x-40,"top":y});
            //$( ".pos" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );

        });

    });

    function inter() {
        currentBubbleY = parseInt(aa.css("top").slice(0, -2));
        currentBubbleX = parseInt(aa.css("left").slice(0, -2));
        currentBubble1Y = parseInt(aaa.css("top").slice(0, -2));
        currentBubble1X = parseInt(aaa.css("left").slice(0, -2));
        currentBubble2Y = parseInt(aaaa.css("top").slice(0, -2));
        currentBubble2X = parseInt(aaaa.css("left").slice(0, -2));
        currentArrowX = parseInt(arrow.css("left").slice(0, -2));
        currentArrowY = parseInt(arrow.css("top").slice(0, -2));

        var x1;
        var y1 = arrow.offset().top;
        var x2, x12, x22;
        var y2 = aa.offset().top;
        var y12 = aaa.offset().top;
        var y22 = aaaa.offset().top;

        var hei = parseInt(aa.css("height").slice(0, -2));
        console.log(hei);
        //x1=parseInt(x1);
        x1 = currentArrowX;
        x2 = currentBubbleX;
        x12 = currentBubble1X;
        x22 = currentBubble2X;

        if ((parseInt(y1) >= parseInt(y2) && parseInt(y1) <= parseInt(y2) + 100) && (parseInt(x1) >= parseInt(x2) - 50 && parseInt(x1) <= parseInt(x2) + 50)) {
            //bubble.css("background-image","url(img/boom.png)");
            hit++;

            aa.hide();

            document.getElementById('play').play();

            function disp() {
                aa.show();
            }
            setTimeout(disp, 2000);

        }

        if ((parseInt(y1) >= parseInt(y12) && parseInt(y1) <= parseInt(y12) + 100) && (parseInt(x1) >= parseInt(x12) - 50 && parseInt(x1) <= parseInt(x12) + 50)) {
            //bubble.css("background-image","url(img/boom.png)");
            hit = hit + 1;
            aaa.hide();

            document.getElementById('play').play();

            function disp() {
                aaa.show();
            }
            setTimeout(disp, 2000);

        }

        if ((parseInt(y1) >= parseInt(y22) && parseInt(y1) <= parseInt(y22) + 100) && (parseInt(x1) >= parseInt(x22) - 50 && parseInt(x1) <= parseInt(x22) + 50)) {
            //bubble.css("background-image","url(img/boom.png)");
            hit = hit + 1;
            aaaa.hide();

            document.getElementById('play').play();

            function disp() {
                aaaa.show();
            }
            setTimeout(disp, 2000);

        }

        // if((parseInt(y2)>=parseInt(y1) && parseInt(y1)<=parseInt(hei+parseInt(y2)))&&(parseInt(x1)>=parseInt(x2)-50 && parseInt(x1)<=parseInt(x2)+50)){
        // 		bubble.hide();
        // }
        $('.pos').text("Tries:" + tries + " Hits:" + hit);

    }
    setInterval(inter, 1);



});
