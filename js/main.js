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
 $('.modal-button-partner').click(function(){
      $('#modal-partners-list').modal('show');
    });
$('.modal-button-video').click(function(){
      $('#modal-video').modal('show');
    });


$('#contact-sales-form')
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
            type   : 'email',
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
      description: {
        identifier: '00N6100000Gq1GE',
        rules: [
          {
            type   : 'empty',
          }
        ]
      }
    }
  })
;