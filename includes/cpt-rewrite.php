<?php
/**
 * Custom Post Type Date Archives Rewrite class.
 *
 * @package     Custom Post Type Date Archives
 * @subpackage  Classes/CPT_Rewrite
 * @copyright   Copyright (c) 2014, Kees Meijer
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       2.3.0
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Add custom post type date archives rewrite rules.
 *
 * @since 2.3.0
 * @author keesiemeijer
 */
class CPTDA_CPT_Rewrite {

	/**
	 * Custom post types with 'date-archives' support.
	 *
	 * @since 1.0
	 * @var array
	 */
	private $front;

	/**
	 * Custom post types with 'date-archives-feed' support.
	 *
	 * @since 2.2.0
	 * @var array
	 */
	private $permalink_structure;

	/**
	 * Plugin object.
	 *
	 * @since 2.3.0
	 * @var object
	 */
	private $date_structure;


	public function __construct( $post_type = '' ) {
		$this->init( trim( (string) $post_type ) );
	}

	private function init( $post_type ) {
		global $wp_rewrite;

		// Reset values
		$this->reset_permastruct();

		if ( empty( $wp_rewrite->permalink_structure ) || !cptda_is_valid_post_type( $post_type ) ) {
			return;
		}

		$post_type = get_post_type_object( $post_type );

		$this->permalink_structure = $wp_rewrite->permalink_structure;

		$permastruct = $wp_rewrite->get_extra_permastruct( $post_type->name );
		if ( $permastruct ) {
			$permastruct = str_replace( "%{$post_type->name}%", '', (string) $permastruct );
			$this->front = trim( $permastruct, '/' ) ;
		} else {
			$this->reset_permastruct();
		}
	}

	public function reset_permastruct() {
		$this->permalink_structure = '';
		$this->front               = '';
		$this->date_structure      = '';
	}


	public function get_front() {
		return $this->front;
	}

	public function get_date_permastruct() {

		if ( empty( $this->permalink_structure ) || empty( $this->front ) ) {
			$this->reset_permastruct();
			return false;
		}

		// The date permalink must have year, month, and day separated by slashes.
		$endians = array( '%year%/%monthnum%/%day%', '%day%/%monthnum%/%year%', '%monthnum%/%day%/%year%' );

		$this->date_structure = '';
		$date_endian = '';

		foreach ( $endians as $endian ) {
			if ( false !== strpos( $this->permalink_structure, $endian ) ) {
				$date_endian= $endian;
				break;
			}
		}

		if ( empty( $date_endian ) ) {
			$date_endian = '%year%/%monthnum%/%day%';
		}

		/*
		 * Do not allow the date tags and %post_id% to overlap in the permalink
		 * structure. If they do, move the date tags to $front/date/.
		 */
		$front = trailingslashit( $this->front );
		preg_match_all( '/%.+?%/', $this->permalink_structure, $tokens );
		$tok_index = 1;
		foreach ( (array) $tokens[0] as $token ) {
			if ( '%post_id%' == $token && ( $tok_index <= 3 ) ) {
				$front = $front . 'date/';
				break;
			}
			$tok_index++;
		}

		$this->date_structure = $front . $date_endian;

		return $this->date_structure;
	}

	/**
	 * Retrieves the year permalink structure without month and day.
	 *
	 * Gets the date permalink structure and strips out the month and day
	 * permalink structures.
	 *
	 * @since 2.3.0
	 * @access public
	 *
	 * @return false|string False on failure. Year structure on success.
	 */
	public function get_year_permastruct() {
		$structure = $this->get_date_permastruct();

		if ( empty( $structure ) ) {
			return false;
		}

		$structure = str_replace( '%monthnum%', '', $structure );
		$structure = str_replace( '%day%', '', $structure );
		$structure = preg_replace( '#/+#', '/', $structure );

		return $structure;
	}

	/**
	 * Retrieves the month permalink structure without day and with year.
	 *
	 * Gets the date permalink structure and strips out the day permalink
	 * structures. Keeps the year permalink structure.
	 *
	 * @since 2.3.0
	 * @access public
	 *
	 * @return false|string False on failure. Year/Month structure on success.
	 */
	public function get_month_permastruct() {
		$structure = $this->get_date_permastruct();

		if ( empty( $structure ) ) {
			return false;
		}

		$structure = str_replace( '%day%', '', $structure );
		$structure = preg_replace( '#/+#', '/', $structure );

		return $structure;
	}

	/**
	 * Retrieves the day permalink structure with month and year.
	 *
	 * Keeps date permalink structure with all year, month, and day.
	 *
	 * @since 2.3.0
	 * @access public
	 *
	 * @return string|false False on failure. Year/Month/Day structure on success.
	 */
	public function get_day_permastruct() {
		return $this->get_date_permastruct();
	}

}
