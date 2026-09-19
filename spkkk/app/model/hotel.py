# from app import db
# from app.model.turisareahotel import TouristAreaHotel



# class Hotel(db.Model):
    

#     id = db.Column(db.Integer,primary_key=True,autoincrement=True)
#     name = db.Column(db.String(100), nullable=False)
#     harga = db.Column(db.Float, nullable=False)  # Harga
#     fasilitas = db.Column(db.String(255), nullable=False)  # Fasilitas
#     jarak = db.Column(db.Float, nullable=False)  # Jarak
#     rating = db.Column(db.Float, nullable=False)  # Rating
#     turiareahotel_satu = db.Column(db.BigInteger,db.ForeignKey(TouristAreaHotel.id))


#     def __repr__(self) :
#         return '<Hotel {}>'.format(self.name)

from app import db
from app.model.turisareahotel import TouristAreaHotel

class Hotel(db.Model):
    __tablename__ = 'hotels'  # Tambahkan nama tabel jika perlu

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    cost = db.Column(db.Float, nullable=False)  # Mengganti 'harga' dengan 'cost'
    benefit = db.Column(db.String(255), nullable=False)  # Mengganti 'fasilitas' dengan 'benefit'
    distance = db.Column(db.Float, nullable=False)  # Mengganti 'jarak' dengan 'distance'
    rating = db.Column(db.Float, nullable=False)  # Rating
    image_url = db.Column(db.Text, nullable=True)  # Menggunakan tipe data Text
    hotel_url = db.Column(db.Text, nullable=True)  # Menggunakan tipe data Text
    turiareahotel_id = db.Column(db.Integer, db.ForeignKey(TouristAreaHotel.id,ondelete='CASCADE'))  # Mengganti nama kolom

    # Jika Anda ingin mendefinisikan relasi ke TouristAreaHotel
    turiareahotel = db.relationship('TouristAreaHotel', backref='hotels', lazy=True)

    def __repr__(self):
        return '<Hotel {}>'.format(self.name)