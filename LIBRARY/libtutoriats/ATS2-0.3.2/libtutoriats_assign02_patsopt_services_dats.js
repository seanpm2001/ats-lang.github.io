/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2016-8-18: 10h:43m
**
*/

/* ATSextcode_beg() */
//
function
assign02_pats_key2source(key)
{
//
var
source =
document.getElementById(key+"_source");
//
if(source.cdata !== undefined)
  return source.cdata; else return source.value;
//
} /* end of [assign02_pats_key2source] */
function
assign02_pats_key2output_set(key, msg)
{
//
return document.getElementById(key+"_output").value = msg;
//
} /* end of [assign02_pats_key2output_set] */
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
assign02_patsopt_services_initize
  (key)
{
//
var
source = 
document.getElementById(key+"_source");
var
output = 
document.getElementById(key+"_output");
//
output.rows = source.rows;
output.cols = source.cols;
//
var
source2 = 
document.getElementById(key+"_source2");
source2.style.overflow = "auto";
source2.style.maxWidth = String(source.clientWidth)+"px";
source2.style.maxHeight = String(source.clientHeight)+"px";
//
var
output2 = 
document.getElementById(key+"_output2");
output2.style.overflow = "auto";
output2.style.maxWidth = String(source.clientWidth)+"px";
output2.style.maxHeight = String(source.clientHeight)+"px";
//
} /* end of [assign02_patsopt_services_initize] */
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
function
assign02_pats2xhtml_toggle_onclick
  (key)
{
//
var
toggle =
document.getElementById(key+"_table_tr1").hidden
//
if
(toggle)
{
//
document.getElementById
  (key+"_table_tr1").hidden = false;
document.getElementById
  (key+"_table_tr2").hidden = (true);
return (0) ; // indicating success
//
} else {
//
var
source =
document.getElementById(key+"_source");
if(source.cdata===undefined)
{
  return assign02_pats2xhtml_eval_onclick(key);
} else {
  source.readOnly = false;
  source.value = source.cdata; source.cdata = undefined;
} /* end of [if] */
//
} /* end of [if] */
//
} /* end of [assign02_pats2xhtml_toggle_onclick] */
/* ATSextcode_end() */

/* ATSextcode_beg() */
function
assign02_patsopt_tc_do_reply
  (key, reply)
{
//
var
comparr =
JSON.parse(decodeURIComponent(reply));
//
var comparr0 = comparr[0];
var comparr1 = comparr[1];
//
document.getElementById(key+"_output").value = comparr1;
document.getElementById(key+"_table_tr1").hidden = false;
document.getElementById(key+"_table_tr2").hidden = (true);
//
/*
if(comparr0===0)
{
  alert("Patsopt_tc passed!");
}
*/
if(comparr0 > 0)
{
//
var
source =
document.getElementById(key+"_source");
//
if
(source.cdata===undefined)
{
  source.cdata = source.value;
  source.value =
  assign02_pats_code_lncmnt
    (0/*TEXT*/, source.cdata, 0/*nskip*/)
  source.readOnly = true; // HX: disabling editing
}
//
} /* end of [if] */
//
return comparr0;
} /* assign02_patsopt_tc_do_reply */
/* ATSextcode_end() */

/* ATSextcode_beg() */
function
assign02_patsopt_cc_do_reply
  (key, reply)
{
//
var
comparr =
JSON.parse(decodeURIComponent(reply));
//
var comparr0 = comparr[0];
var comparr1 = comparr[1];
//
document.getElementById(key+"_output").value = comparr1;
document.getElementById(key+"_table_tr1").hidden = false;
document.getElementById(key+"_table_tr2").hidden = (true);
//
if(comparr0 > 0)
{
//
var
source =
document.getElementById(key+"_source");
//
if
(source.cdata===undefined)
{
  source.cdata = source.value;
  source.value =
  assign02_pats_code_lncmnt
    (0/*TEXT*/, source.cdata, 0/*nskip*/)
  source.readOnly = true; // HX: disabling editing
}
//
} /* end of [if] */
//
return comparr0;
//
} /* assign02_patsopt_cc_do_reply */
/* ATSextcode_end() */

