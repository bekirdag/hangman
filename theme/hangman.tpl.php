<?php

/**
 * @file
 * Hangman html main structure.
 */
?>
<div id="hangman_main_wrapper">
  <div id="hangman_info_wrapper">
    <div id="message"></div>
    <div id="new_game">NEW GAME</div>
    <div id="score_wrapper">Score: <div id="score">100</div></div>
    <div id="status"></div>
  </div>
  <div id="hangman_alphabet">
    <ul>
      <?php
        $letters = array_merge(range(0, 9), range('A', 'Z'));
        foreach ($letters as $letter) {
          print "<li>" . $letter . "</li>";
        }
      ?>
    </ul>
  </div>
  <div id="hangman_letters_wrapper"></div>

</div>
