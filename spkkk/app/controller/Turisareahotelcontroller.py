# from app.model.turisareahotel import TouristAreaHotel
# from app.model.hotel import Hotel
# from app.model import response
# from app import app,db
# from flask import request

# def index():
#     try:
#         turisareahotel = TouristAreaHotel.query.all()
#         data = formatarray(turisareahotel)
#         return response.success(data,"success")
#     except Exception as e:
#         print (e)

    
# def formatarray(datas):
#         array = []

#         for i in datas:
#             array.append(singleObject(i))

#         return array


# def singleObject(data):
#     data = {
#         'id' : data.id,
#         'name' : data.name
#     }

#     return data

# def detail(id):
#     try:
#         turisareahotel =  TouristAreaHotel.query.filter_by(id = id).first()
#         hotels = Hotel.query.filter_by((Hotel.turiareahotel_id == id))

#         if not turisareahotel:
#              return response.badRequest ([],'Tidak ada data hotel')
        
#         datahotel = formatHotel(hotels)

#         data = singleDetailHotel(turisareahotel,datahotel)

#         return response.success(data,'Success')
    
#     except Exception as e:
#         print(e)
    
# def singleDetailHotel(turisareahotel,hotels):
#     data = {
#         'id': turisareahotel.id,
#         'name':turisareahotel.name,
#         'hotel': hotels
        
#     }

#     return data

# def singleHotel(hotel):
#     data = {
#         'id': hotel.id,
#         'name':hotel.name,
#         'cost' : hotel.cost,
#         'benefit': hotel.benefit,
#         'distance': hotel.distance,
#         'rating' : hotel.rating
#     }

#     return data



# def formatHotel(data):
#     array = []
#     for i in data :
#         array.append(singleHotel(i))
#     return data

# def ubah (id):
#     try:
#         name = request.form.get('name')

#         input = [
#             {
#                 'name' : name
#             }
#         ]

#         turisareahotel = TouristAreaHotel.query.filter_by(id=id).first()

#         turisareahotel. name = name

#         db.session.commit()

#         return response.success(input,'sukses update data area')
#     except Exception as e :
#         print(e)



from app.model.turisareahotel import TouristAreaHotel
from app.model.hotel import Hotel
from app.model import response
from app import db
from flask import request,jsonify
import numpy as np # type: ignore

# Mendapatkan semua data turis area hotel
def index():
    try:
        turisareahotel = TouristAreaHotel.query.all()
        data = formatarray(turisareahotel)
        return response.success(data, "success")
    except Exception as e:
        print(e)
        return response.badRequest([], f"Terjadi kesalahan: {str(e)}")

# Format array data turis area hotel
def formatarray(datas):
    array = []
    for i in datas:
        array.append(singleObject(i))
    return array

# Format data tunggal untuk turis area hotel
def singleObject(data):
    data = {
        'id' : data.id,
        'name' : data.name,
        'image_url' : data.image_url 
    }

    return data

# Mendapatkan detail area wisata dan hotel terkait
def detail(id):
    try:
        # Query turis area hotel berdasarkan ID
        turisareahotel = TouristAreaHotel.query.filter_by(id=id).first()
        if not turisareahotel:
            return response.badRequest([], f"Data dengan ID {id} tidak ditemukan")

        # Query semua hotel yang terkait dengan area wisata ini
        hotels = Hotel.query.filter_by(turiareahotel_id=id).all()
        datahotel = formatHotel(hotels)

        # Format detail turis area hotel
        data = singleDetailHotel(turisareahotel, datahotel)

        return response.success(data, "success")
    except Exception as e:
        print(e)
        return response.badRequest([], f"Terjadi kesalahan: {str(e)}")

# Format detail turis area hotel
def singleDetailHotel(turisareahotel, hotels):
    return {
        'id': turisareahotel.id,
        'name': turisareahotel.name if turisareahotel else None,
        'hotels': hotels
    }

# Format data hotel
def singleHotel(hotel):
    return {
        'id': hotel.id,
        'name': hotel.name,
        'cost': hotel.cost,
        'benefit': hotel.benefit,
        'distance': hotel.distance,
        'rating': hotel.rating,
        'image_url' : hotel.image_url,
        'hotel_url' : hotel.hotel_url
    }

# Format array data hotel
def formatHotel(data):
    array = []
    for i in data:
        array.append(singleHotel(i))
    return array

def save():
    try: 
        data = request.json  # Mengambil data JSON dari body request
        name = data.get('name')
        image_url = data.get('image_url')

        # Validasi name
        if not name:
            return jsonify({"error": "Nama area wisata diperlukan"}), 400

        # Menambahkan data ke database
        turisareahotels = TouristAreaHotel(name=name)
        turisareahotels = TouristAreaHotel(image_url=image_url)
        db.session.add(turisareahotels)
        db.session.commit()

        return jsonify({"message": "Data area wisata berhasil ditambahkan", "data": {"name": name,"image_url":image_url}}), 201
    
    except Exception as e:
        print(e)
        return jsonify({"error": "Terjadi kesalahan saat menambahkan data"}), 500


# def save():
#     try : 
#         name = request.form.get('name')

#         turisareahotels = TouristAreaHotel(name=name)
#         db.session.add(turisareahotels)
#         db.session.commit()

#         return response.success('','sukses menambahkan data area')
    
#     except Exception as e:
#         print (e)

# def ubah(id):
#     try:
#         # Query data berdasarkan ID
#         turisareahotel = TouristAreaHotel.query.filter_by(id=id).first()
#         if not turisareahotel:
#             return response.badRequest([], f"Data dengan ID {id} tidak ditemukan")

#         # Ambil data dari request
#         name = request.form.get('name')

#         if not name:
#             return response.badRequest([], "Nama harus diisi")

#         # Update data
#         turisareahotel.name = name
#         db.session.commit()

#         return response.success({"id": id, "name": name}, "Sukses memperbarui data area")
#     except Exception as e:
#         print(e)
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")

# def ubah(id):
#     try:
#         # Query data berdasarkan ID
#         turisareahotel = TouristAreaHotel.query.filter_by(id=id).first()
#         if not turisareahotel:
#             return response.badRequest([], f"Data dengan ID {id} tidak ditemukan")

#         # Ambil data dari request form
#         name = request.form.get('name')
#         image_url = request.form.get('image_url') 

#         if not name:
#             return response.badRequest([], "Nama harus diisi")

#         # Update data
#         turisareahotel.name = name
#         db.session.commit()

