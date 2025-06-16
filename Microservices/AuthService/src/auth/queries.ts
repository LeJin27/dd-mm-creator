
export const selectByCredentials = `
  SELECT id, data->>'email' AS email, data->>'name' AS name
  FROM member
  WHERE data->>'email' = $1 AND
  crypt($2, data->>'pwhash') = data->>'pwhash'
  AND (data->>'suspended' IS NULL OR data->>'suspended' != 'true');
`


export const selectUserById = `
  SELECT id, data->>'roles' AS roles
  FROM member
  WHERE id = $1
  AND (member.data->>'suspended' IS NULL OR member.data->>'suspended' != 'true');
`

export const selectUserInfoById = `
  SELECT id, data->>'email' AS email, data->>'name' AS name
  FROM member
  WHERE id = $1
  AND (member.data->>'suspended' IS NULL OR member.data->>'suspended' != 'true');
`