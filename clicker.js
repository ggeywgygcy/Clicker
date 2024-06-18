const inputEl = document.getElementById('exampleInputEmail1')
const clickBtn = document.getElementById('btn')
const vivEl = document.getElementById('viv')

clickBtn.onclick = function(res){
     res = inputEl.value + 1
     vivEl.textContent = res
}
