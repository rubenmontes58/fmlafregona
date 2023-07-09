(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    $(document).on("submit", "#contact_form_submit", function (e) {
      e.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      var company = $("#company").val();
      var message = $("#message").val();

      if (name && email && phone && company && message) {
        $.ajax({
          type: "POST",
          url: "../../contact.php",
          data: {
            name: name,
            email: email,
            phone: phone,
            company: company,
            message: message,
          },
          success: function (data) {
            $("#contact_form_submit").children(".email-success").remove();
            $("#contact_form_submit").prepend(
              '<span class="alert alert-success email-success">' +
                data +
                "</span>"
            );
            $("#name").val("");
            $("#email").val("");
            $("#message").val("");
            $(".email-success").fadeOut(3000);
          },
          error: function (res) {},
        });
      } else {
        $("#contact_form_submit").children(".email-success").remove();
        $("#contact_form_submit").prepend(
          '<span class="alert alert-danger email-success">All Fields are Required.</span>'
        );
        $(".email-success").fadeOut(3000);
      }
    });
  });
})(jQuery);
