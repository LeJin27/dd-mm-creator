INSERT INTO member(data, id)
VALUES(
  jsonb_build_object(
    'email', 'molly@books.com',
    'pwhash', crypt('mollymember', gen_salt('bf')),
    'name', 'Molly Member',
    'roles', '["member"]',
    'deleted', false
  ),
  '6a81eb24-6e4c-495d-ad9e-d22c103b3c67'
);

INSERT INTO member(data, id)
VALUES(
  jsonb_build_object(
    'email', 'dave@books.com',
    'pwhash', crypt('dave', gen_salt('bf')),
    'name', 'Dave',
    'roles', '["member"]',
    'deleted', false
  ),
  '6a81eb24-6e4c-495d-ad9e-d22c103b3c66'
);