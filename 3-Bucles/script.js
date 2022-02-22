"use strict";

let i = 8;
let fecha = new Date();
const dia = new Date(2022, 1, 22);

if (
  fecha.getFullYear() === dia.getFullYear() &&
  fecha.getMonth() === dia.getMonth() &&
  fecha.getDate() === dia.getDate()
) {
  for (i = 8; i < 22; i++) {
    console.log(`Son las ${i} horas.`);
  }
}
