

/********************
 * 引用头部底部
 ********************/

 var CN_common_head =  '<ul class="list-flex-inline">'+
                          '<li class="m-gnavi"><a class="reverse-cta" href="javascript:void(0);">关于我们</a>'+
                              '<ul class="gnav_sub">'+
                                '<li>'+
                                  '<a href="CN_about_company.html">关于公司</a>'+
                                '</li>'+
                                '<li>'+
                                  '<a href="CN_about_leader.html">关于领导</a>'+
                                '</li>'+
                              '</ul>'+
                          '</li>'+
                          '<li><a class="reverse-cta" href="CN_content.html">公司内容</a></li>'+
                          '<li><a class="reverse-cta" href="CN_product.html">公司产品</a></li>'+
                          '<li><a class="reverse-cta" href="CN_cooperation.html">合作案例</a></li>'+
                          '<li><a class="reverse-cta" href="CN_contact.html">联系方式</a></li>'+
                          '<li><a class="reverse-cta" href="CN_join.html">欢迎加入</a></li>'+
                        '</ul>';

$("#CN_common_head").html(common_head);

var common_foot = '<div class="container">'+
                   '<div class="row mb-5">'+
                    '<div class="col-xs-12 col-md-2 mb-xs-3">'+
                     '<a aria-current="page" class="logo" href="/">'+
                        'LazyJoy'+
                      '</a>'+
                    '</div>'+
                    '<div class="col-xs-12 col-md-3 col-md-offset-1 mb-xs-4 mb-md-0">'+
                     '<a class="col-header" href="/about">关于LazyJoy</a>'+
                    '</div>'+
                    '<div class="col-xs-12 col-md-3">'+
                     '<a class="col-header mb-4" href="">新闻中心</a>'+
                     '<a class="col-header mb-4" href="">作为Lazyjoyer</a>'+
                     '<a class="col-header mb-4" href="">加入Lazyjoyer</a>'+
                     '<a class="col-header mb-4" href="">联系我们</a>'+
                    '</div>'+
                    '<div class="col-xs-12 col-md-3">'+
                     '<p class="mb-4">香港九龍旺角彌敦道610號荷李活商業中心1318-19室</p>'+
                     '<p class="mb-4">北京市朝阳区东三环中路39号院 建外SOHO东区 5号楼2002室</p>'+
                     '<ul class="list-inline">'+
                      '<li><a href="" target="_blank" rel="noopener noreferrer">'+
                        '<svg width="17" height="17" viewbox="0 0 24 24">'+
                         '<title>facebook</title>'+
                         '<path d="M21.965 0H1.284C.574 0 0 .582 0 1.3v20.937c0 .716.574 1.298 1.284 1.298h11.135v-9.114h-3.03v-3.552h3.03V8.25c0-3.04 1.834-4.695 4.513-4.695 1.284 0 2.386.097 2.707.14v3.177l-1.857.001c-1.457 0-1.74.701-1.74 1.729v2.268h3.475l-.452 3.552h-3.022v9.113h5.924a1.29 1.29 0 0 0 1.282-1.3V1.3C23.249.582 22.674 0 21.965 0z" fill="#FFF" fill-rule="evenodd"></path>'+
                        '</svg></a></li>'+
                      '<li><a href="" target="_blank" rel="noopener noreferrer">'+
                        '<svg width="18" height="18" viewbox="0 0 23 24">'+
                         '<title>instagram</title>'+
                         '<path d="M11.5 2.163c3.07 0 3.435.012 4.648.07 3.116.148 4.572 1.691 4.714 4.919.056 1.265.066 1.645.066 4.849 0 3.205-.011 3.584-.066 4.849-.143 3.225-1.595 4.771-4.714 4.919-1.213.058-1.576.07-4.648.07-3.07 0-3.435-.012-4.647-.07-3.124-.149-4.572-1.699-4.714-4.92-.056-1.265-.067-1.644-.067-4.849 0-3.204.012-3.583.067-4.849.143-3.227 1.595-4.771 4.714-4.919 1.213-.057 1.577-.069 4.647-.069zM11.5 0C8.377 0 7.986.014 6.76.072 2.582.272.261 2.69.07 7.052.013 8.333 0 8.741 0 12c0 3.259.013 3.668.069 4.948.192 4.358 2.509 6.78 6.69 6.98 1.227.058 1.618.072 4.741.072 3.123 0 3.515-.014 4.742-.072 4.172-.2 6.5-2.618 6.688-6.98.057-1.28.07-1.689.07-4.948 0-3.259-.013-3.667-.069-4.947-.188-4.354-2.508-6.78-6.688-6.98C15.015.014 14.623 0 11.5 0zm0 5.838c-3.261 0-5.905 2.759-5.905 6.162s2.644 6.163 5.905 6.163 5.905-2.759 5.905-6.163c0-3.403-2.644-6.162-5.905-6.162zM11.5 16c-2.117 0-3.833-1.79-3.833-4 0-2.209 1.716-4 3.833-4s3.833 1.791 3.833 4c0 2.21-1.716 4-3.833 4zm6.14-11.845c-.764 0-1.382.645-1.382 1.44 0 .795.618 1.44 1.381 1.44.762 0 1.38-.645 1.38-1.44 0-.795-.618-1.44-1.38-1.44z" fill="#FFF" fill-rule="nonzero"></path>'+
                        '</svg></a></li>'+
                      '<li><a href="" target="_blank" rel="noopener noreferrer">'+
                        '<svg width="18" height="15" viewbox="0 0 23 20">'+
                         '<title>twitter</title>'+
                         '<path d="M23 2.309a9.117 9.117 0 0 1-2.71.775A4.9 4.9 0 0 0 22.365.36a9.218 9.218 0 0 1-2.997 1.195A4.622 4.622 0 0 0 15.924 0c-3.047 0-5.286 2.966-4.597 6.045C7.406 5.84 3.929 3.88 1.6.901.365 3.114.961 6.009 3.061 7.475a4.55 4.55 0 0 1-2.136-.616c-.052 2.281 1.515 4.415 3.784 4.89a4.539 4.539 0 0 1-2.131.084c.6 1.956 2.342 3.379 4.408 3.419C5.003 16.875 2.503 17.6 0 17.292a12.958 12.958 0 0 0 7.234 2.212c8.76 0 13.71-7.721 13.411-14.646A9.85 9.85 0 0 0 23 2.309z" fill="#FFF" fill-rule="evenodd"></path>'+
                        '</svg></a></li>'+
                     '</ul>'+
                    '</div>'+
                   '</div>'+
                  '</div>';
$("#common_foot").html(common_foot);




