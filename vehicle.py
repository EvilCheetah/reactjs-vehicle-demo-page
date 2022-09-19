from datetime import datetime, timedelta
import json
from os import getenv
from pathlib import Path
import rstr
import string
import random
from typing import Dict
from faker import Faker

from file import save_dictionary_to_json


def generate_reserve(fake: Faker):
    if ( random.random() < 0.1 ):
        return {}

    with open( Path(getenv('OUTPUT_DIRECTORY')) / 'users.json' ) as fin:
        users = json.load(fin)

    return {
        'by':      random.choice(users)['user_id'],
        'until': fake.date_time_between_dates(
            datetime.now(),
            datetime.now() + timedelta(minutes = 15)
        ).isoformat()
    }


def generate_status_information(fake: Faker):
    return {
        'status_information': {
            'status':       random.choice(['Available', 'Not Available', 'Under the Load']),
            'location':     fake.address().split('\n')[-1],
            'last_updated': fake.date_time_between_dates(
                datetime.now() - timedelta(days = 1),
                datetime.now(),
            ).isoformat()
        }
    }


def generate_supply_equipment():
    '''
    Generates needed information for Straps and Blankets
    '''
    return {
        'supplies': {
            'blankets':  random.randrange(30),
            'straps':    random.randrange(30),
            'load_bars': random.randrange(30)
        }
    }


def generate_driver_equipment():
    equipment = [
        'Vaccine',
        'Haz-Mat',
        'X-Border'
    ]

    return {
        "equipment": random.sample(
            equipment, 
            random.randint(1, len( equipment))
        )
    }


def generate_equipment_sample():
    equipment = [
        "Air Ride",
        "Curtain Side",
        "Dock High",
        "Dolly",
        "E-Track",
        "Haz-Mat",
        "Lift Gate",
        "Pallet Jack",
        "PPE",
        "Ramps",
        "Side Door",
        "Temp Control",
    ]

    return {
        "equipment": random.sample(
            equipment, 
            random.randint(1, len( equipment))
        )
    }


def generate_vehicle_information(fake: Faker) -> Dict:
    document = random.choice([
        'Cargo Van', 'Sprinter Van', 'Small Straight', 'Large Straight'
    ])

    match document:
        case 'Cargo Van':
            return {
                'vehicle_type': 'Cargo Van',
                'box_dimensions': {
                    'length': random.randint(100, 150),
                    'width':  random.randint(48, 52),
                    'height': random.randint(69, 70)
                },
                'door_dimensions': {
                    'width':  random.randint(48, 52),
                    'height': random.randint(69, 70)
                },
                'payload': random.randrange(1200, 2000),
                **generate_equipment_sample(),
                **generate_supply_equipment()
            }

        case 'Sprinter Van':
            return {
                'vehicle_type': 'Sprinter Van',
                'box_dimensions': {
                    'length': random.randint(150, 170),
                    'width':  random.randint(48, 52),
                    'height': random.randint(70, 75)
                },
                'door_dimensions': {
                    'width':  random.randint(48, 52),
                    'height': random.randint(70, 75)
                },
                'payload': random.randrange(2500, 3600),
                **generate_equipment_sample(),
                **generate_supply_equipment()
            }

        case 'Small Straight':
            return {
                'vehicle_type': 'Small Straight',
                'box_dimensions': {
                    'length': random.randint(155, 180),
                    'width':  random.randint(91, 98),
                    'height': random.randint(73, 95)
                },
                'door_dimensions': {
                    'width':  random.randint(91, 98),
                    'height': random.randint(73, 95)
                },
                'payload': random.randrange(3700, 5000),
                **generate_equipment_sample(),
                **generate_supply_equipment()
            }

        case 'Large Straight':
            return {
                'vehicle_type': 'Large Straight',
                'box_dimensions': {
                    'length': random.randint(260, 265),
                    'width':  random.randint(97, 98),
                    'height': random.randint(94, 102)
                },
                'door_dimensions': {
                    'width':  random.randint(97, 98),
                    'height': random.randint(94, 102)
                },
                'payload': random.randrange(6000, 9000),
                **generate_equipment_sample(),
                **generate_supply_equipment()
            }


def generate_vehicles(number_of_entries = 1) -> None:
    fake = Faker('en_US')

    vehicles = [
        {
            'vehicle_id':                   fake.sha1(),
            'unit_number':                  rstr.rstr(string.digits, 3),
            'is_active':                    random.choice([True, False]),
            'reserve': generate_reserve(fake),
            'drivers': [
                {
                    'id':                   fake.ssn(),
                    'name': {
                        'first':            fake.first_name(),
                        'middle':        f'{random.choice(string.ascii_uppercase)}.',
                        'last':             fake.last_name()
                    },
                    'phone_number':         fake.phone_number().split('x')[0],
                    **generate_driver_equipment()
                }
                for _ in range( random.randint(1, 2) )
            ],
            **generate_vehicle_information(fake),
            **generate_status_information(fake)
        }
        for _ in range(number_of_entries)
    ]

    save_dictionary_to_json('vehicle', vehicles)