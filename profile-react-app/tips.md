1] Profile for one particular user action
2] check number of commits 
3] Click on a particular commit, find components taking more time to render in flamegraph,ranking tab
reasons why a component might take more time to render
1] first check if a component really need to render in current commit, 
    some components rerender only because their parent has re-rendered, try to memoize them.
*fix slow render before re-render fix
https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render    
check how to use performance tab in chrome dev tool
