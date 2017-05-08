

/* Courtesy of jQuery UI website —effects documentation */


// run the currently selected effect
function runEffect(element) {
  // get effect type from
  var selectedEffect = $("#effectTypes").val();

  // Most effect types need no options passed by default
  var options = {};
  // some effects have required parameters
  if (selectedEffect === "fade") {
    options = { percent: 50 };
  } else if (selectedEffect === "size") {
    options = { to: { width: 200, height: 60 } };
  }

  // Run the effect
  $(element).toggle("fade", options, 100);
}

function close(element) {
  // get effect type from
  var selectedEffect = $("#effectTypes").val();

  // Most effect types need no options passed by default
  var options = {};
  // some effects have required parameters
  if (selectedEffect === "fade") {
    options = { percent: 50 };
  } else if (selectedEffect === "size") {
    options = { to: { width: 200, height: 60 } };
  }

  // Run the effect
  $(element).hide("fade", options, 100);
}

function open(element) {
  // get effect type from
  var selectedEffect = $("#effectTypes").val();

  // Most effect types need no options passed by default
  var options = {};
  // some effects have required parameters
  if (selectedEffect === "fade") {
    options = { percent: 50 };
  } else if (selectedEffect === "size") {
    options = { to: { width: 200, height: 60 } };
  }

  // Run the effect
  $(element).show("fade", options, 100);
}


