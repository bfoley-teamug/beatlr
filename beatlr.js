 
(function(global, $) {
    
    var Beatlr = function(firstname, lastname, greeting) {
        //return function constructor
        return new Beatlr.init(firstname, lastname, greeting);
    }
    
    var beatles = ['John', 'Paul', 'George', 'Ringo']; 
    
    var greetings = {
        john: 'Good morning, good morning!',
        paul: 'Good day, sunshine!',
        george: 'Here comes the sun!',
        ringo: "Now it's time to say goodnight!"
    };
    
    var moreGreetings = {
        john: "Life is very short and there's no time for fussing and fighting my friend",
        paul: 'The love you take is equal to the love you make',
        george: 'With our love, we could save the world, if they only knew',
        ringo: "We would sing and dance around because we know we can't be found"
    }; 
    
    var logMessages = {
        john: 'Hello!',
        paul: 'Hello, goodbye',
        george: 'Let it roll!',
        ringo: 'Peace and love'
    }; 
    
    //set the prototype - prototype holds methods to save memory space
    Beatlr.prototype = {
        fullname: function() {
            return this.firstname + ' ' + this.lastname; 
        },
        
        validate: function() {
          //check for valid Beatle
           if (beatles.indexOf(this.greeting) === -1) {
                return "No Reply"; 
            } 
        },
        
        
        beatle: function() {
            return greetings[this.greeting] + ' ' + this.firstname + '!';
            
        }, 
        
        moreBeatle: function() {
            return moreGreetings[this.greeting] + ' ' + this.fullname(); 
        },
        
      // chainable methods return their own containing object
        greet: function(more) {
            var msg;    
          
          if (more) {
                msg = this.moreBeatle();  
            }
            else {
                msg = this.beatle();  
            }

            if (console) {
                console.log(msg);
            }
          
            return this;
            },
          
          log: function() {
               if (console) {
                console.log(logMessages[this.greeting] + ': ' + this.fullname()); 
               }
              return this;
            },
          
          setBeatle: function(beat) {
            this.greeting = beat;
            this.validate();
            return this;    
          },
            
            HTMLGreeting: function(selector, more) {
            if (!$) {
                return 'jQuery not loaded';   
            }
            
            if (!selector) {
                return 'Missing jQuery selector';   
            }
            
            // determine the message
            var msg;
            if (more) { 
                msg = this.moreBeatle();   
            }
            else {
                msg = this.beatle();   
            }
            
            // inject the message in the chosen place in the DOM
            $(selector).html(msg);
            
            // make chainable
            return this;
          }    
        };
    
 
  // the actual object is created here, allowing us to 'new' an object without calling 'new'
   
    Beatlr.init = function(firstname, lastname, greeting) {
        //default properties for firstname, lastname & greeting
        var ringo = this;
        ringo.firstname = firstname || '';
        ringo.lastname = lastname || '';
        ringo.greeting = greeting || 'john';
  
        ringo.validate();
    }
    
    //all objects will point here
    Beatlr.init.prototype = Beatlr.prototype; 
    
    global.Beatlr = global.B$ = Beatlr; //Beatlr line 4
    
}(window, jQuery)); 