(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{218:function(s){s.exports={"cptda_widget_recent_posts-17":{html:'<hr /><section class="description"><h2>Description</h2><h3>See also</h3><ul><li><a href="https://keesiemeijer.github.io/custom-post-type-date-archives/classes/wp_widget">WP_Widget</a></li></ul></section>',methods:[{url:"/classes/cptda_widget_recent_posts/__construct",title:"__construct",excerpt:"Method: Sets up a new Recent Posts widget instance.",deprecated:!1},{url:"/classes/cptda_widget_recent_posts/form",title:"form",excerpt:"Method: Outputs the settings form for the Recent Posts widget.",deprecated:!1},{url:"/classes/cptda_widget_recent_posts/get_instance_settings",title:"get_instance_settings",excerpt:"Method: Gets instance settings.",deprecated:!1},{url:"/classes/cptda_widget_recent_posts/update",title:"update",excerpt:"Method: Handles updating the settings for the current Recent Posts widget instance.",deprecated:!1},{url:"/classes/cptda_widget_recent_posts/widget",title:"widget",excerpt:"Method: Outputs the content for the current Recent Posts widget instance.",deprecated:!1}],related:{uses:[],used_by:[]},changelog:[{description:"Introduced.",version:"2.8.0"}],signature:"CPTDA_Widget_Recent_Posts",notice:""},"cptda_widget_recent_posts::__construct-28":{html:"",methods:[],related:{uses:[{source:"custom-post-type-date-archives.php",url:"/functions/cptda_date_archives",text:"cptda_date_archives()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.8.0"}],signature:"CPTDA_Widget_Recent_Posts::__construct()",notice:""},"cptda_widget_recent_posts::form-139":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$instance</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Current settings.</span></p></dd></dl></section>',methods:[],related:{uses:[{source:"includes/widgets/class-cptda-widget-recent-posts.php",url:"/classes/cptda_widget_recent_posts/get_instance_settings",text:"CPTDA_Widget_Recent_Posts::get_instance_settings()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.8.0"}],signature:'CPTDA_Widget_Recent_Posts::form( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$instance</span>&nbsp;)',notice:""},"cptda_widget_recent_posts::get_instance_settings-168":{html:'<hr /><section class="description"><h2>Description</h2><p>Merges instance settings with defaults and applies back compatibility.</p></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$instance</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Settings for the current Recent Posts widget instance.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(@return)</span> array All Recent Posts widget instance settings with back compat applied.</p></section>',methods:[],related:{uses:[{source:"includes/utils/recent-posts.php",url:"/functions/cptda_get_recent_posts_settings",text:"cptda_get_recent_posts_settings()"}],used_by:[{source:"includes/widgets/class-cptda-widget-recent-posts.php",url:"/classes/cptda_widget_recent_posts/widget",text:"CPTDA_Widget_Recent_Posts::widget()"},{source:"includes/widgets/class-cptda-widget-recent-posts.php",url:"/classes/cptda_widget_recent_posts/form",text:"CPTDA_Widget_Recent_Posts::form()"}]},changelog:[],signature:'CPTDA_Widget_Recent_Posts::get_instance_settings( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$instance</span>&nbsp;)',notice:""},"cptda_widget_recent_posts::update-104":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$new_instance</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">New settings for this instance as input by the user via WP_Widget::form().</span></p></dd><dt>$old_instance</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Old settings for this instance.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Updated settings to save.</p></section>',methods:[],related:{uses:[{source:"includes/utils/recent-posts.php",url:"/functions/cptda_sanitize_recent_posts_settings",text:"cptda_sanitize_recent_posts_settings()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.8.0"}],signature:'CPTDA_Widget_Recent_Posts::update( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$new_instance</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$old_instance</span>&nbsp;)',notice:""},"cptda_widget_recent_posts::widget-66":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Display arguments including \'before_title\', \'after_title\', \'before_widget\', and \'after_widget\'.</span></p></dd><dt>$instance</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Settings for the current Recent Posts widget instance.</span></p></dd></dl></section>',methods:[],related:{uses:[{source:"includes/widgets/class-cptda-widget-recent-posts.php",url:"/classes/cptda_widget_recent_posts/get_instance_settings",text:"CPTDA_Widget_Recent_Posts::get_instance_settings()"},{source:"includes/utils/recent-posts.php",url:"/functions/cptda_get_recent_posts_query",text:"cptda_get_recent_posts_query()"},{source:"includes/utils/recent-posts.php",url:"/functions/cptda_get_recent_posts_html",text:"cptda_get_recent_posts_html()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.8.0"}],signature:'CPTDA_Widget_Recent_Posts::widget(&nbsp;<span class="arg-name">$widget_args</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$instance</span>&nbsp;)',notice:""}}}}]);
//# sourceMappingURL=24.d8bdf33b.chunk.js.map