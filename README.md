## Stock Market Viewer
Este projeto é uma aplicação Express que faz scraping de dados sobre empresas listadas em um site de mercado de capitais (`companiesmarketcap.com`) e disponibiliza esses dados em uma API REST.

## Instalação
Clone este repositório em sua máquina local.
Execute o comando `npm install` para instalar as dependências necessárias.

## Uso
Para iniciar a aplicação, execute o comando `npm run start`.

A aplicação será iniciada na porta especificada pela variável de ambiente PORT, ou na porta padrão 8000.

## Funcionalidade
A aplicação faz scraping do site `companiesmarketcap.com` para obter dados sobre empresas, como nome da empresa, código da empresa, receita, valor da ação e país de origem.

Os dados são armazenados em uma lista chamada data.

A aplicação fornece uma rota (/) que retorna os dados das empresas em formato JSON.

## Código
O código utiliza a biblioteca Express para criar o servidor web e a biblioteca Axios para fazer requisições HTTP.

O código também utiliza a biblioteca Cheerio para fazer scraping e manipulação dos dados extraídos do HTML do site companiesmarketcap.com.

Os dados de até 10 empresas são extraídos e armazenados em uma lista chamada data.

A rota (/) retorna os dados das empresas em formato JSON.

O servidor é iniciado na porta especificada pela variável de ambiente PORT ou, se não especificada, na porta 8000.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas através de issues.

Licença
Este projeto está licenciado sob a licença MIT.
