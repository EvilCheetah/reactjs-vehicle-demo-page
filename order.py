import json
import rstr
import random
from os import getenv
from faker import Faker
from pathlib import Path
from datetime import datetime, timedelta

from check import check_number_of_entries
from file import save_dictionary_to_json


def generate_orders(number_of_entries = 1) -> None:
    check_number_of_entries(number_of_entries)

    with open( Path(getenv('OUTPUT_DIRECTORY')) / 'users.json', 'r' ) as fin:
        users = json.load(fin)
    
    with open( Path(getenv('OUTPUT_DIRECTORY')) / 'vehicle.json', 'r' ) as fin:
        vehicles = json.load(fin)

    fake = Faker('en_US')

    orders = [
        {
            'order_id':        rstr.xeger(r'\d{4}-\d{3}-\d{4}'),
            'owner_id':      ( random.choice(users) )['user_id'],
            'attached_unit': ( random.choice(vehicles) )['vehicle_id'],

            'final_delivery': {
                'location':   fake.address().split('\n')[-1],
                'timestamp':  fake.date_time_between_dates(
                    datetime.now() - timedelta(days = 1),
                    datetime.now()
                ).isoformat()
            }
        }
        for _ in range(number_of_entries)
    ]

    save_dictionary_to_json('orders', orders)