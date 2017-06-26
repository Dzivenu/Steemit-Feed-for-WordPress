jQuery(document).ready(function($) {

	//Autofill the token and id
	var hash = window.location.hash,
        token = hash.substring(14),
        id = token.split('.')[0];
    //If there's a hash then autofill the token and id
    if(hash){
        $('#sfi_config').append('<div id="sfi_config_info"><p><b>Access Token: </b><input type="text" size=58 readonly value="'+token+'" onclick="this.focus();this.select()" title="To copy, click the field then press Ctrl + C (PC) or Cmd + C (Mac)."></p><p><b>User ID: </b><input type="text" size=12 readonly value="'+id+'" onclick="this.focus();this.select()" title="To copy, click the field then press Ctrl + C (PC) or Cmd + C (Mac)."></p><p><i class="fa fa-clipboard" aria-hidden="true"></i>&nbsp; <b><span style="color: red;">Important:</span> Copy and paste</b> these into the fields below and click <b>"Save Changes"</b>.</p></div>');
    }
	
	//Tooltips
	jQuery('#sfi_admin .sfi_tooltip_link').click(function(){
		jQuery(this).siblings('.sfi_tooltip').slideToggle();
	});

	//Shortcode labels
	jQuery('#sfi_admin label').click(function(){
    var $sfi_shortcode = jQuery(this).siblings('.sfi_shortcode');
    if($sfi_shortcode.is(':visible')){
      jQuery(this).siblings('.sfi_shortcode').css('display','none');
    } else {
      jQuery(this).siblings('.sfi_shortcode').css('display','block');
    }  
  });
  jQuery('#sfi_admin label').hover(function(){
    if( jQuery(this).siblings('.sfi_shortcode').length > 0 ){
      jQuery(this).attr('title', 'Click for shortcode option').append('<code class="sfi_shortcode_symbol">[]</code>');
    }
  }, function(){
    jQuery(this).find('.sfi_shortcode_symbol').remove();
  });

	//Scroll to hash for quick links
  jQuery('#sfi_admin a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = jQuery(this.hash);
      target = target.length ? target : this.hash.slice(1);
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

});