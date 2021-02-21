// interface MyElement {
//   number: number
//   initial: string
//   name: string
// }

// export const AIR: MyElement[] = [
//   { number: 0, initial: 'N₂', name: '窒素' },
//   { number: 0, initial: 'O₂', name: '酸素' },
//   { number: 0, initial: 'Ar', name: 'アルゴン' },
//   { number: 0, initial: 'CO₂', name: '二酸化炭素' },
//   { number: 0, initial: 'Ne', name: 'ネオン' },
//   { number: 0, initial: 'He', name: 'ヘリウム' },
//   { number: 0, initial: 'Kr', name: 'クリプトン' },
//   { number: 0, initial: 'H₂', name: '水素' },
//   { number: 0, initial: 'O₃', name: 'オゾン' },
//   { number: 0, initial: 'I₂', name: 'ヨウ素' },
// ]

// export const METAL: MyElement[] = [
//   { number: 3, initial: 'Li', name: 'リチウム' },
//   { number: 4, initial: 'Be', name: 'ベリリウム' },
//   { number: 11, initial: 'Na', name: 'ナトリウム' },
//   { number: 12, initial: 'Mg', name: 'マグネシウム' },
//   { number: 13, initial: 'Al', name: 'アルミニウム' },
//   { number: 19, initial: 'K', name: 'カリウム' },
//   { number: 20, initial: 'Ca', name: 'カルシウム' },
//   { number: 21, initial: 'Sc', name: 'スカンジウム' },
//   { number: 22, initial: 'Ti', name: 'チタン' },
//   { number: 23, initial: 'V', name: 'バナジウム' },
//   { number: 24, initial: 'Cr', name: 'クロム' },
//   { number: 25, initial: 'Mn', name: 'マンガン' },
//   { number: 26, initial: 'Fe', name: '鉄' },
//   { number: 27, initial: 'Co', name: 'コバルト' },
//   { number: 28, initial: 'Ni', name: 'ニッケル' },
//   { number: 29, initial: 'Cu', name: '銅' },
//   { number: 30, initial: 'Zn', name: '亜鉛' },
//   { number: 31, initial: 'Ga', name: 'ガリウム' },
//   { number: 37, initial: 'Rb', name: 'ルビジウム' },
//   { number: 38, initial: 'Sr', name: 'ストロンチウム' },
//   { number: 39, initial: 'Y', name: 'イットリウム' },
//   { number: 40, initial: 'Zr', name: 'ジルコニウム' },
//   { number: 41, initial: 'Nb', name: 'ニオブ' },
//   { number: 42, initial: 'Mo', name: 'モリブデン' },
//   { number: 43, initial: 'Tc', name: 'テクネチウム' },
//   { number: 44, initial: 'Ru', name: 'ルテニウム' },
//   { number: 45, initial: 'Rh', name: 'ロジウム' },
//   { number: 46, initial: 'Pd', name: 'パラジウム' },
//   { number: 47, initial: 'Ag', name: '銀' },
//   { number: 48, initial: 'Cd', name: 'カドミウム' },
//   { number: 49, initial: 'In', name: 'インジウム' },
//   { number: 50, initial: 'Sn', name: '錫' },
//   { number: 55, initial: 'Cs', name: 'セシウム' },
//   { number: 56, initial: 'Ba', name: 'バリウム' },
//   { number: 72, initial: 'Hf', name: 'ハフニウム' },
//   { number: 73, initial: 'Ta', name: 'タンタル' },
//   { number: 74, initial: 'W', name: 'タングステン' },
//   { number: 75, initial: 'Re', name: 'レニウム' },
//   { number: 76, initial: 'Os', name: 'オスミウム' },
//   { number: 77, initial: 'Ir', name: 'イリジウム' },
//   { number: 78, initial: 'Pt', name: 'プラチナ' },
//   { number: 79, initial: 'Au', name: '金' },
//   { number: 80, initial: 'Hg', name: '水銀' },
//   { number: 81, initial: 'Tl', name: 'タリウム' },
//   { number: 82, initial: 'Pb', name: '鉛' },
//   { number: 83, initial: 'Bi', name: 'ビスマス' },
//   { number: 87, initial: 'Fr', name: 'フランシウム' },
//   { number: 88, initial: 'Ra', name: 'ラジウム' },
//   { number: 104, initial: 'Rf', name: 'ラザホージウム' },
//   { number: 105, initial: 'Db', name: 'ドブニウム' },
//   { number: 106, initial: 'Sg', name: 'シーボーギウム' },
//   { number: 107, initial: 'Bh', name: 'ボーリウム' },
//   { number: 108, initial: 'Hs', name: 'ハッシウム' },
//   { number: 112, initial: 'Cn', name: 'コペルニシウム' },
//   { number: 114, initial: 'Fl', name: 'フレロビウム' },
// ]

