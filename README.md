# ti-dhome-flows

Ti-Dhome Orchestration Flows.

This repository holds few flows used within Ti-dhome automation and which may be interesting for other persons.

## Telegram communications

Once you have a Telegram account, connect to Bot Father and create a Bot account.

Then grab the Bot token key, and update the flow with setting your own Telegram bot.

### Contacts birthdays

To have birthdays to work, there are 2 ways:

1) use your phone

- set birthdays to contacts you want to be notified about Birthdays
- export contacts as CSV using the very good "123 Contacts Backup and restore"
- copy the file under ./etc/data/contacts.csv

2) create csv file with the form below (day/month)

```bash
"displayName","birthday"
Titi,05/01
Toto,21/03
```

![Contacts Birthdays flows](/docs/flow-contacts.png)

### Saints

Similarly to contact birthdays, you can create a CSV which includes a date and a description for the names associated.

### Worlddays

Similarly to contact birthdays, you can create a CSV containing the year dates matching some World Days. 

### Weather

Create a free account at OpenWeatherMap and get an api key.

Example of 5 day forecast in Brest:

```json
[
    {"dt":1558353600,"main":{"temp":16.33,"temp_min":15.03,"temp_max":16.33,"pressure":1015.39,"sea_level":1015.39,"grnd_level":1008.23,"humidity":68,"temp_kf":1.3},"weather":[{"id":801,"main":"Clouds","description":"peu nuageux","icon":"02d"}],"clouds":{"all":18},"wind":{"speed":3.73,"deg":328.633},"sys":{"pod":"d"},"dt_txt":"2019-05-20 12:00:00"},
    {"dt":1558364400,"main":{"temp":16,"temp_min":15.03,"temp_max":16,"pressure":1015.43,"sea_level":1015.43,"grnd_level":1008.31,"humidity":69,"temp_kf":0.97},"weather":[{"id":802,"main":"Clouds","description":"partiellement nuageux","icon":"03d"}],"clouds":{"all":34},"wind":{"speed":4.47,"deg":319.509},"sys":{"pod":"d"},"dt_txt":"2019-05-20 15:00:00"},
    {"dt":1558375200,"main":{"temp":13.8,"temp_min":13.15,"temp_max":13.8,"pressure":1015.76,"sea_level":1015.76,"grnd_level":1008.74,"humidity":77,"temp_kf":0.65},"weather":[{"id":803,"main":"Clouds","description":"nuageux","icon":"04d"}],"clouds":{"all":62},"wind":{"speed":4.55,"deg":326.782},"sys":{"pod":"d"},"dt_txt":"2019-05-20 18:00:00"},
    {"dt":1558386000,"main":{"temp":10.44,"temp_min":10.12,"temp_max":10.44,"pressure":1017.19,"sea_level":1017.19,"grnd_level":1009.9,"humidity":93,"temp_kf":0.32},"weather":[{"id":801,"main":"Clouds","description":"peu nuageux","icon":"02n"}],"clouds":{"all":22},"wind":{"speed":2.98,"deg":335.93},"sys":{"pod":"n"},"dt_txt":"2019-05-20 21:00:00"},
    {"dt":1558396800,"main":{"temp":9.89,"temp_min":9.89,"temp_max":9.89,"pressure":1017.74,"sea_level":1017.74,"grnd_level":1010.44,"humidity":94,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"partiellement nuageux","icon":"03n"}],"clouds":{"all":46},"wind":{"speed":2.59,"deg":338.454},"sys":{"pod":"n"},"dt_txt":"2019-05-21 00:00:00"},
    {"dt":1558407600,"main":{"temp":9.42,"temp_min":9.42,"temp_max":9.42,"pressure":1017.78,"sea_level":1017.78,"grnd_level":1010.48,"humidity":93,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"nuageux","icon":"04n"}],"clouds":{"all":69},"wind":{"speed":2.63,"deg":341.551},"sys":{"pod":"n"},"dt_txt":"2019-05-21 03:00:00"},
    {"dt":1558418400,"main":{"temp":10.75,"temp_min":10.75,"temp_max":10.75,"pressure":1018.49,"sea_level":1018.49,"grnd_level":1011.13,"humidity":90,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"partiellement nuageux","icon":"03d"}],"clouds":{"all":35},"wind":{"speed":2.7,"deg":353.357},"sys":{"pod":"d"},"dt_txt":"2019-05-21 06:00:00"},
    {"dt":1558429200,"main":{"temp":14.05,"temp_min":14.05,"temp_max":14.05,"pressure":1019.83,"sea_level":1019.83,"grnd_level":1012.47,"humidity":71,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ciel dégagé","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.16,"deg":2.649},"sys":{"pod":"d"},"dt_txt":"2019-05-21 09:00:00"},
    {"dt":1558440000,"main":{"temp":15.65,"temp_min":15.65,"temp_max":15.65,"pressure":1020.37,"sea_level":1020.37,"grnd_level":1012.94,"humidity":61,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"peu nuageux","icon":"02d"}],"clouds":{"all":11},"wind":{"speed":3.53,"deg":355.324},"sys":{"pod":"d"},"dt_txt":"2019-05-21 12:00:00"},
    {"dt":1558450800,"main":{"temp":15.34,"temp_min":15.34,"temp_max":15.34,"pressure":1020.39,"sea_level":1020.39,"grnd_level":1013.18,"humidity":62,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"partiellement nuageux","icon":"03d"}],"clouds":{"all":33},"wind":{"speed":4.52,"deg":354.604},"sys":{"pod":"d"},"dt_txt":"2019-05-21 15:00:00"},
    {"dt":1558461600,"main":{"temp":13.25,"temp_min":13.25,"temp_max":13.25,"pressure":1020.62,"sea_level":1020.62,"grnd_level":1013.48,"humidity":71,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"nuageux","icon":"04d"}],"clouds":{"all":65},"wind":{"speed":3.95,"deg":5.126},"sys":{"pod":"d"},"dt_txt":"2019-05-21 18:00:00"},
    {"dt":1558472400,"main":{"temp":9.55,"temp_min":9.55,"temp_max":9.55,"pressure":1021.88,"sea_level":1021.88,"grnd_level":1014.63,"humidity":89,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04n"}],"clouds":{"all":85},"wind":{"speed":2.41,"deg":25.586},"sys":{"pod":"n"},"dt_txt":"2019-05-21 21:00:00"},
    {"dt":1558483200,"main":{"temp":9.01,"temp_min":9.01,"temp_max":9.01,"pressure":1021.86,"sea_level":1021.86,"grnd_level":1014.53,"humidity":89,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"nuageux","icon":"04n"}],"clouds":{"all":75},"wind":{"speed":1.67,"deg":51.63},"sys":{"pod":"n"},"dt_txt":"2019-05-22 00:00:00"},
    {"dt":1558494000,"main":{"temp":8.48,"temp_min":8.48,"temp_max":8.48,"pressure":1021.48,"sea_level":1021.48,"grnd_level":1014.08,"humidity":90,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"ciel dégagé","icon":"01n"}],"clouds":{"all":3},"wind":{"speed":1.46,"deg":82.268},"sys":{"pod":"n"},"dt_txt":"2019-05-22 03:00:00"},
    {"dt":1558504800,"main":{"temp":10.46,"temp_min":10.46,"temp_max":10.46,"pressure":1021.25,"sea_level":1021.25,"grnd_level":1013.96,"humidity":86,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"partiellement nuageux","icon":"03d"}],"clouds":{"all":33},"wind":{"speed":1.35,"deg":97.8},"sys":{"pod":"d"},"dt_txt":"2019-05-22 06:00:00"},
    {"dt":1558515600,"main":{"temp":15.08,"temp_min":15.08,"temp_max":15.08,"pressure":1021.6,"sea_level":1021.6,"grnd_level":1014.28,"humidity":67,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"nuageux","icon":"04d"}],"clouds":{"all":68},"wind":{"speed":1.35,"deg":101.891},"sys":{"pod":"d"},"dt_txt":"2019-05-22 09:00:00"},
    {"dt":1558526400,"main":{"temp":18.13,"temp_min":18.13,"temp_max":18.13,"pressure":1021.65,"sea_level":1021.65,"grnd_level":1014.12,"humidity":55,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"partiellement nuageux","icon":"03d"}],"clouds":{"all":37},"wind":{"speed":0.84,"deg":273.691},"sys":{"pod":"d"},"dt_txt":"2019-05-22 12:00:00"},
    {"dt":1558537200,"main":{"temp":17.16,"temp_min":17.16,"temp_max":17.16,"pressure":1020.67,"sea_level":1020.67,"grnd_level":1013.31,"humidity":62,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"peu nuageux","icon":"02d"}],"clouds":{"all":12},"wind":{"speed":2.13,"deg":308.504},"sys":{"pod":"d"},"dt_txt":"2019-05-22 15:00:00"},
    {"dt":1558548000,"main":{"temp":15.57,"temp_min":15.57,"temp_max":15.57,"pressure":1019.76,"sea_level":1019.76,"grnd_level":1012.52,"humidity":71,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"partiellement nuageux","icon":"03d"}],"clouds":{"all":26},"wind":{"speed":0.84,"deg":353.434},"sys":{"pod":"d"},"dt_txt":"2019-05-22 18:00:00"},
    {"dt":1558558800,"main":{"temp":11.47,"temp_min":11.47,"temp_max":11.47,"pressure":1020.77,"sea_level":1020.77,"grnd_level":1013.36,"humidity":87,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":0.51,"deg":242.83},"sys":{"pod":"n"},"dt_txt":"2019-05-22 21:00:00"},
    {"dt":1558569600,"main":{"temp":10.42,"temp_min":10.42,"temp_max":10.42,"pressure":1019.9,"sea_level":1019.9,"grnd_level":1012.41,"humidity":89,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"nuageux","icon":"04n"}],"clouds":{"all":71},"wind":{"speed":1.32,"deg":193.889},"sys":{"pod":"n"},"dt_txt":"2019-05-23 00:00:00"},
    {"dt":1558580400,"main":{"temp":11.35,"temp_min":11.35,"temp_max":11.35,"pressure":1018.48,"sea_level":1018.48,"grnd_level":1011.25,"humidity":88,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":1.89,"deg":185.104},"sys":{"pod":"n"},"dt_txt":"2019-05-23 03:00:00"},
    {"dt":1558591200,"main":{"temp":11.68,"temp_min":11.68,"temp_max":11.68,"pressure":1018.19,"sea_level":1018.19,"grnd_level":1010.94,"humidity":85,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":3.39,"deg":170.529},"sys":{"pod":"d"},"dt_txt":"2019-05-23 06:00:00"},
    {"dt":1558602000,"main":{"temp":13.82,"temp_min":13.82,"temp_max":13.82,"pressure":1018.29,"sea_level":1018.29,"grnd_level":1011.2,"humidity":71,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":5.21,"deg":189.26},"sys":{"pod":"d"},"dt_txt":"2019-05-23 09:00:00"},
    {"dt":1558612800,"main":{"temp":16.52,"temp_min":16.52,"temp_max":16.52,"pressure":1017.71,"sea_level":1017.71,"grnd_level":1010.77,"humidity":69,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04d"}],"clouds":{"all":85},"wind":{"speed":7.52,"deg":210.598},"sys":{"pod":"d"},"dt_txt":"2019-05-23 12:00:00"},
    {"dt":1558623600,"main":{"temp":15.26,"temp_min":15.26,"temp_max":15.26,"pressure":1017.59,"sea_level":1017.59,"grnd_level":1010.36,"humidity":86,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"nuageux","icon":"04d"}],"clouds":{"all":84},"wind":{"speed":6.7,"deg":225.617},"sys":{"pod":"d"},"dt_txt":"2019-05-23 15:00:00"},
    {"dt":1558634400,"main":{"temp":14.13,"temp_min":14.13,"temp_max":14.13,"pressure":1017.46,"sea_level":1017.46,"grnd_level":1010.4,"humidity":83,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04d"}],"clouds":{"all":92},"wind":{"speed":5.36,"deg":244.008},"sys":{"pod":"d"},"dt_txt":"2019-05-23 18:00:00"},
    {"dt":1558645200,"main":{"temp":12.2,"temp_min":12.2,"temp_max":12.2,"pressure":1017.36,"sea_level":1017.36,"grnd_level":1010.14,"humidity":92,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":5.29,"deg":217.394},"sys":{"pod":"n"},"dt_txt":"2019-05-23 21:00:00"},
    {"dt":1558656000,"main":{"temp":13.15,"temp_min":13.15,"temp_max":13.15,"pressure":1016.65,"sea_level":1016.65,"grnd_level":1009.1,"humidity":91,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":7.17,"deg":246.033},"sys":{"pod":"n"},"dt_txt":"2019-05-24 00:00:00"},
    {"dt":1558666800,"main":{"temp":12.05,"temp_min":12.05,"temp_max":12.05,"pressure":1015.34,"sea_level":1015.34,"grnd_level":1008.54,"humidity":91,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"légère pluie","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":6.85,"deg":267.599},"rain":{"3h":0.188},"sys":{"pod":"n"},"dt_txt":"2019-05-24 03:00:00"},
    {"dt":1558677600,"main":{"temp":12.55,"temp_min":12.55,"temp_max":12.55,"pressure":1016.08,"sea_level":1016.08,"grnd_level":1008.98,"humidity":90,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":6.38,"deg":275.429},"rain":{},"sys":{"pod":"d"},"dt_txt":"2019-05-24 06:00:00"},
    {"dt":1558688400,"main":{"temp":14.7,"temp_min":14.7,"temp_max":14.7,"pressure":1017.27,"sea_level":1017.27,"grnd_level":1010.02,"humidity":80,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"nuageux","icon":"04d"}],"clouds":{"all":55},"wind":{"speed":6.95,"deg":285.679},"sys":{"pod":"d"},"dt_txt":"2019-05-24 09:00:00"},
    {"dt":1558699200,"main":{"temp":15.06,"temp_min":15.06,"temp_max":15.06,"pressure":1017.74,"sea_level":1017.74,"grnd_level":1010.66,"humidity":78,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"nuageux","icon":"04d"}],"clouds":{"all":66},"wind":{"speed":6.57,"deg":286.876},"sys":{"pod":"d"},"dt_txt":"2019-05-24 12:00:00"},
    {"dt":1558710000,"main":{"temp":14.33,"temp_min":14.33,"temp_max":14.33,"pressure":1017.87,"sea_level":1017.87,"grnd_level":1010.87,"humidity":85,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":5.6,"deg":288.186},"sys":{"pod":"d"},"dt_txt":"2019-05-24 15:00:00"},
    {"dt":1558720800,"main":{"temp":13.35,"temp_min":13.35,"temp_max":13.35,"pressure":1017.87,"sea_level":1017.87,"grnd_level":1010.74,"humidity":95,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":4.57,"deg":278.064},"sys":{"pod":"d"},"dt_txt":"2019-05-24 18:00:00"},
    {"dt":1558731600,"main":{"temp":13.1,"temp_min":13.1,"temp_max":13.1,"pressure":1018.54,"sea_level":1018.54,"grnd_level":1011.39,"humidity":97,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"légère pluie","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":6.57,"deg":276.113},"rain":{"3h":1.125},"sys":{"pod":"n"},"dt_txt":"2019-05-24 21:00:00"},
    {"dt":1558742400,"main":{"temp":13.17,"temp_min":13.17,"temp_max":13.17,"pressure":1018.37,"sea_level":1018.37,"grnd_level":1011.27,"humidity":96,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"légère pluie","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":7.75,"deg":282.755},"rain":{"3h":0.375},"sys":{"pod":"n"},"dt_txt":"2019-05-25 00:00:00"},
    {"dt":1558753200,"main":{"temp":13.08,"temp_min":13.08,"temp_max":13.08,"pressure":1017.85,"sea_level":1017.85,"grnd_level":1010.82,"humidity":96,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"légère pluie","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":6.5,"deg":296.723},"rain":{"3h":0.125},"sys":{"pod":"n"},"dt_txt":"2019-05-25 03:00:00"},
    {"dt":1558764000,"main":{"temp":12.9,"temp_min":12.9,"temp_max":12.9,"pressure":1018.74,"sea_level":1018.74,"grnd_level":1011.77,"humidity":94,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"légère pluie","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":5.56,"deg":311.025},"rain":{"3h":0.125},"sys":{"pod":"d"},"dt_txt":"2019-05-25 06:00:00"},
    {"dt":1558774800,"main":{"temp":14.21,"temp_min":14.21,"temp_max":14.21,"pressure":1020.13,"sea_level":1020.13,"grnd_level":1013.09,"humidity":87,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"couvert","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":5.58,"deg":305.443},"sys":{"pod":"d"},"dt_txt":"2019-05-25 09:00:00"}
]
```