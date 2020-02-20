create database examen;

use examen;

create table clientes (
	id int(11) not null auto_increment,
    nombre varchar(45) default null,
    apellido_paterno varchar(45) default null,
    apellido_materno varchar(45) default null,
    rfc varchar(45) default null,
    primary key(id)
);

--describe clientes;

insert into clientes values(1, 'Dante', 'Dark', 'Sky', 'qweqwd'),
(2, 'Crita', 'Shine', 'Sky', 'dqewq'),
(3, 'Souma', 'Silver', 'Sky', '2g2wef');

--select * from clientes;

--ALTER USER 'root'@'localhost' IDENTIFIED BY '1234';


create table articulos (
	articulo int not null,
    descripcion varchar(100) default null,
    modelo varchar(50) default null,
    precio int default 0,
    existencia int default 0,
    primary key(articulo)
);

--select * from articulos;

insert into articulos values(1, 'espada', 'larga', 75, 1),
(2, 'escudo', 'redondo', 30, 5),
(3, 'peto', 'oscuro', 50, 7);

--CALL articuloEdit(1, 4, 'yamete', 'daishobu', 3, 5);

create table configuracionventa (
	id int(11) not null auto_increment,
    tasa int default 0,
    enganche int default 0,
    plaza int default 0,
    primary key(id)
);


--select * from configuracionventa;

create table polizas (
    folio int not null,
    cliente int not null,
    abonos int not null,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    primary key(folio),
    FOREIGN KEY (cliente)
    REFERENCES clientes(id)
);

--select * from polizas;

create table polizasdetalle (
    folio int not null,
    articulo int not null,
    cantidad int default 0,
    FOREIGN KEY (folio)
    REFERENCES polizas(folio),
    FOREIGN KEY (articulo)
    REFERENCES articulos(articulo)
);

--select * from polizasdetalle;

--select * from clientes;

-- SELECT EXISTS(
--          SELECT *
--          FROM configuracionventa);
         
-- select * from configuracionventa;         
-- CALL configuracionEdit(44, 12, 13);

--drop table configuracionventa;


