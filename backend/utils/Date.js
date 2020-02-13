const getHour = () => {

  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`

}

module.exports = getHour
