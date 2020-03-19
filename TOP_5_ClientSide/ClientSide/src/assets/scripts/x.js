function a(which)
{
  var storage = localStorage;

  $("#description").html(storage.getItem(which+"_NavDesc"));

  $("#imgDesc").css("background","url("+storage.getItem(which+"_NavImgPath")+")");
  $("#imgDesc").css("background-position", "center");
  $("#imgDesc").css("background-size", "cover");
}