#         return response.success({"id": id, "name": name}, "Sukses memperbarui data area")
#     except Exception as e:
#         print(e)
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")


def ubah(id):
    try:
        # Query data berdasarkan ID
        turisareahotel = TouristAreaHotel.query.filter_by(id=id).first()
        if not turisareahotel:
            return response.badRequest([], f"Data dengan ID {id} tidak ditemukan")

        # Ambil data dari request form
        name = request.form.get('name')
        image_url = request.form.get('image_url')  # Mengambil link gambar

        if not name:
            return response.badRequest([], "Nama harus diisi")

        # Update data
        turisareahotel.name = name
        turisareahotel.image_url = image_url  # Update link gambar
        db.session.commit()

        return response.success({"id": id, "name": name, "image_url": image_url}, "Sukses memperbarui data area")
    except Exception as e:
        print(e)
        return response.badRequest([], f"Terjadi kesalahan: {str(e)}")



def hapus(id):
    try:
        turisareahotel = TouristAreaHotel.query.filter_by(id=id).first()
        if not turisareahotel:
            return response.badRequest([],'Data area Kosong')
        
        db.session.delete(turisareahotel)
        db.session.commit()
        return response.success('','Sukses hapus data')
    except Exception as e:
        print (e)





# def get_hotel(hotel_id):
#     try:
#         # Query hotel berdasarkan ID
#         hotel = Hotel.query.filter_by(id=hotel_id).first()

#         if not hotel:
#             return jsonify({"message": f"Hotel with ID {hotel_id} not found"}), 404

#         # Mengembalikan data hotel dalam format JSON
#         hotel_data = {
#             "id": hotel.id,
#             "name": hotel.name,
#             "cost": hotel.cost,
#             "benefit": hotel.benefit,
#             "rating": hotel.rating
#         }

#         return jsonify({
#             "message": "Hotel data retrieved successfully",
#             "data": hotel_data
#         }), 200

#     except Exception as e:
#         print("Error:", str(e))
#         return jsonify({"message": str(e)}), 500

def get_hotel(hotel_id):
    try:
        # Query hotel berdasarkan ID
        hotel = Hotel.query.filter_by(id=hotel_id).first()

        if not hotel:
            return jsonify({"message": f"Hotel with ID {hotel_id} not found"}), 404

        # Mengembalikan data hotel dalam format JSON
        hotel_data = {
            "id": hotel.id,
            "name": hotel.name,
            "cost": hotel.cost,
            "benefit": hotel.benefit,
            'distance': hotel.distance,
            "rating": hotel.rating,
            "image_url": hotel.image_url , # Tambahkan image_url
            "hotel_url" : hotel.hotel_url # Tambahkan hotel_url
        }

        return jsonify({
            "message": "Hotel data retrieved successfully",
            "data": hotel_data
        }), 200

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"message": str(e)}), 500


# def add_hotel(turiareahotel_id):
#     try:
#         # Validasi area wisata
#         turisareahotel = TouristAreaHotel.query.filter_by(id=turiareahotel_id).first()
#         if not turisareahotel:
#             return response.badRequest([], f"Area wisata dengan ID {turiareahotel_id} tidak ditemukan")

#         # Ambil data dari request.form
#         name = request.form.get('name')
#         cost = request.form.get('cost')
#         benefit = request.form.get('benefit')
#         rating = request.form.get('rating')

#         # Validasi input
#         if not name or cost is None or not benefit or rating is None:
#             return jsonify({"message": "Semua field (name, cost, benefit, rating) harus diisi!"}), 400

#         # Konversi angka
#         try:
#             cost = float(cost)
#             rating = float(rating)
#         except ValueError:
#             return jsonify({"message": "Format angka tidak valid untuk cost atau rating"}), 400

#         # Tambahkan hotel
#         hotel = Hotel(
#             name=name,
#             cost=cost,
#             benefit=benefit,
#             rating=rating,
#             turiareahotel_id=turisareahotel.id
#         )
#         db.session.add(hotel)
#         db.session.commit()

#         return response.success({"id": hotel.id, "name": hotel.name}, "Hotel berhasil ditambahkan")
#     except Exception as e:
#         print(e)
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")

# def add_hotel(turiareahotel_id):
#     try:
#         # Validasi apakah area wisata dengan ID tersebut ada
#         turisareahotel = TouristAreaHotel.query.filter_by(id=turiareahotel_id).first()
#         if not turisareahotel:
#             return response.badRequest([], f"Area wisata dengan ID {turiareahotel_id} tidak ditemukan")

#         # Ambil data dari request
#         name = request.form.get('name')
#         cost = request.form.get('cost')
#         benefit = request.form.get('benefit')
#         distance = request.form.get('distance')
#         rating = request.form.get('rating')

#         # Validasi input
#         if not all([name, cost, benefit, distance, rating]):
#             return jsonify({"message": "Semua field (name, cost, benefit, distance, rating) harus diisi!"}), 400

#         # Konversi angka
#         try:
#             cost = float(cost)
#             distance = float(distance)
#             rating = float(rating)
#         except ValueError:
#             return jsonify({"message": "Format angka tidak valid untuk cost, distance, atau rating"}), 400

#         # Tambahkan data hotel ke database
#         new_hotel = Hotel(
#             name=name,
#             cost=cost,
#             benefit=benefit,
#             distance=distance,
#             rating=rating,
#             turiareahotel_id=turisareahotel.id
#         )
#         db.session.add(new_hotel)
#         db.session.commit()

#         return response.success({"id": new_hotel.id, "name": new_hotel.name}, "Hotel berhasil ditambahkan")
#     except Exception as e:
#         print(e)
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")


# def add_hotel(turiareahotel_id):
#     # Mengambil data dari request body (format JSON)
#     data = request.get_json()
#     name = data.get('name')
#     cost = data.get('cost')
#     benefit = data.get('benefit')
#     rating = data.get('rating')

#     # Validasi input
#     if not name or not cost or not benefit or not rating:
#         return {"message": "All fields are required"}, 400

#     # Lakukan penyimpanan hotel ke database
#     hotel = Hotel(name=name, cost=cost, benefit=benefit, rating=rating, turiareahotel_id=turiareahotel_id)
#     db.session.add(hotel)
#     db.session.commit()

#     return {'message': 'Hotel successfully added!'}, 200
# def add_hotel(turiareahotel_id):
#     try:
#         # Mengambil data dari request body (format JSON)
#         data = request.get_json()

