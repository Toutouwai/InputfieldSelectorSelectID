(function($) {

	// Check if this InputfieldSelector row is relevant to ISSI
	function checkIfIdRow($row) {
		var $selected_id_options = $row.find('option:selected').filter('[value=id], [value=parent], [value=has_parent]');
		if($selected_id_options.length) {
			$row.addClass('issi-id-row');
		} else {
			$row.removeClass('issi-id-row');
		}
	}

	// Check all InputfieldSelector rows to see if they are relevant to ISSI
	function checkAllRows() {
		$('.selector-list > .selector-row:not(.selector-template-row)').each(function(index, item) {
			checkIfIdRow($(item));
		});
	}

	// Is the supplied argument a number?
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && !isNaN(n - 0) ;
	}

	$(document).ready(function() {

		// Check for ID rows on DOM ready
		checkAllRows();

		// Check for ID row when selector row select changes
		$(document).on('change', '.selector-list select', function() {
			var $row = $(this).closest('.selector-row');
			checkIfIdRow($row);
		});

		// Check for ID rows after InputfieldSelector AJAX complete
		$(document).ajaxComplete(function(event, xhr, settings) {
			if(settings.url.substring(0, 22) === './?InputfieldSelector=') {
				checkAllRows();
			}
		});

		var $issi_button = $('.issi-open').first();
		var $issi_template = $('.issi-template').first();

		// Show/hide ISSI button
		$(document).on('mouseenter', '.issi-id-row', function() {
			// Move button adjacent to input
			// Set button height dynamically to account for custom tweaks to admin theme
			var $id_input = $(this).find('.opval input[type=text]');
			$issi_button.insertAfter($id_input).height($id_input.outerHeight()).show();
		});
		$(document).on('mouseleave', '.issi-id-row', function() {
			// Put button back where it came from in case row is removed/replaced
			$issi_button.hide().insertBefore($issi_template);
		});

		// ISSI button clicked
		$(document).on('click', '.issi-open', function() {
			var $input = $(this).siblings('input[type=text]');
			vex.dialog.open({
				contentClassName: 'issi-vex',
				unsafeMessage: $issi_template.html(),
				afterOpen: function() {
					var $issi_input = $('input[name=_issi_select]').first();
					// Set the current value if any
					var current_value = $input.val();
					if(isNumber(current_value)) {
						$issi_input.val(current_value);
						$issi_input.siblings('.aos_pagelist_unselect').removeClass('empty');
					}
					// Init the inputfield
					InputfieldPageListSelect.init($issi_input);
					// Focus Vex OK button after selection is made
					$issi_input.change(function() {
						$('button[type=submit].vex-dialog-button-primary').focus();
					});
				},
				callback: function(data) {
					if(data) {
						$input.val($('input[name=_issi_select]').first().val()).change();
					}
				}
			});
		});

	});

}(jQuery));
