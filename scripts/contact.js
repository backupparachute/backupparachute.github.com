// Credit CSS Tricks for serializeObject - https://css-tricks.com/snippets/jquery/serialize-form-to-json/
$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

var $form = $('#contactForm');

$form.validate({
  submitHandler: function(form) {
    $.ajax({
      dataType: 'jsonp',
      url: "http://getsimpleform.com/messages/ajax?form_api_token=3a99ff25bc940dda8538112f249cae9b",
      data: $(form).serializeObject()
    }).done(function() {
        $(form).append('<h6 class="contact-msg contact-msg-success">Thank you! We\'ll be in touch soon.</h6>');
        form.reset();
    }).fail(function() {
        $(form).append('<h6 class="contact-msg contact-msg-error">An error occurred. Please try again.</h6>');
    });
  },
  rules: {
    firstname: 'required',
    lastname: 'required',
    email: {
      required: true,
      email: true
    }
  }
});

$form.on('focus', 'input, textarea, button', function(){
  $('.contact-msg').remove();
});
