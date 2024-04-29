var raw_keyword = string.split(';');
var search_keyword = '', level = '', media = '', format = '', raw_level = '', raw_media = '', raw_format = '';
var output_string;
var count_filters = 0;

var temp;

if (raw_keyword[0] == 'keyword=&nbsp') {
	// If a user has only entered a query with no filters, this will output the search terms:
	search_keyword = raw_keyword[1];
}
else {
	// If there are filters applied, this will get the search terms:
	search_keyword = raw_keyword[0];
	
	search_keyword = search_keyword.split(':');
	if (search_keyword.length > 1) {
		search_keyword = jQuery.trim(search_keyword[1]);
	}
	
	for (i = 0; i < raw_keyword.length ; i++) {
		if (raw_keyword[i].indexOf('LEVEL_DESC') > 0) {
			raw_level = raw_keyword[i];
			raw_level = raw_level.split(' ');
			level = raw_level[3];
			
			if (level == 'FONDS') {
				level = 'Fonds';
			}
			
			if (level == 'SOUS-FONDS') {
				level = 'Sous Fonds';
			}
			
			count_filters++;
		}
		
		if (raw_keyword[i].indexOf('IMAGE_CHECK') > 0) {
			raw_media = raw_keyword[i];
			raw_media = raw_media.split(' ');
			media = raw_media[2];
			count_filters++;
		}
		
		if (raw_keyword[i].indexOf('AV_CHECK') > 0) {
			raw_media = raw_keyword[i];
			raw_media = raw_media.split(' ');
			media = raw_media[2];
			count_filters++;
		}
		
		if (raw_keyword[i].indexOf('FORMAT') > 0 || raw_keyword[i].indexOf('PHYSICAL_DESC') > 0) {
			raw_format = raw_keyword[i];
			raw_format = raw_format.split(' ');
			format = raw_format; [2];
			
			format = $.trim(format);
			
			if (format == 'NOT FORMAT @') {
				format = 'Textual Documents';
			}
			
			if (format == 'FORMAT FILM RECORDING') {
				format = 'Film Recordings';
			}
			
			if (format == 'FORMAT PHOTOGRAPHIC IMAGE') {
				format = 'Photographic Images';
			}
			
			if (format == 'FORMAT SOUND RECORDING') {
				format = 'Sound Recordings';
			}
			
			if (format == 'FORMAT VIDEO RECORDING') {
				format = 'Video Recordings';
			}
			
			if (format == 'PHYSICAL_DESC PLANS') {
				format = 'Plans';
			}
			
			if (format == 'FORMAT WORKS OF ART PAPER') {
				format = 'Works of Art: Paper';
			}
			
			if (format == 'FORMAT WORKS OF ART OTHER MEDIUM') {
				format = 'Works of Art: Other Medium';
			}
			
			
			count_filters++;
		}
	}
}

// Advanced Search
if (raw_keyword[0].indexOf('Title:') != -1 || raw_keyword[0].indexOf('Reference:') != -1 || raw_keyword[0].indexOf('Class:') != -1 || raw_keyword[0].indexOf('Level') != -1 || raw_keyword[0].indexOf('Format') != -1) {
	search_keyword = raw_keyword[1];
} 


output_string = '<strong><span id="search-keyword">'
output_string += search_keyword;
output_string += '</span></strong> ';

if (level != '' && level != undefined) {
	output_string += 'and filtered on the level ';
	output_string += '<strong>'+level+'</strong> ';
}

// if (date != '' && date != undefined) {
	// output_string += 'in between the years ';
	// output_string += '<strong>'+date+'</strong> ';
// }

if (format != '' && format != undefined) {
	output_string += 'on the format ';
	output_string += '<strong>'+format+'</strong> ';
}

// Output
document.write(output_string);