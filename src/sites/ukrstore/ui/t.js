(function () {
	var __webpack_modules__ = {
			661: function () {
				function _typeof(e) {
					return (
						(_typeof =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											'function' == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? 'symbol'
											: typeof e;
								  }),
						_typeof(e)
					);
					/*!
					 * Bff.Utilites.Admin.js
					 * @author Tamaranga | tamaranga.com
					 */
				}
				var $block, cont, warns, hide_timeout, err_clicked;
				(app.adm = true),
					(app.coreVersion = 2),
					bff.extend(bff, {
						theme: 'v2',
						confirm: (function (e) {
							function t(t, n) {
								return e.apply(this, arguments);
							}
							return (
								(t.toString = function () {
									return e.toString();
								}),
								t
							);
						})(function (e, t) {
							t = t || {};
							var n = { sure: 'Р’С‹ СѓРІРµСЂРµРЅС‹?' },
								r = confirm(n.hasOwnProperty(e) ? n[e] : e);
							return r && t.hasOwnProperty('r') && bff.redirect(t.r), r;
						}),
						adminLink: function (e, t) {
							return '?s=' + t + '&ev=' + e;
						},
						userinfo: function (e) {
							return (
								e &&
									('v2' == bff.theme
										? $.fancybox('', {
												ajax: true,
												href:
													bff.adminLink('ajax&act=user-info&id=', 'users') + e,
										  })
										: bff.modal(
												bff.adminLink('ajax&act=user-info&id=', 'users') + e
										  )),
								false
							);
						},
						onTab: function (e, t) {
							var n = 'tab-active';
							'v3' == bff.theme && (n = 'active'),
								(e = $(e).hasClass('tab') ? $(e) : $(e).parent()).addClass(n),
								(t = t || e.siblings()).removeClass(n),
								'v3' == bff.theme && bff.mobileTabsTitle(e);
						},
						langTab: function langTab(lang, prefix, toggler) {
							var $block;
							((toggler = $(toggler)), toggler.hasClass('j-lang-toggler'))
								? ('v2' == bff.theme
										? ($block = toggler.closest('.box-content:visible'))
										: (($block = toggler.closest('.l-content')),
										  $block.length || ($block = toggler.closest('.modal'))),
								  $block.length &&
										($block
											.find('.j-lang-togglers a')
											.removeClass('active')
											.filter('.lng-' + lang)
											.addClass('active'),
										$block
											.find('.j-lang-form')
											.addClass('displaynone')
											.filter('.j-lang-form-' + lang)
											.removeClass('displaynone'),
										$block.find('.j-publicator').each(function () {
											var obj = $(this).data('object');
											obj.length && eval(obj + ".setLang('" + lang + "');");
										}),
										$block
											.find('.j-lang-togglers-title')
											.text(toggler.attr('title')),
										$block
											.find('.j-lang-togglers-icon')
											.html(toggler.find('.j-lang-icon').html())))
								: (bff.onTab(toggler),
								  toggler
										.closest('form:visible')
										.find('.j-lang-form')
										.addClass('displaynone')
										.filter('.j-lang-form-' + lang)
										.removeClass('displaynone'));
							return false;
						},
						langCurrent: function (e) {
							return (
								e || (e = 'country'),
								app.$B.find('.j-lang-toggler.active:first').data(e)
							);
						},
						errors:
							((hide_timeout = false),
							(err_clicked = false),
							$(function () {
								($block = $('#warning')),
									(cont = $block.find('.warnblock-content')).length ||
										(cont = $block.find('.j-content')),
									(warns = $('.warns', $block)),
									$block.is(':visible') &&
										bff.errors.show(false, { init: true }),
									$block.on('click', function () {
										err_clicked || (err_clicked = true);
									}),
									$block.on('click', '.j-close', function (e) {
										nothing(e), bff.errors.hide();
									});
							}),
							{
								show: function (e, t) {
									t = t || { init: false, timeout: 5e3 };
									var n = { msg: e };
									if (($(window).trigger('bff.errors.show', n), (e = n.msg))) {
										var r = $block.hasClass('show');
										if (!t.init) {
											if ($.isArray(e)) {
												if (!e.length) return;
												e = e.join('<br/>');
											} else if ($.isPlainObject(e)) {
												var i = [];
												for (var o in e)
													e.hasOwnProperty(o) && e[o].length && i.push(e[o]);
												if (!i.length) return;
												e = i.join('<br/>');
											}
											t.append && r
												? (warns.html(warns.html() + '<li>' + e + '</li>'),
												  clearTimeout(hide_timeout))
												: warns.html('<li>' + e + '</li>'),
												t.success
													? cont
															.addClass('success alert-success')
															.removeClass('error alert-danger')
													: cont
															.addClass('error alert-danger')
															.removeClass('success alert-success'),
												r || ($block.addClass('show'), (r = true));
										}
										r &&
											((err_clicked = false),
											hide_timeout && clearTimeout(hide_timeout),
											-1 !== t.timeout &&
												(hide_timeout = setTimeout(function () {
													err_clicked || $block.removeClass('show'),
														clearTimeout(hide_timeout);
												}, t.timeout || 5e3)));
									}
								},
								hide: function () {
									hide_timeout && clearTimeout(hide_timeout),
										(err_clicked = false),
										$block.removeClass('show');
								},
								stop_hide: function () {
									(err_clicked = true),
										hide_timeout && clearTimeout(hide_timeout);
								},
							}),
						error: function (e, t) {
							return bff.errors.show(e, t), false;
						},
						success: function (e, t) {
							t && $.isPlainObject(t)
								? (t.success = true)
								: (t = { success: true }),
								bff.errors.show(e, t);
						},
						busylayer: function (e, t) {
							(t = t || new Function()), (e = e || false);
							var n = $('#busyLayer'),
								r = document;
							if (!n || !n.length) {
								var i = r.getElementsByTagName('body')[0];
								((n = r.createElement('div')).id = 'busyLayer'),
									(n.className = 'busyLayer'),
									(n.style.display = 'none'),
									(n.style.textAlign = 'center'),
									i.appendChild(n),
									(n = $(n)).css({
										filter: 'Alpha(Opacity=65)',
										opacity: '0.65',
									});
							}
							if (n.is(':visible')) return e && n.fadeOut(500, t), false;
							var o = $(r).height();
							return (
								n
									.css({ height: o + 'px', paddingTop: o / 2 + 'px' })
									.fadeIn(500, t),
								false
							);
						},
						ajaxToggleWorking: false,
						ajaxToggle: function (e, t, n) {
							if (!bff.ajaxToggleWorking) {
								bff.ajaxToggleWorking = true;
								var r = bff.theme,
									i = $.extend(
										{
											link: '#lnk_',
											block: 'block',
											unblock: 'unblock',
											progress: false,
											toggled: false,
											complete: false,
										},
										n || {}
									);
								if ((i.theme && (r = i.theme), '' != t && null != t))
									if (e <= 0) $.assert(false, 'ajaxToggle: empty record_id');
									else {
										if (
											('v3' == r &&
												((i.block = 'fa-toggle-off'),
												(i.unblock = 'fa-toggle-on')),
											'object' == _typeof(i.link))
										) {
											var o = $(i.link).data('toggle-type');
											'check' == o || $(i.link).hasClass('check')
												? ((i.block = 'unchecked'), (i.unblock = 'checked'))
												: 'fav' == o &&
												  ((i.block = 'fav'), (i.unblock = 'unfav'));
										}
										var a = null;
										bff.ajax(
											t,
											{ rec: e, toggled: i.toggled },
											function (t) {
												var n = 'object' == _typeof(t);
												do {
													if ((n && t && t.success) || (!n && 0 != t))
														if (i.toggled)
															t.toggled.each(function (e) {
																null !=
																	(a = !$(i.link + e).length || $(i.link)) &&
																	(a.removeClass(
																		t.status ? i.block : i.unblock
																	),
																	a.addClass(t.status ? i.unblock : i.block));
															});
														else if (
															null !=
															(a =
																'object' == _typeof(i.link)
																	? $(i.link)
																	: $(i.link + e))
														) {
															if ('v3' == r) {
																a.tooltip('hide');
																var o = a.attr('data-title-toggle');
																if (
																	(o &&
																		(a.attr(
																			'data-title-toggle',
																			a.attr('data-original-title')
																		),
																		a.attr('data-original-title', o)),
																	a.data('toggle-active'))
																) {
																	a.toggleClass('active');
																	break;
																}
																a = a.find('.ico');
															} else 'v3' == bff.theme && a.tooltip('hide');
															var s = a.hasClass(i.unblock);
															a.removeClass(s ? i.unblock : i.block),
																a.addClass(s ? i.block : i.unblock);
														}
												} while (0);
												i.complete && i.complete(t),
													(bff.ajaxToggleWorking = false);
											},
											i.progress
										);
									}
								else $.assert(false, 'ajaxToggle: empty URL');
							}
						},
						ajaxDeleteWorking: false,
						ajaxDelete: function (e, t, n, r, i) {
							if (!bff.ajaxDeleteWorking && (false === e || bff.confirm(e))) {
								bff.ajaxDeleteWorking = true;
								var o = $.extend(
									{
										paramKey: 'rec',
										progress: false,
										remove: true,
										repaint: true,
									},
									i || {}
								);
								if ('' != n && null != n) {
									t <= 0 && $.assert(false, 'ajaxDelete: empty recordID');
									var a = {};
									(a[o.paramKey] = t),
										bff.ajax(
											n,
											a,
											function (e, t) {
												if (
													e &&
													(!e.hasOwnProperty('success') || e.success) &&
													(!t || !t.length)
												) {
													if (e.hasOwnProperty('modal')) {
														bff.ajaxDeleteWorking = false;
														var n = $(e.modal);
														return (
															app.$B.append(n),
															n.one('hidden.bs.modal', function () {
																n.remove();
															}),
															void n.modal('show')
														);
													}
													if (
														(o.onComplete && o.onComplete(e, o), o.remove && r)
													) {
														$link = $(r);
														var i = $link.parents(
															'v2' == bff.theme
																? 'table.admtbl'
																: 'table.l-table'
														);
														i.length &&
															($link.parents('tr:first').remove(),
															o.repaint &&
																i.find('tr[class^=row]').each(function (e, t) {
																	$(t).attr('class', 'row' + (e % 2));
																}));
													}
												}
												bff.ajaxDeleteWorking = false;
											},
											o.progress
										);
								} else $.assert(false, 'ajaxDelete: empty URL');
							}
						},
						rotateTable: function (e, t, n, r, i, o, a) {
							$.tableDnD &&
								((r = r || $.noop),
								(o = o || 'rotate'),
								(i = i || {}),
								(e = $(e)),
								(a = $.extend(
									{ before: false, dragHandle: '.j-dnd-handle' },
									a || {}
								)).dragHandle &&
									0 === e.find(a.dragHandle).length &&
									(a.dragHandle = null),
								e.tableDnD({
									onDragClass: o,
									onDrop: function (e, o, s, l, c) {
										c &&
											false !== t &&
											(false !== a.before && (i = a.before(i, o, s, l, c)),
											bff.ajax(
												t,
												$.extend(
													{ dragged: o.id, target: s.id, position: l },
													i
												),
												r,
												n
											));
									},
									dragHandle: a.dragHandle,
								}),
								e.on('click', '.j-mobile-rotate', function (o) {
									o.preventDefault();
									var a = $(this),
										s = a.data('dir');
									if (s.length) {
										var l = a.closest('tr');
										if (l.length) {
											var c,
												u,
												f,
												d = intval(l.data('numlevel')),
												p = '';
											switch ((s = s.toLowerCase())) {
												case 'up':
													u = l;
													do {
														(u = u.prev('tr')),
															(c = intval(u.data('numlevel')));
													} while (u.length && d && c && d < c);
													(p = 'before'),
														(f = function () {
															l.after(u);
														});
													break;
												case 'down':
													u = l;
													do {
														(u = u.next('tr')),
															(c = intval(u.data('numlevel')));
													} while (u.length && d && c && d < c);
													(p = 'after'),
														(f = function () {
															l.before(u);
														});
											}
											u.length &&
												((d && c && d != c) ||
													bff.ajax(
														t,
														$.extend(
															{
																dragged: l.attr('id'),
																target: u.attr('id'),
																position: p,
															},
															i
														),
														function (t, n) {
															if ((r(t, n), t)) {
																var i = t.hasOwnProperty('success');
																if ((i && t.success) || !i) {
																	var o = u.attr('id').substr(4),
																		a = l.attr('id').substr(4);
																	e.find('tr[data-pid="' + o + '"]').length ||
																	e.find('tr[data-pid="' + a + '"]').length
																		? location.reload()
																		: f();
																}
															}
														},
														n
													));
										}
									}
								}));
						},
						textLimit: function (e, t, n) {
							var r = document.getElementById(e);
							r.value.length > t && (r.value = r.value.substring(0, t)),
								n && (document.getElementById(n).value = r.value.length);
						},
						textInsert: function (e, t, n) {
							var r = $(e);
							if (r.length)
								if (
									((r = r.get(0)),
									-1 == navigator.userAgent.indexOf('Opera') && r.focus(),
									document.selection)
								)
									document.selection.createRange().text = t + ' ';
								else if (r.selectionStart || 0 == r.selectionStart) {
									n &&
										n.open &&
										n.close &&
										(t =
											n.open +
											r.value.substring(r.selectionStart, r.selectionEnd) +
											n.close);
									var i = r.value.substring(0, r.selectionStart);
									if (
										((r.value =
											i +
											t +
											r.value.substring(r.selectionEnd, r.value.length)),
										o)
									)
										r.selectionStart = r.selectionEnd = i.length + o;
									else {
										var o = i.length + t.length;
										r.selectionStart = r.selectionEnd = o;
									}
								} else r.value += t;
						},
						textReplace: function (e, t) {
							var n;
							for (n in ((e = e.toString()), (t = t || {})))
								t.hasOwnProperty(n) &&
									(e = e.replace(new RegExp(n, 'g'), t[n]));
							return e;
						},
						formSelects: {
							MoveAll: function (e, t) {
								for (
									var n = document.getElementById(e),
										r = document.getElementById(t),
										i = 0;
									i < n.options.length;
									i++
								) {
									var o = new Option(
										n.options[i].text,
										n.options[i].value,
										false
									);
									(o.style.color = n.options[i].style.color), r.options.add(o);
								}
								n.options.length = 0;
							},
							MoveSelect: function (e, t) {
								for (
									var n = document.getElementById(e),
										r = document.getElementById(t),
										i = n.options.length - 1;
									i >= 0;
									i--
								)
									if (1 == n.options[i].selected) {
										var o = new Option(
											n.options[i].text,
											n.options[i].value,
											false
										);
										(o.style.color = n.options[i].style.color),
											r.options.add(o),
											(n.options[i] = null);
									}
							},
							SelectAll: function (e) {
								var t = document.getElementById(e);
								for (i = 0; i < t.options.length; i++)
									t.options[i].selected = true;
							},
							hasOptions: function (e) {
								return document.getElementById(e).options.length;
							},
						},
						formChecker: function (e, t, n) {
							var r = this;
							$(function () {
								r.initialize(e, t), n && n();
							});
						},
						pgn: function (e, t) {
							var n = this;
							$(function () {
								n.initialize(e, t);
							});
						},
						generateKeyword: function (e, t, n) {
							var r = (e = $(e)).length ? $.trim(e.val()) : '';
							return (
								r.length > 0 &&
									bff.ajax(
										n || bff.adminLink('ajax&act=generate-keyword', 'site'),
										{ title: r },
										function (e) {
											e.res && (t = $(t)).length && t.val(e.keyword);
										}
									),
								false
							);
						},
						expandNS: function (e, t, n) {
							n = $.extend(
								{
									progress: false,
									cookie: false,
									afterInsert: false,
									session: false,
								},
								n || {}
							);
							var r = [];
							if (n.cookie) {
								r = (r = bff.cookie(n.cookie)) ? r.split('.') : [];
								for (var i = 0; i < r.length; i++) r[i] = intval(r[i]);
							}
							n.progress || (n.progress = bff.progress);
							var o = $('#dnd-' + e),
								a = [];
							for (i = intval(o.data('numlevel')); i >= 1; i--)
								a.push('[data-numlevel=' + i + ']');
							var s = o.nextUntil(a.join(',')),
								l = { expires: 45, domain: '.' + app.host };
							if (s.length) {
								var c = [];
								s.each(function (e, t) {
									var n = intval($(t).data('pid'));
									-1 == $.inArray(n, c) && c.push(n);
								});
								var u = s.is(':visible');
								o.data('expanded', u ? 0 : 1);
								for (i = 0; i < c.length; i++) {
									var f = $.inArray(c[i], r);
									u ? -1 !== f && r.splice(f, 1) : -1 === f && r.push(c[i]);
								}
								'v2' == bff.theme
									? u
										? s.hide()
										: s.filter('[data-pid="' + e + '"]').show()
									: u
									? s.addClass('hide').data('expanded', 0)
									: s.filter('[data-pid="' + e + '"]').removeClass('hide'),
									n.session &&
										bff.ajax(t + e, { sessionSave: 1, visible: u ? 0 : 1 }),
									n.cookie &&
										bff.cookie(n.cookie, r.length ? r.join('.') : '', l),
									o.trigger('expandNS.toggle');
							} else
								bff.ajax(
									t + e,
									{},
									function (t) {
										if (t) {
											(!t.hasOwnProperty('cnt') || intval(t.cnt) > 0) &&
												r.push(e);
											var i = o.after(t.list).nextAll('[data-pid="' + e + '"]');
											'v2' == bff.theme ? i.show() : i.removeClass('hide'),
												n.cookie &&
													bff.cookie(n.cookie, r.length ? r.join('.') : '', l),
												n.afterInsert
													? n.afterInsert()
													: o.parent().tableDnDUpdate(),
												o.data('expanded', 1),
												o.trigger('expandNS.toggle');
										}
									},
									n.progress
								);
						},
						datepicker: function (e, t) {
							if (app.lang && $.datepicker && $.datepicker.regional)
								if ($.datepicker.regional.hasOwnProperty(app.lang))
									$.datepicker.setDefaults($.datepicker.regional[app.lang]);
								else if (
									app.country &&
									$.datepicker.regional.hasOwnProperty(app.country)
								)
									$.datepicker.setDefaults($.datepicker.regional[app.country]);
								else {
									var n = app.lang + '-' + app.country.toLocaleUpperCase();
									$.datepicker.regional.hasOwnProperty(n) &&
										$.datepicker.setDefaults($.datepicker.regional[n]);
								}
							$(e).attachDatepicker(t || {});
						},
						bootstrapJS: function () {
							return $.fn.hasOwnProperty('button');
						},
						list: function (e, t) {
							var n,
								r,
								i,
								o,
								a,
								s,
								l = false,
								c = false,
								u = false,
								f = false,
								d = false,
								p = false,
								h = false,
								m = 0,
								g = { autocomplete: {} },
								v = {
									init: function () {
										if (c) return false;
										if (
											((c = true),
											(t = $.extend(
												{
													list: '.j-list',
													alerts: '.j-alerts',
													pgn: '.j-list-pgn',
													filter: '.j-list-filter form',
													tabs: '.j-tabs',
													perPageSelector: '.j-perpage-selector',
													perPageValue: '.j-perpage-value',
													onInit: $.noop,
													onSubmit: $.noop,
													onReset: $.noop,
													onProgress: false,
													onPopstate: $.noop,
													onFormPopstate: false,
													onTabChange: $.noop,
													rotate: false,
													isRotate: false,
													orderSeparator: ' ',
													dateRange: '-3:+3',
													more: false,
													onBeforeSubmitQueryPlus: $.noop,
													formTab: false,
													responsive: false,
													subAction: 'act',
													refreshTimeout: 0,
													ajaxParams: '',
													deleteParams: {},
													toggleParams: {},
													ajaxInit: false,
													onFormUrl: false,
													mass: false,
													total: 0,
													onEnterSubmit: false,
												},
												t || {}
											)),
											!(n = v.block = $(e)).length)
										)
											return false;
										if (!(r = v.filter = $(t.filter, n)).length) return false;
										if (((i = v.list = $(t.list, n)), !i.length)) return false;
										(o = v.alerts = $(t.alerts, n)),
											false !== t.pgn &&
												(d = v.pgn = $(t.pgn, n)).length &&
												d.on('click', '.j-pgn-page', function (e) {
													e.preventDefault(),
														v.page($(this).data('page'), true);
												}),
											false !== t.perPageSelector &&
												false !== t.perPageValue &&
												(n.on('change', t.perPageSelector, function () {
													var e = intval($(this).val());
													e &&
														(r.find(t.perPageValue).val(e),
														v.submit({ resetPage: true }));
												}),
												n.on('click', t.perPageSelector, function (e) {
													e.preventDefault();
													var i = $(this),
														o = intval(i.data('val'));
													o &&
														(r.find(t.perPageValue).val(o),
														v.submit({ resetPage: true }),
														n.find('.j-perpage-selected-value').text(i.text()));
												})),
											false !== t.tabs &&
												((f = v.tabs =
													bff.tabs($(t.tabs, n), {
														onChange: function (e, n) {
															t.onTabChange.call(v, e, n),
																r.find('.j-tab-value').val(e),
																i.trigger('list.onTab', { key: e, tab: n }),
																n.data('ajax') || v.submit({ resetPage: true });
														},
														mainBlock: n,
														mainBlockContent: n.find('.j-list-block'),
													})),
												v.rotate()),
											false !== t.more &&
												((a = n.find('.j-more')),
												(s = a.find('.j-total')),
												a.click(function (e) {
													e.preventDefault(),
														v.submit({ urlUpdate: false, more: true });
												})),
											i.on('click', '.j-toggle', function (e) {
												e.preventDefault();
												var n = intval($(this).data('id')),
													r = $(this).data('type');
												if (n > 0) {
													var i = $.extend(
														{
															progress: function (e) {
																v.progress(e, false);
															},
															link: this,
														},
														t.toggleParams
													);
													bff.ajaxToggle(
														n,
														v.url() + 'toggle&type=' + r + '&id=' + n,
														i
													);
												}
											}),
											i.on('click', '.j-delete', function (e) {
												e.preventDefault();
												var n = $(this).attr('href');
												if (!n || 'javascript:' === n) {
													var r = $(this).data('id');
													r && (n = v.url() + 'delete&id=' + r);
												}
												(t.deleteParams = $.extend(
													{ repaint: false },
													t.deleteParams
												)),
													bff.ajaxDelete('sure', r, n, this, t.deleteParams);
											}),
											i.on('click', '.j-sort', function (e) {
												e.preventDefault();
												var n = $(this);
												r
													.find('.j-order-value')
													.val(
														n.data('id') +
															t.orderSeparator +
															n.data('direction')
													),
													v.submit({ resetPage: true });
											}),
											t.mass && v.mass.init();
										var l = v.query();
										if (
											($(window).on('popstate', function (e) {
												var n = history.location || document.location,
													i = n.search.substr(1);
												if (i.indexOf('act=') >= 0) {
													if (t.onFormPopstate && t.onFormPopstate(i)) return;
													v.action('url', n.href, { popstate: true });
												} else {
													p &&
														p.block &&
														p.block.is(':visible') &&
														v.action('cancel', '', { popstate: true }),
														0 == i.length && (i = l),
														r.deserialize(i, true),
														t.onPopstate.call(v),
														r
															.find('[data-input="autocomplete-value"]')
															.each(function () {
																var e = $(this),
																	t = e.attr('name'),
																	n = e.val();
																t &&
																	n &&
																	g.autocomplete.hasOwnProperty(t) &&
																	g.autocomplete[t].hasOwnProperty(n) &&
																	r
																		.find('#' + e.data('text'))
																		.val(g.autocomplete[t][n]);
															});
													var o = r.find('.j-tab-value');
													o.length && f.set(o.val()),
														v.submit({ urlUpdate: false });
												}
											}),
											n.on('click', '.j-form-url', function (e) {
												e.preventDefault();
												var n = $(this).attr('href');
												bff.mobileTabsTitle('.j-tab'),
													(t.onFormUrl && t.onFormUrl(n)) || v.action('url', n);
											}),
											n.on('click', '.j-form-popup', function (e) {
												e.preventDefault(),
													v.action('popup', $(this).attr('href'));
											}),
											r.find('.j-datepicker').each(function () {
												bff.datepicker($(this), { yearRange: t.dateRange });
											}),
											r.on('click', '.j-button-more', function () {
												r.find('.j-more').removeClass('more-hide'),
													r.find('.j-more-state').val(1),
													$(this).hide();
											}),
											r.on('click', '.j-button-reset', function (e) {
												e.preventDefault(), v.reset();
											}),
											r.on('click', '.j-button-submit', function (e) {
												e.preventDefault(), v.submit({ resetPage: false });
											}),
											r.on('autocomplete.select', function (e, t) {
												if (t) {
													var n = r.find('[name="' + t + '"]');
													if (n.length) {
														var i = n.val();
														if (i) {
															var o = r.find('#' + n.data('text'));
															if (o.length) {
																var a = o.val();
																a &&
																	(g.autocomplete.hasOwnProperty(t) ||
																		(g.autocomplete[t] = {}),
																	(g.autocomplete[t][i] = a));
															}
														}
													}
												}
											}),
											t.onEnterSubmit &&
												(r.on('change', function (e) {
													if (e.target) {
														var t = $(e.target);
														if (t.length && t.hasClass('j-input'))
															switch (t.data('input')) {
																case 'autocomplete-value':
																case 'select':
																case 'checkbox':
																	v.submit({ scroll: false });
															}
													}
												}),
												r.on('keyup', function (e) {
													if (e.keyCode && 13 == e.keyCode && e.target) {
														var t = $(e.target);
														t.length &&
															t.hasClass('j-input') &&
															'text' == t.data('input') &&
															v.submit({ scroll: false });
													}
												})),
											t.onInit.call(v, i, r, f),
											n.find('.j-tooltip').tooltip(),
											t.responsive && bff.makeResponsive(i),
											false !== t.form &&
												((p = (function (e) {
													var t = (e = $.extend(
														{ onInit: $.noop, block: false },
														e || {}
													));
													return (
														(t.block = $(e.block)),
														!!t.block.length &&
															(t.block.on('list.cancel', function (e) {
																nothing(e), v.action('cancel');
															}),
															t.block.on('list.refresh', function (e) {
																nothing(e), v.action('cancel'), v.submit();
															}),
															t.block.on('list.update', function (e) {
																nothing(e), v.submit({ urlUpdate: false });
															}),
															t.block.on('form.reload', function (e, t) {
																nothing(e),
																	t || (t = window.location.href),
																	(t = $('<div/>').html(t).text()),
																	v.action('url', t),
																	v.submit({
																		urlUpdate: false,
																		processing: false,
																	});
															}),
															t.block.on('list.delete', function (e, t) {
																nothing(e),
																	t &&
																		bff.confirm('sure') &&
																		bff.ajax(
																			v.url() + 'delete&id=' + t,
																			{},
																			function (e) {
																				e &&
																					e.success &&
																					(v.action('cancel'), v.submit());
																			}
																		);
															}),
															t)
													);
												})(t.form || {})),
												false === p ||
													p.block.is(':empty') ||
													v.formToggle(true)),
											t.hasOwnProperty('nestedSetsTree') &&
												(i.on('click', '.j-nested-set-expand', function (e) {
													e.preventDefault();
													var n = $(this),
														r = intval(n.data('id'));
													r > 0 &&
														(bff.expandNS(
															r,
															v.url() +
																'nested-sets-expand&pid=' +
																n.data('pid') +
																'&id=',
															{
																session: true,
																afterInsert: function () {
																	(t.nestedSetsTree.afterInsert &&
																		t.nestedSetsTree.afterInsert()) ||
																		v.rotate();
																},
																progress: function (e) {
																	v.progress(e, false);
																},
															}
														),
														v.rotate());
												}),
												'v3' == bff.theme &&
													i.on('expandNS.toggle', function (e) {
														i.find('.j-nested-set-expand[data-node="1"]').each(
															function () {
																var e = $(this),
																	t = e.closest('tr').data('expanded');
																void 0 === t && (t = e.data('expanded')),
																	(t = intval(t)),
																	e.data('expanded', t);
																var n = e.find('.ico');
																t
																	? n
																			.addClass('fa-folder-minus')
																			.removeClass('fa-folder-plus')
																	: n
																			.addClass('fa-folder-plus')
																			.removeClass('fa-folder-minus');
															}
														);
													})),
											!t.onProgress)
										) {
											var u = r.find('.j-progress');
											t.onProgress = u.length
												? function (e, t) {
														u.toggle(!!e);
												  }
												: $.noop;
										}
										v.refreshTimeout();
									},
									submit: function (e) {
										if (
											((e = $.extend(
												{
													urlUpdate: true,
													resetPage: false,
													scroll: false,
													fade: true,
													processing: true,
													more: false,
													refresh: false,
												},
												e || {}
											)),
											t.formTab && (e.urlUpdate = false),
											!e.processing || !l)
										) {
											e.resetPage && v.page(1, false),
												false !== t.more &&
													r
														.find('.j-more-counter')
														.val(e.more ? i.find('.j-more-item').length : '');
											var n = v.query(
												!!t.onBeforeSubmitQueryPlus &&
													t.onBeforeSubmitQueryPlus(e)
											);
											clearTimeout(m),
												bff.ajax(
													v.url(),
													n,
													function (n, l) {
														n && n.success
															? bff.loadCssJS(n, function (n) {
																	n.hasOwnProperty('list') && i.html(n.list),
																		n.hasOwnProperty('total') &&
																			(t.total = intval(n.total)),
																		n.hasOwnProperty('pgn') &&
																			false !== d &&
																			d.html(n.pgn),
																		n.hasOwnProperty('alerts') &&
																			o.length &&
																			o.html(n.alerts),
																		e.urlUpdate && v.urlUpdate(),
																		v.rotate(),
																		i.find('.j-tooltip').tooltip(),
																		false !== t.more &&
																			(n.hasOwnProperty('append') &&
																				(i
																					.find('.j-list-body')
																					.append(n.append),
																				r.find('.j-more-counter').val('')),
																			n.hasOwnProperty('more') &&
																				(a.toggleClass('d-none', !n.more),
																				n.hasOwnProperty('total') &&
																					s.text(n.total))),
																		(t.responsive || 'v3' == bff.theme) &&
																			bff.makeResponsive(i),
																		t.onSubmit(n, e),
																		i.trigger('list.submit', n),
																		v.refreshTimeout();
															  })
															: bff.errors.show(l);
													},
													function (t) {
														e.refresh ||
															(e.processing &&
																((l = t), v.progress(t, e.fade)));
													}
												);
										}
									},
									rotate: function () {
										if (t.isRotate) {
											u && (i.tableDnDRemove(), (u = false));
											var e = {},
												n = { callback: $.noop };
											t.isRotate(e, n) &&
												((u = true),
												bff.rotateTable(
													i,
													v.url() + 'rotate',
													function (e) {
														v.progress(e);
													},
													n.callback,
													e
												));
										} else if (f)
											if (f.rotate())
												if (u) i.tableDnDUpdate();
												else {
													u = true;
													var o = {};
													(o[r.find('.j-tab-value').attr('name')] = f.active()),
														bff.rotateTable(
															i,
															v.url() + 'rotate',
															function (e) {
																v.progress(e);
															},
															false,
															o
														);
												}
											else u && (i.tableDnDRemove(), (u = false));
										else
											t.rotate &&
												(u
													? i.tableDnDUpdate()
													: ((u = true),
													  bff.rotateTable(
															i,
															v.url() + 'rotate',
															function (e) {
																v.progress(e);
															},
															false
													  )));
									},
									refresh: function (e, t) {
										v.submit({ resetPage: e, urlUpdate: t });
									},
									refreshTimeout: function () {
										t.refreshTimeout &&
											(h ||
												(clearTimeout(m),
												(m = setTimeout(function () {
													v.submit({ refresh: true, urlUpdate: false });
												}, t.refreshTimeout))));
									},
									reset: function (e) {
										(e = e || { noSubmit: false }),
											t.onReset.call(v),
											r.find('.j-input').each(function () {
												switch ($(this).data('input')) {
													case 'hidden':
													case 'text':
													case 'autocomplete-title':
														$(this).val('');
														break;
													case 'autocomplete-value':
													case 'select':
														$(this).val(0);
														break;
													case 'checkbox':
														$(this).prop('checked', false);
												}
											}),
											e.noSubmit || v.submit({ scroll: false });
									},
									page: function (e, t) {
										(e = intval(e)) <= 0 && (e = 0);
										var n = r.find('.j-page-value');
										return n.length
											? (e &&
													intval(n.val()) != e &&
													(n.val(e),
													false !== t && (true === t && (t = {}), v.submit(t))),
											  n.val())
											: 0;
									},
									progress: function (e, n) {
										bff.progress(e),
											t.onProgress.call(v, e, n),
											n && i.toggleClass('disabled');
									},
									processing: function () {
										return l;
									},
									query: function (e) {
										var t = [];
										return (
											$.each(r.serializeArray(), function (e, n) {
												n.value &&
													0 != n.value &&
													'' != n.value &&
													t.push(n.name + '=' + encodeURIComponent(n.value));
											}),
											e &&
												$.each(e, function (e, n) {
													n.value &&
														0 != n.value &&
														'' != n.value &&
														t.push(n.name + '=' + encodeURIComponent(n.value));
												}),
											t.join('&')
										);
									},
									onTab: function (e) {
										false !== f && f.onTab(e);
									},
									url: function (e) {
										var n = r.attr('action') + '?';
										return true === e
											? n + v.query()
											: n +
													's=' +
													r.find('.j-module').val() +
													'&ev=' +
													r.find('.j-method').val() +
													t.ajaxParams +
													'&' +
													t.subAction +
													'=';
									},
									urlUpdate: function (e) {
										bff.h &&
											window.history.pushState(
												{},
												document.title,
												e || v.url(true)
											);
									},
									action: function (e, r, i) {
										var o = { act: e, url: r, params: i };
										switch ((n.trigger('list.action', o), e)) {
											case 'url':
												v.formInit(o.url, o.params);
												break;
											case 'reload-url':
												r ||
													((r = window.location.href),
													(r = $('<div/>').html(r).text()),
													(o.url = r),
													(o.popstate = false)),
													v.formInit(o.url, o.params),
													v.submit({ urlUpdate: false, processing: false });
												break;
											case 'popup':
												bff.ajax(
													o.url,
													o.params,
													function (e) {
														e &&
															e.success &&
															bff.loadCssJS(e, function (e) {
																e.hasOwnProperty('popup')
																	? v.popupInit(e.popup, o.params)
																	: e.hasOwnProperty('html') &&
																	  v.popupInit(e.html, o.params);
															});
													},
													function (e) {
														(l = e), v.progress(e, false);
													}
												);
												break;
											case 'cancel':
												p.block &&
													p.block.length &&
													(p.block.find('form').trigger('cancel'),
													p.block.html('')),
													(t.onFormPopstate = false),
													v.formToggle(false),
													(o.params && o.params.popstate) ||
														t.formTab ||
														v.urlUpdate(v.url(true));
										}
										return false;
									},
									formInit: function (e, n) {
										l ||
											bff.ajax(
												e,
												n,
												function (r) {
													r && r.success
														? bff.loadCssJS(r, function (r) {
																!r.hasOwnProperty('popup') ||
																r.hasOwnProperty('form')
																	? (p.block.html(r.form),
																	  v.formToggle(true),
																	  bff.mobileTabsTitle(p.block),
																	  bff.fixedLangsPosition(),
																	  (n && n.popstate) ||
																			t.formTab ||
																			v.urlUpdate(e))
																	: v.popupInit(r.popup, n);
														  })
														: v.formToggle(false);
												},
												function (e) {
													(l = e), v.progress(e);
												}
											);
									},
									popupInit: function (e, t) {
										'v3' == bff.theme
											? bff.modalShow(e, {
													onLoad: function (e) {
														bff.mobileTabsTitle(e),
															bff.fixedLangsPosition(),
															e
																.on('click', '.j-cancel', function () {
																	e.modal('hide');
																})
																.on('list.refresh', function () {
																	e.modal('hide'), v.submit();
																});
													},
											  })
											: $.fancybox({
													content: e,
													onComplete: function () {
														$('#fancybox-content')
															.on('click', '.j-cancel', function () {
																$.fancybox.close();
															})
															.on('list.refresh', function () {
																$.fancybox.close(), v.submit();
															});
													},
											  });
									},
									formToggle: function (e) {
										i.trigger('form.toggle', e),
											true === e
												? (p.block.removeClass('hidden'),
												  n.addClass('hidden'),
												  $.scrollTo(p.block, { duration: 500, offset: -300 }),
												  p.block.find('form').trigger('form.show'),
												  (h = true))
												: ((h = false),
												  v.refreshTimeout(),
												  p.block.addClass('hidden'),
												  n.removeClass('hidden'));
									},
									mass: {
										$bl: false,
										process: false,
										act: '',
										all: false,
										params: {},
										init: function () {
											(v.mass.$bl = n.find('.j-mass-actions-bl')),
												i.on('change', '.j-mass-check-item', function () {
													(v.mass.all = false),
														v.mass.calc(),
														i.trigger('mass.change');
												}),
												i.on('change', '.j-mass-check-all', function () {
													i
														.find('.j-mass-check-item')
														.prop('checked', $(this).is(':checked')),
														(v.mass.all = false),
														v.mass.calc(),
														i.trigger('mass.change');
												}),
												v.mass.$bl.on('click', '.j-mass-action', function (e) {
													e.preventDefault();
													var t = $(this),
														n = t.data('alias');
													n ? v.mass.action(n) : v.mass.action(t.data('id'));
												}),
												v.mass.onTab(),
												n.on('tab.select', function () {
													v.mass.onTab();
												}),
												n.on('list.submit', function () {
													(v.mass.all = false), v.mass.calc(), v.mass.onTab();
												}),
												n.on('click', '.j-mass-all', function (e) {
													e.preventDefault(),
														i.find('.j-mass-check-item').prop('checked', true),
														i.find('.j-mass-check-all').prop('checked', true),
														(v.mass.all = true),
														v.mass.calc(),
														i.trigger('mass.change');
												}),
												n.on('click', '.j-mass-all-page', function (e) {
													e.preventDefault(),
														i.find('.j-mass-check-item').prop('checked', true),
														i.find('.j-mass-check-all').prop('checked', true),
														(v.mass.all = false),
														v.mass.calc(),
														i.trigger('mass.change');
												}),
												n.on('click', '.j-mass-cancel', function (e) {
													e.preventDefault(),
														i.find('.j-mass-check-item').prop('checked', false),
														i.find('.j-mass-check-all').prop('checked', false),
														(v.mass.all = false),
														v.mass.calc(),
														i.trigger('mass.change');
												});
										},
										action: function (e) {
											if (!v.mass.process)
												if (
													((v.mass.act = e),
													(v.mass.params = {}),
													(v.mass.params[t.mass.action] = v.mass.act),
													v.mass.all
														? (v.mass.params.all = 1)
														: (v.mass.params.list = v.mass.selected()),
													v.filter.length &&
														$.map(v.filter.serializeArray(), function (e, t) {
															v.mass.params[e.name] = e.value;
														}),
													t.mass.hasOwnProperty('forms') &&
														t.mass.forms.hasOwnProperty(v.mass.act))
												) {
													var n = $(t.mass.forms[v.mass.act]);
													if (n.length) {
														n.hasClass('mass-i') ||
															(n.addClass('mass-i'),
															n.on('form.submit', function (e, t) {
																t &&
																	t.data &&
																	t.data.success &&
																	((t.data.success = false),
																	$.map(n.serializeArray(), function (e, t) {
																		v.mass.params[e.name] = e.value;
																	}),
																	v.mass.ajax(),
																	r.modal('hide'));
															}));
														var r = $(t.mass.forms[v.mass.act]).closest(
															'.modal'
														);
														r.length && r.modal('show'),
															r.on('click', '.j-cancel', function (e) {
																e.preventDefault(), r.modal('hide');
															});
													}
												} else bff.confirm('sure') && v.mass.ajax();
										},
										ajax: function () {
											v.mass.process ||
												((v.mass.process = true),
												bff.ajax(
													t.mass.url,
													v.mass.params,
													function (e) {
														if (((v.mass.process = false), e && e.success)) {
															if (
																t.mass.hasOwnProperty('after') &&
																t.mass.after.hasOwnProperty(v.mass.act) &&
																!t.mass.after[v.mass.act](e, v.mass.params)
															)
																return;
															e.redirect && bff.redirect(e.redirect),
																e.message
																	? bff.success(e.message)
																	: bff.success('Complete successful'),
																v.submit();
														}
													},
													app.$progress
												));
										},
										calc: function () {
											if (v.mass.$bl)
												if (v.mass.all)
													v.mass.$bl.find('.j-mass-total').text(t.total),
														v.mass.$bl.removeClass('hide');
												else {
													var e = i.find('.j-mass-check-item:checked').length;
													e
														? (v.mass.$bl.find('.j-mass-total').text(e),
														  v.mass.$bl.removeClass('hide'))
														: v.mass.$bl.addClass('hide');
												}
										},
										selected: function () {
											var e = [];
											return (
												i.find('.j-mass-check-item:checked').each(function () {
													e.push($(this).val());
												}),
												e
											);
										},
										onTab: function () {
											if (f) {
												var e = f.active() + '';
												if (e) {
													var t = 0,
														r = 0;
													v.mass.$bl.find('.j-mass-action').each(function () {
														t++;
														var n = $(this),
															i = n.data('tabs');
														void 0 !== i
															? (i = (i += '').split(',')).indexOf(e) < 0
																? n.addClass('d-none')
																: (n.removeClass('d-none'), r++)
															: r++;
													}),
														t &&
															(0 === r
																? (i
																		.find('.j-mass-check-item')
																		.closest('td')
																		.addClass('d-none'),
																  i
																		.find('.j-mass-check-all')
																		.closest('th')
																		.addClass('d-none'),
																  n
																		.find('.j-filter-mobile-mass')
																		.addClass('d-none'))
																: (i
																		.find('.j-mass-check-item')
																		.closest('td')
																		.removeClass('d-none'),
																  i
																		.find('.j-mass-check-all')
																		.closest('th')
																		.removeClass('d-none'),
																  n
																		.find('.j-filter-mobile-mass')
																		.removeClass('d-none')));
												}
											}
										},
									},
									param: function (e, n) {
										return void 0 !== n && (t[e] = n), t[e];
									},
								};
							return (
								$(function () {
									v.init(), n.trigger('list.initiated', v);
								}),
								v
							);
						},
						tabs: function (e, t) {
							t = $.extend(
								{
									onInit: $.noop,
									onChange: $.noop,
									active: '',
									activeClass: 'v3' == bff.theme ? 'active' : 'tab-active',
									ajax: true,
									rotate: false,
									mainBlock: false,
									mainBlockContent: false,
								},
								t || {}
							);
							var n = $(e);
							if (!n.length) return false;
							var r = {},
								i = n.find('.j-box-tabs-active'),
								o = n.find('.' + t.activeClass + ' .j-tab');
							function a(e, r) {
								(t.active = e),
									(r = r || n.find('.j-tab[data-tab="' + e + '"]')),
									(t.rotate = !!intval(r.data('rotate'))),
									t.onChange(e, r),
									l(e, r, {
										onShown: function () {
											s(e, r);
										},
									}) || s(e, r);
							}
							function s(e, r) {
								var o = $(r);
								o.hasClass('tab') || (o = o.parent()),
									'v3' == bff.theme
										? (o
												.closest('.l-box-tabs-wrapper')
												.find('.active')
												.removeClass('active'),
										  o.addClass(t.activeClass))
										: o
												.addClass(t.activeClass)
												.siblings()
												.removeClass(t.activeClass),
									n.trigger('tab.select', e),
									(function (e) {
										if ('v3' != bff.theme) return;
										i.html(e.find('.j-tab-title').html()),
											n.removeClass('open'),
											n.find('.collapse').collapse('hide');
									})(r);
							}
							function l(e, i, o) {
								o = o || {};
								var a = function () {
										for (var e in r)
											r.hasOwnProperty(e) && r[e].addClass('d-none');
										t.mainBlockContent.addClass('d-none');
									},
									s = function () {
										t.mainBlockContent.removeClass('d-none');
									},
									l = i.data('ajax');
								if (!l) return a(), s(), false;
								if (!t.mainBlock) return a(), s(), false;
								if (!t.mainBlockContent) return a(), s(), false;
								if (r.hasOwnProperty(e)) {
									var c = $(r[e]);
									if (c.length && c.closest('body').length)
										return (
											a(),
											c.removeClass('d-none'),
											o.onShown && o.onShown(),
											true
										);
									delete r[e];
								}
								return (
									bff.blockAjaxInit(i, {
										url: l,
										onShow: function (s) {
											a();
											var l =
												'j-tabs-content-' +
												e +
												'-' +
												Math.floor(123456 * Math.random());
											t.mainBlock.after(
												'<div id="' + l + '" class="tab-pane">' + s + '</div>'
											),
												(r[e] = $('#' + l)),
												i.data('content', r[e]),
												n.trigger('tab.ajaxLoad', e, { id: l }),
												o.onShown && o.onShown();
										},
									}),
									true
								);
							}
							return (
								o.length &&
									((t.active = o.data('tab') + ''),
									(t.rotate = !!intval(o.data('rotate')))),
								t.ajax &&
									n.on('click', '.j-tab', function (e) {
										if (
											(e.preventDefault(),
											a($(this).data('tab'), $(this)),
											'v2' == bff.theme)
										)
											return false;
									}),
								{
									onTab: a,
									set: function (e) {
										e || (e = intval(e));
										var r = n.find('.j-tab[data-tab="' + e + '"]');
										r.length &&
											((t.active = e),
											(t.rotate = !!intval(r.data('rotate'))),
											l(e, r, {
												onShown: function () {
													s(e, r);
												},
											}) || s(e, r));
									},
									rotate: function () {
										return t.rotate;
									},
									active: function () {
										return t.active;
									},
									toggle: function (e) {
										n.toggleClass('d-none', !e);
									},
								}
							);
						},
						listAjaxInit: function (e, t) {
							return bff.blockAjaxInit(e, t);
						},
						blockAjaxInit: function (e, t) {
							t = $.extend(
								{
									url: false,
									params: {},
									onInit: $.noop,
									onShow: false,
									onError: false,
									onProgress: false,
								},
								t || {}
							);
							var n = $(e);
							if (!n.length) return false;
							if (n.hasClass('ajax-i')) return true;
							for (var r in t)
								if (t.hasOwnProperty(r)) {
									var i = n.data(r);
									void 0 !== i && (t[r] = i);
								}
							return (
								!!t.url &&
								(n.addClass('ajax-i'),
								t.onShow ||
									(t.onShow = function (e) {
										n.html(e);
									}),
								bff.ajax(
									t.url + '&_blockAjaxInit=1',
									t.params,
									function (e, n) {
										e && e.success && e.html
											? (t.onInit.call(self, e),
											  e.hasOwnProperty('css') && bff.st.includeCSS(e.css),
											  e.hasOwnProperty('js')
													? bff.st.includeJS(e.js, function () {
															t.onShow(e.html);
													  })
													: t.onShow(e.html))
											: t.onError && t.onError(n);
									},
									function (e) {
										t.onProgress ? t.onProgress.call(this, e) : bff.progress(e);
									}
								),
								true)
							);
						},
						progress: function (e) {
							if (true === e) app.$progress.show();
							else {
								if (false !== e) return app.$progress;
								app.$progress.hide();
							}
						},
						makeResponsive: function (e) {
							if (
								((e = $(e)).find('thead').length || (e = e.closest('table')),
								e.find('.j-mob-table-menu > a').tooltip(),
								e.hasClass('j-table-responsive'))
							) {
								var t = {};
								e.find('thead > tr').each(function (e) {
									(t[e] = {}),
										$(this)
											.children('th')
											.not('.j-table-cell-pass')
											.not('.l-table-actions')
											.not('.l-table-check')
											.each(function (n) {
												t[e][n] = $(this).text();
											});
								}),
									e.find('tbody > tr').each(function () {
										var e = 0;
										$(this)
											.children('td')
											.not('.l-table-actions')
											.not('.l-table-check')
											.not('.j-table-cell-pass')
											.each(function () {
												t[0] &&
													t[0][e] &&
													t[0][e].replace(/\s/g, '').length > 0 &&
													$(this).prepend(
														'<span class="l-table-responsive-th">' +
															t[0][e] +
															':</span>'
													),
													e++;
											});
									});
							}
						},
						_$modal: false,
						_modalWrapper: '',
						modal: function (e, t) {
							e &&
								((t = t || {}),
								bff.ajax(
									e,
									t.hasOwnProperty('params') ? t.params : {},
									function (e) {
										e &&
											e.success &&
											e.hasOwnProperty('modal') &&
											bff.modalShow(e.modal, t);
									}
								));
						},
						modalShow: function (e, t) {
							(t = t || {}), bff._$modal && bff._$modal.modal('hide');
							var n = $(e);
							if (!n.hasClass('modal')) {
								if (!bff._modalWrapper)
									return void bff.ajax(
										bff.ajaxURL('site', '&ev=modalWrapper'),
										{},
										function (n) {
											n &&
												n.success &&
												((bff._modalWrapper = n.wrapper), bff.modalShow(e, t));
										},
										bff.progress
									);
								var r = bff._modalWrapper;
								'string' == typeof e
									? ((r = r.replace(/__content__/g, e)), (n = $(r)))
									: 'object' === _typeof(e) &&
									  ((r = r.replace(
											/__content__/g,
											'<div class="j-modal-wrapper"></div>'
									  )),
									  (n = $(r)).find('.j-modal-wrapper').after(e));
							}
							n.hasClass('modal')
								? (app.$B.append(n),
								  n.one('hidden.bs.modal', function () {
										n.remove(),
											(bff._$modal = false),
											t.hasOwnProperty('onClosed') && t.onClosed();
								  }),
								  n.one('shown.bs.modal', function () {
										(bff._$modal = n),
											t.hasOwnProperty('onShow') && t.onShow(n);
								  }),
								  n.modal('show'),
								  t.hasOwnProperty('onLoad') && t.onLoad(n),
								  app.hasOwnProperty('modal_keyup_init') ||
										((app.modal_keyup_init = 1),
										app.$W.on('keyup', function (e) {
											bff._$modal &&
												e &&
												e.keyCode &&
												27 === e.keyCode &&
												bff.modalClose();
										})))
								: console.log('Incorrect modal content');
						},
						modalClose: function () {
							bff._$modal && bff._$modal.modal('hide');
						},
						fixedLangs: function () {
							var e,
								t = app.$W.width();
							app.$W.scroll(function () {
								t < 768 ||
									((e = $('.j-lang-togglers')),
									$(this).scrollTop() > 20
										? e.hasClass('mooving') || e.addClass('mooving')
										: e.removeClass('mooving'));
							}),
								bff.fixedLangsPosition(),
								$(window).on('load', function () {
									bff.fixedLangsPosition();
								});
						},
						fixedLangsPosition: function () {
							if (!(app.$W.width() < 768)) {
								var e = 0;
								$('.l-box-in').each(function () {
									var t = $(this).offset().top;
									t > 90 && (0 == e || e > t) && (e = t);
								}),
									$('.l-box-tabs').each(function () {
										var t = $(this).offset().top + $(this).height();
										t > 90 && (0 == e || e > t) && (e = t);
									}),
									e > 90 && $('.j-lang-togglers').css('top', e);
							}
						},
						mobileTabsTitle: function (e) {
							if ((e = $(e)).length) {
								var t = e.closest('.l-box-tabs-wrapper');
								if (t.length || (t = e.find('.l-box-tabs-wrapper')).length) {
									var n = t.find('.j-box-tabs-active');
									if (n.length) {
										var r = t.find(
											'.l-box-tabs .active, .l-box-tabs .tab-active, .c-vertical-tabs .active'
										);
										if (r.length) {
											var i = r.find(':first'),
												o = '';
											if (i.length)
												try {
													var a = i.get(0);
													o = (o = [].reduce.call(
														a.childNodes,
														function (e, t) {
															return (
																e + (3 === t.nodeType ? t.textContent : '')
															);
														},
														''
													)).trim();
												} catch (e) {
													(o = ''), console.log(e);
												}
											o.length || (o = r.text()),
												n.text(o),
												t.find('.show').length &&
													t
														.find('.j-mobile-tabs,  .j-mobile-tabs-nested')
														.collapse('hide');
											try {
												bff.TabsCollapse(t);
											} catch (e) {
												console.log(e);
											}
										}
									}
								}
							}
						},
						TabsCollapse: function (e) {
							if (
								(e = $(e)).length &&
								(e.length > 1 && (e = e.filter(':visible:first')),
								e.length && e.find('.l-box-tabs').length)
							) {
								if (!e.hasClass('l-box-tabs-wrapper')) {
									var t = e.closest('.l-box-tabs-wrapper');
									if (
										!t.length &&
										!(t = e.find('.l-box-tabs-wrapper:first:visible')).length
									)
										return;
									e = t;
								}
								if (e.hasClass('l-box-tabs-wrapper')) {
									var n = intval(e.width());
									if (
										!(n < 10 || window.matchMedia('(max-width: 767px)').matches)
									) {
										var r = 100,
											i = $('.j-lang-togglers:visible:first');
										i.length && (r += intval(i.outerWidth(true)));
										var o = e.find('.l-box-tabs:first').get(0).nodeName,
											a = e.find('.l-box-tabs > .tab:first').get(0).nodeName,
											s = [];
										e.find('.l-box-tabs > .tab').each(function () {
											var e = $(this);
											if (!e.hasClass('j-tabs-more')) {
												var t = e.outerWidth(true);
												e.data('w', t), s.push({ i: e, w: t, c: 1 });
											}
										});
										var l = e.find('.j-tabs-more');
										l.length &&
											l.find('.dropdown-menu > ' + a).each(function () {
												var e = $(this),
													t = intval(e.data('w'));
												t < 1 && (t = e.width()), s.push({ i: e, w: t, c: 0 });
											});
										var c = n - r,
											u = false,
											f = false,
											d = true;
										if (
											(s.forEach(function (e) {
												(c -= e.w) > 0
													? (e.n = 1)
													: ((e.n = 0), (c = 0), (f = true)),
													d && ((e.n = 1), (d = false)),
													e.c != e.n && (u = true);
											}),
											u)
										) {
											if (
												(f &&
													!l.length &&
													(e
														.find('.l-box-tabs')
														.append(
															'<' +
																a +
																' class="nav-link-more-dropdown dropdown j-tabs-more"><a class="nav-link-more" href="#" data-toggle="dropdown" aria-expanded="false"><i class="ico mr-0 fas fa-ellipsis-v"></i></a><' +
																o +
																' class="dropdown-menu dropdown-menu-right"></' +
																o +
																'></' +
																a +
																'>'
														),
													(l = e.find('.j-tabs-more'))),
												l.length)
											) {
												var p = l.find('.dropdown-menu'),
													h = p.find(a + ':first');
												s.forEach(function (e) {
													if (e.c != e.n) {
														var t,
															n = e.i;
														e.n
															? (n.hasClass('active') &&
																	(n.find('a').addClass('active'),
																	n.removeClass('active')),
															  n.addClass('tab'),
															  l.before(n))
															: ((t = n.find('a.active')).length &&
																	(n.addClass('active'),
																	t.removeClass('active')),
															  n.removeClass('tab'),
															  h.length ? h.before(n) : p.append(n));
													}
												}),
													f ||
														l.find('.dropdown-menu > ' + a).length ||
														l.remove(),
													m();
											}
										} else m();
									}
								}
							}
							function m() {
								l &&
									l.length &&
									setTimeout(function () {
										l.hasClass('show') &&
											l.find('[data-toggle="dropdown"]').dropdown('hide');
									}, 10);
							}
						},
					});
				var jAdminMenuV3 = (function () {
						var e,
							t = {
								content: '.l-content',
								sidebar: '.j-sidebar',
								sidebarFooter: '.j-sidebar-footer',
								sidebarNotActive: '.j-sidebar:not(.opened)',
								sidebarToggleButton: '.j-toggle-sidebar-menu',
								sidebarCloseButton: '.j-close-sidebar-menu',
								collapse: '.collapse.show',
								collapseElem: '[data-toggle=collapse]',
								hoverClass: 'hover',
								activeClass: 'opened',
								hideClass: 'hide',
								tabletClass: 'l-content-tablet',
								collapsedClass: 'collapsed',
								transitionClass: 'transition',
							},
							n = 'admsb',
							r = 50;
						function i() {
							setTimeout(function () {
								$('.j-mobile-tabs, .j-mobile-tabs-nested').each(function () {
									bff.mobileTabsTitle($(this));
								}),
									app.$W.trigger('menu.v3.refresh');
							}, 400);
						}
						function o(e) {
							(e = !!e),
								$(t.sidebar).toggleClass(t.activeClass, e),
								$(t.content).toggleClass(t.activeClass, e),
								window.matchMedia('(min-width: 768px)').matches &&
									($(t.sidebarToggleButton).toggleClass(t.activeClass, e),
									$(t.collapse).collapse(t.hideClass),
									$(t.collapseElem)
										.not(t.collapsedClass)
										.addClass(t.collapsedClass),
									bff.cookie(n, e ? t.activeClass : 'closed'));
						}
						function a(e, t) {
							var n = e.closest('.j-perfect-scroll').outerHeight(true),
								i = e.outerHeight(true),
								o = e.offset().top - r;
							if (o > n - i) {
								var a = o - (n - i);
								(a = t ? t + a : a),
									e.closest('.j-perfect-scroll').animate({ scrollTop: a }, 400);
							}
						}
						return {
							init: function () {
								var r = $(document);
								r.on('click', t.sidebarToggleButton, function (e) {
									e.preventDefault();
									var n = $(this);
									n.toggleClass(t.activeClass),
										o(n.hasClass(t.activeClass)),
										i();
								}),
									r.on('click', t.sidebarCloseButton, function (e) {
										e.preventDefault(),
											$(t.sidebarToggleButton).removeClass(t.activeClass),
											o(false),
											i();
									}),
									r.on('mouseenter', t.sidebarNotActive, function (n) {
										$(this).addClass(t.hoverClass),
											setTimeout(function () {
												e.update();
											}, 0);
									}),
									r.on('mouseleave', t.sidebarNotActive, function (e) {
										$(this).removeClass(t.hoverClass),
											$(t.collapse).collapse(t.hideClass),
											$(t.collapseElem)
												.not(t.collapsedClass)
												.addClass(t.collapsedClass);
									}),
									r.on(
										'click',
										'.panel *[data-toggle="collapse"]',
										function (n) {
											n.stopImmediatePropagation();
											var r = $(this),
												i = r.closest('.j-perfect-scroll').scrollTop();
											setTimeout(function () {
												'true' == r.attr('aria-expanded')
													? (a(r.closest('.panel'), i),
													  r.closest('.panel').attr('data-prevScroll', i))
													: ((i = r.closest('.panel').attr('data-prevScroll')),
													  r
															.closest('.j-perfect-scroll')
															.animate({ scrollTop: i }, 400)),
													e.update();
											}, 300),
												r
													.closest(t.sidebar)
													.find(t.sidebarFooter)
													.find(t.collapse)
													.collapse(t.hideClass);
										}
									),
									$(window).width(),
									$(window).resize(function () {
										if (
											(e && e.update(),
											window.matchMedia('(max-width: 767px)').matches)
										)
											$(t.sidebar).hasClass(t.activeClass) &&
												($(t.sidebar).removeClass(t.activeClass),
												$(t.content).removeClass(t.activeClass)),
												$(t.sidebarToggleButton).removeClass(t.activeClass);
										else {
											window.matchMedia('(max-width: 1200px)').matches
												? ($(t.content).hasClass(t.tabletClass) || i(),
												  $(t.content).addClass(t.tabletClass))
												: ($(t.content).hasClass(t.tabletClass) && i(),
												  $(t.content).removeClass(t.tabletClass));
											var r = bff.cookie(n);
											null === r && (r = t.activeClass), o(r == t.activeClass);
										}
									}),
									r.ready(function () {
										$('.j-perfect-scroll').each(function () {
											e = new PerfectScrollbar($(this)[0], {
												wheelSpeed: 2,
												minScrollbarLength: 100,
												suppressScrollX: true,
												wheelPropagation: false,
											});
										}),
											$(t.sidebar).find('.selected-panel').length &&
												a($(t.sidebar).find('.selected-panel'));
									});
							},
						};
					})(),
					lastLength;
				function onYMapError(e) {
					$(function () {
						bff.error('YMap: ' + e);
					});
				}
				$(function () {
					if (
						((app.$B = $('body')),
						(app.$W = $(window)),
						(app.$progress = $('#j-general-progress')),
						app.$B.on('click', '.j-modal-link', function (e) {
							e.preventDefault();
							var t = $(this),
								n = t.closest('.modal');
							n.length && n.modal('hide'), bff.modal(t.data('link'));
						}),
						'v2' === bff.theme)
					)
						$('.l-sidebar-toggle').click(function (e) {
							e.preventDefault(),
								$('.l-sidebar').toggleClass('not-active'),
								$('.l-sidebar-toggle').toggleClass('active'),
								$('.l-content').toggleClass('not-active');
						}),
							$('.l-sidebar-toggle-sm').click(function (e) {
								e.preventDefault(),
									$('.l-sidebar').toggleClass('active'),
									$('.l-sidebar-toggle-sm').toggleClass('active');
							});
					else if ('v3' === bff.theme) {
						var e = function () {
							$('.j-mobile-tabs, .j-mobile-tabs-nested').each(function () {
								bff.mobileTabsTitle($(this));
							});
						};
						$('.j-table-responsive').each(function (e, t) {
							bff.makeResponsive(t);
						}),
							app.$B.on('click', '.j-mob-table-actions', function (e) {
								e.preventDefault();
								var t = $(this).closest('.l-table-mob-control');
								t.toggleClass('open'),
									t.hasClass('open') &&
										(t
											.closest('table')
											.find('.l-table-mob-control')
											.removeClass('open'),
										t.addClass('open'));
							}),
							app.$B.on('click', function (e) {
								var t = null;
								e.target && (t = $(e.target)),
									t &&
										t.length &&
										(t.closest('.j-mob-table-actions').length ||
											t.closest('.j-mobile-rotate').length ||
											app.$B
												.find('.l-table-mob-control.open')
												.removeClass('open'));
							}),
							app.$W.on('load', function () {
								e();
							}),
							app.$W.on(
								'resize',
								$.throttle(function () {
									e();
								}, 400)
							),
							e();
						var t = $('.j-mobile-tabs, .j-mobile-tabs-nested');
						t.length
							? t.each(function () {
									bff.mobileTabsTitle($(this));
							  })
							: setTimeout(function () {
									$('.j-mobile-tabs, .j-mobile-tabs-nested').each(function () {
										bff.mobileTabsTitle($(this));
									});
							  }, 3e3),
							$('.j-mob-table-menu > a').tooltip(),
							bff.fixedLangs(),
							app.$B.on('click', '[data-toggle="tab"]', function () {
								var t = $(this);
								setTimeout(function () {
									var n = t.closest('.l-box-tabs-wrapper');
									if (n.length) {
										var r = n.find('.j-tabs-more');
										r.length &&
											(r.find('li.active').removeClass('active'),
											r.find('a.active').each(function () {
												var e = $(this);
												e.is(t) && e.parent().addClass('active'),
													e.removeClass('active');
											})),
											setTimeout(function () {
												e();
											}, 1);
									}
								}, 1);
							});
						var n = {},
							r = 0;
						app.$W.on('bff.ajax.callback.after', function () {
							for (var e in n)
								n.hasOwnProperty(e) &&
									(document.documentElement.contains(n[e].t) ||
										(n[e].$t.remove(), delete n[e]));
						}),
							app.$B.on('inserted.bs.tooltip', function (e) {
								if (e && e.target) {
									var t = e.target,
										i = $(t).data('bs.tooltip');
									if (i && i.tip) {
										var o = $(i.tip);
										o.length && ((n[r] = { t: t, $t: o }), r++);
									}
								}
							}),
							app.$B.on('hidden.bs.tooltip', function (e) {
								if (e && e.target) {
									var t = e.target,
										r = $(t).data('bs.tooltip');
									if (r && r.tip) {
										var i = $(r.tip);
										if (i.length)
											for (var o in n)
												n.hasOwnProperty(o) && n[o].$t.is(i) && delete n[o];
									}
								}
							}),
							app.$W.on('bff.ajax.callback.after', function () {
								$('.j-tooltip').tooltip(),
									$('[data-toggle="tooltip"]').tooltip();
							}),
							$(window).width() < 768 &&
								((s = 0),
								(l = 'up'),
								(c = 'down'),
								(u = 0),
								$(window).scroll(function () {
									o && window.clearTimeout(o),
										(o = window.setTimeout(function () {
											i = true;
										}, 15));
								}),
								setInterval(function () {
									i &&
										((function () {
											var e = $(this).scrollTop();
											(a = $('.l-box-filter:first')).length &&
												!a.hasClass('d-none') &&
												((u = $('.l-box-in').offset().top),
												Math.abs(s - e) <= 5 ||
													(e > s && e > u
														? a.removeClass(l).addClass(c)
														: e + $(window).height() < $(document).height() &&
														  e > u
														? a.removeClass(c).addClass(l)
														: a.removeClass(c).removeClass(l),
													(s = e)));
										})(),
										(i = false));
								}, 100));
						try {
							jAdminMenuV3.init();
						} catch (e) {
							console.log(e);
						}
					}
					var i, o, a, s, l, c, u, f, d, p;
					(app.device =
						((f = app.cookiePrefix + 'device'),
						(d = bff.cookie(f)),
						(p = $.debounce(function (e) {
							e = e || { type: 'onload' };
							var t = window.innerWidth,
								n = t >= 980 ? 'desktop' : t >= 768 ? 'tablet' : 'phone';
							(n == d && 'focus' != e.type) ||
								(bff.cookie(app.cookiePrefix + 'device', (d = n), {
									expires: 200,
									path: '/',
									domain: '.' + app.host,
								}),
								'resize' == e.type &&
									app.$W.trigger('app-device-changed', [n]));
						}, 600)),
						app.$W.on('focus resize', p),
						p(),
						function (e) {
							return e ? e === d : d;
						})),
						bff.hasOwnProperty('st') &&
							bff.st.hasOwnProperty('start') &&
							bff.st.start(),
						$(document).on('click', '.j-stop-propagate', function (e) {
							e.stopPropagation();
						});
				}),
					/*@cc_on bff.ie=true;@*/
					(bff.formChecker.prototype = {
						initialize: function (e, t) {
							if (
								((this.submiting = false),
								this.setForm(e),
								(this.options = {
									scroll: false,
									ajax: false,
									progress: false,
									errorMessage: true,
									errorMessageBlock: '#warning',
									errorMessageText: '#warning .warns',
									password: '#password',
									passwordNotEqLogin: true,
									passwordMinLength: 3,
									login: '#login',
									loginMinLength: 5,
								}),
								t)
							)
								for (var n in t) this.options[n] = t[n];
							this.options.errorMessage &&
								((this.errorMessageBlock = $(this.options.errorMessageBlock)),
								(this.errorMessageText = $(this.options.errorMessageText))),
								this.initInputs(),
								this.check();
						},
						initInputs: function () {
							var e = this;
							(e.required_fields = e.form.find('.required')),
								e.required_fields.on(
									'blur keyup change',
									$.debounce(function () {
										return e.check();
									}, 400)
								),
								(e.submit_btn = e.form.find('input:submit')),
								(e.submit_btn_text = e.submit_btn.val()),
								e.form.submit(function () {
									return e.onSubmit();
								});
						},
						setForm: function (e) {
							(this.form = $(e)),
								$.assert(this.form, 'formChecker: unable to find form');
						},
						onSubmit: function () {
							var e = this,
								t = e.check();
							return (
								this.submitCheck && (t = this.submitCheck()),
								t && ((e.submiting = true), 0 != e.options.ajax)
									? (e.disableSubmit(),
									  bff.ajax(
											e.form.attr('action'),
											e.form.serializeArray(),
											function (t) {
												e.enableSubmit(),
													t &&
														(e.form[0].reset(),
														'function' == typeof e.options.ajax &&
															e.options.ajax(t)),
													(e.submiting = false),
													e.check();
											},
											e.options.progress
									  ),
									  false)
									: t
							);
						},
						enableSubmit: function () {
							this.submit_btn.prop('disabled', false).val(this.submit_btn_text);
						},
						disableSubmit: function () {
							this.submit_btn.prop('disabled', true);
						},
						showMessage: function (e) {
							this.options.errorMessage &&
								(this.errorMessageText.html('<li>' + e + '</li>'),
								this.errorMessageBlock.is(':visible') ||
									this.errorMessageBlock.fadeIn(),
								(this.errorMessageShowed = true));
						},
						showErrors: function (e) {
							bff.errors.show(e),
								this.form.find('.has-error').removeClass('has-error'),
								this.form.find('.j-icon-wrapper icon').remove(),
								this.fieldsErrors(e);
						},
						fieldsErrors: function (e) {
							for (var t in e)
								if (e.hasOwnProperty(t)) {
									var n,
										r = this.form.find('[name="' + t + '"]');
									if (
										(r.length ||
											(r = this.form.find('[data-name="' + t + '"]')),
										r.length)
									)
										'v3' == bff.theme
											? ((n = r.closest('.row2')).length ||
													(n = r.closest('.form-row')),
											  n.length || (n = r.parent()),
											  n.addClass('has-error'))
											: (r.is(':hidden')
													? (n = r.parent()).addClass('j-icon-wrapper has-icon')
													: (n = r.parent('.j-icon-wrapper')),
											  n.length ||
													(r.wrap(
														'<div class="j-icon-wrapper has-icon"></div>'
													),
													(n = r.parent('.j-icon-wrapper'))),
											  n.addClass('has-error'),
											  r.after(
													'<span class="c-icon-question mt-1"><i class="ico descr disabled fas fa-question-circle j-tooltip" data-container="body" title="' +
														e[t] +
														'"></i></span>'
											  ),
											  n.find('.j-tooltip').tooltip()),
											n.data('timeout', this.errorTimeout(n)),
											r.one('change', function () {
												var e = $(this).closest('.has-error');
												clearTimeout(e.data('timeout')),
													e.removeClass('has-error'),
													e.hasClass('j-icon-wrapper') &&
														e.find('i.icon').remove();
											});
								}
						},
						errorTimeout: function (e) {
							return setTimeout(function () {
								e.removeClass('has-error'),
									e.hasClass('j-icon-wrapper') && e.find('i.icon').remove();
							}, 1e4);
						},
						check: function (e, t) {
							this.errorMessageShowed = false;
							var n = 0,
								r = this;
							true === t && this.initInputs(),
								this.required_fields.each(function () {
									var t = $(this),
										i = t.find(
											'input:visible, textarea:visible, select:visible'
										),
										o = false;
									if (
										((o = i.length
											? t.is('.check-email')
												? r.checkEmail(i)
												: t.is('.check-password')
												? r.checkPassword(i)
												: t.is('.check-login')
												? r.checkLogin(i)
												: t.is('.check-select')
												? r.checkSelect(i)
												: t.is('.check-radio')
												? (i = t.find('input:checked')).length
													? 1
													: 0
												: r.checkEmpty(i)
											: 1)
											? t.removeClass('clr-error')
											: (t.addClass('clr-error'), e && i.focus()),
										!o)
									)
										return false;
									n += Number(o);
								});
							var i = n == this.required_fields.length;
							return (
								i && this.additionalCheck && (i = this.additionalCheck()),
								this.afterCheck && this.afterCheck(),
								i
							);
						},
						checkSelect: function (e) {
							return 0 != parseInt(e.val());
						},
						checkEmpty: function (e) {
							return Boolean($.trim(e.val()));
						},
						checkLogin: function (e) {
							if (!this.checkEmpty(e)) return false;
							var t = e.val();
							if (t.length < this.options.loginMinLength)
								return (
									this.showMessage(
										'<b>Р»РѕРіРёРЅ</b> СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёР№'
									),
									false
								);
							return (
								!!/^[a-zA-Z0-9_]*$/i.test(t) ||
								(this.showMessage(
									'<b>Р»РѕРіРёРЅ</b> РґРѕР»Р¶РµРЅ СЃРѕРґРµСЂР¶Р°С‚СЊ С‚РѕР»СЊРєРѕ Р»Р°С‚РёРЅРёС†Сѓ Рё С†РёС„СЂС‹'
								),
								false)
							);
						},
						checkPassword: function (e) {
							if (!this.checkEmpty(e)) return false;
							var t = e.val();
							return e.hasClass('check-password2')
								? t == $(this.options.password).val() ||
										(this.showMessage(
											'РѕС€РёР±РєР° <b>РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ РїР°СЂРѕР»СЏ</b>'
										),
										false)
								: t.length < this.options.passwordMinLength
								? (this.showMessage(
										'<b>РїР°СЂРѕР»СЊ</b> СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёР№'
								  ),
								  false)
								: !this.options.passwordNotEqLogin ||
								  !this.options.hasOwnProperty('login') ||
								  (t != this.options.login &&
										t != $(this.options.login).val()) ||
								  (this.showMessage(
										'<b>Р»РѕРіРёРЅ</b> Рё <b>РїР°СЂРѕР»СЊ</b> РЅРµ РґРѕР»Р¶РЅС‹ СЃРѕРІРїР°РґР°С‚СЊ'
								  ),
								  false);
						},
						checkEmail: function (e) {
							if (this.checkEmpty(e)) {
								var t = /^\s*[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\s*$/i.test(
									e.val()
								);
								return (
									t ? e.removeClass('clr-error') : e.addClass('clr-error'), t
								);
							}
							return false;
						},
					}),
					(bff.pgn.prototype = {
						initialize: function (e, t) {
							if (
								((this.form = $(e).get(0)),
								(this.process = false),
								(this.options = { progress: false, ajax: false }),
								t)
							)
								for (var n in t) this.options[n] = t[n];
							(this.options.targetList = $(t.targetList)),
								(this.options.targetPagenation = $(t.targetPagenation)),
								(this.changeHash =
									this.options.ajax &&
									window.history &&
									window.history.pushState);
						},
						prev: function (e) {
							this.process || ((this.form.offset.value = e), this.update());
						},
						next: function (e) {
							this.process || ((this.form.offset.value = e), this.update());
						},
						update: function () {
							var e = this;
							if (e.options.ajax) {
								if (!e.process) {
									e.process = true;
									var t = $(e.form).attr('action');
									e.options.targetList.animate({ opacity: 0.65 }, 400),
										bff.ajax(
											t,
											$(e.form).serialize(),
											function (n) {
												if (
													(n &&
														(e.options.targetList
															.animate({ opacity: 1 }, 100)
															.html(n.list),
														e.options.targetPagenation.html(n.pgn)),
													e.changeHash)
												) {
													var r = $(e.form).serialize();
													window.history.pushState(
														{},
														document.title,
														t + '?' + r
													);
												}
												e.process = false;
											},
											e.options.progress
										);
								}
							} else e.form.submit();
						},
					}),
					(lastLength = 0),
					(window.checkTextLength = function (e, t, n, r, i) {
						if (lastLength != t.length) {
							lastLength = t.length;
							var o = replaceChars(t, r).length;
							(n.style.display = o > e - 100 ? '' : 'none'),
								(n.innerHTML =
									o > e
										? 'Р”РѕРїСѓСЃС‚РёРјС‹Р№ РѕР±СЉРµРј РїСЂРµРІС‹С€РµРЅ РЅР° ' +
										  bff.declension(o - e, [
												'СЃРёРјРІРѕР»',
												'СЃРёРјРІРѕР»Р°',
												'СЃРёРјРІРѕР»РѕРІ',
										  ]) +
										  '.'
										: o > e - 50
										? 'РћСЃС‚Р°Р»РѕСЃСЊ: ' +
										  bff.declension(e - o, [
												'СЃРёРјРІРѕР»',
												'СЃРёРјРІРѕР»Р°',
												'СЃРёРјРІРѕР»РѕРІ',
										  ]) +
										  '.'
										: '');
						}
					}),
					(window.replaceChars = function (e, t) {
						for (var n = '', r = 0; r < e.length; r++) {
							var i = e.charCodeAt(r);
							switch (i) {
								case 38:
									n += '&amp;';
									break;
								case 60:
									n += '&lt;';
									break;
								case 62:
									n += '&gt;';
									break;
								case 34:
									n += '&quot;';
									break;
								case 13:
									n += '';
									break;
								case 10:
									n += t ? '\t' : '<br>';
									break;
								case 33:
									n += '&#33;';
									break;
								case 39:
									n += '&#39;';
									break;
								default:
									n +=
										(i > 128 && i < 192) || i > 1280
											? '&#' + i + ';'
											: e.charAt(r);
							}
						}
						return n;
					});
			},
			205: function (e, t, n) {
				function r(e) {
					return (
						(r =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											'function' == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? 'symbol'
											: typeof e;
								  }),
						r(e)
					);
					/*!
					 * Bff.Utilites.js
					 * @author Tamaranga | tamaranga.com
					 * @owr ?
					 */
				}
				try {
					(window.$ = window.jQuery = n(755)),
						n(440),
						n(585),
						$.metadata.setType('data', 'data'),
						(window.md5 = n(568));
				} catch (e) {}
				var i, o, a, s, l, c, u, f;
				(window.bff = {
					h: !(!window.history || !history.pushState),
					extend: function (e, t) {
						if (e.prototype) for (var n in t) e.prototype[n] = t[n];
						else for (var n in t) e[n] = t[n];
						return e;
					},
					redirect: function (e, t, n) {
						return (
							(!t || (t && confirm(t))) &&
								window.setTimeout(function () {
									window.location.href = e;
								}, 1e3 * (n || 0)),
							false
						);
					},
					isEmail: function (e) {
						if (e.length <= 6) return false;
						return /^\s*[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,14}\s*$/i.test(e);
					},
					ajax_utils: {
						errors: function (e, t) {
							app.hasOwnProperty('adm') &&
								app.adm &&
								(t
									? bff.error(
											'РћС€РёР±РєР° РїРµСЂРµРґР°С‡Рё РґР°РЅРЅС‹С…' +
												(e ? ' (' + e + ')' : '')
									  )
									: bff.errors.show(e));
						},
						progress: function (e) {
							var t = false,
								n = false,
								r = null,
								i = false,
								o = false;
							null != e && 0 != e
								? (i =
										'[object Function]' === Object.prototype.toString.call(e))
									? (r = e)
									: ((r = $(e)),
									  r.length
											? (r.is('input[type="button"]') || r.is('button')) &&
											  (o = true)
											: (r = false))
								: app.hasOwnProperty('adm') &&
								  app.adm &&
								  app.$progress &&
								  (r = app.$progress),
								r &&
									(i
										? r.call(this, true)
										: o
										? r.prop('disabled', true)
										: r.show(),
									setTimeout(function () {
										(t = true), a.finish();
									}, 400));
							var a = {
								finish: function (e) {
									e && (n = true),
										t &&
											n &&
											r &&
											(i
												? r.call(this, false)
												: o
												? r.prop('disabled', false)
												: r.hide());
								},
							};
							return a;
						},
					},
					ajax: function (e, t, n, r, i) {
						i = i || { async: true, crossDomain: false, onError: false };
						var o = bff.ajax_utils.progress(r),
							a = {
								url: e,
								params: t,
								callback: n,
								progress: o,
								o: i,
								interrupt: false,
								onSuccess: function (e, t, r) {
									if (
										($(window).trigger('bff.ajax.success', {
											resp: e,
											status: t,
											xhr: r,
										}),
										o.finish(true),
										null == e)
									)
										return (
											'success' !== t && bff.ajax_utils.errors(0, true),
											void (n && n(false))
										);
									if (
										e.errors &&
										(($.isArray(e.errors) && e.errors.length) ||
											$.isPlainObject(e.errors))
									) {
										if (i.formChecker) {
											var a = i.formChecker();
											a && a.showErrors && a.showErrors(e.errors);
										}
										i.hasOwnProperty('onError') && false !== i.onError
											? i.onError(e.errors)
											: bff.ajax_utils.errors(e.errors, false);
									}
									e.hasOwnProperty('console') && bff.console(e.console),
										n &&
											($(window).trigger('bff.ajax.callback.before', {
												resp: e,
											}),
											n(e.data, e.errors),
											$(window).trigger('bff.ajax.callback.after', {
												resp: e,
											}));
								},
								onError: function (e, t, r) {
									$(window).trigger('bff.ajax.error', {
										xhr: e,
										status: t,
										e: r,
									}),
										o.finish(true),
										bff.ajax_utils.errors(e.status, true),
										i.onError && i.onError(e.status, true, t, r),
										n && n(false);
								},
							};
						if (($(window).trigger('bff.ajax.start', a), !a.interrupt))
							return $.ajax({
								url: e,
								data: t,
								dataType: 'json',
								type: 'POST',
								crossDomain: i.crossDomain || false,
								async: i.async && true,
								success: a.onSuccess,
								error: a.onError,
							});
					},
					console: (function (e) {
						function t(t) {
							return e.apply(this, arguments);
						}
						return (
							(t.toString = function () {
								return e.toString();
							}),
							t
						);
					})(function (e) {
						for (var t in e)
							e.hasOwnProperty(t) &&
								e[t].hasOwnProperty('context') &&
								e[t].hasOwnProperty('message') &&
								(0 == e[t].context.length
									? console.log(JSON.parse(JSON.stringify(e[t].message)))
									: console.log(e[t]));
					}),
					iframeSubmit: function (e, t, n) {
						var r = $(e);
						if (
							r.length &&
							((n = $.extend(
								{
									json: true,
									button: '',
									prefix: 'bff_ajax_iframe',
									url: r.attr('action'),
									progress: false,
									beforeSubmit: $.noop,
									formChecker: false,
								},
								n || {}
							)),
							!r.hasClass(n.prefix + '_inited'))
						) {
							var i = parseInt(9998 * Math.random() + 1);
							r.before(
								'<iframe name="' +
									n.prefix +
									i +
									'" class="' +
									n.prefix +
									'" id="' +
									n.prefix +
									i +
									'" style="display:none;"></iframe>'
							);
							var o = $('#' + n.prefix + i);
							r.attr({
								target: o.attr('name'),
								action: n.url,
								method: 'POST',
								enctype: 'multipart/form-data',
							}),
								r.addClass(n.prefix + '_inited');
							var a = false,
								s = $(n.button);
							s.length || (s = false),
								r.on('submit', function () {
									if (a) return false;
									if (
										$.isFunction(n.beforeSubmit) &&
										false === n.beforeSubmit.apply(this, [r])
									)
										return false;
									if (bff.filter('bff.iframeSubmit', false, e, t, n))
										return false;
									(a = true), s && s.button('loading');
									var i = bff.ajax_utils.progress(n.progress);
									o.on('load', function () {
										i.finish(true), (a = false);
										var r = o.contents().find('body');
										if (n.json) {
											var l = r.text();
											l = '' !== l ? JSON.parse(l) : {};
											var c = $.extend({ data: '', errors: [] }, l || {});
											if (n.formChecker) {
												var u = n.formChecker();
												u && u.showErrors && u.showErrors(c.errors);
											} else bff.ajax_utils.errors(c.errors, false);
											t.apply(this, [c.data, c.errors]),
												bff.hook('bff.iframeSubmit.data', e, [
													c.data,
													c.errors,
												]);
										} else t.apply(this, [r.html()]), bff.hook('bff.iframeSubmit.data', e, [r.html()]);
										s && s.button('reset'),
											o.off('load'),
											setTimeout(function () {
												r.html('');
											}, 1);
									});
								});
						}
					},
					ajaxURL: function (e, t) {
						return location.pathname + '?bff=ajax&s=' + e + '&act=' + t;
					},
					map:
						((o = ''),
						(a = false),
						(s = null),
						{
							setProvider: function (e) {
								o = e;
							},
							init: function (e, t, n, r) {
								if ('' === o) return false;
								var i = bff.filter('geo.maps.providers', {});
								return (
									!!i.hasOwnProperty(o) &&
									new i[o](e, t, $.extend({ onInit: n || false }, r || {}))
								);
							},
							lazyInit: function () {
								(a = true), s && s();
							},
							onLazyInit: function (e) {
								s = e;
							},
							lazyInited: function () {
								return a;
							},
							overlayClass: null,
						}),
					maxlength: function (e, t) {
						var n,
							r,
							i,
							o = {},
							a = 0;
						function s(e) {
							if (i !== e.length) {
								i = e.length;
								var t = o.escape
									? (function (e) {
											for (var t = '', n = 0; n < e.length; n++) {
												var r = e.charCodeAt(n);
												switch (r) {
													case 38:
														t += '&amp;';
														break;
													case 60:
														t += '&lt;';
														break;
													case 62:
														t += '&gt;';
														break;
													case 34:
														t += '&quot;';
														break;
													case 13:
														t += '';
														break;
													case 10:
														t += o.nobr ? '\t' : '<br />';
														break;
													case 33:
														t += '&#33;';
														break;
													case 39:
														t += '&#39;';
														break;
													default:
														t +=
															(r > 128 && r < 192) || r > 1280
																? '&#' + r + ';'
																: e.charAt(n);
												}
											}
											return t;
									  })(e).length
									: e.length;
								o.message &&
									(t > a
										? o.cut
											? n.val(e.substr(0, a))
											: o.onError && $.isFunction(o.onError) && o.onError()
										: r.text(
												o.lang.left
													.toString()
													.replace(
														new RegExp('\\[symbols\\]'),
														bff.declension(a - t, o.lang.symbols)
													)
										  ));
							}
						}
						$(function () {
							(o = $.extend(
								true,
								{
									limit: 0,
									message: false,
									cut: true,
									escape: false,
									lang: {
										left: '[symbols] РѕСЃС‚Р°Р»РѕСЃСЊ',
										symbols: ['Р·РЅР°Рє', 'Р·РЅР°РєР°', 'Р·РЅР°РєРѕРІ'],
									},
									nobr: false,
									onError: $.noop,
									onChange: $.noop,
								},
								t
							)),
								(a = intval(o.limit)),
								!(n = $(e)).length ||
									o.limit <= 0 ||
									(n.on('keyup input paste', function () {
										s(n.val()), o.onChange(n);
									}),
									(r = $(o.message)),
									(o.message = r.length > 0),
									s(n.val()),
									o.cut || n.attr({ maxlength: a }));
						});
					},
					wysiwyg: {
						typeDefault: 'jwysiwyg',
						typeTinymce: 'tinymce',
						insertHtml: function (e, t) {
							switch (bff.wysiwyg.getType(e)) {
								case bff.wysiwyg.typeDefault:
									e.insertHtml(t);
									break;
								case bff.wysiwyg.typeTinymce:
									e.insertContent(t);
							}
						},
						save: function (e) {
							switch (bff.wysiwyg.getType(e)) {
								case bff.wysiwyg.typeDefault:
									e.sync();
									break;
								case bff.wysiwyg.typeTinymce:
									e.save();
							}
						},
						getType: function (e) {
							return 'object' === r(e) && e.hasOwnProperty('editorCommands')
								? bff.wysiwyg.typeTinymce
								: bff.wysiwyg.typeDefault;
						},
						tinymce: {
							handlers: function (e) {
								return {
									file_picker_callback: function (t, n, r) {
										app && app.$progress && app.$progress.show();
										var i = {
											title: e.file_picker_title,
											url: e.file_picker_url + '&filetype=' + r.filetype,
											onMessage: function (e, n) {
												n &&
													n.mceAction &&
													'select' == n.mceAction &&
													n.url &&
													(t(n.url, n.vars || {}), e.close());
											},
										};
										$(window).height() > 740 &&
											$(window).width() > 1200 &&
											((i.width = 1200), (i.height = 740)),
											tinymce.activeEditor.windowManager.openUrl(i);
									},
									images_upload_handler: function (t, n, r, i) {
										var o, a;
										app && app.$progress && app.$progress.show(),
											((o = new XMLHttpRequest()).withCredentials = false),
											o.open('POST', e.images_upload_url),
											(o.upload.onprogress = function (e) {
												i((e.loaded / e.total) * 100);
											}),
											(o.onload = function () {
												var e;
												app && app.$progress && app.$progress.hide(),
													403 !== o.status
														? o.status < 200 || o.status >= 300
															? r('HTTP Error: ' + o.status)
															: (e = JSON.parse(o.responseText))
															? e.errors && e.errors.length
																? r(e.errors.join('<br />'))
																: e &&
																  e.success &&
																  ('string' == typeof e.location
																		? n(e.location)
																		: r('Invalid JSON: ' + o.responseText))
															: r('Invalid JSON: ' + o.responseText)
														: r('HTTP Error: ' + o.status, { remove: true });
											}),
											(o.onerror = function () {
												app && app.$progress && app.$progress.hide(),
													r(
														'Image upload failed due to a XHR Transport error. Code: ' +
															o.status
													);
											}),
											(a = new FormData()).append(
												'file',
												t.blob(),
												t.filename()
											),
											o.send(a);
									},
								};
							},
						},
					},
					st: {
						versioninig: false,
						_in: {},
						_errCnt: 0,
						_url: function (e) {
							return 0 == e.indexOf('//') ||
								0 == e.indexOf('http') ||
								0 == e.indexOf('https')
								? e
								: 0 == e.indexOf('core')
								? '/js/bff' + e.substr(4)
								: '/js/' + e;
						},
						_getScriptArray: function (e, t, n) {
							var r = [],
								i = [],
								o = this;
							bff.progress && bff.progress(true),
								$.each(e, function () {
									var e = this,
										t = $.Deferred();
									$.getScript(e)
										.done(function () {
											o.done(e, n), t.resolve();
										})
										.fail(function () {
											i.push(e), t.resolve();
										}),
										r.push(t);
								}),
								$.when.apply($, r).done(function () {
									if (i.length && o._errCnt > i.length)
										return (
											(o._errCnt = i.length), void o._getScriptArray(i, t, n)
										);
									bff.progress && bff.progress(false), t && t();
								});
						},
						includeJS: function (e, t, n) {
							if (((n = n || 1), $.isArray(e))) {
								var r = [],
									i = this;
								if (
									($.each(e, function () {
										i.isDone(this) ||
											r.push(this + (i.versioninig ? '?v=' + n : ''));
									}),
									!r.length)
								)
									return t && t(), false;
								(i._errCnt = r.length), i._getScriptArray(r, t, n);
							} else {
								if (this.isDone(e)) return t && t(), false;
								this.done(e, n),
									$.getScript(
										this._url(e) + (this.versioninig ? '?v=' + n : ''),
										function () {
											t && t();
										}
									);
							}
						},
						includeCSS: function (e, t) {
							if ($.isArray(e)) {
								var n = this;
								$.each(e, function () {
									n.includeCSS(this, t);
								});
							} else {
								if (((t = t || 1), this.isDone(e))) return false;
								this.done(e, t);
								var r = document.createElement('link');
								(r.href = this._url(e) + (this.versioninig ? '?v=' + t : '')),
									(r.rel = 'stylesheet'),
									(r.type = 'text/css'),
									document.getElementsByTagName('head')[0].appendChild(r);
							}
						},
						isDone: function (e) {
							return this._in.hasOwnProperty(e);
						},
						done: function (e, t) {
							(t = t || 1), (this._in[e] = t);
						},
						start: function () {
							var e = this;
							$('script').each(function () {
								var t = $(this).attr('src');
								t && e.done(t);
							}),
								$('link').each(function () {
									var t = $(this).attr('href');
									t && e.done(t);
								});
						},
					},
					loadCssJS: function (e, t) {
						if (t) {
							e.hasOwnProperty('jsData') && $.extend(window.__APP__, e.jsData);
							var n = function (e) {
								try {
									return (e = new URL(e, document.location.href)).pathname;
								} catch (e) {}
								return false;
							};
							if (e.hasOwnProperty('css')) {
								var r = [],
									i = [];
								$('link[rel="stylesheet"]').each(function () {
									var e = n($(this).attr('href'));
									e && i.push(e);
								}),
									$.each(e.css, function () {
										var e = n(this),
											t = false;
										$.each(i, function () {
											if (this == e) return (t = true), false;
										}),
											t || r.push(this);
									}),
									r.length && bff.st.includeCSS(r);
							}
							if (e.hasOwnProperty('js')) {
								var o = [],
									a = [];
								$('script[src]').each(function () {
									var e = n($(this).attr('src'));
									e && a.push(e);
								}),
									$.each(e.js, function () {
										var e = n(this),
											t = false;
										$.each(a, function () {
											if (this == e) return (t = true), false;
										}),
											t || o.push(this);
									}),
									o.length
										? bff.st.includeJS(o, function () {
												t(e);
										  })
										: t(e);
							} else t(e);
							e.hasOwnProperty('jsInline') &&
								e.jsInline &&
								app.$B.append(e.jsInline);
						}
					},
					input: {
						file: function (e, t) {
							var n = e.value.split('\\');
							(n = n[n.length - 1]),
								n.length > 30 && (n = n.substring(0, 30) + '...');
							var r =
								'<a href="#delete" onclick="bff.input.reset(\'' +
								e.id +
								"'); $('#" +
								t +
								"').html(''); $(this).blur(); return false;\"></a>" +
								n;
							$('#' + t).html(r);
						},
						reset: function (e) {
							var t = document.getElementById(e);
							if ('file' == t.type)
								try {
									t.parentNode.innerHTML = t.parentNode.innerHTML;
								} catch (e) {}
							else t.value = '';
						},
					},
					declension: function (e, t, n) {
						var r = false !== n ? e + ' ' : '',
							i = Math.abs(e) % 100,
							o = i % 10;
						return i > 10 && i < 20
							? r + t[2]
							: o > 1 && o < 5
							? r + t[1]
							: 1 == o
							? r + t[0]
							: r + t[2];
					},
					_cookie: function (e, t, n) {
						if (void 0 !== t) {
							(n = n || {}), null === t && ((t = ''), (n.expires = -1));
							var r,
								i = n.path ? '; path=' + n.path : '',
								o = n.domain ? '; domain=' + n.domain : '',
								a = n.secure ? '; secure' : '',
								s = '';
							if (
								n.expires &&
								('number' == typeof n.expires || n.expires.toUTCString)
							)
								'number' == typeof n.expires
									? (r = new Date()).setTime(r.getTime() + 864e5 * n.expires)
									: (r = n.expires),
									(s = '; expires=' + r.toUTCString());
							return (
								(window.document.cookie = [
									e,
									'=',
									encodeURIComponent(t),
									s,
									i,
									o,
									a,
								].join('')),
								true
							);
						}
						var l = null;
						return (
							document.cookie &&
								'' != document.cookie &&
								$.each(document.cookie.split(';'), function () {
									var t = $.trim(this);
									if (t.substring(0, e.length + 1) == e + '=')
										return (
											(l = decodeURIComponent(t.substring(e.length + 1))), false
										);
								}),
							l
						);
					},
					cookie: function (e, t, n) {
						return bff._cookie(e, t, n);
					},
					fp: function () {
						return md5(
							[
								navigator.userAgent,
								[screen.height, screen.width, screen.colorDepth].join('x'),
								new Date().getTimezoneOffset(),
								!!window.sessionStorage,
								!!window.localStorage,
								$.map(navigator.plugins, function (e) {
									return [
										e.name,
										e.description,
										$.map(e, function (e) {
											return [e.type, e.suffixes].join('~');
										}).join(','),
									].join('::');
								}).join(';'),
							].join('###')
						);
					},
					hooks:
						((i = {}),
						{
							run: function () {
								var e = Array.prototype.slice.call(arguments, 0),
									t = e.shift();
								if ('string' != typeof t || !i[t]) return false;
								var n,
									r = i[t].length;
								for (n = 0; n < r; n++)
									i[t][n].callback.apply(i[t][n].context, e);
								return true;
							},
							filter: function () {
								var e = Array.prototype.slice.call(arguments, 0),
									t = e.shift();
								if ('string' != typeof t || !i[t]) return e[0];
								var n,
									r = i[t].length;
								for (n = 0; n < r; n++)
									e[0] = i[t][n].callback.apply(i[t][n].context, e);
								return e[0];
							},
							add: function (e, t, n, r) {
								if ('string' == typeof e && 'function' == typeof t) {
									var o = { callback: t, priority: intval(n || 5), context: r },
										a = i[e];
									a
										? (a.push(o),
										  a.sort(function (e, t) {
												return e.priority > t.priority;
										  }))
										: (a = [o]),
										(i[e] = a);
								}
							},
							remove: function (e, t) {
								if (i[e])
									if (t)
										for (var n = i[e], r = n.length; r--; )
											n[r].callback === t && n.splice(r, 1);
									else i[e] = [];
							},
							has: function (e) {
								return !!i[e];
							},
						}),
					hook: function () {
						return bff.hooks.run.apply(this, arguments);
					},
					hookAdd: function (e, t, n, r) {
						return bff.hooks.add(e, t, n, r);
					},
					hooksAdded: function (e) {
						return bff.hooks.has(e);
					},
					hookRemove: function (e, t) {
						return bff.hooks.remove(e, t);
					},
					filter: function () {
						return bff.hooks.filter.apply(this, arguments);
					},
					tmpl: function (e, t) {
						var n = /\W/.test(e)
							? new Function(
									'obj',
									"var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" +
										e
											.replace(/[\r\t\n]/g, ' ')
											.split('<%')
											.join('\t')
											.replace(/((^|%>)[^\t]*)'/g, '$1\r')
											.replace(/\t=(.*?)%>/g, "',$1,'")
											.split('\t')
											.join("');")
											.split('%>')
											.join("p.push('")
											.split('\r')
											.join("\\'") +
										"');}return p.join('');"
							  )
							: (bff._tmpl_cache[e] =
									bff._tmpl_cache[e] ||
									bff.tmpl(document.getElementById(e).innerHTML));
						return t ? n(t) : n;
					},
					_tmpl_cache: {},
					debounce: function (e, t, n, r) {
						var i;
						return (
							3 == arguments.length &&
								'boolean' != typeof n &&
								((r = n), (n = false)),
							function () {
								var o = arguments;
								n && !i && e.apply(r, o),
									clearTimeout(i),
									(i = setTimeout(function () {
										n || e.apply(r, o), (i = null);
									}, t));
							}
						);
					},
					throttle: function (e, t, n) {
						var r, i;
						return function () {
							(i = arguments),
								r ||
									(function () {
										i
											? (e.apply(n, i),
											  (i = null),
											  (r = setTimeout(arguments.callee, t)))
											: (r = null);
									})();
						};
					},
					acEx: function (e, t, n) {
						if (e && e.hasOwnProperty('data') && e.data.hasOwnProperty(2)) {
							var r = e.data[2];
							if (r.hasOwnProperty(t)) return r[t];
							if (
								'country' == t &&
								r.hasOwnProperty('parents') &&
								r.parents.hasOwnProperty(1) &&
								r.parents[1].hasOwnProperty('id')
							)
								return r.parents[1].id;
						}
						return n || 0;
					},
					report_exception: function (e, t, n) {
						$.ajax({
							url: '/index.php?bff=errors-js',
							data: { e: e, f: t || window.location.href, l: n },
							dataType: 'json',
							type: 'POST',
						});
					},
				}),
					(l = navigator.userAgent.toLowerCase()),
					(c = {}),
					(u = {
						browser:
							(u =
								/(chrome)[ \/]([\w.]+)/.exec(l) ||
								/(webkit)[ \/]([\w.]+)/.exec(l) ||
								/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(l) ||
								/(msie) ([\w.]+)/.exec(l) ||
								(l.indexOf('compatible') < 0 &&
									/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(l)) ||
								[])[1] || '',
						version: u[2] || '0',
					}).browser && ((c[u.browser] = true), (c.version = u.version)),
					c.chrome ? (c.webkit = true) : c.webkit && (c.safari = true),
					(bff.browser = c),
					(window.nothing = function (e) {
						if (!e) {
							if (!window.event) return false;
							e = window.event;
						}
						return (
							null != e.cancelBubble && (e.cancelBubble = true),
							e.stopPropagation && e.stopPropagation(),
							e.preventDefault && e.preventDefault(),
							window.event && (e.returnValue = false),
							null != e.cancel && (e.cancel = true),
							false
						);
					}),
					(window.intval = function (e) {
						return (e && 0 | +e) || 0;
					}),
					(window.onerror = function (e, t, n) {
						bff.report_exception(e, t, n);
					}),
					(function (e) {
						e.extend({
							debounce: bff.debounce,
							throttle: bff.throttle,
							assert: function (e, t, n) {
								e ||
									bff.report_exception(
										t,
										window.location.href,
										window.location.href
									);
							},
						}),
							(e.fn.deserialize = function (t, n, r) {
								this.each(function () {
									!(function (t, n, r, i) {
										var o = decodeURIComponent(n).split('&'),
											a = 0,
											s = null,
											l = null,
											c = null,
											u = null;
										if (r) {
											var f = e(
												'input[type="checkbox"],input[type="radio"]',
												t
											);
											i && (f = f.filter(i)),
												f.prop('checked', false),
												(f = e(
													'select,input[type="text"],input[type="password"],input[type="hidden"],textarea',
													t
												)),
												i && (f = f.filter(i)),
												f.val('');
										}
										var d = {};
										for (; (s = o[a++]); )
											(l = (u = s.split('='))[0] || ''),
												(c = (u[1] || '').replace(/\+/g, ' ')),
												'' != l &&
													(l in d
														? ('array' !== e.type(d[l]) && (d[l] = [d[l]]),
														  d[l].push(c))
														: (d[l] = c));
										for (l in d)
											for (var p in ((c = d[l]),
											e(
												'select[name="' +
													l +
													'"],input[type="text"][name="' +
													l +
													'"],input[type="password"][name="' +
													l +
													'"],input[type="hidden"][name="' +
													l +
													'"],textarea[name="' +
													l +
													'"]',
												t
											).val(c),
											e.isArray(c) || (c = [c]),
											c)) {
												var h = c[p];
												e(
													'input[type="checkbox"][name="' +
														l +
														'"][value="' +
														h +
														'"],input[type="radio"][name="' +
														l +
														'"][value="' +
														h +
														'"]',
													t
												).prop('checked', true);
											}
									})(this, t, !!n, r || false);
								});
							});
					})(jQuery),
					((f = jQuery).fn.autogrow = function (e) {
						return this.each(function () {
							new f.autogrow(this, e);
						});
					}),
					(f.autogrow = function (e, t) {
						(this.options = t || {}),
							(this.dummy = null),
							(this.interval = null),
							(this.line_height =
								this.options.lineHeight || parseInt(f(e).css('line-height'))),
							(this.min_height =
								this.options.minHeight || parseInt(f(e).css('min-height'))),
							(this.max_height =
								this.options.maxHeight || parseInt(f(e).css('max-height'))),
							(this.expand_callback = this.options.expandCallback),
							(this.textarea = f(e)),
							NaN == this.line_height && (this.line_height = 0),
							this.init();
					}),
					(f.autogrow.fn = f.autogrow.prototype = { autogrow: '1.2.2' }),
					(f.autogrow.fn.extend = f.autogrow.extend = f.extend),
					f.autogrow.fn.extend({
						init: function () {
							var e = this;
							this.textarea.css({ overflow: 'hidden', display: 'block' }),
								this.textarea
									.bind('focus', function () {
										e.startExpand();
									})
									.bind('blur', function () {
										e.stopExpand();
									}),
								this.checkExpand();
						},
						startExpand: function () {
							var e = this;
							this.interval = window.setInterval(function () {
								e.checkExpand();
							}, 400);
						},
						stopExpand: function () {
							clearInterval(this.interval);
						},
						checkExpand: function () {
							null == this.dummy &&
								((this.dummy = f('<div></div>')),
								this.dummy
									.css({
										'font-size': this.textarea.css('font-size'),
										'font-family': this.textarea.css('font-family'),
										width: this.textarea.css('width'),
										'padding-top': this.textarea.css('padding-top'),
										'padding-right': this.textarea.css('padding-right'),
										'padding-bottom': this.textarea.css('padding-bottom'),
										'padding-left': this.textarea.css('padding-left'),
										'line-height': this.line_height + 'px',
										'overflow-x': 'hidden',
										position: 'absolute',
										top: 0,
										left: -9999,
										'white-space': 'pre-wrap',
										'word-wrap': 'break-word',
									})
									.appendTo('body'));
							var e = this.dummy.css('width'),
								t = this.textarea.css('width'),
								n = this.textarea.val().replace(/(<|>)/g, '');
							if (
								((n = bff.browser.msie
									? n.replace(/\n/g, '<BR>new')
									: n.replace(/\n/g, '<br>new')),
								(this.dummy.html() != n || e != t) &&
									(this.dummy.html(n),
									this.dummy.width(t),
									this.max_height > 0 &&
									this.dummy.height() + this.line_height > this.max_height
										? this.textarea.css('overflow-y', 'auto')
										: (this.textarea.css('overflow-y', 'hidden'),
										  (this.textarea.height() <
												this.dummy.height() + this.line_height ||
												this.dummy.height() < this.textarea.height()) &&
												this.textarea.animate(
													{
														height:
															this.dummy.height() + this.line_height + 'px',
													},
													100
												))),
								this.expand_callback)
							) {
								var r = this;
								window.setTimeout(function () {
									r.expand_callback();
								}, 500);
							}
						},
					});
			},
			888: function (e, t, n) {
				var r, i, o, a;
				function s(e) {
					return (
						(s =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											'function' == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? 'symbol'
											: typeof e;
								  }),
						s(e)
					);
					/*!
					 * Bootstrap v4.4.1 (https://getbootstrap.com/)
					 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
					 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
					 */
				}
				(a = function (e, t, n) {
					'use strict';
					function r(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							(r.enumerable = r.enumerable || false),
								(r.configurable = true),
								'value' in r && (r.writable = true),
								Object.defineProperty(e, r.key, r);
						}
					}
					function i(e, t, n) {
						return t && r(e.prototype, t), n && r(e, n), e;
					}
					function o(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							t &&
								(r = r.filter(function (t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable;
								})),
								n.push.apply(n, r);
						}
						return n;
					}
					function a(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {};
							t % 2
								? o(Object(n), true).forEach(function (t) {
										var r, i, o;
										(r = e),
											(o = n[(i = t)]),
											i in r
												? Object.defineProperty(r, i, {
														value: o,
														enumerable: true,
														configurable: true,
														writable: true,
												  })
												: (r[i] = o);
								  })
								: Object.getOwnPropertyDescriptors
								? Object.defineProperties(
										e,
										Object.getOwnPropertyDescriptors(n)
								  )
								: o(Object(n)).forEach(function (t) {
										Object.defineProperty(
											e,
											t,
											Object.getOwnPropertyDescriptor(n, t)
										);
								  });
						}
						return e;
					}
					(t = t && t.hasOwnProperty('default') ? t.default : t),
						(n = n && n.hasOwnProperty('default') ? n.default : n);
					var l = 'transitionend',
						c = {
							TRANSITION_END: 'bsTransitionEnd',
							getUID: function (e) {
								for (
									;
									(e += ~~(1e6 * Math.random())), document.getElementById(e);

								);
								return e;
							},
							getSelectorFromElement: function (e) {
								var t = e.getAttribute('data-target');
								if (!t || '#' === t) {
									var n = e.getAttribute('href');
									t = n && '#' !== n ? n.trim() : '';
								}
								try {
									return document.querySelector(t) ? t : null;
								} catch (e) {
									return null;
								}
							},
							getTransitionDurationFromElement: function (e) {
								if (!e) return 0;
								var n = t(e).css('transition-duration'),
									r = t(e).css('transition-delay'),
									i = parseFloat(n),
									o = parseFloat(r);
								return i || o
									? ((n = n.split(',')[0]),
									  (r = r.split(',')[0]),
									  1e3 * (parseFloat(n) + parseFloat(r)))
									: 0;
							},
							reflow: function (e) {
								return e.offsetHeight;
							},
							triggerTransitionEnd: function (e) {
								t(e).trigger(l);
							},
							supportsTransitionEnd: function () {
								return Boolean(l);
							},
							isElement: function (e) {
								return (e[0] || e).nodeType;
							},
							typeCheckConfig: function (e, t, n) {
								for (var r in n)
									if (Object.prototype.hasOwnProperty.call(n, r)) {
										var i = n[r],
											o = t[r],
											a =
												o && c.isElement(o)
													? 'element'
													: ((s = o),
													  {}.toString
															.call(s)
															.match(/\s([a-z]+)/i)[1]
															.toLowerCase());
										if (!new RegExp(i).test(a))
											throw new Error(
												e.toUpperCase() +
													': Option "' +
													r +
													'" provided type "' +
													a +
													'" but expected type "' +
													i +
													'".'
											);
									}
								var s;
							},
							findShadowRoot: function (e) {
								if (!document.documentElement.attachShadow) return null;
								if ('function' != typeof e.getRootNode)
									return e instanceof ShadowRoot
										? e
										: e.parentNode
										? c.findShadowRoot(e.parentNode)
										: null;
								var t = e.getRootNode();
								return t instanceof ShadowRoot ? t : null;
							},
							jQueryDetection: function () {
								if (void 0 === t)
									throw new TypeError(
										"Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
									);
								var e = t.fn.jquery.split(' ')[0].split('.');
								if (
									(e[0] < 2 && e[1] < 9) ||
									(1 === e[0] && 9 === e[1] && e[2] < 1) ||
									4 <= e[0]
								)
									throw new Error(
										"Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
									);
							},
						};
					c.jQueryDetection(),
						(t.fn.emulateTransitionEnd = function (e) {
							var n = this,
								r = false;
							return (
								t(this).one(c.TRANSITION_END, function () {
									r = true;
								}),
								setTimeout(function () {
									r || c.triggerTransitionEnd(n);
								}, e),
								this
							);
						}),
						(t.event.special[c.TRANSITION_END] = {
							bindType: l,
							delegateType: l,
							handle: function (e) {
								if (t(e.target).is(this))
									return e.handleObj.handler.apply(this, arguments);
							},
						});
					var u = 'alert',
						f = 'bs.alert',
						d = '.' + f,
						p = t.fn[u],
						h = {
							CLOSE: 'close' + d,
							CLOSED: 'closed' + d,
							CLICK_DATA_API: 'click' + d + '.data-api',
						},
						m = (function () {
							function e(e) {
								this._element = e;
							}
							var n = e.prototype;
							return (
								(n.close = function (e) {
									var t = this._element;
									e && (t = this._getRootElement(e)),
										this._triggerCloseEvent(t).isDefaultPrevented() ||
											this._removeElement(t);
								}),
								(n.dispose = function () {
									t.removeData(this._element, f), (this._element = null);
								}),
								(n._getRootElement = function (e) {
									var n = c.getSelectorFromElement(e),
										r = false;
									return (
										n && (r = document.querySelector(n)),
										r || t(e).closest('.alert')[0]
									);
								}),
								(n._triggerCloseEvent = function (e) {
									var n = t.Event(h.CLOSE);
									return t(e).trigger(n), n;
								}),
								(n._removeElement = function (e) {
									var n = this;
									if ((t(e).removeClass('show'), t(e).hasClass('fade'))) {
										var r = c.getTransitionDurationFromElement(e);
										t(e)
											.one(c.TRANSITION_END, function (t) {
												return n._destroyElement(e, t);
											})
											.emulateTransitionEnd(r);
									} else this._destroyElement(e);
								}),
								(n._destroyElement = function (e) {
									t(e).detach().trigger(h.CLOSED).remove();
								}),
								(e._jQueryInterface = function (n) {
									return this.each(function () {
										var r = t(this),
											i = r.data(f);
										i || ((i = new e(this)), r.data(f, i)),
											'close' === n && i[n](this);
									});
								}),
								(e._handleDismiss = function (e) {
									return function (t) {
										t && t.preventDefault(), e.close(this);
									};
								}),
								i(e, null, [
									{
										key: 'VERSION',
										get: function () {
											return '4.4.1';
										},
									},
								]),
								e
							);
						})();
					t(document).on(
						h.CLICK_DATA_API,
						'[data-dismiss="alert"]',
						m._handleDismiss(new m())
					),
						(t.fn[u] = m._jQueryInterface),
						(t.fn[u].Constructor = m),
						(t.fn[u].noConflict = function () {
							return (t.fn[u] = p), m._jQueryInterface;
						});
					var g = 'button',
						v = 'bs.button',
						b = '.' + v,
						y = '.data-api',
						w = t.fn[g],
						_ = 'active',
						x = '[data-toggle^="button"]',
						C = 'input:not([type="hidden"])',
						T = '.btn',
						E = {
							CLICK_DATA_API: 'click' + b + y,
							FOCUS_BLUR_DATA_API: 'focus' + b + y + ' blur' + b + y,
							LOAD_DATA_API: 'load' + b + y,
						},
						k = (function () {
							function e(e) {
								this._element = e;
							}
							var n = e.prototype;
							return (
								(n.toggle = function () {
									var e = true,
										n = true,
										r = t(this._element).closest('[data-toggle="buttons"]')[0];
									if (r) {
										var i = this._element.querySelector(C);
										if (i) {
											if ('radio' === i.type)
												if (i.checked && this._element.classList.contains(_))
													e = false;
												else {
													var o = r.querySelector('.active');
													o && t(o).removeClass(_);
												}
											else
												'checkbox' === i.type
													? 'LABEL' === this._element.tagName &&
													  i.checked === this._element.classList.contains(_) &&
													  (e = false)
													: (e = false);
											e &&
												((i.checked = !this._element.classList.contains(_)),
												t(i).trigger('change')),
												i.focus(),
												(n = false);
										}
									}
									this._element.hasAttribute('disabled') ||
										this._element.classList.contains('disabled') ||
										(n &&
											this._element.setAttribute(
												'aria-pressed',
												!this._element.classList.contains(_)
											),
										e && t(this._element).toggleClass(_));
								}),
								(n.dispose = function () {
									t.removeData(this._element, v), (this._element = null);
								}),
								(e._jQueryInterface = function (n) {
									return this.each(function () {
										var r = t(this).data(v);
										r || ((r = new e(this)), t(this).data(v, r)),
											'toggle' === n && r[n]();
									});
								}),
								i(e, null, [
									{
										key: 'VERSION',
										get: function () {
											return '4.4.1';
										},
									},
								]),
								e
							);
						})();
					t(document)
						.on(E.CLICK_DATA_API, x, function (e) {
							var n = e.target;
							if (
								(t(n).hasClass('btn') || (n = t(n).closest(T)[0]),
								!n ||
									n.hasAttribute('disabled') ||
									n.classList.contains('disabled'))
							)
								e.preventDefault();
							else {
								var r = n.querySelector(C);
								if (
									r &&
									(r.hasAttribute('disabled') ||
										r.classList.contains('disabled'))
								)
									return void e.preventDefault();
								k._jQueryInterface.call(t(n), 'toggle');
							}
						})
						.on(E.FOCUS_BLUR_DATA_API, x, function (e) {
							var n = t(e.target).closest(T)[0];
							t(n).toggleClass('focus', /^focus(in)?$/.test(e.type));
						}),
						t(window).on(E.LOAD_DATA_API, function () {
							for (
								var e = [].slice.call(
										document.querySelectorAll('[data-toggle="buttons"] .btn')
									),
									t = 0,
									n = e.length;
								t < n;
								t++
							) {
								var r = e[t],
									i = r.querySelector(C);
								i.checked || i.hasAttribute('checked')
									? r.classList.add(_)
									: r.classList.remove(_);
							}
							for (
								var o = 0,
									a = (e = [].slice.call(
										document.querySelectorAll('[data-toggle="button"]')
									)).length;
								o < a;
								o++
							) {
								var s = e[o];
								'true' === s.getAttribute('aria-pressed')
									? s.classList.add(_)
									: s.classList.remove(_);
							}
						}),
						(t.fn[g] = k._jQueryInterface),
						(t.fn[g].Constructor = k),
						(t.fn[g].noConflict = function () {
							return (t.fn[g] = w), k._jQueryInterface;
						});
					var S = 'carousel',
						j = 'bs.carousel',
						D = '.' + j,
						A = '.data-api',
						O = t.fn[S],
						$ = {
							interval: 5e3,
							keyboard: true,
							slide: false,
							pause: 'hover',
							wrap: true,
							touch: true,
						},
						N = {
							interval: '(number|boolean)',
							keyboard: 'boolean',
							slide: '(boolean|string)',
							pause: '(string|boolean)',
							wrap: 'boolean',
							touch: 'boolean',
						},
						I = 'next',
						P = 'prev',
						L = {
							SLIDE: 'slide' + D,
							SLID: 'slid' + D,
							KEYDOWN: 'keydown' + D,
							MOUSEENTER: 'mouseenter' + D,
							MOUSELEAVE: 'mouseleave' + D,
							TOUCHSTART: 'touchstart' + D,
							TOUCHMOVE: 'touchmove' + D,
							TOUCHEND: 'touchend' + D,
							POINTERDOWN: 'pointerdown' + D,
							POINTERUP: 'pointerup' + D,
							DRAG_START: 'dragstart' + D,
							LOAD_DATA_API: 'load' + D + A,
							CLICK_DATA_API: 'click' + D + A,
						},
						H = 'active',
						M = '.active.carousel-item',
						R = { TOUCH: 'touch', PEN: 'pen' },
						q = (function () {
							function e(e, t) {
								(this._items = null),
									(this._interval = null),
									(this._activeElement = null),
									(this._isPaused = false),
									(this._isSliding = false),
									(this.touchTimeout = null),
									(this.touchStartX = 0),
									(this.touchDeltaX = 0),
									(this._config = this._getConfig(t)),
									(this._element = e),
									(this._indicatorsElement = this._element.querySelector(
										'.carousel-indicators'
									)),
									(this._touchSupported =
										'ontouchstart' in document.documentElement ||
										0 < navigator.maxTouchPoints),
									(this._pointerEvent = Boolean(
										window.PointerEvent || window.MSPointerEvent
									)),
									this._addEventListeners();
							}
							var n = e.prototype;
							return (
								(n.next = function () {
									this._isSliding || this._slide(I);
								}),
								(n.nextWhenVisible = function () {
									!document.hidden &&
										t(this._element).is(':visible') &&
										'hidden' !== t(this._element).css('visibility') &&
										this.next();
								}),
								(n.prev = function () {
									this._isSliding || this._slide(P);
								}),
								(n.pause = function (e) {
									e || (this._isPaused = true),
										this._element.querySelector(
											'.carousel-item-next, .carousel-item-prev'
										) &&
											(c.triggerTransitionEnd(this._element), this.cycle(true)),
										clearInterval(this._interval),
										(this._interval = null);
								}),
								(n.cycle = function (e) {
									e || (this._isPaused = false),
										this._interval &&
											(clearInterval(this._interval), (this._interval = null)),
										this._config.interval &&
											!this._isPaused &&
											(this._interval = setInterval(
												(document.visibilityState
													? this.nextWhenVisible
													: this.next
												).bind(this),
												this._config.interval
											));
								}),
								(n.to = function (e) {
									var n = this;
									this._activeElement = this._element.querySelector(M);
									var r = this._getItemIndex(this._activeElement);
									if (!(e > this._items.length - 1 || e < 0))
										if (this._isSliding)
											t(this._element).one(L.SLID, function () {
												return n.to(e);
											});
										else {
											if (r === e) return this.pause(), void this.cycle();
											var i = r < e ? I : P;
											this._slide(i, this._items[e]);
										}
								}),
								(n.dispose = function () {
									t(this._element).off(D),
										t.removeData(this._element, j),
										(this._items = null),
										(this._config = null),
										(this._element = null),
										(this._interval = null),
										(this._isPaused = null),
										(this._isSliding = null),
										(this._activeElement = null),
										(this._indicatorsElement = null);
								}),
								(n._getConfig = function (e) {
									return (e = a({}, $, {}, e)), c.typeCheckConfig(S, e, N), e;
								}),
								(n._handleSwipe = function () {
									var e = Math.abs(this.touchDeltaX);
									if (!(e <= 40)) {
										var t = e / this.touchDeltaX;
										(this.touchDeltaX = 0) < t && this.prev(),
											t < 0 && this.next();
									}
								}),
								(n._addEventListeners = function () {
									var e = this;
									this._config.keyboard &&
										t(this._element).on(L.KEYDOWN, function (t) {
											return e._keydown(t);
										}),
										'hover' === this._config.pause &&
											t(this._element)
												.on(L.MOUSEENTER, function (t) {
													return e.pause(t);
												})
												.on(L.MOUSELEAVE, function (t) {
													return e.cycle(t);
												}),
										this._config.touch && this._addTouchEventListeners();
								}),
								(n._addTouchEventListeners = function () {
									var e = this;
									if (this._touchSupported) {
										var n = function (t) {
												e._pointerEvent &&
												R[t.originalEvent.pointerType.toUpperCase()]
													? (e.touchStartX = t.originalEvent.clientX)
													: e._pointerEvent ||
													  (e.touchStartX =
															t.originalEvent.touches[0].clientX);
											},
											r = function (t) {
												e._pointerEvent &&
													R[t.originalEvent.pointerType.toUpperCase()] &&
													(e.touchDeltaX =
														t.originalEvent.clientX - e.touchStartX),
													e._handleSwipe(),
													'hover' === e._config.pause &&
														(e.pause(),
														e.touchTimeout && clearTimeout(e.touchTimeout),
														(e.touchTimeout = setTimeout(function (t) {
															return e.cycle(t);
														}, 500 + e._config.interval)));
											};
										t(this._element.querySelectorAll('.carousel-item img')).on(
											L.DRAG_START,
											function (e) {
												return e.preventDefault();
											}
										),
											this._pointerEvent
												? (t(this._element).on(L.POINTERDOWN, function (e) {
														return n(e);
												  }),
												  t(this._element).on(L.POINTERUP, function (e) {
														return r(e);
												  }),
												  this._element.classList.add('pointer-event'))
												: (t(this._element).on(L.TOUCHSTART, function (e) {
														return n(e);
												  }),
												  t(this._element).on(L.TOUCHMOVE, function (t) {
														return (function (t) {
															t.originalEvent.touches &&
															1 < t.originalEvent.touches.length
																? (e.touchDeltaX = 0)
																: (e.touchDeltaX =
																		t.originalEvent.touches[0].clientX -
																		e.touchStartX);
														})(t);
												  }),
												  t(this._element).on(L.TOUCHEND, function (e) {
														return r(e);
												  }));
									}
								}),
								(n._keydown = function (e) {
									if (!/input|textarea/i.test(e.target.tagName))
										switch (e.which) {
											case 37:
												e.preventDefault(), this.prev();
												break;
											case 39:
												e.preventDefault(), this.next();
										}
								}),
								(n._getItemIndex = function (e) {
									return (
										(this._items =
											e && e.parentNode
												? [].slice.call(
														e.parentNode.querySelectorAll('.carousel-item')
												  )
												: []),
										this._items.indexOf(e)
									);
								}),
								(n._getItemByDirection = function (e, t) {
									var n = e === I,
										r = e === P,
										i = this._getItemIndex(t),
										o = this._items.length - 1;
									if (((r && 0 === i) || (n && i === o)) && !this._config.wrap)
										return t;
									var a = (i + (e === P ? -1 : 1)) % this._items.length;
									return -1 == a
										? this._items[this._items.length - 1]
										: this._items[a];
								}),
								(n._triggerSlideEvent = function (e, n) {
									var r = this._getItemIndex(e),
										i = this._getItemIndex(this._element.querySelector(M)),
										o = t.Event(L.SLIDE, {
											relatedTarget: e,
											direction: n,
											from: i,
											to: r,
										});
									return t(this._element).trigger(o), o;
								}),
								(n._setActiveIndicatorElement = function (e) {
									if (this._indicatorsElement) {
										var n = [].slice.call(
											this._indicatorsElement.querySelectorAll('.active')
										);
										t(n).removeClass(H);
										var r =
											this._indicatorsElement.children[this._getItemIndex(e)];
										r && t(r).addClass(H);
									}
								}),
								(n._slide = function (e, n) {
									var r,
										i,
										o,
										a = this,
										s = this._element.querySelector(M),
										l = this._getItemIndex(s),
										u = n || (s && this._getItemByDirection(e, s)),
										f = this._getItemIndex(u),
										d = Boolean(this._interval);
									if (
										((o =
											e === I
												? ((r = 'carousel-item-left'),
												  (i = 'carousel-item-next'),
												  'left')
												: ((r = 'carousel-item-right'),
												  (i = 'carousel-item-prev'),
												  'right')),
										u && t(u).hasClass(H))
									)
										this._isSliding = false;
									else if (
										!this._triggerSlideEvent(u, o).isDefaultPrevented() &&
										s &&
										u
									) {
										(this._isSliding = true),
											d && this.pause(),
											this._setActiveIndicatorElement(u);
										var p = t.Event(L.SLID, {
											relatedTarget: u,
											direction: o,
											from: l,
											to: f,
										});
										if (t(this._element).hasClass('slide')) {
											t(u).addClass(i),
												c.reflow(u),
												t(s).addClass(r),
												t(u).addClass(r);
											var h = parseInt(u.getAttribute('data-interval'), 10);
											h
												? ((this._config.defaultInterval =
														this._config.defaultInterval ||
														this._config.interval),
												  (this._config.interval = h))
												: (this._config.interval =
														this._config.defaultInterval ||
														this._config.interval);
											var m = c.getTransitionDurationFromElement(s);
											t(s)
												.one(c.TRANSITION_END, function () {
													t(u)
														.removeClass(r + ' ' + i)
														.addClass(H),
														t(s).removeClass(H + ' ' + i + ' ' + r),
														(a._isSliding = false),
														setTimeout(function () {
															return t(a._element).trigger(p);
														}, 0);
												})
												.emulateTransitionEnd(m);
										} else
											t(s).removeClass(H),
												t(u).addClass(H),
												(this._isSliding = false),
												t(this._element).trigger(p);
										d && this.cycle();
									}
								}),
								(e._jQueryInterface = function (n) {
									return this.each(function () {
										var r = t(this).data(j),
											i = a({}, $, {}, t(this).data());
										'object' == s(n) && (i = a({}, i, {}, n));
										var o = 'string' == typeof n ? n : i.slide;
										if (
											(r || ((r = new e(this, i)), t(this).data(j, r)),
											'number' == typeof n)
										)
											r.to(n);
										else if ('string' == typeof o) {
											if (void 0 === r[o])
												throw new TypeError('No method named "' + o + '"');
											r[o]();
										} else i.interval && i.ride && (r.pause(), r.cycle());
									});
								}),
								(e._dataApiClickHandler = function (n) {
									var r = c.getSelectorFromElement(this);
									if (r) {
										var i = t(r)[0];
										if (i && t(i).hasClass('carousel')) {
											var o = a({}, t(i).data(), {}, t(this).data()),
												s = this.getAttribute('data-slide-to');
											s && (o.interval = false),
												e._jQueryInterface.call(t(i), o),
												s && t(i).data(j).to(s),
												n.preventDefault();
										}
									}
								}),
								i(e, null, [
									{
										key: 'VERSION',
										get: function () {
											return '4.4.1';
										},
									},
									{
										key: 'Default',
										get: function () {
											return $;
										},
									},
								]),
								e
							);
						})();
					t(document).on(
						L.CLICK_DATA_API,
						'[data-slide], [data-slide-to]',
						q._dataApiClickHandler
					),
						t(window).on(L.LOAD_DATA_API, function () {
							for (
								var e = [].slice.call(
										document.querySelectorAll('[data-ride="carousel"]')
									),
									n = 0,
									r = e.length;
								n < r;
								n++
							) {
								var i = t(e[n]);
								q._jQueryInterface.call(i, i.data());
							}
						}),
						(t.fn[S] = q._jQueryInterface),
						(t.fn[S].Constructor = q),
						(t.fn[S].noConflict = function () {
							return (t.fn[S] = O), q._jQueryInterface;
						});
					var B = 'collapse',
						F = 'bs.collapse',
						W = '.' + F,
						U = t.fn[B],
						z = { toggle: true, parent: '' },
						V = { toggle: 'boolean', parent: '(string|element)' },
						Q = {
							SHOW: 'show' + W,
							SHOWN: 'shown' + W,
							HIDE: 'hide' + W,
							HIDDEN: 'hidden' + W,
							CLICK_DATA_API: 'click' + W + '.data-api',
						},
						K = 'show',
						Y = 'collapse',
						X = 'collapsing',
						J = 'collapsed',
						G = 'width',
						Z = '[data-toggle="collapse"]',
						ee = (function () {
							function e(e, t) {
								(this._isTransitioning = false),
									(this._element = e),
									(this._config = this._getConfig(t)),
									(this._triggerArray = [].slice.call(
										document.querySelectorAll(
											'[data-toggle="collapse"][href="#' +
												e.id +
												'"],[data-toggle="collapse"][data-target="#' +
												e.id +
												'"]'
										)
									));
								for (
									var n = [].slice.call(document.querySelectorAll(Z)),
										r = 0,
										i = n.length;
									r < i;
									r++
								) {
									var o = n[r],
										a = c.getSelectorFromElement(o),
										s = [].slice
											.call(document.querySelectorAll(a))
											.filter(function (t) {
												return t === e;
											});
									null !== a &&
										0 < s.length &&
										((this._selector = a), this._triggerArray.push(o));
								}
								(this._parent = this._config.parent ? this._getParent() : null),
									this._config.parent ||
										this._addAriaAndCollapsedClass(
											this._element,
											this._triggerArray
										),
									this._config.toggle && this.toggle();
							}
							var n = e.prototype;
							return (
								(n.toggle = function () {
									t(this._element).hasClass(K) ? this.hide() : this.show();
								}),
								(n.show = function () {
									var n,
										r,
										i = this;
									if (
										!(
											this._isTransitioning ||
											t(this._element).hasClass(K) ||
											(this._parent &&
												0 ===
													(n = [].slice
														.call(
															this._parent.querySelectorAll(
																'.show, .collapsing'
															)
														)
														.filter(function (e) {
															return 'string' == typeof i._config.parent
																? e.getAttribute('data-parent') ===
																		i._config.parent
																: e.classList.contains(Y);
														})).length &&
												(n = null),
											n &&
												(r = t(n).not(this._selector).data(F)) &&
												r._isTransitioning)
										)
									) {
										var o = t.Event(Q.SHOW);
										if (
											(t(this._element).trigger(o), !o.isDefaultPrevented())
										) {
											n &&
												(e._jQueryInterface.call(
													t(n).not(this._selector),
													'hide'
												),
												r || t(n).data(F, null));
											var a = this._getDimension();
											t(this._element).removeClass(Y).addClass(X),
												(this._element.style[a] = 0),
												this._triggerArray.length &&
													t(this._triggerArray)
														.removeClass(J)
														.attr('aria-expanded', true),
												this.setTransitioning(true);
											var s = 'scroll' + (a[0].toUpperCase() + a.slice(1)),
												l = c.getTransitionDurationFromElement(this._element);
											t(this._element)
												.one(c.TRANSITION_END, function () {
													t(i._element).removeClass(X).addClass(Y).addClass(K),
														(i._element.style[a] = ''),
														i.setTransitioning(false),
														t(i._element).trigger(Q.SHOWN);
												})
												.emulateTransitionEnd(l),
												(this._element.style[a] = this._element[s] + 'px');
										}
									}
								}),
								(n.hide = function () {
									var e = this;
									if (!this._isTransitioning && t(this._element).hasClass(K)) {
										var n = t.Event(Q.HIDE);
										if (
											(t(this._element).trigger(n), !n.isDefaultPrevented())
										) {
											var r = this._getDimension();
											(this._element.style[r] =
												this._element.getBoundingClientRect()[r] + 'px'),
												c.reflow(this._element),
												t(this._element)
													.addClass(X)
													.removeClass(Y)
													.removeClass(K);
											var i = this._triggerArray.length;
											if (0 < i)
												for (var o = 0; o < i; o++) {
													var a = this._triggerArray[o],
														s = c.getSelectorFromElement(a);
													null !== s &&
														(t(
															[].slice.call(document.querySelectorAll(s))
														).hasClass(K) ||
															t(a).addClass(J).attr('aria-expanded', false));
												}
											this.setTransitioning(true),
												(this._element.style[r] = '');
											var l = c.getTransitionDurationFromElement(this._element);
											t(this._element)
												.one(c.TRANSITION_END, function () {
													e.setTransitioning(false),
														t(e._element)
															.removeClass(X)
															.addClass(Y)
															.trigger(Q.HIDDEN);
												})
												.emulateTransitionEnd(l);
										}
									}
								}),
								(n.setTransitioning = function (e) {
									this._isTransitioning = e;
								}),
								(n.dispose = function () {
									t.removeData(this._element, F),
										(this._config = null),
										(this._parent = null),
										(this._element = null),
										(this._triggerArray = null),
										(this._isTransitioning = null);
								}),
								(n._getConfig = function (e) {
									return (
										((e = a({}, z, {}, e)).toggle = Boolean(e.toggle)),
										c.typeCheckConfig(B, e, V),
										e
									);
								}),
								(n._getDimension = function () {
									return t(this._element).hasClass(G) ? G : 'height';
								}),
								(n._getParent = function () {
									var n,
										r = this;
									c.isElement(this._config.parent)
										? ((n = this._config.parent),
										  void 0 !== this._config.parent.jquery &&
												(n = this._config.parent[0]))
										: (n = document.querySelector(this._config.parent));
									var i =
											'[data-toggle="collapse"][data-parent="' +
											this._config.parent +
											'"]',
										o = [].slice.call(n.querySelectorAll(i));
									return (
										t(o).each(function (t, n) {
											r._addAriaAndCollapsedClass(e._getTargetFromElement(n), [
												n,
											]);
										}),
										n
									);
								}),
								(n._addAriaAndCollapsedClass = function (e, n) {
									var r = t(e).hasClass(K);
									n.length && t(n).toggleClass(J, !r).attr('aria-expanded', r);
								}),
								(e._getTargetFromElement = function (e) {
									var t = c.getSelectorFromElement(e);
									return t ? document.querySelector(t) : null;
								}),
								(e._jQueryInterface = function (n) {
									return this.each(function () {
										var r = t(this),
											i = r.data(F),
											o = a(
												{},
												z,
												{},
												r.data(),
												{},
												'object' == s(n) && n ? n : {}
											);
										if (
											(!i &&
												o.toggle &&
												/show|hide/.test(n) &&
												(o.toggle = false),
											i || ((i = new e(this, o)), r.data(F, i)),
											'string' == typeof n)
										) {
											if (void 0 === i[n])
												throw new TypeError('No method named "' + n + '"');
											i[n]();
										}
									});
								}),
								i(e, null, [
									{
										key: 'VERSION',
										get: function () {
											return '4.4.1';
										},
									},
									{
										key: 'Default',
										get: function () {
											return z;
										},
									},
								]),
								e
							);
						})();
					t(document).on(Q.CLICK_DATA_API, Z, function (e) {
						'A' === e.currentTarget.tagName && e.preventDefault();
						var n = t(this),
							r = c.getSelectorFromElement(this),
							i = [].slice.call(document.querySelectorAll(r));
						t(i).each(function () {
							var e = t(this),
								r = e.data(F) ? 'toggle' : n.data();
							ee._jQueryInterface.call(e, r);
						});
					}),
						(t.fn[B] = ee._jQueryInterface),
						(t.fn[B].Constructor = ee),
						(t.fn[B].noConflict = function () {
							return (t.fn[B] = U), ee._jQueryInterface;
						});
					var te = 'dropdown',
						ne = 'bs.dropdown',
						re = '.' + ne,
						ie = '.data-api',
						oe = t.fn[te],
						ae = new RegExp('38|40|27'),
						se = {
							HIDE: 'hide' + re,
							HIDDEN: 'hidden' + re,
							SHOW: 'show' + re,
							SHOWN: 'shown' + re,
							CLICK: 'click' + re,
							CLICK_DATA_API: 'click' + re + ie,
							KEYDOWN_DATA_API: 'keydown' + re + ie,
							KEYUP_DATA_API: 'keyup' + re + ie,
						},
						le = 'disabled',
						ce = 'show',
						ue = 'dropdown-menu-right',
						fe = '[data-toggle="dropdown"]',
						de = '.dropdown-menu',
						pe = {
							offset: 0,
							flip: true,
							boundary: 'scrollParent',
							reference: 'toggle',
							display: 'dynamic',
							popperConfig: null,
						},
						he = {
							offset: '(number|string|function)',
							flip: 'boolean',
							boundary: '(string|element)',
							reference: '(string|element)',
							display: 'string',
							popperConfig: '(null|object)',
						},
						me = (function () {
							function e(e, t) {
								(this._element = e),
									(this._popper = null),
									(this._config = this._getConfig(t)),
									(this._menu = this._getMenuElement()),
									(this._inNavbar = this._detectNavbar()),
									this._addEventListeners();
							}
							var r = e.prototype;
							return (
								(r.toggle = function () {
									if (
										!this._element.disabled &&
										!t(this._element).hasClass(le)
									) {
										var n = t(this._menu).hasClass(ce);
										e._clearMenus(), n || this.show(true);
									}
								}),
								(r.show = function (r) {
									if (
										(void 0 === r && (r = false),
										!(
											this._element.disabled ||
											t(this._element).hasClass(le) ||
											t(this._menu).hasClass(ce)
										))
									) {
										var i = { relatedTarget: this._element },
											o = t.Event(se.SHOW, i),
											a = e._getParentFromElement(this._element);
										if ((t(a).trigger(o), !o.isDefaultPrevented())) {
											if (!this._inNavbar && r) {
												if (void 0 === n)
													throw new TypeError(
														"Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
													);
												var s = this._element;
												'parent' === this._config.reference
													? (s = a)
													: c.isElement(this._config.reference) &&
													  ((s = this._config.reference),
													  void 0 !== this._config.reference.jquery &&
															(s = this._config.reference[0])),
													'scrollParent' !== this._config.boundary &&
														t(a).addClass('position-static'),
													(this._popper = new n(
														s,
														this._menu,
														this._getPopperConfig()
													));
											}
											'ontouchstart' in document.documentElement &&
												0 === t(a).closest('.navbar-nav').length &&
												t(document.body)
													.children()
													.on('mouseover', null, t.noop),
												this._element.focus(),
												this._element.setAttribute('aria-expanded', true),
												t(this._menu).toggleClass(ce),
												t(a).toggleClass(ce).trigger(t.Event(se.SHOWN, i));
										}
									}
								}),
								(r.hide = function () {
									if (
										!this._element.disabled &&
										!t(this._element).hasClass(le) &&
										t(this._menu).hasClass(ce)
									) {
										var n = { relatedTarget: this._element },
											r = t.Event(se.HIDE, n),
											i = e._getParentFromElement(this._element);
										t(i).trigger(r),
											r.isDefaultPrevented() ||
												(this._popper && this._popper.destroy(),
												t(this._menu).toggleClass(ce),
												t(i).toggleClass(ce).trigger(t.Event(se.HIDDEN, n)));
									}
								}),
								(r.dispose = function () {
									t.removeData(this._element, ne),
										t(this._element).off(re),
										(this._element = null),
										(this._menu = null) !== this._popper &&
											(this._popper.destroy(), (this._popper = null));
								}),
								(r.update = function () {
									(this._inNavbar = this._detectNavbar()),
										null !== this._popper && this._popper.scheduleUpdate();
								}),
								(r._addEventListeners = function () {
									var e = this;
									t(this._element).on(se.CLICK, function (t) {
										t.preventDefault(), t.stopPropagation(), e.toggle();
									});
								}),
								(r._getConfig = function (e) {
									return (
										(e = a(
											{},
											this.constructor.Default,
											{},
											t(this._element).data(),
											{},
											e
										)),
										c.typeCheckConfig(te, e, this.constructor.DefaultType),
										e
									);
								}),
								(r._getMenuElement = function () {
									if (!this._menu) {
										var t = e._getParentFromElement(this._element);
										t && (this._menu = t.querySelector(de));
									}
									return this._menu;
								}),
								(r._getPlacement = function () {
									var e = t(this._element.parentNode),
										n = 'bottom-start';
									return (
										e.hasClass('dropup')
											? ((n = 'top-start'),
											  t(this._menu).hasClass(ue) && (n = 'top-end'))
											: e.hasClass('dropright')
											? (n = 'right-start')
											: e.hasClass('dropleft')
											? (n = 'left-start')
											: t(this._menu).hasClass(ue) && (n = 'bottom-end'),
										n
									);
								}),
								(r._detectNavbar = function () {
									return 0 < t(this._element).closest('.navbar').length;
								}),
								(r._getOffset = function () {
									var e = this,
										t = {};
									return (
										'function' == typeof this._config.offset
											? (t.fn = function (t) {
													return (
														(t.offsets = a(
															{},
															t.offsets,
															{},
															e._config.offset(t.offsets, e._element) || {}
														)),
														t
													);
											  })
											: (t.offset = this._config.offset),
										t
									);
								}),
								(r._getPopperConfig = function () {
									var e = {
										placement: this._getPlacement(),
										modifiers: {
											offset: this._getOffset(),
											flip: { enabled: this._config.flip },
											preventOverflow: {
												boundariesElement: this._config.boundary,
											},
										},
									};
									return (
										'static' === this._config.display &&
											(e.modifiers.applyStyle = { enabled: false }),
										a({}, e, {}, this._config.popperConfig)
									);
								}),
								(e._jQueryInterface = function (n) {
									return this.each(function () {
										var r = t(this).data(ne);
										if (
											(r ||
												((r = new e(this, 'object' == s(n) ? n : null)),
												t(this).data(ne, r)),
											'string' == typeof n)
										) {
											if (void 0 === r[n])
												throw new TypeError('No method named "' + n + '"');
											r[n]();
										}
									});
								}),
								(e._clearMenus = function (n) {
									if (
										!n ||
										(3 !== n.which && ('keyup' !== n.type || 9 === n.which))
									)
										for (
											var r = [].slice.call(document.querySelectorAll(fe)),
												i = 0,
												o = r.length;
											i < o;
											i++
										) {
											var a = e._getParentFromElement(r[i]),
												s = t(r[i]).data(ne),
												l = { relatedTarget: r[i] };
											if ((n && 'click' === n.type && (l.clickEvent = n), s)) {
												var c = s._menu;
												if (
													t(a).hasClass(ce) &&
													!(
														n &&
														(('click' === n.type &&
															/input|textarea/i.test(n.target.tagName)) ||
															('keyup' === n.type && 9 === n.which)) &&
														t.contains(a, n.target)
													)
												) {
													var u = t.Event(se.HIDE, l);
													t(a).trigger(u),
														u.isDefaultPrevented() ||
															('ontouchstart' in document.documentElement &&
																t(document.body)
																	.children()
																	.off('mouseover', null, t.noop),
															r[i].setAttribute('aria-expanded', 'false'),
															s._popper && s._popper.destroy(),
															t(c).removeClass(ce),
															t(a)
																.removeClass(ce)
																.trigger(t.Event(se.HIDDEN, l)));
												}
											}
										}
								}),
								(e._getParentFromElement = function (e) {
									var t,
										n = c.getSelectorFromElement(e);
									return (
										n && (t = document.querySelector(n)), t || e.parentNode
									);
								}),
								(e._dataApiKeydownHandler = function (n) {
									if (
										(/input|textarea/i.test(n.target.tagName)
											? !(
													32 === n.which ||
													(27 !== n.which &&
														((40 !== n.which && 38 !== n.which) ||
															t(n.target).closest(de).length))
											  )
											: ae.test(n.which)) &&
										(n.preventDefault(),
										n.stopPropagation(),
										!this.disabled && !t(this).hasClass(le))
									) {
										var r = e._getParentFromElement(this),
											i = t(r).hasClass(ce);
										if (i || 27 !== n.which)
											if (i && (!i || (27 !== n.which && 32 !== n.which))) {
												var o = [].slice
													.call(
														r.querySelectorAll(
															'.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
														)
													)
													.filter(function (e) {
														return t(e).is(':visible');
													});
												if (0 !== o.length) {
													var a = o.indexOf(n.target);
													38 === n.which && 0 < a && a--,
														40 === n.which && a < o.length - 1 && a++,
														a < 0 && (a = 0),
														o[a].focus();
												}
											} else {
												if (27 === n.which) {
													var s = r.querySelector(fe);
													t(s).trigger('focus');
												}
												t(this).trigger('click');
											}
									}
								}),
								i(e, null, [
									{
										key: 'VERSION',
										get: function () {
											return '4.4.1';
										},
									},
									{
										key: 'Default',
										get: function () {
											return pe;
										},
									},
									{
										key: 'DefaultType',
										get: function () {
											return he;
										},
									},
								]),
								e
							);
						})();
					t(document)
						.on(se.KEYDOWN_DATA_API, fe, me._dataApiKeydownHandler)
						.on(se.KEYDOWN_DATA_API, de, me._dataApiKeydownHandler)
						.on(se.CLICK_DATA_API + ' ' + se.KEYUP_DATA_API, me._clearMenus)
						.on(se.CLICK_DATA_API, fe, function (e) {
							e.preventDefault(),
								e.stopPropagation(),
								me._jQueryInterface.call(t(this), 'toggle');
						})
						.on(se.CLICK_DATA_API, '.dropdown form', function (e) {
							e.stopPropagation();
						}),
						(t.fn[te] = me._jQueryInterface),
						(t.fn[te].Constructor = me),
						(t.fn[te].noConflict = function () {
							return (t.fn[te] = oe), me._jQueryInterface;
						});
					var ge = 'modal',
						ve = 'bs.modal',
						be = '.' + ve,
						ye = t.fn[ge],
						we = { backdrop: true, keyboard: true, focus: true, show: true },
						_e = {
							backdrop: '(boolean|string)',
							keyboard: 'boolean',
							focus: 'boolean',
							show: 'boolean',
						},
						xe = {
							HIDE: 'hide' + be,
							HIDE_PREVENTED: 'hidePrevented' + be,
							HIDDEN: 'hidden' + be,
							SHOW: 'show' + be,
							SHOWN: 'shown' + be,
							FOCUSIN: 'focusin' + be,
							RESIZE: 'resize' + be,
							CLICK_DISMISS: 'click.dismiss' + be,
							KEYDOWN_DISMISS: 'keydown.dismiss' + be,
							MOUSEUP_DISMISS: 'mouseup.dismiss' + be,
							MOUSEDOWN_DISMISS: 'mousedown.dismiss' + be,
							CLICK_DATA_API: 'click' + be + '.data-api',
						},
						Ce = 'modal-open',
						Te = 'fade',
						Ee = 'show',
						ke = 'modal-static',
						Se = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
						je = '.sticky-top',
						De = (function () {
							function e(e, t) {
								(this._config = this._getConfig(t)),
									(this._element = e),
									(this._dialog = e.querySelector('.modal-dialog')),
									(this._backdrop = null),
									(this._isShown = false),
									(this._isBodyOverflowing = false),
									(this._ignoreBackdropClick = false),
									(this._isTransitioning = false),
									(this._scrollbarWidth = 0);
							}
							var n = e.prototype;
							return (
								(n.toggle = function (e) {
									return this._isShown ? this.hide() : this.show(e);
								}),
								(n.show = function (e) {
									var n = this;
									if (!this._isShown && !this._isTransitioning) {
										t(this._element).hasClass(Te) &&
											(this._isTransitioning = true);
										var r = t.Event(xe.SHOW, { relatedTarget: e });
										t(this._element).trigger(r),
											this._isShown ||
												r.isDefaultPrevented() ||
												((this._isShown = true),
												this._checkScrollbar(),
												this._setScrollbar(),
												this._adjustDialog(),
												this._setEscapeEvent(),
												this._setResizeEvent(),
												t(this._element).on(
													xe.CLICK_DISMISS,
													'[data-dismiss="modal"]',
													function (e) {
														return n.hide(e);
													}
												),
												t(this._dialog).on(xe.MOUSEDOWN_DISMISS, function () {
													t(n._element).one(xe.MOUSEUP_DISMISS, function (e) {
														t(e.target).is(n._element) &&
															(n._ignoreBackdropClick = true);
													});
												}),
												this._showBackdrop(function () {
													return n._showElement(e);
												}));
									}
								}),
								(n.hide = function (e) {
									var n = this;
									if (
										(e && e.preventDefault(),
										this._isShown && !this._isTransitioning)
									) {
										var r = t.Event(xe.HIDE);
										if (
											(t(this._element).trigger(r),
											this._isShown && !r.isDefaultPrevented())
										) {
											this._isShown = false;
											var i = t(this._element).hasClass(Te);
											if (
												(i && (this._isTransitioning = true),
												this._setEscapeEvent(),
												this._setResizeEvent(),
												t(document).off(xe.FOCUSIN),
												t(this._element).removeClass(Ee),
												t(this._element).off(xe.CLICK_DISMISS),
												t(this._dialog).off(xe.MOUSEDOWN_DISMISS),
												i)
											) {
												var o = c.getTransitionDurationFromElement(
													this._element
												);
												t(this._element)
													.one(c.TRANSITION_END, function (e) {
														return n._hideModal(e);
													})
													.emulateTransitionEnd(o);
											} else this._hideModal();
										}
									}
								}),
								(n.dispose = function () {
									[window, this._element, this._dialog].forEach(function (e) {
										return t(e).off(be);
									}),
										t(document).off(xe.FOCUSIN),
										t.removeData(this._element, ve),
										(this._config = null),
										(this._element = null),
										(this._dialog = null),
										(this._backdrop = null),
										(this._isShown = null),
										(this._isBodyOverflowing = null),
										(this._ignoreBackdropClick = null),
										(this._isTransitioning = null),
										(this._scrollbarWidth = null);
								}),
								(n.handleUpdate = function () {
									this._adjustDialog();
								}),
								(n._getConfig = function (e) {
									return (
										(e = a({}, we, {}, e)), c.typeCheckConfig(ge, e, _e), e
									);
								}),
								(n._triggerBackdropTransition = function () {
									var e = this;
									if ('static' === this._config.backdrop) {
										var n = t.Event(xe.HIDE_PREVENTED);
										if ((t(this._element).trigger(n), n.defaultPrevented))
											return;
										this._element.classList.add(ke);
										var r = c.getTransitionDurationFromElement(this._element);
										t(this._element)
											.one(c.TRANSITION_END, function () {
												e._element.classList.remove(ke);
											})
											.emulateTransitionEnd(r),
											this._element.focus();
									} else this.hide();
								}),
								(n._showElement = function (e) {
									var n = this,
										r = t(this._element).hasClass(Te),
										i = this._dialog
											? this._dialog.querySelector('.modal-body')
											: null;
									function o() {
										n._config.focus && n._element.focus(),
											(n._isTransitioning = false),
											t(n._element).trigger(a);
									}
									(this._element.parentNode &&
										this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
										document.body.appendChild(this._element),
										(this._element.style.display = 'block'),
										this._element.removeAttribute('aria-hidden'),
										this._element.setAttribute('aria-modal', true),
										t(this._dialog).hasClass('modal-dialog-scrollable') && i
											? (i.scrollTop = 0)
											: (this._element.scrollTop = 0),
										r && c.reflow(this._element),
										t(this._element).addClass(Ee),
										this._config.focus && this._enforceFocus();
									var a = t.Event(xe.SHOWN, { relatedTarget: e });
									if (r) {
										var s = c.getTransitionDurationFromElement(this._dialog);
										t(this._dialog)
											.one(c.TRANSITION_END, o)
											.emulateTransitionEnd(s);
									} else o();
								}),
								(n._enforceFocus = function () {
									var e = this;
									t(document)
										.off(xe.FOCUSIN)
										.on(xe.FOCUSIN, function (n) {
											document !== n.target &&
												e._element !== n.target &&
												0 === t(e._element).has(n.target).length &&
												e._element.focus();
										});
								}),
								(n._setEscapeEvent = function () {
									var e = this;
									this._isShown && this._config.keyboard
										? t(this._element).on(xe.KEYDOWN_DISMISS, function (t) {
												27 === t.which && e._triggerBackdropTransition();
										  })
										: this._isShown || t(this._element).off(xe.KEYDOWN_DISMISS);
								}),
								(n._setResizeEvent = function () {
									var e = this;
									this._isShown
										? t(window).on(xe.RESIZE, function (t) {
												return e.handleUpdate(t);
										  })
										: t(window).off(xe.RESIZE);
								}),
								(n._hideModal = function () {
									var e = this;
									(this._element.style.display = 'none'),
										this._element.setAttribute('aria-hidden', true),
										this._element.removeAttribute('aria-modal'),
										(this._isTransitioning = false),
										this._showBackdrop(function () {
											t(document.body).removeClass(Ce),
												e._resetAdjustments(),
												e._resetScrollbar(),
												t(e._element).trigger(xe.HIDDEN);
										});
								}),
								(n._removeBackdrop = function () {
									this._backdrop &&
										(t(this._backdrop).remove(), (this._backdrop = null));
								}),
								(n._showBackdrop = function (e) {
									var n = this,
										r = t(this._element).hasClass(Te) ? Te : '';
									if (this._isShown && this._config.backdrop) {
										if (
											((this._backdrop = document.createElement('div')),
											(this._backdrop.className = 'modal-backdrop'),
											r && this._backdrop.classList.add(r),
											t(this._backdrop).appendTo(document.body),
											t(this._element).on(xe.CLICK_DISMISS, function (e) {
												n._ignoreBackdropClick
													? (n._ignoreBackdropClick = false)
													: e.target === e.currentTarget &&
													  n._triggerBackdropTransition();
											}),
											r && c.reflow(this._backdrop),
											t(this._backdrop).addClass(Ee),
											!e)
										)
											return;
										if (!r) return void e();
										var i = c.getTransitionDurationFromElement(this._backdrop);
										t(this._backdrop)
											.one(c.TRANSITION_END, e)
											.emulateTransitionEnd(i);
									} else if (!this._isShown && this._backdrop) {
										t(this._backdrop).removeClass(Ee);
										var o = function () {
											n._removeBackdrop(), e && e();
										};
										if (t(this._element).hasClass(Te)) {
											var a = c.getTransitionDurationFromElement(
												this._backdrop
											);
											t(this._backdrop)
												.one(c.TRANSITION_END, o)
												.emulateTransitionEnd(a);
										} else o();
									} else e && e();
								}),
								(n._adjustDialog = function () {
									var e =
										this._element.scrollHeight >
										document.documentElement.clientHeight;
									!this._isBodyOverflowing &&
										e &&
										(this._element.style.paddingLeft =
											this._scrollbarWidth + 'px'),
										this._isBodyOverflowing &&
											!e &&
											(this._element.style.paddingRight =
												this._scrollbarWidth + 'px');
								}),
								(n._resetAdjustments = function () {
									(this._element.style.paddingLeft = ''),
										(this._element.style.paddingRight = '');
								}),
								(n._checkScrollbar = function () {
									var e = document.body.getBoundingClientRect();
									(this._isBodyOverflowing =
										e.left + e.right < window.innerWidth),
										(this._scrollbarWidth = this._getScrollbarWidth());
								}),
								(n._setScrollbar = function () {
									var e = this;
									if (this._isBodyOverflowing) {
										var n = [].slice.call(document.querySelectorAll(Se)),
											r = [].slice.call(document.querySelectorAll(je));
										t(n).each(function (n, r) {
											var i = r.style.paddingRight,
												o = t(r).css('padding-right');
											t(r)
												.data('padding-right', i)
												.css(
													'padding-right',
													parseFloat(o) + e._scrollbarWidth + 'px'
												);
										}),
											t(r).each(function (n, r) {
												var i = r.style.marginRight,
													o = t(r).css('margin-right');
												t(r)
													.data('margin-right', i)
													.css(
														'margin-right',
														parseFloat(o) - e._scrollbarWidth + 'px'
													);
											});
										var i = document.body.style.paddingRight,
											o = t(document.body).css('padding-right');
										t(document.body)
											.data('padding-right', i)
											.css(
												'padding-right',
												parseFloat(o) + this._scrollbarWidth + 'px'
											);
									}
									t(document.body).addClass(Ce);
								}),
								(n._resetScrollbar = function () {
									var e = [].slice.call(document.querySelectorAll(Se));
									t(e).each(function (e, n) {
										var r = t(n).data('padding-right');
										t(n).removeData('padding-right'),
											(n.style.paddingRight = r || '');
									});
									var n = [].slice.call(document.querySelectorAll('' + je));
									t(n).each(function (e, n) {
										var r = t(n).data('margin-right');
										void 0 !== r &&
											t(n).css('margin-right', r).removeData('margin-right');
									});
									var r = t(document.body).data('padding-right');
									t(document.body).removeData('padding-right'),
										(document.body.style.paddingRight = r || '');
								}),
								(n._getScrollbarWidth = function () {
									var e = document.createElement('div');
									(e.className = 'modal-scrollbar-measure'),
										document.body.appendChild(e);
									var t = e.getBoundingClientRect().width - e.clientWidth;
									return document.body.removeChild(e), t;
								}),
								(e._jQueryInterface = function (n, r) {
									return this.each(function () {
										var i = t(this).data(ve),
											o = a(
												{},
												we,
												{},
												t(this).data(),
												{},
												'object' == s(n) && n ? n : {}
											);
										if (
											(i || ((i = new e(this, o)), t(this).data(ve, i)),
											'string' == typeof n)
										) {
											if (void 0 === i[n])
												throw new TypeError('No method named "' + n + '"');
											i[n](r);
										} else o.show && i.show(r);
									});
								}),
								i(e, null, [
									{
										key: 'VERSION',
										get: function () {
											return '4.4.1';
										},
									},
									{
										key: 'Default',
										get: function () {
											return we;
										},
									},
								]),
								e
							);
						})();
					t(document).on(
						xe.CLICK_DATA_API,
						'[data-toggle="modal"]',
						function (e) {
							var n,
								r = this,
								i = c.getSelectorFromElement(this);
							i && (n = document.querySelector(i));
							var o = t(n).data(ve)
								? 'toggle'
								: a({}, t(n).data(), {}, t(this).data());
							('A' !== this.tagName && 'AREA' !== this.tagName) ||
								e.preventDefault();
							var s = t(n).one(xe.SHOW, function (e) {
								e.isDefaultPrevented() ||
									s.one(xe.HIDDEN, function () {
										t(r).is(':visible') && r.focus();
									});
							});
							De._jQueryInterface.call(t(n), o, this);
						}
					),
						(t.fn[ge] = De._jQueryInterface),
						(t.fn[ge].Constructor = De),
						(t.fn[ge].noConflict = function () {
							return (t.fn[ge] = ye), De._jQueryInterface;
						});
					var Ae = [
							'background',
							'cite',
							'href',
							'itemtype',
							'longdesc',
							'poster',
							'src',
							'xlink:href',
						],
						Oe = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
						$e =
							/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
					function Ne(e, t, n) {
						if (0 === e.length) return e;
						if (n && 'function' == typeof n) return n(e);
						for (
							var r = new window.DOMParser().parseFromString(e, 'text/html'),
								i = Object.keys(t),
								o = [].slice.call(r.body.querySelectorAll('*')),
								a = function (e) {
									var n = o[e],
										r = n.nodeName.toLowerCase();
									if (-1 === i.indexOf(n.nodeName.toLowerCase()))
										return n.parentNode.removeChild(n), 'continue';
									var a = [].slice.call(n.attributes),
										s = [].concat(t['*'] || [], t[r] || []);
									a.forEach(function (e) {
										!(function (e, t) {
											var n = e.nodeName.toLowerCase();
											if (-1 !== t.indexOf(n))
												return (
													-1 === Ae.indexOf(n) ||
													Boolean(
														e.nodeValue.match(Oe) || e.nodeValue.match($e)
													)
												);
											for (
												var r = t.filter(function (e) {
														return e instanceof RegExp;
													}),
													i = 0,
													o = r.length;
												i < o;
												i++
											)
												if (n.match(r[i])) return true;
											return false;
										})(e, s) && n.removeAttribute(e.nodeName);
									});
								},
								s = 0,
								l = o.length;
							s < l;
							s++
						)
							a(s);
						return r.body.innerHTML;
					}
					var Ie = 'tooltip',
						Pe = 'bs.tooltip',
						Le = '.' + Pe,
						He = t.fn[Ie],
						Me = 'bs-tooltip',
						Re = new RegExp('(^|\\s)' + Me + '\\S+', 'g'),
						qe = ['sanitize', 'whiteList', 'sanitizeFn'],
						Be = {
							animation: 'boolean',
							template: 'string',
							title: '(string|element|function)',
							trigger: 'string',
							delay: '(number|object)',
							html: 'boolean',
							selector: '(string|boolean)',
							placement: '(string|function)',
							offset: '(number|string|function)',
							container: '(string|element|boolean)',
							fallbackPlacement: '(string|array)',
							boundary: '(string|element)',
							sanitize: 'boolean',
							sanitizeFn: '(null|function)',
							whiteList: 'object',
							popperConfig: '(null|object)',
						},
						Fe = {
							AUTO: 'auto',
							TOP: 'top',
							RIGHT: 'right',
							BOTTOM: 'bottom',
							LEFT: 'left',
						},
						We = {
							animation: true,
							template:
								'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
							trigger: 'hover focus',
							title: '',
							delay: 0,
							html: false,
							selector: false,
							placement: 'top',
							offset: 0,
							container: false,
							fallbackPlacement: 'flip',
							boundary: 'scrollParent',
							sanitize: true,
							sanitizeFn: null,
							whiteList: {
								'*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
								a: ['target', 'href', 'title', 'rel'],
								area: [],
								b: [],
								br: [],
								col: [],
								code: [],
								div: [],
								em: [],
								hr: [],
								h1: [],
								h2: [],
								h3: [],
								h4: [],
								h5: [],
								h6: [],
								i: [],
								img: ['src', 'alt', 'title', 'width', 'height'],
								li: [],
								ol: [],
								p: [],
								pre: [],
								s: [],
								small: [],
								span: [],
								sub: [],
								sup: [],
								strong: [],
								u: [],
								ul: [],
							},
							popperConfig: null,
						},
						Ue = 'show',
						ze = 'out',
						Ve = {
							HIDE: 'hide' + Le,
							HIDDEN: 'hidden' + Le,
							SHOW: 'show' + Le,
							SHOWN: 'shown' + Le,
							INSERTED: 'inserted' + Le,
							CLICK: 'click' + Le,
							FOCUSIN: 'focusin' + Le,
							FOCUSOUT: 'focusout' + Le,
							MOUSEENTER: 'mouseenter' + Le,
							MOUSELEAVE: 'mouseleave' + Le,
						},
						Qe = 'fade',
						Ke = 'show',
						Ye = 'hover',
						Xe = 'focus',
						Je = (function () {
							function e(e, t) {
								if (void 0 === n)
									throw new TypeError(
										"Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
									);
								(this._isEnabled = true),
									(this._timeout = 0),
									(this._hoverState = ''),
									(this._activeTrigger = {}),
									(this._popper = null),
									(this.element = e),
									(this.config = this._getConfig(t)),
									(this.tip = null),
									this._setListeners();
							}
							var r = e.prototype;
							return (
								(r.enable = function () {
									this._isEnabled = true;
								}),
								(r.disable = function () {
									this._isEnabled = false;
								}),
								(r.toggleEnabled = function () {
									this._isEnabled = !this._isEnabled;
								}),
								(r.toggle = function (e) {
									if (this._isEnabled)
										if (e) {
											var n = this.constructor.DATA_KEY,
												r = t(e.currentTarget).data(n);
											r ||
												((r = new this.constructor(
													e.currentTarget,
													this._getDelegateConfig()
												)),
												t(e.currentTarget).data(n, r)),
												(r._activeTrigger.click = !r._activeTrigger.click),
												r._isWithActiveTrigger()
													? r._enter(null, r)
													: r._leave(null, r);
										} else {
											if (t(this.getTipElement()).hasClass(Ke))
												return void this._leave(null, this);
											this._enter(null, this);
										}
								}),
								(r.dispose = function () {
									clearTimeout(this._timeout),
										t.removeData(this.element, this.constructor.DATA_KEY),
										t(this.element).off(this.constructor.EVENT_KEY),
										t(this.element)
											.closest('.modal')
											.off('hide.bs.modal', this._hideModalHandler),
										this.tip && t(this.tip).remove(),
										(this._isEnabled = null),
										(this._timeout = null),
										(this._hoverState = null),
										(this._activeTrigger = null),
										this._popper && this._popper.destroy(),
										(this._popper = null),
										(this.element = null),
										(this.config = null),
										(this.tip = null);
								}),
								(r.show = function () {
									var e = this;
									if ('none' === t(this.element).css('display'))
										throw new Error('Please use show on visible elements');
									var r = t.Event(this.constructor.Event.SHOW);
									if (this.isWithContent() && this._isEnabled) {
										t(this.element).trigger(r);
										var i = c.findShadowRoot(this.element),
											o = t.contains(
												null !== i
													? i
													: this.element.ownerDocument.documentElement,
												this.element
											);
										if (r.isDefaultPrevented() || !o) return;
										var a = this.getTipElement(),
											s = c.getUID(this.constructor.NAME);
										a.setAttribute('id', s),
											this.element.setAttribute('aria-describedby', s),
											this.setContent(),
											this.config.animation && t(a).addClass(Qe);
										var l =
												'function' == typeof this.config.placement
													? this.config.placement.call(this, a, this.element)
													: this.config.placement,
											u = this._getAttachment(l);
										this.addAttachmentClass(u);
										var f = this._getContainer();
										t(a).data(this.constructor.DATA_KEY, this),
											t.contains(
												this.element.ownerDocument.documentElement,
												this.tip
											) || t(a).appendTo(f),
											t(this.element).trigger(this.constructor.Event.INSERTED),
											(this._popper = new n(
												this.element,
												a,
												this._getPopperConfig(u)
											)),
											t(a).addClass(Ke),
											'ontouchstart' in document.documentElement &&
												t(document.body)
													.children()
													.on('mouseover', null, t.noop);
										var d = function () {
											e.config.animation && e._fixTransition();
											var n = e._hoverState;
											(e._hoverState = null),
												t(e.element).trigger(e.constructor.Event.SHOWN),
												n === ze && e._leave(null, e);
										};
										if (t(this.tip).hasClass(Qe)) {
											var p = c.getTransitionDurationFromElement(this.tip);
											t(this.tip)
												.one(c.TRANSITION_END, d)
												.emulateTransitionEnd(p);
										} else d();
									}
								}),
								(r.hide = function (e) {
									function n() {
										r._hoverState !== Ue &&
											i.parentNode &&
											i.parentNode.removeChild(i),
											r._cleanTipClass(),
											r.element.removeAttribute('aria-describedby'),
											t(r.element).trigger(r.constructor.Event.HIDDEN),
											null !== r._popper && r._popper.destroy(),
											e && e();
									}
									var r = this,
										i = this.getTipElement(),
										o = t.Event(this.constructor.Event.HIDE);
									if ((t(this.element).trigger(o), !o.isDefaultPrevented())) {
										if (
											(t(i).removeClass(Ke),
											'ontouchstart' in document.documentElement &&
												t(document.body)
													.children()
													.off('mouseover', null, t.noop),
											(this._activeTrigger.click = false),
											(this._activeTrigger[Xe] = false),
											(this._activeTrigger[Ye] = false),
											t(this.tip).hasClass(Qe))
										) {
											var a = c.getTransitionDurationFromElement(i);
											t(i).one(c.TRANSITION_END, n).emulateTransitionEnd(a);
										} else n();
										this._hoverState = '';
									}
								}),
								(r.update = function () {
									null !== this._popper && this._popper.scheduleUpdate();
								}),
								(r.isWithContent = function () {
									return Boolean(this.getTitle());
								}),
								(r.addAttachmentClass = function (e) {
									t(this.getTipElement()).addClass(Me + '-' + e);
								}),
								(r.getTipElement = function () {
									return (
										(this.tip = this.tip || t(this.config.template)[0]),
										this.tip
									);
								}),
								(r.setContent = function () {
									var e = this.getTipElement();
									this.setElementContent(
										t(e.querySelectorAll('.tooltip-inner')),
										this.getTitle()
									),
										t(e).removeClass(Qe + ' ' + Ke);
								}),
								(r.setElementContent = function (e, n) {
									'object' != s(n) || (!n.nodeType && !n.jquery)
										? this.config.html
											? (this.config.sanitize &&
													(n = Ne(
														n,
														this.config.whiteList,
														this.config.sanitizeFn
													)),
											  e.html(n))
											: e.text(n)
										: this.config.html
										? t(n).parent().is(e) || e.empty().append(n)
										: e.text(t(n).text());
								}),
								(r.getTitle = function () {
									var e = this.element.getAttribute('data-original-title');
									return (
										e ||
										('function' == typeof this.config.title
											? this.config.title.call(this.element)
											: this.config.title)
									);
								}),
								(r._getPopperConfig = function (e) {
									var t = this;
									return a(
										{},
										{
											placement: e,
											modifiers: {
												offset: this._getOffset(),
												flip: { behavior: this.config.fallbackPlacement },
												arrow: { element: '.arrow' },
												preventOverflow: {
													boundariesElement: this.config.boundary,
												},
											},
											onCreate: function (e) {
												e.originalPlacement !== e.placement &&
													t._handlePopperPlacementChange(e);
											},
											onUpdate: function (e) {
												return t._handlePopperPlacementChange(e);
											},
										},
										{},
										this.config.popperConfig
									);
								}),
								(r._getOffset = function () {
									var e = this,
										t = {};
									return (
										'function' == typeof this.config.offset
											? (t.fn = function (t) {
													return (
														(t.offsets = a(
															{},
															t.offsets,
															{},
															e.config.offset(t.offsets, e.element) || {}
														)),
														t
													);
											  })
											: (t.offset = this.config.offset),
										t
									);
								}),
								(r._getContainer = function () {
									return false === this.config.container
										? document.body
										: c.isElement(this.config.container)
										? t(this.config.container)
										: t(document).find(this.config.container);
								}),
								(r._getAttachment = function (e) {
									return Fe[e.toUpperCase()];
								}),
								(r._setListeners = function () {
									var e = this;
									this.config.trigger.split(' ').forEach(function (n) {
										if ('click' === n)
											t(e.element).on(
												e.constructor.Event.CLICK,
												e.config.selector,
												function (t) {
													return e.toggle(t);
												}
											);
										else if ('manual' !== n) {
											var r =
													n === Ye
														? e.constructor.Event.MOUSEENTER
														: e.constructor.Event.FOCUSIN,
												i =
													n === Ye
														? e.constructor.Event.MOUSELEAVE
														: e.constructor.Event.FOCUSOUT;
											t(e.element)
												.on(r, e.config.selector, function (t) {
													return e._enter(t);
												})
												.on(i, e.config.selector, function (t) {
													return e._leave(t);
												});
										}
									}),
										(this._hideModalHandler = function () {
											e.element && e.hide();
										}),
										t(this.element)
											.closest('.modal')
											.on('hide.bs.modal', this._hideModalHandler),
										this.config.selector
											? (this.config = a({}, this.config, {
													trigger: 'manual',
													selector: '',
											  }))
											: this._fixTitle();
								}),
								(r._fixTitle = function () {
									var e = s(this.element.getAttribute('data-original-title'));
									(!this.element.getAttribute('title') && 'string' == e) ||
										(this.element.setAttribute(
											'data-original-title',
											this.element.getAttribute('title') || ''
										),
										this.element.setAttribute('title', ''));
								}),
								(r._enter = function (e, n) {
									var r = this.constructor.DATA_KEY;
									(n = n || t(e.currentTarget).data(r)) ||
										((n = new this.constructor(
											e.currentTarget,
											this._getDelegateConfig()
										)),
										t(e.currentTarget).data(r, n)),
										e &&
											(n._activeTrigger['focusin' === e.type ? Xe : Ye] = true),
										t(n.getTipElement()).hasClass(Ke) || n._hoverState === Ue
											? (n._hoverState = Ue)
											: (clearTimeout(n._timeout),
											  (n._hoverState = Ue),
											  n.config.delay && n.config.delay.show
													? (n._timeout = setTimeout(function () {
															n._hoverState === Ue && n.show();
													  }, n.config.delay.show))
													: n.show());
								}),
								(r._leave = function (e, n) {
									var r = this.constructor.DATA_KEY;
									(n = n || t(e.currentTarget).data(r)) ||
										((n = new this.constructor(
											e.currentTarget,
											this._getDelegateConfig()
										)),
										t(e.currentTarget).data(r, n)),
										e &&
											(n._activeTrigger[
												'focusout' === e.type ? Xe : Ye
											] = false),
										n._isWithActiveTrigger() ||
											(clearTimeout(n._timeout),
											(n._hoverState = ze),
											n.config.delay && n.config.delay.hide
												? (n._timeout = setTimeout(function () {
														n._hoverState === ze && n.hide();
												  }, n.config.delay.hide))
												: n.hide());
								}),
								(r._isWithActiveTrigger = function () {
									for (var e in this._activeTrigger)
										if (this._activeTrigger[e]) return true;
									return false;
								}),
								(r._getConfig = function (e) {
									var n = t(this.element).data();
									return (
										Object.keys(n).forEach(function (e) {
											-1 !== qe.indexOf(e) && delete n[e];
										}),
										'number' ==
											typeof (e = a(
												{},
												this.constructor.Default,
												{},
												n,
												{},
												'object' == s(e) && e ? e : {}
											)).delay && (e.delay = { show: e.delay, hide: e.delay }),
										'number' == typeof e.title &&
											(e.title = e.title.toString()),
										'number' == typeof e.content &&
											(e.content = e.content.toString()),
										c.typeCheckConfig(Ie, e, this.constructor.DefaultType),
										e.sanitize &&
											(e.template = Ne(e.template, e.whiteList, e.sanitizeFn)),
										e
									);
								}),
								(r._getDelegateConfig = function () {
									var e = {};
									if (this.config)
										for (var t in this.config)
											this.constructor.Default[t] !== this.config[t] &&
												(e[t] = this.config[t]);
									return e;
								}),
								(r._cleanTipClass = function () {
									var e = t(this.getTipElement()),
										n = e.attr('class').match(Re);
									null !== n && n.length && e.removeClass(n.join(''));
								}),
								(r._handlePopperPlacementChange = function (e) {
									var t = e.instance;
									(this.tip = t.popper),
										this._cleanTipClass(),
										this.addAttachmentClass(this._getAttachment(e.placement));
								}),
								(r._fixTransition = function () {
									var e = this.getTipElement(),
										n = this.config.animation;
									null === e.getAttribute('x-placement') &&
										(t(e).removeClass(Qe),
										(this.config.animation = false),
										this.hide(),
										this.show(),
										(this.config.animation = n));
								}),
								(e._jQueryInterface = function (n) {
									return this.each(function () {
										var r = t(this).data(Pe),
											i = 'object' == s(n) && n;
										if (
											(r || !/dispose|hide/.test(n)) &&
											(r || ((r = new e(this, i)), t(this).data(Pe, r)),
											'string' == typeof n)
										) {
											if (void 0 === r[n])
												throw new TypeError('No method named "' + n + '"');
											r[n]();
										}
									});
								}),
								i(e, null, [
									{
										key: 'VERSION',
										get: function () {
											return '4.4.1';
										},
									},
									{
										key: 'Default',
										get: function () {
											return We;
										},
									},
									{
										key: 'NAME',
										get: function () {
											return Ie;
										},
									},
									{
										key: 'DATA_KEY',
										get: function () {
											return Pe;
										},
									},
									{
										key: 'Event',
										get: function () {
											return Ve;
										},
									},
									{
										key: 'EVENT_KEY',
										get: function () {
											return Le;
										},
									},
									{
										key: 'DefaultType',
										get: function () {
											return Be;
										},
									},
								]),
								e
							);
						})();
					(t.fn[Ie] = Je._jQueryInterface),
						(t.fn[Ie].Constructor = Je),
						(t.fn[Ie].noConflict = function () {
							return (t.fn[Ie] = He), Je._jQueryInterface;
						});
					var Ge = 'popover',
						Ze = 'bs.popover',
						et = '.' + Ze,
						tt = t.fn[Ge],
						nt = 'bs-popover',
						rt = new RegExp('(^|\\s)' + nt + '\\S+', 'g'),
						it = a({}, Je.Default, {
							placement: 'right',
							trigger: 'click',
							content: '',
							template:
								'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
						}),
						ot = a({}, Je.DefaultType, {
							content: '(string|element|function)',
						}),
						at = {
							HIDE: 'hide' + et,
							HIDDEN: 'hidden' + et,
							SHOW: 'show' + et,
							SHOWN: 'shown' + et,
							INSERTED: 'inserted' + et,
							CLICK: 'click' + et,
							FOCUSIN: 'focusin' + et,
							FOCUSOUT: 'focusout' + et,
							MOUSEENTER: 'mouseenter' + et,
							MOUSELEAVE: 'mouseleave' + et,
						},
						st = (function (e) {
							function n() {
								return e.apply(this, arguments) || this;
							}
							!(function (e, t) {
								(e.prototype = Object.create(t.prototype)),
									((e.prototype.constructor = e).__proto__ = t);
							})(n, e);
							var r = n.prototype;
							return (
								(r.isWithContent = function () {
									return this.getTitle() || this._getContent();
								}),
								(r.addAttachmentClass = function (e) {
									t(this.getTipElement()).addClass(nt + '-' + e);
								}),
								(r.getTipElement = function () {
									return (
										(this.tip = this.tip || t(this.config.template)[0]),
										this.tip
									);
								}),
								(r.setContent = function () {
									var e = t(this.getTipElement());
									this.setElementContent(
										e.find('.popover-header'),
										this.getTitle()
									);
									var n = this._getContent();
									'function' == typeof n && (n = n.call(this.element)),
										this.setElementContent(e.find('.popover-body'), n),
										e.removeClass('fade show');
								}),
								(r._getContent = function () {
									return (
										this.element.getAttribute('data-content') ||
										this.config.content
									);
								}),
								(r._cleanTipClass = function () {
									var e = t(this.getTipElement()),
										n = e.attr('class').match(rt);
									null !== n && 0 < n.length && e.removeClass(n.join(''));
								}),
								(n._jQueryInterface = function (e) {
									return this.each(function () {
										var r = t(this).data(Ze),
											i = 'object' == s(e) ? e : null;
										if (
											(r || !/dispose|hide/.test(e)) &&
											(r || ((r = new n(this, i)), t(this).data(Ze, r)),
											'string' == typeof e)
										) {
											if (void 0 === r[e])
												throw new TypeError('No method named "' + e + '"');
											r[e]();
										}
									});
								}),
								i(n, null, [
									{
										key: 'VERSION',
										get: function () {
											return '4.4.1';
										},
									},
									{
										key: 'Default',
										get: function () {
											return it;
										},
									},
									{
										key: 'NAME',
										get: function () {
											return Ge;
										},
									},
									{
										key: 'DATA_KEY',
										get: function () {
											return Ze;
										},
									},
									{
										key: 'Event',
										get: function () {
											return at;
										},
									},
									{
										key: 'EVENT_KEY',
										get: function () {
											return et;
										},
									},
									{
										key: 'DefaultType',
										get: function () {
											return ot;
										},
									},
								]),
								n
							);
						})(Je);
					(t.fn[Ge] = st._jQueryInterface),
						(t.fn[Ge].Constructor = st),
						(t.fn[Ge].noConflict = function () {
							return (t.fn[Ge] = tt), st._jQueryInterface;
						});
					var lt = 'scrollspy',
						ct = 'bs.scrollspy',
						ut = '.' + ct,
						ft = t.fn[lt],
						dt = { offset: 10, method: 'auto', target: '' },
						pt = {
							offset: 'number',
							method: 'string',
							target: '(string|element)',
						},
						ht = {
							ACTIVATE: 'activate' + ut,
							SCROLL: 'scroll' + ut,
							LOAD_DATA_API: 'load' + ut + '.data-api',
						},
						mt = 'active',
						gt = '.nav, .list-group',
						vt = '.nav-link',
						bt = '.list-group-item',
						yt = 'position',
						wt = (function () {
							function e(e, n) {
								var r = this;
								(this._element = e),
									(this._scrollElement = 'BODY' === e.tagName ? window : e),
									(this._config = this._getConfig(n)),
									(this._selector =
										this._config.target +
										' ' +
										vt +
										',' +
										this._config.target +
										' ' +
										bt +
										',' +
										this._config.target +
										' .dropdown-item'),
									(this._offsets = []),
									(this._targets = []),
									(this._activeTarget = null),
									(this._scrollHeight = 0),
									t(this._scrollElement).on(ht.SCROLL, function (e) {
										return r._process(e);
									}),
									this.refresh(),
									this._process();
							}
							var n = e.prototype;
							return (
								(n.refresh = function () {
									var e = this,
										n =
											this._scrollElement === this._scrollElement.window
												? 'offset'
												: yt,
										r =
											'auto' === this._config.method ? n : this._config.method,
										i = r === yt ? this._getScrollTop() : 0;
									(this._offsets = []),
										(this._targets = []),
										(this._scrollHeight = this._getScrollHeight()),
										[].slice
											.call(document.querySelectorAll(this._selector))
											.map(function (e) {
												var n,
													o = c.getSelectorFromElement(e);
												if ((o && (n = document.querySelector(o)), n)) {
													var a = n.getBoundingClientRect();
													if (a.width || a.height)
														return [t(n)[r]().top + i, o];
												}
												return null;
											})
											.filter(function (e) {
												return e;
											})
											.sort(function (e, t) {
												return e[0] - t[0];
											})
											.forEach(function (t) {
												e._offsets.push(t[0]), e._targets.push(t[1]);
											});
								}),
								(n.dispose = function () {
									t.removeData(this._element, ct),
										t(this._scrollElement).off(ut),
										(this._element = null),
										(this._scrollElement = null),
										(this._config = null),
										(this._selector = null),
										(this._offsets = null),
										(this._targets = null),
										(this._activeTarget = null),
										(this._scrollHeight = null);
								}),
								(n._getConfig = function (e) {
									if (
										'string' !=
										typeof (e = a({}, dt, {}, 'object' == s(e) && e ? e : {}))
											.target
									) {
										var n = t(e.target).attr('id');
										n || ((n = c.getUID(lt)), t(e.target).attr('id', n)),
											(e.target = '#' + n);
									}
									return c.typeCheckConfig(lt, e, pt), e;
								}),
								(n._getScrollTop = function () {
									return this._scrollElement === window
										? this._scrollElement.pageYOffset
										: this._scrollElement.scrollTop;
								}),
								(n._getScrollHeight = function () {
									return (
										this._scrollElement.scrollHeight ||
										Math.max(
											document.body.scrollHeight,
											document.documentElement.scrollHeight
										)
									);
								}),
								(n._getOffsetHeight = function () {
									return this._scrollElement === window
										? window.innerHeight
										: this._scrollElement.getBoundingClientRect().height;
								}),
								(n._process = function () {
									var e = this._getScrollTop() + this._config.offset,
										t = this._getScrollHeight(),
										n = this._config.offset + t - this._getOffsetHeight();
									if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
										var r = this._targets[this._targets.length - 1];
										this._activeTarget !== r && this._activate(r);
									} else {
										if (
											this._activeTarget &&
											e < this._offsets[0] &&
											0 < this._offsets[0]
										)
											return (this._activeTarget = null), void this._clear();
										for (var i = this._offsets.length; i--; )
											this._activeTarget !== this._targets[i] &&
												e >= this._offsets[i] &&
												(void 0 === this._offsets[i + 1] ||
													e < this._offsets[i + 1]) &&
												this._activate(this._targets[i]);
									}
								}),
								(n._activate = function (e) {
									(this._activeTarget = e), this._clear();
									var n = this._selector.split(',').map(function (t) {
											return (
												t +
												'[data-target="' +
												e +
												'"],' +
												t +
												'[href="' +
												e +
												'"]'
											);
										}),
										r = t(
											[].slice.call(document.querySelectorAll(n.join(',')))
										);
									r.hasClass('dropdown-item')
										? (r
												.closest('.dropdown')
												.find('.dropdown-toggle')
												.addClass(mt),
										  r.addClass(mt))
										: (r.addClass(mt),
										  r
												.parents(gt)
												.prev(vt + ', ' + bt)
												.addClass(mt),
										  r
												.parents(gt)
												.prev('.nav-item')
												.children(vt)
												.addClass(mt)),
										t(this._scrollElement).trigger(ht.ACTIVATE, {
											relatedTarget: e,
										});
								}),
								(n._clear = function () {
									[].slice
										.call(document.querySelectorAll(this._selector))
										.filter(function (e) {
											return e.classList.contains(mt);
										})
										.forEach(function (e) {
											return e.classList.remove(mt);
										});
								}),
								(e._jQueryInterface = function (n) {
									return this.each(function () {
										var r = t(this).data(ct);
										if (
											(r ||
												((r = new e(this, 'object' == s(n) && n)),
												t(this).data(ct, r)),
											'string' == typeof n)
										) {
											if (void 0 === r[n])
												throw new TypeError('No method named "' + n + '"');
											r[n]();
										}
									});
								}),
								i(e, null, [
									{
										key: 'VERSION',
										get: function () {
											return '4.4.1';
										},
									},
									{
										key: 'Default',
										get: function () {
											return dt;
										},
									},
								]),
								e
							);
						})();
					t(window).on(ht.LOAD_DATA_API, function () {
						for (
							var e = [].slice.call(
									document.querySelectorAll('[data-spy="scroll"]')
								),
								n = e.length;
							n--;

						) {
							var r = t(e[n]);
							wt._jQueryInterface.call(r, r.data());
						}
					}),
						(t.fn[lt] = wt._jQueryInterface),
						(t.fn[lt].Constructor = wt),
						(t.fn[lt].noConflict = function () {
							return (t.fn[lt] = ft), wt._jQueryInterface;
						});
					var _t = 'bs.tab',
						xt = '.' + _t,
						Ct = t.fn.tab,
						Tt = {
							HIDE: 'hide' + xt,
							HIDDEN: 'hidden' + xt,
							SHOW: 'show' + xt,
							SHOWN: 'shown' + xt,
							CLICK_DATA_API: 'click' + xt + '.data-api',
						},
						Et = 'active',
						kt = 'fade',
						St = 'show',
						jt = '.active',
						Dt = '> li > .active',
						At = (function () {
							function e(e) {
								this._element = e;
							}
							var n = e.prototype;
							return (
								(n.show = function () {
									var e = this;
									if (
										!(
											(this._element.parentNode &&
												this._element.parentNode.nodeType ===
													Node.ELEMENT_NODE &&
												t(this._element).hasClass(Et)) ||
											t(this._element).hasClass('disabled')
										)
									) {
										var n,
											r,
											i = t(this._element).closest('.nav, .list-group')[0],
											o = c.getSelectorFromElement(this._element);
										if (i) {
											var a =
												'UL' === i.nodeName || 'OL' === i.nodeName ? Dt : jt;
											r = (r = t.makeArray(t(i).find(a)))[r.length - 1];
										}
										var s = t.Event(Tt.HIDE, { relatedTarget: this._element }),
											l = t.Event(Tt.SHOW, { relatedTarget: r });
										if (
											(r && t(r).trigger(s),
											t(this._element).trigger(l),
											!l.isDefaultPrevented() && !s.isDefaultPrevented())
										) {
											o && (n = document.querySelector(o)),
												this._activate(this._element, i);
											var u = function () {
												var n = t.Event(Tt.HIDDEN, {
														relatedTarget: e._element,
													}),
													i = t.Event(Tt.SHOWN, { relatedTarget: r });
												t(r).trigger(n), t(e._element).trigger(i);
											};
											n ? this._activate(n, n.parentNode, u) : u();
										}
									}
								}),
								(n.dispose = function () {
									t.removeData(this._element, _t), (this._element = null);
								}),
								(n._activate = function (e, n, r) {
									function i() {
										return o._transitionComplete(e, a, r);
									}
									var o = this,
										a = (
											!n || ('UL' !== n.nodeName && 'OL' !== n.nodeName)
												? t(n).children(jt)
												: t(n).find(Dt)
										)[0],
										s = r && a && t(a).hasClass(kt);
									if (a && s) {
										var l = c.getTransitionDurationFromElement(a);
										t(a)
											.removeClass(St)
											.one(c.TRANSITION_END, i)
											.emulateTransitionEnd(l);
									} else i();
								}),
								(n._transitionComplete = function (e, n, r) {
									if (n) {
										t(n).removeClass(Et);
										var i = t(n.parentNode).find('> .dropdown-menu .active')[0];
										i && t(i).removeClass(Et),
											'tab' === n.getAttribute('role') &&
												n.setAttribute('aria-selected', false);
									}
									if (
										(t(e).addClass(Et),
										'tab' === e.getAttribute('role') &&
											e.setAttribute('aria-selected', true),
										c.reflow(e),
										e.classList.contains(kt) && e.classList.add(St),
										e.parentNode && t(e.parentNode).hasClass('dropdown-menu'))
									) {
										var o = t(e).closest('.dropdown')[0];
										if (o) {
											var a = [].slice.call(
												o.querySelectorAll('.dropdown-toggle')
											);
											t(a).addClass(Et);
										}
										e.setAttribute('aria-expanded', true);
									}
									r && r();
								}),
								(e._jQueryInterface = function (n) {
									return this.each(function () {
										var r = t(this),
											i = r.data(_t);
										if (
											(i || ((i = new e(this)), r.data(_t, i)),
											'string' == typeof n)
										) {
											if (void 0 === i[n])
												throw new TypeError('No method named "' + n + '"');
											i[n]();
										}
									});
								}),
								i(e, null, [
									{
										key: 'VERSION',
										get: function () {
											return '4.4.1';
										},
									},
								]),
								e
							);
						})();
					t(document).on(
						Tt.CLICK_DATA_API,
						'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
						function (e) {
							e.preventDefault(), At._jQueryInterface.call(t(this), 'show');
						}
					),
						(t.fn.tab = At._jQueryInterface),
						(t.fn.tab.Constructor = At),
						(t.fn.tab.noConflict = function () {
							return (t.fn.tab = Ct), At._jQueryInterface;
						});
					var Ot = 'toast',
						$t = 'bs.toast',
						Nt = '.' + $t,
						It = t.fn[Ot],
						Pt = {
							CLICK_DISMISS: 'click.dismiss' + Nt,
							HIDE: 'hide' + Nt,
							HIDDEN: 'hidden' + Nt,
							SHOW: 'show' + Nt,
							SHOWN: 'shown' + Nt,
						},
						Lt = 'hide',
						Ht = 'show',
						Mt = 'showing',
						Rt = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
						qt = { animation: true, autohide: true, delay: 500 },
						Bt = (function () {
							function e(e, t) {
								(this._element = e),
									(this._config = this._getConfig(t)),
									(this._timeout = null),
									this._setListeners();
							}
							var n = e.prototype;
							return (
								(n.show = function () {
									var e = this,
										n = t.Event(Pt.SHOW);
									if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
										this._config.animation &&
											this._element.classList.add('fade');
										var r = function () {
											e._element.classList.remove(Mt),
												e._element.classList.add(Ht),
												t(e._element).trigger(Pt.SHOWN),
												e._config.autohide &&
													(e._timeout = setTimeout(function () {
														e.hide();
													}, e._config.delay));
										};
										if (
											(this._element.classList.remove(Lt),
											c.reflow(this._element),
											this._element.classList.add(Mt),
											this._config.animation)
										) {
											var i = c.getTransitionDurationFromElement(this._element);
											t(this._element)
												.one(c.TRANSITION_END, r)
												.emulateTransitionEnd(i);
										} else r();
									}
								}),
								(n.hide = function () {
									if (this._element.classList.contains(Ht)) {
										var e = t.Event(Pt.HIDE);
										t(this._element).trigger(e),
											e.isDefaultPrevented() || this._close();
									}
								}),
								(n.dispose = function () {
									clearTimeout(this._timeout),
										(this._timeout = null),
										this._element.classList.contains(Ht) &&
											this._element.classList.remove(Ht),
										t(this._element).off(Pt.CLICK_DISMISS),
										t.removeData(this._element, $t),
										(this._element = null),
										(this._config = null);
								}),
								(n._getConfig = function (e) {
									return (
										(e = a(
											{},
											qt,
											{},
											t(this._element).data(),
											{},
											'object' == s(e) && e ? e : {}
										)),
										c.typeCheckConfig(Ot, e, this.constructor.DefaultType),
										e
									);
								}),
								(n._setListeners = function () {
									var e = this;
									t(this._element).on(
										Pt.CLICK_DISMISS,
										'[data-dismiss="toast"]',
										function () {
											return e.hide();
										}
									);
								}),
								(n._close = function () {
									function e() {
										n._element.classList.add(Lt),
											t(n._element).trigger(Pt.HIDDEN);
									}
									var n = this;
									if (
										(this._element.classList.remove(Ht), this._config.animation)
									) {
										var r = c.getTransitionDurationFromElement(this._element);
										t(this._element)
											.one(c.TRANSITION_END, e)
											.emulateTransitionEnd(r);
									} else e();
								}),
								(e._jQueryInterface = function (n) {
									return this.each(function () {
										var r = t(this),
											i = r.data($t);
										if (
											(i ||
												((i = new e(this, 'object' == s(n) && n)),
												r.data($t, i)),
											'string' == typeof n)
										) {
											if (void 0 === i[n])
												throw new TypeError('No method named "' + n + '"');
											i[n](this);
										}
									});
								}),
								i(e, null, [
									{
										key: 'VERSION',
										get: function () {
											return '4.4.1';
										},
									},
									{
										key: 'DefaultType',
										get: function () {
											return Rt;
										},
									},
									{
										key: 'Default',
										get: function () {
											return qt;
										},
									},
								]),
								e
							);
						})();
					(t.fn[Ot] = Bt._jQueryInterface),
						(t.fn[Ot].Constructor = Bt),
						(t.fn[Ot].noConflict = function () {
							return (t.fn[Ot] = It), Bt._jQueryInterface;
						}),
						(e.Alert = m),
						(e.Button = k),
						(e.Carousel = q),
						(e.Collapse = ee),
						(e.Dropdown = me),
						(e.Modal = De),
						(e.Popover = st),
						(e.Scrollspy = wt),
						(e.Tab = At),
						(e.Toast = Bt),
						(e.Tooltip = Je),
						(e.Util = c),
						Object.defineProperty(e, '__esModule', { value: true });
				}),
					'object' == s(t)
						? a(t, n(755), n(981))
						: ((i = [t, n(755), n(981)]),
						  void 0 ===
								(o = 'function' == typeof (r = a) ? r.apply(t, i) : r) ||
								(e.exports = o));
			},
			924: function (e, t, n) {
				var r, i, o;
				function a(e) {
					return (
						(a =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											'function' == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? 'symbol'
											: typeof e;
								  }),
						a(e)
					);
				}
				(o = function () {
					'use strict';
					function e(e) {
						return e && '[object Function]' === {}.toString.call(e);
					}
					function t(e, t) {
						if (1 !== e.nodeType) return [];
						var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
						return t ? n[t] : n;
					}
					function r(e) {
						return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
					}
					function i(e) {
						if (!e) return document.body;
						switch (e.nodeName) {
							case 'HTML':
							case 'BODY':
								return e.ownerDocument.body;
							case '#document':
								return e.body;
						}
						var n = t(e),
							o = n.overflow,
							a = n.overflowX,
							s = n.overflowY;
						return /(auto|scroll|overlay)/.test(o + s + a) ? e : i(r(e));
					}
					function o(e) {
						return 11 === e ? G : 10 === e ? Z : G || Z;
					}
					function a(e) {
						if (!e) return document.documentElement;
						for (
							var n = o(10) ? document.body : null, r = e.offsetParent || null;
							r === n && e.nextElementSibling;

						)
							r = (e = e.nextElementSibling).offsetParent;
						var i = r && r.nodeName;
						return i && 'BODY' !== i && 'HTML' !== i
							? -1 !== ['TH', 'TD', 'TABLE'].indexOf(r.nodeName) &&
							  'static' === t(r, 'position')
								? a(r)
								: r
							: e
							? e.ownerDocument.documentElement
							: document.documentElement;
					}
					function s(e) {
						return null === e.parentNode ? e : s(e.parentNode);
					}
					function l(e, t) {
						if (!(e && e.nodeType && t && t.nodeType))
							return document.documentElement;
						var n =
								e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
							r = n ? e : t,
							i = n ? t : e,
							o = document.createRange();
						o.setStart(r, 0), o.setEnd(i, 0);
						var c = o.commonAncestorContainer;
						if ((e !== c && t !== c) || r.contains(i))
							return (function (e) {
								var t = e.nodeName;
								return (
									'BODY' !== t && ('HTML' === t || a(e.firstElementChild) === e)
								);
							})(c)
								? c
								: a(c);
						var u = s(e);
						return u.host ? l(u.host, t) : l(e, s(t).host);
					}
					function c(e) {
						var t =
								'top' ===
								(1 < arguments.length && void 0 !== arguments[1]
									? arguments[1]
									: 'top')
									? 'scrollTop'
									: 'scrollLeft',
							n = e.nodeName;
						if ('BODY' === n || 'HTML' === n) {
							var r = e.ownerDocument.documentElement;
							return (e.ownerDocument.scrollingElement || r)[t];
						}
						return e[t];
					}
					function u(e, t) {
						var n =
								2 < arguments.length && void 0 !== arguments[2] && arguments[2],
							r = c(t, 'top'),
							i = c(t, 'left'),
							o = n ? -1 : 1;
						return (
							(e.top += r * o),
							(e.bottom += r * o),
							(e.left += i * o),
							(e.right += i * o),
							e
						);
					}
					function f(e, t) {
						var n = 'x' === t ? 'Left' : 'Top',
							r = 'Left' == n ? 'Right' : 'Bottom';
						return (
							parseFloat(e['border' + n + 'Width'], 10) +
							parseFloat(e['border' + r + 'Width'], 10)
						);
					}
					function d(e, t, n, r) {
						return V(
							t['offset' + e],
							t['scroll' + e],
							n['client' + e],
							n['offset' + e],
							n['scroll' + e],
							o(10)
								? parseInt(n['offset' + e]) +
										parseInt(r['margin' + ('Height' === e ? 'Top' : 'Left')]) +
										parseInt(
											r['margin' + ('Height' === e ? 'Bottom' : 'Right')]
										)
								: 0
						);
					}
					function p(e) {
						var t = e.body,
							n = e.documentElement,
							r = o(10) && getComputedStyle(n);
						return { height: d('Height', t, n, r), width: d('Width', t, n, r) };
					}
					function h(e) {
						return ne({}, e, {
							right: e.left + e.width,
							bottom: e.top + e.height,
						});
					}
					function m(e) {
						var n = {};
						try {
							if (o(10)) {
								n = e.getBoundingClientRect();
								var r = c(e, 'top'),
									i = c(e, 'left');
								(n.top += r), (n.left += i), (n.bottom += r), (n.right += i);
							} else n = e.getBoundingClientRect();
						} catch (e) {}
						var a = {
								left: n.left,
								top: n.top,
								width: n.right - n.left,
								height: n.bottom - n.top,
							},
							s = 'HTML' === e.nodeName ? p(e.ownerDocument) : {},
							l = s.width || e.clientWidth || a.right - a.left,
							u = s.height || e.clientHeight || a.bottom - a.top,
							d = e.offsetWidth - l,
							m = e.offsetHeight - u;
						if (d || m) {
							var g = t(e);
							(d -= f(g, 'x')),
								(m -= f(g, 'y')),
								(a.width -= d),
								(a.height -= m);
						}
						return h(a);
					}
					function g(e, n) {
						var r =
								2 < arguments.length && void 0 !== arguments[2] && arguments[2],
							a = o(10),
							s = 'HTML' === n.nodeName,
							l = m(e),
							c = m(n),
							f = i(e),
							d = t(n),
							p = parseFloat(d.borderTopWidth, 10),
							g = parseFloat(d.borderLeftWidth, 10);
						r && s && ((c.top = V(c.top, 0)), (c.left = V(c.left, 0)));
						var v = h({
							top: l.top - c.top - p,
							left: l.left - c.left - g,
							width: l.width,
							height: l.height,
						});
						if (((v.marginTop = 0), (v.marginLeft = 0), !a && s)) {
							var b = parseFloat(d.marginTop, 10),
								y = parseFloat(d.marginLeft, 10);
							(v.top -= p - b),
								(v.bottom -= p - b),
								(v.left -= g - y),
								(v.right -= g - y),
								(v.marginTop = b),
								(v.marginLeft = y);
						}
						return (
							(a && !r ? n.contains(f) : n === f && 'BODY' !== f.nodeName) &&
								(v = u(v, n)),
							v
						);
					}
					function v(e) {
						var t =
								1 < arguments.length && void 0 !== arguments[1] && arguments[1],
							n = e.ownerDocument.documentElement,
							r = g(e, n),
							i = V(n.clientWidth, window.innerWidth || 0),
							o = V(n.clientHeight, window.innerHeight || 0),
							a = t ? 0 : c(n),
							s = t ? 0 : c(n, 'left');
						return h({
							top: a - r.top + r.marginTop,
							left: s - r.left + r.marginLeft,
							width: i,
							height: o,
						});
					}
					function b(e) {
						var n = e.nodeName;
						if ('BODY' === n || 'HTML' === n) return false;
						if ('fixed' === t(e, 'position')) return true;
						var i = r(e);
						return !!i && b(i);
					}
					function y(e) {
						if (!e || !e.parentElement || o()) return document.documentElement;
						for (var n = e.parentElement; n && 'none' === t(n, 'transform'); )
							n = n.parentElement;
						return n || document.documentElement;
					}
					function w(e, t, n, o) {
						var a =
								4 < arguments.length && void 0 !== arguments[4] && arguments[4],
							s = { top: 0, left: 0 },
							c = a ? y(e) : l(e, t);
						if ('viewport' === o) s = v(c, a);
						else {
							var u;
							'scrollParent' === o
								? 'BODY' === (u = i(r(t))).nodeName &&
								  (u = e.ownerDocument.documentElement)
								: (u = 'window' === o ? e.ownerDocument.documentElement : o);
							var f = g(u, c, a);
							if ('HTML' !== u.nodeName || b(c)) s = f;
							else {
								var d = p(e.ownerDocument),
									h = d.height,
									m = d.width;
								(s.top += f.top - f.marginTop),
									(s.bottom = h + f.top),
									(s.left += f.left - f.marginLeft),
									(s.right = m + f.left);
							}
						}
						var w = 'number' == typeof (n = n || 0);
						return (
							(s.left += w ? n : n.left || 0),
							(s.top += w ? n : n.top || 0),
							(s.right -= w ? n : n.right || 0),
							(s.bottom -= w ? n : n.bottom || 0),
							s
						);
					}
					function _(e) {
						return e.width * e.height;
					}
					function x(e, t, n, r, i) {
						var o =
							5 < arguments.length && void 0 !== arguments[5]
								? arguments[5]
								: 0;
						if (-1 === e.indexOf('auto')) return e;
						var a = w(n, r, o, i),
							s = {
								top: { width: a.width, height: t.top - a.top },
								right: { width: a.right - t.right, height: a.height },
								bottom: { width: a.width, height: a.bottom - t.bottom },
								left: { width: t.left - a.left, height: a.height },
							},
							l = Object.keys(s)
								.map(function (e) {
									return ne({ key: e }, s[e], { area: _(s[e]) });
								})
								.sort(function (e, t) {
									return t.area - e.area;
								}),
							c = l.filter(function (e) {
								var t = e.width,
									r = e.height;
								return t >= n.clientWidth && r >= n.clientHeight;
							}),
							u = 0 < c.length ? c[0].key : l[0].key,
							f = e.split('-')[1];
						return u + (f ? '-' + f : '');
					}
					function C(e, t, n) {
						var r =
							3 < arguments.length && void 0 !== arguments[3]
								? arguments[3]
								: null;
						return g(n, r ? y(t) : l(t, n), r);
					}
					function T(e) {
						var t = e.ownerDocument.defaultView.getComputedStyle(e),
							n =
								parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
							r =
								parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
						return { width: e.offsetWidth + r, height: e.offsetHeight + n };
					}
					function E(e) {
						var t = {
							left: 'right',
							right: 'left',
							bottom: 'top',
							top: 'bottom',
						};
						return e.replace(/left|right|bottom|top/g, function (e) {
							return t[e];
						});
					}
					function k(e, t, n) {
						n = n.split('-')[0];
						var r = T(e),
							i = { width: r.width, height: r.height },
							o = -1 !== ['right', 'left'].indexOf(n),
							a = o ? 'top' : 'left',
							s = o ? 'left' : 'top',
							l = o ? 'height' : 'width',
							c = o ? 'width' : 'height';
						return (
							(i[a] = t[a] + t[l] / 2 - r[l] / 2),
							(i[s] = n === s ? t[s] - r[c] : t[E(s)]),
							i
						);
					}
					function S(e, t) {
						return Array.prototype.find ? e.find(t) : e.filter(t)[0];
					}
					function j(t, n, r) {
						var i =
							void 0 === r
								? t
								: t.slice(
										0,
										(function (e, t, n) {
											if (Array.prototype.findIndex)
												return e.findIndex(function (e) {
													return e[t] === n;
												});
											var r = S(e, function (e) {
												return e[t] === n;
											});
											return e.indexOf(r);
										})(t, 'name', r)
								  );
						return (
							i.forEach(function (t) {
								t.function &&
									console.warn(
										'`modifier.function` is deprecated, use `modifier.fn`!'
									);
								var r = t.function || t.fn;
								t.enabled &&
									e(r) &&
									((n.offsets.popper = h(n.offsets.popper)),
									(n.offsets.reference = h(n.offsets.reference)),
									(n = r(n, t)));
							}),
							n
						);
					}
					function D() {
						if (!this.state.isDestroyed) {
							var e = {
								instance: this,
								styles: {},
								arrowStyles: {},
								attributes: {},
								flipped: false,
								offsets: {},
							};
							(e.offsets.reference = C(
								this.state,
								this.popper,
								this.reference,
								this.options.positionFixed
							)),
								(e.placement = x(
									this.options.placement,
									e.offsets.reference,
									this.popper,
									this.reference,
									this.options.modifiers.flip.boundariesElement,
									this.options.modifiers.flip.padding
								)),
								(e.originalPlacement = e.placement),
								(e.positionFixed = this.options.positionFixed),
								(e.offsets.popper = k(
									this.popper,
									e.offsets.reference,
									e.placement
								)),
								(e.offsets.popper.position = this.options.positionFixed
									? 'fixed'
									: 'absolute'),
								(e = j(this.modifiers, e)),
								this.state.isCreated
									? this.options.onUpdate(e)
									: ((this.state.isCreated = true), this.options.onCreate(e));
						}
					}
					function A(e, t) {
						return e.some(function (e) {
							var n = e.name;
							return e.enabled && n === t;
						});
					}
					function O(e) {
						for (
							var t = [false, 'ms', 'Webkit', 'Moz', 'O'],
								n = e.charAt(0).toUpperCase() + e.slice(1),
								r = 0;
							r < t.length;
							r++
						) {
							var i = t[r],
								o = i ? '' + i + n : e;
							if (void 0 !== document.body.style[o]) return o;
						}
						return null;
					}
					function $() {
						return (
							(this.state.isDestroyed = true),
							A(this.modifiers, 'applyStyle') &&
								(this.popper.removeAttribute('x-placement'),
								(this.popper.style.position = ''),
								(this.popper.style.top = ''),
								(this.popper.style.left = ''),
								(this.popper.style.right = ''),
								(this.popper.style.bottom = ''),
								(this.popper.style.willChange = ''),
								(this.popper.style[O('transform')] = '')),
							this.disableEventListeners(),
							this.options.removeOnDestroy &&
								this.popper.parentNode.removeChild(this.popper),
							this
						);
					}
					function N(e) {
						var t = e.ownerDocument;
						return t ? t.defaultView : window;
					}
					function I(e, t, n, r) {
						var o = 'BODY' === e.nodeName,
							a = o ? e.ownerDocument.defaultView : e;
						a.addEventListener(t, n, { passive: true }),
							o || I(i(a.parentNode), t, n, r),
							r.push(a);
					}
					function P(e, t, n, r) {
						(n.updateBound = r),
							N(e).addEventListener('resize', n.updateBound, { passive: true });
						var o = i(e);
						return (
							I(o, 'scroll', n.updateBound, n.scrollParents),
							(n.scrollElement = o),
							(n.eventsEnabled = true),
							n
						);
					}
					function L() {
						this.state.eventsEnabled ||
							(this.state = P(
								this.reference,
								this.options,
								this.state,
								this.scheduleUpdate
							));
					}
					function H() {
						this.state.eventsEnabled &&
							(cancelAnimationFrame(this.scheduleUpdate),
							(this.state = (function (e, t) {
								return (
									N(e).removeEventListener('resize', t.updateBound),
									t.scrollParents.forEach(function (e) {
										e.removeEventListener('scroll', t.updateBound);
									}),
									(t.updateBound = null),
									(t.scrollParents = []),
									(t.scrollElement = null),
									(t.eventsEnabled = false),
									t
								);
							})(this.reference, this.state)));
					}
					function M(e) {
						return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
					}
					function R(e, t) {
						Object.keys(t).forEach(function (n) {
							var r = '';
							-1 !==
								['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(
									n
								) &&
								M(t[n]) &&
								(r = 'px'),
								(e.style[n] = t[n] + r);
						});
					}
					function q(e, t, n) {
						var r = S(e, function (e) {
								return e.name === t;
							}),
							i =
								!!r &&
								e.some(function (e) {
									return e.name === n && e.enabled && e.order < r.order;
								});
						if (!i) {
							var o = '`' + t + '`';
							console.warn(
								'`' +
									n +
									'` modifier is required by ' +
									o +
									' modifier in order to work, be sure to include it before ' +
									o +
									'!'
							);
						}
						return i;
					}
					function B(e) {
						var t =
								1 < arguments.length && void 0 !== arguments[1] && arguments[1],
							n = oe.indexOf(e),
							r = oe.slice(n + 1).concat(oe.slice(0, n));
						return t ? r.reverse() : r;
					}
					function F(e, t, n, r) {
						var i = [0, 0],
							o = -1 !== ['right', 'left'].indexOf(r),
							a = e.split(/(\+|\-)/).map(function (e) {
								return e.trim();
							}),
							s = a.indexOf(
								S(a, function (e) {
									return -1 !== e.search(/,|\s/);
								})
							);
						a[s] &&
							-1 === a[s].indexOf(',') &&
							console.warn(
								'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
							);
						var l = /\s*,\s*|\s+/,
							c =
								-1 === s
									? [a]
									: [
											a.slice(0, s).concat([a[s].split(l)[0]]),
											[a[s].split(l)[1]].concat(a.slice(s + 1)),
									  ];
						return (
							(c = c.map(function (e, r) {
								var i = (1 === r ? !o : o) ? 'height' : 'width',
									a = false;
								return e
									.reduce(function (e, t) {
										return '' === e[e.length - 1] &&
											-1 !== ['+', '-'].indexOf(t)
											? ((e[e.length - 1] = t), (a = true), e)
											: a
											? ((e[e.length - 1] += t), (a = false), e)
											: e.concat(t);
									}, [])
									.map(function (e) {
										return (function (e, t, n, r) {
											var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
												o = +i[1],
												a = i[2];
											return o
												? 0 === a.indexOf('%')
													? (h('%p' === a ? n : r)[t] / 100) * o
													: 'vh' === a || 'vw' === a
													? (('vh' === a
															? V(
																	document.documentElement.clientHeight,
																	window.innerHeight || 0
															  )
															: V(
																	document.documentElement.clientWidth,
																	window.innerWidth || 0
															  )) /
															100) *
													  o
													: o
												: e;
										})(e, i, t, n);
									});
							})),
							c.forEach(function (e, t) {
								e.forEach(function (n, r) {
									M(n) && (i[t] += n * ('-' === e[r - 1] ? -1 : 1));
								});
							}),
							i
						);
					}
					for (
						var W = Math.min,
							U = Math.floor,
							z = Math.round,
							V = Math.max,
							Q =
								'undefined' != typeof window && 'undefined' != typeof document,
							K = ['Edge', 'Trident', 'Firefox'],
							Y = 0,
							X = 0;
						X < K.length;
						X += 1
					)
						if (Q && 0 <= navigator.userAgent.indexOf(K[X])) {
							Y = 1;
							break;
						}
					var J =
							Q && window.Promise
								? function (e) {
										var t = false;
										return function () {
											t ||
												((t = true),
												window.Promise.resolve().then(function () {
													(t = false), e();
												}));
										};
								  }
								: function (e) {
										var t = false;
										return function () {
											t ||
												((t = true),
												setTimeout(function () {
													(t = false), e();
												}, Y));
										};
								  },
						G = Q && !(!window.MSInputMethodContext || !document.documentMode),
						Z = Q && /MSIE 10/.test(navigator.userAgent),
						ee = (function () {
							function e(e, t) {
								for (var n, r = 0; r < t.length; r++)
									((n = t[r]).enumerable = n.enumerable || false),
										(n.configurable = true),
										'value' in n && (n.writable = true),
										Object.defineProperty(e, n.key, n);
							}
							return function (t, n, r) {
								return n && e(t.prototype, n), r && e(t, r), t;
							};
						})(),
						te = function (e, t, n) {
							return (
								t in e
									? Object.defineProperty(e, t, {
											value: n,
											enumerable: true,
											configurable: true,
											writable: true,
									  })
									: (e[t] = n),
								e
							);
						},
						ne =
							Object.assign ||
							function (e) {
								for (var t, n = 1; n < arguments.length; n++)
									for (var r in (t = arguments[n]))
										Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
								return e;
							},
						re = Q && /Firefox/i.test(navigator.userAgent),
						ie = [
							'auto-start',
							'auto',
							'auto-end',
							'top-start',
							'top',
							'top-end',
							'right-start',
							'right',
							'right-end',
							'bottom-end',
							'bottom',
							'bottom-start',
							'left-end',
							'left',
							'left-start',
						],
						oe = ie.slice(3),
						ae = 'flip',
						se = 'clockwise',
						le = 'counterclockwise',
						ce = (function () {
							function t(n, r) {
								var i = this,
									o =
										2 < arguments.length && void 0 !== arguments[2]
											? arguments[2]
											: {};
								(function (e, t) {
									if (!(e instanceof t))
										throw new TypeError('Cannot call a class as a function');
								})(this, t),
									(this.scheduleUpdate = function () {
										return requestAnimationFrame(i.update);
									}),
									(this.update = J(this.update.bind(this))),
									(this.options = ne({}, t.Defaults, o)),
									(this.state = {
										isDestroyed: false,
										isCreated: false,
										scrollParents: [],
									}),
									(this.reference = n && n.jquery ? n[0] : n),
									(this.popper = r && r.jquery ? r[0] : r),
									(this.options.modifiers = {}),
									Object.keys(
										ne({}, t.Defaults.modifiers, o.modifiers)
									).forEach(function (e) {
										i.options.modifiers[e] = ne(
											{},
											t.Defaults.modifiers[e] || {},
											o.modifiers ? o.modifiers[e] : {}
										);
									}),
									(this.modifiers = Object.keys(this.options.modifiers)
										.map(function (e) {
											return ne({ name: e }, i.options.modifiers[e]);
										})
										.sort(function (e, t) {
											return e.order - t.order;
										})),
									this.modifiers.forEach(function (t) {
										t.enabled &&
											e(t.onLoad) &&
											t.onLoad(i.reference, i.popper, i.options, t, i.state);
									}),
									this.update();
								var a = this.options.eventsEnabled;
								a && this.enableEventListeners(),
									(this.state.eventsEnabled = a);
							}
							return (
								ee(t, [
									{
										key: 'update',
										value: function () {
											return D.call(this);
										},
									},
									{
										key: 'destroy',
										value: function () {
											return $.call(this);
										},
									},
									{
										key: 'enableEventListeners',
										value: function () {
											return L.call(this);
										},
									},
									{
										key: 'disableEventListeners',
										value: function () {
											return H.call(this);
										},
									},
								]),
								t
							);
						})();
					return (
						(ce.Utils = (
							'undefined' == typeof window ? n.g : window
						).PopperUtils),
						(ce.placements = ie),
						(ce.Defaults = {
							placement: 'bottom',
							positionFixed: false,
							eventsEnabled: true,
							removeOnDestroy: false,
							onCreate: function () {},
							onUpdate: function () {},
							modifiers: {
								shift: {
									order: 100,
									enabled: true,
									fn: function (e) {
										var t = e.placement,
											n = t.split('-')[0],
											r = t.split('-')[1];
										if (r) {
											var i = e.offsets,
												o = i.reference,
												a = i.popper,
												s = -1 !== ['bottom', 'top'].indexOf(n),
												l = s ? 'left' : 'top',
												c = s ? 'width' : 'height',
												u = {
													start: te({}, l, o[l]),
													end: te({}, l, o[l] + o[c] - a[c]),
												};
											e.offsets.popper = ne({}, a, u[r]);
										}
										return e;
									},
								},
								offset: {
									order: 200,
									enabled: true,
									fn: function (e, t) {
										var n,
											r = t.offset,
											i = e.placement,
											o = e.offsets,
											a = o.popper,
											s = o.reference,
											l = i.split('-')[0];
										return (
											(n = M(+r) ? [+r, 0] : F(r, a, s, l)),
											'left' === l
												? ((a.top += n[0]), (a.left -= n[1]))
												: 'right' === l
												? ((a.top += n[0]), (a.left += n[1]))
												: 'top' === l
												? ((a.left += n[0]), (a.top -= n[1]))
												: 'bottom' === l && ((a.left += n[0]), (a.top += n[1])),
											(e.popper = a),
											e
										);
									},
									offset: 0,
								},
								preventOverflow: {
									order: 300,
									enabled: true,
									fn: function (e, t) {
										var n = t.boundariesElement || a(e.instance.popper);
										e.instance.reference === n && (n = a(n));
										var r = O('transform'),
											i = e.instance.popper.style,
											o = i.top,
											s = i.left,
											l = i[r];
										(i.top = ''), (i.left = ''), (i[r] = '');
										var c = w(
											e.instance.popper,
											e.instance.reference,
											t.padding,
											n,
											e.positionFixed
										);
										(i.top = o), (i.left = s), (i[r] = l), (t.boundaries = c);
										var u = t.priority,
											f = e.offsets.popper,
											d = {
												primary: function (e) {
													var n = f[e];
													return (
														f[e] < c[e] &&
															!t.escapeWithReference &&
															(n = V(f[e], c[e])),
														te({}, e, n)
													);
												},
												secondary: function (e) {
													var n = 'right' === e ? 'left' : 'top',
														r = f[n];
													return (
														f[e] > c[e] &&
															!t.escapeWithReference &&
															(r = W(
																f[n],
																c[e] - ('right' === e ? f.width : f.height)
															)),
														te({}, n, r)
													);
												},
											};
										return (
											u.forEach(function (e) {
												var t =
													-1 === ['left', 'top'].indexOf(e)
														? 'secondary'
														: 'primary';
												f = ne({}, f, d[t](e));
											}),
											(e.offsets.popper = f),
											e
										);
									},
									priority: ['left', 'right', 'top', 'bottom'],
									padding: 5,
									boundariesElement: 'scrollParent',
								},
								keepTogether: {
									order: 400,
									enabled: true,
									fn: function (e) {
										var t = e.offsets,
											n = t.popper,
											r = t.reference,
											i = e.placement.split('-')[0],
											o = U,
											a = -1 !== ['top', 'bottom'].indexOf(i),
											s = a ? 'right' : 'bottom',
											l = a ? 'left' : 'top',
											c = a ? 'width' : 'height';
										return (
											n[s] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[c]),
											n[l] > o(r[s]) && (e.offsets.popper[l] = o(r[s])),
											e
										);
									},
								},
								arrow: {
									order: 500,
									enabled: true,
									fn: function (e, n) {
										var r;
										if (!q(e.instance.modifiers, 'arrow', 'keepTogether'))
											return e;
										var i = n.element;
										if ('string' == typeof i) {
											if (!(i = e.instance.popper.querySelector(i))) return e;
										} else if (!e.instance.popper.contains(i))
											return (
												console.warn(
													'WARNING: `arrow.element` must be child of its popper element!'
												),
												e
											);
										var o = e.placement.split('-')[0],
											a = e.offsets,
											s = a.popper,
											l = a.reference,
											c = -1 !== ['left', 'right'].indexOf(o),
											u = c ? 'height' : 'width',
											f = c ? 'Top' : 'Left',
											d = f.toLowerCase(),
											p = c ? 'left' : 'top',
											m = c ? 'bottom' : 'right',
											g = T(i)[u];
										l[m] - g < s[d] &&
											(e.offsets.popper[d] -= s[d] - (l[m] - g)),
											l[d] + g > s[m] &&
												(e.offsets.popper[d] += l[d] + g - s[m]),
											(e.offsets.popper = h(e.offsets.popper));
										var v = l[d] + l[u] / 2 - g / 2,
											b = t(e.instance.popper),
											y = parseFloat(b['margin' + f], 10),
											w = parseFloat(b['border' + f + 'Width'], 10),
											_ = v - e.offsets.popper[d] - y - w;
										return (
											(_ = V(W(s[u] - g, _), 0)),
											(e.arrowElement = i),
											(e.offsets.arrow =
												(te((r = {}), d, z(_)), te(r, p, ''), r)),
											e
										);
									},
									element: '[x-arrow]',
								},
								flip: {
									order: 600,
									enabled: true,
									fn: function (e, t) {
										if (A(e.instance.modifiers, 'inner')) return e;
										if (e.flipped && e.placement === e.originalPlacement)
											return e;
										var n = w(
												e.instance.popper,
												e.instance.reference,
												t.padding,
												t.boundariesElement,
												e.positionFixed
											),
											r = e.placement.split('-')[0],
											i = E(r),
											o = e.placement.split('-')[1] || '',
											a = [];
										switch (t.behavior) {
											case ae:
												a = [r, i];
												break;
											case se:
												a = B(r);
												break;
											case le:
												a = B(r, true);
												break;
											default:
												a = t.behavior;
										}
										return (
											a.forEach(function (s, l) {
												if (r !== s || a.length === l + 1) return e;
												(r = e.placement.split('-')[0]), (i = E(r));
												var c = e.offsets.popper,
													u = e.offsets.reference,
													f = U,
													d =
														('left' === r && f(c.right) > f(u.left)) ||
														('right' === r && f(c.left) < f(u.right)) ||
														('top' === r && f(c.bottom) > f(u.top)) ||
														('bottom' === r && f(c.top) < f(u.bottom)),
													p = f(c.left) < f(n.left),
													h = f(c.right) > f(n.right),
													m = f(c.top) < f(n.top),
													g = f(c.bottom) > f(n.bottom),
													v =
														('left' === r && p) ||
														('right' === r && h) ||
														('top' === r && m) ||
														('bottom' === r && g),
													b = -1 !== ['top', 'bottom'].indexOf(r),
													y =
														!!t.flipVariations &&
														((b && 'start' === o && p) ||
															(b && 'end' === o && h) ||
															(!b && 'start' === o && m) ||
															(!b && 'end' === o && g));
												(d || v || y) &&
													((e.flipped = true),
													(d || v) && (r = a[l + 1]),
													y &&
														(o = (function (e) {
															return 'end' === e
																? 'start'
																: 'start' === e
																? 'end'
																: e;
														})(o)),
													(e.placement = r + (o ? '-' + o : '')),
													(e.offsets.popper = ne(
														{},
														e.offsets.popper,
														k(
															e.instance.popper,
															e.offsets.reference,
															e.placement
														)
													)),
													(e = j(e.instance.modifiers, e, 'flip')));
											}),
											e
										);
									},
									behavior: 'flip',
									padding: 5,
									boundariesElement: 'viewport',
								},
								inner: {
									order: 700,
									enabled: false,
									fn: function (e) {
										var t = e.placement,
											n = t.split('-')[0],
											r = e.offsets,
											i = r.popper,
											o = r.reference,
											a = -1 !== ['left', 'right'].indexOf(n),
											s = -1 === ['top', 'left'].indexOf(n);
										return (
											(i[a ? 'left' : 'top'] =
												o[n] - (s ? i[a ? 'width' : 'height'] : 0)),
											(e.placement = E(t)),
											(e.offsets.popper = h(i)),
											e
										);
									},
								},
								hide: {
									order: 800,
									enabled: true,
									fn: function (e) {
										if (!q(e.instance.modifiers, 'hide', 'preventOverflow'))
											return e;
										var t = e.offsets.reference,
											n = S(e.instance.modifiers, function (e) {
												return 'preventOverflow' === e.name;
											}).boundaries;
										if (
											t.bottom < n.top ||
											t.left > n.right ||
											t.top > n.bottom ||
											t.right < n.left
										) {
											if (true === e.hide) return e;
											(e.hide = true),
												(e.attributes['x-out-of-boundaries'] = '');
										} else {
											if (false === e.hide) return e;
											(e.hide = false),
												(e.attributes['x-out-of-boundaries'] = false);
										}
										return e;
									},
								},
								computeStyle: {
									order: 850,
									enabled: true,
									fn: function (e, t) {
										var n = t.x,
											r = t.y,
											i = e.offsets.popper,
											o = S(e.instance.modifiers, function (e) {
												return 'applyStyle' === e.name;
											}).gpuAcceleration;
										void 0 !== o &&
											console.warn(
												'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
											);
										var s,
											l,
											c = void 0 === o ? t.gpuAcceleration : o,
											u = a(e.instance.popper),
											f = m(u),
											d = { position: i.position },
											p = (function (e, t) {
												var n = e.offsets,
													r = n.popper,
													i = n.reference,
													o = z,
													a = function (e) {
														return e;
													},
													s = o(i.width),
													l = o(r.width),
													c = -1 !== ['left', 'right'].indexOf(e.placement),
													u = -1 !== e.placement.indexOf('-'),
													f = t ? (c || u || s % 2 == l % 2 ? o : U) : a,
													d = t ? o : a;
												return {
													left: f(
														1 == s % 2 && 1 == l % 2 && !u && t
															? r.left - 1
															: r.left
													),
													top: d(r.top),
													bottom: d(r.bottom),
													right: f(r.right),
												};
											})(e, 2 > window.devicePixelRatio || !re),
											h = 'bottom' === n ? 'top' : 'bottom',
											g = 'right' === r ? 'left' : 'right',
											v = O('transform');
										if (
											((l =
												'bottom' == h
													? 'HTML' === u.nodeName
														? -u.clientHeight + p.bottom
														: -f.height + p.bottom
													: p.top),
											(s =
												'right' == g
													? 'HTML' === u.nodeName
														? -u.clientWidth + p.right
														: -f.width + p.right
													: p.left),
											c && v)
										)
											(d[v] = 'translate3d(' + s + 'px, ' + l + 'px, 0)'),
												(d[h] = 0),
												(d[g] = 0),
												(d.willChange = 'transform');
										else {
											var b = 'bottom' == h ? -1 : 1,
												y = 'right' == g ? -1 : 1;
											(d[h] = l * b),
												(d[g] = s * y),
												(d.willChange = h + ', ' + g);
										}
										var w = { 'x-placement': e.placement };
										return (
											(e.attributes = ne({}, w, e.attributes)),
											(e.styles = ne({}, d, e.styles)),
											(e.arrowStyles = ne({}, e.offsets.arrow, e.arrowStyles)),
											e
										);
									},
									gpuAcceleration: true,
									x: 'bottom',
									y: 'right',
								},
								applyStyle: {
									order: 900,
									enabled: true,
									fn: function (e) {
										return (
											R(e.instance.popper, e.styles),
											(function (e, t) {
												Object.keys(t).forEach(function (n) {
													false === t[n]
														? e.removeAttribute(n)
														: e.setAttribute(n, t[n]);
												});
											})(e.instance.popper, e.attributes),
											e.arrowElement &&
												Object.keys(e.arrowStyles).length &&
												R(e.arrowElement, e.arrowStyles),
											e
										);
									},
									onLoad: function (e, t, n, r, i) {
										var o = C(i, t, e, n.positionFixed),
											a = x(
												n.placement,
												o,
												t,
												e,
												n.modifiers.flip.boundariesElement,
												n.modifiers.flip.padding
											);
										return (
											t.setAttribute('x-placement', a),
											R(t, {
												position: n.positionFixed ? 'fixed' : 'absolute',
											}),
											n
										);
									},
									gpuAcceleration: void 0,
								},
							},
						}),
						ce
					);
				}),
					'object' == a(t)
						? (e.exports = o())
						: void 0 ===
								(i = 'function' == typeof (r = o) ? r.call(t, n, t, e) : r) ||
						  (e.exports = i);
			},
			487: function (e) {
				var t = {
					utf8: {
						stringToBytes: function (e) {
							return t.bin.stringToBytes(unescape(encodeURIComponent(e)));
						},
						bytesToString: function (e) {
							return decodeURIComponent(escape(t.bin.bytesToString(e)));
						},
					},
					bin: {
						stringToBytes: function (e) {
							for (var t = [], n = 0; n < e.length; n++)
								t.push(255 & e.charCodeAt(n));
							return t;
						},
						bytesToString: function (e) {
							for (var t = [], n = 0; n < e.length; n++)
								t.push(String.fromCharCode(e[n]));
							return t.join('');
						},
					},
				};
				e.exports = t;
			},
			12: function (e) {
				var t, n;
				(t =
					'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'),
					(n = {
						rotl: function (e, t) {
							return (e << t) | (e >>> (32 - t));
						},
						rotr: function (e, t) {
							return (e << (32 - t)) | (e >>> t);
						},
						endian: function (e) {
							if (e.constructor == Number)
								return (16711935 & n.rotl(e, 8)) | (4278255360 & n.rotl(e, 24));
							for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
							return e;
						},
						randomBytes: function (e) {
							for (var t = []; e > 0; e--)
								t.push(Math.floor(256 * Math.random()));
							return t;
						},
						bytesToWords: function (e) {
							for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8)
								t[r >>> 5] |= e[n] << (24 - (r % 32));
							return t;
						},
						wordsToBytes: function (e) {
							for (var t = [], n = 0; n < 32 * e.length; n += 8)
								t.push((e[n >>> 5] >>> (24 - (n % 32))) & 255);
							return t;
						},
						bytesToHex: function (e) {
							for (var t = [], n = 0; n < e.length; n++)
								t.push((e[n] >>> 4).toString(16)),
									t.push((15 & e[n]).toString(16));
							return t.join('');
						},
						hexToBytes: function (e) {
							for (var t = [], n = 0; n < e.length; n += 2)
								t.push(parseInt(e.substr(n, 2), 16));
							return t;
						},
						bytesToBase64: function (e) {
							for (var n = [], r = 0; r < e.length; r += 3)
								for (
									var i = (e[r] << 16) | (e[r + 1] << 8) | e[r + 2], o = 0;
									o < 4;
									o++
								)
									8 * r + 6 * o <= 8 * e.length
										? n.push(t.charAt((i >>> (6 * (3 - o))) & 63))
										: n.push('=');
							return n.join('');
						},
						base64ToBytes: function (e) {
							e = e.replace(/[^A-Z0-9+\/]/gi, '');
							for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4)
								0 != i &&
									n.push(
										((t.indexOf(e.charAt(r - 1)) &
											(Math.pow(2, -2 * i + 8) - 1)) <<
											(2 * i)) |
											(t.indexOf(e.charAt(r)) >>> (6 - 2 * i))
									);
							return n;
						},
					}),
					(e.exports = n);
			},
			738: function (e) {
				function t(e) {
					return (
						!!e.constructor &&
						'function' == typeof e.constructor.isBuffer &&
						e.constructor.isBuffer(e)
					);
				}
				/*!
				 * Determine if an object is a Buffer
				 *
				 * @author   Feross Aboukhadijeh <https://feross.org>
				 * @license  MIT
				 */
				e.exports = function (e) {
					return (
						null != e &&
						(t(e) ||
							(function (e) {
								return (
									'function' == typeof e.readFloatLE &&
									'function' == typeof e.slice &&
									t(e.slice(0, 0))
								);
							})(e) ||
							!!e._isBuffer)
					);
				};
			},
			440: function (e, t, n) {
				var r, i, o;
				/*!
				 * jQuery.scrollTo
				 * Copyright (c) 2007 Ariel Flesler - aflesler в—‹ gmail вЂў com | https://github.com/flesler
				 * Licensed under MIT
				 * https://github.com/flesler/jquery.scrollTo
				 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
				 * @author Ariel Flesler
				 * @version 2.1.3
				 */ !(function (a) {
					'use strict';
					(i = [n(755)]),
						void 0 ===
							(o =
								'function' ==
								typeof (r = function (e) {
									var t = (e.scrollTo = function (t, n, r) {
										return e(window).scrollTo(t, n, r);
									});
									function n(t) {
										return (
											!t.nodeName ||
											-1 !==
												e.inArray(t.nodeName.toLowerCase(), [
													'iframe',
													'#document',
													'html',
													'body',
												])
										);
									}
									function r(e) {
										return 'function' == typeof e;
									}
									function i(t) {
										return r(t) || e.isPlainObject(t) ? t : { top: t, left: t };
									}
									return (
										(t.defaults = { axis: 'xy', duration: 0, limit: true }),
										(e.fn.scrollTo = function (o, a, s) {
											'object' == typeof a && ((s = a), (a = 0)),
												'function' == typeof s && (s = { onAfter: s }),
												'max' === o && (o = 9e9),
												(s = e.extend({}, t.defaults, s)),
												(a = a || s.duration);
											var l = s.queue && s.axis.length > 1;
											return (
												l && (a /= 2),
												(s.offset = i(s.offset)),
												(s.over = i(s.over)),
												this.each(function () {
													if (null !== o) {
														var c,
															u = n(this),
															f = u ? this.contentWindow || window : this,
															d = e(f),
															p = o,
															h = {};
														switch (typeof p) {
															case 'number':
															case 'string':
																if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
																	p = i(p);
																	break;
																}
																p = u ? e(p) : e(p, f);
															case 'object':
																if (0 === p.length) return;
																(p.is || p.style) && (c = (p = e(p)).offset());
														}
														var m = (r(s.offset) && s.offset(f, p)) || s.offset;
														e.each(s.axis.split(''), function (e, n) {
															var r = 'x' === n ? 'Left' : 'Top',
																i = r.toLowerCase(),
																o = 'scroll' + r,
																a = d[o](),
																v = t.max(f, n);
															if (c)
																(h[o] = c[i] + (u ? 0 : a - d.offset()[i])),
																	s.margin &&
																		((h[o] -=
																			parseInt(p.css('margin' + r), 10) || 0),
																		(h[o] -=
																			parseInt(
																				p.css('border' + r + 'Width'),
																				10
																			) || 0)),
																	(h[o] += m[i] || 0),
																	s.over[i] &&
																		(h[o] +=
																			p['x' === n ? 'width' : 'height']() *
																			s.over[i]);
															else {
																var b = p[i];
																h[o] =
																	b.slice && '%' === b.slice(-1)
																		? (parseFloat(b) / 100) * v
																		: b;
															}
															s.limit &&
																/^\d+$/.test(h[o]) &&
																(h[o] = h[o] <= 0 ? 0 : Math.min(h[o], v)),
																!e &&
																	s.axis.length > 1 &&
																	(a === h[o]
																		? (h = {})
																		: l && (g(s.onAfterFirst), (h = {})));
														}),
															g(s.onAfter);
													}
													function g(t) {
														var n = e.extend({}, s, {
															queue: true,
															duration: a,
															complete:
																t &&
																function () {
																	t.call(f, p, s);
																},
														});
														d.animate(h, n);
													}
												})
											);
										}),
										(t.max = function (t, r) {
											var i = 'x' === r ? 'Width' : 'Height',
												o = 'scroll' + i;
											if (!n(t)) return t[o] - e(t)[i.toLowerCase()]();
											var a = 'client' + i,
												s = t.ownerDocument || t.document,
												l = s.documentElement,
												c = s.body;
											return Math.max(l[o], c[o]) - Math.min(l[a], c[a]);
										}),
										(e.Tween.propHooks.scrollLeft =
											e.Tween.propHooks.scrollTop =
												{
													get: function (t) {
														return e(t.elem)[t.prop]();
													},
													set: function (t) {
														var n = this.get(t);
														if (t.options.interrupt && t._last && t._last !== n)
															return e(t.elem).stop();
														var r = Math.round(t.now);
														n !== r &&
															(e(t.elem)[t.prop](r), (t._last = this.get(t)));
													},
												}),
										t
									);
								})
									? r.apply(t, i)
									: r) || (e.exports = o);
				})();
			},
			755: function (e, t) {
				var n;
				/*!
				 * jQuery JavaScript Library v3.6.0
				 * https://jquery.com/
				 *
				 * Includes Sizzle.js
				 * https://sizzlejs.com/
				 *
				 * Copyright OpenJS Foundation and other contributors
				 * Released under the MIT license
				 * https://jquery.org/license
				 *
				 * Date: 2021-03-02T17:08Z
				 */ !(function (t, n) {
					'use strict';
					'object' == typeof e.exports
						? (e.exports = t.document
								? n(t, true)
								: function (e) {
										if (!e.document)
											throw new Error(
												'jQuery requires a window with a document'
											);
										return n(e);
								  })
						: n(t);
				})('undefined' != typeof window ? window : this, function (r, i) {
					'use strict';
					var o = [],
						a = Object.getPrototypeOf,
						s = o.slice,
						l = o.flat
							? function (e) {
									return o.flat.call(e);
							  }
							: function (e) {
									return o.concat.apply([], e);
							  },
						c = o.push,
						u = o.indexOf,
						f = {},
						d = f.toString,
						p = f.hasOwnProperty,
						h = p.toString,
						m = h.call(Object),
						g = {},
						v = function (e) {
							return (
								'function' == typeof e &&
								'number' != typeof e.nodeType &&
								'function' != typeof e.item
							);
						},
						b = function (e) {
							return null != e && e === e.window;
						},
						y = r.document,
						w = { type: true, src: true, nonce: true, noModule: true };
					function _(e, t, n) {
						var r,
							i,
							o = (n = n || y).createElement('script');
						if (((o.text = e), t))
							for (r in w)
								(i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
									o.setAttribute(r, i);
						n.head.appendChild(o).parentNode.removeChild(o);
					}
					function x(e) {
						return null == e
							? e + ''
							: 'object' == typeof e || 'function' == typeof e
							? f[d.call(e)] || 'object'
							: typeof e;
					}
					var C = '3.6.0',
						T = function (e, t) {
							return new T.fn.init(e, t);
						};
					function E(e) {
						var t = !!e && 'length' in e && e.length,
							n = x(e);
						return (
							!v(e) &&
							!b(e) &&
							('array' === n ||
								0 === t ||
								('number' == typeof t && t > 0 && t - 1 in e))
						);
					}
					(T.fn = T.prototype =
						{
							jquery: C,
							constructor: T,
							length: 0,
							toArray: function () {
								return s.call(this);
							},
							get: function (e) {
								return null == e
									? s.call(this)
									: e < 0
									? this[e + this.length]
									: this[e];
							},
							pushStack: function (e) {
								var t = T.merge(this.constructor(), e);
								return (t.prevObject = this), t;
							},
							each: function (e) {
								return T.each(this, e);
							},
							map: function (e) {
								return this.pushStack(
									T.map(this, function (t, n) {
										return e.call(t, n, t);
									})
								);
							},
							slice: function () {
								return this.pushStack(s.apply(this, arguments));
							},
							first: function () {
								return this.eq(0);
							},
							last: function () {
								return this.eq(-1);
							},
							even: function () {
								return this.pushStack(
									T.grep(this, function (e, t) {
										return (t + 1) % 2;
									})
								);
							},
							odd: function () {
								return this.pushStack(
									T.grep(this, function (e, t) {
										return t % 2;
									})
								);
							},
							eq: function (e) {
								var t = this.length,
									n = +e + (e < 0 ? t : 0);
								return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
							},
							end: function () {
								return this.prevObject || this.constructor();
							},
							push: c,
							sort: o.sort,
							splice: o.splice,
						}),
						(T.extend = T.fn.extend =
							function () {
								var e,
									t,
									n,
									r,
									i,
									o,
									a = arguments[0] || {},
									s = 1,
									l = arguments.length,
									c = false;
								for (
									'boolean' == typeof a &&
										((c = a), (a = arguments[s] || {}), s++),
										'object' == typeof a || v(a) || (a = {}),
										s === l && ((a = this), s--);
									s < l;
									s++
								)
									if (null != (e = arguments[s]))
										for (t in e)
											(r = e[t]),
												'__proto__' !== t &&
													a !== r &&
													(c &&
													r &&
													(T.isPlainObject(r) || (i = Array.isArray(r)))
														? ((n = a[t]),
														  (o =
																i && !Array.isArray(n)
																	? []
																	: i || T.isPlainObject(n)
																	? n
																	: {}),
														  (i = false),
														  (a[t] = T.extend(c, o, r)))
														: void 0 !== r && (a[t] = r));
								return a;
							}),
						T.extend({
							expando: 'jQuery' + (C + Math.random()).replace(/\D/g, ''),
							isReady: true,
							error: function (e) {
								throw new Error(e);
							},
							noop: function () {},
							isPlainObject: function (e) {
								var t, n;
								return (
									!(!e || '[object Object]' !== d.call(e)) &&
									(!(t = a(e)) ||
										('function' ==
											typeof (n = p.call(t, 'constructor') && t.constructor) &&
											h.call(n) === m))
								);
							},
							isEmptyObject: function (e) {
								var t;
								for (t in e) return false;
								return true;
							},
							globalEval: function (e, t, n) {
								_(e, { nonce: t && t.nonce }, n);
							},
							each: function (e, t) {
								var n,
									r = 0;
								if (E(e))
									for (
										n = e.length;
										r < n && false !== t.call(e[r], r, e[r]);
										r++
									);
								else for (r in e) if (false === t.call(e[r], r, e[r])) break;
								return e;
							},
							makeArray: function (e, t) {
								var n = t || [];
								return (
									null != e &&
										(E(Object(e))
											? T.merge(n, 'string' == typeof e ? [e] : e)
											: c.call(n, e)),
									n
								);
							},
							inArray: function (e, t, n) {
								return null == t ? -1 : u.call(t, e, n);
							},
							merge: function (e, t) {
								for (var n = +t.length, r = 0, i = e.length; r < n; r++)
									e[i++] = t[r];
								return (e.length = i), e;
							},
							grep: function (e, t, n) {
								for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
									!t(e[i], i) !== a && r.push(e[i]);
								return r;
							},
							map: function (e, t, n) {
								var r,
									i,
									o = 0,
									a = [];
								if (E(e))
									for (r = e.length; o < r; o++)
										null != (i = t(e[o], o, n)) && a.push(i);
								else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
								return l(a);
							},
							guid: 1,
							support: g,
						}),
						'function' == typeof Symbol &&
							(T.fn[Symbol.iterator] = o[Symbol.iterator]),
						T.each(
							'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
								' '
							),
							function (e, t) {
								f['[object ' + t + ']'] = t.toLowerCase();
							}
						);
					var k =
						/*!
						 * Sizzle CSS Selector Engine v2.3.6
						 * https://sizzlejs.com/
						 *
						 * Copyright JS Foundation and other contributors
						 * Released under the MIT license
						 * https://js.foundation/
						 *
						 * Date: 2021-02-16
						 */
						(function (e) {
							var t,
								n,
								r,
								i,
								o,
								a,
								s,
								l,
								c,
								u,
								f,
								d,
								p,
								h,
								m,
								g,
								v,
								b,
								y,
								w = 'sizzle' + 1 * new Date(),
								_ = e.document,
								x = 0,
								C = 0,
								T = le(),
								E = le(),
								k = le(),
								S = le(),
								j = function (e, t) {
									return e === t && (f = true), 0;
								},
								D = {}.hasOwnProperty,
								A = [],
								O = A.pop,
								$ = A.push,
								N = A.push,
								I = A.slice,
								P = function (e, t) {
									for (var n = 0, r = e.length; n < r; n++)
										if (e[n] === t) return n;
									return -1;
								},
								L =
									'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
								H = '[\\x20\\t\\r\\n\\f]',
								M =
									'(?:\\\\[\\da-fA-F]{1,6}' +
									H +
									'?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
								R =
									'\\[' +
									H +
									'*(' +
									M +
									')(?:' +
									H +
									'*([*^$|!~]?=)' +
									H +
									'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
									M +
									'))|)' +
									H +
									'*\\]',
								q =
									':(' +
									M +
									')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
									R +
									')*)|.*)\\)|)',
								B = new RegExp(H + '+', 'g'),
								F = new RegExp(
									'^' + H + '+|((?:^|[^\\\\])(?:\\\\.)*)' + H + '+$',
									'g'
								),
								W = new RegExp('^' + H + '*,' + H + '*'),
								U = new RegExp('^' + H + '*([>+~]|' + H + ')' + H + '*'),
								z = new RegExp(H + '|>'),
								V = new RegExp(q),
								Q = new RegExp('^' + M + '$'),
								K = {
									ID: new RegExp('^#(' + M + ')'),
									CLASS: new RegExp('^\\.(' + M + ')'),
									TAG: new RegExp('^(' + M + '|[*])'),
									ATTR: new RegExp('^' + R),
									PSEUDO: new RegExp('^' + q),
									CHILD: new RegExp(
										'^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
											H +
											'*(even|odd|(([+-]|)(\\d*)n|)' +
											H +
											'*(?:([+-]|)' +
											H +
											'*(\\d+)|))' +
											H +
											'*\\)|)',
										'i'
									),
									bool: new RegExp('^(?:' + L + ')$', 'i'),
									needsContext: new RegExp(
										'^' +
											H +
											'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
											H +
											'*((?:-\\d)?\\d*)' +
											H +
											'*\\)|)(?=[^-]|$)',
										'i'
									),
								},
								Y = /HTML$/i,
								X = /^(?:input|select|textarea|button)$/i,
								J = /^h\d$/i,
								G = /^[^{]+\{\s*\[native \w/,
								Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
								ee = /[+~]/,
								te = new RegExp(
									'\\\\[\\da-fA-F]{1,6}' + H + '?|\\\\([^\\r\\n\\f])',
									'g'
								),
								ne = function (e, t) {
									var n = '0x' + e.slice(1) - 65536;
									return (
										t ||
										(n < 0
											? String.fromCharCode(n + 65536)
											: String.fromCharCode(
													(n >> 10) | 55296,
													(1023 & n) | 56320
											  ))
									);
								},
								re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
								ie = function (e, t) {
									return t
										? '\0' === e
											? 'пїЅ'
											: e.slice(0, -1) +
											  '\\' +
											  e.charCodeAt(e.length - 1).toString(16) +
											  ' '
										: '\\' + e;
								},
								oe = function () {
									d();
								},
								ae = we(
									function (e) {
										return (
											true === e.disabled &&
											'fieldset' === e.nodeName.toLowerCase()
										);
									},
									{ dir: 'parentNode', next: 'legend' }
								);
							try {
								N.apply((A = I.call(_.childNodes)), _.childNodes),
									A[_.childNodes.length].nodeType;
							} catch (e) {
								N = {
									apply: A.length
										? function (e, t) {
												$.apply(e, I.call(t));
										  }
										: function (e, t) {
												for (var n = e.length, r = 0; (e[n++] = t[r++]); );
												e.length = n - 1;
										  },
								};
							}
							function se(e, t, r, i) {
								var o,
									s,
									c,
									u,
									f,
									h,
									v,
									b = t && t.ownerDocument,
									_ = t ? t.nodeType : 9;
								if (
									((r = r || []),
									'string' != typeof e ||
										!e ||
										(1 !== _ && 9 !== _ && 11 !== _))
								)
									return r;
								if (!i && (d(t), (t = t || p), m)) {
									if (11 !== _ && (f = Z.exec(e)))
										if ((o = f[1])) {
											if (9 === _) {
												if (!(c = t.getElementById(o))) return r;
												if (c.id === o) return r.push(c), r;
											} else if (
												b &&
												(c = b.getElementById(o)) &&
												y(t, c) &&
												c.id === o
											)
												return r.push(c), r;
										} else {
											if (f[2]) return N.apply(r, t.getElementsByTagName(e)), r;
											if (
												(o = f[3]) &&
												n.getElementsByClassName &&
												t.getElementsByClassName
											)
												return N.apply(r, t.getElementsByClassName(o)), r;
										}
									if (
										n.qsa &&
										!S[e + ' '] &&
										(!g || !g.test(e)) &&
										(1 !== _ || 'object' !== t.nodeName.toLowerCase())
									) {
										if (
											((v = e), (b = t), 1 === _ && (z.test(e) || U.test(e)))
										) {
											for (
												((b = (ee.test(e) && ve(t.parentNode)) || t) === t &&
													n.scope) ||
													((u = t.getAttribute('id'))
														? (u = u.replace(re, ie))
														: t.setAttribute('id', (u = w))),
													s = (h = a(e)).length;
												s--;

											)
												h[s] = (u ? '#' + u : ':scope') + ' ' + ye(h[s]);
											v = h.join(',');
										}
										try {
											return N.apply(r, b.querySelectorAll(v)), r;
										} catch (t) {
											S(e, true);
										} finally {
											u === w && t.removeAttribute('id');
										}
									}
								}
								return l(e.replace(F, '$1'), t, r, i);
							}
							function le() {
								var e = [];
								return function t(n, i) {
									return (
										e.push(n + ' ') > r.cacheLength && delete t[e.shift()],
										(t[n + ' '] = i)
									);
								};
							}
							function ce(e) {
								return (e[w] = true), e;
							}
							function ue(e) {
								var t = p.createElement('fieldset');
								try {
									return !!e(t);
								} catch (e) {
									return false;
								} finally {
									t.parentNode && t.parentNode.removeChild(t), (t = null);
								}
							}
							function fe(e, t) {
								for (var n = e.split('|'), i = n.length; i--; )
									r.attrHandle[n[i]] = t;
							}
							function de(e, t) {
								var n = t && e,
									r =
										n &&
										1 === e.nodeType &&
										1 === t.nodeType &&
										e.sourceIndex - t.sourceIndex;
								if (r) return r;
								if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
								return e ? 1 : -1;
							}
							function pe(e) {
								return function (t) {
									return 'input' === t.nodeName.toLowerCase() && t.type === e;
								};
							}
							function he(e) {
								return function (t) {
									var n = t.nodeName.toLowerCase();
									return ('input' === n || 'button' === n) && t.type === e;
								};
							}
							function me(e) {
								return function (t) {
									return 'form' in t
										? t.parentNode && false === t.disabled
											? 'label' in t
												? 'label' in t.parentNode
													? t.parentNode.disabled === e
													: t.disabled === e
												: t.isDisabled === e ||
												  (t.isDisabled !== !e && ae(t) === e)
											: t.disabled === e
										: 'label' in t && t.disabled === e;
								};
							}
							function ge(e) {
								return ce(function (t) {
									return (
										(t = +t),
										ce(function (n, r) {
											for (var i, o = e([], n.length, t), a = o.length; a--; )
												n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
										})
									);
								});
							}
							function ve(e) {
								return e && void 0 !== e.getElementsByTagName && e;
							}
							for (t in ((n = se.support = {}),
							(o = se.isXML =
								function (e) {
									var t = e && e.namespaceURI,
										n = e && (e.ownerDocument || e).documentElement;
									return !Y.test(t || (n && n.nodeName) || 'HTML');
								}),
							(d = se.setDocument =
								function (e) {
									var t,
										i,
										a = e ? e.ownerDocument || e : _;
									return a != p && 9 === a.nodeType && a.documentElement
										? ((h = (p = a).documentElement),
										  (m = !o(p)),
										  _ != p &&
												(i = p.defaultView) &&
												i.top !== i &&
												(i.addEventListener
													? i.addEventListener('unload', oe, false)
													: i.attachEvent && i.attachEvent('onunload', oe)),
										  (n.scope = ue(function (e) {
												return (
													h.appendChild(e).appendChild(p.createElement('div')),
													void 0 !== e.querySelectorAll &&
														!e.querySelectorAll(':scope fieldset div').length
												);
										  })),
										  (n.attributes = ue(function (e) {
												return (
													(e.className = 'i'), !e.getAttribute('className')
												);
										  })),
										  (n.getElementsByTagName = ue(function (e) {
												return (
													e.appendChild(p.createComment('')),
													!e.getElementsByTagName('*').length
												);
										  })),
										  (n.getElementsByClassName = G.test(
												p.getElementsByClassName
										  )),
										  (n.getById = ue(function (e) {
												return (
													(h.appendChild(e).id = w),
													!p.getElementsByName || !p.getElementsByName(w).length
												);
										  })),
										  n.getById
												? ((r.filter.ID = function (e) {
														var t = e.replace(te, ne);
														return function (e) {
															return e.getAttribute('id') === t;
														};
												  }),
												  (r.find.ID = function (e, t) {
														if (void 0 !== t.getElementById && m) {
															var n = t.getElementById(e);
															return n ? [n] : [];
														}
												  }))
												: ((r.filter.ID = function (e) {
														var t = e.replace(te, ne);
														return function (e) {
															var n =
																void 0 !== e.getAttributeNode &&
																e.getAttributeNode('id');
															return n && n.value === t;
														};
												  }),
												  (r.find.ID = function (e, t) {
														if (void 0 !== t.getElementById && m) {
															var n,
																r,
																i,
																o = t.getElementById(e);
															if (o) {
																if (
																	(n = o.getAttributeNode('id')) &&
																	n.value === e
																)
																	return [o];
																for (
																	i = t.getElementsByName(e), r = 0;
																	(o = i[r++]);

																)
																	if (
																		(n = o.getAttributeNode('id')) &&
																		n.value === e
																	)
																		return [o];
															}
															return [];
														}
												  })),
										  (r.find.TAG = n.getElementsByTagName
												? function (e, t) {
														return void 0 !== t.getElementsByTagName
															? t.getElementsByTagName(e)
															: n.qsa
															? t.querySelectorAll(e)
															: void 0;
												  }
												: function (e, t) {
														var n,
															r = [],
															i = 0,
															o = t.getElementsByTagName(e);
														if ('*' === e) {
															for (; (n = o[i++]); )
																1 === n.nodeType && r.push(n);
															return r;
														}
														return o;
												  }),
										  (r.find.CLASS =
												n.getElementsByClassName &&
												function (e, t) {
													if (void 0 !== t.getElementsByClassName && m)
														return t.getElementsByClassName(e);
												}),
										  (v = []),
										  (g = []),
										  (n.qsa = G.test(p.querySelectorAll)) &&
												(ue(function (e) {
													var t;
													(h.appendChild(e).innerHTML =
														"<a id='" +
														w +
														"'></a><select id='" +
														w +
														"-\r\\' msallowcapture=''><option selected=''></option></select>"),
														e.querySelectorAll("[msallowcapture^='']").length &&
															g.push('[*^$]=' + H + '*(?:\'\'|"")'),
														e.querySelectorAll('[selected]').length ||
															g.push('\\[' + H + '*(?:value|' + L + ')'),
														e.querySelectorAll('[id~=' + w + '-]').length ||
															g.push('~='),
														(t = p.createElement('input')).setAttribute(
															'name',
															''
														),
														e.appendChild(t),
														e.querySelectorAll("[name='']").length ||
															g.push(
																'\\[' +
																	H +
																	'*name' +
																	H +
																	'*=' +
																	H +
																	'*(?:\'\'|"")'
															),
														e.querySelectorAll(':checked').length ||
															g.push(':checked'),
														e.querySelectorAll('a#' + w + '+*').length ||
															g.push('.#.+[+~]'),
														e.querySelectorAll('\\\f'),
														g.push('[\\r\\n\\f]');
												}),
												ue(function (e) {
													e.innerHTML =
														"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
													var t = p.createElement('input');
													t.setAttribute('type', 'hidden'),
														e.appendChild(t).setAttribute('name', 'D'),
														e.querySelectorAll('[name=d]').length &&
															g.push('name' + H + '*[*^$|!~]?='),
														2 !== e.querySelectorAll(':enabled').length &&
															g.push(':enabled', ':disabled'),
														(h.appendChild(e).disabled = true),
														2 !== e.querySelectorAll(':disabled').length &&
															g.push(':enabled', ':disabled'),
														e.querySelectorAll('*,:x'),
														g.push(',.*:');
												})),
										  (n.matchesSelector = G.test(
												(b =
													h.matches ||
													h.webkitMatchesSelector ||
													h.mozMatchesSelector ||
													h.oMatchesSelector ||
													h.msMatchesSelector)
										  )) &&
												ue(function (e) {
													(n.disconnectedMatch = b.call(e, '*')),
														b.call(e, "[s!='']:x"),
														v.push('!=', q);
												}),
										  (g = g.length && new RegExp(g.join('|'))),
										  (v = v.length && new RegExp(v.join('|'))),
										  (t = G.test(h.compareDocumentPosition)),
										  (y =
												t || G.test(h.contains)
													? function (e, t) {
															var n = 9 === e.nodeType ? e.documentElement : e,
																r = t && t.parentNode;
															return (
																e === r ||
																!(
																	!r ||
																	1 !== r.nodeType ||
																	!(n.contains
																		? n.contains(r)
																		: e.compareDocumentPosition &&
																		  16 & e.compareDocumentPosition(r))
																)
															);
													  }
													: function (e, t) {
															if (t)
																for (; (t = t.parentNode); )
																	if (t === e) return true;
															return false;
													  }),
										  (j = t
												? function (e, t) {
														if (e === t) return (f = true), 0;
														var r =
															!e.compareDocumentPosition -
															!t.compareDocumentPosition;
														return (
															r ||
															(1 &
																(r =
																	(e.ownerDocument || e) ==
																	(t.ownerDocument || t)
																		? e.compareDocumentPosition(t)
																		: 1) ||
															(!n.sortDetached &&
																t.compareDocumentPosition(e) === r)
																? e == p || (e.ownerDocument == _ && y(_, e))
																	? -1
																	: t == p || (t.ownerDocument == _ && y(_, t))
																	? 1
																	: u
																	? P(u, e) - P(u, t)
																	: 0
																: 4 & r
																? -1
																: 1)
														);
												  }
												: function (e, t) {
														if (e === t) return (f = true), 0;
														var n,
															r = 0,
															i = e.parentNode,
															o = t.parentNode,
															a = [e],
															s = [t];
														if (!i || !o)
															return e == p
																? -1
																: t == p
																? 1
																: i
																? -1
																: o
																? 1
																: u
																? P(u, e) - P(u, t)
																: 0;
														if (i === o) return de(e, t);
														for (n = e; (n = n.parentNode); ) a.unshift(n);
														for (n = t; (n = n.parentNode); ) s.unshift(n);
														for (; a[r] === s[r]; ) r++;
														return r
															? de(a[r], s[r])
															: a[r] == _
															? -1
															: s[r] == _
															? 1
															: 0;
												  }),
										  p)
										: p;
								}),
							(se.matches = function (e, t) {
								return se(e, null, null, t);
							}),
							(se.matchesSelector = function (e, t) {
								if (
									(d(e),
									n.matchesSelector &&
										m &&
										!S[t + ' '] &&
										(!v || !v.test(t)) &&
										(!g || !g.test(t)))
								)
									try {
										var r = b.call(e, t);
										if (
											r ||
											n.disconnectedMatch ||
											(e.document && 11 !== e.document.nodeType)
										)
											return r;
									} catch (e) {
										S(t, true);
									}
								return se(t, p, null, [e]).length > 0;
							}),
							(se.contains = function (e, t) {
								return (e.ownerDocument || e) != p && d(e), y(e, t);
							}),
							(se.attr = function (e, t) {
								(e.ownerDocument || e) != p && d(e);
								var i = r.attrHandle[t.toLowerCase()],
									o =
										i && D.call(r.attrHandle, t.toLowerCase())
											? i(e, t, !m)
											: void 0;
								return void 0 !== o
									? o
									: n.attributes || !m
									? e.getAttribute(t)
									: (o = e.getAttributeNode(t)) && o.specified
									? o.value
									: null;
							}),
							(se.escape = function (e) {
								return (e + '').replace(re, ie);
							}),
							(se.error = function (e) {
								throw new Error('Syntax error, unrecognized expression: ' + e);
							}),
							(se.uniqueSort = function (e) {
								var t,
									r = [],
									i = 0,
									o = 0;
								if (
									((f = !n.detectDuplicates),
									(u = !n.sortStable && e.slice(0)),
									e.sort(j),
									f)
								) {
									for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
									for (; i--; ) e.splice(r[i], 1);
								}
								return (u = null), e;
							}),
							(i = se.getText =
								function (e) {
									var t,
										n = '',
										r = 0,
										o = e.nodeType;
									if (o) {
										if (1 === o || 9 === o || 11 === o) {
											if ('string' == typeof e.textContent)
												return e.textContent;
											for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
										} else if (3 === o || 4 === o) return e.nodeValue;
									} else for (; (t = e[r++]); ) n += i(t);
									return n;
								}),
							(r = se.selectors =
								{
									cacheLength: 50,
									createPseudo: ce,
									match: K,
									attrHandle: {},
									find: {},
									relative: {
										'>': { dir: 'parentNode', first: true },
										' ': { dir: 'parentNode' },
										'+': { dir: 'previousSibling', first: true },
										'~': { dir: 'previousSibling' },
									},
									preFilter: {
										ATTR: function (e) {
											return (
												(e[1] = e[1].replace(te, ne)),
												(e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
												'~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
												e.slice(0, 4)
											);
										},
										CHILD: function (e) {
											return (
												(e[1] = e[1].toLowerCase()),
												'nth' === e[1].slice(0, 3)
													? (e[3] || se.error(e[0]),
													  (e[4] = +(e[4]
															? e[5] + (e[6] || 1)
															: 2 * ('even' === e[3] || 'odd' === e[3]))),
													  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
													: e[3] && se.error(e[0]),
												e
											);
										},
										PSEUDO: function (e) {
											var t,
												n = !e[6] && e[2];
											return K.CHILD.test(e[0])
												? null
												: (e[3]
														? (e[2] = e[4] || e[5] || '')
														: n &&
														  V.test(n) &&
														  (t = a(n, true)) &&
														  (t = n.indexOf(')', n.length - t) - n.length) &&
														  ((e[0] = e[0].slice(0, t)),
														  (e[2] = n.slice(0, t))),
												  e.slice(0, 3));
										},
									},
									filter: {
										TAG: function (e) {
											var t = e.replace(te, ne).toLowerCase();
											return '*' === e
												? function () {
														return true;
												  }
												: function (e) {
														return e.nodeName && e.nodeName.toLowerCase() === t;
												  };
										},
										CLASS: function (e) {
											var t = T[e + ' '];
											return (
												t ||
												((t = new RegExp(
													'(^|' + H + ')' + e + '(' + H + '|$)'
												)) &&
													T(e, function (e) {
														return t.test(
															('string' == typeof e.className && e.className) ||
																(void 0 !== e.getAttribute &&
																	e.getAttribute('class')) ||
																''
														);
													}))
											);
										},
										ATTR: function (e, t, n) {
											return function (r) {
												var i = se.attr(r, e);
												return null == i
													? '!=' === t
													: !t ||
															((i += ''),
															'=' === t
																? i === n
																: '!=' === t
																? i !== n
																: '^=' === t
																? n && 0 === i.indexOf(n)
																: '*=' === t
																? n && i.indexOf(n) > -1
																: '$=' === t
																? n && i.slice(-n.length) === n
																: '~=' === t
																? (' ' + i.replace(B, ' ') + ' ').indexOf(n) >
																  -1
																: '|=' === t &&
																  (i === n ||
																		i.slice(0, n.length + 1) === n + '-'));
											};
										},
										CHILD: function (e, t, n, r, i) {
											var o = 'nth' !== e.slice(0, 3),
												a = 'last' !== e.slice(-4),
												s = 'of-type' === t;
											return 1 === r && 0 === i
												? function (e) {
														return !!e.parentNode;
												  }
												: function (t, n, l) {
														var c,
															u,
															f,
															d,
															p,
															h,
															m = o !== a ? 'nextSibling' : 'previousSibling',
															g = t.parentNode,
															v = s && t.nodeName.toLowerCase(),
															b = !l && !s,
															y = false;
														if (g) {
															if (o) {
																for (; m; ) {
																	for (d = t; (d = d[m]); )
																		if (
																			s
																				? d.nodeName.toLowerCase() === v
																				: 1 === d.nodeType
																		)
																			return false;
																	h = m = 'only' === e && !h && 'nextSibling';
																}
																return true;
															}
															if (
																((h = [a ? g.firstChild : g.lastChild]), a && b)
															) {
																for (
																	y =
																		(p =
																			(c =
																				(u =
																					(f = (d = g)[w] || (d[w] = {}))[
																						d.uniqueID
																					] || (f[d.uniqueID] = {}))[e] ||
																				[])[0] === x && c[1]) && c[2],
																		d = p && g.childNodes[p];
																	(d =
																		(++p && d && d[m]) ||
																		(y = p = 0) ||
																		h.pop());

																)
																	if (1 === d.nodeType && ++y && d === t) {
																		u[e] = [x, p, y];
																		break;
																	}
															} else if (
																(b &&
																	(y = p =
																		(c =
																			(u =
																				(f = (d = t)[w] || (d[w] = {}))[
																					d.uniqueID
																				] || (f[d.uniqueID] = {}))[e] ||
																			[])[0] === x && c[1]),
																false === y)
															)
																for (
																	;
																	(d =
																		(++p && d && d[m]) ||
																		(y = p = 0) ||
																		h.pop()) &&
																	((s
																		? d.nodeName.toLowerCase() !== v
																		: 1 !== d.nodeType) ||
																		!++y ||
																		(b &&
																			((u =
																				(f = d[w] || (d[w] = {}))[d.uniqueID] ||
																				(f[d.uniqueID] = {}))[e] = [x, y]),
																		d !== t));

																);
															return (
																(y -= i) === r || (y % r == 0 && y / r >= 0)
															);
														}
												  };
										},
										PSEUDO: function (e, t) {
											var n,
												i =
													r.pseudos[e] ||
													r.setFilters[e.toLowerCase()] ||
													se.error('unsupported pseudo: ' + e);
											return i[w]
												? i(t)
												: i.length > 1
												? ((n = [e, e, '', t]),
												  r.setFilters.hasOwnProperty(e.toLowerCase())
														? ce(function (e, n) {
																for (var r, o = i(e, t), a = o.length; a--; )
																	e[(r = P(e, o[a]))] = !(n[r] = o[a]);
														  })
														: function (e) {
																return i(e, 0, n);
														  })
												: i;
										},
									},
									pseudos: {
										not: ce(function (e) {
											var t = [],
												n = [],
												r = s(e.replace(F, '$1'));
											return r[w]
												? ce(function (e, t, n, i) {
														for (
															var o, a = r(e, null, i, []), s = e.length;
															s--;

														)
															(o = a[s]) && (e[s] = !(t[s] = o));
												  })
												: function (e, i, o) {
														return (
															(t[0] = e),
															r(t, null, o, n),
															(t[0] = null),
															!n.pop()
														);
												  };
										}),
										has: ce(function (e) {
											return function (t) {
												return se(e, t).length > 0;
											};
										}),
										contains: ce(function (e) {
											return (
												(e = e.replace(te, ne)),
												function (t) {
													return (t.textContent || i(t)).indexOf(e) > -1;
												}
											);
										}),
										lang: ce(function (e) {
											return (
												Q.test(e || '') || se.error('unsupported lang: ' + e),
												(e = e.replace(te, ne).toLowerCase()),
												function (t) {
													var n;
													do {
														if (
															(n = m
																? t.lang
																: t.getAttribute('xml:lang') ||
																  t.getAttribute('lang'))
														)
															return (
																(n = n.toLowerCase()) === e ||
																0 === n.indexOf(e + '-')
															);
													} while ((t = t.parentNode) && 1 === t.nodeType);
													return false;
												}
											);
										}),
										target: function (t) {
											var n = e.location && e.location.hash;
											return n && n.slice(1) === t.id;
										},
										root: function (e) {
											return e === h;
										},
										focus: function (e) {
											return (
												e === p.activeElement &&
												(!p.hasFocus || p.hasFocus()) &&
												!!(e.type || e.href || ~e.tabIndex)
											);
										},
										enabled: me(false),
										disabled: me(true),
										checked: function (e) {
											var t = e.nodeName.toLowerCase();
											return (
												('input' === t && !!e.checked) ||
												('option' === t && !!e.selected)
											);
										},
										selected: function (e) {
											return (
												e.parentNode && e.parentNode.selectedIndex,
												true === e.selected
											);
										},
										empty: function (e) {
											for (e = e.firstChild; e; e = e.nextSibling)
												if (e.nodeType < 6) return false;
											return true;
										},
										parent: function (e) {
											return !r.pseudos.empty(e);
										},
										header: function (e) {
											return J.test(e.nodeName);
										},
										input: function (e) {
											return X.test(e.nodeName);
										},
										button: function (e) {
											var t = e.nodeName.toLowerCase();
											return (
												('input' === t && 'button' === e.type) || 'button' === t
											);
										},
										text: function (e) {
											var t;
											return (
												'input' === e.nodeName.toLowerCase() &&
												'text' === e.type &&
												(null == (t = e.getAttribute('type')) ||
													'text' === t.toLowerCase())
											);
										},
										first: ge(function () {
											return [0];
										}),
										last: ge(function (e, t) {
											return [t - 1];
										}),
										eq: ge(function (e, t, n) {
											return [n < 0 ? n + t : n];
										}),
										even: ge(function (e, t) {
											for (var n = 0; n < t; n += 2) e.push(n);
											return e;
										}),
										odd: ge(function (e, t) {
											for (var n = 1; n < t; n += 2) e.push(n);
											return e;
										}),
										lt: ge(function (e, t, n) {
											for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
												e.push(r);
											return e;
										}),
										gt: ge(function (e, t, n) {
											for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
											return e;
										}),
									},
								}),
							(r.pseudos.nth = r.pseudos.eq),
							{
								radio: true,
								checkbox: true,
								file: true,
								password: true,
								image: true,
							}))
								r.pseudos[t] = pe(t);
							for (t in { submit: true, reset: true }) r.pseudos[t] = he(t);
							function be() {}
							function ye(e) {
								for (var t = 0, n = e.length, r = ''; t < n; t++)
									r += e[t].value;
								return r;
							}
							function we(e, t, n) {
								var r = t.dir,
									i = t.next,
									o = i || r,
									a = n && 'parentNode' === o,
									s = C++;
								return t.first
									? function (t, n, i) {
											for (; (t = t[r]); )
												if (1 === t.nodeType || a) return e(t, n, i);
											return false;
									  }
									: function (t, n, l) {
											var c,
												u,
												f,
												d = [x, s];
											if (l) {
												for (; (t = t[r]); )
													if ((1 === t.nodeType || a) && e(t, n, l))
														return true;
											} else
												for (; (t = t[r]); )
													if (1 === t.nodeType || a)
														if (
															((u =
																(f = t[w] || (t[w] = {}))[t.uniqueID] ||
																(f[t.uniqueID] = {})),
															i && i === t.nodeName.toLowerCase())
														)
															t = t[r] || t;
														else {
															if ((c = u[o]) && c[0] === x && c[1] === s)
																return (d[2] = c[2]);
															if (((u[o] = d), (d[2] = e(t, n, l))))
																return true;
														}
											return false;
									  };
							}
							function _e(e) {
								return e.length > 1
									? function (t, n, r) {
											for (var i = e.length; i--; )
												if (!e[i](t, n, r)) return false;
											return true;
									  }
									: e[0];
							}
							function xe(e, t, n, r, i) {
								for (
									var o, a = [], s = 0, l = e.length, c = null != t;
									s < l;
									s++
								)
									(o = e[s]) &&
										((n && !n(o, r, i)) || (a.push(o), c && t.push(s)));
								return a;
							}
							function Ce(e, t, n, r, i, o) {
								return (
									r && !r[w] && (r = Ce(r)),
									i && !i[w] && (i = Ce(i, o)),
									ce(function (o, a, s, l) {
										var c,
											u,
											f,
											d = [],
											p = [],
											h = a.length,
											m =
												o ||
												(function (e, t, n) {
													for (var r = 0, i = t.length; r < i; r++)
														se(e, t[r], n);
													return n;
												})(t || '*', s.nodeType ? [s] : s, []),
											g = !e || (!o && t) ? m : xe(m, d, e, s, l),
											v = n ? (i || (o ? e : h || r) ? [] : a) : g;
										if ((n && n(g, v, s, l), r))
											for (c = xe(v, p), r(c, [], s, l), u = c.length; u--; )
												(f = c[u]) && (v[p[u]] = !(g[p[u]] = f));
										if (o) {
											if (i || e) {
												if (i) {
													for (c = [], u = v.length; u--; )
														(f = v[u]) && c.push((g[u] = f));
													i(null, (v = []), c, l);
												}
												for (u = v.length; u--; )
													(f = v[u]) &&
														(c = i ? P(o, f) : d[u]) > -1 &&
														(o[c] = !(a[c] = f));
											}
										} else (v = xe(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, l) : N.apply(a, v);
									})
								);
							}
							function Te(e) {
								for (
									var t,
										n,
										i,
										o = e.length,
										a = r.relative[e[0].type],
										s = a || r.relative[' '],
										l = a ? 1 : 0,
										u = we(
											function (e) {
												return e === t;
											},
											s,
											true
										),
										f = we(
											function (e) {
												return P(t, e) > -1;
											},
											s,
											true
										),
										d = [
											function (e, n, r) {
												var i =
													(!a && (r || n !== c)) ||
													((t = n).nodeType ? u(e, n, r) : f(e, n, r));
												return (t = null), i;
											},
										];
									l < o;
									l++
								)
									if ((n = r.relative[e[l].type])) d = [we(_e(d), n)];
									else {
										if (
											(n = r.filter[e[l].type].apply(null, e[l].matches))[w]
										) {
											for (i = ++l; i < o && !r.relative[e[i].type]; i++);
											return Ce(
												l > 1 && _e(d),
												l > 1 &&
													ye(
														e.slice(0, l - 1).concat({
															value: ' ' === e[l - 2].type ? '*' : '',
														})
													).replace(F, '$1'),
												n,
												l < i && Te(e.slice(l, i)),
												i < o && Te((e = e.slice(i))),
												i < o && ye(e)
											);
										}
										d.push(n);
									}
								return _e(d);
							}
							return (
								(be.prototype = r.filters = r.pseudos),
								(r.setFilters = new be()),
								(a = se.tokenize =
									function (e, t) {
										var n,
											i,
											o,
											a,
											s,
											l,
											c,
											u = E[e + ' '];
										if (u) return t ? 0 : u.slice(0);
										for (s = e, l = [], c = r.preFilter; s; ) {
											for (a in ((n && !(i = W.exec(s))) ||
												(i && (s = s.slice(i[0].length) || s),
												l.push((o = []))),
											(n = false),
											(i = U.exec(s)) &&
												((n = i.shift()),
												o.push({ value: n, type: i[0].replace(F, ' ') }),
												(s = s.slice(n.length))),
											r.filter))
												!(i = K[a].exec(s)) ||
													(c[a] && !(i = c[a](i))) ||
													((n = i.shift()),
													o.push({ value: n, type: a, matches: i }),
													(s = s.slice(n.length)));
											if (!n) break;
										}
										return t ? s.length : s ? se.error(e) : E(e, l).slice(0);
									}),
								(s = se.compile =
									function (e, t) {
										var n,
											i = [],
											o = [],
											s = k[e + ' '];
										if (!s) {
											for (t || (t = a(e)), n = t.length; n--; )
												(s = Te(t[n]))[w] ? i.push(s) : o.push(s);
											(s = k(
												e,
												(function (e, t) {
													var n = t.length > 0,
														i = e.length > 0,
														o = function (o, a, s, l, u) {
															var f,
																h,
																g,
																v = 0,
																b = '0',
																y = o && [],
																w = [],
																_ = c,
																C = o || (i && r.find.TAG('*', u)),
																T = (x += null == _ ? 1 : Math.random() || 0.1),
																E = C.length;
															for (
																u && (c = a == p || a || u);
																b !== E && null != (f = C[b]);
																b++
															) {
																if (i && f) {
																	for (
																		h = 0,
																			a ||
																				f.ownerDocument == p ||
																				(d(f), (s = !m));
																		(g = e[h++]);

																	)
																		if (g(f, a || p, s)) {
																			l.push(f);
																			break;
																		}
																	u && (x = T);
																}
																n && ((f = !g && f) && v--, o && y.push(f));
															}
															if (((v += b), n && b !== v)) {
																for (h = 0; (g = t[h++]); ) g(y, w, a, s);
																if (o) {
																	if (v > 0)
																		for (; b--; )
																			y[b] || w[b] || (w[b] = O.call(l));
																	w = xe(w);
																}
																N.apply(l, w),
																	u &&
																		!o &&
																		w.length > 0 &&
																		v + t.length > 1 &&
																		se.uniqueSort(l);
															}
															return u && ((x = T), (c = _)), y;
														};
													return n ? ce(o) : o;
												})(o, i)
											)),
												(s.selector = e);
										}
										return s;
									}),
								(l = se.select =
									function (e, t, n, i) {
										var o,
											l,
											c,
											u,
											f,
											d = 'function' == typeof e && e,
											p = !i && a((e = d.selector || e));
										if (((n = n || []), 1 === p.length)) {
											if (
												(l = p[0] = p[0].slice(0)).length > 2 &&
												'ID' === (c = l[0]).type &&
												9 === t.nodeType &&
												m &&
												r.relative[l[1].type]
											) {
												if (
													!(t = (r.find.ID(c.matches[0].replace(te, ne), t) ||
														[])[0])
												)
													return n;
												d && (t = t.parentNode),
													(e = e.slice(l.shift().value.length));
											}
											for (
												o = K.needsContext.test(e) ? 0 : l.length;
												o-- && ((c = l[o]), !r.relative[(u = c.type)]);

											)
												if (
													(f = r.find[u]) &&
													(i = f(
														c.matches[0].replace(te, ne),
														(ee.test(l[0].type) && ve(t.parentNode)) || t
													))
												) {
													if ((l.splice(o, 1), !(e = i.length && ye(l))))
														return N.apply(n, i), n;
													break;
												}
										}
										return (
											(d || s(e, p))(
												i,
												t,
												!m,
												n,
												!t || (ee.test(e) && ve(t.parentNode)) || t
											),
											n
										);
									}),
								(n.sortStable = w.split('').sort(j).join('') === w),
								(n.detectDuplicates = !!f),
								d(),
								(n.sortDetached = ue(function (e) {
									return (
										1 & e.compareDocumentPosition(p.createElement('fieldset'))
									);
								})),
								ue(function (e) {
									return (
										(e.innerHTML = "<a href='#'></a>"),
										'#' === e.firstChild.getAttribute('href')
									);
								}) ||
									fe('type|href|height|width', function (e, t, n) {
										if (!n)
											return e.getAttribute(
												t,
												'type' === t.toLowerCase() ? 1 : 2
											);
									}),
								(n.attributes &&
									ue(function (e) {
										return (
											(e.innerHTML = '<input/>'),
											e.firstChild.setAttribute('value', ''),
											'' === e.firstChild.getAttribute('value')
										);
									})) ||
									fe('value', function (e, t, n) {
										if (!n && 'input' === e.nodeName.toLowerCase())
											return e.defaultValue;
									}),
								ue(function (e) {
									return null == e.getAttribute('disabled');
								}) ||
									fe(L, function (e, t, n) {
										var r;
										if (!n)
											return true === e[t]
												? t.toLowerCase()
												: (r = e.getAttributeNode(t)) && r.specified
												? r.value
												: null;
									}),
								se
							);
						})(r);
					(T.find = k),
						(T.expr = k.selectors),
						(T.expr[':'] = T.expr.pseudos),
						(T.uniqueSort = T.unique = k.uniqueSort),
						(T.text = k.getText),
						(T.isXMLDoc = k.isXML),
						(T.contains = k.contains),
						(T.escapeSelector = k.escape);
					var S = function (e, t, n) {
							for (
								var r = [], i = void 0 !== n;
								(e = e[t]) && 9 !== e.nodeType;

							)
								if (1 === e.nodeType) {
									if (i && T(e).is(n)) break;
									r.push(e);
								}
							return r;
						},
						j = function (e, t) {
							for (var n = []; e; e = e.nextSibling)
								1 === e.nodeType && e !== t && n.push(e);
							return n;
						},
						D = T.expr.match.needsContext;
					function A(e, t) {
						return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
					}
					var O =
						/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
					function $(e, t, n) {
						return v(t)
							? T.grep(e, function (e, r) {
									return !!t.call(e, r, e) !== n;
							  })
							: t.nodeType
							? T.grep(e, function (e) {
									return (e === t) !== n;
							  })
							: 'string' != typeof t
							? T.grep(e, function (e) {
									return u.call(t, e) > -1 !== n;
							  })
							: T.filter(t, e, n);
					}
					(T.filter = function (e, t, n) {
						var r = t[0];
						return (
							n && (e = ':not(' + e + ')'),
							1 === t.length && 1 === r.nodeType
								? T.find.matchesSelector(r, e)
									? [r]
									: []
								: T.find.matches(
										e,
										T.grep(t, function (e) {
											return 1 === e.nodeType;
										})
								  )
						);
					}),
						T.fn.extend({
							find: function (e) {
								var t,
									n,
									r = this.length,
									i = this;
								if ('string' != typeof e)
									return this.pushStack(
										T(e).filter(function () {
											for (t = 0; t < r; t++)
												if (T.contains(i[t], this)) return true;
										})
									);
								for (n = this.pushStack([]), t = 0; t < r; t++)
									T.find(e, i[t], n);
								return r > 1 ? T.uniqueSort(n) : n;
							},
							filter: function (e) {
								return this.pushStack($(this, e || [], false));
							},
							not: function (e) {
								return this.pushStack($(this, e || [], true));
							},
							is: function (e) {
								return !!$(
									this,
									'string' == typeof e && D.test(e) ? T(e) : e || [],
									false
								).length;
							},
						});
					var N,
						I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
					((T.fn.init = function (e, t, n) {
						var r, i;
						if (!e) return this;
						if (((n = n || N), 'string' == typeof e)) {
							if (
								!(r =
									'<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
										? [null, e, null]
										: I.exec(e)) ||
								(!r[1] && t)
							)
								return !t || t.jquery
									? (t || n).find(e)
									: this.constructor(t).find(e);
							if (r[1]) {
								if (
									((t = t instanceof T ? t[0] : t),
									T.merge(
										this,
										T.parseHTML(
											r[1],
											t && t.nodeType ? t.ownerDocument || t : y,
											true
										)
									),
									O.test(r[1]) && T.isPlainObject(t))
								)
									for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
								return this;
							}
							return (
								(i = y.getElementById(r[2])) &&
									((this[0] = i), (this.length = 1)),
								this
							);
						}
						return e.nodeType
							? ((this[0] = e), (this.length = 1), this)
							: v(e)
							? void 0 !== n.ready
								? n.ready(e)
								: e(T)
							: T.makeArray(e, this);
					}).prototype = T.fn),
						(N = T(y));
					var P = /^(?:parents|prev(?:Until|All))/,
						L = { children: true, contents: true, next: true, prev: true };
					function H(e, t) {
						for (; (e = e[t]) && 1 !== e.nodeType; );
						return e;
					}
					T.fn.extend({
						has: function (e) {
							var t = T(e, this),
								n = t.length;
							return this.filter(function () {
								for (var e = 0; e < n; e++)
									if (T.contains(this, t[e])) return true;
							});
						},
						closest: function (e, t) {
							var n,
								r = 0,
								i = this.length,
								o = [],
								a = 'string' != typeof e && T(e);
							if (!D.test(e))
								for (; r < i; r++)
									for (n = this[r]; n && n !== t; n = n.parentNode)
										if (
											n.nodeType < 11 &&
											(a
												? a.index(n) > -1
												: 1 === n.nodeType && T.find.matchesSelector(n, e))
										) {
											o.push(n);
											break;
										}
							return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
						},
						index: function (e) {
							return e
								? 'string' == typeof e
									? u.call(T(e), this[0])
									: u.call(this, e.jquery ? e[0] : e)
								: this[0] && this[0].parentNode
								? this.first().prevAll().length
								: -1;
						},
						add: function (e, t) {
							return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
						},
						addBack: function (e) {
							return this.add(
								null == e ? this.prevObject : this.prevObject.filter(e)
							);
						},
					}),
						T.each(
							{
								parent: function (e) {
									var t = e.parentNode;
									return t && 11 !== t.nodeType ? t : null;
								},
								parents: function (e) {
									return S(e, 'parentNode');
								},
								parentsUntil: function (e, t, n) {
									return S(e, 'parentNode', n);
								},
								next: function (e) {
									return H(e, 'nextSibling');
								},
								prev: function (e) {
									return H(e, 'previousSibling');
								},
								nextAll: function (e) {
									return S(e, 'nextSibling');
								},
								prevAll: function (e) {
									return S(e, 'previousSibling');
								},
								nextUntil: function (e, t, n) {
									return S(e, 'nextSibling', n);
								},
								prevUntil: function (e, t, n) {
									return S(e, 'previousSibling', n);
								},
								siblings: function (e) {
									return j((e.parentNode || {}).firstChild, e);
								},
								children: function (e) {
									return j(e.firstChild);
								},
								contents: function (e) {
									return null != e.contentDocument && a(e.contentDocument)
										? e.contentDocument
										: (A(e, 'template') && (e = e.content || e),
										  T.merge([], e.childNodes));
								},
							},
							function (e, t) {
								T.fn[e] = function (n, r) {
									var i = T.map(this, t, n);
									return (
										'Until' !== e.slice(-5) && (r = n),
										r && 'string' == typeof r && (i = T.filter(r, i)),
										this.length > 1 &&
											(L[e] || T.uniqueSort(i), P.test(e) && i.reverse()),
										this.pushStack(i)
									);
								};
							}
						);
					var M = /[^\x20\t\r\n\f]+/g;
					function R(e) {
						return e;
					}
					function q(e) {
						throw e;
					}
					function B(e, t, n, r) {
						var i;
						try {
							e && v((i = e.promise))
								? i.call(e).done(t).fail(n)
								: e && v((i = e.then))
								? i.call(e, t, n)
								: t.apply(void 0, [e].slice(r));
						} catch (e) {
							n.apply(void 0, [e]);
						}
					}
					(T.Callbacks = function (e) {
						e =
							'string' == typeof e
								? (function (e) {
										var t = {};
										return (
											T.each(e.match(M) || [], function (e, n) {
												t[n] = true;
											}),
											t
										);
								  })(e)
								: T.extend({}, e);
						var t,
							n,
							r,
							i,
							o = [],
							a = [],
							s = -1,
							l = function () {
								for (i = i || e.once, r = t = true; a.length; s = -1)
									for (n = a.shift(); ++s < o.length; )
										false === o[s].apply(n[0], n[1]) &&
											e.stopOnFalse &&
											((s = o.length), (n = false));
								e.memory || (n = false), (t = false), i && (o = n ? [] : '');
							},
							c = {
								add: function () {
									return (
										o &&
											(n && !t && ((s = o.length - 1), a.push(n)),
											(function t(n) {
												T.each(n, function (n, r) {
													v(r)
														? (e.unique && c.has(r)) || o.push(r)
														: r && r.length && 'string' !== x(r) && t(r);
												});
											})(arguments),
											n && !t && l()),
										this
									);
								},
								remove: function () {
									return (
										T.each(arguments, function (e, t) {
											for (var n; (n = T.inArray(t, o, n)) > -1; )
												o.splice(n, 1), n <= s && s--;
										}),
										this
									);
								},
								has: function (e) {
									return e ? T.inArray(e, o) > -1 : o.length > 0;
								},
								empty: function () {
									return o && (o = []), this;
								},
								disable: function () {
									return (i = a = []), (o = n = ''), this;
								},
								disabled: function () {
									return !o;
								},
								lock: function () {
									return (i = a = []), n || t || (o = n = ''), this;
								},
								locked: function () {
									return !!i;
								},
								fireWith: function (e, n) {
									return (
										i ||
											((n = [e, (n = n || []).slice ? n.slice() : n]),
											a.push(n),
											t || l()),
										this
									);
								},
								fire: function () {
									return c.fireWith(this, arguments), this;
								},
								fired: function () {
									return !!r;
								},
							};
						return c;
					}),
						T.extend({
							Deferred: function (e) {
								var t = [
										[
											'notify',
											'progress',
											T.Callbacks('memory'),
											T.Callbacks('memory'),
											2,
										],
										[
											'resolve',
											'done',
											T.Callbacks('once memory'),
											T.Callbacks('once memory'),
											0,
											'resolved',
										],
										[
											'reject',
											'fail',
											T.Callbacks('once memory'),
											T.Callbacks('once memory'),
											1,
											'rejected',
										],
									],
									n = 'pending',
									i = {
										state: function () {
											return n;
										},
										always: function () {
											return o.done(arguments).fail(arguments), this;
										},
										catch: function (e) {
											return i.then(null, e);
										},
										pipe: function () {
											var e = arguments;
											return T.Deferred(function (n) {
												T.each(t, function (t, r) {
													var i = v(e[r[4]]) && e[r[4]];
													o[r[1]](function () {
														var e = i && i.apply(this, arguments);
														e && v(e.promise)
															? e
																	.promise()
																	.progress(n.notify)
																	.done(n.resolve)
																	.fail(n.reject)
															: n[r[0] + 'With'](this, i ? [e] : arguments);
													});
												}),
													(e = null);
											}).promise();
										},
										then: function (e, n, i) {
											var o = 0;
											function a(e, t, n, i) {
												return function () {
													var s = this,
														l = arguments,
														c = function () {
															var r, c;
															if (!(e < o)) {
																if ((r = n.apply(s, l)) === t.promise())
																	throw new TypeError(
																		'Thenable self-resolution'
																	);
																(c =
																	r &&
																	('object' == typeof r ||
																		'function' == typeof r) &&
																	r.then),
																	v(c)
																		? i
																			? c.call(r, a(o, t, R, i), a(o, t, q, i))
																			: (o++,
																			  c.call(
																					r,
																					a(o, t, R, i),
																					a(o, t, q, i),
																					a(o, t, R, t.notifyWith)
																			  ))
																		: (n !== R && ((s = void 0), (l = [r])),
																		  (i || t.resolveWith)(s, l));
															}
														},
														u = i
															? c
															: function () {
																	try {
																		c();
																	} catch (r) {
																		T.Deferred.exceptionHook &&
																			T.Deferred.exceptionHook(r, u.stackTrace),
																			e + 1 >= o &&
																				(n !== q && ((s = void 0), (l = [r])),
																				t.rejectWith(s, l));
																	}
															  };
													e
														? u()
														: (T.Deferred.getStackHook &&
																(u.stackTrace = T.Deferred.getStackHook()),
														  r.setTimeout(u));
												};
											}
											return T.Deferred(function (r) {
												t[0][3].add(a(0, r, v(i) ? i : R, r.notifyWith)),
													t[1][3].add(a(0, r, v(e) ? e : R)),
													t[2][3].add(a(0, r, v(n) ? n : q));
											}).promise();
										},
										promise: function (e) {
											return null != e ? T.extend(e, i) : i;
										},
									},
									o = {};
								return (
									T.each(t, function (e, r) {
										var a = r[2],
											s = r[5];
										(i[r[1]] = a.add),
											s &&
												a.add(
													function () {
														n = s;
													},
													t[3 - e][2].disable,
													t[3 - e][3].disable,
													t[0][2].lock,
													t[0][3].lock
												),
											a.add(r[3].fire),
											(o[r[0]] = function () {
												return (
													o[r[0] + 'With'](
														this === o ? void 0 : this,
														arguments
													),
													this
												);
											}),
											(o[r[0] + 'With'] = a.fireWith);
									}),
									i.promise(o),
									e && e.call(o, o),
									o
								);
							},
							when: function (e) {
								var t = arguments.length,
									n = t,
									r = Array(n),
									i = s.call(arguments),
									o = T.Deferred(),
									a = function (e) {
										return function (n) {
											(r[e] = this),
												(i[e] = arguments.length > 1 ? s.call(arguments) : n),
												--t || o.resolveWith(r, i);
										};
									};
								if (
									t <= 1 &&
									(B(e, o.done(a(n)).resolve, o.reject, !t),
									'pending' === o.state() || v(i[n] && i[n].then))
								)
									return o.then();
								for (; n--; ) B(i[n], a(n), o.reject);
								return o.promise();
							},
						});
					var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
					(T.Deferred.exceptionHook = function (e, t) {
						r.console &&
							r.console.warn &&
							e &&
							F.test(e.name) &&
							r.console.warn(
								'jQuery.Deferred exception: ' + e.message,
								e.stack,
								t
							);
					}),
						(T.readyException = function (e) {
							r.setTimeout(function () {
								throw e;
							});
						});
					var W = T.Deferred();
					function U() {
						y.removeEventListener('DOMContentLoaded', U),
							r.removeEventListener('load', U),
							T.ready();
					}
					(T.fn.ready = function (e) {
						return (
							W.then(e).catch(function (e) {
								T.readyException(e);
							}),
							this
						);
					}),
						T.extend({
							isReady: false,
							readyWait: 1,
							ready: function (e) {
								(true === e ? --T.readyWait : T.isReady) ||
									((T.isReady = true),
									(true !== e && --T.readyWait > 0) || W.resolveWith(y, [T]));
							},
						}),
						(T.ready.then = W.then),
						'complete' === y.readyState ||
						('loading' !== y.readyState && !y.documentElement.doScroll)
							? r.setTimeout(T.ready)
							: (y.addEventListener('DOMContentLoaded', U),
							  r.addEventListener('load', U));
					var z = function (e, t, n, r, i, o, a) {
							var s = 0,
								l = e.length,
								c = null == n;
							if ('object' === x(n))
								for (s in ((i = true), n)) z(e, t, s, n[s], true, o, a);
							else if (
								void 0 !== r &&
								((i = true),
								v(r) || (a = true),
								c &&
									(a
										? (t.call(e, r), (t = null))
										: ((c = t),
										  (t = function (e, t, n) {
												return c.call(T(e), n);
										  }))),
								t)
							)
								for (; s < l; s++)
									t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
							return i ? e : c ? t.call(e) : l ? t(e[0], n) : o;
						},
						V = /^-ms-/,
						Q = /-([a-z])/g;
					function K(e, t) {
						return t.toUpperCase();
					}
					function Y(e) {
						return e.replace(V, 'ms-').replace(Q, K);
					}
					var X = function (e) {
						return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
					};
					function J() {
						this.expando = T.expando + J.uid++;
					}
					(J.uid = 1),
						(J.prototype = {
							cache: function (e) {
								var t = e[this.expando];
								return (
									t ||
										((t = {}),
										X(e) &&
											(e.nodeType
												? (e[this.expando] = t)
												: Object.defineProperty(e, this.expando, {
														value: t,
														configurable: true,
												  }))),
									t
								);
							},
							set: function (e, t, n) {
								var r,
									i = this.cache(e);
								if ('string' == typeof t) i[Y(t)] = n;
								else for (r in t) i[Y(r)] = t[r];
								return i;
							},
							get: function (e, t) {
								return void 0 === t
									? this.cache(e)
									: e[this.expando] && e[this.expando][Y(t)];
							},
							access: function (e, t, n) {
								return void 0 === t ||
									(t && 'string' == typeof t && void 0 === n)
									? this.get(e, t)
									: (this.set(e, t, n), void 0 !== n ? n : t);
							},
							remove: function (e, t) {
								var n,
									r = e[this.expando];
								if (void 0 !== r) {
									if (void 0 !== t) {
										n = (t = Array.isArray(t)
											? t.map(Y)
											: (t = Y(t)) in r
											? [t]
											: t.match(M) || []).length;
										for (; n--; ) delete r[t[n]];
									}
									(void 0 === t || T.isEmptyObject(r)) &&
										(e.nodeType
											? (e[this.expando] = void 0)
											: delete e[this.expando]);
								}
							},
							hasData: function (e) {
								var t = e[this.expando];
								return void 0 !== t && !T.isEmptyObject(t);
							},
						});
					var G = new J(),
						Z = new J(),
						ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
						te = /[A-Z]/g;
					function ne(e, t, n) {
						var r;
						if (void 0 === n && 1 === e.nodeType)
							if (
								((r = 'data-' + t.replace(te, '-$&').toLowerCase()),
								'string' == typeof (n = e.getAttribute(r)))
							) {
								try {
									n = (function (e) {
										return (
											'true' === e ||
											('false' !== e &&
												('null' === e
													? null
													: e === +e + ''
													? +e
													: ee.test(e)
													? JSON.parse(e)
													: e))
										);
									})(n);
								} catch (e) {}
								Z.set(e, t, n);
							} else n = void 0;
						return n;
					}
					T.extend({
						hasData: function (e) {
							return Z.hasData(e) || G.hasData(e);
						},
						data: function (e, t, n) {
							return Z.access(e, t, n);
						},
						removeData: function (e, t) {
							Z.remove(e, t);
						},
						_data: function (e, t, n) {
							return G.access(e, t, n);
						},
						_removeData: function (e, t) {
							G.remove(e, t);
						},
					}),
						T.fn.extend({
							data: function (e, t) {
								var n,
									r,
									i,
									o = this[0],
									a = o && o.attributes;
								if (void 0 === e) {
									if (
										this.length &&
										((i = Z.get(o)),
										1 === o.nodeType && !G.get(o, 'hasDataAttrs'))
									) {
										for (n = a.length; n--; )
											a[n] &&
												0 === (r = a[n].name).indexOf('data-') &&
												((r = Y(r.slice(5))), ne(o, r, i[r]));
										G.set(o, 'hasDataAttrs', true);
									}
									return i;
								}
								return 'object' == typeof e
									? this.each(function () {
											Z.set(this, e);
									  })
									: z(
											this,
											function (t) {
												var n;
												if (o && void 0 === t)
													return void 0 !== (n = Z.get(o, e)) ||
														void 0 !== (n = ne(o, e))
														? n
														: void 0;
												this.each(function () {
													Z.set(this, e, t);
												});
											},
											null,
											t,
											arguments.length > 1,
											null,
											true
									  );
							},
							removeData: function (e) {
								return this.each(function () {
									Z.remove(this, e);
								});
							},
						}),
						T.extend({
							queue: function (e, t, n) {
								var r;
								if (e)
									return (
										(t = (t || 'fx') + 'queue'),
										(r = G.get(e, t)),
										n &&
											(!r || Array.isArray(n)
												? (r = G.access(e, t, T.makeArray(n)))
												: r.push(n)),
										r || []
									);
							},
							dequeue: function (e, t) {
								t = t || 'fx';
								var n = T.queue(e, t),
									r = n.length,
									i = n.shift(),
									o = T._queueHooks(e, t);
								'inprogress' === i && ((i = n.shift()), r--),
									i &&
										('fx' === t && n.unshift('inprogress'),
										delete o.stop,
										i.call(
											e,
											function () {
												T.dequeue(e, t);
											},
											o
										)),
									!r && o && o.empty.fire();
							},
							_queueHooks: function (e, t) {
								var n = t + 'queueHooks';
								return (
									G.get(e, n) ||
									G.access(e, n, {
										empty: T.Callbacks('once memory').add(function () {
											G.remove(e, [t + 'queue', n]);
										}),
									})
								);
							},
						}),
						T.fn.extend({
							queue: function (e, t) {
								var n = 2;
								return (
									'string' != typeof e && ((t = e), (e = 'fx'), n--),
									arguments.length < n
										? T.queue(this[0], e)
										: void 0 === t
										? this
										: this.each(function () {
												var n = T.queue(this, e, t);
												T._queueHooks(this, e),
													'fx' === e &&
														'inprogress' !== n[0] &&
														T.dequeue(this, e);
										  })
								);
							},
							dequeue: function (e) {
								return this.each(function () {
									T.dequeue(this, e);
								});
							},
							clearQueue: function (e) {
								return this.queue(e || 'fx', []);
							},
							promise: function (e, t) {
								var n,
									r = 1,
									i = T.Deferred(),
									o = this,
									a = this.length,
									s = function () {
										--r || i.resolveWith(o, [o]);
									};
								for (
									'string' != typeof e && ((t = e), (e = void 0)),
										e = e || 'fx';
									a--;

								)
									(n = G.get(o[a], e + 'queueHooks')) &&
										n.empty &&
										(r++, n.empty.add(s));
								return s(), i.promise(t);
							},
						});
					var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
						ie = new RegExp('^(?:([+-])=|)(' + re + ')([a-z%]*)$', 'i'),
						oe = ['Top', 'Right', 'Bottom', 'Left'],
						ae = y.documentElement,
						se = function (e) {
							return T.contains(e.ownerDocument, e);
						},
						le = { composed: true };
					ae.getRootNode &&
						(se = function (e) {
							return (
								T.contains(e.ownerDocument, e) ||
								e.getRootNode(le) === e.ownerDocument
							);
						});
					var ce = function (e, t) {
						return (
							'none' === (e = t || e).style.display ||
							('' === e.style.display &&
								se(e) &&
								'none' === T.css(e, 'display'))
						);
					};
					function ue(e, t, n, r) {
						var i,
							o,
							a = 20,
							s = r
								? function () {
										return r.cur();
								  }
								: function () {
										return T.css(e, t, '');
								  },
							l = s(),
							c = (n && n[3]) || (T.cssNumber[t] ? '' : 'px'),
							u =
								e.nodeType &&
								(T.cssNumber[t] || ('px' !== c && +l)) &&
								ie.exec(T.css(e, t));
						if (u && u[3] !== c) {
							for (l /= 2, c = c || u[3], u = +l || 1; a--; )
								T.style(e, t, u + c),
									(1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
									(u /= o);
							(u *= 2), T.style(e, t, u + c), (n = n || []);
						}
						return (
							n &&
								((u = +u || +l || 0),
								(i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
								r && ((r.unit = c), (r.start = u), (r.end = i))),
							i
						);
					}
					var fe = {};
					function de(e) {
						var t,
							n = e.ownerDocument,
							r = e.nodeName,
							i = fe[r];
						return (
							i ||
							((t = n.body.appendChild(n.createElement(r))),
							(i = T.css(t, 'display')),
							t.parentNode.removeChild(t),
							'none' === i && (i = 'block'),
							(fe[r] = i),
							i)
						);
					}
					function pe(e, t) {
						for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
							(r = e[o]).style &&
								((n = r.style.display),
								t
									? ('none' === n &&
											((i[o] = G.get(r, 'display') || null),
											i[o] || (r.style.display = '')),
									  '' === r.style.display && ce(r) && (i[o] = de(r)))
									: 'none' !== n && ((i[o] = 'none'), G.set(r, 'display', n)));
						for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
						return e;
					}
					T.fn.extend({
						show: function () {
							return pe(this, true);
						},
						hide: function () {
							return pe(this);
						},
						toggle: function (e) {
							return 'boolean' == typeof e
								? e
									? this.show()
									: this.hide()
								: this.each(function () {
										ce(this) ? T(this).show() : T(this).hide();
								  });
						},
					});
					var he,
						me,
						ge = /^(?:checkbox|radio)$/i,
						ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
						be = /^$|^module$|\/(?:java|ecma)script/i;
					(he = y.createDocumentFragment().appendChild(y.createElement('div'))),
						(me = y.createElement('input')).setAttribute('type', 'radio'),
						me.setAttribute('checked', 'checked'),
						me.setAttribute('name', 't'),
						he.appendChild(me),
						(g.checkClone = he
							.cloneNode(true)
							.cloneNode(true).lastChild.checked),
						(he.innerHTML = '<textarea>x</textarea>'),
						(g.noCloneChecked = !!he.cloneNode(true).lastChild.defaultValue),
						(he.innerHTML = '<option></option>'),
						(g.option = !!he.lastChild);
					var ye = {
						thead: [1, '<table>', '</table>'],
						col: [2, '<table><colgroup>', '</colgroup></table>'],
						tr: [2, '<table><tbody>', '</tbody></table>'],
						td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
						_default: [0, '', ''],
					};
					function we(e, t) {
						var n;
						return (
							(n =
								void 0 !== e.getElementsByTagName
									? e.getElementsByTagName(t || '*')
									: void 0 !== e.querySelectorAll
									? e.querySelectorAll(t || '*')
									: []),
							void 0 === t || (t && A(e, t)) ? T.merge([e], n) : n
						);
					}
					function _e(e, t) {
						for (var n = 0, r = e.length; n < r; n++)
							G.set(e[n], 'globalEval', !t || G.get(t[n], 'globalEval'));
					}
					(ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
						(ye.th = ye.td),
						g.option ||
							(ye.optgroup = ye.option =
								[1, "<select multiple='multiple'>", '</select>']);
					var xe = /<|&#?\w+;/;
					function Ce(e, t, n, r, i) {
						for (
							var o,
								a,
								s,
								l,
								c,
								u,
								f = t.createDocumentFragment(),
								d = [],
								p = 0,
								h = e.length;
							p < h;
							p++
						)
							if ((o = e[p]) || 0 === o)
								if ('object' === x(o)) T.merge(d, o.nodeType ? [o] : o);
								else if (xe.test(o)) {
									for (
										a = a || f.appendChild(t.createElement('div')),
											s = (ve.exec(o) || ['', ''])[1].toLowerCase(),
											l = ye[s] || ye._default,
											a.innerHTML = l[1] + T.htmlPrefilter(o) + l[2],
											u = l[0];
										u--;

									)
										a = a.lastChild;
									T.merge(d, a.childNodes),
										((a = f.firstChild).textContent = '');
								} else d.push(t.createTextNode(o));
						for (f.textContent = '', p = 0; (o = d[p++]); )
							if (r && T.inArray(o, r) > -1) i && i.push(o);
							else if (
								((c = se(o)),
								(a = we(f.appendChild(o), 'script')),
								c && _e(a),
								n)
							)
								for (u = 0; (o = a[u++]); ) be.test(o.type || '') && n.push(o);
						return f;
					}
					var Te = /^([^.]*)(?:\.(.+)|)/;
					function Ee() {
						return true;
					}
					function ke() {
						return false;
					}
					function Se(e, t) {
						return (
							(e ===
								(function () {
									try {
										return y.activeElement;
									} catch (e) {}
								})()) ==
							('focus' === t)
						);
					}
					function je(e, t, n, r, i, o) {
						var a, s;
						if ('object' == typeof t) {
							for (s in ('string' != typeof n && ((r = r || n), (n = void 0)),
							t))
								je(e, s, n, r, t[s], o);
							return e;
						}
						if (
							(null == r && null == i
								? ((i = n), (r = n = void 0))
								: null == i &&
								  ('string' == typeof n
										? ((i = r), (r = void 0))
										: ((i = r), (r = n), (n = void 0))),
							false === i)
						)
							i = ke;
						else if (!i) return e;
						return (
							1 === o &&
								((a = i),
								(i = function (e) {
									return T().off(e), a.apply(this, arguments);
								}),
								(i.guid = a.guid || (a.guid = T.guid++))),
							e.each(function () {
								T.event.add(this, t, i, r, n);
							})
						);
					}
					function De(e, t, n) {
						n
							? (G.set(e, t, false),
							  T.event.add(e, t, {
									namespace: false,
									handler: function (e) {
										var r,
											i,
											o = G.get(this, t);
										if (1 & e.isTrigger && this[t]) {
											if (o.length)
												(T.event.special[t] || {}).delegateType &&
													e.stopPropagation();
											else if (
												((o = s.call(arguments)),
												G.set(this, t, o),
												(r = n(this, t)),
												this[t](),
												o !== (i = G.get(this, t)) || r
													? G.set(this, t, false)
													: (i = {}),
												o !== i)
											)
												return (
													e.stopImmediatePropagation(),
													e.preventDefault(),
													i && i.value
												);
										} else
											o.length &&
												(G.set(this, t, {
													value: T.event.trigger(
														T.extend(o[0], T.Event.prototype),
														o.slice(1),
														this
													),
												}),
												e.stopImmediatePropagation());
									},
							  }))
							: void 0 === G.get(e, t) && T.event.add(e, t, Ee);
					}
					(T.event = {
						global: {},
						add: function (e, t, n, r, i) {
							var o,
								a,
								s,
								l,
								c,
								u,
								f,
								d,
								p,
								h,
								m,
								g = G.get(e);
							if (X(e))
								for (
									n.handler && ((n = (o = n).handler), (i = o.selector)),
										i && T.find.matchesSelector(ae, i),
										n.guid || (n.guid = T.guid++),
										(l = g.events) || (l = g.events = Object.create(null)),
										(a = g.handle) ||
											(a = g.handle =
												function (t) {
													return void 0 !== T && T.event.triggered !== t.type
														? T.event.dispatch.apply(e, arguments)
														: void 0;
												}),
										c = (t = (t || '').match(M) || ['']).length;
									c--;

								)
									(p = m = (s = Te.exec(t[c]) || [])[1]),
										(h = (s[2] || '').split('.').sort()),
										p &&
											((f = T.event.special[p] || {}),
											(p = (i ? f.delegateType : f.bindType) || p),
											(f = T.event.special[p] || {}),
											(u = T.extend(
												{
													type: p,
													origType: m,
													data: r,
													handler: n,
													guid: n.guid,
													selector: i,
													needsContext: i && T.expr.match.needsContext.test(i),
													namespace: h.join('.'),
												},
												o
											)),
											(d = l[p]) ||
												(((d = l[p] = []).delegateCount = 0),
												(f.setup && false !== f.setup.call(e, r, h, a)) ||
													(e.addEventListener && e.addEventListener(p, a))),
											f.add &&
												(f.add.call(e, u),
												u.handler.guid || (u.handler.guid = n.guid)),
											i ? d.splice(d.delegateCount++, 0, u) : d.push(u),
											(T.event.global[p] = true));
						},
						remove: function (e, t, n, r, i) {
							var o,
								a,
								s,
								l,
								c,
								u,
								f,
								d,
								p,
								h,
								m,
								g = G.hasData(e) && G.get(e);
							if (g && (l = g.events)) {
								for (c = (t = (t || '').match(M) || ['']).length; c--; )
									if (
										((p = m = (s = Te.exec(t[c]) || [])[1]),
										(h = (s[2] || '').split('.').sort()),
										p)
									) {
										for (
											f = T.event.special[p] || {},
												d =
													l[(p = (r ? f.delegateType : f.bindType) || p)] || [],
												s =
													s[2] &&
													new RegExp(
														'(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'
													),
												a = o = d.length;
											o--;

										)
											(u = d[o]),
												(!i && m !== u.origType) ||
													(n && n.guid !== u.guid) ||
													(s && !s.test(u.namespace)) ||
													(r &&
														r !== u.selector &&
														('**' !== r || !u.selector)) ||
													(d.splice(o, 1),
													u.selector && d.delegateCount--,
													f.remove && f.remove.call(e, u));
										a &&
											!d.length &&
											((f.teardown &&
												false !== f.teardown.call(e, h, g.handle)) ||
												T.removeEvent(e, p, g.handle),
											delete l[p]);
									} else for (p in l) T.event.remove(e, p + t[c], n, r, true);
								T.isEmptyObject(l) && G.remove(e, 'handle events');
							}
						},
						dispatch: function (e) {
							var t,
								n,
								r,
								i,
								o,
								a,
								s = new Array(arguments.length),
								l = T.event.fix(e),
								c =
									(G.get(this, 'events') || Object.create(null))[l.type] || [],
								u = T.event.special[l.type] || {};
							for (s[0] = l, t = 1; t < arguments.length; t++)
								s[t] = arguments[t];
							if (
								((l.delegateTarget = this),
								!u.preDispatch || false !== u.preDispatch.call(this, l))
							) {
								for (
									a = T.event.handlers.call(this, l, c), t = 0;
									(i = a[t++]) && !l.isPropagationStopped();

								)
									for (
										l.currentTarget = i.elem, n = 0;
										(o = i.handlers[n++]) && !l.isImmediatePropagationStopped();

									)
										(l.rnamespace &&
											false !== o.namespace &&
											!l.rnamespace.test(o.namespace)) ||
											((l.handleObj = o),
											(l.data = o.data),
											void 0 !==
												(r = (
													(T.event.special[o.origType] || {}).handle ||
													o.handler
												).apply(i.elem, s)) &&
												false === (l.result = r) &&
												(l.preventDefault(), l.stopPropagation()));
								return u.postDispatch && u.postDispatch.call(this, l), l.result;
							}
						},
						handlers: function (e, t) {
							var n,
								r,
								i,
								o,
								a,
								s = [],
								l = t.delegateCount,
								c = e.target;
							if (l && c.nodeType && !('click' === e.type && e.button >= 1))
								for (; c !== this; c = c.parentNode || this)
									if (
										1 === c.nodeType &&
										('click' !== e.type || true !== c.disabled)
									) {
										for (o = [], a = {}, n = 0; n < l; n++)
											void 0 === a[(i = (r = t[n]).selector + ' ')] &&
												(a[i] = r.needsContext
													? T(i, this).index(c) > -1
													: T.find(i, this, null, [c]).length),
												a[i] && o.push(r);
										o.length && s.push({ elem: c, handlers: o });
									}
							return (
								(c = this),
								l < t.length && s.push({ elem: c, handlers: t.slice(l) }),
								s
							);
						},
						addProp: function (e, t) {
							Object.defineProperty(T.Event.prototype, e, {
								enumerable: true,
								configurable: true,
								get: v(t)
									? function () {
											if (this.originalEvent) return t(this.originalEvent);
									  }
									: function () {
											if (this.originalEvent) return this.originalEvent[e];
									  },
								set: function (t) {
									Object.defineProperty(this, e, {
										enumerable: true,
										configurable: true,
										writable: true,
										value: t,
									});
								},
							});
						},
						fix: function (e) {
							return e[T.expando] ? e : new T.Event(e);
						},
						special: {
							load: { noBubble: true },
							click: {
								setup: function (e) {
									var t = this || e;
									return (
										ge.test(t.type) &&
											t.click &&
											A(t, 'input') &&
											De(t, 'click', Ee),
										false
									);
								},
								trigger: function (e) {
									var t = this || e;
									return (
										ge.test(t.type) &&
											t.click &&
											A(t, 'input') &&
											De(t, 'click'),
										true
									);
								},
								_default: function (e) {
									var t = e.target;
									return (
										(ge.test(t.type) &&
											t.click &&
											A(t, 'input') &&
											G.get(t, 'click')) ||
										A(t, 'a')
									);
								},
							},
							beforeunload: {
								postDispatch: function (e) {
									void 0 !== e.result &&
										e.originalEvent &&
										(e.originalEvent.returnValue = e.result);
								},
							},
						},
					}),
						(T.removeEvent = function (e, t, n) {
							e.removeEventListener && e.removeEventListener(t, n);
						}),
						(T.Event = function (e, t) {
							if (!(this instanceof T.Event)) return new T.Event(e, t);
							e && e.type
								? ((this.originalEvent = e),
								  (this.type = e.type),
								  (this.isDefaultPrevented =
										e.defaultPrevented ||
										(void 0 === e.defaultPrevented && false === e.returnValue)
											? Ee
											: ke),
								  (this.target =
										e.target && 3 === e.target.nodeType
											? e.target.parentNode
											: e.target),
								  (this.currentTarget = e.currentTarget),
								  (this.relatedTarget = e.relatedTarget))
								: (this.type = e),
								t && T.extend(this, t),
								(this.timeStamp = (e && e.timeStamp) || Date.now()),
								(this[T.expando] = true);
						}),
						(T.Event.prototype = {
							constructor: T.Event,
							isDefaultPrevented: ke,
							isPropagationStopped: ke,
							isImmediatePropagationStopped: ke,
							isSimulated: false,
							preventDefault: function () {
								var e = this.originalEvent;
								(this.isDefaultPrevented = Ee),
									e && !this.isSimulated && e.preventDefault();
							},
							stopPropagation: function () {
								var e = this.originalEvent;
								(this.isPropagationStopped = Ee),
									e && !this.isSimulated && e.stopPropagation();
							},
							stopImmediatePropagation: function () {
								var e = this.originalEvent;
								(this.isImmediatePropagationStopped = Ee),
									e && !this.isSimulated && e.stopImmediatePropagation(),
									this.stopPropagation();
							},
						}),
						T.each(
							{
								altKey: true,
								bubbles: true,
								cancelable: true,
								changedTouches: true,
								ctrlKey: true,
								detail: true,
								eventPhase: true,
								metaKey: true,
								pageX: true,
								pageY: true,
								shiftKey: true,
								view: true,
								char: true,
								code: true,
								charCode: true,
								key: true,
								keyCode: true,
								button: true,
								buttons: true,
								clientX: true,
								clientY: true,
								offsetX: true,
								offsetY: true,
								pointerId: true,
								pointerType: true,
								screenX: true,
								screenY: true,
								targetTouches: true,
								toElement: true,
								touches: true,
								which: true,
							},
							T.event.addProp
						),
						T.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
							T.event.special[e] = {
								setup: function () {
									return De(this, e, Se), false;
								},
								trigger: function () {
									return De(this, e), true;
								},
								_default: function () {
									return true;
								},
								delegateType: t,
							};
						}),
						T.each(
							{
								mouseenter: 'mouseover',
								mouseleave: 'mouseout',
								pointerenter: 'pointerover',
								pointerleave: 'pointerout',
							},
							function (e, t) {
								T.event.special[e] = {
									delegateType: t,
									bindType: t,
									handle: function (e) {
										var n,
											r = e.relatedTarget,
											i = e.handleObj;
										return (
											(r && (r === this || T.contains(this, r))) ||
												((e.type = i.origType),
												(n = i.handler.apply(this, arguments)),
												(e.type = t)),
											n
										);
									},
								};
							}
						),
						T.fn.extend({
							on: function (e, t, n, r) {
								return je(this, e, t, n, r);
							},
							one: function (e, t, n, r) {
								return je(this, e, t, n, r, 1);
							},
							off: function (e, t, n) {
								var r, i;
								if (e && e.preventDefault && e.handleObj)
									return (
										(r = e.handleObj),
										T(e.delegateTarget).off(
											r.namespace ? r.origType + '.' + r.namespace : r.origType,
											r.selector,
											r.handler
										),
										this
									);
								if ('object' == typeof e) {
									for (i in e) this.off(i, t, e[i]);
									return this;
								}
								return (
									(false !== t && 'function' != typeof t) ||
										((n = t), (t = void 0)),
									false === n && (n = ke),
									this.each(function () {
										T.event.remove(this, e, n, t);
									})
								);
							},
						});
					var Ae = /<script|<style|<link/i,
						Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
						$e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
					function Ne(e, t) {
						return (
							(A(e, 'table') &&
								A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
								T(e).children('tbody')[0]) ||
							e
						);
					}
					function Ie(e) {
						return (
							(e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
						);
					}
					function Pe(e) {
						return (
							'true/' === (e.type || '').slice(0, 5)
								? (e.type = e.type.slice(5))
								: e.removeAttribute('type'),
							e
						);
					}
					function Le(e, t) {
						var n, r, i, o, a, s;
						if (1 === t.nodeType) {
							if (G.hasData(e) && (s = G.get(e).events))
								for (i in (G.remove(t, 'handle events'), s))
									for (n = 0, r = s[i].length; n < r; n++)
										T.event.add(t, i, s[i][n]);
							Z.hasData(e) &&
								((o = Z.access(e)), (a = T.extend({}, o)), Z.set(t, a));
						}
					}
					function He(e, t) {
						var n = t.nodeName.toLowerCase();
						'input' === n && ge.test(e.type)
							? (t.checked = e.checked)
							: ('input' !== n && 'textarea' !== n) ||
							  (t.defaultValue = e.defaultValue);
					}
					function Me(e, t, n, r) {
						t = l(t);
						var i,
							o,
							a,
							s,
							c,
							u,
							f = 0,
							d = e.length,
							p = d - 1,
							h = t[0],
							m = v(h);
						if (
							m ||
							(d > 1 && 'string' == typeof h && !g.checkClone && Oe.test(h))
						)
							return e.each(function (i) {
								var o = e.eq(i);
								m && (t[0] = h.call(this, i, o.html())), Me(o, t, n, r);
							});
						if (
							d &&
							((o = (i = Ce(t, e[0].ownerDocument, false, e, r)).firstChild),
							1 === i.childNodes.length && (i = o),
							o || r)
						) {
							for (s = (a = T.map(we(i, 'script'), Ie)).length; f < d; f++)
								(c = i),
									f !== p &&
										((c = T.clone(c, true, true)),
										s && T.merge(a, we(c, 'script'))),
									n.call(e[f], c, f);
							if (s)
								for (
									u = a[a.length - 1].ownerDocument, T.map(a, Pe), f = 0;
									f < s;
									f++
								)
									(c = a[f]),
										be.test(c.type || '') &&
											!G.access(c, 'globalEval') &&
											T.contains(u, c) &&
											(c.src && 'module' !== (c.type || '').toLowerCase()
												? T._evalUrl &&
												  !c.noModule &&
												  T._evalUrl(
														c.src,
														{ nonce: c.nonce || c.getAttribute('nonce') },
														u
												  )
												: _(c.textContent.replace($e, ''), c, u));
						}
						return e;
					}
					function Re(e, t, n) {
						for (
							var r, i = t ? T.filter(t, e) : e, o = 0;
							null != (r = i[o]);
							o++
						)
							n || 1 !== r.nodeType || T.cleanData(we(r)),
								r.parentNode &&
									(n && se(r) && _e(we(r, 'script')),
									r.parentNode.removeChild(r));
						return e;
					}
					T.extend({
						htmlPrefilter: function (e) {
							return e;
						},
						clone: function (e, t, n) {
							var r,
								i,
								o,
								a,
								s = e.cloneNode(true),
								l = se(e);
							if (
								!(
									g.noCloneChecked ||
									(1 !== e.nodeType && 11 !== e.nodeType) ||
									T.isXMLDoc(e)
								)
							)
								for (a = we(s), r = 0, i = (o = we(e)).length; r < i; r++)
									He(o[r], a[r]);
							if (t)
								if (n)
									for (
										o = o || we(e), a = a || we(s), r = 0, i = o.length;
										r < i;
										r++
									)
										Le(o[r], a[r]);
								else Le(e, s);
							return (
								(a = we(s, 'script')).length > 0 &&
									_e(a, !l && we(e, 'script')),
								s
							);
						},
						cleanData: function (e) {
							for (
								var t, n, r, i = T.event.special, o = 0;
								void 0 !== (n = e[o]);
								o++
							)
								if (X(n)) {
									if ((t = n[G.expando])) {
										if (t.events)
											for (r in t.events)
												i[r]
													? T.event.remove(n, r)
													: T.removeEvent(n, r, t.handle);
										n[G.expando] = void 0;
									}
									n[Z.expando] && (n[Z.expando] = void 0);
								}
						},
					}),
						T.fn.extend({
							detach: function (e) {
								return Re(this, e, true);
							},
							remove: function (e) {
								return Re(this, e);
							},
							text: function (e) {
								return z(
									this,
									function (e) {
										return void 0 === e
											? T.text(this)
											: this.empty().each(function () {
													(1 !== this.nodeType &&
														11 !== this.nodeType &&
														9 !== this.nodeType) ||
														(this.textContent = e);
											  });
									},
									null,
									e,
									arguments.length
								);
							},
							append: function () {
								return Me(this, arguments, function (e) {
									(1 !== this.nodeType &&
										11 !== this.nodeType &&
										9 !== this.nodeType) ||
										Ne(this, e).appendChild(e);
								});
							},
							prepend: function () {
								return Me(this, arguments, function (e) {
									if (
										1 === this.nodeType ||
										11 === this.nodeType ||
										9 === this.nodeType
									) {
										var t = Ne(this, e);
										t.insertBefore(e, t.firstChild);
									}
								});
							},
							before: function () {
								return Me(this, arguments, function (e) {
									this.parentNode && this.parentNode.insertBefore(e, this);
								});
							},
							after: function () {
								return Me(this, arguments, function (e) {
									this.parentNode &&
										this.parentNode.insertBefore(e, this.nextSibling);
								});
							},
							empty: function () {
								for (var e, t = 0; null != (e = this[t]); t++)
									1 === e.nodeType &&
										(T.cleanData(we(e, false)), (e.textContent = ''));
								return this;
							},
							clone: function (e, t) {
								return (
									(e = null != e && e),
									(t = null == t ? e : t),
									this.map(function () {
										return T.clone(this, e, t);
									})
								);
							},
							html: function (e) {
								return z(
									this,
									function (e) {
										var t = this[0] || {},
											n = 0,
											r = this.length;
										if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
										if (
											'string' == typeof e &&
											!Ae.test(e) &&
											!ye[(ve.exec(e) || ['', ''])[1].toLowerCase()]
										) {
											e = T.htmlPrefilter(e);
											try {
												for (; n < r; n++)
													1 === (t = this[n] || {}).nodeType &&
														(T.cleanData(we(t, false)), (t.innerHTML = e));
												t = 0;
											} catch (e) {}
										}
										t && this.empty().append(e);
									},
									null,
									e,
									arguments.length
								);
							},
							replaceWith: function () {
								var e = [];
								return Me(
									this,
									arguments,
									function (t) {
										var n = this.parentNode;
										T.inArray(this, e) < 0 &&
											(T.cleanData(we(this)), n && n.replaceChild(t, this));
									},
									e
								);
							},
						}),
						T.each(
							{
								appendTo: 'append',
								prependTo: 'prepend',
								insertBefore: 'before',
								insertAfter: 'after',
								replaceAll: 'replaceWith',
							},
							function (e, t) {
								T.fn[e] = function (e) {
									for (
										var n, r = [], i = T(e), o = i.length - 1, a = 0;
										a <= o;
										a++
									)
										(n = a === o ? this : this.clone(true)),
											T(i[a])[t](n),
											c.apply(r, n.get());
									return this.pushStack(r);
								};
							}
						);
					var qe = new RegExp('^(' + re + ')(?!px)[a-z%]+$', 'i'),
						Be = function (e) {
							var t = e.ownerDocument.defaultView;
							return (t && t.opener) || (t = r), t.getComputedStyle(e);
						},
						Fe = function (e, t, n) {
							var r,
								i,
								o = {};
							for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
							for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
							return r;
						},
						We = new RegExp(oe.join('|'), 'i');
					function Ue(e, t, n) {
						var r,
							i,
							o,
							a,
							s = e.style;
						return (
							(n = n || Be(e)) &&
								('' !== (a = n.getPropertyValue(t) || n[t]) ||
									se(e) ||
									(a = T.style(e, t)),
								!g.pixelBoxStyles() &&
									qe.test(a) &&
									We.test(t) &&
									((r = s.width),
									(i = s.minWidth),
									(o = s.maxWidth),
									(s.minWidth = s.maxWidth = s.width = a),
									(a = n.width),
									(s.width = r),
									(s.minWidth = i),
									(s.maxWidth = o))),
							void 0 !== a ? a + '' : a
						);
					}
					function ze(e, t) {
						return {
							get: function () {
								if (!e()) return (this.get = t).apply(this, arguments);
								delete this.get;
							},
						};
					}
					!(function () {
						function e() {
							if (u) {
								(c.style.cssText =
									'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
									(u.style.cssText =
										'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
									ae.appendChild(c).appendChild(u);
								var e = r.getComputedStyle(u);
								(n = '1%' !== e.top),
									(l = 12 === t(e.marginLeft)),
									(u.style.right = '60%'),
									(a = 36 === t(e.right)),
									(i = 36 === t(e.width)),
									(u.style.position = 'absolute'),
									(o = 12 === t(u.offsetWidth / 3)),
									ae.removeChild(c),
									(u = null);
							}
						}
						function t(e) {
							return Math.round(parseFloat(e));
						}
						var n,
							i,
							o,
							a,
							s,
							l,
							c = y.createElement('div'),
							u = y.createElement('div');
						u.style &&
							((u.style.backgroundClip = 'content-box'),
							(u.cloneNode(true).style.backgroundClip = ''),
							(g.clearCloneStyle = 'content-box' === u.style.backgroundClip),
							T.extend(g, {
								boxSizingReliable: function () {
									return e(), i;
								},
								pixelBoxStyles: function () {
									return e(), a;
								},
								pixelPosition: function () {
									return e(), n;
								},
								reliableMarginLeft: function () {
									return e(), l;
								},
								scrollboxSize: function () {
									return e(), o;
								},
								reliableTrDimensions: function () {
									var e, t, n, i;
									return (
										null == s &&
											((e = y.createElement('table')),
											(t = y.createElement('tr')),
											(n = y.createElement('div')),
											(e.style.cssText =
												'position:absolute;left:-11111px;border-collapse:separate'),
											(t.style.cssText = 'border:1px solid'),
											(t.style.height = '1px'),
											(n.style.height = '9px'),
											(n.style.display = 'block'),
											ae.appendChild(e).appendChild(t).appendChild(n),
											(i = r.getComputedStyle(t)),
											(s =
												parseInt(i.height, 10) +
													parseInt(i.borderTopWidth, 10) +
													parseInt(i.borderBottomWidth, 10) ===
												t.offsetHeight),
											ae.removeChild(e)),
										s
									);
								},
							}));
					})();
					var Ve = ['Webkit', 'Moz', 'ms'],
						Qe = y.createElement('div').style,
						Ke = {};
					function Ye(e) {
						var t = T.cssProps[e] || Ke[e];
						return (
							t ||
							(e in Qe
								? e
								: (Ke[e] =
										(function (e) {
											for (
												var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
												n--;

											)
												if ((e = Ve[n] + t) in Qe) return e;
										})(e) || e))
						);
					}
					var Xe = /^(none|table(?!-c[ea]).+)/,
						Je = /^--/,
						Ge = {
							position: 'absolute',
							visibility: 'hidden',
							display: 'block',
						},
						Ze = { letterSpacing: '0', fontWeight: '400' };
					function et(e, t, n) {
						var r = ie.exec(t);
						return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
					}
					function tt(e, t, n, r, i, o) {
						var a = 'width' === t ? 1 : 0,
							s = 0,
							l = 0;
						if (n === (r ? 'border' : 'content')) return 0;
						for (; a < 4; a += 2)
							'margin' === n && (l += T.css(e, n + oe[a], true, i)),
								r
									? ('content' === n &&
											(l -= T.css(e, 'padding' + oe[a], true, i)),
									  'margin' !== n &&
											(l -= T.css(e, 'border' + oe[a] + 'Width', true, i)))
									: ((l += T.css(e, 'padding' + oe[a], true, i)),
									  'padding' !== n
											? (l += T.css(e, 'border' + oe[a] + 'Width', true, i))
											: (s += T.css(e, 'border' + oe[a] + 'Width', true, i)));
						return (
							!r &&
								o >= 0 &&
								(l +=
									Math.max(
										0,
										Math.ceil(
											e['offset' + t[0].toUpperCase() + t.slice(1)] -
												o -
												l -
												s -
												0.5
										)
									) || 0),
							l
						);
					}
					function nt(e, t, n) {
						var r = Be(e),
							i =
								(!g.boxSizingReliable() || n) &&
								'border-box' === T.css(e, 'boxSizing', false, r),
							o = i,
							a = Ue(e, t, r),
							s = 'offset' + t[0].toUpperCase() + t.slice(1);
						if (qe.test(a)) {
							if (!n) return a;
							a = 'auto';
						}
						return (
							((!g.boxSizingReliable() && i) ||
								(!g.reliableTrDimensions() && A(e, 'tr')) ||
								'auto' === a ||
								(!parseFloat(a) &&
									'inline' === T.css(e, 'display', false, r))) &&
								e.getClientRects().length &&
								((i = 'border-box' === T.css(e, 'boxSizing', false, r)),
								(o = s in e) && (a = e[s])),
							(a = parseFloat(a) || 0) +
								tt(e, t, n || (i ? 'border' : 'content'), o, r, a) +
								'px'
						);
					}
					function rt(e, t, n, r, i) {
						return new rt.prototype.init(e, t, n, r, i);
					}
					T.extend({
						cssHooks: {
							opacity: {
								get: function (e, t) {
									if (t) {
										var n = Ue(e, 'opacity');
										return '' === n ? '1' : n;
									}
								},
							},
						},
						cssNumber: {
							animationIterationCount: true,
							columnCount: true,
							fillOpacity: true,
							flexGrow: true,
							flexShrink: true,
							fontWeight: true,
							gridArea: true,
							gridColumn: true,
							gridColumnEnd: true,
							gridColumnStart: true,
							gridRow: true,
							gridRowEnd: true,
							gridRowStart: true,
							lineHeight: true,
							opacity: true,
							order: true,
							orphans: true,
							widows: true,
							zIndex: true,
							zoom: true,
						},
						cssProps: {},
						style: function (e, t, n, r) {
							if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
								var i,
									o,
									a,
									s = Y(t),
									l = Je.test(t),
									c = e.style;
								if (
									(l || (t = Ye(s)),
									(a = T.cssHooks[t] || T.cssHooks[s]),
									void 0 === n)
								)
									return a && 'get' in a && void 0 !== (i = a.get(e, false, r))
										? i
										: c[t];
								'string' === (o = typeof n) &&
									(i = ie.exec(n)) &&
									i[1] &&
									((n = ue(e, t, i)), (o = 'number')),
									null != n &&
										n == n &&
										('number' !== o ||
											l ||
											(n += (i && i[3]) || (T.cssNumber[s] ? '' : 'px')),
										g.clearCloneStyle ||
											'' !== n ||
											0 !== t.indexOf('background') ||
											(c[t] = 'inherit'),
										(a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
											(l ? c.setProperty(t, n) : (c[t] = n)));
							}
						},
						css: function (e, t, n, r) {
							var i,
								o,
								a,
								s = Y(t);
							return (
								Je.test(t) || (t = Ye(s)),
								(a = T.cssHooks[t] || T.cssHooks[s]) &&
									'get' in a &&
									(i = a.get(e, true, n)),
								void 0 === i && (i = Ue(e, t, r)),
								'normal' === i && t in Ze && (i = Ze[t]),
								'' === n || n
									? ((o = parseFloat(i)),
									  true === n || isFinite(o) ? o || 0 : i)
									: i
							);
						},
					}),
						T.each(['height', 'width'], function (e, t) {
							T.cssHooks[t] = {
								get: function (e, n, r) {
									if (n)
										return !Xe.test(T.css(e, 'display')) ||
											(e.getClientRects().length &&
												e.getBoundingClientRect().width)
											? nt(e, t, r)
											: Fe(e, Ge, function () {
													return nt(e, t, r);
											  });
								},
								set: function (e, n, r) {
									var i,
										o = Be(e),
										a = !g.scrollboxSize() && 'absolute' === o.position,
										s =
											(a || r) &&
											'border-box' === T.css(e, 'boxSizing', false, o),
										l = r ? tt(e, t, r, s, o) : 0;
									return (
										s &&
											a &&
											(l -= Math.ceil(
												e['offset' + t[0].toUpperCase() + t.slice(1)] -
													parseFloat(o[t]) -
													tt(e, t, 'border', false, o) -
													0.5
											)),
										l &&
											(i = ie.exec(n)) &&
											'px' !== (i[3] || 'px') &&
											((e.style[t] = n), (n = T.css(e, t))),
										et(0, n, l)
									);
								},
							};
						}),
						(T.cssHooks.marginLeft = ze(g.reliableMarginLeft, function (e, t) {
							if (t)
								return (
									(parseFloat(Ue(e, 'marginLeft')) ||
										e.getBoundingClientRect().left -
											Fe(e, { marginLeft: 0 }, function () {
												return e.getBoundingClientRect().left;
											})) + 'px'
								);
						})),
						T.each(
							{ margin: '', padding: '', border: 'Width' },
							function (e, t) {
								(T.cssHooks[e + t] = {
									expand: function (n) {
										for (
											var r = 0,
												i = {},
												o = 'string' == typeof n ? n.split(' ') : [n];
											r < 4;
											r++
										)
											i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
										return i;
									},
								}),
									'margin' !== e && (T.cssHooks[e + t].set = et);
							}
						),
						T.fn.extend({
							css: function (e, t) {
								return z(
									this,
									function (e, t, n) {
										var r,
											i,
											o = {},
											a = 0;
										if (Array.isArray(t)) {
											for (r = Be(e), i = t.length; a < i; a++)
												o[t[a]] = T.css(e, t[a], false, r);
											return o;
										}
										return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
									},
									e,
									t,
									arguments.length > 1
								);
							},
						}),
						(T.Tween = rt),
						(rt.prototype = {
							constructor: rt,
							init: function (e, t, n, r, i, o) {
								(this.elem = e),
									(this.prop = n),
									(this.easing = i || T.easing._default),
									(this.options = t),
									(this.start = this.now = this.cur()),
									(this.end = r),
									(this.unit = o || (T.cssNumber[n] ? '' : 'px'));
							},
							cur: function () {
								var e = rt.propHooks[this.prop];
								return e && e.get
									? e.get(this)
									: rt.propHooks._default.get(this);
							},
							run: function (e) {
								var t,
									n = rt.propHooks[this.prop];
								return (
									this.options.duration
										? (this.pos = t =
												T.easing[this.easing](
													e,
													this.options.duration * e,
													0,
													1,
													this.options.duration
												))
										: (this.pos = t = e),
									(this.now = (this.end - this.start) * t + this.start),
									this.options.step &&
										this.options.step.call(this.elem, this.now, this),
									n && n.set ? n.set(this) : rt.propHooks._default.set(this),
									this
								);
							},
						}),
						(rt.prototype.init.prototype = rt.prototype),
						(rt.propHooks = {
							_default: {
								get: function (e) {
									var t;
									return 1 !== e.elem.nodeType ||
										(null != e.elem[e.prop] && null == e.elem.style[e.prop])
										? e.elem[e.prop]
										: (t = T.css(e.elem, e.prop, '')) && 'auto' !== t
										? t
										: 0;
								},
								set: function (e) {
									T.fx.step[e.prop]
										? T.fx.step[e.prop](e)
										: 1 !== e.elem.nodeType ||
										  (!T.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
										? (e.elem[e.prop] = e.now)
										: T.style(e.elem, e.prop, e.now + e.unit);
								},
							},
						}),
						(rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
							{
								set: function (e) {
									e.elem.nodeType &&
										e.elem.parentNode &&
										(e.elem[e.prop] = e.now);
								},
							}),
						(T.easing = {
							linear: function (e) {
								return e;
							},
							swing: function (e) {
								return 0.5 - Math.cos(e * Math.PI) / 2;
							},
							_default: 'swing',
						}),
						(T.fx = rt.prototype.init),
						(T.fx.step = {});
					var it,
						ot,
						at = /^(?:toggle|show|hide)$/,
						st = /queueHooks$/;
					function lt() {
						ot &&
							(false === y.hidden && r.requestAnimationFrame
								? r.requestAnimationFrame(lt)
								: r.setTimeout(lt, T.fx.interval),
							T.fx.tick());
					}
					function ct() {
						return (
							r.setTimeout(function () {
								it = void 0;
							}),
							(it = Date.now())
						);
					}
					function ut(e, t) {
						var n,
							r = 0,
							i = { height: e };
						for (t = t ? 1 : 0; r < 4; r += 2 - t)
							i['margin' + (n = oe[r])] = i['padding' + n] = e;
						return t && (i.opacity = i.width = e), i;
					}
					function ft(e, t, n) {
						for (
							var r,
								i = (dt.tweeners[t] || []).concat(dt.tweeners['*']),
								o = 0,
								a = i.length;
							o < a;
							o++
						)
							if ((r = i[o].call(n, t, e))) return r;
					}
					function dt(e, t, n) {
						var r,
							i,
							o = 0,
							a = dt.prefilters.length,
							s = T.Deferred().always(function () {
								delete l.elem;
							}),
							l = function () {
								if (i) return false;
								for (
									var t = it || ct(),
										n = Math.max(0, c.startTime + c.duration - t),
										r = 1 - (n / c.duration || 0),
										o = 0,
										a = c.tweens.length;
									o < a;
									o++
								)
									c.tweens[o].run(r);
								return (
									s.notifyWith(e, [c, r, n]),
									r < 1 && a
										? n
										: (a || s.notifyWith(e, [c, 1, 0]),
										  s.resolveWith(e, [c]),
										  false)
								);
							},
							c = s.promise({
								elem: e,
								props: T.extend({}, t),
								opts: T.extend(
									true,
									{ specialEasing: {}, easing: T.easing._default },
									n
								),
								originalProperties: t,
								originalOptions: n,
								startTime: it || ct(),
								duration: n.duration,
								tweens: [],
								createTween: function (t, n) {
									var r = T.Tween(
										e,
										c.opts,
										t,
										n,
										c.opts.specialEasing[t] || c.opts.easing
									);
									return c.tweens.push(r), r;
								},
								stop: function (t) {
									var n = 0,
										r = t ? c.tweens.length : 0;
									if (i) return this;
									for (i = true; n < r; n++) c.tweens[n].run(1);
									return (
										t
											? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
											: s.rejectWith(e, [c, t]),
										this
									);
								},
							}),
							u = c.props;
						for (
							!(function (e, t) {
								var n, r, i, o, a;
								for (n in e)
									if (
										((i = t[(r = Y(n))]),
										(o = e[n]),
										Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
										n !== r && ((e[r] = o), delete e[n]),
										(a = T.cssHooks[r]) && ('expand' in a))
									)
										for (n in ((o = a.expand(o)), delete e[r], o))
											(n in e) || ((e[n] = o[n]), (t[n] = i));
									else t[r] = i;
							})(u, c.opts.specialEasing);
							o < a;
							o++
						)
							if ((r = dt.prefilters[o].call(c, e, u, c.opts)))
								return (
									v(r.stop) &&
										(T._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
									r
								);
						return (
							T.map(u, ft, c),
							v(c.opts.start) && c.opts.start.call(e, c),
							c
								.progress(c.opts.progress)
								.done(c.opts.done, c.opts.complete)
								.fail(c.opts.fail)
								.always(c.opts.always),
							T.fx.timer(
								T.extend(l, { elem: e, anim: c, queue: c.opts.queue })
							),
							c
						);
					}
					(T.Animation = T.extend(dt, {
						tweeners: {
							'*': [
								function (e, t) {
									var n = this.createTween(e, t);
									return ue(n.elem, e, ie.exec(t), n), n;
								},
							],
						},
						tweener: function (e, t) {
							v(e) ? ((t = e), (e = ['*'])) : (e = e.match(M));
							for (var n, r = 0, i = e.length; r < i; r++)
								(n = e[r]),
									(dt.tweeners[n] = dt.tweeners[n] || []),
									dt.tweeners[n].unshift(t);
						},
						prefilters: [
							function (e, t, n) {
								var r,
									i,
									o,
									a,
									s,
									l,
									c,
									u,
									f = 'width' in t || 'height' in t,
									d = this,
									p = {},
									h = e.style,
									m = e.nodeType && ce(e),
									g = G.get(e, 'fxshow');
								for (r in (n.queue ||
									(null == (a = T._queueHooks(e, 'fx')).unqueued &&
										((a.unqueued = 0),
										(s = a.empty.fire),
										(a.empty.fire = function () {
											a.unqueued || s();
										})),
									a.unqueued++,
									d.always(function () {
										d.always(function () {
											a.unqueued--, T.queue(e, 'fx').length || a.empty.fire();
										});
									})),
								t))
									if (((i = t[r]), at.test(i))) {
										if (
											(delete t[r],
											(o = o || 'toggle' === i),
											i === (m ? 'hide' : 'show'))
										) {
											if ('show' !== i || !g || void 0 === g[r]) continue;
											m = true;
										}
										p[r] = (g && g[r]) || T.style(e, r);
									}
								if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
									for (r in (f &&
										1 === e.nodeType &&
										((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
										null == (c = g && g.display) && (c = G.get(e, 'display')),
										'none' === (u = T.css(e, 'display')) &&
											(c
												? (u = c)
												: (pe([e], true),
												  (c = e.style.display || c),
												  (u = T.css(e, 'display')),
												  pe([e]))),
										('inline' === u || ('inline-block' === u && null != c)) &&
											'none' === T.css(e, 'float') &&
											(l ||
												(d.done(function () {
													h.display = c;
												}),
												null == c &&
													((u = h.display), (c = 'none' === u ? '' : u))),
											(h.display = 'inline-block'))),
									n.overflow &&
										((h.overflow = 'hidden'),
										d.always(function () {
											(h.overflow = n.overflow[0]),
												(h.overflowX = n.overflow[1]),
												(h.overflowY = n.overflow[2]);
										})),
									(l = false),
									p))
										l ||
											(g
												? 'hidden' in g && (m = g.hidden)
												: (g = G.access(e, 'fxshow', { display: c })),
											o && (g.hidden = !m),
											m && pe([e], true),
											d.done(function () {
												for (r in (m || pe([e]), G.remove(e, 'fxshow'), p))
													T.style(e, r, p[r]);
											})),
											(l = ft(m ? g[r] : 0, r, d)),
											r in g ||
												((g[r] = l.start),
												m && ((l.end = l.start), (l.start = 0)));
							},
						],
						prefilter: function (e, t) {
							t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
						},
					})),
						(T.speed = function (e, t, n) {
							var r =
								e && 'object' == typeof e
									? T.extend({}, e)
									: {
											complete: n || (!n && t) || (v(e) && e),
											duration: e,
											easing: (n && t) || (t && !v(t) && t),
									  };
							return (
								T.fx.off
									? (r.duration = 0)
									: 'number' != typeof r.duration &&
									  (r.duration in T.fx.speeds
											? (r.duration = T.fx.speeds[r.duration])
											: (r.duration = T.fx.speeds._default)),
								(null != r.queue && true !== r.queue) || (r.queue = 'fx'),
								(r.old = r.complete),
								(r.complete = function () {
									v(r.old) && r.old.call(this),
										r.queue && T.dequeue(this, r.queue);
								}),
								r
							);
						}),
						T.fn.extend({
							fadeTo: function (e, t, n, r) {
								return this.filter(ce)
									.css('opacity', 0)
									.show()
									.end()
									.animate({ opacity: t }, e, n, r);
							},
							animate: function (e, t, n, r) {
								var i = T.isEmptyObject(e),
									o = T.speed(t, n, r),
									a = function () {
										var t = dt(this, T.extend({}, e), o);
										(i || G.get(this, 'finish')) && t.stop(true);
									};
								return (
									(a.finish = a),
									i || false === o.queue ? this.each(a) : this.queue(o.queue, a)
								);
							},
							stop: function (e, t, n) {
								var r = function (e) {
									var t = e.stop;
									delete e.stop, t(n);
								};
								return (
									'string' != typeof e && ((n = t), (t = e), (e = void 0)),
									t && this.queue(e || 'fx', []),
									this.each(function () {
										var t = true,
											i = null != e && e + 'queueHooks',
											o = T.timers,
											a = G.get(this);
										if (i) a[i] && a[i].stop && r(a[i]);
										else
											for (i in a) a[i] && a[i].stop && st.test(i) && r(a[i]);
										for (i = o.length; i--; )
											o[i].elem !== this ||
												(null != e && o[i].queue !== e) ||
												(o[i].anim.stop(n), (t = false), o.splice(i, 1));
										(!t && n) || T.dequeue(this, e);
									})
								);
							},
							finish: function (e) {
								return (
									false !== e && (e = e || 'fx'),
									this.each(function () {
										var t,
											n = G.get(this),
											r = n[e + 'queue'],
											i = n[e + 'queueHooks'],
											o = T.timers,
											a = r ? r.length : 0;
										for (
											n.finish = true,
												T.queue(this, e, []),
												i && i.stop && i.stop.call(this, true),
												t = o.length;
											t--;

										)
											o[t].elem === this &&
												o[t].queue === e &&
												(o[t].anim.stop(true), o.splice(t, 1));
										for (t = 0; t < a; t++)
											r[t] && r[t].finish && r[t].finish.call(this);
										delete n.finish;
									})
								);
							},
						}),
						T.each(['toggle', 'show', 'hide'], function (e, t) {
							var n = T.fn[t];
							T.fn[t] = function (e, r, i) {
								return null == e || 'boolean' == typeof e
									? n.apply(this, arguments)
									: this.animate(ut(t, true), e, r, i);
							};
						}),
						T.each(
							{
								slideDown: ut('show'),
								slideUp: ut('hide'),
								slideToggle: ut('toggle'),
								fadeIn: { opacity: 'show' },
								fadeOut: { opacity: 'hide' },
								fadeToggle: { opacity: 'toggle' },
							},
							function (e, t) {
								T.fn[e] = function (e, n, r) {
									return this.animate(t, e, n, r);
								};
							}
						),
						(T.timers = []),
						(T.fx.tick = function () {
							var e,
								t = 0,
								n = T.timers;
							for (it = Date.now(); t < n.length; t++)
								(e = n[t])() || n[t] !== e || n.splice(t--, 1);
							n.length || T.fx.stop(), (it = void 0);
						}),
						(T.fx.timer = function (e) {
							T.timers.push(e), T.fx.start();
						}),
						(T.fx.interval = 13),
						(T.fx.start = function () {
							ot || ((ot = true), lt());
						}),
						(T.fx.stop = function () {
							ot = null;
						}),
						(T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
						(T.fn.delay = function (e, t) {
							return (
								(e = (T.fx && T.fx.speeds[e]) || e),
								(t = t || 'fx'),
								this.queue(t, function (t, n) {
									var i = r.setTimeout(t, e);
									n.stop = function () {
										r.clearTimeout(i);
									};
								})
							);
						}),
						(function () {
							var e = y.createElement('input'),
								t = y
									.createElement('select')
									.appendChild(y.createElement('option'));
							(e.type = 'checkbox'),
								(g.checkOn = '' !== e.value),
								(g.optSelected = t.selected),
								((e = y.createElement('input')).value = 't'),
								(e.type = 'radio'),
								(g.radioValue = 't' === e.value);
						})();
					var pt,
						ht = T.expr.attrHandle;
					T.fn.extend({
						attr: function (e, t) {
							return z(this, T.attr, e, t, arguments.length > 1);
						},
						removeAttr: function (e) {
							return this.each(function () {
								T.removeAttr(this, e);
							});
						},
					}),
						T.extend({
							attr: function (e, t, n) {
								var r,
									i,
									o = e.nodeType;
								if (3 !== o && 8 !== o && 2 !== o)
									return void 0 === e.getAttribute
										? T.prop(e, t, n)
										: ((1 === o && T.isXMLDoc(e)) ||
												(i =
													T.attrHooks[t.toLowerCase()] ||
													(T.expr.match.bool.test(t) ? pt : void 0)),
										  void 0 !== n
												? null === n
													? void T.removeAttr(e, t)
													: i && 'set' in i && void 0 !== (r = i.set(e, n, t))
													? r
													: (e.setAttribute(t, n + ''), n)
												: i && 'get' in i && null !== (r = i.get(e, t))
												? r
												: null == (r = T.find.attr(e, t))
												? void 0
												: r);
							},
							attrHooks: {
								type: {
									set: function (e, t) {
										if (!g.radioValue && 'radio' === t && A(e, 'input')) {
											var n = e.value;
											return e.setAttribute('type', t), n && (e.value = n), t;
										}
									},
								},
							},
							removeAttr: function (e, t) {
								var n,
									r = 0,
									i = t && t.match(M);
								if (i && 1 === e.nodeType)
									for (; (n = i[r++]); ) e.removeAttribute(n);
							},
						}),
						(pt = {
							set: function (e, t, n) {
								return (
									false === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
								);
							},
						}),
						T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
							var n = ht[t] || T.find.attr;
							ht[t] = function (e, t, r) {
								var i,
									o,
									a = t.toLowerCase();
								return (
									r ||
										((o = ht[a]),
										(ht[a] = i),
										(i = null != n(e, t, r) ? a : null),
										(ht[a] = o)),
									i
								);
							};
						});
					var mt = /^(?:input|select|textarea|button)$/i,
						gt = /^(?:a|area)$/i;
					function vt(e) {
						return (e.match(M) || []).join(' ');
					}
					function bt(e) {
						return (e.getAttribute && e.getAttribute('class')) || '';
					}
					function yt(e) {
						return Array.isArray(e)
							? e
							: ('string' == typeof e && e.match(M)) || [];
					}
					T.fn.extend({
						prop: function (e, t) {
							return z(this, T.prop, e, t, arguments.length > 1);
						},
						removeProp: function (e) {
							return this.each(function () {
								delete this[T.propFix[e] || e];
							});
						},
					}),
						T.extend({
							prop: function (e, t, n) {
								var r,
									i,
									o = e.nodeType;
								if (3 !== o && 8 !== o && 2 !== o)
									return (
										(1 === o && T.isXMLDoc(e)) ||
											((t = T.propFix[t] || t), (i = T.propHooks[t])),
										void 0 !== n
											? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
												? r
												: (e[t] = n)
											: i && 'get' in i && null !== (r = i.get(e, t))
											? r
											: e[t]
									);
							},
							propHooks: {
								tabIndex: {
									get: function (e) {
										var t = T.find.attr(e, 'tabindex');
										return t
											? parseInt(t, 10)
											: mt.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
											? 0
											: -1;
									},
								},
							},
							propFix: { for: 'htmlFor', class: 'className' },
						}),
						g.optSelected ||
							(T.propHooks.selected = {
								get: function (e) {
									var t = e.parentNode;
									return t && t.parentNode && t.parentNode.selectedIndex, null;
								},
								set: function (e) {
									var t = e.parentNode;
									t &&
										(t.selectedIndex,
										t.parentNode && t.parentNode.selectedIndex);
								},
							}),
						T.each(
							[
								'tabIndex',
								'readOnly',
								'maxLength',
								'cellSpacing',
								'cellPadding',
								'rowSpan',
								'colSpan',
								'useMap',
								'frameBorder',
								'contentEditable',
							],
							function () {
								T.propFix[this.toLowerCase()] = this;
							}
						),
						T.fn.extend({
							addClass: function (e) {
								var t,
									n,
									r,
									i,
									o,
									a,
									s,
									l = 0;
								if (v(e))
									return this.each(function (t) {
										T(this).addClass(e.call(this, t, bt(this)));
									});
								if ((t = yt(e)).length)
									for (; (n = this[l++]); )
										if (
											((i = bt(n)), (r = 1 === n.nodeType && ' ' + vt(i) + ' '))
										) {
											for (a = 0; (o = t[a++]); )
												r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
											i !== (s = vt(r)) && n.setAttribute('class', s);
										}
								return this;
							},
							removeClass: function (e) {
								var t,
									n,
									r,
									i,
									o,
									a,
									s,
									l = 0;
								if (v(e))
									return this.each(function (t) {
										T(this).removeClass(e.call(this, t, bt(this)));
									});
								if (!arguments.length) return this.attr('class', '');
								if ((t = yt(e)).length)
									for (; (n = this[l++]); )
										if (
											((i = bt(n)), (r = 1 === n.nodeType && ' ' + vt(i) + ' '))
										) {
											for (a = 0; (o = t[a++]); )
												for (; r.indexOf(' ' + o + ' ') > -1; )
													r = r.replace(' ' + o + ' ', ' ');
											i !== (s = vt(r)) && n.setAttribute('class', s);
										}
								return this;
							},
							toggleClass: function (e, t) {
								var n = typeof e,
									r = 'string' === n || Array.isArray(e);
								return 'boolean' == typeof t && r
									? t
										? this.addClass(e)
										: this.removeClass(e)
									: v(e)
									? this.each(function (n) {
											T(this).toggleClass(e.call(this, n, bt(this), t), t);
									  })
									: this.each(function () {
											var t, i, o, a;
											if (r)
												for (i = 0, o = T(this), a = yt(e); (t = a[i++]); )
													o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
											else
												(void 0 !== e && 'boolean' !== n) ||
													((t = bt(this)) && G.set(this, '__className__', t),
													this.setAttribute &&
														this.setAttribute(
															'class',
															t || false === e
																? ''
																: G.get(this, '__className__') || ''
														));
									  });
							},
							hasClass: function (e) {
								var t,
									n,
									r = 0;
								for (t = ' ' + e + ' '; (n = this[r++]); )
									if (
										1 === n.nodeType &&
										(' ' + vt(bt(n)) + ' ').indexOf(t) > -1
									)
										return true;
								return false;
							},
						});
					var wt = /\r/g;
					T.fn.extend({
						val: function (e) {
							var t,
								n,
								r,
								i = this[0];
							return arguments.length
								? ((r = v(e)),
								  this.each(function (n) {
										var i;
										1 === this.nodeType &&
											(null == (i = r ? e.call(this, n, T(this).val()) : e)
												? (i = '')
												: 'number' == typeof i
												? (i += '')
												: Array.isArray(i) &&
												  (i = T.map(i, function (e) {
														return null == e ? '' : e + '';
												  })),
											((t =
												T.valHooks[this.type] ||
												T.valHooks[this.nodeName.toLowerCase()]) &&
												'set' in t &&
												void 0 !== t.set(this, i, 'value')) ||
												(this.value = i));
								  }))
								: i
								? (t =
										T.valHooks[i.type] ||
										T.valHooks[i.nodeName.toLowerCase()]) &&
								  'get' in t &&
								  void 0 !== (n = t.get(i, 'value'))
									? n
									: 'string' == typeof (n = i.value)
									? n.replace(wt, '')
									: null == n
									? ''
									: n
								: void 0;
						},
					}),
						T.extend({
							valHooks: {
								option: {
									get: function (e) {
										var t = T.find.attr(e, 'value');
										return null != t ? t : vt(T.text(e));
									},
								},
								select: {
									get: function (e) {
										var t,
											n,
											r,
											i = e.options,
											o = e.selectedIndex,
											a = 'select-one' === e.type,
											s = a ? null : [],
											l = a ? o + 1 : i.length;
										for (r = o < 0 ? l : a ? o : 0; r < l; r++)
											if (
												((n = i[r]).selected || r === o) &&
												!n.disabled &&
												(!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
											) {
												if (((t = T(n).val()), a)) return t;
												s.push(t);
											}
										return s;
									},
									set: function (e, t) {
										for (
											var n, r, i = e.options, o = T.makeArray(t), a = i.length;
											a--;

										)
											((r = i[a]).selected =
												T.inArray(T.valHooks.option.get(r), o) > -1) &&
												(n = true);
										return n || (e.selectedIndex = -1), o;
									},
								},
							},
						}),
						T.each(['radio', 'checkbox'], function () {
							(T.valHooks[this] = {
								set: function (e, t) {
									if (Array.isArray(t))
										return (e.checked = T.inArray(T(e).val(), t) > -1);
								},
							}),
								g.checkOn ||
									(T.valHooks[this].get = function (e) {
										return null === e.getAttribute('value') ? 'on' : e.value;
									});
						}),
						(g.focusin = 'onfocusin' in r);
					var _t = /^(?:focusinfocus|focusoutblur)$/,
						xt = function (e) {
							e.stopPropagation();
						};
					T.extend(T.event, {
						trigger: function (e, t, n, i) {
							var o,
								a,
								s,
								l,
								c,
								u,
								f,
								d,
								h = [n || y],
								m = p.call(e, 'type') ? e.type : e,
								g = p.call(e, 'namespace') ? e.namespace.split('.') : [];
							if (
								((a = d = s = n = n || y),
								3 !== n.nodeType &&
									8 !== n.nodeType &&
									!_t.test(m + T.event.triggered) &&
									(m.indexOf('.') > -1 &&
										((g = m.split('.')), (m = g.shift()), g.sort()),
									(c = m.indexOf(':') < 0 && 'on' + m),
									((e = e[T.expando]
										? e
										: new T.Event(m, 'object' == typeof e && e)).isTrigger = i
										? 2
										: 3),
									(e.namespace = g.join('.')),
									(e.rnamespace = e.namespace
										? new RegExp(
												'(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)'
										  )
										: null),
									(e.result = void 0),
									e.target || (e.target = n),
									(t = null == t ? [e] : T.makeArray(t, [e])),
									(f = T.event.special[m] || {}),
									i || !f.trigger || false !== f.trigger.apply(n, t)))
							) {
								if (!i && !f.noBubble && !b(n)) {
									for (
										l = f.delegateType || m,
											_t.test(l + m) || (a = a.parentNode);
										a;
										a = a.parentNode
									)
										h.push(a), (s = a);
									s === (n.ownerDocument || y) &&
										h.push(s.defaultView || s.parentWindow || r);
								}
								for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
									(d = a),
										(e.type = o > 1 ? l : f.bindType || m),
										(u =
											(G.get(a, 'events') || Object.create(null))[e.type] &&
											G.get(a, 'handle')) && u.apply(a, t),
										(u = c && a[c]) &&
											u.apply &&
											X(a) &&
											((e.result = u.apply(a, t)),
											false === e.result && e.preventDefault());
								return (
									(e.type = m),
									i ||
										e.isDefaultPrevented() ||
										(f._default && false !== f._default.apply(h.pop(), t)) ||
										!X(n) ||
										(c &&
											v(n[m]) &&
											!b(n) &&
											((s = n[c]) && (n[c] = null),
											(T.event.triggered = m),
											e.isPropagationStopped() && d.addEventListener(m, xt),
											n[m](),
											e.isPropagationStopped() && d.removeEventListener(m, xt),
											(T.event.triggered = void 0),
											s && (n[c] = s))),
									e.result
								);
							}
						},
						simulate: function (e, t, n) {
							var r = T.extend(new T.Event(), n, {
								type: e,
								isSimulated: true,
							});
							T.event.trigger(r, null, t);
						},
					}),
						T.fn.extend({
							trigger: function (e, t) {
								return this.each(function () {
									T.event.trigger(e, t, this);
								});
							},
							triggerHandler: function (e, t) {
								var n = this[0];
								if (n) return T.event.trigger(e, t, n, true);
							},
						}),
						g.focusin ||
							T.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
								var n = function (e) {
									T.event.simulate(t, e.target, T.event.fix(e));
								};
								T.event.special[t] = {
									setup: function () {
										var r = this.ownerDocument || this.document || this,
											i = G.access(r, t);
										i || r.addEventListener(e, n, true),
											G.access(r, t, (i || 0) + 1);
									},
									teardown: function () {
										var r = this.ownerDocument || this.document || this,
											i = G.access(r, t) - 1;
										i
											? G.access(r, t, i)
											: (r.removeEventListener(e, n, true), G.remove(r, t));
									},
								};
							});
					var Ct = r.location,
						Tt = { guid: Date.now() },
						Et = /\?/;
					T.parseXML = function (e) {
						var t, n;
						if (!e || 'string' != typeof e) return null;
						try {
							t = new r.DOMParser().parseFromString(e, 'text/xml');
						} catch (e) {}
						return (
							(n = t && t.getElementsByTagName('parsererror')[0]),
							(t && !n) ||
								T.error(
									'Invalid XML: ' +
										(n
											? T.map(n.childNodes, function (e) {
													return e.textContent;
											  }).join('\n')
											: e)
								),
							t
						);
					};
					var kt = /\[\]$/,
						St = /\r?\n/g,
						jt = /^(?:submit|button|image|reset|file)$/i,
						Dt = /^(?:input|select|textarea|keygen)/i;
					function At(e, t, n, r) {
						var i;
						if (Array.isArray(t))
							T.each(t, function (t, i) {
								n || kt.test(e)
									? r(e, i)
									: At(
											e +
												'[' +
												('object' == typeof i && null != i ? t : '') +
												']',
											i,
											n,
											r
									  );
							});
						else if (n || 'object' !== x(t)) r(e, t);
						else for (i in t) At(e + '[' + i + ']', t[i], n, r);
					}
					(T.param = function (e, t) {
						var n,
							r = [],
							i = function (e, t) {
								var n = v(t) ? t() : t;
								r[r.length] =
									encodeURIComponent(e) +
									'=' +
									encodeURIComponent(null == n ? '' : n);
							};
						if (null == e) return '';
						if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
							T.each(e, function () {
								i(this.name, this.value);
							});
						else for (n in e) At(n, e[n], t, i);
						return r.join('&');
					}),
						T.fn.extend({
							serialize: function () {
								return T.param(this.serializeArray());
							},
							serializeArray: function () {
								return this.map(function () {
									var e = T.prop(this, 'elements');
									return e ? T.makeArray(e) : this;
								})
									.filter(function () {
										var e = this.type;
										return (
											this.name &&
											!T(this).is(':disabled') &&
											Dt.test(this.nodeName) &&
											!jt.test(e) &&
											(this.checked || !ge.test(e))
										);
									})
									.map(function (e, t) {
										var n = T(this).val();
										return null == n
											? null
											: Array.isArray(n)
											? T.map(n, function (e) {
													return { name: t.name, value: e.replace(St, '\r\n') };
											  })
											: { name: t.name, value: n.replace(St, '\r\n') };
									})
									.get();
							},
						});
					var Ot = /%20/g,
						$t = /#.*$/,
						Nt = /([?&])_=[^&]*/,
						It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
						Pt = /^(?:GET|HEAD)$/,
						Lt = /^\/\//,
						Ht = {},
						Mt = {},
						Rt = '*/'.concat('*'),
						qt = y.createElement('a');
					function Bt(e) {
						return function (t, n) {
							'string' != typeof t && ((n = t), (t = '*'));
							var r,
								i = 0,
								o = t.toLowerCase().match(M) || [];
							if (v(n))
								for (; (r = o[i++]); )
									'+' === r[0]
										? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
										: (e[r] = e[r] || []).push(n);
						};
					}
					function Ft(e, t, n, r) {
						var i = {},
							o = e === Mt;
						function a(s) {
							var l;
							return (
								(i[s] = true),
								T.each(e[s] || [], function (e, s) {
									var c = s(t, n, r);
									return 'string' != typeof c || o || i[c]
										? o
											? !(l = c)
											: void 0
										: (t.dataTypes.unshift(c), a(c), false);
								}),
								l
							);
						}
						return a(t.dataTypes[0]) || (!i['*'] && a('*'));
					}
					function Wt(e, t) {
						var n,
							r,
							i = T.ajaxSettings.flatOptions || {};
						for (n in t)
							void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
						return r && T.extend(true, e, r), e;
					}
					(qt.href = Ct.href),
						T.extend({
							active: 0,
							lastModified: {},
							etag: {},
							ajaxSettings: {
								url: Ct.href,
								type: 'GET',
								isLocal:
									/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
										Ct.protocol
									),
								global: true,
								processData: true,
								async: true,
								contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
								accepts: {
									'*': Rt,
									text: 'text/plain',
									html: 'text/html',
									xml: 'application/xml, text/xml',
									json: 'application/json, text/javascript',
								},
								contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
								responseFields: {
									xml: 'responseXML',
									text: 'responseText',
									json: 'responseJSON',
								},
								converters: {
									'* text': String,
									'text html': true,
									'text json': JSON.parse,
									'text xml': T.parseXML,
								},
								flatOptions: { url: true, context: true },
							},
							ajaxSetup: function (e, t) {
								return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e);
							},
							ajaxPrefilter: Bt(Ht),
							ajaxTransport: Bt(Mt),
							ajax: function (e, t) {
								'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
								var n,
									i,
									o,
									a,
									s,
									l,
									c,
									u,
									f,
									d,
									p = T.ajaxSetup({}, t),
									h = p.context || p,
									m = p.context && (h.nodeType || h.jquery) ? T(h) : T.event,
									g = T.Deferred(),
									v = T.Callbacks('once memory'),
									b = p.statusCode || {},
									w = {},
									_ = {},
									x = 'canceled',
									C = {
										readyState: 0,
										getResponseHeader: function (e) {
											var t;
											if (c) {
												if (!a)
													for (a = {}; (t = It.exec(o)); )
														a[t[1].toLowerCase() + ' '] = (
															a[t[1].toLowerCase() + ' '] || []
														).concat(t[2]);
												t = a[e.toLowerCase() + ' '];
											}
											return null == t ? null : t.join(', ');
										},
										getAllResponseHeaders: function () {
											return c ? o : null;
										},
										setRequestHeader: function (e, t) {
											return (
												null == c &&
													((e = _[e.toLowerCase()] = _[e.toLowerCase()] || e),
													(w[e] = t)),
												this
											);
										},
										overrideMimeType: function (e) {
											return null == c && (p.mimeType = e), this;
										},
										statusCode: function (e) {
											var t;
											if (e)
												if (c) C.always(e[C.status]);
												else for (t in e) b[t] = [b[t], e[t]];
											return this;
										},
										abort: function (e) {
											var t = e || x;
											return n && n.abort(t), E(0, t), this;
										},
									};
								if (
									(g.promise(C),
									(p.url = ((e || p.url || Ct.href) + '').replace(
										Lt,
										Ct.protocol + '//'
									)),
									(p.type = t.method || t.type || p.method || p.type),
									(p.dataTypes = (p.dataType || '*').toLowerCase().match(M) || [
										'',
									]),
									null == p.crossDomain)
								) {
									l = y.createElement('a');
									try {
										(l.href = p.url),
											(l.href = l.href),
											(p.crossDomain =
												qt.protocol + '//' + qt.host !=
												l.protocol + '//' + l.host);
									} catch (e) {
										p.crossDomain = true;
									}
								}
								if (
									(p.data &&
										p.processData &&
										'string' != typeof p.data &&
										(p.data = T.param(p.data, p.traditional)),
									Ft(Ht, p, t, C),
									c)
								)
									return C;
								for (f in ((u = T.event && p.global) &&
									0 == T.active++ &&
									T.event.trigger('ajaxStart'),
								(p.type = p.type.toUpperCase()),
								(p.hasContent = !Pt.test(p.type)),
								(i = p.url.replace($t, '')),
								p.hasContent
									? p.data &&
									  p.processData &&
									  0 ===
											(p.contentType || '').indexOf(
												'application/x-www-form-urlencoded'
											) &&
									  (p.data = p.data.replace(Ot, '+'))
									: ((d = p.url.slice(i.length)),
									  p.data &&
											(p.processData || 'string' == typeof p.data) &&
											((i += (Et.test(i) ? '&' : '?') + p.data), delete p.data),
									  false === p.cache &&
											((i = i.replace(Nt, '$1')),
											(d = (Et.test(i) ? '&' : '?') + '_=' + Tt.guid++ + d)),
									  (p.url = i + d)),
								p.ifModified &&
									(T.lastModified[i] &&
										C.setRequestHeader('If-Modified-Since', T.lastModified[i]),
									T.etag[i] && C.setRequestHeader('If-None-Match', T.etag[i])),
								((p.data && p.hasContent && false !== p.contentType) ||
									t.contentType) &&
									C.setRequestHeader('Content-Type', p.contentType),
								C.setRequestHeader(
									'Accept',
									p.dataTypes[0] && p.accepts[p.dataTypes[0]]
										? p.accepts[p.dataTypes[0]] +
												('*' !== p.dataTypes[0] ? ', ' + Rt + '; q=0.01' : '')
										: p.accepts['*']
								),
								p.headers))
									C.setRequestHeader(f, p.headers[f]);
								if (p.beforeSend && (false === p.beforeSend.call(h, C, p) || c))
									return C.abort();
								if (
									((x = 'abort'),
									v.add(p.complete),
									C.done(p.success),
									C.fail(p.error),
									(n = Ft(Mt, p, t, C)))
								) {
									if (
										((C.readyState = 1), u && m.trigger('ajaxSend', [C, p]), c)
									)
										return C;
									p.async &&
										p.timeout > 0 &&
										(s = r.setTimeout(function () {
											C.abort('timeout');
										}, p.timeout));
									try {
										(c = false), n.send(w, E);
									} catch (e) {
										if (c) throw e;
										E(-1, e);
									}
								} else E(-1, 'No Transport');
								function E(e, t, a, l) {
									var f,
										d,
										y,
										w,
										_,
										x = t;
									c ||
										((c = true),
										s && r.clearTimeout(s),
										(n = void 0),
										(o = l || ''),
										(C.readyState = e > 0 ? 4 : 0),
										(f = (e >= 200 && e < 300) || 304 === e),
										a &&
											(w = (function (e, t, n) {
												for (
													var r, i, o, a, s = e.contents, l = e.dataTypes;
													'*' === l[0];

												)
													l.shift(),
														void 0 === r &&
															(r =
																e.mimeType ||
																t.getResponseHeader('Content-Type'));
												if (r)
													for (i in s)
														if (s[i] && s[i].test(r)) {
															l.unshift(i);
															break;
														}
												if (l[0] in n) o = l[0];
												else {
													for (i in n) {
														if (!l[0] || e.converters[i + ' ' + l[0]]) {
															o = i;
															break;
														}
														a || (a = i);
													}
													o = o || a;
												}
												if (o) return o !== l[0] && l.unshift(o), n[o];
											})(p, C, a)),
										!f &&
											T.inArray('script', p.dataTypes) > -1 &&
											T.inArray('json', p.dataTypes) < 0 &&
											(p.converters['text script'] = function () {}),
										(w = (function (e, t, n, r) {
											var i,
												o,
												a,
												s,
												l,
												c = {},
												u = e.dataTypes.slice();
											if (u[1])
												for (a in e.converters)
													c[a.toLowerCase()] = e.converters[a];
											for (o = u.shift(); o; )
												if (
													(e.responseFields[o] && (n[e.responseFields[o]] = t),
													!l &&
														r &&
														e.dataFilter &&
														(t = e.dataFilter(t, e.dataType)),
													(l = o),
													(o = u.shift()))
												)
													if ('*' === o) o = l;
													else if ('*' !== l && l !== o) {
														if (!(a = c[l + ' ' + o] || c['* ' + o]))
															for (i in c)
																if (
																	(s = i.split(' '))[1] === o &&
																	(a = c[l + ' ' + s[0]] || c['* ' + s[0]])
																) {
																	true === a
																		? (a = c[i])
																		: true !== c[i] &&
																		  ((o = s[0]), u.unshift(s[1]));
																	break;
																}
														if (true !== a)
															if (a && e.throws) t = a(t);
															else
																try {
																	t = a(t);
																} catch (e) {
																	return {
																		state: 'parsererror',
																		error: a
																			? e
																			: 'No conversion from ' + l + ' to ' + o,
																	};
																}
													}
											return { state: 'success', data: t };
										})(p, w, C, f)),
										f
											? (p.ifModified &&
													((_ = C.getResponseHeader('Last-Modified')) &&
														(T.lastModified[i] = _),
													(_ = C.getResponseHeader('etag')) && (T.etag[i] = _)),
											  204 === e || 'HEAD' === p.type
													? (x = 'nocontent')
													: 304 === e
													? (x = 'notmodified')
													: ((x = w.state), (d = w.data), (f = !(y = w.error))))
											: ((y = x),
											  (!e && x) || ((x = 'error'), e < 0 && (e = 0))),
										(C.status = e),
										(C.statusText = (t || x) + ''),
										f
											? g.resolveWith(h, [d, x, C])
											: g.rejectWith(h, [C, x, y]),
										C.statusCode(b),
										(b = void 0),
										u &&
											m.trigger(f ? 'ajaxSuccess' : 'ajaxError', [
												C,
												p,
												f ? d : y,
											]),
										v.fireWith(h, [C, x]),
										u &&
											(m.trigger('ajaxComplete', [C, p]),
											--T.active || T.event.trigger('ajaxStop')));
								}
								return C;
							},
							getJSON: function (e, t, n) {
								return T.get(e, t, n, 'json');
							},
							getScript: function (e, t) {
								return T.get(e, void 0, t, 'script');
							},
						}),
						T.each(['get', 'post'], function (e, t) {
							T[t] = function (e, n, r, i) {
								return (
									v(n) && ((i = i || r), (r = n), (n = void 0)),
									T.ajax(
										T.extend(
											{ url: e, type: t, dataType: i, data: n, success: r },
											T.isPlainObject(e) && e
										)
									)
								);
							};
						}),
						T.ajaxPrefilter(function (e) {
							var t;
							for (t in e.headers)
								'content-type' === t.toLowerCase() &&
									(e.contentType = e.headers[t] || '');
						}),
						(T._evalUrl = function (e, t, n) {
							return T.ajax({
								url: e,
								type: 'GET',
								dataType: 'script',
								cache: true,
								async: false,
								global: false,
								converters: { 'text script': function () {} },
								dataFilter: function (e) {
									T.globalEval(e, t, n);
								},
							});
						}),
						T.fn.extend({
							wrapAll: function (e) {
								var t;
								return (
									this[0] &&
										(v(e) && (e = e.call(this[0])),
										(t = T(e, this[0].ownerDocument).eq(0).clone(true)),
										this[0].parentNode && t.insertBefore(this[0]),
										t
											.map(function () {
												for (var e = this; e.firstElementChild; )
													e = e.firstElementChild;
												return e;
											})
											.append(this)),
									this
								);
							},
							wrapInner: function (e) {
								return v(e)
									? this.each(function (t) {
											T(this).wrapInner(e.call(this, t));
									  })
									: this.each(function () {
											var t = T(this),
												n = t.contents();
											n.length ? n.wrapAll(e) : t.append(e);
									  });
							},
							wrap: function (e) {
								var t = v(e);
								return this.each(function (n) {
									T(this).wrapAll(t ? e.call(this, n) : e);
								});
							},
							unwrap: function (e) {
								return (
									this.parent(e)
										.not('body')
										.each(function () {
											T(this).replaceWith(this.childNodes);
										}),
									this
								);
							},
						}),
						(T.expr.pseudos.hidden = function (e) {
							return !T.expr.pseudos.visible(e);
						}),
						(T.expr.pseudos.visible = function (e) {
							return !!(
								e.offsetWidth ||
								e.offsetHeight ||
								e.getClientRects().length
							);
						}),
						(T.ajaxSettings.xhr = function () {
							try {
								return new r.XMLHttpRequest();
							} catch (e) {}
						});
					var Ut = { 0: 200, 1223: 204 },
						zt = T.ajaxSettings.xhr();
					(g.cors = !!zt && 'withCredentials' in zt),
						(g.ajax = zt = !!zt),
						T.ajaxTransport(function (e) {
							var t, n;
							if (g.cors || (zt && !e.crossDomain))
								return {
									send: function (i, o) {
										var a,
											s = e.xhr();
										if (
											(s.open(e.type, e.url, e.async, e.username, e.password),
											e.xhrFields)
										)
											for (a in e.xhrFields) s[a] = e.xhrFields[a];
										for (a in (e.mimeType &&
											s.overrideMimeType &&
											s.overrideMimeType(e.mimeType),
										e.crossDomain ||
											i['X-Requested-With'] ||
											(i['X-Requested-With'] = 'XMLHttpRequest'),
										i))
											s.setRequestHeader(a, i[a]);
										(t = function (e) {
											return function () {
												t &&
													((t =
														n =
														s.onload =
														s.onerror =
														s.onabort =
														s.ontimeout =
														s.onreadystatechange =
															null),
													'abort' === e
														? s.abort()
														: 'error' === e
														? 'number' != typeof s.status
															? o(0, 'error')
															: o(s.status, s.statusText)
														: o(
																Ut[s.status] || s.status,
																s.statusText,
																'text' !== (s.responseType || 'text') ||
																	'string' != typeof s.responseText
																	? { binary: s.response }
																	: { text: s.responseText },
																s.getAllResponseHeaders()
														  ));
											};
										}),
											(s.onload = t()),
											(n = s.onerror = s.ontimeout = t('error')),
											void 0 !== s.onabort
												? (s.onabort = n)
												: (s.onreadystatechange = function () {
														4 === s.readyState &&
															r.setTimeout(function () {
																t && n();
															});
												  }),
											(t = t('abort'));
										try {
											s.send((e.hasContent && e.data) || null);
										} catch (e) {
											if (t) throw e;
										}
									},
									abort: function () {
										t && t();
									},
								};
						}),
						T.ajaxPrefilter(function (e) {
							e.crossDomain && (e.contents.script = false);
						}),
						T.ajaxSetup({
							accepts: {
								script:
									'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
							},
							contents: { script: /\b(?:java|ecma)script\b/ },
							converters: {
								'text script': function (e) {
									return T.globalEval(e), e;
								},
							},
						}),
						T.ajaxPrefilter('script', function (e) {
							void 0 === e.cache && (e.cache = false),
								e.crossDomain && (e.type = 'GET');
						}),
						T.ajaxTransport('script', function (e) {
							var t, n;
							if (e.crossDomain || e.scriptAttrs)
								return {
									send: function (r, i) {
										(t = T('<script>')
											.attr(e.scriptAttrs || {})
											.prop({ charset: e.scriptCharset, src: e.url })
											.on(
												'load error',
												(n = function (e) {
													t.remove(),
														(n = null),
														e && i('error' === e.type ? 404 : 200, e.type);
												})
											)),
											y.head.appendChild(t[0]);
									},
									abort: function () {
										n && n();
									},
								};
						});
					var Vt,
						Qt = [],
						Kt = /(=)\?(?=&|$)|\?\?/;
					T.ajaxSetup({
						jsonp: 'callback',
						jsonpCallback: function () {
							var e = Qt.pop() || T.expando + '_' + Tt.guid++;
							return (this[e] = true), e;
						},
					}),
						T.ajaxPrefilter('json jsonp', function (e, t, n) {
							var i,
								o,
								a,
								s =
									false !== e.jsonp &&
									(Kt.test(e.url)
										? 'url'
										: 'string' == typeof e.data &&
										  0 ===
												(e.contentType || '').indexOf(
													'application/x-www-form-urlencoded'
												) &&
										  Kt.test(e.data) &&
										  'data');
							if (s || 'jsonp' === e.dataTypes[0])
								return (
									(i = e.jsonpCallback =
										v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
									s
										? (e[s] = e[s].replace(Kt, '$1' + i))
										: false !== e.jsonp &&
										  (e.url +=
												(Et.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
									(e.converters['script json'] = function () {
										return a || T.error(i + ' was not called'), a[0];
									}),
									(e.dataTypes[0] = 'json'),
									(o = r[i]),
									(r[i] = function () {
										a = arguments;
									}),
									n.always(function () {
										void 0 === o ? T(r).removeProp(i) : (r[i] = o),
											e[i] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(i)),
											a && v(o) && o(a[0]),
											(a = o = void 0);
									}),
									'script'
								);
						}),
						(g.createHTMLDocument =
							(((Vt = y.implementation.createHTMLDocument('').body).innerHTML =
								'<form></form><form></form>'),
							2 === Vt.childNodes.length)),
						(T.parseHTML = function (e, t, n) {
							return 'string' != typeof e
								? []
								: ('boolean' == typeof t && ((n = t), (t = false)),
								  t ||
										(g.createHTMLDocument
											? (((r = (t =
													y.implementation.createHTMLDocument(
														''
													)).createElement('base')).href = y.location.href),
											  t.head.appendChild(r))
											: (t = y)),
								  (o = !n && []),
								  (i = O.exec(e))
										? [t.createElement(i[1])]
										: ((i = Ce([e], t, o)),
										  o && o.length && T(o).remove(),
										  T.merge([], i.childNodes)));
							var r, i, o;
						}),
						(T.fn.load = function (e, t, n) {
							var r,
								i,
								o,
								a = this,
								s = e.indexOf(' ');
							return (
								s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
								v(t)
									? ((n = t), (t = void 0))
									: t && 'object' == typeof t && (i = 'POST'),
								a.length > 0 &&
									T.ajax({
										url: e,
										type: i || 'GET',
										dataType: 'html',
										data: t,
									})
										.done(function (e) {
											(o = arguments),
												a.html(
													r ? T('<div>').append(T.parseHTML(e)).find(r) : e
												);
										})
										.always(
											n &&
												function (e, t) {
													a.each(function () {
														n.apply(this, o || [e.responseText, t, e]);
													});
												}
										),
								this
							);
						}),
						(T.expr.pseudos.animated = function (e) {
							return T.grep(T.timers, function (t) {
								return e === t.elem;
							}).length;
						}),
						(T.offset = {
							setOffset: function (e, t, n) {
								var r,
									i,
									o,
									a,
									s,
									l,
									c = T.css(e, 'position'),
									u = T(e),
									f = {};
								'static' === c && (e.style.position = 'relative'),
									(s = u.offset()),
									(o = T.css(e, 'top')),
									(l = T.css(e, 'left')),
									('absolute' === c || 'fixed' === c) &&
									(o + l).indexOf('auto') > -1
										? ((a = (r = u.position()).top), (i = r.left))
										: ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
									v(t) && (t = t.call(e, n, T.extend({}, s))),
									null != t.top && (f.top = t.top - s.top + a),
									null != t.left && (f.left = t.left - s.left + i),
									'using' in t ? t.using.call(e, f) : u.css(f);
							},
						}),
						T.fn.extend({
							offset: function (e) {
								if (arguments.length)
									return void 0 === e
										? this
										: this.each(function (t) {
												T.offset.setOffset(this, e, t);
										  });
								var t,
									n,
									r = this[0];
								return r
									? r.getClientRects().length
										? ((t = r.getBoundingClientRect()),
										  (n = r.ownerDocument.defaultView),
										  {
												top: t.top + n.pageYOffset,
												left: t.left + n.pageXOffset,
										  })
										: { top: 0, left: 0 }
									: void 0;
							},
							position: function () {
								if (this[0]) {
									var e,
										t,
										n,
										r = this[0],
										i = { top: 0, left: 0 };
									if ('fixed' === T.css(r, 'position'))
										t = r.getBoundingClientRect();
									else {
										for (
											t = this.offset(),
												n = r.ownerDocument,
												e = r.offsetParent || n.documentElement;
											e &&
											(e === n.body || e === n.documentElement) &&
											'static' === T.css(e, 'position');

										)
											e = e.parentNode;
										e &&
											e !== r &&
											1 === e.nodeType &&
											(((i = T(e).offset()).top += T.css(
												e,
												'borderTopWidth',
												true
											)),
											(i.left += T.css(e, 'borderLeftWidth', true)));
									}
									return {
										top: t.top - i.top - T.css(r, 'marginTop', true),
										left: t.left - i.left - T.css(r, 'marginLeft', true),
									};
								}
							},
							offsetParent: function () {
								return this.map(function () {
									for (
										var e = this.offsetParent;
										e && 'static' === T.css(e, 'position');

									)
										e = e.offsetParent;
									return e || ae;
								});
							},
						}),
						T.each(
							{ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
							function (e, t) {
								var n = 'pageYOffset' === t;
								T.fn[e] = function (r) {
									return z(
										this,
										function (e, r, i) {
											var o;
											if (
												(b(e)
													? (o = e)
													: 9 === e.nodeType && (o = e.defaultView),
												void 0 === i)
											)
												return o ? o[t] : e[r];
											o
												? o.scrollTo(
														n ? o.pageXOffset : i,
														n ? i : o.pageYOffset
												  )
												: (e[r] = i);
										},
										e,
										r,
										arguments.length
									);
								};
							}
						),
						T.each(['top', 'left'], function (e, t) {
							T.cssHooks[t] = ze(g.pixelPosition, function (e, n) {
								if (n)
									return (
										(n = Ue(e, t)), qe.test(n) ? T(e).position()[t] + 'px' : n
									);
							});
						}),
						T.each({ Height: 'height', Width: 'width' }, function (e, t) {
							T.each(
								{ padding: 'inner' + e, content: t, '': 'outer' + e },
								function (n, r) {
									T.fn[r] = function (i, o) {
										var a = arguments.length && (n || 'boolean' != typeof i),
											s = n || (true === i || true === o ? 'margin' : 'border');
										return z(
											this,
											function (t, n, i) {
												var o;
												return b(t)
													? 0 === r.indexOf('outer')
														? t['inner' + e]
														: t.document.documentElement['client' + e]
													: 9 === t.nodeType
													? ((o = t.documentElement),
													  Math.max(
															t.body['scroll' + e],
															o['scroll' + e],
															t.body['offset' + e],
															o['offset' + e],
															o['client' + e]
													  ))
													: void 0 === i
													? T.css(t, n, s)
													: T.style(t, n, i, s);
											},
											t,
											a ? i : void 0,
											a
										);
									};
								}
							);
						}),
						T.each(
							[
								'ajaxStart',
								'ajaxStop',
								'ajaxComplete',
								'ajaxError',
								'ajaxSuccess',
								'ajaxSend',
							],
							function (e, t) {
								T.fn[t] = function (e) {
									return this.on(t, e);
								};
							}
						),
						T.fn.extend({
							bind: function (e, t, n) {
								return this.on(e, null, t, n);
							},
							unbind: function (e, t) {
								return this.off(e, null, t);
							},
							delegate: function (e, t, n, r) {
								return this.on(t, e, n, r);
							},
							undelegate: function (e, t, n) {
								return 1 === arguments.length
									? this.off(e, '**')
									: this.off(t, e || '**', n);
							},
							hover: function (e, t) {
								return this.mouseenter(e).mouseleave(t || e);
							},
						}),
						T.each(
							'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
								' '
							),
							function (e, t) {
								T.fn[t] = function (e, n) {
									return arguments.length > 0
										? this.on(t, null, e, n)
										: this.trigger(t);
								};
							}
						);
					var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
					(T.proxy = function (e, t) {
						var n, r, i;
						if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
							return (
								(r = s.call(arguments, 2)),
								(i = function () {
									return e.apply(t || this, r.concat(s.call(arguments)));
								}),
								(i.guid = e.guid = e.guid || T.guid++),
								i
							);
					}),
						(T.holdReady = function (e) {
							e ? T.readyWait++ : T.ready(true);
						}),
						(T.isArray = Array.isArray),
						(T.parseJSON = JSON.parse),
						(T.nodeName = A),
						(T.isFunction = v),
						(T.isWindow = b),
						(T.camelCase = Y),
						(T.type = x),
						(T.now = Date.now),
						(T.isNumeric = function (e) {
							var t = T.type(e);
							return (
								('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
							);
						}),
						(T.trim = function (e) {
							return null == e ? '' : (e + '').replace(Yt, '');
						}),
						void 0 ===
							(n = function () {
								return T;
							}.apply(t, [])) || (e.exports = n);
					var Xt = r.jQuery,
						Jt = r.$;
					return (
						(T.noConflict = function (e) {
							return (
								r.$ === T && (r.$ = Jt),
								e && r.jQuery === T && (r.jQuery = Xt),
								T
							);
						}),
						void 0 === i && (r.jQuery = r.$ = T),
						T
					);
				});
			},
			585: function () {
				(function ($) {
					$.extend({
						metadata: {
							defaults: {
								type: 'class',
								name: 'metadata',
								cre: /({.*})/,
								single: 'metadata',
							},
							setType: function (e, t) {
								(this.defaults.type = e), (this.defaults.name = t);
							},
							get: function (elem, opts) {
								var settings = $.extend({}, this.defaults, opts);
								settings.single.length || (settings.single = 'metadata');
								var data = $.data(elem, settings.single);
								if (data) return data;
								if (((data = '{}'), 'class' == settings.type)) {
									var m = settings.cre.exec(elem.className);
									m && (data = m[1]);
								} else if ('elem' == settings.type) {
									if (!elem.getElementsByTagName) return;
									var e = elem.getElementsByTagName(settings.name);
									e.length && (data = $.trim(e[0].innerHTML));
								} else if (null != elem.getAttribute) {
									var attr = elem.getAttribute(settings.name);
									attr && (data = attr);
								}
								return (
									data.indexOf('{') < 0 && (data = '{' + data + '}'),
									(data = eval('(' + data + ')')),
									$.data(elem, settings.single, data),
									data
								);
							},
						},
					}),
						($.fn.metadata = function (e) {
							return $.metadata.get(this[0], e);
						});
				})(jQuery);
			},
			568: function (e, t, n) {
				!(function () {
					var t = n(12),
						r = n(487).utf8,
						i = n(738),
						o = n(487).bin,
						a = function (e, n) {
							e.constructor == String
								? (e =
										n && 'binary' === n.encoding
											? o.stringToBytes(e)
											: r.stringToBytes(e))
								: i(e)
								? (e = Array.prototype.slice.call(e, 0))
								: Array.isArray(e) ||
								  e.constructor === Uint8Array ||
								  (e = e.toString());
							for (
								var s = t.bytesToWords(e),
									l = 8 * e.length,
									c = 1732584193,
									u = -271733879,
									f = -1732584194,
									d = 271733878,
									p = 0;
								p < s.length;
								p++
							)
								s[p] =
									(16711935 & ((s[p] << 8) | (s[p] >>> 24))) |
									(4278255360 & ((s[p] << 24) | (s[p] >>> 8)));
							(s[l >>> 5] |= 128 << l % 32),
								(s[14 + (((l + 64) >>> 9) << 4)] = l);
							var h = a._ff,
								m = a._gg,
								g = a._hh,
								v = a._ii;
							for (p = 0; p < s.length; p += 16) {
								var b = c,
									y = u,
									w = f,
									_ = d;
								(c = h(c, u, f, d, s[p + 0], 7, -680876936)),
									(d = h(d, c, u, f, s[p + 1], 12, -389564586)),
									(f = h(f, d, c, u, s[p + 2], 17, 606105819)),
									(u = h(u, f, d, c, s[p + 3], 22, -1044525330)),
									(c = h(c, u, f, d, s[p + 4], 7, -176418897)),
									(d = h(d, c, u, f, s[p + 5], 12, 1200080426)),
									(f = h(f, d, c, u, s[p + 6], 17, -1473231341)),
									(u = h(u, f, d, c, s[p + 7], 22, -45705983)),
									(c = h(c, u, f, d, s[p + 8], 7, 1770035416)),
									(d = h(d, c, u, f, s[p + 9], 12, -1958414417)),
									(f = h(f, d, c, u, s[p + 10], 17, -42063)),
									(u = h(u, f, d, c, s[p + 11], 22, -1990404162)),
									(c = h(c, u, f, d, s[p + 12], 7, 1804603682)),
									(d = h(d, c, u, f, s[p + 13], 12, -40341101)),
									(f = h(f, d, c, u, s[p + 14], 17, -1502002290)),
									(c = m(
										c,
										(u = h(u, f, d, c, s[p + 15], 22, 1236535329)),
										f,
										d,
										s[p + 1],
										5,
										-165796510
									)),
									(d = m(d, c, u, f, s[p + 6], 9, -1069501632)),
									(f = m(f, d, c, u, s[p + 11], 14, 643717713)),
									(u = m(u, f, d, c, s[p + 0], 20, -373897302)),
									(c = m(c, u, f, d, s[p + 5], 5, -701558691)),
									(d = m(d, c, u, f, s[p + 10], 9, 38016083)),
									(f = m(f, d, c, u, s[p + 15], 14, -660478335)),
									(u = m(u, f, d, c, s[p + 4], 20, -405537848)),
									(c = m(c, u, f, d, s[p + 9], 5, 568446438)),
									(d = m(d, c, u, f, s[p + 14], 9, -1019803690)),
									(f = m(f, d, c, u, s[p + 3], 14, -187363961)),
									(u = m(u, f, d, c, s[p + 8], 20, 1163531501)),
									(c = m(c, u, f, d, s[p + 13], 5, -1444681467)),
									(d = m(d, c, u, f, s[p + 2], 9, -51403784)),
									(f = m(f, d, c, u, s[p + 7], 14, 1735328473)),
									(c = g(
										c,
										(u = m(u, f, d, c, s[p + 12], 20, -1926607734)),
										f,
										d,
										s[p + 5],
										4,
										-378558
									)),
									(d = g(d, c, u, f, s[p + 8], 11, -2022574463)),
									(f = g(f, d, c, u, s[p + 11], 16, 1839030562)),
									(u = g(u, f, d, c, s[p + 14], 23, -35309556)),
									(c = g(c, u, f, d, s[p + 1], 4, -1530992060)),
									(d = g(d, c, u, f, s[p + 4], 11, 1272893353)),
									(f = g(f, d, c, u, s[p + 7], 16, -155497632)),
									(u = g(u, f, d, c, s[p + 10], 23, -1094730640)),
									(c = g(c, u, f, d, s[p + 13], 4, 681279174)),
									(d = g(d, c, u, f, s[p + 0], 11, -358537222)),
									(f = g(f, d, c, u, s[p + 3], 16, -722521979)),
									(u = g(u, f, d, c, s[p + 6], 23, 76029189)),
									(c = g(c, u, f, d, s[p + 9], 4, -640364487)),
									(d = g(d, c, u, f, s[p + 12], 11, -421815835)),
									(f = g(f, d, c, u, s[p + 15], 16, 530742520)),
									(c = v(
										c,
										(u = g(u, f, d, c, s[p + 2], 23, -995338651)),
										f,
										d,
										s[p + 0],
										6,
										-198630844
									)),
									(d = v(d, c, u, f, s[p + 7], 10, 1126891415)),
									(f = v(f, d, c, u, s[p + 14], 15, -1416354905)),
									(u = v(u, f, d, c, s[p + 5], 21, -57434055)),
									(c = v(c, u, f, d, s[p + 12], 6, 1700485571)),
									(d = v(d, c, u, f, s[p + 3], 10, -1894986606)),
									(f = v(f, d, c, u, s[p + 10], 15, -1051523)),
									(u = v(u, f, d, c, s[p + 1], 21, -2054922799)),
									(c = v(c, u, f, d, s[p + 8], 6, 1873313359)),
									(d = v(d, c, u, f, s[p + 15], 10, -30611744)),
									(f = v(f, d, c, u, s[p + 6], 15, -1560198380)),
									(u = v(u, f, d, c, s[p + 13], 21, 1309151649)),
									(c = v(c, u, f, d, s[p + 4], 6, -145523070)),
									(d = v(d, c, u, f, s[p + 11], 10, -1120210379)),
									(f = v(f, d, c, u, s[p + 2], 15, 718787259)),
									(u = v(u, f, d, c, s[p + 9], 21, -343485551)),
									(c = (c + b) >>> 0),
									(u = (u + y) >>> 0),
									(f = (f + w) >>> 0),
									(d = (d + _) >>> 0);
							}
							return t.endian([c, u, f, d]);
						};
					(a._ff = function (e, t, n, r, i, o, a) {
						var s = e + ((t & n) | (~t & r)) + (i >>> 0) + a;
						return ((s << o) | (s >>> (32 - o))) + t;
					}),
						(a._gg = function (e, t, n, r, i, o, a) {
							var s = e + ((t & r) | (n & ~r)) + (i >>> 0) + a;
							return ((s << o) | (s >>> (32 - o))) + t;
						}),
						(a._hh = function (e, t, n, r, i, o, a) {
							var s = e + (t ^ n ^ r) + (i >>> 0) + a;
							return ((s << o) | (s >>> (32 - o))) + t;
						}),
						(a._ii = function (e, t, n, r, i, o, a) {
							var s = e + (n ^ (t | ~r)) + (i >>> 0) + a;
							return ((s << o) | (s >>> (32 - o))) + t;
						}),
						(a._blocksize = 16),
						(a._digestsize = 16),
						(e.exports = function (e, n) {
							if (null == e) throw new Error('Illegal argument ' + e);
							var r = t.wordsToBytes(a(e, n));
							return n && n.asBytes
								? r
								: n && n.asString
								? o.bytesToString(r)
								: t.bytesToHex(r);
						});
				})();
			},
			981: function (e, t, n) {
				'use strict';
				n.r(t);
				/**!
				 * @fileOverview Kickass library to create and place poppers near their reference elements.
				 * @version 1.16.1
				 * @license
				 * Copyright (c) 2016 Federico Zivolo and contributors
				 *
				 * Permission is hereby granted, free of charge, to any person obtaining a copy
				 * of this software and associated documentation files (the "Software"), to deal
				 * in the Software without restriction, including without limitation the rights
				 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
				 * copies of the Software, and to permit persons to whom the Software is
				 * furnished to do so, subject to the following conditions:
				 *
				 * The above copyright notice and this permission notice shall be included in all
				 * copies or substantial portions of the Software.
				 *
				 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
				 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
				 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
				 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
				 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
				 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
				 * SOFTWARE.
				 */
				var r =
						'undefined' != typeof window &&
						'undefined' != typeof document &&
						'undefined' != typeof navigator,
					i = (function () {
						for (
							var e = ['Edge', 'Trident', 'Firefox'], t = 0;
							t < e.length;
							t += 1
						)
							if (r && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
						return 0;
					})();
				var o =
					r && window.Promise
						? function (e) {
								var t = false;
								return function () {
									t ||
										((t = true),
										window.Promise.resolve().then(function () {
											(t = false), e();
										}));
								};
						  }
						: function (e) {
								var t = false;
								return function () {
									t ||
										((t = true),
										setTimeout(function () {
											(t = false), e();
										}, i));
								};
						  };
				function a(e) {
					return e && '[object Function]' === {}.toString.call(e);
				}
				function s(e, t) {
					if (1 !== e.nodeType) return [];
					var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
					return t ? n[t] : n;
				}
				function l(e) {
					return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
				}
				function c(e) {
					if (!e) return document.body;
					switch (e.nodeName) {
						case 'HTML':
						case 'BODY':
							return e.ownerDocument.body;
						case '#document':
							return e.body;
					}
					var t = s(e),
						n = t.overflow,
						r = t.overflowX,
						i = t.overflowY;
					return /(auto|scroll|overlay)/.test(n + i + r) ? e : c(l(e));
				}
				function u(e) {
					return e && e.referenceNode ? e.referenceNode : e;
				}
				var f = r && !(!window.MSInputMethodContext || !document.documentMode),
					d = r && /MSIE 10/.test(navigator.userAgent);
				function p(e) {
					return 11 === e ? f : 10 === e ? d : f || d;
				}
				function h(e) {
					if (!e) return document.documentElement;
					for (
						var t = p(10) ? document.body : null, n = e.offsetParent || null;
						n === t && e.nextElementSibling;

					)
						n = (e = e.nextElementSibling).offsetParent;
					var r = n && n.nodeName;
					return r && 'BODY' !== r && 'HTML' !== r
						? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) &&
						  'static' === s(n, 'position')
							? h(n)
							: n
						: e
						? e.ownerDocument.documentElement
						: document.documentElement;
				}
				function m(e) {
					return null !== e.parentNode ? m(e.parentNode) : e;
				}
				function g(e, t) {
					if (!(e && e.nodeType && t && t.nodeType))
						return document.documentElement;
					var n =
							e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
						r = n ? e : t,
						i = n ? t : e,
						o = document.createRange();
					o.setStart(r, 0), o.setEnd(i, 0);
					var a,
						s,
						l = o.commonAncestorContainer;
					if ((e !== l && t !== l) || r.contains(i))
						return 'BODY' === (s = (a = l).nodeName) ||
							('HTML' !== s && h(a.firstElementChild) !== a)
							? h(l)
							: l;
					var c = m(e);
					return c.host ? g(c.host, t) : g(e, m(t).host);
				}
				function v(e) {
					var t =
							'top' ===
							(arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: 'top')
								? 'scrollTop'
								: 'scrollLeft',
						n = e.nodeName;
					if ('BODY' === n || 'HTML' === n) {
						var r = e.ownerDocument.documentElement;
						return (e.ownerDocument.scrollingElement || r)[t];
					}
					return e[t];
				}
				function b(e, t) {
					var n = 'x' === t ? 'Left' : 'Top',
						r = 'Left' === n ? 'Right' : 'Bottom';
					return (
						parseFloat(e['border' + n + 'Width']) +
						parseFloat(e['border' + r + 'Width'])
					);
				}
				function y(e, t, n, r) {
					return Math.max(
						t['offset' + e],
						t['scroll' + e],
						n['client' + e],
						n['offset' + e],
						n['scroll' + e],
						p(10)
							? parseInt(n['offset' + e]) +
									parseInt(r['margin' + ('Height' === e ? 'Top' : 'Left')]) +
									parseInt(r['margin' + ('Height' === e ? 'Bottom' : 'Right')])
							: 0
					);
				}
				function w(e) {
					var t = e.body,
						n = e.documentElement,
						r = p(10) && getComputedStyle(n);
					return { height: y('Height', t, n, r), width: y('Width', t, n, r) };
				}
				var _ = (function () {
						function e(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								(r.enumerable = r.enumerable || false),
									(r.configurable = true),
									'value' in r && (r.writable = true),
									Object.defineProperty(e, r.key, r);
							}
						}
						return function (t, n, r) {
							return n && e(t.prototype, n), r && e(t, r), t;
						};
					})(),
					x = function (e, t, n) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: n,
										enumerable: true,
										configurable: true,
										writable: true,
								  })
								: (e[t] = n),
							e
						);
					},
					C =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = arguments[t];
								for (var r in n)
									Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
							}
							return e;
						};
				function T(e) {
					return C({}, e, {
						right: e.left + e.width,
						bottom: e.top + e.height,
					});
				}
				function E(e) {
					var t = {};
					try {
						if (p(10)) {
							t = e.getBoundingClientRect();
							var n = v(e, 'top'),
								r = v(e, 'left');
							(t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
						} else t = e.getBoundingClientRect();
					} catch (e) {}
					var i = {
							left: t.left,
							top: t.top,
							width: t.right - t.left,
							height: t.bottom - t.top,
						},
						o = 'HTML' === e.nodeName ? w(e.ownerDocument) : {},
						a = o.width || e.clientWidth || i.width,
						l = o.height || e.clientHeight || i.height,
						c = e.offsetWidth - a,
						u = e.offsetHeight - l;
					if (c || u) {
						var f = s(e);
						(c -= b(f, 'x')), (u -= b(f, 'y')), (i.width -= c), (i.height -= u);
					}
					return T(i);
				}
				function k(e, t) {
					var n =
							arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						r = p(10),
						i = 'HTML' === t.nodeName,
						o = E(e),
						a = E(t),
						l = c(e),
						u = s(t),
						f = parseFloat(u.borderTopWidth),
						d = parseFloat(u.borderLeftWidth);
					n &&
						i &&
						((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
					var h = T({
						top: o.top - a.top - f,
						left: o.left - a.left - d,
						width: o.width,
						height: o.height,
					});
					if (((h.marginTop = 0), (h.marginLeft = 0), !r && i)) {
						var m = parseFloat(u.marginTop),
							g = parseFloat(u.marginLeft);
						(h.top -= f - m),
							(h.bottom -= f - m),
							(h.left -= d - g),
							(h.right -= d - g),
							(h.marginTop = m),
							(h.marginLeft = g);
					}
					return (
						(r && !n ? t.contains(l) : t === l && 'BODY' !== l.nodeName) &&
							(h = (function (e, t) {
								var n =
										arguments.length > 2 &&
										void 0 !== arguments[2] &&
										arguments[2],
									r = v(t, 'top'),
									i = v(t, 'left'),
									o = n ? -1 : 1;
								return (
									(e.top += r * o),
									(e.bottom += r * o),
									(e.left += i * o),
									(e.right += i * o),
									e
								);
							})(h, t)),
						h
					);
				}
				function S(e) {
					var t = e.nodeName;
					if ('BODY' === t || 'HTML' === t) return false;
					if ('fixed' === s(e, 'position')) return true;
					var n = l(e);
					return !!n && S(n);
				}
				function j(e) {
					if (!e || !e.parentElement || p()) return document.documentElement;
					for (var t = e.parentElement; t && 'none' === s(t, 'transform'); )
						t = t.parentElement;
					return t || document.documentElement;
				}
				function D(e, t, n, r) {
					var i =
							arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
						o = { top: 0, left: 0 },
						a = i ? j(e) : g(e, u(t));
					if ('viewport' === r)
						o = (function (e) {
							var t =
									arguments.length > 1 &&
									void 0 !== arguments[1] &&
									arguments[1],
								n = e.ownerDocument.documentElement,
								r = k(e, n),
								i = Math.max(n.clientWidth, window.innerWidth || 0),
								o = Math.max(n.clientHeight, window.innerHeight || 0),
								a = t ? 0 : v(n),
								s = t ? 0 : v(n, 'left');
							return T({
								top: a - r.top + r.marginTop,
								left: s - r.left + r.marginLeft,
								width: i,
								height: o,
							});
						})(a, i);
					else {
						var s = void 0;
						'scrollParent' === r
							? 'BODY' === (s = c(l(t))).nodeName &&
							  (s = e.ownerDocument.documentElement)
							: (s = 'window' === r ? e.ownerDocument.documentElement : r);
						var f = k(s, a, i);
						if ('HTML' !== s.nodeName || S(a)) o = f;
						else {
							var d = w(e.ownerDocument),
								p = d.height,
								h = d.width;
							(o.top += f.top - f.marginTop),
								(o.bottom = p + f.top),
								(o.left += f.left - f.marginLeft),
								(o.right = h + f.left);
						}
					}
					var m = 'number' == typeof (n = n || 0);
					return (
						(o.left += m ? n : n.left || 0),
						(o.top += m ? n : n.top || 0),
						(o.right -= m ? n : n.right || 0),
						(o.bottom -= m ? n : n.bottom || 0),
						o
					);
				}
				function A(e, t, n, r, i) {
					var o =
						arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
					if (-1 === e.indexOf('auto')) return e;
					var a = D(n, r, o, i),
						s = {
							top: { width: a.width, height: t.top - a.top },
							right: { width: a.right - t.right, height: a.height },
							bottom: { width: a.width, height: a.bottom - t.bottom },
							left: { width: t.left - a.left, height: a.height },
						},
						l = Object.keys(s)
							.map(function (e) {
								return C({ key: e }, s[e], {
									area: ((t = s[e]), t.width * t.height),
								});
								var t;
							})
							.sort(function (e, t) {
								return t.area - e.area;
							}),
						c = l.filter(function (e) {
							var t = e.width,
								r = e.height;
							return t >= n.clientWidth && r >= n.clientHeight;
						}),
						u = c.length > 0 ? c[0].key : l[0].key,
						f = e.split('-')[1];
					return u + (f ? '-' + f : '');
				}
				function O(e, t, n) {
					var r =
						arguments.length > 3 && void 0 !== arguments[3]
							? arguments[3]
							: null;
					return k(n, r ? j(t) : g(t, u(n)), r);
				}
				function $(e) {
					var t = e.ownerDocument.defaultView.getComputedStyle(e),
						n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
						r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
					return { width: e.offsetWidth + r, height: e.offsetHeight + n };
				}
				function N(e) {
					var t = {
						left: 'right',
						right: 'left',
						bottom: 'top',
						top: 'bottom',
					};
					return e.replace(/left|right|bottom|top/g, function (e) {
						return t[e];
					});
				}
				function I(e, t, n) {
					n = n.split('-')[0];
					var r = $(e),
						i = { width: r.width, height: r.height },
						o = -1 !== ['right', 'left'].indexOf(n),
						a = o ? 'top' : 'left',
						s = o ? 'left' : 'top',
						l = o ? 'height' : 'width',
						c = o ? 'width' : 'height';
					return (
						(i[a] = t[a] + t[l] / 2 - r[l] / 2),
						(i[s] = n === s ? t[s] - r[c] : t[N(s)]),
						i
					);
				}
				function P(e, t) {
					return Array.prototype.find ? e.find(t) : e.filter(t)[0];
				}
				function L(e, t, n) {
					return (
						(void 0 === n
							? e
							: e.slice(
									0,
									(function (e, t, n) {
										if (Array.prototype.findIndex)
											return e.findIndex(function (e) {
												return e[t] === n;
											});
										var r = P(e, function (e) {
											return e[t] === n;
										});
										return e.indexOf(r);
									})(e, 'name', n)
							  )
						).forEach(function (e) {
							e.function &&
								console.warn(
									'`modifier.function` is deprecated, use `modifier.fn`!'
								);
							var n = e.function || e.fn;
							e.enabled &&
								a(n) &&
								((t.offsets.popper = T(t.offsets.popper)),
								(t.offsets.reference = T(t.offsets.reference)),
								(t = n(t, e)));
						}),
						t
					);
				}
				function H() {
					if (!this.state.isDestroyed) {
						var e = {
							instance: this,
							styles: {},
							arrowStyles: {},
							attributes: {},
							flipped: false,
							offsets: {},
						};
						(e.offsets.reference = O(
							this.state,
							this.popper,
							this.reference,
							this.options.positionFixed
						)),
							(e.placement = A(
								this.options.placement,
								e.offsets.reference,
								this.popper,
								this.reference,
								this.options.modifiers.flip.boundariesElement,
								this.options.modifiers.flip.padding
							)),
							(e.originalPlacement = e.placement),
							(e.positionFixed = this.options.positionFixed),
							(e.offsets.popper = I(
								this.popper,
								e.offsets.reference,
								e.placement
							)),
							(e.offsets.popper.position = this.options.positionFixed
								? 'fixed'
								: 'absolute'),
							(e = L(this.modifiers, e)),
							this.state.isCreated
								? this.options.onUpdate(e)
								: ((this.state.isCreated = true), this.options.onCreate(e));
					}
				}
				function M(e, t) {
					return e.some(function (e) {
						var n = e.name;
						return e.enabled && n === t;
					});
				}
				function R(e) {
					for (
						var t = [false, 'ms', 'Webkit', 'Moz', 'O'],
							n = e.charAt(0).toUpperCase() + e.slice(1),
							r = 0;
						r < t.length;
						r++
					) {
						var i = t[r],
							o = i ? '' + i + n : e;
						if (void 0 !== document.body.style[o]) return o;
					}
					return null;
				}
				function q() {
					return (
						(this.state.isDestroyed = true),
						M(this.modifiers, 'applyStyle') &&
							(this.popper.removeAttribute('x-placement'),
							(this.popper.style.position = ''),
							(this.popper.style.top = ''),
							(this.popper.style.left = ''),
							(this.popper.style.right = ''),
							(this.popper.style.bottom = ''),
							(this.popper.style.willChange = ''),
							(this.popper.style[R('transform')] = '')),
						this.disableEventListeners(),
						this.options.removeOnDestroy &&
							this.popper.parentNode.removeChild(this.popper),
						this
					);
				}
				function B(e) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window;
				}
				function F(e, t, n, r) {
					var i = 'BODY' === e.nodeName,
						o = i ? e.ownerDocument.defaultView : e;
					o.addEventListener(t, n, { passive: true }),
						i || F(c(o.parentNode), t, n, r),
						r.push(o);
				}
				function W(e, t, n, r) {
					(n.updateBound = r),
						B(e).addEventListener('resize', n.updateBound, { passive: true });
					var i = c(e);
					return (
						F(i, 'scroll', n.updateBound, n.scrollParents),
						(n.scrollElement = i),
						(n.eventsEnabled = true),
						n
					);
				}
				function U() {
					this.state.eventsEnabled ||
						(this.state = W(
							this.reference,
							this.options,
							this.state,
							this.scheduleUpdate
						));
				}
				function z() {
					var e, t;
					this.state.eventsEnabled &&
						(cancelAnimationFrame(this.scheduleUpdate),
						(this.state =
							((e = this.reference),
							(t = this.state),
							B(e).removeEventListener('resize', t.updateBound),
							t.scrollParents.forEach(function (e) {
								e.removeEventListener('scroll', t.updateBound);
							}),
							(t.updateBound = null),
							(t.scrollParents = []),
							(t.scrollElement = null),
							(t.eventsEnabled = false),
							t)));
				}
				function V(e) {
					return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
				}
				function Q(e, t) {
					Object.keys(t).forEach(function (n) {
						var r = '';
						-1 !==
							['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(
								n
							) &&
							V(t[n]) &&
							(r = 'px'),
							(e.style[n] = t[n] + r);
					});
				}
				var K = r && /Firefox/i.test(navigator.userAgent);
				function Y(e, t, n) {
					var r = P(e, function (e) {
							return e.name === t;
						}),
						i =
							!!r &&
							e.some(function (e) {
								return e.name === n && e.enabled && e.order < r.order;
							});
					if (!i) {
						var o = '`' + t + '`',
							a = '`' + n + '`';
						console.warn(
							a +
								' modifier is required by ' +
								o +
								' modifier in order to work, be sure to include it before ' +
								o +
								'!'
						);
					}
					return i;
				}
				var X = [
						'auto-start',
						'auto',
						'auto-end',
						'top-start',
						'top',
						'top-end',
						'right-start',
						'right',
						'right-end',
						'bottom-end',
						'bottom',
						'bottom-start',
						'left-end',
						'left',
						'left-start',
					],
					J = X.slice(3);
				function G(e) {
					var t =
							arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = J.indexOf(e),
						r = J.slice(n + 1).concat(J.slice(0, n));
					return t ? r.reverse() : r;
				}
				var Z = 'flip',
					ee = 'clockwise',
					te = 'counterclockwise';
				function ne(e, t, n, r) {
					var i = [0, 0],
						o = -1 !== ['right', 'left'].indexOf(r),
						a = e.split(/(\+|\-)/).map(function (e) {
							return e.trim();
						}),
						s = a.indexOf(
							P(a, function (e) {
								return -1 !== e.search(/,|\s/);
							})
						);
					a[s] &&
						-1 === a[s].indexOf(',') &&
						console.warn(
							'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
						);
					var l = /\s*,\s*|\s+/,
						c =
							-1 !== s
								? [
										a.slice(0, s).concat([a[s].split(l)[0]]),
										[a[s].split(l)[1]].concat(a.slice(s + 1)),
								  ]
								: [a];
					return (
						(c = c.map(function (e, r) {
							var i = (1 === r ? !o : o) ? 'height' : 'width',
								a = false;
							return e
								.reduce(function (e, t) {
									return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t)
										? ((e[e.length - 1] = t), (a = true), e)
										: a
										? ((e[e.length - 1] += t), (a = false), e)
										: e.concat(t);
								}, [])
								.map(function (e) {
									return (function (e, t, n, r) {
										var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
											o = +i[1],
											a = i[2];
										if (!o) return e;
										if (0 === a.indexOf('%')) {
											return (T('%p' === a ? n : r)[t] / 100) * o;
										}
										if ('vh' === a || 'vw' === a)
											return (
												(('vh' === a
													? Math.max(
															document.documentElement.clientHeight,
															window.innerHeight || 0
													  )
													: Math.max(
															document.documentElement.clientWidth,
															window.innerWidth || 0
													  )) /
													100) *
												o
											);
										return o;
									})(e, i, t, n);
								});
						})),
						c.forEach(function (e, t) {
							e.forEach(function (n, r) {
								V(n) && (i[t] += n * ('-' === e[r - 1] ? -1 : 1));
							});
						}),
						i
					);
				}
				var re = {
						shift: {
							order: 100,
							enabled: true,
							fn: function (e) {
								var t = e.placement,
									n = t.split('-')[0],
									r = t.split('-')[1];
								if (r) {
									var i = e.offsets,
										o = i.reference,
										a = i.popper,
										s = -1 !== ['bottom', 'top'].indexOf(n),
										l = s ? 'left' : 'top',
										c = s ? 'width' : 'height',
										u = {
											start: x({}, l, o[l]),
											end: x({}, l, o[l] + o[c] - a[c]),
										};
									e.offsets.popper = C({}, a, u[r]);
								}
								return e;
							},
						},
						offset: {
							order: 200,
							enabled: true,
							fn: function (e, t) {
								var n = t.offset,
									r = e.placement,
									i = e.offsets,
									o = i.popper,
									a = i.reference,
									s = r.split('-')[0],
									l = void 0;
								return (
									(l = V(+n) ? [+n, 0] : ne(n, o, a, s)),
									'left' === s
										? ((o.top += l[0]), (o.left -= l[1]))
										: 'right' === s
										? ((o.top += l[0]), (o.left += l[1]))
										: 'top' === s
										? ((o.left += l[0]), (o.top -= l[1]))
										: 'bottom' === s && ((o.left += l[0]), (o.top += l[1])),
									(e.popper = o),
									e
								);
							},
							offset: 0,
						},
						preventOverflow: {
							order: 300,
							enabled: true,
							fn: function (e, t) {
								var n = t.boundariesElement || h(e.instance.popper);
								e.instance.reference === n && (n = h(n));
								var r = R('transform'),
									i = e.instance.popper.style,
									o = i.top,
									a = i.left,
									s = i[r];
								(i.top = ''), (i.left = ''), (i[r] = '');
								var l = D(
									e.instance.popper,
									e.instance.reference,
									t.padding,
									n,
									e.positionFixed
								);
								(i.top = o), (i.left = a), (i[r] = s), (t.boundaries = l);
								var c = t.priority,
									u = e.offsets.popper,
									f = {
										primary: function (e) {
											var n = u[e];
											return (
												u[e] < l[e] &&
													!t.escapeWithReference &&
													(n = Math.max(u[e], l[e])),
												x({}, e, n)
											);
										},
										secondary: function (e) {
											var n = 'right' === e ? 'left' : 'top',
												r = u[n];
											return (
												u[e] > l[e] &&
													!t.escapeWithReference &&
													(r = Math.min(
														u[n],
														l[e] - ('right' === e ? u.width : u.height)
													)),
												x({}, n, r)
											);
										},
									};
								return (
									c.forEach(function (e) {
										var t =
											-1 !== ['left', 'top'].indexOf(e)
												? 'primary'
												: 'secondary';
										u = C({}, u, f[t](e));
									}),
									(e.offsets.popper = u),
									e
								);
							},
							priority: ['left', 'right', 'top', 'bottom'],
							padding: 5,
							boundariesElement: 'scrollParent',
						},
						keepTogether: {
							order: 400,
							enabled: true,
							fn: function (e) {
								var t = e.offsets,
									n = t.popper,
									r = t.reference,
									i = e.placement.split('-')[0],
									o = Math.floor,
									a = -1 !== ['top', 'bottom'].indexOf(i),
									s = a ? 'right' : 'bottom',
									l = a ? 'left' : 'top',
									c = a ? 'width' : 'height';
								return (
									n[s] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[c]),
									n[l] > o(r[s]) && (e.offsets.popper[l] = o(r[s])),
									e
								);
							},
						},
						arrow: {
							order: 500,
							enabled: true,
							fn: function (e, t) {
								var n;
								if (!Y(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
								var r = t.element;
								if ('string' == typeof r) {
									if (!(r = e.instance.popper.querySelector(r))) return e;
								} else if (!e.instance.popper.contains(r))
									return (
										console.warn(
											'WARNING: `arrow.element` must be child of its popper element!'
										),
										e
									);
								var i = e.placement.split('-')[0],
									o = e.offsets,
									a = o.popper,
									l = o.reference,
									c = -1 !== ['left', 'right'].indexOf(i),
									u = c ? 'height' : 'width',
									f = c ? 'Top' : 'Left',
									d = f.toLowerCase(),
									p = c ? 'left' : 'top',
									h = c ? 'bottom' : 'right',
									m = $(r)[u];
								l[h] - m < a[d] && (e.offsets.popper[d] -= a[d] - (l[h] - m)),
									l[d] + m > a[h] && (e.offsets.popper[d] += l[d] + m - a[h]),
									(e.offsets.popper = T(e.offsets.popper));
								var g = l[d] + l[u] / 2 - m / 2,
									v = s(e.instance.popper),
									b = parseFloat(v['margin' + f]),
									y = parseFloat(v['border' + f + 'Width']),
									w = g - e.offsets.popper[d] - b - y;
								return (
									(w = Math.max(Math.min(a[u] - m, w), 0)),
									(e.arrowElement = r),
									(e.offsets.arrow =
										(x((n = {}), d, Math.round(w)), x(n, p, ''), n)),
									e
								);
							},
							element: '[x-arrow]',
						},
						flip: {
							order: 600,
							enabled: true,
							fn: function (e, t) {
								if (M(e.instance.modifiers, 'inner')) return e;
								if (e.flipped && e.placement === e.originalPlacement) return e;
								var n = D(
										e.instance.popper,
										e.instance.reference,
										t.padding,
										t.boundariesElement,
										e.positionFixed
									),
									r = e.placement.split('-')[0],
									i = N(r),
									o = e.placement.split('-')[1] || '',
									a = [];
								switch (t.behavior) {
									case Z:
										a = [r, i];
										break;
									case ee:
										a = G(r);
										break;
									case te:
										a = G(r, true);
										break;
									default:
										a = t.behavior;
								}
								return (
									a.forEach(function (s, l) {
										if (r !== s || a.length === l + 1) return e;
										(r = e.placement.split('-')[0]), (i = N(r));
										var c = e.offsets.popper,
											u = e.offsets.reference,
											f = Math.floor,
											d =
												('left' === r && f(c.right) > f(u.left)) ||
												('right' === r && f(c.left) < f(u.right)) ||
												('top' === r && f(c.bottom) > f(u.top)) ||
												('bottom' === r && f(c.top) < f(u.bottom)),
											p = f(c.left) < f(n.left),
											h = f(c.right) > f(n.right),
											m = f(c.top) < f(n.top),
											g = f(c.bottom) > f(n.bottom),
											v =
												('left' === r && p) ||
												('right' === r && h) ||
												('top' === r && m) ||
												('bottom' === r && g),
											b = -1 !== ['top', 'bottom'].indexOf(r),
											y =
												!!t.flipVariations &&
												((b && 'start' === o && p) ||
													(b && 'end' === o && h) ||
													(!b && 'start' === o && m) ||
													(!b && 'end' === o && g)),
											w =
												!!t.flipVariationsByContent &&
												((b && 'start' === o && h) ||
													(b && 'end' === o && p) ||
													(!b && 'start' === o && g) ||
													(!b && 'end' === o && m)),
											_ = y || w;
										(d || v || _) &&
											((e.flipped = true),
											(d || v) && (r = a[l + 1]),
											_ &&
												(o = (function (e) {
													return 'end' === e
														? 'start'
														: 'start' === e
														? 'end'
														: e;
												})(o)),
											(e.placement = r + (o ? '-' + o : '')),
											(e.offsets.popper = C(
												{},
												e.offsets.popper,
												I(e.instance.popper, e.offsets.reference, e.placement)
											)),
											(e = L(e.instance.modifiers, e, 'flip')));
									}),
									e
								);
							},
							behavior: 'flip',
							padding: 5,
							boundariesElement: 'viewport',
							flipVariations: false,
							flipVariationsByContent: false,
						},
						inner: {
							order: 700,
							enabled: false,
							fn: function (e) {
								var t = e.placement,
									n = t.split('-')[0],
									r = e.offsets,
									i = r.popper,
									o = r.reference,
									a = -1 !== ['left', 'right'].indexOf(n),
									s = -1 === ['top', 'left'].indexOf(n);
								return (
									(i[a ? 'left' : 'top'] =
										o[n] - (s ? i[a ? 'width' : 'height'] : 0)),
									(e.placement = N(t)),
									(e.offsets.popper = T(i)),
									e
								);
							},
						},
						hide: {
							order: 800,
							enabled: true,
							fn: function (e) {
								if (!Y(e.instance.modifiers, 'hide', 'preventOverflow'))
									return e;
								var t = e.offsets.reference,
									n = P(e.instance.modifiers, function (e) {
										return 'preventOverflow' === e.name;
									}).boundaries;
								if (
									t.bottom < n.top ||
									t.left > n.right ||
									t.top > n.bottom ||
									t.right < n.left
								) {
									if (true === e.hide) return e;
									(e.hide = true), (e.attributes['x-out-of-boundaries'] = '');
								} else {
									if (false === e.hide) return e;
									(e.hide = false),
										(e.attributes['x-out-of-boundaries'] = false);
								}
								return e;
							},
						},
						computeStyle: {
							order: 850,
							enabled: true,
							fn: function (e, t) {
								var n = t.x,
									r = t.y,
									i = e.offsets.popper,
									o = P(e.instance.modifiers, function (e) {
										return 'applyStyle' === e.name;
									}).gpuAcceleration;
								void 0 !== o &&
									console.warn(
										'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
									);
								var a = void 0 !== o ? o : t.gpuAcceleration,
									s = h(e.instance.popper),
									l = E(s),
									c = { position: i.position },
									u = (function (e, t) {
										var n = e.offsets,
											r = n.popper,
											i = n.reference,
											o = Math.round,
											a = Math.floor,
											s = function (e) {
												return e;
											},
											l = o(i.width),
											c = o(r.width),
											u = -1 !== ['left', 'right'].indexOf(e.placement),
											f = -1 !== e.placement.indexOf('-'),
											d = t ? (u || f || l % 2 == c % 2 ? o : a) : s,
											p = t ? o : s;
										return {
											left: d(
												l % 2 == 1 && c % 2 == 1 && !f && t
													? r.left - 1
													: r.left
											),
											top: p(r.top),
											bottom: p(r.bottom),
											right: d(r.right),
										};
									})(e, window.devicePixelRatio < 2 || !K),
									f = 'bottom' === n ? 'top' : 'bottom',
									d = 'right' === r ? 'left' : 'right',
									p = R('transform'),
									m = void 0,
									g = void 0;
								if (
									((g =
										'bottom' === f
											? 'HTML' === s.nodeName
												? -s.clientHeight + u.bottom
												: -l.height + u.bottom
											: u.top),
									(m =
										'right' === d
											? 'HTML' === s.nodeName
												? -s.clientWidth + u.right
												: -l.width + u.right
											: u.left),
									a && p)
								)
									(c[p] = 'translate3d(' + m + 'px, ' + g + 'px, 0)'),
										(c[f] = 0),
										(c[d] = 0),
										(c.willChange = 'transform');
								else {
									var v = 'bottom' === f ? -1 : 1,
										b = 'right' === d ? -1 : 1;
									(c[f] = g * v), (c[d] = m * b), (c.willChange = f + ', ' + d);
								}
								var y = { 'x-placement': e.placement };
								return (
									(e.attributes = C({}, y, e.attributes)),
									(e.styles = C({}, c, e.styles)),
									(e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles)),
									e
								);
							},
							gpuAcceleration: true,
							x: 'bottom',
							y: 'right',
						},
						applyStyle: {
							order: 900,
							enabled: true,
							fn: function (e) {
								var t, n;
								return (
									Q(e.instance.popper, e.styles),
									(t = e.instance.popper),
									(n = e.attributes),
									Object.keys(n).forEach(function (e) {
										false !== n[e]
											? t.setAttribute(e, n[e])
											: t.removeAttribute(e);
									}),
									e.arrowElement &&
										Object.keys(e.arrowStyles).length &&
										Q(e.arrowElement, e.arrowStyles),
									e
								);
							},
							onLoad: function (e, t, n, r, i) {
								var o = O(i, t, e, n.positionFixed),
									a = A(
										n.placement,
										o,
										t,
										e,
										n.modifiers.flip.boundariesElement,
										n.modifiers.flip.padding
									);
								return (
									t.setAttribute('x-placement', a),
									Q(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
									n
								);
							},
							gpuAcceleration: void 0,
						},
					},
					ie = {
						placement: 'bottom',
						positionFixed: false,
						eventsEnabled: true,
						removeOnDestroy: false,
						onCreate: function () {},
						onUpdate: function () {},
						modifiers: re,
					},
					oe = (function () {
						function e(t, n) {
							var r = this,
								i =
									arguments.length > 2 && void 0 !== arguments[2]
										? arguments[2]
										: {};
							!(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError('Cannot call a class as a function');
							})(this, e),
								(this.scheduleUpdate = function () {
									return requestAnimationFrame(r.update);
								}),
								(this.update = o(this.update.bind(this))),
								(this.options = C({}, e.Defaults, i)),
								(this.state = {
									isDestroyed: false,
									isCreated: false,
									scrollParents: [],
								}),
								(this.reference = t && t.jquery ? t[0] : t),
								(this.popper = n && n.jquery ? n[0] : n),
								(this.options.modifiers = {}),
								Object.keys(C({}, e.Defaults.modifiers, i.modifiers)).forEach(
									function (t) {
										r.options.modifiers[t] = C(
											{},
											e.Defaults.modifiers[t] || {},
											i.modifiers ? i.modifiers[t] : {}
										);
									}
								),
								(this.modifiers = Object.keys(this.options.modifiers)
									.map(function (e) {
										return C({ name: e }, r.options.modifiers[e]);
									})
									.sort(function (e, t) {
										return e.order - t.order;
									})),
								this.modifiers.forEach(function (e) {
									e.enabled &&
										a(e.onLoad) &&
										e.onLoad(r.reference, r.popper, r.options, e, r.state);
								}),
								this.update();
							var s = this.options.eventsEnabled;
							s && this.enableEventListeners(), (this.state.eventsEnabled = s);
						}
						return (
							_(e, [
								{
									key: 'update',
									value: function () {
										return H.call(this);
									},
								},
								{
									key: 'destroy',
									value: function () {
										return q.call(this);
									},
								},
								{
									key: 'enableEventListeners',
									value: function () {
										return U.call(this);
									},
								},
								{
									key: 'disableEventListeners',
									value: function () {
										return z.call(this);
									},
								},
							]),
							e
						);
					})();
				(oe.Utils = ('undefined' != typeof window ? window : n.g).PopperUtils),
					(oe.placements = X),
					(oe.Defaults = ie),
					(t.default = oe);
			},
		},
		__webpack_module_cache__ = {};
	function __webpack_require__(e) {
		var t = __webpack_module_cache__[e];
		if (void 0 !== t) return t.exports;
		var n = (__webpack_module_cache__[e] = { exports: {} });
		return (
			__webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__),
			n.exports
		);
	}
	(__webpack_require__.g = (function () {
		if ('object' == typeof globalThis) return globalThis;
		try {
			return this || new Function('return this')();
		} catch (e) {
			if ('object' == typeof window) return window;
		}
	})()),
		(__webpack_require__.r = function (e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: true });
		});
	var __webpack_exports__ = {};
	__webpack_require__(924),
		__webpack_require__(888),
		__webpack_require__(205),
		__webpack_require__(661);
})();

getEventLi;
