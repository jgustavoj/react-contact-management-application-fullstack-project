"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Contact
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

# Test endpoint 

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


"""
Contact Routes Thread

"""

@api.route('/contact', methods=['POST', 'GET'])
def handle_contact():
    """
    Create contact
    """
    # POST request
    if request.method == 'POST':
        body = request.get_json()
        if body is None:
            raise APIException("You need to specify the request body as a json object", status_code=400)
        contact = Contact(name=body['name'], email=body['email'], phone=body['phone'], address=body['address'])
        db.session.add(contact)
        db.session.commit()
        return "ok", 200
    # GET request
    if request.method == 'GET':
        contact = Contact.query.all()
        contact = list(map(lambda x: x.serialize(), contact))
        return jsonify(contact), 200
    return "Invalid Method", 404


@api.route('/contact/<int:id>', methods=['PUT', 'GET'])
def handle_contact_update(id):
    """
    Update Contact

    """
    body = request.get_json() 
    #PUT request
    if request.method == 'PUT':
        contact = Contact.query.get(id)
        contact.name = body["name"]
        contact.email = body["email"]
        contact.phone = body["phone"]
        contact.address = body["address"]
        contact.id = body["id"]
        db.session.commit()
        return jsonify(contact.serialize()), 200
    #Get request
    if request.method == 'GET':
        contact = Contact.query.get(id)
        contact = list(map(lambda x: x.serialize(), contact))
        return jsonify(contact), 200
    return "Invalid Method", 404



@api.route('/contact/<int:id>', methods=['DELETE'])
def delete_item(id):
    """
    Delete Contact
    
    """
    contact = Contact.query.get(id)
    if contact is None:
        raise APIException('Contact not found', status_code=404)
    db.session.delete(contact)
    db.session.commit()
    contact = Contact.query.all()
    contact = list(map(lambda x: x.serialize(), contact))
    return jsonify(contact), 200