// export const rare: MyElement[] = [
//   { number: 57, initial: 'La', name: 'ランタン' },
//   { number: 58, initial: 'Ce', name: 'セシウム' },
//   { number: 59, initial: 'Pr', name: 'プラセオジム' },
//   { number: 60, initial: 'Nd', name: 'ネオジム' },
//   { number: 61, initial: 'Pm', name: 'プロメチウム' },
//   { number: 62, initial: 'Sm', name: 'サマリウム' },
//   { number: 63, initial: 'Eu', name: 'ユーロピウム' },
//   { number: 64, initial: 'Gd', name: 'ガドリニウム' },
//   { number: 65, initial: 'Tb', name: 'テルビウム' },
//   { number: 66, initial: 'Dy', name: 'ジスプロシウム' },
//   { number: 67, initial: 'Ho', name: 'ホルミウム' },
//   { number: 68, initial: 'Er', name: 'エルビウム' },
//   { number: 69, initial: 'Tm', name: 'ツリウム' },
//   { number: 70, initial: 'Yb', name: 'イッテルビウム' },
//   { number: 71, initial: 'Lu', name: 'ルテニウム' },
//   { number: 89, initial: 'Ac', name: 'アクチニウム' },
//   { number: 90, initial: 'Th', name: 'トリウム' },
//   { number: 91, initial: 'Pa', name: 'プロトアクチニウム' },
//   { number: 92, initial: 'U', name: 'ウラン' },
//   { number: 93, initial: 'Np', name: 'ネプツニウム' },
//   { number: 94, initial: 'Pu', name: 'プルトニウム' },
//   { number: 95, initial: 'Am', name: 'アメリシウム' },
//   { number: 96, initial: 'Cm', name: 'キュリウム' },
//   { number: 97, initial: 'Bk', name: 'バークリウム' },
//   { number: 98, initial: 'Cf', name: 'カリフォルニウム' },
//   { number: 99, initial: 'Es', name: 'アインスタニウム' },
//   { number: 100, initial: 'Fm', name: 'フェルミウム' },
//   { number: 101, initial: 'Md', name: 'メンデレビウム' },
//   { number: 102, initial: 'No', name: 'ノーベリウム' },
//   { number: 103, initial: 'Lr', name: 'ローレンシウム' },
// ]

// export const OTHER: MyElement[] = [
//   { number: 1, initial: 'H', name: '水素' },
//   { number: 2, initial: 'He', name: 'ヘリウム' },
//   { number: 5, initial: 'B', name: 'ホウ素' },
//   { number: 6, initial: 'C', name: '炭素' },
//   { number: 7, initial: 'N', name: '窒素' },
//   { number: 8, initial: 'O', name: '酸素' },
//   { number: 9, initial: 'F', name: 'フッ素' },
//   { number: 10, initial: 'Ne', name: 'ネオン' },
//   { number: 14, initial: 'Si', name: 'ケイ素' },
//   { number: 15, initial: 'P', name: 'リン' },
//   { number: 16, initial: 'S', name: '硫黄' },
//   { number: 17, initial: 'Cl', name: '塩素' },
//   { number: 18, initial: 'Ar', name: 'アルゴン' },
//   { number: 32, initial: 'Ge', name: 'ゲルマニウム' },
//   { number: 33, initial: 'As', name: 'ヒ素' },
//   { number: 34, initial: 'Se', name: 'セレン' },
//   { number: 35, initial: 'Br', name: '臭素' },
//   { number: 36, initial: 'Kr', name: 'クリプトン' },
//   { number: 51, initial: 'Sb', name: 'アンチモン' },
//   { number: 52, initial: 'Te', name: 'テルル' },
//   { number: 53, initial: 'I', name: 'ヨウ素' },
//   { number: 54, initial: 'Xe', name: 'キセノン' },
//   { number: 84, initial: 'Po', name: 'ポロニウム' },
//   { number: 85, initial: 'At', name: 'アスタチン' },
//   { number: 86, initial: 'Rn', name: 'ラドン' },
//   { number: 100, initial: 'Mt', name: 'マイトネリウム' },
//   { number: 110, initial: 'Ds', name: 'ジスプロシウム' },
//   { number: 111, initial: 'Rg', name: 'レントゲニウム' },
//   { number: 113, initial: 'Nh', name: 'ニホニウム' },
//   { number: 115, initial: 'Mc', name: 'モスコビウム' },
//   { number: 116, initial: 'Lv', name: 'リバモリウム' },
//   { number: 117, initial: 'Ts', name: 'テネシン' },
//   { number: 118, initial: 'Og', name: 'オガネソン' },
// ]

