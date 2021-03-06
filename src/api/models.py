from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Remember to migrate every time you change your models
#  You have to migrate and upgrade the migrations for every update you make to your models:
#  $ pipenv run migrate (to make the migrations)
#  $ pipenv run upgrade  (to update your databse with the migrations)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
        
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    email = db.Column(db.String(250), unique=False, nullable=False)
    phone = db.Column(db.BigInteger, unique=False, nullable=False)
    address = db.Column(db.String(250), unique=False, nullable=False)

    def __repr__(self):
        return '<Contact %r>' % self.name

    def serialize(self):
        return {

            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "address": self.address,
        }