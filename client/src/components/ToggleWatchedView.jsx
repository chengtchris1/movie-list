import React from 'react';

const ToggleWatchedView = (props) => (
  <div id="watchedToggleArea">
   <button type="button" disabled={!props.showOnlyWatched} onClick={props.handleWatchViewSwitch}>To watch</button>
   <button type="button" disabled={props.showOnlyWatched} onClick={props.handleWatchViewSwitch}>Watched</button>
  </div>
)
export default ToggleWatchedView