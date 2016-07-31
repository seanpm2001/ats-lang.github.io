/*
**
** The C code is generated by ATS/Anairiats
** The compilation time is: 2016-7-23: 22h:10m
**
*/

/* include some .h files */
#ifndef _ATS_HEADER_NONE
#include "ats_config.h"
#include "ats_basics.h"
#include "ats_types.h"
#include "ats_exception.h"
#include "ats_memory.h"
#endif /* _ATS_HEADER_NONE */

/* include some .cats files */
#ifndef _ATS_PRELUDE_NONE
#include "prelude/CATS/basics.cats"
#include "prelude/CATS/integer.cats"
#include "prelude/CATS/sizetype.cats"
#include "prelude/CATS/integer_ptr.cats"
#include "prelude/CATS/integer_fixed.cats"
#include "prelude/CATS/pointer.cats"
#include "prelude/CATS/bool.cats"
#include "prelude/CATS/char.cats"
#include "prelude/CATS/byte.cats"
#include "prelude/CATS/float.cats"
#include "prelude/CATS/string.cats"
#include "prelude/CATS/reference.cats"
#include "prelude/CATS/lazy.cats"
#include "prelude/CATS/lazy_vt.cats"
#include "prelude/CATS/printf.cats"
#include "prelude/CATS/list.cats"
#include "prelude/CATS/option.cats"
#include "prelude/CATS/array.cats"
#include "prelude/CATS/matrix.cats"
#endif /* _ATS_PRELUDE_NONE */
/* prologues from statically loaded files */
/* external codes at top */
/* type definitions */
typedef
struct {
ats_ptr_type atslab_2 ;
ats_size_type atslab_3 ;
} anairiats_rec_0 ;

typedef
struct {
ats_ptr_type atslab_3 ;
ats_size_type atslab_4 ;
ats_size_type atslab_5 ;
} anairiats_rec_1 ;

/* external typedefs */
/* external dynamic constructor declarations */
/* external dynamic constant declarations */
ATSextern_fun(ats_bool_type, atspre_igte) (ats_int_type, ats_int_type) ;
ATSextern_fun(ats_size_type, atspre_add_size_int) (ats_size_type, ats_int_type) ;
ATSextern_fun(ats_bool_type, atspre_lt_size_size) (ats_size_type, ats_size_type) ;
ATSextern_fun(ats_size_type, atspre_size1_of_int1) (ats_int_type) ;
ATSextern_fun(ats_size_type, atspre_add_size1_size1) (ats_size_type, ats_size_type) ;
ATSextern_fun(ats_size_type, atspre_sub_size1_int1) (ats_size_type, ats_int_type) ;
ATSextern_fun(ats_size_type, atspre_mul2_size1_size1) (ats_size_type, ats_size_type) ;
ATSextern_fun(ats_bool_type, atspre_lt_size1_size1) (ats_size_type, ats_size_type) ;
ATSextern_fun(ats_bool_type, atspre_gt_size1_int1) (ats_size_type, ats_int_type) ;
ATSextern_fun(ats_ptr_type, atspre_ref_make_elt_tsz) (ats_ref_type, ats_size_type) ;
ATSextern_fun(ats_ptr_type, atspre_array_ptr_alloc_tsz) (ats_size_type, ats_size_type) ;
ATSextern_fun(ats_void_type, atspre_array_ptr_initialize_elt_tsz) (ats_ref_type, ats_size_type, ats_ref_type, ats_size_type) ;
ATSextern_fun(ats_ptr_type, ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_make_arrpsz__main) (ats_size_type, ats_size_type, anairiats_rec_0) ;

/* external dynamic terminating constant declarations */
#ifdef _ATS_PROOFCHECK
extern
ats_void_type ATS_2d0_2e2_2e12_2prelude_2SATS_2arith_2esats__mul_istot_prfck () ;
extern
ats_void_type ATS_2d0_2e2_2e12_2prelude_2SATS_2arith_2esats__mul_isfun_prfck () ;
extern
ats_void_type ATS_2d0_2e2_2e12_2prelude_2SATS_2arith_2esats__mul_nat_nat_nat_prfck () ;
extern
ats_void_type ATS_2d0_2e2_2e12_2prelude_2DATS_2matrix0_2edats__lemma_for_matrix_subscripting_prfck () ;
#endif /* _ATS_PROOFCHECK */

/* assuming abstract types */
int ATS_2d0_2e2_2e12_2prelude_2basics_sta_2esats__sasp__matrix0_viewt0ype_type = 0 ;

/* sum constructor declarations */
/* exn constructor declarations */
/* global dynamic (non-functional) constant declarations */
/* internal function declarations */
static
ats_ptr_type ref_01088_anairiats_rec_1 (anairiats_rec_1 arg0) ;

/* partial value template declarations */
/* static temporary variable declarations */
/* external value variable declarations */

/* function implementations */

/*
// /home/hwxi/Research/ATS-Anairiats/prelude/DATS/reference.dats: 1828(line=57, offs=18) -- 1902(line=59, offs=4)
*/
ATSstaticdec()
ats_ptr_type
ref_01088_anairiats_rec_1 (anairiats_rec_1 arg0) {
/* local vardec */
ATSlocal (ats_ptr_type, tmp1) ;
ATSlocal (anairiats_rec_1, tmp2) ;

__ats_lab_ref_01088_anairiats_rec_1:
/* anairiats_rec_1 tmp2 ; */
tmp2 = arg0 ;
tmp1 = atspre_ref_make_elt_tsz ((&tmp2), sizeof(anairiats_rec_1)) ;
return (tmp1) ;
} /* end of [ref_01088_anairiats_rec_1] */

