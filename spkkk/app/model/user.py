# from app import db
# from datetime import datetime

# class User(db.Model):
#     id = db.Column(db.Integer,primary_key=True,autoincrement=True)
#     name = db.Column(db.String(250),nullable=False)
#     email = db.Column(db.String(50),index = True, unique = True ,nullable = False)
#     password = db.Column(db.String(50),nullable = False)
#     created_at = db.Column(db.DateTime,default = datetime.utcnow)
#     updated_at = db.Column(db.DateTime,default = datetime.utcnow)
# #

from app import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from enum import Enum

class UserLevel(Enum):
    ADMIN = 'admin'
    USER = 'user'

class User(db.Model):
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(250), nullable=False)
    email = db.Column(db.String(60), index=True, unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    level = db.Column(db.Enum(UserLevel), nullable=False)  # Menggunakan Enum untuk level
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return '<User {}>'.format(self.name)

    def setPassword(self, password):
        self.password = generate_password_hash(password)
    
    def checkPassword(self, password):
        return check_password_hash(self.password, password)

    def is_admin(self):
        # """Method untuk memeriksa apakah pengguna adalah admin."""
        return self.level == UserLevel.ADMIN

    def is_user(self):
        # """Method untuk memeriksa apakah pengguna adalah user."""
        return self.level == UserLevel.USER