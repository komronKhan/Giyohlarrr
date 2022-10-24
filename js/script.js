$('#btn-minus').click(function() {
    var val = $("#var-value").html();
    val = (val == '1') ? val : val - 1;
    $("#var-value").html(val);
    $("#product-quanity").val(val);
    return false;
});
$('#btn-plus').click(function() {
    var val = $("#var-value").html();
    val++;
    $("#var-value").html(val);
    $("#product-quanity").val(val);
    return false;
});




$(document).ready(
    window.addEventListener("load", () => {
        document.querySelector(".loader").classList.add("loader-hide")
        $(".pre").css("display", "none");
    })
)