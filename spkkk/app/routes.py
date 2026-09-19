# from app import app
# from app.controller import Turisareahotelcontroller
# from flask import request

# @app.route('/')
# def index():
#     return 'Hello Hotel'

# @app.route('/turisareahotel',methods =['GET'])
# def turisareahotels():
#     return Turisareahotelcontroller.index()


# @app.route('/turisareahotel/<id>',methods =['GET'])
# def areadetail(id):
#     return Turisareahotelcontroller.detail(id)

# from app import app
# from app.controller import Turisareahotelcontroller
# from flask import request, jsonify  # Mengimpor jsonify untuk mengembalikan JSON

# @app.route('/')
# def index():
#     return 'Hello Hotel'

# @app.route('/turisareahotel', methods=['GET'])
# def turisareahotels():
#     # Memastikan bahwa Turisareahotelcontroller.index() mengembalikan respons yang valid
#     response = Turisareahotelcontroller.index()
#     return jsonify(response)  # Mengembalikan respons dalam format JSON


from app import app
from app.controller import Turisareahotelcontroller
from app.controller import Usercontroller
from flask import request

@app.route('/')
def index():
    return 'Hello Hotel'

# Endpoint untuk mendapatkan semua data turis area hotel
@app.route('/turisareahotel', methods=['GET'])
def turisareahotels():
    return Turisareahotelcontroller.index()


@app.route('/turisareahotel/add', methods=['POST'])
def add_turisareahotels():
   return Turisareahotelcontroller.save()
    
# Endpoint untuk mendapatkan detail area wisata dan hotel terkait
@app.route('/turisareahotel/<int:id>', methods=['GET'])
def areadetail(id):
    if request.method == 'GET':
        return Turisareahotelcontroller.detail(id)


@app.route('/turisareahotel/<int:id>/edit', methods=['PUT'])
def areadetailedit(id):
    return Turisareahotelcontroller.ubah(id)

@app.route('/turisareahotel/<int:id>/delete', methods=['DELETE'])
def areadetaildelete(id):
    return Turisareahotelcontroller.hapus(id)
    
    
# data hotel

@app.route('/turisareahotel/hotel/<int:hotel_id>', methods=['GET'])
def get_hotel(hotel_id):
    return Turisareahotelcontroller.get_hotel(hotel_id)

@app.route('/turisareahotel/<int:turiareahotel_id>/hotel', methods=['POST'])
def add_hotel(turiareahotel_id):
    return Turisareahotelcontroller.add_hotel(turiareahotel_id)


@app.route('/turisareahotel/hotel/<int:hotel_id>/edithotel', methods=['PUT'])
def manage_hotel_edit(hotel_id):
        return Turisareahotelcontroller.edit_hotel(hotel_id)
    
@app.route('/turisareahotel/hotel/<int:hotel_id>/deletehotel', methods=['DELETE'])
def manage_hotel_delete(hotel_id):
    return Turisareahotelcontroller.delete_hotel(hotel_id)

@app.route('/turisareahotel/<string:turiareahotel_name>/rank', methods=['GET'])
def rank_hotels(turiareahotel_name):
    return Turisareahotelcontroller.rank_hotels(turiareahotel_name)
    

# @app.route('/turisareahotel/<int:turiareahotel_id>/rank', methods=['GET'])
# def rank_hotels(turiareahotel_id):
#     return Turisareahotelcontroller.rank_hotels(turiareahotel_id)


# register dan login

@app.route('/register', methods=['POST'])
def admins():
    return Usercontroller.buatAdmin()

@app.route('/login', methods=['POST'])
def logins():
    return Usercontroller.login()

# @app.route('/login', methods=['POST'])
# def logins():
#     return Usercontroller.login()

# @app.route('/login', methods=['POST'])
# def logins():
#     return Usercontroller.login()

