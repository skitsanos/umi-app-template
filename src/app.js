export function onRouteChange({location, routes, action})
{
    //bacon(location.pathname);
    console.log(location.pathname);
}

export function patchRoutes({routes})
{
    //example on how to implement redirect at run time
    routes.unshift({
        path: '/dashboard',
        exact: true,
        redirect: '/'
    });
}