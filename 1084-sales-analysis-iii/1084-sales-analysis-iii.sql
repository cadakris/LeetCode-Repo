# Write your MySQL query statement below
SELECT S.product_id, P.product_name
FROM Product P
JOIN Sales S
ON P.product_id = S.product_id
GROUP BY S.product_id
HAVING MIN(S.sale_date) >= '2019-01-01' AND MAX(S.sale_date) <= '2019-03-31';