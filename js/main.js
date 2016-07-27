//menu dropdown
$('.dropdown').dropdown({transition: 'drop' }).dropdown({ on: 'hover' });

//responsive sidebar
$('.ui.sidebar').first()
  .sidebar('attach events', '.launch-sidebar');

  // Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false, 
  });
});

//accordion small screen menu
$('.ui.accordion')
  .accordion()
;

//modals
 $('.modal-button-hilite').click(function(){
        $('#modal-hilite-specs').modal('show');
    });
 $('.modal-button-hipro').click(function(){
        $('#modal-hipro-specs').modal('show');
    });
 $('.modal-button-hifive').click(function(){
        $('#modal-hifive-specs').modal('show');
    });
 $('.modal-button-start-now').click(function(){
        $('#modal-start-now').modal('show');
    });
 $('.modal-button-partner').click(function(){
      $('#modal-partners-list').modal('show');
    });


$('.ui.form')
  .form({
    fields: {
      first_name: {
        identifier: 'first_name',
        rules: [
          {
            type   : 'empty',
          }
        ]
      },
      last_name: {
        identifier: 'last_name',
        rules: [
          {
            type   : 'empty',
          }
        ]
      },
      email: {
        identifier: 'email',
        rules: [
          {
            type   : 'empty',
          }
        ]
      },
      company: {
        identifier: 'company',
        rules: [
          {
            type   : 'empty',
          }
        ]
      },
      phone: {
        identifier: 'phone',
        rules: [
          {
            type   : 'empty',
          }
        ]
      },
      description: {
        identifier: '00N6100000Gq1GE',
        rules: [
          {
            type   : 'empty',
          },
          {
            type   : 'maxLength[255]',
          }
        ]
      }
    }
  })
;