#         # Validasi input
#         if not data.get('name') or not data.get('cost') or not data.get('benefit')or not data.get('distance') or not data.get('rating'):
#             return jsonify({"message": "All fields are required"}), 400

#         # Mengambil data dari request
#         name = data['name']
#         cost = data['cost']
#         benefit = data['benefit']
#         distance = data['distance']
#         rating = data['rating']

#         # Membuat hotel baru
#         hotel = Hotel(
#             name=name,
#             cost=cost,
#             benefit=benefit,
#             distance = distance,
#             rating=rating,
#             turiareahotel_id=turiareahotel_id
#         )

#         # Menyimpan hotel ke database
#         db.session.add(hotel)
#         db.session.commit()

#         return jsonify({"message": "Hotel successfully added!"}), 200
#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"message": "Internal server error"}), 500

def add_hotel(turiareahotel_id):
    try:
        # Mengambil data dari request body (format JSON)
        data = request.get_json()

        # Validasi input
        if not data.get('name') or not data.get('cost') or not data.get('benefit') or not data.get('distance') or not data.get('rating'):
            return jsonify({"message": "All fields are required"}), 400

        # Mengambil data dari request
        name = data['name']
        cost = data['cost']
        benefit = data['benefit']
        distance = data['distance']
        rating = data['rating']
        image_url = data.get('image_url')  # Ambil image_url dari request
        hotel_url = data. get('hotel_url')  # Ambil hotel_url dari request

        # Membuat hotel baru
        hotel = Hotel(
            name=name,
            cost=cost,
            benefit=benefit,
            distance=distance,
            rating=rating,
            turiareahotel_id=turiareahotel_id,
            image_url=image_url,  # Tambahkan image_url
            hotel_url=hotel_url  # Tambahkan hotel_url
        )

        # Menyimpan hotel ke database
        db.session.add(hotel)
        db.session.commit()

        return jsonify({"message": "Hotel successfully added!"}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "Internal server error"}), 500


def edit_hotel(id):
    try:
        # Ambil data dari form
        name = request.form.get('name')
        address = request.form.get('address')
        cost = request.form.get('cost')
        benefit = request.form.get('benefit')
        distance = request.form.get('distance')
        rating = request.form.get('rating')
        image_url = request.form.get('image_url')  # Ambil image_url dari form
        hotel_url = request.form.get('hotel_url')  # Ambil hotel_url dari form

        # Validasi data
        if not name or not cost or not rating:
            return jsonify({"message": "Bad Request - Missing required fields"}), 400

        # Query hotel dari database
        hotel = Hotel.query.filter_by(id=id).first()
        if not hotel:
            return jsonify({"message": f"Hotel with ID {id} not found"}), 404

        # Update data hotel
        hotel.name = name
        hotel.address = address
        hotel.cost = float(cost)
        hotel.benefit = benefit
        hotel.distance = float(distance)
        hotel.rating = float(rating)
        hotel.image_url = image_url  # Update image_url
        hotel.hotel_url = hotel_url  # Update hotel_url

        db.session.commit()

        return jsonify({
            "message": "Hotel updated successfully",
            "data": {"id": hotel.id, "name": hotel.name, "image_url": hotel.image_url}
        }), 200

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"message": "Internal Server Error", "error": str(e)}), 500
    
# 23232
def rank_hotels(turiareahotel_name):
    try:
        # Cari area wisata berdasarkan nama
        tourist_area = TouristAreaHotel.query.filter_by(name=turiareahotel_name).first()
        if not tourist_area:
            return response.badRequest([], f"Tidak ada area wisata dengan nama {turiareahotel_name}")

        # Query semua hotel di area wisata
        hotels = Hotel.query.filter_by(turiareahotel_id=tourist_area.id).all()
        if not hotels:
            return response.badRequest([], f"Tidak ada hotel untuk area wisata dengan nama {turiareahotel_name}")

        # Format data hotel
        hotel_data = []
        for hotel in hotels:
            try:
                # Pisahkan fasilitas dan hitung jumlahnya
                facilities = [f.strip() for f in (hotel.benefit or "").split(',') if f.strip()]
                benefit_count = len(facilities)  # Hitung jumlah fasilitas
                
                # Gabungkan fasilitas menjadi string dengan koma
                benefit_string = ", ".join(facilities)

                hotel_data.append({
                    "id": hotel.id,
                    "name": hotel.name,
                    "cost": float(hotel.cost or 0),
                    "benefit": benefit_string,  # Tampilkan daftar fasilitas dalam bentuk string
                    "benefit_count": benefit_count,  # Jumlah fasilitas (sebagai angka untuk perhitungan)
                    "distance": float(hotel.distance or 0),
                    "rating": float(hotel.rating or 0),
                    "image_url": hotel.image_url,
                    "hotel_url": hotel.hotel_url
                })
            except ValueError as ve:
                print(f"Data invalid untuk hotel {hotel.name}: {ve}")
                continue

        # Bobot dan atribut kriteria
        weights = {"cost": 0.28, "benefit_count": 0.22, "distance": 0.22, "rating": 0.28}
        # weights = {"cost": 0.2, "benefit_count": 0.3, "distance": 0.4, "rating": 0.1}
        attributes = {"cost": "cost", "benefit_count": "benefit", "distance": "cost", "rating": "benefit"}

       
        # attributes = {"cost": "cost", "benefit_count": "benefit", "distance": "cost", "rating": "benefit"}

        # Hitung ranking menggunakan SAW
        ranked_hotels = saw_method(hotel_data, weights, attributes)
        return response.success(ranked_hotels, "Ranking hotel berhasil dihitung")

    except Exception as e:
        return response.badRequest([], f"Terjadi kesalahan: {str(e)}")
    
