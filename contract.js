let contracts = [];

function insertContract() {
  let newContract = document.getElementById("contract");
  let contractValue = parseFloat(newContract.value);

  if (!contractValue || contractValue <= 0) {
    alert("Por favor, insira um valor válido");
    return;
  }

  contracts.push({ value: contractValue });
  renderContracts();
  updateTotal();
  newContract.value = "";
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
  let contractsContainer = document.getElementById("contracts-container");
  contractsContainer.innerHTML = "";

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

    let card = document.createElement("div");
    card.className = "contract-card";
    card.innerHTML = `
            <div class="contract-info">
                <div>
                    <span>Número:</span>
                    <span>${index + 1}</span>
                </div>
                <div>
                    <span>Percentual:</span>
                    <span>${percentValue}%</span>
                </div>
                <div>
                    <span>Valor Original:</span>
                    <span>${originalValueFormat}</span>
                </div>
                <div>
                    <span>Valor Final:</span>
                    <span>${contractFormat}</span>
                </div>
            </div>
            <button class="btn-remove" onclick="removeContract(${index})">Remover</button>
        `;
    contractsContainer.appendChild(card);
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
