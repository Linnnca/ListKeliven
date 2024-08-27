const grandeNumero1 = 9007199254740991n;
const grandeNumero2 = 2n ** 53n;
if (grandeNumero1 > grandeNumero2) {
  console.log(grandeNumero1, "é maior que", grandeNumero2);
} else if (grandeNumero2 > grandeNumero1) {
  console.log(grandeNumero2, "é maior que", grandeNumero1);
} else {
  console.log(grandeNumero1, "e", grandeNumero2, "são iguais");
}