(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
		r(o);
	new MutationObserver((o) => {
		for (const i of o)
			if (i.type === 'childList')
				for (const a of i.addedNodes)
					a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(o) {
		const i = {};
		return (
			o.integrity && (i.integrity = o.integrity),
			o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
			o.crossOrigin === 'use-credentials'
				? (i.credentials = 'include')
				: o.crossOrigin === 'anonymous'
				? (i.credentials = 'omit')
				: (i.credentials = 'same-origin'),
			i
		);
	}
	function r(o) {
		if (o.ep) return;
		o.ep = !0;
		const i = n(o);
		fetch(o.href, i);
	}
})();
var _t,
	P,
	Ko,
	ke,
	Dr,
	Qo,
	Hn,
	Xo,
	Vt = {},
	Zo = [],
	ds = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	hn = Array.isArray;
function fe(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function ei(e) {
	var t = e.parentNode;
	t && t.removeChild(e);
}
function X(e, t, n) {
	var r,
		o,
		i,
		a = {};
	for (i in t)
		i == 'key' ? (r = t[i]) : i == 'ref' ? (o = t[i]) : (a[i] = t[i]);
	if (
		(arguments.length > 2 &&
			(a.children = arguments.length > 3 ? _t.call(arguments, 2) : n),
		typeof e == 'function' && e.defaultProps != null)
	)
		for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
	return ot(e, a, r, o, null);
}
function ot(e, t, n, r, o) {
	var i = {
		type: e,
		props: t,
		key: n,
		ref: r,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: o ?? ++Ko,
	};
	return o == null && P.vnode != null && P.vnode(i), i;
}
function ti() {
	return { current: null };
}
function ie(e) {
	return e.children;
}
function te(e, t) {
	(this.props = e), (this.context = t);
}
function ct(e, t) {
	if (t == null) return e.__ ? ct(e.__, e.__.__k.indexOf(e) + 1) : null;
	for (var n; t < e.__k.length; t++)
		if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == 'function' ? ct(e) : null;
}
function ni(e) {
	var t, n;
	if ((e = e.__) != null && e.__c != null) {
		for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) {
				e.__e = e.__c.base = n.__e;
				break;
			}
		return ni(e);
	}
}
function Wn(e) {
	((!e.__d && (e.__d = !0) && ke.push(e) && !zt.__r++) ||
		Dr !== P.debounceRendering) &&
		((Dr = P.debounceRendering) || Qo)(zt);
}
function zt() {
	var e, t, n, r, o, i, a, l;
	for (ke.sort(Hn); (e = ke.shift()); )
		e.__d &&
			((t = ke.length),
			(r = void 0),
			(o = void 0),
			(a = (i = (n = e).__v).__e),
			(l = n.__P) &&
				((r = []),
				((o = fe({}, i)).__v = i.__v + 1),
				pr(
					l,
					i,
					o,
					n.__n,
					l.ownerSVGElement !== void 0,
					i.__h != null ? [a] : null,
					r,
					a ?? ct(i),
					i.__h,
				),
				si(r, i),
				i.__e != a && ni(i)),
			ke.length > t && ke.sort(Hn));
	zt.__r = 0;
}
function ri(e, t, n, r, o, i, a, l, c, d) {
	var s,
		u,
		f,
		h,
		p,
		m,
		v,
		E = (r && r.__k) || Zo,
		g = E.length;
	for (n.__k = [], s = 0; s < t.length; s++)
		if (
			(h = n.__k[s] =
				(h = t[s]) == null ||
				typeof h == 'boolean' ||
				typeof h == 'function'
					? null
					: typeof h == 'string' ||
					  typeof h == 'number' ||
					  typeof h == 'bigint'
					? ot(null, h, null, null, h)
					: hn(h)
					? ot(ie, { children: h }, null, null, null)
					: h.__b > 0
					? ot(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v)
					: h) != null
		) {
			if (
				((h.__ = n),
				(h.__b = n.__b + 1),
				(f = E[s]) === null ||
					(f && h.key == f.key && h.type === f.type))
			)
				E[s] = void 0;
			else
				for (u = 0; u < g; u++) {
					if ((f = E[u]) && h.key == f.key && h.type === f.type) {
						E[u] = void 0;
						break;
					}
					f = null;
				}
			pr(e, h, (f = f || Vt), o, i, a, l, c, d),
				(p = h.__e),
				(u = h.ref) &&
					f.ref != u &&
					(v || (v = []),
					f.ref && v.push(f.ref, null, h),
					v.push(u, h.__c || p, h)),
				p != null
					? (m == null && (m = p),
					  typeof h.type == 'function' && h.__k === f.__k
							? (h.__d = c = oi(h, c, e))
							: (c = ii(e, h, f, E, p, c)),
					  typeof n.type == 'function' && (n.__d = c))
					: c && f.__e == c && c.parentNode != e && (c = ct(f));
		}
	for (n.__e = m, s = g; s--; )
		E[s] != null &&
			(typeof n.type == 'function' &&
				E[s].__e != null &&
				E[s].__e == n.__d &&
				(n.__d = ai(r).nextSibling),
			ci(E[s], E[s]));
	if (v) for (s = 0; s < v.length; s++) li(v[s], v[++s], v[++s]);
}
function oi(e, t, n) {
	for (var r, o = e.__k, i = 0; o && i < o.length; i++)
		(r = o[i]) &&
			((r.__ = e),
			(t =
				typeof r.type == 'function'
					? oi(r, t, n)
					: ii(n, r, r, o, r.__e, t)));
	return t;
}
function oe(e, t) {
	return (
		(t = t || []),
		e == null ||
			typeof e == 'boolean' ||
			(hn(e)
				? e.some(function (n) {
						oe(n, t);
				  })
				: t.push(e)),
		t
	);
}
function ii(e, t, n, r, o, i) {
	var a, l, c;
	if (t.__d !== void 0) (a = t.__d), (t.__d = void 0);
	else if (n == null || o != i || o.parentNode == null)
		e: if (i == null || i.parentNode !== e) e.appendChild(o), (a = null);
		else {
			for (l = i, c = 0; (l = l.nextSibling) && c < r.length; c += 1)
				if (l == o) break e;
			e.insertBefore(o, i), (a = i);
		}
	return a !== void 0 ? a : o.nextSibling;
}
function ai(e) {
	var t, n, r;
	if (e.type == null || typeof e.type == 'string') return e.__e;
	if (e.__k) {
		for (t = e.__k.length - 1; t >= 0; t--)
			if ((n = e.__k[t]) && (r = ai(n))) return r;
	}
	return null;
}
function fs(e, t, n, r, o) {
	var i;
	for (i in n)
		i === 'children' || i === 'key' || i in t || Gt(e, i, null, n[i], r);
	for (i in t)
		(o && typeof t[i] != 'function') ||
			i === 'children' ||
			i === 'key' ||
			i === 'value' ||
			i === 'checked' ||
			n[i] === t[i] ||
			Gt(e, i, t[i], n[i], r);
}
function Rr(e, t, n) {
	t[0] === '-'
		? e.setProperty(t, n ?? '')
		: (e[t] =
				n == null
					? ''
					: typeof n != 'number' || ds.test(t)
					? n
					: n + 'px');
}
function Gt(e, t, n, r, o) {
	var i;
	e: if (t === 'style')
		if (typeof n == 'string') e.style.cssText = n;
		else {
			if ((typeof r == 'string' && (e.style.cssText = r = ''), r))
				for (t in r) (n && t in n) || Rr(e.style, t, '');
			if (n) for (t in n) (r && n[t] === r[t]) || Rr(e.style, t, n[t]);
		}
	else if (t[0] === 'o' && t[1] === 'n')
		(i = t !== (t = t.replace(/Capture$/, ''))),
			(t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
			e.l || (e.l = {}),
			(e.l[t + i] = n),
			n
				? r || e.addEventListener(t, i ? Mr : Nr, i)
				: e.removeEventListener(t, i ? Mr : Nr, i);
	else if (t !== 'dangerouslySetInnerHTML') {
		if (o) t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
		else if (
			t !== 'width' &&
			t !== 'height' &&
			t !== 'href' &&
			t !== 'list' &&
			t !== 'form' &&
			t !== 'tabIndex' &&
			t !== 'download' &&
			t !== 'rowSpan' &&
			t !== 'colSpan' &&
			t in e
		)
			try {
				e[t] = n ?? '';
				break e;
			} catch {}
		typeof n == 'function' ||
			(n == null || (n === !1 && t[4] !== '-')
				? e.removeAttribute(t)
				: e.setAttribute(t, n));
	}
}
function Nr(e) {
	return this.l[e.type + !1](P.event ? P.event(e) : e);
}
function Mr(e) {
	return this.l[e.type + !0](P.event ? P.event(e) : e);
}
function pr(e, t, n, r, o, i, a, l, c) {
	var d,
		s,
		u,
		f,
		h,
		p,
		m,
		v,
		E,
		g,
		y,
		S,
		x,
		O,
		N,
		$ = t.type;
	if (t.constructor !== void 0) return null;
	n.__h != null &&
		((c = n.__h), (l = t.__e = n.__e), (t.__h = null), (i = [l])),
		(d = P.__b) && d(t);
	try {
		e: if (typeof $ == 'function') {
			if (
				((v = t.props),
				(E = (d = $.contextType) && r[d.__c]),
				(g = d ? (E ? E.props.value : d.__) : r),
				n.__c
					? (m = (s = t.__c = n.__c).__ = s.__E)
					: ('prototype' in $ && $.prototype.render
							? (t.__c = s = new $(v, g))
							: ((t.__c = s = new te(v, g)),
							  (s.constructor = $),
							  (s.render = ps)),
					  E && E.sub(s),
					  (s.props = v),
					  s.state || (s.state = {}),
					  (s.context = g),
					  (s.__n = r),
					  (u = s.__d = !0),
					  (s.__h = []),
					  (s._sb = [])),
				s.__s == null && (s.__s = s.state),
				$.getDerivedStateFromProps != null &&
					(s.__s == s.state && (s.__s = fe({}, s.__s)),
					fe(s.__s, $.getDerivedStateFromProps(v, s.__s))),
				(f = s.props),
				(h = s.state),
				(s.__v = t),
				u)
			)
				$.getDerivedStateFromProps == null &&
					s.componentWillMount != null &&
					s.componentWillMount(),
					s.componentDidMount != null &&
						s.__h.push(s.componentDidMount);
			else {
				if (
					($.getDerivedStateFromProps == null &&
						v !== f &&
						s.componentWillReceiveProps != null &&
						s.componentWillReceiveProps(v, g),
					(!s.__e &&
						s.shouldComponentUpdate != null &&
						s.shouldComponentUpdate(v, s.__s, g) === !1) ||
						t.__v === n.__v)
				) {
					for (
						t.__v !== n.__v &&
							((s.props = v), (s.state = s.__s), (s.__d = !1)),
							s.__e = !1,
							t.__e = n.__e,
							t.__k = n.__k,
							t.__k.forEach(function (D) {
								D && (D.__ = t);
							}),
							y = 0;
						y < s._sb.length;
						y++
					)
						s.__h.push(s._sb[y]);
					(s._sb = []), s.__h.length && a.push(s);
					break e;
				}
				s.componentWillUpdate != null &&
					s.componentWillUpdate(v, s.__s, g),
					s.componentDidUpdate != null &&
						s.__h.push(function () {
							s.componentDidUpdate(f, h, p);
						});
			}
			if (
				((s.context = g),
				(s.props = v),
				(s.__P = e),
				(S = P.__r),
				(x = 0),
				'prototype' in $ && $.prototype.render)
			) {
				for (
					s.state = s.__s,
						s.__d = !1,
						S && S(t),
						d = s.render(s.props, s.state, s.context),
						O = 0;
					O < s._sb.length;
					O++
				)
					s.__h.push(s._sb[O]);
				s._sb = [];
			} else
				do
					(s.__d = !1),
						S && S(t),
						(d = s.render(s.props, s.state, s.context)),
						(s.state = s.__s);
				while (s.__d && ++x < 25);
			(s.state = s.__s),
				s.getChildContext != null &&
					(r = fe(fe({}, r), s.getChildContext())),
				u ||
					s.getSnapshotBeforeUpdate == null ||
					(p = s.getSnapshotBeforeUpdate(f, h)),
				ri(
					e,
					hn(
						(N =
							d != null && d.type === ie && d.key == null
								? d.props.children
								: d),
					)
						? N
						: [N],
					t,
					n,
					r,
					o,
					i,
					a,
					l,
					c,
				),
				(s.base = t.__e),
				(t.__h = null),
				s.__h.length && a.push(s),
				m && (s.__E = s.__ = null),
				(s.__e = !1);
		} else
			i == null && t.__v === n.__v
				? ((t.__k = n.__k), (t.__e = n.__e))
				: (t.__e = hs(n.__e, t, n, r, o, i, a, c));
		(d = P.diffed) && d(t);
	} catch (D) {
		(t.__v = null),
			(c || i != null) &&
				((t.__e = l), (t.__h = !!c), (i[i.indexOf(l)] = null)),
			P.__e(D, t, n);
	}
}
function si(e, t) {
	P.__c && P.__c(t, e),
		e.some(function (n) {
			try {
				(e = n.__h),
					(n.__h = []),
					e.some(function (r) {
						r.call(n);
					});
			} catch (r) {
				P.__e(r, n.__v);
			}
		});
}
function hs(e, t, n, r, o, i, a, l) {
	var c,
		d,
		s,
		u = n.props,
		f = t.props,
		h = t.type,
		p = 0;
	if ((h === 'svg' && (o = !0), i != null)) {
		for (; p < i.length; p++)
			if (
				(c = i[p]) &&
				'setAttribute' in c == !!h &&
				(h ? c.localName === h : c.nodeType === 3)
			) {
				(e = c), (i[p] = null);
				break;
			}
	}
	if (e == null) {
		if (h === null) return document.createTextNode(f);
		(e = o
			? document.createElementNS('http://www.w3.org/2000/svg', h)
			: document.createElement(h, f.is && f)),
			(i = null),
			(l = !1);
	}
	if (h === null) u === f || (l && e.data === f) || (e.data = f);
	else {
		if (
			((i = i && _t.call(e.childNodes)),
			(d = (u = n.props || Vt).dangerouslySetInnerHTML),
			(s = f.dangerouslySetInnerHTML),
			!l)
		) {
			if (i != null)
				for (u = {}, p = 0; p < e.attributes.length; p++)
					u[e.attributes[p].name] = e.attributes[p].value;
			(s || d) &&
				((s &&
					((d && s.__html == d.__html) ||
						s.__html === e.innerHTML)) ||
					(e.innerHTML = (s && s.__html) || ''));
		}
		if ((fs(e, f, u, o, l), s)) t.__k = [];
		else if (
			(ri(
				e,
				hn((p = t.props.children)) ? p : [p],
				t,
				n,
				r,
				o && h !== 'foreignObject',
				i,
				a,
				i ? i[0] : n.__k && ct(n, 0),
				l,
			),
			i != null)
		)
			for (p = i.length; p--; ) i[p] != null && ei(i[p]);
		l ||
			('value' in f &&
				(p = f.value) !== void 0 &&
				(p !== e.value ||
					(h === 'progress' && !p) ||
					(h === 'option' && p !== u.value)) &&
				Gt(e, 'value', p, u.value, !1),
			'checked' in f &&
				(p = f.checked) !== void 0 &&
				p !== e.checked &&
				Gt(e, 'checked', p, u.checked, !1));
	}
	return e;
}
function li(e, t, n) {
	try {
		typeof e == 'function' ? e(t) : (e.current = t);
	} catch (r) {
		P.__e(r, n);
	}
}
function ci(e, t, n) {
	var r, o;
	if (
		(P.unmount && P.unmount(e),
		(r = e.ref) && ((r.current && r.current !== e.__e) || li(r, null, t)),
		(r = e.__c) != null)
	) {
		if (r.componentWillUnmount)
			try {
				r.componentWillUnmount();
			} catch (i) {
				P.__e(i, t);
			}
		(r.base = r.__P = null), (e.__c = void 0);
	}
	if ((r = e.__k))
		for (o = 0; o < r.length; o++)
			r[o] && ci(r[o], t, n || typeof e.type != 'function');
	n || e.__e == null || ei(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function ps(e, t, n) {
	return this.constructor(e, n);
}
function He(e, t, n) {
	var r, o, i;
	P.__ && P.__(e, t),
		(o = (r = typeof n == 'function') ? null : (n && n.__k) || t.__k),
		(i = []),
		pr(
			t,
			(e = ((!r && n) || t).__k = X(ie, null, [e])),
			o || Vt,
			Vt,
			t.ownerSVGElement !== void 0,
			!r && n
				? [n]
				: o
				? null
				: t.firstChild
				? _t.call(t.childNodes)
				: null,
			i,
			!r && n ? n : o ? o.__e : t.firstChild,
			r,
		),
		si(i, e);
}
function ui(e, t) {
	He(e, t, ui);
}
function di(e, t, n) {
	var r,
		o,
		i,
		a,
		l = fe({}, e.props);
	for (i in (e.type && e.type.defaultProps && (a = e.type.defaultProps), t))
		i == 'key'
			? (r = t[i])
			: i == 'ref'
			? (o = t[i])
			: (l[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i]);
	return (
		arguments.length > 2 &&
			(l.children = arguments.length > 3 ? _t.call(arguments, 2) : n),
		ot(e.type, l, r || e.key, o || e.ref, null)
	);
}
function _r(e, t) {
	var n = {
		__c: (t = '__cC' + Xo++),
		__: e,
		Consumer: function (r, o) {
			return r.children(o);
		},
		Provider: function (r) {
			var o, i;
			return (
				this.getChildContext ||
					((o = []),
					((i = {})[t] = this),
					(this.getChildContext = function () {
						return i;
					}),
					(this.shouldComponentUpdate = function (a) {
						this.props.value !== a.value &&
							o.some(function (l) {
								(l.__e = !0), Wn(l);
							});
					}),
					(this.sub = function (a) {
						o.push(a);
						var l = a.componentWillUnmount;
						a.componentWillUnmount = function () {
							o.splice(o.indexOf(a), 1), l && l.call(a);
						};
					})),
				r.children
			);
		},
	};
	return (n.Provider.__ = n.Consumer.contextType = n);
}
(_t = Zo.slice),
	(P = {
		__e: function (e, t, n, r) {
			for (var o, i, a; (t = t.__); )
				if ((o = t.__c) && !o.__)
					try {
						if (
							((i = o.constructor) &&
								i.getDerivedStateFromError != null &&
								(o.setState(i.getDerivedStateFromError(e)),
								(a = o.__d)),
							o.componentDidCatch != null &&
								(o.componentDidCatch(e, r || {}), (a = o.__d)),
							a)
						)
							return (o.__E = o);
					} catch (l) {
						e = l;
					}
			throw e;
		},
	}),
	(Ko = 0),
	(te.prototype.setState = function (e, t) {
		var n;
		(n =
			this.__s != null && this.__s !== this.state
				? this.__s
				: (this.__s = fe({}, this.state))),
			typeof e == 'function' && (e = e(fe({}, n), this.props)),
			e && fe(n, e),
			e != null && this.__v && (t && this._sb.push(t), Wn(this));
	}),
	(te.prototype.forceUpdate = function (e) {
		this.__v && ((this.__e = !0), e && this.__h.push(e), Wn(this));
	}),
	(te.prototype.render = ie),
	(ke = []),
	(Qo =
		typeof Promise == 'function'
			? Promise.prototype.then.bind(Promise.resolve())
			: setTimeout),
	(Hn = function (e, t) {
		return e.__v.__b - t.__v.__b;
	}),
	(zt.__r = 0),
	(Xo = 0);
const _s = { home: '/', terms: '/terms' };
var he,
	j,
	On,
	jr,
	We = 0,
	fi = [],
	It = [],
	Ar = P.__b,
	Fr = P.__r,
	Lr = P.diffed,
	Ur = P.__c,
	Br = P.unmount;
function Ie(e, t) {
	P.__h && P.__h(j, e, We || t), (We = 0);
	var n = j.__H || (j.__H = { __: [], __h: [] });
	return e >= n.__.length && n.__.push({ __V: It }), n.__[e];
}
function ve(e) {
	return (We = 1), mr(gi, e);
}
function mr(e, t, n) {
	var r = Ie(he++, 2);
	if (
		((r.t = e),
		!r.__c &&
			((r.__ = [
				n ? n(t) : gi(void 0, t),
				function (l) {
					var c = r.__N ? r.__N[0] : r.__[0],
						d = r.t(c, l);
					c !== d && ((r.__N = [d, r.__[1]]), r.__c.setState({}));
				},
			]),
			(r.__c = j),
			!j.u))
	) {
		var o = function (l, c, d) {
			if (!r.__c.__H) return !0;
			var s = r.__c.__H.__.filter(function (f) {
				return f.__c;
			});
			if (
				s.every(function (f) {
					return !f.__N;
				})
			)
				return !i || i.call(this, l, c, d);
			var u = !1;
			return (
				s.forEach(function (f) {
					if (f.__N) {
						var h = f.__[0];
						(f.__ = f.__N),
							(f.__N = void 0),
							h !== f.__[0] && (u = !0);
					}
				}),
				!(!u && r.__c.props === l) && (!i || i.call(this, l, c, d))
			);
		};
		j.u = !0;
		var i = j.shouldComponentUpdate,
			a = j.componentWillUpdate;
		(j.componentWillUpdate = function (l, c, d) {
			if (this.__e) {
				var s = i;
				(i = void 0), o(l, c, d), (i = s);
			}
			a && a.call(this, l, c, d);
		}),
			(j.shouldComponentUpdate = o);
	}
	return r.__N || r.__;
}
function mt(e, t) {
	var n = Ie(he++, 3);
	!P.__s && vr(n.__H, t) && ((n.__ = e), (n.i = t), j.__H.__h.push(n));
}
function vt(e, t) {
	var n = Ie(he++, 4);
	!P.__s && vr(n.__H, t) && ((n.__ = e), (n.i = t), j.__h.push(n));
}
function hi(e) {
	return (
		(We = 5),
		Ve(function () {
			return { current: e };
		}, [])
	);
}
function pi(e, t, n) {
	(We = 6),
		vt(
			function () {
				return typeof e == 'function'
					? (e(t()),
					  function () {
							return e(null);
					  })
					: e
					? ((e.current = t()),
					  function () {
							return (e.current = null);
					  })
					: void 0;
			},
			n == null ? n : n.concat(e),
		);
}
function Ve(e, t) {
	var n = Ie(he++, 7);
	return vr(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
}
function _i(e, t) {
	return (
		(We = 8),
		Ve(function () {
			return e;
		}, t)
	);
}
function mi(e) {
	var t = j.context[e.__c],
		n = Ie(he++, 9);
	return (
		(n.c = e),
		t ? (n.__ == null && ((n.__ = !0), t.sub(j)), t.props.value) : e.__
	);
}
function vi(e, t) {
	P.useDebugValue && P.useDebugValue(t ? t(e) : e);
}
function ms(e) {
	var t = Ie(he++, 10),
		n = ve();
	return (
		(t.__ = e),
		j.componentDidCatch ||
			(j.componentDidCatch = function (r, o) {
				t.__ && t.__(r, o), n[1](r);
			}),
		[
			n[0],
			function () {
				n[1](void 0);
			},
		]
	);
}
function yi() {
	var e = Ie(he++, 11);
	if (!e.__) {
		for (var t = j.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
		var n = t.__m || (t.__m = [0, 0]);
		e.__ = 'P' + n[0] + '-' + n[1]++;
	}
	return e.__;
}
function vs() {
	for (var e; (e = fi.shift()); )
		if (e.__P && e.__H)
			try {
				e.__H.__h.forEach(Dt), e.__H.__h.forEach(Vn), (e.__H.__h = []);
			} catch (t) {
				(e.__H.__h = []), P.__e(t, e.__v);
			}
}
(P.__b = function (e) {
	(j = null), Ar && Ar(e);
}),
	(P.__r = function (e) {
		Fr && Fr(e), (he = 0);
		var t = (j = e.__c).__H;
		t &&
			(On === j
				? ((t.__h = []),
				  (j.__h = []),
				  t.__.forEach(function (n) {
						n.__N && (n.__ = n.__N),
							(n.__V = It),
							(n.__N = n.i = void 0);
				  }))
				: (t.__h.forEach(Dt),
				  t.__h.forEach(Vn),
				  (t.__h = []),
				  (he = 0))),
			(On = j);
	}),
	(P.diffed = function (e) {
		Lr && Lr(e);
		var t = e.__c;
		t &&
			t.__H &&
			(t.__H.__h.length &&
				((fi.push(t) !== 1 && jr === P.requestAnimationFrame) ||
					((jr = P.requestAnimationFrame) || ys)(vs)),
			t.__H.__.forEach(function (n) {
				n.i && (n.__H = n.i),
					n.__V !== It && (n.__ = n.__V),
					(n.i = void 0),
					(n.__V = It);
			})),
			(On = j = null);
	}),
	(P.__c = function (e, t) {
		t.some(function (n) {
			try {
				n.__h.forEach(Dt),
					(n.__h = n.__h.filter(function (r) {
						return !r.__ || Vn(r);
					}));
			} catch (r) {
				t.some(function (o) {
					o.__h && (o.__h = []);
				}),
					(t = []),
					P.__e(r, n.__v);
			}
		}),
			Ur && Ur(e, t);
	}),
	(P.unmount = function (e) {
		Br && Br(e);
		var t,
			n = e.__c;
		n &&
			n.__H &&
			(n.__H.__.forEach(function (r) {
				try {
					Dt(r);
				} catch (o) {
					t = o;
				}
			}),
			(n.__H = void 0),
			t && P.__e(t, n.__v));
	});
var qr = typeof requestAnimationFrame == 'function';
function ys(e) {
	var t,
		n = function () {
			clearTimeout(r), qr && cancelAnimationFrame(t), setTimeout(e);
		},
		r = setTimeout(n, 100);
	qr && (t = requestAnimationFrame(n));
}
function Dt(e) {
	var t = j,
		n = e.__c;
	typeof n == 'function' && ((e.__c = void 0), n()), (j = t);
}
function Vn(e) {
	var t = j;
	(e.__c = e.__()), (j = t);
}
function vr(e, t) {
	return (
		!e ||
		e.length !== t.length ||
		t.some(function (n, r) {
			return n !== e[r];
		})
	);
}
function gi(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
var gs = {};
function Ze(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function bs(e, t, n) {
	var r,
		o = /(?:\?([^#]*))?(#.*)?$/,
		i = e.match(o),
		a = {};
	if (i && i[1])
		for (var l = i[1].split('&'), c = 0; c < l.length; c++) {
			var d = l[c].split('=');
			a[decodeURIComponent(d[0])] = decodeURIComponent(
				d.slice(1).join('='),
			);
		}
	(e = zn(e.replace(o, ''))), (t = zn(t || ''));
	for (var s = Math.max(e.length, t.length), u = 0; u < s; u++)
		if (t[u] && t[u].charAt(0) === ':') {
			var f = t[u].replace(/(^:|[+*?]+$)/g, ''),
				h = (t[u].match(/[+*?]+$/) || gs)[0] || '',
				p = ~h.indexOf('+'),
				m = ~h.indexOf('*'),
				v = e[u] || '';
			if (!v && !m && (h.indexOf('?') < 0 || p)) {
				r = !1;
				break;
			}
			if (((a[f] = decodeURIComponent(v)), p || m)) {
				a[f] = e.slice(u).map(decodeURIComponent).join('/');
				break;
			}
		} else if (t[u] !== e[u]) {
			r = !1;
			break;
		}
	return (n.default === !0 || r !== !1) && a;
}
function ws(e, t) {
	return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function Es(e, t) {
	return (
		(e.index = t),
		(e.rank = (function (n) {
			return n.props.default ? 0 : zn(n.props.path).map(Ss).join('');
		})(e)),
		e.props
	);
}
function zn(e) {
	return e.replace(/(^\/+|\/+$)/g, '').split('/');
}
function Ss(e) {
	return e.charAt(0) == ':'
		? 1 + '*+?'.indexOf(e.charAt(e.length - 1)) || 4
		: 5;
}
var Ps = {},
	xe = [],
	Hr = [],
	Z = null,
	bi = { url: yr() },
	Os = _r(bi);
function yr() {
	var e;
	return (
		'' +
		((e =
			Z && Z.location
				? Z.location
				: Z && Z.getCurrentLocation
				? Z.getCurrentLocation()
				: typeof location < 'u'
				? location
				: Ps).pathname || '') +
		(e.search || '')
	);
}
function Cs(e, t) {
	return (
		t === void 0 && (t = !1),
		typeof e != 'string' && e.url && ((t = e.replace), (e = e.url)),
		(function (n) {
			for (var r = xe.length; r--; ) if (xe[r].canRoute(n)) return !0;
			return !1;
		})(e) &&
			(function (n, r) {
				r === void 0 && (r = 'push'),
					Z && Z[r]
						? Z[r](n)
						: typeof history < 'u' &&
						  history[r + 'State'] &&
						  history[r + 'State'](null, null, n);
			})(e, t ? 'replace' : 'push'),
		wi(e)
	);
}
function wi(e) {
	for (var t = !1, n = 0; n < xe.length; n++) xe[n].routeTo(e) && (t = !0);
	return t;
}
function ks(e) {
	if (e && e.getAttribute) {
		var t = e.getAttribute('href'),
			n = e.getAttribute('target');
		if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) return Cs(t);
	}
}
function Ts(e) {
	return (
		e.stopImmediatePropagation && e.stopImmediatePropagation(),
		e.stopPropagation && e.stopPropagation(),
		e.preventDefault(),
		!1
	);
}
function Ei(e) {
	if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
		var t = e.target;
		do
			if (t.localName === 'a' && t.getAttribute('href')) {
				if (t.hasAttribute('data-native') || t.hasAttribute('native'))
					return;
				if (ks(t)) return Ts(e);
			}
		while ((t = t.parentNode));
	}
}
var Wr = !1;
function Si(e) {
	e.history && (Z = e.history), (this.state = { url: e.url || yr() });
}
Ze((Si.prototype = new te()), {
	shouldComponentUpdate: function (e) {
		return (
			e.static !== !0 ||
			e.url !== this.props.url ||
			e.onChange !== this.props.onChange
		);
	},
	canRoute: function (e) {
		var t = oe(this.props.children);
		return this.g(t, e) !== void 0;
	},
	routeTo: function (e) {
		this.setState({ url: e });
		var t = this.canRoute(e);
		return this.p || this.forceUpdate(), t;
	},
	componentWillMount: function () {
		this.p = !0;
	},
	componentDidMount: function () {
		var e = this;
		Wr ||
			((Wr = !0),
			Z ||
				addEventListener('popstate', function () {
					wi(yr());
				}),
			addEventListener('click', Ei)),
			xe.push(this),
			Z &&
				(this.u = Z.listen(function (t) {
					var n = t.location || t;
					e.routeTo('' + (n.pathname || '') + (n.search || ''));
				})),
			(this.p = !1);
	},
	componentWillUnmount: function () {
		typeof this.u == 'function' && this.u(), xe.splice(xe.indexOf(this), 1);
	},
	componentWillUpdate: function () {
		this.p = !0;
	},
	componentDidUpdate: function () {
		this.p = !1;
	},
	g: function (e, t) {
		e = e.filter(Es).sort(ws);
		for (var n = 0; n < e.length; n++) {
			var r = e[n],
				o = bs(t, r.props.path, r.props);
			if (o) return [r, o];
		}
	},
	render: function (e, t) {
		var n,
			r,
			o = e.onChange,
			i = t.url,
			a = this.c,
			l = this.g(oe(e.children), i);
		if (
			(l &&
				(r = di(
					l[0],
					Ze(Ze({ url: i, matches: (n = l[1]) }, n), {
						key: void 0,
						ref: void 0,
					}),
				)),
			i !== (a && a.url))
		) {
			Ze(
				bi,
				(a = this.c =
					{
						url: i,
						previous: a && a.url,
						current: r,
						path: r ? r.props.path : null,
						matches: n,
					}),
			),
				(a.router = this),
				(a.active = r ? [r] : []);
			for (var c = Hr.length; c--; ) Hr[c]({});
			typeof o == 'function' && o(a);
		}
		return X(Os.Provider, { value: a }, r);
	},
});
var Q = function (e) {
		return X('a', Ze({ onClick: Ei }, e));
	},
	xs = function (e) {
		return X(e.component, e);
	},
	$s = 0;
function _(e, t, n, r, o, i) {
	var a,
		l,
		c = {};
	for (l in t) l == 'ref' ? (a = t[l]) : (c[l] = t[l]);
	var d = {
		type: e,
		props: c,
		key: n,
		ref: a,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: --$s,
		__source: o,
		__self: i,
	};
	if (typeof e == 'function' && (a = e.defaultProps))
		for (l in a) c[l] === void 0 && (c[l] = a[l]);
	return P.vnode && P.vnode(d), d;
}
const Is = ({ shopUrl: e }) => {
		const [t, n] = ve(!1),
			r = () => {
				n(!t);
			};
		return (
			mt(() => {
				const o = () => {
					n(!1);
				};
				return (
					window.addEventListener('scroll', o),
					() => {
						window.removeEventListener('scroll', o);
					}
				);
			}, [t]),
			_('nav', {
				className: 'o-navigation' + (t ? ' o-navigation--active' : ''),
				children: [
					_('a', {
						className: 'o-navigation__logo__link',
						href: '/',
						children: [
							_('img', {
								className:
									'o-navigation__logo o-navigation__logo--big',
								src: 'images/JN-logo-big.svg',
								alt: 'John Newman logo',
							}),
							_('img', {
								className:
									'o-navigation__logo o-navigation__logo--small',
								src: 'images/JN-logo-small.svg',
								alt: 'John Newman logo',
							}),
						],
					}),
					_('div', {
						onClick: r,
						className:
							'o-navigation__hamburger' +
							(t ? ' o-navigation__hamburger--active' : ''),
					}),
					_('ul', {
						className:
							'o-navigation__items' +
							(t ? ' o-navigation__items--active' : ''),
						children: [
							_('li', {
								onClick: r,
								className: 'o-navigation__items__item',
								children: _(Q, {
									className:
										'o-navigation__items__item__link',
									href: '/',
									children: 'Home',
								}),
							}),
							_('li', {
								onClick: r,
								className: 'o-navigation__items__item',
								children: _(Q, {
									className:
										'o-navigation__items__item__link',
									href: '#live',
									children: 'Live',
								}),
							}),
							_('li', {
								onClick: r,
								className: 'o-navigation__items__item',
								children: _(Q, {
									className:
										'o-navigation__items__item__link',
									href: '#music',
									children: 'Music',
								}),
							}),
							_('li', {
								onClick: r,
								className: 'o-navigation__items__item',
								children: _(Q, {
									className:
										'o-navigation__items__item__link',
									href: '#about',
									children: 'About',
								}),
							}),
							_('li', {
								onClick: r,
								className: 'o-navigation__items__item',
								children: _(Q, {
									className:
										'o-navigation__items__item__link',
									target: '_blank',
									href: e,
									children: 'Store',
								}),
							}),
						],
					}),
				],
			})
		);
	},
	Me = ({ children: e, headingStyle: t, headingType: n, className: r }) =>
		X(n, { className: `${t} ${r}` }, e),
	Ds = ({ tour: e, venue: t, city: n, country: r, link: o, linkText: i }) =>
		_('div', {
			className: 'm-tour-date',
			children: [
				_('div', {
					className: 'm-tour-date__details',
					children: [
						_('div', {
							className: 'm-tour-date__info',
							children: [
								_('p', {
									className: 'm-tour-date__info__name h5',
									children: e,
								}),
								_('p', {
									className: 'p',
									children: [t, ', ', n, ', ', r],
								}),
							],
						}),
						_(gt, {
							src: 'images/rotating_earth_animated_transparent.gif',
							alt: 'rotating earth',
							className: 'a-world',
						}),
					],
				}),
				_('div', {
					className: 'm-tour-date__link',
					children: _(Q, { target: '_blank', href: o, children: i }),
				}),
			],
		}),
	Pi = ({
		facebook: e = void 0,
		twitter: t = void 0,
		instagram: n = void 0,
		tiktok: r = void 0,
		direction: o = 'row',
	}) =>
		_('div', {
			className:
				'o-social-icons' +
				(o === 'column' ? ' o-social-icons--column' : ''),
			children: [
				e !== void 0
					? _('a', {
							className:
								'o-social-icons__icon o-social-icons__icon--facebook',
							href: e,
							rel: 'noopener noreferrer',
							target: '_blank',
							children: _('span', {
								className: 'u-visually-hidden',
								children: 'Facebook',
							}),
					  })
					: null,
				t !== void 0
					? _('a', {
							className:
								'o-social-icons__icon o-social-icons__icon--twitter',
							href: t,
							rel: 'noopener noreferrer',
							target: '_blank',
							children: _('span', {
								className: 'u-visually-hidden',
								children: 'Twitter',
							}),
					  })
					: null,
				n !== void 0
					? _('a', {
							className:
								'o-social-icons__icon o-social-icons__icon--instagram',
							href: n,
							rel: 'noopener noreferrer',
							target: '_blank',
							children: _('span', {
								className: 'u-visually-hidden',
								children: 'Instagram',
							}),
					  })
					: null,
				r !== void 0
					? _('a', {
							className:
								'o-social-icons__icon o-social-icons__icon--tiktok',
							href: r,
							rel: 'noopener noreferrer',
							target: '_blank',
							children: _('span', {
								className: 'u-visually-hidden',
								children: 'TikTok',
							}),
					  })
					: null,
			],
		});
var w =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
		? window
		: typeof global < 'u'
		? global
		: typeof self < 'u'
		? self
		: {};
function pn(e) {
	return e &&
		e.__esModule &&
		Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
function gr(e) {
	if (e.__esModule) return e;
	var t = e.default;
	if (typeof t == 'function') {
		var n = function r() {
			if (this instanceof r) {
				var o = [null];
				o.push.apply(o, arguments);
				var i = Function.bind.apply(t, o);
				return new i();
			}
			return t.apply(this, arguments);
		};
		n.prototype = t.prototype;
	} else n = {};
	return (
		Object.defineProperty(n, '__esModule', { value: !0 }),
		Object.keys(e).forEach(function (r) {
			var o = Object.getOwnPropertyDescriptor(e, r);
			Object.defineProperty(
				n,
				r,
				o.get
					? o
					: {
							enumerable: !0,
							get: function () {
								return e[r];
							},
					  },
			);
		}),
		n
	);
}
var br = {},
	_n = {},
	Oi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
	(function () {
		var t = {}.hasOwnProperty;
		function n() {
			for (var r = [], o = 0; o < arguments.length; o++) {
				var i = arguments[o];
				if (i) {
					var a = typeof i;
					if (a === 'string' || a === 'number') r.push(i);
					else if (Array.isArray(i)) {
						if (i.length) {
							var l = n.apply(null, i);
							l && r.push(l);
						}
					} else if (a === 'object') {
						if (
							i.toString !== Object.prototype.toString &&
							!i.toString.toString().includes('[native code]')
						) {
							r.push(i.toString());
							continue;
						}
						for (var c in i) t.call(i, c) && i[c] && r.push(c);
					}
				}
			}
			return r.join(' ');
		}
		e.exports
			? ((n.default = n), (e.exports = n))
			: (window.classNames = n);
	})();
})(Oi);
var ne = Oi.exports;
function Ci(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function Gn(e, t) {
	for (var n in e) if (n !== '__source' && !(n in t)) return !0;
	for (var r in t) if (r !== '__source' && e[r] !== t[r]) return !0;
	return !1;
}
function Cn(e, t) {
	return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e != e && t != t);
}
function Yt(e) {
	this.props = e;
}
function ki(e, t) {
	function n(o) {
		var i = this.props.ref,
			a = i == o.ref;
		return (
			!a && i && (i.call ? i(null) : (i.current = null)),
			t ? !t(this.props, o) || !a : Gn(this.props, o)
		);
	}
	function r(o) {
		return (this.shouldComponentUpdate = n), X(e, o);
	}
	return (
		(r.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
		(r.prototype.isReactComponent = !0),
		(r.__f = !0),
		r
	);
}
((Yt.prototype = new te()).isPureReactComponent = !0),
	(Yt.prototype.shouldComponentUpdate = function (e, t) {
		return Gn(this.props, e) || Gn(this.state, t);
	});
var Vr = P.__b;
P.__b = function (e) {
	e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
		Vr && Vr(e);
};
var Rs =
	(typeof Symbol < 'u' && Symbol.for && Symbol.for('react.forward_ref')) ||
	3911;
function Ti(e) {
	function t(n) {
		var r = Ci({}, n);
		return delete r.ref, e(r, n.ref || null);
	}
	return (
		(t.$$typeof = Rs),
		(t.render = t),
		(t.prototype.isReactComponent = t.__f = !0),
		(t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
		t
	);
}
var zr = function (e, t) {
		return e == null ? null : oe(oe(e).map(t));
	},
	xi = {
		map: zr,
		forEach: zr,
		count: function (e) {
			return e ? oe(e).length : 0;
		},
		only: function (e) {
			var t = oe(e);
			if (t.length !== 1) throw 'Children.only';
			return t[0];
		},
		toArray: oe,
	},
	Ns = P.__e;
P.__e = function (e, t, n, r) {
	if (e.then) {
		for (var o, i = t; (i = i.__); )
			if ((o = i.__c) && o.__c)
				return (
					t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)),
					o.__c(e, t)
				);
	}
	Ns(e, t, n, r);
};
var Gr = P.unmount;
function $i(e, t, n) {
	return (
		e &&
			(e.__c &&
				e.__c.__H &&
				(e.__c.__H.__.forEach(function (r) {
					typeof r.__c == 'function' && r.__c();
				}),
				(e.__c.__H = null)),
			(e = Ci({}, e)).__c != null &&
				(e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
			(e.__k =
				e.__k &&
				e.__k.map(function (r) {
					return $i(r, t, n);
				}))),
		e
	);
}
function Ii(e, t, n) {
	return (
		e &&
			((e.__v = null),
			(e.__k =
				e.__k &&
				e.__k.map(function (r) {
					return Ii(r, t, n);
				})),
			e.__c &&
				e.__c.__P === t &&
				(e.__e && n.insertBefore(e.__e, e.__d),
				(e.__c.__e = !0),
				(e.__c.__P = n))),
		e
	);
}
function it() {
	(this.__u = 0), (this.t = null), (this.__b = null);
}
function Di(e) {
	var t = e.__.__c;
	return t && t.__a && t.__a(e);
}
function Ri(e) {
	var t, n, r;
	function o(i) {
		if (
			(t ||
				(t = e()).then(
					function (a) {
						n = a.default || a;
					},
					function (a) {
						r = a;
					},
				),
			r)
		)
			throw r;
		if (!n) throw t;
		return X(n, i);
	}
	return (o.displayName = 'Lazy'), (o.__f = !0), o;
}
function Ue() {
	(this.u = null), (this.o = null);
}
(P.unmount = function (e) {
	var t = e.__c;
	t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Gr && Gr(e);
}),
	((it.prototype = new te()).__c = function (e, t) {
		var n = t.__c,
			r = this;
		r.t == null && (r.t = []), r.t.push(n);
		var o = Di(r.__v),
			i = !1,
			a = function () {
				i || ((i = !0), (n.__R = null), o ? o(l) : l());
			};
		n.__R = a;
		var l = function () {
				if (!--r.__u) {
					if (r.state.__a) {
						var d = r.state.__a;
						r.__v.__k[0] = Ii(d, d.__c.__P, d.__c.__O);
					}
					var s;
					for (r.setState({ __a: (r.__b = null) }); (s = r.t.pop()); )
						s.forceUpdate();
				}
			},
			c = t.__h === !0;
		r.__u++ || c || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
			e.then(a, a);
	}),
	(it.prototype.componentWillUnmount = function () {
		this.t = [];
	}),
	(it.prototype.render = function (e, t) {
		if (this.__b) {
			if (this.__v.__k) {
				var n = document.createElement('div'),
					r = this.__v.__k[0].__c;
				this.__v.__k[0] = $i(this.__b, n, (r.__O = r.__P));
			}
			this.__b = null;
		}
		var o = t.__a && X(ie, null, e.fallback);
		return o && (o.__h = null), [X(ie, null, t.__a ? null : e.children), o];
	});
var Yr = function (e, t, n) {
	if (
		(++n[1] === n[0] && e.o.delete(t),
		e.props.revealOrder && (e.props.revealOrder[0] !== 't' || !e.o.size))
	)
		for (n = e.u; n; ) {
			for (; n.length > 3; ) n.pop()();
			if (n[1] < n[0]) break;
			e.u = n = n[2];
		}
};
function Ms(e) {
	return (
		(this.getChildContext = function () {
			return e.context;
		}),
		e.children
	);
}
function js(e) {
	var t = this,
		n = e.i;
	(t.componentWillUnmount = function () {
		He(null, t.l), (t.l = null), (t.i = null);
	}),
		t.i && t.i !== n && t.componentWillUnmount(),
		e.__v
			? (t.l ||
					((t.i = n),
					(t.l = {
						nodeType: 1,
						parentNode: n,
						childNodes: [],
						appendChild: function (r) {
							this.childNodes.push(r), t.i.appendChild(r);
						},
						insertBefore: function (r, o) {
							this.childNodes.push(r), t.i.appendChild(r);
						},
						removeChild: function (r) {
							this.childNodes.splice(
								this.childNodes.indexOf(r) >>> 1,
								1,
							),
								t.i.removeChild(r);
						},
					})),
			  He(X(Ms, { context: t.context }, e.__v), t.l))
			: t.l && t.componentWillUnmount();
}
function Ni(e, t) {
	var n = X(js, { __v: e, i: t });
	return (n.containerInfo = t), n;
}
((Ue.prototype = new te()).__a = function (e) {
	var t = this,
		n = Di(t.__v),
		r = t.o.get(e);
	return (
		r[0]++,
		function (o) {
			var i = function () {
				t.props.revealOrder ? (r.push(o), Yr(t, e, r)) : o();
			};
			n ? n(i) : i();
		}
	);
}),
	(Ue.prototype.render = function (e) {
		(this.u = null), (this.o = new Map());
		var t = oe(e.children);
		e.revealOrder && e.revealOrder[0] === 'b' && t.reverse();
		for (var n = t.length; n--; )
			this.o.set(t[n], (this.u = [1, 0, this.u]));
		return e.children;
	}),
	(Ue.prototype.componentDidUpdate = Ue.prototype.componentDidMount =
		function () {
			var e = this;
			this.o.forEach(function (t, n) {
				Yr(e, n, t);
			});
		});
var Mi =
		(typeof Symbol < 'u' && Symbol.for && Symbol.for('react.element')) ||
		60103,
	As =
		/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
	Fs = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
	Ls = /[A-Z0-9]/g,
	Us = typeof document < 'u',
	Bs = function (e) {
		return (
			typeof Symbol < 'u' && typeof Symbol() == 'symbol'
				? /fil|che|rad/
				: /fil|che|ra/
		).test(e);
	};
function ji(e, t, n) {
	return (
		t.__k == null && (t.textContent = ''),
		He(e, t),
		typeof n == 'function' && n(),
		e ? e.__c : null
	);
}
function Ai(e, t, n) {
	return ui(e, t), typeof n == 'function' && n(), e ? e.__c : null;
}
(te.prototype.isReactComponent = {}),
	[
		'componentWillMount',
		'componentWillReceiveProps',
		'componentWillUpdate',
	].forEach(function (e) {
		Object.defineProperty(te.prototype, e, {
			configurable: !0,
			get: function () {
				return this['UNSAFE_' + e];
			},
			set: function (t) {
				Object.defineProperty(this, e, {
					configurable: !0,
					writable: !0,
					value: t,
				});
			},
		});
	});
var Jr = P.event;
function qs() {}
function Hs() {
	return this.cancelBubble;
}
function Ws() {
	return this.defaultPrevented;
}
P.event = function (e) {
	return (
		Jr && (e = Jr(e)),
		(e.persist = qs),
		(e.isPropagationStopped = Hs),
		(e.isDefaultPrevented = Ws),
		(e.nativeEvent = e)
	);
};
var wr,
	Vs = {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return this.class;
		},
	},
	Kr = P.vnode;
P.vnode = function (e) {
	typeof e.type == 'string' &&
		(function (t) {
			var n = t.props,
				r = t.type,
				o = {};
			for (var i in n) {
				var a = n[i];
				if (
					!(
						(i === 'value' && 'defaultValue' in n && a == null) ||
						(Us && i === 'children' && r === 'noscript') ||
						i === 'class' ||
						i === 'className'
					)
				) {
					var l = i.toLowerCase();
					i === 'defaultValue' && 'value' in n && n.value == null
						? (i = 'value')
						: i === 'download' && a === !0
						? (a = '')
						: l === 'ondoubleclick'
						? (i = 'ondblclick')
						: l !== 'onchange' ||
						  (r !== 'input' && r !== 'textarea') ||
						  Bs(n.type)
						? l === 'onfocus'
							? (i = 'onfocusin')
							: l === 'onblur'
							? (i = 'onfocusout')
							: Fs.test(i)
							? (i = l)
							: r.indexOf('-') === -1 && As.test(i)
							? (i = i.replace(Ls, '-$&').toLowerCase())
							: a === null && (a = void 0)
						: (l = i = 'oninput'),
						l === 'oninput' && o[(i = l)] && (i = 'oninputCapture'),
						(o[i] = a);
				}
			}
			r == 'select' &&
				o.multiple &&
				Array.isArray(o.value) &&
				(o.value = oe(n.children).forEach(function (c) {
					c.props.selected = o.value.indexOf(c.props.value) != -1;
				})),
				r == 'select' &&
					o.defaultValue != null &&
					(o.value = oe(n.children).forEach(function (c) {
						c.props.selected = o.multiple
							? o.defaultValue.indexOf(c.props.value) != -1
							: o.defaultValue == c.props.value;
					})),
				n.class && !n.className
					? ((o.class = n.class),
					  Object.defineProperty(o, 'className', Vs))
					: ((n.className && !n.class) || (n.class && n.className)) &&
					  (o.class = o.className = n.className),
				(t.props = o);
		})(e),
		(e.$$typeof = Mi),
		Kr && Kr(e);
};
var Qr = P.__r;
P.__r = function (e) {
	Qr && Qr(e), (wr = e.__c);
};
var Xr = P.diffed;
P.diffed = function (e) {
	Xr && Xr(e);
	var t = e.props,
		n = e.__e;
	n != null &&
		e.type === 'textarea' &&
		'value' in t &&
		t.value !== n.value &&
		(n.value = t.value == null ? '' : t.value),
		(wr = null);
};
var Fi = {
		ReactCurrentDispatcher: {
			current: {
				readContext: function (e) {
					return wr.__n[e.__c].props.value;
				},
			},
		},
	},
	zs = '17.0.2';
function Li(e) {
	return X.bind(null, e);
}
function Er(e) {
	return !!e && e.$$typeof === Mi;
}
function Ui(e) {
	return Er(e) ? di.apply(null, arguments) : e;
}
function Bi(e) {
	return !!e.__k && (He(null, e), !0);
}
function qi(e) {
	return (e && (e.base || (e.nodeType === 1 && e))) || null;
}
var Hi = function (e, t) {
		return e(t);
	},
	Wi = function (e, t) {
		return e(t);
	},
	Vi = ie;
function Sr(e) {
	e();
}
function zi(e) {
	return e;
}
function Gi() {
	return [!1, Sr];
}
var Yi = vt;
function Ji(e, t) {
	var n = t(),
		r = ve({ h: { __: n, v: t } }),
		o = r[0].h,
		i = r[1];
	return (
		vt(
			function () {
				(o.__ = n), (o.v = t), Cn(o.__, t()) || i({ h: o });
			},
			[e, n, t],
		),
		mt(
			function () {
				return (
					Cn(o.__, o.v()) || i({ h: o }),
					e(function () {
						Cn(o.__, o.v()) || i({ h: o });
					})
				);
			},
			[e],
		),
		n
	);
}
var b = {
	useState: ve,
	useId: yi,
	useReducer: mr,
	useEffect: mt,
	useLayoutEffect: vt,
	useInsertionEffect: Yi,
	useTransition: Gi,
	useDeferredValue: zi,
	useSyncExternalStore: Ji,
	startTransition: Sr,
	useRef: hi,
	useImperativeHandle: pi,
	useMemo: Ve,
	useCallback: _i,
	useContext: mi,
	useDebugValue: vi,
	version: '17.0.2',
	Children: xi,
	render: ji,
	hydrate: Ai,
	unmountComponentAtNode: Bi,
	createPortal: Ni,
	createElement: X,
	createContext: _r,
	createFactory: Li,
	cloneElement: Ui,
	createRef: ti,
	Fragment: ie,
	isValidElement: Er,
	findDOMNode: qi,
	Component: te,
	PureComponent: Yt,
	memo: ki,
	forwardRef: Ti,
	flushSync: Wi,
	unstable_batchedUpdates: Hi,
	StrictMode: Vi,
	Suspense: it,
	SuspenseList: Ue,
	lazy: Ri,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Fi,
};
const Gs = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				Children: xi,
				Component: te,
				Fragment: ie,
				PureComponent: Yt,
				StrictMode: Vi,
				Suspense: it,
				SuspenseList: Ue,
				__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Fi,
				cloneElement: Ui,
				createContext: _r,
				createElement: X,
				createFactory: Li,
				createPortal: Ni,
				createRef: ti,
				default: b,
				findDOMNode: qi,
				flushSync: Wi,
				forwardRef: Ti,
				hydrate: Ai,
				isValidElement: Er,
				lazy: Ri,
				memo: ki,
				render: ji,
				startTransition: Sr,
				unmountComponentAtNode: Bi,
				unstable_batchedUpdates: Hi,
				useCallback: _i,
				useContext: mi,
				useDebugValue: vi,
				useDeferredValue: zi,
				useEffect: mt,
				useErrorBoundary: ms,
				useId: yi,
				useImperativeHandle: pi,
				useInsertionEffect: Yi,
				useLayoutEffect: vt,
				useMemo: Ve,
				useReducer: mr,
				useRef: hi,
				useState: ve,
				useSyncExternalStore: Ji,
				useTransition: Gi,
				version: zs,
			},
			Symbol.toStringTag,
			{ value: 'Module' },
		),
	),
	ee = gr(Gs);
var ze = {},
	Ys =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(ze, '__esModule', { value: !0 });
ze.useFrame = void 0;
const Js = Ys(ee),
	Ks = (e) =>
		Js.default.useMemo(
			() =>
				e || {
					document: typeof document < 'u' ? document : void 0,
					window: typeof window < 'u' ? window : void 0,
				},
			[e],
		);
ze.useFrame = Ks;
var se = {},
	le = {},
	Qs =
		(w && w.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (
					var o = 0, r = Object.getOwnPropertySymbols(e);
					o < r.length;
					o++
				)
					t.indexOf(r[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
						(n[r[o]] = e[r[o]]);
			return n;
		},
	Ki =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(le, '__esModule', { value: !0 });
le.EmbedStyle = void 0;
const Xs = Ki(ne),
	Zs = Ki(ee),
	el = (e) => {
		var t = Qs(e, []);
		return Zs.default.createElement(
			'style',
			Object.assign({}, t, {
				className: (0, Xs.default)(t.className),
				style: Object.assign({}, t.style),
			}),
			`
        .rsme-embed .rsme-d-none {
          display: none;
        }
    
        .rsme-embed .twitter-tweet {
          margin: 0 !important;
        }
    
        .rsme-embed blockquote {
          margin: 0 !important;
          padding: 0 !important;
        }

        .rsme-embed.rsme-facebook-embed .fb-post iframe {
          width: 100% !important;
        }

        .rsme-embed.rsme-facebook-embed .fb-post span {
          width: 100% !important;
        }
      `,
		);
	};
le.EmbedStyle = el;
var yt = {},
	tl =
		(w && w.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (
					var o = 0, r = Object.getOwnPropertySymbols(e);
					o < r.length;
					o++
				)
					t.indexOf(r[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
						(n[r[o]] = e[r[o]]);
			return n;
		},
	Qi =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(yt, '__esModule', { value: !0 });
yt.BorderSpinner = void 0;
const nl = Qi(ne),
	Pt = Qi(ee),
	rl = (e) => {
		var t = tl(e, []);
		return Pt.default.createElement(
			Pt.default.Fragment,
			null,
			Pt.default.createElement(
				'style',
				null,
				`
        .rsme-spinner {
          border: 3px solid rgba(0,0,0,0.75);
          border-right-color: transparent;
          border-radius: 50%;
          animation: rsme-spin 1s linear infinite;
        }
        @keyframes rsme-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }  
      `,
			),
			Pt.default.createElement(
				'div',
				Object.assign({}, t, {
					className: (0, nl.default)('rsme-spinner', t.className),
					style: Object.assign({ width: 10, height: 10 }, t.style),
				}),
			),
		);
	};
yt.BorderSpinner = rl;
var Xi = {};
(function (e) {
	var t =
			(w && w.__rest) ||
			function (d, s) {
				var u = {};
				for (var f in d)
					Object.prototype.hasOwnProperty.call(d, f) &&
						s.indexOf(f) < 0 &&
						(u[f] = d[f]);
				if (
					d != null &&
					typeof Object.getOwnPropertySymbols == 'function'
				)
					for (
						var h = 0, f = Object.getOwnPropertySymbols(d);
						h < f.length;
						h++
					)
						s.indexOf(f[h]) < 0 &&
							Object.prototype.propertyIsEnumerable.call(
								d,
								f[h],
							) &&
							(u[f[h]] = d[f[h]]);
				return u;
			},
		n =
			(w && w.__importDefault) ||
			function (d) {
				return d && d.__esModule ? d : { default: d };
			};
	Object.defineProperty(e, '__esModule', { value: !0 }),
		(e.ShareArrowIcon =
			e.ChatBubbleIcon =
			e.HeartIcon =
			e.EngagementIconsPlaceholder =
				void 0);
	const r = n(ne),
		o = n(ee),
		i = (d) => {
			var s = t(d, []);
			return o.default.createElement(
				'div',
				Object.assign({}, s, {
					className: (0, r.default)(s.className),
					style: Object.assign(
						{
							display: 'flex',
							alignItems: 'center',
							columnGap: 14,
						},
						s.style,
					),
				}),
				o.default.createElement(e.HeartIcon, null),
				o.default.createElement(e.ChatBubbleIcon, null),
				o.default.createElement(e.ShareArrowIcon, null),
			);
		};
	e.EngagementIconsPlaceholder = i;
	const a = (d) =>
		o.default.createElement(
			'div',
			Object.assign({}, d),
			o.default.createElement('div', {
				style: {
					backgroundColor: '#F4F4F4',
					borderRadius: '50%',
					height: '12.5px',
					width: '12.5px',
					transform: 'translateX(0px) translateY(7px)',
				},
			}),
			o.default.createElement('div', {
				style: {
					backgroundColor: '#F4F4F4',
					height: '12.5px',
					transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
					width: '12.5px',
					flexGrow: 0,
					marginRight: '6px',
					marginLeft: '2px',
				},
			}),
			o.default.createElement('div', {
				style: {
					backgroundColor: '#F4F4F4',
					borderRadius: '50%',
					height: '12.5px',
					width: '12.5px',
					transform: 'translateX(9px) translateY(-18px)',
				},
			}),
		);
	e.HeartIcon = a;
	const l = (d) =>
		o.default.createElement(
			'div',
			Object.assign({}, d),
			o.default.createElement('div', {
				style: {
					backgroundColor: '#F4F4F4',
					borderRadius: '50%',
					height: '20px',
					width: '20px',
				},
			}),
			o.default.createElement('div', {
				style: {
					width: 0,
					height: 0,
					borderTop: '2px solid transparent',
					borderLeft: '6px solid #f4f4f4',
					borderBottom: '2px solid transparent',
					transform:
						'translateX(16px) translateY(-4px) rotate(30deg)',
				},
			}),
		);
	e.ChatBubbleIcon = l;
	const c = (d) =>
		o.default.createElement(
			'div',
			Object.assign({}, d, {
				style: {
					height: 25,
					width: 25,
					transform: 'translateX(0px) translateY(-2px)',
				},
			}),
			o.default.createElement(
				'svg',
				{
					version: '1.1',
					id: 'Layer_1',
					xmlns: 'http://www.w3.org/2000/svg',
					xmlnsXlink: 'http://www.w3.org/1999/xlink',
					x: '0px',
					y: '0px',
					viewBox: '0 0 512 512',
					xmlSpace: 'preserve',
				},
				o.default.createElement('path', {
					style: { fill: '#F4F4F4' },
					d: `M295.204,180.593C132.168,180.593,0,312.759,0,475.796
c51.398-130.047,184.869-203.22,317.483-183.603L295.204,180.593z`,
				}),
				o.default.createElement('path', {
					style: { fill: '#F4F4F4' },
					d: `M512,253L295.204,36.204v217.818C159.946,249.655,34.992,339.262,0,475.794
c59.905-109.171,178.724-165.463,295.204-151.033v145.035L512,253z`,
				}),
			),
		);
	e.ShareArrowIcon = c;
})(Xi);
var mn = {},
	ol =
		(w && w.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (
					var o = 0, r = Object.getOwnPropertySymbols(e);
					o < r.length;
					o++
				)
					t.indexOf(r[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
						(n[r[o]] = e[r[o]]);
			return n;
		},
	Zi =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(mn, '__esModule', { value: !0 });
mn.ProfilePlaceholder = void 0;
const il = Zi(ne),
	De = Zi(ee),
	al = (e) => {
		var t = ol(e, []);
		return De.default.createElement(
			'div',
			Object.assign({}, t, {
				className: (0, il.default)(t.className),
				style: Object.assign({}, t.style),
			}),
			De.default.createElement(
				'div',
				{ style: { display: 'flex', columnGap: 14 } },
				De.default.createElement('div', {
					style: {
						backgroundColor: '#F4F4F4',
						borderRadius: '50%',
						width: 40,
						height: 40,
					},
				}),
				De.default.createElement(
					'div',
					{
						style: {
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							rowGap: 6,
						},
					},
					De.default.createElement('div', {
						style: {
							backgroundColor: '#F4F4F4',
							borderRadius: 4,
							width: 100,
							height: 14,
						},
					}),
					De.default.createElement('div', {
						style: {
							backgroundColor: '#F4F4F4',
							borderRadius: 4,
							width: 60,
							height: 14,
						},
					}),
				),
			),
		);
	};
mn.ProfilePlaceholder = al;
var sl =
		(w && w.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (
					var o = 0, r = Object.getOwnPropertySymbols(e);
					o < r.length;
					o++
				)
					t.indexOf(r[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
						(n[r[o]] = e[r[o]]);
			return n;
		},
	ea =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(se, '__esModule', { value: !0 });
se.PlaceholderEmbed = void 0;
const ll = ea(ne),
	H = ea(ee),
	cl = le,
	ul = yt,
	dl = Xi,
	fl = mn,
	hl = (e) => {
		var t,
			{
				url: n,
				linkText: r = 'View post',
				imageUrl: o,
				spinner: i = H.default.createElement(ul.BorderSpinner, null),
				spinnerDisabled: a,
			} = e,
			l = sl(e, [
				'url',
				'linkText',
				'imageUrl',
				'spinner',
				'spinnerDisabled',
			]);
		return H.default.createElement(
			'div',
			Object.assign({}, l, {
				className: (0, ll.default)(l.className),
				style: Object.assign(
					{
						overflow: 'hidden',
						border: '1px solid #dee2e6',
						backgroundColor: '#ffffff',
						borderRadius: 0,
						boxSizing: 'border-box',
						position: 'relative',
					},
					l.style,
				),
			}),
			H.default.createElement(cl.EmbedStyle, null),
			H.default.createElement(
				'a',
				{
					href: n,
					style: { textDecoration: 'none' },
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				!o &&
					H.default.createElement(
						'div',
						{
							style: {
								position: 'absolute',
								top: 0,
								left: 0,
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'start',
								paddingLeft: 16,
								paddingRight: 16,
								paddingTop: 16,
								paddingBottom: 16,
								zIndex: 2,
								backgroundColor: '#ffffff',
							},
						},
						H.default.createElement(fl.ProfilePlaceholder, null),
					),
				H.default.createElement(
					'div',
					{
						style: {
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: o ? 'start' : 'center',
							height: '100%',
							width: '100%',
						},
					},
					!o &&
						H.default.createElement(
							'div',
							{
								style: {
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									width: '100%',
									rowGap: 16,
									zIndex: 3,
									padding: 8,
									backgroundColor: '#ffffff',
								},
							},
							!a && i,
							!!r &&
								H.default.createElement(
									'div',
									{
										style: {
											color: '#000000',
											fontFamily: 'Arial,sans-serif',
											fontSize: '14px',
											fontStyle: 'normal',
											fontWeight: 550,
											lineHeight: '18px',
											textAlign: 'center',
										},
									},
									r,
								),
						),
					o &&
						(typeof ((t = l.style) === null || t === void 0
							? void 0
							: t.height) < 'u'
							? H.default.createElement('div', {
									style: {
										width: '100%',
										height: '100%',
										background: `url("${o}")`,
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										marginBottom: '40',
									},
							  })
							: H.default.createElement(
									'div',
									{
										style: {
											width: '100%',
											marginBottom: 40,
										},
									},
									H.default.createElement('img', {
										src: o,
										style: { width: '100%' },
									}),
							  )),
				),
				H.default.createElement(
					'div',
					{
						style: {
							position: 'absolute',
							bottom: 0,
							left: 0,
							height: 40,
							width: '100%',
							backgroundColor: '#ffffff',
							zIndex: 1,
						},
					},
					!o &&
						H.default.createElement(dl.EngagementIconsPlaceholder, {
							style: { marginLeft: 16 },
						}),
					o &&
						H.default.createElement(
							'div',
							{
								style: {
									display: 'flex',
									height: '100%',
									alignItems: 'center',
									justifyContent: 'space-between',
									columnGap: 16,
								},
							},
							H.default.createElement(
								'div',
								{
									style: {
										color: '#0095f6',
										fontWeight: 600,
										fontFamily: 'Arial,sans-serif',
										fontSize: '14px',
										fontStyle: 'normal',
										whiteSpace: 'nowrap',
										marginLeft: 16,
									},
								},
								r,
							),
							!a &&
								H.default.createElement(
									'div',
									{ style: { marginRight: 16 } },
									i,
								),
						),
				),
			),
		);
	};
se.PlaceholderEmbed = hl;
var Ge = {};
Object.defineProperty(Ge, '__esModule', { value: !0 });
Ge.generateUUID = void 0;
const pl = () => {
	let e = new Date().getTime(),
		t =
			(typeof performance < 'u' &&
				performance.now &&
				performance.now() * 1e3) ||
			0;
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
		/[xy]/g,
		function (n) {
			let r = Math.random() * 16;
			return (
				e > 0
					? ((r = (e + r) % 16 | 0), (e = Math.floor(e / 16)))
					: ((r = (t + r) % 16 | 0), (t = Math.floor(t / 16))),
				(n === 'x' ? r : (r & 3) | 8).toString(16)
			);
		},
	);
};
Ge.generateUUID = pl;
var ye = {};
Object.defineProperty(ye, '__esModule', { value: !0 });
ye.Subs = ye.Subscribe = void 0;
class Te {
	static subscribe(t) {
		try {
			return t();
		} catch (n) {
			console.error(n);
		}
		return () => {};
	}
	static subscribeEvent(t, n, r) {
		return (
			t.addListener(n, r),
			() => {
				t.removeListener(n, r);
			}
		);
	}
	static subscribeDOMEvent(t, n, r, o) {
		return (
			t.addEventListener(n, r, o),
			() => {
				t.removeEventListener(n, r, o);
			}
		);
	}
	static setTimeout(t, n, ...r) {
		const o = setTimeout(t, n, r);
		return () => clearTimeout(o);
	}
	static setInterval(t, n, ...r) {
		const o = setInterval(t, n, r);
		return () => clearInterval(o);
	}
	static unsubAll(t) {
		if (Array.isArray(t))
			t.forEach((n) => {
				try {
					n();
				} catch (r) {
					console.error(r);
				}
			});
		else
			try {
				t();
			} catch (n) {
				console.error(n);
			}
	}
	static createCleanup(t) {
		return () => Te.unsubAll(t);
	}
}
ye.Subscribe = Te;
class _l {
	constructor(t = []) {
		this.list = t;
	}
	subscribe(t) {
		const n = Te.subscribe(t);
		return this.push(n), n;
	}
	subscribeEvent(t, n, r) {
		const o = Te.subscribeEvent(t, n, r);
		return this.push(o), o;
	}
	subscribeDOMEvent(t, n, r) {
		const o = Te.subscribeDOMEvent(t, n, r);
		return this.push(o), o;
	}
	setTimeout(t, n, ...r) {
		const o = setTimeout(t, n, r),
			i = () => clearTimeout(o);
		return this.push(i), i;
	}
	setInterval(t, n, ...r) {
		const o = setInterval(t, n, r),
			i = () => clearInterval(o);
		return this.push(i), i;
	}
	push(t) {
		this.list.push(t);
	}
	unsubAll() {
		Te.unsubAll(this.list), this.list.splice(0, this.list.length);
	}
	createCleanup() {
		return () => {
			this.unsubAll();
		};
	}
}
ye.Subs = _l;
var ml =
		(w && w.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (
					var o = 0, r = Object.getOwnPropertySymbols(e);
					o < r.length;
					o++
				)
					t.indexOf(r[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
						(n[r[o]] = e[r[o]]);
			return n;
		},
	ta =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(_n, '__esModule', { value: !0 });
_n.FacebookEmbed = void 0;
const Zr = ta(ne),
	W = ta(ee),
	vl = ze,
	yl = se,
	gl = Ge,
	bl = le,
	eo = ye,
	wl = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0',
	Yn = 550,
	El = Yn,
	Sl = 372,
	to = 3,
	no = 'check-script',
	ro = 'load-script',
	oo = 'confirm-script-loaded',
	Ot = 'process-embed',
	io = 'confirm-embed-success',
	ao = 'retrying',
	so = 'embed-success',
	Pl = (e) => {
		var t,
			n,
			{
				url: r,
				width: o,
				height: i,
				linkText: a = 'View post on Facebook',
				placeholderImageUrl: l,
				placeholderSpinner: c,
				placeholderSpinnerDisabled: d = !1,
				placeholderProps: s,
				embedPlaceholder: u,
				placeholderDisabled: f = !1,
				scriptLoadDisabled: h = !1,
				retryDelay: p = 5e3,
				retryDisabled: m = !1,
				frame: v = void 0,
				debug: E = !1,
			} = e,
			g = ml(e, [
				'url',
				'width',
				'height',
				'linkText',
				'placeholderImageUrl',
				'placeholderSpinner',
				'placeholderSpinnerDisabled',
				'placeholderProps',
				'embedPlaceholder',
				'placeholderDisabled',
				'scriptLoadDisabled',
				'retryDelay',
				'retryDisabled',
				'frame',
				'debug',
			]);
		const [y, S] = W.default.useState(no),
			x = W.default.useMemo(() => y === so, [y]),
			O = W.default.useRef((0, gl.generateUUID)()),
			[N, $] = W.default.useState(Date.now()),
			D = W.default.useMemo(() => `${O.current}-${N}`, [N]),
			C = (0, vl.useFrame)(v);
		W.default.useEffect(() => {
			E && console.log(`[${new Date().toISOString()}]: ${y}`);
		}, [E, y]),
			W.default.useEffect(() => {
				var M, L, k;
				y === no &&
					(!(
						(k =
							(L =
								(M = C.window) === null || M === void 0
									? void 0
									: M.FB) === null || L === void 0
								? void 0
								: L.XFBML) === null || k === void 0
					) && k.parse
						? S(Ot)
						: h
						? console.error(
								'Facebook embed script not found. Unable to process Facebook embed:',
								r,
						  )
						: S(ro));
			}, [h, y, r, C.window]),
			W.default.useEffect(() => {
				if (y === ro && C.document) {
					const M = C.document.createElement('script');
					M.setAttribute('src', wl),
						C.document.head.appendChild(M),
						S(oo);
				}
			}, [y, C.document]),
			W.default.useEffect(() => {
				const M = new eo.Subs();
				return (
					y === oo &&
						M.setInterval(() => {
							var L, k, F;
							!(
								(F =
									(k =
										(L = C.window) === null || L === void 0
											? void 0
											: L.FB) === null || k === void 0
										? void 0
										: k.XFBML) === null || F === void 0
							) &&
								F.parse &&
								S(Ot);
						}, 1),
					M.createCleanup()
				);
			}, [y, C.window]),
			W.default.useEffect(() => {
				var M, L, k;
				if (y === Ot) {
					const F =
						(k =
							(L =
								(M = C.window) === null || M === void 0
									? void 0
									: M.FB) === null || L === void 0
								? void 0
								: L.XFBML) === null || k === void 0
							? void 0
							: k.parse;
					F
						? (F(), S(io))
						: console.error(
								'Facebook embed script not found. Unable to process Facebook embed:',
								r,
						  );
				}
			}, [y, r, C.window]),
			W.default.useEffect(() => {
				const M = new eo.Subs();
				return (
					y === io &&
						(M.setInterval(() => {
							if (C.document) {
								const L = C.document.getElementById(O.current);
								if (L) {
									const k =
										L.getElementsByClassName('fb-post')[0];
									k && k.children.length > 0 && S(so);
								}
							}
						}, 1),
						m ||
							M.setTimeout(() => {
								S(ao);
							}, p)),
					M.createCleanup()
				);
			}, [m, p, y, C.document]),
			W.default.useEffect(() => {
				y === ao && ($(Date.now()), S(Ot));
			}, [y]);
		const A = !!(o != null && o.toString().includes('%')),
			I = !!(i != null && i.toString().includes('%')),
			R = {
				maxWidth: A ? void 0 : El,
				width: typeof o < 'u' ? (A ? '100%' : o) : '100%',
				height: I
					? '100%'
					: typeof i < 'u'
					? i
					: typeof ((t = g.style) === null || t === void 0
							? void 0
							: t.height) < 'u' ||
					  typeof ((n = g.style) === null || n === void 0
							? void 0
							: n.maxHeight) < 'u'
					? '100%'
					: Sl,
				border: '1px solid #dee2e6',
				borderRadius: to,
			},
			z =
				u ??
				W.default.createElement(
					yl.PlaceholderEmbed,
					Object.assign(
						{
							url: r,
							imageUrl: l,
							linkText: a,
							spinner: c,
							spinnerDisabled: d,
						},
						s,
						{
							style: Object.assign(
								Object.assign({}, R),
								s == null ? void 0 : s.style,
							),
						},
					),
				);
		return W.default.createElement(
			'div',
			Object.assign({}, g, {
				className: (0, Zr.default)(
					'rsme-embed rsme-facebook-embed',
					g.className,
				),
				style: Object.assign(
					{
						overflow: 'hidden',
						width: o ?? void 0,
						height: i ?? void 0,
						borderRadius: to,
					},
					g.style,
				),
			}),
			W.default.createElement(bl.EmbedStyle, null),
			W.default.createElement(
				'div',
				{
					id: O.current,
					className: (0, Zr.default)(!x && 'rsme-d-none'),
				},
				W.default.createElement('div', {
					key: D,
					className: 'fb-post',
					'data-href': r,
					'data-width': A ? '100%' : o ?? Yn,
					style: {
						width: A ? '100%' : o ?? Yn,
						height: I ? '100%' : i ?? void 0,
					},
				}),
			),
			!x && !f && z,
		);
	};
_n.FacebookEmbed = Pl;
var vn = {},
	Ol =
		(w && w.__createBinding) ||
		(Object.create
			? function (e, t, n, r) {
					r === void 0 && (r = n);
					var o = Object.getOwnPropertyDescriptor(t, n);
					(!o ||
						('get' in o
							? !t.__esModule
							: o.writable || o.configurable)) &&
						(o = {
							enumerable: !0,
							get: function () {
								return t[n];
							},
						}),
						Object.defineProperty(e, r, o);
			  }
			: function (e, t, n, r) {
					r === void 0 && (r = n), (e[r] = t[n]);
			  }),
	Cl =
		(w && w.__setModuleDefault) ||
		(Object.create
			? function (e, t) {
					Object.defineProperty(e, 'default', {
						enumerable: !0,
						value: t,
					});
			  }
			: function (e, t) {
					e.default = t;
			  }),
	kl =
		(w && w.__importStar) ||
		function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (e != null)
				for (var n in e)
					n !== 'default' &&
						Object.prototype.hasOwnProperty.call(e, n) &&
						Ol(t, e, n);
			return Cl(t, e), t;
		},
	Tl =
		(w && w.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (
					var o = 0, r = Object.getOwnPropertySymbols(e);
					o < r.length;
					o++
				)
					t.indexOf(r[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
						(n[r[o]] = e[r[o]]);
			return n;
		},
	xl =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(vn, '__esModule', { value: !0 });
vn.InstagramEmbed = void 0;
const $l = xl(ne),
	G = kl(ee),
	lo = ye,
	Il = ze,
	Dl = se,
	Rl = Ge,
	Nl = le,
	Ml = '//www.instagram.com/embed.js',
	jl = 328,
	Al = 372,
	co = 3,
	uo = 'check-script',
	fo = 'load-script',
	ho = 'confirm-script-loaded',
	Ct = 'process-embed',
	po = 'confirm-embed-success',
	_o = 'retrying',
	Fl = 'embed-success',
	Ll = (e) => {
		var t,
			n,
			{
				url: r,
				width: o,
				height: i,
				linkText: a = 'View post on Instagram',
				placeholderImageUrl: l,
				placeholderSpinner: c,
				placeholderSpinnerDisabled: d = !1,
				placeholderProps: s,
				embedPlaceholder: u,
				placeholderDisabled: f = !1,
				scriptLoadDisabled: h = !1,
				retryDelay: p = 5e3,
				retryDisabled: m = !1,
				igVersion: v = '14',
				frame: E = void 0,
				debug: g = !1,
			} = e,
			y = Tl(e, [
				'url',
				'width',
				'height',
				'linkText',
				'placeholderImageUrl',
				'placeholderSpinner',
				'placeholderSpinnerDisabled',
				'placeholderProps',
				'embedPlaceholder',
				'placeholderDisabled',
				'scriptLoadDisabled',
				'retryDelay',
				'retryDisabled',
				'igVersion',
				'frame',
				'debug',
			]);
		const [S, x] = G.useState(uo),
			O = G.useRef((0, Rl.generateUUID)()),
			[N, $] = G.useState(Date.now()),
			D = G.useMemo(() => `${O.current}-${N}`, [N]),
			C = (0, Il.useFrame)(E);
		G.useEffect(() => {
			g && console.log(`[${new Date().toISOString()}]: ${S}`);
		}, [g, S]),
			G.useEffect(() => {
				var k, F, J;
				S === uo &&
					(!(
						(J =
							(F =
								(k = C.window) === null || k === void 0
									? void 0
									: k.instgrm) === null || F === void 0
								? void 0
								: F.Embeds) === null || J === void 0
					) && J.process
						? x(Ct)
						: h
						? console.error(
								'Instagram embed script not found. Unable to process Instagram embed:',
								r,
						  )
						: x(fo));
			}, [h, S, r, C.window]),
			G.useEffect(() => {
				if (S === fo && C.document) {
					const k = C.document.createElement('script');
					k.setAttribute('src', Ml),
						C.document.head.appendChild(k),
						x(ho);
				}
			}, [S, C.document]),
			G.useEffect(() => {
				const k = new lo.Subs();
				return (
					S === ho &&
						k.setInterval(() => {
							var F, J, re;
							!(
								(re =
									(J =
										(F = C.window) === null || F === void 0
											? void 0
											: F.instgrm) === null ||
									J === void 0
										? void 0
										: J.Embeds) === null || re === void 0
							) &&
								re.process &&
								x(Ct);
						}, 1),
					k.createCleanup()
				);
			}, [S, C.window]),
			G.useEffect(() => {
				var k, F, J;
				if (S === Ct) {
					const re =
						(J =
							(F =
								(k = C.window) === null || k === void 0
									? void 0
									: k.instgrm) === null || F === void 0
								? void 0
								: F.Embeds) === null || J === void 0
							? void 0
							: J.process;
					re
						? (re(), x(po))
						: console.error(
								'Instagram embed script not found. Unable to process Instagram embed:',
								r,
						  );
				}
			}, [S, C.window, r]),
			G.useEffect(() => {
				const k = new lo.Subs();
				return (
					S === po &&
						(k.setInterval(() => {
							C.document &&
								(C.document.getElementById(O.current) || x(Fl));
						}, 1),
						m ||
							k.setTimeout(() => {
								x(_o);
							}, p)),
					k.createCleanup()
				);
			}, [p, m, S, C.document]),
			G.useEffect(() => {
				S === _o && ($(Date.now()), x(Ct));
			}, [S]);
		const A = r.replace(/[?].*$/, ''),
			I = `${A}${A.endsWith('/') ? '' : '/'}`,
			R = !!(o != null && o.toString().includes('%')),
			z = !!(i != null && i.toString().includes('%')),
			M = {
				minWidth: R ? void 0 : jl,
				width: typeof o < 'u' ? (R ? '100%' : o) : '100%',
				height: z
					? '100%'
					: typeof i < 'u'
					? i
					: typeof ((t = y.style) === null || t === void 0
							? void 0
							: t.height) < 'u' ||
					  typeof ((n = y.style) === null || n === void 0
							? void 0
							: n.maxHeight) < 'u'
					? '100%'
					: Al,
				border: '1px solid #dee2e6',
				borderRadius: co,
			},
			L =
				u ??
				G.createElement(
					Dl.PlaceholderEmbed,
					Object.assign(
						{
							url: I,
							imageUrl: l,
							linkText: a,
							spinner: c,
							spinnerDisabled: d,
						},
						s,
						{
							style: Object.assign(
								Object.assign({}, M),
								s == null ? void 0 : s.style,
							),
						},
					),
				);
		return G.createElement(
			'div',
			Object.assign({}, y, {
				className: (0, $l.default)(
					'rsme-embed rsme-instagram-embed',
					O.current,
					y.className,
				),
				style: Object.assign(
					{
						overflow: 'hidden',
						width: o ?? void 0,
						height: i ?? void 0,
						borderRadius: co,
					},
					y.style,
				),
			}),
			G.createElement(Nl.EmbedStyle, null),
			G.createElement(
				'blockquote',
				{
					key: D,
					className: 'instagram-media',
					'data-instgrm-permalink': `${I}?utm_source=ig_embed&utm_campaign=loading`,
					'data-instgrm-version': v,
					'data-instgrm-captioned': !0,
					'data-width': R ? '100%' : o ?? void 0,
					style: { width: 'calc(100% - 2px)' },
				},
				!f && L,
				G.createElement(
					'div',
					{
						id: O.current,
						className: 'instagram-media-pre-embed rsme-d-none',
					},
					' ',
				),
			),
		);
	};
vn.InstagramEmbed = Ll;
var yn = {},
	Ul =
		(w && w.__createBinding) ||
		(Object.create
			? function (e, t, n, r) {
					r === void 0 && (r = n);
					var o = Object.getOwnPropertyDescriptor(t, n);
					(!o ||
						('get' in o
							? !t.__esModule
							: o.writable || o.configurable)) &&
						(o = {
							enumerable: !0,
							get: function () {
								return t[n];
							},
						}),
						Object.defineProperty(e, r, o);
			  }
			: function (e, t, n, r) {
					r === void 0 && (r = n), (e[r] = t[n]);
			  }),
	Bl =
		(w && w.__setModuleDefault) ||
		(Object.create
			? function (e, t) {
					Object.defineProperty(e, 'default', {
						enumerable: !0,
						value: t,
					});
			  }
			: function (e, t) {
					e.default = t;
			  }),
	ql =
		(w && w.__importStar) ||
		function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (e != null)
				for (var n in e)
					n !== 'default' &&
						Object.prototype.hasOwnProperty.call(e, n) &&
						Ul(t, e, n);
			return Bl(t, e), t;
		},
	Hl =
		(w && w.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (
					var o = 0, r = Object.getOwnPropertySymbols(e);
					o < r.length;
					o++
				)
					t.indexOf(r[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
						(n[r[o]] = e[r[o]]);
			return n;
		},
	Wl =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(yn, '__esModule', { value: !0 });
yn.LinkedInEmbed = void 0;
const mo = Wl(ne),
	Je = ql(ee),
	Vl = se,
	zl = le,
	Gl = 250,
	Yl = 550,
	Jl = 550,
	vo = 8,
	Kl = (e) => {
		var t,
			n,
			{
				url: r,
				postUrl: o,
				width: i,
				height: a = 500,
				linkText: l = 'View post on LinkedIn',
				placeholderImageUrl: c,
				placeholderSpinner: d,
				placeholderSpinnerDisabled: s = !1,
				placeholderProps: u,
				embedPlaceholder: f,
				placeholderDisabled: h = !1,
			} = e,
			p = Hl(e, [
				'url',
				'postUrl',
				'width',
				'height',
				'linkText',
				'placeholderImageUrl',
				'placeholderSpinner',
				'placeholderSpinnerDisabled',
				'placeholderProps',
				'embedPlaceholder',
				'placeholderDisabled',
			]);
		const [m, v] = Je.useState(!1),
			E = {
				minWidth: Gl,
				maxWidth: Yl,
				width: typeof i < 'u' ? i : '100%',
				height:
					typeof a < 'u'
						? a
						: typeof ((t = p.style) === null || t === void 0
								? void 0
								: t.height) < 'u' ||
						  typeof ((n = p.style) === null || n === void 0
								? void 0
								: n.maxHeight) < 'u'
						? '100%'
						: Jl,
				border: 'solid 1px rgba(0, 0, 0, 0.15)',
				borderRadius: vo,
			},
			g =
				f ??
				Je.createElement(
					Vl.PlaceholderEmbed,
					Object.assign(
						{
							url: o ?? r,
							imageUrl: c,
							linkText: l,
							spinner: d,
							spinnerDisabled: s,
						},
						u,
						{
							style: Object.assign(
								Object.assign({}, E),
								u == null ? void 0 : u.style,
							),
						},
					),
				);
		return Je.createElement(
			'div',
			Object.assign({}, p, {
				className: (0, mo.default)(
					'rsme-embed rsme-linkedin-embed',
					p.className,
				),
				style: Object.assign(
					{
						overflow: 'hidden',
						width: i ?? void 0,
						height: a ?? void 0,
						borderRadius: vo,
					},
					p.style,
				),
			}),
			Je.createElement(zl.EmbedStyle, null),
			Je.createElement('iframe', {
				className: (0, mo.default)(
					'linkedin-post',
					!m && 'rsme-d-none',
				),
				src: r,
				width: '100%',
				height: m ? a : 0,
				frameBorder: '0',
				onLoad: () => v(!0),
			}),
			!m && !h && g,
		);
	};
yn.LinkedInEmbed = Kl;
var gn = {},
	Ql =
		(w && w.__createBinding) ||
		(Object.create
			? function (e, t, n, r) {
					r === void 0 && (r = n);
					var o = Object.getOwnPropertyDescriptor(t, n);
					(!o ||
						('get' in o
							? !t.__esModule
							: o.writable || o.configurable)) &&
						(o = {
							enumerable: !0,
							get: function () {
								return t[n];
							},
						}),
						Object.defineProperty(e, r, o);
			  }
			: function (e, t, n, r) {
					r === void 0 && (r = n), (e[r] = t[n]);
			  }),
	Xl =
		(w && w.__setModuleDefault) ||
		(Object.create
			? function (e, t) {
					Object.defineProperty(e, 'default', {
						enumerable: !0,
						value: t,
					});
			  }
			: function (e, t) {
					e.default = t;
			  }),
	Zl =
		(w && w.__importStar) ||
		function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (e != null)
				for (var n in e)
					n !== 'default' &&
						Object.prototype.hasOwnProperty.call(e, n) &&
						Ql(t, e, n);
			return Xl(t, e), t;
		},
	ec =
		(w && w.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (
					var o = 0, r = Object.getOwnPropertySymbols(e);
					o < r.length;
					o++
				)
					t.indexOf(r[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
						(n[r[o]] = e[r[o]]);
			return n;
		},
	tc =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(gn, '__esModule', { value: !0 });
gn.PinterestEmbed = void 0;
const yo = tc(ne),
	Ke = Zl(ee),
	nc = se,
	rc = le,
	oc = 250,
	ic = 550,
	ac = 550,
	go = 8,
	sc = (e) => {
		var t,
			n,
			r,
			{
				url: o,
				postUrl: i,
				width: a,
				height: l = 500,
				linkText: c = 'View post on Pinterest',
				placeholderImageUrl: d,
				placeholderSpinner: s,
				placeholderSpinnerDisabled: u = !1,
				placeholderProps: f,
				embedPlaceholder: h,
				placeholderDisabled: p = !1,
			} = e,
			m = ec(e, [
				'url',
				'postUrl',
				'width',
				'height',
				'linkText',
				'placeholderImageUrl',
				'placeholderSpinner',
				'placeholderSpinnerDisabled',
				'placeholderProps',
				'embedPlaceholder',
				'placeholderDisabled',
			]);
		const [v, E] = Ke.useState(!1),
			g = {
				minWidth: oc,
				maxWidth: ic,
				width: typeof a < 'u' ? a : '100%',
				height:
					typeof l < 'u'
						? l
						: typeof ((t = m.style) === null || t === void 0
								? void 0
								: t.height) < 'u' ||
						  typeof ((n = m.style) === null || n === void 0
								? void 0
								: n.maxHeight) < 'u'
						? '100%'
						: ac,
				border: 'solid 1px rgba(0, 0, 0, 0.15)',
				borderRadius: go,
			},
			y =
				h ??
				Ke.createElement(
					nc.PlaceholderEmbed,
					Object.assign(
						{
							url: i ?? o,
							imageUrl: d,
							linkText: c,
							spinner: s,
							spinnerDisabled: u,
						},
						f,
						{
							style: Object.assign(
								Object.assign({}, g),
								f == null ? void 0 : f.style,
							),
						},
					),
				),
			S =
				(r = o.match(/pin\/([\w\d_-]+)/)) === null || r === void 0
					? void 0
					: r[1],
			x = S ?? '000000000000000000';
		return Ke.createElement(
			'div',
			Object.assign({}, m, {
				className: (0, yo.default)(
					'rsme-embed rsme-pinterest-embed',
					m.className,
				),
				style: Object.assign(
					{
						overflow: 'hidden',
						width: a ?? void 0,
						height: l ?? void 0,
						borderRadius: go,
					},
					m.style,
				),
			}),
			Ke.createElement(rc.EmbedStyle, null),
			Ke.createElement('iframe', {
				className: (0, yo.default)(
					'pinterest-post',
					!v && 'rsme-d-none',
				),
				src: `https://assets.pinterest.com/ext/embed.html?id=${x}`,
				width: '100%',
				height: v ? l : 0,
				frameBorder: '0',
				scrolling: 'no',
				onLoad: () => E(!0),
			}),
			!v && !p && y,
		);
	};
gn.PinterestEmbed = sc;
var bn = {},
	lc =
		(w && w.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (
					var o = 0, r = Object.getOwnPropertySymbols(e);
					o < r.length;
					o++
				)
					t.indexOf(r[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
						(n[r[o]] = e[r[o]]);
			return n;
		},
	na =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(bn, '__esModule', { value: !0 });
bn.TikTokEmbed = void 0;
const cc = na(ne),
	K = na(ee),
	uc = ye,
	dc = ze,
	fc = se,
	hc = Ge,
	pc = le,
	_c = 'https://www.tiktok.com/embed.js',
	mc = 325,
	vc = 480,
	yc = 550,
	bo = 8,
	kn = 'process-embed',
	wo = 'confirm-embed-success',
	Eo = 'retrying',
	gc = 'embed-success',
	bc = (e) => {
		var t,
			n,
			{
				url: r,
				width: o,
				height: i,
				linkText: a = 'View post on TikTok',
				placeholderImageUrl: l,
				placeholderSpinner: c,
				placeholderSpinnerDisabled: d = !1,
				placeholderProps: s,
				embedPlaceholder: u,
				placeholderDisabled: f = !1,
				scriptLoadDisabled: h = !1,
				retryDelay: p = 5e3,
				retryDisabled: m = !1,
				frame: v = void 0,
				debug: E = !1,
			} = e,
			g = lc(e, [
				'url',
				'width',
				'height',
				'linkText',
				'placeholderImageUrl',
				'placeholderSpinner',
				'placeholderSpinnerDisabled',
				'placeholderProps',
				'embedPlaceholder',
				'placeholderDisabled',
				'scriptLoadDisabled',
				'retryDelay',
				'retryDisabled',
				'frame',
				'debug',
			]);
		const [y, S] = K.default.useState(kn),
			x = K.default.useRef((0, hc.generateUUID)()),
			[O, N] = K.default.useState(Date.now()),
			$ = K.default.useMemo(() => `${x.current}-${O}`, [O]),
			D = (0, dc.useFrame)(v);
		K.default.useEffect(() => {
			E && console.log(`[${new Date().toISOString()}]: ${y}`);
		}, [E, y]),
			K.default.useEffect(() => {
				if (y === kn && D.document && !h) {
					const R = 'tiktok-embed-script',
						z = D.document.getElementById(R);
					z && z.remove();
					const M = D.document.createElement('script');
					M.setAttribute('src', `${_c}?t=${Date.now()}`),
						M.setAttribute('id', R),
						D.document.head.appendChild(M),
						S(wo);
				}
			}, [h, y, D.document]),
			K.default.useEffect(() => {
				const R = new uc.Subs();
				return (
					y === wo &&
						(R.setInterval(() => {
							D.document &&
								(D.document.getElementById(x.current) || S(gc));
						}, 1),
						m ||
							R.setTimeout(() => {
								S(Eo);
							}, p)),
					R.createCleanup()
				);
			}, [p, m, y, D.document]),
			K.default.useEffect(() => {
				y === Eo && (N(Date.now()), S(kn));
			}, [y]);
		const C = r.replace(/[?].*$/, '').replace(/^.+\//, ''),
			A = {
				minWidth: mc,
				maxWidth: vc,
				width: typeof o < 'u' ? o : '100%',
				height:
					typeof i < 'u'
						? i
						: typeof ((t = g.style) === null || t === void 0
								? void 0
								: t.height) < 'u' ||
						  typeof ((n = g.style) === null || n === void 0
								? void 0
								: n.maxHeight) < 'u'
						? '100%'
						: yc,
				border: 'solid 1px rgba(22,24,35,0.12)',
				borderRadius: bo,
			},
			I =
				u ??
				K.default.createElement(
					fc.PlaceholderEmbed,
					Object.assign(
						{
							url: r,
							imageUrl: l,
							linkText: a,
							spinner: c,
							spinnerDisabled: d,
						},
						s,
						{
							style: Object.assign(
								Object.assign({}, A),
								s == null ? void 0 : s.style,
							),
						},
					),
				);
		return K.default.createElement(
			'div',
			Object.assign({}, g, {
				className: (0, cc.default)(
					'rsme-embed rsme-tiktok-embed',
					g.className,
				),
				style: Object.assign(
					{
						overflow: 'hidden',
						width: o ?? void 0,
						height: i ?? void 0,
						borderRadius: bo,
					},
					g.style,
				),
			}),
			K.default.createElement(pc.EmbedStyle, null),
			K.default.createElement(
				'div',
				{ className: 'tiktok-embed-container' },
				K.default.createElement(
					'blockquote',
					{
						key: $,
						className: 'tiktok-embed',
						cite: r,
						'data-video-id': C,
					},
					f
						? K.default.createElement(
								'div',
								{ id: x.current, style: { display: 'none' } },
								' ',
						  )
						: K.default.createElement(
								'div',
								{
									id: x.current,
									style: {
										display: 'flex',
										justifyContent: 'center',
									},
								},
								I,
						  ),
				),
			),
		);
	};
bn.TikTokEmbed = bc;
var wn = {},
	de = 'https://platform.twitter.com/widgets.js',
	Tn = 'createTimeline',
	wc = function (t) {
		var n = b.useRef(null),
			r = b.useState(!0),
			o = r[0],
			i = r[1],
			a = function () {
				var d = Object.assign({}, t.options);
				if (t != null && t.autoHeight) {
					var s, u;
					d.height =
						(s = n.current) === null ||
						s === void 0 ||
						(u = s.parentNode) === null ||
						u === void 0
							? void 0
							: u.offsetHeight;
				}
				return (
					(d = Object.assign({}, d, {
						theme: t == null ? void 0 : t.theme,
						linkColor: t == null ? void 0 : t.linkColor,
						borderColor: t == null ? void 0 : t.borderColor,
						lang: t == null ? void 0 : t.lang,
						tweetLimit: t == null ? void 0 : t.tweetLimit,
						ariaPolite: t == null ? void 0 : t.ariaPolite,
					})),
					d
				);
			},
			l = function (d) {
				return (
					(d.chrome = ''),
					t.noHeader && (d.chrome = d.chrome + ' noheader'),
					t.noFooter && (d.chrome = d.chrome + ' nofooter'),
					t.noBorders && (d.chrome = d.chrome + ' noborders'),
					t.noScrollbar && (d.chrome = d.chrome + ' noscrollbar'),
					t.transparent && (d.chrome = d.chrome + ' transparent'),
					d
				);
			};
		return (
			b.useEffect(function () {
				var c = !0,
					d = require('scriptjs');
				return (
					d(de, 'twitter-embed', function () {
						if (!window.twttr) {
							console.error(
								'Failure to load window.twttr, aborting load',
							);
							return;
						}
						if (c) {
							if (!window.twttr.widgets[Tn]) {
								console.error(
									'Method ' +
										Tn +
										' is not present anymore in twttr.widget api',
								);
								return;
							}
							var s = a();
							(s = l(s)),
								window.twttr.widgets[Tn](
									{
										sourceType: t.sourceType,
										screenName: t.screenName,
										userId: t.userId,
										ownerScreenName: t.ownerScreenName,
										slug: t.slug,
										id: t.id || t.widgetId,
										url: t.url,
									},
									n == null ? void 0 : n.current,
									s,
								).then(function (u) {
									i(!1), t.onLoad && t.onLoad(u);
								});
						}
					}),
					function () {
						c = !1;
					}
				);
			}, []),
			b.createElement(
				b.Fragment,
				null,
				o && b.createElement(b.Fragment, null, t.placeholder),
				b.createElement('div', { ref: n }),
			)
		);
	},
	xn = 'createShareButton',
	Ec = function (t) {
		var n = b.useRef(null),
			r = b.useState(!0),
			o = r[0],
			i = r[1];
		return (
			b.useEffect(function () {
				var a = !0,
					l = require('scriptjs');
				return (
					l(de, 'twitter-embed', function () {
						if (!window.twttr) {
							console.error(
								'Failure to load window.twttr, aborting load',
							);
							return;
						}
						if (a) {
							if (!window.twttr.widgets[xn]) {
								console.error(
									'Method ' +
										xn +
										' is not present anymore in twttr.widget api',
								);
								return;
							}
							window.twttr.widgets[xn](
								t.url,
								n == null ? void 0 : n.current,
								t.options,
							).then(function (c) {
								i(!1), t.onLoad && t.onLoad(c);
							});
						}
					}),
					function () {
						a = !1;
					}
				);
			}, []),
			b.createElement(
				b.Fragment,
				null,
				o && b.createElement(b.Fragment, null, t.placeholder),
				b.createElement('div', { ref: n }),
			)
		);
	},
	$n = 'createFollowButton',
	Sc = function (t) {
		var n = b.useRef(null),
			r = b.useState(!0),
			o = r[0],
			i = r[1];
		return (
			b.useEffect(function () {
				var a = !0,
					l = require('scriptjs');
				return (
					l(de, 'twitter-embed', function () {
						if (!window.twttr) {
							console.error(
								'Failure to load window.twttr, aborting load',
							);
							return;
						}
						if (a) {
							if (!window.twttr.widgets[$n]) {
								console.error(
									'Method ' +
										$n +
										' is not present anymore in twttr.widget api',
								);
								return;
							}
							window.twttr.widgets[$n](
								t.screenName,
								n == null ? void 0 : n.current,
								t.options,
							).then(function (c) {
								i(!1), t.onLoad && t.onLoad(c);
							});
						}
					}),
					function () {
						a = !1;
					}
				);
			}, []),
			b.createElement(
				b.Fragment,
				null,
				o && b.createElement(b.Fragment, null, t.placeholder),
				b.createElement('div', { ref: n }),
			)
		);
	},
	In = 'createHashtagButton',
	Pc = function (t) {
		var n = b.useRef(null),
			r = b.useState(!0),
			o = r[0],
			i = r[1];
		return (
			b.useEffect(function () {
				var a = !0,
					l = require('scriptjs');
				return (
					l(de, 'twitter-embed', function () {
						if (!window.twttr) {
							console.error(
								'Failure to load window.twttr, aborting load',
							);
							return;
						}
						if (a) {
							if (!window.twttr.widgets[In]) {
								console.error(
									'Method ' +
										In +
										' is not present anymore in twttr.widget api',
								);
								return;
							}
							window.twttr.widgets[In](
								t.tag,
								n == null ? void 0 : n.current,
								t.options,
							).then(function (c) {
								i(!1), t.onLoad && t.onLoad(c);
							});
						}
					}),
					function () {
						a = !1;
					}
				);
			}, []),
			b.createElement(
				b.Fragment,
				null,
				o && b.createElement(b.Fragment, null, t.placeholder),
				b.createElement('div', { ref: n }),
			)
		);
	},
	Dn = 'createMentionButton',
	Oc = function (t) {
		var n = b.useRef(null),
			r = b.useState(!0),
			o = r[0],
			i = r[1];
		return (
			b.useEffect(function () {
				var a = !0,
					l = require('scriptjs');
				return (
					l(de, 'twitter-embed', function () {
						if (!window.twttr) {
							console.error(
								'Failure to load window.twttr, aborting load',
							);
							return;
						}
						if (a) {
							if (!window.twttr.widgets[Dn]) {
								console.error(
									'Method ' +
										Dn +
										' is not present anymore in twttr.widget api',
								);
								return;
							}
							window.twttr.widgets[Dn](
								t.screenName,
								n == null ? void 0 : n.current,
								t.options,
							).then(function (c) {
								i(!1), t.onLoad && t.onLoad(c);
							});
						}
					}),
					function () {
						a = !1;
					}
				);
			}, []),
			b.createElement(
				b.Fragment,
				null,
				o && b.createElement(b.Fragment, null, t.placeholder),
				b.createElement('div', { ref: n }),
			)
		);
	},
	Rn = 'createTweet',
	Cc = function (t) {
		var n = b.useRef(null),
			r = b.useState(!0),
			o = r[0],
			i = r[1];
		return (
			b.useEffect(function () {
				var a = !0,
					l = require('scriptjs');
				return (
					l(de, 'twitter-embed', function () {
						if (!window.twttr) {
							console.error(
								'Failure to load window.twttr, aborting load',
							);
							return;
						}
						if (a) {
							if (!window.twttr.widgets[Rn]) {
								console.error(
									'Method ' +
										Rn +
										' is not present anymore in twttr.widget api',
								);
								return;
							}
							window.twttr.widgets[Rn](
								t.tweetId,
								n == null ? void 0 : n.current,
								t.options,
							).then(function (c) {
								i(!1), t.onLoad && t.onLoad(c);
							});
						}
					}),
					function () {
						a = !1;
					}
				);
			}, []),
			b.createElement(
				b.Fragment,
				null,
				o && b.createElement(b.Fragment, null, t.placeholder),
				b.createElement('div', { ref: n }),
			)
		);
	},
	Nn = 'createMoment',
	kc = function (t) {
		var n = b.useRef(null),
			r = b.useState(!0),
			o = r[0],
			i = r[1];
		return (
			b.useEffect(function () {
				var a = !0,
					l = require('scriptjs');
				return (
					l(de, 'twitter-embed', function () {
						if (!window.twttr) {
							console.error(
								'Failure to load window.twttr, aborting load',
							);
							return;
						}
						if (a) {
							if (!window.twttr.widgets[Nn]) {
								console.error(
									'Method ' +
										Nn +
										' is not present anymore in twttr.widget api',
								);
								return;
							}
							window.twttr.widgets[Nn](
								t.momentId,
								n == null ? void 0 : n.current,
								t.options,
							).then(function (c) {
								i(!1), t.onLoad && t.onLoad(c);
							});
						}
					}),
					function () {
						a = !1;
					}
				);
			}, []),
			b.createElement(
				b.Fragment,
				null,
				o && b.createElement(b.Fragment, null, t.placeholder),
				b.createElement('div', { ref: n }),
			)
		);
	},
	Mn = 'createDMButton',
	Tc = function (t) {
		var n = b.useRef(null),
			r = b.useState(!0),
			o = r[0],
			i = r[1];
		return (
			b.useEffect(function () {
				var a = !0,
					l = require('scriptjs');
				return (
					l(de, 'twitter-embed', function () {
						if (!window.twttr) {
							console.error(
								'Failure to load window.twttr, aborting load',
							);
							return;
						}
						if (a) {
							if (!window.twttr.widgets[Mn]) {
								console.error(
									'Method ' +
										Mn +
										' is not present anymore in twttr.widget api',
								);
								return;
							}
							window.twttr.widgets[Mn](
								t.id,
								n == null ? void 0 : n.current,
								t.options,
							).then(function (c) {
								a && (i(!1), t.onLoad && t.onLoad(c));
							});
						}
					}),
					function () {
						a = !1;
					}
				);
			}, []),
			b.createElement(
				b.Fragment,
				null,
				o && b.createElement(b.Fragment, null, t.placeholder),
				b.createElement('div', { ref: n }),
			)
		);
	},
	jn = 'createVideo',
	xc = function (t) {
		var n = b.useRef(null),
			r = b.useState(!0),
			o = r[0],
			i = r[1];
		return (
			b.useEffect(function () {
				var a = !0,
					l = require('scriptjs');
				return (
					l(de, 'twitter-embed', function () {
						if (!window.twttr) {
							console.error(
								'Failure to load window.twttr, aborting load',
							);
							return;
						}
						if (a) {
							if (!window.twttr.widgets[jn]) {
								console.error(
									'Method ' +
										jn +
										' is not present anymore in twttr.widget api',
								);
								return;
							}
							window.twttr.widgets[jn](
								t.id,
								n == null ? void 0 : n.current,
							).then(function (c) {
								i(!1), t.onLoad && t.onLoad(c);
							});
						}
					}),
					function () {
						a = !1;
					}
				);
			}, []),
			b.createElement(
				b.Fragment,
				null,
				o && b.createElement(b.Fragment, null, t.placeholder),
				b.createElement('div', { ref: n }),
			)
		);
	},
	An = 'createPeriscopeOnAirButton',
	$c = function (t) {
		var n = b.useRef(null),
			r = b.useState(!0),
			o = r[0],
			i = r[1];
		return (
			b.useEffect(function () {
				var a = !0,
					l = require('scriptjs');
				return (
					l(de, 'twitter-embed', function () {
						if (!window.twttr) {
							console.error(
								'Failure to load window.twttr, aborting load',
							);
							return;
						}
						if (a) {
							if (!window.twttr.widgets[An]) {
								console.error(
									'Method ' +
										An +
										' is not present anymore in twttr.widget api',
								);
								return;
							}
							window.twttr.widgets[An](
								t.username,
								n == null ? void 0 : n.current,
								t.options,
							).then(function (c) {
								i(!1), t.onLoad && t.onLoad(c);
							});
						}
					}),
					function () {
						a = !1;
					}
				);
			}, []),
			b.createElement(
				b.Fragment,
				null,
				o && b.createElement(b.Fragment, null, t.placeholder),
				b.createElement('div', { ref: n }),
			)
		);
	};
const Ic = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				TwitterDMButton: Tc,
				TwitterFollowButton: Sc,
				TwitterHashtagButton: Pc,
				TwitterMentionButton: Oc,
				TwitterMomentShare: kc,
				TwitterOnAirButton: $c,
				TwitterShareButton: Ec,
				TwitterTimelineEmbed: wc,
				TwitterTweetEmbed: Cc,
				TwitterVideoEmbed: xc,
			},
			Symbol.toStringTag,
			{ value: 'Module' },
		),
	),
	Dc = gr(Ic);
var Rc =
		(w && w.__createBinding) ||
		(Object.create
			? function (e, t, n, r) {
					r === void 0 && (r = n);
					var o = Object.getOwnPropertyDescriptor(t, n);
					(!o ||
						('get' in o
							? !t.__esModule
							: o.writable || o.configurable)) &&
						(o = {
							enumerable: !0,
							get: function () {
								return t[n];
							},
						}),
						Object.defineProperty(e, r, o);
			  }
			: function (e, t, n, r) {
					r === void 0 && (r = n), (e[r] = t[n]);
			  }),
	Nc =
		(w && w.__setModuleDefault) ||
		(Object.create
			? function (e, t) {
					Object.defineProperty(e, 'default', {
						enumerable: !0,
						value: t,
					});
			  }
			: function (e, t) {
					e.default = t;
			  }),
	Mc =
		(w && w.__importStar) ||
		function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (e != null)
				for (var n in e)
					n !== 'default' &&
						Object.prototype.hasOwnProperty.call(e, n) &&
						Rc(t, e, n);
			return Nc(t, e), t;
		},
	jc =
		(w && w.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (
					var o = 0, r = Object.getOwnPropertySymbols(e);
					o < r.length;
					o++
				)
					t.indexOf(r[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
						(n[r[o]] = e[r[o]]);
			return n;
		},
	Ac =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(wn, '__esModule', { value: !0 });
wn.TwitterEmbed = void 0;
const Fc = Ac(ne),
	kt = Mc(ee),
	Lc = Dc,
	Uc = se,
	Bc = le,
	qc = 250,
	Hc = 550,
	Wc = 350,
	So = 12,
	Vc = (e) => {
		var t,
			n,
			{
				url: r,
				width: o,
				height: i,
				linkText: a = 'View post on Twitter',
				placeholderImageUrl: l,
				placeholderSpinner: c,
				placeholderSpinnerDisabled: d = !1,
				placeholderProps: s,
				embedPlaceholder: u,
				placeholderDisabled: f,
				twitterTweetEmbedProps: h,
			} = e,
			p = jc(e, [
				'url',
				'width',
				'height',
				'linkText',
				'placeholderImageUrl',
				'placeholderSpinner',
				'placeholderSpinnerDisabled',
				'placeholderProps',
				'embedPlaceholder',
				'placeholderDisabled',
				'twitterTweetEmbedProps',
			]);
		const m = r.substring(r.lastIndexOf('/') + 1).replace(/[?].*$/, ''),
			v = !!(o != null && o.toString().includes('%')),
			E = !!(i != null && i.toString().includes('%')),
			g = {
				minWidth: qc,
				maxWidth: Hc,
				width: typeof o < 'u' ? (v ? '100%' : o) : '100%',
				height: E
					? '100%'
					: typeof i < 'u'
					? i
					: typeof ((t = p.style) === null || t === void 0
							? void 0
							: t.height) < 'u' ||
					  typeof ((n = p.style) === null || n === void 0
							? void 0
							: n.maxHeight) < 'u'
					? '100%'
					: Wc,
				border: 'solid 1px #c9d4d9',
				borderRadius: So,
			},
			y =
				u ??
				kt.createElement(
					Uc.PlaceholderEmbed,
					Object.assign(
						{
							url: r,
							imageUrl: l,
							linkText: a,
							spinner: c,
							spinnerDisabled: d,
						},
						s,
						{
							style: Object.assign(
								Object.assign({}, g),
								s == null ? void 0 : s.style,
							),
						},
					),
				);
		return kt.createElement(
			'div',
			Object.assign({}, p, {
				className: (0, Fc.default)(
					'rsme-embed rsme-twitter-embed',
					p.className,
				),
				style: Object.assign(
					{
						overflow: 'hidden',
						width: o ?? void 0,
						height: i ?? void 0,
						borderRadius: So,
					},
					p.style,
				),
			}),
			kt.createElement(Bc.EmbedStyle, null),
			kt.createElement(
				Lc.TwitterTweetEmbed,
				Object.assign({ tweetId: m, placeholder: f ? void 0 : y }, h),
			),
		);
	};
wn.TwitterEmbed = Vc;
var En = {},
	ra = { exports: {} },
	zc = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	Gc = zc,
	Yc = Gc;
function oa() {}
function ia() {}
ia.resetWarningCache = oa;
var Jc = function () {
	function e(r, o, i, a, l, c) {
		if (c !== Yc) {
			var d = new Error(
				'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
			);
			throw ((d.name = 'Invariant Violation'), d);
		}
	}
	e.isRequired = e;
	function t() {
		return e;
	}
	var n = {
		array: e,
		bigint: e,
		bool: e,
		func: e,
		number: e,
		object: e,
		string: e,
		symbol: e,
		any: e,
		arrayOf: t,
		element: e,
		elementType: e,
		instanceOf: t,
		node: e,
		objectOf: t,
		oneOf: t,
		oneOfType: t,
		shape: t,
		exact: t,
		checkPropTypes: ia,
		resetWarningCache: oa,
	};
	return (n.PropTypes = n), n;
};
ra.exports = Jc();
var Kc = ra.exports;
const V = pn(Kc);
var Qc = function e(t, n) {
	if (t === n) return !0;
	if (t && n && typeof t == 'object' && typeof n == 'object') {
		if (t.constructor !== n.constructor) return !1;
		var r, o, i;
		if (Array.isArray(t)) {
			if (((r = t.length), r != n.length)) return !1;
			for (o = r; o-- !== 0; ) if (!e(t[o], n[o])) return !1;
			return !0;
		}
		if (t.constructor === RegExp)
			return t.source === n.source && t.flags === n.flags;
		if (t.valueOf !== Object.prototype.valueOf)
			return t.valueOf() === n.valueOf();
		if (t.toString !== Object.prototype.toString)
			return t.toString() === n.toString();
		if (((i = Object.keys(t)), (r = i.length), r !== Object.keys(n).length))
			return !1;
		for (o = r; o-- !== 0; )
			if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
		for (o = r; o-- !== 0; ) {
			var a = i[o];
			if (!e(t[a], n[a])) return !1;
		}
		return !0;
	}
	return t !== t && n !== n;
};
const Xc = pn(Qc);
var Jn = { exports: {} },
	aa;
/**
 * @link https://github.com/gajus/sister for the canonical source repository
 * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
 */ aa = function () {
	var e = {},
		t = {};
	return (
		(e.on = function (n, r) {
			var o = { name: n, handler: r };
			return (t[n] = t[n] || []), t[n].unshift(o), o;
		}),
		(e.off = function (n) {
			var r = t[n.name].indexOf(n);
			r !== -1 && t[n.name].splice(r, 1);
		}),
		(e.trigger = function (n, r) {
			var o = t[n],
				i;
			if (o) for (i = o.length; i--; ) o[i].handler(r);
		}),
		e
	);
};
var Zc = aa,
	Kn = { exports: {} },
	eu = function (t, n, r) {
		var o = document.head || document.getElementsByTagName('head')[0],
			i = document.createElement('script');
		typeof n == 'function' && ((r = n), (n = {})),
			(n = n || {}),
			(r = r || function () {}),
			(i.type = n.type || 'text/javascript'),
			(i.charset = n.charset || 'utf8'),
			(i.async = 'async' in n ? !!n.async : !0),
			(i.src = t),
			n.attrs && tu(i, n.attrs),
			n.text && (i.text = '' + n.text);
		var a = 'onload' in i ? Po : nu;
		a(i, r), i.onload || Po(i, r), o.appendChild(i);
	};
function tu(e, t) {
	for (var n in t) e.setAttribute(n, t[n]);
}
function Po(e, t) {
	(e.onload = function () {
		(this.onerror = this.onload = null), t(null, e);
	}),
		(e.onerror = function () {
			(this.onerror = this.onload = null),
				t(new Error('Failed to load ' + this.src), e);
		});
}
function nu(e, t) {
	e.onreadystatechange = function () {
		(this.readyState != 'complete' && this.readyState != 'loaded') ||
			((this.onreadystatechange = null), t(null, e));
	};
}
(function (e, t) {
	Object.defineProperty(t, '__esModule', { value: !0 });
	var n = eu,
		r = o(n);
	function o(i) {
		return i && i.__esModule ? i : { default: i };
	}
	(t.default = function (i) {
		var a = new Promise(function (l) {
			if (
				window.YT &&
				window.YT.Player &&
				window.YT.Player instanceof Function
			) {
				l(window.YT);
				return;
			} else {
				var c =
					window.location.protocol === 'http:' ? 'http:' : 'https:';
				(0, r.default)(
					c + '//www.youtube.com/iframe_api',
					function (s) {
						s && i.trigger('error', s);
					},
				);
			}
			var d = window.onYouTubeIframeAPIReady;
			window.onYouTubeIframeAPIReady = function () {
				d && d(), l(window.YT);
			};
		});
		return a;
	}),
		(e.exports = t.default);
})(Kn, Kn.exports);
var ru = Kn.exports,
	Qn = { exports: {} },
	Xn = { exports: {} },
	Zn = { exports: {} },
	ut = 1e3,
	dt = ut * 60,
	ft = dt * 60,
	ht = ft * 24,
	ou = ht * 365.25,
	iu = function (e, t) {
		t = t || {};
		var n = typeof e;
		if (n === 'string' && e.length > 0) return au(e);
		if (n === 'number' && isNaN(e) === !1) return t.long ? lu(e) : su(e);
		throw new Error(
			'val is not a non-empty string or a valid number. val=' +
				JSON.stringify(e),
		);
	};
function au(e) {
	if (((e = String(e)), !(e.length > 100))) {
		var t =
			/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
				e,
			);
		if (t) {
			var n = parseFloat(t[1]),
				r = (t[2] || 'ms').toLowerCase();
			switch (r) {
				case 'years':
				case 'year':
				case 'yrs':
				case 'yr':
				case 'y':
					return n * ou;
				case 'days':
				case 'day':
				case 'd':
					return n * ht;
				case 'hours':
				case 'hour':
				case 'hrs':
				case 'hr':
				case 'h':
					return n * ft;
				case 'minutes':
				case 'minute':
				case 'mins':
				case 'min':
				case 'm':
					return n * dt;
				case 'seconds':
				case 'second':
				case 'secs':
				case 'sec':
				case 's':
					return n * ut;
				case 'milliseconds':
				case 'millisecond':
				case 'msecs':
				case 'msec':
				case 'ms':
					return n;
				default:
					return;
			}
		}
	}
}
function su(e) {
	return e >= ht
		? Math.round(e / ht) + 'd'
		: e >= ft
		? Math.round(e / ft) + 'h'
		: e >= dt
		? Math.round(e / dt) + 'm'
		: e >= ut
		? Math.round(e / ut) + 's'
		: e + 'ms';
}
function lu(e) {
	return (
		Tt(e, ht, 'day') ||
		Tt(e, ft, 'hour') ||
		Tt(e, dt, 'minute') ||
		Tt(e, ut, 'second') ||
		e + ' ms'
	);
}
function Tt(e, t, n) {
	if (!(e < t))
		return e < t * 1.5
			? Math.floor(e / t) + ' ' + n
			: Math.ceil(e / t) + ' ' + n + 's';
}
(function (e, t) {
	(t = e.exports = o.debug = o.default = o),
		(t.coerce = c),
		(t.disable = a),
		(t.enable = i),
		(t.enabled = l),
		(t.humanize = iu),
		(t.names = []),
		(t.skips = []),
		(t.formatters = {});
	var n;
	function r(d) {
		var s = 0,
			u;
		for (u in d) (s = (s << 5) - s + d.charCodeAt(u)), (s |= 0);
		return t.colors[Math.abs(s) % t.colors.length];
	}
	function o(d) {
		function s() {
			if (s.enabled) {
				var u = s,
					f = +new Date(),
					h = f - (n || f);
				(u.diff = h), (u.prev = n), (u.curr = f), (n = f);
				for (
					var p = new Array(arguments.length), m = 0;
					m < p.length;
					m++
				)
					p[m] = arguments[m];
				(p[0] = t.coerce(p[0])),
					typeof p[0] != 'string' && p.unshift('%O');
				var v = 0;
				(p[0] = p[0].replace(/%([a-zA-Z%])/g, function (g, y) {
					if (g === '%%') return g;
					v++;
					var S = t.formatters[y];
					if (typeof S == 'function') {
						var x = p[v];
						(g = S.call(u, x)), p.splice(v, 1), v--;
					}
					return g;
				})),
					t.formatArgs.call(u, p);
				var E = s.log || t.log || console.log.bind(console);
				E.apply(u, p);
			}
		}
		return (
			(s.namespace = d),
			(s.enabled = t.enabled(d)),
			(s.useColors = t.useColors()),
			(s.color = r(d)),
			typeof t.init == 'function' && t.init(s),
			s
		);
	}
	function i(d) {
		t.save(d), (t.names = []), (t.skips = []);
		for (
			var s = (typeof d == 'string' ? d : '').split(/[\s,]+/),
				u = s.length,
				f = 0;
			f < u;
			f++
		)
			s[f] &&
				((d = s[f].replace(/\*/g, '.*?')),
				d[0] === '-'
					? t.skips.push(new RegExp('^' + d.substr(1) + '$'))
					: t.names.push(new RegExp('^' + d + '$')));
	}
	function a() {
		t.enable('');
	}
	function l(d) {
		var s, u;
		for (s = 0, u = t.skips.length; s < u; s++)
			if (t.skips[s].test(d)) return !1;
		for (s = 0, u = t.names.length; s < u; s++)
			if (t.names[s].test(d)) return !0;
		return !1;
	}
	function c(d) {
		return d instanceof Error ? d.stack || d.message : d;
	}
})(Zn, Zn.exports);
var cu = Zn.exports;
(function (e, t) {
	(t = e.exports = cu),
		(t.log = o),
		(t.formatArgs = r),
		(t.save = i),
		(t.load = a),
		(t.useColors = n),
		(t.storage =
			typeof chrome < 'u' && typeof chrome.storage < 'u'
				? chrome.storage.local
				: l()),
		(t.colors = [
			'lightseagreen',
			'forestgreen',
			'goldenrod',
			'dodgerblue',
			'darkorchid',
			'crimson',
		]);
	function n() {
		return typeof window < 'u' &&
			window.process &&
			window.process.type === 'renderer'
			? !0
			: (typeof document < 'u' &&
					document.documentElement &&
					document.documentElement.style &&
					document.documentElement.style.WebkitAppearance) ||
					(typeof window < 'u' &&
						window.console &&
						(window.console.firebug ||
							(window.console.exception &&
								window.console.table))) ||
					(typeof navigator < 'u' &&
						navigator.userAgent &&
						navigator.userAgent
							.toLowerCase()
							.match(/firefox\/(\d+)/) &&
						parseInt(RegExp.$1, 10) >= 31) ||
					(typeof navigator < 'u' &&
						navigator.userAgent &&
						navigator.userAgent
							.toLowerCase()
							.match(/applewebkit\/(\d+)/));
	}
	t.formatters.j = function (c) {
		try {
			return JSON.stringify(c);
		} catch (d) {
			return '[UnexpectedJSONParseError]: ' + d.message;
		}
	};
	function r(c) {
		var d = this.useColors;
		if (
			((c[0] =
				(d ? '%c' : '') +
				this.namespace +
				(d ? ' %c' : ' ') +
				c[0] +
				(d ? '%c ' : ' ') +
				'+' +
				t.humanize(this.diff)),
			!!d)
		) {
			var s = 'color: ' + this.color;
			c.splice(1, 0, s, 'color: inherit');
			var u = 0,
				f = 0;
			c[0].replace(/%[a-zA-Z%]/g, function (h) {
				h !== '%%' && (u++, h === '%c' && (f = u));
			}),
				c.splice(f, 0, s);
		}
	}
	function o() {
		return (
			typeof console == 'object' &&
			console.log &&
			Function.prototype.apply.call(console.log, console, arguments)
		);
	}
	function i(c) {
		try {
			c == null ? t.storage.removeItem('debug') : (t.storage.debug = c);
		} catch {}
	}
	function a() {
		var c;
		try {
			c = t.storage.debug;
		} catch {}
		return (
			!c && typeof process < 'u' && 'env' in process && (c = {}.DEBUG), c
		);
	}
	t.enable(a());
	function l() {
		try {
			return window.localStorage;
		} catch {}
	}
})(Xn, Xn.exports);
var uu = Xn.exports,
	er = { exports: {} };
(function (e, t) {
	Object.defineProperty(t, '__esModule', { value: !0 }),
		(t.default = [
			'cueVideoById',
			'loadVideoById',
			'cueVideoByUrl',
			'loadVideoByUrl',
			'playVideo',
			'pauseVideo',
			'stopVideo',
			'getVideoLoadedFraction',
			'cuePlaylist',
			'loadPlaylist',
			'nextVideo',
			'previousVideo',
			'playVideoAt',
			'setShuffle',
			'setLoop',
			'getPlaylist',
			'getPlaylistIndex',
			'setOption',
			'mute',
			'unMute',
			'isMuted',
			'setVolume',
			'getVolume',
			'seekTo',
			'getPlayerState',
			'getPlaybackRate',
			'setPlaybackRate',
			'getAvailablePlaybackRates',
			'getPlaybackQuality',
			'setPlaybackQuality',
			'getAvailableQualityLevels',
			'getCurrentTime',
			'getDuration',
			'removeEventListener',
			'getVideoUrl',
			'getVideoEmbedCode',
			'getOptions',
			'getOption',
			'addEventListener',
			'destroy',
			'setSize',
			'getIframe',
		]),
		(e.exports = t.default);
})(er, er.exports);
var du = er.exports,
	tr = { exports: {} };
(function (e, t) {
	Object.defineProperty(t, '__esModule', { value: !0 }),
		(t.default = [
			'ready',
			'stateChange',
			'playbackQualityChange',
			'playbackRateChange',
			'error',
			'apiChange',
			'volumeChange',
		]),
		(e.exports = t.default);
})(tr, tr.exports);
var fu = tr.exports,
	nr = { exports: {} },
	rr = { exports: {} };
(function (e, t) {
	Object.defineProperty(t, '__esModule', { value: !0 }),
		(t.default = {
			BUFFERING: 3,
			ENDED: 0,
			PAUSED: 2,
			PLAYING: 1,
			UNSTARTED: -1,
			VIDEO_CUED: 5,
		}),
		(e.exports = t.default);
})(rr, rr.exports);
var hu = rr.exports;
(function (e, t) {
	Object.defineProperty(t, '__esModule', { value: !0 });
	var n = hu,
		r = o(n);
	function o(i) {
		return i && i.__esModule ? i : { default: i };
	}
	(t.default = {
		pauseVideo: {
			acceptableStates: [r.default.ENDED, r.default.PAUSED],
			stateChangeRequired: !1,
		},
		playVideo: {
			acceptableStates: [r.default.ENDED, r.default.PLAYING],
			stateChangeRequired: !1,
		},
		seekTo: {
			acceptableStates: [
				r.default.ENDED,
				r.default.PLAYING,
				r.default.PAUSED,
			],
			stateChangeRequired: !0,
			timeout: 3e3,
		},
	}),
		(e.exports = t.default);
})(nr, nr.exports);
var pu = nr.exports;
(function (e, t) {
	Object.defineProperty(t, '__esModule', { value: !0 });
	var n = uu,
		r = s(n),
		o = du,
		i = s(o),
		a = fu,
		l = s(a),
		c = pu,
		d = s(c);
	function s(h) {
		return h && h.__esModule ? h : { default: h };
	}
	var u = (0, r.default)('youtube-player'),
		f = {};
	(f.proxyEvents = function (h) {
		var p = {},
			m = function (N) {
				var $ = 'on' + N.slice(0, 1).toUpperCase() + N.slice(1);
				p[$] = function (D) {
					u('event "%s"', $, D), h.trigger(N, D);
				};
			},
			v = !0,
			E = !1,
			g = void 0;
		try {
			for (
				var y = l.default[Symbol.iterator](), S;
				!(v = (S = y.next()).done);
				v = !0
			) {
				var x = S.value;
				m(x);
			}
		} catch (O) {
			(E = !0), (g = O);
		} finally {
			try {
				!v && y.return && y.return();
			} finally {
				if (E) throw g;
			}
		}
		return p;
	}),
		(f.promisifyPlayer = function (h) {
			var p =
					arguments.length > 1 && arguments[1] !== void 0
						? arguments[1]
						: !1,
				m = {},
				v = function ($) {
					p && d.default[$]
						? (m[$] = function () {
								for (
									var D = arguments.length,
										C = Array(D),
										A = 0;
									A < D;
									A++
								)
									C[A] = arguments[A];
								return h.then(function (I) {
									var R = d.default[$],
										z = I.getPlayerState(),
										M = I[$].apply(I, C);
									return R.stateChangeRequired ||
										(Array.isArray(R.acceptableStates) &&
											R.acceptableStates.indexOf(z) ===
												-1)
										? new Promise(function (L) {
												var k = function F() {
													var J = I.getPlayerState(),
														re = void 0;
													typeof R.timeout ==
														'number' &&
														(re = setTimeout(
															function () {
																I.removeEventListener(
																	'onStateChange',
																	F,
																),
																	L();
															},
															R.timeout,
														)),
														Array.isArray(
															R.acceptableStates,
														) &&
															R.acceptableStates.indexOf(
																J,
															) !== -1 &&
															(I.removeEventListener(
																'onStateChange',
																F,
															),
															clearTimeout(re),
															L());
												};
												I.addEventListener(
													'onStateChange',
													k,
												);
										  }).then(function () {
												return M;
										  })
										: M;
								});
						  })
						: (m[$] = function () {
								for (
									var D = arguments.length,
										C = Array(D),
										A = 0;
									A < D;
									A++
								)
									C[A] = arguments[A];
								return h.then(function (I) {
									return I[$].apply(I, C);
								});
						  });
				},
				E = !0,
				g = !1,
				y = void 0;
			try {
				for (
					var S = i.default[Symbol.iterator](), x;
					!(E = (x = S.next()).done);
					E = !0
				) {
					var O = x.value;
					v(O);
				}
			} catch (N) {
				(g = !0), (y = N);
			} finally {
				try {
					!E && S.return && S.return();
				} finally {
					if (g) throw y;
				}
			}
			return m;
		}),
		(t.default = f),
		(e.exports = t.default);
})(Qn, Qn.exports);
var _u = Qn.exports;
(function (e, t) {
	Object.defineProperty(t, '__esModule', { value: !0 });
	var n =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (u) {
						return typeof u;
				  }
				: function (u) {
						return u &&
							typeof Symbol == 'function' &&
							u.constructor === Symbol &&
							u !== Symbol.prototype
							? 'symbol'
							: typeof u;
				  },
		r = Zc,
		o = d(r),
		i = ru,
		a = d(i),
		l = _u,
		c = d(l);
	function d(u) {
		return u && u.__esModule ? u : { default: u };
	}
	var s = void 0;
	(t.default = function (u) {
		var f =
				arguments.length > 1 && arguments[1] !== void 0
					? arguments[1]
					: {},
			h =
				arguments.length > 2 && arguments[2] !== void 0
					? arguments[2]
					: !1,
			p = (0, o.default)();
		if ((s || (s = (0, a.default)(p)), f.events))
			throw new Error('Event handlers cannot be overwritten.');
		if (typeof u == 'string' && !document.getElementById(u))
			throw new Error('Element "' + u + '" does not exist.');
		f.events = c.default.proxyEvents(p);
		var m = new Promise(function (E) {
				if (
					(typeof u > 'u' ? 'undefined' : n(u)) === 'object' &&
					u.playVideo instanceof Function
				) {
					var g = u;
					E(g);
				} else
					s.then(function (y) {
						var S = new y.Player(u, f);
						return (
							p.on('ready', function () {
								E(S);
							}),
							null
						);
					});
			}),
			v = c.default.promisifyPlayer(m, h);
		return (v.on = p.on), (v.off = p.off), v;
	}),
		(e.exports = t.default);
})(Jn, Jn.exports);
var mu = Jn.exports;
const vu = pn(mu);
var yu = Object.defineProperty,
	gu = Object.defineProperties,
	bu = Object.getOwnPropertyDescriptors,
	Oo = Object.getOwnPropertySymbols,
	wu = Object.prototype.hasOwnProperty,
	Eu = Object.prototype.propertyIsEnumerable,
	Co = (e, t, n) =>
		t in e
			? yu(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n,
			  })
			: (e[t] = n),
	or = (e, t) => {
		for (var n in t || (t = {})) wu.call(t, n) && Co(e, n, t[n]);
		if (Oo) for (var n of Oo(t)) Eu.call(t, n) && Co(e, n, t[n]);
		return e;
	},
	ir = (e, t) => gu(e, bu(t)),
	Su = (e, t, n) =>
		new Promise((r, o) => {
			var i = (c) => {
					try {
						l(n.next(c));
					} catch (d) {
						o(d);
					}
				},
				a = (c) => {
					try {
						l(n.throw(c));
					} catch (d) {
						o(d);
					}
				},
				l = (c) =>
					c.done ? r(c.value) : Promise.resolve(c.value).then(i, a);
			l((n = n.apply(e, t)).next());
		});
function Pu(e, t) {
	var n, r;
	if (e.videoId !== t.videoId) return !0;
	const o = ((n = e.opts) == null ? void 0 : n.playerVars) || {},
		i = ((r = t.opts) == null ? void 0 : r.playerVars) || {};
	return o.start !== i.start || o.end !== i.end;
}
function ko(e = {}) {
	return ir(or({}, e), {
		height: 0,
		width: 0,
		playerVars: ir(or({}, e.playerVars), { autoplay: 0, start: 0, end: 0 }),
	});
}
function Ou(e, t) {
	return e.videoId !== t.videoId || !Xc(ko(e.opts), ko(t.opts));
}
function Cu(e, t) {
	var n, r, o, i;
	return (
		e.id !== t.id ||
		e.className !== t.className ||
		((n = e.opts) == null ? void 0 : n.width) !==
			((r = t.opts) == null ? void 0 : r.width) ||
		((o = e.opts) == null ? void 0 : o.height) !==
			((i = t.opts) == null ? void 0 : i.height) ||
		e.iframeClassName !== t.iframeClassName ||
		e.title !== t.title
	);
}
var ku = {
		videoId: '',
		id: '',
		className: '',
		iframeClassName: '',
		style: {},
		title: '',
		loading: void 0,
		opts: {},
		onReady: () => {},
		onError: () => {},
		onPlay: () => {},
		onPause: () => {},
		onEnd: () => {},
		onStateChange: () => {},
		onPlaybackRateChange: () => {},
		onPlaybackQualityChange: () => {},
	},
	Tu = {
		videoId: V.string,
		id: V.string,
		className: V.string,
		iframeClassName: V.string,
		style: V.object,
		title: V.string,
		loading: V.oneOf(['lazy', 'eager']),
		opts: V.objectOf(V.any),
		onReady: V.func,
		onError: V.func,
		onPlay: V.func,
		onPause: V.func,
		onEnd: V.func,
		onStateChange: V.func,
		onPlaybackRateChange: V.func,
		onPlaybackQualityChange: V.func,
	},
	Rt = class extends b.Component {
		constructor(e) {
			super(e),
				(this.destroyPlayerPromise = void 0),
				(this.onPlayerReady = (t) => {
					var n, r;
					return (r = (n = this.props).onReady) == null
						? void 0
						: r.call(n, t);
				}),
				(this.onPlayerError = (t) => {
					var n, r;
					return (r = (n = this.props).onError) == null
						? void 0
						: r.call(n, t);
				}),
				(this.onPlayerStateChange = (t) => {
					var n, r, o, i, a, l, c, d;
					switch (
						((r = (n = this.props).onStateChange) == null ||
							r.call(n, t),
						t.data)
					) {
						case Rt.PlayerState.ENDED:
							(i = (o = this.props).onEnd) == null ||
								i.call(o, t);
							break;
						case Rt.PlayerState.PLAYING:
							(l = (a = this.props).onPlay) == null ||
								l.call(a, t);
							break;
						case Rt.PlayerState.PAUSED:
							(d = (c = this.props).onPause) == null ||
								d.call(c, t);
							break;
					}
				}),
				(this.onPlayerPlaybackRateChange = (t) => {
					var n, r;
					return (r = (n = this.props).onPlaybackRateChange) == null
						? void 0
						: r.call(n, t);
				}),
				(this.onPlayerPlaybackQualityChange = (t) => {
					var n, r;
					return (r = (n = this.props).onPlaybackQualityChange) ==
						null
						? void 0
						: r.call(n, t);
				}),
				(this.destroyPlayer = () =>
					this.internalPlayer
						? ((this.destroyPlayerPromise = this.internalPlayer
								.destroy()
								.then(
									() => (this.destroyPlayerPromise = void 0),
								)),
						  this.destroyPlayerPromise)
						: Promise.resolve()),
				(this.createPlayer = () => {
					if (typeof document > 'u') return;
					if (this.destroyPlayerPromise) {
						this.destroyPlayerPromise.then(this.createPlayer);
						return;
					}
					const t = ir(or({}, this.props.opts), {
						videoId: this.props.videoId,
					});
					(this.internalPlayer = vu(this.container, t)),
						this.internalPlayer.on('ready', this.onPlayerReady),
						this.internalPlayer.on('error', this.onPlayerError),
						this.internalPlayer.on(
							'stateChange',
							this.onPlayerStateChange,
						),
						this.internalPlayer.on(
							'playbackRateChange',
							this.onPlayerPlaybackRateChange,
						),
						this.internalPlayer.on(
							'playbackQualityChange',
							this.onPlayerPlaybackQualityChange,
						),
						(this.props.title || this.props.loading) &&
							this.internalPlayer.getIframe().then((n) => {
								this.props.title &&
									n.setAttribute('title', this.props.title),
									this.props.loading &&
										n.setAttribute(
											'loading',
											this.props.loading,
										);
							});
				}),
				(this.resetPlayer = () =>
					this.destroyPlayer().then(this.createPlayer)),
				(this.updatePlayer = () => {
					var t;
					(t = this.internalPlayer) == null ||
						t.getIframe().then((n) => {
							this.props.id
								? n.setAttribute('id', this.props.id)
								: n.removeAttribute('id'),
								this.props.iframeClassName
									? n.setAttribute(
											'class',
											this.props.iframeClassName,
									  )
									: n.removeAttribute('class'),
								this.props.opts && this.props.opts.width
									? n.setAttribute(
											'width',
											this.props.opts.width.toString(),
									  )
									: n.removeAttribute('width'),
								this.props.opts && this.props.opts.height
									? n.setAttribute(
											'height',
											this.props.opts.height.toString(),
									  )
									: n.removeAttribute('height'),
								this.props.title
									? n.setAttribute('title', this.props.title)
									: n.setAttribute(
											'title',
											'YouTube video player',
									  ),
								this.props.loading
									? n.setAttribute(
											'loading',
											this.props.loading,
									  )
									: n.removeAttribute('loading');
						});
				}),
				(this.getInternalPlayer = () => this.internalPlayer),
				(this.updateVideo = () => {
					var t, n, r, o;
					if (
						typeof this.props.videoId > 'u' ||
						this.props.videoId === null
					) {
						(t = this.internalPlayer) == null || t.stopVideo();
						return;
					}
					let i = !1;
					const a = { videoId: this.props.videoId };
					if (
						((n = this.props.opts) != null &&
							n.playerVars &&
							((i = this.props.opts.playerVars.autoplay === 1),
							'start' in this.props.opts.playerVars &&
								(a.startSeconds =
									this.props.opts.playerVars.start),
							'end' in this.props.opts.playerVars &&
								(a.endSeconds =
									this.props.opts.playerVars.end)),
						i)
					) {
						(r = this.internalPlayer) == null || r.loadVideoById(a);
						return;
					}
					(o = this.internalPlayer) == null || o.cueVideoById(a);
				}),
				(this.refContainer = (t) => {
					this.container = t;
				}),
				(this.container = null),
				(this.internalPlayer = null);
		}
		componentDidMount() {
			this.createPlayer();
		}
		componentDidUpdate(e) {
			return Su(this, null, function* () {
				Cu(e, this.props) && this.updatePlayer(),
					Ou(e, this.props) && (yield this.resetPlayer()),
					Pu(e, this.props) && this.updateVideo();
			});
		}
		componentWillUnmount() {
			this.destroyPlayer();
		}
		render() {
			return b.createElement(
				'div',
				{ className: this.props.className, style: this.props.style },
				b.createElement('div', {
					id: this.props.id,
					className: this.props.iframeClassName,
					ref: this.refContainer,
				}),
			);
		}
	},
	Sn = Rt;
Sn.propTypes = Tu;
Sn.defaultProps = ku;
Sn.PlayerState = {
	UNSTARTED: -1,
	ENDED: 0,
	PLAYING: 1,
	PAUSED: 2,
	BUFFERING: 3,
	CUED: 5,
};
var xu = Sn;
const $u = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: xu },
			Symbol.toStringTag,
			{ value: 'Module' },
		),
	),
	Iu = gr($u);
var Du =
		(w && w.__createBinding) ||
		(Object.create
			? function (e, t, n, r) {
					r === void 0 && (r = n);
					var o = Object.getOwnPropertyDescriptor(t, n);
					(!o ||
						('get' in o
							? !t.__esModule
							: o.writable || o.configurable)) &&
						(o = {
							enumerable: !0,
							get: function () {
								return t[n];
							},
						}),
						Object.defineProperty(e, r, o);
			  }
			: function (e, t, n, r) {
					r === void 0 && (r = n), (e[r] = t[n]);
			  }),
	Ru =
		(w && w.__setModuleDefault) ||
		(Object.create
			? function (e, t) {
					Object.defineProperty(e, 'default', {
						enumerable: !0,
						value: t,
					});
			  }
			: function (e, t) {
					e.default = t;
			  }),
	Nu =
		(w && w.__importStar) ||
		function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (e != null)
				for (var n in e)
					n !== 'default' &&
						Object.prototype.hasOwnProperty.call(e, n) &&
						Du(t, e, n);
			return Ru(t, e), t;
		},
	Mu =
		(w && w.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (
					var o = 0, r = Object.getOwnPropertySymbols(e);
					o < r.length;
					o++
				)
					t.indexOf(r[o]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
						(n[r[o]] = e[r[o]]);
			return n;
		},
	sa =
		(w && w.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
Object.defineProperty(En, '__esModule', { value: !0 });
En.YouTubeEmbed = void 0;
const To = sa(ne),
	Re = Nu(ee),
	ju = sa(Iu),
	Au = se,
	Fu = le,
	Lu = 640,
	Uu = 360,
	xo = 0,
	Bu = (e) => {
		var t,
			n,
			r,
			o,
			i,
			a,
			l,
			c,
			d,
			s,
			u,
			{
				url: f,
				width: h,
				height: p,
				linkText: m = 'Watch on YouTube',
				placeholderImageUrl: v,
				placeholderSpinner: E,
				placeholderSpinnerDisabled: g = !1,
				placeholderProps: y,
				embedPlaceholder: S,
				placeholderDisabled: x,
				youTubeProps: O,
			} = e,
			N = Mu(e, [
				'url',
				'width',
				'height',
				'linkText',
				'placeholderImageUrl',
				'placeholderSpinner',
				'placeholderSpinnerDisabled',
				'placeholderProps',
				'embedPlaceholder',
				'placeholderDisabled',
				'youTubeProps',
			]);
		const [$, D] = Re.useState(!1),
			C =
				(t = f.match(/[?&]v=(.+?)(?:$|[&?])/)) === null || t === void 0
					? void 0
					: t[1],
			A =
				(n = f.match(/https:\/\/youtu\.be\/(.+?)(?:$|[&?])/)) ===
					null || n === void 0
					? void 0
					: n[1],
			I =
				(r = f.match(
					/https:\/\/www.youtube(-nocookie)?\.com\/embed\/(.+?)(?:$|[&?])/,
				)) === null || r === void 0
					? void 0
					: r[2],
			R =
				(i = (o = C ?? A) !== null && o !== void 0 ? o : I) !== null &&
				i !== void 0
					? i
					: '00000000',
			z = +((l =
				(a = f.match(/(.+?)(?:$|[&?])start=(\d+)/)) === null ||
				a === void 0
					? void 0
					: a[2]) !== null && l !== void 0
				? l
				: 0),
			M = !!(h != null && h.toString().includes('%')),
			L = !!(p != null && p.toString().includes('%'));
		let k = {};
		z && (k.playerVars = { start: z }),
			typeof h < 'u' && (k.width = M ? '100%' : `${h}`),
			typeof p < 'u' && (k.height = L ? '100%' : `${p}`),
			(k = Object.assign(
				Object.assign({}, k),
				O == null ? void 0 : O.opts,
			));
		const F = {
				maxWidth: M ? void 0 : Lu,
				width: typeof h < 'u' ? (M ? '100%' : h) : '100%',
				height: L
					? '100%'
					: typeof p < 'u'
					? p
					: typeof ((c = N.style) === null || c === void 0
							? void 0
							: c.height) < 'u' ||
					  typeof ((d = N.style) === null || d === void 0
							? void 0
							: d.maxHeight) < 'u'
					? '100%'
					: Uu,
				border: '1px solid #dee2e6',
				borderRadius: xo,
			},
			J =
				S ??
				Re.createElement(
					Au.PlaceholderEmbed,
					Object.assign(
						{
							url: f,
							imageUrl: v,
							linkText: m,
							spinner: E,
							spinnerDisabled: g,
						},
						y,
						{
							style: Object.assign(
								Object.assign({}, F),
								y == null ? void 0 : y.style,
							),
						},
					),
				);
		return Re.createElement(
			'div',
			Object.assign({}, N, {
				className: (0, To.default)(
					'rsme-embed rsme-youtube-embed',
					N.className,
				),
				style: Object.assign(
					{
						overflow: 'hidden',
						width: h ?? void 0,
						height: p ?? void 0,
						borderRadius: xo,
					},
					N.style,
				),
			}),
			Re.createElement(Fu.EmbedStyle, null),
			Re.createElement(
				'div',
				{ className: (0, To.default)(!$ && 'rsme-d-none') },
				Re.createElement(
					ju.default,
					Object.assign({}, O, {
						className:
							(s = O == null ? void 0 : O.className) !== null &&
							s !== void 0
								? s
								: 'youtube-iframe',
						videoId:
							(u = O == null ? void 0 : O.videoId) !== null &&
							u !== void 0
								? u
								: R,
						opts: k,
						onReady: (re) => {
							D(!0),
								O && O.onReady && (O == null || O.onReady(re));
						},
					}),
				),
			),
			!$ && !x && J,
		);
	};
En.YouTubeEmbed = Bu;
(function (e) {
	var t =
			(w && w.__createBinding) ||
			(Object.create
				? function (r, o, i, a) {
						a === void 0 && (a = i);
						var l = Object.getOwnPropertyDescriptor(o, i);
						(!l ||
							('get' in l
								? !o.__esModule
								: l.writable || l.configurable)) &&
							(l = {
								enumerable: !0,
								get: function () {
									return o[i];
								},
							}),
							Object.defineProperty(r, a, l);
				  }
				: function (r, o, i, a) {
						a === void 0 && (a = i), (r[a] = o[i]);
				  }),
		n =
			(w && w.__exportStar) ||
			function (r, o) {
				for (var i in r)
					i !== 'default' &&
						!Object.prototype.hasOwnProperty.call(o, i) &&
						t(o, r, i);
			};
	Object.defineProperty(e, '__esModule', { value: !0 }),
		n(_n, e),
		n(vn, e),
		n(yn, e),
		n(gn, e),
		n(bn, e),
		n(wn, e),
		n(En, e),
		n(se, e),
		n(yt, e);
})(br);
const qu = ({ className: e, videoUrl: t, title: n, description: r }) =>
		_('div', {
			className: e,
			children: [
				_(br.YouTubeEmbed, { url: t, width: '100%', height: 338 }),
				_(Me, {
					className: 'p-video-card__title',
					headingType: 'h4',
					headingStyle: 'h5',
					children: n,
				}),
				_('p', { className: 'p-video-card__description', children: r }),
			],
		}),
	$o = ({ className: e, link: t, linkText: n, src: r }) =>
		_(Q, {
			target: '_blank',
			className: e,
			href: t,
			children: [
				_(gt, { className: 'a-music-icon', src: r, alt: `${n} icon` }),
				n,
			],
		}),
	Hu = ({
		src: e,
		alt: t,
		spotifyLink: n,
		appleMusicLink: r,
		deezerLink: o,
	}) =>
		_('div', {
			className: 'm-album-container',
			children: [
				_(gt, { src: e, alt: t, className: 'm-albumcover' }),
				_('div', {
					className: 'm-album-links',
					children: [
						_(Q, {
							className: 'm-album-links__link',
							target: '_blank',
							href: n,
							children: 'Spotify',
						}),
						_(Q, {
							className: 'm-album-links__link',
							target: '_blank',
							href: r,
							children: 'Apple Music',
						}),
						_(Q, {
							className: 'm-album-links__link',
							target: '_blank',
							href: o,
							children: 'Deezer',
						}),
					],
				}),
			],
		}),
	Wu = ({
		termsLink: e,
		facebookLink: t,
		instagramLink: n,
		tiktokLink: r,
		twitterLink: o,
	}) =>
		_('footer', {
			className: 'o-footer',
			children: _('div', {
				className: 'u-layout-constrain',
				children: [
					_('section', {
						className: 'o-footer__details',
						children: [
							_('div', {
								className: 'o-footer__details__info',
								children: [
									_(gt, {
										src: 'images/JN-logo-letters.png',
										alt: 'small logo John Newman',
										className:
											'o-footer__details__info__logo',
									}),
									_(Q, {
										className:
											'o-footer__details__info__link',
										href: e,
										children: 'Privacy Policy',
									}),
								],
							}),
							_('div', {
								className: 'o-footer__details__links',
								children: [
									_(Q, {
										className:
											'o-footer__details__links__link',
										target: '_blank',
										href: 'https://www.musicglue.com/johnnewman/',
										children: 'Merchandise',
									}),
									_(Q, {
										className:
											'o-footer__details__links__link',
										href: '#about',
										children: 'About',
									}),
									_(Q, {
										className:
											'o-footer__details__links__link',
										href: '#music',
										children: 'Latest releases',
									}),
								],
							}),
							_('div', {
								className: 'o-footer__details__socials',
								children: [
									_('p', {
										className:
											'o-footer__details__socials__title',
										children: 'Social Media',
									}),
									_(Pi, {
										facebook: t,
										instagram: n,
										tiktok: r,
										twitter: o,
										direction: 'row',
									}),
								],
							}),
						],
					}),
					_('section', {
						className: 'o-footer__creator',
						children: [
							'Created by  ',
							_(Q, {
								className: 'o-footer__creator__link',
								target: '_blank',
								href: 'https://dinosource.agency/',
								children: 'Dinosource',
							}),
						],
					}),
				],
			}),
		}),
	gt = ({ src: e, alt: t, className: n }) =>
		X('img', { src: e, alt: t, className: n }),
	Vu = ({ children: e, shopUrl: t }) =>
		_(ie, {
			children: [_(Is, { shopUrl: t || '' }), _('main', { children: e })],
		});
function Io(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (o) {
				return Object.getOwnPropertyDescriptor(e, o).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function Do(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2
			? Io(Object(n), !0).forEach(function (r) {
					zu(e, r, n[r]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
			: Io(Object(n)).forEach(function (r) {
					Object.defineProperty(
						e,
						r,
						Object.getOwnPropertyDescriptor(n, r),
					);
			  });
	}
	return e;
}
function zu(e, t, n) {
	return (
		(t = Gu(t)),
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0,
			  })
			: (e[t] = n),
		e
	);
}
function Gu(e) {
	var t = Yu(e, 'string');
	return typeof t == 'symbol' ? t : String(t);
}
function Yu(e, t) {
	if (typeof e != 'object' || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || 'default');
		if (typeof r != 'object') return r;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (t === 'string' ? String : Number)(e);
}
function Jt(e) {
	return (
		e._type === 'span' &&
		'text' in e &&
		typeof e.text == 'string' &&
		(typeof e.marks > 'u' ||
			(Array.isArray(e.marks) &&
				e.marks.every((t) => typeof t == 'string')))
	);
}
function la(e) {
	return (
		typeof e._type == 'string' &&
		e._type[0] !== '@' &&
		(!('markDefs' in e) ||
			(Array.isArray(e.markDefs) &&
				e.markDefs.every((t) => typeof t._key == 'string'))) &&
		'children' in e &&
		Array.isArray(e.children) &&
		e.children.every((t) => typeof t == 'object' && '_type' in t)
	);
}
function ca(e) {
	return (
		la(e) &&
		'listItem' in e &&
		typeof e.listItem == 'string' &&
		(typeof e.level > 'u' || typeof e.level == 'number')
	);
}
function ua(e) {
	return e._type === '@list';
}
function da(e) {
	return e._type === '@span';
}
function fa(e) {
	return e._type === '@text';
}
const Ro = ['strong', 'em', 'code', 'underline', 'strike-through'];
function Ju(e, t, n) {
	if (!Jt(e) || !e.marks) return [];
	if (!e.marks.length) return [];
	const r = e.marks.slice(),
		o = {};
	return (
		r.forEach((i) => {
			o[i] = 1;
			for (let a = t + 1; a < n.length; a++) {
				const l = n[a];
				if (
					l &&
					Jt(l) &&
					Array.isArray(l.marks) &&
					l.marks.indexOf(i) !== -1
				)
					o[i]++;
				else break;
			}
		}),
		r.sort((i, a) => Ku(o, i, a))
	);
}
function Ku(e, t, n) {
	const r = e[t],
		o = e[n];
	if (r !== o) return o - r;
	const i = Ro.indexOf(t),
		a = Ro.indexOf(n);
	return i !== a ? i - a : t.localeCompare(n);
}
function Qu(e) {
	var t;
	const { children: n, markDefs: r = [] } = e;
	if (!n || !n.length) return [];
	const o = n.map(Ju),
		i = { _type: '@span', children: [], markType: '<unknown>' };
	let a = [i];
	for (let l = 0; l < n.length; l++) {
		const c = n[l];
		if (!c) continue;
		const d = o[l] || [];
		let s = 1;
		if (a.length > 1)
			for (s; s < a.length; s++) {
				const f = ((t = a[s]) == null ? void 0 : t.markKey) || '',
					h = d.indexOf(f);
				if (h === -1) break;
				d.splice(h, 1);
			}
		a = a.slice(0, s);
		let u = a[a.length - 1];
		if (u) {
			for (const f of d) {
				const h = r.find((v) => v._key === f),
					p = h ? h._type : f,
					m = {
						_type: '@span',
						_key: c._key,
						children: [],
						markDef: h,
						markType: p,
						markKey: f,
					};
				u.children.push(m), a.push(m), (u = m);
			}
			if (Jt(c)) {
				const f = c.text.split(`
`);
				for (let h = f.length; h-- > 1; )
					f.splice(
						h,
						0,
						`
`,
					);
				u.children = u.children.concat(
					f.map((h) => ({ _type: '@text', text: h })),
				);
			} else u.children = u.children.concat(c);
		}
	}
	return i.children;
}
function Xu(e, t) {
	const n = [];
	let r;
	for (let o = 0; o < e.length; o++) {
		const i = e[o];
		if (i) {
			if (!ca(i)) {
				n.push(i), (r = void 0);
				continue;
			}
			if (!r) {
				(r = xt(i, o, t)), n.push(r);
				continue;
			}
			if (Zu(i, r)) {
				r.children.push(i);
				continue;
			}
			if ((i.level || 1) > r.level) {
				const a = xt(i, o, t);
				if (t === 'html') {
					const l = r.children[r.children.length - 1],
						c = Do(Do({}, l), {}, { children: [...l.children, a] });
					r.children[r.children.length - 1] = c;
				} else r.children.push(a);
				r = a;
				continue;
			}
			if ((i.level || 1) < r.level) {
				const a = n[n.length - 1],
					l = a && ar(a, i);
				if (l) {
					(r = l), r.children.push(i);
					continue;
				}
				(r = xt(i, o, t)), n.push(r);
				continue;
			}
			if (i.listItem !== r.listItem) {
				const a = n[n.length - 1],
					l = a && ar(a, { level: i.level || 1 });
				if (l && l.listItem === i.listItem) {
					(r = l), r.children.push(i);
					continue;
				} else {
					(r = xt(i, o, t)), n.push(r);
					continue;
				}
			}
			console.warn('Unknown state encountered for block', i), n.push(i);
		}
	}
	return n;
}
function Zu(e, t) {
	return (e.level || 1) === t.level && e.listItem === t.listItem;
}
function xt(e, t, n) {
	return {
		_type: '@list',
		_key: ''.concat(e._key || ''.concat(t), '-parent'),
		mode: n,
		level: e.level || 1,
		listItem: e.listItem,
		children: [e],
	};
}
function ar(e, t) {
	const n = t.level || 1,
		r = t.listItem || 'normal',
		o = typeof t.listItem == 'string';
	if (ua(e) && (e.level || 1) === n && o && (e.listItem || 'normal') === r)
		return e;
	if (!('children' in e)) return;
	const i = e.children[e.children.length - 1];
	return i && !Jt(i) ? ar(i, t) : void 0;
}
function ha(e) {
	let t = '';
	return (
		e.children.forEach((n) => {
			fa(n) ? (t += n.text) : da(n) && (t += ha(n));
		}),
		t
	);
}
const ed = 'html';
function td(e, t) {
	const { block: n, list: r, listItem: o, marks: i, types: a, ...l } = t;
	return {
		...e,
		block: Qe(e, t, 'block'),
		list: Qe(e, t, 'list'),
		listItem: Qe(e, t, 'listItem'),
		marks: Qe(e, t, 'marks'),
		types: Qe(e, t, 'types'),
		...l,
	};
}
function Qe(e, t, n) {
	const r = t[n],
		o = e[n];
	return typeof r == 'function' || (r && typeof o == 'function')
		? r
		: r
		? { ...o, ...r }
		: o;
}
const nd = (e) => {
		let { children: t, value: n } = e;
		return _('a', { href: n == null ? void 0 : n.href, children: t });
	},
	rd = { textDecoration: 'underline' },
	od = {
		em: (e) => {
			let { children: t } = e;
			return _('em', { children: t });
		},
		strong: (e) => {
			let { children: t } = e;
			return _('strong', { children: t });
		},
		code: (e) => {
			let { children: t } = e;
			return _('code', { children: t });
		},
		underline: (e) => {
			let { children: t } = e;
			return _('span', { style: rd, children: t });
		},
		'strike-through': (e) => {
			let { children: t } = e;
			return _('del', { children: t });
		},
		link: nd,
	},
	id = {
		number: (e) => {
			let { children: t } = e;
			return _('ol', { children: t });
		},
		bullet: (e) => {
			let { children: t } = e;
			return _('ul', { children: t });
		},
	},
	ad = (e) => {
		let { children: t } = e;
		return _('li', { children: t });
	},
	bt = (e, t) =>
		'[@portabletext/react] Unknown '
			.concat(e, ', specify a component for it in the `components.')
			.concat(t, '` prop'),
	pa = (e) => bt('block type "'.concat(e, '"'), 'types'),
	sd = (e) => bt('mark type "'.concat(e, '"'), 'marks'),
	ld = (e) => bt('block style "'.concat(e, '"'), 'block'),
	cd = (e) => bt('list style "'.concat(e, '"'), 'list'),
	ud = (e) => bt('list item style "'.concat(e, '"'), 'listItem');
function dd(e) {
	console.warn(e);
}
const No = { display: 'none' },
	fd = (e) => {
		let { value: t, isInline: n } = e;
		const r = pa(t._type);
		return n
			? _('span', { style: No, children: r })
			: _('div', { style: No, children: r });
	},
	hd = (e) => {
		let { markType: t, children: n } = e;
		return _('span', {
			className: 'unknown__pt__mark__'.concat(t),
			children: n,
		});
	},
	pd = (e) => {
		let { children: t } = e;
		return _('p', { children: t });
	},
	_d = (e) => {
		let { children: t } = e;
		return _('ul', { children: t });
	},
	md = (e) => {
		let { children: t } = e;
		return _('li', { children: t });
	},
	vd = () => _('br', {}),
	yd = {
		normal: (e) => {
			let { children: t } = e;
			return _('p', { children: t });
		},
		blockquote: (e) => {
			let { children: t } = e;
			return _('blockquote', { children: t });
		},
		h1: (e) => {
			let { children: t } = e;
			return _('h1', { children: t });
		},
		h2: (e) => {
			let { children: t } = e;
			return _('h2', { children: t });
		},
		h3: (e) => {
			let { children: t } = e;
			return _('h3', { children: t });
		},
		h4: (e) => {
			let { children: t } = e;
			return _('h4', { children: t });
		},
		h5: (e) => {
			let { children: t } = e;
			return _('h5', { children: t });
		},
		h6: (e) => {
			let { children: t } = e;
			return _('h6', { children: t });
		},
	},
	Mo = {
		types: {},
		block: yd,
		marks: od,
		list: id,
		listItem: ad,
		hardBreak: vd,
		unknownType: fd,
		unknownMark: hd,
		unknownList: _d,
		unknownListItem: md,
		unknownBlockStyle: pd,
	};
function gd(e) {
	let {
		value: t,
		components: n,
		listNestingMode: r,
		onMissingComponent: o = dd,
	} = e;
	const i = o || wd,
		a = Array.isArray(t) ? t : [t],
		l = Xu(a, r || ed),
		c = Ve(() => (n ? td(Mo, n) : Mo), [n]),
		d = Ve(() => bd(c, i), [c, i]),
		s = l.map((u, f) =>
			d({ node: u, index: f, isInline: !1, renderNode: d }),
		);
	return _(ie, { children: s });
}
const bd = (e, t) => {
	function n(u) {
		const { node: f, index: h, isInline: p } = u,
			m = f._key || 'node-'.concat(h);
		return ua(f)
			? i(f, h, m)
			: ca(f)
			? o(f, h, m)
			: da(f)
			? a(f, h, m)
			: r(f)
			? s(f, h, m, p)
			: la(f)
			? l(f, h, m, p)
			: fa(f)
			? c(f, m)
			: d(f, h, m, p);
	}
	function r(u) {
		return u._type in e.types;
	}
	function o(u, f, h) {
		const p = jo({ node: u, index: f, isInline: !1, renderNode: n }),
			m = e.listItem,
			E =
				(typeof m == 'function' ? m : m[u.listItem]) ||
				e.unknownListItem;
		if (E === e.unknownListItem) {
			const y = u.listItem || 'bullet';
			t(ud(y), { type: y, nodeType: 'listItemStyle' });
		}
		let g = p.children;
		if (u.style && u.style !== 'normal') {
			const { listItem: y, ...S } = u;
			g = n({ node: S, index: f, isInline: !1, renderNode: n });
		}
		return _(
			E,
			{ value: u, index: f, isInline: !1, renderNode: n, children: g },
			h,
		);
	}
	function i(u, f, h) {
		const p = u.children.map((g, y) =>
				n({
					node: g._key
						? g
						: { ...g, _key: 'li-'.concat(f, '-').concat(y) },
					index: y,
					isInline: !1,
					renderNode: n,
				}),
			),
			m = e.list,
			E = (typeof m == 'function' ? m : m[u.listItem]) || e.unknownList;
		if (E === e.unknownList) {
			const g = u.listItem || 'bullet';
			t(cd(g), { nodeType: 'listStyle', type: g });
		}
		return _(
			E,
			{ value: u, index: f, isInline: !1, renderNode: n, children: p },
			h,
		);
	}
	function a(u, f, h) {
		const { markDef: p, markType: m, markKey: v } = u,
			E = e.marks[m] || e.unknownMark,
			g = u.children.map((y, S) =>
				n({ node: y, index: S, isInline: !0, renderNode: n }),
			);
		return (
			E === e.unknownMark && t(sd(m), { nodeType: 'mark', type: m }),
			_(
				E,
				{
					text: ha(u),
					value: p,
					markType: m,
					markKey: v,
					renderNode: n,
					children: g,
				},
				h,
			)
		);
	}
	function l(u, f, h, p) {
		const { _key: m, ...v } = jo({
				node: u,
				index: f,
				isInline: p,
				renderNode: n,
			}),
			E = v.node.style || 'normal',
			y =
				(typeof e.block == 'function' ? e.block : e.block[E]) ||
				e.unknownBlockStyle;
		return (
			y === e.unknownBlockStyle &&
				t(ld(E), { nodeType: 'blockStyle', type: E }),
			_(y, { ...v, value: v.node, renderNode: n }, h)
		);
	}
	function c(u, f) {
		if (
			u.text ===
			`
`
		) {
			const h = e.hardBreak;
			return h
				? _(h, {}, f)
				: `
`;
		}
		return u.text;
	}
	function d(u, f, h, p) {
		const m = { value: u, isInline: p, index: f, renderNode: n };
		t(pa(u._type), { nodeType: 'block', type: u._type });
		const v = e.unknownType;
		return _(v, { ...m }, h);
	}
	function s(u, f, h, p) {
		const m = { value: u, isInline: p, index: f, renderNode: n },
			v = e.types[u._type];
		return v ? _(v, { ...m }, h) : null;
	}
	return n;
};
function jo(e) {
	const { node: t, index: n, isInline: r, renderNode: o } = e,
		a = Qu(t).map((l, c) =>
			o({ node: l, isInline: !0, index: c, renderNode: o }),
		);
	return {
		_key: t._key || 'block-'.concat(n),
		children: a,
		index: n,
		isInline: r,
		node: t,
	};
}
function wd() {}
const Ed = 'modulepreload',
	Sd = function (e) {
		return '/' + e;
	},
	Ao = {},
	Pd = function (t, n, r) {
		if (!n || n.length === 0) return t();
		const o = document.getElementsByTagName('link');
		return Promise.all(
			n.map((i) => {
				if (((i = Sd(i)), i in Ao)) return;
				Ao[i] = !0;
				const a = i.endsWith('.css'),
					l = a ? '[rel="stylesheet"]' : '';
				if (!!r)
					for (let s = o.length - 1; s >= 0; s--) {
						const u = o[s];
						if (u.href === i && (!a || u.rel === 'stylesheet'))
							return;
					}
				else if (document.querySelector(`link[href="${i}"]${l}`))
					return;
				const d = document.createElement('link');
				if (
					((d.rel = a ? 'stylesheet' : Ed),
					a || ((d.as = 'script'), (d.crossOrigin = '')),
					(d.href = i),
					document.head.appendChild(d),
					a)
				)
					return new Promise((s, u) => {
						d.addEventListener('load', s),
							d.addEventListener('error', () =>
								u(new Error(`Unable to preload CSS for ${i}`)),
							);
					});
			}),
		).then(() => t());
	},
	Od = typeof navigator > 'u' ? !1 : navigator.product === 'ReactNative',
	sr = { timeout: Od ? 6e4 : 12e4 };
function Cd(e) {
	const t =
			typeof e == 'string'
				? Object.assign({ url: e }, sr)
				: Object.assign({}, sr, e),
		n = new URL(t.url, 'http://localhost');
	if (((t.timeout = _a(t.timeout)), t.query)) {
		for (const [r, o] of Object.entries(t.query))
			if (o !== void 0)
				if (Array.isArray(o))
					for (const i of o) n.searchParams.append(r, i);
				else n.searchParams.append(r, o);
	}
	return (
		(t.method =
			t.body && !t.method ? 'POST' : (t.method || 'GET').toUpperCase()),
		(t.url =
			n.origin === 'http://localhost'
				? ''.concat(n.pathname, '?').concat(n.searchParams)
				: n.toString()),
		t
	);
}
function _a(e) {
	if (e === !1 || e === 0) return !1;
	if (e.connect || e.socket) return e;
	const t = Number(e);
	return isNaN(t) ? _a(sr.timeout) : { connect: t, socket: t };
}
const kd = /^https?:\/\//i;
function Td(e) {
	if (!kd.test(e.url))
		throw new Error('"'.concat(e.url, '" is not a valid URL'));
}
var Fn = function (e) {
		return e.replace(/^\s+|\s+$/g, '');
	},
	xd = function (e) {
		return Object.prototype.toString.call(e) === '[object Array]';
	},
	$d = function (e) {
		if (!e) return {};
		for (
			var t = {},
				n = Fn(e).split(`
`),
				r = 0;
			r < n.length;
			r++
		) {
			var o = n[r],
				i = o.indexOf(':'),
				a = Fn(o.slice(0, i)).toLowerCase(),
				l = Fn(o.slice(i + 1));
			typeof t[a] > 'u'
				? (t[a] = l)
				: xd(t[a])
				? t[a].push(l)
				: (t[a] = [t[a], l]);
		}
		return t;
	};
const Id = pn($d);
var Dd = (e) =>
	function (n, r) {
		const o = n === 'onError';
		let i = r;
		for (
			var a = arguments.length, l = new Array(a > 2 ? a - 2 : 0), c = 2;
			c < a;
			c++
		)
			l[c - 2] = arguments[c];
		for (let d = 0; d < e[n].length; d++) {
			const s = e[n][d];
			if (((i = s(i, ...l)), o && !i)) break;
		}
		return i;
	};
function Rd() {
	const e = Object.create(null);
	let t = 0;
	function n(o) {
		const i = t++;
		return (
			(e[i] = o),
			function () {
				delete e[i];
			}
		);
	}
	function r(o) {
		for (const i in e) e[i](o);
	}
	return { publish: r, subscribe: n };
}
const Nd = ['request', 'response', 'progress', 'error', 'abort'],
	Fo = [
		'processOptions',
		'validateOptions',
		'interceptRequest',
		'finalizeOptions',
		'onRequest',
		'onResponse',
		'onError',
		'onReturn',
		'onHeaders',
	];
function ma(e, t) {
	const n = [],
		r = Fo.reduce((i, a) => ((i[a] = i[a] || []), i), {
			processOptions: [Cd],
			validateOptions: [Td],
		});
	function o(i) {
		const a = Nd.reduce((p, m) => ((p[m] = Rd()), p), {}),
			l = Dd(r),
			c = l('processOptions', i);
		l('validateOptions', c);
		const d = { options: c, channels: a, applyMiddleware: l };
		let s = null;
		const u = a.request.subscribe((p) => {
			s = t(p, (m, v) => h(m, v, p));
		});
		a.abort.subscribe(() => {
			u(), s && s.abort();
		});
		const f = l('onReturn', a, d);
		return f === a && a.request.publish(d), f;
		function h(p, m, v) {
			let E = p,
				g = m;
			if (!E)
				try {
					g = l('onResponse', m, v);
				} catch (y) {
					(g = null), (E = y);
				}
			(E = E && l('onError', E, v)),
				E ? a.error.publish(E) : g && a.response.publish(g);
		}
	}
	return (
		(o.use = function (a) {
			if (!a)
				throw new Error(
					'Tried to add middleware that resolved to falsey value',
				);
			if (typeof a == 'function')
				throw new Error(
					'Tried to add middleware that was a function. It probably expects you to pass options to it.',
				);
			if (a.onReturn && r.onReturn.length > 0)
				throw new Error(
					'Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event',
				);
			return (
				Fo.forEach((l) => {
					a[l] && r[l].push(a[l]);
				}),
				n.push(a),
				o
			);
		}),
		(o.clone = function () {
			return ma(n, t);
		}),
		e.forEach(o.use),
		o
	);
}
var va = (e, t, n) => {
		if (!t.has(e)) throw TypeError('Cannot ' + n);
	},
	ce = (e, t, n) => (
		va(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
	),
	Xe = (e, t, n) => {
		if (t.has(e))
			throw TypeError(
				'Cannot add the same private member more than once',
			);
		t instanceof WeakSet ? t.add(e) : t.set(e, n);
	},
	Ne = (e, t, n, r) => (
		va(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n
	),
	Nt,
	Mt,
	je,
	jt,
	pe;
class Md {
	constructor() {
		(this.readyState = 0),
			(this.responseType = ''),
			Xe(this, Nt, void 0),
			Xe(this, Mt, void 0),
			Xe(this, je, void 0),
			Xe(this, jt, {}),
			Xe(this, pe, void 0);
	}
	open(t, n, r) {
		Ne(this, Nt, t),
			Ne(this, Mt, n),
			Ne(this, je, ''),
			(this.readyState = 1),
			this.onreadystatechange(),
			Ne(this, pe, void 0);
	}
	abort() {
		ce(this, pe) && ce(this, pe).abort();
	}
	getAllResponseHeaders() {
		return ce(this, je);
	}
	setRequestHeader(t, n) {
		ce(this, jt)[t] = n;
	}
	send(t) {
		const n = this.responseType !== 'arraybuffer',
			r = { method: ce(this, Nt), headers: ce(this, jt), body: t };
		typeof AbortController == 'function' &&
			(Ne(this, pe, new AbortController()),
			typeof EventTarget < 'u' &&
				ce(this, pe).signal instanceof EventTarget &&
				(r.signal = ce(this, pe).signal)),
			typeof document < 'u' &&
				(r.credentials = this.withCredentials ? 'include' : 'omit'),
			fetch(ce(this, Mt), r)
				.then(
					(o) => (
						o.headers.forEach((i, a) => {
							Ne(
								this,
								je,
								ce(this, je) +
									''.concat(a, ': ').concat(
										i,
										`\r
`,
									),
							);
						}),
						(this.status = o.status),
						(this.statusText = o.statusText),
						(this.readyState = 3),
						n ? o.text() : o.arrayBuffer()
					),
				)
				.then((o) => {
					typeof o == 'string'
						? (this.responseText = o)
						: (this.response = o),
						(this.readyState = 4),
						this.onreadystatechange();
				})
				.catch((o) => {
					var i;
					if (o.name === 'AbortError') {
						this.onabort();
						return;
					}
					(i = this.onerror) == null || i.call(this, o);
				});
	}
}
Nt = new WeakMap();
Mt = new WeakMap();
je = new WeakMap();
jt = new WeakMap();
pe = new WeakMap();
const lr = typeof XMLHttpRequest == 'function' ? 'xhr' : 'fetch',
	jd = lr === 'xhr' ? XMLHttpRequest : Md;
var Ad = (e, t) => {
	const n = e.options,
		r = e.applyMiddleware('finalizeOptions', n),
		o = {},
		i = e.applyMiddleware('interceptRequest', void 0, {
			adapter: lr,
			context: e,
		});
	if (i) {
		const y = setTimeout(t, 0, null, i);
		return { abort: () => clearTimeout(y) };
	}
	let a = new jd();
	const l = r.headers,
		c = r.timeout;
	let d = !1,
		s = !1,
		u = !1;
	if (
		((a.onerror = (y) => {
			v(
				new Error(
					'Request error while attempting to reach '
						.concat(r.url)
						.concat(
							y.lengthComputable
								? '('
										.concat(y.loaded, ' of ')
										.concat(y.total, ' bytes transferred)')
								: '',
						),
				),
			);
		}),
		(a.ontimeout = (y) => {
			v(
				new Error(
					'Request timeout while attempting to reach '
						.concat(r.url)
						.concat(
							y.lengthComputable
								? '('
										.concat(y.loaded, ' of ')
										.concat(y.total, ' bytes transferred)')
								: '',
						),
				),
			);
		}),
		(a.onabort = () => {
			m(!0), (d = !0);
		}),
		(a.onreadystatechange = () => {
			p(), !(d || a.readyState !== 4) && a.status !== 0 && g();
		}),
		a.open(r.method, r.url, !0),
		(a.withCredentials = !!r.withCredentials),
		l && a.setRequestHeader)
	)
		for (const y in l) l.hasOwnProperty(y) && a.setRequestHeader(y, l[y]);
	return (
		r.rawBody && (a.responseType = 'arraybuffer'),
		e.applyMiddleware('onRequest', {
			options: r,
			adapter: lr,
			request: a,
			context: e,
		}),
		a.send(r.body || null),
		c && (o.connect = setTimeout(() => h('ETIMEDOUT'), c.connect)),
		{ abort: f }
	);
	function f() {
		(d = !0), a && a.abort();
	}
	function h(y) {
		(u = !0), a.abort();
		const S = new Error(
			y === 'ESOCKETTIMEDOUT'
				? 'Socket timed out on request to '.concat(r.url)
				: 'Connection timed out on request to '.concat(r.url),
		);
		(S.code = y), e.channels.error.publish(S);
	}
	function p() {
		c &&
			(m(),
			(o.socket = setTimeout(() => h('ESOCKETTIMEDOUT'), c.socket)));
	}
	function m(y) {
		(y || d || (a.readyState >= 2 && o.connect)) && clearTimeout(o.connect),
			o.socket && clearTimeout(o.socket);
	}
	function v(y) {
		if (s) return;
		m(!0), (s = !0), (a = null);
		const S =
			y ||
			new Error('Network error while attempting to reach '.concat(r.url));
		(S.isNetworkError = !0), (S.request = r), t(S);
	}
	function E() {
		return {
			body:
				a.response ||
				(a.responseType === '' || a.responseType === 'text'
					? a.responseText
					: ''),
			url: r.url,
			method: r.method,
			headers: Id(a.getAllResponseHeaders()),
			statusCode: a.status,
			statusMessage: a.statusText,
		};
	}
	function g() {
		if (!(d || s || u)) {
			if (a.status === 0) {
				v(new Error('Unknown XHR error'));
				return;
			}
			m(), (s = !0), t(null, E());
		}
	}
};
const Fd = function () {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
		t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ad;
	return ma(e, t);
};
var Lo = { exports: {} },
	Ln,
	Uo;
function Ld() {
	if (Uo) return Ln;
	Uo = 1;
	var e = 1e3,
		t = e * 60,
		n = t * 60,
		r = n * 24,
		o = r * 7,
		i = r * 365.25;
	Ln = function (s, u) {
		u = u || {};
		var f = typeof s;
		if (f === 'string' && s.length > 0) return a(s);
		if (f === 'number' && isFinite(s)) return u.long ? c(s) : l(s);
		throw new Error(
			'val is not a non-empty string or a valid number. val=' +
				JSON.stringify(s),
		);
	};
	function a(s) {
		if (((s = String(s)), !(s.length > 100))) {
			var u =
				/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
					s,
				);
			if (u) {
				var f = parseFloat(u[1]),
					h = (u[2] || 'ms').toLowerCase();
				switch (h) {
					case 'years':
					case 'year':
					case 'yrs':
					case 'yr':
					case 'y':
						return f * i;
					case 'weeks':
					case 'week':
					case 'w':
						return f * o;
					case 'days':
					case 'day':
					case 'd':
						return f * r;
					case 'hours':
					case 'hour':
					case 'hrs':
					case 'hr':
					case 'h':
						return f * n;
					case 'minutes':
					case 'minute':
					case 'mins':
					case 'min':
					case 'm':
						return f * t;
					case 'seconds':
					case 'second':
					case 'secs':
					case 'sec':
					case 's':
						return f * e;
					case 'milliseconds':
					case 'millisecond':
					case 'msecs':
					case 'msec':
					case 'ms':
						return f;
					default:
						return;
				}
			}
		}
	}
	function l(s) {
		var u = Math.abs(s);
		return u >= r
			? Math.round(s / r) + 'd'
			: u >= n
			? Math.round(s / n) + 'h'
			: u >= t
			? Math.round(s / t) + 'm'
			: u >= e
			? Math.round(s / e) + 's'
			: s + 'ms';
	}
	function c(s) {
		var u = Math.abs(s);
		return u >= r
			? d(s, u, r, 'day')
			: u >= n
			? d(s, u, n, 'hour')
			: u >= t
			? d(s, u, t, 'minute')
			: u >= e
			? d(s, u, e, 'second')
			: s + ' ms';
	}
	function d(s, u, f, h) {
		var p = u >= f * 1.5;
		return Math.round(s / f) + ' ' + h + (p ? 's' : '');
	}
	return Ln;
}
function Ud(e) {
	(n.debug = n),
		(n.default = n),
		(n.coerce = c),
		(n.disable = i),
		(n.enable = o),
		(n.enabled = a),
		(n.humanize = Ld()),
		(n.destroy = d),
		Object.keys(e).forEach((s) => {
			n[s] = e[s];
		}),
		(n.names = []),
		(n.skips = []),
		(n.formatters = {});
	function t(s) {
		let u = 0;
		for (let f = 0; f < s.length; f++)
			(u = (u << 5) - u + s.charCodeAt(f)), (u |= 0);
		return n.colors[Math.abs(u) % n.colors.length];
	}
	n.selectColor = t;
	function n(s) {
		let u,
			f = null,
			h,
			p;
		function m(...v) {
			if (!m.enabled) return;
			const E = m,
				g = Number(new Date()),
				y = g - (u || g);
			(E.diff = y),
				(E.prev = u),
				(E.curr = g),
				(u = g),
				(v[0] = n.coerce(v[0])),
				typeof v[0] != 'string' && v.unshift('%O');
			let S = 0;
			(v[0] = v[0].replace(/%([a-zA-Z%])/g, (O, N) => {
				if (O === '%%') return '%';
				S++;
				const $ = n.formatters[N];
				if (typeof $ == 'function') {
					const D = v[S];
					(O = $.call(E, D)), v.splice(S, 1), S--;
				}
				return O;
			})),
				n.formatArgs.call(E, v),
				(E.log || n.log).apply(E, v);
		}
		return (
			(m.namespace = s),
			(m.useColors = n.useColors()),
			(m.color = n.selectColor(s)),
			(m.extend = r),
			(m.destroy = n.destroy),
			Object.defineProperty(m, 'enabled', {
				enumerable: !0,
				configurable: !1,
				get: () =>
					f !== null
						? f
						: (h !== n.namespaces &&
								((h = n.namespaces), (p = n.enabled(s))),
						  p),
				set: (v) => {
					f = v;
				},
			}),
			typeof n.init == 'function' && n.init(m),
			m
		);
	}
	function r(s, u) {
		const f = n(this.namespace + (typeof u > 'u' ? ':' : u) + s);
		return (f.log = this.log), f;
	}
	function o(s) {
		n.save(s), (n.namespaces = s), (n.names = []), (n.skips = []);
		let u;
		const f = (typeof s == 'string' ? s : '').split(/[\s,]+/),
			h = f.length;
		for (u = 0; u < h; u++)
			f[u] &&
				((s = f[u].replace(/\*/g, '.*?')),
				s[0] === '-'
					? n.skips.push(new RegExp('^' + s.slice(1) + '$'))
					: n.names.push(new RegExp('^' + s + '$')));
	}
	function i() {
		const s = [
			...n.names.map(l),
			...n.skips.map(l).map((u) => '-' + u),
		].join(',');
		return n.enable(''), s;
	}
	function a(s) {
		if (s[s.length - 1] === '*') return !0;
		let u, f;
		for (u = 0, f = n.skips.length; u < f; u++)
			if (n.skips[u].test(s)) return !1;
		for (u = 0, f = n.names.length; u < f; u++)
			if (n.names[u].test(s)) return !0;
		return !1;
	}
	function l(s) {
		return s
			.toString()
			.substring(2, s.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}
	function c(s) {
		return s instanceof Error ? s.stack || s.message : s;
	}
	function d() {
		console.warn(
			'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
		);
	}
	return n.enable(n.load()), n;
}
var Bd = Ud;
(function (e, t) {
	(t.formatArgs = r),
		(t.save = o),
		(t.load = i),
		(t.useColors = n),
		(t.storage = a()),
		(t.destroy = (() => {
			let c = !1;
			return () => {
				c ||
					((c = !0),
					console.warn(
						'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
					));
			};
		})()),
		(t.colors = [
			'#0000CC',
			'#0000FF',
			'#0033CC',
			'#0033FF',
			'#0066CC',
			'#0066FF',
			'#0099CC',
			'#0099FF',
			'#00CC00',
			'#00CC33',
			'#00CC66',
			'#00CC99',
			'#00CCCC',
			'#00CCFF',
			'#3300CC',
			'#3300FF',
			'#3333CC',
			'#3333FF',
			'#3366CC',
			'#3366FF',
			'#3399CC',
			'#3399FF',
			'#33CC00',
			'#33CC33',
			'#33CC66',
			'#33CC99',
			'#33CCCC',
			'#33CCFF',
			'#6600CC',
			'#6600FF',
			'#6633CC',
			'#6633FF',
			'#66CC00',
			'#66CC33',
			'#9900CC',
			'#9900FF',
			'#9933CC',
			'#9933FF',
			'#99CC00',
			'#99CC33',
			'#CC0000',
			'#CC0033',
			'#CC0066',
			'#CC0099',
			'#CC00CC',
			'#CC00FF',
			'#CC3300',
			'#CC3333',
			'#CC3366',
			'#CC3399',
			'#CC33CC',
			'#CC33FF',
			'#CC6600',
			'#CC6633',
			'#CC9900',
			'#CC9933',
			'#CCCC00',
			'#CCCC33',
			'#FF0000',
			'#FF0033',
			'#FF0066',
			'#FF0099',
			'#FF00CC',
			'#FF00FF',
			'#FF3300',
			'#FF3333',
			'#FF3366',
			'#FF3399',
			'#FF33CC',
			'#FF33FF',
			'#FF6600',
			'#FF6633',
			'#FF9900',
			'#FF9933',
			'#FFCC00',
			'#FFCC33',
		]);
	function n() {
		return typeof window < 'u' &&
			window.process &&
			(window.process.type === 'renderer' || window.process.__nwjs)
			? !0
			: typeof navigator < 'u' &&
			  navigator.userAgent &&
			  navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
			? !1
			: (typeof document < 'u' &&
					document.documentElement &&
					document.documentElement.style &&
					document.documentElement.style.WebkitAppearance) ||
			  (typeof window < 'u' &&
					window.console &&
					(window.console.firebug ||
						(window.console.exception && window.console.table))) ||
			  (typeof navigator < 'u' &&
					navigator.userAgent &&
					navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
					parseInt(RegExp.$1, 10) >= 31) ||
			  (typeof navigator < 'u' &&
					navigator.userAgent &&
					navigator.userAgent
						.toLowerCase()
						.match(/applewebkit\/(\d+)/));
	}
	function r(c) {
		if (
			((c[0] =
				(this.useColors ? '%c' : '') +
				this.namespace +
				(this.useColors ? ' %c' : ' ') +
				c[0] +
				(this.useColors ? '%c ' : ' ') +
				'+' +
				e.exports.humanize(this.diff)),
			!this.useColors)
		)
			return;
		const d = 'color: ' + this.color;
		c.splice(1, 0, d, 'color: inherit');
		let s = 0,
			u = 0;
		c[0].replace(/%[a-zA-Z%]/g, (f) => {
			f !== '%%' && (s++, f === '%c' && (u = s));
		}),
			c.splice(u, 0, d);
	}
	t.log = console.debug || console.log || (() => {});
	function o(c) {
		try {
			c ? t.storage.setItem('debug', c) : t.storage.removeItem('debug');
		} catch {}
	}
	function i() {
		let c;
		try {
			c = t.storage.getItem('debug');
		} catch {}
		return (
			!c && typeof process < 'u' && 'env' in process && (c = {}.DEBUG), c
		);
	}
	function a() {
		try {
			return localStorage;
		} catch {}
	}
	e.exports = Bd(t);
	const { formatters: l } = e.exports;
	l.j = function (c) {
		try {
			return JSON.stringify(c);
		} catch (d) {
			return '[UnexpectedJSONParseError]: ' + d.message;
		}
	};
})(Lo, Lo.exports);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function Bo(e) {
	return Object.prototype.toString.call(e) === '[object Object]';
}
function qd(e) {
	var t, n;
	return Bo(e) === !1
		? !1
		: ((t = e.constructor),
		  t === void 0
				? !0
				: ((n = t.prototype),
				  !(Bo(n) === !1 || n.hasOwnProperty('isPrototypeOf') === !1)));
}
const Hd = typeof Buffer > 'u' ? () => !1 : (e) => Buffer.isBuffer(e),
	Wd = ['boolean', 'string', 'number'];
function Vd() {
	return {
		processOptions: (e) => {
			const t = e.body;
			return !t ||
				!(
					!(typeof t.pipe == 'function') &&
					!Hd(t) &&
					(Wd.indexOf(typeof t) !== -1 || Array.isArray(t) || qd(t))
				)
				? e
				: Object.assign({}, e, {
						body: JSON.stringify(e.body),
						headers: Object.assign({}, e.headers, {
							'Content-Type': 'application/json',
						}),
				  });
		},
	};
}
function zd(e) {
	return {
		onResponse: (n) => {
			const r = n.headers['content-type'] || '',
				o = (e && e.force) || r.indexOf('application/json') !== -1;
			return !n.body || !r || !o
				? n
				: Object.assign({}, n, { body: t(n.body) });
		},
		processOptions: (n) =>
			Object.assign({}, n, {
				headers: Object.assign(
					{ Accept: 'application/json' },
					n.headers,
				),
			}),
	};
	function t(n) {
		try {
			return JSON.parse(n);
		} catch (r) {
			throw (
				((r.message = 'Failed to parsed response body as JSON: '.concat(
					r.message,
				)),
				r)
			);
		}
	}
}
let Ae;
typeof globalThis < 'u'
	? (Ae = globalThis)
	: typeof window < 'u'
	? (Ae = window)
	: typeof global < 'u'
	? (Ae = global)
	: typeof self < 'u'
	? (Ae = self)
	: (Ae = {});
var Gd = Ae;
function Yd() {
	const t =
		(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {})
			.implementation || Gd.Observable;
	if (!t)
		throw new Error(
			'`Observable` is not available in global scope, and no implementation was passed',
		);
	return {
		onReturn: (n, r) =>
			new t(
				(o) => (
					n.error.subscribe((i) => o.error(i)),
					n.progress.subscribe((i) =>
						o.next(Object.assign({ type: 'progress' }, i)),
					),
					n.response.subscribe((i) => {
						o.next(Object.assign({ type: 'response' }, i)),
							o.complete();
					}),
					n.request.publish(r),
					() => n.abort.publish()
				),
			),
	};
}
function Jd() {
	return {
		onRequest: (e) => {
			if (e.adapter !== 'xhr') return;
			const t = e.request,
				n = e.context;
			'upload' in t &&
				'onprogress' in t.upload &&
				(t.upload.onprogress = r('upload')),
				'onprogress' in t && (t.onprogress = r('download'));
			function r(o) {
				return (i) => {
					const a = i.lengthComputable
						? (i.loaded / i.total) * 100
						: -1;
					n.channels.progress.publish({
						stage: o,
						percent: a,
						total: i.total,
						loaded: i.loaded,
						lengthComputable: i.lengthComputable,
					});
				};
			}
		},
	};
}
class Kd {
	constructor(t) {
		(this.__CANCEL__ = !0), (this.message = t);
	}
	toString() {
		return 'Cancel'.concat(this.message ? ': '.concat(this.message) : '');
	}
}
const ya = class {
	constructor(e) {
		if (typeof e != 'function')
			throw new TypeError('executor must be a function.');
		let t = null;
		(this.promise = new Promise((n) => {
			t = n;
		})),
			e((n) => {
				this.reason || ((this.reason = new Kd(n)), t(this.reason));
			});
	}
};
let Qd = ya;
Qd.source = () => {
	let e;
	return {
		token: new ya((n) => {
			e = n;
		}),
		cancel: e,
	};
};
var ga = (e, t, n) =>
	n.method !== 'GET' && n.method !== 'HEAD' ? !1 : e.isNetworkError || !1;
const Xd = (e) =>
	e !== null && typeof e == 'object' && typeof e.pipe == 'function';
var Zd = (e) => {
	const t = e.maxRetries || 5,
		n = e.retryDelay || ef,
		r = e.shouldRetry;
	return {
		onError: (o, i) => {
			const a = i.options,
				l = a.maxRetries || t,
				c = a.shouldRetry || r,
				d = a.attemptNumber || 0;
			if (Xd(a.body) || !c(o, d, a) || d >= l) return o;
			const s = Object.assign({}, i, {
				options: Object.assign({}, a, { attemptNumber: d + 1 }),
			});
			return setTimeout(() => i.channels.request.publish(s), n(d)), null;
		},
	};
};
function ef(e) {
	return 100 * Math.pow(2, e) + Math.random() * 100;
}
const Pr = function () {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	return Zd({ shouldRetry: ga, ...e });
};
Pr.shouldRetry = ga;
var cr = function (e, t) {
	return (
		(cr =
			Object.setPrototypeOf ||
			({ __proto__: [] } instanceof Array &&
				function (n, r) {
					n.__proto__ = r;
				}) ||
			function (n, r) {
				for (var o in r)
					Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
			}),
		cr(e, t)
	);
};
function Or(e, t) {
	if (typeof t != 'function' && t !== null)
		throw new TypeError(
			'Class extends value ' +
				String(t) +
				' is not a constructor or null',
		);
	cr(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype =
		t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function qo(e) {
	var t = typeof Symbol == 'function' && Symbol.iterator,
		n = t && e[t],
		r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == 'number')
		return {
			next: function () {
				return (
					e && r >= e.length && (e = void 0),
					{ value: e && e[r++], done: !e }
				);
			},
		};
	throw new TypeError(
		t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
	);
}
function Kt(e, t) {
	var n = typeof Symbol == 'function' && e[Symbol.iterator];
	if (!n) return e;
	var r = n.call(e),
		o,
		i = [],
		a;
	try {
		for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
			i.push(o.value);
	} catch (l) {
		a = { error: l };
	} finally {
		try {
			o && !o.done && (n = r.return) && n.call(r);
		} finally {
			if (a) throw a.error;
		}
	}
	return i;
}
function Qt(e, t, n) {
	if (n || arguments.length === 2)
		for (var r = 0, o = t.length, i; r < o; r++)
			(i || !(r in t)) &&
				(i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
	return e.concat(i || Array.prototype.slice.call(t));
}
function ue(e) {
	return typeof e == 'function';
}
function ba(e) {
	var t = function (r) {
			Error.call(r), (r.stack = new Error().stack);
		},
		n = e(t);
	return (
		(n.prototype = Object.create(Error.prototype)),
		(n.prototype.constructor = n),
		n
	);
}
var Un = ba(function (e) {
	return function (n) {
		e(this),
			(this.message = n
				? n.length +
				  ` errors occurred during unsubscription:
` +
				  n.map(function (r, o) {
						return o + 1 + ') ' + r.toString();
				  }).join(`
  `)
				: ''),
			(this.name = 'UnsubscriptionError'),
			(this.errors = n);
	};
});
function Ho(e, t) {
	if (e) {
		var n = e.indexOf(t);
		0 <= n && e.splice(n, 1);
	}
}
var Cr = (function () {
	function e(t) {
		(this.initialTeardown = t),
			(this.closed = !1),
			(this._parentage = null),
			(this._finalizers = null);
	}
	return (
		(e.prototype.unsubscribe = function () {
			var t, n, r, o, i;
			if (!this.closed) {
				this.closed = !0;
				var a = this._parentage;
				if (a)
					if (((this._parentage = null), Array.isArray(a)))
						try {
							for (
								var l = qo(a), c = l.next();
								!c.done;
								c = l.next()
							) {
								var d = c.value;
								d.remove(this);
							}
						} catch (m) {
							t = { error: m };
						} finally {
							try {
								c && !c.done && (n = l.return) && n.call(l);
							} finally {
								if (t) throw t.error;
							}
						}
					else a.remove(this);
				var s = this.initialTeardown;
				if (ue(s))
					try {
						s();
					} catch (m) {
						i = m instanceof Un ? m.errors : [m];
					}
				var u = this._finalizers;
				if (u) {
					this._finalizers = null;
					try {
						for (
							var f = qo(u), h = f.next();
							!h.done;
							h = f.next()
						) {
							var p = h.value;
							try {
								Wo(p);
							} catch (m) {
								(i = i ?? []),
									m instanceof Un
										? (i = Qt(Qt([], Kt(i)), Kt(m.errors)))
										: i.push(m);
							}
						}
					} catch (m) {
						r = { error: m };
					} finally {
						try {
							h && !h.done && (o = f.return) && o.call(f);
						} finally {
							if (r) throw r.error;
						}
					}
				}
				if (i) throw new Un(i);
			}
		}),
		(e.prototype.add = function (t) {
			var n;
			if (t && t !== this)
				if (this.closed) Wo(t);
				else {
					if (t instanceof e) {
						if (t.closed || t._hasParent(this)) return;
						t._addParent(this);
					}
					(this._finalizers =
						(n = this._finalizers) !== null && n !== void 0
							? n
							: []).push(t);
				}
		}),
		(e.prototype._hasParent = function (t) {
			var n = this._parentage;
			return n === t || (Array.isArray(n) && n.includes(t));
		}),
		(e.prototype._addParent = function (t) {
			var n = this._parentage;
			this._parentage = Array.isArray(n)
				? (n.push(t), n)
				: n
				? [n, t]
				: t;
		}),
		(e.prototype._removeParent = function (t) {
			var n = this._parentage;
			n === t ? (this._parentage = null) : Array.isArray(n) && Ho(n, t);
		}),
		(e.prototype.remove = function (t) {
			var n = this._finalizers;
			n && Ho(n, t), t instanceof e && t._removeParent(this);
		}),
		(e.EMPTY = (function () {
			var t = new e();
			return (t.closed = !0), t;
		})()),
		e
	);
})();
Cr.EMPTY;
function wa(e) {
	return (
		e instanceof Cr ||
		(e && 'closed' in e && ue(e.remove) && ue(e.add) && ue(e.unsubscribe))
	);
}
function Wo(e) {
	ue(e) ? e() : e.unsubscribe();
}
var Ea = {
		onUnhandledError: null,
		onStoppedNotification: null,
		Promise: void 0,
		useDeprecatedSynchronousErrorHandling: !1,
		useDeprecatedNextContext: !1,
	},
	ur = {
		setTimeout: function (e, t) {
			for (var n = [], r = 2; r < arguments.length; r++)
				n[r - 2] = arguments[r];
			var o = ur.delegate;
			return o != null && o.setTimeout
				? o.setTimeout.apply(o, Qt([e, t], Kt(n)))
				: setTimeout.apply(void 0, Qt([e, t], Kt(n)));
		},
		clearTimeout: function (e) {
			var t = ur.delegate;
			return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e);
		},
		delegate: void 0,
	};
function tf(e) {
	ur.setTimeout(function () {
		throw e;
	});
}
function Vo() {}
function nf(e) {
	e();
}
var kr = (function (e) {
		Or(t, e);
		function t(n) {
			var r = e.call(this) || this;
			return (
				(r.isStopped = !1),
				n
					? ((r.destination = n), wa(n) && n.add(r))
					: (r.destination = sf),
				r
			);
		}
		return (
			(t.create = function (n, r, o) {
				return new dr(n, r, o);
			}),
			(t.prototype.next = function (n) {
				this.isStopped || this._next(n);
			}),
			(t.prototype.error = function (n) {
				this.isStopped || ((this.isStopped = !0), this._error(n));
			}),
			(t.prototype.complete = function () {
				this.isStopped || ((this.isStopped = !0), this._complete());
			}),
			(t.prototype.unsubscribe = function () {
				this.closed ||
					((this.isStopped = !0),
					e.prototype.unsubscribe.call(this),
					(this.destination = null));
			}),
			(t.prototype._next = function (n) {
				this.destination.next(n);
			}),
			(t.prototype._error = function (n) {
				try {
					this.destination.error(n);
				} finally {
					this.unsubscribe();
				}
			}),
			(t.prototype._complete = function () {
				try {
					this.destination.complete();
				} finally {
					this.unsubscribe();
				}
			}),
			t
		);
	})(Cr),
	rf = Function.prototype.bind;
function Bn(e, t) {
	return rf.call(e, t);
}
var of = (function () {
		function e(t) {
			this.partialObserver = t;
		}
		return (
			(e.prototype.next = function (t) {
				var n = this.partialObserver;
				if (n.next)
					try {
						n.next(t);
					} catch (r) {
						$t(r);
					}
			}),
			(e.prototype.error = function (t) {
				var n = this.partialObserver;
				if (n.error)
					try {
						n.error(t);
					} catch (r) {
						$t(r);
					}
				else $t(t);
			}),
			(e.prototype.complete = function () {
				var t = this.partialObserver;
				if (t.complete)
					try {
						t.complete();
					} catch (n) {
						$t(n);
					}
			}),
			e
		);
	})(),
	dr = (function (e) {
		Or(t, e);
		function t(n, r, o) {
			var i = e.call(this) || this,
				a;
			if (ue(n) || !n)
				a = {
					next: n ?? void 0,
					error: r ?? void 0,
					complete: o ?? void 0,
				};
			else {
				var l;
				i && Ea.useDeprecatedNextContext
					? ((l = Object.create(n)),
					  (l.unsubscribe = function () {
							return i.unsubscribe();
					  }),
					  (a = {
							next: n.next && Bn(n.next, l),
							error: n.error && Bn(n.error, l),
							complete: n.complete && Bn(n.complete, l),
					  }))
					: (a = n);
			}
			return (i.destination = new of(a)), i;
		}
		return t;
	})(kr);
function $t(e) {
	tf(e);
}
function af(e) {
	throw e;
}
var sf = { closed: !0, next: Vo, error: af, complete: Vo },
	lf = (function () {
		return (
			(typeof Symbol == 'function' && Symbol.observable) || '@@observable'
		);
	})();
function cf(e) {
	return e;
}
function uf(e) {
	return e.length === 0
		? cf
		: e.length === 1
		? e[0]
		: function (n) {
				return e.reduce(function (r, o) {
					return o(r);
				}, n);
		  };
}
var pt = (function () {
	function e(t) {
		t && (this._subscribe = t);
	}
	return (
		(e.prototype.lift = function (t) {
			var n = new e();
			return (n.source = this), (n.operator = t), n;
		}),
		(e.prototype.subscribe = function (t, n, r) {
			var o = this,
				i = ff(t) ? t : new dr(t, n, r);
			return (
				nf(function () {
					var a = o,
						l = a.operator,
						c = a.source;
					i.add(
						l
							? l.call(i, c)
							: c
							? o._subscribe(i)
							: o._trySubscribe(i),
					);
				}),
				i
			);
		}),
		(e.prototype._trySubscribe = function (t) {
			try {
				return this._subscribe(t);
			} catch (n) {
				t.error(n);
			}
		}),
		(e.prototype.forEach = function (t, n) {
			var r = this;
			return (
				(n = zo(n)),
				new n(function (o, i) {
					var a = new dr({
						next: function (l) {
							try {
								t(l);
							} catch (c) {
								i(c), a.unsubscribe();
							}
						},
						error: i,
						complete: o,
					});
					r.subscribe(a);
				})
			);
		}),
		(e.prototype._subscribe = function (t) {
			var n;
			return (n = this.source) === null || n === void 0
				? void 0
				: n.subscribe(t);
		}),
		(e.prototype[lf] = function () {
			return this;
		}),
		(e.prototype.pipe = function () {
			for (var t = [], n = 0; n < arguments.length; n++)
				t[n] = arguments[n];
			return uf(t)(this);
		}),
		(e.prototype.toPromise = function (t) {
			var n = this;
			return (
				(t = zo(t)),
				new t(function (r, o) {
					var i;
					n.subscribe(
						function (a) {
							return (i = a);
						},
						function (a) {
							return o(a);
						},
						function () {
							return r(i);
						},
					);
				})
			);
		}),
		(e.create = function (t) {
			return new e(t);
		}),
		e
	);
})();
function zo(e) {
	var t;
	return (t = e ?? Ea.Promise) !== null && t !== void 0 ? t : Promise;
}
function df(e) {
	return e && ue(e.next) && ue(e.error) && ue(e.complete);
}
function ff(e) {
	return (e && e instanceof kr) || (df(e) && wa(e));
}
function hf(e) {
	return ue(e == null ? void 0 : e.lift);
}
function Sa(e) {
	return function (t) {
		if (hf(t))
			return t.lift(function (n) {
				try {
					return e(n, this);
				} catch (r) {
					this.error(r);
				}
			});
		throw new TypeError('Unable to lift unknown Observable type');
	};
}
function Pa(e, t, n, r, o) {
	return new pf(e, t, n, r, o);
}
var pf = (function (e) {
		Or(t, e);
		function t(n, r, o, i, a, l) {
			var c = e.call(this, n) || this;
			return (
				(c.onFinalize = a),
				(c.shouldUnsubscribe = l),
				(c._next = r
					? function (d) {
							try {
								r(d);
							} catch (s) {
								n.error(s);
							}
					  }
					: e.prototype._next),
				(c._error = i
					? function (d) {
							try {
								i(d);
							} catch (s) {
								n.error(s);
							} finally {
								this.unsubscribe();
							}
					  }
					: e.prototype._error),
				(c._complete = o
					? function () {
							try {
								o();
							} catch (d) {
								n.error(d);
							} finally {
								this.unsubscribe();
							}
					  }
					: e.prototype._complete),
				c
			);
		}
		return (
			(t.prototype.unsubscribe = function () {
				var n;
				if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
					var r = this.closed;
					e.prototype.unsubscribe.call(this),
						!r &&
							((n = this.onFinalize) === null ||
								n === void 0 ||
								n.call(this));
				}
			}),
			t
		);
	})(kr),
	_f = ba(function (e) {
		return function () {
			e(this),
				(this.name = 'EmptyError'),
				(this.message = 'no elements in sequence');
		};
	});
function q(e, t) {
	var n = typeof t == 'object';
	return new Promise(function (r, o) {
		var i = !1,
			a;
		e.subscribe({
			next: function (l) {
				(a = l), (i = !0);
			},
			error: o,
			complete: function () {
				i ? r(a) : n ? r(t.defaultValue) : o(new _f());
			},
		});
	});
}
function $e(e, t) {
	return Sa(function (n, r) {
		var o = 0;
		n.subscribe(
			Pa(r, function (i) {
				r.next(e.call(t, i, o++));
			}),
		);
	});
}
function wt(e, t) {
	return Sa(function (n, r) {
		var o = 0;
		n.subscribe(
			Pa(r, function (i) {
				return e.call(t, i, o++) && r.next(i);
			}),
		);
	});
}
var Oa = [];
const qn = 5;
class mf extends Error {
	constructor(t) {
		const n = Ca(t);
		super(n.message), (this.statusCode = 400), Object.assign(this, n);
	}
}
class vf extends Error {
	constructor(t) {
		const n = Ca(t);
		super(n.message), (this.statusCode = 500), Object.assign(this, n);
	}
}
function Ca(e) {
	const t = e.body,
		n = {
			response: e,
			statusCode: e.statusCode,
			responseBody: bf(t, e),
			message: '',
			details: void 0,
		};
	if (t.error && t.message)
		return (n.message = ''.concat(t.error, ' - ').concat(t.message)), n;
	if (yf(t)) {
		const r = t.error.items || [],
			o = r
				.slice(0, qn)
				.map((a) => {
					var l;
					return (l = a.error) == null ? void 0 : l.description;
				})
				.filter(Boolean);
		let i = o.length
			? `:
- `.concat(
					o.join(`
- `),
			  )
			: '';
		return (
			r.length > qn &&
				(i += `
...and `.concat(r.length - qn, ' more')),
			(n.message = ''.concat(t.error.description).concat(i)),
			(n.details = t.error),
			n
		);
	}
	return t.error && t.error.description
		? ((n.message = t.error.description), (n.details = t.error), n)
		: ((n.message = t.error || t.message || gf(e)), n);
}
function yf(e) {
	return (
		Go(e) &&
		Go(e.error) &&
		e.error.type === 'mutationError' &&
		typeof e.error.description == 'string'
	);
}
function Go(e) {
	return typeof e == 'object' && e !== null && !Array.isArray(e);
}
function gf(e) {
	const t = e.statusMessage ? ' '.concat(e.statusMessage) : '';
	return ''
		.concat(e.method, '-request to ')
		.concat(e.url, ' resulted in HTTP ')
		.concat(e.statusCode)
		.concat(t);
}
function bf(e, t) {
	return (t.headers['content-type'] || '')
		.toLowerCase()
		.indexOf('application/json') !== -1
		? JSON.stringify(e, null, 2)
		: e;
}
const wf = {
		onResponse: (e) => {
			if (e.statusCode >= 500) throw new vf(e);
			if (e.statusCode >= 400) throw new mf(e);
			return e;
		},
	},
	Ef = {
		onResponse: (e) => {
			const t = e.headers['x-sanity-warning'];
			return (
				(Array.isArray(t) ? t : [t])
					.filter(Boolean)
					.forEach((r) => console.warn(r)),
				e
			);
		},
	};
function ka(e, t) {
	let { maxRetries: n = 5, retryDelay: r } = t;
	const o = Fd([
		n > 0 ? Pr({ retryDelay: r, maxRetries: n, shouldRetry: Sf }) : {},
		...e,
		Ef,
		Vd(),
		zd(),
		Jd(),
		wf,
		Yd({ implementation: pt }),
	]);
	function i(a) {
		return (
			arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o
		)({ maxRedirects: 0, ...a });
	}
	return (i.defaultRequester = o), i;
}
function Sf(e, t, n) {
	const r = n.method === 'GET' || n.method === 'HEAD',
		i = (n.uri || n.url).startsWith('/data/query'),
		a =
			e.response &&
			(e.response.statusCode === 429 ||
				e.response.statusCode === 502 ||
				e.response.statusCode === 503);
	return (r || i) && a ? !0 : Pr.shouldRetry(e, t, n);
}
const Pf = 'X-Sanity-Project-ID';
function Of(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	const n = {},
		r = t.token || e.token;
	r && (n.Authorization = 'Bearer '.concat(r)),
		!t.useGlobalApi &&
			!e.useProjectHostname &&
			e.projectId &&
			(n[Pf] = e.projectId);
	const o = !!(typeof t.withCredentials > 'u'
			? e.token || e.withCredentials
			: t.withCredentials),
		i = typeof t.timeout > 'u' ? e.timeout : t.timeout;
	return Object.assign({}, t, {
		headers: Object.assign({}, n, t.headers || {}),
		timeout: typeof i > 'u' ? 5 * 60 * 1e3 : i,
		proxy: t.proxy || e.proxy,
		json: !0,
		withCredentials: o,
	});
}
function Ta(e) {
	if (typeof e == 'string' || Array.isArray(e)) return { id: e };
	if (
		typeof e == 'object' &&
		e !== null &&
		'query' in e &&
		typeof e.query == 'string'
	)
		return 'params' in e && typeof e.params == 'object' && e.params !== null
			? { query: e.query, params: e.params }
			: { query: e.query };
	const t = [
		'* Document ID (<docId>)',
		'* Array of document IDs',
		'* Object containing `query`',
	].join(`
`);
	throw new Error(
		`Unknown selection - must be one of:

`.concat(t),
	);
}
const Yo = ['image', 'file'],
	Jo = ['before', 'after', 'replace'],
	xa = (e) => {
		if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e))
			throw new Error(
				'Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters',
			);
	},
	Cf = (e) => {
		if (!/^[-a-z0-9]+$/i.test(e))
			throw new Error(
				'`projectId` can only contain only a-z, 0-9 and dashes',
			);
	},
	kf = (e) => {
		if (Yo.indexOf(e) === -1)
			throw new Error(
				'Invalid asset type: '
					.concat(e, '. Must be one of ')
					.concat(Yo.join(', ')),
			);
	},
	at = (e, t) => {
		if (t === null || typeof t != 'object' || Array.isArray(t))
			throw new Error(''.concat(e, '() takes an object of properties'));
	},
	$a = (e, t) => {
		if (
			typeof t != 'string' ||
			!/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) ||
			t.includes('..')
		)
			throw new Error(
				''.concat(e, '(): "').concat(t, '" is not a valid document ID'),
			);
	},
	Xt = (e, t) => {
		if (!t._id)
			throw new Error(
				''.concat(
					e,
					'() requires that the document contains an ID ("_id" property)',
				),
			);
		$a(e, t._id);
	},
	Tf = (e, t, n) => {
		const r = 'insert(at, selector, items)';
		if (Jo.indexOf(e) === -1) {
			const o = Jo.map((i) => '"'.concat(i, '"')).join(', ');
			throw new Error(
				''
					.concat(r, ' takes an "at"-argument which is one of: ')
					.concat(o),
			);
		}
		if (typeof t != 'string')
			throw new Error(
				''.concat(
					r,
					' takes a "selector"-argument which must be a string',
				),
			);
		if (!Array.isArray(n))
			throw new Error(
				''.concat(
					r,
					' takes an "items"-argument which must be an array',
				),
			);
	},
	Ia = (e) => {
		if (!e.dataset)
			throw new Error('`dataset` must be provided to perform queries');
		return e.dataset || '';
	},
	Da = (e) => {
		if (typeof e != 'string' || !/^[a-z0-9._-]{1,75}$/i.test(e))
			throw new Error(
				'Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.',
			);
		return e;
	},
	Ra = (e) => {
		let { query: t, params: n = {}, options: r = {} } = e;
		const o = new URLSearchParams(),
			{ tag: i, ...a } = r;
		i && o.set('tag', i), o.set('query', t);
		for (const [l, c] of Object.entries(n))
			o.set('$'.concat(l), JSON.stringify(c));
		for (const [l, c] of Object.entries(a)) c && o.set(l, ''.concat(c));
		return '?'.concat(o);
	};
var Na = (e, t, n) => {
		if (!t.has(e)) throw TypeError('Cannot ' + n);
	},
	Be = (e, t, n) => (
		Na(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
	),
	Ma = (e, t, n) => {
		if (t.has(e))
			throw TypeError(
				'Cannot add the same private member more than once',
			);
		t instanceof WeakSet ? t.add(e) : t.set(e, n);
	},
	ja = (e, t, n, r) => (
		Na(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n
	),
	Fe,
	Le;
class Aa {
	constructor(t) {
		let n =
			arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		(this.selection = t), (this.operations = n);
	}
	set(t) {
		return this._assign('set', t);
	}
	setIfMissing(t) {
		return this._assign('setIfMissing', t);
	}
	diffMatchPatch(t) {
		return at('diffMatchPatch', t), this._assign('diffMatchPatch', t);
	}
	unset(t) {
		if (!Array.isArray(t))
			throw new Error(
				'unset(attrs) takes an array of attributes to unset, non-array given',
			);
		return (
			(this.operations = Object.assign({}, this.operations, {
				unset: t,
			})),
			this
		);
	}
	inc(t) {
		return this._assign('inc', t);
	}
	dec(t) {
		return this._assign('dec', t);
	}
	insert(t, n, r) {
		return Tf(t, n, r), this._assign('insert', { [t]: n, items: r });
	}
	append(t, n) {
		return this.insert('after', ''.concat(t, '[-1]'), n);
	}
	prepend(t, n) {
		return this.insert('before', ''.concat(t, '[0]'), n);
	}
	splice(t, n, r, o) {
		const i = typeof r > 'u' || r === -1,
			a = n < 0 ? n - 1 : n,
			l = i ? -1 : Math.max(0, n + r),
			c = a < 0 && l >= 0 ? '' : l,
			d = ''.concat(t, '[').concat(a, ':').concat(c, ']');
		return this.insert('replace', d, o || []);
	}
	ifRevisionId(t) {
		return (this.operations.ifRevisionID = t), this;
	}
	serialize() {
		return { ...Ta(this.selection), ...this.operations };
	}
	toJSON() {
		return this.serialize();
	}
	reset() {
		return (this.operations = {}), this;
	}
	_assign(t, n) {
		let r =
			arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
		return (
			at(t, n),
			(this.operations = Object.assign({}, this.operations, {
				[t]: Object.assign({}, (r && this.operations[t]) || {}, n),
			})),
			this
		);
	}
	_set(t, n) {
		return this._assign(t, n, !1);
	}
}
const Fa = class extends Aa {
	constructor(e, t, n) {
		super(e, t), Ma(this, Fe, void 0), ja(this, Fe, n);
	}
	clone() {
		return new Fa(this.selection, { ...this.operations }, Be(this, Fe));
	}
	commit(e) {
		if (!Be(this, Fe))
			throw new Error(
				'No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method',
			);
		const t = typeof this.selection == 'string',
			n = Object.assign({ returnFirst: t, returnDocuments: !0 }, e);
		return Be(this, Fe).mutate({ patch: this.serialize() }, n);
	}
};
let st = Fa;
Fe = new WeakMap();
const La = class extends Aa {
	constructor(e, t, n) {
		super(e, t), Ma(this, Le, void 0), ja(this, Le, n);
	}
	clone() {
		return new La(this.selection, { ...this.operations }, Be(this, Le));
	}
	commit(e) {
		if (!Be(this, Le))
			throw new Error(
				'No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method',
			);
		const t = typeof this.selection == 'string',
			n = Object.assign({ returnFirst: t, returnDocuments: !0 }, e);
		return Be(this, Le).mutate({ patch: this.serialize() }, n);
	}
};
let lt = La;
Le = new WeakMap();
var Ua = (e, t, n) => {
		if (!t.has(e)) throw TypeError('Cannot ' + n);
	},
	_e = (e, t, n) => (
		Ua(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
	),
	Ba = (e, t, n) => {
		if (t.has(e))
			throw TypeError(
				'Cannot add the same private member more than once',
			);
		t instanceof WeakSet ? t.add(e) : t.set(e, n);
	},
	qa = (e, t, n, r) => (
		Ua(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n
	),
	ge,
	be;
const Ha = { returnDocuments: !1 };
class Wa {
	constructor() {
		let t =
				arguments.length > 0 && arguments[0] !== void 0
					? arguments[0]
					: [],
			n = arguments.length > 1 ? arguments[1] : void 0;
		(this.operations = t), (this.trxId = n);
	}
	create(t) {
		return at('create', t), this._add({ create: t });
	}
	createIfNotExists(t) {
		const n = 'createIfNotExists';
		return at(n, t), Xt(n, t), this._add({ [n]: t });
	}
	createOrReplace(t) {
		const n = 'createOrReplace';
		return at(n, t), Xt(n, t), this._add({ [n]: t });
	}
	delete(t) {
		return $a('delete', t), this._add({ delete: { id: t } });
	}
	transactionId(t) {
		return t ? ((this.trxId = t), this) : this.trxId;
	}
	serialize() {
		return [...this.operations];
	}
	toJSON() {
		return this.serialize();
	}
	reset() {
		return (this.operations = []), this;
	}
	_add(t) {
		return this.operations.push(t), this;
	}
}
const Va = class extends Wa {
	constructor(e, t, n) {
		super(e, n), Ba(this, ge, void 0), qa(this, ge, t);
	}
	clone() {
		return new Va([...this.operations], _e(this, ge), this.trxId);
	}
	commit(e) {
		if (!_e(this, ge))
			throw new Error(
				'No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method',
			);
		return _e(this, ge).mutate(
			this.serialize(),
			Object.assign({ transactionId: this.trxId }, Ha, e || {}),
		);
	}
	patch(e, t) {
		const n = typeof t == 'function';
		if (typeof e != 'string' && e instanceof lt)
			return this._add({ patch: e.serialize() });
		if (n) {
			const o = t(new lt(e, {}, _e(this, ge)));
			if (!(o instanceof lt))
				throw new Error(
					'function passed to `patch()` must return the patch',
				);
			return this._add({ patch: o.serialize() });
		}
		return this._add({ patch: { id: e, ...t } });
	}
};
let za = Va;
ge = new WeakMap();
const Ga = class extends Wa {
	constructor(e, t, n) {
		super(e, n), Ba(this, be, void 0), qa(this, be, t);
	}
	clone() {
		return new Ga([...this.operations], _e(this, be), this.trxId);
	}
	commit(e) {
		if (!_e(this, be))
			throw new Error(
				'No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method',
			);
		return _e(this, be).mutate(
			this.serialize(),
			Object.assign({ transactionId: this.trxId }, Ha, e || {}),
		);
	}
	patch(e, t) {
		const n = typeof t == 'function';
		if (typeof e != 'string' && e instanceof st)
			return this._add({ patch: e.serialize() });
		if (n) {
			const o = t(new st(e, {}, _e(this, be)));
			if (!(o instanceof st))
				throw new Error(
					'function passed to `patch()` must return the patch',
				);
			return this._add({ patch: o.serialize() });
		}
		return this._add({ patch: { id: e, ...t } });
	}
};
let Ya = Ga;
be = new WeakMap();
const xf = (e, t) => (e === !1 ? void 0 : typeof e > 'u' ? t : e),
	$f = function () {
		let e =
			arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		return {
			dryRun: e.dryRun,
			returnIds: !0,
			returnDocuments: xf(e.returnDocuments, !0),
			visibility: e.visibility || 'sync',
			autoGenerateArrayKeys: e.autoGenerateArrayKeys,
			skipCrossDatasetReferenceValidation:
				e.skipCrossDatasetReferenceValidation,
		};
	},
	Tr = (e) => e.type === 'response',
	If = (e) => e.body,
	Df = (e, t) => e.reduce((n, r) => ((n[t(r)] = r), n), Object.create(null)),
	Rf = 11264;
function Ja(e, t, n, r) {
	let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
	const i = o.filterResponse === !1 ? (a) => a : (a) => a.result;
	return Et(e, t, 'query', { query: n, params: r }, o).pipe($e(i));
}
function Ka(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
	const o = { uri: Ye(e, 'doc', n), json: !0, tag: r.tag };
	return St(e, t, o).pipe(
		wt(Tr),
		$e((i) => i.body.documents && i.body.documents[0]),
	);
}
function Qa(e, t, n) {
	let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
	const o = { uri: Ye(e, 'doc', n.join(',')), json: !0, tag: r.tag };
	return St(e, t, o).pipe(
		wt(Tr),
		$e((i) => {
			const a = Df(i.body.documents || [], (l) => l._id);
			return n.map((l) => a[l] || null);
		}),
	);
}
function Xa(e, t, n, r) {
	return Xt('createIfNotExists', n), Pn(e, t, n, 'createIfNotExists', r);
}
function Za(e, t, n, r) {
	return Xt('createOrReplace', n), Pn(e, t, n, 'createOrReplace', r);
}
function es(e, t, n, r) {
	return Et(e, t, 'mutate', { mutations: [{ delete: Ta(n) }] }, r);
}
function ts(e, t, n, r) {
	let o;
	n instanceof lt || n instanceof st
		? (o = { patch: n.serialize() })
		: n instanceof za || n instanceof Ya
		? (o = n.serialize())
		: (o = n);
	const i = Array.isArray(o) ? o : [o],
		a = (r && r.transactionId) || void 0;
	return Et(e, t, 'mutate', { mutations: i, transactionId: a }, r);
}
function Et(e, t, n, r) {
	let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
	const i = n === 'mutate',
		a = n === 'query',
		l = i ? '' : Ra(r),
		c = !i && l.length < Rf,
		d = c ? l : '',
		s = o.returnFirst,
		{ timeout: u, token: f, tag: h, headers: p } = o,
		m = Ye(e, n, d),
		v = {
			method: c ? 'GET' : 'POST',
			uri: m,
			json: !0,
			body: c ? void 0 : r,
			query: i && $f(o),
			timeout: u,
			headers: p,
			token: f,
			tag: h,
			canUseCdn: a,
			signal: o.signal,
		};
	return St(e, t, v).pipe(
		wt(Tr),
		$e(If),
		$e((E) => {
			if (!i) return E;
			const g = E.results || [];
			if (o.returnDocuments)
				return s ? g[0] && g[0].document : g.map((x) => x.document);
			const y = s ? 'documentId' : 'documentIds',
				S = s ? g[0] && g[0].id : g.map((x) => x.id);
			return { transactionId: E.transactionId, results: g, [y]: S };
		}),
	);
}
function Pn(e, t, n, r) {
	let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
	const i = { [r]: n },
		a = Object.assign({ returnFirst: !0, returnDocuments: !0 }, o);
	return Et(e, t, 'mutate', { mutations: [i] }, a);
}
function St(e, t, n) {
	const r = n.url || n.uri,
		o = e.config(),
		i =
			typeof n.canUseCdn > 'u'
				? ['GET', 'HEAD'].indexOf(n.method || 'GET') >= 0 &&
				  r.indexOf('/data/') === 0
				: n.canUseCdn,
		a = o.useCdn && i,
		l =
			n.tag && o.requestTagPrefix
				? [o.requestTagPrefix, n.tag].join('.')
				: n.tag || o.requestTagPrefix;
	l && (n.query = { tag: Da(l), ...n.query }),
		['GET', 'HEAD'].indexOf(n.method || 'GET') >= 0 &&
			r.indexOf('/data/query/') === 0 &&
			(o.resultSourceMap &&
				(n.query = { resultSourceMap: !0, ...n.query }),
			typeof o.perspective == 'string' &&
				o.perspective !== 'all' &&
				(n.query = { perspective: o.perspective, ...n.query }));
	const c = Of(o, Object.assign({}, n, { url: xr(e, r, a) })),
		d = new pt((s) => t(c, o.requester).subscribe(s));
	return n.signal ? d.pipe(Nf(n.signal)) : d;
}
function ae(e, t, n) {
	return St(e, t, n).pipe(
		wt((o) => o.type === 'response'),
		$e((o) => o.body),
	);
}
function Ye(e, t, n) {
	const r = e.config(),
		o = Ia(r),
		i = '/'.concat(t, '/').concat(o),
		a = n ? ''.concat(i, '/').concat(n) : i;
	return '/data'.concat(a).replace(/\/($|\?)/, '$1');
}
function xr(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
	const { url: r, cdnUrl: o } = e.config(),
		i = n ? o : r;
	return ''.concat(i, '/').concat(t.replace(/^\//, ''));
}
function Nf(e) {
	return (t) =>
		new pt((n) => {
			const r = () => n.error(jf(e));
			if (e && e.aborted) {
				r();
				return;
			}
			const o = t.subscribe(n);
			return (
				e.addEventListener('abort', r),
				() => {
					e.removeEventListener('abort', r), o.unsubscribe();
				}
			);
		});
}
const Mf = !!globalThis.DOMException;
function jf(e) {
	var t, n;
	if (Mf)
		return new DOMException(
			(t = e == null ? void 0 : e.reason) != null
				? t
				: 'The operation was aborted.',
			'AbortError',
		);
	const r = new Error(
		(n = e == null ? void 0 : e.reason) != null
			? n
			: 'The operation was aborted.',
	);
	return (r.name = 'AbortError'), r;
}
var ns = (e, t, n) => {
		if (!t.has(e)) throw TypeError('Cannot ' + n);
	},
	Zt = (e, t, n) => (
		ns(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
	),
	en = (e, t, n) => {
		if (t.has(e))
			throw TypeError(
				'Cannot add the same private member more than once',
			);
		t instanceof WeakSet ? t.add(e) : t.set(e, n);
	},
	tn = (e, t, n, r) => (
		ns(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n
	),
	At,
	Ft,
	Lt,
	Ut;
class Af {
	constructor(t, n) {
		en(this, At, void 0),
			en(this, Ft, void 0),
			tn(this, At, t),
			tn(this, Ft, n);
	}
	upload(t, n, r) {
		return rs(Zt(this, At), Zt(this, Ft), t, n, r);
	}
}
At = new WeakMap();
Ft = new WeakMap();
class Ff {
	constructor(t, n) {
		en(this, Lt, void 0),
			en(this, Ut, void 0),
			tn(this, Lt, t),
			tn(this, Ut, n);
	}
	upload(t, n, r) {
		const o = rs(Zt(this, Lt), Zt(this, Ut), t, n, r);
		return q(
			o.pipe(
				wt((i) => i.type === 'response'),
				$e((i) => i.body.document),
			),
		);
	}
}
Lt = new WeakMap();
Ut = new WeakMap();
function rs(e, t, n, r) {
	let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
	kf(n);
	let i = o.extract || void 0;
	i && !i.length && (i = ['none']);
	const a = Ia(e.config()),
		l = n === 'image' ? 'images' : 'files',
		c = Lf(o, r),
		{
			tag: d,
			label: s,
			title: u,
			description: f,
			creditLine: h,
			filename: p,
			source: m,
		} = c,
		v = {
			label: s,
			title: u,
			description: f,
			filename: p,
			meta: i,
			creditLine: h,
		};
	return (
		m &&
			((v.sourceId = m.id),
			(v.sourceName = m.name),
			(v.sourceUrl = m.url)),
		St(e, t, {
			tag: d,
			method: 'POST',
			timeout: c.timeout || 0,
			uri: '/assets/'.concat(l, '/').concat(a),
			headers: c.contentType ? { 'Content-Type': c.contentType } : {},
			query: v,
			body: r,
		})
	);
}
function Lf(e, t) {
	return typeof File > 'u' || !(t instanceof File)
		? e
		: Object.assign(
				{
					filename: e.preserveFilename === !1 ? void 0 : t.name,
					contentType: t.type,
				},
				e,
		  );
}
const Uf = 'https://www.sanity.io/help/';
function $r(e) {
	return Uf + e;
}
function Bf(e) {
	let t = !1,
		n;
	return function () {
		return t || ((n = e(...arguments)), (t = !0)), n;
	};
}
const Ir = (e) =>
		Bf(function () {
			for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
				n[r] = arguments[r];
			return console.warn(e.join(' '), ...n);
		}),
	qf = Ir([
		"Since you haven't set a value for `useCdn`, we will deliver content using our",
		'global, edge-cached API-CDN. If you wish to have content delivered faster, set',
		'`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API.',
	]),
	Hf = Ir([
		'You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.',
		'See '.concat(
			$r('js-client-browser-token'),
			' for more information and how to hide this warning.',
		),
	]),
	Wf = Ir([
		'Using the Sanity client without specifying an API version is deprecated.',
		'See '.concat($r('js-client-api-version')),
	]),
	Vf = 'apicdn.sanity.io',
	nn = {
		apiHost: 'https://api.sanity.io',
		apiVersion: '1',
		useProjectHostname: !0,
	},
	zf = ['localhost', '127.0.0.1', '0.0.0.0'],
	Gf = (e) => zf.indexOf(e) !== -1,
	Yf = function (t) {
		if (t === '1' || t === 'X') return;
		const n = new Date(t);
		if (
			!(
				/^\d{4}-\d{2}-\d{2}$/.test(t) &&
				n instanceof Date &&
				n.getTime() > 0
			)
		)
			throw new Error(
				'Invalid API version string, expected `1` or date in format `YYYY-MM-DD`',
			);
	},
	os = (e, t) => {
		const n = Object.assign({}, t, e);
		n.apiVersion || Wf();
		const r = Object.assign({}, nn, n),
			o = r.useProjectHostname;
		if (typeof Promise > 'u') {
			const u = $r('js-client-promise-polyfill');
			throw new Error(
				'No native Promise-implementation found, polyfill needed - see '.concat(
					u,
				),
			);
		}
		if (o && !r.projectId)
			throw new Error('Configuration must contain `projectId`');
		const i =
				typeof window < 'u' &&
				window.location &&
				window.location.hostname,
			a = i && Gf(window.location.hostname);
		i && a && r.token && r.ignoreBrowserTokenWarning !== !0
			? Hf()
			: typeof r.useCdn > 'u' && qf(),
			o && Cf(r.projectId),
			r.dataset && xa(r.dataset),
			'requestTagPrefix' in r &&
				(r.requestTagPrefix = r.requestTagPrefix
					? Da(r.requestTagPrefix).replace(/\.+$/, '')
					: void 0),
			(r.apiVersion = ''.concat(r.apiVersion).replace(/^v/, '')),
			(r.isDefaultApi = r.apiHost === nn.apiHost),
			(r.useCdn = r.useCdn !== !1 && !r.withCredentials),
			Yf(r.apiVersion);
		const l = r.apiHost.split('://', 2),
			c = l[0],
			d = l[1],
			s = r.isDefaultApi ? Vf : d;
		return (
			r.useProjectHostname
				? ((r.url = ''
						.concat(c, '://')
						.concat(r.projectId, '.')
						.concat(d, '/v')
						.concat(r.apiVersion)),
				  (r.cdnUrl = ''
						.concat(c, '://')
						.concat(r.projectId, '.')
						.concat(s, '/v')
						.concat(r.apiVersion)))
				: ((r.url = ''.concat(r.apiHost, '/v').concat(r.apiVersion)),
				  (r.cdnUrl = r.url)),
			r
		);
	};
var Jf = (e, t) =>
	Object.keys(t)
		.concat(Object.keys(e))
		.reduce((n, r) => ((n[r] = typeof e[r] > 'u' ? t[r] : e[r]), n), {});
const Kf = (e, t) =>
		t.reduce((n, r) => (typeof e[r] > 'u' || (n[r] = e[r]), n), {}),
	Qf = 16e3 - 1200,
	Xf = [
		'includePreviousRevision',
		'includeResult',
		'visibility',
		'effectFormat',
		'tag',
	],
	Zf = { includeResult: !0 };
function is(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	const {
			url: r,
			token: o,
			withCredentials: i,
			requestTagPrefix: a,
		} = this.config(),
		l = n.tag && a ? [a, n.tag].join('.') : n.tag,
		c = { ...Jf(n, Zf), tag: l },
		d = Kf(c, Xf),
		s = Ra({ query: e, params: t, options: { tag: l, ...d } }),
		u = ''.concat(r).concat(Ye(this, 'listen', s));
	if (u.length > Qf)
		return new pt((m) =>
			m.error(new Error('Query too large for listener')),
		);
	const f = c.events ? c.events : ['mutation'],
		h = f.indexOf('reconnect') !== -1,
		p = {};
	return (
		(o || i) && (p.withCredentials = !0),
		o && (p.headers = { Authorization: 'Bearer '.concat(o) }),
		new pt((m) => {
			let v;
			D()
				.then((I) => {
					v = I;
				})
				.catch((I) => {
					m.error(I), A();
				});
			let E,
				g = !1;
			function y() {
				g ||
					($(),
					!g &&
						v.readyState === v.CLOSED &&
						(N(), clearTimeout(E), (E = setTimeout(C, 100))));
			}
			function S(I) {
				m.error(eh(I));
			}
			function x(I) {
				const R = as(I);
				return R instanceof Error ? m.error(R) : m.next(R);
			}
			function O() {
				(g = !0), N(), m.complete();
			}
			function N() {
				v &&
					(v.removeEventListener('error', y),
					v.removeEventListener('channelError', S),
					v.removeEventListener('disconnect', O),
					f.forEach((I) => v.removeEventListener(I, x)),
					v.close());
			}
			function $() {
				h && m.next({ type: 'reconnect' });
			}
			async function D() {
				const { default: I } = await Pd(
						() => import('./browser-395aeb67.js').then((z) => z.b),
						[],
					),
					R = new I(u, p);
				return (
					R.addEventListener('error', y),
					R.addEventListener('channelError', S),
					R.addEventListener('disconnect', O),
					f.forEach((z) => R.addEventListener(z, x)),
					R
				);
			}
			function C() {
				D()
					.then((I) => {
						v = I;
					})
					.catch((I) => {
						m.error(I), A();
					});
			}
			function A() {
				(g = !0), N();
			}
			return A;
		})
	);
}
function as(e) {
	try {
		const t = (e.data && JSON.parse(e.data)) || {};
		return Object.assign({ type: e.type }, t);
	} catch (t) {
		return t;
	}
}
function eh(e) {
	if (e instanceof Error) return e;
	const t = as(e);
	return t instanceof Error ? t : new Error(th(t));
}
function th(e) {
	return e.error
		? e.error.description
			? e.error.description
			: typeof e.error == 'string'
			? e.error
			: JSON.stringify(e.error, null, 2)
		: e.message || 'Unknown listener error';
}
var ss = (e, t, n) => {
		if (!t.has(e)) throw TypeError('Cannot ' + n);
	},
	Y = (e, t, n) => (
		ss(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
	),
	rn = (e, t, n) => {
		if (t.has(e))
			throw TypeError(
				'Cannot add the same private member more than once',
			);
		t instanceof WeakSet ? t.add(e) : t.set(e, n);
	},
	on = (e, t, n, r) => (
		ss(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n
	),
	we,
	Ee,
	Se,
	Pe;
class nh {
	constructor(t, n) {
		rn(this, we, void 0),
			rn(this, Ee, void 0),
			on(this, we, t),
			on(this, Ee, n);
	}
	create(t, n) {
		return qe(Y(this, we), Y(this, Ee), 'PUT', t, n);
	}
	edit(t, n) {
		return qe(Y(this, we), Y(this, Ee), 'PATCH', t, n);
	}
	delete(t) {
		return qe(Y(this, we), Y(this, Ee), 'DELETE', t);
	}
	list() {
		return ae(Y(this, we), Y(this, Ee), { uri: '/datasets' });
	}
}
we = new WeakMap();
Ee = new WeakMap();
class rh {
	constructor(t, n) {
		rn(this, Se, void 0),
			rn(this, Pe, void 0),
			on(this, Se, t),
			on(this, Pe, n);
	}
	create(t, n) {
		return q(qe(Y(this, Se), Y(this, Pe), 'PUT', t, n));
	}
	edit(t, n) {
		return q(qe(Y(this, Se), Y(this, Pe), 'PATCH', t, n));
	}
	delete(t) {
		return q(qe(Y(this, Se), Y(this, Pe), 'DELETE', t));
	}
	list() {
		return q(ae(Y(this, Se), Y(this, Pe), { uri: '/datasets' }));
	}
}
Se = new WeakMap();
Pe = new WeakMap();
function qe(e, t, n, r, o) {
	return xa(r), ae(e, t, { method: n, uri: '/datasets/'.concat(r), body: o });
}
var ls = (e, t, n) => {
		if (!t.has(e)) throw TypeError('Cannot ' + n);
	},
	me = (e, t, n) => (
		ls(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
	),
	an = (e, t, n) => {
		if (t.has(e))
			throw TypeError(
				'Cannot add the same private member more than once',
			);
		t instanceof WeakSet ? t.add(e) : t.set(e, n);
	},
	sn = (e, t, n, r) => (
		ls(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n
	),
	et,
	tt,
	nt,
	rt;
class oh {
	constructor(t, n) {
		an(this, et, void 0),
			an(this, tt, void 0),
			sn(this, et, t),
			sn(this, tt, n);
	}
	list() {
		return ae(me(this, et), me(this, tt), { uri: '/projects' });
	}
	getById(t) {
		return ae(me(this, et), me(this, tt), { uri: '/projects/'.concat(t) });
	}
}
et = new WeakMap();
tt = new WeakMap();
class ih {
	constructor(t, n) {
		an(this, nt, void 0),
			an(this, rt, void 0),
			sn(this, nt, t),
			sn(this, rt, n);
	}
	list() {
		return q(ae(me(this, nt), me(this, rt), { uri: '/projects' }));
	}
	getById(t) {
		return q(
			ae(me(this, nt), me(this, rt), { uri: '/projects/'.concat(t) }),
		);
	}
}
nt = new WeakMap();
rt = new WeakMap();
var cs = (e, t, n) => {
		if (!t.has(e)) throw TypeError('Cannot ' + n);
	},
	ln = (e, t, n) => (
		cs(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
	),
	cn = (e, t, n) => {
		if (t.has(e))
			throw TypeError(
				'Cannot add the same private member more than once',
			);
		t instanceof WeakSet ? t.add(e) : t.set(e, n);
	},
	un = (e, t, n, r) => (
		cs(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n
	),
	Bt,
	qt,
	Ht,
	Wt;
class ah {
	constructor(t, n) {
		cn(this, Bt, void 0),
			cn(this, qt, void 0),
			un(this, Bt, t),
			un(this, qt, n);
	}
	getById(t) {
		return ae(ln(this, Bt), ln(this, qt), { uri: '/users/'.concat(t) });
	}
}
Bt = new WeakMap();
qt = new WeakMap();
class sh {
	constructor(t, n) {
		cn(this, Ht, void 0),
			cn(this, Wt, void 0),
			un(this, Ht, t),
			un(this, Wt, n);
	}
	getById(t) {
		return q(ae(ln(this, Ht), ln(this, Wt), { uri: '/users/'.concat(t) }));
	}
}
Ht = new WeakMap();
Wt = new WeakMap();
var us = (e, t, n) => {
		if (!t.has(e)) throw TypeError('Cannot ' + n);
	},
	T = (e, t, n) => (
		us(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
	),
	dn = (e, t, n) => {
		if (t.has(e))
			throw TypeError(
				'Cannot add the same private member more than once',
			);
		t instanceof WeakSet ? t.add(e) : t.set(e, n);
	},
	fn = (e, t, n, r) => (
		us(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n
	),
	Oe,
	B,
	Ce,
	U;
const fr = class {
	constructor(e) {
		let t =
			arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn;
		dn(this, Oe, void 0),
			dn(this, B, void 0),
			(this.listen = is),
			this.config(t),
			fn(this, B, e),
			(this.assets = new Af(this, T(this, B))),
			(this.datasets = new nh(this, T(this, B))),
			(this.projects = new oh(this, T(this, B))),
			(this.users = new ah(this, T(this, B)));
	}
	clone() {
		return new fr(T(this, B), this.config());
	}
	config(e) {
		if (e === void 0) return { ...T(this, Oe) };
		if (T(this, Oe) && T(this, Oe).allowReconfigure === !1)
			throw new Error(
				'Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client',
			);
		return fn(this, Oe, os(e, T(this, Oe) || {})), this;
	}
	withConfig(e) {
		return new fr(T(this, B), { ...this.config(), ...e });
	}
	fetch(e, t) {
		let n =
			arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		return Ja(this, T(this, B), e, t, n);
	}
	getDocument(e, t) {
		return Ka(this, T(this, B), e, t);
	}
	getDocuments(e, t) {
		return Qa(this, T(this, B), e, t);
	}
	create(e, t) {
		return Pn(this, T(this, B), e, 'create', t);
	}
	createIfNotExists(e, t) {
		return Xa(this, T(this, B), e, t);
	}
	createOrReplace(e, t) {
		return Za(this, T(this, B), e, t);
	}
	delete(e, t) {
		return es(this, T(this, B), e, t);
	}
	mutate(e, t) {
		return ts(this, T(this, B), e, t);
	}
	patch(e, t) {
		return new st(e, t, this);
	}
	transaction(e) {
		return new Ya(e, this);
	}
	request(e) {
		return ae(this, T(this, B), e);
	}
	getUrl(e, t) {
		return xr(this, e, t);
	}
	getDataUrl(e, t) {
		return Ye(this, e, t);
	}
};
let lh = fr;
Oe = new WeakMap();
B = new WeakMap();
const hr = class {
	constructor(e) {
		let t =
			arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nn;
		dn(this, Ce, void 0),
			dn(this, U, void 0),
			(this.listen = is),
			this.config(t),
			fn(this, U, e),
			(this.assets = new Ff(this, T(this, U))),
			(this.datasets = new rh(this, T(this, U))),
			(this.projects = new ih(this, T(this, U))),
			(this.users = new sh(this, T(this, U))),
			(this.observable = new lh(e, t));
	}
	clone() {
		return new hr(T(this, U), this.config());
	}
	config(e) {
		if (e === void 0) return { ...T(this, Ce) };
		if (T(this, Ce) && T(this, Ce).allowReconfigure === !1)
			throw new Error(
				'Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client',
			);
		return (
			this.observable && this.observable.config(e),
			fn(this, Ce, os(e, T(this, Ce) || {})),
			this
		);
	}
	withConfig(e) {
		return new hr(T(this, U), { ...this.config(), ...e });
	}
	fetch(e, t) {
		let n =
			arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		return q(Ja(this, T(this, U), e, t, n));
	}
	getDocument(e, t) {
		return q(Ka(this, T(this, U), e, t));
	}
	getDocuments(e, t) {
		return q(Qa(this, T(this, U), e, t));
	}
	create(e, t) {
		return q(Pn(this, T(this, U), e, 'create', t));
	}
	createIfNotExists(e, t) {
		return q(Xa(this, T(this, U), e, t));
	}
	createOrReplace(e, t) {
		return q(Za(this, T(this, U), e, t));
	}
	delete(e, t) {
		return q(es(this, T(this, U), e, t));
	}
	mutate(e, t) {
		return q(ts(this, T(this, U), e, t));
	}
	patch(e, t) {
		return new lt(e, t, this);
	}
	transaction(e) {
		return new za(e, this);
	}
	request(e) {
		return q(ae(this, T(this, U), e));
	}
	dataRequest(e, t, n) {
		return q(Et(this, T(this, U), e, t, n));
	}
	getUrl(e, t) {
		return xr(this, e, t);
	}
	getDataUrl(e, t) {
		return Ye(this, e, t);
	}
};
let ch = hr;
Ce = new WeakMap();
U = new WeakMap();
const uh = ka(Oa, {});
uh.defaultRequester;
const dh = (e) =>
		new ch(
			ka(Oa, { maxRetries: e.maxRetries, retryDelay: e.retryDelay }),
			e,
		),
	fh = dh({
		projectId: '4eidten9',
		dataset: 'production',
		useCdn: !1,
		apiVersion: '2021-03-25',
	}),
	hh = `
*[_type == "homePage"][0] {
  about {
    bio,
    image {
      asset -> {
        _id,
        url
      }
    }
  },
  shopUrl,
  caption,
  socials,
  shows,
  bigVideos,
  smallVideos,
  spotifyUrl,
  terms,
    appleMusicUrl,
  videos[] {
    title,
    url,
    description,
    },
  image {
    asset -> {
      _id,
      url
    }
  },
  albums[] {
    spotifyUrl,
    appleMusicUrl,
    deezerUrl,
    image {
        asset -> {
            _id,
            url
           }
    },
    
  }
}`;
class ph {
	async getHomePage() {
		return await fh.fetch(hh).then((t) => t);
	}
}
const _h = new ph(),
	mh = {
		shopUrl: '',
		caption: '',
		socials: { facebook: '', instagram: '', twitter: '', tiktok: '' },
		image: { asset: { url: '', _id: '' } },
		about: { image: { asset: { url: '', _id: '' } }, bio: [] },
		bigVideos: '',
		smallVideos: [{ url: '', title: '', description: '' }],
		shows: [
			{
				city: '',
				externalUrl: '',
				_key: '',
				title: '',
				country: '',
				venue: '',
			},
		],
		albums: [
			{
				appleMusicUrl: '',
				deezerUrl: '',
				imageDescription: '',
				image: { asset: { url: '' } },
				spotifyUrl: '',
			},
		],
		spotifyUrl: '',
		appleMusicUrl: '',
		terms: '',
	},
	vh = () => {
		const [e, t] = ve(mh),
			[n, r] = ve(!0),
			[o, i] = ve(''),
			a = async () => {
				try {
					const l = await _h.getHomePage();
					t(l);
				} catch (l) {
					i(l);
				} finally {
					r(!1);
				}
			};
		return (
			mt(() => {
				a().then((l) => l);
			}, []),
			{ data: e, loading: n, error: o }
		);
	},
	yh = () => {
		const { data: e } = vh();
		return _(Vu, {
			shopUrl: e == null ? void 0 : e.shopUrl,
			children: [
				_('section', {
					className: 'p-home__header',
					style: {
						backgroundImage: `url(${
							e == null ? void 0 : e.image.asset.url
						})`,
					},
					children: _('div', {
						className: 'p-home__header__social-icons',
						children: _(Pi, {
							facebook: e == null ? void 0 : e.socials.facebook,
							instagram: e == null ? void 0 : e.socials.instagram,
							tiktok: e == null ? void 0 : e.socials.tiktok,
							twitter: e == null ? void 0 : e.socials.twitter,
							direction: 'column',
						}),
					}),
				}),
				_('section', {
					id: 'live',
					className: 'u-layout-grid p-home__video',
					children: [
						_('div', {
							className: 'p-home__video__title',
							children: _(Me, {
								headingType: 'h4',
								headingStyle: 'h4',
								children: 'Show video',
							}),
						}),
						_('div', {
							className: 'p-home__video__embed--big',
							children: _(br.YouTubeEmbed, {
								url: e.bigVideos,
								width: '100%',
								youTubeProps: {
									iframeClassName:
										'p-home__video__embed--big__iframe',
								},
							}),
						}),
						e &&
							e.smallVideos &&
							e.smallVideos.length > 0 &&
							(e == null
								? void 0
								: e.smallVideos.map((t, n) =>
										_(
											qu,
											{
												videoUrl: t.url,
												title: t.title,
												description: t.description,
												className:
													'p-home__video__embed--small',
											},
											n,
										),
								  )),
					],
				}),
				e.caption
					? _('section', {
							className: 'u-layout-constrain p-home__caption',
							children: _(Me, {
								className: 'p-home__caption__text',
								headingType: 'h2',
								headingStyle: 'h3',
								children: e == null ? void 0 : e.caption,
							}),
					  })
					: null,
				e.albums
					? _('section', {
							id: 'music',
							className: 'u-layout-constrain',
							children: [
								_('div', {
									className: 'p-home__releases__heading',
									children: [
										_(Me, {
											headingType: 'h4',
											headingStyle: 'h4',
											children: 'Latest releases',
										}),
										_('div', {
											className: 'p-home__links',
											children: [
												_($o, {
													className:
														'p-home__links__spotify',
													linkText: 'Spotify',
													link: e.spotifyUrl,
													src: 'icons/spotify-icon.svg',
												}),
												_($o, {
													className:
														'p-home__links__applemusic',
													linkText: 'Apple Music',
													link: e.appleMusicUrl,
													src: 'icons/apple-icon.svg',
												}),
											],
										}),
									],
								}),
								_('div', {
									className: 'p-home__releases__covers',
									children: e.albums.map((t, n) =>
										_(
											Hu,
											{
												src: t.image.asset.url,
												alt: t.imageDescription,
												spotifyLink: t.spotifyUrl,
												appleMusicLink: t.appleMusicUrl,
												deezerLink: t.deezerUrl,
											},
											n,
										),
									),
								}),
							],
					  })
					: null,
				e.shows
					? _('section', {
							className: 'u-layout-constrain p-home__tour-dates',
							children: [
								_(Me, {
									headingType: 'h4',
									headingStyle: 'h4',
									children: 'Tour dates',
								}),
								_('div', {
									className: 'p-home__tour',
									children: e.shows.map((t) =>
										_(
											Ds,
											{
												tour: t.title,
												venue: t.venue,
												city: t.city,
												country: t.country,
												link: t.externalUrl,
												linkText: 'Check it out',
											},
											t._key,
										),
									),
								}),
							],
					  })
					: null,
				e.about
					? _('section', {
							id: 'about',
							className: 'u-layout-grid p-home__bio',
							children: [
								_(gt, {
									src: e.about.image.asset.url,
									alt: 'John Newman',
									className: 'p-home__bio__image',
								}),
								_('div', {
									className: 'p-home__bio__about',
									children: [
										_(Me, {
											headingType: 'h5',
											headingStyle: 'h5',
											children: 'Something about me',
										}),
										_('div', {
											className:
												'p-home__bio__about__paragraph',
											children: _(gd, {
												value: e.about.bio,
											}),
										}),
									],
								}),
							],
					  })
					: null,
				_(Wu, {
					facebookLink: e.socials.facebook,
					instagramLink: e.socials.instagram,
					twitterLink: e.socials.twitter,
					tiktokLink: e.socials.tiktok,
					termsLink: e.terms,
				}),
			],
		});
	},
	gh = () => _(Si, { children: _(xs, { path: _s.home, component: yh }) });
He(_(gh, {}), document.getElementById('app'));
export { w as c, pn as g };
