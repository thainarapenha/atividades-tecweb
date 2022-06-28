$("#btnInicio").click(() => {
    $("#mainHome").attr('style', '');
    $("#Login").attr('style', 'display: none');
    $("#Registro").attr('style', 'display: none');
})
$("#btnLogin").click(() => {
    $("#Login").attr('style', '');
    $("#mainHome").attr('style', 'display: none');
    $("#Registro").attr('style', 'display: none');
})
$("#btnRegistrar").click(() => {
    $("#Registro").attr('style', '');
    $("#mainHome").attr('style', 'display: none');
    $("#Login").attr('style', 'display: none');
})