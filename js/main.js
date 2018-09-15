

$(function() {
  "use strict"
	
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click',function(){
		$('#header').toggleClass('nav-collapse')
  });


  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }


});


AOS.init({
	duration: 1200,
  })

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 

  // From W3Schools.com
    //Add scrollspy to <body>
  $('body').scrollspy({target: ".floating_nav", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

// $("#name").required = true;

function clearData(){
  $("#name").val("");
  $("#phone").val("");
  $("#email").val("");
  $("#subject").val("");
  $("#message").val("");
}

function sendEmail(){

  $(".contact-loader").removeClass("display-none");

  let name = $("#name").val();
  let phone = $("#phone").val();
  let email = $("#email").val();
  let subject = $("#subject").val();
  let message = $("#message").val();

  let api = "https://salty-taiga-33882.herokuapp.com/send";


  let data = {
    "name": name,
    "phone": phone,
    "email":email,
    "subject":subject,
    "message":message
  }

  axios.post(api, data)
  .then(function (response) {
    console.log(response);
    clearData();
    $(".contact-loader").addClass("display-none");
    $("#contactUsModal").modal("toggle");
    toastr["success"]("Your query has been recorded. We will get back to you soon.");
  })
  .catch(function (error) {
    console.log(error);
  });

}


