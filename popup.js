let changeColor = document.getElementById('changeColor')

chrome.storage.sync.get('color', function (data) {
  changecolor.style.backgroundColor = data.color
  changeColor.setAttribute('value', data.color)
})
