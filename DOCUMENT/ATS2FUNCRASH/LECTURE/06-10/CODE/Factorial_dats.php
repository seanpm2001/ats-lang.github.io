<?php
/*
**
** The PHP code is generated by atscc2php
** The starting compilation time is: 2017-9-22: 11h:49m
**
*/
function
_Factorial_patsfun_1__closurerize($env0)
{
  return array(function($cenv, $arg0, $arg1) { return _Factorial_patsfun_1($cenv[1], $arg0, $arg1); }, $env0);
}


function
Factorial_Factorial($arg0)
{
//
  $tmpret0 = NULL;
//
  __patsflab_Factorial:
  $tmpret0 = _Factorial_patsfun_1__closurerize($arg0)[0](_Factorial_patsfun_1__closurerize($arg0), 0, 1);
  return $tmpret0;
} // end-of-function


function
_Factorial_patsfun_1($env0, $arg0, $arg1)
{
//
  $apy0 = NULL;
  $apy1 = NULL;
  $tmpret1 = NULL;
  $tmp2 = NULL;
  $tmp3 = NULL;
  $tmp4 = NULL;
  $tmp5 = NULL;
//
  __patsflab__Factorial_patsfun_1:
  $tmp2 = ats2phppre_lt_int0_int0($arg0, $env0);
  if($tmp2) {
    $tmp3 = ats2phppre_add_int0_int0($arg0, 1);
    $tmp5 = ats2phppre_add_int0_int0($arg0, 1);
    $tmp4 = ats2phppre_mul_int0_int0($arg1, $tmp5);
    // ATStailcalseq_beg
    $apy0 = $tmp3;
    $apy1 = $tmp4;
    $arg0 = $apy0;
    $arg1 = $apy1;
    goto __patsflab__Factorial_patsfun_1;
    // ATStailcalseq_end
  } else {
    $tmpret1 = $arg1;
  } // endif
  return $tmpret1;
} // end-of-function

/* ****** ****** */

/* end-of-compilation-unit */
?>
