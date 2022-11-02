const axios = require("./axios")

const baseUrl = "https://api.tf2sc.cn"
// const baseUrl = "http://www.wh.com"


//登录
export function login(obj) {
    return axios({
        url: baseUrl + "/login/cellphone",
        ...obj
    })
}
//验证码
export function getBanner(obj) {
    return axios({
        url: baseUrl + "/captcha/sent",
        ...obj
    })
}
//账号密码登录
export function gzhanghao(obj) {
    return axios({
        url: baseUrl + "/login/cellphone",
        ...obj
    })
}


export function yandeng(obj) {
    return axios({
        url: baseUrl + "/captcha/verify",
        ...obj
    })
}
//banner 
export function lunbo(obj) {
    return axios({
        url: baseUrl + "/banner",
        ...obj
    })
}
///personalized?limit=1\
export function tujian(obj) {
  return axios({
      url: baseUrl + "/personalized",
      ...obj
  })
}
//toplist
export function bangdan(obj) {
  return axios({
      url: baseUrl + "/toplist/detail",
      ...obj
  })
}
///artist/list//歌手列表
export function geshou(obj) {
  return axios({
      url: baseUrl + "/artist/list",
      ...obj
  })
}
//user/detail//用户信息
export function yonghu(obj) {
    return axios({
        url: baseUrl + "/user/detail",
        ...obj
    })
  }
  //likelist//喜欢
  export function love(obj) {
    return axios({
        url: baseUrl + "/likelist",
        ...obj
    })
  }
//artists?id: 歌手 id, 可由搜索接口获得
export function geshoudanqu(obj) {
    return axios({
        url: baseUrl + "/artists",
        ...obj
    })
  }
  ///playlist/track/all？歌单id 获取歌单歌曲
  export function gedangequ(obj) {
    return axios({
        url: baseUrl + "/playlist/track/all",
        ...obj
    })
  }
  //cloudsearch ？keywords 搜索
  export function sousuo(obj) {
    return axios({
        url: baseUrl + "/cloudsearch",
        ...obj
    })
  }
//search/hot/detail//热歌榜
export function resou(obj) {
    return axios({
        url: baseUrl + "/search/hot/detail",
        ...obj
    })
  }









  
  ///artists ？id歌手单曲歌曲
  export function gesgouge(obj) {
    return axios({
        url: baseUrl + "/artists/top/song",
        ...obj
    })
  }
  //artist/mv ？id歌手mv
  export function mv(obj) {
    return axios({
        url: baseUrl + "/artist/mv",
        ...obj
    })
  }
  //artist/album //歌手专辑
  //artist/album ？id &limit(默认数量)
  export function zhuanji(obj) {
    return axios({
        url: baseUrl + "/artist/album",
        ...obj
    })
  }
//   /artist/desc ？id 歌手描述 
export function miao(obj) {
    return axios({
        url: baseUrl + "/artist/desc",
        ...obj
    })
  }
  //artist/detail ?id 歌手详情
  export function xiangqing(obj) {
    return axios({
        url: baseUrl + "/artist/detail",
        ...obj
    })
  }
  ///artist/follow/count? id 歌手粉丝
  export function fensi(obj) {
    return axios({
        url: baseUrl + "/artist/follow/count",
        ...obj
    })
  }
  //音乐 /song/url/v1 ?id  level=lossless
  export function yin(obj) {
    return axios({
        url: baseUrl + "/song/url/v1",
        ...obj
    })
  }
  //////song/detail歌曲详情 ids
  export function geq(obj) {
    return axios({
        url: baseUrl + "/song/detail",
        ...obj
    })
  }
  ///mv/url?id=10896407&r=1080 mv
  export function mvshi(obj) {
    return axios({
        url: baseUrl + "/mv/url",
        ...obj
    })
  }
//   //mv/detail/info ？id mv点赞评论数据
export function pls(obj) {
    return axios({
        url: baseUrl + "/mv/detail/info",
        ...obj
    })
  }
 // /comment/mv?id=5436712   limit  mv评论
 export function plun(obj) {
    return axios({
        url: baseUrl + "/comment/mv",
        ...obj
    })
  }
  //logout 退出登录
  export function tui(obj) {
    return axios({
        url: baseUrl + "/logout",
        ...obj
    })
  }