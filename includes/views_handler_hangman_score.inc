<?php

/**
 * @file
 * Definition of views_handler_field_numeric.
 */

/**
 * Render a field as a numeric value.
 *
 * Definition terms:
 * - float: If true this field contains a decimal value. If unset this field
 *          will be assumed to be integer.
 *
 * @ingroup views_field_handlers
 */
class views_handler_hangman_score extends views_handler_field {

  /**
   * Default options form function.
   */
  public function options_form(&$form, &$form_state) {
    parent::options_form($form, $form_state);

  }

  /**
   * Default render function.
   */
  public function render($values) {
    $value = $this->get_value($values);
    $result = $value;
    return $result;
  }

}
