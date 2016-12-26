$(document).ready(function() {
    var area = $('.arrow');
    var arrow = $('#arrowObj');
    var bow = $('#bow');
    var bubble_0 = $('.bubble');
    var bubble_1 = $('.bubble1');
    var bubble_2 = $('.bubble2');
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
    var xAxis = 0;
    var yAxis = 0;
    var tries = 0;
    var hit = 0;

    var bubble;
    var leftPos;
    var selector;

    function createBaloon() {

        selector = [bubble_0,bubble_1,bubble_2];
        bubble = selector[Math.floor((Math.random() * 3) )];

        var p = ["400px", "600px", "800px"];
        leftPos = p[Math.floor((Math.random() * 3) )];

        bubble.css({
            "left": leftPos,
            "top": "500px"
        });
        bubble.animate({
            "top": "-60px"
        }, 4100);
        bubble.animate({ "top": "500px" }, 4100);

        

        currentArrowX = parseInt(arrow.css("left").slice(0, -2));
        currentBubbleY = parseInt(bubble.css("top").slice(0, -2));
        bowX = parseInt(bow.css("left").slice(0, -2));
        bowY = parseInt(bow.css("top").slice(0, -2));

    }
    setInterval(createBaloon, 2000);

    area.on("mousemove", function(event) {
        xAxis = event.pageX - 40;
        yAxis = event.pageY;
        bow.css({ "left": xAxis, "top": yAxis });
        arrow.css({ "left": xAxis - 40, "top": yAxis });


    });


    area.on("mousedown", function(event) {
        xAxis = event.pageX - 40;
        yAxis = event.pageY;
        arrow.css({ "left": xAxis, "top": yAxis });

        area.off("mousemove");
    });
    area.mouseup(function() {
        tries = tries + 1;
        arrow.animate({ "left": "1050px" }, 2000);

        document.getElementById('playarrow').play();


        area.on("mousemove", function(event) {
            xAxis = event.pageX - 40;
            yAxis = event.pageY;
            bow.css({ "left": xAxis, "top": yAxis });


        });

    });

    function inter() {
        currentBubbleY = parseInt(bubble_0.css("top").slice(0, -2));
        currentBubbleX = parseInt(bubble_0.css("left").slice(0, -2));
        currentBubble1Y = parseInt(bubble_1.css("top").slice(0, -2));
        currentBubble1X = parseInt(bubble_1.css("left").slice(0, -2));
        currentBubble2Y = parseInt(bubble_2.css("top").slice(0, -2));
        currentBubble2X = parseInt(bubble_2.css("left").slice(0, -2));
        currentArrowX = parseInt(arrow.css("left").slice(0, -2));
        currentArrowY = parseInt(arrow.css("top").slice(0, -2));


        var arrowTop = arrow.offset().top;
        var bubble_0Top = bubble_0.offset().top;
        var bubble_1Top = bubble_1.offset().top;
        var bubble_2Top = bubble_2.offset().top;
        var hei = parseInt(bubble_0.css("height").slice(0, -2));




        if ((parseInt(arrowTop) >= parseInt(bubble_0Top) && parseInt(arrowTop) <= parseInt(bubble_0Top) + 100) && (parseInt(currentArrowX) >= parseInt(currentBubbleX) - 50 && parseInt(currentArrowX) <= parseInt(currentBubbleX) + 50)) {

            hit++;
            bubble_0.hide();
            document.getElementById('play').play();

            function disp() {
                bubble_0.show();
            }
            setTimeout(disp, 2000);

        }

        if ((parseInt(arrowTop) >= parseInt(bubble_1Top) && parseInt(arrowTop) <= parseInt(bubble_1Top) + 100) && (parseInt(currentArrowX) >= parseInt(currentBubble1X) - 50 && parseInt(currentArrowX) <= parseInt(currentBubble1X) + 50)) {

            hit++;
            bubble_1.hide();

            document.getElementById('play').play();

            function disp() {
                bubble_1.show();
            }
            setTimeout(disp, 2000);

        }

        if ((parseInt(arrowTop) >= parseInt(bubble_2Top) && parseInt(arrowTop) <= parseInt(bubble_2Top) + 100) && (parseInt(currentArrowX) >= parseInt(currentBubble2X) - 50 && parseInt(currentArrowX) <= parseInt(currentBubble2X) + 50)) {

            hit++;
            bubble_2.hide();

            document.getElementById('play').play();

            function disp() {
                bubble_2.show();
            }
            setTimeout(disp, 2000);

        }


        $('.pos').text("Tries:" + tries + " Hits:" + hit);

    }
    setInterval(inter, 1);



});
