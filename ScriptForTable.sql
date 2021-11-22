create database if not exists noteDB;
use noteDB;

create table noteTable(
id int not null primary key auto_increment,
task varchar(50) not null,
taskDescription text
);
insert into noteTable(task, taskDescription)
       values
       ('Зробити ДЗ', 'ДЗ ЛОГОС академія створити сервер'),
       ('Написати резюме', 'Створити резюме внісши нові Пет-проекти');
select * from noteTable;
