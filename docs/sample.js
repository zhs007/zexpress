// 项目名
name = 'SlotsAdmin';

// port
port = 3600;

// 项目标题
title = '管理后台';

// 数据库配置
dbSlots = {host: '127.0.0.1', user: 'slots', password: 'slots123', database: 'slots3'};
dbGamelog = {host: '127.0.0.1', user: 'slots', password: 'slots123', database: 'slots3'};
dbmgr = {slots3: dbSlots, gamelog: dbGamelog};

// 路由配置
routerIndex = {name: 'Index', url: '/', urlroot: '/', http: 'GET', type: 'simple', needlogin: 'true'};
routerLogin = {name: 'Login', url: '/', urlroot: '/login', http: 'GET', type: 'simple', needlogin: 'true'};

acLogin = {name: 'Login', reqparam: ['name', 'password']};
acLogout = {name: 'Logout'};
routerAdminCtrl = {name: 'AdminCtrl', url: '/', urlroot: '/adminctrl', type: 'ctrl', lstctrl: [
    acLogin,
    acLogout
]};

mcAddChild = {name: 'AddChild', reqparam: ['name', 'password', 'adminkey', 'gems']};
mcChgPassword = {name: 'ChgPassword', reqparam: ['pid', 'password']};
mcCleanChild = {name: 'CleanChild', reqparam: ['pid']};
mcCleanPlayer = {name: 'CleanPlayer', reqparam: ['pid', 'childid']};
mcCleanRoom = {name: 'CleanRoom', reqparam: ['roomid']};
mcProcExchg = {name: 'ProcExchg', reqparam: ['exchgid', 'proc']};
mcResetRoom = {name: 'ResetRoom', reqparam: ['roomid']};
mcUpdChild = {name: 'UpdChild', reqparam: ['pid', 'password', 'adminkey', 'gems']};
mcUpdNotice = {name: 'UpdNotice', reqparam: ['notice']};
mcUpdRoom = {name: 'UpdRoom', reqparam: ['roomid', 'minper', 'maxper', 'playerminper', 'playermaxper']};
mcUpdRoomEx = {name: 'UpdRoomEx', reqparam: ['roomid', 'curdiff']};
routerMainCtrl = {name: 'MainCtrl', url: '/', urlroot: '/mainctrl', type: 'ctrl', lstctrl: [
    mcAddChild,
    mcChgPassword,
    mcCleanChild,
    mcCleanPlayer,
    mcCleanRoom,
    mcProcExchg,
    mcResetRoom,
    mcUpdChild,
    mcUpdNotice,
    mcUpdRoom,
    mcUpdRoomEx
]};

modEdtChild = {name: 'EdtChild'};
modEdtRoom = {name: 'EdtRoom'};
modEdtRoomEx = {name: 'EdtRoomEx'};
modLeftMenu = {name: 'LeftMenu'};
modSysNotice = {name: 'SysNotice'};
modTotal = {name: 'Total'};
modViewChild = {name: 'ViewChild'};
modViewExchg = {name: 'ViewExchg'};
modViewPlayer = {name: 'ViewPlayer'};
modViewRoom = {name: 'ViewRoom'};
routerMain = {name: 'Main', url: ['/', '/:leftmenu/'], urlroot: '/main', type: 'module', needlogin: 'true', lstmodule: [
    modEdtChild,
    modEdtRoom,
    modEdtRoomEx,
    modLeftMenu,
    modSysNotice,
    modTotal,
    modViewChild,
    modViewExchg,
    modViewPlayer,
    modViewRoom
]};

router = [routerIndex, routerAdminCtrl, routerMainCtrl, routerLogin, routerMain];

// 导出
projparam = {
    projname: name,
    port: port,
    title: title,
    dbmgr: dbmgr,
    router: router
};