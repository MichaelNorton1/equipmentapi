import { connection } from "../config/db";
import { QueryError, PoolConnection } from "mysql2";
const signOn = (req) => {
  return new Promise((resolve, reject) => {
    connection.getConnection((err: QueryError, conn: PoolConnection) => {
      conn.query(
        "SELECT * from users WHERE email =?",
        [req.username],
        (err, result) => {
          conn.release();
          if (err) {
            return reject(err);
          } else {
            return resolve("Welcome");
          }
        }
      );
    });
  });
};

export default { signOn };
