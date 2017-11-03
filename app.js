
var b = B$('Yoko', 'Ono');

b.greet().setBeatle('paul').greet(true).log();

$('#login').click(function() {
   
    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginBeatlr = B$('Yoko', 'Ono');
    
     // hide the login on the screen
    $('#logindiv').hide();
    
     // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen beatle
    loginBeatlr.setBeatle($('#beat').val()).HTMLGreeting('#greeting', true).log();
    
});