(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{207:function(s){s.exports={"cptda_publish_future_post-post_type-177":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$publish</dt><dd><p class="desc"><span class="type">(<span class="bool">bool</span>)</span><span class="description">Default true.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/_future_post_hook",text:"CPTDA_Post_Types::_future_post_hook()"}]},changelog:[{description:"Introduced.",version:"1.2.0"}],signature:'<span class="hook-func">apply_filters</span>( "cptda_publish_future_{$post->post_type}",  <nobr><span class="arg-type">bool</span> <span class="arg-name">$publish</span></nobr> )',notice:""},"cptda_publish_future_posts-150":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$publish</dt><dd><p class="desc"><span class="type">(<span class="bool">bool</span>)</span><span class="description">Default true.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/publish_scheduled_posts",text:"CPTDA_Post_Types::publish_scheduled_posts()"}]},changelog:[{description:"Introduced.",version:"1.0"}],signature:'<span class="hook-func">apply_filters</span>( \'cptda_publish_future_posts\',  <nobr><span class="arg-type">bool</span> <span class="arg-name">$publish</span></nobr> )',notice:""},"cptda_post_types-23":{html:"",methods:[{url:"/classes/cptda_post_types/__construct",title:"__construct",excerpt:"Method:",deprecated:!1},{url:"/classes/cptda_post_types/_future_post_hook",title:"_future_post_hook",excerpt:'Method: Set new post\'s post_status to "publish" if the post is sceduled.',deprecated:!1},{url:"/classes/cptda_post_types/add_admin_post_type_support",title:"add_admin_post_type_support",excerpt:"Method: Add support to post type from admin settings",deprecated:!1},{url:"/classes/cptda_post_types/filter_by_support",title:"filter_by_support",excerpt:"Method: Filters array of post types by support.",deprecated:!1},{url:"/classes/cptda_post_types/get_post_types",title:"get_post_types",excerpt:"Method: Returns custom post types depending on format and context.",deprecated:!1},{url:"/classes/cptda_post_types/get_post_types_by_context",title:"get_post_types_by_context",excerpt:"Method: Returns custom post type objects depending on context.",deprecated:!1},{url:"/classes/cptda_post_types/get_public_post_types",title:"get_public_post_types",excerpt:"Method: Setup post types.",deprecated:!1},{url:"/classes/cptda_post_types/publish_scheduled_posts",title:"publish_scheduled_posts",excerpt:"Method: Sets up post types were scheduled posts are published.",deprecated:!1},{url:"/classes/cptda_post_types/setup",title:"setup",excerpt:"Method: Sets up properties with custom post types that support date archives.",deprecated:!1},{url:"/classes/cptda_post_types/setup_admin_post_type_support",title:"setup_admin_post_type_support",excerpt:"Method: Set up admin settings post type support.",deprecated:!1},{url:"/classes/cptda_post_types/setup_admin_post_types",title:"setup_admin_post_types",excerpt:"Method: Setup post types from admin page settings.",deprecated:!1}],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"1.0"}],signature:"CPTDA_Post_Types",notice:""},"cptda_post_types::__construct-32":{html:"",methods:[],related:{uses:[],used_by:[{source:"custom-post-type-date-archives.php",url:"/classes/custom_post_type_date_archives/instance",text:"Custom_Post_Type_Date_Archives::instance()"}]},changelog:[],signature:"CPTDA_Post_Types::__construct()",notice:""},"cptda_post_types::_future_post_hook-168":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$post_id</dt><dd><p class="desc"><span class="type">(<span class="int">int</span>)</span><span class="required">(Required)</span><span class="description">Post ID.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(void)</span> </p></section>',methods:[],related:{uses:[{source:"includes/post_type.php",url:"/hooks/cptda_publish_future_post-post_type",text:"cptda_publish_future_{$post->post_type}"}],used_by:[]},changelog:[{description:"Introduced.",version:"1.2.0"}],signature:'CPTDA_Post_Types::_future_post_hook( <span class="arg-type">int</span>&nbsp;<span class="arg-name">$post_id</span>&nbsp;)',notice:""},"cptda_post_types::add_admin_post_type_support-114":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$archives</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Array with date archive post types.</span></p></dd><dt>$support</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Optional)</span><span class="description">Type of support. \'date_archives\' or \'publish_future_posts\'.</span></p><p class="default">Default value: \'date-archives\'</p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(void)</span> </p></section>',methods:[],related:{uses:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/get_post_types",text:"CPTDA_Post_Types::get_post_types()"}],used_by:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/setup_admin_post_type_support",text:"CPTDA_Post_Types::setup_admin_post_type_support()"}]},changelog:[{description:"Introduced.",version:"2.1.0"}],signature:'CPTDA_Post_Types::add_admin_post_type_support( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$archives</span>,  <span class="arg-type">string</span>&nbsp;<span class="arg-name">$support</span>&nbsp;=&nbsp;<span class="arg-default">\'date-archives\'</span>&nbsp;)',notice:""},"cptda_post_types::filter_by_support-259":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$post_types</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Array with post type objects.</span></p></dd><dt>$support</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Required)</span><span class="description">Support to filter by.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Array with post types filtered by support.</p></section>',methods:[],related:{uses:[],used_by:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/get_post_types_by_context",text:"CPTDA_Post_Types::get_post_types_by_context()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'CPTDA_Post_Types::filter_by_support( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$post_types</span>,  <span class="arg-type">string</span>&nbsp;<span class="arg-name">$support</span>&nbsp;)',notice:""},"cptda_post_types::get_post_types-197":{html:'<hr /><section class="description"><h2>Description</h2><p>Use context &#8216;date_archive&#8217; to get custom post types that have date archives support (Default). Use context &#8216;admin&#8217; to get custom post types that are registered to appear in the admin menu. Use context &#8216;publish_future&#8217; to get custom post types that publish future posts.</p></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$format</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Optional)</span><span class="description">Accepts \'names\', \'labels\' or \'objects\' </span></p><p class="default">Default value: \'names\'</p></dd><dt>$context</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Optional)</span><span class="description">Accepts \'date_archive\', \'admin\' and \'publish_future\'. If no context is provided the default is used.</span></p><p class="default">Default value: \'date_archive\'</p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Array with post types depending on format and context.</p></section>',methods:[],related:{uses:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/get_post_types_by_context",text:"CPTDA_Post_Types::get_post_types_by_context()"}],used_by:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/add_admin_post_type_support",text:"CPTDA_Post_Types::add_admin_post_type_support()"},{source:"includes/post_type.php",url:"/classes/cptda_post_types/publish_scheduled_posts",text:"CPTDA_Post_Types::publish_scheduled_posts()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'CPTDA_Post_Types::get_post_types( <span class="arg-type">string</span>&nbsp;<span class="arg-name">$format</span>&nbsp;=&nbsp;<span class="arg-default">\'names\'</span>,  <span class="arg-type">string</span>&nbsp;<span class="arg-name">$context</span>&nbsp;=&nbsp;<span class="arg-default">\'date_archive\'</span>&nbsp;)',notice:""},"cptda_post_types::get_post_types_by_context-230":{html:'<hr /><section class="description"><h2>Description</h2><p>Use context &#8216;date_archive&#8217; to get custom post types that have date archives support (Default). Use context &#8216;admin&#8217; to get custom post types that are registered to appear in the admin menu. Use context &#8216;publish_future&#8217; to get custom post types that publish future posts.</p></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$context</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Optional)</span><span class="description">Accepts \'date_archive\', \'admin\' and \'publish_future\'. If no context is provided the default is used.</span></p><p class="default">Default value: \'date_archive\'</p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Array with post type objects depending on context.</p></section>',methods:[],related:{uses:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/filter_by_support",text:"CPTDA_Post_Types::filter_by_support()"}],used_by:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/get_post_types",text:"CPTDA_Post_Types::get_post_types()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'CPTDA_Post_Types::get_post_types_by_context( <span class="arg-type">string</span>&nbsp;<span class="arg-name">$context</span>&nbsp;=&nbsp;<span class="arg-default">\'date_archive\'</span>&nbsp;)',notice:""},"cptda_post_types::get_public_post_types-55":{html:"",methods:[],related:{uses:[],used_by:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/setup",text:"CPTDA_Post_Types::setup()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:"CPTDA_Post_Types::get_public_post_types()",notice:""},"cptda_post_types::publish_scheduled_posts-137":{html:"<hr /><section class=\"return\"><h3>Return</h3><p><span class='return-type'>(void)</span> </p></section>",methods:[],related:{uses:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/get_post_types",text:"CPTDA_Post_Types::get_post_types()"},{source:"includes/post_type.php",url:"/hooks/cptda_publish_future_posts",text:"cptda_publish_future_posts"}],used_by:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/setup",text:"CPTDA_Post_Types::setup()"}]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:"CPTDA_Post_Types::publish_scheduled_posts()",notice:""},"cptda_post_types::setup-44":{html:'<hr /><section class="description"><h2>Description</h2><p>Checks if &#8216;date-archives&#8217; support was added to custom post types. see: <a href="http://codex.wordpress.org/Function_Reference/add_post_type_support">http://codex.wordpress.org/Function_Reference/add_post_type_support</a></p></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(void)</span> </p></section>',methods:[],related:{uses:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/setup_admin_post_types",text:"CPTDA_Post_Types::setup_admin_post_types()"},{source:"includes/post_type.php",url:"/classes/cptda_post_types/publish_scheduled_posts",text:"CPTDA_Post_Types::publish_scheduled_posts()"},{source:"includes/post_type.php",url:"/classes/cptda_post_types/get_public_post_types",text:"CPTDA_Post_Types::get_public_post_types()"}],used_by:[]},changelog:[{description:"Introduced.",version:"1.0.0"}],signature:"CPTDA_Post_Types::setup()",notice:""},"cptda_post_types::setup_admin_post_type_support-91":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$archives</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Admin archives settings.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(void)</span> </p></section>',methods:[],related:{uses:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/add_admin_post_type_support",text:"CPTDA_Post_Types::add_admin_post_type_support()"}],used_by:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/setup_admin_post_types",text:"CPTDA_Post_Types::setup_admin_post_types()"}]},changelog:[{description:"Introduced.",version:"2.3.0"}],signature:'CPTDA_Post_Types::setup_admin_post_type_support( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$archives</span>&nbsp;)',notice:""},"cptda_post_types::setup_admin_post_types-72":{html:"<hr /><section class=\"return\"><h3>Return</h3><p><span class='return-type'>(void)</span> </p></section>",methods:[],related:{uses:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/setup_admin_post_type_support",text:"CPTDA_Post_Types::setup_admin_post_type_support()"}],used_by:[{source:"includes/post_type.php",url:"/classes/cptda_post_types/setup",text:"CPTDA_Post_Types::setup()"}]},changelog:[{description:"Introduced.",version:"2.1.0"}],signature:"CPTDA_Post_Types::setup_admin_post_types()",notice:""}}}}]);
//# sourceMappingURL=13.f2eed3cf.chunk.js.map