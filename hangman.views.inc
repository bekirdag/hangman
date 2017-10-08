<?php

/**
 * @file
 * The views handler for the hangman module.
 */

/**
 * Implements hook_views_data().
 */
function hangman_views_data() {
  $data = array();
  $data['hangman_scores']['table']['group'] = t('Hangman');

  $data['hangman_scores']['table']['base'] = array(
    'field' => 'id',
    'title' => t('Hangman user scores'),
    'help' => t('Stores user scores'),
  );

  $data['hangman_scores']['table']['join'] = array(
    // Exist in all views.
    '#global' => array(),
  );

  $data['hangman_scores']['score'] = array(
    'title' => t('Hangman score'),
    'help' => t('Keeps data for the hangman game user scores'),
    'field' => array(
      'handler' => 'views_handler_hangman_score',
    ),
    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
      'name field' => 'score',
      'numeric' => TRUE,
      'validate type' => 'score',
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
  );

  $data['hangman_scores']['name'] = array(
    'title' => t('User name'),
    'help' => t('Game user name'),
    'field' => array(
      'handler' => 'views_handler_field',
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_string',
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
  );

  return $data;
}
