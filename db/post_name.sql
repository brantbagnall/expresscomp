-- COMP 66G
insert into test (first_name, last_name) values ($1, $2)
returning *;