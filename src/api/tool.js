/*
 设置cookie
 参数:name=value;expires,path,domain,secure 
     expires传入对应的天数;{expires:8} 8天后过期
 */
function setCookie(name, value, { expires, path, domain, secure }) {
    //键值对有中文时，转换成对应的编码
    let strCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
    if (expires) {
        strCookie += `;expires:${Dated(expires)}`
    }
    if (path) {
        strCookie += `;path:${path}`
    }
    if (domain) {
        strCookie += `;domain:${domain}`
    }
    if (secure) {
        strCookie += `;secure:${secure}`
    }

    document.cookie = strCookie

    /*
        计算多少天以后
        参数：d 多少天以后
    */
    function Dated(d) {
        let nowDate = new Date()
        let addDate = new Date() //日期相加
        return addDate.setDate(nowDate.getDate() + d)
    }

}



/*
    获得cookie
    输入需要获得的cookie键名
    返回键值对
*/
function getCookie(name) {
    let strCookie = decodeURIComponent(document.cookie)
    let start = strCookie.indexOf(name + '=')
    if (start == -1) {
        //不存在
        return null
    } else {

        //存在从start的位置查找第一个;号
        let end = strCookie.indexOf(';', start)
        if (end == -1) {
            //未找到
            end = strCookie.length
        }
        return strCookie.substring(start, end)
    }
}

/*
    删除cookie
    传入name（键）删除
*/
function removeCookie(name) {
    document.cookie = encodeURIComponent(name) + '=;expires=' + new Date(0)
}


