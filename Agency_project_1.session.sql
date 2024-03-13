--  SELECT DATABASE();


-- create table AgencyRegistration(
--     RegisterID INT PRIMARY KEY not null,
--     ARdatetime DATETIME not null,
--     StoreName VARCHAR(500) not null,
--     FirstName VARCHAR(500) not null,
--     LastName VARCHAR(500) not null,
--     Mobile INT not null,
--     Email VARCHAR(200) not null,
--     User_Password VARCHAR(500) not null, 
--     Re_Password VARCHAR(500) not null

    
-- );

-- select * FROM AgencyRegistration;



-- drop table AgencyRegistration;





-- User Login table



-- CREATE TABLE LoginUser
-- (
--   RegisterID INT      NOT NULL, -- foreign key
--   LoginID    INT      NOT NULL, -- primary key
--   LoginDateTime   DATETIME NOT NULL,
--   User_id    varchar(500)  NOT NULL,
--   User_password   varchar(500)  NOT NULL,
--   PRIMARY KEY (LoginID)
-- );





-- CREATE  TABLE Producst_List
-- (
--   RegisterID      INT              NOT NULL,
--   Product_ID      INT              NOT NULL,
--   Product_Name    VARCHAR(500)         NOT NULL,
--   Price           DOUBLE PRECISION NOT NULL,
--   Category        varchar(500)          NOT NULL,
--   InStockQunatity INT              NOT NULL,
--   PRIMARY KEY (Product_ID,RegisterID)
-- );

-- alter table Producst_List ADD PRIMARY KEY (Product_ID, RegisterID);


-- CREATE TABLE Billing
-- (
--   RegisterID  INT       NOT NULL,
--   Bill_id     INT       NOT NULL,
--   StoreName   VARCHAR(500)   NOT NULL,
--   Billing_DateTime    DATETIME NOT NULL,
--   Total_Price DOUBLE PRECISION    NOT NULL,
--   PRIMARY KEY (Bill_id)
-- );



-- CREATE TABLE Products_store
-- (
--   Bill_id    INT       NOT NULL,
--   Product_id INT NOT NULL,
--   Product_store_id INT       NOT NULL ,
--   Price      DOUBLE PRECISION       NOT NULL,
--   Products   VARCHAR(500)   NOT NULL,
--   PRIMARY KEY (Product_store_id, Product_id, Bill_id)
-- );


-- ALTER TABLE LoginUser
--   ADD CONSTRAINT FK_AgencyRegistration_TO_Login_User
--     FOREIGN KEY (RegisterID)
--     REFERENCES AgencyRegistration(RegisterID);

-- ALTER TABLE Producst_List
--   ADD CONSTRAINT FK_AgencyRegistration_TO_Producst_List
--     FOREIGN KEY (RegisterID)
--     REFERENCES AgencyRegistration (RegisterID);

-- ALTER TABLE Billing
--   ADD CONSTRAINT FK_AgencyRegistration_TO_Billing
--     FOREIGN KEY (RegisterID)
--     REFERENCES AgencyRegistration (RegisterID);

-- ALTER TABLE Products_store
--   ADD CONSTRAINT FK_Billing_TO_Products_store
--     FOREIGN KEY (Bill_id)
--     REFERENCES Billing (Bill_id);

-- ALTER TABLE Products_store
--   ADD CONSTRAINT FK_Producst_List_TO_Products_store
--     FOREIGN KEY (Product_id)
--     REFERENCES Producst_List (Product_id); 



-- select * FROM AgencyRegistration;

-- select * from Billing;

-- SELECT * FROM LoginUser;

-- SELECT * from Producst_List;

-- select * from Products_store;


