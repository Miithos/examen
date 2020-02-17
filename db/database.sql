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

describe clientes;

insert into clientes values(1, 'Dante', 'Dark', 'Sky', 'qweqwd'),
(2, 'Crita', 'Shine', 'Sky', 'dqewq'),
(3, 'Souma', 'Silver', 'Sky', '2g2wef');

select * from clientes;

ALTER USER 'root'@'localhost' IDENTIFIED BY '1234';