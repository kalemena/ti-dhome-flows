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