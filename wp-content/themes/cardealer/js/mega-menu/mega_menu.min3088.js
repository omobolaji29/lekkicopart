!function(e){var i={logo_align:"left",links_align:"left",socialBar_align:"left",searchBar_align:"right",trigger:"hover",effect:"fade",effect_speed:400,sibling:!0,outside_click_close:!0,top_fixed:!1,sticky_header:!1,sticky_header_height:200,menu_position:"horizontal",full_width:!0,mobile_settings:{collapse:!1,sibling:!0,scrollBar:!0,scrollBar_height:400,top_fixed:!1,sticky_header:!1,sticky_header_height:200}};e.fn.megaMenu=function(s){return s=e.extend({},i,s||{}),this.each(function(){var i,n=e(this),a="ul",t="li",l="a",r=n.find(".menu-logo"),o=r.children(t),d=n.find(".menu-links"),c=(d.children(t),n.find(".menu-social-bar")),f=n.find(".menu-search-bar"),g=".menu-mobile-collapse-trigger",_=".mobileTriggerButton",h=".desktopTriggerButton",p="active",u="activeTrigger",m="activeTriggerMobile",b=".drop-down-multilevel, .drop-down, .drop-down-tab-bar, .mega-sub-menu",v="desktopTopFixed",C="mobileTopFixed",k="menuFullWidth";i={menu_full_width:function(){s.full_width===!0&&n.addClass(k)},logo_Align:function(){"right"===s.logo_align&&r.addClass("menu-logo-align-right")},links_Align:function(){"right"===s.links_align&&d.addClass("menu-links-align-right")},social_bar_Align:function(){"right"===s.socialBar_align&&c.addClass("menu-social-bar-right")},search_bar_Align:function(){"left"===s.searchBar_align&&f.addClass("menu-search-bar-left")},collapse_trigger_button:function(){if(s.mobile_settings.collapse===!0){o.append('<div class="menu-mobile-collapse-trigger"><span></span></div>');var i=d.add(c);i.hide(0),f.addClass(p),n.find(g).on("click",function(){return i.is(":hidden")?(e(this).addClass(p),i.show(0)):(e(this).removeClass(p),i.hide(0)),!1})}},switch_effects:function(){switch(s.effect){case"fade":n.find(b).addClass("effect-fade");break;case"scale":n.find(b).addClass("effect-scale");break;case"expand-top":n.find(b).addClass("effect-expand-top");break;case"expand-bottom":n.find(b).addClass("effect-expand-bottom");break;case"expand-left":n.find(b).addClass("effect-expand-left");break;case"expand-right":n.find(b).addClass("effect-expand-right")}},transition_delay:function(){n.find(b).css({webkitTransition:"all "+s.effect_speed+"ms ease ",transition:"all "+s.effect_speed+"ms ease "})},hover_trigger:function(){"hover"===s.trigger&&(i.transition_delay(),n.find(b).parents(t).addClass("hoverTrigger"),i.switch_effects())},mobile_trigger:function(){n.find(b).prev(l).append('<div class="mobileTriggerButton"></div>'),n.find(_).on("click",function(){var i=e(this),r=i.parents(l),o=r.next(b);return o.is(":hidden")?(s.mobile_settings.sibling===!0&&(i.parents(n).siblings(a+","+t).find(b).hide(0),i.parents(n).siblings(t).removeClass(m),i.parents(n).siblings(a).find(t).removeClass(m)),r.parent(t).addClass(m),o.show(0)):(r.parent(t).removeClass(m),o.hide(0)),!1}),n.find("i.fas.fa-indicator").on("click",function(){return!1})},click_trigger:function(){"click"===s.trigger&&(n.find(b).prev(l).append('<div class="desktopTriggerButton"></div>'),n.find(b).parents(t).addClass("ClickTrigger"),i.switch_effects(),i.transition_delay(),n.find(h).on("click",function(i){i.stopPropagation(),i.stopImmediatePropagation();var r=e(this),o=r.parents(l),d=o.next(b);d.hasClass(p)?(o.parent(t).removeClass(u),d.removeClass(p)):(s.sibling===!0&&(r.parents(n).siblings(a+","+t).find(b).removeClass(p),r.parents(n).siblings(t).removeClass(u),r.parents(n).siblings(a).find(t).removeClass(u)),o.parent(t).addClass(u),d.addClass(p))}))},scroll_bar:function(){s.mobile_settings.scrollBar===!0&&d.css({maxHeight:s.mobile_settings.scrollBar_height+"px",overflow:"auto"})},top_Fixed:function(){s.top_fixed===!0&&n.addClass(v),s.mobile_settings.top_fixed&&n.addClass(C)},sticky_Header:function(){var i=e(window),a=!0,t=!0;n.find(b).is(":hidden")?(i.off("scroll"),s.mobile_settings.sticky_header===!0&&s.top_fixed===!1&&i.on("scroll",function(){i.scrollTop()>s.mobile_settings.sticky_header_height?t===!0&&(n.addClass(C),t=!1):t===!1&&(n.removeClass(C),t=!0)})):(i.off("scroll"),s.sticky_header===!0&&"horizontal"===s.menu_position&&s.top_fixed===!1&&i.on("scroll",function(){i.scrollTop()>s.sticky_header_height?a===!0&&(n.fadeOut(200,function(){e(this).addClass(v).fadeIn(200)}),a=!1):a===!1&&(n.fadeOut(200,function(){e(this).removeClass(v).fadeIn(200)}),a=!0)}))},position:function(){"vertical-left"===s.menu_position?n.addClass("vertical-left"):"vertical-right"===s.menu_position&&n.addClass("vertical-right")}},i.menu_full_width(),i.logo_Align(),i.links_Align(),i.social_bar_Align(),i.search_bar_Align(),i.collapse_trigger_button(),i.hover_trigger(),i.mobile_trigger(),i.click_trigger(),i.scroll_bar(),i.top_Fixed(),i.sticky_Header(),i.position(),e(window).resize(function(){i.sticky_Header()})})}}(jQuery);