/* ATSextcode_beg() */
function
assign02_patsopt_cc2js_do_reply
  (key, reply)
{
//
var
comparr =
JSON.parse(decodeURIComponent(reply));
//
var comparr0 = comparr[0];
var comparr1 = comparr[1];
//
document.getElementById(key+"_output").value = comparr1;
document.getElementById(key+"_table_tr1").hidden = false;
document.getElementById(key+"_table_tr2").hidden = (true);
//
if(comparr0===0)
{
//
try {
  eval(comparr1);
} catch(error) {
  alert("ERROR!!!\n" + String(error));
} /* end of [try] */
//
}
if(comparr0 > 0)
{
//
var
source =
document.getElementById(key+"_source");
//
if
(source.cdata===undefined)
{
  source.cdata = source.value;
  source.value =
  assign02_pats_code_lncmnt
    (0/*TEXT*/, source.cdata, 0/*nskip*/)
  source.readOnly = true; // HX: disabling editing
}
//
} /* end of [if] */
//
return comparr0;
} /* assign02_patsopt_cc2js_do_reply */
/* ATSextcode_end() */

/* ATSextcode_beg() */
function
assign02_pats2xhtml_eval_do_reply
  (key, reply)
{
//
var
comparr =
JSON.parse
(
decodeURIComponent(reply)
);
//
var comparr0 = comparr[0];
var comparr1 = comparr[1];
//
if(comparr0===0)
{
//
document.getElementById
(
  key+"_source2"
).textContent =
  assign02_pats_key2source(key);
//
// alert(comparr1);
//
document.getElementById
  (key+"_output2").innerHTML =
  assign02_pats_code_lncmnt
  (
    1/*HTML*/, comparr1, 1/*nskip*/
  ); // assign02_pats_code_lncmnt
//
document.getElementById
  (key+"_table_tr1").hidden = true;
document.getElementById
  (key+"_table_tr2").hidden = false;
//
} /* end of [if] */
//
if(comparr0 > 0) {
//
var
source =
document.getElementById(key+"_source");
//
source.cdata = source.value;
source.value =
assign02_pats_code_lncmnt
  (0/*TEXT*/, source.cdata, 0/*nskip*/)
//
source.readOnly = true; // HX: disabling editing
//
var
output =
document.getElementById(key+"_output");
output.value = "Pats2xhtml failed!\n\n" + comparr1;
//
} /* end of [if] */
//
return comparr0;
} /* assign02_pats2xhtml_eval_do_reply */
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
assign02_patssrc_saveAs_onclick
  (key)
{
//
var
code =
assign02_pats_key2source(key);
//
var
blob =
new
Blob([code], {type: 'text/plain'});
//
var
input =
document.getElementById
  (key+"_patssrc_saveAs_input");
//
var
fname = input.value;
if(!fname) fname = input.placeholder;
//
return saveAs(blob, fname);
//
} /* end of [assign02_patssrc_saveAs_onclick] */
//
/* ATSextcode_end() */

function
__patsfun_31__31__1__closurerize(env0, env1)
{
  return [function(cenv) { return __patsfun_31__31__1(cenv[1], cenv[2]); }, env0, env1];
}


function
__patsfun_46__46__1__closurerize(env0, env1)
{
  return [function(cenv) { return __patsfun_46__46__1(cenv[1], cenv[2]); }, env0, env1];
}


function
__patsfun_61__61__1__closurerize(env0, env1)
{
  return [function(cenv) { return __patsfun_61__61__1(cenv[1], cenv[2]); }, env0, env1];
}


function
__patsfun_76__76__1__closurerize(env0, env1)
{
  return [function(cenv) { return __patsfun_76__76__1(cenv[1], cenv[2]); }, env0, env1];
}


function
assign02_pats_code_lncmnt(arg0, arg1, arg2)
{
//
// knd = 0
  var tmpret0
  var tmp1
  var tmp5
  var tmp6
  var tmp16
  var tmp21
  var tmp81
  var tmplab, tmplab_js
//
  // __patsflab_assign02_pats_code_lncmnt
  tmp1 = ats2jspre_JSarray_nil();
  tmp5 = ats2jspre_string_length(arg1);
  tmp6 = ats2jspre_string_charCodeAt("\n", 0);
  tmp16 = loop_3(arg1, tmp5, tmp6, 0, 0, 1);
  tmp21 = f0_4(tmp16, 0);
  tmp81 = loop0_10(arg2, tmp1, arg1, tmp5, tmp6, 0, 0);
  loop1_12(arg0, tmp1, arg1, tmp5, tmp6, tmp21, tmp81, 1);
  tmpret0 = ats2jspre_JSarray_join(tmp1);
  return tmpret0;
} // end-of-function


