CREATE TABLE countries (
  id          serial NOT NULL PRIMARY KEY,
  name        varchar(40) NOT NULL,
  population  integer,
  capital     varchar(40),
  area        integer
);

CREATE TABLE cities (
  id          serial NOT NULL PRIMARY KEY,
  name        varchar(40) NOT NULL,
  population  integer,
  country_id  integer
);

ALTER TABLE cities ADD CONSTRAINT country_city FOREIGN KEY (country_id) REFERENCES countries (id) MATCH FULL;
