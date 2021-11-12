module.exports = {
  type: "postgres",
  host: "localhost",
  port: "5439",
  username: "postgres",
  password: "password",
  database: "postgres",
  synchronize: false,

  entities: ["dist/**/*.entidad{.ts,.js}"],
  migrationsTableName: "migration_history",
  migrations: ["src/infraestructura/migraciones/*.ts"],
  cli: {
    migrationsDir: "src/infraestructura/migraciones"
  }
};
