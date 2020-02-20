CREATE DEFINER=`root`@`localhost` PROCEDURE `articuloEdit`(
    IN op INT,
	IN art INT,
    IN descrip VARCHAR(45),
    IN model VARCHAR(45),
    IN prc VARCHAR(45),
    IN exist VARCHAR(45)
)
BEGIN 
	IF op = 1 THEN
		INSERT INTO articulos (articulo, descripcion, modelo, precio, existencia)
        VALUES (art, descrip, model, prc, exist);
	ELSE
		UPDATE articulos
        SET
			descripcion = descrip,
			modelo = model,
			precio = prc,
			existencia = exist
            WHERE articulo = art;
    END IF;

    SELECT art as artic;
END