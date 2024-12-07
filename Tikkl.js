// Write a function that computes the total revenue from ticket sales. The function should take 2 parameters – (1) an object with keys for the ticket types and values for the ticket price in cents, and (2) an array of sales objects.

// function computeTotalRevenue(sales, pricing) {
//     let totalRevenue = 0;

//     sales.forEach(sale => {
//         const ticketType = sale.type;
//         const ticketsSold = sale.sold;

//         if (pricing[ticketType] !== undefined) {
//             totalRevenue += pricing[ticketType] * ticketsSold;
//         }
//     });

//     return totalRevenue;
// }

// const pricing = { vip: 100, regular: 80, balcony: 50 };
// const sales = [ { type: 'vip', sold: 53 }, { type: 'regular', sold: 87 }];

// const revenue = computeTotalRevenue(sales, pricing);
// console.log(revenue); 




// Write a function to sell tickets that updates the ticket inventory and status. The function should take 3 parameters – (1) ticket type to sell, (2) number of tickets to sell and (3) the ticket inventory table.

// It should return true if the sale is possible and false otherwise.
// when sale is possible, it should update the sold count.
// it should also update the status such that the status is 'sold-out' when there no seats left, 'few-left' when there are less than 10 left, and 'available' otherwise.


// function sellTickets(ticketType, numberToSell, inventory) {
//     const ticket = inventory.find(item => item.ticketType === ticketType);

//     if (ticket && ticket.count - ticket.sold >= numberToSell) {
//         ticket.sold += numberToSell;

//         const remaining = ticket.count - ticket.sold;
//         if (remaining === 0) {
//             ticket.status = 'sold-out';
//         } else if (remaining < 10) {
//             ticket.status = 'few-left';
//         } else {
//             ticket.status = 'available';
//         }

//         return true;
//     }

//     return false;
// }

// const ticketInventory = [
//     { ticketType: 'vip', price: 100, count: 50, sold: 25, status: 'available' },
//     { ticketType: 'general', price: 60, count: 120, sold: 33, status: 'available' }
// ];

// const saleSuccessful = sellTickets('vip', 5, ticketInventory);
// console.log(saleSuccessful); 
// console.log(ticketInventory); 



// Write a function to allocate a contiguous set of seats. The seat availability map is an array of blocks of contiguous seats. The example below shows a sample availability map. The row A is split into 2 blocks 1-7 and 8-14. The availability status of each seat is either true (available) or false (allocated). Note: The number of seats in each block may be different.

// The method should take 2 parameters: (1) the number of contiguous seats to allocate, and (2) a seatAvailabilityMap. It should attempt to allocate by looking from the first block to the last block. When a set is found the corresponding seat numbers should be returned, and the availability map should be updated to mark the allocated seats. When no seats can be allocated, the method should return an empty array.




// function allocateSeats(numSeats, seatAvailabilityMap) {
//     for (let block of seatAvailabilityMap) {
//         let contiguousSeats = [];
        
//         for (let seat of block) {
//             const seatKey = Object.keys(seat)[0];
//             const isAvailable = seat[seatKey];

//             if (isAvailable) {
//                 contiguousSeats.push(seatKey);
//                 if (contiguousSeats.length === numSeats) {
//                     for (let i = 0; i < numSeats; i++) {
//                         seat[contiguousSeats[i]] = false; 
//                     }
//                     return contiguousSeats; 
//                 }
//             } else {
            
//                 contiguousSeats = [];
//             }
//         }
//     }

//     return []; 
// }

// const seatAvailabilityMap = [
//     [ { 'a1': true }, { 'a2': true }, { 'a3': false }, { 'a4': true }, { 'a5': true }, { 'a6': true }, { 'a7': true } ],
//     [ { 'a8': true }, { 'a9': true }, { 'a10': true }, { 'a11': false }, { 'a12': true }, { 'a13': true }, { 'a14': false } ],
//     [ { 'b1': true }, { 'b2': true }, { 'b3': true }, { 'b4': true }, { 'b5': true }, { 'b6': true }, { 'b7': true }, { 'b8': true }, { 'b9': true }, { 'b10': true } ]
// ];

// const allocatedSeats = allocateSeats(3, seatAvailabilityMap);
// console.log(allocatedSeats); 
// console.log(seatAvailabilityMap); 







// Write an asynchronous method that collects "n" available coupon codes from an asynch coupon generator. The coupon generator returns a Promise that resolves to an available/unavailable coupon. Each coupon object has 2 properties: (1) code -- the coupon code and (2) available -- is true when the coupon is available and false otherwise.
// Below is a copy of the generator that you can copy to test your implementation of collectCoupons. The collectCoupons method will take one parameter for the number of coupons to collect. It should return a promise that resolves to an array of n coupon codes.

// function couponGenerator() {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => {
//          const coupon = {
//            code:      require("node:crypto").randomBytes(8).toString('hex'),
//            available: Math.random() > 0.7
//          };
//          resolve(coupon);
//       },
//       50
//     );
//   });
// }


// function couponGenerator() {
//     return new Promise((resolve, reject) => {
//       setTimeout(
//         () => {
//            const coupon = {
//              code:      require("node:crypto").randomBytes(8).toString('hex'),
//              available: Math.random() > 0.7
//            };
//            resolve(coupon);
//         },
//         50
//       );
//     });
//   }

// async function collectCoupons(n) {
//     const availableCoupons = [];

//     while (availableCoupons.length < n) {
//         const coupon = await couponGenerator();

//         if (coupon.available) {
//             availableCoupons.push(coupon.code);
//         }
//     }

//     return availableCoupons;
// }

// collectCoupons(5).then(coupons => {
//     console.log('Collected Coupons:', coupons);
// }).catch(err => {
//     console.error('Error collecting coupons:', err);
// });



