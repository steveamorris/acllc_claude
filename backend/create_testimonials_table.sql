CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name TEXT NOT NULL,
    client_company TEXT,
    client_position TEXT,
    client_industry TEXT,
    testimonial_text TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    date_given DATE,
    project_name TEXT,
    project_duration TEXT,
    service_type TEXT,
    outcome TEXT,
    roi_metric TEXT,
    permission_to_use BOOLEAN DEFAULT 0,
    featured BOOLEAN DEFAULT 0,
    verified BOOLEAN DEFAULT 0,
    contact_email TEXT,
    contact_phone TEXT,
    social_media_handle TEXT,
    image_url TEXT,
    video_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    language TEXT DEFAULT 'English',
    original_language TEXT,
    translation_needed BOOLEAN DEFAULT 0,
    sentiment_score FLOAT,
    keywords TEXT,
    approved_by TEXT,
    approval_date DATE,
    display_order INTEGER,
    testimonial_source TEXT,
    follow_up_date DATE,
    notes TEXT
);

-- Trigger to update the updated_at timestamp
CREATE TRIGGER IF NOT EXISTS update_testimonials_timestamp 
AFTER UPDATE ON testimonials
BEGIN
    UPDATE testimonials SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;