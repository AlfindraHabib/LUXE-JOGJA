from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy # type: ignore
from flask_migrate import Migrate # type: ignore
from flask_cors import CORS # type: ignore
from flask_jwt_extended import JWTManager
app = Flask(__name__)
CORS(app)

app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

jwt = JWTManager(app)


from app.model import user,turisareahotel,hotel
from app import routes