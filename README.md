# Cadastro de carro

**RF** => Requisitos Funcionais
  Deve ser possível cadastrar um novo carro.

**RNF** => Requisitos Não Funcionais
  --

**RN** => Regra de Negócio
  Não deve ser possível cadastar um carro com uma placa já existente.
  O carro deve ser cadastrado, por padrão com disponibilidade.
  * O usuário reponsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF** => Requisitos Funcionais
  Deve ser possível listar todos os carros disponíveis.
  Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
  Deve ser possível listar todos os carros disponíveis pelo nome da marca.
  Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN** => Regra de Negócio
  O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF** => Requisitos Funcionais
  Deve ser possível cadastrar uma especificação para um carro.

**RN** => Regra de Negócio
  Não deve ser possível cadastar uma especificação para um carro não cadastrado.
  Não deve ser possível cadastar uma especificação já existente para o mesmo carro.
  O usuário reponsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF** => Requisitos Funcionais
  Deve ser possível cadastrar a imagem do carro.
  Deve ser possível listar todos os carros.

**RNF** => Requisitos Não Funcionais
  Utilizar o multer para upload dos arquivos.

**RN** => Regra de Negócio
  O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
  O usuário reponsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carros

**RF** => Requisitos Funcionais
  Deve ser possível cadastrar um aluguel.

**RN** => Regra de Negócio
  O aluguel deve ter duração mínima de 24 horas.
  Não deve ser possível cadastar um novo aluguel caso já exista um aberto para o mesmo usuário.
  Não deve ser possível cadastar um novo aluguel caso já exista um aberto para o mesmo carro.