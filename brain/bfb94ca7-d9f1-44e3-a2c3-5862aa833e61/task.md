# Task Checklist - Debugging VIP Status and Black Screen

- [ ] Analyze app source for more robust VIP bypass points
    - [x] Search for `localStorage.getItem('currentUser')`
    - [x] Search for `JSON.parse(localStorage.getItem(`
    - [ ] Look for functions that validate the subscription status
- [/] Investigate potential overwriting of `currentUser`
    - [x] Check if backend calls are forced on startup
- [/] Debug the "Black Screen" (Loading Spinner)
    - [ ] Identify which API endpoint the app is stuck on
    - [x] Implement robust VIP bypass in `index-DLxlB05E.js`
- [x] Add backend logging in `server.js` for black screen diagnosis
- [x] Disable "Đăng ký ngay" button in frontend
- [x] Repack `app.asar` and verify changes

- [ ] Verify fix with user
