"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var timer = null;
  var LOCK_COUNTDOWN_MINUTES = 5;
  var NO_USER_ACTION_COUNTDOWN_MINUTES = 1; // eslint-disable-next-line no-restricted-globals

  self.addEventListener('message', handleLockCountdown, false);

  function handleLockCountdown(e) {
    switch (e.data) {
      case 'start-countdown':
        clearTimeout(timer);
        timer = setTimeout(triggerEndOfTimeMessage, LOCK_COUNTDOWN_MINUTES * 60 * 1000);
        return;

      case 'stop-countdown':
        clearTimeout(timer);
        return;

      case 'start-no-user-action-countdown':
        clearTimeout(timer);
        timer = setTimeout(triggerEndOfTimeInActionModalMessage, NO_USER_ACTION_COUNTDOWN_MINUTES * 60 * 1000);
        return;

      default:
        return;
    }
  }

  function triggerEndOfTimeMessage() {
    // eslint-disable-next-line no-restricted-globals
    self.postMessage('end-of-countdown');
  }

  function triggerEndOfTimeInActionModalMessage() {
    // eslint-disable-next-line no-restricted-globals
    self.postMessage('end-of-action-modal-countdown');
  }
};

exports.default = _default;