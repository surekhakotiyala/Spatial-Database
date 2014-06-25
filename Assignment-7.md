# Assignment - 7
# Surekha Kotiyala

# My Query

SELECT state_borders.SHAPE AS Poly, location, state
FROM  `earth_quakes` ,  `state_borders` 
WHERE state =  'Ohio'
AND CONTAINS( state_borders.SHAPE, earth_quakes.SHAPE ) ;

