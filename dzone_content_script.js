var dzone_url = '';
var dzone_title = '';
var dzone_style = '2';

function getTabDetails() {
  chrome.tabs.getSelected(null, function(tab) {
    dzone_url = (tab.url);
    dzone_title = (tab.title);
  });
}

function replaceSubmitToDzone() {
  $(function () {
    var iframe = $("iframe");
    iframe.ready(function () {
      alert('it loads');
      $('body', iframe.document).append("test test test");
      $('.minivwidgetsubmit', iframe.document).html('dupa');
    });
  });  
}