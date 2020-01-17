$(document).ready(function () {
    var btn = $("#btn");

    btn.click(function () {
        var side1 = parseInt($("#side1").val());
        var side2 = parseInt($("#side2").val());
        var side3 = parseInt($("#side3").val());
        var printOut = $('#printout');

        var answer = check(side1, side2, side3);
        printOut.text(answer);

    })
})

var check = function (a, b, c) {
    if (a + b > c && a + c > b && c + b > a) {
        if (a === b && b === c && c === a) {
            return "equilateral";
        } else if (a === b || b === c || c === a) {
            return "isosceles";
        } else {
            return "scalene";
        }
    } else {
        return "not a triangle";
    }
}
