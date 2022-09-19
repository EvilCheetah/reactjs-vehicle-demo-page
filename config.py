from os import getenv
from pathlib import Path


def configure():
    if ( not Path(getenv('OUTPUT_DIRECTORY')).is_dir() ):
        Path(getenv('OUTPUT_DIRECTORY')).mkdir(parents = True, exist_ok = True)