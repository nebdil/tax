var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
    //total sales: 700
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
    //total sales: 800
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
    //total sales: 600
  }
];

function taxSum(totalSales, taxRate){
  return totalSales * taxRate;
}

function sum(sales){
  var total = 0;
  for (var i = 0; i < sales.length; i++){
    total += sales[i];
  }
  return total;
}

function calculateSales(salesData, taxRates) {
//I need names, totalSales, totalTaxes
  var output = {};
  for (var i = 0; i < salesData.length; i++) {
    var companyName = salesData[i].name;
    // console.log(companyName);
    var companyProvince = salesData[i].province;
    // console.log(companyProvince);
    var companySales = sum(salesData[i].sales);
    // console.log(companySales);
    var companyTaxes = taxSum(companySales, taxRates[companyProvince]);
    // console.log(companyTaxes);
    if (!output[companyName]) {
      output[companyName] = {totalSales: companySales, totalTaxes: companyTaxes};
      // console.log(output[companyName]);
    } else {
      output[companyName] = {totalSales: output[companyName].totalSales += companySales,
                             totalTaxes: output[companyName].totalTaxes += companyTaxes};
      // console.log(output[companyName]);
    }
  }
  return output;
}

console.log(calculateSales(companySalesData, salesTaxRates));
