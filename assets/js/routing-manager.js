function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

const routes = {
    "/admin": {
        template: "../../admin",
        title: "login",
        description: "This is the login page",
    },
    "/dashboard": {
        template: "../../src/pages/dashboard/index.html",
        title: "login",
        description: "This is the login page",
    },
};

async function router(path) {
  const location = window.location.pathname;
  if (location.length == 0){
    path = "/admin";
  }
  let route; 
  if(path in routes){
     route = routes[path];
  }else{
    route = routes['/admin'];
  }

  // var myCookie = getCookie("DataGenieCookie");
  // if (myCookie == null) {
  //   // do cookie doesn't exist stuff;
  //   // window.location.assign("../src/pages/login")
  //   window.location.assign("../../admin");
  //   // window.history.pushState({}, "",'/admin');
  //   // const html = await fetch(routes['/admin'].template).then((res) => res.text());
  //   // document.querySelector(".app").innerHTML = html;
  //   // document.title = route.title;

  // }
  // else {
  //   // do cookie exists stuff
  //   // window.location.assign("../pages/home")
  //   window.history.pushState({}, "",path);
  //   const html = await fetch(route.template).then((res) => res.text());
  //   document.querySelector(".app").innerHTML = html;
  //   document.title = route.title;
  // }
}


async function redirect(){
  var myCookie = getCookie("DataGenieCookie");
  if (myCookie == null) {
    // do cookie doesn't exist stuff;
    // window.location.assign("../src/pages/login")
    window.location.assign("../../admin");
    // window.history.pushState({}, "",'/admin');
    // const html = await fetch(routes['/admin'].template).then((res) => res.text());
    // document.querySelector(".app").innerHTML = html;
    // document.title = route.title;

  }
  else {
    // do cookie exists stuff
    window.location.assign("../pages/home")
    // window.history.pushState({}, "",path);
    // const html = await fetch(route.template).then((res) => res.text());
    // document.querySelector(".app").innerHTML = html;
    // document.title = route.title;
  }

}


