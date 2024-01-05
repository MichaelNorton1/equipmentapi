import { Equipment } from "../models/equipment";
import { connection } from "../config/db";
import { QueryError, PoolConnection } from "mysql2";
import { resolve } from "path";

const selectAll = (): Promise<Equipment[]> => {
  return new Promise((resolve, reject) => {
    connection.getConnection((err: QueryError, conn: PoolConnection) => {
      conn.query("SELECT * from equipment", (err, result: Equipment[]) => {
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

const addEquipment = (machine: Equipment) => {
  const addQuery = `INSERT INTO equipment (serial_num,type,available,monthly_value,rentalID) VALUES(?,?,?,?,?)`;

  return new Promise((resolve, reject) => {
    connection.getConnection((err: QueryError, conn: PoolConnection) => {
      conn.query(
        addQuery,
        [
          machine.serial_num,
          machine.type,
          machine.available,
          machine.monthly_value,
          machine.rentalID,
        ],
        (err, result) => {
          conn.release();
          if (err) return reject(err);
          else return resolve(result);
        }
      );
    });
  });
};

export default { selectAll, addEquipment };
