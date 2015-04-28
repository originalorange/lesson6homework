// JQUERY CHEATSHEET!!!

	// The set up:
		// Inside of the <head> section of your HTML file, include a copy of the
		// jQuery library:

			// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
			// </script>

		// Also in order for everything to be ready, encapsulate all of the javascript in the document ready wrapper:

			$(document).ready(
			//Code that executes when the document is ready
			function(){
			alert('The document is ready, sah!');
			}
			);

	// Section 1: SELECTING ELEMENTS
		// The format for selecting elements is:
			$("<element name, class, id, or XPath>")

		// i.e.:
			$("h2")
			$(".header")
			$("ul li")


	// Section 2: FUNCTIONS
		// Anonymous Functions AKA Callbacks - A function within a function!
			// It has no name
				function(){
				alert("I am anonymous!");
				}

			// Or it becomes a variable!
				var functionanonymous = function(){ alert("Boo!"); }

			// Example of a callback:
				// Define an anonymous function called chicken
				var chicken = function(){ alert('Bock bock!'); }
				// Declare a regular or anonymous function that takes another
				// function as an argument, does something,
				// then runs that other function
				function morechickens(anyFunction){ console.log("Bock bock!"); anyFunction(); }
				// Call the regular function, supplying the initial
				// anonymous function as an argument
				morechickens(chicken);

	// Section 3: THE FUN STUFF!
		// Making stuff change!

			// hide elements on the page
				$("body").hide(); 
			// show elements on the page
				$("body").show();	
			//Fade out over 1 second
				$("#section-one").fadeOut(1000);
			//Fade in over 4 seconds
				$("#section-one").fadeIn(4000);
			//Slide up over 1 second
				$("#section-one").slideUp(1000);
			//Slide down over 4 seconds
				$("#section-one").slideDown(4000);

			// To animate!
				$(".my-element").animate( {
				opacity: 0.25,
				width: 70%
				} , 2000 );

			// To select an element to trigger a click function:
				$("ul li a").click(
				function(){
				alert('imclicked!');
				}
				);

			// One animation can trigger another when the first one is done, using an anonymous function as a callback:
				var animateMenu = function(){
				$(".menu").animate( {opacity: .5} )
				}
				$(".menu").show(animateMenu)

			// Simplified syntax of the above i.e. can be written this way too!
				$(".menu").show( function(){
				$(".menu").animate( {opacity: .5} )
				})