// export const UND_G: MyElement[] = [
//   { number: 121, initial: 'Ubu', name: 'ウンビウニウム' },
//   { number: 122, initial: 'Ubb', name: 'ウンビビウム' },
//   { number: 123, initial: 'Ubt', name: 'ウンビトリウム' },
//   { number: 124, initial: 'Ubq', name: 'ウンビクアジウム' },
//   { number: 125, initial: 'Ubp', name: 'ウンビペンチウム' },
//   { number: 126, initial: 'Ubh', name: 'ウンビヘキシウム' },
//   { number: 127, initial: 'Ubs', name: 'ウンビセプチウム' },
//   { number: 128, initial: 'Ubo', name: 'ウンビオクチウム' },
//   { number: 129, initial: 'Ube', name: 'ウンビエンニウム' },
//   { number: 130, initial: 'Utn', name: 'ウントリニリウム' },
//   { number: 131, initial: 'Utu', name: 'ウントリウニウム' },
//   { number: 132, initial: 'Utb', name: 'ウントリビウム' },
//   { number: 133, initial: 'Utt', name: 'ウントリトリウム' },
//   { number: 134, initial: 'Utq', name: 'ウントリクアジウム' },
//   { number: 135, initial: 'Utp', name: 'ウントリペンチウム' },
//   { number: 136, initial: 'Uth', name: 'ウントリヘキシウム' },
//   { number: 137, initial: 'Uts', name: 'ウントリセプチウム' },
//   { number: 138, initial: 'Uto', name: 'ウントリオクチウム' },
// ]

// export const UND_F: MyElement[] = [
//   { number: 139, initial: 'Ute', name: 'ウントリエンニウム' },
//   { number: 140, initial: 'Uqn', name: 'ウンクアドニリウム' },
//   { number: 141, initial: 'Uqu', name: 'ウンクアドウニウム' },
//   { number: 142, initial: 'Uqb', name: 'ウンクアドビウム' },
//   { number: 143, initial: 'Uqt', name: 'ウンクアドトリウム' },
//   { number: 144, initial: 'Uqq', name: 'ウンクアドクアジウム' },
//   { number: 145, initial: 'Uqp', name: 'ウンクアドペンチウム' },
//   { number: 146, initial: 'Uqh', name: 'ウンクアドヘキシウム' },
//   { number: 147, initial: 'Uqs', name: 'ウンクアドセプチウム' },
//   { number: 148, initial: 'Uqo', name: 'ウンクアドオクチウム' },
//   { number: 149, initial: 'Uqe', name: 'ウンクアドエンニウム' },
//   { number: 150, initial: 'Upn', name: 'ウンペントニリウム' },
//   { number: 151, initial: 'Upu', name: 'ウンペントウニウム' },
//   { number: 152, initial: 'Upb', name: 'ウンペントビウム' },
// ]

// export const UND_D: MyElement[] = [
//   { number: 153, initial: 'Upt', name: 'ウンペントトリウム' },
//   { number: 154, initial: 'Upq', name: 'ウンペンクアジウム' },
//   { number: 155, initial: 'Upp', name: 'ウンペントペンチウム' },
//   { number: 156, initial: 'Uph', name: 'ウンペントヘキシウム' },
//   { number: 157, initial: 'Ups', name: 'ウンペントセプチウム' },
//   { number: 158, initial: 'Upo', name: 'ウンペントオクチウム' },
//   { number: 159, initial: 'Upe', name: 'ウンペントエンニウム' },
//   { number: 160, initial: 'Uhn', name: 'ウンヘキスニリウム' },
//   { number: 161, initial: 'Uhu', name: 'ウンヘキスウニウム' },
//   { number: 162, initial: 'Uhb', name: 'ウンヘキスビウム' },
// ]

// export const UND_P: MyElement[] = [
//   { number: 163, initial: 'Uht', name: 'ウンヘキストリウム' },
//   { number: 164, initial: 'Uhq', name: 'ウンヘキスクアジウム' },
//   { number: 165, initial: 'Uhp', name: 'ウンヘキスペンチウム' },
//   { number: 165, initial: 'Uhh', name: 'ウンヘキスヘキシウム' },
//   { number: 167, initial: 'Uhs', name: 'ウンヘキスセプチウム' },
//   { number: 168, initial: 'Uho', name: 'ウンヘキスオクチウム' },
// ]

// export const UND_S: MyElement[] = [
//   { number: 119, initial: 'Uue', name: 'ウンウンエンニウム' },
//   { number: 120, initial: 'Ubn', name: 'ウンビニリウム' },
// ]



