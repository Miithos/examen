CREATE DEFINER=`root`@`localhost` PROCEDURE `configuracionEdit`(
    IN tz INT,
	IN engz INT,
    IN plz INT
)
BEGIN 

	DECLARE estado INT DEFAULT 0;
    DECLARE idaux INT DEFAULT 0;
	SELECT 
    EXISTS( SELECT 
            *
        FROM
            configuracionventa)
INTO estado;
	IF estado = 0 THEN
		INSERT INTO configuracionventa (tasa, enganche, plaza)
        VALUES (tz, engz, plz);
	ELSE
		SELECT id
		FROM configuracionventa ORDER BY id DESC LIMIT 1 INTO idaux;
		UPDATE configuracionventa 
SET 
    tasa = tz,
    enganche = engz,
    plaza = plz
WHERE
    id = idaux;
    END IF;
END