function
loop_3(env0, env1, env2, arg0, arg1, arg2)
{
//
// knd = 1
  var apy0
  var apy1
  var apy2
  var tmpret7
  var tmp8
  var tmp9
  var tmp10
  var tmp11
  var tmp12
  var tmp13
  var tmp14
  var tmp15
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_loop_3
    tmp8 = ats2jspre_lt_int1_int1(arg0, env1);
    if(tmp8) {
      tmp10 = ats2jspre_string_charCodeAt(env0, arg0);
      tmp9 = ats2jspre_eq_int0_int0(tmp10, env2);
      if(tmp9) {
        tmp11 = ats2jspre_add_int1_int1(arg0, 1);
        tmp12 = ats2jspre_add_int1_int1(arg2, 1);
        // ATStailcalseq_beg
        apy0 = tmp11;
        apy1 = 0;
        apy2 = tmp12;
        arg0 = apy0;
        arg1 = apy1;
        arg2 = apy2;
        funlab_js = 1; // __patsflab_loop_3
        // ATStailcalseq_end
      } else {
        tmp13 = ats2jspre_add_int1_int1(arg0, 1);
        tmp14 = ats2jspre_add_int1_int1(arg1, 1);
        // ATStailcalseq_beg
        apy0 = tmp13;
        apy1 = tmp14;
        apy2 = arg2;
        arg0 = apy0;
        arg1 = apy1;
        arg2 = apy2;
        funlab_js = 1; // __patsflab_loop_3
        // ATStailcalseq_end
      } // endif
    } else {
      tmp15 = ats2jspre_eq_int1_int1(arg1, 0);
      if(tmp15) {
        tmpret7 = arg2;
      } else {
        tmpret7 = ats2jspre_add_int1_int1(arg2, 1);
      } // endif
    } // endif
    if (funlab_js > 0) continue; else return tmpret7;
  } // endwhile-fun
} // end-of-function


function
f0_4(arg0, arg1)
{
//
// knd = 1
  var apy0
  var apy1
  var tmpret17
  var tmp18
  var tmp19
  var tmp20
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_f0_4
    tmp18 = ats2jspre_gt_int0_int0(arg0, 0);
    if(tmp18) {
      tmp19 = ats2jspre_div_int0_int0(arg0, 10);
      tmp20 = ats2jspre_add_int1_int1(arg1, 1);
      // ATStailcalseq_beg
      apy0 = tmp19;
      apy1 = tmp20;
      arg0 = apy0;
      arg1 = apy1;
      funlab_js = 1; // __patsflab_f0_4
      // ATStailcalseq_end
    } else {
      tmpret17 = arg1;
    } // endif
    if (funlab_js > 0) continue; else return tmpret17;
  } // endwhile-fun
} // end-of-function


function
prline_5(env0, env1, arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_prline_5
  prline_6(env0, arg0, env1);
  return/*_void*/;
} // end-of-function


