fetch("/components/navbar/navbar-auth/navbar-auth.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });
