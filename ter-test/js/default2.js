
if( !window.location.href.match(/^https/) ){
	document.write('<script type="text/javascript" src="/share/share_channels.js" charset="Shift_JIS"></script>');
	document.write('<script type="text/javascript" src="/share/share_button_init.js" charset="Shift_JIS"></script>');
	document.write('<script type="text/javascript" src="/share/share_button_float.js" charset="Shift_JIS"></script>');
}

if( typeof(aqtracker_event) != 'function' ) aqtracker_event = function(){}

function __share_button_init(){
	var links_html = '';
	for( var i = 0; i < __share_links.length; i++ ){
		links_html += '<table border="0" cellpadding="0" cellspacing="0" style="display:inline-block;_display:inline;_zoom:1;';
		links_html += 'margin:2px ' + __share_links_margin + ';"><tr><td><img src="/share/images/' + __share_links[i].icon + '.gif" border="0" style="margin:2px;"></td><td><img src="/share/images/arrow.gif" border="0" style="margin:2px;"></td><td><a href="#" onclick="aqtracker_event(\'/share_button/' + __share_links[i].type + '/?url=' + encodeURIComponent( window.location.href ) + '\');return __share_button_click(\'' + __share_links[i].type + '\')">' + __share_links[i].name + '</a></td></tr></table>';
	}
	var share_button = new ShareButton();
	links_html = '<div style="border:1px solid #d0d0d0;width:400px;"><div style="border:1px solid #bbbbbb;background-color:#ffffff;"><table border="0" cellpadding="0" cellspacing="0"><tr><td align="left" width="40"><img src="/share/images/fukidashi.gif" border="0" style="margin:10px;"></td><td align="left" style="color:#3c5f8c;font-weight:bold;font-size:12px;" width="330">このページを共有</td><td align="right" width="30"><a href="#" id="id_share_window_close_button"><img src="/share/images/close.gif" border="0" style="margin:10px;"></a></td></tr><tr><td colspan="3" align="center"><input type="text" name="" value="' + window.location.href + '" style="font-size:12px;width:370px;margin:0 10px 10px;padding:3px;border:1px solid #cccccc;" readonly></td></tr><tr><td colspan="3" align="left" style="color:#333333;font-weight:normal;font-size:12px;" width="400">' + links_html + '</td></tr></table></div></div>';
	share_button.init({
		b: {
			size: {
				width: 158,
				height: 21
			},
			right: 16,
			top: 0,
			image_path: '/share/images/share_button_10.gif'
		},
		w: {
			html: links_html,
			close_anchor_id: 'id_share_window_close_button'
		},
		animatabled: true
	});
}