def saw_method(data, weights, attributes):
    try:
        if not data:
            raise ValueError("Data hotel kosong, tidak dapat menghitung SAW.")
        if not np.isclose(sum(weights.values()), 1.0):
            raise ValueError("Total bobot kriteria harus sama dengan 1.")

        criteria_keys = list(weights.keys())
        matrix = []

        for hotel in data:
            row = []
            for criteria in criteria_keys:
                value = hotel.get(criteria, 0) or 0
                if isinstance(value, (int, float)):  # Hanya tambahkan nilai numerik
                    row.append(float(value))
                else:
                    row.append(0)  # Set nilai non-numerik (seperti list) menjadi 0
            matrix.append(row)

        matrix = np.array(matrix)

        normalized_matrix = np.zeros_like(matrix, dtype=float)
        for i, key in enumerate(criteria_keys):
            if attributes[key] == "benefit":
                max_value = np.max(matrix[:, i])
                normalized_matrix[:, i] = matrix[:, i] / (max_value if max_value > 0 else 1)
            elif attributes[key] == "cost":
                min_value = np.min(matrix[:, i])
                max_value = np.max(matrix[:, i])
                normalized_matrix[:, i] = (matrix[:, i] - min_value) / (max_value - min_value) if max_value > min_value else 1

        preferences = normalized_matrix.dot(np.array(list(weights.values())))
        for i, hotel in enumerate(data):
            hotel["preference"] = preferences[i]

        return sorted(data, key=lambda x: x["preference"], reverse=True)

    except Exception as e:
        raise ValueError(f"Terjadi kesalahan dalam metode SAW: {str(e)}")

# def edit_hotel(id):
#     try:
#         # Ambil data dari form
#         name = request.form.get('name')
#         address = request.form.get('address')
#         cost = request.form.get('cost')
#         benefit = request.form.get('benefit')
#         rating = request.form.get('rating')

#         # Validasi data
#         if not name or not cost or not rating:
#             return jsonify({"message": "Bad Request - Missing required fields"}), 400

#         # Query hotel dari database
#         hotel = Hotel.query.filter_by(id=id).first()
#         if not hotel:
#             return jsonify({"message": f"Hotel with ID {id} not found"}), 404

#         # Update data hotel
#         hotel.name = name
#         hotel.address = address
#         hotel.cost = float(cost)
#         hotel.benefit = benefit
#         hotel.rating = float(rating)

#         db.session.commit()

#         return jsonify({
#             "message": "Hotel updated successfully",
#             "data": {"id": hotel.id, "name": hotel.name}
#         }), 200

#     except Exception as e:
#         print("Error:", str(e))
#         return jsonify({"message": "Internal Server Error", "error": str(e)}), 500

# Hapus hotel dari area wisata
def delete_hotel(hotel_id):
    try:
        # Query hotel
        hotel = Hotel.query.filter_by(id=hotel_id).first()
        if not hotel:
            return response.badRequest([], f"Hotel dengan ID {hotel_id} tidak ditemukan")

        # Hapus data hotel
        db.session.delete(hotel)
        db.session.commit()
        return response.success({"id": hotel_id}, "Hotel berhasil dihapus")
    except Exception as e:
        print(e)
        return response.badRequest([], f"Terjadi kesalahan: {str(e)}")
    

# def saw_method(data, weights, attributes):
#     try:
#         # Validasi total bobot
#         if not np.isclose(sum(weights.values()), 1.0):
#             raise ValueError("Total bobot kriteria harus sama dengan 1.")

#         # Ekstraksi kriteria
#         criteria_keys = list(weights.keys())

#         # Validasi dan konversi nilai data ke tipe float
#         matrix = np.array([
#             [float(hotel.get(criteria, 0) or 0) for criteria in criteria_keys]
#             for hotel in data
#         ])

#         # Scaling manual jika cost memiliki nilai besar
#         for i, key in enumerate(criteria_keys):
#             if key == "cost":
#                 matrix[:, i] = matrix[:, i] / 1000  # Normalisasi cost agar nilainya lebih kecil

#         # Normalisasi matriks
#         normalized_matrix = np.zeros_like(matrix, dtype=float)
#         for i, key in enumerate(criteria_keys):
#             if attributes[key] == "benefit":
#                 max_value = np.max(matrix[:, i])
#                 normalized_matrix[:, i] = matrix[:, i] / (max_value if max_value > 0 else 1)
#             elif attributes[key] == "cost":
#                 min_value = np.min(matrix[:, i])
#                 normalized_matrix[:, i] = (min_value / matrix[:, i]) if min_value > 0 else 1

#         # Hitung preferensi
#         preferences = normalized_matrix.dot(np.array(list(weights.values())))
#         for i, hotel in enumerate(data):
#             hotel["preference"] = preferences[i]

#         # Urutkan data berdasarkan preferensi
#         ranked_data = sorted(data, key=lambda x: x["preference"], reverse=True)
#         return ranked_data
#     except Exception as e:
#         raise ValueError(f"Error in SAW method: {str(e)}")


# 1111
# def rank_hotels(turiareahotel_name):
#     try:
#         # Cari area wisata berdasarkan nama
#         tourist_area = TouristAreaHotel.query.filter_by(name=turiareahotel_name).first()
#         if not tourist_area:
#             return response.badRequest([], f"Tidak ada area wisata dengan nama {turiareahotel_name}")

#         # Query semua hotel di area wisata
#         hotels = Hotel.query.filter_by(turiareahotel_id=tourist_area.id).all()
#         if not hotels:
#             return response.badRequest([], f"Tidak ada hotel untuk area wisata dengan nama {turiareahotel_name}")

#         # Format data hotel
#         hotel_data = []
#         for hotel in hotels:
#             try:
#                 # Menghitung jumlah fasilitas sebagai benefit
#                 facilities = [f.strip() for f in hotel.benefit.split(',') if f.strip()]
#                 benefit_value = len(facilities)

#                 hotel_data.append({
#                     "id": hotel.id,
#                     "name": hotel.name,
#                     "cost": float(hotel.cost or 0),
#                     "benefit": benefit_value,
#                     "distance": float(hotel.distance or 0),
#                     "rating": float(hotel.rating or 0),
#                     "image_url": hotel.image_url
#                 })
#             except ValueError as ve:
#                 print(f"Data invalid untuk hotel {hotel.name}: {ve}")
#                 continue

#         # Bobot dan atribut kriteria
#         weights = {"cost": 0.2, "benefit": 0.3, "distance": 0.4, "rating": 0.1}
#         attributes = {"cost": "cost", "benefit": "benefit", "distance": "cost", "rating": "benefit"}

#         # Hitung ranking menggunakan SAW
#         ranked_hotels = saw_method(hotel_data, weights, attributes)
#         return response.success(ranked_hotels, "Ranking hotel berhasil dihitung")

#     except Exception as e:
#         print(f"Error in rank_hotels: {e}")
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")
    
#     # SAW METHOD

# def saw_method(data, weights, attributes):
#     try:
#         # Validasi total bobot
#         if not np.isclose(sum(weights.values()), 1.0):
#             raise ValueError("Total bobot kriteria harus sama dengan 1.")

