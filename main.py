from config import configure
from dotenv import load_dotenv
from order import generate_orders
from users import generate_users
from vehicle import generate_vehicles


def main():
    entries = 20

    load_dotenv()
    configure()
    generate_users(entries * 2)
    generate_vehicles(entries * 4)
    generate_orders(entries)


if __name__ == '__main__':
    try:
        main()
    
    except KeyboardInterrupt:
        print('Programs was terminated...')

    except Exception as e:
        print(e)