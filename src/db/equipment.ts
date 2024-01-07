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
  const addQuery = `INSERT INTO equipment (serial_num,type,available,monthly_value,rentalID,yard) VALUES(?,?,?,?,?,?)`;

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
          machine.yard,
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

const updateEquipment = (machine: Equipment) => {
  const addQuery = `UPDATE equipment SET available = ? ,monthly_value = ?, rentalID = ? , yard = ? WHERE serial_num = ?`;

  return new Promise((resolve, reject) => {
    connection.getConnection((err: QueryError, conn: PoolConnection) => {
      conn.query(
        addQuery,
        [
          machine.available,
          machine.monthly_value,
          machine.rentalID,
          machine.yard,
          machine.serial_num,
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

export default { selectAll, addEquipment, updateEquipment };
