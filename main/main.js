module.exports = function main(input) {
    console.log("Debug Info");
    
    inputs = [
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
            Name: 'Battery',
            Unit: 'a',
            Price: 2.00
        }
    ];

    const totalPrice= inputs.map(inputs => inputs.Price)
                             .reduce((a, b) => a + b, 0);
    
    
    const Barcode= inputs.map(inputs => inputs.Barcode);

    let finalReceipt =
    '***<store earning no money>Receipt ***\n' +
    'Name: Coca-Cola, Quantity: 5 bottles, Unit price: 3.00 (yuan), Subtotal: 15.00 (yuan)\n' +
    'Name: Sprite, Quantity: 2 bottles, Unit price: 3.00 (yuan), Subtotal: 6.00 (yuan)\n' +
    'Name: Battery, Quantity: 1, Unit price: 2.00 (yuan), Subtotal: 2.00 (yuan)\n' +
    '----------------------\n' +
    'Total: 23.00 (yuan)\n' +
    '**********************\n';


    console.log(pricesArray);
    return input;
};