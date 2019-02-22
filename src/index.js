// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   if (currency <= 0) {
      return {};
   }

   if (currency > 10000) {
      return { error: "You are rich, my friend! We don't have so much coins for exchange" };
   }

   const money = {};
   const coinsName = ["H", "Q", "D", "N", "P"];
   const coinsWorth = [50, 25, 10, 5, 1];

   for (let index = 0; index < coinsWorth.length; index++) {
      if (currency < coinsWorth[index]) {
         continue;
      }

      const count = Math.floor(currency / coinsWorth[index]);
      currency -= count * coinsWorth[index];

      money[coinsName[index]] = count;

      // Object.defineProperty(money, coinsName[index], { value: count });
   }

   return money;
}
