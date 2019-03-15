(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{202:function(e){e.exports={"cptda_cpt_rewrite-23":{html:"",methods:[{url:"/classes/cptda_cpt_rewrite/__construct",title:"__construct",excerpt:"Method: Constructor",deprecated:!1},{url:"/classes/cptda_cpt_rewrite/get_base_permastruct",title:"get_base_permastruct",excerpt:"Method: Public function to get the base permalink structure",deprecated:!1},{url:"/classes/cptda_cpt_rewrite/get_cpt_base_permastruct",title:"get_cpt_base_permastruct",excerpt:"Method: Returns the base permalink structure of a custom post type.",deprecated:!1},{url:"/classes/cptda_cpt_rewrite/get_date_permastruct",title:"get_date_permastruct",excerpt:"Method: Retrieves date permalink structure, with year, month, and day.",deprecated:!1},{url:"/classes/cptda_cpt_rewrite/get_day_permastruct",title:"get_day_permastruct",excerpt:"Method: Retrieves the day permalink structure with month and year.",deprecated:!1},{url:"/classes/cptda_cpt_rewrite/get_month_permastruct",title:"get_month_permastruct",excerpt:"Method: Retrieves the month permalink structure without day and with year.",deprecated:!1},{url:"/classes/cptda_cpt_rewrite/get_year_permastruct",title:"get_year_permastruct",excerpt:"Method: Retrieves the year permalink structure without month and day.",deprecated:!1},{url:"/classes/cptda_cpt_rewrite/init",title:"init",excerpt:"Method: Set's up the class properties",deprecated:!1},{url:"/classes/cptda_cpt_rewrite/reset_permastruct",title:"reset_permastruct",excerpt:"Method: Reset the permastructs",deprecated:!1}],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:"CPTDA_CPT_Rewrite",notice:""},"cptda_cpt_rewrite::__construct-54":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$post_type</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Optional)</span><span class="description">Post Type.</span></p><p class="default">Default value: \'\'</p></dd></dl></section>',methods:[],related:{uses:[{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/init",text:"CPTDA_CPT_Rewrite::init()"}],used_by:[{source:"includes/rewrite.php",url:"/classes/cptda_rewrite/get_date_permastruct",text:"CPTDA_Rewrite::get_date_permastruct()"},{source:"includes/link-template.php",url:"/functions/cptda_get_day_link",text:"cptda_get_day_link()"},{source:"includes/link-template.php",url:"/functions/cptda_get_year_link",text:"cptda_get_year_link()"},{source:"includes/link-template.php",url:"/functions/cptda_get_month_link",text:"cptda_get_month_link()"},{source:"includes/functions.php",url:"/functions/cptda_get_post_type_base",text:"cptda_get_post_type_base()"},{source:"includes/admin.php",url:"/classes/cptda_admin/add_help_tab",text:"CPTDA_Admin::add_help_tab()"}]},changelog:[],signature:'CPTDA_CPT_Rewrite::__construct( <span class="arg-type">string</span>&nbsp;<span class="arg-name">$post_type</span>&nbsp;=&nbsp;<span class="arg-default">\'\'</span>&nbsp;)',notice:""},"cptda_cpt_rewrite::get_base_permastruct-92":{html:"",methods:[],related:{uses:[],used_by:[]},changelog:[],signature:"CPTDA_CPT_Rewrite::get_base_permastruct()",notice:""},"cptda_cpt_rewrite::get_cpt_base_permastruct-102":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$post_type</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Required)</span><span class="description">Post Type.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> Post type permalink structure base.</p></section>',methods:[],related:{uses:[{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/reset_permastruct",text:"CPTDA_CPT_Rewrite::reset_permastruct()"}],used_by:[{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/init",text:"CPTDA_CPT_Rewrite::init()"}]},changelog:[],signature:'CPTDA_CPT_Rewrite::get_cpt_base_permastruct( <span class="arg-type">string</span>&nbsp;<span class="arg-name">$post_type</span>&nbsp;)',notice:""},"cptda_cpt_rewrite::get_date_permastruct-138":{html:'<hr /><section class="description"><h2>Description</h2><p>The permalink structure for the date, if not set already depends on the permalink structure. It can be one of three formats. The first is year, month, day; the second is day, month, year; and the last format is month, day, year. These are matched against the permalink structure for which one is used. If none matches, then the default will be used, which is year, month, day.</p><p>Prevents post ID and date permalinks from overlapping. In the case of post_id, the date permalink will be prepended with front permalink with &#8216;date/&#8217; before the actual permalink to form the complete date permalink structure.</p></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(string|false)</span> False on no permalink structure. Date permalink structure.</p></section>',methods:[],related:{uses:[{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/reset_permastruct",text:"CPTDA_CPT_Rewrite::reset_permastruct()"}],used_by:[{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/get_year_permastruct",text:"CPTDA_CPT_Rewrite::get_year_permastruct()"},{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/get_month_permastruct",text:"CPTDA_CPT_Rewrite::get_month_permastruct()"},{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/get_day_permastruct",text:"CPTDA_CPT_Rewrite::get_day_permastruct()"}]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:"CPTDA_CPT_Rewrite::get_date_permastruct()",notice:""},"cptda_cpt_rewrite::get_day_permastruct-244":{html:'<hr /><section class="description"><h2>Description</h2><p>Keeps date permalink structure with all year, month, and day.</p></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(string|false)</span> False on failure. Year/Month/Day structure on success.</p></section>',methods:[],related:{uses:[{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/get_date_permastruct",text:"CPTDA_CPT_Rewrite::get_date_permastruct()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:"CPTDA_CPT_Rewrite::get_day_permastruct()",notice:""},"cptda_cpt_rewrite::get_month_permastruct-220":{html:'<hr /><section class="description"><h2>Description</h2><p>Gets the date permalink structure and strips out the day permalink structures. Keeps the year permalink structure.</p></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(false|string)</span> False on failure. Year/Month structure on success.</p></section>',methods:[],related:{uses:[{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/get_date_permastruct",text:"CPTDA_CPT_Rewrite::get_date_permastruct()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:"CPTDA_CPT_Rewrite::get_month_permastruct()",notice:""},"cptda_cpt_rewrite::get_year_permastruct-194":{html:'<hr /><section class="description"><h2>Description</h2><p>Gets the date permalink structure and strips out the month and day permalink structures.</p></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(false|string)</span> False on failure. Year structure on success.</p></section>',methods:[],related:{uses:[{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/get_date_permastruct",text:"CPTDA_CPT_Rewrite::get_date_permastruct()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:"CPTDA_CPT_Rewrite::get_year_permastruct()",notice:""},"cptda_cpt_rewrite::init-65":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$post_type</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Required)</span><span class="description">Post type name.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(void)</span> </p></section>',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/cptda_is_valid_post_type",text:"cptda_is_valid_post_type()"},{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/reset_permastruct",text:"CPTDA_CPT_Rewrite::reset_permastruct()"},{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/get_cpt_base_permastruct",text:"CPTDA_CPT_Rewrite::get_cpt_base_permastruct()"}],used_by:[{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/__construct",text:"CPTDA_CPT_Rewrite::__construct()"}]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'CPTDA_CPT_Rewrite::init( <span class="arg-type">string</span>&nbsp;<span class="arg-name">$post_type</span>&nbsp;)',notice:""},"cptda_cpt_rewrite::reset_permastruct-83":{html:"",methods:[],related:{uses:[],used_by:[{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/get_date_permastruct",text:"CPTDA_CPT_Rewrite::get_date_permastruct()"},{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/init",text:"CPTDA_CPT_Rewrite::init()"},{source:"includes/cpt-rewrite.php",url:"/classes/cptda_cpt_rewrite/get_cpt_base_permastruct",text:"CPTDA_CPT_Rewrite::get_cpt_base_permastruct()"}]},changelog:[],signature:"CPTDA_CPT_Rewrite::reset_permastruct()",notice:""}}}}]);
//# sourceMappingURL=8.636c02f0.chunk.js.map