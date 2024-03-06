import requests

x = requests.get('https://whatthefuckismyip.com/')

print(x.text)
