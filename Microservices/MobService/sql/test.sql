\connect mob

DELETE FROM mob;
INSERT INTO mob(id, data) 
VALUES (
  '50990564-ac2d-47b6-be71-f1f557878c0c',
  jsonb_build_object(
    'name','carrion_eater_B',
    'image', 'random_image_url',
    'size', 1,
    'description', 'not null'
  )
);