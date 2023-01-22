<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-195905320-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'UA-195905320-1');
</script>
<!-- Zendesk Widget script -->
<script id="ze-snippet" defer async
src="https://static.zdassets.com/ekr/snippet.js?key=612667e2-9f57-401c-8f3b-44f88e93eff6"></script>
<script type="text/javascript">
    window.zESettings = {
        webWidget: {
            zIndex: 49,
            offset: {
                horizontal: '-15px',
                vertical: '0px',
                mobile: {
                    horizontal: '-15px',
                    vertical: '0px'
                }
            }
        }
    };
</script>
<!-- TikTok Marketing -->
<script>
    ! function(w, d, t) {
        w.TiktokAnalyticsObject = t;
        var ttq = w[t] = w[t] || [];
        ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias",
            "group", "enableCookie", "disableCookie"
        ], ttq.setAndDefer = function(t, e) {
            t[e] = function() {
                t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
            }
        };
        for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
        ttq.instance = function(t) {
            for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
            return e
        }, ttq.load = function(e, n) {
            var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
            ttq.i = ttq.i || {}, ttq.i[e] = [], ttq.i[e].u = i, ttq.t = ttq.t || {}, ttq.t[e] = +new Date,
                ttq.o = ttq.o || {}, ttq.o[e] = n || {};
            var o = document.createElement("script");
            o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t;
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(o, a)
        };

        ttq.load('C5CV53NGE0M3SF4IB0E0');
        ttq.page();
    }(window, document, 'ttq');
</script>
<!-- Stripe CSS -->
<style>
    #app {
        height: 100%;
    }

    .StripeElement {
        border: 1px solid #A0AEC0;
        border-radius: 12px;
        padding: 12px 16px;
        transition: all 0.2s;
    }

    .StripeElement--focus {
        border-color: #60bdde;
        box-shadow: 0 0 0 1px #60bdde;
    }

    .StripeElement--invalid {
        border-color: #ff7559;
        box-shadow: 0 0 0 1px #ff7559;
    }
</style>
