CREATE DATABASE questions_db;

USE questions_db;
CREATE TABLE mainDialogue
(
   id INT NOT NULL
   AUTO_INCREMENT,
   question VARCHAR
   (100) NOT NULL,
   option1 VARCHAR
   (100) NOT NULL,
   option2 VARCHAR
   (100) NOT NULL,
   PRIMARY KEY
   (id)
);

   CREATE TABLE adventureOne
   (
      id INT NOT NULL
      AUTO_INCREMENT,
   story VARCHAR
      (1000) NOT NULL,
   question VARCHAR
      (100) NOT NULL,
   option1 VARCHAR
      (100) NOT NULL,
   option2 VARCHAR
      (100) NOT NULL,
   PRIMARY KEY
      (id)
);

      CREATE TABLE adventureTwo
      (
         id INT NOT NULL
         AUTO_INCREMENT,
   story VARCHAR
         (1000) NOT NULL,
   question VARCHAR
         (100) NOT NULL,
   option1 VARCHAR
         (100) NOT NULL,
   option2 VARCHAR
         (100) NOT NULL,
   PRIMARY KEY
         (id)
);

         CREATE TABLE endings
         (
            id INT NOT NULL
            AUTO_INCREMENT,
   adventure VARCHAR
            (50) NOT NULL,
   story VARCHAR
            (5000) NOT NULL,
   PRIMARY KEY
            (id)
);
            CREATE TABLE recentEnding
            (
               id INT NOT NULL
               AUTO_INCREMENT,
   ending VARCHAR
               (50) NOT NULL,
   name VARCHAR
               (50) NOT NULL,
   PRIMARY KEY
               (id)
);