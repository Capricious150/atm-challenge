-- CREATE TABLE
DROP TABLE IF EXISTS accounts;
CREATE TABLE accounts (
    account INTEGER PRIMARY KEY,
    name VARCHAR NOT NULL,
    amount DECIMAL NOT NULL,
    type VARCHAR NOT NULL,
    credit_limit INTEGER,
    last_withdraw_date VARCHAR,
    last_withdraw_sum INTEGER
);

ALTER TABLE accounts ADD CONSTRAINT verify_type
CHECK (type IN ('checking', 'savings', 'credit'));

-- LOAD DATAS
INSERT INTO accounts 
    (account, name, amount, type, credit_limit, last_withdraw_date, last_withdraw_sum)
VALUES
    (1, 'Johns Checking', 1000.00, 'checking',0, '3/21/2024', 400),
    (2, 'Janes Savings', 2000.00, 'savings',0, '3/26/2024', 300),
    (3, 'Jills Credit', -3000.00, 'credit', 10000, '11/11/2019', 200),
    (4, 'Bobs Checking', 40000.00, 'checking',0, '12/14/2023', 100),
    (5, 'Bills Savings', 50000.00, 'savings',0, '3/27/2024', 400),
    (6, 'Bills Credit', -60000.00, 'credit', 60000, '3/26/2024', 400),
    (7, 'Nancy Checking', 70000.00, 'checking',0,'3/26/2024', 300),
    (8, 'Nancy Savings', 80000.00, 'savings',0,'3/27/2024', 300),
    (9, 'Nancy Credit', -90000.00, 'credit', 100000, '01/01/2024', 200);