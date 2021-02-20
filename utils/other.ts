export function loopSleep(
    loopLimit: number,
    interval: number,
    mainFunc: (t: number) => any
  ) {
    let i = 0
    function loopFunc() {
      const result = mainFunc(i)
      if (result === false) {
        return
      }
      i = i + 1
      if (i < loopLimit) {
        setTimeout(loopFunc, interval)
      }
    }
    loopFunc()
  } // なにこれ


  // function openAir() {
  //   document.querySelector('.air-gacha-screen')!.classList.toggle('hide')
  // }

  // function openElement() {
  //   document.querySelector('.element-gacha-screen')!.classList.toggle('hide')
  // }

  // function openUnd() {
  //   document.querySelector('.und-gacha-screen')!.classList.toggle('hide')
  // }

  // function openProb() {
  //   document.querySelector('.prob-screen')!.classList.toggle('hide')
  // }

//   ↑こいつらは vue で制御できる。

  export function randomFromList(list) {
    return list[Math.floor(Math.random() * list.length)]
  }　// なにこれ
