module.exports = function makeExchange(currency) {
   if (currency <= 0) {
      return {};
   }

   if (currency > 10000) {
      return {
         error:
            "You are rich, my friend! We don't have so much coins for exchange"
      };
   }

   const currencies = {
      H: 50,
      Q: 25,
      D: 10,
      N: 5,
      P: 1
   };
   const money = {};

   for (const key in currencies) {
      if (currency >= currencies[key]) {
         const count = Math.floor(currency / currencies[key]);
         money[key] = count;

         currency -= count * currencies[key];
      }
   }

   return money;
};
