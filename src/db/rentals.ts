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

export default { selectAll };
