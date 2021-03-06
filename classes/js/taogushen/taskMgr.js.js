BizQQWPA
		.define(
				"wpa.ta",
				"util.getScript,util.serialize,util.cookie",
				function(require) {
					var URL = "http://tajs.qq.com/crmqq.php", UID_COOKIE_NAME = "pgv_pvi";
					var getScript = require("getScript"), serialize = require("serialize"), cookie = require("cookie");
					var loaded = false;
					var ta = function(nameAccount, domain, callback) {
						var isTriggered = false;
						if (ta.uid) {
							callback(ta.uid);
							isTriggered = true
						}
						if (!loaded) {
							var options = {
								uid : nameAccount,
								dm : domain
							}, url = URL + "?" + serialize(options, "=", "&");
							getScript(url, function() {
								loaded = true;
								if (isTriggered) {
									return
								}
								ta.uid = cookie.get(UID_COOKIE_NAME);
								if (ta.uid) {
									callback(ta.uid)
								} else {
									setTimeout(arguments.callee, 30)
								}
							})
						}
					};
					ta.uid = cookie.get(UID_COOKIE_NAME) || "";
					return ta
				});
BizQQWPA.define("wpa.kfuin", "util.getJSONP", function(require) {
	var getJSONP = require("getJSONP");
	var GET_KFUIN_URL = "http://wpl.b.qq.com/cgi/conv.php";
	var kfuins = {};
	return {
		get : function(nameAccount, callback) {
			callback = callback || function() {
			};
			if (!nameAccount || kfuins[nameAccount]) {
				callback(kfuins[nameAccount]);
				return
			}
			var opts = {
				num : nameAccount
			};
			getJSONP(GET_KFUIN_URL, opts, function(rs) {
				if (!rs || rs.r !== 0) {
					callback();
					return
				}
				var kfuin = kfuins[nameAccount] = rs.data.kfuin;
				callback(kfuin)
			})
		},
		set : function(nameAccount, kfuin) {
			kfuins[nameAccount] = kfuin
		}
	}
});
BizQQWPA.define("wpa.sid", "util.getJSONP,util.domain", function(require) {
	var getJSONP = require("getJSONP"), domain = require("domain");
	var GET_SID_URL = "http://wpl.b.qq.com/cgi/ta.php";
	var sids = {};
	var topDomain = domain.topDomain;
	return {
		get : function(nameAccount, callback) {
			callback = callback || function() {
			};
			if (!nameAccount || sids[nameAccount + "." + topDomain]) {
				callback(sids[nameAccount + "." + topDomain]);
				return
			}
			var opts = {
				na : nameAccount,
				dm : topDomain
			};
			getJSONP(GET_SID_URL, opts, function(rs) {
				if (!rs || rs.r !== 0) {
					callback();
					return
				}
				var sid = sids[nameAccount + "." + topDomain] = rs.data.sid;
				callback(sid)
			})
		},
		set : function(nameAccount, sid) {
			sids[nameAccount + "." + topDomain] = sid
		}
	}
});
BizQQWPA.define("util.titleFlash", "util.taskMgr", function(require) {
	var TITLE_FLASH_GAP = 120;
	var taskMgr = require("taskMgr");
	var doc = document, title = doc.title, task = taskMgr.newTask(function() {
		var t = doc.title;
		doc.title = t.substr(1, t.length) + t.substr(0, 1)
	}, TITLE_FLASH_GAP);
	return titleFlash = {
		on : function(msg) {
			doc.title = msg + ("" + doc.title);
			task.run()
		},
		off : function() {
			task.pause();
			doc.title = title
		}
	}
});
BizQQWPA.define("util.className", function() {
	return {
		addClass : function(node, cname) {
			if (!node || !cname) {
				return node
			}
			if (!node.className) {
				node.className = cname;
				return node
			}
			if (this.hasClass(node, cname)) {
				return node
			}
			node.className += " " + cname;
			return node
		},
		hasClass : function(node, cname) {
			return node && cname ? new RegExp("\\b" + cname + "\\b")
					.test(node.className) : false
		},
		removeClass : function(node, cname) {
			if (!node || !cname) {
				return node
			}
			if (!this.hasClass(node, cname)) {
				return node
			}
			if (node.className) {
				node.className = node.className.replace(cname, "")
			} else {
				node.setAttribute = node.getAttribute("class").replace(cname,
						"")
			}
			return node
		}
	}
});
BizQQWPA.define("util.Style", function() {
	return {
		load : function(name, href, opts) {
			opts = opts || {};
			var context = opts.context || document;
			var style = context.createElement("link");
			style.name = name;
			style.type = "text/css";
			style.setAttribute("rel", "stylesheet");
			style.setAttribute("href", href);
			(function() {
				try {
					var parent = context.getElementsByTagName("head")[0];
					parent.insertBefore(style, parent.firstChild)
				} catch (e) {
					setTimeout(arguments.callee, 1)
				}
			})();
			return style
		},
		add : function(name, cssText, opts) {
			opts = opts || {};
			var context = opts.context || document;
			var style = context.createElement("style");
			style.type = "text/css";
			style.name = name;
			var parent = context.getElementsByTagName("body")[0];
			parent.insertBefore(style, parent.firstChild);
			if (style.styleSheet) {
				style.styleSheet.cssText = cssText
			} else {
				style.appendChild(context.createTextNode(cssText))
			}
			return style
		}
	}
});
BizQQWPA
		.define(
				"util.taskMgr",
				"util.proxy",
				function(require) {
					var TASK_RUN = "run", TASK_PAUSE = "pause", TASK_DROP = "drop", LOOP_TIME = 50;
					var proxy = require("proxy");
					var TM = function() {
						this.circle = [];
						this.pos = 0;
						setInterval(proxy(this, this.loop), 16)
					};
					TM.prototype = {
						newTask : function(fn, gap) {
							var t = new Task(fn, gap);
							this.circle.push(t);
							return t
						},
						once : function(fn, gap) {
							return this.newTask(function() {
								fn.apply(this);
								this.drop()
							}, gap)
						},
						loop : function() {
							var c = this.circle, pos = this.pos, count = c.length, start = +new Date, loopTime = LOOP_TIME, t = c[pos];
							while (count > 0 && +new Date - start < loopTime) {
								if (t.isRunning()) {
									t.execute()
								} else if (t.isDropped()) {
									c.splice(pos, 1);
									pos--
								}
								pos = (pos + 1) % c.length;
								t = c[pos];
								count--
							}
							this.pos = pos
						}
					};
					var Task = function(fn, gap) {
						this.fn = fn;
						this.gap = gap;
						this.status = TASK_PAUSE;
						this.lastExecTime = +new Date
					};
					Task.prototype = {
						run : function() {
							this.status = TASK_RUN;
							return this
						},
						pause : function() {
							this.status = TASK_PAUSE;
							return this
						},
						drop : function() {
							this.status = TASK_DROP;
							return this
						},
						execute : function() {
							if (+new Date - this.lastExecTime < this.gap) {
								return false
							}
							this.fn();
							this.lastExecTime = +new Date;
							return true
						},
						getGap : function() {
							return this.gap
						},
						setGap : function(newGap) {
							this.gap = newGap;
							return this
						},
						isRunning : function() {
							return this.status === TASK_RUN
						},
						isPaused : function() {
							return this.status === TASK_PAUSE
						},
						isDropped : function() {
							return this.status === TASK_DROP
						}
					};
					return new TM
				});