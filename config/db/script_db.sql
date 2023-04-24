CREATE DATABASE dbproduct collate 'utf8_general_ci'

CREATE TABLE productos (
    ID int not null primary key auto_increment,
    DESCRIPCION varchar(50) not null,
    PRECIO int(6),
    ESTADO boolean 

)