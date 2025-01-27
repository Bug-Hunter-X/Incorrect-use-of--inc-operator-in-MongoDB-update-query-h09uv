```javascript
// Incorrect use of $inc operator in MongoDB update query
db.collection.updateOne({"_id": ObjectId("651234567890")}, {"$inc": {"count": 1}});
```