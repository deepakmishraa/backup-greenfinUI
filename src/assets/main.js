<script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"
></script>;

alert("cvb");
document.querySelector(function () {
  // whenever we hover over a menu item that has a submenu
  document
    .querySelector("li.parent")
    .addEventListener("mouseover", function () {
      alert("abc");
      var $menuItem = document.querySelector(this),
        $submenuWrapper = document.querySelector("> .megadrop", $menuItem);

      // grab the menu item's position relative to its positioned parent
      var menuItemPos = $menuItem.position();

      // place the submenu in the correct position relevant to the menu item
      $submenuWrapper.css({
        top: menuItemPos.top,
        left: menuItemPos.left + Math.round($menuItem.outerWidth() * 0.75),
      });
    });
});
