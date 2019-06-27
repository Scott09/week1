const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "TelusSK",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = (tax, companysales) => {
  let salesTaxData = {};
  for (let i = 0; i < companysales.length; i++) {
    let companyName = companysales[i].name;
    let totalsales = companysales[i].sales.reduce((a, b) => a + b, 0);
    let province = companysales[i].province;
    let totaltaxes = tax[province] * totalsales;
    salesTaxData[companyName] = {};
    salesTaxData[companyName].totalSales = totalsales;
    salesTaxData[companyName].totalTaxes = totaltaxes;
    
  }
  console.log(salesTaxData);
};

calculateSalesTax(salesTaxRates, companySalesData);