import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "jasur001",
  host: "localhost",
  database: "ussd_servise_v2",
});

async function fetch(Sql: string, ...params: any) {
  const cilent = await pool.connect();
  try {
    const {
      rows: [row],
    } = await cilent.query(Sql, params.length ? params : null);
    return row;
  } catch (error) {
    console.log(error);
  } finally {
    await cilent.release();
  }
}

async function fetchAll(Sql: string, ...params: any) {
  const cilent = await pool.connect();
  try {
    const { rows } = await cilent.query(Sql, params.length ? params : null);
    return rows;
  } catch (error) {
    console.log(error);
  } finally {
    await cilent.release();
  }
}

export {
  fetch,
  fetchAll,
};
