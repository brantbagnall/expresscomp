update test set first_name = 'Edited', last_name = 'Edited'
where id = $1;
select * from test where id = $1;