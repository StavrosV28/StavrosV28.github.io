function showSubMenu(menu) {
  // Hide all submenus
  document.getElementById('courseSubmenu').style.display = 'none';
  document.getElementById('browserSubmenu').style.display = 'none';
  document.getElementById('aboutSubmenu').style.display = 'none';

  // Show the selected submenu
  document.getElementById(menu + 'Submenu').style.display = 'block';
}
function displayEmail() {
  const emailElement = document.getElementById('contactEmail');
  const email = 'STAVROS.VARVATSOULIS65@qmail.cuny.edu'

  emailElement.innerHTML = 'Email: ' + '<a href ="mailto:' + email + '">' + email +  '</a>';
}
function displayDescription() {
  const descriptionElement = document.getElementById('aboutDescription');

  // Your description
  const descriptionText = 'Hello! My name is Stavros Varvatsoulis, I am currently enrolled in CSCI 355(Web and Internet Technologies). ' +
                        'I am currently a senior at Queens College majoring in Computer Science and an aspiring software developer!' +
                        'Feel free to press the "Contact Me" button to reach out to me for any inquiries or collaboration opportunities.';
  descriptionElement.innerHTML = '<p>' + descriptionText + '</p>';
}
function showAttributes(attribute) {
  var attributesElement = document.getElementById('browserAttributes');
  var attributesText = '';
  if (attribute === 'navigator') {
    attributesText = 'Navigator attributes:<br>' +
      'AppName: ' + navigator.appName + '<br>' +
      'Product: ' + navigator.product + '<br>' +
      'AppVersion: ' + navigator.appVersion + '<br>' +
      'UserAgent: ' + navigator.userAgent + '<br>' +
      'Platform: ' + navigator.platform + '<br>' +
      'Language: ' + navigator.language;
  } else if (attribute === 'window') {
    attributesText = 'Window attributes:<br>' +
      'Inner Height: ' + window.innerHeight + '<br>' +
      'Inner Width: ' + window.innerWidth;
  } else if (attribute === 'screen') {
    attributesText = 'Screen attributes:<br>' +
      'Width: ' + screen.width + '<br>' +
      'Height: ' + screen.height + '<br>' +
      'Available Width: ' + screen.availWidth + '<br>' +
      'Available Height: ' + screen.availHeight + '<br>' +
      'Color Depth: ' + screen.colorDepth + '<br>' +
      'Pixel Depth: ' + screen.pixelDepth;
  } else if (attribute === 'location') {
    attributesText = 'Location attributes:<br>' +
      'Href: ' + location.href + '<br>' +
      'Hostname: ' + location.hostname + '<br>' +
      'Pathname: ' + location.pathname + '<br>' +
      'Protocol: ' + location.protocol;
  } else if (attribute === 'geolocation') {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                attributesText = 'Geolocation attributes:<br>' +
                    'Latitude: ' + position.coords.latitude + '<br>' +
                    'Longitude: ' + position.coords.longitude;
                attributesElement.innerHTML = '<p>' + attributesText + '</p>';
            },
            function (error) {
                // Error callback
                attributesText = 'Geolocation error: ' + error.message;
                // Set the error message as innerHTML to display it
                attributesElement.innerHTML = '<p>' + attributesText + '</p>';
            }
        );
    } else {
        attributesText = 'Geolocation is not supported in this browser.';
        // Set the message as innerHTML to display it
        attributesElement.innerHTML = '<p>' + attributesText + '</p>';
    }
}
  attributesElement.innerHTML = '<p>' + attributesText + '</p>';
}
