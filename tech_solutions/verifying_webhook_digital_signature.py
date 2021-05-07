#python3

#When using the webhook in the nuvemshop, there is the possibility of verifying the origin with a digital signature.
#Link to documentation: https://github.com/TiendaNube/api-docs/blob/master/resources/webhook.md


import hmac
import hashlib
import json
from flask import Flask, request, Response

app = Flask(__name__)

secret = "your_app_secret"


@app.route('/webhook', methods=['POST'])
def respond():
    print(request.data)
    byte_key = bytes(secret, 'UTF-8')  
    message = request.data
    h = hmac.new(byte_key, message, hashlib.sha256).hexdigest()

    header = request.headers.get('x-linkedstore-hmac-sha256')
    if header == h:
        return Response(status=200)
    else:
        return Response(status=401)
