
from app.model.user import User
from flask import request
from app.model import response
from app import  db
from werkzeug.utils import secure_filename
from flask_jwt_extended import create_access_token, create_refresh_token
from datetime import timedelta


def buatAdmin():
    try:
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')
        level = request.form.get('level')

        # Cek apakah email sudah terdaftar
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return response.badRequest([], 'Email sudah terdaftar!')

        # Jika email belum terdaftar, lanjutkan dengan registrasi
        users = User(name=name, email=email, level=level)
        users.setPassword(password)
        db.session.add(users)
        db.session.commit()

        return response.success('', 'Sukses Registrasi!')
    except Exception as e:
        print(e)


def singleObject(user):
    return {
        'id': user.id,
        'email': user.email,
        'name': user.name,
        'level': user.level.name if user.level else None,  # Ambil nama level jika ada
    }

def login():
    try:
        email = request.form.get("email")
        password = request.form.get("password")

        user = User.query.filter_by(email=email).first()

        if not user:
            return response.badRequest([], "Email tidak terdaftar")

        if not user.checkPassword(password):
            return response.badRequest([], "Kombinasi password salah")

        if not user.is_admin:  # Tambahkan logika untuk membedakan admin
            return response.badRequest([], "Anda tidak memiliki akses admin")

        data = singleObject(user)

        expires = timedelta(days=7)
        expires_refresh = timedelta(days=7)

        access_token = create_access_token(identity=data, fresh=True, expires_delta=expires)
        refresh_token = create_refresh_token(identity=data, expires_delta=expires_refresh)

        return response.success({
            "data": data,
            "access_token": access_token,
            "refresh_token": refresh_token,
        }, "Sukses Login Admin!")

    except Exception as e:
        print(f"Error during admin login: {e}")
        return response.badRequest([], "Terjadi kesalahan saat login.")


def logout():
    try:
        # Tidak perlu melakukan apa-apa di server (tidak perlu menyimpan token di blacklist)
        return response.success({
            "message": "Logout berhasil!"
        }), 200
    except Exception as e:
        return response.badRequest({
            "message": "Terjadi kesalahan saat logout."
        }), 500

# def login():
#     try:
#         email = request.form.get('email')
#         password = request.form.get('password')

#         user = User.query.filter_by(email=email).first()

#         if not user:
#             return response.badRequest([], 'Email tidak terdaftar')
        
#         if not user.checkPassword(password):
#             return response.badRequest([], 'Kombinasi password salah')
        
#         # Jika login berhasil, kembalikan data pengguna
#         return response.success(singleObject(user), 'Login berhasil')
        
#     except Exception as e:
#         print(e)
#         return response.error('Terjadi kesalahan saat login', 500)
    


# def buatAdmin():
#     try:
#         name = request.form.get('name')
#         email = request.form.get('email')
#         password = request.form.get('password')
#         level = request.form.get('level')

#         users = User(name=name, email=email, level=level)
#         users.setPassword(password)
#         db.session.add(users)
#         db.session.commit()

#         return response.success('', 'Sukses Registrasi!')
#     except Exception as e:
#         print(e)

# def login():
#     try:
#         email = request.form.get('email')
#         password = request.form.get('password')

#         user = User.query.filter_by(email=email).first()

#         if not user:
#             return response.badRequest([], 'Email tidak terdaftar')
        
#         if not user.checkPassword(password):
#             return response.badRequest([], 'Kombinasi password salah')
        
#     except Exception as e:
#         print(e)