# Firebase DocumentSnapshot Property Access Before Load

This repository demonstrates a common error when working with Firebase DocumentSnapshots: attempting to access a property before the snapshot has fully loaded.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected implementation using promises to ensure data is available before access.

## Problem

Asynchronous operations in Firebase (like fetching data from Firestore) return promises.  Accessing snapshot properties before the promise resolves leads to undefined values and potential errors.

## Solution

Always await the promise or use `.then()` to handle the resolved data to guarantee data availability before access.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the required dependencies (if any).
3. Run `node bug.js` to observe the error.
4. Run `node bugSolution.js` to see the corrected approach.