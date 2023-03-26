/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx551095c6c43bc51e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c788c3576c567ba5c4c71159fdba39fc',

  //推送多个用户时，可将地址写入USERS列表中
  //PROVINCE: '四川',
  //CITY: '成都',

  USERS: [
    
    {
      // 想要发送的人的名字
      name: 'Wendy',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oHVV_6UrhnFSdStmzBoemIAXlfqI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 	'cB6vaDHJiamwApU6FCP5Gz7NF6P7pASlN1c2KZjyIZs',
      // 所在省份或城市，也可以不填
      province: '四川',
      // 所在城市或县区
      city: '成都',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-02',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '',
      festivals: [
        /* 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        */
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        /*
        {
          type: '生日', name: 'Wendy法定', year: '2006', date: '07-18',
        },
        */
        {
          type: '生日', name: 'Wendy', year: '2006', date: '09-02',
        },
        /*
        {
          type: '节日', name: '647号宇宙的诞生', year: '2023', date: '01-01',
        },
        */
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        // { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
        // 来到647号宇宙的日子
        // { keyword: 'coming_day', date: '2023-01-01'}
      ],
    },
    
    {
      name: '自己',
      id: 'oHVV_6R1rm-Eh9mdo2NuEPyLU3xU',
      useTemplateId: 'cB6vaDHJiamwApU6FCP5Gz7NF6P7pASlN1c2KZjyIZs',
      province: '四川',
      city: '成都',
      horoscopeDate: '09-02',
      horoscopeDateType: '',
      festivals: [
        /* 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        */
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        /*
        {
          type: '生日', name: 'Wendy法定', year: '2006', date: '07-18',
        },
        */
        {
          type: '生日', name: 'Wendy', year: '2006', date: '09-02',
        },
        /*
        {
          type: '节日', name: '647号宇宙的诞生', year: '2023', date: '01-01',
        },
        */
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        // { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
        // 来到647号宇宙的日子
        // { keyword: 'coming_day', date: '2023-01-01'}
      ],
    }
    
  ],
  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],
  
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        //'take it easy',
        '高考很顺哦',
        'Miss雷真个天才',
        //'早上好，Wendy，如果以后不能遇见你，提前祝你早安，午安，晚安',
        '拿起你的宝丽来多拍拍生活的美好',
        '你又瘦了,马甲线更明显了',
        //'已知函数f(x)=ax^3-3x^2+1，如果f(x)存在唯一零点x0，且x0>0，则实数a的取值范围是()A(1，+∞)B(2，+∞)C(-∞，-1)D(-∞，-2)',
        '走向成功的那天，都是普通到忘记的。只是一个寂静的清晨、寥落的街道，心里有几分孤独和充实，然后故事就开始了',
        '你已经做得很好了',
        '给你点一首歌，《Promise》',
        '高考上上签'
      ],
    }
    // 你可以不断按格式往下增加
    // ...
  ],
}

module.exports = USER_CONFIG

