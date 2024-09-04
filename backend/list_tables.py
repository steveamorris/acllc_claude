import sqlite3
import os

# Get the directory of the current script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the database file
db_path = os.path.join(script_dir, 'crud_app.db')

# Connect to the SQLite database
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Get the list of tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()

print("Tables in the database:")
for table in tables:
    print(table[0])
    # Get the table schema
    cursor.execute(f"PRAGMA table_info({table[0]})")
    columns = cursor.fetchall()
    print("Columns:")
    for column in columns:
        print(f"  {column[1]} ({column[2]})")
    print()

# Close the connection
conn.close()