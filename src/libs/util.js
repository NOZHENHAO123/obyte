import Cookies from 'js-cookie'
// cookie保存的天数

export const TOKEN_KEY = 'token'

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

/**
 * @param {String} url
 * @description 获取url参数
 */
export const GetUrlParam = paraName => {
  var url = document.location.toString();
  var arrObj = url.split('?');

  if (arrObj.length > 1) {
    var arrPara = arrObj[1].split('&');
    var arr;

    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=');

      if (arr != null && arr[0] == paraName) {
        return arr[1];
      }
    }
    return '';
  } else {
    return '';
  }
}
/**
 * 提醒框
 */
export const Layer = val => {
  let layer = document.getElementById('layer'),
  layerText = document.getElementById('layerText');

  layer.style.display = 'block'
  layerText.innerText = val
  
  setTimeout(function(){
    layer.style.display = 'none'
  },1000)
}

