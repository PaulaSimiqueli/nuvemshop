#python3

import hmac
import hashlib
import json
from flask import Flask, request, Response

app = Flask(__name__)

secret = "app secret"


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
