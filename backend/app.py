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

class CustomerType(db.Model):
    customerType_id = db.Column(db.Integer, primary_key=True)
    type_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)

class ServiceType(db.Model):
    serviceType_id = db.Column(db.Integer, primary_key=True)
    type_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)

class SolutionDetail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)

class ProblemFraming(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)

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

@app.route('/api/customer-types', methods=['GET', 'POST'])
def handle_customer_types():
    if request.method == 'POST':
        data = request.json
        new_customer_type = CustomerType(type_name=data['type_name'], description=data['description'])
        db.session.add(new_customer_type)
        db.session.commit()
        return jsonify({"message": "Customer Type created successfully"}), 201
    else:
        customer_types = CustomerType.query.all()
        return jsonify([{"customerType_id": ct.customerType_id, "type_name": ct.type_name, "description": ct.description} for ct in customer_types])

@app.route('/api/customer-types/<int:id>', methods=['PUT', 'DELETE'])
def handle_customer_type(id):
    customer_type = CustomerType.query.get_or_404(id)
    if request.method == 'PUT':
        data = request.json
        customer_type.type_name = data['type_name']
        customer_type.description = data['description']
        db.session.commit()
        return jsonify({"message": "Customer Type updated successfully"})
    elif request.method == 'DELETE':
        db.session.delete(customer_type)
        db.session.commit()
        return jsonify({"message": "Customer Type deleted successfully"})

@app.route('/api/service-types', methods=['GET', 'POST'])
def handle_service_types():
    if request.method == 'POST':
        data = request.json
        new_service_type = ServiceType(type_name=data['type_name'], description=data['description'])
        db.session.add(new_service_type)
        db.session.commit()
        return jsonify({"message": "Service Type created successfully"}), 201
    else:
        service_types = ServiceType.query.all()
        return jsonify([{"serviceType_id": st.serviceType_id, "type_name": st.type_name, "description": st.description} for st in service_types])

@app.route('/api/service-types/<int:id>', methods=['PUT', 'DELETE'])
def handle_service_type(id):
    service_type = ServiceType.query.get_or_404(id)
    if request.method == 'PUT':
        data = request.json
        service_type.type_name = data['type_name']
        service_type.description = data['description']
        db.session.commit()
        return jsonify({"message": "Service Type updated successfully"})
    elif request.method == 'DELETE':
        db.session.delete(service_type)
        db.session.commit()
        return jsonify({"message": "Service Type deleted successfully"})

@app.route('/api/solution-details', methods=['GET', 'POST'])
def handle_solution_details():
    if request.method == 'POST':
        data = request.json
        new_solution_detail = SolutionDetail(title=data['title'], description=data['description'])
        db.session.add(new_solution_detail)
        db.session.commit()
        return jsonify({"message": "Solution Detail created successfully"}), 201
    else:
        solution_details = SolutionDetail.query.all()
        return jsonify([{"id": sd.id, "title": sd.title, "description": sd.description} for sd in solution_details])

@app.route('/api/solution-details/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def handle_solution_detail(id):
    solution_detail = SolutionDetail.query.get_or_404(id)
    if request.method == 'GET':
        return jsonify({"id": solution_detail.id, "title": solution_detail.title, "description": solution_detail.description})
    elif request.method == 'PUT':
        data = request.json
        solution_detail.title = data['title']
        solution_detail.description = data['description']
        db.session.commit()
        return jsonify({"message": "Solution Detail updated successfully"})
    elif request.method == 'DELETE':
        db.session.delete(solution_detail)
        db.session.commit()
        return jsonify({"message": "Solution Detail deleted successfully"})

@app.route('/api/problem-framing', methods=['GET', 'POST'])
def handle_problem_framing():
    if request.method == 'POST':
        data = request.json
        new_problem_framing = ProblemFraming(title=data['title'], description=data['description'])
        db.session.add(new_problem_framing)
        db.session.commit()
        return jsonify({"message": "Problem Framing created successfully"}), 201
    else:
        problem_framings = ProblemFraming.query.all()
        return jsonify([{"id": pf.id, "title": pf.title, "description": pf.description} for pf in problem_framings])

@app.route('/api/problem-framing/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def handle_problem_framing_item(id):
    problem_framing = ProblemFraming.query.get_or_404(id)
    if request.method == 'GET':
        return jsonify({"id": problem_framing.id, "title": problem_framing.title, "description": problem_framing.description})
    elif request.method == 'PUT':
        data = request.json
        problem_framing.title = data['title']
        problem_framing.description = data['description']
        db.session.commit()
        return jsonify({"message": "Problem Framing updated successfully"})
    elif request.method == 'DELETE':
        db.session.delete(problem_framing)
        db.session.commit()
        return jsonify({"message": "Problem Framing deleted successfully"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)