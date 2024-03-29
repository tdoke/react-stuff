1] Why RTKQuery?
https://epicreact.dev/my-state-management-mistake/
Server cache is not the same as UI state, and should be handled differently.

2] https://blog.scottlogic.com/2021/06/17/introduction-rtk-query.html

You may find that you have very little UI state to handle once you’ve removed the server cache. In that case, it may be worth considering whether you actually need Redux, or whether you only need something to handle the server cache, like React Query.