#         # Ekstraksi kriteria
#         criteria_keys = list(weights.keys())

#         # Validasi dan konversi nilai data ke tipe float
#         matrix = np.array([
#             [float(hotel.get(criteria, 0) or 0) for criteria in criteria_keys]
#             for hotel in data
#         ])

#         # Normalisasi matriks
#         normalized_matrix = np.zeros_like(matrix, dtype=float)
#         for i, key in enumerate(criteria_keys):
#             if attributes[key] == "benefit":
#                 max_value = np.max(matrix[:, i])
#                 if max_value > 0:
#                     normalized_matrix[:, i] = matrix[:, i] / max_value
#                 else:
#                     normalized_matrix[:, i] = 1  # Nilai default jika semua 0
#             elif attributes[key] == "cost":
#                 min_value = np.min(matrix[:, i])
#                 if min_value > 0:
#                     normalized_matrix[:, i] = min_value / matrix[:, i]
#                 else:
#                     normalized_matrix[:, i] = 1  # Nilai default jika semua 0

#         # Hitung preferensi
#         preferences = normalized_matrix.dot(np.array(list(weights.values())))
#         for i, hotel in enumerate(data):
#             hotel["preference"] = preferences[i]

#         # Urutkan data berdasarkan preferensi
#         ranked_data = sorted(data, key=lambda x: x["preference"], reverse=True)
#         return ranked_data
#     except Exception as e:
#         raise ValueError(f"Error in SAW method: {str(e)}")

# 222
# def rank_hotels(turiareahotel_name):
#     try:
#         # Cari area wisata berdasarkan nama
#         tourist_area = TouristAreaHotel.query.filter_by(name=turiareahotel_name).first()
#         if not tourist_area:
#             return response.badRequest([], f"Tidak ada area wisata dengan nama {turiareahotel_name}")

#         # Query semua hotel di area wisata
#         hotels = Hotel.query.filter_by(turiareahotel_id=tourist_area.id).all()
#         if not hotels:
#             return response.badRequest([], f"Tidak ada hotel untuk area wisata dengan nama {turiareahotel_name}")

#         # Format data hotel
#         hotel_data = []
#         for hotel in hotels:
#             try:
#                 # facilities = [f.strip() for f in (hotel.benefit or "").split(',') if f.strip()]
#                 # benefit_value = len(facilities)
#                 facilities = [f.strip() for f in (hotel.benefit or "").split(',') if f.strip()]
               


#                 hotel_data.append({
#                     "id": hotel.id,
#                     "name": hotel.name,
#                     "cost": float(hotel.cost or 0),
#                     "benefit": facilities,
#                     "distance": float(hotel.distance or 0),
#                     "rating": float(hotel.rating or 0),
#                     "image_url": hotel.image_url
#                 })
#             except ValueError as ve:
#                 print(f"Data invalid untuk hotel {hotel.name}: {ve}")
#                 continue

#         # Bobot dan atribut kriteria
#         weights = {"cost": 0.2, "benefit": 0.3, "distance": 0.4, "rating": 0.1}
#         attributes = {"cost": "cost", "benefit": "benefit", "distance": "cost", "rating": "benefit"}

#         # Hitung ranking menggunakan SAW
#         ranked_hotels = saw_method(hotel_data, weights, attributes)
#         return response.success(ranked_hotels, "Ranking hotel berhasil dihitung")

#     except Exception as e:
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")

# 44444
# def rank_hotels(turiareahotel_name):
#     try:
#         # Cari area wisata berdasarkan nama
#         tourist_area = TouristAreaHotel.query.filter_by(name=turiareahotel_name).first()
#         if not tourist_area:
#             return response.badRequest([], f"Tidak ada area wisata dengan nama {turiareahotel_name}")

#         # Query semua hotel di area wisata
#         hotels = Hotel.query.filter_by(turiareahotel_id=tourist_area.id).all()
#         if not hotels:
#             return response.badRequest([], f"Tidak ada hotel untuk area wisata dengan nama {turiareahotel_name}")

#         # Format data hotel
#         hotel_data = []
#         for hotel in hotels:
#             try:
#                 # Pisahkan fasilitas dan simpan dalam array
#                 facilities = [f.strip() for f in (hotel.benefit or "").split(',') if f.strip()]

#                 hotel_data.append({
#                     "id": hotel.id,
#                     "name": hotel.name,
#                     "cost": float(hotel.cost or 0),
#                     "benefit": facilities,  # Mengirim array fasilitas
#                     "distance": float(hotel.distance or 0),
#                     "rating": float(hotel.rating or 0),
#                     "image_url": hotel.image_url
#                 })
#             except ValueError as ve:
#                 print(f"Data invalid untuk hotel {hotel.name}: {ve}")
#                 continue

#         # Bobot dan atribut kriteria
#         weights = {"cost": 0.2, "benefit": 0.3, "distance": 0.4, "rating": 0.1}
#         attributes = {"cost": "cost", "benefit": "benefit", "distance": "cost", "rating": "benefit"}

#         # Hitung ranking menggunakan SAW
#         ranked_hotels = saw_method(hotel_data, weights, attributes)
#         return response.success(ranked_hotels, "Ranking hotel berhasil dihitung")

#     except Exception as e:
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")
    
# def saw_method(data, weights, attributes):
#     try:
#         if not data:
#             raise ValueError("Data hotel kosong, tidak dapat menghitung SAW.")
#         if not np.isclose(sum(weights.values()), 1.0):
#             raise ValueError("Total bobot kriteria harus sama dengan 1.")

#         criteria_keys = list(weights.keys())
#         matrix = []
        
#         for hotel in data:
#             row = []
#             for criteria in criteria_keys:
#                 value = hotel.get(criteria, 0) or 0
#                 if isinstance(value, (int, float)):  # Hanya tambahkan nilai numerik
#                     row.append(float(value))
#                 else:
#                     row.append(0)  # Set nilai non-numerik (seperti list) menjadi 0
#             matrix.append(row)

#         matrix = np.array(matrix)

#         normalized_matrix = np.zeros_like(matrix, dtype=float)
#         for i, key in enumerate(criteria_keys):
#             if attributes[key] == "benefit":
#                 max_value = np.max(matrix[:, i])
#                 normalized_matrix[:, i] = matrix[:, i] / (max_value if max_value > 0 else 1)
#             elif attributes[key] == "cost":
#                 min_value = np.min(matrix[:, i])
#                 normalized_matrix[:, i] = (min_value / matrix[:, i]) if min_value > 0 else 1

