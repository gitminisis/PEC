/* Filters Persistance */
$(document).ready(function(){
	/*
		These variables are pulled from the search_formatting.js file.
	*/
	
	// Levels:
	if (raw_level !== 'undefined') {
		if (raw_level[3] == 'FONDS') {
			$('#LEVEL_DESC_FONDS').prop('checked', true);
			$('#apply_level_filter').addClass('disabled').prop('disabled', true);
			$('#apply_level_filter').attr('value','Filter Applied');
		}
		if (raw_level[3] == 'SOUS-FONDS') {
			$('#LEVEL_DESC_SOUS-FONDS').prop('checked', true);
			$('#apply_level_filter').addClass('disabled').prop('disabled', true);
			$('#apply_level_filter').attr('value','Filter Applied');
		}
		if (raw_level[3] == 'SERIES') {
			$('#LEVEL_DESC_SERIES').prop('checked', true);
			$('#apply_level_filter').addClass('disabled').prop('disabled', true);
			$('#apply_level_filter').attr('value','Filter Applied');
		}
	
		if (raw_level[3] == 'SUB-SERIES') {
			$('#LEVEL_DESC_SUB-SERIES').prop('checked', true);
			$('#apply_level_filter').addClass('disabled').prop('disabled', true);
			$('#apply_level_filter').attr('value','Filter Applied');
		}
		
		if (raw_level[3] == 'SUB-SUB-SERIES') {
			$('#LEVEL_DESC_SUB-SUB-SERIES').prop('checked', true);
			$('#apply_level_filter').addClass('disabled').prop('disabled', true);
			$('#apply_level_filter').attr('value','Filter Applied');
		}
		
		if (raw_level[3] == 'COMPONENT') {
			$('#LEVEL_DESC_COMPONENT').prop('checked', true);
			$('#apply_level_filter').addClass('disabled').prop('disabled', true);
			$('#apply_level_filter').attr('value','Filter Applied');
		}
		
		if (raw_level[3] == 'FILE') {
			$('#LEVEL_DESC_FILE').prop('checked', true);
			$('#apply_level_filter').addClass('disabled').prop('disabled', true);
			$('#apply_level_filter').attr('value','Filter Applied');
		}
		
		if (raw_level[3] == 'ITEM') {
			$('#LEVEL_DESC_ITEM').prop('checked', true);
			$('#apply_level_filter').addClass('disabled').prop('disabled', true);
			$('#apply_level_filter').attr('value','Filter Applied');
		}
	}
	// // End Levels
	
	//FORMAT:
	if (raw_format !== 'undefined') {
		if (raw_format[2] == 'ARCHITECTURAL DRAWING') {
			$('#format_ARCHITECTURAL_DRAWING').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		if (raw_format[2] == 'CARTOGRAPHIC MATERIAL') {
			$('#format_CARTOGRAPHIC_MATERIAL').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		if (raw_format[2] == 'GRAPHIC MATERIAL') {
			$('#format_GRAPHIC_MATERIAL').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
	
		if (raw_format[2] == 'MOVING IMAGES') {
			$('#format_MOVING_IMAGES').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		
		if (raw_format[2] == 'MULTIPLE media') {
			$('#format_MULTIPLE_media').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		
		if (raw_format[2] == 'OBJECT') {
			$('#format_OBJECT').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		
		if (raw_format[2] == 'PHILATELIC RECORD') {
			$('#format_PHILATELIC_RECORD').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		
		if (raw_format[2] == 'SOUND RECORDING') {
			$('#format_SOUND_RECORDING').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		if (raw_format[2] == 'TECHNICAL DRAWING') {
			$('#format_TECHNICAL_DRAWING').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		if (raw_format[2] == 'TEXTUAL RECORD') {
			$('#format_TEXTUAL_RECORD').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
	}
	// // End formats
	


	
	//media type
if (raw_media !== 'undefined') {
		if (raw_media[2] == 'IMAGE_CHECK') {
			$('#IMAGE_CHECK_X').prop('checked', true);
			$('#apply_media_filter').addClass('disabled').prop('disabled', true);
			$('#apply_media_filter').attr('value','Filter Applied');
		}
	
		if (raw_media[2] == 'AV_CHECK') {
			$('#AV_CHECK_X').prop('checked', true);
			$('#apply_filter_media').addClass('disabled').prop('disabled', true);
			$('#apply_filter_media').attr('value','Filter Applied');
		}
		
		
		
		
		
		
	}

	// Dates:
	// if (raw_date !== 'undefined') {		
		// if (raw_date[3] == 'PRE 1700') {
			// $('#DATE_FILTER_CL_PRE_1700').prop('checked', true);
			// $('#apply_date_filter').addClass('disabled');
			// $('#apply_date_filter').attr('value','Filter Applied');
		// }
		
		// if (raw_date[3] == '1700-1800') {
			// $('#DATE_FILTER_CL_1700-1800').prop('checked', true);
			// $('#apply_date_filter').addClass('disabled');
			// $('#apply_date_filter').attr('value','Filter Applied');
		// }
		
		// if (raw_date[3] == '1800-1840') {
			// $('#DATE_FILTER_CL_1800-1840').prop('checked', true);
			// $('#apply_date_filter').addClass('disabled');
			// $('#apply_date_filter').attr('value','Filter Applied');
		// }
		
		// if (raw_date[3] == '1840-1880') {
			// $('#DATE_FILTER_CL_1840-1880').prop('checked', true);
			// $('#apply_date_filter').addClass('disabled');
			// $('#apply_date_filter').attr('value','Filter Applied');
		// }
		
		// if (raw_date[3] == '1880-1920') {
			// $('#DATE_FILTER_CL_1880-1920').prop('checked', true);
			// $('#apply_date_filter').addClass('disabled');
			// $('#apply_date_filter').attr('value','Filter Applied');
		// }
		
		// if (raw_date[3] == '1920-1960') {
			// $('#DATE_FILTER_CL_1920-1960').prop('checked', true);
			// $('#apply_date_filter').addClass('disabled');
			// $('#apply_date_filter').attr('value','Filter Applied');
		// }
		// if (raw_date[3] == '1960-2000') {
			// $('#DATE_FILTER_CL_1960-2000').prop('checked', true);
			// $('#apply_date_filter').addClass('disabled');
			// $('#apply_date_filter').attr('value','Filter Applied');
		// }
		// if (raw_date[3] == '2000-PRESENT') {
			// $('#DATE_FILTER_CL_2000-PRESENT').prop('checked', true);
			// $('#apply_date_filter').addClass('disabled');
			// $('#apply_date_filter').attr('value','Filter Applied');
		// }
	// }
	// End Dates
	
	
	// Formats
	if (format !== 'undefined') {
		if (format == 'Textual Documents') {
			$('#format-text').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		
		if (format == 'Film Recordings') {
			$('#format-film').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		
		if (format == 'Photographic Images') {
			$('#format-photo').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		
		if (format == 'Sound Recordings') {
			$('#format-sound').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		
		if (format == 'Video Recordings') {
			$('#format-video').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		
		if (format == 'Plans') {
			$('#format-plans').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		
		if (format == 'Works of Art: Paper') {
			$('#format--paper-art').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
		
		if (format == 'Works of Art: Other Medium') {
			$('#format-other-art').prop('checked', true);
			$('#apply_format_filter').addClass('disabled');
			$('#apply_format_filter').attr('value','Filter Applied');
		}
	}
	// End Formats
});
/* End Filters Persistance */