/*
// /home/hwxi/Research/ATS-Anairiats/prelude/DATS/matrix0.dats: 2042(line=62, offs=13) -- 2174(line=67, offs=4)
*/
ATSglobaldec()
ats_ptr_type
ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_make_arrpsz (ats_size_type arg0, ats_size_type arg1, anairiats_rec_0 arg2) {
/* local vardec */
ATSlocal (ats_ptr_type, tmp0) ;
ATSlocal (anairiats_rec_1, tmp3) ;
ATSlocal (ats_ptr_type, tmp4) ;

__ats_lab_ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_make_arrpsz:
tmp4 = ats_select_mac(arg2, atslab_2) ;
tmp3.atslab_3 = tmp4 ;
tmp3.atslab_4 = arg0 ;
tmp3.atslab_5 = arg1 ;

tmp0 = ref_01088_anairiats_rec_1 (tmp3) ;
return (tmp0) ;
} /* end of [ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_make_arrpsz] */

/*
// /home/hwxi/Research/ATS-Anairiats/prelude/DATS/matrix0.dats: 2261(line=71, offs=18) -- 2336(line=74, offs=4)
*/
ATSglobaldec()
ats_ptr_type
ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_make_arrpsz__main (ats_size_type arg0, ats_size_type arg1, anairiats_rec_0 arg2) {
/* local vardec */
ATSlocal (ats_ptr_type, tmp5) ;
ATSlocal (anairiats_rec_1, tmp6) ;
ATSlocal (ats_ptr_type, tmp7) ;

__ats_lab_ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_make_arrpsz__main:
tmp7 = ats_select_mac(arg2, atslab_2) ;
tmp6.atslab_3 = tmp7 ;
tmp6.atslab_4 = arg0 ;
tmp6.atslab_5 = arg1 ;

tmp5 = ref_01088_anairiats_rec_1 (tmp6) ;
return (tmp5) ;
} /* end of [ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_make_arrpsz__main] */

/*
// /home/hwxi/Research/ATS-Anairiats/prelude/DATS/matrix0.dats: 2958(line=94, offs=23) -- 3022(line=96, offs=4)
*/
ATSglobaldec()
ats_size_type
ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_row (ats_ptr_type arg0) {
/* local vardec */
ATSlocal (ats_size_type, tmp8) ;
ATSlocal (ats_ptr_type, tmp9) ;

__ats_lab_ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_row:
tmp9 = ats_selsin_mac(ats_castfn_mac(ats_ptr_type, arg0), atslab_1) ;
tmp8 = ats_selptr_mac(ats_castptr_mac(anairiats_rec_1, tmp9), atslab_4) ;
return (tmp8) ;
} /* end of [ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_row] */

/*
// /home/hwxi/Research/ATS-Anairiats/prelude/DATS/matrix0.dats: 3070(line=98, offs=23) -- 3134(line=100, offs=4)
*/
ATSglobaldec()
ats_size_type
ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_col (ats_ptr_type arg0) {
/* local vardec */
ATSlocal (ats_size_type, tmp10) ;
ATSlocal (ats_ptr_type, tmp11) ;

__ats_lab_ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_col:
tmp11 = ats_selsin_mac(ats_castfn_mac(ats_ptr_type, arg0), atslab_1) ;
tmp10 = ats_selptr_mac(ats_castptr_mac(anairiats_rec_1, tmp11), atslab_5) ;
return (tmp10) ;
} /* end of [ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__matrix0_col] */

/* static load function */

// extern ats_void_type ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__staload (void) ;
extern ats_void_type ATS_2d0_2e2_2e12_2prelude_2DATS_2reference_2edats__staload (void) ;
// extern ats_void_type ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__staload (void) ;

ats_void_type
ATS_2d0_2e2_2e12_2prelude_2DATS_2matrix0_2edats__staload () {
static int ATS_2d0_2e2_2e12_2prelude_2DATS_2matrix0_2edats__staload_flag = 0 ;
if (ATS_2d0_2e2_2e12_2prelude_2DATS_2matrix0_2edats__staload_flag) return ;
ATS_2d0_2e2_2e12_2prelude_2DATS_2matrix0_2edats__staload_flag = 1 ;

// ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__staload () ;
ATS_2d0_2e2_2e12_2prelude_2DATS_2reference_2edats__staload () ;
// ATS_2d0_2e2_2e12_2prelude_2SATS_2matrix0_2esats__staload () ;

return ;
} /* staload function */

/* dynamic load function */

// dynload flag declaration
// extern ats_int_type ATS_2d0_2e2_2e12_2prelude_2DATS_2matrix0_2edats__dynload_flag ;

ats_void_type
ATS_2d0_2e2_2e12_2prelude_2DATS_2matrix0_2edats__dynload () {
// ATS_2d0_2e2_2e12_2prelude_2DATS_2matrix0_2edats__dynload_flag = 1 ;
ATS_2d0_2e2_2e12_2prelude_2DATS_2matrix0_2edats__staload () ;

#ifdef _ATS_PROOFCHECK
ATS_2d0_2e2_2e12_2prelude_2SATS_2arith_2esats__mul_istot_prfck () ;
ATS_2d0_2e2_2e12_2prelude_2SATS_2arith_2esats__mul_isfun_prfck () ;
ATS_2d0_2e2_2e12_2prelude_2SATS_2arith_2esats__mul_nat_nat_nat_prfck () ;
ATS_2d0_2e2_2e12_2prelude_2DATS_2matrix0_2edats__lemma_for_matrix_subscripting_prfck () ;
#endif /* _ATS_PROOFCHECK */

/* marking static variables for GC */

/* marking external values for GC */

/* code for dynamic loading */
return ;
} /* end of [dynload function] */

/* external codes at mid */
/* external codes at bot */

/* ****** ****** */

/* end of [DATS_matrix0_dats.c] */
