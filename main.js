function requestDeviceMotionEventPermission() {
  // window.alert = function (e) {
  //     Alert.postMessage(e);
  // }

  console.log("requestDeviceMotionEventPermission - called.");
  if (typeof DeviceMotionEvent !== "undefined") {
    // Controlla se è necessario richiedere i permessi (iOS 13+)
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      return DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          alert(permissionState);

          console.log(
            "requestDeviceMotionEventPermission - permissionState: ",
            permissionState
          );
          return permissionState;
        })
        .catch((err) =>
          console.warn("requestDeviceMotionEventPermission - Error: ", err)
        );
    } else {
      alert("NO");

      console.warn("nessun permesso necessario.");
      return Promise.resolve("granted");
    }
  } else {
    alert("Il tuo dispositivo non supporta il rilevamento del movimento :(");
    return Promise.reject("unsupported");
  }
}
