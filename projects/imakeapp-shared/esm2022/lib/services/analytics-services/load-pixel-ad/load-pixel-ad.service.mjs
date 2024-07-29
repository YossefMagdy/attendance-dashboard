import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LoadPixelAdService {
    constructor() { }
    InitTiktokPixel(TiktokPixelId) {
        const node = document.createElement('script');
        // console.log(TiktokPixel);
        const script = `
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
      ttq.load('${TiktokPixelId}');
      ttq.page();
    }(window, document, 'ttq');`;
        node.async = true;
        node.defer = true;
        node.innerHTML = script;
        document.head.appendChild(node);
    }
    InitGoogleAnalytics(GoogleAnalyticsId) {
        const node1 = document.createElement('script');
        node1.async = true;
        node1.src = `https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsId}`;
        const node2 = document.createElement('script');
        node2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GoogleAnalyticsId}');`;
        document.head.appendChild(node1);
        document.head.appendChild(node2);
    }
    InitFacebookPixel(facebookId) {
        const node1 = document.createElement('script');
        const script = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${facebookId}');
    fbq('track', 'PageView');;`;
        const node2 = document.createElement('noscript');
        const script2 = `
    <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=${facebookId}&ev=PageView&noscript=1"
     />
    `;
        node1.innerHTML = script;
        document.head.appendChild(node1);
        node2.innerHTML = script;
        document.head.appendChild(node2);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LoadPixelAdService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LoadPixelAdService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LoadPixelAdService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1waXhlbC1hZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaW1ha2VhcHAtc2hhcmVkL3NyYy9saWIvc2VydmljZXMvYW5hbHl0aWNzLXNlcnZpY2VzL2xvYWQtcGl4ZWwtYWQvbG9hZC1waXhlbC1hZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTNDLE1BQU0sT0FBTyxrQkFBa0I7SUFHN0IsZ0JBQWUsQ0FBQztJQUVoQixlQUFlLENBQUMsYUFBa0I7UUFHaEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5Qyw0QkFBNEI7UUFDNUIsTUFBTSxNQUFNLEdBQUc7OztrQkFHRCxhQUFhOztnQ0FFQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBRXhCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHRCxtQkFBbUIsQ0FBQyxpQkFBc0I7UUFFeEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixLQUFLLENBQUMsR0FBRyxHQUFHLCtDQUErQyxpQkFBaUIsRUFBRSxDQUFDO1FBRS9FLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLFNBQVMsR0FBRzs7OztzQkFJQSxpQkFBaUIsS0FBSyxDQUFDO1FBRXpDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5DLENBQUM7SUFHRCxpQkFBaUIsQ0FBQyxVQUFlO1FBRy9CLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsTUFBTSxNQUFNLEdBQUc7Ozs7Ozs7OzttQkFTQSxVQUFVOytCQUNFLENBQUM7UUFFNUIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxNQUFNLE9BQU8sR0FBRzs7OENBRTBCLFVBQVU7O0tBRW5ELENBQUM7UUFFRixLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVuQyxDQUFDO3VHQXpFVSxrQkFBa0I7MkdBQWxCLGtCQUFrQixjQUZqQixNQUFNOzsyRkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZFBpeGVsQWRTZXJ2aWNlIFxue1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBJbml0VGlrdG9rUGl4ZWwoVGlrdG9rUGl4ZWxJZDogYW55KSBcbiAge1xuXG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgLy8gY29uc29sZS5sb2coVGlrdG9rUGl4ZWwpO1xuICAgIGNvbnN0IHNjcmlwdCA9IGBcbiAgICAhZnVuY3Rpb24gKHcsIGQsIHQpIHtcbiAgICAgIHcuVGlrdG9rQW5hbHl0aWNzT2JqZWN0PXQ7dmFyIHR0cT13W3RdPXdbdF18fFtdO3R0cS5tZXRob2RzPVtcInBhZ2VcIixcInRyYWNrXCIsXCJpZGVudGlmeVwiLFwiaW5zdGFuY2VzXCIsXCJkZWJ1Z1wiLFwib25cIixcIm9mZlwiLFwib25jZVwiLFwicmVhZHlcIixcImFsaWFzXCIsXCJncm91cFwiLFwiZW5hYmxlQ29va2llXCIsXCJkaXNhYmxlQ29va2llXCJdLHR0cS5zZXRBbmREZWZlcj1mdW5jdGlvbih0LGUpe3RbZV09ZnVuY3Rpb24oKXt0LnB1c2goW2VdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMCkpKX19O2Zvcih2YXIgaT0wO2k8dHRxLm1ldGhvZHMubGVuZ3RoO2krKyl0dHEuc2V0QW5kRGVmZXIodHRxLHR0cS5tZXRob2RzW2ldKTt0dHEuaW5zdGFuY2U9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXR0cS5faVt0XXx8W10sbj0wO248dHRxLm1ldGhvZHMubGVuZ3RoO24rKyl0dHEuc2V0QW5kRGVmZXIoZSx0dHEubWV0aG9kc1tuXSk7cmV0dXJuIGV9LHR0cS5sb2FkPWZ1bmN0aW9uKGUsbil7dmFyIGk9XCJodHRwczovL2FuYWx5dGljcy50aWt0b2suY29tL2kxOG4vcGl4ZWwvZXZlbnRzLmpzXCI7dHRxLl9pPXR0cS5faXx8e30sdHRxLl9pW2VdPVtdLHR0cS5faVtlXS5fdT1pLHR0cS5fdD10dHEuX3R8fHt9LHR0cS5fdFtlXT0rbmV3IERhdGUsdHRxLl9vPXR0cS5fb3x8e30sdHRxLl9vW2VdPW58fHt9O3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7by50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIsby5hc3luYz0hMCxvLnNyYz1pK1wiP3Nka2lkPVwiK2UrXCImbGliPVwiK3Q7dmFyIGE9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07YS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvLGEpfTtcbiAgICAgIHR0cS5sb2FkKCcke1Rpa3Rva1BpeGVsSWR9Jyk7XG4gICAgICB0dHEucGFnZSgpO1xuICAgIH0od2luZG93LCBkb2N1bWVudCwgJ3R0cScpO2A7XG5cbiAgICBub2RlLmFzeW5jID0gdHJ1ZTtcbiAgICBub2RlLmRlZmVyID0gdHJ1ZTtcbiAgICBub2RlLmlubmVySFRNTCA9IHNjcmlwdDtcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH1cblxuXG4gIEluaXRHb29nbGVBbmFseXRpY3MoR29vZ2xlQW5hbHl0aWNzSWQ6IGFueSkgXG4gIHtcbiAgICBjb25zdCBub2RlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIG5vZGUxLmFzeW5jID0gdHJ1ZTtcbiAgICBub2RlMS5zcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke0dvb2dsZUFuYWx5dGljc0lkfWA7XG5cbiAgICBjb25zdCBub2RlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIG5vZGUyLmlubmVySFRNTCA9IGBcbiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICBndGFnKCdjb25maWcnLCAnJHtHb29nbGVBbmFseXRpY3NJZH0nKTtgO1xuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlMSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlMik7XG5cbiAgfVxuXG5cbiAgSW5pdEZhY2Vib29rUGl4ZWwoZmFjZWJvb2tJZDogYW55KSBcbiAge1xuXG4gICAgY29uc3Qgbm9kZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBjb25zdCBzY3JpcHQgPSBgXG4gICAgIWZ1bmN0aW9uKGYsYixlLHYsbix0LHMpXG4gICAge2lmKGYuZmJxKXJldHVybjtuPWYuZmJxPWZ1bmN0aW9uKCl7bi5jYWxsTWV0aG9kP1xuICAgIG4uY2FsbE1ldGhvZC5hcHBseShuLGFyZ3VtZW50cyk6bi5xdWV1ZS5wdXNoKGFyZ3VtZW50cyl9O1xuICAgIGlmKCFmLl9mYnEpZi5fZmJxPW47bi5wdXNoPW47bi5sb2FkZWQ9ITA7bi52ZXJzaW9uPScyLjAnO1xuICAgIG4ucXVldWU9W107dD1iLmNyZWF0ZUVsZW1lbnQoZSk7dC5hc3luYz0hMDtcbiAgICB0LnNyYz12O3M9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShlKVswXTtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQscyl9KHdpbmRvdywgZG9jdW1lbnQsJ3NjcmlwdCcsXG4gICAgJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvZmJldmVudHMuanMnKTtcbiAgICBmYnEoJ2luaXQnLCAnJHtmYWNlYm9va0lkfScpO1xuICAgIGZicSgndHJhY2snLCAnUGFnZVZpZXcnKTs7YDtcblxuICAgIGNvbnN0IG5vZGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbm9zY3JpcHQnKTtcbiAgICBjb25zdCBzY3JpcHQyID0gYFxuICAgIDxpbWcgaGVpZ2h0PVwiMVwiIHdpZHRoPVwiMVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3RyP2lkPSR7ZmFjZWJvb2tJZH0mZXY9UGFnZVZpZXcmbm9zY3JpcHQ9MVwiXG4gICAgIC8+XG4gICAgYDtcbiAgICBcbiAgICBub2RlMS5pbm5lckhUTUwgPSBzY3JpcHQ7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlMSk7XG4gICAgbm9kZTIuaW5uZXJIVE1MID0gc2NyaXB0O1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZTIpO1xuXG4gIH1cblxuXG5cbn1cbiJdfQ==