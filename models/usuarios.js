const usuariosQueries ={
    insertUsuario: `
        INSERT INTO 
            usuarios(
              nombre,
              email,
              password,
              status
            )

        VALUES
          (?, ?, ?, ?)
    `,
    selectUsuarios: `
      SELECT
        *
      FROM
        usuarios
      WHERE
        status = 1
    `,
  updateUsuario:`
    UPDATE
      usuarios
    SET
      nombre=?,
      status=?
    WHERE
      email=?

  `
};

module.exports = usuariosQueries;