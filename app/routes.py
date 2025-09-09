from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

@main.route('/')
def hello():
    return jsonify({"message": "Hello, CI/CD World!"})

@main.route('/health')
def health():
    return jsonify({"status": "healthy"})