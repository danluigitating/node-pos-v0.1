module.exports = function main(input) {
    console.log("Debug Info");

    let input2= [
        {
            Barcode: 'ITEM000000',
            Name: 'Coca-Cola',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000000',
            Name: 'Coca-Cola',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000000',
            Name: 'Coca-Cola',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000000',
            Name: 'Coca-Cola',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000000',
            Name: 'Coca-Cola',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000001',
            Name: 'Sprite',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000001',
            Name: 'Sprite',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000004',
            Name: 'battery',
            Unit: 'a',
            Price: 2.00
        }
    ];

      var answer = [];
      for (var j = 0 ; j < Object.keys(input2).length ;j ++) {
         // console.log(Object.keys(input2).length);
         // console.log(Object.values(input2));
        answer.push({key: Object.keys(input2)[j], count: Object.values(input2)[j]},);
      }


    let expectText =
    '***<store earning no money>Receipt ***\n' +
    'Name: Coca-Cola, Quantity: 5 bottles, Unit price: 3.00 (yuan), Subtotal: 15.00 (yuan)\n' +
    'Name: Sprite, Quantity: 2 bottles, Unit price: 3.00 (yuan), Subtotal: 6.00 (yuan)\n' +
    'Name: Battery, Quantity: 1, Unit price: 2.00 (yuan), Subtotal: 2.00 (yuan)\n' +
    '----------------------\n' +
    'Total: 23.00 (yuan)\n' +
    '**********************\n';


    console.log(answer);
    return input;
};