import json
from os import getenv
from pathlib import Path
from typing import Dict


def save_dictionary_to_json(filename: str, data: Dict) -> None:
    with open(Path(getenv('OUTPUT_DIRECTORY')) / f'{filename}.json', 'w') as fout:
        json.dump(data, fout)