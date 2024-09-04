-- Customer Types Table
CREATE TABLE CustomerTypes (
	customerType_id INTEGER PRIMARY KEY AUTOINCREMENT,
    type_name TEXT NOT NULL,
    description TEXT
);


-- ServiceTypes Table
CREATE TABLE ServiceTypes (
    serviceType_id INTEGER PRIMARY KEY AUTOINCREMENT,
    type_name TEXT NOT NULL,
    description TEXT
);


-- Heros Table
CREATE TABLE offerings (
    hero_id INTEGER PRIMARY KEY AUTOINCREMENT,
    primary_text TEXT,
    secondary_text TEXT,
    button_text TEXT,
    image_url TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

-- Testimonials Table
CREATE TABLE Testimonials (
	testimonial_id INTEGER PRIMARY KEY AUTOINCREMENT,
	customer_id INTEGER,
	photo_url TEXT,
	content TEXT NOT NULL,
	rating INTEGER (1-5),
	serviceType_id INTEGER,
	date_submitted DATETIME,
	project_id INTEGER,
	approval_status BOOLEAN,
	comments TEXT,
	FOREIGN KEY (project_id) REFERENCES Customers(project_id)
);

-- Offerings Table
CREATE TABLE Offerings (
    offering_id INTEGER PRIMARY KEY AUTOINCREMENT,
    offering_name TEXT NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE
);


-- Customers Table
CREATE TABLE Customers (
    customer_id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    address_id INTEGER,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (address_id) REFERENCES Addresses(address_id)
);

-- Addresses Table
CREATE TABLE Addresses (
    address_id INTEGER PRIMARY KEY AUTOINCREMENT,
    street_address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    postal_code TEXT NOT NULL,
    country TEXT NOT NULL,
    latitude REAL,
    longitude REAL
);

-- PriceRanges Table
CREATE TABLE PriceRanges (
    priceRange_id INTEGER PRIMARY KEY AUTOINCREMENT,
    range_name TEXT NOT NULL,
    min_price INTEGER,
    max_price INTEGER
);

-- Projects Table
CREATE TABLE Projects (
    project_id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL,
    address_id INTEGER NOT NULL,
    serviceType_id INTEGER NOT NULL,
    priceRange_id INTEGER NOT NULL,
    project_name TEXT NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE,
    status TEXT CHECK(status IN ('Planned', 'In Progress', 'Completed', 'On Hold', 'Cancelled')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (address_id) REFERENCES Addresses(address_id) NOT NULL,
    FOREIGN KEY (serviceType_id) REFERENCES ServiceTypes(serviceType_id),
    FOREIGN KEY (priceRange_id) REFERENCES PriceRanges(priceRange_id)
);

-- Project Images Table
CREATE TABLE ProjectImages (
    image_id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    image_url TEXT NOT NULL,
    image_description TEXT,
    is_primary BOOLEAN DEFAULT FALSE,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(project_id)
);