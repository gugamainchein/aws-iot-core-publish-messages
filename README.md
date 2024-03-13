# AWS IoT Core - Integração com Node.js

O projeto em questão tem como objetivo demonstrar a integração do Node.js com o serviço de IoT Core da AWS, detalhando as conexões envolvidas, assim como os métodos de interação.

## Protocolo MQTT

O MQTT (Message Queuing Telemetry Transport) é um protocolo de comunicação leve e eficiente, ideal para dispositivos com recursos limitados. É utilizado em diversas aplicações de IoT para conectar dispositivos à nuvem e permitir a troca de dados.

Características do MQTT:

- Pub/Sub: O MQTT usa um modelo de comunicação publish/subscribe, onde os dispositivos podem publicar mensagens em tópicos específicos e outros dispositivos podem se inscrever para receber essas mensagens.
- Leve: O MQTT é um protocolo leve que utiliza um overhead mínimo de dados, tornando-o ideal para dispositivos com recursos limitados.
- Confiável: O MQTT oferece diferentes níveis de QoS (Quality of Service) para garantir a entrega de mensagens, mesmo em ambientes com conectividade instável.

## Sobre o AWS IoT Core

O AWS IoT Core é um serviço gerenciado da AWS que facilita a conexão, o gerenciamento e a segurança de dispositivos IoT em grande escala. O serviço oferece diversos recursos para:

- Conexão: O AWS IoT Core oferece suporte a diversos protocolos de comunicação, incluindo MQTT, HTTP e WebSockets.
- Gerenciamento: O AWS IoT Core permite gerenciar dispositivos em grande escala, incluindo provisionamento, atualização de firmware e monitoramento de status.
- Segurança: O AWS IoT Core oferece recursos de segurança robustos para proteger dispositivos e dados, como autenticação, autorização e criptografia.

## Detalhes da Comunicação

A comunicação entre o Node.js e o IoT Core é estabelecida através do protocolo MQTT. O script utiliza a biblioteca mqtt do Node.js para se conectar ao serviço e publicar mensagens em um tópico específico.

Etapas da comunicação:

- Conexão: O cliente Node.js se conecta ao broker MQTT do AWS IoT Core usando as credenciais e o endpoint do serviço.
- Assinatura: O cliente se inscreve em um tópico específico para receber mensagens de outros dispositivos.
- Publicação: O cliente publica mensagens no tópico especificado, que podem ser recebidas por outros dispositivos inscritos no mesmo tópico.

## Variáveis de Ambiente

Para rodar esse projeto, você precisa adicionar as seguintes variáveis de ambiente no seu arquivo .env:

`IOT_ENDPOINT`: Endpoint do broker MQTT do AWS IoT Core.
`IOT_PORT`: Porta do broker MQTT do AWS IoT Core.
`IOT_REGION`: Região AWS onde o serviço IoT Core está configurado.
`IOT_PRIVATE_KEY`: Caminho para o arquivo da chave privada do dispositivo.
`IOT_CERTIFICATE`: Caminho para o arquivo do certificado do dispositivo.
`IOT_TOPIC`: Tópico MQTT utilizado para comunicação entre o Node.js e o IoT Core.

## Execução

Para executar o projeto e iniciar o envio de mensagens para o IoT Core, execute o seguinte comando:

```bash
  npm run local
```

## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de gustavomainchein@outlook.com

## Histórico de Mudanças

0.1.0
Primeira versão da aplicação

## Autores

Gustavo Mainchein – @gugamainchein – gustavomainchein@outlook.com

Veja mais sobre mim: https://github.com/gugamainchein

## Faça sua Contribuição

- Faça o fork do projeto (https://github.com/gugamainchein/aws-iot-core-publish-messages/fork)
- Crie uma nova branch para sua feature (git checkout -b feature/fooBar)
- Faça o commit das suas mudanças (git commit -am 'Add some fooBar')
- Faça o push para a sua branch (git push origin feature/fooBar)
- Crie um novo pull request
