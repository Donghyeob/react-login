const exdate = new Date()

export const setCookies = (target, value) => {
  exdate.setDate(exdate.getDate() + 30)
  document.cookie = target.toString() + '=' + value + ';path=/;expires=' + exdate.toGMTString()
}

export const getCookies = (target) => {
  const cookieSplit = document.cookie.split(';')
  if (document.cookie) {
    const targetIndex = cookieSplit.map((e) => (
      e.indexOf(target)
    ))
    const targetValue = cookieSplit[targetIndex].slice(cookieSplit[targetIndex].indexOf('=') + 1)
    return targetValue
  }
}

export const deleteCookies = (target) => {
  exdate.setDate(exdate.getDate() - 1)
  document.cookie = target.toString() + '= ;path=/;expires=' + exdate.toGMTString()
}