#         preferences = normalized_matrix.dot(np.array(list(weights.values())))
#         for i, hotel in enumerate(data):
#             hotel["preference"] = preferences[i]

#         return sorted(data, key=lambda x: x["preference"], reverse=True)
    
#     except Exception as e:
#         raise ValueError(f"Terjadi kesalahan dalam metode SAW: {str(e)}")

# 300009

# def rank_hotels(turiareahotel_name):
#     try:
#         # Cari area wisata berdasarkan nama
#         tourist_area = TouristAreaHotel.query.filter_by(name=turiareahotel_name).first()
#         if not tourist_area:
#             return response.badRequest([], f"Tidak ada area wisata dengan nama {turiareahotel_name}")

#         # Query semua hotel di area wisata
#         hotels = Hotel.query.filter_by(turiareahotel_id=tourist_area.id).all()
#         if not hotels:
#             return response.badRequest([], f"Tidak ada hotel untuk area wisata dengan nama {turiareahotel_name}")

#         # Format data hotel
#         hotel_data = []
#         for hotel in hotels:
#             try:
#                 # Pisahkan fasilitas dan simpan dalam array
#                 facilities = [f.strip() for f in (hotel.benefit or "").split(',') if f.strip()]
                
#                 # Gabungkan fasilitas menjadi satu string dengan koma
#                 benefit_string = ", ".join(facilities)

#                 hotel_data.append({
#                     "id": hotel.id,
#                     "name": hotel.name,
#                     "cost": float(hotel.cost or 0),
#                     "benefit": benefit_string,  # Mengubah array menjadi string dengan koma
#                     "distance": float(hotel.distance or 0),
#                     "rating": float(hotel.rating or 0),
#                     "image_url": hotel.image_url
#                 })
#             except ValueError as ve:
#                 print(f"Data invalid untuk hotel {hotel.name}: {ve}")
#                 continue

#         # Bobot dan atribut kriteria
#         # weights = {"cost": 0.2778, "benefit": 0.2222, "distance": 0.2222, "rating": 0.2778}
#         # attributes = {"harga": "cost", "fasilitas": "benefit", "jarak": "cost", "bintang": "benefit"}
#         weights = {"cost": 0.28, "benefit": 0.22, "distance": 0.22, "rating": 0.28}
#         attributes = {"cost": "cost", "benefit": "benefit", "distance": "cost", "rating": "benefit"}

#         # Hitung ranking menggunakan SAW
#         ranked_hotels = saw_method(hotel_data, weights, attributes)
#         return response.success(ranked_hotels, "Ranking hotel berhasil dihitung")

#     except Exception as e:
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")


# def saw_method(data, weights, attributes):
#     try:
#         if not data:
#             raise ValueError("Data hotel kosong, tidak dapat menghitung SAW.")
#         if not np.isclose(sum(weights.values()), 1.0):
#             raise ValueError("Total bobot kriteria harus sama dengan 1.")

#         criteria_keys = list(weights.keys())
#         matrix = []

#         for hotel in data:
#             row = []
#             for criteria in criteria_keys:
#                 value = hotel.get(criteria, 0) or 0
#                 if isinstance(value, (int, float)):  # Hanya tambahkan nilai numerik
#                     row.append(float(value))
#                 else:
#                     row.append(0)  # Set nilai non-numerik (seperti list) menjadi 0
#             matrix.append(row)
#             print ('ini matrikk',(matrix))

#         matrix = np.array(matrix)

#         normalized_matrix = np.zeros_like(matrix, dtype=float)
#         for i, key in enumerate(criteria_keys):
#             if attributes[key] == "benefit":
#                 max_value = np.max(matrix[:, i])
#                 normalized_matrix[:, i] = matrix[:, i] / (max_value if max_value > 0 else 1)
#             elif attributes[key] == "cost":
#                 min_value = np.min(matrix[:, i])
#                 normalized_matrix[:, i] = (min_value / matrix[:, i]) if min_value > 0 else 1
#         print('ini matrik',(normalized_matrix))
#         preferences = normalized_matrix.dot(np.array(list(weights.values())))
#         for i, hotel in enumerate(data):
#             hotel["preference"] = preferences[i]

#         return sorted(data, key=lambda x: x["preference"], reverse=True)

#     except Exception as e:
#         raise ValueError(f"Terjadi kesalahan dalam metode SAW: {str(e)}")





# def saw_method(data, weights, attributes):
#     try:
#         if not data:
#             raise ValueError("Data hotel kosong, tidak dapat menghitung SAW.")
#         if not np.isclose(sum(weights.values()), 1.0):
#             raise ValueError("Total bobot kriteria harus sama dengan 1.")

#         criteria_keys = list(weights.keys())
#         matrix = []

#         for hotel in data:
#             row = []
#             for criteria in criteria_keys:
#                 value = hotel.get(criteria, 0) or 0
#                 if isinstance(value, (int, float)):  # Hanya tambahkan nilai numerik
#                     row.append(float(value))
#                 else:
#                     row.append(0)  # Set nilai non-numerik (seperti list) menjadi 0
#             matrix.append(row)
#             print('ini matrikk', matrix)

#         matrix = np.array(matrix)

#         normalized_matrix = np.zeros_like(matrix, dtype=float)
#         for i, key in enumerate(criteria_keys):
#             if attributes[key] == "benefit":
#                 max_value = np.max(matrix[:, i])
#                 normalized_matrix[:, i] = matrix[:, i] / (max_value if max_value > 0 else 1)
        
        
#             elif attributes[key] == "cost":
#                 min_value = np.min(matrix[:, i])
#                 normalized_matrix[:, i] = (min_value / matrix[:, i]) if min_value > 0 else 1
#         print('ini matrik', normalized_matrix)

#         preferences = normalized_matrix.dot(np.array(list(weights.values())))
#         for i, hotel in enumerate(data):
#             hotel["preference"] = preferences[i]

#         return sorted(data, key=lambda x: x["preference"], reverse=True)

#     except Exception as e:
#         raise ValueError(f"Terjadi kesalahan dalam metode SAW: {str(e)}")


# 32323



# def saw_method(data, weights, attributes):
#     try:
#         if not data:
#             raise ValueError("Data hotel kosong, tidak dapat menghitung SAW.")
#         if not np.isclose(sum(weights.values()), 1.0):
#             raise ValueError("Total bobot kriteria harus sama dengan 1.")

