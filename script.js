$('#checkToggle').change(function() {
    if ($(this).is(":checked"))
    {
        $('.listitem').prop("checked",true);
    } else
    {
        $('.listitem').prop("checked",false);
    }
});

$('input[type="text"]').focus(function() {
	$(this).css('outline-color','goldenrod');
});

$('.dropdown').click(function() {
	$('.dropdownitem').toggle();
});