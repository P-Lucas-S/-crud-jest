# Testar a rota POST /items
Write-Host "Criando um item..."
$response = Invoke-WebRequest -Uri http://localhost:3000/items -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"id": 1, "name": "Item 1", "price": 10}'
Write-Host "Resposta: " $response.Content

# Testar a rota GET /items
Write-Host "Listando todos os itens..."
$response = Invoke-WebRequest -Uri http://localhost:3000/items -Method GET
Write-Host "Resposta: " $response.Content

# Testar a rota GET /items/1
Write-Host "Buscando item por ID..."
$response = Invoke-WebRequest -Uri http://localhost:3000/items/1 -Method GET
Write-Host "Resposta: " $response.Content

# Testar a rota PUT /items/1
Write-Host "Atualizando um item..."
$response = Invoke-WebRequest -Uri http://localhost:3000/items/1 -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"name": "Item Atualizado", "price": 20}'
Write-Host "Resposta: " $response.Content

# Testar a rota DELETE /items/1
Write-Host "Deletando um item..."
$response = Invoke-WebRequest -Uri http://localhost:3000/items/1 -Method DELETE
Write-Host "Resposta: " $response.Content

# Listar todos os itens novamente (para verificar se foi deletado)
Write-Host "Listando todos os itens após deletar..."
$response = Invoke-WebRequest -Uri http://localhost:3000/items -Method GET
Write-Host "Resposta: " $response.Content