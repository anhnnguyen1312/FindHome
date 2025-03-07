<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/userguide3/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
//Authen
$route['register'] = 'AuthenController/register';
$route['login'] = 'AuthenController/login';
$route['user-profile/(:any)'] = 'AuthenController/user_profile/$1';
$route['handle-profile'] = 'AuthenController/handle_profile';
$route['check-email-user'] = 'AuthenController/check_email_user';
$route['reset-password'] = 'AuthenController/reset_password';
$route['delete-user'] = 'AuthenController/delete_user';
$route['list-user'] = 'AuthenController/list_user';

//test postgres
$route['index'] = 'PostController/index';
$route['test'] = 'Test/index';

//Post
$route['create-post'] = 'PostController/create_post';
$route['update-post'] = 'PostController/update_post';
$route['list-all-post'] = 'PostController/list_all_post';
$route['list-homepage-post'] = 'PostController/list_homepage_post';
$route['post-detail/(:any)'] = 'PostController/post_detail/$1';
$route['post-delete/(:any)'] = 'PostController/post_delete/$1';
$route['handle-user-post'] ='PostController/handle_user_post';
$route['handle-like-post'] ='PostController/handle_like_post';
$route['check-like-post'] ='PostController/check_like_post';
$route['list-liked-post/(:any)'] ='PostController/list_liked_post/$1';
//Notifications
$route['admin-notification'] = 'NotificationController/get_admin_notification';
$route['user-notification'] = 'NotificationController/get_user_notification';
$route['admin-mark-read/(:any)'] = 'NotificationController/admin_mark_read/$1';
$route['user-mark-read/(:any)'] = 'NotificationController/user_mark_read/$1';
$route['admin-mark-read'] = 'NotificationController/admin_mark_read';
$route['user-mark-read'] = 'NotificationController/user_mark_read';
//Recommendation
$route['user-action'] = 'RecommendController/user_action';


