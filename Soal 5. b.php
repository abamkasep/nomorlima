<?php
foreach(range(1, 99) as $number) {
  if ($number % 3 != 0 && $number % 5 != 0 && ($number % 3 != 0 && $number % 5 != 0) {
    echo $number . '<br>';
    continue;
  }
  if ($number % 3 == 0) echo 'Sentosa';
  if ($number % 5 == 0) echo 'Bandung';
  if ($number % 3 == 0 && $number % 5 == 0) echo 'SentosaBandung';
  echo '<br>';
}

?>