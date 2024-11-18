<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device=width, initial-scale=1.0" />
  <link rel="stylesheet" href="global.css" />
  <title>Document</title>
</head>

<body>
  <?php include 'php/header.php'; ?>
  <div class="container">
    <div class="form-add-contract">
      <label for="contract">Contrato:</label>
      <input type="number" min="0" max="99999" id="contract">
      <button onclick="insertContract()">Adicionar</button>
    </div>
    <table class="table-contract">
      <thead>
        <tr>
          <th>Número</th>
          <th>Percentual</th>
          <th>Valor Original</th>
          <th>Valor</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody id="table-body">

      </tbody>
    </table>
    <div id="total-value">Total: R$ 0,00</div>
  </div>
  <?php include 'php/footer.php'; ?>
</body>
<script src="js/contract.js" defer></script>

</html>