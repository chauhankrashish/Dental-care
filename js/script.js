// ******************************************************************************** View More *****************************************************************

let loadmorebtn = document.querySelector(".more");
let currentitem = 6;

loadmorebtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.photo-gallary .img')];
    for (let i = currentitem; i < currentitem + 3; i++) {
        boxes[i].style.display = "inline-block";
    }
    currentitem += 3;
    if (currentitem >= boxes.length) {
        loadmorebtn.style.display = 'none';
    }
}


// ******************************************************************************** counter *****************************************************************

jQuery(document).ready(function ($) {
    $(".count1").counterUp({
        delay: 10,
        time: 1000,
    });
});

(function (e) { "use strict"; e.fn.counterUp = function (t) { var n = e.extend({ time: 400, delay: 10 }, t); return this.each(function () { var t = e(this), r = n, i = function () { var e = [], n = r.time / r.delay, i = t.text(), s = /[0-9]+,[0-9]+/.test(i); i = i.replace(/,/g, ""); var o = /^[0-9]+$/.test(i), u = /^[0-9]+\.[0-9]+$/.test(i), a = u ? (i.split(".")[1] || []).length : 0; for (var f = n; f >= 1; f--) { var l = parseInt(i / n * f); u && (l = parseFloat(i / n * f).toFixed(a)); if (s) while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2"); e.unshift(l) } t.data("counterup-nums", e); t.text("0"); var c = function () { t.text(t.data("counterup-nums").shift()); if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay); else { delete t.data("counterup-nums"); t.data("counterup-nums", null); t.data("counterup-func", null) } }; t.data("counterup-func", c); setTimeout(t.data("counterup-func"), r.delay) }; t.waypoint(i, { offset: "100%", triggerOnce: !0 }) }) } })(jQuery);


// *********************************************************************************  video slider Strt ************************************************************

let left = 1;
let right = 3;

function show() {
    for (i = left; i <= right; i++) {
        document.getElementById("slider" + i).style.display = "inline-block";
    }

}

function moveLeft() {
    if (left <= 4 && right <= 7) {

        document.getElementById("slider" + left).style.display = "none";
        left += 1;
        right += 1;
        for (i = left; i <= right; i++) {

            document.getElementById("slider" + i).style.display = "inline-block";
        }
    }
    else
        return;
}

function moveRight() {
    if (left >= 2 && right >= 4) {

        document.getElementById("slider" + right).style.display = "none";
        left -= 1;
        right -= 1;
        for (i = left; i <= right; i++) {

            document.getElementById("slider" + i).style.display = "inline-block";
        }
    }
    else
        return;
}


// *****************************************************************************  ************************************************************


