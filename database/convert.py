import sqlite3
import json

def fetch_data():
    
    conn = sqlite3.connect('NYC.db')
    cursor = conn.cursor()

    
    queries = {
        'Restaurants': 'SELECT * FROM Restaurants',
        'Events': 'SELECT * FROM ny_Events',
        'ThingsToDo': 'SELECT * FROM ThingsToDo',
        'PlacesToStay': 'SELECT * FROM PlacesToStay'
    }

    all_data = {}

    
    for key, query in queries.items():
        cursor.execute(query)
        rows = cursor.fetchall()
        
        columns = [column[0] for column in cursor.description]
        all_data[key] = [dict(zip(columns, row)) for row in rows]

    
    conn.close()

    
    with open('data.json', 'w') as json_file:
        json.dump(all_data, json_file, indent=4)

if __name__ == '__main__':
    fetch_data()
