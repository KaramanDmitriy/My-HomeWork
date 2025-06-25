
 $(document).ready(function() {
        $('#mySelect').select2({
          placeholder: "Оберіть країну",
          allowClear: true
        });
      });
    
// function formatState (state) {
//     if (!state.id) {
//       return state.text;
//     }
//     var baseUrl = "../images/flags/";
//     var $state = $(
//       '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
//     );
//     return $state;
//   };
  
//   $(".js-example-templating").select2({
//     templateResult: formatState
//   });
var $disabledResults = $(".js-example-disabled-results");
$disabledResults.select2();