
#include <DHT.h>
#include <DHT_U.h>

int sensor = 4;
int Temperatura;
int Humedad;

DHT dht(sensor,DHT11);
void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  Temperatura = dht.readTemperature();
  Humedad = dht.readHumidity();
  Serial.print("Temperatura: ");
  Serial.print(Temperatura);
  Serial.print(" Humedad: ");
  Serial.print(Humedad);
  Serial.println();
  delay(500);
}
