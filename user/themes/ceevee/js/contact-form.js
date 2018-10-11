$(document).ready(function(){

    console.log('doc is ready');

    var form = $('#contact-form');
    form.submit(function(e) {
        // prevent form submission
        e.preventDefault();

        console.log('SUBMITTED');

        // submit the form via Ajax
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                // Inject the result in the HTML
                $('#form-result').slideDown('fast').html(result);
				$.find('input[type=text], textarea').forEach(function(x){
					x.value = '';
				});
            }
        });
    });
});