#         criteria_keys = list(weights.keys())
#         matrix = np.array([
#             [float(hotel.get(criteria, 0) or 0) for criteria in criteria_keys]
#             for hotel in data
#         ])

#         normalized_matrix = np.zeros_like(matrix, dtype=float)
#         for i, key in enumerate(criteria_keys):
#             if attributes[key] == "benefit":
#                 max_value = np.max(matrix[:, i])
#                 normalized_matrix[:, i] = matrix[:, i] / (max_value if max_value > 0 else 1)
#             elif attributes[key] == "cost":
#                 min_value = np.min(matrix[:, i])
#                 normalized_matrix[:, i] = (min_value / matrix[:, i]) if min_value > 0 else 1

#         preferences = normalized_matrix.dot(np.array(list(weights.values())))
#         for i, hotel in enumerate(data):
#             hotel["preference"] = preferences[i]

#         return sorted(data, key=lambda x: x["preference"], reverse=True)
#     except Exception as e:
#         raise ValueError(f"Error in SAW method: {str(e)}")
    

# def rank_hotels(turiareahotel_name):
#     try:
#         # Pertama, cari ID area wisata berdasarkan nama
#         tourist_area = TouristAreaHotel.query.filter_by(name=turiareahotel_name).first()
#         if not tourist_area:
#             return response.badRequest([], f"Tidak ada area wisata dengan nama {turiareahotel_name}")

#         # Query semua hotel di area wisata berdasarkan turiareahotel_id
#         hotels = Hotel.query.filter_by(turiareahotel_id=tourist_area.id).all()
#         if not hotels:
#             return response.badRequest([], f"Tidak ada hotel untuk area wisata dengan nama {turiareahotel_name}")

#         # Format data hotel
#         hotel_data = []
#         for hotel in hotels:
#             try:
#                 # Ganti representasi benefit dengan nilai numerik (misalnya, jumlah fasilitas)
#                 benefit_value = len(hotel.benefit.split(','))  # Jika benefit dipisah dengan koma
#                 hotel_data.append({
#                     "id": hotel.id,  # Pastikan 'id' sesuai dengan nilai hotel
#                     "name": hotel.name,
#                     "cost": float(hotel.cost or 0),
#                     "benefit": benefit_value,
#                     "distance": float(hotel.distance or 0),
#                     "rating": float(hotel.rating or 0),
#                     "image_url": hotel.image_url  # Tambahkan image_url
#                 })
#             except ValueError as ve:
#                 print(f"Data invalid untuk hotel {hotel.name}: {ve}")
#                 continue

#         # Bobot dan atribut (contoh dapat disesuaikan)
#         weights = {"cost": 0.2, "benefit": 0.3, "distance": 0.4, "rating": 0.1}
#         attributes = {"cost": "cost", "benefit": "benefit", "distance": "cost", "rating": "benefit"}

#         # Hitung ranking menggunakan SAW
#         ranked_hotels = saw_method(hotel_data, weights, attributes)
#         return response.success(ranked_hotels, "Ranking hotel berhasil dihitung")
    
#     except Exception as e:
#         print(f"Error in rank_hotels: {e}")
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")
    

# def rank_hotels(turiareahotel_name):
#     try:
#         # Pertama, cari ID area wisata berdasarkan nama
#         tourist_area = TouristAreaHotel.query.filter_by(name=turiareahotel_name).first()
#         if not tourist_area:
#             return response.badRequest([], f"Tidak ada area wisata dengan nama {turiareahotel_name}")

#         # Query semua hotel di area wisata berdasarkan turiareahotel_id
#         hotels = Hotel.query.filter_by(turiareahotel_id=tourist_area.id).all()
#         if not hotels:
#             return response.badRequest([], f"Tidak ada hotel untuk area wisata dengan nama {turiareahotel_name}")

#         # Format data hotel
#         hotel_data = []
#         for hotel in hotels:
#             try:
#                 # Ganti representasi benefit dengan nilai numerik (misalnya, jumlah fasilitas)
#                 benefit_value = len(hotel.benefit.split(','))  # Jika benefit dipisah dengan koma
#                 hotel_data.append({
#                     "id": hotel.id,  # Pastikan 'id' sesuai dengan nilai hotel
#                     "name": hotel.name,
#                     "cost": float(hotel.cost or 0),
#                     "benefit": benefit_value,
#                     "distance": float(hotel.distance or 0),
#                     "rating": float(hotel.rating or 0)
#                 })
#             except ValueError as ve:
#                 print(f"Data invalid untuk hotel {hotel.name}: {ve}")
#                 continue

#         # Bobot dan atribut (contoh dapat disesuaikan)
#         weights = {"cost": 0.3, "benefit": 0.4, "distance": 0.2, "rating": 0.1}
#         attributes = {"cost": "cost", "benefit": "benefit", "distance": "cost", "rating": "benefit"}

#         # Hitung ranking menggunakan SAW
#         ranked_hotels = saw_method(hotel_data, weights, attributes)
#         return response.success(ranked_hotels, "Ranking hotel berhasil dihitung")
    
#     except Exception as e:
#         print(f"Error in rank_hotels: {e}")
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")
    
# def rank_hotels(turiareahotel_id):
#     try:
#         # Query semua hotel di area wisata tertentu
#         hotels = Hotel.query.filter_by(turiareahotel_id=turiareahotel_id).all()
#         if not hotels:
#             return response.badRequest([], f"Tidak ada hotel untuk area wisata dengan ID {turiareahotel_id}")

#         # Format data hotel
#         hotel_data = []
#         for hotel in hotels:
#             try:
#                 # Ganti representasi benefit dengan nilai numerik (misalnya, jumlah fasilitas)
#                 benefit_value = len(hotel.benefit.split(','))  # Jika benefit dipisah dengan koma
#                 hotel_data.append({
#                     "id": hotel.id,  # Pastikan 'id' sesuai dengan nilai hotel
#                     "name": hotel.name,
#                     "cost": float(hotel.cost or 0),
#                     "benefit": benefit_value,
#                     "distance": float(hotel.distance or 0),
#                     "rating": float(hotel.rating or 0)
#                 })
#             except ValueError as ve:
#                 print(f"Data invalid untuk hotel {hotel.name}: {ve}")
#                 continue

#         # Bobot dan atribut (contoh dapat disesuaikan)
#         weights = {"cost": 0.3, "benefit": 0.4, "distance": 0.2, "rating": 0.1}
#         attributes = {"cost": "cost", "benefit": "benefit", "distance": "cost", "rating": "benefit"}

