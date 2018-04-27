CREATE TABLE STATE(
	name TEXT PRIMARY KEY,
	CONSTRAINT CHK_STATE CHECK(name == 'Requested' 
							OR name == 'Confirmed' 
							OR name == 'Commenced' 
							OR name == 'Completed')
);

CREATE TABLE BOATREQUEST(
	timestamp DATETIME PRIMARY KEY,
	startLocation TEXT,
	destination TEXT,
	requestedTugboats INT,
	state TEXT NOT NULL
	FOREIGN KEY (state) REFERENCES STATE(name)
);
	
INSERT INTO STATE VALUES("Requested")
INSERT INTO STATE VALUES("Confirmed")
INSERT INTO STATE VALUES("Commenced")
INSERT INTO STATE VALUES("Completed")