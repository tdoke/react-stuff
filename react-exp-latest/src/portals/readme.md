1] to be used while creation of modals, popups, tooltips, showing results pane of typeahead search component.
2] anytime when child has to grow out of parent div and u cant handle that using z-index and absolute.
3] using portal api u can tell react to render a child component in different div other than root, but events emmiting from child will still be passed to parent.its like parent and child are not part of same dom tree, but dom events emitted by child will reach to parent (through a portal).
4] using portal, u can render a child component in a div outside dom tree, but event bubbling will be kept intact and css issues wont be there as child component is in a div outside dom tree
5] one can add applications header and footer in portals
<div id="app-header"></div>
<div id="root"></div><!-- REACT ROOT -->
<div id="app-footer"></div>
