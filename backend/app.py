from flask import Flask, request, jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError
from models import User
from dotenv import load_dotenv
import os
import jwt
from flask_jwt_extended import JWTManager, jwt_required, get_jwt, create_access_token, create_refresh_token, get_jwt_identity, unset_jwt_cookies
import datetime
import logging

app = Flask(__name__)

# Load environment variables from .env file
load_dotenv()

# Configure database connection
db_username = os.getenv("DB_USERNAME")
db_password = os.getenv("DB_PASSWORD")
db_host = os.getenv("DB_HOST")
db_port = os.getenv("DB_PORT")
db_name = os.getenv("DB_NAME")
engine = create_engine(f"mysql+mysqlconnector://{db_username}:{db_password}@{db_host}:{db_port}/{db_name}")
Session = sessionmaker(bind=engine)

app.config['JWT_SECRET_KEY'] = os.getenv("SECRET_KEY")  # Replace with your own secret key
jwt_manager = JWTManager(app)

# Define the endpoint for testing the connection
@app.route('/', methods=['GET'])
def hello_world():
    return 'Hello, World!'

# Signup endpoint
@app.route('/signup', methods=['POST'])
def signup():
    try:
        # Extract data from the request
        data = request.json
        email = data.get('email')
        password = data.get('password')

        # Check if the email already exists
        session = Session()
        existing_user = session.query(User).filter_by(email=email).first()
        if existing_user:
            return jsonify({'message': 'Email already exists'}), 409

        # Create a new user
        user = User(email=email, password=password)
        session.add(user)
        session.commit()

        # Generate a bearer token
        access_token = create_access_token(identity=email)

        return jsonify({'message': 'Signup successful', 'token': access_token}), 201
    except SQLAlchemyError as e:
        return jsonify({'message': 'An error occurred while processing the request'}), 500
        
    
# Logout endpoint
@app.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    current_user = get_jwt_identity()
    jti = get_jwt()['jti']
    return jsonify({'message': 'User logged out successfully'}), 200

# Login endpoint
@app.route('/login', methods=['POST'])
def login():
    try:
        # Extract data from the request
        data = request.json
        email = data.get('email')
        password = data.get('password')

        # Check if the Email and password match
        session = Session()
        user = session.query(User).filter_by(email=email).first()
        if not user or not user.check_password(password):
            return jsonify({'message': 'Invalid email or password'}), 401

        # Generate access token
        access_token = create_access_token(identity=email)

        return jsonify({'message': 'Login successful', 'token': access_token}), 200
    except SQLAlchemyError as e:
        return jsonify({'message': 'An error occurred while processing the request'}), 500

if __name__ == '__main__':
    app.run()
