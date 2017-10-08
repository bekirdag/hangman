<?php

/**
 * @file
 * Views data file for hangman module.
 */

/**
 * Implements hook_views_data().
 */
function hangman_views_data() {
  $data['hangman']['table']['group'] = t('Hangman');
  $data['hangman']['table']['join'] = array(
    // Exist in all views.
    '#global' => array(),
  );

  $data['hangman']['score'] = array(
    'title' => t('Hangman score'),
    'help' => t('Kepps data for the hangman game user scores'),
    'field' => array(
      'handler' => 'views_handler_hangman_score',
    ),
  );

  return $data;
}
