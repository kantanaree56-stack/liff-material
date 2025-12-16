const LIFF_ID = "2008660204-oLmmiiNa";

window.onload = async () => {
  await liff.init({ liffId: LIFF_ID });
  if (!liff.isLoggedIn()) {
    liff.login();
    return;
  }

  const profile = await liff.getProfile();
  document.getElementById("username").value = profile.displayName;
  window.lineUserId = profile.userId;
};

function submitForm() {
  fetch("https://script.google.com/macros/library/d/1HAWGGjkIhDiMR6NTZcN3n_hHhB9n4zw1LqMhhmuI5VcJrmtVOSFOtRhi/1", {
    method: "POST",
    body: JSON.stringify({
      userId: window.lineUserId,
      username: document.getElementById("username").value,
      project: document.getElementById("project").value,
      material: document.getElementById("material").value,
      date: document.getElementById("date").value
    })
  })
}

