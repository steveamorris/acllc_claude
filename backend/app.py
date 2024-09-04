from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crud_app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Alternative(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)

class OutcomeFraming(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)

class FAQ(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(200), nullable=False)
    answer = db.Column(db.Text, nullable=False)

@app.route('/api/alternatives', methods=['GET', 'POST'])
def handle_alternatives():
    if request.method == 'POST':
        data = request.json
        new_alternative = Alternative(title=data['title'], description=data['description'])
        db.session.add(new_alternative)
        db.session.commit()
        return jsonify({"message": "Alternative created successfully"}), 201
    else:
        alternatives = Alternative.query.all()
        return jsonify([{"id": a.id, "title": a.title, "description": a.description} for a in alternatives])

@app.route('/api/alternatives/<int:id>', methods=['PUT', 'DELETE'])
def handle_alternative(id):
    alternative = Alternative.query.get_or_404(id)
    if request.method == 'PUT':
        data = request.json
        alternative.title = data['title']
        alternative.description = data['description']
        db.session.commit()
        return jsonify({"message": "Alternative updated successfully"})
    elif request.method == 'DELETE':
        db.session.delete(alternative)
        db.session.commit()
        return jsonify({"message": "Alternative deleted successfully"})

@app.route('/api/outcomeframings', methods=['GET', 'POST'])
def handle_outcomeframings():
    if request.method == 'POST':
        data = request.json
        new_outcomeframing = OutcomeFraming(title=data['title'], description=data['description'])
        db.session.add(new_outcomeframing)
        db.session.commit()
        return jsonify({"message": "Outcome Framing created successfully"}), 201
    else:
        outcomeframings = OutcomeFraming.query.all()
        return jsonify([{"id": o.id, "title": o.title, "description": o.description} for o in outcomeframings])

@app.route('/api/outcomeframings/<int:id>', methods=['PUT', 'DELETE'])
def handle_outcomeframing(id):
    outcomeframing = OutcomeFraming.query.get_or_404(id)
    if request.method == 'PUT':
        data = request.json
        outcomeframing.title = data['title']
        outcomeframing.description = data['description']
        db.session.commit()
        return jsonify({"message": "Outcome Framing updated successfully"})
    elif request.method == 'DELETE':
        db.session.delete(outcomeframing)
        db.session.commit()
        return jsonify({"message": "Outcome Framing deleted successfully"})

@app.route('/api/faqs', methods=['GET', 'POST'])
def handle_faqs():
    if request.method == 'POST':
        data = request.json
        new_faq = FAQ(question=data['question'], answer=data['answer'])
        db.session.add(new_faq)
        db.session.commit()
        return jsonify({"message": "FAQ created successfully"}), 201
    else:
        faqs = FAQ.query.all()
        return jsonify([{"id": f.id, "question": f.question, "answer": f.answer} for f in faqs])

@app.route('/api/faqs/<int:id>', methods=['PUT', 'DELETE'])
def handle_faq(id):
    faq = FAQ.query.get_or_404(id)
    if request.method == 'PUT':
        data = request.json
        faq.question = data['question']
        faq.answer = data['answer']
        db.session.commit()
        return jsonify({"message": "FAQ updated successfully"})
    elif request.method == 'DELETE':
        db.session.delete(faq)
        db.session.commit()
        return jsonify({"message": "FAQ deleted successfully"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)