import { RentedUnits } from "../models/rentedUnits";
import { connection } from "../config/db";
import { QueryError, PoolConnection } from "mysql2";

const selectAll = (): Promise<RentedUnits[]> => {
  return new Promise((resolve, reject) => {
    connection.getConnection((err: QueryError, conn: PoolConnection) => {
      conn.query("SELECT * from rentals", (err, result: RentedUnits[]) => {
        conn.release();
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      });
    });
  });
};

const addToRental = (update: { rentalID: string; serial_num: string }) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE equipment SET rentalID = ? WHERE serial_num = ?`;

    connection.getConnection((err: QueryError, conn: PoolConnection) => {
      conn.query(query, [update.rentalID, update.serial_num], (err, result) => {
        conn.release();
        if (err) {
          console.log(err);
          return reject(err);
        } else {
          return resolve(result);
        }
      });

      if (err) console.log(err);
    });
  });
};

const add = (rental: RentedUnits) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO rentals (rentalID,customerID,location,dateStart,dateEnd,notes,active) VALUES(?,?,?,?,?,?,?)`;

    connection.getConnection((err: QueryError, conn: PoolConnection) => {
      conn.query(
        query,
        [
          rental.rentalID,
          rental.customerID,
          rental.location,
          rental.dateStarted,
          rental.expextEndDate,
          rental.notes,
          rental.active,
          rental.customerName,
        ],
        (err, result) => {
          conn.release();
          if (err) {
            console.log(err);
            return reject(err);
          } else {
            return resolve(result);
          }
        }
      );

      if (err) console.log(err);
    });
  });
};

const changeDetails = (rental: RentedUnits) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE rentals SET location = ? , dateStart = ? , dateEnd = ? ,notes = ?, active=?  WHERE rentalID = ?`;

    connection.getConnection((err: QueryError, conn: PoolConnection) => {
      conn.query(
        query,
        [
          rental.location,
          rental.dateStarted,
          rental.expextEndDate,
          rental.notes,
          rental.active,
          rental.rentalID,
          rental.customerName,
        ],
        (err, result) => {
          conn.release();
          if (err) {
            console.log(err);
            return reject(err);
          } else {
            return resolve(result);
          }
        }
      );

      if (err) console.log(err);
    });
  });
};

export default { selectAll, addToRental, add, changeDetails };