#         # Hitung ranking menggunakan SAW
#         ranked_hotels = saw_method(hotel_data, weights, attributes)
#         return response.success(ranked_hotels, "Ranking hotel berhasil dihitung")
    
#     except Exception as e:
#         print(f"Error in rank_hotels: {e}")
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")


# def saw_method(data, weights, attributes):
#     try:
#         # Extract criteria values
#         criteria_keys = list(weights.keys())
        
#         # Validasi dan konversi nilai data ke tipe float
#         matrix = np.array([
#             [float(hotel.get(criteria, 0) or 0) for criteria in criteria_keys]
#             for hotel in data
#         ])

#         # Normalize matrix
#         normalized_matrix = np.zeros_like(matrix, dtype=float)
#         for i, key in enumerate(criteria_keys):
#             if attributes[key] == "benefit":
#                 max_value = np.max(matrix[:, i])
#                 if max_value == 0:
#                     normalized_matrix[:, i] = 0  # Hindari pembagian dengan 0
#                 else:
#                     normalized_matrix[:, i] = matrix[:, i] / max_value
#             elif attributes[key] == "cost":
#                 min_value = np.min(matrix[:, i])
#                 if min_value == 0:
#                     normalized_matrix[:, i] = 0  # Hindari pembagian dengan 0
#                 else:
#                     normalized_matrix[:, i] = min_value / matrix[:, i]

#         # Calculate preference values
#         preferences = normalized_matrix.dot(np.array(list(weights.values())))
#         for i, hotel in enumerate(data):
#             hotel["preference"] = preferences[i]

#         # Sort by preference
#         ranked_data = sorted(data, key=lambda x: x["preference"], reverse=True)
#         return ranked_data
#     except Exception as e:
#         raise ValueError(f"Error in SAW method: {str(e)}")


# def rank_hotels(turiareahotel_id):
#     try:
#         # Query semua hotel di area wisata tertentu
#         hotels = Hotel.query.filter_by(turiareahotel_id=turiareahotel_id).all()
#         if not hotels:
#             return response.badRequest([], f"Tidak ada hotel untuk area wisata dengan ID {turiareahotel_id}")

#         # Format data hotel
#         hotel_data = []
#         for hotel in hotels:
#             try:
#                 hotel_data.append({
#                     "id": hotel.id,
#                     "name": hotel.name,
#                     "cost": float(hotel.cost or 0),
#                     "benefit": len(str(hotel.benefit)),  # Representasikan "benefit" sebagai angka
#                     "distance": float(hotel.distance or 0),
#                     "rating": float(hotel.rating or 0)
#                 })
#             except ValueError as ve:
#                 print(f"Data invalid untuk hotel {hotel.name}: {ve}")
#                 continue

#         # Bobot dan atribut (contoh dapat disesuaikan)
#         weights = {"cost": 0.3, "benefit": 0.4, "distance": 0.2, "rating": 0.1}
#         attributes = {"cost": "cost", "benefit": "benefit", "distance": "cost", "rating": "benefit"}


#         # Hitung ranking menggunakan SAW
#         ranked_hotels = saw_method(hotel_data, weights, attributes)

#         return response.success(ranked_hotels, "Ranking hotel berhasil dihitung")
#     except Exception as e:
#         print(f"Error in rank_hotels: {e}")
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")





    
# def saw_method(data, weights, attributes):
#     # Extract criteria values
#     criteria_keys = list(weights.keys())
#     matrix = np.array([[hotel[criteria] for criteria in criteria_keys] for hotel in data])

#     # Normalize matrix
#     normalized_matrix = np.zeros_like(matrix, dtype=float)
#     for i, key in enumerate(criteria_keys):
#         if attributes[key] == "benefit":
#             normalized_matrix[:, i] = matrix[:, i] / np.max(matrix[:, i])
#         elif attributes[key] == "cost":
#             normalized_matrix[:, i] = np.min(matrix[:, i]) / matrix[:, i]

#     # Calculate preference values
#     preferences = normalized_matrix.dot(np.array(list(weights.values())))
#     for i, hotel in enumerate(data):
#         hotel["preference"] = preferences[i]

#     # Sort by preference
#     ranked_data = sorted(data, key=lambda x: x["preference"], reverse=True)
#     return ranked_data


# def rank_hotels(turiareahotel_id):
#     try:
#         # Query semua hotel di area wisata tertentu
#         hotels = Hotel.query.filter_by(turiareahotel_id=turiareahotel_id).all()
#         if not hotels:
#             return response.badRequest([], f"Tidak ada hotel untuk area wisata dengan ID {turiareahotel_id}")

#         # Format data hotel
#         hotel_data = [
#             {
#                 "id": hotel.id,
#                 "name": hotel.name,
#                 "cost": hotel.cost,
#                 "benefit": str(hotel.benefit),
#                 "distance": hotel.distance,
#                 "rating": hotel.rating
#             }
#             for hotel in hotels
#         ]

#         # Bobot dan atribut (contoh dapat disesuaikan)
#         weights = {"cost": 0.3, "benefit": 0.3, "distance": 0.2, "rating": 0.2}
#         attributes = {"cost": "cost", "benefit": "benefit", "distance": "cost", "rating": "benefit"}

#         # Hitung ranking menggunakan SAW
#         ranked_hotels = saw_method(hotel_data, weights, attributes)

#         return response.success(ranked_hotels, "Ranking hotel berhasil dihitung")
#     except Exception as e:
#         print(e)
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")
# Ubah data hotel pada area wisata
# def edit_hotel(hotel_id):
#     try:
#         # Query hotel
#         hotel = Hotel.query.filter_by(id=hotel_id).first()
#         if not hotel:
#             return response.badRequest([], f"Hotel dengan ID {hotel_id} tidak ditemukan")

#         # Ambil data dari request
#         name = request.form.get('name')
#         cost = float(request.form.get('cost'))
#         benefit = str(request.form.get('benefit'))
#         distance = float(request.form.get('distance'))
#         rating = float(request.form.get('rating'))

#         # Update data hotel
#         hotel.name = name
#         hotel.cost = cost
#         hotel.benefit = benefit
#         hotel.distance = distance
#         hotel.rating = rating
#         db.session.commit()

#         return response.success({"id": hotel.id, "name": hotel.name}, "Hotel berhasil diperbarui")
#     except Exception as e:
#         print(e)
#         return response.badRequest([], f"Terjadi kesalahan: {str(e)}")