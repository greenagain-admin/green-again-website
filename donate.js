// var form = document.querySelector('#donateForm');
// //var authorization = 'sandbox_8n5f9yyj_rz6zyhwcvnqnpxv4';
// var authorization = 'sandbox_8n5f9yyj_rz6zyhwcvnqnpxv4';
// var submit = document.querySelector('input[type="submit"]');
//
// var createClient = braintree.client.create;
//
// createClient({
//   authorization: CLIENT_AUTHORIZATION
// }, function (createErr, clientInstance) {
//   // ...
// });
//
// braintree.client.create({
//   authorization: authorization
// }, function(err, clientInstance) {
//   if (err) {
//     console.error("ERROR", err);
//     return;
//   }
//   var options = {
//     client: clientInstance,
//     styles: {
//         'input': {
//           'font-size': '16px',
//           'font-family': '"Roboto Condensed", sans-serif',
//           'font-weight': 'lighter',
//           'color': '#ccc'
//         },
//         ':focus': {
//           'color': 'black'
//         },
//         '.valid': {
//           'color': '#8bdda8'
//         }
//     },
//     fields: {
//         number: {
//           selector: '#card-number',
//           placeholder: '4111 1111 1111 1111'
//         },
//         cvv: {
//           selector: '#cvv',
//           placeholder: '123'
//         },
//         expirationDate: {
//           selector: '#expiration-date',
//           placeholder: 'MM/YYYY'
//         },
//         postalCode: {
//           selector: '#postal-code',
//           placeholder: '11111'
//         }
//     }
//   };
//   braintree.hostedFields.create(options, function (hostedFieldsErr, hostedFieldsInstance) {
//     if (hostedFieldsErr) {
//         console.error("FIELF ERROR", hostedFieldsErr);
// // Handle error in Hosted Fields creation
//       return;
//     }
//     submit.removeAttribute('disabled');
//
//     form.addEventListener('submit', function (event) {
//       event.preventDefault();
//
//
//       hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
//         if (tokenizeErr) {
//           console.error("TOKEN ERROR", tokenizeErr);
//           return;
//         }
//         document.querySelector('input[name="payment_method_nonce"]').value = payload.nonce;
// form.submit();
//         console.log('Got a nonce: ' + payload.nonce);
//     // Use the Hosted Fields instance here to tokenize a card
//   });
// }, false);
// });
// });
// var form = document.querySelector('#donateForm');
// var authorization = 'sandbox_g42y39zw_348pk9cgf3bgyw2b';
//
// braintree.client.create({
//   authorization: authorization
// }, function(err, clientInstance) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   createHostedFields(clientInstance);
// });
//
// function createHostedFields(clientInstance) {
//   braintree.hostedFields.create({
//     client: clientInstance,
//     styles: {
//       'input': {
//         'font-size': '16px',
//         'font-family': 'courier, monospace',
//         'font-weight': 'lighter',
//         'color': '#ccc'
//       },
//       ':focus': {
//         'color': 'black'
//       },
//       '.valid': {
//         'color': '#8bdda8'
//       }
//     },
//     fields: {
//       number: {
//         selector: '#card-number',
//         placeholder: '4111 1111 1111 1111'
//       },
//       cvv: {
//         selector: '#cvv',
//         placeholder: '123'
//       },
//       expirationDate: {
//         selector: '#expiration-date',
//         placeholder: 'MM/YYYY'
// //       },
//       postalCode: {
//         selector: '#postal-code',
//         placeholder: '11111'
//       }
//     }
//   }, function (err, hostedFieldsInstance) {
//     var teardown = function (event) {
//       event.preventDefault();
//       form.addEventListener('submit', function(event) {
//
//       hostedFields.tokenize(function(err, payload) {
//         if (err) {
//           console.error(err);
//           return;
//         }
//
//       alert('Submit your nonce to your server here!');
//       hostedFieldsInstance.teardown(function () {
//         createHostedFields(clientInstance);
//         form.removeEventListener('submit', teardown, false);
//       });
//     };
//
//     form.addEventListener('submit', teardown, false);
//   });
// }
var form = document.querySelector('#donateForm');

var submit = document.querySelector('input[type="submit"]');

braintree.client.create({

  // Replace this with your own authorization.

  authorization: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIyY2I2NTM3NmM1YWY0NjBiMGU5NDk1YjA0YTRjNDBhYmRhOTRjYTJlM2FiY2E4YzkxOTAwNjA4N2Q3MjVmOGExfGNyZWF0ZWRfYXQ9MjAxNy0wNC0wN1QxODoyNjoxOS4wNzI5OTEzNzYrMDAwMFx1MDAyNm1lcmNoYW50X2lkPTM0OHBrOWNnZjNiZ3l3MmJcdTAwMjZwdWJsaWNfa2V5PTJuMjQ3ZHY4OWJxOXZtcHIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tLzM0OHBrOWNnZjNiZ3l3MmIifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImFjbWV3aWRnZXRzbHRkc2FuZGJveCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiMzQ4cGs5Y2dmM2JneXcyYiIsInZlbm1vIjoib2ZmIn0='

}, function (clientErr, clientInstance) {

  if (clientErr) {

    // Handle error in client creation

    return;

  }



  braintree.hostedFields.create({

    client: clientInstance,

    styles: {

      'input': {

        'font-size': '14pt'

      },

      'input.invalid': {

        'color': 'red'

      },

      'input.valid': {

        'color': 'green'

      }

    },

    fields: {

      number: {

        selector: '#card-number',

        placeholder: '4111 1111 1111 1111'

      },

      cvv: {

        selector: '#cvv',

        placeholder: '123'

      },

      expirationDate: {

        selector: '#expiration-date',

        placeholder: '10/2019'

    },
      postalCode: {
        selector: '#postal-code',
        placeholder: '11111'
      }

    }

  }, function (hostedFieldsErr, hostedFieldsInstance) {

    if (hostedFieldsErr) {

      // Handle error in Hosted Fields creation

      return;

    }



    submit.removeAttribute('disabled');



    form.addEventListener('submit', function (event) {

      event.preventDefault();



      hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {

        if (tokenizeErr) {

          // Handle error in Hosted Fields tokenization

          return;

        }



        // Put `payload.nonce` into the `payment_method_nonce` input, and then

        // submit the form. Alternatively, you could send the nonce to your server

        // with AJAX.

        document.querySelector('input[name="payment_method_nonce"]').value = payload.nonce;

        form.submit();

      });

    }, false);

  });

});
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