// function loopSleep(loopLimit: number, interval: number, mainFunc: () => any) {
//   let i = 0
//   function loopFunc() {
//     const result = mainFunc(i);
//     if (result === false) {
//       return;
//     }
//     i = i + 1;
//     if (i < loopLimit) {
//       setTimeout(loopFunc, interval)
//     }
//   }
//   loopFunc();
// }

// function resetGachaResult(gacha) {
//   switch (gacha) {
//     case 'air':
//       document.querySelectorAll('.result-air-item').forEach((e) => e.remove())
//       break
//     case 'element':
//       document
//         .querySelectorAll('.result-element-item')
//         .forEach((e) => e.remove())
//       break
//     case 'und':
//       document.querySelectorAll('.result-und-item').forEach((e) => e.remove())
//       break
//   }
// }

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

// function randomFromList(list) {
//   return list[Math.floor(Math.random() * list.length)]
// }

// // N - ノーマル(30↑~100↓)
// // R - レア(0.1↑~30↓)
// // S - スーパーレア(0.0001↑~0.1↓)
// // SS - ハイパーレア(0.000001↑~0.0001↓)
// // SSS - ハイエストレア(0.000001↓)
// // ↓...以下 ↑...それを含めない以上

// function dropAir(amount) {
//   loopSleep(amount, 10, () => {
//     const n = Math.random() * 100
//     let r = new Element()
//     let rank = ''
//     if (n < 0.000001) {
//       r = air[9]
//       rank = 'SSS'
//     } // 1/10000000
//     else if (n < 0.000007) {
//       r = air[8]
//       rank = 'SS'
//     } // 7/10000000
//     else if (n < 0.00005) {
//       r = air[7]
//       rank = 'SS'
//     } // 1/2000000
//     else if (n < 0.000114) {
//       r = air[6]
//       rank = 'S'
//     } // 57/50000000
//     else if (n < 0.000524) {
//       r = air[5]
//       rank = 'S'
//     } // 131/25000000
//     else if (n < 0.001818) {
//       r = air[4]
//       rank = 'S'
//     } // 909/50000000
//     else if (n < 0.041) {
//       r = air[3]
//       rank = 'S'
//     } // 41/100000
//     else if (n < 0.934) {
//       r = air[2]
//       rank = 'R'
//     } // 467/50000
//     else if (n < 20.9476) {
//       r = air[1]
//       rank = 'R'
//     } // 52369/250000
//     else if (n < 100) {
//       r = air[0]
//       rank = 'N'
//     } // 1/1
//     document
//       .querySelector('.result-air')
//       .insertAdjacentHTML(
//         'afterbegin',
//         "<div class='result-item result-air-item'></div>"
//       )
//     document.querySelector('.result-air-item').textContent =
//       '<' + rank + '> ' + r.initial + ' - ' + r.name
//   })
// }

// function dropElement(amount) {
//   loopSleep(amount, 10, () => {
//     const n = Math.random() * 100
//     let r = new Element()
//     let rank = ''
//     if (n < 0.1) {
//       r = randomFromList(rare)
//       rank = 'S'
//     } // 1/1000
//     else if (n < 5) {
//       r = randomFromList(metal)
//       rank = 'R'
//     } // 1/20
//     else if (n < 100) {
//       r = randomFromList(other)
//       rank = 'N'
//     } // 1/1
//     document
//       .querySelector('.result-element')
//       .insertAdjacentHTML(
//         'afterbegin',
//         "<div class='result-item result-element-item'></div>"
//       )
//     document.querySelector('.result-element-item').textContent =
//       '<' + rank + '> ' + 'No.' + r.number + ' ' + r.initial + ' - ' + r.name
//   })
// }

// function dropUnd(amount) {
//   loopSleep(amount, 10, () => {
//     const n = Math.random() * 100
//     let r = new Element()
//     let rank = ''
//     if (n < 0.0001) {
//       r = randomFromList(und_s)
//       rank = 'SS'
//     } // 1/1000000
//     else if (n < 0.002) {
//       r = randomFromList(und_p)
//       rank = 'S'
//     } // 1/50000
//     else if (n < 20) {
//       r = randomFromList(und_d)
//       rank = 'R'
//     } // 1/5
//     else if (n < 60) {
//       r = randomFromList(und_f)
//       rank = 'N'
//     } // 3/5
//     else if (n < 100) {
//       r = randomFromList(und_g)
//       rank = 'N'
//     } // 1/1
//     document
//       .querySelector('.result-und')
//       .insertAdjacentHTML(
//         'afterbegin',
//         "<div class='result-item result-und-item'></div>"
//       )
//     document.querySelector('.result-und-item').textContent =
//       '<' + rank + '> ' + 'No.' + r.number + ' ' + r.initial + ' - ' + r.name
//   })
// }
