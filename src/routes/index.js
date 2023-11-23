export const navList = [
  {
    key: 'home',
    title: '首页',
    children: []
  },
  {
    key: 'article',
    title: '文章管理',
    children: [
      {
        key: 'article-list',
        sub_title: '文章列表',
        path: '/article/list'
      },
      {
        key: 'article-create',
        sub_title: '文章创建',
        path: '/article/create'
      }
    ]
  },
  {
    key: 'category',
    title: '分类管理',
    children: [
      {
        key: 'category-list',
        sub_title: '分类列表',
        path: '/category/list'
      },
      {
        key: 'category-create',
        sub_title: '分类创建',
        path: '/category/create'
      }
    ]
  },
  {
    key: 'user',
    title: '用户管理',
    children: [
      {
        key: 'user-list',
        sub_title: '用户列表',
        path: '/user/list'
      }
    ]
  },
  {
    key: 'comments',
    title: '评论管理',
    children: [
      {
        key: 'comments-list',
        sub_title: '评论列表',
        path: '/comments/list'
      }
    ]
  },
  {
    key: 'reply',
    title: '回复管理',
    children: [
      {
        key: 'reply-list',
        sub_title: '回复列表',
        path: '/reply/list'
      }
    ]
  },
  {
    key: 'labelInfo',
    title: '标签管理',
    children: [
      {
        key: 'labelInfo-list',
        sub_title: '标签列表',
        path: '/labelInfo/list'
      },
      {
        key: 'labelInfo-create',
        sub_title: '标签创建',
        path: '/labelInfo/create'
      }
    ]
  },{
    key: 'chatGPT',
    title: '机器人',
    children: [
      {
        key: 'chat-with-robot',
        sub_title: '聊天',
        path: '/chat_gpt/create'
      }
    ]
  }
]
