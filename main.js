document.addEventListener(
  "DOMContentLoaded",
  function () {
    const parentNode = document.getElementById("bills");
    fetch(
      "https://info.centralbank.org.sz/wp-json/cbe/v1/financial_markets/bills"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const bills = data.bills; // change this as neccesary when working bonds, indicators
        Object.keys(bills).forEach(function (key) {
          const obj = bills[key];
          //   console.log(obj);
          parentNode.appendChild(constructDiv(obj));
        });
      });
  },
  false
);

function constructDiv(obj) {
  let div = document.createElement("div");
  let title = document.createTextNode(obj.days + "days - SZL " + obj.allotted);
  div.appendChild(title);
  return div;
}
