$(document).ready(function() {
    var area = $('.arrow');
    var arrow = $('#arrowObj');
    var bow = $('#bow');
    var bubble_0 = $('.bubble');
    var bubble_1 = $('.bubble1');
    var bubble_2 = $('.bubble2');
    var currentBubble0x = 0;
    var currentBubble0Y = 0;
    var currentBubble1X = 0;
    var currentBubble1Y = 0;
    var currentBubble2X = 0;
    var currentBubble2Y = 0;
    var currentArrowX = 0;
    var currentArrowY = 0;
    var currentBubble=[[]];
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

        for(var i=0;i<3;i++){

            var p = [400, 600, 800];
            //leftPos = p[Math.floor((Math.random() * 3) )];

            selector[i].css({
            "left": p[i],
            "top": "500px"
             });

            selector[i].animate({
                "top": "-60px"
            }, p[i]*10);

            selector[i].animate({ "top": p[i]-200+"px" }, p[i]*5);

        }

        

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
        currentBubble0Y = bubble_0.offset().top;
        currentBubble0x = bubble_0.offset().left;
        currentBubble1Y = bubble_1.offset().top;
        currentBubble1X = bubble_1.offset().left;
        currentBubble2Y = bubble_2.offset().top;
        currentBubble2X = bubble_2.offset().left;

        currentArrowX = arrow.offset().left;
        currentArrowY = arrow.offset().top;


        var hei = parseInt(bubble_0.css("height").slice(0, -2));


        if ((currentArrowY >= currentBubble0Y && currentArrowY <= currentBubble0Y + 100) && (currentArrowX >= currentBubble0x - 50 && currentArrowX <= currentBubble0x + 50)) {

            blast(bubble_0);

        }

        if ((currentArrowY >= currentBubble1Y && currentArrowY <= currentBubble1Y + 100) && (currentArrowX >= currentBubble1X - 50 && currentArrowX <= currentBubble1X + 50)) {

            blast(bubble_1);

        }

        if ((currentArrowY >= currentBubble2Y && currentArrowY <= currentBubble2Y + 100) && (currentArrowX >= currentBubble2X - 50 && currentArrowX <= currentBubble2X + 50)) {

            blast(bubble_2);
        }

        function blast(bubblenum){
            hit++;
            bubblenum.hide();
            document.getElementById('play').play();

            function disp() {
                bubblenum.show();
            }
            setTimeout(disp, 2000);
        }


        $('.pos').text("Tries:" + tries + " Hits:" + hit);

    }
    setInterval(inter, 1);



});
