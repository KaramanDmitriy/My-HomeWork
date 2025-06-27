
 $(document).ready(function() {
        $('#mySelect').select2({
          placeholder: "Оберіть країну",
          allowClear: true
        });
        $('input[type="file"]').on('change', function(e){
            $('.file-name').text(e.target.value.split('\\').pop())
        })
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
