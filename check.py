def check_number_of_entries(number_of_entries: int) -> None:
    if (number_of_entries < 0):
        raise AttributeError('`number_of_entries` can NOT BE less than \'0\'')