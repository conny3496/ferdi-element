module.exports = Ferdi => {
  function getMessages() {
    // const badges = document.querySelectorAll('.mx_RoomSublist:not(.mx_RoomSublist_hidden) .mx_RoomSublist_badgeContainer');
    const spaceBadges =  document.querySelectorAll('.mx_SpacePanel_badgeContainer .mx_NotificationBadge .mx_NotificationBadge_count');
    // Number of messages from People
    let directCount = 0;
    // if (badges.length > 0) {
    //   directCount = Ferdi.safeParseInt(badges[0].textContent);
    // }

    // Number of messages from Rooms
    let indirectCount = 0;
    // if (badges.length > 1) {
    //   indirectCount = Ferdi.safeParseInt(badges[1].textContent);
    // }

    // badges.forEach(badge => indirectCount = indirectCount + Ferdi.safeParseInt(badge.textContent));
    spaceBadges.forEach(function(badge){
      if (badge.parentElement.getAttribute('class').includes('mx_NotificationBadge_highlighted')) {
        directCount = directCount + Ferdi.safeParseInt(badge.textContent);
      } else {
        indirectCount = indirectCount + Ferdi.safeParseInt(badge.textContent);
      }
    });
    // set Ferdi badge
    Ferdi.setBadge(directCount, indirectCount);
  }
  Ferdi.loop(getMessages);
};
