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
      // dataType: 'json',
       method: 'POST',
      // contentType: 'application/json',
      // url: "http://getsimpleform.com/messages/ajax?form_api_token=3a99ff25bc940dda8538112f249cae9b",
      // url: "https://bps.securetransmit.io/web/test/form?token=EcAJg4QTrsGTmLpoxiLvS5qA&st_rau=true",
      // url: "https://bps.securetransmit.io/forms/bps-contact/form?token=EcAJg4QTrsGTmLpoxiLvS5qA",
      url: "https://lvh.me:3000/forms/test?token=Knyigyrzw2CdEYyLv8i9P2bV",
      // data: $(form).serializeObject()
      data: JSON.stringify($(form).serializeObject())
    // }).done(function() {
        // $(form).append('<h6 class="contact-msg contact-msg-success">Thank you! We\'ll be in touch soon.</h6>');
        // form.reset();
    // }).fail(function() {
        // $(form).append('<h6 class="contact-msg contact-msg-error">An error occurred. Please try again.</h6>');
    }).always(function() {
        $(form).append('<h6 class="contact-msg contact-msg-success">Thank you! We\'ll be in touch soon.</h6>');
        form.reset();
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
