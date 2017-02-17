console.log("🎈");

var randomizer = (n) => {
  return Math.floor(Math.random() * n)
}

names = ["Big Texas", "Mullberry", "Bam-Bam", "SnugglePuff", "Bamboo"]
nose_colors = ["blue", "red", 'green', 'yellow']

// I'M ASSUMING THAT SINCE THE ASSIGNMENT DOESN'T TOUCH ANYTHING
// TO DO WITH CARS, IT'S OKAY TO FIX THE CAR_IDS IN AN ARRAY INSTEAD OF
// SEARCHING THE DATABASE TO SEE HOW MANY CARS MAY HAVE BEEN ADDED SINCE
// SEEDING?
car_id = [1, 2]


// RENDER ALL THE CIRCUSES
$.get('/circus', function(data){
  data.forEach(function(circ){
    let $new_circ = $('<div>').attr('class', 'circus')
      .html(`<h3><span style="font-size: 20px">🎪</span>Tent#: ${circ.id} @ (${circ.location})</h3>
        <p>Starts On: ${circ.starts_on}<br>
        Ends On: ${circ.ends_on}<br>
        Tickets Left: ${circ.num_of_tix}<br></p>
        <button id="${circ.id}" class="create_clown">Create Clown</button>`)
    $('body').append($new_circ)
  })
  $('body').append(`<ul id="featuredClowns">🤡 FEATURED CLOWNS! 🤡</ul>`)
// CREATE A CLOWN IN A CIRCUS

// EVERYTHING IS IN THE SAME NASTY GIANT .GET FUNCTION BC I DON'T KNOW
// HOW TO TEMPLATE 😓😓😓 (I'M ASSUMING TEMPLATING WOULD HELP HERE??)
  $('.create_clown').on('click', function(evt){
    circ = evt.target;
    new_clown = {
      name: names[randomizer(names.length)],
      nose_color: nose_colors[randomizer(nose_colors.length)],
      car_id: car_id[randomizer(car_id.length)],
      circus_id: parseInt(circ.getAttribute('id'))
    };
    console.log(new_clown)
    $.post('/clowns', {clown: new_clown}, function(req, res){
      $.get('/clowns', function(data){
        $('li').remove();
        data.forEach(function(db_clown){
          $('#featuredClowns').append(`<li>${db_clown.name} @ Tent#: ${db_clown.circus_id}!</li>`)
        })
      })
    })
  })
})





