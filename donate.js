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
var form = document.querySelector('#donateForm');
var authorization = 'sandbox_g42y39zw_348pk9cgf3bgyw2b';

braintree.client.create({
  authorization: authorization
}, function(err, clientInstance) {
  if (err) {
    console.error(err);
    return;
  }
  createHostedFields(clientInstance);
});

function createHostedFields(clientInstance) {
  braintree.hostedFields.create({
    client: clientInstance,
    styles: {
      'input': {
        'font-size': '16px',
        'font-family': 'courier, monospace',
        'font-weight': 'lighter',
        'color': '#ccc'
      },
      ':focus': {
        'color': 'black'
      },
      '.valid': {
        'color': '#8bdda8'
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
        placeholder: 'MM/YYYY'
      },
      postalCode: {
        selector: '#postal-code',
        placeholder: '11111'
      }
    }
  }, function (err, hostedFieldsInstance) {
    var teardown = function (event) {
      event.preventDefault();
      form.addEventListener('submit', function(event) {

      hostedFields.tokenize(function(err, payload) {
        if (err) {
          console.error(err);
          return;
        }

      alert('Submit your nonce to your server here!');
      hostedFieldsInstance.teardown(function () {
        createHostedFields(clientInstance);
        form.removeEventListener('submit', teardown, false);
      });
    };

    form.addEventListener('submit', teardown, false);
  });
}
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