function
prline_6(env0, arg0, arg1)
{
//
// knd = 0
  var tmp24
  var tmp26
  var tmp27
  var tmp34
  var tmplab, tmplab_js
//
  // __patsflab_prline_6
  tmp24 = ats2jspre_gt_int1_int1(arg1, 0);
  if(tmp24) {
    tmp26 = ats2jspre_div_int0_int0(arg0, 10);
    tmp27 = ats2jspre_sub_int1_int1(arg1, 1);
    prline_6(env0, tmp26, tmp27);
    tmp34 = ats2jspre_mod_int0_int0(arg0, 10);
    _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_int__7__1(env0, tmp34);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_int__7__1(env0, arg0)
{
//
// knd = 0
  var tmp29__1
  var tmplab, tmplab_js
//
  // __patsflab_gprint_int
  tmp29__1 = ats2jspre_tostring(arg0);
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__1(env0, tmp29__1);
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__1(env0, arg0)
{
//
// knd = 0
  var tmp3__1
  var tmplab, tmplab_js
//
  // __patsflab_gprint_string
  tmp3__1 = ats2jspre_JSarray_push(env0, arg0);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
loop0_10(env0, env1, env2, env3, env4, arg0, arg1)
{
//
// knd = 1
  var apy0
  var apy1
  var tmpret35
  var tmp36
  var tmp37
  var tmp38
  var tmp42
  var tmp43
  var tmp44
  var tmp45
  var tmp46
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_loop0_10
    tmp36 = ats2jspre_lt_int1_int1(arg0, env3);
    if(tmp36) {
      tmp37 = ats2jspre_lt_int0_int0(arg1, env0);
      if(tmp37) {
        tmp38 = ats2jspre_string_charCodeAt(env2, arg0);
        tmp42 = ats2jspre_string_fromCharCode_1(tmp38);
        _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__2(env1, tmp42);
        tmp43 = ats2jspre_neq_int0_int0(tmp38, env4);
        if(tmp43) {
          tmp44 = ats2jspre_add_int1_int1(arg0, 1);
          // ATStailcalseq_beg
          apy0 = tmp44;
          apy1 = arg1;
          arg0 = apy0;
          arg1 = apy1;
          funlab_js = 1; // __patsflab_loop0_10
          // ATStailcalseq_end
        } else {
          tmp45 = ats2jspre_add_int1_int1(arg0, 1);
          tmp46 = ats2jspre_add_int0_int0(arg1, 1);
          // ATStailcalseq_beg
          apy0 = tmp45;
          apy1 = tmp46;
          arg0 = apy0;
          arg1 = apy1;
          funlab_js = 1; // __patsflab_loop0_10
          // ATStailcalseq_end
        } // endif
      } else {
        tmpret35 = arg0;
      } // endif
    } else {
      tmpret35 = arg0;
    } // endif
    if (funlab_js > 0) continue; else return tmpret35;
  } // endwhile-fun
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__2(env0, arg0)
{
//
// knd = 0
  var tmp3__2
  var tmplab, tmplab_js
//
  // __patsflab_gprint_string
  tmp3__2 = ats2jspre_JSarray_push(env0, arg0);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
loop1_12(env0, env1, env2, env3, env4, env5, arg0, arg1)
{
//
// knd = 2
  var apy0
  var apy1
  var tmp48
  var tmp50
  var tmp54
  var tmp59
  var tmp63
  var tmp66
  var a2rg0
  var a2rg1
  var a2py0
  var a2py1
  var tmp68
  var tmp69
  var tmp70
  var tmp75
  var tmp79
  var tmp80
  var funlab_js
  var tmplab, tmplab_js
//
  funlab_js = 1;
  while(true) {
    switch(funlab_js) {
      case 1: {
        funlab_js = 0;
        tmp48 = ats2jspre_lt_int1_int1(arg0, env3);
        if(tmp48) {
          tmp50 = ats2jspre_eq_int0_int0(env0, 0);
          if(tmp50) {
            _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__3(env1, "(*");
          } else {
            // ATSINSmove_void
          } // endif
          tmp54 = ats2jspre_eq_int0_int0(env0, 1);
          if(tmp54) {
            _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__4(env1, "<span class=\"comment\">");
          } else {
            // ATSINSmove_void
          } // endif
          prline_5(env1, env5, arg1);
          tmp59 = ats2jspre_eq_int0_int0(env0, 0);
          if(tmp59) {
            _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__5(env1, "*) ");
          } else {
            // ATSINSmove_void
          } // endif
          tmp63 = ats2jspre_eq_int0_int0(env0, 1);
          if(tmp63) {
            _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__6(env1, ": </span>");
          } else {
            // ATSINSmove_void
          } // endif
          tmp66 = ats2jspre_add_int0_int0(arg1, 1);
          // ATStailcalseq_beg
          a2py0 = arg0;
          a2py1 = tmp66;
          a2rg0 = a2py0;
          a2rg1 = a2py1;
          funlab_js = 2; // __patsflab_loop2_13
          // ATStailcalseq_end
        } else {
          // ATSINSmove_void
        } // endif
        if (funlab_js > 0) continue; else return/*_void*/;
      } // end-of-case
      case 2: {
        funlab_js = 0;
        tmp68 = ats2jspre_lt_int1_int1(a2rg0, env3);
        if(tmp68) {
          tmp69 = ats2jspre_string_charCodeAt(env2, a2rg0);
          tmp70 = ats2jspre_eq_int0_int0(tmp69, env4);
          if(tmp70) {
            _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_newline__2__1(env1);
            tmp75 = ats2jspre_add_int1_int1(a2rg0, 1);
            // ATStailcalseq_beg
            apy0 = tmp75;
            apy1 = a2rg1;
            arg0 = apy0;
            arg1 = apy1;
            funlab_js = 1; // __patsflab_loop1_12
            // ATStailcalseq_end
          } else {
            tmp79 = ats2jspre_string_fromCharCode_1(tmp69);
            _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__8(env1, tmp79);
            tmp80 = ats2jspre_add_int1_int1(a2rg0, 1);
            // ATStailcalseq_beg
            a2py0 = tmp80;
            a2py1 = a2rg1;
            a2rg0 = a2py0;
            a2rg1 = a2py1;
            funlab_js = 2; // __patsflab_loop2_13
            // ATStailcalseq_end
          } // endif
        } else {
          // ATSINSmove_void
        } // endif
        if (funlab_js > 0) continue; else return/*_void*/;
      } // end-of-case
    } // end-of-switch
  } // endwhile-fun
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__3(env0, arg0)
{
//
// knd = 0
  var tmp3__3
  var tmplab, tmplab_js
//
  // __patsflab_gprint_string
  tmp3__3 = ats2jspre_JSarray_push(env0, arg0);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__4(env0, arg0)
{
//
// knd = 0
  var tmp3__4
  var tmplab, tmplab_js
//
  // __patsflab_gprint_string
  tmp3__4 = ats2jspre_JSarray_push(env0, arg0);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__5(env0, arg0)
{
//
// knd = 0
  var tmp3__5
  var tmplab, tmplab_js
//
  // __patsflab_gprint_string
  tmp3__5 = ats2jspre_JSarray_push(env0, arg0);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__6(env0, arg0)
{
//
// knd = 0
  var tmp3__6
  var tmplab, tmplab_js
//
  // __patsflab_gprint_string
  tmp3__6 = ats2jspre_JSarray_push(env0, arg0);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_newline__2__1(env0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_gprint_newline
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__7(env0, "\n");
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__7(env0, arg0)
{
//
// knd = 0
  var tmp3__7
  var tmplab, tmplab_js
//
  // __patsflab_gprint_string
  tmp3__7 = ats2jspre_JSarray_push(env0, arg0);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_gprint_056_sats__gprint_string__1__8(env0, arg0)
{
//
// knd = 0
  var tmp3__8
  var tmplab, tmplab_js
//
  // __patsflab_gprint_string
  tmp3__8 = ats2jspre_JSarray_push(env0, arg0);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
assign02_patsopt_tc_onclick(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_assign02_patsopt_tc_onclick
  atslangweb_patservice_patsopt_tcats__25__1(arg0);
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_patsopt_tcats__25__1(arg0)
{
//
// knd = 0
  var tmp91__1
  var tmplab, tmplab_js
//
  // __patsflab_patservice_patsopt_tcats
  tmp91__1 = atslangweb_patservice_getval__21__1(arg0);
  atslangweb_patsopt_tcats_rpc__30__1(arg0, tmp91__1);
  atslangweb_patservice_prompt__22__1(arg0, "Patsopt-tc: waiting...");
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_getval__21__1(arg0)
{
//
// knd = 0
  var tmpret83__1
  var tmplab, tmplab_js
//
  // __patsflab_patservice_getval
  tmpret83__1 = assign02_pats_key2source(arg0);
  return tmpret83__1;
} // end-of-function


function
atslangweb_patsopt_tcats_rpc__30__1(env0, arg0)
{
//
// knd = 0
  var tmp98__1
  var tmp103__1
  var tmp106__1
  var tmp107__1
  var tmplab, tmplab_js
//
  // __patsflab_patsopt_tcats_rpc
  tmp98__1 = ats2js_Ajax_XMLHttpRequest_new();
  ats2js_Ajax_XMLHttpRequest_set_onreadystatechange(tmp98__1, __patsfun_31__31__1__closurerize(tmp98__1, env0));
  tmp103__1 = atslangweb_patsopt_tcats_rpc__cname__26__1();
  ats2js_Ajax_XMLHttpRequest_open(tmp98__1, "POST", tmp103__1, true);
  ats2js_Ajax_XMLHttpRequest_setRequestHeader(tmp98__1, "Content-type", "application/x-www-form-urlencoded");
  tmp107__1 = ats2jspre_encodeURIComponent(arg0);
  tmp106__1 = ats2jspre_string_append("mycode=", tmp107__1);
  ats2js_Ajax_XMLHttpRequest_send_1(tmp98__1, tmp106__1);
  return/*_void*/;
} // end-of-function


function
__patsfun_31__31__1(env0, env1)
{
//
// knd = 0
  var tmp101__1
  var tmp102__1
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_31
  tmp101__1 = ats2js_Ajax_XMLHttpRequest_is_ready_okay(env0);
  if(tmp101__1) {
    tmp102__1 = ats2js_Ajax_XMLHttpRequest_get_responseText(env0);
    atslangweb_patsopt_tcats_rpc__reply__27__1(env1, tmp102__1);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
atslangweb_patsopt_tcats_rpc__reply__27__1(env0, arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_patsopt_tcats_rpc__reply
  atslangweb_patservice_do_reply__24__1(env0, arg0);
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_do_reply__24__1(arg0, arg1)
{
//
// knd = 0
  var tmp87__1
  var tmplab, tmplab_js
//
  // __patsflab_patservice_do_reply
  tmp87__1 = assign02_patsopt_tc_do_reply(arg0, arg1);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
atslangweb_patsopt_tcats_rpc__cname__26__1()
{
//
// knd = 0
  var tmpret89__1
  var tmplab, tmplab_js
//
  // __patsflab_patsopt_tcats_rpc__cname
  tmpret89__1 = "http://www.ats-lang.org/SERVER/MYCODE/atslangweb_patsopt_tcats_0_.php";
  return tmpret89__1;
} // end-of-function


function
atslangweb_patservice_prompt__22__1(arg0, arg1)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_patservice_prompt
  assign02_pats_key2output_set(arg0, arg1);
  return/*_void*/;
} // end-of-function


function
assign02_patsopt_cc_onclick(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_assign02_patsopt_cc_onclick
  atslangweb_patservice_patsopt_ccats__40__1(arg0);
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_patsopt_ccats__40__1(arg0)
{
//
// knd = 0
  var tmp130__1
  var tmplab, tmplab_js
//
  // __patsflab_patservice_patsopt_ccats
  tmp130__1 = atslangweb_patservice_getval__21__2(arg0);
  atslangweb_patsopt_ccats_rpc__45__1(arg0, tmp130__1);
  atslangweb_patservice_prompt__22__2(arg0, "Patsopt-cc: waiting...");
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_getval__21__2(arg0)
{
//
// knd = 0
  var tmpret83__2
  var tmplab, tmplab_js
//
  // __patsflab_patservice_getval
  tmpret83__2 = assign02_pats_key2source(arg0);
  return tmpret83__2;
} // end-of-function


function
atslangweb_patsopt_ccats_rpc__45__1(env0, arg0)
{
//
// knd = 0
  var tmp137__1
  var tmp142__1
  var tmp145__1
  var tmp146__1
  var tmplab, tmplab_js
//
  // __patsflab_patsopt_ccats_rpc
  tmp137__1 = ats2js_Ajax_XMLHttpRequest_new();
  ats2js_Ajax_XMLHttpRequest_set_onreadystatechange(tmp137__1, __patsfun_46__46__1__closurerize(tmp137__1, env0));
  tmp142__1 = atslangweb_patsopt_ccats_rpc__cname__41__1();
  ats2js_Ajax_XMLHttpRequest_open(tmp137__1, "POST", tmp142__1, true);
  ats2js_Ajax_XMLHttpRequest_setRequestHeader(tmp137__1, "Content-type", "application/x-www-form-urlencoded");
  tmp146__1 = ats2jspre_encodeURIComponent(arg0);
  tmp145__1 = ats2jspre_string_append("mycode=", tmp146__1);
  ats2js_Ajax_XMLHttpRequest_send_1(tmp137__1, tmp145__1);
  return/*_void*/;
} // end-of-function


function
__patsfun_46__46__1(env0, env1)
{
//
// knd = 0
  var tmp140__1
  var tmp141__1
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_46
  tmp140__1 = ats2js_Ajax_XMLHttpRequest_is_ready_okay(env0);
  if(tmp140__1) {
    tmp141__1 = ats2js_Ajax_XMLHttpRequest_get_responseText(env0);
    atslangweb_patsopt_ccats_rpc__reply__42__1(env1, tmp141__1);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
atslangweb_patsopt_ccats_rpc__reply__42__1(env0, arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_patsopt_ccats_rpc__reply
  atslangweb_patservice_do_reply__39__1(env0, arg0);
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_do_reply__39__1(arg0, arg1)
{
//
// knd = 0
  var tmp126__1
  var tmplab, tmplab_js
//
  // __patsflab_patservice_do_reply
  tmp126__1 = assign02_patsopt_cc_do_reply(arg0, arg1);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
atslangweb_patsopt_ccats_rpc__cname__41__1()
{
//
// knd = 0
  var tmpret128__1
  var tmplab, tmplab_js
//
  // __patsflab_patsopt_ccats_rpc__cname
  tmpret128__1 = "http://www.ats-lang.org/SERVER/MYCODE/atslangweb_patsopt_ccats_0_.php";
  return tmpret128__1;
} // end-of-function


function
atslangweb_patservice_prompt__22__2(arg0, arg1)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_patservice_prompt
  assign02_pats_key2output_set(arg0, arg1);
  return/*_void*/;
} // end-of-function


function
assign02_patsopt_cc2js_onclick(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_assign02_patsopt_cc2js_onclick
  atslangweb_patservice_patsopt_cc2js__55__1(arg0);
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_patsopt_cc2js__55__1(arg0)
{
//
// knd = 0
  var tmp169__1
  var tmplab, tmplab_js
//
  // __patsflab_patservice_patsopt_cc2js
  tmp169__1 = atslangweb_patservice_getval__21__3(arg0);
  atslangweb_patsopt_atscc2js_rpc__60__1(arg0, tmp169__1);
  atslangweb_patservice_prompt__22__3(arg0, "Patsopt-cc2js: waiting...");
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_getval__21__3(arg0)
{
//
// knd = 0
  var tmpret83__3
  var tmplab, tmplab_js
//
  // __patsflab_patservice_getval
  tmpret83__3 = assign02_pats_key2source(arg0);
  return tmpret83__3;
} // end-of-function


function
atslangweb_patsopt_atscc2js_rpc__60__1(env0, arg0)
{
//
// knd = 0
  var tmp176__1
  var tmp181__1
  var tmp184__1
  var tmp185__1
  var tmplab, tmplab_js
//
  // __patsflab_patsopt_atscc2js_rpc
  tmp176__1 = ats2js_Ajax_XMLHttpRequest_new();
  ats2js_Ajax_XMLHttpRequest_set_onreadystatechange(tmp176__1, __patsfun_61__61__1__closurerize(tmp176__1, env0));
  tmp181__1 = atslangweb_patsopt_atscc2js_rpc__cname__56__1();
  ats2js_Ajax_XMLHttpRequest_open(tmp176__1, "POST", tmp181__1, true);
  ats2js_Ajax_XMLHttpRequest_setRequestHeader(tmp176__1, "Content-type", "application/x-www-form-urlencoded");
  tmp185__1 = ats2jspre_encodeURIComponent(arg0);
  tmp184__1 = ats2jspre_string_append("mycode=", tmp185__1);
  ats2js_Ajax_XMLHttpRequest_send_1(tmp176__1, tmp184__1);
  return/*_void*/;
} // end-of-function


function
__patsfun_61__61__1(env0, env1)
{
//
// knd = 0
  var tmp179__1
  var tmp180__1
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_61
  tmp179__1 = ats2js_Ajax_XMLHttpRequest_is_ready_okay(env0);
  if(tmp179__1) {
    tmp180__1 = ats2js_Ajax_XMLHttpRequest_get_responseText(env0);
    atslangweb_patsopt_atscc2js_rpc__reply__57__1(env1, tmp180__1);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
atslangweb_patsopt_atscc2js_rpc__reply__57__1(env0, arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_patsopt_atscc2js_rpc__reply
  atslangweb_patservice_do_reply__54__1(env0, arg0);
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_do_reply__54__1(arg0, arg1)
{
//
// knd = 0
  var tmp165__1
  var tmplab, tmplab_js
//
  // __patsflab_patservice_do_reply
  tmp165__1 = assign02_patsopt_cc2js_do_reply(arg0, arg1);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
atslangweb_patsopt_atscc2js_rpc__cname__56__1()
{
//
// knd = 0
  var tmpret167__1
  var tmplab, tmplab_js
//
  // __patsflab_patsopt_atscc2js_rpc__cname
  tmpret167__1 = "http://www.ats-lang.org/SERVER/MYCODE/atslangweb_patsopt_atscc2js_0_.php";
  return tmpret167__1;
} // end-of-function


function
atslangweb_patservice_prompt__22__3(arg0, arg1)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_patservice_prompt
  assign02_pats_key2output_set(arg0, arg1);
  return/*_void*/;
} // end-of-function


function
assign02_pats2xhtml_eval_onclick(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_assign02_pats2xhtml_eval_onclick
  atslangweb_patservice_pats2xhtml_eval__70__1(arg0);
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_pats2xhtml_eval__70__1(arg0)
{
//
// knd = 0
  var tmp208__1
  var tmplab, tmplab_js
//
  // __patsflab_patservice_pats2xhtml_eval
  tmp208__1 = atslangweb_patservice_getval__21__4(arg0);
  atslangweb_pats2xhtml_eval_rpc__75__1(arg0, 1, tmp208__1);
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_getval__21__4(arg0)
{
//
// knd = 0
  var tmpret83__4
  var tmplab, tmplab_js
//
  // __patsflab_patservice_getval
  tmpret83__4 = assign02_pats_key2source(arg0);
  return tmpret83__4;
} // end-of-function


function
atslangweb_pats2xhtml_eval_rpc__75__1(env0, arg0, arg1)
{
//
// knd = 0
  var tmp213__1
  var tmp218__1
  var tmp221__1
  var tmp222__1
  var tmp223__1
  var tmp224__1
  var tmp225__1
  var tmp226__1
  var tmplab, tmplab_js
//
  // __patsflab_pats2xhtml_eval_rpc
  tmp213__1 = ats2js_Ajax_XMLHttpRequest_new();
  ats2js_Ajax_XMLHttpRequest_set_onreadystatechange(tmp213__1, __patsfun_76__76__1__closurerize(tmp213__1, env0));
  tmp218__1 = atslangweb_pats2xhtml_eval_rpc__cname__71__1();
  ats2js_Ajax_XMLHttpRequest_open(tmp213__1, "POST", tmp218__1, true);
  ats2js_Ajax_XMLHttpRequest_setRequestHeader(tmp213__1, "Content-type", "application/x-www-form-urlencoded");
  tmp221__1 = ats2jspre_String(arg0);
  tmp225__1 = ats2jspre_string_append("stadyn=", tmp221__1);
  tmp224__1 = ats2jspre_string_append(tmp225__1, "&");
  tmp223__1 = ats2jspre_string_append(tmp224__1, "mycode=");
  tmp226__1 = ats2jspre_encodeURIComponent(arg1);
  tmp222__1 = ats2jspre_string_append(tmp223__1, tmp226__1);
  ats2js_Ajax_XMLHttpRequest_send_1(tmp213__1, tmp222__1);
  return/*_void*/;
} // end-of-function


function
__patsfun_76__76__1(env0, env1)
{
//
// knd = 0
  var tmp216__1
  var tmp217__1
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_76
  tmp216__1 = ats2js_Ajax_XMLHttpRequest_is_ready_okay(env0);
  if(tmp216__1) {
    tmp217__1 = ats2js_Ajax_XMLHttpRequest_get_responseText(env0);
    atslangweb_pats2xhtml_eval_rpc__reply__72__1(env1, tmp217__1);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
atslangweb_pats2xhtml_eval_rpc__reply__72__1(env0, arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab_pats2xhtml_eval_rpc__reply
  atslangweb_patservice_do_reply__69__1(env0, arg0);
  return/*_void*/;
} // end-of-function


function
atslangweb_patservice_do_reply__69__1(arg0, arg1)
{
//
// knd = 0
  var tmp204__1
  var tmplab, tmplab_js
//
  // __patsflab_patservice_do_reply
  tmp204__1 = assign02_pats2xhtml_eval_do_reply(arg0, arg1);
  // ATSINSmove_void
  return/*_void*/;
} // end-of-function


function
atslangweb_pats2xhtml_eval_rpc__cname__71__1()
{
//
// knd = 0
  var tmpret206__1
  var tmplab, tmplab_js
//
  // __patsflab_pats2xhtml_eval_rpc__cname
  tmpret206__1 = "http://www.ats-lang.org/SERVER/MYCODE/atslangweb_pats2xhtml_eval_0_.php";
  return tmpret206__1;
} // end-of-function


/* ****** ****** */

/* end-of-compilation-unit */