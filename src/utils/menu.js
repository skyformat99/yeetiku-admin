const prefix = 'admin/'
module.exports = [
    {
      key: prefix + 'dashboard',
      name: 'Dashboard',
      icon: 'home',
    },
    {
      key: prefix + 'users',
      name: '用户管理',
      icon: 'user',
    },
    {
      key: prefix +  'groups',
      name: '组管理',
      icon: 'usergroup-add',
    },
    {
      key: prefix + 'tags',
      name: '标签管理',
      icon: 'tags',
    },
    {
      key: prefix + 'questions',
      name: '题目管理',
      icon: 'bars',
    },
    {
      key: prefix + 'banks',
      name: '题库管理',
      icon: 'database',
    },
    {
      key: prefix + 'client',
      name: '客户端设置',
      icon: 'tablet',
    },
]
