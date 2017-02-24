
function search(){
	var q = $('#q').val();
	$('div.loading').css('display','block');
	$.ajax({
		url: "/s?q="+q,
		dataType: 'json',

		success: function(result){
		
			if(result){
				var statuses = 	result.statuses;
				for (var i = 0; i < statuses.length;i++) {
					var tweetHtml = '<div class="col s12 m8 offset-m2">'+
						'<div class="card blue-grey darken-1">'+
							'<div class="card-content black-text">'+
								'<img class="img" src="'+statuses[i].profile_image_url+'">'+
								'<span class="card-title black-text">'+statuses[i].name+
								'<a href="http://twitter.com/'+statuses[i].screen_name+'">'+'@'+statuses[i].screen_name+'</a>'+
								'</span>'+
								'<p>'+statuses[i].tweet_text+'</p>'+
								'</div>'+
								'<div class="card-action">'+
								'<span>'+statuses[i].created_at+'</span>'+
								'<a href="'+statuses[i].tweet_url+'">&nbsp;&nbsp;Tweet URL</a>'+
							'</div>'+
						'</div>'+
					'</div>';
					$(".tweets").prepend(tweetHtml);    
				};
			}

        $('div.loading').css('display','none');
    	}
	});	
}