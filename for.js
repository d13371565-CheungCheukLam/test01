let atk_hero = 40;
let hp_hero = 200;

let atk_slimeking = 30;
let hp_slimeking = 500;

document.write(`勇者與史萊姆王開始對打啦!!<br>`);

for (let i = 1; i <= 10; i++) {
  document.write(`第${i}回合`);
  hp_hero -= atk_slimeking;
  hp_slimeking -= atk_hero;

  document.write(`勇者剩下${hp_hero}血量，史萊姆王剩下${hp_slimeking}血量<br>`);
}

document.write("對決結束!!");