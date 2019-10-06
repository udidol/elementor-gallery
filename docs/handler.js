$( document ).ready( () => {
	$( '#menuToggle' ).on( 'click', ( event ) => {
		event.stopPropagation();
		$( '#nav' ).fadeToggle( 200 );
	} );

	$( document ).on( 'click', () => {
		$( '#nav' ).fadeOut( 200 );
	} );

	$( '#nav' ).click( ( event ) => {
		event.stopPropagation();
	} );
} );

const numberControl = ( galleryObject, settingSelector, gallerySetting ) => {
	const $input = $( settingSelector + ' .number-control-input' );

	$( settingSelector + ' .minus' ).click( () => {
		let count = parseInt( $input.val() ) - 5;

		count = count < 0 ? 0 : count;

		$input.val( count );
		$input.change();

		galleryObject.setSettings( gallerySetting, count );

		return false;
	} );

	$( settingSelector + ' .plus' ).click( () => {
		$input.val( parseInt( $input.val() ) + 5 );
		$input.change();

		galleryObject.setSettings( gallerySetting, $input.val() );

		return false;
	} );

	$( settingSelector + ' .number-control-input' ).on( 'change', () => {
		let count = parseInt( $input.val() );

		count = count < 0 ? 0 : count;

		galleryObject.setSettings( gallerySetting, count );

		return false;
	} );
};
