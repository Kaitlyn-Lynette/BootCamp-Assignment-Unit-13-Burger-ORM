// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $('.devoured-burger').on('click', function() {
    var id = $(this).data('id');
    var burgerDevoured = $(this).data('newlyeaten');

    var newBurgerState = {
      burger: burgerDevoured
    };

      // Send the PUT request.
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newBurgerState
    }).then(
      function() {
        console.log('changed sleep to', burgerDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $('#create-form').on('submit', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console('I was clicked!');
    var newBurger = {
      name: $('#burger-name').val().trim()
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        console.log('created new burger');
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

//   $('.delete-cat').on('click', function(event) {
//     var id = $(this).data('id');

//     // Send the DELETE request.
//     $.ajax('/api/cats/' + id, {
//       type: 'DELETE'
//     }).then(
//       function() {
//         console.log('deleted cat', id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

