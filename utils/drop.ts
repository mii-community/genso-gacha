// N - ノーマル(30↑~100↓)
// R - レア(0.1↑~30↓)
// S - スーパーレア(0.0001↑~0.1↓)
// SS - ハイパーレア(0.000001↑~0.0001↓)
// SSS - ハイエストレア(0.000001↓)
// ↓...以下 ↑...それを含めない以上

export function dropAir(amount) {
    loopSleep(amount, 10, () => {
      const n = Math.random() * 100
      let r = new Element()
      let rank = ''
      if (n < 0.000001) {
        r = air[9]
        rank = 'SSS'
      } // 1/10000000
      else if (n < 0.000007) {
        r = air[8]
        rank = 'SS'
      } // 7/10000000
      else if (n < 0.00005) {
        r = air[7]
        rank = 'SS'
      } // 1/2000000
      else if (n < 0.000114) {
        r = air[6]
        rank = 'S'
      } // 57/50000000
      else if (n < 0.000524) {
        r = air[5]
        rank = 'S'
      } // 131/25000000
      else if (n < 0.001818) {
        r = air[4]
        rank = 'S'
      } // 909/50000000
      else if (n < 0.041) {
        r = air[3]
        rank = 'S'
      } // 41/100000
      else if (n < 0.934) {
        r = air[2]
        rank = 'R'
      } // 467/50000
      else if (n < 20.9476) {
        r = air[1]
        rank = 'R'
      } // 52369/250000
      else if (n < 100) {
        r = air[0]
        rank = 'N'
      } // 1/1
      document
        .querySelector('.result-air')
        .insertAdjacentHTML(
          'afterbegin',
          "<div class='result-item result-air-item'></div>"
        )
      document.querySelector('.result-air-item').textContent =
        '<' + rank + '> ' + r.initial + ' - ' + r.name
    })
  }

export function dropElement(amount) {
    loopSleep(amount, 10, () => {
      const n = Math.random() * 100
      let r = new Element()
      let rank = ''
      if (n < 0.1) {
        r = randomFromList(rare)
        rank = 'S'
      } // 1/1000
      else if (n < 5) {
        r = randomFromList(metal)
        rank = 'R'
      } // 1/20
      else if (n < 100) {
        r = randomFromList(other)
        rank = 'N'
      } // 1/1
      document
        .querySelector('.result-element')
        .insertAdjacentHTML(
          'afterbegin',
          "<div class='result-item result-element-item'></div>"
        )
      document.querySelector('.result-element-item').textContent =
        '<' + rank + '> ' + 'No.' + r.number + ' ' + r.initial + ' - ' + r.name
    })
  }

 export function dropUnd(amount) {
    loopSleep(amount, 10, () => {
      const n = Math.random() * 100
      let r = new Element()
      let rank = ''
      if (n < 0.0001) {
        r = randomFromList(und_s)
        rank = 'SS'
      } // 1/1000000
      else if (n < 0.002) {
        r = randomFromList(und_p)
        rank = 'S'
      } // 1/50000
      else if (n < 20) {
        r = randomFromList(und_d)
        rank = 'R'
      } // 1/5
      else if (n < 60) {
        r = randomFromList(und_f)
        rank = 'N'
      } // 3/5
      else if (n < 100) {
        r = randomFromList(und_g)
        rank = 'N'
      } // 1/1
      document
        .querySelector('.result-und')
        .insertAdjacentHTML(
          'afterbegin',
          "<div class='result-item result-und-item'></div>"
        )
      document.querySelector('.result-und-item').textContent =
        '<' + rank + '> ' + 'No.' + r.number + ' ' + r.initial + ' - ' + r.name
    })
  }
