The corrected code uses async/await to ensure the promise is resolved before accessing the data.  This is a cleaner and more readable method compared to the .then() approach. 

```javascript
async function getDocumentData(docRef) {
  try {
    const docSnapshot = await docRef.get();
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      console.log('Document data:', data.name); // Access data after the promise is resolved
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error fetching document:', error);
  }
}
```