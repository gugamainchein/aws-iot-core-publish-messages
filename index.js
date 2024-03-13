const mqtt = require("mqtt");
const fs = require("fs");
require("dotenv").config();

const [iotMqttEndpoint, iotKeyFile, iotCertFile, iotCaFile, iotTopic] = [
  `mqtts://${process.env.IOT_ENDPOINT}.iot.${process.env.IOT_REGION}.amazonaws.com:${process.env.IOT_PORT}`,
  `./certs/${process.env.IOT_PRIVATE_KEY}.pem.key`,
  `./certs/${process.env.IOT_CERTIFICATE}.pem.crt`,
  `./certs/AmazonRootCA1.pem`,
  process.env.IOT_TOPIC,
];

const message = {
  message: {
    type: "String",
    data: "Send message with successfully!",
  },
  timestamp: Math.floor(new Date().getTime() / 1000),
};

const clientIoT = mqtt.connect(iotMqttEndpoint, {
  key: fs.readFileSync(iotKeyFile),
  cert: fs.readFileSync(iotCertFile),
  ca: [fs.readFileSync(iotCaFile)],
  protocolId: "MQTT",
  protocolVersion: 5,
});

clientIoT.on("connect", () => {
  console.log("connected with IoT Core!");

  clientIoT.subscribe(iotTopic, (err) => {
    if (!err) {
      console.log("subscribe with IoT Topic!");
      clientIoT.publish(iotTopic, JSON.stringify(message));
    } else {
      console.log("error on subscribe on IoT Topic:", JSON.stringify(err));
    }
  });
});

clientIoT.on("message", (topic, message) =>
  console.log(
    "publish message on IoT Topic! This is the message:",
    message.toString()
  )
);

clientIoT.on("error", (err) =>
  console.log("error on IoT Core:", JSON.stringify(err))
);
