<?php
 
return [
    'version' => '1.14',
    'domain_now' => ( isset($_SERVER) && isset($_SERVER['HTTP_HOST']) &&  strpos($_SERVER['HTTP_HOST'], 'creators') !== false) ? 'creator' : 'reviewer'  
];