import string
import random
from faker import Faker
from typing import Dict
from check import check_number_of_entries

from file import save_dictionary_to_json


def generate_users(number_of_entries = 1) -> Dict:
    check_number_of_entries(number_of_entries)

    fake = Faker('en_US')

    users = [
        {
            'user_id':  fake.md5(),
            'name': {
                        'first':            fake.first_name(),
                        'middle':        f'{random.choice(string.ascii_uppercase)}.',
                        'last':             fake.last_name()
            },
            'phone_number': {
                'number':    (fake.phone_number()).split('x')[0],
                'extension': (fake.phone_number()).split('x')[-1]
            }
        }
        for _ in range(number_of_entries)
    ]

    save_dictionary_to_json('users', users)
    