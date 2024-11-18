let contracts = [];

function insertContract() {
  let newContract = document.getElementById("contract");
  let contractValue = parseFloat(newContract.value);

  contracts.push({ value: contractValue });
  renderContracts();
  updateTotal();
}

document
  .getElementById("contract")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      insertContract();
    }
  });

function removeContract(index) {
  contracts.splice(index, 1);
  renderContracts();
  updateTotal();
}

function renderContracts() {
  let tableContract = document.getElementById("table-body");
  tableContract.innerHTML = "";

  let percentages = [20, 22.5, 27.5, 32.5, 37.5];

  contracts.forEach((contract, index) => {
    let percentValue = percentages[Math.min(index, percentages.length - 1)];
    let calculatedValue = (contract.value * percentValue) / 100;
    let contractFormat = calculatedValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    let originalValueFormat = contract.value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    let row = document.createElement("tr");
    row.innerHTML = `
      <th>${index + 1}</th>
      <th>${percentValue}%</th>
      <th>${originalValueFormat}</th>
      <th>${contractFormat}</th>
      <th><button id="button-remove" onclick="removeContract(${index})">Remover</button></th>
    `;
    tableContract.appendChild(row);
  });
}

function updateTotal() {
  let percentages = [20, 22.5, 27.5, 32.5, 37.5];
  let totalValue = contracts.reduce((total, contract, index) => {
    let percentValue = percentages[Math.min(index, percentages.length - 1)];
    return total + (contract.value * percentValue) / 100;
  }, 0);

  document.getElementById(
    "total-value"
  ).innerText = `Total: ${totalValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;
}
