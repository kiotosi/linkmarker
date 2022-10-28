# Progress

## Frontend
### UI
- [ ] Implement sidebar
  - [ ] Implement navigation _\[SidebarNavigation.vue\]_
  - [ ] Implement search _\[SidebarSearch.vue\]_
  - [ ] Implement tag list _\[SidebarTagList.vue\]_

- [ ] Implement link manager
  - [ ] Implement link manager item _\[LinkManagerScreenItem.vue\]_

- [ ] Implement account screen _\[ProfileScreen.vue\]_
  - [ ] Implement log in screen _\[ProfileLogin.vue\]_
  - [ ] Implement log out screen  _\[ProfileLogout.vue\]_

- [ ] Implement about screen _\[AboutScreen.vue\]_
  - [ ] Add license _\[AboutLicense.vue\]_
  - [ ] Add information about frameworks _\[AboutFrameworks.vue\]_
  - [ ] Add info about developer _\[AboutDeveloper.vue\]_

### UX
- [ ] Local Storage
  - [ ] Add setters for link list to localStorage
  - [ ] Add getters for link list to localStorage
  - [ ] Add automatic fetching from localStorage to component _\[LinkManagerScreen.vue\]_
  - [ ] Add tag list to localStorage
  - [ ] Add ability to remove tag from sidebar _\[SidebarTagList.vue\]_

- [ ] Server integration
  - [ ] Add fetching link list from server
  - [ ] Add fetching meta-info about links from server _\[App.vue\]_

- [ ] Search
  - [ ] Add ability to search through the link list _\[SidebarSearch.vue\], \[LinkManagerScreen.vue\]_

- [ ] Router
  - [ ] Add router for main screen _\[LinkManagerScreen.vue\], \[App.vue\]_
  - [ ] Add router for profile screen _\[ProfileScreen.vue\], \[App.vue\]_
  - [ ] Add router for about screen _\[AboutScreen.vue\], \[App.vue\]_

## Server
  
### OAuth
- [ ] OAuth
  - [ ] Google
  - [ ] Apple

### Routers
- [ ] Routers
  - [ ] Add router for meta-info fetching
  - [ ] Add router for profile login/logout
  - [ ] Add router for link list fetching

### Database
- [ ] Add ability to fetch data from Firebase
  - [ ] Tags
  - [ ] Link list

## Test
- [ ] Frontend
  - [ ] Unit
  - [ ] E2E

- [ ] Server
  - [ ] Unit
  - [ ] Mocks