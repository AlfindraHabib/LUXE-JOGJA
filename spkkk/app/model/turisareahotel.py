# from app import db
# # from app.model.chotel import Hotel


# class TouristAreaHotel(db.Model):
#     id = db.Column(db.Integer,primary_key=True,autoincrement=True)
#     name = db.Column(db.String(250),nullable = False)
    


#     def __repr__(self) :
#         return '<TouristAreaHotel {}>'.format(self.name)

from app import db
# from app.model.chotel import Hotel

class TouristAreaHotel(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(250), nullable=False)
    image_url = db.Column(db.Text, nullable=True)  # Menggunakan tipe data Text

    def __repr__(self):
        return '<TouristAreaHotel {}>'.format(self.name)
