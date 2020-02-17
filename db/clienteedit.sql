CREATE DEFINER=`root`@`localhost` PROCEDURE `clienteEdit`(
	IN idclient INT,
    IN nom VARCHAR(45),
    IN appaterno VARCHAR(45),
    IN apmaterno VARCHAR(45),
    IN rfcclient VARCHAR(45)
)
BEGIN 
	IF idclient = 0 THEN
		INSERT INTO clientes (nombre, apellido_paterno, apellido_materno, rfc)
        VALUES (nom, appaterno, apmaterno, rfcclient);
        SET idclient = last_insert_id();
	ELSE
		UPDATE clientes
        SET
			nombre = nom,
			apellido_paterno = appaterno,
			apellido_materno = apmaterno,
			rfc = rfcclient
            WHERE id = idclient;
				
    END IF;
    
    SELECT idclient as id;
END