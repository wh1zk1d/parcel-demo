export default function (content: string) {
  const el = document.createElement('div')
  el.innerText = content
  el.classList.add('bio-box')
  document.querySelector('#app')?.insertAdjacentElement('beforeend', el)
}
