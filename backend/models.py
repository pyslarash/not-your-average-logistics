import os
from dotenv import load_dotenv
from sqlalchemy import Column, Integer, String, Float, Text, Date, Time, ForeignKey
from sqlalchemy.orm import declarative_base, relationship, sessionmaker
from sqlalchemy import create_engine

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    first_name = Column(String(50), nullable=True)
    last_name = Column(String(50), nullable=True)
    email = Column(String(100), nullable=False)
    password = Column(String(100), nullable=False)
    profile_photo = Column(String(255), nullable=True)
    additional_info = Column(Text, nullable=True)

class Trip(Base):
    __tablename__ = 'trips'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    start_zip = Column(String(10), nullable=False)
    start_country = Column(String(50), nullable=False)
    start_date = Column(Date, nullable=False)
    start_time = Column(Time, nullable=False)
    destination_zip = Column(String(10), nullable=False)
    destination_country = Column(String(50), nullable=False)
    destination_date = Column(Date, nullable=False)
    destination_time = Column(Time, nullable=False)
    total_hours_driven = Column(Integer)
    total_minutes_driven = Column(Integer)
    average_mpg = Column(Float(precision=5, asdecimal=True))
    total_miles = Column(Float(precision=10, asdecimal=True))
    notes = Column(Text)
    user = relationship("User", backref="trips")

class Gas(Base):
    __tablename__ = 'gas'

    id = Column(Integer, primary_key=True)
    trip_id = Column(Integer, ForeignKey('trips.id'), nullable=False)
    gas_price = Column(Float(precision=6, asdecimal=True))
    gas_type = Column(String(20))
    gas_station_name = Column(String(100))
    gas_station_zip = Column(String(10))
    gas_station_country = Column(String(50))
    trip = relationship("Trip", backref="gas")

# Create the database and tables
if __name__ == '__main__':
    load_dotenv()

    db_username = os.getenv("DB_USERNAME")
    db_password = os.getenv("DB_PASSWORD")
    db_host = os.getenv("DB_HOST")
    db_port = os.getenv("DB_PORT")
    db_name = os.getenv("DB_NAME")

    engine = create_engine(f"mysql+mysqlconnector://{db_username}:{db_password}@{db_host}:{db_port}/{db_name}")
    Base.metadata.create_all(engine)

    # Create a session to interact with the database
    Session = sessionmaker(bind=engine)
    session = Session()

    # Commit the tables to the database
    session.commit()

    # Close the session
    session.close()