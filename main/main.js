module.exports = function main(input) {
    console.log("Debug Info");
    let receipt ='';
    receipt = printInventory(input);
    return receipt;
}


function printInventory(input){
    const totalPrice= input.map(input => input.Price)
                           .reduce((a, b) => a + b, 0);

    let itemCount = new Object();

    for(let i = 0; i < input.length; i++) {
        if(itemCount[input[i].Name] != null) {
        itemCount[input[i].Name] += 1;
       } else {
        itemCount[input[i].Name] = 1;
       }
    }

    let itemPrize = new Object();

    for(let i = 0; i < input.length; i++) {
        if(itemPrize[input[i].Name] == null) {
        itemPrize[input[i].Name]= input[i].Price;
       } 
    }

    let itemString= '';
    let header= '***<store earning no money>Receipt ***\n';
    let footer1= '----------------------\n';
    let footer2= 'Total: ' + totalPrice.toFixed(2) + ' (yuan)\n';
    let footer3= '**********************\n';
    for(let i = 0; i < Object.keys(itemCount).length; i++) {
        let quantity= Object.values(itemCount)[i];
        if(Object.values(itemCount)[i]>1)
            quantity+= ' bottles';

        let prize;
        if(Object.keys(itemCount)[i]===Object.keys(itemPrize)[i])
            prize= ', Unit price: ' + Object.values(itemPrize)[i].toFixed(2) + ' (yuan),';

        let subtotal= ' Subtotal: ' + (Object.values(itemCount)[i] * Object.values(itemPrize)[i]).toFixed(2) 
            + ' (yuan)';
        
        itemString += 'Name: ' + Object.keys(itemCount)[i] + ', Quantity: ' + quantity 
        + prize + subtotal + '\n';
    }
    
    let receipt= header+ itemString + footer1 + footer2 + footer3 ;
    return receipt;
};