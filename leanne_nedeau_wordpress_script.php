<?php
function enqueue_jquery_from_cdn() {
    /* Step 1: Remove the jQuery included in WP by default.
     * Doc: https://codex.wordpress.org/Function_Reference/wp_deregister_script/
     */
    wp_deregister_script( 'jquery' );
    /* Step 2: Re-add jQuery library with another source.
     * Get version source from Google CDN here:
     * https://developers.google.com/speed/libraries/#jquery
     * Doc: https://developer.wordpress.org/reference/functions/wp_enqueue_script/
     */
    wp_enqueue_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js', '', '1.12.4' );
}
    /* Step 3: Add this function to the WordPress' default script procedure.
     * Doc: https://developer.wordpress.org/reference/functions/add_action/
     */
    add_action( 'wp_enqueue_scripts', 'enqueue_jquery_from_cdn' );
?>