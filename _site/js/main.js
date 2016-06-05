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

$('.ui.accordion')
  .accordion()
;
// World Map
jQuery(document).ready(function() {
jQuery('#vmap').vectorMap(
	{
	    map: 'world_en',
	    backgroundColor: 'none',
	    borderColor: '#818181',
	    borderOpacity: 0.25,
	    borderWidth: 1,
	    color: '#f4f3f0',
	    enableZoom: false,
	    hoverColor: null,
	    hoverOpacity: null,
	    normalizeFunction: 'linear',
	    scaleColors: ['#b6d6ff', '#005ace'],
	    selectedColor: '#FF7638',
	    selectedRegions: ['US', 'ZA', 'FR','AD','AL','AT','RS','BA','BE','BG','BY','CH','CY','CZ','DE','DK','EE','ES','FI','FR','GB','GR','HR','HU','IE','IS','IT','LI','LT','LU','LV','MC','MD','ME','MK','MT','NL','NO','PL','PT','RO','SE','SI','SK','SM','UA'],

	    showTooltip: false,
	    onRegionClick: function(element, code, region)
	    {
 // if it's not in the approved list, do nothing, else handle it
    if (states.toLowerCase().indexOf(code) <= -1) {
        event.preventDefault();
    }
	    }
	});
});