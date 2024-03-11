import { createPool } from "mysql2";
import * as dontenv from "dotenv";
import { QueryError, PoolConnection } from "mysql2";
dontenv.config();
export const connection = createPool({
  // prefer to use .env for environment variables to hide passwords
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

const equipmentTableCreationSQL: string = `
CREATE TABLE IF NOT EXISTS equipment (
  serial_num VARCHAR(100) NOT NULL,
  type VARCHAR(100) NOT NULL,
  available TINYINT(1) NOT NULL,
  monthly_value VARCHAR(100) DEFAULT NULL,
  rentalID INT DEFAULT NULL,
  yard VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (serial_num),
  KEY rentalId_idx (rentalID),
  CONSTRAINT rentalId FOREIGN KEY (rentalID) REFERENCES rentals (rentalID) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const rentalsTableCreationSQL: string = `
CREATE TABLE IF NOT EXISTS rentals (
  rentalID INT NOT NULL,
  customerID VARCHAR(45) NOT NULL,
  location VARCHAR(45) DEFAULT NULL,
  dateStart DATETIME DEFAULT NULL,
  dateEnd DATETIME DEFAULT NULL,
  notes LONGTEXT,
  active TINYINT NOT NULL,
  customerName VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (rentalID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const usersTableCreationSQL: string = `
CREATE TABLE IF NOT EXISTS users (
  email VARCHAR(255) DEFAULT NULL,
  hash BLOB,
  id INT NOT NULL,
  salt BLOB,
  PRIMARY KEY (id),
  UNIQUE KEY email_UNIQUE (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
`;

const equipmentInsertSQL: string = `
INSERT INTO equipment (serial_num, type, available, monthly_value, rentalID, yard)
VALUES 
  ('15m', 'vibro', 1, '3500', NULL, NULL),
  ('40VMxx01', 'vibro', 1, '40000', NULL, NULL),
  ('40VMxx02', 'vibro', 1, '40000', NULL, NULL),
  ('40VMxx03', 'vibro', 1, '40000', NULL, NULL),
  ('40VMxx04', 'vibro', 1, '40000', 4, NULL);
`;

const rentalsInsertSQL: string = `
INSERT INTO rentals (rentalID, customerID, location, dateStart, dateEnd, notes, active, customerName)
VALUES 
  (4, 'test', NULL, NULL, NULL, NULL, 0, 'Customer 1'),
  (5, 'custom', 'Tampa', '2024-01-06 00:00:00', NULL, 'custom', 1, 'Customer 2'),
  (7, 'custom', 'Tampa', '2024-01-06 00:00:00', NULL, 'custom', 0, 'Customer 4');
`;

const tables = [
  usersTableCreationSQL,
  rentalsTableCreationSQL,
  equipmentTableCreationSQL,
  rentalsInsertSQL,
  equipmentInsertSQL,
];

connection.getConnection((err: QueryError, conn: PoolConnection) => {
  tables.forEach((table) => {
    conn.query(table, (err, result) => {
      conn.release();
      if (err) {
        console.log(err);
      } else {
        return console.log(result);
      }
    });
  });
});
