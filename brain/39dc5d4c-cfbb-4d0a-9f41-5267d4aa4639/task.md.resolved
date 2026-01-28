# Mock All Backend APIs with LocalStorage

## Goal
Eliminate dependency on local server backend by mocking all API responses and storing data in localStorage (persistent in Electron).

## Tasks

### Phase 1: Analysis
- [x] Identify all API endpoints used by frontend
- [x] Understand current data flow (frontend → server → SQLite)
- [x] Plan localStorage schema

### Phase 2: Mock Implementation
- [ ] Create mock profiles storage in preload/renderer
- [ ] Mock `/api/profiles` CRUD endpoints
- [ ] Mock `/api/profiles/warmup-*` endpoints (already done in server)
- [ ] Mock other critical APIs

### Phase 3: Testing & Verification
- [ ] Test profile persistence after app restart
- [ ] Test all mocked features work correctly
- [ ] Verify no server dependency errors

## Notes
- localStorage is persistent in Electron (saved to disk)
- Location: `%APPDATA%\Veo3Studio\Local Storage\`
- Limit: ~5-10MB (sufficient for profiles)
