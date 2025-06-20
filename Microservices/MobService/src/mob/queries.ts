export const getAll =
`
SELECT id, data
FROM mob
`

export const getCount =
`
SELECT COUNT(*) 
FROM mob
`


export const createMob = 
`
INSERT INTO mob(data) 
VALUES (
  jsonb_build_object(
    'name', $1::text,
    'size', $2::numeric,
    'image', $3::text,
    'description', $4::text
  )
)
RETURNING id, data;
;
`