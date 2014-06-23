# Assignment - 5
# Surekha Kotiyala

# A . File Extensions

# (1) Shape Files (shp):
  The shape file or Esri shape file, is a popular geospatial vector data format for geographic information system software.
  It is developed and regulated by Esri as a open specification for data interoperability among Esri and other GIS software 
  products.
  Shape files spatially describe vector features: points, lines, and polygons. It is used representing for example, water
  wells, rivers, and lakes. The format is as follows:
  •	.shp — shape format

# (2) OSM files:
  Open Street Map (OSM) is a collaborative project to create a free editable map for the world. Two major driving forces 
  behind the establishment and growth of OSM have been restrictions on use or availability of map information across much of
  the world and the advent of inexpensive portable satellite navigation devices.

# (3) GeoJson files:
  GeoJSON is an open standard format for encoding collections of simple geographical features along with their non-spatial 
  attributes using JavaScript Object Notation. The features include points (therefore addresses and locations), line strings
  (therefore streets, highways and boundaries), polygons (countries, provinces, tracts of land), and multi-part collections 
  of these types. GeoJSON features need not represent entities of the physical world only but also for mobile routing and 
  navigation apps, for example, it might describe their service coverage using GeoJSON.

# (4) GPX files:
  GPX, or GPS exchange format, is an XML file format for storing coordinate data. It can store waypoints, tracks, and routes
  in a way that is easy to process and convert to other forms. All GPS data used by Open Street Map is converted to GPX 
  format before it can be uploaded.

# (5) KML file:
  Keyhole Markup Language (KML). KML is a file format used to display geographic data in an Earth browser such as Google
  Earth, Google Maps, and Google Maps for mobile. KML uses a tag-based structure with nested elements and attributes and is
  based on the XML standard.

# (6) NMEA file:
  NMEA is a combined electrical and data specification for communication between marine electronics such as echo sounder,
  sonars, anemometer, gyrocompass, autopilot,GPS receivers and many other types of instruments. It has been defined by, and
  is controlled by, the National Marine Electronics Association.

# (7) CSV file:
  A comma-separated values (CSV) file stores tabular data in plain-text form. Plain text means that the file is a sequence
  of characters, with no data that has to be interpreted instead, as binary numbers. A CSV file consists of any number of
  records, separated by line breaks of some kind; each record consists of fields, separated by some other character or
  string, most commonly a literal comma or tab. Usually, all records have an identical sequence of fields.

# (8) WKT file:
  Well-known text (WKT) is a text markup language for representing vector geometry objects on a map, spatial reference
  systems of spatial objects and transformations between spatial reference systems.

# B . Software

# (1) ArcGis:
  A platform for designing and managing solutions through the application of geographic knowledge.
  
# (2) QGIS:
  QGIS (previously known as "Quantum GIS") is a cross-platform free and open source desktop geographic information systems
  (GIS) application that provides data viewing, editing, and analysis capabilities. A Free and Open Source Geographic
  Information System.

# (3) GPSBabel:
  GPSBabel is a cross-platform, free software to transfer routes, tracks, and waypoint data to and from consumer GPS units,
  and to convert between over a hundred types of GPS data formats.
  
# (4) GDAL:
  GDAL (Geospatial Data Abstraction Library) is a library for reading and writing raster geospatial data formats, and is 
  released under the permissive X/MIT style free software license by the Open Source Geospatial Foundation. It may also be
  built with a variety of useful command-line utilities for data translation and processing.

# C . Definitions

# (1) Point:
  A Point is a geometry that represents a single location in coordinate space.

# (2) Curve:
  A Curve is a one-dimensional geometry, usually represented by a sequence of points. Particular subclasses of Curve
  define the type of interpolation between points. Curve is a noninstantiable class.

# (3) LineString:
  A LineString is a Curve with linear interpolation between points.

# (4) MultiCurve:
  A MultiCurve is a geometry collection composed of Curve elements. MultiCurve is a noninstantiable class.

# (5) MultiLineStrings:
  A MultiLineString is a MultiCurve geometry collection composed of LineString elements.

# (6) Surface Polygons:
  A Polygon is a planar Surface representing a multisided geometry. It is defined by a single exterior boundary and zero
  or more interior boundaries, where each interior boundary defines a hole in the Polygon.
  A Surface is a two-dimensional geometry. It is a noninstantiable class. Its only instantiable subclass is Polygon.

# (7) MultiPolygons:
  A MultiPolygon is a MultiSurface object composed of Polygon elements.


# D . Relationships

# (1) Touches:
  Returns 1 or 0 to indicate whether g1 spatially touches g2. Two geometries spatially touch if the interiors of the
  geometries do not intersect, but the boundary of one of the geometries intersects either the boundary or the interior
  of the other.
  Syntax: Touches(g1,g2)

# (2) Crosses:
  Returns 1 if g1 spatially crosses g2. Returns NULL if g1 is a Polygon or a MultiPolygon, or if g2 is a Point or a 
  MultiPoint. Otherwise, returns 0.
  The main properties of crosses are:
    -The two geometries intersect
    -Their intersection results in a geometry that has a dimension that is one less than the maximum dimension of
      the two given geometries
    -Their intersection is not equal to either of the two given geometries
  Syntax: Crosses(g1,g2)

# (3) Within:
  Returns either 1 or 0 to indicate whether g1 is spatially within g2. 
  Syntax:  Within(g1,g2)

# (4) Overlaps:
  Returns either 1 or 0 to indicate whether g1 (geometry 1) spatially overlaps g2 (geometry 2). The term spatially 
  overlaps is used if two geometries intersect and their intersection results in a geometry of the same dimension but
  not equal to either of the given geometries.
  Syntax: Overlaps(g1,g2)

